// ============================================================================
// MODULE MOCK TEST: BÀI THI THỬ MINI JLPT N5 BẢN QUYỀN CÔ TAKAGI
// 1. Đề thi 15 câu chuẩn cấu trúc 4 phần (Moji-Goi, Kanji, Bunpou, Choukai nghe hiểu)
// 2. Đồng hồ đếm ngược 10 phút (600s), ma trận 15 câu nhảy nhanh
// 3. Đóng dấu mộc đỏ son 合格 (ĐỖ) hoặc 不合格 (TRƯỢT) chuẩn Inkan Nhật Bản
// 4. Mổ xẻ bẫy đề thi và giải thích từng câu chi tiết của Cô Giáo Tanaka
// ============================================================================

const JLPT_N5_MOCK_EXAM = [
  // --------------------------------------------------------------------------
  // PHẦN 1: MOJI - GOI (TỪ VỰNG & CÁCH ĐỌC CHỮ KANJI) - 4 CÂU
  // --------------------------------------------------------------------------
  {
    id: 'q01',
    mondai: 1,
    mondaiTitle: 'Mondai 1: Moji-Goi (Cách đọc chữ Kanji gạch chân)',
    instruction: 'Chọn cách đọc Hiragana đúng của từ được gạch chân:',
    sentence: 'きのう、<u>本</u> を ３さつ かいました。',
    targetWord: '本',
    options: ['ぼん', 'ほん', 'ぽん', 'はん'],
    correctIndex: 1, // B. ほん
    meaning: 'Hôm qua tôi đã mua 3 cuốn sách.',
    takagiExplanation: 'Chữ「本」đứng độc lập đọc chuẩn là「ほん」(hon). Nhiều bạn học sinh bị nhầm lẫn với cách biến âm của lượng từ đếm số cuốn sách (さんぼん/いっぽん) nên chọn nhầm ぼん hoặc ぽん!'
  },
  {
    id: 'q02',
    mondai: 1,
    mondaiTitle: 'Mondai 1: Moji-Goi (Cách đọc chữ Kanji gạch chân)',
    instruction: 'Chọn cách đọc Hiragana đúng của từ được gạch chân:',
    sentence: 'きょうは とても <u>天気</u> が いいですね。',
    targetWord: '天気',
    options: ['でんき', 'てんき', 'てんぎ', 'でんぎ'],
    correctIndex: 1, // B. てんき
    meaning: 'Hôm nay thời tiết đẹp quá nhỉ.',
    takagiExplanation: 'Bẫy âm đục kinh điển!「天気」(Thời tiết) đọc là「てんき」(tenki) âm trong. Còn「でんき」(denki) có âm đục là "Điện khí", nghĩa là bóng đèn hoặc dòng điện!'
  },
  {
    id: 'q03',
    mondai: 1,
    mondaiTitle: 'Mondai 1: Moji-Goi (Cách đọc chữ Kanji gạch chân)',
    instruction: 'Chọn cách đọc Hiragana đúng của từ được gạch chân:',
    sentence: 'あさ、パン と <u>卵</u> を たべました。',
    targetWord: '卵',
    options: ['たばこ', 'たまご', 'だまご', 'たまごう'],
    correctIndex: 1, // B. たまご
    meaning: 'Buổi sáng tôi đã ăn bánh mì và trứng.',
    takagiExplanation: 'Chữ「卵」(Trứng) đọc là「たまご」(tamago). Không có trường âm (không phải tamagou), và không được nhầm với「たばこ」(thuốc lá)!'
  },
  {
    id: 'q04',
    mondai: 1,
    mondaiTitle: 'Mondai 1: Moji-Goi (Cách đọc chữ Kanji gạch chân)',
    instruction: 'Chọn cách đọc Hiragana đúng của từ được gạch chân:',
    sentence: 'この <u>部屋</u> は あかるい です。',
    targetWord: '部屋',
    options: ['へや', 'べや', 'えや', 'へやま'],
    correctIndex: 0, // A. へや
    meaning: 'Căn phòng này rất sáng sủa.',
    takagiExplanation: 'Chữ「部屋」(Căn phòng) đọc là「へや」(heya). Chữ 部 khi đứng một mình hay trong từ này giữ âm trong là へ, không biến thành べya đâu nhé!'
  },

  // --------------------------------------------------------------------------
  // PHẦN 2: KANJI (NHÌN TỪ HIRAGANA -> CHỌN CHỮ KANJI ĐÚNG) - 4 CÂU
  // --------------------------------------------------------------------------
  {
    id: 'q05',
    mondai: 2,
    mondaiTitle: 'Mondai 2: Kanji (Chọn chữ Hán tương ứng)',
    instruction: 'Chọn chữ Kanji đúng của từ được gạch chân:',
    sentence: 'あした、レストラン で ごはん を <u>たべます</u>。',
    targetWord: 'たべます',
    options: ['飲みます', '食べます', '見ます', '行きます'],
    correctIndex: 1, // B. 食べます
    meaning: 'Ngày mai tôi sẽ ăn cơm ở nhà hàng.',
    takagiExplanation: 'Động từ "Ăn" là chữ THỰC「食」trong「食べます」. Chữ A là chữ ẨM「飲」(Uống), chữ C là KIẾN「見」(Nhìn), chữ D là HÀNH「行」(Đi). Không được nhầm giữa Ăn và Uống!'
  },
  {
    id: 'q06',
    mondai: 2,
    mondaiTitle: 'Mondai 2: Kanji (Chọn chữ Hán tương ứng)',
    instruction: 'Chọn chữ Kanji đúng của từ được gạch chân:',
    sentence: 'のど が かわきましたから、冷たい <u>みず</u> を ください。',
    targetWord: 'みず',
    options: ['氷', '永', '水', '木'],
    correctIndex: 2, // C. 水
    meaning: 'Vì khát nước nên xin hãy cho tôi nước lạnh.',
    takagiExplanation: 'Nước là chữ THỦY「水」. Chú ý: Chữ 氷 có thêm dấu phẩy ở góc trên là chữ BĂNG (nước đá), còn chữ 木 là MỘC (cây cối). Nhìn kỹ từng nét phẩy nhé!'
  },
  {
    id: 'q07',
    mondai: 2,
    mondaiTitle: 'Mondai 2: Kanji (Chọn chữ Hán tương ứng)',
    instruction: 'Chọn chữ Kanji đúng của từ được gạch chân:',
    sentence: 'わたし の いえ に かわいい <u>いぬ</u> が います。',
    targetWord: 'いぬ',
    options: ['太', '犬', '大', '天'],
    correctIndex: 1, // B. 犬
    meaning: 'Ở nhà tôi có một chú chó rất đáng yêu.',
    takagiExplanation: 'Con chó là chữ KHUYỂN「犬」, có dấu chấm ở trên vai phải! Chữ A「太」là chữ THÁI (béo) dấu chấm ở dưới bụng, chữ C「大」là chữ ĐẠI (to lớn) không có chấm nào!'
  },
  {
    id: 'q08',
    mondai: 2,
    mondaiTitle: 'Mondai 2: Kanji (Chọn chữ Hán tương ứng)',
    instruction: 'Chọn chữ Kanji đúng của từ được gạch chân:',
    sentence: 'まいしゅう、にほんご の <u>ほん</u> を よみます。',
    targetWord: 'ほん',
    options: ['木', '本', '体', '休'],
    correctIndex: 1, // B. 本
    meaning: 'Mỗi tuần tôi đều đọc sách tiếng Nhật.',
    takagiExplanation: 'Cuốn sách là chữ BẢN「本」với một nét gạch ngang ở gốc cây. Chữ A là 木 (cây cối), chữ D là 休 (nghỉ ngơi - người tựa vào gốc cây).'
  },

  // --------------------------------------------------------------------------
  // PHẦN 3: BUNPOU (NGỮ PHÁP & TRỢ TỪ N5) - 4 CÂU
  // --------------------------------------------------------------------------
  {
    id: 'q09',
    mondai: 3,
    mondaiTitle: 'Mondai 3: Bunpou (Ngữ pháp & Trợ từ điền vào chỗ trống)',
    instruction: 'Chọn từ hoặc trợ từ thích hợp nhất điền vào (   ):',
    sentence: 'わたし は まいにち としょかん (   ) べんきょうします。',
    targetWord: '(   )',
    options: ['に', 'で', 'を', 'へ'],
    correctIndex: 1, // B. で
    meaning: 'Mỗi ngày tôi đều học bài ở thư viện.',
    takagiExplanation: 'Thư viện là nơi DIỄN RA HÀNH ĐỘNG HỌC BÀI, bắt buộc phải dùng trợ từ「で」! Rất nhiều bạn chọn nhầm「に」vì dịch máy móc chữ "ở" trong tiếng Việt!'
  },
  {
    id: 'q10',
    mondai: 3,
    mondaiTitle: 'Mondai 3: Bunpou (Ngữ pháp & Trợ từ điền vào chỗ trống)',
    instruction: 'Chọn từ hoặc trợ từ thích hợp nhất điền vào (   ):',
    sentence: 'まいあさ、わたし は ７じ (   ) おきます。',
    targetWord: '(   )',
    options: ['に', 'で', 'を', 'から'],
    correctIndex: 0, // A. に
    meaning: 'Mỗi sáng tôi thức dậy vào lúc 7 giờ.',
    takagiExplanation: 'Thời gian có con số cụ thể (7 giờ, ngày 15, tháng 4) làm mốc thực hiện hành động bắt buộc đi với trợ từ「に」. Không dùng「で」chỉ thời gian!'
  },
  {
    id: 'q11',
    mondai: 3,
    mondaiTitle: 'Mondai 3: Bunpou (Ngữ pháp & Trợ từ điền vào chỗ trống)',
    instruction: 'Chọn từ hoặc trợ từ thích hợp nhất điền vào (   ):',
    sentence: 'にほん の さくら を (   ) ことが ありますか。',
    targetWord: '(   )',
    options: ['みる', 'みた', 'みます', 'みて'],
    correctIndex: 1, // B. みた
    meaning: 'Bạn đã từng nhìn thấy hoa anh đào Nhật Bản chưa?',
    takagiExplanation: 'Mẫu câu diễn tả kinh nghiệm đã từng làm gì là:「V-た ことがあります」. Động từ 見ます chia sang thể Ta là「みた」! Không dùng thể từ điển hay thể ます!'
  },
  {
    id: 'q12',
    mondai: 3,
    mondaiTitle: 'Mondai 3: Bunpou (Ngữ pháp & Trợ từ điền vào chỗ trống)',
    instruction: 'Chọn từ hoặc trợ từ thích hợp nhất điền vào (   ):',
    sentence: 'きょうしつ に たなかせんせい (   ) います。',
    targetWord: '(   )',
    options: ['を', 'が', 'で', 'は'],
    correctIndex: 1, // B. が
    meaning: 'Trong lớp học có thầy Tanaka.',
    takagiExplanation: 'Cấu trúc chỉ sự tồn tại: [Địa điểm] に [Đối tượng] が います/あります. Đối tượng tồn tại phải đi với trợ từ「が」, không bao giờ dùng「を」với います!'
  },

  // --------------------------------------------------------------------------
  // PHẦN 4: CHOUKAI (NGHE HIỂU ĐỐI THOẠI ÂM THANH) - 3 CÂU
  // --------------------------------------------------------------------------
  {
    id: 'q13',
    mondai: 4,
    mondaiTitle: 'Mondai 4: Choukai (Nghe hiểu đối thoại Audio)',
    instruction: 'Bấm nút "🔊 Bấm Nghe Đoạn Hội Thoại" và chọn câu trả lời đúng:',
    sentence: '🎧 [Đoạn đối thoại giá tiền cuốn sách]',
    audioScript: 'おとこのひと：すみません、この本はいくらですか。おんなのひと：それは、ごひゃくえんですよ。もんだい：本はいくらですか。',
    displayQuestion: 'Q: 本は いくら ですか。(Cuốn sách giá bao nhiêu?)',
    options: ['500えん', '5000えん', '1500えん', '50えん'],
    correctIndex: 0, // A. 500えん
    meaning: 'Người nam: "Xin lỗi, cuốn sách này giá bao nhiêu ạ?" - Người nữ: "Cái đó 500 yên bạn nhé." -> Câu hỏi: Cuốn sách giá bao nhiêu?',
    takagiExplanation: 'Người bán hàng trả lời rõ ràng:「ごひゃくえん」(500 yên). Số 500 đọc là go-hyaku. Nếu chọn 5000 là nhầm sang go-sen rồi!'
  },
  {
    id: 'q14',
    mondai: 4,
    mondaiTitle: 'Mondai 4: Choukai (Nghe hiểu đối thoại Audio)',
    instruction: 'Bấm nút "🔊 Bấm Nghe Đoạn Hội Thoại" và chọn câu trả lời đúng:',
    sentence: '🎧 [Đoạn đối thoại về kế hoạch ngày mai]',
    audioScript: 'おとこのひと：あした、いっしょに映画を見ませんか。おんなのひと：あしたは、ちょっと…。アルバイトがありますから。もんだい：おんなのひとは、あした何をしますか。',
    displayQuestion: 'Q: おんなのひと は あした 何を しますか。(Người phụ nữ ngày mai sẽ làm gì?)',
    options: ['えいが を みます', 'アルバイト を します', 'やすみます', 'りょこう に いきます'],
    correctIndex: 1, // B. アルバイト を します
    meaning: 'Người nam: "Ngày mai cùng đi xem phim nhé?" - Người nữ: "Ngày mai thì hơi... vì tôi có lịch làm thêm rồi." -> Câu hỏi: Người phụ nữ ngày mai làm gì?',
    takagiExplanation: 'Người phụ nữ đã khéo léo từ chối lời mời xem phim bằng câu:「あしたはちょっと…アルバイトがありますから」(Ngày mai tôi bận đi làm thêm rồi). Đáp án đúng là B!'
  },
  {
    id: 'q15',
    mondai: 4,
    mondaiTitle: 'Mondai 4: Choukai (Nghe hiểu đối thoại Audio)',
    instruction: 'Bấm nút "🔊 Bấm Nghe Đoạn Hội Thoại" và chọn câu trả lời đúng:',
    sentence: '🎧 [Đoạn đối thoại ngày Chủ Nhật]',
    audioScript: 'おんなのひと：たなかさん、日曜日にどこへ行きましたか。おとこのひと：どこも行きませんでした。うちでゆっくり休みました。もんだい：たなかさんは、日曜日に何をしましたか。',
    displayQuestion: 'Q: たなかさん は 日曜日 に 何を しましたか。(Chủ nhật Tanaka đã làm gì?)',
    options: ['うみ へ いきました', 'うち で やすみました', 'デパート で かいもの を しました', 'かいしゃ で はたらきました'],
    correctIndex: 1, // B. うち で やすみました
    meaning: 'Người nữ: "Anh Tanaka, chủ nhật anh đã đi đâu thế?" - Tanaka: "Tôi chẳng đi đâu cả. Tôi nghỉ ngơi thong thả ở nhà." -> Câu hỏi: Tanaka làm gì?',
    takagiExplanation: 'Tanaka đã nói:「どこも行きませんでした。うちでゆっくり休みました」(Không đi đâu cả, ở nhà nghỉ ngơi thong thả). Do đó đáp án chuẩn là B!'
  }
];

