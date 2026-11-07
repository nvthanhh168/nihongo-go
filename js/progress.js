// ============================================================================
// MODULE PROGRESS: QUẢN LÝ TIẾN ĐỘ, GAMIFICATION (EXP, STREAK, CẤP BẬC)
// VÀ SAO LƯU / KHÔI PHỤC DỮ LIỆU HỌC TẬP (BACKUP & RESTORE JSON)
// ============================================================================

class JapaneseProgressModule {
  constructor() {
    this.exp = 0;
    this.level = 1;
    this.coins = 50;
    this.streak = 1;
    this.lastActiveDate = '';
    this.userTitle = 'Tân Binh Nhập Môn';

    this.loadProfile();
    this.checkAndUpdateStreak();
  }

  // --------------------------------------------------------------------------
  // HỆ THỐNG DANH HIỆU THĂNG CẤP CHUẨN N5
  // --------------------------------------------------------------------------
  getTitleForLevel(lvl) {
    if (lvl >= 10) return 'Học Trò Cưng Của Cô Tanaka 🌟👩‍🏫';
    if (lvl >= 7)  return 'Samurai N5 🥋';
    if (lvl >= 5)  return 'Chiến Binh Kana ⚔️';
    if (lvl >= 3)  return 'Học Trò Của Shiba 🐕';
    return 'Tân Binh Nhập Môn 🐣';
  }

  // --------------------------------------------------------------------------
  // TẢI & LƯU THÔNG SỐ HỌC VIÊN
  // --------------------------------------------------------------------------
  loadProfile() {
    try {
      const data = localStorage.getItem('nihongo_go_profile');
      if (data) {
        const parsed = JSON.parse(data);
        this.exp = parsed.exp || 0;
        this.level = parsed.level || 1;
        this.coins = parsed.coins !== undefined ? parsed.coins : 50;
        this.streak = parsed.streak || 1;
        this.lastActiveDate = parsed.lastActiveDate || '';
      }
    } catch (e) {
      this.exp = 0;
      this.level = 1;
      this.coins = 50;
      this.streak = 1;
    }
    this.userTitle = this.getTitleForLevel(this.level);
    this.updateHeaderUI();
  }

  saveProfile() {
    try {
      const profile = {
        exp: this.exp,
        level: this.level,
        coins: this.coins,
        streak: this.streak,
        lastActiveDate: this.lastActiveDate,
        title: this.userTitle
      };
      localStorage.setItem('nihongo_go_profile', JSON.stringify(profile));
    } catch (e) {}

    if (window.authModule && typeof window.authModule.autoSaveProgress === 'function' && window.authModule.isLoggedIn()) {
      window.authModule.autoSaveProgress();
    }

    this.updateHeaderUI();
  }

