// ============================================================================
// MAIN APPLICATION CONTROLLER: NIHONGO GO! (日本語ゴー!) - HOÀN CHỈNH
// Quản lý Tabs, EXP, Level, Streak, Lưu trữ, Gamification & Sổ tay từ vựng N5
// Tìm kiếm tức thời tiếng Việt không dấu/có dấu, Romaji, Hiragana, Kanji & Hán Việt
// ============================================================================

// Hàm chuẩn hóa loại bỏ dấu tiếng Việt để tìm kiếm siêu nhạy
function removeVietnameseTones(str) {
  if (!str) return '';
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .trim();
}

class JapaneseApp {
  constructor() {
    this.currentTab = 'roadmap'; // Mặc định mở ngay Bản đồ Lộ trình 25 Bài N5
    this.currentLevel = 'n5'; // Trọng tâm N5
    this.exp = 0;
    this.level = 1;
    this.coins = 50;
    this.streak = 1;

    // Bộ lọc Sổ tay từ vựng N5
    this.vaultSearchTerm = '';
    this.vaultCategory = 'all';
    this.vaultStatus = 'all'; // 'all', 'unmastered', 'mastered', 'mistake'

    this.init();
  }

  init() {
    this.loadUserData();
    this.updateUserStatsUI();

    // Khởi tạo Mascot
    if (window.JapaneseMascot) {
      window.mascot = new window.JapaneseMascot('mascot-container');
    }

    // Khởi tạo các module với dữ liệu JLPT N5
    const n5Words = window.JLPT_DATA ? window.JLPT_DATA.n5 : [];
    
    if (window.guessGame && typeof window.guessGame.start === 'function') {
      window.guessGame.start(n5Words);
    }
    if (window.speechModule && typeof window.speechModule.setWordList === 'function') {
      window.speechModule.setWordList(n5Words);
    }
    if (window.flashcardModule && typeof window.flashcardModule.init === 'function') {
      window.flashcardModule.init(n5Words);
    }
    if (window.memoryGame && typeof window.memoryGame.start === 'function') {
      window.memoryGame.start(n5Words);
    }
    if (window.kanaModule && typeof window.kanaModule.init === 'function') {
      window.kanaModule.init();
    }
    if (window.grammarModule && typeof window.grammarModule.init === 'function') {
      window.grammarModule.init();
    }
    if (window.mockTestModule && typeof window.mockTestModule.init === 'function') {
      window.mockTestModule.init();
    }
    if (window.roadmapModule && typeof window.roadmapModule.init === 'function') {
      window.roadmapModule.init();
    }

    // Khởi tạo giao diện Sổ tay từ vựng N5
    this.initVaultCategoryChips();
    this.syncVocabVaultUI();

    // Gắn sự kiện chuyển tab
    this.setupTabListeners();

    // Cập nhật % thuộc từ vựng lên Header
    if (window.flashcardModule && typeof window.flashcardModule.updateHeaderMasteryStats === 'function') {
      window.flashcardModule.updateHeaderMasteryStats();
    }

    // Lời chào mừng ban đầu
    setTimeout(() => {
      if (window.mascot) {
        window.mascot.say('Konnichiwa! Chào mừng bạn đến với Nihongo Go N5! Hãy thử chơi game đoán từ nhé! 🌸', 4000);
      }
    }, 800);
  }

  // --------------------------------------------------------------------------
  // LƯU TRỮ VÀ TẢI THÔNG SỐ NGƯỜI DÙNG (PROFILE & STATS)
  // --------------------------------------------------------------------------
  loadUserData() {
    if (window.progressModule) {
      this.exp = window.progressModule.exp;
      this.level = window.progressModule.level;
      this.coins = window.progressModule.coins;
      this.streak = window.progressModule.streak;
      return;
    }
    try {
      const data = localStorage.getItem('nihongo_go_profile');
      if (data) {
        const parsed = JSON.parse(data);
        this.exp = parsed.exp || 0;
        this.level = parsed.level || 1;
        this.coins = parsed.coins !== undefined ? parsed.coins : 50;
        this.streak = parsed.streak || 1;
      }
    } catch (e) {}
  }