class JLPTMockTestModule {
  constructor() {
    this.questions = JLPT_N5_MOCK_EXAM;
    this.currentIndex = 0;
    this.userAnswers = {}; // { q01: 1, q02: 0, ... }
    this.timer = null;
    this.timeLeft = 600;   // 10 phút = 600 giây
    this.isExamStarted = false;
    this.isSubmitted = false;
    this.finalScore = 0;
    this.correctCount = 0;
  }

  init() {
    this.render();
  }

  // --------------------------------------------------------------------------
  // GIAO DIỆN CHÍNH CỦA TAB THI THỬ JLPT N5
  // --------------------------------------------------------------------------
  render() {
    const container = document.getElementById('mock-test-container');
    if (!container) return;

    if (!this.isExamStarted) {
      this.renderWelcomeScreen(container);
    } else if (this.isSubmitted) {
      this.renderResultScreen(container);
    } else {
      this.renderExamHall(container);
    }
  }

  // MÀN HÌNH CHÀO MỪNG & HƯỚNG DẪN THI
  renderWelcomeScreen(container) {
    container.innerHTML = `
      <div class="mock-welcome-card">
        <div class="welcome-badge-header">
          <span class="exam-cert-icon">🎌</span>
          <h2>KỲ THI THỬ NĂNG LỰC TIẾNG NHẬT MINI JLPT N5</h2>
          <p class="exam-subtitle">Chuẩn cấu trúc 4 phần thi • Giám thị: Cô giáo Tanaka (厳しい先生)</p>
        </div>

        <div class="exam-specs-grid">
          <div class="spec-card">
            <span class="spec-icon">📝</span>
            <strong>15 Câu hỏi</strong>
            <small>Đầy đủ 4 Mondai chuẩn đề JEES</small>
          </div>
          <div class="spec-card">
            <span class="spec-icon">⏱️</span>
            <strong>10 Phút</strong>
            <small>Bấm giờ đếm ngược tự động thu bài</small>
          </div>
          <div class="spec-card">
            <span class="spec-icon">💮</span>
            <strong>Mộc đỏ 合格</strong>
            <small>Đạt từ 70% trở lên để đỗ N5</small>
          </div>
          <div class="spec-card">
            <span class="spec-icon">👩‍🏫</span>
            <strong>Cô Tanaka mổ xẻ</strong>
            <small>Giải thích cặn kẽ từng bẫy đề thi</small>
          </div>
        </div>

        <div class="exam-rules-box">
          <h4>📋 Quy chế phòng thi của Cô Tanaka:</h4>
          <ul>
            <li><strong>Mondai 1 (Moji-Goi):</strong> 4 câu cách đọc chữ Kanji, cẩn thận bẫy âm đục và trường âm.</li>
            <li><strong>Mondai 2 (Kanji):</strong> 4 câu nhận diện chữ Hán, chú ý từng nét phẩy và nét chấm.</li>
            <li><strong>Mondai 3 (Bunpou):</strong> 4 câu ngữ pháp và trợ từ, phân biệt chính xác に / で / を.</li>
            <li><strong>Mondai 4 (Choukai):</strong> 3 câu nghe hiểu Audio, bấm nút nghe đoạn hội thoại để chọn đáp án.</li>
          </ul>
        </div>

        <div class="exam-start-actions">
          <button class="btn btn-primary btn-large btn-start-test" onclick="window.mockTestModule.startExam()">
            🚀 Bắt Đầu Làm Bài Thi Ngay (10 Phút)
          </button>
        </div>
      </div>
    `;
  }

