// ============================================================================
// GAME 2: LẬT THẺ TRÍ NHỚ (MEMORY MATCH VOCAB GAME) - HOÀN CHỈNH
// Màn hình chờ (Ready Screen) chuẩn mực: Chỉ chạy khi người dùng bấm BẮT ĐẦU!
// Khóa bảng (lockBoard) chống spam click, Tự động phát âm khi lật & ghép cặp,
// Bộ đếm Moves, Thời gian, Xếp hạng 3 Sao (⭐⭐⭐), Lưu Best Record & Pháo hoa
// ============================================================================

class MemoryMatchGame {
  constructor() {
    this.allWords = [];
    this.cards = [];
    this.flippedCards = [];
    this.matchedPairs = 0;
    this.totalPairs = 6; // Mặc định 6 cặp (12 thẻ)
    this.turns = 0;
    this.timer = null;
    this.seconds = 0;
    this.isLocked = false;
    this.gameActive = false;
    this.gameState = 'ready'; // 'ready', 'playing', 'ended'
    this.selectedCategory = 'all';
    this.currentLesson = null;

    this.bestTime = this.loadBestTime();
  }

  loadBestTime() {
    try {
      const saved = localStorage.getItem('nihongo_go_memory_best_time');
      return saved ? parseInt(saved, 10) : null;
    } catch (e) {
      return null;
    }
  }

  saveBestTime(timeSec) {
    if (this.bestTime === null || timeSec < this.bestTime) {
      this.bestTime = timeSec;
      try {
        localStorage.setItem('nihongo_go_memory_best_time', timeSec.toString());
      } catch (e) {}
      return true;
    }
    return false;
  }

  // --------------------------------------------------------------------------
  // KHỞI TẠO DỮ LIỆU - KHÔNG TỰ ĐỘNG CHẠY KHI MỞ TRANG
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

  start(words, pairsCount = null, category = null) {
    if (words && words.length > 0) {
      this.allWords = [...words];
    } else if (window.JLPT_DATA && window.JLPT_DATA.n5) {
      this.allWords = [...window.JLPT_DATA.n5];
    }
    if (pairsCount !== null) this.totalPairs = pairsCount;
    if (category !== null) this.selectedCategory = category;

    this.renderReadyScreen();
  }

  setLesson(lessonNumber) {
    const lNum = lessonNumber === 'all' || !lessonNumber ? null : parseInt(lessonNumber, 10);
    this.currentLesson = lNum;
    this.selectedCategory = 'all';
    this.renderReadyScreen();
  }

  startLesson(lessonNumber) {
    this.setLesson(lessonNumber);
  }

