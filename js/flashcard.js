// ============================================================================
// CHỨC NĂNG FLASHCARD 3D TƯƠNG TÁC & SỔ TAY TỪ VỰNG N5 - HOÀN CHỈNH
// Lật thẻ bằng phím Space, [←/→] đổi từ, [S] phát âm, [M] đánh dấu Đã thuộc,
// Bộ chọn bài học nhanh (Quick Lesson Selector), Nhiệm vụ 1 Bài học & Đồng bộ % tiến độ
// ============================================================================

class FlashcardModule {
  constructor() {
    this.allWords = [];
    this.words = [];
    this.currentIndex = 0;
    this.isFlipped = false;
    this.selectedCategory = 'all';
    this.filterStatus = 'all'; // 'all', 'unmastered', 'mastered'
    this.currentLesson = null; // null: toàn bộ N5; 1-25: theo bài học
    this.cardsReviewedInLesson = 0;

    this.masteredIds = new Set();
    this.loadSavedProgress();
    this.setupKeyboardShortcuts();
  }

  // --------------------------------------------------------------------------
  // LƯU TRỮ VÀ TẢI TIẾN ĐỘ THUỘC TỪ VỰNG
  // --------------------------------------------------------------------------
  loadSavedProgress() {
    try {
      const saved = localStorage.getItem('jlpt_n5_mastered_words') || localStorage.getItem('jlpt_n5_mastered');
      if (saved) {
        this.masteredIds = new Set(JSON.parse(saved));
      }
    } catch (e) {
      this.masteredIds = new Set();
    }
  }

  saveProgress() {
    try {
      const arr = [...this.masteredIds];
      localStorage.setItem('jlpt_n5_mastered_words', JSON.stringify(arr));
      localStorage.setItem('jlpt_n5_mastered', JSON.stringify(arr));
    } catch (e) {}

    // Cập nhật ngay lên thanh Header và thanh tiến độ
    this.updateHeaderMasteryStats();
  }

  updateHeaderMasteryStats() {
    const total = this.allWords.length > 0 ? this.allWords.length : (window.JLPT_DATA?.n5?.length || 104);
    const mastered = this.masteredIds.size;
    const percent = Math.round((mastered / Math.max(1, total)) * 100);

    const masteryEl = document.getElementById('user-n5-mastery');
    if (masteryEl) {
      masteryEl.textContent = `${percent}% (${mastered}/${total})`;
    }
  }

  // --------------------------------------------------------------------------
  // KHỞI TẠO VỚI DANH SÁCH TỪ
  // --------------------------------------------------------------------------
  init(words) {
    if (words && words.length > 0) {
      this.allWords = [...words];
    } else if (window.JLPT_DATA && window.JLPT_DATA.n5) {
      this.allWords = [...window.JLPT_DATA.n5];
    }

    this.applyFilters();
    this.updateHeaderMasteryStats();
  }

  // --------------------------------------------------------------------------
  // NẠP TỪ VỰNG THEO BÀI HỌC (NHIỆM VỤ 1 BÀI HỌC 1 -> 25)
  // --------------------------------------------------------------------------
  loadLesson(lessonNumber) {
    const lNum = parseInt(lessonNumber, 10);
    this.currentLesson = lNum;
    this.selectedCategory = 'all';
    this.filterStatus = 'all';
    this.currentIndex = 0;
    this.isFlipped = false;
    this.cardsReviewedInLesson = 1;

    const targetLvl = lNum >= 26 ? 'N4' : 'N5';
    const lesson = window.LESSONS_DATA ? window.LESSONS_DATA.getLesson(targetLvl, lNum) : null;
    const vocab = (lesson && lesson.vocab && lesson.vocab.length > 0) ? lesson.vocab : (targetLvl === 'N4' ? (window.JLPT_DATA?.n4 || []) : (window.JLPT_DATA?.n5 || []));

    this.allWords = [...vocab];
    this.words = [...vocab];
    this.render();

    if (window.mascot) {
      window.mascot.say(`📖 Đang học Flashcard Bài ${lNum}: ${lesson?.topicVi || ''}! Hãy lật từng thẻ để ghi nhớ nhé! 🌸`, 3500);
    }
  }

