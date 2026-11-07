// ============================================================================
// GAME 1: ĐOÁN TỪ VỰNG TIẾNG NHẬT N5 (VOCABULARY GUESSING GAME) - HOÀN CHỈNH
// 4 Chế độ chơi, Lọc theo Chủ đề, 3 Mạng Tim, Đồng hồ 15s đếm ngược đổi màu,
// Combo streak x2/x3, High Score, Pháo hoa Confetti & Sổ tay từ hay sai
// ============================================================================

class VocabGuessGame {
  constructor() {
    this.allWords = [];
    this.words = [];
    this.currentIndex = 0;
    this.score = 0;
    this.combo = 0;
    this.maxCombo = 0;
    this.lives = 3;
    this.maxLives = 3;
    this.timer = null;
    this.timeLeft = 15;
    this.currentQuestion = null;
    this.isAnswering = false;
    this.gameActive = false;
    this.selectedCategory = 'all';
    this.gameMode = 'mix'; // 'mix', 'visual', 'audio', 'kanji'
    this.currentLesson = null; // null: toàn bộ từ vựng; 1-25: theo bài học
    this.correctAnswersCount = 0;

    this.highScore = this.loadHighScore();
    this.mistakesList = this.loadMistakes();
  }

  // --------------------------------------------------------------------------
  // LƯU TRỮ VÀ TẢI KỶ LỤC & SỔ TAY TỪ HAY SAI
  // --------------------------------------------------------------------------
  loadHighScore() {
    try {
      const saved = localStorage.getItem('nihongo_go_guess_highscore');
      return saved ? parseInt(saved, 10) : 0;
    } catch (e) {
      return 0;
    }
  }

  saveHighScore(newScore) {
    if (newScore > this.highScore) {
      this.highScore = newScore;
      try {
        localStorage.setItem('nihongo_go_guess_highscore', this.highScore.toString());
      } catch (e) {}
      return true;
    }
    return false;
  }