  saveUserData() {
    if (window.progressModule) {
      window.progressModule.exp = this.exp;
      window.progressModule.level = this.level;
      window.progressModule.coins = this.coins;
      window.progressModule.streak = this.streak;
      window.progressModule.saveProfile();
      return;
    }
    try {
      const profile = {
        exp: this.exp,
        level: this.level,
        coins: this.coins,
        streak: this.streak
      };
      localStorage.setItem('nihongo_go_profile', JSON.stringify(profile));
    } catch (e) {}
  }

  addExp(points) {
    if (window.progressModule) {
      window.progressModule.addExp(points);
      this.exp = window.progressModule.exp;
      this.level = window.progressModule.level;
      return;
    }
    this.exp += points;
    const requiredExp = this.level * 100;
    if (this.exp >= requiredExp) {
      this.level++;
      this.exp -= requiredExp;
      if (window.soundSystem) window.soundSystem.playVictory();
      if (window.mascot) {
        window.mascot.setMood('celebrate', `LEVEL UP! Bạn đã thăng cấp Level ${this.level}! Xuất sắc! 🎖️`, 4000);
      }
    }
    this.saveUserData();
    this.updateUserStatsUI();
  }

  addCoins(amount) {
    if (window.progressModule) {
      window.progressModule.addCoins(amount);
      this.coins = window.progressModule.coins;
      return;
    }
    this.coins += amount;
    this.saveUserData();
    this.updateUserStatsUI();
  }

  getUserTitle() {
    if (window.progressModule) {
      return window.progressModule.getTitleForLevel(this.level);
    }
    if (this.level >= 10) return 'Bậc Thầy N5';
    if (this.level >= 6) return 'Dũng Sĩ N5';
    if (this.level >= 3) return 'Học Viên Tiềm Năng';
    return 'Tân Thủ Hiragana';
  }

  updateUserStatsUI() {
    if (window.progressModule) {
      window.progressModule.updateHeaderUI();
      return;
    }
    const expEl = document.getElementById('user-exp');
    const levelEl = document.getElementById('user-level');
    const titleEl = document.getElementById('user-title');
    const coinsEl = document.getElementById('user-coins');
    const streakEl = document.getElementById('user-streak');

    if (expEl) expEl.textContent = `${this.exp}/${this.level * 100} EXP`;
    if (levelEl) levelEl.textContent = `Lv.${this.level}`;
    if (titleEl) titleEl.textContent = this.getUserTitle();
    if (coinsEl) coinsEl.textContent = this.coins;
    if (streakEl) streakEl.textContent = `${this.streak} ngày 🔥`;

    if (window.flashcardModule && typeof window.flashcardModule.updateHeaderMasteryStats === 'function') {
      window.flashcardModule.updateHeaderMasteryStats();
    }
  }

