// ============================================================================
// GAME 2: LẬT THẺ TRÍ NHỚ (MEMORY MATCH VOCAB GAME) - HOÀN CHỈNH
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
    this.isLocked = false; // Biến khóa bảng chống click nhanh
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
  // BẮT ĐẦU VÁN CHƠI
  // --------------------------------------------------------------------------
  start(words, pairsCount = null, category = null) {
    if (words && words.length > 0) {
      this.allWords = [...words];
    } else if (window.JLPT_DATA && window.JLPT_DATA.n5) {
      this.allWords = [...window.JLPT_DATA.n5];
    }

    if (pairsCount !== null) {
      this.totalPairs = pairsCount;
    }
    if (category !== null) {
      this.selectedCategory = category;
    }

    // Lọc theo danh mục
    let pool = this.allWords;
    if (this.selectedCategory !== 'all') {
      pool = this.allWords.filter(w => w.category === this.selectedCategory);
      if (pool.length < this.totalPairs) {
        pool = this.allWords; // Trở lại all nếu chủ đề không đủ từ
      }
    }

    // Chọn ngẫu nhiên N từ vựng làm cặp bài
    const selectedWords = [...pool].sort(() => Math.random() - 0.5).slice(0, this.totalPairs);
    this.totalPairs = selectedWords.length;
    this.matchedPairs = 0;
    this.turns = 0;
    this.seconds = 0;
    this.flippedCards = [];
    this.isLocked = false; // Reset khóa bảng

    // Xây dựng bộ bài: Thẻ A (Hình ảnh SVG + Nghĩa tiếng Việt) & Thẻ B (Kanji + Hiragana + Romaji)
    const cardDeck = [];
    selectedWords.forEach((w, i) => {
      // Thẻ A: Hình minh họa + Nghĩa
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

      // Thẻ B: Chữ Nhật (Kanji, Hiragana, Romaji)
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

    // Xáo trộn ngẫu nhiên vị trí các thẻ
    this.cards = cardDeck.sort(() => Math.random() - 0.5);

    this.renderGame();
    this.startTimer();

    if (window.mascot) {
      window.mascot.say(`Hãy tìm đủ ${this.totalPairs} cặp thẻ tương ứng! Càng ít lượt lật thì càng nhiều sao! ⭐`, 3500);
    }
  }

  setDifficulty(pairsCount) {
    this.totalPairs = pairsCount;
    this.start(this.allWords, this.totalPairs, this.selectedCategory);
  }

  setCategory(category) {
    this.selectedCategory = category;
    this.start(this.allWords, this.totalPairs, this.selectedCategory);
  }

  // --------------------------------------------------------------------------
  // BẮT ĐẦU GAME LẬT THẺ THEO BÀI HỌC (1 ĐẾN 25)
  // --------------------------------------------------------------------------
  startLesson(lessonNumber) {
    const lNum = parseInt(lessonNumber, 10);
    this.currentLesson = lNum;
    this.selectedCategory = 'all';

    const lesson = window.LESSONS_DATA ? window.LESSONS_DATA.getLesson('N5', lNum) : null;
    const words = (lesson && lesson.vocab && lesson.vocab.length >= 6) ? lesson.vocab : (window.JLPT_DATA?.n5 || []);

    this.start(words, Math.min(this.totalPairs || 6, words.length), 'all');

    if (window.mascot) {
      window.mascot.say(`🃏 Lật thẻ trí nhớ Bài ${lNum}: ${lesson?.topicVi || ''}! Tìm đủ các cặp hình và từ tiếng Nhật nhé! 🌸`, 3500);
    }
  }

  // --------------------------------------------------------------------------
  // GIAO DIỆN GAME LẬT THẺ
  // --------------------------------------------------------------------------
  renderGame() {
    const container = document.getElementById('memory-game-container');
    if (!container) return;

    const quickSelectorHtml = window.renderQuickLessonSelector ? window.renderQuickLessonSelector(this.currentLesson, 'memory-game') : '';

    const cats = window.JLPT_CATEGORIES || {};
    let catOptions = `<option value="all" ${this.selectedCategory === 'all' ? 'selected' : ''}>🌟 Tất cả chủ đề N5</option>`;
    Object.keys(cats).forEach(k => {
      catOptions += `<option value="${k}" ${this.selectedCategory === k ? 'selected' : ''}>${cats[k].icon} ${cats[k].name}</option>`;
    });

    let cardsHtml = `<div class="memory-grid ${this.totalPairs === 8 ? 'grid-8-pairs' : ''}">`;
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

      <!-- THANH ĐIỀU KHIỂN & CHỌN MỨC ĐỘ -->
      <div class="memory-controls-bar">
        <div class="memory-selectors">
          <div class="pair-toggle-group">
            <button class="pair-chip ${this.totalPairs === 6 ? 'active' : ''}" onclick="window.memoryGame.setDifficulty(6)">
              🌸 6 Cặp (12 Thẻ - Vừa vặn)
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

      <!-- HUD THÔNG SỐ: ĐỒNG HỒ, LƯỢT LẬT, CẶP ĐÃ GHÉP -->
      <div class="memory-hud">
        <span class="hud-item timer-badge">⏱️ Thời gian: <strong id="mem-timer">0s</strong></span>
        <span class="hud-item moves-badge">🔄 Số lượt lật: <strong id="mem-turns">0</strong></span>
        <span class="hud-item pairs-badge">🎯 Cặp đã tìm: <strong id="mem-pairs">0/${this.totalPairs}</strong></span>
        <button class="btn btn-secondary btn-sm" onclick="${this.currentLesson ? `window.memoryGame.startLesson(${this.currentLesson})` : 'window.memoryGame.start(window.JLPT_DATA.n5)'}">
          🔄 Chơi lại
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

  // --------------------------------------------------------------------------
  // XỬ LÝ LẬT THẺ & KHÓA BẢNG CHỐNG SPAM CLICK
  // --------------------------------------------------------------------------
  flipCard(index) {
    // 1. Kiểm tra nếu bảng đang bị khóa (đang so khớp 2 thẻ) -> chặn ngay lập tức
    if (this.isLocked) return;

    const cardEl = document.getElementById(`mem-card-${index}`);
    const cardData = this.cards[index];
    if (!cardEl || !cardData) return;

    // 2. Chặn lật lại thẻ đã lật hoặc thẻ đã ghép thành công
    if (cardEl.classList.contains('flipped') || cardEl.classList.contains('matched')) {
      return;
    }

    // 3. Hiệu ứng âm thanh lật thẻ
    if (window.soundSystem) window.soundSystem.playCardFlip();
    cardEl.classList.add('flipped');
    this.flippedCards.push({ index, data: cardData, element: cardEl });

    // 4. Tự động phát âm ngay khi lật trúng thẻ chữ tiếng Nhật
    if (cardData.type === 'text' && window.soundSystem) {
      window.soundSystem.speak(cardData.word.hiragana, 1.0);
    }

    // 5. Nếu đã lật đủ 2 thẻ -> KHÓA BẢNG NGAY LẬP TỨC để tránh click thẻ thứ 3
    if (this.flippedCards.length === 2) {
      this.isLocked = true; // KHÓA BẢNG CHUẨN XÁC
      this.turns++;

      const turnsEl = document.getElementById('mem-turns');
      if (turnsEl) turnsEl.textContent = this.turns;

      this.checkMatch();
    }
  }

  // --------------------------------------------------------------------------
  // SO KHỚP 2 THẺ
  // --------------------------------------------------------------------------
  checkMatch() {
    const [card1, card2] = this.flippedCards;

    // Hai thẻ cùng thuộc về 1 từ vựng
    if (card1.data.wordId === card2.data.wordId) {
      setTimeout(() => {
        card1.element.classList.add('matched');
        card2.element.classList.add('matched');

        // Phát âm thanh đúng
        if (window.soundSystem) {
          window.soundSystem.playCorrect();
          // Tự động phát âm to rõ ràng từ tiếng Nhật khi ghép cặp thành công
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

        // Mở khóa bảng và dọn danh sách thẻ đang lật
        this.flippedCards = [];
        this.isLocked = false; // MỞ KHÓA BẢNG

        // Kiểm tra xem đã thắng toàn bộ màn chưa
        if (this.matchedPairs === this.totalPairs) {
          this.endGame();
        }
      }, 500);
    } else {
      // Ghép SAI -> giữ thẻ hiển thị 900ms rồi lật úp lại
      setTimeout(() => {
        if (window.soundSystem) window.soundSystem.playWrong();
        card1.element.classList.remove('flipped');
        card2.element.classList.remove('flipped');

        // Mở khóa bảng và dọn danh sách
        this.flippedCards = [];
        this.isLocked = false; // MỞ KHÓA BẢNG
      }, 950);
    }
  }

  // --------------------------------------------------------------------------
  // TÍNH TOÁN XẾP HẠNG SAO (⭐⭐⭐) DỰA TRÊN SỐ MOVES
  // --------------------------------------------------------------------------
  calculateStars() {
    // 3 Sao: Hoàn thành trong <= 1.5 * totalPairs (ít lật sai)
    // 2 Sao: Hoàn thành trong <= 2.3 * totalPairs
    // 1 Sao: Còn lại
    const ratio = this.turns / this.totalPairs;
    if (ratio <= 1.5) return 3;
    if (ratio <= 2.3) return 2;
    return 1;
  }

  // --------------------------------------------------------------------------
  // KẾT THÚC MÀN CHƠI - BẮN PHÁO HOA & TỔNG KẾT SAO
  // --------------------------------------------------------------------------
  endGame() {
    clearInterval(this.timer);
    const stars = this.calculateStars();
    const isNewRecord = this.saveBestTime(this.seconds);

    if (window.soundSystem) window.soundSystem.playVictory();

    // Bắn pháo hoa Confetti Canvas
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
            <button class="btn btn-primary btn-large" onclick="window.memoryGame.start(window.JLPT_DATA.n5, ${this.totalPairs})">
              🔄 Chơi ván mới
            </button>
            <button class="btn btn-secondary btn-large" onclick="window.memoryGame.setDifficulty(${this.totalPairs === 6 ? 8 : 6})">
              ${this.totalPairs === 6 ? '🔥 Thử thách 8 cặp (16 thẻ)' : '🌸 Đổi sang 6 cặp (12 thẻ)'}
            </button>
            <button class="btn btn-secondary btn-large" onclick="window.app.switchTab('flashcard')">
              🃏 Ôn qua Flashcard 3D
            </button>
          </div>
        </div>
      `;
    }, 1100);
  }
}

// Khởi tạo instance toàn cục
window.memoryGame = new MemoryMatchGame();