  loadMistakes() {
    try {
      const saved = localStorage.getItem('nihongo_go_mistakes_vocab');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }

  saveMistakes() {
    try {
      localStorage.setItem('nihongo_go_mistakes_vocab', JSON.stringify(this.mistakesList));
    } catch (e) {}
  }

  addMistake(word) {
    if (!word || !word.id) return;
    const existingIndex = this.mistakesList.findIndex(m => m.id === word.id);
    if (existingIndex >= 0) {
      this.mistakesList[existingIndex].wrongCount = (this.mistakesList[existingIndex].wrongCount || 1) + 1;
      this.mistakesList[existingIndex].lastFailedAt = new Date().toISOString();
    } else {
      this.mistakesList.push({
        ...word,
        wrongCount: 1,
        lastFailedAt: new Date().toISOString()
      });
    }
    this.saveMistakes();
  }

  removeMistake(wordId) {
    this.mistakesList = this.mistakesList.filter(m => m.id !== wordId);
    this.saveMistakes();
    this.renderMistakesModalContent();
    if (window.soundSystem) window.soundSystem.playPop();
  }

  clearAllMistakes() {
    if (confirm('Bạn có chắc muốn làm sạch toàn bộ Sổ tay từ hay sai?')) {
      this.mistakesList = [];
      this.saveMistakes();
      this.renderMistakesModalContent();
      if (window.soundSystem) window.soundSystem.playPop();
    }
  }

  // --------------------------------------------------------------------------
  // BẮT ĐẦU TRÒ CHƠI
  // --------------------------------------------------------------------------
  start(words, category = null, mode = null) {
    if (words && words.length > 0) {
      this.allWords = [...words];
    } else if (window.JLPT_DATA && window.JLPT_DATA.n5) {
      this.allWords = [...window.JLPT_DATA.n5];
    }

    if (category !== null) {
      this.selectedCategory = category;
    }
    if (mode !== null) {
      this.gameMode = mode;
    }

    // Lọc theo chủ đề
    let filtered = this.allWords;
    if (this.selectedCategory !== 'all') {
      filtered = this.allWords.filter(w => w.category === this.selectedCategory);
    }

    if (!filtered || filtered.length < 4) {
      alert('Chủ đề này chưa đủ 4 từ vựng để tạo 4 đáp án trắc nghiệm. Đang chuyển sang Tất cả chủ đề!');
      this.selectedCategory = 'all';
      filtered = this.allWords;
    }

    // Xáo trộn danh sách từ vựng
    this.words = [...filtered].sort(() => Math.random() - 0.5);
    this.currentIndex = 0;
    this.score = 0;
    this.combo = 0;
    this.maxCombo = 0;
    this.lives = this.maxLives;
    this.gameActive = true;
    this.isAnswering = false;
    this.correctAnswersCount = 0;

    this.renderGameContainer();
    this.loadQuestion();
  }

  // --------------------------------------------------------------------------
  // BẮT ĐẦU GAME THEO BÀI HỌC (NHIỆM VỤ 2: ĐOÁN TỪ BÀI 1 -> 25)
  // --------------------------------------------------------------------------
  startLessonGame(lessonNumber) {
    const lNum = parseInt(lessonNumber, 10);
    this.currentLesson = lNum;
    this.selectedCategory = 'all';

    const lesson = window.LESSONS_DATA ? window.LESSONS_DATA.getLesson('N5', lNum) : null;
    let lessonWords = (lesson && lesson.vocab && lesson.vocab.length > 0) ? [...lesson.vocab] : [];

    // Kèm thêm 2 từ của bài trước (nếu có) để ôn tập kết hợp theo chuẩn yêu cầu
    if (lNum > 1 && window.LESSONS_DATA) {
      const prevLesson = window.LESSONS_DATA.getLesson('N5', lNum - 1);
      if (prevLesson && prevLesson.vocab && prevLesson.vocab.length > 0) {
        const reviewWords = [...prevLesson.vocab].sort(() => Math.random() - 0.5).slice(0, 2);
        lessonWords = [...lessonWords, ...reviewWords];
      }
    }

    if (lessonWords.length < 4) {
      lessonWords = window.JLPT_DATA?.n5 || [];
    }

    this.start(lessonWords, 'all', 'mix');

    if (window.mascot) {
      window.mascot.say(`🎯 Nhiệm vụ 2: Vượt Game Đoán Từ Bài ${lNum}! Cố gắng đạt trên 70% để mở khóa bài tiếp theo nhé! 🔥`, 4000);
    }
  }

  // Bắt đầu game chỉ với các từ trong Sổ tay từ hay sai
  startMistakePractice() {
    if (!this.mistakesList || this.mistakesList.length < 4) {
      alert('Sổ tay từ hay sai cần ít nhất 4 từ để bắt đầu luyện tập trắc nghiệm!');
      return;
    }
    this.closeMistakeModal();
    this.selectedCategory = 'all';
    this.allWords = [...window.JLPT_DATA.n5];
    this.words = [...this.mistakesList].sort(() => Math.random() - 0.5);
    this.currentIndex = 0;
    this.score = 0;
    this.combo = 0;
    this.maxCombo = 0;
    this.lives = this.maxLives;
    this.gameActive = true;
    this.isAnswering = false;

    this.renderGameContainer();
    this.loadQuestion();

    if (window.mascot) {
      window.mascot.setMood('strict', 'Bắt đầu bài phục thù các từ hay sai! Tập trung và nhớ kỹ từng từ nhé! 👩‍🏫', 3500);
    }
  }

  setCategory(category) {
    this.selectedCategory = category;
    this.start(this.allWords, this.selectedCategory, this.gameMode);
  }

  setMode(mode) {
    this.gameMode = mode;
    this.start(this.allWords, this.selectedCategory, this.gameMode);
  }

  // --------------------------------------------------------------------------
  // GIAO DIỆN KHUNG GAME CHÍNH (CONTAINER & HUD)
  // --------------------------------------------------------------------------
  renderGameContainer() {
    const area = document.getElementById('guess-game-container');
    if (!area) return;

    const quickSelectorHtml = window.renderQuickLessonSelector ? window.renderQuickLessonSelector(this.currentLesson, 'guess-game') : '';

    let missionBannerHtml = '';
    if (this.currentLesson) {
      const missionState = window.roadmapModule ? window.roadmapModule.getLessonMissionState(this.currentLesson) : {};
      const isMissionDone = !!missionState.gameDone;

      missionBannerHtml = `
        <div class="lesson-mission-active-banner">
          <div class="banner-mission-left">
            <span class="banner-icon">🎯</span>
            <div>
              <strong>Nhiệm vụ 2: Vượt Game Đoán Từ Bài ${this.currentLesson}</strong>
              <p>Mục tiêu: Đạt từ <strong>70% câu đúng</strong> trở lên để vượt qua bài học!</p>
            </div>
          </div>
          <div class="mission-status-pill ${isMissionDone ? 'done' : 'pending'}">
            ${isMissionDone ? `✅ ĐÃ ĐẠT (${missionState.gameScore}%)` : '⏳ CẦN ĐẠT ≥ 70%'}
          </div>
        </div>
      `;
    }

    // Danh sách các danh mục N5
    const cats = window.JLPT_CATEGORIES || {};

    let categoryPillsHtml = `
      <button class="game-topic-pill ${this.selectedCategory === 'all' ? 'active' : ''}" 
              onclick="window.guessGame.setCategory('all')">
        🌟 Tất cả (${this.allWords.length})
      </button>
    `;

    Object.keys(cats).forEach(k => {
      const c = cats[k];
      const count = this.allWords.filter(w => w.category === k).length;
      categoryPillsHtml += `
        <button class="game-topic-pill ${this.selectedCategory === k ? 'active' : ''}" 
                onclick="window.guessGame.setCategory('${k}')"
                style="${this.selectedCategory === k ? `background:${c.color}; border-color:${c.color}; color:#FFF;` : ''}">
          <span>${c.icon}</span> ${c.name} (${count})
        </button>
      `;
    });

    area.innerHTML = `
      <!-- BỘ CHỌN BÀI HỌC NHANH (QUICK LESSON SELECTOR) -->
      ${quickSelectorHtml}

      <!-- BANNER NHIỆM VỤ BÀI HỌC NẾU CÓ -->
      ${missionBannerHtml}

      <!-- THANH CHỌN CHỦ ĐỀ & CHẾ ĐỘ CHƠI -->
      <div class="guess-game-top-bar">
        <div class="game-topic-scroll-wrap">
          <div class="game-topic-scroll">
            ${categoryPillsHtml}
          </div>
        </div>

        <div class="game-mode-bar">
          <div class="game-mode-chips">
            <button class="mode-chip ${this.gameMode === 'mix' ? 'active' : ''}" onclick="window.guessGame.setMode('mix')">
              🎲 Mix Hỗn Hợp
            </button>
            <button class="mode-chip ${this.gameMode === 'visual' ? 'active' : ''}" onclick="window.guessGame.setMode('visual')">
              🎨 Nhìn Hình Đoán Chữ
            </button>
            <button class="mode-chip ${this.gameMode === 'audio' ? 'active' : ''}" onclick="window.guessGame.setMode('audio')">
              🎧 Nghe Voice Đoán Nghĩa
            </button>
            <button class="mode-chip ${this.gameMode === 'kanji' ? 'active' : ''}" onclick="window.guessGame.setMode('kanji')">
              📖 Kanji ➔ Hiragana & Hán
            </button>
          </div>

          <div class="game-action-badges">
            <span class="game-highscore-badge" title="Điểm kỷ lục cao nhất của bạn">
              🏆 Kỷ lục: <strong id="game-highscore-val">${this.highScore}</strong>
            </span>
            <button class="btn-mistakes-notebook" onclick="window.guessGame.openMistakeModal()">
              📕 Sổ tay từ hay sai (<span id="mistake-badge-count">${this.mistakesList.length}</span>)
            </button>
          </div>
        </div>
      </div>

      <!-- GAME HUD (TIM, COMBO, ĐỒNG HỒ ĐẾM NGƯỢC, ĐIỂM SỐ) -->
      <div class="game-hud">
        <div class="hud-item hearts" id="game-hearts" title="Mạng còn lại">
          ${'❤️ '.repeat(this.lives)}${'🖤 '.repeat(this.maxLives - this.lives)}
        </div>
        <div class="hud-item combo-badge ${this.combo >= 2 ? 'on-fire' : ''}" id="game-combo">
          🔥 Combo: x${this.combo}
        </div>
        <div class="hud-item timer-wrap">
          <div class="timer-numerical" id="game-timer">⏳ 15s</div>
          <div class="game-timer-progress-track">
            <div class="game-timer-progress-fill" id="game-timer-fill" style="width: 100%;"></div>
          </div>
        </div>
        <div class="hud-item score" id="game-score">
          ⭐ Điểm: ${this.score}
        </div>
      </div>

      <!-- KHUNG HIỂN THỊ CÂU HỎI -->
      <div class="game-card" id="game-card">
        <!-- Câu hỏi sẽ được tải động tại đây -->
      </div>

      <!-- MODAL SỔ TAY TỪ HAY SAI -->
      <div id="guess-mistake-modal" class="modal-overlay hidden" onclick="if(event.target === this) window.guessGame.closeMistakeModal()">
        <div class="modal-card mistake-modal-card">
          <div class="modal-header">
            <h3>📕 Sổ Tay Từ Hay Sai (Cần Phục Thù)</h3>
            <button class="modal-close-btn" onclick="window.guessGame.closeMistakeModal()">✕</button>
          </div>
          <div class="modal-body" id="guess-mistake-modal-body">
            <!-- Render danh sách từ sai -->
          </div>
        </div>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // TẠO CÂU HỎI THEO CHẾ ĐỘ
  // --------------------------------------------------------------------------
  loadQuestion() {
    if (!this.gameActive) return;

    if (this.lives <= 0) {
      this.endGame(false);
      return;
    }

    if (this.currentIndex >= this.words.length) {
      this.endGame(true);
      return;
    }

    this.isAnswering = false;
    const currentWord = this.words[this.currentIndex];

    // Lựa chọn 3 phương án sai ngẫu nhiên từ kho từ N5
    const pool = this.allWords.filter(w => w.id !== currentWord.id);
    const wrongOptions = [...pool].sort(() => Math.random() - 0.5).slice(0, 3);
    const options = [currentWord, ...wrongOptions].sort(() => Math.random() - 0.5);

    // Xác định loại câu hỏi theo chế độ
    let qType = this.gameMode;
    if (qType === 'mix') {
      const types = ['visual', 'audio', 'kanji'];
      qType = types[Math.floor(Math.random() * types.length)];
    }

    this.currentQuestion = {
      type: qType,
      target: currentWord,
      options: options
    };

    this.renderQuestionUI(this.currentQuestion);
    this.startTimer();
  }

  renderQuestionUI(q) {
    const card = document.getElementById('game-card');
    if (!card) return;

    let questionContent = '';

    // CHẾ ĐỘ 1: NHÌN HÌNH SVG + NGHĨA -> CHỌN TỪ TIẾNG NHẬT
    if (q.type === 'visual') {
      questionContent = `
        <div class="question-header">
          <span class="question-badge visual-badge">🎨 Chế độ 1: Nhìn hình & nghĩa ➔ Chọn từ tiếng Nhật đúng:</span>
          <span class="question-counter">Câu ${this.currentIndex + 1}/${this.words.length}</span>
        </div>
        <div class="question-media visual-box">
          ${window.getVocabIllustration(q.target)}
          <div class="question-hint-meaning">${q.target.meaning || q.target.vietnamese}</div>
          ${q.target.hanViet ? `<div class="question-hint-sub">【Hán Việt: ${q.target.hanViet}】</div>` : ''}
        </div>
      `;
    } 
    // CHẾ ĐỘ 2: NGHE GIỌNG ĐỌC CHUẨN (ẨN CHỮ) -> CHỌN HÌNH & NGHĨA ĐÚNG
    else if (q.type === 'audio') {
      questionContent = `
        <div class="question-header">
          <span class="question-badge audio-badge">🎧 Chế độ 2: Nghe phát âm chuẩn (ẩn chữ) ➔ Chọn đáp án đúng:</span>
          <span class="question-counter">Câu ${this.currentIndex + 1}/${this.words.length}</span>
        </div>
        <div class="question-media audio-box">
          <button class="btn-voice-replay" onclick="window.soundSystem.speak('${q.target.hiragana}')" title="Bấm để nghe lại">
            🔊 Bấm nghe lại phát âm
          </button>
          <div class="audio-wave-anim">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
          <div class="audio-hint-text">Lắng nghe thật kỹ trọng âm và trường âm nhé!</div>
        </div>
      `;
      // Tự động phát âm ngay lập tức sau 200ms
      setTimeout(() => {
        if (window.soundSystem) {
          window.soundSystem.speak(q.target.hiragana);
        }
      }, 250);
    } 
    // CHẾ ĐỘ 3: NHÌN KANJI -> CHỌN HIRAGANA & HÁN VIỆT
    else {
      questionContent = `
        <div class="question-header">
          <span class="question-badge kanji-badge">📖 Chế độ 3: Nhìn chữ Hán Kanji ➔ Chọn cách đọc Hiragana & Hán Việt:</span>
          <span class="question-counter">Câu ${this.currentIndex + 1}/${this.words.length}</span>
        </div>
        <div class="question-media text-box">
          <div class="target-kanji-large">${q.target.kanji}</div>
          <div class="question-hint-meaning">${q.target.meaning || q.target.vietnamese}</div>
          <button class="btn-mini-voice" onclick="window.soundSystem.speak('${q.target.hiragana}')" style="margin-top:10px;">
            🔊 Gợi ý phát âm
          </button>
        </div>
      `;
    }

    // RENDER 4 PHƯƠNG ÁN LỰA CHỌN TRẮC NGHIỆM
    let optionsHtml = '<div class="game-options-grid">';
    q.options.forEach((opt, idx) => {
      const isCorrect = opt.id === q.target.id;
      const letter = ['A', 'B', 'C', 'D'][idx];

      if (q.type === 'audio') {
        // Chế độ Audio: Người học chọn theo Hình ảnh + Nghĩa
        optionsHtml += `
          <button class="game-opt-btn opt-audio-layout" onclick="window.guessGame.selectOption(${idx}, ${isCorrect})">
            <span class="opt-index">${letter}</span>
            <span class="opt-illus">${window.getVocabIllustration(opt)}</span>
            <div class="opt-text-wrap">
              <strong class="opt-title">${opt.meaning || opt.vietnamese}</strong>
              <small class="opt-desc">${opt.romaji}</small>
            </div>
          </button>
        `;
      } else if (q.type === 'kanji') {
        // Chế độ Kanji: Người học chọn Hiragana + Hán Việt
        optionsHtml += `
          <button class="game-opt-btn" onclick="window.guessGame.selectOption(${idx}, ${isCorrect})">
            <span class="opt-index">${letter}</span>
            <div class="opt-text-wrap">
              <strong class="opt-title">${opt.hiragana} (${opt.romaji})</strong>
              <small class="opt-desc">${opt.hanViet ? 'Hán: ' + opt.hanViet : opt.meaning || opt.vietnamese}</small>
            </div>
          </button>
        `;
      } else {
        // Chế độ Visual: Người học chọn Từ tiếng Nhật chuẩn
        const displayJp = opt.kanji !== opt.hiragana ? `${opt.kanji} (${opt.hiragana})` : opt.hiragana;
        optionsHtml += `
          <button class="game-opt-btn" onclick="window.guessGame.selectOption(${idx}, ${isCorrect})">
            <span class="opt-index">${letter}</span>
            <div class="opt-text-wrap">
              <strong class="opt-title">${displayJp}</strong>
              <small class="opt-desc">${opt.romaji} - ${opt.meaning || opt.vietnamese}</small>
            </div>
          </button>
        `;
      }
    });
    optionsHtml += '</div>';

    card.innerHTML = questionContent + optionsHtml;
  }

  // --------------------------------------------------------------------------
  // ĐỒNG HỒ 15 GIÂY ĐẾM NGƯỢC CÓ THANH TIẾN ĐỘ ĐỔI MÀU
  // --------------------------------------------------------------------------
  startTimer() {
    clearInterval(this.timer);
    this.timeLeft = 15;
    this.updateTimerUI();

    this.timer = setInterval(() => {
      this.timeLeft--;
      this.updateTimerUI();

      if (this.timeLeft <= 0) {
        clearInterval(this.timer);
        this.handleTimeout();
      }
    }, 1000);
  }

  updateTimerUI() {
    const textEl = document.getElementById('game-timer');
    const fillEl = document.getElementById('game-timer-fill');

    if (textEl) {
      textEl.textContent = `⏳ ${this.timeLeft}s`;
      if (this.timeLeft <= 4) {
        textEl.classList.add('urgent');
      } else {
        textEl.classList.remove('urgent');
      }
    }

    if (fillEl) {
      const percent = (Math.max(0, this.timeLeft) / 15) * 100;
      fillEl.style.width = `${percent}%`;

      // Đổi màu thanh tiến độ: Xanh lá -> Cam -> Đỏ
      if (this.timeLeft > 8) {
        fillEl.style.backgroundColor = '#51CF66'; // Xanh lá
      } else if (this.timeLeft > 4) {
        fillEl.style.backgroundColor = '#FFA94D'; // Cam
      } else {
        fillEl.style.backgroundColor = '#FF6B6B'; // Đỏ gấp gáp
      }
    }
  }

  // --------------------------------------------------------------------------
  // XỬ LÝ KHI NGƯỜI DÙNG CHỌN ĐÁP ÁN
  // --------------------------------------------------------------------------
  selectOption(selectedIndex, isCorrect) {
    if (this.isAnswering || !this.gameActive) return;
    this.isAnswering = true;
    clearInterval(this.timer);

    const buttons = document.querySelectorAll('.game-opt-btn');
    const targetWord = this.currentQuestion.target;

    // Phát âm từ vựng tiếng Nhật chuẩn ngay khi chọn
    if (window.soundSystem) {
      window.soundSystem.speak(targetWord.hiragana);
    }

    // Tô màu các nút đáp án (Xanh cho đúng, Đỏ cho sai)
    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      const opt = this.currentQuestion.options[idx];
      if (opt.id === targetWord.id) {
        btn.classList.add('correct');
      }
      if (idx === selectedIndex && !isCorrect) {
        btn.classList.add('wrong');
      }
    });

    if (isCorrect) {
      this.correctAnswersCount++;
      this.combo++;
      if (this.combo > this.maxCombo) {
        this.maxCombo = this.combo;
      }

      // Phát âm thanh combo hoặc đúng
      if (window.soundSystem) {
        if (this.combo >= 2) {
          window.soundSystem.playCombo(this.combo);
        } else {
          window.soundSystem.playCorrect();
        }
      }

      // Tính điểm theo tốc độ và hệ số Combo
      // Công thức: 100 điểm gốc + (giây còn lại * 10) + (combo * 25)
      const timeBonus = this.timeLeft * 10;
      const comboBonus = this.combo * 25;
      const gainedScore = 100 + timeBonus + comboBonus;
      this.score += gainedScore;

      // Kiểm tra và cập nhật Kỷ lục cao nhất
      this.saveHighScore(this.score);

      // Phản hồi Linh vật
      if (window.mascot) {
        const compliments = [
          'Sugoi! Chính xác rồi! 🌸',
          `Quá nhanh! +${timeBonus} điểm tốc độ! ⚡`,
          `Combo x${this.combo}! Giữ vững phong độ nào! 🔥`,
          'Tuyệt vời! Từ này bạn nhớ rất chuẩn! ✨'
        ];
        const msg = compliments[Math.floor(Math.random() * compliments.length)];
        window.mascot.setMood('happy', msg, 2000);
      }

      // Cộng EXP và Sakura Coins cho App
      if (window.app) {
        window.app.addExp(15 + this.combo * 2);
        window.app.addCoins(3);
      }
    } else {
      // Trả lời SAI
      if (window.soundSystem) {
        window.soundSystem.playWrong();
      }
      this.combo = 0;
      this.lives--;

      // Lưu từ vào Sổ tay từ hay sai
      this.addMistake(targetWord);
      this.updateMistakeBadgeCount();

      // Gọi Cô giáo Tanaka mắng yêu và chỉ ra lỗi
      const chosenWord = this.currentQuestion.options[selectedIndex];
      if (window.senseiAI && chosenWord) {
        window.senseiAI.explainMistake(targetWord, chosenWord);
      }

      if (window.mascot) {
        if (window.mascot.character === 'sensei') {
          window.mascot.setMood('strict', `Sai rồi! Cô Tanaka nhắc: "${targetWord.hiragana}" nghĩa là "${targetWord.meaning || targetWord.vietnamese}"! 👩‍🏫`, 3200);
        } else {
          window.mascot.setMood('sad', `Tiếc quá! Đáp án đúng phải là "${targetWord.hiragana}" nha! 🐾`, 2500);
        }
      }
    }

    this.updateHUD();

    // Chuyển sang câu tiếp theo sau 2.4 giây để người học kịp đọc giải thích
    setTimeout(() => {
      this.currentIndex++;
      this.loadQuestion();
    }, 2400);
  }

  // --------------------------------------------------------------------------
  // XỬ LÝ KHI HẾT 15 GIÂY (TIMEOUT)
  // --------------------------------------------------------------------------
  handleTimeout() {
    if (this.isAnswering || !this.gameActive) return;
    this.isAnswering = true;

    if (window.soundSystem) {
      window.soundSystem.playWrong();
    }
    this.combo = 0;
    this.lives--;

    const targetWord = this.currentQuestion.target;
    if (window.soundSystem) {
      window.soundSystem.speak(targetWord.hiragana);
    }

    // Lưu từ vào Sổ tay từ hay sai vì không kịp phản xạ
    this.addMistake(targetWord);
    this.updateMistakeBadgeCount();

    // Highlight đáp án đúng
    const buttons = document.querySelectorAll('.game-opt-btn');
    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (this.currentQuestion.options[idx].id === targetWord.id) {
        btn.classList.add('correct');
      }
    });

    if (window.mascot) {
      if (window.mascot.character === 'sensei') {
        window.mascot.setMood('strict', 'Hết 15 giây rồi! Đi thi JLPT N5 phản xạ chậm thế này là mất điểm đấy! 👩‍🏫', 3000);
      } else {
        window.mascot.setMood('sad', 'Hết giờ mất rồi! Cố gắng bấm nhanh hơn ở câu sau nhé! ⏰', 2200);
      }
    }

    this.updateHUD();

    setTimeout(() => {
      this.currentIndex++;
      this.loadQuestion();
    }, 2000);
  }

