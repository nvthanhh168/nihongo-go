// ============================================================================
// PHÒNG TEST ĐỌC PHÁT ÂM TIẾNG NHẬT N5 (AI SPEECH RECOGNITION TEST ENGINE)
// 1. Thuật toán so khớp tiếng Nhật đa tầng:
//    - Chuyển Katakana -> Hiragana (Unicode mapping offset 0x60)
//    - Chuyển Romaji -> Hiragana (nếu nhận diện trả về ký tự Latinh)
//    - Xử lý trợ từ ngữ âm: は (wa), を (o), へ (e)
//    - Kiểm tra lỗi đặc thù người Việt: Trường âm (ー, う, い) & Âm ngắt (っ)
//    - Duyệt qua toàn bộ maxAlternatives (5 kết quả) và tính điểm Levenshtein + LCS
// 2. Hai chế độ luyện đọc:
//    - Mode 'word': Đọc Từ Vựng Đơn (Kanji + Furigana + Romaji + Pitch Accent)
//    - Mode 'sentence': Đọc Cả Câu Ví Dụ N5 (Toàn bộ câu giao tiếp chuẩn)
// 3. Giao diện trực quan:
//    - Sơ đồ Pitch Accent cao-thấp trực quan
//    - Hiệu ứng sóng âm Equalizer khi thu âm
//    - So sánh chi tiết từng âm: Xanh lá (đúng), Đỏ (lệch/sai), Cam (thiếu âm)
//    - Tích hợp trực tiếp Cô Giáo AI Khó Tính Tanaka mổ xẻ lỗi sai
// ============================================================================

class SpeechTestModule {
  constructor() {
    this.recognition = null;
    this.isListening = false;
    this.currentWord = null;
    this.currentIndex = 0;
    this.wordList = [];
    this.hasSpeechApi = false;
    this.mode = 'word'; // 'word' hoặc 'sentence'
    this.safetyTimer = null;
    this.currentLesson = null;
    this.lessonPassedWords = new Set();

    this.initSpeechRecognition();
  }