  // Đánh dấu hoàn thành Nhiệm vụ 1 và tự động mở khóa Bài tiếp theo
  markLessonVocabComplete() {
    if (!this.currentLesson) return;
    const lNum = this.currentLesson;

    // 1. Ghi nhận đã học xong từ vựng trong hệ thống Lộ Trình
    if (window.roadmapModule && typeof window.roadmapModule.recordMissionProgress === 'function') {
      window.roadmapModule.recordMissionProgress(lNum, 'vocab', { vocabDone: true });
    }

    // 2. Tự động thăng cấp và mở khóa bài tiếp theo ngay lập tức!
    if (window.roadmapModule && typeof window.roadmapModule.checkAndCompleteLesson === 'function') {
      window.roadmapModule.checkAndCompleteLesson(lNum);
    } else if (window.authModule && typeof window.authModule.completeLesson === 'function') {
      window.authModule.completeLesson(lNum, { stars: 3 });
    }

    // 3. Cập nhật nút bấm: cho phép bấm sang bài tiếp theo ngay
    const nextL = lNum < 50 ? lNum + 1 : 50;
    const btn = document.querySelector('.btn-finish-mission-vocab');
    if (btn) {
      btn.innerHTML = `🚀 ĐÃ MỞ BÀI ${nextL} • BẤM ĐỂ HỌC BÀI ${nextL} NGAY ▶️`;
      btn.classList.remove('btn-primary', 'disabled');
      btn.classList.add('btn-success');
      btn.disabled = false;
      btn.onclick = () => {
        window.flashcardModule.loadLesson(nextL);
      };
    }
  }

  applyFilters() {
    let list = this.allWords;

    // Lọc theo chủ đề
    if (this.selectedCategory !== 'all') {
      list = list.filter(w => w.category === this.selectedCategory);
    }

    // Lọc theo trạng thái đã thuộc / chưa thuộc
    if (this.filterStatus === 'mastered') {
      list = list.filter(w => this.masteredIds.has(w.id));
    } else if (this.filterStatus === 'unmastered') {
      list = list.filter(w => !this.masteredIds.has(w.id));
    }

    this.words = list;
    if (this.currentIndex >= this.words.length) {
      this.currentIndex = Math.max(0, this.words.length - 1);
    }
    this.isFlipped = false;
    this.render();
  }

  filterByCategory(catId) {
    this.selectedCategory = catId;
    this.currentIndex = 0;
    this.applyFilters();
    if (window.soundSystem) window.soundSystem.playPop();
  }

  filterByStatus(status) {
    this.filterStatus = status;
    this.currentIndex = 0;
    this.applyFilters();
    if (window.soundSystem) window.soundSystem.playPop();
  }

  // --------------------------------------------------------------------------
  // GẮN SỰ KIỆN PHÍM TẮT BÀN PHÍM (SPACE, ←, →, S, M)
  // --------------------------------------------------------------------------
  setupKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      // Chỉ hoạt động khi đang mở tab Flashcard
      const flashcardTab = document.getElementById('tab-flashcard');
      if (!flashcardTab || !flashcardTab.classList.contains('active')) return;

      // Không can thiệp nếu người dùng đang nhập văn bản trong input/textarea
      const tag = document.activeElement ? document.activeElement.tagName.toUpperCase() : '';
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