  // --------------------------------------------------------------------------
  // CẬP NHẬT GIAO DIỆN HUD
  // --------------------------------------------------------------------------
  updateHUD() {
    const heartsEl = document.getElementById('game-hearts');
    const comboEl = document.getElementById('game-combo');
    const scoreEl = document.getElementById('game-score');
    const highScoreEl = document.getElementById('game-highscore-val');

    if (heartsEl) {
      heartsEl.textContent = '❤️ '.repeat(Math.max(0, this.lives)) + '🖤 '.repeat(Math.max(0, this.maxLives - this.lives));
    }
    if (comboEl) {
      comboEl.textContent = `🔥 Combo: x${this.combo}`;
      if (this.combo >= 2) {
        comboEl.classList.add('on-fire');
      } else {
        comboEl.classList.remove('on-fire');
      }
    }
    if (scoreEl) {
      scoreEl.textContent = `⭐ Điểm: ${this.score}`;
    }
    if (highScoreEl) {
      highScoreEl.textContent = this.highScore;
    }
  }

  updateMistakeBadgeCount() {
    const el = document.getElementById('mistake-badge-count');
    if (el) el.textContent = this.mistakesList.length;
  }

  // --------------------------------------------------------------------------
  // KẾT THÚC MÀN CHƠI & BẮN PHÁO HOA CONFETTI CANVAS
  // --------------------------------------------------------------------------
  endGame(isVictory) {
    this.gameActive = false;
    clearInterval(this.timer);

    const card = document.getElementById('game-card');
    if (!card) return;

    const isNewRecord = this.score > 0 && this.score >= this.highScore;

    const totalWords = Math.max(1, this.words.length);
    const percent = Math.min(100, Math.round((this.correctAnswersCount / totalWords) * 100));
    const effectiveScore = isVictory ? Math.max(70, percent) : percent;

    if (this.currentLesson) {
      if (effectiveScore >= 70) {
        if (window.roadmapModule && typeof window.roadmapModule.recordMissionProgress === 'function') {
          window.roadmapModule.recordMissionProgress(this.currentLesson, 'game', {
            gameDone: true,
            gameScore: effectiveScore
          });
        }
      }
    }

    if (isVictory) {
      if (window.soundSystem) window.soundSystem.playVictory();
      this.launchCanvasConfetti();

      if (window.mascot) {
        window.mascot.setMood('celebrate', 'OMEDETOU! Bạn đã xuất sắc vượt qua toàn bộ thử thách từ vựng N5! 🏆🌸', 5000);
      }
      if (window.app) {
        window.app.addExp(60);
        window.app.addCoins(20);
      }
    } else {
      if (window.soundSystem) window.soundSystem.playWrong();
      if (window.mascot) {
        window.mascot.setMood('sad', 'Hết tim rồi! Đừng nản lòng, hãy mở Sổ tay từ hay sai để ôn lại nhé! 🐾', 4000);
      }
    }

    card.innerHTML = `
      <div class="game-over-panel ${isVictory ? 'victory' : 'defeat'}">
        <div class="result-trophy">${isVictory ? '🏆' : '💪'}</div>
        <h2 class="result-title">${isVictory ? 'CHIẾN THẮNG XUẤT SẮC!' : 'HẾT LƯỢT CHƠI - ĐỪNG BỎ CUỘC!'}</h2>
        
        ${isNewRecord ? `<div class="new-record-banner">🎉 KỶ LỤC ĐIỂM SỐ MỚI: ${this.highScore} ĐIỂM! 🎉</div>` : ''}

        ${this.currentLesson ? `
          <div class="mission-outcome-box ${effectiveScore >= 70 ? 'passed' : 'failed'}">
            ${effectiveScore >= 70 ? `
              <div class="mission-outcome-title">✅ ĐÃ HOÀN THÀNH NHIỆM VỤ 2: BÀI ${this.currentLesson} (${effectiveScore}%)!</div>
              <p>Chúc mừng em! Đã đạt yêu cầu chuẩn (≥ 70%) của Cô Tanaka!</p>
            ` : `
              <div class="mission-outcome-title">⏳ CHƯA ĐẠT CHUẨN 70% (Hiện tại: ${effectiveScore}%)</div>
              <p>Cần tối thiểu 70% câu trả lời chính xác để Cô Tanaka cấp điểm bài học. Hãy chơi lại nhé!</p>
            `}
          </div>
        ` : ''}

        <div class="stats-summary">
          <div class="stat-box">
            <span class="stat-number">${this.score}</span>
            <span class="stat-label">Tổng Điểm ⭐</span>
          </div>
          <div class="stat-box">
            <span class="stat-number">x${this.maxCombo}</span>
            <span class="stat-label">Combo Max 🔥</span>
          </div>
          <div class="stat-box">
            <span class="stat-number">${this.correctAnswersCount}/${this.words.length} (${effectiveScore}%)</span>
            <span class="stat-label">Đúng/Tổng 📖</span>
          </div>
          <div class="stat-box">
            <span class="stat-number">${this.highScore}</span>
            <span class="stat-label">Kỷ Lục Cao Nhất 🏆</span>
          </div>
        </div>

        <div class="game-over-actions">
          <button class="btn btn-primary btn-large" onclick="${this.currentLesson ? `window.guessGame.startLessonGame(${this.currentLesson})` : 'window.guessGame.start(window.JLPT_DATA.n5)'}">
            🔄 Chơi lại ván mới
          </button>
          ${this.mistakesList.length > 0 ? `
            <button class="btn btn-danger btn-large" onclick="window.guessGame.openMistakeModal()">
              📕 Xem ${this.mistakesList.length} từ hay sai
            </button>
          ` : ''}
          <button class="btn btn-secondary btn-large" onclick="window.app.switchTab('strict-sensei')">
            👩‍🏫 Khảo bài với Cô Tanaka
          </button>
        </div>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // HIỆU ỨNG PHÁO HOA CONFETTI CANVAS SIÊU MƯỢT
  // --------------------------------------------------------------------------
  launchCanvasConfetti() {
    let canvas = document.getElementById('confetti-canvas');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'confetti-canvas';
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '99999';
      document.body.appendChild(canvas);
    }

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#FF6B6B', '#FFA94D', '#FFD43B', '#51CF66', '#339AF0', '#CC5DE8', '#FF922B'];
    const particles = [];
    const particleCount = 120;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2 + 100,
        r: Math.random() * 6 + 4,
        d: Math.random() * particleCount,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.floor(Math.random() * 10) - 10,
        tiltAngleIncremental: Math.random() * 0.07 + 0.05,
        tiltAngle: 0,
        vx: (Math.random() - 0.5) * 18,
        vy: (Math.random() - 0.7) * 22,
        gravity: 0.35,
        alpha: 1
      });
    }

    let frame = 0;
    function renderConfetti() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      particles.forEach(p => {
        p.tiltAngle += p.tiltAngleIncremental;
        p.vy += p.gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.tilt = Math.sin(p.tiltAngle) * 15;
        p.alpha -= 0.007;

        if (p.alpha > 0) {
          alive = true;
          ctx.beginPath();
          ctx.lineWidth = p.r;
          ctx.strokeStyle = p.color;
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.moveTo(p.x + p.tilt + p.r / 4, p.y);
          ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 4);
          ctx.stroke();
        }
      });

      frame++;
      if (alive && frame < 200) {
        requestAnimationFrame(renderConfetti);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    renderConfetti();

    if (window.mascot && typeof window.mascot.launchConfetti === 'function') {
      window.mascot.launchConfetti();
    }
  }

  // --------------------------------------------------------------------------
  // SỔ TAY TỪ HAY SAI (MISTAKES NOTEBOOK MODAL)
  // --------------------------------------------------------------------------
  openMistakeModal() {
    const modal = document.getElementById('guess-mistake-modal');
    if (!modal) return;
    this.renderMistakesModalContent();
    modal.classList.remove('hidden');
    if (window.soundSystem) window.soundSystem.playPop();
  }

  closeMistakeModal() {
    const modal = document.getElementById('guess-mistake-modal');
    if (modal) modal.classList.add('hidden');
  }

  renderMistakesModalContent() {
    const body = document.getElementById('guess-mistake-modal-body');
    if (!body) return;

    if (this.mistakesList.length === 0) {
      body.innerHTML = `
        <div class="mistake-empty-state">
          <span class="empty-icon">🎉</span>
          <h4>Tuyệt vời! Bạn chưa có từ nào bị trả lời sai!</h4>
          <p>Hãy tiếp tục giữ vững phong độ phản xạ từ vựng N5 nhé!</p>
        </div>
      `;
      return;
    }

    let listHtml = `
      <div class="mistake-actions-top">
        <span>Hiện có <strong>${this.mistakesList.length}</strong> từ vựng bạn từng nhầm lẫn:</span>
        <div style="display:flex; gap:8px;">
          <button class="btn btn-primary btn-sm" onclick="window.guessGame.startMistakePractice()">
            🎯 Luyện tập riêng các từ này
          </button>
          <button class="btn btn-secondary btn-sm" onclick="window.guessGame.clearAllMistakes()">
            🧹 Xóa tất cả
          </button>
        </div>
      </div>
      <div class="mistake-items-list">
    `;

    this.mistakesList.forEach(item => {
      listHtml += `
        <div class="mistake-item-row" id="mistake-row-${item.id}">
          <div class="mistake-illus">
            ${window.getVocabIllustration(item)}
          </div>
          <div class="mistake-info">
            <div class="mistake-word-jp">
              <strong class="kanji">${item.kanji}</strong>
              <span class="hira">${item.hiragana}</span>
              <span class="romaji">(${item.romaji})</span>
              ${item.hanViet ? `<span class="badge-hanviet">Hán: ${item.hanViet}</span>` : ''}
            </div>
            <div class="mistake-meaning"><strong>Nghĩa:</strong> ${item.meaning || item.vietnamese}</div>
            ${item.commonMistake ? `
              <div class="mistake-note">⚠️ <em>Lỗi hay gặp:</em> ${item.commonMistake}</div>
            ` : ''}
          </div>
          <div class="mistake-actions">
            <button class="btn-voice-mini" onclick="window.soundSystem.speak('${item.hiragana}')" title="Nghe phát âm chuẩn">
              🔊 Nghe
            </button>
            <button class="btn-sensei-mini" onclick="window.guessGame.askSenseiAboutWord('${item.id}')" title="Hỏi cô Tanaka về từ này">
              👩‍🏫 Cô giảng
            </button>
            <button class="btn-remove-mini" onclick="window.guessGame.removeMistake('${item.id}')" title="Đã nhớ rồi, xóa khỏi sổ tay sai">
              ✓ Đã nhớ
            </button>
          </div>
        </div>
      `;
    });

    listHtml += '</div>';
    body.innerHTML = listHtml;
  }

  askSenseiAboutWord(wordId) {
    const word = this.mistakesList.find(w => w.id === wordId) || this.allWords.find(w => w.id === wordId);
    if (!word) return;

    this.closeMistakeModal();
    if (window.app) {
      window.app.switchTab('strict-sensei');
    }

    if (window.senseiAI) {
      window.senseiAI.explainMistake(word, null);
    }
  }
}

// Khởi tạo instance toàn cục
window.guessGame = new VocabGuessGame();