  // Khởi tạo SpeechRecognition với ngôn ngữ ja-JP
  initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.hasSpeechApi = true;
      try {
        this.recognition = new SpeechRecognition();
        this.recognition.lang = 'ja-JP'; // Ưu tiên nhận diện giọng chuẩn Nhật Bản
        this.recognition.continuous = false;
        this.recognition.interimResults = false;
        this.recognition.maxAlternatives = 5; // Lấy tối đa 5 phương án để so khớp đa tầng

        this.recognition.onstart = () => {
          this.isListening = true;
          this.updateMicUI(true);
          window.soundSystem.playMicStart();
          if (window.mascot) {
            const promptMsg = this.mode === 'word' 
              ? `Sensei đang lắng nghe bạn đọc từ 「${this.currentWord.hiragana}」... 🎧`
              : `Sensei đang lắng nghe cả câu: 「${this.currentWord.example?.hira || this.currentWord.exampleJa || ''}」... 🎧`;
            window.mascot.setMood('listening', promptMsg, 0);
          }

          // Bộ hẹn giờ an toàn: Tự động ngắt sau 9 giây nếu người dùng im lặng
          clearTimeout(this.safetyTimer);
          this.safetyTimer = setTimeout(() => {
            if (this.isListening) {
              try { this.recognition.stop(); } catch (e) {}
            }
          }, 9000);
        };

        this.recognition.onresult = (event) => {
          clearTimeout(this.safetyTimer);
          this.handleSpeechResult(event);
        };

        this.recognition.onerror = (event) => {
          clearTimeout(this.safetyTimer);
          this.handleSpeechError(event);
        };

        this.recognition.onend = () => {
          clearTimeout(this.safetyTimer);
          this.isListening = false;
          this.updateMicUI(false);
        };
      } catch (err) {
        console.warn('[SpeechTest] Lỗi khởi tạo SpeechRecognition:', err);
      }
    } else {
      console.warn('[SpeechTest] Trình duyệt không hỗ trợ Web Speech API.');
    }
  }

  // Chuyển đổi giữa 2 chế độ: 'word' (Từ vựng) vs 'sentence' (Cả câu)
  setMode(mode) {
    if (mode !== 'word' && mode !== 'sentence') return;
    this.mode = mode;

    const btnWord = document.getElementById('mode-btn-word');
    const btnSentence = document.getElementById('mode-btn-sentence');
    if (btnWord) btnWord.classList.toggle('active', mode === 'word');
    if (btnSentence) btnSentence.classList.toggle('active', mode === 'sentence');

    if (window.soundSystem) window.soundSystem.playPop();

    // Tải lại hiển thị theo chế độ mới
    if (this.currentWord) {
      this.loadWord(this.currentWord);
    }
  }

  // Nạp danh sách từ vựng từ data.js
  setWordList(words) {
    this.wordList = words || [];
    this.currentIndex = 0;
    if (this.wordList.length > 0) {
      this.loadWord(this.wordList[this.currentIndex]);
    }
    this.renderLessonSpeechMissionBanner();
  }

  // --------------------------------------------------------------------------
  // NẠP TỪ VỰNG THEO BÀI HỌC (NHIỆM VỤ 3: KHẢO BÀI PHÁT ÂM BÀI 1 -> 25)
  // --------------------------------------------------------------------------
  loadLesson(lessonNumber) {
    const lNum = parseInt(lessonNumber, 10);
    this.currentLesson = lNum;
    this.lessonPassedWords = new Set();
    this.currentIndex = 0;

    const targetLvl = lNum >= 26 ? 'N4' : 'N5';
    const lesson = window.LESSONS_DATA ? window.LESSONS_DATA.getLesson(targetLvl, lNum) : null;
    const words = (lesson && lesson.vocab && lesson.vocab.length > 0) ? lesson.vocab : (targetLvl === 'N4' ? (window.JLPT_DATA?.n4 || []) : (window.JLPT_DATA?.n5 || []));

    this.setWordList(words);
    this.renderLessonSpeechMissionBanner();

    if (window.mascot) {
      window.mascot.setCharacter('sensei');
      window.mascot.say(`🎙️ Khảo bài phát âm Bài ${lNum}: ${lesson?.topicVi || ''}! Em hãy đọc to rõ ràng ít nhất 3 từ đạt trên 60% nhé! 👩‍🏫`, 4000);
    }
  }

  // Hiển thị thanh Quick Lesson Selector và Banner tiến độ nhiệm vụ 3
  renderLessonSpeechMissionBanner() {
    let slot = document.getElementById('speech-quick-selector-slot');
    if (!slot) {
      const card = document.getElementById('speech-test-card');
      if (card) {
        slot = document.createElement('div');
        slot.id = 'speech-quick-selector-slot';
        card.insertBefore(slot, card.firstChild);
      }
    }
    if (!slot) return;

    const quickSelectorHtml = window.renderQuickLessonSelector ? window.renderQuickLessonSelector(this.currentLesson, 'speech-test') : '';

    let missionBannerHtml = '';
    if (this.currentLesson) {
      const targetLvl = this.currentLesson >= 26 ? 'N4' : 'N5';
      const lessonObj = window.LESSONS_DATA ? window.LESSONS_DATA.getLesson(targetLvl, this.currentLesson) : null;
      const passedCount = this.lessonPassedWords ? this.lessonPassedWords.size : 0;
      const isDone = passedCount >= 3;

      missionBannerHtml = `
        <div class="lesson-mission-active-banner">
          <div class="banner-mission-left">
            <span class="banner-icon">🎙️</span>
            <div>
              <strong>Nhiệm vụ 3: Khảo Bài Phát Âm Bài ${this.currentLesson} - ${lessonObj?.topicVi || ''}</strong>
              <p>Mục tiêu: Đọc đúng tối thiểu 3 từ (≥ 60%). Đã đạt: <strong>${passedCount} / 3 từ</strong></p>
            </div>
          </div>
          <div class="mission-status-pill ${isDone ? 'done' : 'pending'}">
            ${isDone ? '✅ ĐÃ ĐẠT NHIỆM VỤ 3' : `⏳ ĐÃ ĐẠT ${passedCount}/3 TỪ`}
          </div>
        </div>
      `;
    }

    slot.innerHTML = quickSelectorHtml + missionBannerHtml;
  }

  // Hiển thị từ vựng / câu ví dụ lên giao diện
  loadWord(word) {
    this.currentWord = word;
    const cardEl = document.getElementById('speech-test-card');
    if (!cardEl || !word) return;

    // Ẩn kết quả chấm điểm của từ trước
    const resultBox = document.getElementById('speech-result-box');
    if (resultBox) {
      resultBox.className = 'speech-result-box hidden';
      resultBox.innerHTML = '';
    }

    // 1. Hiển thị chữ Kanji lớn có Furigana trên đầu bằng thẻ <ruby>
    const kanjiEl = document.getElementById('speech-target-kanji');
    const hiraganaEl = document.getElementById('speech-target-hiragana');
    const rubyDisplay = document.getElementById('speech-ruby-display');

    if (kanjiEl && hiraganaEl) {
      kanjiEl.textContent = word.kanji || word.hiragana;
      hiraganaEl.textContent = word.hiragana || '';
    }

    // Nếu từ thuần Hiragana (không có chữ Hán) thì không cần hiển thị ruby furigana lặp lại
    if (rubyDisplay) {
      if (!word.kanji || word.kanji === word.hiragana) {
        rubyDisplay.innerHTML = `<span class="pure-hiragana-text">${word.hiragana}</span>`;
      } else {
        rubyDisplay.innerHTML = `${word.kanji}<rt>${word.hiragana}</rt>`;
      }
    }

    // 2. Romaji, Hán Việt
    const romajiEl = document.getElementById('speech-target-romaji');
    const meaningEl = document.getElementById('speech-target-meaning');
    const hanvietEl = document.getElementById('speech-target-hanviet');
    const mistakeEl = document.getElementById('speech-target-mistake');
    const categoryEl = document.getElementById('speech-word-category');
    const counterEl = document.getElementById('speech-word-counter');

    if (romajiEl) romajiEl.textContent = word.romaji || '';
    if (meaningEl) meaningEl.textContent = word.meaning || word.vietnamese || '';
    if (hanvietEl) {
      if (word.hanViet) {
        hanvietEl.textContent = `【Hán Việt: ${word.hanViet}】`;
        hanvietEl.style.display = 'inline-block';
      } else {
        hanvietEl.style.display = 'none';
      }
    }

    if (categoryEl) {
      categoryEl.textContent = word.category || 'N5 Cốt Lõi';
    }

    if (counterEl) {
      counterEl.textContent = `${this.currentIndex + 1} / ${this.wordList.length}`;
    }

    // 3. Trực quan hóa Pitch Accent Trọng âm Cao - Thấp
    this.renderPitchAccent(word);

    // 4. Hiển thị Khung Câu Ví Dụ N5
    this.renderSentenceBox(word);

    // 5. Cảnh báo lỗi phát âm hay gặp
    if (mistakeEl) {
      if (word.commonMistake) {
        mistakeEl.innerHTML = `⚠️ <strong>Lỗi thường gặp:</strong> ${word.commonMistake}`;
        mistakeEl.style.display = 'block';
      } else {
        mistakeEl.style.display = 'none';
      }
    }

    // 6. Hình vẽ hoạt hình SVG minh họa
    const visualEl = document.getElementById('speech-target-visual');
    if (visualEl) {
      visualEl.innerHTML = window.getVocabIllustration(word);
    }

    // Nhắc nhở từ linh vật
    if (window.mascot) {
      const modeText = this.mode === 'word' 
        ? `Hãy bấm Micro và đọc: "${word.hiragana}" (${word.romaji}) nhé! 🎙️`
        : `Thử thách đọc cả câu: "${word.example?.ja || word.exampleJa || word.hiragana}"! 🎙️`;
      window.mascot.say(modeText, 3500);
    }
  }

  // Vẽ sơ đồ Pitch Accent trực quan theo chuẩn từ điển tiếng Nhật Tokyo
  renderPitchAccent(word) {
    const pitchTextEl = document.getElementById('speech-target-pitch');
    const pitchGraphEl = document.getElementById('speech-pitch-graph');
    if (!pitchTextEl || !pitchGraphEl) return;

    const rawPitch = (word.pitch || '[0]').toString();
    const match = rawPitch.match(/\[(\d+)\]/);
    const pitchNum = match ? parseInt(match[1], 10) : 0;

    let pitchTypeName = 'Heiban (平板 - Bằng phẳng)';
    if (pitchNum === 1) pitchTypeName = 'Atamadaka (頭高 - Đầu cao)';
    else if (pitchNum > 1) pitchTypeName = `Nakadaka (中高 - Cao ở âm ${pitchNum})`;

    pitchTextEl.textContent = `Trọng âm: [${pitchNum}] • ${pitchTypeName}`;

    // Tách các âm (Morae), gắn âm ghép (ゃ, ゅ, ょ, っ) vào ký tự liền trước
    const hira = word.hiragana || '';
    const morae = [];
    const smallKana = 'ゃゅょぁぃぅぇぉゎャュョァィゥェォ';

    for (let i = 0; i < hira.length; i++) {
      const ch = hira[i];
      if (i > 0 && smallKana.includes(ch)) {
        morae[morae.length - 1] += ch;
      } else {
        morae.push(ch);
      }
    }

    if (morae.length === 0) {
      pitchGraphEl.innerHTML = '';
      return;
    }

    // Xác định cao (H) hay thấp (L) cho từng mora theo quy tắc Tokyo:
    // [0]: L - H - H - H...
    // [1]: H - L - L - L...
    // [k >= 2]: L - H - H (k âm) - L...
    const levels = [];
    for (let i = 1; i <= morae.length; i++) {
      if (pitchNum === 0) {
        levels.push(i === 1 ? 'L' : 'H');
      } else if (pitchNum === 1) {
        levels.push(i === 1 ? 'H' : 'L');
      } else {
        levels.push(i === 1 ? 'L' : (i <= pitchNum ? 'H' : 'L'));
      }
    }

    // Tạo mã SVG sơ đồ nốt nhạc bậc thang
    const stepWidth = 42;
    const svgWidth = Math.max(160, morae.length * stepWidth + 24);
    const svgHeight = 58;
    const yHigh = 16;
    const yLow = 38;

    let pathD = '';
    let circlesSvg = '';
    let textsSvg = '';

    levels.forEach((lvl, idx) => {
      const cx = 18 + idx * stepWidth;
      const cy = (lvl === 'H') ? yHigh : yLow;

      if (idx === 0) {
        pathD += `M ${cx} ${cy}`;
      } else {
        pathD += ` L ${cx} ${cy}`;
      }

      const dotColor = (lvl === 'H') ? '#E03131' : '#1864AB';
      circlesSvg += `<circle cx="${cx}" cy="${cy}" r="5" fill="${dotColor}" stroke="#FFF" stroke-width="2"/>`;
      textsSvg += `<text x="${cx}" y="52" font-size="12" font-weight="700" text-anchor="middle" fill="#495057">${morae[idx]}</text>`;

      // Đánh dấu điểm rơi trọng âm nếu có
      if (pitchNum > 0 && idx === pitchNum - 1) {
        circlesSvg += `<line x1="${cx + 8}" y1="${cy - 3}" x2="${cx + 8}" y2="${cy + 8}" stroke="#E03131" stroke-width="2" stroke-linecap="round"/>`;
      }
    });

    pitchGraphEl.innerHTML = `
      <svg width="${svgWidth}" height="${svgHeight}" class="pitch-svg-chart">
        <line x1="8" y1="${yHigh}" x2="${svgWidth - 8}" y2="${yHigh}" stroke="#E9ECEF" stroke-dasharray="3,3" stroke-width="1.5"/>
        <line x1="8" y1="${yLow}" x2="${svgWidth - 8}" y2="${yLow}" stroke="#E9ECEF" stroke-dasharray="3,3" stroke-width="1.5"/>
        <path d="${pathD}" fill="none" stroke="#ADB5BD" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        ${circlesSvg}
        ${textsSvg}
      </svg>
    `;
  }

  // Hiển thị khung câu ví dụ N5
  renderSentenceBox(word) {
    const boxEl = document.getElementById('speech-sentence-box');
    const jaEl = document.getElementById('speech-sentence-ja');
    const hiraEl = document.getElementById('speech-sentence-hira');
    const romajiEl = document.getElementById('speech-sentence-romaji');
    const viEl = document.getElementById('speech-sentence-vi');

    if (!boxEl) return;

    const ex = word.example || {
      ja: word.exampleJa || `${word.kanji}です。`,
      hira: word.exampleHira || `${word.hiragana}です`,
      romaji: word.exampleRomaji || `${word.romaji} desu.`,
      vi: word.exampleVi || `Là ${word.meaning || word.vietnamese}.`
    };

    if (jaEl) jaEl.textContent = ex.ja || '';
    if (hiraEl) hiraEl.textContent = `Cách đọc: ${ex.hira || ''}`;
    if (romajiEl) romajiEl.textContent = ex.romaji || '';
    if (viEl) viEl.textContent = `Dịch nghĩa: ${ex.vi || ''}`;

    // Đánh dấu nổi bật khi ở chế độ Đọc Cả Câu
    if (this.mode === 'sentence') {
      boxEl.classList.add('sentence-highlight-mode');
    } else {
      boxEl.classList.remove('sentence-highlight-mode');
    }
  }

  // Phát âm thanh mẫu chuẩn hoặc chậm
  playTargetAudio(speed = 1.0) {
    if (!this.currentWord || !window.soundSystem) return;

    if (this.mode === 'sentence') {
      const sentenceText = this.currentWord.example?.ja || this.currentWord.exampleJa || this.currentWord.hiragana;
      window.soundSystem.speak(sentenceText, speed);
    } else {
      window.soundSystem.speak(this.currentWord.hiragana, speed);
    }
  }

  // Bật / Dừng Micro thu âm
  toggleListening() {
    if (!this.hasSpeechApi) {
      this.showNoApiWarning();
      return;
    }

    if (this.isListening) {
      this.stopListening();
    } else {
      try {
        this.recognition.start();
      } catch (e) {
        console.error('[SpeechTest] Không thể kích hoạt Micro:', e);
        this.showPermissionWarning();
      }
    }
  }

  // Dừng ngay lập tức Micro thu âm
  stopListening() {
    clearTimeout(this.safetyTimer);
    if (this.recognition && this.isListening) {
      try {
        if (typeof this.recognition.abort === 'function') {
          this.recognition.abort();
        } else {
          this.recognition.stop();
        }
      } catch (e) {}
      this.isListening = false;
      this.updateMicUI(false);
    }
  }

  // Cập nhật giao diện trạng thái Micro và Sóng âm Equalizer
  updateMicUI(listening) {
    const micBtn = document.getElementById('speech-mic-btn');
    const micPulse = document.getElementById('speech-mic-pulse');
    const micStatus = document.getElementById('speech-mic-status');
    const waveBars = document.getElementById('speech-waveform-bars');

    if (micBtn) {
      if (listening) {
        micBtn.classList.add('recording');
        micBtn.title = 'Bấm để dừng nhận diện và chấm điểm';
        if (micPulse) micPulse.classList.add('active');
        if (waveBars) waveBars.classList.add('active');
        if (micStatus) {
          micStatus.innerHTML = `
            <span style="color: #E03131; font-weight: 800;">● Đang thu âm...</span> 
            ${this.mode === 'word' ? 'Hãy đọc to từ trên vào Micro!' : 'Hãy đọc to cả câu tiếng Nhật trên!'}
          `;
        }
      } else {
        micBtn.classList.remove('recording');
        micBtn.title = 'Bấm để bắt đầu phát âm';
        if (micPulse) micPulse.classList.remove('active');
        if (waveBars) waveBars.classList.remove('active');
        if (micStatus) {
          micStatus.textContent = 'Bấm biểu tượng Micro và phát âm to rõ nhé!';
        }
      }
    }
  }

  // ==========================================================================
  // THUẬT TOÁN SO KHỚP ĐA TẦNG TIẾNG NHẬT (ADVANCED NORMALIZATION & SCORING)
  // ==========================================================================

  // 1. Chuyển đổi Katakana về Hiragana (Unicode mapping offset 0x60)
  katakanaToHiragana(str) {
    if (!str) return '';
    return str.replace(/[\u30A1-\u30F6]/g, match => {
      return String.fromCharCode(match.charCodeAt(0) - 0x60);
    });
  }

  // 2. Chuyển đổi Romaji Latinh sang Hiragana (Phòng khi browser trả về Romaji)
  romajiToHiragana(text) {
    if (!text) return '';
    let s = text.toLowerCase();

    const ROMAJI_TABLE = [
      ['kya','きゃ'],['kyu','きゅ'],['kyo','きょ'],['sha','しゃ'],['shu','しゅ'],['sho','しょ'],
      ['cha','ちゃ'],['chu','ちゅ'],['cho','ちょ'],['nya','にゃ'],['nyu','にゅ'],['nyo','にょ'],
      ['hya','ひゃ'],['hyu','ひゅ'],['hyo','ひょ'],['mya','みゃ'],['myu','みゅ'],['myo','みょ'],
      ['rya','りゃ'],['ryu','りゅ'],['ryo','りょ'],['gya','ぎゃ'],['gyu','ぎゅ'],['gyo','ぎょ'],
      ['ja','じゃ'],['ju','じゅ'],['jo','じょ'],['bya','びゃ'],['byu','びゅ'],['byo','びょ'],
      ['pya','ぴゃ'],['pyu','ぴゅ'],['pyo','ぴょ'],['shi','し'],['chi','ち'],['tsu','つ'],
      ['fu','ふ'],['ka','か'],['ki','き'],['ku','く'],['ke','け'],['ko','こ'],
      ['sa','さ'],['su','す'],['se','せ'],['so','そ'],['ta','た'],['te','て'],['to','と'],
      ['na','な'],['ni','に'],['nu','ぬ'],['ne','ね'],['no','の'],['ha','は'],['hi','ひ'],
      ['he','へ'],['ho','ほ'],['ma','ま'],['mi','み'],['mu','む'],['me','め'],['mo','も'],
      ['ya','や'],['yu','ゆ'],['yo','よ'],['ra','ら','ri','り'],['ru','る'],['re','れ'],
      ['ro','ろ'],['wa','わ'],['wo','を'],['nn','ん'],['ga','が'],['gi','ぎ'],['gu','ぐ'],
      ['ge','げ'],['go','ご'],['za','ざ'],['ji','じ'],['zu','ず'],['ze','ぜ'],['zo','ぞ'],
      ['da','だ'],['de','de'],['do','ど'],['ba','ば'],['bi','び'],['bu','ぶ'],['be','べ'],
      ['bo','ぼ'],['pa','ぱ'],['pi','ぴ'],['pu','ぷ'],['pe','ぺ'],['po','ぽ'],
      ['a','あ'],['i','い'],['u','う'],['e','え'],['o','お'],['n','ん']
    ];

    // Xử lý phụ âm đôi (Âm ngắt sokuon っ: tt -> っと, kk -> っこ, ss -> っそ...)
    s = s.replace(/([kstpczj])\1/g, 'っ$1');

    for (const [rom, hira] of ROMAJI_TABLE) {
      s = s.split(rom).join(hira);
    }
    return s;
  }

  // 3. Làm sạch ký tự đặc biệt, dấu câu tiếng Nhật và khoảng trắng
  cleanJapanese(str) {
    if (!str) return '';
    return str
      .replace(/[\s\u3000\.\,\?、。！？「」『』…\(\)（）\-\_\~]/g, '')
      .toLowerCase();
  }

  // 4. Chuẩn hóa ngữ âm trợ từ tiếng Nhật: は -> わ, を -> お, へ -> え
  toPhoneticCanonical(str) {
    if (!str) return '';
    return str
      .replace(/は/g, 'わ')
      .replace(/を/g, 'お')
      .replace(/へ/g, 'え');
  }

  // Xử lý sự kiện nhận diện giọng nói từ Micro
  handleSpeechResult(event) {
    if (!this.currentWord) return;

    // Lấy toàn bộ các phương án (maxAlternatives = 5)
    const alternatives = [];
    if (event.results && event.results[0]) {
      for (let i = 0; i < event.results[0].length; i++) {
        const text = (event.results[0][i].transcript || '').trim();
        if (text) alternatives.push(text);
      }
    }

    if (alternatives.length === 0) {
      this.displayResult('', 0, { spokenTokens: [], targetTokens: [] }, 'Không nhận diện được âm thanh rõ ràng.');
      return;
    }

    // Kiểm tra nếu người dùng đang ở Tab Khảo bài cùng Cô giáo Tanaka
    const strictSenseiTab = document.getElementById('tab-strict-sensei');
    if (strictSenseiTab && strictSenseiTab.classList.contains('active')) {
      const bestTranscript = alternatives[0] || '';
      const pSentence = document.getElementById('panel-practice-sentence');
      const pTranslate = document.getElementById('panel-practice-translate');
      const pChat = document.getElementById('panel-practice-chat');

      if (pSentence && pSentence.style.display !== 'none') {
        const input = document.getElementById('sentence-user-input');
        if (input) {
          input.value = bestTranscript;
          input.focus();
        }
      } else if (pTranslate && pTranslate.style.display !== 'none') {
        const input = document.getElementById('translate-user-input');
        if (input) {
          input.value = bestTranscript;
          input.focus();
        }
      } else if (pChat && pChat.style.display !== 'none') {
        const input = document.getElementById('sensei-input-field');
        if (input) {
          input.value = bestTranscript;
          input.focus();
        }
      }

      if (window.soundSystem) window.soundSystem.playCorrect();
      if (window.mascot) {
        window.mascot.setMood('happy', `Đã ghi nhận giọng nói: "${bestTranscript}" 📝`, 2500);
      }
      return;
    }

    // Chấm điểm theo phương án tốt nhất trong Phòng Test Phát Âm
    const evalResult = this.evaluatePronunciation(alternatives, this.currentWord, this.mode);
    this.displayResult(evalResult.bestTranscript, evalResult.score, evalResult.alignment, evalResult.critiqueNotes);
  }

  // So sánh và tính toán điểm số chính xác
  evaluatePronunciation(alternatives, word, mode) {
    // Xác định mục tiêu so sánh tùy theo mode
    let targetKanji = '';
    let targetHira = '';
    let targetRomaji = '';

    if (mode === 'sentence') {
      const ex = word.example || {};
      targetKanji = ex.ja || word.exampleJa || word.kanji;
      targetHira = ex.hira || word.exampleHira || word.hiragana;
      targetRomaji = ex.romaji || word.exampleRomaji || word.romaji;
    } else {
      targetKanji = word.kanji || word.hiragana;
      targetHira = word.hiragana || '';
      targetRomaji = word.romaji || '';
    }

    // Chuẩn hóa mục tiêu về Hiragana sạch
    const targetHiraClean = this.cleanJapanese(this.katakanaToHiragana(targetHira));
    const targetKanjiClean = this.cleanJapanese(targetKanji);
    const targetCanonical = this.toPhoneticCanonical(targetHiraClean);

    let highestScore = -1;
    let bestTranscript = alternatives[0] || '';
    let bestSpokenHira = '';
    let matchedAltIndex = 0;

    // Duyệt qua từng phương án nhận diện
    for (let idx = 0; idx < alternatives.length; idx++) {
      const alt = alternatives[idx];
      let spokenHira = this.katakanaToHiragana(alt);
      // Chuyển romaji nếu máy nhận dạng ra chữ la-tinh
      if (/[a-zA-Z]/.test(spokenHira)) {
        spokenHira = this.romajiToHiragana(spokenHira);
      }

      const spokenClean = this.cleanJapanese(spokenHira);
      const spokenRawClean = this.cleanJapanese(alt);
      const spokenCanonical = this.toPhoneticCanonical(spokenClean);

      // Trường hợp 1: Trùng khớp 100% chính xác
      if (spokenClean === targetHiraClean || 
          spokenRawClean === targetKanjiClean || 
          spokenCanonical === targetCanonical) {
        highestScore = 100;
        bestTranscript = alt;
        bestSpokenHira = spokenClean;
        break;
      }

      // Trường hợp 2: Học viên thêm đuôi lịch sự (たべる -> たべます / たべました; いぬ -> いぬです)
      if (mode === 'word') {
        if (spokenClean.startsWith(targetHiraClean) && 
           (spokenClean.endsWith('ます') || spokenClean.endsWith('ました') || spokenClean.endsWith('です'))) {
          const bonusScore = 96;
          if (bonusScore > highestScore) {
            highestScore = bonusScore;
            bestTranscript = alt;
            bestSpokenHira = spokenClean;
          }
          continue;
        }
      }

      // Trường hợp 3: Tính khoảng cách chỉnh sửa Levenshtein trên chuỗi ngữ âm
      const len = Math.max(spokenCanonical.length, targetCanonical.length);
      if (len === 0) continue;

      const dist = this.levenshtein(spokenCanonical, targetCanonical);
      let sim = Math.max(0, Math.round(((len - dist) / len) * 100));

      // Kiểm tra đặc thù tiếng Nhật: Trường âm (ー, う, い) & Âm ngắt (っ)
      const targetHasLongVowel = /[ういー]/.test(targetHiraClean);
      const spokenHasLongVowel = /[ういー]/.test(spokenClean);
      if (targetHasLongVowel && !spokenHasLongVowel) {
        sim = Math.min(sim, 80); // Trừ điểm nếu thiếu trường âm quan trọng
      }

      const targetHasSokuon = targetHiraClean.includes('っ');
      const spokenHasSokuon = spokenClean.includes('っ');
      if (targetHasSokuon && !spokenHasSokuon) {
        sim = Math.min(sim, 80); // Trừ điểm nếu thiếu âm ngắt
      }

      if (sim > highestScore) {
        highestScore = sim;
        bestTranscript = alt;
        bestSpokenHira = spokenClean;
        matchedAltIndex = idx;
      }
    }

    if (highestScore < 0) highestScore = 0;
    if (!bestSpokenHira) {
      bestSpokenHira = this.cleanJapanese(this.katakanaToHiragana(bestTranscript));
    }

    // 5. Tính toán dải so sánh từng ký tự (Alignment LCS)
    const alignment = this.alignCharacters(bestSpokenHira, targetHiraClean);

    // Ghi chú chi tiết cho học viên
    const notes = [];
    if (highestScore === 100) {
      notes.push('🌟 Hoàn hảo! Phát âm cực kỳ chuẩn xác và tự nhiên.');
    } else {
      if (/[ういー]/.test(targetHiraClean) && !/[ういー]/.test(bestSpokenHira)) {
        notes.push('⚠️ Thiếu trường âm (chú ý kéo dài hơi ở nguyên âm).');
      }
      if (targetHiraClean.includes('っ') && !bestSpokenHira.includes('っ')) {
        notes.push('⚠️ Thiếu âm ngắt (っ) - cần khựng lại 1 nhịp ngắn trước phụ âm kế tiếp.');
      }
    }

    return {
      score: highestScore,
      bestTranscript: bestTranscript,
      alignment: alignment,
      critiqueNotes: notes
    };
  }

  // Thuật toán khoảng cách Levenshtein
  levenshtein(s1, s2) {
    const costs = [];
    for (let i = 0; i <= s1.length; i++) {
      let lastValue = i;
      for (let j = 0; j <= s2.length; j++) {
        if (i === 0) {
          costs[j] = j;
        } else if (j > 0) {
          let newValue = costs[j - 1];
          if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          }
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
      if (i > 0) costs[s2.length] = lastValue;
    }
    return costs[s2.length];
  }

  // Thuật toán so khớp từng âm (Needleman-Wunsch / LCS Alignment)
  alignCharacters(spoken, target) {
    const m = spoken.length;
    const n = target.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (spoken[i - 1] === target[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }

    let i = m, j = n;
    const spokenTokens = [];

    while (i > 0 || j > 0) {
      if (i > 0 && j > 0 && spoken[i - 1] === target[j - 1]) {
        spokenTokens.unshift({ char: spoken[i - 1], type: 'correct' });
        i--; j--;
      } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
        // Âm trong mục tiêu bị đọc thiếu
        spokenTokens.unshift({ char: target[j - 1], type: 'missed' });
        j--;
      } else {
        // Âm đọc dư hoặc đọc lệch
        spokenTokens.unshift({ char: spoken[i - 1], type: 'wrong' });
        i--;
      }
    }

    return spokenTokens;
  }

  // ==========================================================================
  // HIỂN THỊ KẾT QUẢ CHẤM ĐIỂM VÀ HIGHLIGHT TỪNG ÂM
  // ==========================================================================

  displayResult(spokenText, score, alignmentTokens = [], notes = []) {
    const resultBox = document.getElementById('speech-result-box');
    if (!resultBox) return;

    resultBox.className = 'speech-result-box';

    let title = '';
    let statusClass = '';
    let mascotMood = 'happy';

    if (score >= 85) {
      statusClass = 'success';
      title = '🌟 XUẤT SẮC! PHÁT ÂM CHUẨN XÁC';
      mascotMood = 'celebrate';
      if (window.soundSystem) window.soundSystem.playCorrect();
      if (window.app) {
        window.app.addExp(25);
        window.app.addCoins(5);
      }
      if (window.mascot) {
        window.mascot.setMood('celebrate', 'Sugoi! Phát âm cực kỳ chuẩn xác như người Tokyo luôn! 🎉', 4000);
      }
    } else if (score >= 55) {
      statusClass = 'warning';
      title = '👍 KHÁ TỐT! GẦN CHÍNH XÁC RỒI';
      mascotMood = 'encouraging';
      if (window.soundSystem) window.soundSystem.playCorrect();
      if (window.app) {
        window.app.addExp(10);
      }
      if (window.mascot) {
        window.mascot.setMood('encouraging', 'Khá tốt rồi! Sensei gật đầu khen ngợi, chú ý thêm chút trường âm nhé! 🌸', 3500);
      }
    } else {
      statusClass = 'danger';
      title = '💪 CHƯA CHÍNH XÁC - CẦN CHỈNH LẠI ÂM!';
      mascotMood = 'strict';
      if (window.soundSystem) window.soundSystem.playWrong();
      if (window.mascot) {
        window.mascot.setMood('strict', 'Hừm! Phát âm bị lệch rồi! Tanaka-sensei yêu cầu nghe kỹ mẫu rồi đọc lại ngay! 👩‍🏫', 3500);
      }
    }

    // Ghi nhận tiến độ nhiệm vụ 3 của bài học (nếu điểm >= 60%)
    if (this.currentLesson && score >= 60 && this.currentWord) {
      if (!this.lessonPassedWords) this.lessonPassedWords = new Set();
      this.lessonPassedWords.add(this.currentWord.id);
      const passedCount = this.lessonPassedWords.size;
      this.renderLessonSpeechMissionBanner();

      if (passedCount >= 3) {
        if (window.roadmapModule && typeof window.roadmapModule.recordMissionProgress === 'function') {
          window.roadmapModule.recordMissionProgress(this.currentLesson, 'pronun', {
            pronunDone: true,
            pronunScore: score,
            pronunPassedCount: passedCount
          });
        }
      }
    }

    // Tạo HTML highlight từng âm
    let diffHtml = '';
    if (alignmentTokens && alignmentTokens.length > 0) {
      diffHtml = alignmentTokens.map(tok => {
        if (tok.type === 'correct') {
          return `<span class="diff-char correct" title="Phát âm đúng">${tok.char}</span>`;
        } else if (tok.type === 'missed') {
          return `<span class="diff-char missed" title="Bị thiếu âm này">[${tok.char}]</span>`;
        } else {
          return `<span class="diff-char wrong" title="Âm này đọc lệch">${tok.char}</span>`;
        }
      }).join('');
    } else {
      diffHtml = `<span class="diff-char wrong">${spokenText || '(Chưa nghe rõ)'}</span>`;
    }

    const targetReference = this.mode === 'sentence' 
      ? (this.currentWord.example?.hira || this.currentWord.exampleHira || this.currentWord.hiragana)
      : this.currentWord.hiragana;

    resultBox.classList.add(statusClass);
    resultBox.innerHTML = `
      <div class="result-header">
        <span class="result-title">${title}</span>
        <span class="result-score-badge ${statusClass}">${score}% Chuẩn</span>
      </div>

      <!-- Thanh tiến trình điểm số màu sắc sinh động -->
      <div class="speech-score-progress">
        <div class="speech-score-bar ${statusClass}" style="width: ${score}%;"></div>
      </div>

      <!-- Khung phân tích chi tiết từng âm sắc -->
      <div class="speech-diff-card">
        <div class="diff-row">
          <span class="diff-label">Máy nghe được:</span>
          <div class="diff-spoken-view">${diffHtml}</div>
        </div>
        <div class="diff-row">
          <span class="diff-label">Mẫu chuẩn cần đọc:</span>
          <div class="diff-target-view">${targetReference}</div>
        </div>
      </div>

      <!-- Ghi chú nhanh -->
      ${notes && notes.length > 0 ? `<div class="speech-notes-alert">${notes.join('<br>')}</div>` : ''}

      <!-- Thông báo nhiệm vụ 3 của bài học nếu có -->
      ${this.currentLesson ? `
        <div class="speech-mission-notice-box ${this.lessonPassedWords?.size >= 3 ? 'success' : 'progress'}">
          ${this.lessonPassedWords?.size >= 3 ? `
            <div class="m-notice-title">✅ ĐÃ HOÀN THÀNH NHIỆM VỤ 3 BÀI ${this.currentLesson}!</div>
            <p>Em đã đọc đúng ${this.lessonPassedWords.size}/3 từ (≥ 60%). Cô Tanaka rất hài lòng! 🌸</p>
          ` : `
            <div class="m-notice-title">🎯 TIẾN ĐỘ NHIỆM VỤ 3: ĐÃ ĐẠT ${this.lessonPassedWords?.size || 0}/3 TỪ (≥ 60%)</div>
            <p>Hãy chuyển sang từ tiếp theo và tiếp tục đọc to rõ ràng để hoàn thành đủ 3 từ nhé!</p>
          `}
        </div>
      ` : ''}

      <!-- Các nút thao tác -->
      <div class="result-actions">
        <button class="btn btn-secondary" onclick="window.speechModule.playTargetAudio(0.6)">
          🐢 Nghe mẫu đọc chậm
        </button>
        <button class="btn btn-secondary" onclick="window.speechModule.playTargetAudio(1.0)">
          🔊 Nghe mẫu chuẩn
        </button>
        <button class="btn btn-primary" onclick="window.speechModule.toggleListening()">
          🎙️ Đọc lại lần nữa
        </button>
        <button class="btn btn-sensei-ask" onclick="window.speechModule.triggerSenseiCritique('${(spokenText || '').replace(/'/g, "\\'")}', ${score})">
          👩‍🏫 Cô Tanaka soi lỗi AI
        </button>
      </div>

      <!-- Khung nhận xét mổ xẻ của Cô giáo khó tính Tanaka-sensei -->
      <div id="sensei-review-box" class="sensei-review-box hidden"></div>
    `;

    // Tự động kết nối Tanaka-sensei phân tích sâu nếu điểm dưới 85%
    if (score < 85 && window.senseiAI) {
      setTimeout(() => {
        this.triggerSenseiCritique(spokenText, score);
      }, 700);
    }
  }

  // Gọi trực tiếp phân tích của Cô giáo AI Khó Tính
  triggerSenseiCritique(spokenText, score) {
    if (!window.senseiAI || !this.currentWord) return;

    // Chuẩn bị dữ liệu gửi cho Cô Tanaka
    const targetPayload = {
      kanji: this.mode === 'sentence' ? (this.currentWord.example?.ja || this.currentWord.kanji) : this.currentWord.kanji,
      hiragana: this.mode === 'sentence' ? (this.currentWord.example?.hira || this.currentWord.hiragana) : this.currentWord.hiragana,
      romaji: this.mode === 'sentence' ? (this.currentWord.example?.romaji || this.currentWord.romaji) : this.currentWord.romaji,
      vietnamese: this.mode === 'sentence' ? (this.currentWord.example?.vi || this.currentWord.meaning) : (this.currentWord.meaning || this.currentWord.vietnamese)
    };

    window.senseiAI.reviewPronunciation(targetPayload, spokenText || 'Không phát ra tiếng', score);
  }

  // Xử lý các lỗi Micro thông dụng với hướng dẫn tiếng Việt rõ ràng
  handleSpeechError(event) {
    console.warn('[SpeechTest] Lỗi nhận diện giọng nói:', event.error);
    const resultBox = document.getElementById('speech-result-box');
    if (!resultBox) return;

    if (event.error === 'not-allowed') {
      this.showPermissionWarning();
    } else if (event.error === 'no-speech') {
      resultBox.className = 'speech-result-box warning';
      resultBox.innerHTML = `
        <div class="result-title">⚠️ Không nghe thấy âm thanh!</div>
        <p class="result-desc">Sensei chưa nhận được giọng của bạn. Hãy nói to, rõ ràng và để micro gần miệng hơn một chút nhé!</p>
        <div class="result-actions">
          <button class="btn btn-primary" onclick="window.speechModule.toggleListening()">🎙️ Thử nói lại</button>
        </div>
      `;
    } else if (event.error === 'audio-capture') {
      resultBox.className = 'speech-result-box danger';
      resultBox.innerHTML = `
        <div class="result-title">🎤 Không tìm thấy thiết bị Microphone!</div>
        <p class="result-desc">Vui lòng kiểm tra lại mic máy tính hoặc cắm tai nghe có mic để bắt đầu luyện đọc tiếng Nhật nhé!</p>
      `;
    } else if (event.error === 'network') {
      resultBox.className = 'speech-result-box danger';
      resultBox.innerHTML = `
        <div class="result-title">🌐 Lỗi kết nối mạng giọng nói!</div>
        <p class="result-desc">Trình duyệt cần kết nối mạng để đối soát từ vựng tiếng Nhật qua Google Speech Server. Vui lòng kiểm tra lại Internet nhé!</p>
      `;
    }
  }

  showPermissionWarning() {
    const resultBox = document.getElementById('speech-result-box');
    if (resultBox) {
      resultBox.className = 'speech-result-box danger';
      resultBox.innerHTML = `
        <div class="result-title">🔒 Quyền truy cập Micro bị chặn</div>
        <p class="result-desc">
          Trình duyệt đang chặn Micro. Bạn hãy bấm vào biểu tượng <strong>Ổ khóa / Micro</strong> ở góc trái thanh địa chỉ trình duyệt, chọn <strong>Cho phép (Allow Microphone)</strong> rồi tải lại trang nhé!
        </p>
      `;
    }
  }

  showNoApiWarning() {
    const resultBox = document.getElementById('speech-result-box');
    if (resultBox) {
      resultBox.className = 'speech-result-box warning';
      resultBox.innerHTML = `
        <div class="result-title">💡 Trình duyệt khuyên dùng</div>
        <p class="result-desc">
          Để chấm điểm phát âm tiếng Nhật chính xác 100%, bạn vui lòng mở ứng dụng bằng <strong>Google Chrome</strong> hoặc <strong>Microsoft Edge</strong> nhé!
        </p>
      `;
    }
  }

  // Chuyển sang từ kế tiếp
  nextWord() {
    if (this.currentIndex < this.wordList.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.loadWord(this.wordList[this.currentIndex]);
  }

  // Chuyển về từ trước đó
  prevWord() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.wordList.length - 1;
    }
    this.loadWord(this.wordList[this.currentIndex]);
  }
}

// Khởi tạo instance toàn cục sẵn sàng sử dụng
window.speechModule = new SpeechTestModule();