  setDifficulty(pairsCount) {
    this.totalPairs = pairsCount;
    if (this.gameState === 'ready') {
      this.renderReadyScreen();
    } else {
      this.startPlaying();
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

  // --------------------------------------------------------------------------
  // MÀN HÌNH CHỜ (READY SCREEN) - CHỜ NGƯỜI DÙNG BẤM "BẮT ĐẦU LẬT THẺ"
  // --------------------------------------------------------------------------
  renderReadyScreen() {
    this.gameActive = false;
    this.gameState = 'ready';
    this.stopTimer();

    const container = document.getElementById('memory-game-container');
    if (!container) return;

    if (!this.allWords || this.allWords.length === 0) {
      this.allWords = window.JLPT_DATA?.n5 || [];
    }

    const quickSelectorHtml = window.renderQuickLessonSelector ? window.renderQuickLessonSelector(this.currentLesson, 'memory-game') : '';

    const cats = window.JLPT_CATEGORIES || {};
    let catOptions = `<option value="all" ${this.selectedCategory === 'all' ? 'selected' : ''}>🌟 Tất cả chủ đề N5</option>`;
    Object.keys(cats).forEach(k => {
      catOptions += `<option value="${k}" ${this.selectedCategory === k ? 'selected' : ''}>${cats[k].icon} ${cats[k].name}</option>`;
    });

    const lessonInfo = this.currentLesson && window.LESSONS_DATA 
      ? window.LESSONS_DATA.getLesson('N5', this.currentLesson) 
      : null;

    const readyTitle = lessonInfo 
      ? `🧩 LẬT THẺ TRÍ NHỚ BÀI ${this.currentLesson}`
      : '🧩 GAME LẬT THẺ TRÍ NHỚ N5';

    const readySubtitle = lessonInfo 
      ? `Chủ đề: <strong>${lessonInfo.topicVi}</strong>. Rèn luyện khả năng ghi nhớ mặt chữ Kanji và hình ảnh minh họa tương ứng.`
      : 'Tìm đúng các cặp thẻ giữa hình ảnh minh họa và Kanji/Hiragana tiếng Nhật.';

    container.innerHTML = `
      <!-- BỘ CHỌN BÀI HỌC NHANH (QUICK LESSON SELECTOR) -->
      ${quickSelectorHtml}

      <!-- THANH ĐIỀU KHIỂN & CHỌN MỨC ĐỘ -->
      <div class="memory-controls-bar">
        <div class="memory-selectors">
          <div class="pair-toggle-group">
            <button class="pair-chip ${this.totalPairs === 4 ? 'active' : ''}" onclick="window.memoryGame.setDifficulty(4)">
              🌱 4 Cặp (8 Thẻ - Nhẹ nhàng)
            </button>
            <button class="pair-chip ${this.totalPairs === 6 ? 'active' : ''}" onclick="window.memoryGame.setDifficulty(6)">
              🌸 6 Cặp (12 Thẻ - Tiêu chuẩn)
            </button>
            <button class="pair-chip ${this.totalPairs === 8 ? 'active' : ''}" onclick="window.memoryGame.setDifficulty(8)">
              🔥 8 Cặp (16 Thẻ - Thử thách)
            </button>
          </div>

          <div class="memory-cat-select-wrap">
            <select class="form-select memory-cat-select" onchange="window.memoryGame.setCategory(this.value)">
              ${catOptions}
            </select>
          </div>
        </div>

        <div class="memory-best-badge">
          🏆 Thời gian tốt nhất: <strong>${this.bestTime !== null ? this.bestTime + 's' : '--'}</strong>
        </div>
      </div>

      <!-- MÀN HÌNH CHỜ TRUNG TÂM -->
      <div class="game-ready-screen">
        <div class="ready-hero-card">
          <div class="ready-icon-anim">🧩</div>
          <h2 class="ready-title">${readyTitle}</h2>
          <p class="ready-subtitle">${readySubtitle}</p>

          <div class="ready-rules-grid">
            <div class="rule-badge">
              <span class="rule-icon">🃏</span>
              <strong>${this.totalPairs} Cặp Thẻ</strong>
              <small>${this.totalPairs * 2} Thẻ đang úp</small>
            </div>
            <div class="rule-badge">
              <span class="rule-icon">⏱️</span>
              <strong>Bấm Giờ Tự Do</strong>
              <small>Hoàn thành càng nhanh điểm càng cao</small>
            </div>
            <div class="rule-badge">
              <span class="rule-icon">🔊</span>
              <strong>Phát Âm Chuẩn</strong>
              <small>Tự động đọc to khi lật trúng cặp</small>
            </div>
            <div class="rule-badge">
              <span class="rule-icon">⭐</span>
              <strong>Đánh Giá 3 Sao</strong>
              <small>Tối ưu hóa số lượt lật (Moves)</small>
            </div>
          </div>

          <div class="ready-start-action">
            <button class="btn-start-game-huge" onclick="window.memoryGame.startPlaying()">
              ▶️ BẮT ĐẦU LẬT THẺ NGAY
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // BẮT ĐẦU CHƠI VÁN MỚI
  // --------------------------------------------------------------------------
  startPlaying() {
    let pool = this.allWords;

    if (this.currentLesson) {
      const lesson = window.LESSONS_DATA ? window.LESSONS_DATA.getLesson('N5', this.currentLesson) : null;
      if (lesson && lesson.vocab && lesson.vocab.length >= 4) {
        pool = lesson.vocab;
      }
    } else if (this.selectedCategory !== 'all') {
      const catWords = this.allWords.filter(w => w.category === this.selectedCategory);
      if (catWords.length >= 4) {
        pool = catWords;
      }
    }

    const availableCount = Math.min(this.totalPairs, pool.length);
    const selectedWords = [...pool].sort(() => Math.random() - 0.5).slice(0, availableCount);

    this.totalPairs = selectedWords.length;
    this.matchedPairs = 0;
    this.turns = 0;
    this.seconds = 0;
    this.flippedCards = [];
    this.isLocked = false;
    this.gameActive = true;
    this.gameState = 'playing';

    // Xây dựng bộ bài: Thẻ A (Hình ảnh SVG + Nghĩa) & Thẻ B (Kanji + Hiragana + Romaji)
    const cardDeck = [];
    selectedWords.forEach((w, i) => {
      cardDeck.push({
        id: `${w.id}_visual_${i}`,
        wordId: w.id,
        type: 'visual',
        word: w,
        html: `
          <div class="mem-card-visual">
            ${window.getVocabIllustration(w)}
            <div class="mem-card-meaning">${w.meaning || w.vietnamese}</div>
          </div>
        `
      });

      cardDeck.push({
        id: `${w.id}_text_${i}`,
        wordId: w.id,
        type: 'text',
        word: w,
        html: `
          <div class="mem-card-japanese">
            <div class="mem-kanji">${w.kanji}</div>
            <div class="mem-hira">${w.hiragana}</div>
            <div class="mem-romaji">${w.romaji}</div>
            ${w.hanViet ? `<div class="mem-hanviet">【${w.hanViet}】</div>` : ''}
          </div>
        `
      });
    });

    this.cards = cardDeck.sort(() => Math.random() - 0.5);

    if (window.soundSystem) window.soundSystem.playPop();

    this.renderGame();
    this.startTimer();

    if (window.mascot) {
      window.mascot.say(`Hãy tìm đủ ${this.totalPairs} cặp thẻ tương ứng! Càng ít lượt lật thì càng nhiều sao! ⭐`, 3500);
    }
  }

  // --------------------------------------------------------------------------
  // GIAO DIỆN BÀN CHƠI LẬT THẺ
  // --------------------------------------------------------------------------
  renderGame() {
    const container = document.getElementById('memory-game-container');
    if (!container) return;

    const quickSelectorHtml = window.renderQuickLessonSelector ? window.renderQuickLessonSelector(this.currentLesson, 'memory-game') : '';

    let cardsHtml = `<div class="memory-grid ${this.totalPairs >= 8 ? 'grid-8-pairs' : ''}">`;
    this.cards.forEach((c, idx) => {
      cardsHtml += `
        <div class="memory-card" id="mem-card-${idx}" onclick="window.memoryGame.flipCard(${idx})">
          <div class="card-inner">
            <div class="card-front">
              <span class="card-pattern">💮</span>
              <span class="card-hint">N5 MATCH</span>
            </div>
            <div class="card-back">
              ${c.html}
            </div>
          </div>
        </div>
      `;
    });
    cardsHtml += '</div>';

    container.innerHTML = `
      <!-- BỘ CHỌN BÀI HỌC NHANH (QUICK LESSON SELECTOR) -->
      ${quickSelectorHtml}

      <!-- HUD THÔNG SỐ: ĐỒNG HỒ, LƯỢT LẬT, CẶP ĐÃ GHÉP & NÚT DỪNG -->
      <div class="memory-hud">
        <span class="hud-item timer-badge">⏱️ Thời gian: <strong id="mem-timer">0s</strong></span>
        <span class="hud-item moves-badge">🔄 Số lượt lật: <strong id="mem-turns">0</strong></span>
        <span class="hud-item pairs-badge">🎯 Cặp đã tìm: <strong id="mem-pairs">0/${this.totalPairs}</strong></span>
        <button class="btn btn-secondary btn-sm" onclick="window.memoryGame.startPlaying()">
          🔄 Chơi lại
        </button>
        <button class="btn btn-outline-danger btn-sm" onclick="window.memoryGame.quitToReady()">
          ⏹️ Dừng ván chơi
        </button>
      </div>

      <!-- LƯỚI THẺ BÀI -->
      ${cardsHtml}
    `;
  }

  // --------------------------------------------------------------------------
  // BỘ ĐẾM THỜI GIAN
  // --------------------------------------------------------------------------
  startTimer() {
    clearInterval(this.timer);
    this.seconds = 0;
    this.timer = setInterval(() => {
      this.seconds++;
      const timerEl = document.getElementById('mem-timer');
      if (timerEl) {
        timerEl.textContent = `${this.seconds}s`;
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
    this.timer = null;
  }

  quitToReady() {
    this.stopTimer();
    this.gameActive = false;
    this.gameState = 'ready';
    this.renderReadyScreen();
    if (window.soundSystem) window.soundSystem.playPop();
  }

  // --------------------------------------------------------------------------
  // XỬ LÝ LẬT THẺ & KHÓA BẢNG CHỐNG SPAM CLICK
  // --------------------------------------------------------------------------
  flipCard(index) {
    if (this.isLocked || !this.gameActive) return;

    const cardEl = document.getElementById(`mem-card-${index}`);
    const cardData = this.cards[index];
    if (!cardEl || !cardData) return;

    if (cardEl.classList.contains('flipped') || cardEl.classList.contains('matched')) {
      return;
    }

    if (window.soundSystem) window.soundSystem.playCardFlip();
    cardEl.classList.add('flipped');
    this.flippedCards.push({ index, data: cardData, element: cardEl });

    if (cardData.type === 'text' && window.soundSystem) {
      window.soundSystem.speak(cardData.word.hiragana, 1.0);
    }

    if (this.flippedCards.length === 2) {
      this.isLocked = true;
      this.turns++;

      const turnsEl = document.getElementById('mem-turns');
      if (turnsEl) turnsEl.textContent = this.turns;

      this.checkMatch();
    }
  }

  checkMatch() {
    const [card1, card2] = this.flippedCards;

    if (card1.data.wordId === card2.data.wordId) {
      setTimeout(() => {
        card1.element.classList.add('matched');
        card2.element.classList.add('matched');

        if (window.soundSystem) {
          window.soundSystem.playCorrect();
          window.soundSystem.speak(card1.data.word.hiragana, 0.95);
        }

        this.matchedPairs++;
        const pairsEl = document.getElementById('mem-pairs');
        if (pairsEl) pairsEl.textContent = `${this.matchedPairs}/${this.totalPairs}`;

        if (window.mascot) {
          window.mascot.setMood(
            'happy',
            `Tuyệt! Ghép đúng cặp: "${card1.data.word.hiragana}" (${card1.data.word.meaning || card1.data.word.vietnamese})! ✨`,
            2200
          );
        }

        if (window.app) {
          window.app.addExp(20);
          window.app.addCoins(2);
        }

        this.flippedCards = [];
        this.isLocked = false;

        if (this.matchedPairs === this.totalPairs) {
          this.endGame();
        }
      }, 500);
    } else {
      setTimeout(() => {
        if (window.soundSystem) window.soundSystem.playWrong();
        card1.element.classList.remove('flipped');
        card2.element.classList.remove('flipped');

        this.flippedCards = [];
        this.isLocked = false;
      }, 950);
    }
  }

  calculateStars() {
    const ratio = this.turns / this.totalPairs;
    if (ratio <= 1.5) return 3;
    if (ratio <= 2.3) return 2;
    return 1;
  }

  endGame() {
    this.stopTimer();
    this.gameActive = false;
    this.gameState = 'ended';

    const stars = this.calculateStars();
    const isNewRecord = this.saveBestTime(this.seconds);

    if (window.soundSystem) window.soundSystem.playVictory();

    if (window.guessGame && typeof window.guessGame.launchCanvasConfetti === 'function') {
      window.guessGame.launchCanvasConfetti();
    } else if (window.mascot) {
      window.mascot.launchConfetti();
    }

    if (window.mascot) {
      window.mascot.setMood(
        'celebrate',
        `XUẤT SẮC! Đạt ${stars} Sao với ${this.turns} lượt lật trong ${this.seconds}s! 🏆✨`,
        5000
      );
    }

    if (window.app) {
      window.app.addExp(50 + stars * 10);
      window.app.addCoins(15);
    }

    setTimeout(() => {
      const container = document.getElementById('memory-game-container');
      if (!container) return;

      const starsHtml = '⭐ '.repeat(stars) + '☆ '.repeat(3 - stars);
      const starRatingLabels = {
        3: 'HOÀN HẢO! TRÍ NHỚ ĐỈNH CAO! ⭐⭐⭐',
        2: 'RẤT TỐT! PHẢN XẠ NHANH NHẸN! ⭐⭐',
        1: 'HOÀN THÀNH TỐT! CỐ GẮNG HƠN NHÉ! ⭐'
      };

      container.innerHTML = `
        <div class="game-over-panel victory">
          <div class="result-trophy">🎉</div>
          <div class="star-rating-display">${starsHtml}</div>
          <h2 class="result-title">${starRatingLabels[stars]}</h2>
          <p>Bạn đã ghép chuẩn xác toàn bộ ${this.totalPairs} cặp từ vựng N5!</p>

          ${isNewRecord ? `<div class="new-record-banner">⚡ KỶ LỤC TỐC ĐỘ MỚI: ${this.seconds} GIÂY! ⚡</div>` : ''}

          <div class="stats-summary">
            <div class="stat-box">
              <span class="stat-number">${this.seconds}s</span>
              <span class="stat-label">Thời Gian Hoàn Thành ⏱️</span>
            </div>
            <div class="stat-box">
              <span class="stat-number">${this.turns}</span>
              <span class="stat-label">Tổng Số Lượt Lật 🔄</span>
            </div>
            <div class="stat-box">
              <span class="stat-number">${stars}/3</span>
              <span class="stat-label">Xếp Hạng Sao ⭐</span>
            </div>
            <div class="stat-box">
              <span class="stat-number">${this.bestTime}s</span>
              <span class="stat-label">Kỷ Lục Nhanh Nhất 🏆</span>
            </div>
          </div>

          <div class="game-over-actions">
            <button class="btn btn-primary btn-large" onclick="window.memoryGame.startPlaying()">
              🔄 Chơi lại ván mới
            </button>
            <button class="btn btn-secondary btn-large" onclick="window.memoryGame.quitToReady()">
              ↩️ Về màn hình chờ
            </button>
            <button class="btn btn-secondary btn-large" onclick="window.app.switchTab('flashcard')">
              🃏 Ôn qua Flashcard 3D
            </button>
          </div>
        </div>
      `;
    }, 1000);
  }
}

// Khởi tạo instance toàn cục
window.memoryGame = new MemoryMatchGame();