  // --------------------------------------------------------------------------
  // CHUYỂN ĐỔI TAB & BẢNG ĐIỀU HƯỚNG
  // --------------------------------------------------------------------------
  setupTabListeners() {
    const navButtons = document.querySelectorAll('.nav-tab-btn');
    navButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        this.switchTab(tab);
      });
    });
  }

  switchTab(tabId) {
    this.currentTab = tabId;

    // Tự động cuộn Tab đang chọn vào giữa tầm nhìn (rất quan trọng trên Điện thoại & iPad)
    const activeBtn = document.querySelector(`.nav-tab-btn[data-tab="${tabId}"]`);
    if (activeBtn) {
      try {
        activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      } catch (e) {}
    }
    if (window.soundSystem) window.soundSystem.playPop();

    // Cập nhật trạng thái active của nút Tab
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
    });

    // Cập nhật panel hiển thị
    document.querySelectorAll('.app-tab-panel').forEach(panel => {
      panel.classList.toggle('active', panel.id === `tab-${tabId}`);
    });

    // Đổi lại nhân vật Shiba nếu rời khỏi phòng cô Tanaka và phòng thi thử
    if (tabId !== 'strict-sensei' && tabId !== 'mock-test' && window.mascot && window.mascot.character === 'sensei') {
      window.mascot.setCharacter('shiba');
    }

    // Tác vụ chuyên biệt cho từng Tab khi mở
    if (tabId === 'roadmap') {
      if (window.roadmapModule) {
        window.roadmapModule.render();
      }
      if (window.mascot) {
        window.mascot.say('Bản đồ chinh phục 25 Bài N5! Cùng vượt qua 5 chặng để tiến tới Đỉnh Phú Sĩ nhé! 🗺️🌸', 4000);
      }
    } else if (tabId === 'guess-game' && !window.guessGame.gameActive) {
      window.guessGame.start(window.JLPT_DATA.n5);
    } else if (tabId === 'speech-test') {
      if (window.mascot) {
        window.mascot.say('Phòng luyện phát âm AI! Bấm loa nghe mẫu rồi bấm micro để nói nhé! 🎙️', 3500);
      }
    } else if (tabId === 'strict-sensei') {
      if (window.senseiAI && !window.senseiAI.currentChallengeWord) {
        window.senseiAI.pickRandomWordForSentence();
      }
      if (window.mascot) {
        window.mascot.setCharacter('sensei');
        window.mascot.say('Lớp khảo bài của cô Tanaka đây! Tập trung cao độ và làm bài cẩn thận nhé! 👩‍🏫', 4000);
      }
    } else if (tabId === 'memory-game') {
      window.memoryGame.start(window.JLPT_DATA.n5);
    } else if (tabId === 'flashcard') {
      if (window.flashcardModule) {
        window.flashcardModule.render();
      }
    } else if (tabId === 'kana-practice') {
      if (window.kanaModule) {
        window.kanaModule.render();
      }
      if (window.mascot) {
        window.mascot.say('Bảng chữ cái & Tập viết nét chuẩn! Hãy chọn chữ và luyện vẽ theo lưới ô vuông nhé! ✍️🌸', 3500);
      }
    } else if (tabId === 'grammar-scramble') {
      if (window.grammarModule) {
        window.grammarModule.render();
      }
      if (window.mascot) {
        window.mascot.say('Khám phá 22 Ngữ pháp N5 và Game Giải Cứu Trợ Từ nhé! 📐✨', 3500);
      }
    } else if (tabId === 'mock-test') {
      if (window.mockTestModule) {
        window.mockTestModule.render();
      }
      if (window.mascot) {
        window.mascot.setCharacter('sensei');
        window.mascot.say('Phòng thi thử JLPT N5! 10 phút, 15 câu chuẩn cấu trúc JEES! Làm bài thật nghiêm túc nhé! 🏆👩‍🏫', 4000);
      }
    } else if (tabId === 'vocab-vault') {
      this.syncVocabVaultUI();
    }
  }

  selectLevel(level) {
    if (level === 'n5') {
      this.currentLevel = 'n5';
      if (window.mascot) {
        window.mascot.say('Trọng tâm ôn luyện JLPT N5 đã được kích hoạt đầy đủ! 🎯', 3000);
      }
    } else {
      if (window.soundSystem) window.soundSystem.playPop();
      if (window.authModule && !window.authModule.isLoggedIn()) {
        window.authModule.openAuthModal('login', `⛩️ Để bước vào Cổng ${level.toUpperCase()}, em cần Đăng Nhập tài khoản học viên để lưu lại toàn bộ tiến độ N5 nhé! 🌸`);
        return;
      }
      if (window.mascot) {
        window.mascot.say(`Cấp độ ${level.toUpperCase()} đang được kết nối với tài khoản ${window.authModule?.currentUser?.displayName}! Hãy thi đỗ bài thi thử N5 để nhận chứng chỉ nhé! 🏆`, 4000);
      }
      alert(`📚 Cổng ${level.toUpperCase()} đã được liên kết với tài khoản học viên! Hãy hoàn thành trọn vẹn 25 bài và vượt qua Bài Thi Thử N5 để mở khóa chính thức!`);
    }
  }

  // --------------------------------------------------------------------------
  // SỔ TAY TỪ VỰNG N5 (TÌM KIẾM TỨC THỜI & BỘ LỌC ĐA NĂNG)
  // --------------------------------------------------------------------------
  initVaultCategoryChips() {
    const wrap = document.getElementById('vault-category-chips');
    if (!wrap) return;

    const cats = window.JLPT_CATEGORIES || {};
    const allWords = window.JLPT_DATA?.n5 || [];

    let html = `
      <button class="vault-cat-btn active" data-cat="all" onclick="window.app.setVaultCategory('all')">
        Tất cả (${allWords.length})
      </button>
    `;

    Object.keys(cats).forEach(k => {
      const c = cats[k];
      const count = allWords.filter(w => w.category === k).length;
      html += `
        <button class="vault-cat-btn" data-cat="${k}" onclick="window.app.setVaultCategory('${k}')">
          <span>${c.icon}</span> ${c.name} (${count})
        </button>
      `;
    });

    wrap.innerHTML = html;
  }

  setVaultCategory(catId) {
    this.vaultCategory = catId;
    document.querySelectorAll('.vault-cat-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-cat') === catId);
    });
    this.syncVocabVaultUI();
    if (window.soundSystem) window.soundSystem.playPop();
  }

  setVaultStatus(status) {
    this.vaultStatus = status;
    document.querySelectorAll('.vault-status-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-status') === status);
    });
    this.syncVocabVaultUI();
    if (window.soundSystem) window.soundSystem.playPop();
  }

  onSearchInput(val) {
    this.vaultSearchTerm = val || '';
    this.syncVocabVaultUI();
  }

  clearSearch() {
    const inp = document.getElementById('vault-search-input');
    if (inp) inp.value = '';
    this.vaultSearchTerm = '';
    this.syncVocabVaultUI();
    if (inp) inp.focus();
  }

  syncVocabVaultUI() {
    const listContainer = document.getElementById('vocab-list-items');
    const counterEl = document.getElementById('vault-result-counter');
    if (!listContainer) return;

    const allWords = window.JLPT_DATA?.n5 || [];
    const masteredSet = window.flashcardModule?.masteredIds || new Set();
    const mistakesList = window.guessGame?.mistakesList || [];
    const mistakeIds = new Set(mistakesList.map(m => m.id));

    const rawTerm = this.vaultSearchTerm.trim().toLowerCase();
    const cleanTerm = removeVietnameseTones(this.vaultSearchTerm);

    const filtered = allWords.filter(w => {
      // 1. Lọc theo chủ đề
      if (this.vaultCategory !== 'all' && w.category !== this.vaultCategory) {
        return false;
      }

      // 2. Lọc theo trạng thái
      if (this.vaultStatus === 'mastered' && !masteredSet.has(w.id)) {
        return false;
      }
      if (this.vaultStatus === 'unmastered' && masteredSet.has(w.id)) {
        return false;
      }
      if (this.vaultStatus === 'mistake' && !mistakeIds.has(w.id)) {
        return false;
      }

      // 3. Tìm kiếm tức thời (Tiếng Việt không dấu/có dấu, Romaji, Hiragana, Kanji, Hán Việt)
      if (cleanTerm) {
        const kanjiMatch = (w.kanji || '').toLowerCase().includes(rawTerm);
        const hiraMatch = (w.hiragana || '').toLowerCase().includes(rawTerm);
        const romajiMatch = (w.romaji || '').toLowerCase().includes(rawTerm);
        const hanVietMatch = removeVietnameseTones(w.hanViet || '').includes(cleanTerm);
        
        const meaningRaw = (w.meaning || w.vietnamese || '').toLowerCase();
        const meaningClean = removeVietnameseTones(meaningRaw);
        const meaningMatch = meaningRaw.includes(rawTerm) || meaningClean.includes(cleanTerm);

        if (!kanjiMatch && !hiraMatch && !romajiMatch && !hanVietMatch && !meaningMatch) {
          return false;
        }
      }

      return true;
    });

    if (counterEl) {
      counterEl.innerHTML = `Hiển thị <strong>${filtered.length}</strong> / ${allWords.length} từ vựng N5`;
    }

    if (filtered.length === 0) {
      listContainer.innerHTML = `
        <div class="vault-empty-state">
          <div class="empty-icon">🔍</div>
          <h4>Không tìm thấy từ vựng nào phù hợp!</h4>
          <p>Thử tìm kiếm với từ khóa khác (ví dụ: ăn, taberu, chó, inu, 食べる) hoặc đổi bộ lọc.</p>
          <button class="btn btn-secondary btn-sm" onclick="window.app.clearSearch(); window.app.setVaultCategory('all'); window.app.setVaultStatus('all');">
            🔄 Đặt lại toàn bộ bộ lọc
          </button>
        </div>
      `;
      return;
    }

    let html = '';
    filtered.forEach(w => {
      const cat = window.JLPT_CATEGORIES[w.category] || { name: 'Chung', color: '#666' };
      const isMastered = masteredSet.has(w.id);
      const isMistake = mistakeIds.has(w.id);

      html += `
        <div class="vocab-row-card ${isMastered ? 'row-mastered' : ''} ${isMistake ? 'row-has-mistake' : ''}">
          <div class="vocab-row-visual">
            ${window.getVocabIllustration(w)}
          </div>
          <div class="vocab-row-content">
            <div class="vocab-row-kanji-wrap">
              <span class="vocab-row-kanji">${w.kanji}</span>
              <span class="vocab-row-hira">${w.hiragana}</span>
              <span class="vocab-row-romaji">(${w.romaji})</span>
              ${w.hanViet ? `<span class="badge-hanviet">【Hán: ${w.hanViet}】</span>` : ''}
              ${w.pitch ? `<span class="badge-pitch">${w.pitch}</span>` : ''}
              <span class="vocab-cat-tag" style="background-color: ${cat.color}22; color: ${cat.color}; border: 1px solid ${cat.color}44;">
                ${cat.name}
              </span>
              ${isMistake ? `<span class="badge-mistake-pill" title="Từ từng trả lời sai">⚠️ Hay sai</span>` : ''}
            </div>

            <div class="vocab-row-vi"><strong>Nghĩa:</strong> ${w.meaning || w.vietnamese}</div>

            <div class="vocab-row-ex">
              <strong>Ví dụ:</strong> ${w.example?.ja || w.exampleJa} 
              <button class="btn-audio-circle-mini" onclick="window.soundSystem.speak('${(w.example?.hira || w.exampleJa || '').replace(/['"\n]/g, '')}', 0.85)" title="Nghe câu ví dụ">🔊</button>
              <em>(${w.example?.vi || w.exampleVi})</em>
            </div>

            ${w.commonMistake ? `
              <div class="vocab-row-mistake">⚠️ <strong>Lỗi người Việt hay gặp:</strong> ${w.commonMistake}</div>
            ` : ''}
          </div>

          <div class="vocab-row-actions">
            <button class="btn-voice-mini" onclick="window.soundSystem.speak('${w.hiragana}')" title="Nghe từ vựng">
              🔊 Nghe từ
            </button>
            <button class="btn-test-mini" onclick="window.app.testThisWord('${w.id}')" title="Luyện đọc từ này trong phòng phát âm">
              🎙️ Luyện đọc
            </button>
            <button class="btn-master-mini ${isMastered ? 'btn-is-mastered' : ''}" onclick="window.app.toggleMasteredInVault('${w.id}')" title="Đánh dấu đã thuộc">
              ${isMastered ? '✅ Đã thuộc' : '☆ Chưa thuộc'}
            </button>
          </div>
        </div>
      `;
    });

    listContainer.innerHTML = html;
  }

  toggleMasteredInVault(wordId) {
    if (window.flashcardModule) {
      window.flashcardModule.toggleMastered(wordId);
    }
  }

  testThisWord(wordId) {
    const word = window.JLPT_DATA?.n5?.find(w => w.id === wordId);
    if (!word) return;

    this.switchTab('speech-test');
    if (window.speechModule) {
      window.speechModule.setWordList([word, ...window.JLPT_DATA.n5.filter(w => w.id !== wordId)]);
    }
  }

  // Cuộn thanh điều hướng Tabs sang trái / phải mượt mà
  scrollNav(offset) {
    const navWrap = document.getElementById('nav-tabs-wrap');
    if (navWrap) {
      navWrap.scrollBy({ left: offset, behavior: 'smooth' });
    }
  }

  // Mở modal toàn bộ 10 Chế Độ Học N5 (hỗ trợ tối ưu Điện thoại & iPad)
  openModesModal() {
    const modal = document.getElementById('all-modes-modal');
    if (modal) {
      modal.style.display = 'flex';
      if (window.soundSystem) window.soundSystem.playPop();
    }
  }

  // Đóng modal 10 Chế Độ Học N5
  closeModesModal() {
    const modal = document.getElementById('all-modes-modal');
    if (modal) {
      modal.style.display = 'none';
    }
  }
}

// Khởi tạo app khi DOM sẵn sàng
window.addEventListener('DOMContentLoaded', () => {
  window.app = new JapaneseApp();
});