  // --------------------------------------------------------------------------
  // CHUỖI NGÀY HỌC LIÊN TIẾP (DAILY STREAK)
  // --------------------------------------------------------------------------
  checkAndUpdateStreak() {
    const today = new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"

    if (!this.lastActiveDate) {
      this.lastActiveDate = today;
      this.streak = 1;
      this.saveProfile();
      return;
    }

    if (this.lastActiveDate === today) {
      // Cùng một ngày, giữ nguyên chuỗi
      return;
    }

    const last = new Date(this.lastActiveDate);
    const curr = new Date(today);
    const diffTime = curr - last;
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      // Ngày liên tiếp -> Tăng streak!
      this.streak++;
      this.coins += 5; // Thưởng 5 Sakura Coins
      this.lastActiveDate = today;
      this.saveProfile();

      setTimeout(() => {
        if (window.soundSystem) window.soundSystem.playCorrect();
        if (window.mascot) {
          window.mascot.setMood('celebrate', `🔥 CHUỖI HỌC ${this.streak} NGÀY LIÊN TIẾP! Thưởng thêm 5 Sakura Coins! 🌸`, 4000);
        }
      }, 1500);
    } else if (diffDays > 1) {
      // Đứt chuỗi quá 1 ngày -> reset về 1
      this.streak = 1;
      this.lastActiveDate = today;
      this.saveProfile();
    }
  }

  // --------------------------------------------------------------------------
  // CỘNG ĐIỂM EXP & TỰ ĐỘNG LEVEL UP
  // --------------------------------------------------------------------------
  addExp(points) {
    this.exp += points;
    const requiredExp = this.level * 100;

    if (this.exp >= requiredExp) {
      this.level++;
      this.exp -= requiredExp;
      this.userTitle = this.getTitleForLevel(this.level);

      if (window.soundSystem) window.soundSystem.playVictory();
      
      if (window.mascot) {
        window.mascot.setMood(
          'celebrate',
          `🎖️ LEVEL UP! Chúc mừng bạn đạt Level ${this.level} - Danh hiệu: "${this.userTitle}"! 🏆🌸`,
          5000
        );
      }
    }

    this.saveProfile();
  }

  addCoins(amount) {
    this.coins += amount;
    this.saveProfile();
  }

  // --------------------------------------------------------------------------
  // ĐỒNG BỘ HIỂN THỊ LÊN THANH HEADER
  // --------------------------------------------------------------------------
  updateHeaderUI() {
    const expEl = document.getElementById('user-exp');
    const levelEl = document.getElementById('user-level');
    const titleEl = document.getElementById('user-title');
    const coinsEl = document.getElementById('user-coins');
    const streakEl = document.getElementById('user-streak');
    const masteryEl = document.getElementById('user-n5-mastery');

    const totalN5 = window.JLPT_DATA?.n5?.length || 104;
    const masteredIds = window.flashcardModule?.masteredIds || new Set();
    const masteredCount = masteredIds.size;
    const percent = Math.round((masteredCount / Math.max(1, totalN5)) * 100);

    if (expEl) expEl.textContent = `${this.exp}/${this.level * 100} EXP`;
    if (levelEl) levelEl.textContent = `Lv.${this.level}`;
    if (titleEl) titleEl.textContent = this.userTitle.split(' ')[0] + ' ' + (this.userTitle.split(' ')[1] || '');
    if (coinsEl) coinsEl.textContent = this.coins;
    if (streakEl) streakEl.textContent = `${this.streak} ngày 🔥`;
    if (masteryEl) masteryEl.textContent = `${percent}% (${masteredCount}/${totalN5})`;
  }

  // --------------------------------------------------------------------------
  // MODAL "📊 HỒ SƠ & TIẾN ĐỘ HỌC TẬP"
  // --------------------------------------------------------------------------
  openProfileModal() {
    let modal = document.getElementById('user-profile-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'user-profile-modal';
      modal.className = 'modal-overlay';
      modal.onclick = (e) => {
        if (e.target === modal) this.closeProfileModal();
      };
      document.body.appendChild(modal);
    }

    modal.classList.remove('hidden');
    modal.classList.add('active');
    modal.style.display = 'flex';
    this.renderModalContent();

    if (window.soundSystem) window.soundSystem.playPop();
  }

  closeProfileModal() {
    const modal = document.getElementById('user-profile-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('active');
      modal.style.display = 'none';
    }
  }

  renderModalContent() {
    const modal = document.getElementById('user-profile-modal');
    if (!modal) return;

    const totalN5 = window.JLPT_DATA?.n5?.length || 104;
    const masteredIds = window.flashcardModule?.masteredIds || new Set();
    const masteredCount = masteredIds.size;
    const vocabPercent = Math.round((masteredCount / Math.max(1, totalN5)) * 100);

    const highScore = window.guessGame?.highScore || localStorage.getItem('nihongo_go_guess_highscore') || 0;
    const bestTime = window.memoryGame?.bestTime || localStorage.getItem('nihongo_go_memory_best_time') || '--';
    const mistakesList = window.guessGame?.mistakesList || [];

    const reqExp = this.level * 100;
    const expPercent = Math.min(100, Math.round((this.exp / reqExp) * 100));

    modal.innerHTML = `
      <div class="modal-card profile-modal-card">
        
        <!-- HEADER MODAL -->
        <div class="modal-header">
          <div class="profile-header-title">
            <span class="profile-header-avatar">🌸</span>
            <div>
              <h3>HỒ SƠ HỌC VIÊN NIHONGO GO!</h3>
              <p class="profile-sub">Tiến độ chinh phục JLPT N5 • Hệ thống Gamification</p>
            </div>
          </div>
          <button class="modal-close-btn" onclick="window.progressModule.closeProfileModal()">✕</button>
        </div>

        <div class="modal-body profile-modal-body">
          
          <!-- KHỐI 1: DANH HIỆU, LEVEL & THANH EXP -->
          <div class="profile-hero-card">
            <div class="hero-rank-info">
              <div class="hero-level-badge">Lv.${this.level}</div>
              <div class="hero-title-text">
                <h4>${this.userTitle}</h4>
                <span>Chuỗi ngày chăm chỉ: <strong>${this.streak} ngày liên tiếp 🔥</strong></span>
              </div>
              <div class="hero-coins-pill">
                <span>🌸 ${this.coins} Sakura Coins</span>
              </div>
            </div>

            <!-- Thanh tiến trình EXP -->
            <div class="profile-exp-bar-wrap">
              <div class="exp-bar-labels">
                <span>Điểm kinh nghiệm: <strong>${this.exp} / ${reqExp} EXP</strong></span>
                <span>${expPercent}%</span>
              </div>
              <div class="exp-track">
                <div class="exp-fill" style="width: ${expPercent}%;"></div>
              </div>
            </div>
          </div>

          <!-- KHỐI 2: CÁC CHỈ SỐ THỐNG KÊ CHI TIẾT -->
          <div class="profile-stats-grid">
            
            <!-- Thẻ Từ vựng đã thuộc -->
            <div class="stat-mini-card">
              <div class="stat-mini-header">
                <span class="stat-mini-icon">📚</span>
                <span class="stat-mini-title">Từ vựng N5</span>
              </div>
              <div class="stat-mini-value">${masteredCount} <small>/ ${totalN5} từ</small></div>
              <div class="stat-mini-bar">
                <div class="stat-fill-vocab" style="width: ${vocabPercent}%;"></div>
              </div>
              <div class="stat-mini-foot">${vocabPercent}% kho từ vựng N5</div>
            </div>

            <!-- Thẻ Kỷ lục Game Đoán Từ -->
            <div class="stat-mini-card">
              <div class="stat-mini-header">
                <span class="stat-mini-icon">🎯</span>
                <span class="stat-mini-title">Kỷ Lục Đoán Từ</span>
              </div>
              <div class="stat-mini-value">${highScore} <small>điểm</small></div>
              <div class="stat-mini-foot">Hệ số phản xạ cao nhất</div>
            </div>

            <!-- Thẻ Kỷ lục Lật Thẻ Trí Nhớ -->
            <div class="stat-mini-card">
              <div class="stat-mini-header">
                <span class="stat-mini-icon">🧩</span>
                <span class="stat-mini-title">Tốc Độ Lật Thẻ</span>
              </div>
              <div class="stat-mini-value">${bestTime !== '--' ? bestTime + 's' : '--'}</div>
              <div class="stat-mini-foot">Thời gian ghép cặp nhanh nhất</div>
            </div>

            <!-- Thẻ Sổ tay từ hay sai -->
            <div class="stat-mini-card">
              <div class="stat-mini-header">
                <span class="stat-mini-icon">📕</span>
                <span class="stat-mini-title">Từ Cần Ôn Lại</span>
              </div>
              <div class="stat-mini-value">${mistakesList.length} <small>từ</small></div>
              <div class="stat-mini-foot">${mistakesList.length === 0 ? 'Chưa sai từ nào 🌟' : 'Cần phục thù ngay ⚠️'}</div>
            </div>

          </div>

          <!-- KHỐI 3: ĐỒNG BỘ ĐÁM MÂY ĐA THIẾT BỊ (REALTIME CLOUD SYNC) -->
          <div class="profile-backup-section" style="margin-bottom: 16px; border: 1.5px solid #69DB7C; background: #F8FFF9;">
            <div class="backup-section-header">
              <span class="backup-icon">☁️</span>
              <div>
                <h5>ĐỒNG BỘ ĐÁM MÂY ĐA THIẾT BỊ (REALTIME CLOUD SYNC)</h5>
                <p>Tự động bảo lưu tài khoản và tiến độ học tập giữa Điện thoại, iPad và Máy tính</p>
              </div>
            </div>

            <div style="font-size: 12.5px; color: #2B8A3E; margin: 8px 0 12px; display: flex; flex-direction: column; gap: 4px;">
              <div>• Tài khoản liên kết: <strong>${window.authModule?.currentUser?.displayName || 'Chế độ Khách'}</strong> (${window.authModule?.currentUser?.username || 'Chưa đăng nhập'})</div>
              <div>• Trạng thái: <span style="font-weight: 700; color: #2B8A3E;">🟢 Đã kết nối Đám Mây (Đăng nhập bất kỳ đâu bằng tài khoản & mật khẩu)</span></div>
            </div>

            <div class="backup-buttons-row">
              <button class="btn btn-primary" style="background: linear-gradient(135deg, #40C057, #2F9E44);" onclick="window.progressModule.triggerManualCloudSync(event)">
                🔄 Đồng Bộ Đám Mây Ngay
              </button>
            </div>
          </div>

          <!-- KHỐI 4: SAO LƯU & KHÔI PHỤC TIẾN ĐỘ (.JSON DỰ PHÒNG) -->
          <div class="profile-backup-section">
            <div class="backup-section-header">
              <span class="backup-icon">💾</span>
              <div>
                <h5>SAO LƯU DỰ PHÒNG THỦ CÔNG (.JSON)</h5>
                <p>Xuất file dự phòng về máy cá nhân nếu muốn lưu trữ offline hoàn toàn</p>
              </div>
            </div>

            <div class="backup-buttons-row">
              <button class="btn btn-secondary btn-backup" onclick="window.progressModule.exportBackupJSON()">
                📥 Xuất file (.json)
              </button>
              
              <label class="btn btn-secondary btn-restore" title="Chọn file JSON để khôi phục tiến độ">
                📤 Khôi phục (.json)
                <input type="file" id="backup-file-input" accept=".json" style="display: none;" onchange="window.progressModule.importBackupJSON(event)">
              </label>
            </div>
          </div>

        </div>

        <div class="modal-footer profile-modal-footer">
          <button class="btn btn-secondary" onclick="window.progressModule.closeProfileModal()">
            Đóng hồ sơ
          </button>
        </div>

      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // TÍNH NĂNG: KÍCH HOẠT ĐỒNG BỘ ĐÁM MÂY THỜI GIAN THỰC
  // --------------------------------------------------------------------------
  async triggerManualCloudSync(e) {
    const btn = e ? e.currentTarget : null;
    const oldText = btn ? btn.innerHTML : '';
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = '🔄 Đang đồng bộ Đám Mây...';
    }
    try {
      if (window.authModule) {
        const res = await window.authModule.forceFullCloudSync();
        if (res.success) {
          alert('✅ ' + res.message);
          this.renderModalContent();
        } else {
          alert('⚠️ ' + res.message);
        }
      }
    } catch (err) {
      alert('⚠️ Lỗi kết nối đám mây: ' + err.message);
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = oldText || '🔄 Đồng Bộ Đám Mây Ngay';
      }
    }
  }

  // --------------------------------------------------------------------------
  // TÍNH NĂNG 1: XUẤT DỮ LIỆU HỌC TẬP (.JSON)
  // --------------------------------------------------------------------------
  exportBackupJSON() {
    try {
      const backupData = {
        appName: 'Nihongo Go!',
        version: '2.0',
        exportedAt: new Date().toISOString(),
        profile: {
          exp: this.exp,
          level: this.level,
          coins: this.coins,
          streak: this.streak,
          lastActiveDate: this.lastActiveDate,
          title: this.userTitle
        },
        masteredWords: [...(window.flashcardModule?.masteredIds || [])],
        guessHighScore: localStorage.getItem('nihongo_go_guess_highscore') || '0',
        memoryBestTime: localStorage.getItem('nihongo_go_memory_best_time') || null,
        mistakesList: window.guessGame?.mistakesList || []
      };

      const jsonStr = JSON.stringify(backupData, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8' });
      const url = URL.createObjectURL(blob);

      const today = new Date().toISOString().slice(0, 10);
      const a = document.createElement('a');
      a.href = url;
      a.download = `nihongo_go_backup_${today}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      if (window.soundSystem) window.soundSystem.playCorrect();
      if (window.mascot) {
        window.mascot.setMood('happy', 'Đã tải file tiến độ về máy tính an toàn! Hãy cất giữ cẩn thận nhé! 📥🌸', 4000);
      }
    } catch (err) {
      alert('Có lỗi khi xuất file dữ liệu: ' + err.message);
    }
  }

  // --------------------------------------------------------------------------
  // TÍNH NĂNG 2: KHÔI PHỤC DỮ LIỆU (.JSON)
  // --------------------------------------------------------------------------
  importBackupJSON(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);

        if (!data || !data.profile) {
          throw new Error('Định dạng file sao lưu không hợp lệ của Nihongo Go!');
        }

        // 1. Khôi phục Profile
        this.exp = data.profile.exp || 0;
        this.level = data.profile.level || 1;
        this.coins = data.profile.coins !== undefined ? data.profile.coins : 50;
        this.streak = data.profile.streak || 1;
        this.lastActiveDate = data.profile.lastActiveDate || '';
        this.userTitle = this.getTitleForLevel(this.level);
        this.saveProfile();

        // 2. Khôi phục từ vựng đã thuộc
        if (Array.isArray(data.masteredWords)) {
          localStorage.setItem('jlpt_n5_mastered_words', JSON.stringify(data.masteredWords));
          localStorage.setItem('jlpt_n5_mastered', JSON.stringify(data.masteredWords));
          if (window.flashcardModule) {
            window.flashcardModule.loadSavedProgress();
            window.flashcardModule.render();
          }
        }

        // 3. Khôi phục Kỷ lục điểm và thời gian
        if (data.guessHighScore) {
          localStorage.setItem('nihongo_go_guess_highscore', data.guessHighScore.toString());
          if (window.guessGame) window.guessGame.highScore = parseInt(data.guessHighScore, 10);
        }
        if (data.memoryBestTime) {
          localStorage.setItem('nihongo_go_memory_best_time', data.memoryBestTime.toString());
          if (window.memoryGame) window.memoryGame.bestTime = parseInt(data.memoryBestTime, 10);
        }

        // 4. Khôi phục Sổ tay từ hay sai
        if (Array.isArray(data.mistakesList)) {
          localStorage.setItem('nihongo_go_mistakes_vocab', JSON.stringify(data.mistakesList));
          if (window.guessGame) window.guessGame.mistakesList = data.mistakesList;
        }

        // Cập nhật lại toàn bộ giao diện
        this.updateHeaderUI();
        this.renderModalContent();

        if (window.soundSystem) window.soundSystem.playVictory();
        alert('🎉 KHÔI PHỤC DỮ LIỆU THÀNH CÔNG!\nCấp độ, EXP và toàn bộ từ vựng đã được khôi phục nguyên vẹn!');

        if (window.mascot) {
          window.mascot.setMood('celebrate', 'Đã nạp lại toàn bộ dữ liệu thành công! Tiếp tục học tập nào! 🏆🌸', 4000);
        }
      } catch (err) {
        alert('Lỗi đọc file: ' + err.message);
      }
    };
    reader.readAsText(file);
  }
}

// Khởi tạo instance toàn cục
window.progressModule = new JapaneseProgressModule();