  // BẮT ĐẦU TÍNH GIỜ VÀ MỞ BÀI THI
  startExam() {
    this.isExamStarted = true;
    this.isSubmitted = false;
    this.currentIndex = 0;
    this.userAnswers = {};
    this.timeLeft = 600; // 10 phút

    if (window.soundSystem) window.soundSystem.playCorrect();

    if (window.mascot) {
      window.mascot.setCharacter('sensei');
      window.mascot.setMood('strict', 'Thời gian làm bài thi 10 phút bắt đầu! Đọc đề thật kỹ, không được vội vàng! 👩‍🏫', 4000);
    }

    this.startTimer();
    this.render();
  }

  startTimer() {
    this.stopTimer();
    this.timer = setInterval(() => {
      this.timeLeft--;
      this.updateTimerDisplay();

      if (this.timeLeft <= 0) {
        this.stopTimer();
        alert('⏰ ĐÃ HẾT GIỜ LÀM BÀI! Hệ thống sẽ tự động thu bài nộp cho Cô Tanaka chấm!');
        this.submitExam();
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
    this.timer = null;
  }

  quitExam() {
    if (confirm('Bạn có chắc muốn thoát phòng thi? Tiến độ làm bài hiện tại sẽ bị hủy và trở về màn hình giới thiệu.')) {
      this.stopTimer();
      this.isExamStarted = false;
      this.isSubmitted = false;
      this.render();
      if (window.soundSystem) window.soundSystem.playPop();
    }
  }

  updateTimerDisplay() {
    const timerEl = document.getElementById('mock-exam-timer');
    if (!timerEl) return;

    const mins = Math.floor(this.timeLeft / 60);
    const secs = this.timeLeft % 60;
    const timeStr = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    
    timerEl.textContent = `⏳ ${timeStr}`;
    if (this.timeLeft <= 60) {
      timerEl.classList.add('urgent-red');
    } else {
      timerEl.classList.remove('urgent-red');
    }
  }

  // GIAO DIỆN PHÒNG THI (EXAM HALL)
  renderExamHall(container) {
    const q = this.questions[this.currentIndex];
    const mins = Math.floor(this.timeLeft / 60);
    const secs = this.timeLeft % 60;
    const timeStr = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    const selectedOpt = this.userAnswers[q.id];

    container.innerHTML = `
      <div class="exam-hall-layout">
        
        <!-- CỘT TRÁI: KHU VỰC CÂU HỎI HIỆN TẠI -->
        <div class="exam-question-area">
          
          <!-- Header câu hỏi & Mondai -->
          <div class="exam-q-header">
            <div class="mondai-badge">${q.mondaiTitle}</div>
            <div class="q-counter-badge">Câu ${this.currentIndex + 1} / ${this.questions.length}</div>
          </div>

          <div class="exam-q-instruction">${q.instruction}</div>

          <!-- Nội dung câu hỏi -->
          <div class="exam-q-body">
            ${q.mondai === 4 ? `
              <div class="choukai-audio-player-box">
                <button class="btn-choukai-play" onclick="window.mockTestModule.playChoukaiAudio('${q.audioScript}')">
                  🔊 Bấm Nghe Đoạn Hội Thoại Choukai
                </button>
                <div class="audio-wave-anim">
                  <span></span><span></span><span></span><span></span><span></span>
                </div>
                <div class="choukai-q-text">${q.displayQuestion}</div>
              </div>
            ` : `
              <h2 class="exam-q-sentence">${q.sentence}</h2>
            `}
          </div>

          <!-- Danh sách 4 phương án lựa chọn A, B, C, D -->
          <div class="exam-options-grid">
            ${q.options.map((opt, idx) => {
              const letter = ['1', '2', '3', '4'][idx];
              const isChecked = selectedOpt === idx;
              return `
                <button class="exam-opt-item ${isChecked ? 'selected' : ''}" 
                        onclick="window.mockTestModule.selectAnswer('${q.id}', ${idx})">
                  <span class="opt-num">${letter}</span>
                  <span class="opt-content">${opt}</span>
                </button>
              `;
            }).join('')}
          </div>

          <!-- Thanh điều hướng nút Câu trước / Câu kế / Nộp bài / Thoát -->
          <div class="exam-nav-footer">
            <button class="btn btn-secondary" onclick="window.mockTestModule.prevQuestion()" ${this.currentIndex === 0 ? 'disabled' : ''}>
              ⬅️ Câu trước
            </button>
            
            <button class="btn btn-danger btn-submit-exam" onclick="window.mockTestModule.confirmSubmit()">
              📝 Nộp bài thi
            </button>

            <button class="btn btn-outline-danger" onclick="window.mockTestModule.quitExam()">
              ⏹️ Thoát phòng thi
            </button>

            <button class="btn btn-primary" onclick="window.mockTestModule.nextQuestion()" ${this.currentIndex === this.questions.length - 1 ? 'disabled' : ''}>
              Câu tiếp theo ➡️
            </button>
          </div>

        </div>

        <!-- CỘT PHẢI: MA TRẬN 15 CÂU HỎI & ĐỒNG HỒ ĐẾM NGƯỢC -->
        <div class="exam-sidebar-palette">
          <div class="exam-timer-box">
            <div class="timer-label">Thời gian làm bài:</div>
            <div class="timer-digits ${this.timeLeft <= 60 ? 'urgent-red' : ''}" id="mock-exam-timer">
              ⏳ ${timeStr}
            </div>
          </div>

          <div class="palette-title">Danh sách 15 câu hỏi:</div>
          <div class="question-palette-grid">
            ${this.questions.map((item, idx) => {
              const isAnswered = this.userAnswers[item.id] !== undefined;
              const isCurrent = idx === this.currentIndex;
              return `
                <button class="palette-num-btn ${isAnswered ? 'answered' : ''} ${isCurrent ? 'current' : ''}" 
                        onclick="window.mockTestModule.jumpToQuestion(${idx})" 
                        title="Câu ${idx + 1}">
                  ${idx + 1}
                </button>
              `;
            }).join('')}
          </div>

          <div class="palette-legend">
            <span class="legend-item"><span class="dot answered"></span> Đã chọn</span>
            <span class="legend-item"><span class="dot current"></span> Đang xem</span>
            <span class="legend-item"><span class="dot empty"></span> Chưa chọn</span>
          </div>

          <div class="exam-mascot-tip">
            👩‍🏫 <em>"Đừng để trống câu nào! Nhớ kiểm tra lại toàn bộ trước khi bấm nộp bài nhé!"</em>
          </div>
        </div>

      </div>
    `;
  }

  // PHÁT ÂM THANH ĐOẠN HỘI THOẠI CHOUKAI (CÓ NGẮT NGHỈ RÕ RÀNG)
  playChoukaiAudio(script) {
    if (!window.soundSystem) return;
    window.soundSystem.speak(script, 0.92);
  }

  selectAnswer(qId, optIndex) {
    this.userAnswers[qId] = optIndex;
    if (window.soundSystem) window.soundSystem.playPop();
    this.render();
  }

  nextQuestion() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.render();
    }
  }

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.render();
    }
  }

  jumpToQuestion(index) {
    this.currentIndex = index;
    this.render();
  }

  confirmSubmit() {
    const answeredCount = Object.keys(this.userAnswers).length;
    const total = this.questions.length;

    if (answeredCount < total) {
      const missing = total - answeredCount;
      if (!confirm(`Em vẫn còn ${missing} câu chưa chọn đáp án! Có chắc chắn muốn nộp bài sớm không? 👩‍🏫`)) {
        return;
      }
    } else {
      if (!confirm('Em có chắc chắn muốn nộp bài để Cô Tanaka chấm điểm không?')) {
        return;
      }
    }

    this.submitExam();
  }

  // CHẤM ĐIỂM & ĐÓNG DẤU MỘC ĐỎ
  submitExam() {
    clearInterval(this.timer);
    this.isSubmitted = true;

    // Tính số câu đúng
    let correct = 0;
    this.questions.forEach(q => {
      if (this.userAnswers[q.id] === q.correctIndex) {
        correct++;
      }
    });

    this.correctCount = correct;
    this.finalScore = Math.round((correct / this.questions.length) * 100);

    const isPassed = this.finalScore >= 70;

    if (isPassed) {
      if (window.soundSystem) window.soundSystem.playVictory();
      if (window.guessGame && typeof window.guessGame.launchCanvasConfetti === 'function') {
        window.guessGame.launchCanvasConfetti();
      }
      if (window.mascot) {
        window.mascot.setMood('celebrate', `OMEDETOU! Em đã đỗ kỳ thi thử N5 với ${this.finalScore}/100 điểm! 🏆🌸`, 5000);
      }
      if (window.app) {
        window.app.addExp(100);
        window.app.addCoins(30);
      }
    } else {
      if (window.soundSystem) window.soundSystem.playWrong();
      if (window.mascot) {
        window.mascot.setCharacter('sensei');
        window.mascot.setMood('strict', `Không đạt rồi! Điểm số ${this.finalScore}/100 là TRƯỢT N5! Xem lại từng câu sai ngay! 👩‍🏫`, 4500);
      }
    }

    this.render();
  }

  // MÀN HÌNH BẢNG ĐIỂM TỔNG KẾT & ĐÓNG DẤU MỘC ĐỎ
  renderResultScreen(container) {
    const isPassed = this.finalScore >= 70;
    const today = new Date().toLocaleDateString('vi-VN');

    container.innerHTML = `
      <div class="mock-result-dashboard">
        
        <!-- BẢNG ĐIỂM & MỘC ĐỎ CHỨNG NHẬN -->
        <div class="exam-cert-card ${isPassed ? 'passed' : 'failed'}">
          
          <div class="cert-watermark">JLPT N5</div>

          <!-- MỘC ĐỎ TRUYỀN THỐNG NHẬT BẢN (HANKO / INKAN STAMP) -->
          <div class="hanko-seal-stamp ${isPassed ? 'stamp-goukaku' : 'stamp-fugoukaku'}">
            <div class="stamp-circle-inner">
              <span class="stamp-top-text">日本テスト</span>
              <span class="stamp-main-text">${isPassed ? '合格' : '不合格'}</span>
              <span class="stamp-bottom-text">高木先生認</span>
            </div>
          </div>

          <div class="cert-header">
            <h2>KẾT QUẢ THI THỬ JLPT N5 (BẢN ĐÁNH GIÁ)</h2>
            <p>Kỳ thi sát hạch toàn diện • Đánh giá bởi Cô giáo Tanaka (東京)</p>
          </div>

          <!-- Điểm số & Xếp loại -->
          <div class="cert-score-display">
            <div class="score-big-box">
              <span class="score-val">${this.finalScore}</span>
              <span class="score-unit">/ 100 ĐIỂM</span>
            </div>
            <div class="score-detail-pills">
              <span class="cert-pill">🎯 Số câu đúng: <strong>${this.correctCount} / ${this.questions.length}</strong></span>
              <span class="cert-pill">⏱️ Thời gian thi: <strong>${Math.floor((600 - this.timeLeft) / 60)} phút ${(600 - this.timeLeft) % 60} giây</strong></span>
              <span class="cert-pill">📅 Ngày thi: <strong>${today}</strong></span>
              <span class="cert-pill status-pill ${isPassed ? 'text-pass' : 'text-fail'}">
                ${isPassed ? '✓ KẾT QUẢ: ĐỖ (合格)' : '✗ KẾT QUẢ: TRƯỢT (不合格)'}
              </span>
            </div>
          </div>

          <!-- Lời phê của Cô Giáo Tanaka -->
          <div class="sensei-verdict-box">
            <div class="verdict-avatar">👩‍🏫</div>
            <div class="verdict-content">
              <h4>Lời phê duyệt của Cô giáo Tanaka:</h4>
              <p>
                ${isPassed ? 
                  `"Làm rất tốt! Đạt ${this.finalScore}/100 điểm nghĩa là em đã nắm chắc nền tảng từ vựng, Kanji và ngữ pháp N5 cơ bản. Tuy nhiên, kỳ thi thật sẽ có thêm áp lực phòng thi, đừng bao giờ tự mãn mà hãy tiếp tục rèn luyện thêm Kaiwa và Choukai nhé!"` :
                  `"Chậc chậc! Chỉ đạt được ${this.finalScore}/100 điểm là TRƯỢT N5 rồi đấy! Đề thi cơ bản thế này mà vẫn nhầm trợ từ に/で, nhầm chữ Hán và nghe chưa kịp bắt từ khóa! Em phải mở ngay mục Sổ tay và Lớp khảo bài để chép phạt và ôn lại ngay lập tức!"`
                }
              </p>
            </div>
          </div>

          <div class="cert-actions-row">
            <button class="btn btn-primary btn-large" onclick="window.mockTestModule.startExam()">
              🔄 Thi thử lại lần nữa
            </button>
            <button class="btn btn-secondary btn-large" onclick="window.app.switchTab('strict-sensei')">
              👩‍🏫 Đi khảo bài cùng Cô Tanaka
            </button>
          </div>

        </div>

        <!-- DANH SÁCH CHI TIẾT 15 CÂU HỎI VÀ LỜI GIẢI CỦA CÔ TAKAGI -->
        <div class="exam-review-section">
          <h3 class="review-title">📋 Bảng Mổ Xẻ Chi Tiết Từng Câu Hỏi & Lỗi Sai:</h3>

          <div class="review-questions-list">
            ${this.questions.map((q, idx) => {
              const userAns = this.userAnswers[q.id];
              const isCorrect = userAns === q.correctIndex;
              const userText = userAns !== undefined ? q.options[userAns] : 'Chưa chọn';
              const correctText = q.options[q.correctIndex];

              return `
                <div class="review-q-card ${isCorrect ? 'card-correct' : 'card-wrong'}">
                  <div class="review-q-header">
                    <span class="review-q-number">Câu ${idx + 1} (${q.mondaiTitle})</span>
                    <span class="review-status-tag ${isCorrect ? 'tag-correct' : 'tag-wrong'}">
                      ${isCorrect ? '✓ Đúng (+6.7đ)' : '✗ Sai (0đ)'}
                    </span>
                  </div>

                  <div class="review-q-content">
                    <div class="review-sentence">${q.mondai === 4 ? q.displayQuestion : q.sentence}</div>
                    ${q.mondai === 4 ? `
                      <button class="btn-audio-circle-mini" onclick="window.mockTestModule.playChoukaiAudio('${q.audioScript}')" title="Nghe lại đoạn Choukai">🔊 Nghe lại đoạn hội thoại</button>
                    ` : ''}
                    <div class="review-meaning"><em>Nghĩa tiếng Việt:</em> ${q.meaning}</div>
                  </div>

                  <div class="review-answers-compare">
                    <div class="ans-col ${isCorrect ? 'text-success' : 'text-danger'}">
                      <strong>Đáp án của bạn:</strong> ${userText}
                    </div>
                    <div class="ans-col text-correct-highlight">
                      <strong>Đáp án chuẩn của đề:</strong> ${correctText}
                    </div>
                  </div>

                  <!-- Lời mổ xẻ bẫy đề thi của Cô Tanaka -->
                  <div class="review-takagi-note">
                    <strong>👩‍🏫 Cô Tanaka giải thích:</strong> ${q.takagiExplanation}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

      </div>
    `;
  }
}

// Khởi tạo instance toàn cục
window.mockTestModule = new JLPTMockTestModule();
