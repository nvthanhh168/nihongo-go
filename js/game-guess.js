// ============================================================================
// GAME 1: ĐOÁN TỪ VỰNG TIẾNG NHẬT N5 (VOCABULARY GUESSING GAME) - HOÀN CHỈNH
// 4 Chế độ chơi, Lọc theo Chủ đề, 3 Mạng Tim, Đồng hồ 15s đếm ngược đổi màu,
// Màn hình chờ (Ready Screen) chuẩn mực: Chỉ chạy khi người dùng bấm BẮT ĐẦU!
// Tạm dừng (Pause), Dừng game (Quit), Combo streak x2/x3, High Score & Sổ tay từ sai
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
    this.gameState = 'ready'; // 'ready', 'playing', 'paused', 'ended'
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
  // KHỞI TẠO DỮ LIỆU - TUYỆT ĐỐI KHÔNG TỰ CHẠY ĐỒNG HỒ KHI MỞ TRANG
  // --------------------------------------------------------------------------
  init(words) {
    if (words && words.length > 0) {
      this.allWords = [...words];
    } else if (window.JLPT_DATA && window.JLPT_DATA.n5) {
      this.allWords = [...window.JLPT_DATA.n5];
    }
    this.gameActive = false;
    this.gameState = 'ready';
    this.renderReadyScreen();
  }

  // Khả năng tương thích ngược: start() sẽ mở màn hình chờ hoặc bắt đầu khi được gọi
  start(words, category = null, mode = null) {
    if (words && words.length > 0) {
      this.allWords = [...words];
    } else if (window.JLPT_DATA && window.JLPT_DATA.n5) {
      this.allWords = [...window.JLPT_DATA.n5];
    }
    if (category !== null) this.selectedCategory = category;
    if (mode !== null) this.gameMode = mode;

    this.renderReadyScreen();
  }

  // --------------------------------------------------------------------------
  // BẮT ĐẦU CHƠI THEO BÀI HỌC (CHUẨN BỊ MÀN HÌNH CHỜ RIÊNG CHO BÀI ĐÓ)
  // --------------------------------------------------------------------------
  setLesson(lessonNumber) {
    const lNum = lessonNumber === 'all' || !lessonNumber ? null : parseInt(lessonNumber, 10);
    this.currentLesson = lNum;
    this.selectedCategory = 'all';
    this.renderReadyScreen();
  }

  startLessonGame(lessonNumber) {
    this.setLesson(lessonNumber);
  }

  // Bắt đầu game chỉ với các từ trong Sổ tay từ hay sai
  startMistakePractice() {
    if (!this.mistakesList || this.mistakesList.length < 4) {
      alert('Sổ tay từ hay sai cần ít nhất 4 từ để bắt đầu luyện tập trắc nghiệm!');
      return;
    }
    this.closeMistakeModal();
    this.selectedCategory = 'all';
    this.currentLesson = null;
    this.allWords = [...window.JLPT_DATA.n5];
    this.words = [...this.mistakesList].sort(() => Math.random() - 0.5);

    this.startPlayingWithWords(this.words);

    if (window.mascot) {
      window.mascot.setMood('strict', 'Bắt đầu bài phục thù các từ hay sai! Tập trung và nhớ kỹ từng từ nhé! 👩‍🏫', 3500);
    }
  }

  setCategory(category) {
    this.selectedCategory = category;
    if (this.gameState === 'ready') {
      this.renderReadyScreen();
    } else {
      this.startPlaying();
    }
  }

  setMode(mode) {
    this.gameMode = mode;
    if (this.gameState === 'ready') {
      this.renderReadyScreen();
    } else {
      this.startPlaying();
    }
  }

  // --------------------------------------------------------------------------
  // MÀN HÌNH CHỜ (READY SCREEN) - CHỜ NGƯỜI DÙNG BẤM "BẮT ĐẦU CHƠI"
  // --------------------------------------------------------------------------
  renderReadyScreen() {
    this.gameActive = false;
    this.gameState = 'ready';
    clearInterval(this.timer);
    this.timer = null;

    const area = document.getElementById('guess-game-container');
    if (!area) return;

    if (!this.allWords || this.allWords.length === 0) {
      this.allWords = window.JLPT_DATA?.n5 || [];
    }

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
              <p>Mục tiêu: Đạt từ <strong>70% câu đúng</strong> trở lên để mở khóa bài tiếp theo!</p>
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

    const targetLvl = this.currentLesson >= 26 ? 'N4' : 'N5';
    const lessonInfo = this.currentLesson && window.LESSONS_DATA 
      ? window.LESSONS_DATA.getLesson(targetLvl, this.currentLesson) 
      : null;

    const readyTitle = lessonInfo 
      ? `🎮 THỬ THÁCH ĐOÁN TỪ BÀI ${this.currentLesson}`
      : '🎮 GAME ĐOÁN TỪ VỰNG TIẾNG NHẬT N5';

    const readySubtitle = lessonInfo 
      ? `Chủ đề: <strong>${lessonInfo.topicVi}</strong>. Gồm từ vựng trọng tâm Bài ${this.currentLesson} kèm ôn tập kết hợp.`
      : 'Rèn luyện phản xạ đoán nghĩa 4 đáp án nhanh trong 15 giây cho toàn bộ kho từ vựng N5.';

    area.innerHTML = `
      <!-- BỘ CHỌN BÀI HỌC NHANH (QUICK LESSON SELECTOR) -->
      ${quickSelectorHtml}

      <!-- BANNER NHIỆM VỤ NẾU CÓ -->
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

      <!-- MÀN HÌNH CHỜ (READY SCREEN) TRUNG TÂM -->
      <div class="game-ready-screen">
        <div class="ready-hero-card">
          <div class="ready-icon-anim">🎮</div>
          <h2 class="ready-title">${readyTitle}</h2>
          <p class="ready-subtitle">${readySubtitle}</p>

          <div class="ready-rules-grid">
            <div class="rule-badge">
              <span class="rule-icon">⏳</span>
              <strong>15s / Câu</strong>
              <small>Phản xạ nhanh nhận điểm thưởng</small>
            </div>
            <div class="rule-badge">
              <span class="rule-icon">❤️</span>
              <strong>3 Mạng Tim</strong>
              <small>Chọn sai bị trừ 1 mạng</small>
            </div>
            <div class="rule-badge">
              <span class="rule-icon">🔥</span>
              <strong>Combo x2 x3</strong>
              <small>Đúng liên tiếp nhân đôi điểm</small>
            </div>
            <div class="rule-badge">
              <span class="rule-icon">🎯</span>
              <strong>Mục tiêu: ≥ 70%</strong>
              <small>${this.currentLesson ? `Đạt chuẩn để mở Bài ${this.currentLesson + 1}` : 'Ghi điểm kỷ lục N5'}</small>
            </div>
          </div>

          <div class="ready-start-action">
            <button class="btn-start-game-huge" onclick="window.guessGame.startPlaying()">
              ▶️ BẮT ĐẦU CHƠI NGAY
            </button>
          </div>
        </div>
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
  // CHỈ KHI BẤM "BẮT ĐẦU CHƠI NGAY" MỚI KHỞI ĐỘNG CÂU HỎI VÀ ĐỒNG HỒ
  // --------------------------------------------------------------------------
  startPlaying() {
    let pool = this.allWords;

    if (this.currentLesson) {
      const targetLvl = this.currentLesson >= 26 ? 'N4' : 'N5';
      const lesson = window.LESSONS_DATA ? window.LESSONS_DATA.getLesson(targetLvl, this.currentLesson) : null;
      let lessonWords = (lesson && lesson.vocab && lesson.vocab.length > 0) ? [...lesson.vocab] : [];

      // Kèm thêm 2 từ của bài trước (nếu có) để ôn tập kết hợp theo chuẩn yêu cầu
      if (this.currentLesson > 1 && window.LESSONS_DATA) {
        const prevLvl = (this.currentLesson - 1) >= 26 ? 'N4' : 'N5';
        const prevLesson = window.LESSONS_DATA.getLesson(prevLvl, this.currentLesson - 1);
        if (prevLesson && prevLesson.vocab && prevLesson.vocab.length > 0) {
          const reviewWords = [...prevLesson.vocab].sort(() => Math.random() - 0.5).slice(0, 2);
          lessonWords = [...lessonWords, ...reviewWords];
        }
      }

      if (lessonWords.length >= 4) {
        pool = lessonWords;
      }
    } else if (this.selectedCategory !== 'all') {
      const catWords = this.allWords.filter(w => w.category === this.selectedCategory);
      if (catWords.length >= 4) {
        pool = catWords;
      }
    }

    this.words = [...pool].sort(() => Math.random() - 0.5);
    this.startPlayingWithWords(this.words);
  }

  startPlayingWithWords(words) {
    this.words = words;
    this.currentIndex = 0;
    this.score = 0;
    this.combo = 0;
    this.maxCombo = 0;
    this.lives = this.maxLives;
    this.gameActive = true;
    this.gameState = 'playing';
    this.isAnswering = false;
    this.correctAnswersCount = 0;

    if (window.soundSystem) window.soundSystem.playPop();

    this.renderGameContainer();
    this.loadQuestion();
  }

  // --------------------------------------------------------------------------
  // GIAO DIỆN BÀN CHƠI (GAMEPLAY HUD & CÂU HỎI)
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

    area.innerHTML = `
      <!-- BỘ CHỌN BÀI HỌC NHANH (QUICK LESSON SELECTOR) -->
      ${quickSelectorHtml}

      <!-- BANNER NHIỆM VỤ NẾU CÓ -->
      ${missionBannerHtml}

      <!-- GAME HUD (TIM, COMBO, ĐỒNG HỒ ĐẾM NGƯỢC, ĐIỂM SỐ, NÚT TẠM DỪNG / DỪNG) -->
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

        <!-- NÚT ĐIỀU KHIỂN: TẠM DỪNG & DỪNG GAME CHỦ ĐỘNG -->
        <div class="hud-item controls-wrap">
          <button class="btn-hud-control" onclick="window.guessGame.togglePause()" title="Tạm dừng trò chơi">
            ⏸️ Tạm Dừng
          </button>
          <button class="btn-hud-control btn-hud-quit" onclick="window.guessGame.quitToReady()" title="Kết thúc ván chơi">
            ⏹️ Dừng Game
          </button>
        </div>
      </div>

      <!-- KHUNG HIỂN THỊ CÂU HỎI -->
      <div class="game-card" id="game-card" style="position: relative;">
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
  // TẠM DỪNG / TIẾP TỤC / THOÁT VÁN CHƠI
  // --------------------------------------------------------------------------
  togglePause() {
    if (this.gameState === 'playing') {
      this.pauseGame();
    } else if (this.gameState === 'paused') {
      this.resumeGame();
    }
  }

  pauseGame() {
    if (!this.gameActive) return;
    this.gameState = 'paused';
    clearInterval(this.timer);

    const card = document.getElementById('game-card');
    if (!card) return;

    let overlay = document.getElementById('guess-pause-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'guess-pause-overlay';
      overlay.className = 'game-pause-overlay';
      card.appendChild(overlay);
    }

    overlay.innerHTML = `
      <div class="pause-card">
        <div class="pause-icon">⏸️</div>
        <h3>TRÒ CHƠI ĐANG TẠM DỪNG</h3>
        <p>Đồng hồ 15s đã dừng. Bạn có thể tiếp tục chơi câu này hoặc trở về màn hình chờ.</p>
        <div class="pause-actions">
          <button class="btn btn-primary btn-large" onclick="window.guessGame.resumeGame()">
            ▶️ Tiếp Tục Chơi
          </button>
          <button class="btn btn-secondary btn-large" onclick="window.guessGame.quitToReady()">
            ⏹️ Trở Về Màn Hình Chờ
          </button>
        </div>
      </div>
    `;
    overlay.style.display = 'flex';
  }

  resumeGame() {
    this.gameState = 'playing';
    const overlay = document.getElementById('guess-pause-overlay');
    if (overlay) overlay.style.display = 'none';

    // Tiếp tục đồng hồ đếm ngược với số giây còn lại
    this.resumeTimer();
  }

  resumeTimer() {
    clearInterval(this.timer);
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

  quitToReady() {
    clearInterval(this.timer);
    this.timer = null;
    this.gameActive = false;
    this.gameState = 'ready';
    this.renderReadyScreen();
    if (window.soundSystem) window.soundSystem.playPop();
  }

  // Dừng đồng hồ khi rời tab
  pauseOrStop() {
    clearInterval(this.timer);
    this.timer = null;
    if (this.gameActive && this.gameState === 'playing') {
      this.gameState = 'paused';
    }
  }

  // --------------------------------------------------------------------------
  // TẠO CÂU HỎI THEO CHẾ ĐỘ
  // --------------------------------------------------------------------------
  loadQuestion() {
    if (!this.gameActive || this.gameState !== 'playing') return;

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
        if (window.soundSystem && this.gameState === 'playing') {
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

      if (this.timeLeft > 8) {
        fillEl.style.backgroundColor = '#51CF66';
      } else if (this.timeLeft > 4) {
        fillEl.style.backgroundColor = '#FFA94D';
      } else {
        fillEl.style.backgroundColor = '#FF6B6B';
      }
    }
  }

  // --------------------------------------------------------------------------
  // XỬ LÝ KHI NGƯỜI DÙNG CHỌN ĐÁP ÁN
  // --------------------------------------------------------------------------
  selectOption(selectedIndex, isCorrect) {
    if (this.isAnswering || !this.gameActive || this.gameState !== 'playing') return;
    this.isAnswering = true;
    clearInterval(this.timer);

    const buttons = document.querySelectorAll('.game-opt-btn');
    const targetWord = this.currentQuestion.target;

    // Phát âm từ vựng tiếng Nhật chuẩn ngay khi chọn
    if (window.soundSystem) {
      window.soundSystem.speak(targetWord.hiragana);
    }

    // Tô màu các nút đáp án
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

      if (window.soundSystem) {
        if (this.combo >= 2) {
          window.soundSystem.playCombo(this.combo);
        } else {
          window.soundSystem.playCorrect();
        }
      }

      const timeBonus = this.timeLeft * 10;
      const comboBonus = this.combo * 25;
      const gainedScore = 100 + timeBonus + comboBonus;
      this.score += gainedScore;

      this.saveHighScore(this.score);

      if (window.mascot) {
        const compliments = [
          'Sugoi! Chính xác rồi! 🌸',
          `Quá nhanh! +${timeBonus} điểm tốc độ! ⚡`,
          `Combo x${this.combo}! Phong độ tuyệt vời! 🔥`,
          'Xuất sắc! Tiếp tục giữ vững nhé! 🎯'
        ];
        window.mascot.setMood('happy', compliments[Math.floor(Math.random() * compliments.length)], 2000);
      }
    } else {
      this.combo = 0;
      this.lives--;
      this.addMistake(targetWord);
      this.updateMistakeBadgeCount();

      if (window.soundSystem) {
        window.soundSystem.playWrong();
      }

      if (window.mascot) {
        window.mascot.setMood('sad', `Tiếc quá! Đáp án đúng là: 「${targetWord.kanji}」(${targetWord.meaning})! 🐾`, 2500);
      }
    }

    this.updateHUD();

    setTimeout(() => {
      this.currentIndex++;
      this.loadQuestion();
    }, 1400);
  }

  handleTimeout() {
    if (this.isAnswering || !this.gameActive) return;
    this.isAnswering = true;

    this.combo = 0;
    this.lives--;
    const targetWord = this.currentQuestion.target;
    this.addMistake(targetWord);
    this.updateMistakeBadgeCount();

    if (window.soundSystem) {
      window.soundSystem.playWrong();
      window.soundSystem.speak(targetWord.hiragana);
    }

    const buttons = document.querySelectorAll('.game-opt-btn');
    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      const opt = this.currentQuestion.options[idx];
      if (opt.id === targetWord.id) {
        btn.classList.add('correct');
      }
    });

    if (window.mascot) {
      window.mascot.setMood('surprised', `Hết 15 giây rồi! Từ cần tìm là: 「${targetWord.kanji}」(${targetWord.meaning})! ⏰`, 2500);
    }

    this.updateHUD();

    setTimeout(() => {
      this.currentIndex++;
      this.loadQuestion();
    }, 1500);
  }

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
    this.gameState = 'ended';
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

        <div class="result-stats-row">
          <div class="stat-box">
            <span class="stat-number">${this.score}</span>
            <span class="stat-label">Điểm Số ⭐</span>
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
          <button class="btn btn-primary btn-large" onclick="window.guessGame.startPlaying()">
            🔄 Chơi lại ván mới
          </button>
          <button class="btn btn-secondary btn-large" onclick="window.guessGame.quitToReady()">
            ↩️ Về màn hình chờ
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