      if (e.code === 'Space' || e.key === ' ' || e.code === 'Enter') {
        e.preventDefault();
        this.flip();
      } else if (e.code === 'ArrowRight' || e.key === 'ArrowRight') {
        e.preventDefault();
        this.next();
      } else if (e.code === 'ArrowLeft' || e.key === 'ArrowLeft') {
        e.preventDefault();
        this.prev();
      } else if (e.code === 'KeyS' || e.key === 's' || e.key === 'S') {
        e.preventDefault();
        this.speakCurrent();
      } else if (e.code === 'KeyM' || e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        this.toggleCurrentMastered();
      }
    });
  }

  speakCurrent() {
    if (this.words.length === 0) return;
    const word = this.words[this.currentIndex];
    if (window.soundSystem && word) {
      window.soundSystem.speak(word.hiragana, 1.0);
    }
  }

  toggleCurrentMastered() {
    if (this.words.length === 0) return;
    const word = this.words[this.currentIndex];
    this.toggleMastered(word.id);
  }

  // --------------------------------------------------------------------------
  // GIAO DIỆN FLASHCARD 3D
  // --------------------------------------------------------------------------
  render() {
    const container = document.getElementById('flashcard-container');
    if (!container) return;

    const quickSelectorHtml = window.renderQuickLessonSelector ? window.renderQuickLessonSelector(this.currentLesson, 'flashcard') : '';

    let missionBannerHtml = '';
    if (this.currentLesson) {
      const lessonObj = window.LESSONS_DATA ? window.LESSONS_DATA.getLesson('N5', this.currentLesson) : null;
      const missionState = window.roadmapModule ? window.roadmapModule.getLessonMissionState(this.currentLesson) : {};
      const isMissionDone = !!missionState.vocabDone || !!missionState.completed;
      const nextL = this.currentLesson < 50 ? this.currentLesson + 1 : 50;

      missionBannerHtml = `
        <div class="lesson-mission-active-banner">
          <div class="banner-mission-left">
            <span class="banner-icon">🎯</span>
            <div>
              <strong>Nhiệm vụ 1: Lật mở từ vựng Bài ${this.currentLesson} - ${lessonObj?.topicVi || ''}</strong>
              <p>Đã duyệt: <strong>${Math.min(this.words.length, this.cardsReviewedInLesson || 1)} / ${this.words.length}</strong> thẻ từ vựng N5</p>
            </div>
          </div>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            ${isMissionDone ? `
              <button class="btn btn-sm btn-success btn-finish-mission-vocab" 
                      onclick="window.flashcardModule.loadLesson(${nextL})">
                🚀 Đã Xong Bài ${this.currentLesson} • Học Bài ${nextL} Ngay ▶️
              </button>
            ` : `
              <button class="btn btn-sm btn-primary btn-finish-mission-vocab" 
                      onclick="window.flashcardModule.markLessonVocabComplete()">
                ✅ Đánh dấu Đã Thuộc Hết Thẻ Bài Này
              </button>
              <button class="btn btn-sm btn-warning" 
                      onclick="window.roadmapModule ? window.roadmapModule.openFastPassQuiz(${this.currentLesson}) : null"
                      title="Thi vượt nhanh 5 câu trắc nghiệm để mở bài tiếp theo ngay">
                ⚡ Thi Vượt Nhanh
              </button>
            `}
          </div>
        </div>
      `;
    }

    const cats = window.JLPT_CATEGORIES || {};
    const totalN5 = this.allWords.length;
    const masteredCount = this.masteredIds.size;
    const unmasteredCount = Math.max(0, totalN5 - masteredCount);

    // Xây dựng danh sách nút danh mục (chỉ hiện khi không chọn theo bài học riêng)
    let catPillsHtml = '';
    if (!this.currentLesson) {
      catPillsHtml = `
        <button class="pill-btn ${this.selectedCategory === 'all' ? 'active' : ''}" 
                onclick="window.flashcardModule.filterByCategory('all')">
          Tất cả (${totalN5})
        </button>
      `;
      Object.keys(cats).forEach(k => {
        const c = cats[k];
        const count = this.allWords.filter(w => w.category === k).length;
        catPillsHtml += `
          <button class="pill-btn ${this.selectedCategory === k ? 'active' : ''}" 
                  onclick="window.flashcardModule.filterByCategory('${k}')">
            <span>${c.icon}</span> ${c.name} (${count})
          </button>
        `;
      });
    }

    // Nếu không có từ nào khớp với bộ lọc
    if (this.words.length === 0) {
      container.innerHTML = `
        ${quickSelectorHtml}
        ${missionBannerHtml}
        <div class="flashcard-controls-top">
          ${catPillsHtml ? `<div class="category-pills">${catPillsHtml}</div>` : ''}
          <div class="flashcard-status-filters">
            <button class="status-chip ${this.filterStatus === 'all' ? 'active' : ''}" onclick="window.flashcardModule.filterByStatus('all')">Tất cả</button>
            <button class="status-chip ${this.filterStatus === 'unmastered' ? 'active' : ''}" onclick="window.flashcardModule.filterByStatus('unmastered')">Chưa thuộc ⚠️ (${unmasteredCount})</button>
            <button class="status-chip ${this.filterStatus === 'mastered' ? 'active' : ''}" onclick="window.flashcardModule.filterByStatus('mastered')">Đã thuộc ✅ (${masteredCount})</button>
          </div>
        </div>
        <div class="flashcard-empty-state">
          <div class="empty-icon">📂</div>
          <h3>Không tìm thấy từ vựng nào trong bộ lọc này!</h3>
          <p>Hãy thử chọn trạng thái "Tất cả" hoặc chuyển sang chủ đề khác nhé.</p>
          <button class="btn btn-primary" onclick="window.flashcardModule.filterByStatus('all'); window.flashcardModule.filterByCategory('all');">
            🔄 Đặt lại bộ lọc
          </button>
        </div>
      `;
      return;
    }

    const word = this.words[this.currentIndex];
    const isMastered = this.masteredIds.has(word.id);
    const progressPercent = Math.round(((this.currentIndex + 1) / this.words.length) * 100);

    container.innerHTML = `
      <!-- BỘ CHỌN BÀI HỌC NHANH (QUICK LESSON SELECTOR) -->
      ${quickSelectorHtml}

      <!-- BANNER NHIỆM VỤ BÀI HỌC NẾU CÓ -->
      ${missionBannerHtml}

      <!-- THANH ĐIỀU HƯỚNG BỘ LỌC CHỦ ĐỀ & TRẠNG THÁI THUỘC TỪ -->
      <div class="flashcard-controls-top">
        ${catPillsHtml ? `<div class="category-pills">${catPillsHtml}</div>` : ''}

        <div class="flashcard-filter-subbar">
          <div class="flashcard-status-filters">
            <button class="status-chip ${this.filterStatus === 'all' ? 'active' : ''}" 
                    onclick="window.flashcardModule.filterByStatus('all')">
              Tất cả (${this.selectedCategory === 'all' ? totalN5 : this.allWords.filter(w => w.category === this.selectedCategory).length})
            </button>
            <button class="status-chip ${this.filterStatus === 'unmastered' ? 'active' : ''}" 
                    onclick="window.flashcardModule.filterByStatus('unmastered')">
              ⚠️ Chưa thuộc (${this.allWords.filter(w => (this.selectedCategory === 'all' || w.category === this.selectedCategory) && !this.masteredIds.has(w.id)).length})
            </button>
            <button class="status-chip ${this.filterStatus === 'mastered' ? 'active' : ''}" 
                    onclick="window.flashcardModule.filterByStatus('mastered')">
              ✅ Đã thuộc (${this.allWords.filter(w => (this.selectedCategory === 'all' || w.category === this.selectedCategory) && this.masteredIds.has(w.id)).length})
            </button>
          </div>

          <div class="flashcard-progress-bar-wrap">
            <div class="progress-info">
              <span>Thẻ số: <strong>${this.currentIndex + 1} / ${this.words.length}</strong></span>
              <span>Đã thuộc N5: <strong class="text-success">${masteredCount}/${totalN5}</strong> (${Math.round((masteredCount/Math.max(1, totalN5))*100)}%) 🌟</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${progressPercent}%"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- KHÔNG GIAN 3D FLASHCARD -->
      <div class="flashcard-scene" onclick="window.flashcardModule.flip()" title="Nhấn vào thẻ hoặc bấm phím Space để lật mặt">
        <div class="flashcard-card ${this.isFlipped ? 'is-flipped' : ''}" id="flashcard-card">
          
          <!-- ================= MẶT TRƯỚC (TIẾNG NHẬT & MINH HỌA) ================= -->
          <div class="flashcard-face flashcard-front">
            <div class="card-badge-top">
              <div class="card-level-tag">
                <span class="badge-n5">${this.currentLesson ? `Bài ${this.currentLesson}` : 'JLPT N5'}</span>
                ${isMastered ? '<span class="badge-mastered-tag">✅ ĐÃ THUỘC</span>' : '<span class="badge-unmastered-tag">⚠️ CẦN HỌC</span>'}
              </div>
              <button class="btn-audio-circle" onclick="event.stopPropagation(); window.soundSystem.speak('${word.hiragana}')" title="Nghe phát âm chuẩn [Phím S]">
                🔊
              </button>
            </div>

            <div class="card-illustration">
              ${window.getVocabIllustration(word)}
            </div>

            <div class="card-japanese-main">
              <h2 class="card-kanji">${word.kanji}</h2>
              <p class="card-hiragana">${word.hiragana} (${word.romaji})</p>
              <div class="card-extra-pills">
                ${word.hanViet ? `<span class="pill-hanviet">【Hán: ${word.hanViet}】</span>` : ''}
                ${word.pitch ? `<span class="pill-pitch">Pitch: ${word.pitch}</span>` : ''}
              </div>
            </div>

            <div class="card-flip-prompt">
              <span>👆 Nhấn chuột hoặc bấm [Space] để lật xem Nghĩa, Ví dụ & Lỗi hay gặp</span>
            </div>
          </div>

          <!-- ================= MẶT SAU (NGHĨA, CÂU VÍ DỤ & LỖI HAY GẶP) ================= -->
          <div class="flashcard-face flashcard-back">
            <div class="card-badge-top">
              <span class="badge-category">${word.romaji}</span>
              <button class="btn-audio-circle" onclick="event.stopPropagation(); window.soundSystem.speak('${word.hiragana}')" title="Nghe từ [Phím S]">
                🔊
              </button>
            </div>

            <div class="card-meaning-block">
              <h3 class="meaning-vi">${word.meaning || word.vietnamese}</h3>
            </div>

            <!-- Câu ví dụ N5 thực tế -->
            <div class="card-example-box" onclick="event.stopPropagation();">
              <div class="example-header">
                <span>📝 Ví dụ thực tế:</span>
                <button class="btn-mini-voice" onclick="window.soundSystem.speak('${(word.example?.hira || word.exampleJa || '').replace(/['"\n]/g, '')}', 0.85)">
                  🔊 Nghe câu
                </button>
              </div>
              <p class="example-ja">${word.example?.ja || word.exampleJa}</p>
              <p class="example-vi">${word.example?.vi || word.exampleVi}</p>
            </div>

            <!-- Cảnh báo lỗi người Việt hay gặp -->
            ${word.commonMistake ? `
              <div class="card-mistake-box" onclick="event.stopPropagation();">
                ⚠️ <strong>Lỗi người Việt hay mắc:</strong> ${word.commonMistake}
              </div>
            ` : ''}

            <!-- Nút đánh dấu đã thuộc / chưa thuộc -->
            <div class="card-actions-back" onclick="event.stopPropagation();">
              <button class="btn btn-sm ${isMastered ? 'btn-success' : 'btn-outline-master'}" 
                      onclick="window.flashcardModule.toggleMastered('${word.id}')"
                      title="Bấm hoặc gõ phím M">
                ${isMastered ? '✅ Đã thuộc từ này (Bấm để hủy)' : '☆ Đánh dấu Đã thuộc [Phím M]'}
              </button>
              <button class="btn btn-sm btn-secondary" onclick="window.app.testThisWord('${word.id}')">
                🎙️ Thử giọng đọc
              </button>
            </div>
          </div>

        </div>
      </div>

      <!-- THANH ĐIỀU HƯỚNG DƯỚI CÙNG -->
      <div class="flashcard-nav-bottom">
        <button class="btn btn-secondary" onclick="window.flashcardModule.prev()" title="Phím mũi tên Trái [←]">
          ⬅️ Từ trước [←]
        </button>
        <button class="btn btn-primary" onclick="window.flashcardModule.speakCurrent()" title="Phím tắt [S]">
          🔊 Phát âm chuẩn [S]
        </button>
        <button class="btn btn-sm ${isMastered ? 'btn-outline-danger' : 'btn-success'}" 
                onclick="window.flashcardModule.toggleMastered('${word.id}')"
                style="padding:10px 18px; font-weight:800;"
                title="Phím tắt [M]">
          ${isMastered ? '⚠️ Đánh dấu Chưa thuộc' : '✅ Đánh dấu Đã thuộc [M]'}
        </button>
        <button class="btn btn-secondary" onclick="window.flashcardModule.next()" title="Phím mũi tên Phải [→]">
          Từ kế tiếp [→] ➡️
        </button>
      </div>

      <!-- HƯỚNG DẪN PHÍM TẮT TRỰC QUAN -->
      <div class="flashcard-keyboard-legend">
        <span>⌨️ <strong>Phím tắt nhanh:</strong> [Space / Enter] Lật thẻ | [← / →] Đổi từ | [S] Nghe đọc | [M] Đánh dấu Đã thuộc</span>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // LẬT MẶT THẺ VÀ ĐIỀU HƯỚNG
  // --------------------------------------------------------------------------
  flip() {
    this.isFlipped = !this.isFlipped;
    if (window.soundSystem) window.soundSystem.playCardFlip();
    const card = document.getElementById('flashcard-card');
    if (card) {
      if (this.isFlipped) {
        card.classList.add('is-flipped');
      } else {
        card.classList.remove('is-flipped');
      }
    }
  }

  next() {
    if (this.words.length === 0) return;
    this.isFlipped = false;
    if (this.currentIndex < this.words.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }

    if (this.currentLesson) {
      this.cardsReviewedInLesson = Math.min(this.words.length, (this.cardsReviewedInLesson || 1) + 1);
      if (this.cardsReviewedInLesson >= this.words.length) {
        this.markLessonVocabComplete();
      }
    }

    this.render();
    this.speakCurrent();
  }

  prev() {
    if (this.words.length === 0) return;
    this.isFlipped = false;
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.words.length - 1;
    }
    this.render();
    this.speakCurrent();
  }

  // --------------------------------------------------------------------------
  // BẬT / TẮT TRẠNG THÁI ĐÃ THUỘC (MASTERED)
  // --------------------------------------------------------------------------
  toggleMastered(id) {
    const isNowMastered = !this.masteredIds.has(id);
    if (isNowMastered) {
      this.masteredIds.add(id);
      if (window.soundSystem) window.soundSystem.playCorrect();
      if (window.mascot) {
        window.mascot.setMood('happy', 'Tuyệt vời! Đã thuộc thêm 1 từ vựng N5! 🌸✨', 2200);
      }
      if (window.app) {
        window.app.addExp(10);
      }
    } else {
      this.masteredIds.delete(id);
      if (window.soundSystem) window.soundSystem.playPop();
    }

    this.saveProgress();

    // Nếu đang ở bộ lọc "Chưa thuộc" hoặc "Đã thuộc", áp dụng lại bộ lọc
    if (this.filterStatus !== 'all') {
      this.applyFilters();
    } else {
      this.render();
    }

    // Đồng bộ lại danh sách Sổ tay từ vựng nếu đang hiển thị
    if (window.app && typeof window.app.syncVocabVaultUI === 'function') {
      window.app.syncVocabVaultUI();
    }
  }
}

// Khởi tạo instance toàn cục
window.flashcardModule = new FlashcardModule();
