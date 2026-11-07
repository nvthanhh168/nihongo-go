// ============================================================================
// MODULE LỘ TRÌNH HỌC TẬP THÔNG MINH - ROADMAP 25 BÀI N5 -> N4 MINNA NO NIHONGO
// 1. Giao diện 5 Chặng địa danh Nhật Bản (Tokyo -> Kyoto -> Osaka -> Hokkaido -> Phú Sĩ)
// 2. Thu gọn / Mở rộng (Accordion) cho từng Chặng, hiển thị Lưới 5 Thẻ Bài Học (Level Nodes)
// 3. Quản lý 3 trạng thái: Đã hoàn thành (Completed ✅), Đang học (Current 🎯), Đang khóa (Locked 🔒)
// 4. Bảng Nhiệm Vụ Vượt Ải (Mission Modal) với 3 bước (Flashcard -> Game Đoán Từ -> Test Phát Âm AI)
// 5. Tính năng độc quyền: ⚡ Thi Vượt Nhanh Bài Này (Fast Pass Quiz)
// 6. Cơ chế Tự Động Mở Khóa Bài Tiếp Theo (Unlock Level N+1) & Cổng Chuyển Cấp N4
// 7. Sử dụng Event Delegation (document.addEventListener) 100% không bao giờ mất sự kiện click
// ============================================================================

const ROADMAP_REGIONS = [
  {
    id: 1,
    name: 'Chặng 1: Khởi Hành Từ Tokyo (東京)',
    icon: '🗼',
    range: [1, 5],
    desc: 'Làm quen tiếng Nhật, Chào hỏi, Giới thiệu bản thân, Đồ vật quanh ta, Địa điểm & Thời gian',
    themeColor: '#E03131',
    bgGradient: 'linear-gradient(135deg, #FFF0F6 0%, #FFE3E3 100%)'
  },
  {
    id: 2,
    name: 'Chặng 2: Khám Phá Cố Đô Kyoto (京都)',
    icon: '⛩️',
    range: [6, 10],
    desc: 'Ẩm thực Nhật Bản, Trao nhận quà tặng, Miêu tả tính cách & cảm nhận, Sở thích & Vị trí không gian',
    themeColor: '#F59F00',
    bgGradient: 'linear-gradient(135deg, #FFF9DB 0%, #FFF3BF 100%)'
  },
  {
    id: 3,
    name: 'Chặng 3: Phố Cảng Osaka (大阪)',
    icon: '🐙',
    range: [11, 15],
    desc: 'Số đếm siêu thị, Thời tiết bốn mùa, Mong muốn du lịch, Động từ Thể て & Xin phép, cấm đoán',
    themeColor: '#0CA678',
    bgGradient: 'linear-gradient(135deg, #E6FCF5 0%, #D3F9D8 100%)'
  },
  {
    id: 4,
    name: 'Chặng 4: Tuyết Trắng Hokkaido (北海道)',
    icon: '❄️',
    range: [16, 20],
    desc: 'Chuỗi hành động sinh hoạt, Sức khỏe bệnh viện (Thể ない), Năng lực (Thể từ điển) & Thể た',
    themeColor: '#1864AB',
    bgGradient: 'linear-gradient(135deg, #E7F5FF 0%, #D0EBFF 100%)'
  },
  {
    id: 5,
    name: 'Chặng 5: Chinh Phục Đỉnh Phú Sĩ (富士山)',
    icon: '🗻',
    range: [21, 25],
    desc: 'Bày tỏ ý kiến cá nhân, Mệnh đề bổ nghĩa danh từ, Thao tác máy móc, Cho nhận giúp đỡ & Điều kiện giả định - Chạm đỉnh N5!',
    themeColor: '#7048E8',
    bgGradient: 'linear-gradient(135deg, #F3F0FF 0%, #E5DBFF 100%)'
  },
  {
    id: 6,
    name: 'Chặng 6: Bước Vào Trung Cấp N4 - Cố Đô Nara & Lâu Đài Himeji (奈良・姫路)',
    icon: '🦌',
    range: [26, 30],
    desc: 'Lý do & Lời khuyên (～んです), Khả năng (可能形), Tự & Tha động từ, Trạng thái (～てあります) & Chuẩn bị (～ておきます)',
    themeColor: '#D9480F',
    bgGradient: 'linear-gradient(135deg, #FFF4E6 0%, #FFE8CC 100%)'
  },
  {
    id: 7,
    name: 'Chặng 7: Vượt Vũ Môn N4 - Xứ Sở Biển Seto & Hoa Anh Đào (瀬戸内・広島)',
    icon: '🌸',
    range: [31, 35],
    desc: 'Ý chí & Dự định (～よう, ～つもり), Mệnh lệnh & Cấm chỉ (～なさい, ～な), Điều kiện giả định (～ば, ～なら)',
    themeColor: '#E64980',
    bgGradient: 'linear-gradient(135deg, #FFF0F6 0%, #FCC2D7 100%)'
  },
  {
    id: 8,
    name: 'Chặng 8: Thâm Nhập Trung Cấp N4 - Cố Đô Kyoto & Cầu Akashi (京都・明石)',
    icon: '🌉',
    range: [36, 40],
    desc: 'Mục đích & Thay đổi (～ように), Bị động (受身形 ～られます), Danh từ hóa (～のは), Mục đích (～ために) & Câu hỏi lồng (～か)',
    themeColor: '#F76707',
    bgGradient: 'linear-gradient(135deg, #FFF4E6 0%, #FFE8CC 100%)'
  },
  {
    id: 9,
    name: 'Chặng 9: Bứt Phá N4 - Đảo Ngọc Kyushu & Suối Khoáng Onsen (九州・別府)',
    icon: '♨️',
    range: [41, 45],
    desc: 'Kính ngữ Cho & Nhận (いただき・くださる), Mục đích & Công dụng (～ために, ～のに), Phỏng đoán thị giác (～そうです) & Giả định (～場合は)',
    themeColor: '#E03131',
    bgGradient: 'linear-gradient(135deg, #FFF5F5 0%, #FFE3E3 100%)'
  },
  {
    id: 10,
    name: 'Chặng 10: Đỉnh Cao N4 - Đại Học Tokyo & Lễ Tốt Nghiệp Minna (東京・卒業)',
    icon: '🎓',
    range: [46, 50],
    desc: 'Thời điểm (～ところ), Truyền đạt (～そうです), Thể Sai khiến (使役形), Tôn kính ngữ (尊敬語) & Khiêm nhường ngữ (謙譲語) - Hoàn tất trọn vẹn 50 Bài Minna!',
    themeColor: '#7048E8',
    bgGradient: 'linear-gradient(135deg, #F3F0FF 0%, #E5DBFF 100%)'
  }
];

class JapaneseRoadmapModule {
  constructor() {
    this.containerId = 'roadmap-container';
    this.activeMissionLesson = null;
    this.expandedRegions = {}; // Lưu trạng thái đóng / mở của từng Chặng
    this._eventsAttached = false;

    // Khởi tạo Event Delegation một lần duy nhất
    this.setupEventDelegation();
  }

  init() {
    // Mặc định tự động mở Chặng đang có bài học của học viên
    const prog = this.getUserProgress();
    const currentRegionId = Math.min(10, Math.max(1, Math.ceil(prog.unlockedLesson / 5)));
    
    // Mở chặng hiện tại và Chặng 1
    this.expandedRegions[currentRegionId] = true;
    this.expandedRegions[1] = true;

    this.render();
  }

  // --------------------------------------------------------------------------
  // EVENT DELEGATION BẤT TỬ: BẮT TOÀN BỘ SỰ KIỆN CLICK, KHÔNG BAO GIỜ BỊ MẤT SỰ KIỆN
  // --------------------------------------------------------------------------
  setupEventDelegation() {
    if (this._eventsAttached) return;
    this._eventsAttached = true;

    document.addEventListener('click', (e) => {
      // 1. Bấm vào thanh tiêu đề Chặng (Toggle Accordion)
      const toggleRegionEl = e.target.closest('[data-action="toggle-region"]');
      if (toggleRegionEl) {
        e.preventDefault();
        const regId = parseInt(toggleRegionEl.getAttribute('data-region-id'), 10);
        this.toggleRegion(regId);
        return;
      }

      // 2. Bấm vào Thẻ Bài Học (Lesson Node Card)
      const lessonNodeEl = e.target.closest('[data-action="open-lesson"]');
      if (lessonNodeEl) {
        e.preventDefault();
        const lNum = parseInt(lessonNodeEl.getAttribute('data-lesson-num'), 10);
        this.handleNodeClick(lNum);
        return;
      }

      // 3. Bấm vào nút Bắt đầu nhiệm vụ cụ thể (Flashcard, Game, Speech)
      const startMissionBtn = e.target.closest('[data-action="start-mission"]');
      if (startMissionBtn) {
        e.preventDefault();
        const lNum = parseInt(startMissionBtn.getAttribute('data-lesson-num'), 10);
        const mType = startMissionBtn.getAttribute('data-mission-type');
        this.startMission(lNum, mType);
        return;
      }

      // 4. Bấm vào nút "Thi Vượt Nhanh Bài Này (Fast Pass)"
      const fastPassBtn = e.target.closest('[data-action="fast-pass"]');
      if (fastPassBtn) {
        e.preventDefault();
        const lNum = parseInt(fastPassBtn.getAttribute('data-lesson-num'), 10);
        this.openFastPassQuiz(lNum);
        return;
      }

      // 5. Bấm đóng Modal Nhiệm Vụ
      const closeMissionBtn = e.target.closest('[data-action="close-mission-modal"]');
      if (closeMissionBtn) {
        e.preventDefault();
        this.closeLessonMissionModal();
        return;
      }

      // 6. Bấm đóng Modal Chiến Thắng
      const closeVictoryBtn = e.target.closest('[data-action="close-victory-modal"]');
      if (closeVictoryBtn) {
        e.preventDefault();
        this.closeVictoryModal();
        return;
      }

      // 7. Bấm nút Học Tiếp Bài Mới trong Modal Chiến Thắng
      const advanceNextBtn = e.target.closest('[data-action="advance-next-lesson"]');
      if (advanceNextBtn) {
        e.preventDefault();
        const nextNum = parseInt(advanceNextBtn.getAttribute('data-next-lesson'), 10);
        this.closeVictoryModal();
        this.handleNodeClick(nextNum);
        return;
      }

      // 8. Bấm vào Cổng Chuyển Cấp N4 Torii
      const n4GateBtn = e.target.closest('[data-action="n4-gateway"]');
      if (n4GateBtn) {
        e.preventDefault();
        this.handleN4GateClick();
        return;
      }
    });
  }

  // --------------------------------------------------------------------------
  // LẤY DỮ LIỆU TIẾN ĐỘ THỰC TẾ CỦA HỌC VIÊN
  // --------------------------------------------------------------------------
  getUserProgress() {
    const isLogged = window.authModule && window.authModule.isLoggedIn();
    const currentUser = isLogged ? window.authModule.getCurrentUser() : null;

    let unlocked = 1;
    let completedLessons = {};

    if (window.authModule && typeof window.authModule.getUnlockedLesson === 'function') {
      unlocked = window.authModule.getUnlockedLesson();
      completedLessons = window.authModule.getCompletedLessons();
    } else if (currentUser && currentUser.profile) {
      unlocked = currentUser.profile.unlockedLesson || 1;
      completedLessons = currentUser.profile.completedLessons || {};
    } else {
      // Chế độ khách (lấy từ localStorage)
      try {
        unlocked = parseInt(localStorage.getItem('nihongo_guest_unlocked') || '1', 10);
        completedLessons = JSON.parse(localStorage.getItem('nihongo_guest_completed') || '{}');
      } catch (e) {
        unlocked = 1;
        completedLessons = {};
      }
    }

    // Đếm số bài đã hoàn thành
    let completedCount = 0;
    for (let i = 1; i <= 50; i++) {
      if (completedLessons[i] && completedLessons[i].completed) {
        completedCount++;
      }
    }

    const n5CompletedCount = Math.min(25, completedCount);
    const n5Percent = Math.min(100, Math.round((n5CompletedCount / 25) * 100));

    return {
      isLogged,
      currentUser,
      unlockedLesson: unlocked,
      completedLessons,
      completedCount,
      n5CompletedCount,
      percent: n5Percent
    };
  }

  // --------------------------------------------------------------------------
  // QUẢN LÝ TRẠNG THÁI 3 NHIỆM VỤ CỦA TỪNG BÀI HỌC (1 ĐẾN 50)
  // --------------------------------------------------------------------------
  getLessonMissionState(lessonNumber) {
    const prog = this.getUserProgress();
    const comp = prog.completedLessons[lessonNumber];

    // Nếu bài đã hoàn thành từ trước, tự động coi như cả 3 nhiệm vụ đã đạt
    if (comp && comp.completed) {
      return {
        vocabDone: true,
        gameDone: true,
        pronunDone: true,
        gameScore: comp.gameScore || 95,
        pronunScore: comp.pronunScore || 90,
        pronunPassedCount: 3,
        completed: true,
        stars: comp.stars || 3
      };
    }

    try {
      const saved = localStorage.getItem(`nihongo_mission_lesson_${lessonNumber}`);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {}

    return {
      vocabDone: false,
      gameDone: false,
      pronunDone: false,
      gameScore: 0,
      pronunScore: 0,
      pronunPassedCount: 0,
      completed: false,
      stars: 0
    };
  }

  saveLessonMissionState(lessonNumber, state) {
    try {
      localStorage.setItem(`nihongo_mission_lesson_${lessonNumber}`, JSON.stringify(state));
    } catch (e) {}

    if (window.authModule && window.authModule.isLoggedIn()) {
      const user = window.authModule.getCurrentUser();
      if (user && user.profile) {
        if (!user.profile.lessonMissions) user.profile.lessonMissions = {};
        user.profile.lessonMissions[lessonNumber] = state;
        window.authModule.autoSaveProgress();
      }
    }
  }

  // Ghi nhận tiến độ của từng nhiệm vụ từ các module khác
  recordMissionProgress(lessonNumber, missionKey, data = {}) {
    const lNum = parseInt(lessonNumber, 10);
    const state = this.getLessonMissionState(lNum);

    if (missionKey === 'vocab') {
      state.vocabDone = true;
      if (window.soundSystem) window.soundSystem.playCorrect();
      if (window.mascot) {
        window.mascot.setMood('happy', `🌸 Tuyệt vời! Em đã hoàn thành Bước 1: Học từ vựng Bài ${lNum}! ✨`, 3500);
      }
    } else if (missionKey === 'game') {
      state.gameDone = true;
      state.gameScore = data.gameScore || 80;
      if (window.soundSystem) window.soundSystem.playCorrect();
      if (window.mascot) {
        window.mascot.setMood('happy', `🎯 Xuất sắc! Em đã hoàn thành Bước 2: Vượt Game Đoán Từ Bài ${lNum} với ${state.gameScore}% điểm! 🔥`, 4000);
      }
    } else if (missionKey === 'pronun') {
      state.pronunDone = true;
      state.pronunScore = data.pronunScore || 80;
      state.pronunPassedCount = Math.max(state.pronunPassedCount || 0, data.pronunPassedCount || 3);
      if (window.soundSystem) window.soundSystem.playVictory();
      if (window.mascot) {
        window.mascot.setMood('celebrate', `🎙️ Giỏi lắm! Em đã hoàn thành Bước 3: Khảo bài phát âm với Cô Tanaka! 🌸`, 4000);
      }
    }

    this.saveLessonMissionState(lNum, state);
    this.updateMissionModalIfOpen(lNum);

    // Nếu cả 3 nhiệm vụ đều đã hoàn thành và bài chưa được chốt -> Kích hoạt Hoàn Thành Bài
    if (state.vocabDone && state.gameDone && state.pronunDone && !state.completed) {
      this.checkAndCompleteLesson(lNum, state);
    }
  }

  // Tự động thăng cấp và chốt bài học
  checkAndCompleteLesson(lessonNumber, currentState = null) {
    const lNum = parseInt(lessonNumber, 10);
    const state = currentState || this.getLessonMissionState(lNum);

    state.completed = true;

    // Tính số sao dựa trên điểm game & điểm phát âm
    const avgScore = Math.round(((state.gameScore || 80) + (state.pronunScore || 85)) / 2);
    let stars = 3;
    if (avgScore < 75) stars = 1;
    else if (avgScore < 88) stars = 2;
    state.stars = stars;

    this.saveLessonMissionState(lNum, state);

    // Mở khóa bài tiếp theo qua AuthModule
    let result = { unlocked: lNum < 50 ? lNum + 1 : 50 };
    if (window.authModule && typeof window.authModule.completeLesson === 'function') {
      result = window.authModule.completeLesson(lNum, {
        stars: stars,
        gameScore: state.gameScore || 85,
        pronunScore: state.pronunScore || 85
      }) || result;
    } else {
      // Guest mode
      try {
        const curU = parseInt(localStorage.getItem('nihongo_guest_unlocked') || '1', 10);
        if (lNum === curU && lNum < 50) {
          localStorage.setItem('nihongo_guest_unlocked', (lNum + 1).toString());
        }
        const comp = JSON.parse(localStorage.getItem('nihongo_guest_completed') || '{}');
        comp[lNum] = { completed: true, stars: stars };
        localStorage.setItem('nihongo_guest_completed', JSON.stringify(comp));
      } catch (e) {}
    }

    // Hiển thị thông báo chiến thắng rực rỡ phong cách Anime
    this.showLessonVictoryModal(lNum, state, result.unlocked);

    // Re-render lại roadmap
    this.render();
  }

  // VƯỢT NHANH BÀI HỌC (FAST PASS)
  passLevelQuickly(lessonNumber) {
    const lNum = parseInt(lessonNumber, 10);
    const state = {
      vocabDone: true,
      gameDone: true,
      pronunDone: true,
      gameScore: 100,
      pronunScore: 95,
      pronunPassedCount: 3,
      completed: true,
      stars: 3
    };

    if (window.soundSystem) window.soundSystem.playVictory();
    if (window.mascot) {
      window.mascot.setMood('celebrate', `⚡ THẦN TỐC! Em đã hoàn thành xuất sắc Thử Thách Vượt Nhanh Bài ${lNum}! 🏆🌸`, 4500);
    }

    this.checkAndCompleteLesson(lNum, state);
  }

  // --------------------------------------------------------------------------
  // BẬT / TẮT THU GỌN CHẶNG (ACCORDION TOGGLE)
  // --------------------------------------------------------------------------
  toggleRegion(regionId) {
    this.expandedRegions[regionId] = !this.expandedRegions[regionId];
    if (window.soundSystem) window.soundSystem.playPop();
    this.render();
  }

  // --------------------------------------------------------------------------
  // RENDER TOÀN BỘ GIAO DIỆN BẢN ĐỒ LỘ TRÌNH WIDGET
  // --------------------------------------------------------------------------
  render() {
    const container = document.getElementById(this.containerId);
    if (!container) return;

    const prog = this.getUserProgress();
    const allLessons = window.LESSONS_DATA ? [...(window.LESSONS_DATA.n5 || []), ...(window.LESSONS_DATA.n4 || [])] : [];

    // Chỉ hiển thị các Chặng N5 (1 - 5) mặc định, hoặc hiển thị cả N4 (6 - 10) nếu đã mở khóa N4
    const regionsToShow = ROADMAP_REGIONS.filter(r => {
      if (r.id <= 5) return true;
      // Chặng N4 (6-10) hiển thị khi đã hoàn thành đủ N5 hoặc đang học N4
      return prog.completedCount >= 25 || prog.unlockedLesson >= 26;
    });

    container.innerHTML = `
      <div class="roadmap-main-wrapper">
        
        <!-- ================= KHỐI 1: THANH TIẾN ĐỘ TỔNG HUD ================= -->
        <div class="roadmap-header-hud">
          
          <div class="hud-top-meta">
            <div class="hud-hero-left">
              <span class="hud-map-icon">🗺️</span>
              <div>
                <h2>BẢN ĐỒ LỘ TRÌNH 25 BÀI JLPT N5 & N4 MINNA</h2>
                <p>Hành trình 10 Chặng khám phá Nhật Bản • Chuẩn giáo trình Minna no Nihongo</p>
              </div>
            </div>

            <div class="hud-user-profile-card">
              ${prog.isLogged ? `
                <div class="hud-user-avatar" style="background: ${this.getAvatarColor(prog.currentUser.avatar)};">
                  ${this.getAvatarEmoji(prog.currentUser.avatar)}
                </div>
                <div class="hud-user-details">
                  <strong>${prog.currentUser.displayName}</strong>
                  <span class="hud-rank-tag">🏆 Level ${prog.currentUser.profile?.level || 1} • Đang ở Bài ${prog.unlockedLesson}/50</span>
                </div>
              ` : `
                <div class="hud-user-avatar" style="background: #FFE8CC;">🐣</div>
                <div class="hud-user-details">
                  <strong>Học Viên Khách</strong>
                  <button class="hud-btn-login-small" onclick="window.authModule.openAuthModal('login')">
                    🔑 Đăng nhập lưu tiến độ
                  </button>
                </div>
              `}
            </div>
          </div>

          <!-- Thanh tiến trình % N5 -->
          <div class="roadmap-progress-bar-wrap">
            <div class="progress-labels-row">
              <span>Tiến độ N5: <strong>Đã hoàn thành ${prog.n5CompletedCount} / 25 Bài</strong></span>
              <span class="progress-percent-badge">${prog.percent}%</span>
            </div>
            <div class="roadmap-progress-track">
              <div class="roadmap-progress-fill" style="width: ${prog.percent}%;"></div>
            </div>
          </div>

        </div>

        <!-- ================= KHỐI 2: CÁC CHẶNG BÀI HỌC (ACCORDION & GRID) ================= -->
        <div class="roadmap-regions-container">
          
          ${regionsToShow.map(reg => {
            const lessonsInRegion = allLessons.filter(l => l && l.lessonNumber >= reg.range[0] && l.lessonNumber <= reg.range[1]);
            
            // Chặng đang được mở hay thu gọn?
            const isExpanded = !!this.expandedRegions[reg.id];

            // Kiểm tra trạng thái hoàn thành của chặng
            const completedInReg = lessonsInRegion.filter(l => prog.completedLessons[l.lessonNumber]?.completed).length;
            const isRegCompleted = completedInReg === lessonsInRegion.length && lessonsInRegion.length > 0;
            const hasCurrentLesson = lessonsInRegion.some(l => l.lessonNumber === prog.unlockedLesson);

            return `
              <div class="roadmap-region-section ${isExpanded ? 'expanded' : 'collapsed'}" 
                   style="background: ${reg.bgGradient};" id="roadmap-region-${reg.id}">
                
                <!-- Thanh tiêu đề Chặng (Click để Thu gọn / Mở rộng) -->
                <div class="region-banner-header" 
                     data-action="toggle-region" 
                     data-region-id="${reg.id}"
                     style="border-left-color: ${reg.themeColor};"
                     title="Bấm để ${isExpanded ? 'thu gọn' : 'mở rộng'} danh sách 5 bài học">
                  
                  <div class="region-title-wrap">
                    <span class="region-badge-icon">${reg.icon}</span>
                    <div class="region-title-texts">
                      <h3>${reg.name}</h3>
                      <p>${reg.desc}</p>
                    </div>
                  </div>

                  <div class="region-header-right">
                    ${isRegCompleted ? `
                      <span class="reg-done-badge">✅ ĐÃ QUA CHẶNG</span>
                    ` : hasCurrentLesson ? `
                      <span class="reg-current-badge anim-pulse">🎯 ĐANG HỌC</span>
                    ` : ''}

                    <div class="region-stage-pill" style="background: ${reg.themeColor};">
                      Bài ${reg.range[0]} - ${reg.range[1]} (${completedInReg}/${lessonsInRegion.length} bài)
                    </div>

                    <span class="region-toggle-chevron">
                      ${isExpanded ? '▲ Thu Gọn' : '▼ Mở Rộng 5 Bài'}
                    </span>
                  </div>

                </div>

                <!-- LƯỚI 5 THẺ BÀI HỌC (LESSON NODES GRID) -->
                <div class="region-lessons-grid ${isExpanded ? 'visible' : 'hidden'}">
                  ${lessonsInRegion.map(lesson => {
                    const lNum = lesson.lessonNumber;
                    const isCompleted = !!prog.completedLessons[lNum]?.completed;
                    const isCurrent = (lNum === prog.unlockedLesson) && !isCompleted;
                    const isLocked = lNum > prog.unlockedLesson;

                    let nodeClass = 'locked';
                    if (isCompleted) nodeClass = 'completed';
                    else if (isCurrent) nodeClass = 'current';

                    const missionState = this.getLessonMissionState(lNum);
                    const starsCount = missionState.stars || (isCompleted ? 3 : 0);
                    const starsDisplay = isCompleted ? '⭐'.repeat(starsCount) : '';
                    const vocabCount = lesson.vocab?.length || 20;

                    return `
                      <div class="lesson-level-node ${nodeClass}" 
                           id="lesson-node-${lNum}" 
                           data-action="open-lesson" 
                           data-lesson-num="${lNum}">
                        
                        <!-- Header thẻ: Level + Icon + Số lượng từ vựng -->
                        <div class="node-header-row">
                          <span class="node-level-badge ${nodeClass}">
                            ${isCompleted ? '✅' : isCurrent ? '🎯' : '🔒'} LEVEL ${lNum} - Bài ${lNum}
                          </span>
                          <span class="node-vocab-count-badge">
                            📚 ${vocabCount} từ
                          </span>
                        </div>

                        <!-- Body thẻ: Tiêu đề chủ đề bài học & Ngữ pháp tóm tắt -->
                        <div class="node-body">
                          <h4 class="node-topic-title">${lesson.topicVi}</h4>
                          <p class="node-grammar-preview">${lesson.grammarPoint?.split('.')[0] || ''}.</p>
                        </div>

                        <!-- 3 Bước Nhiệm Vụ Mini Indicator -->
                        <div class="node-missions-indicator-bar">
                          <span class="m-pill ${missionState.vocabDone ? 'done' : 'pending'}" title="Nhiệm vụ 1: Học từ vựng Flashcard">
                            📖 ${missionState.vocabDone ? 'Đã học' : 'Từ vựng'}
                          </span>
                          <span class="m-pill ${missionState.gameDone ? 'done' : 'pending'}" title="Nhiệm vụ 2: Vượt Game Đoán Từ (≥70%)">
                            🎮 ${missionState.gameDone ? `${missionState.gameScore}%` : 'Đoán từ'}
                          </span>
                          <span class="m-pill ${missionState.pronunDone ? 'done' : 'pending'}" title="Nhiệm vụ 3: Khảo phát âm chuẩn cùng AI">
                            🎤 ${missionState.pronunDone ? 'Đạt' : 'Phát âm'}
                          </span>
                        </div>

                        <!-- Nút hành động tương ứng trạng thái -->
                        <div class="node-footer-action">
                          ${isCompleted ? `
                            <div class="node-completed-foot">
                              <span class="node-stars-row">${starsDisplay}</span>
                              <button class="btn btn-sm btn-outline-warning btn-node-cta" 
                                      data-action="open-lesson" 
                                      data-lesson-num="${lNum}">
                                🔄 Ôn tập lại Bài này
                              </button>
                            </div>
                          ` : isCurrent ? `
                            <button class="btn btn-primary btn-sm btn-node-cta anim-pulse" 
                                    data-action="open-lesson" 
                                    data-lesson-num="${lNum}">
                              ▶️ BẮT ĐẦU HỌC BÀI NÀY
                            </button>
                          ` : `
                            <div class="node-locked-foot">
                              <span class="node-lock-hint">Cần hoàn thành Bài ${lNum - 1} 🔒</span>
                              <button class="btn btn-sm btn-locked-cta" 
                                      data-action="open-lesson" 
                                      data-lesson-num="${lNum}">
                                🔒 Đang Khóa
                              </button>
                            </div>
                          `}
                        </div>

                      </div>
                    `;
                  }).join('')}
                </div>

              </div>
            `;
          }).join('')}

          <!-- ================= KHỐI 3: CỔNG THĂNG CẤP JLPT N4 ================= -->
          <div class="roadmap-n4-gateway-section ${prog.completedCount >= 25 ? 'unlocked' : 'sealed'}" 
               data-action="n4-gateway">
            <div class="gateway-torii-frame">
              <div class="gateway-torii-icon">⛩️</div>
              
              <div class="gateway-info">
                <h3>CỔNG THĂNG CẤP JLPT N4 (BÀI 26 - 50)</h3>
                <p>Chinh phục 25 Bài học Minna Trung Cấp • Đột phá năng lực Kaiwa & Ngữ pháp N4</p>
                
                ${prog.completedCount >= 25 ? `
                  <div class="gateway-status-pill unlocked">
                    ✨ PHONG ẤN ĐÃ ĐƯỢC GIẢI TRỪ! BẤM ĐỂ NHẬN BẰNG TỐT NGHIỆP N5 & VÀO N4 ✨
                  </div>
                ` : `
                  <div class="gateway-status-pill sealed">
                    🔒 PHONG ẤN BẢO VỆ: Cần hoàn thành 25/25 Bài N5 (Hiện tại: ${prog.n5CompletedCount}/25)
                  </div>
                `}
              </div>

              <div class="gateway-action-btn">
                ${prog.completedCount >= 25 ? `
                  <button class="btn btn-primary btn-enter-n4" data-action="n4-gateway">
                    📜 Nhận Bằng N5 & Lên N4 🎓
                  </button>
                ` : `
                  <button class="btn btn-secondary btn-locked-gate" data-action="n4-gateway">
                    🔒 Cổng Bị Khóa
                  </button>
                `}
              </div>
            </div>
          </div>

        </div>

      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // XỬ LÝ SỰ KIỆN CLICK VÀO BÀI HỌC (LEVEL NODE)
  // --------------------------------------------------------------------------
  handleNodeClick(lessonNumber) {
    const lNum = parseInt(lessonNumber, 10);
    const prog = this.getUserProgress();

    // 1. Kiểm tra bài thuộc cấp độ N4 (Bài 26 - 50)
    if (lNum >= 26) {
      if (!prog.isLogged) {
        if (window.soundSystem) window.soundSystem.playBuzzer();
        this.showTanakaAlert(
          `Cấp độ Trung Cấp JLPT N4 (Bài 26 - 50) yêu cầu <strong>Đăng nhập tài khoản học viên</strong> để hệ thống bảo lưu học bạ đám mây!<br><br>` +
          `Vui lòng Đăng nhập hoặc Tạo tài khoản miễn phí để tiếp tục. 🔑`
        );
        if (window.authModule) {
          setTimeout(() => window.authModule.openAuthModal('login'), 800);
        }
        return;
      }

      if (prog.completedCount < 25) {
        if (window.soundSystem) window.soundSystem.playBuzzer();
        this.showTanakaAlert(
          `Cổng Thăng Cấp N4 đang được niêm phong bảo vệ!<br><br>` +
          `Em cần hoàn thành xuất sắc <strong>toàn bộ 25 Bài học N5</strong> trước khi mở khóa Bài ${lNum}. Hiện tại em mới hoàn thành ${prog.n5CompletedCount}/25 Bài! 👩‍🏫`
        );
        return;
      }
    }

    // 2. Nếu bài đang bị khóa
    if (lNum > prog.unlockedLesson) {
      if (window.soundSystem) window.soundSystem.playBuzzer();
      
      this.showTanakaAlert(
        `💢 Chậc! Em phải hoàn thành xong <strong>Bài ${lNum - 1}</strong> trước thì cô mới mở khóa cho học tiếp <strong>Bài ${lNum}</strong> nhé!<br><br>` +
        `Học tiếng Nhật không có chuyện đốt cháy giai đoạn! Hãy hoàn thành chắc chắn Bài ${prog.unlockedLesson} trước cho cô! 👩‍🏫`
      );

      if (window.mascot) {
        window.mascot.setCharacter('sensei');
        window.mascot.setMood('strict', `Chưa xong Bài ${lNum - 1} thì không được mở Bài ${lNum} đâu nhé! 👩‍🏫`, 3500);
      }
      return;
    }

    // 3. Bài đã mở khóa -> Mở Bảng Nhiệm Vụ Bài Học (Lesson Mission Modal)
    this.openLessonMissionModal(lNum);
  }

  // --------------------------------------------------------------------------
  // BẢNG NHIỆM VỤ VƯỢT ẢI (LESSON MISSION MODAL)
  // --------------------------------------------------------------------------
  openLessonMissionModal(lessonNumber) {
    const lNum = parseInt(lessonNumber, 10);
    this.activeMissionLesson = lNum;

    const targetLevel = lNum >= 26 ? 'N4' : 'N5';
    const lesson = window.LESSONS_DATA ? window.LESSONS_DATA.getLesson(targetLevel, lNum) : null;
    if (!lesson) return;

    const state = this.getLessonMissionState(lNum);

    let modal = document.getElementById('lesson-mission-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'lesson-mission-modal';
      modal.className = 'modal-overlay';
      modal.onclick = (e) => {
        if (e.target === modal) this.closeLessonMissionModal();
      };
      document.body.appendChild(modal);
    }

    modal.classList.remove('hidden');
    modal.classList.add('active');
    modal.style.display = 'flex';

    modal.innerHTML = this.renderLessonMissionHtml(lesson, state);

    if (window.soundSystem) window.soundSystem.playPop();
  }

  updateMissionModalIfOpen(lessonNumber) {
    const modal = document.getElementById('lesson-mission-modal');
    if (modal && modal.style.display === 'flex' && this.activeMissionLesson === lessonNumber) {
      const targetLevel = lessonNumber >= 26 ? 'N4' : 'N5';
      const lesson = window.LESSONS_DATA ? window.LESSONS_DATA.getLesson(targetLevel, lessonNumber) : null;
      const state = this.getLessonMissionState(lessonNumber);
      if (lesson) {
        modal.innerHTML = this.renderLessonMissionHtml(lesson, state);
      }
    }
  }

  closeLessonMissionModal() {
    const modal = document.getElementById('lesson-mission-modal');
    if (modal) {
      modal.classList.remove('active');
      modal.style.display = 'none';
    }
  }

  renderLessonMissionHtml(lesson, state) {
    const lNum = lesson.lessonNumber;
    const completedCount = (state.vocabDone ? 1 : 0) + (state.gameDone ? 1 : 0) + (state.pronunDone ? 1 : 0);
    const progressPercent = Math.round((completedCount / 3) * 100);
    const levelLabel = lNum >= 26 ? 'N4' : 'N5';

    return `
      <div class="modal-card lesson-mission-modal-card">
        
        <!-- Header Bài Học -->
        <div class="mission-modal-header">
          <div class="mission-header-info">
            <span class="mission-badge-pill">${lesson.icon} CẤP ĐỘ ${levelLabel} • BÀI ${lNum}</span>
            <h2 class="mission-title">${lesson.topicVi}</h2>
            <p class="mission-ja-subtitle">${lesson.title || ''} • ${lesson.grammarPoint || ''}</p>
          </div>
          <button class="modal-close-btn" data-action="close-mission-modal" title="Đóng">✕</button>
        </div>

        <!-- Thanh Tiến Trình 3 Nhiệm Vụ -->
        <div class="mission-progress-overview">
          <div class="mission-progress-labels">
            <span>Tiến độ vượt ải: <strong>${completedCount} / 3 Nhiệm vụ hoàn thành</strong></span>
            <span class="mission-percent-tag ${completedCount === 3 ? 'all-done' : ''}">${progressPercent}%</span>
          </div>
          <div class="mission-progress-track">
            <div class="mission-progress-fill" style="width: ${progressPercent}%;"></div>
          </div>
        </div>

        <!-- Danh Sách 3 Bước Nhiệm Vụ -->
        <div class="mission-steps-list">
          
          <!-- ================= BƯỚC 1: FLASHCARD ================= -->
          <div class="mission-step-card ${state.vocabDone ? 'step-done' : 'step-pending'}">
            <div class="step-num-badge">
              ${state.vocabDone ? '✅' : '1'}
            </div>
            
            <div class="step-details">
              <div class="step-top-line">
                <h4>Bước 1: 📖 Học Từ Vựng (Flashcard 3D Bài ${lNum})</h4>
                ${state.vocabDone ? `
                  <span class="mission-status-badge done">✅ ĐÃ HOÀN THÀNH</span>
                ` : `
                  <span class="mission-status-badge pending">⏳ CHƯA HOÀN THÀNH</span>
                `}
              </div>
              <p class="step-desc">
                Lật mở và làm quen toàn bộ <strong>${lesson.vocab?.length || 20} từ vựng ${levelLabel}</strong> của bài học này. Bấm nút <em>"Đánh dấu đã thuộc hết thẻ bài này"</em> để hoàn tất.
              </p>
            </div>

            <div class="step-action-col">
              <button class="btn ${state.vocabDone ? 'btn-outline-secondary' : 'btn-primary'} btn-step-action" 
                      data-action="start-mission" 
                      data-lesson-num="${lNum}" 
                      data-mission-type="flashcard">
                ${state.vocabDone ? 'Ôn Tập Lại 🃏' : `Vào Học Từ Vựng Bài ${lNum} 🃏`}
              </button>
            </div>
          </div>

          <!-- ================= BƯỚC 2: GAME ĐOÁN TỪ ================= -->
          <div class="mission-step-card ${state.gameDone ? 'step-done' : 'step-pending'}">
            <div class="step-num-badge">
              ${state.gameDone ? '✅' : '2'}
            </div>
            
            <div class="step-details">
              <div class="step-top-line">
                <h4>Bước 2: 🎮 Vượt Thử Thách Game Đoán Từ Bài ${lNum} (≥ 70%)</h4>
                ${state.gameDone ? `
                  <span class="mission-status-badge done">✅ ĐÃ ĐẠT (${state.gameScore}% - ⭐⭐⭐)</span>
                ` : `
                  <span class="mission-status-badge pending">⏳ CẦN ĐẠT ≥ 70%</span>
                `}
              </div>
              <p class="step-desc">
                Thử thách phản xạ đoán nghĩa 4 đáp án nhanh trong 15s cho từ vựng Bài ${lNum}. <strong>Đạt từ 70% điểm trở lên</strong> để hoàn tất bước này!
              </p>
            </div>

            <div class="step-action-col">
              <button class="btn ${state.gameDone ? 'btn-outline-warning' : 'btn-warning'} btn-step-action" 
                      data-action="start-mission" 
                      data-lesson-num="${lNum}" 
                      data-mission-type="game">
                ${state.gameDone ? 'Chơi Lại Game 🎯' : `Vào Chơi Game Bài ${lNum} 🎯`}
              </button>
            </div>
          </div>

          <!-- ================= BƯỚC 3: TEST PHÁT ÂM AI ================= -->
          <div class="mission-step-card ${state.pronunDone ? 'step-done' : 'step-pending'}">
            <div class="step-num-badge">
              ${state.pronunDone ? '✅' : '3'}
            </div>
            
            <div class="step-details">
              <div class="step-top-line">
                <h4>Bước 3: 🎤 Khảo Phát Âm Cùng Cô Tanaka (≥ 3 từ ≥ 60%)</h4>
                ${state.pronunDone ? `
                  <span class="mission-status-badge done">✅ ĐÃ ĐẠT (${state.pronunPassedCount || 3}/3 từ ≥ 60%)</span>
                ` : `
                  <span class="mission-status-badge pending">⏳ ĐÃ ĐẠT ${state.pronunPassedCount || 0}/3 TỪ (≥ 60%)</span>
                `}
              </div>
              <p class="step-desc">
                Bật Micro đọc to rõ ràng từ vựng của Bài ${lNum}. AI sẽ chấm điểm và Cô Tanaka sẽ phê duyệt khi em <strong>phát âm chuẩn ít nhất 3 từ (≥ 60%)</strong>.
              </p>
            </div>

            <div class="step-action-col">
              <button class="btn ${state.pronunDone ? 'btn-outline-info' : 'btn-info'} btn-step-action" 
                      data-action="start-mission" 
                      data-lesson-num="${lNum}" 
                      data-mission-type="speech">
                ${state.pronunDone ? 'Luyện Lại Giọng 🎙️' : `Vào Test Phát Âm Bài ${lNum} 🎙️`}
              </button>
            </div>
          </div>

        </div>

        <!-- ================= KHỐI THI VƯỢT NHANH BÀI NÀY ================= -->
        <div class="fast-pass-banner-row">
          <div class="fast-pass-left">
            <span class="fast-pass-icon">⚡</span>
            <div>
              <strong>Đã nắm vững kiến thức Bài ${lNum}?</strong>
              <small>Làm nhanh 5 câu trắc nghiệm tổng hợp (đạt ≥ 80% là đỗ ngay)!</small>
            </div>
          </div>
          <button class="btn btn-outline-danger btn-fast-pass-action" 
                  data-action="fast-pass" 
                  data-lesson-num="${lNum}">
            ⚡ Thi Vượt Nhanh Bài Này (Pass Level)
          </button>
        </div>

        <!-- Footer Modal -->
        <div class="mission-modal-footer">
          ${completedCount === 3 ? `
            <div class="mission-all-done-banner">
              <span>🎉 Em đã hoàn thành xuất sắc cả 3/3 Nhiệm vụ của Bài ${lNum}!</span>
              <button class="btn btn-success" 
                      data-action="close-mission-modal">
                🏆 Đã Hoàn Tất Bài Học ✅
              </button>
            </div>
          ` : `
            <div class="mission-footer-hint">
              <span>💡 Hoàn thành đủ 3 bước trên hoặc bấm "Thi Vượt Nhanh" để tự động mở khóa Bài ${lNum < 50 ? lNum + 1 : 50}!</span>
            </div>
          `}
        </div>

      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // BẮT ĐẦU TỪNG NHIỆM VỤ (CHUYỂN TAB & NẠP ĐÚNG BÀI HỌC)
  // --------------------------------------------------------------------------
  startMission(lessonNumber, missionType) {
    const lNum = parseInt(lessonNumber, 10);
    this.activeMissionLesson = lNum;
    this.closeLessonMissionModal();

    if (missionType === 'flashcard') {
      if (window.flashcardModule && typeof window.flashcardModule.loadLesson === 'function') {
        window.flashcardModule.loadLesson(lNum);
      }
      if (window.app) window.app.switchTab('flashcard');
    } else if (missionType === 'game') {
      if (window.guessGame && typeof window.guessGame.setLesson === 'function') {
        window.guessGame.setLesson(lNum);
      }
      if (window.app) window.app.switchTab('guess-game');
    } else if (missionType === 'speech') {
      if (window.speechModule && typeof window.speechModule.loadLesson === 'function') {
        window.speechModule.loadLesson(lNum);
      }
      if (window.app) window.app.switchTab('speech-test');
    }
  }

  // --------------------------------------------------------------------------
  // THI VƯỢT NHANH (FAST PASS QUIZ 5 CÂU)
  // --------------------------------------------------------------------------
  openFastPassQuiz(lessonNumber) {
    const lNum = parseInt(lessonNumber, 10);
    const targetLvl = lNum >= 26 ? 'N4' : 'N5';
    const lesson = window.LESSONS_DATA ? window.LESSONS_DATA.getLesson(targetLvl, lNum) : null;
    if (!lesson || !lesson.vocab || lesson.vocab.length < 4) {
      alert('Không đủ dữ liệu bài học để tạo đề thi vượt nhanh!');
      return;
    }

    this.closeLessonMissionModal();

    // Sinh 5 câu hỏi trắc nghiệm từ từ vựng của bài
    const words = [...lesson.vocab].sort(() => Math.random() - 0.5);
    const quizQuestions = [];

    for (let i = 0; i < Math.min(5, words.length); i++) {
      const correctWord = words[i];
      // 3 distractors
      const distractors = lesson.vocab
        .filter(w => w.id !== correctWord.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      const options = [correctWord, ...distractors].sort(() => Math.random() - 0.5);
      const correctIdx = options.findIndex(o => o.id === correctWord.id);

      quizQuestions.push({
        word: correctWord,
        questionText: `Câu ${i + 1}: Từ 「${correctWord.kanji || correctWord.hiragana}」 (${correctWord.hiragana}) có nghĩa là gì?`,
        options: options.map(o => o.meaning),
        correctIndex: correctIdx
      });
    }

    let quizModal = document.getElementById('fast-pass-quiz-modal');
    if (!quizModal) {
      quizModal = document.createElement('div');
      quizModal.id = 'fast-pass-quiz-modal';
      quizModal.className = 'modal-overlay';
      document.body.appendChild(quizModal);
    }

    let currentQ = 0;
    let score = 0;
    const userAnswers = [];

    const renderQuestion = () => {
      const q = quizQuestions[currentQ];
      quizModal.innerHTML = `
        <div class="modal-card fast-pass-quiz-card">
          <div class="quiz-header">
            <span class="quiz-badge">⚡ THI VƯỢT NHANH • BÀI ${lNum}</span>
            <span class="quiz-step-count">Câu ${currentQ + 1} / ${quizQuestions.length}</span>
          </div>

          <div class="quiz-question-box">
            <h3>${q.questionText}</h3>
            ${q.word.example?.ja ? `<p class="quiz-example-hint">Ví dụ: ${q.word.example.ja}</p>` : ''}
          </div>

          <div class="quiz-options-list">
            ${q.options.map((opt, idx) => `
              <button class="quiz-opt-btn" onclick="window.roadmapModule.handleFastPassAnswer(${lNum}, ${idx}, ${q.correctIndex})">
                <span class="opt-key">${['A', 'B', 'C', 'D'][idx]}</span>
                <span class="opt-text">${opt}</span>
              </button>
            `).join('')}
          </div>

          <div class="quiz-footer-row">
            <button class="btn btn-secondary btn-sm" onclick="document.getElementById('fast-pass-quiz-modal').remove()">
              ✕ Hủy bỏ
            </button>
          </div>
        </div>
      `;
    };

    window.roadmapModule.handleFastPassAnswer = (lessonNum, chosenIdx, correctIdx) => {
      if (chosenIdx === correctIdx) {
        score++;
        if (window.soundSystem) window.soundSystem.playCorrect();
      } else {
        if (window.soundSystem) window.soundSystem.playWrong();
      }

      currentQ++;
      if (currentQ < quizQuestions.length) {
        renderQuestion();
      } else {
        // Hoàn thành quiz
        const passed = score >= 4; // >= 80%
        quizModal.innerHTML = `
          <div class="modal-card fast-pass-quiz-card anim-bounce-in">
            <div class="quiz-result-header ${passed ? 'pass' : 'fail'}">
              <span class="result-icon">${passed ? '🎉' : '⚠️'}</span>
              <h2>${passed ? 'THI VƯỢT NHANH THÀNH CÔNG!' : 'CHƯA ĐẠT ĐIỂM VƯỢT NHANH'}</h2>
              <div class="result-score-circle">
                <strong>${score} / ${quizQuestions.length}</strong>
                <small>${Math.round((score / quizQuestions.length) * 100)}%</small>
              </div>
            </div>

            <div class="quiz-result-body">
              ${passed ? `
                <p>Xuất sắc! Em đã chứng minh mình nắm rất vững từ vựng Bài ${lessonNum}. Cô Tanaka đồng ý cấp chứng chỉ hoàn thành bài học này cho em ngay lập tức!</p>
              ` : `
                <p>Rất tiếc! Em chỉ đúng ${score}/${quizQuestions.length} câu (cần đúng từ 4 câu trở lên). Hãy quay lại hoàn thành 3 bước nhiệm vụ để nắm chắc bài hơn nhé!</p>
              `}
            </div>

            <div class="quiz-result-actions">
              ${passed ? `
                <button class="btn btn-primary btn-large" onclick="document.getElementById('fast-pass-quiz-modal').remove(); window.roadmapModule.passLevelQuickly(${lessonNum});">
                  🚀 Xác Nhận Mở Khóa Bài Tiếp Theo Ngay!
                </button>
              ` : `
                <button class="btn btn-primary" onclick="document.getElementById('fast-pass-quiz-modal').remove(); window.roadmapModule.openLessonMissionModal(${lessonNum});">
                  📖 Quay Lại Bảng Nhiệm Vụ 3 Bước
                </button>
              `}
            </div>
          </div>
        `;
      }
    };

    renderQuestion();
  }

  // --------------------------------------------------------------------------
  // POPUP CHIẾN THẮNG RỰC RỠ PHONG CÁCH ANIME (HOÀN THÀNH BÀI N -> MỞ KHÓA BÀI N+1)
  // --------------------------------------------------------------------------
  showLessonVictoryModal(lessonNumber, state, newUnlocked) {
    const lNum = parseInt(lessonNumber, 10);
    const nextLessonNum = lNum < 50 ? lNum + 1 : 50;
    const targetLvl = nextLessonNum >= 26 ? 'N4' : 'N5';
    const nextLesson = window.LESSONS_DATA ? window.LESSONS_DATA.getLesson(targetLvl, nextLessonNum) : null;
    const starsCount = state.stars || 3;
    const starsHtml = '⭐'.repeat(starsCount);

    this.launchConfetti();
    if (window.soundSystem) window.soundSystem.playVictory();

    let modal = document.getElementById('lesson-victory-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'lesson-victory-modal';
      modal.className = 'modal-overlay victory-overlay';
      modal.onclick = (e) => {
        if (e.target === modal) this.closeVictoryModal();
      };
      document.body.appendChild(modal);
    }

    modal.classList.remove('hidden');
    modal.classList.add('active');
    modal.style.display = 'flex';

    modal.innerHTML = `
      <div class="modal-card lesson-victory-card anim-bounce-in">
        
        <div class="victory-ribbon">
          <span>OMEDETOU GOZAIMASU! 🌸</span>
        </div>

        <div class="victory-header">
          <div class="victory-badge-icon">🏆</div>
          <h2 class="victory-main-title">🎉 HOÀN THÀNH BÀI ${lNum}!</h2>
          <div class="victory-stars-display">${starsHtml}</div>
          <p class="victory-sub-text">Em đã xuất sắc vượt qua toàn bộ thử thách của Bài ${lNum}!</p>
        </div>

        <!-- Bảng điểm chi tiết -->
        <div class="victory-score-grid">
          <div class="v-score-item">
            <span class="v-score-label">📖 Flashcard</span>
            <span class="v-score-val text-success">Đã Thuộc ✅</span>
          </div>
          <div class="v-score-item">
            <span class="v-score-label">🎮 Game Đoán Từ</span>
            <span class="v-score-val text-warning">${state.gameScore || 90}%</span>
          </div>
          <div class="v-score-item">
            <span class="v-score-label">🎤 Khảo Bài AI</span>
            <span class="v-score-val text-info">${state.pronunScore || 85}%</span>
          </div>
          <div class="v-score-item">
            <span class="v-score-label">🎁 Phần Thưởng</span>
            <span class="v-score-val text-danger">+50 EXP • +10 🪙</span>
          </div>
        </div>

        <!-- Hộp giới thiệu bài tiếp theo đã mở khóa -->
        ${lNum < 25 ? `
          <div class="victory-next-lesson-box">
            <div class="v-next-tag">✨ ĐÃ MỞ KHÓA BÀI ${nextLessonNum}/25 ✨</div>
            <h3 class="v-next-title">${nextLesson ? `${nextLesson.icon || '🌸'} Bài ${nextLessonNum}: ${nextLesson.topicVi}` : `Bài ${nextLessonNum}`}</h3>
            <p class="v-next-desc">${nextLesson ? (nextLesson.grammarPoint || '') : ''}</p>
          </div>
        ` : lNum === 25 ? `
          <div class="victory-next-lesson-box max-level">
            <div class="v-next-tag">👑 ĐÃ CHINH PHỤC TOÀN BỘ 25 BÀI N5! 👑</div>
            <h3 class="v-next-title">Cổng Torii JLPT N4 Đã Được Giải Phóng!</h3>
            <p class="v-next-desc">Hãy đến Cổng Thăng Cấp N4 để nhận Bằng Tốt Nghiệp N5 và bước vào Lộ Trình N4 (Bài 26 - 50)!</p>
          </div>
        ` : `
          <div class="victory-next-lesson-box">
            <div class="v-next-tag">✨ ĐÃ MỞ KHÓA BÀI ${nextLessonNum}/50 (JLPT N4) ✨</div>
            <h3 class="v-next-title">${nextLesson ? `${nextLesson.icon || '🏆'} Bài ${nextLessonNum}: ${nextLesson.topicVi}` : `Bài ${nextLessonNum}`}</h3>
            <p class="v-next-desc">${nextLesson ? (nextLesson.grammarPoint || '') : ''}</p>
          </div>
        `}

        <div class="victory-actions-row">
          <button class="btn btn-secondary" data-action="close-victory-modal">
            🗺️ Xem Trên Bản Đồ
          </button>
          
          ${lNum < 25 ? `
            <button class="btn btn-primary btn-advance-next" 
                    data-action="advance-next-lesson" 
                    data-next-lesson="${nextLessonNum}">
              ➡️ Học Tiếp Bài ${nextLessonNum} Ngay!
            </button>
          ` : lNum === 25 ? `
            <button class="btn btn-primary btn-advance-next" data-action="n4-gateway">
              📜 Nhận Bằng Tốt Nghiệp N5 Ngay! 🎓
            </button>
          ` : lNum < 50 ? `
            <button class="btn btn-primary btn-advance-next" 
                    data-action="advance-next-lesson" 
                    data-next-lesson="${nextLessonNum}">
              ➡️ Học Tiếp Bài ${nextLessonNum} Ngay!
            </button>
          ` : `
            <button class="btn btn-primary btn-advance-next" onclick="alert('🎉 CHÚC MỪNG BẠN ĐÃ TỐT NGHIỆP TOÀN BỘ 50 BÀI MINNA NO NIHONGO!');">
              🎓 Tốt Nghiệp Minna no Nihongo!
            </button>
          `}
        </div>

      </div>
    `;
  }

  closeVictoryModal() {
    const modal = document.getElementById('lesson-victory-modal');
    if (modal) {
      modal.classList.remove('active');
      modal.style.display = 'none';
    }
  }

  // --------------------------------------------------------------------------
  // XỬ LÝ SỰ KIỆN CLICK VÀO CỔNG CHUYỂN CẤP N4
  // --------------------------------------------------------------------------
  handleN4GateClick() {
    const prog = this.getUserProgress();

    // 1. Chưa hoàn thành đủ 25 bài N5
    if (prog.n5CompletedCount < 25) {
      if (window.soundSystem) window.soundSystem.playBuzzer();
      this.showTanakaAlert(
        `Cổng N4 được niêm phong nghiêm ngặt! Em mới hoàn thành có <strong>${prog.n5CompletedCount}/25 Bài</strong> N5 thôi!<br><br>` +
        `Không nắm chắc kiến thức sơ cấp N5 thì lên N4 làm sao nghe hiểu và chia thể động từ được?! Hãy hoàn thành cả 25 bài rồi quay lại đây nhận bằng tốt nghiệp! 👩‍🏫`
      );
      return;
    }

    // 2. Đã xong 25 bài nhưng chưa đăng nhập
    if (!prog.isLogged) {
      if (window.authModule) {
        window.authModule.openAuthModal(
          'register',
          `🎉 Chúc mừng em đã xuất sắc vượt qua 25 Bài N5! Hãy Đăng Ký hoặc Đăng Nhập tài khoản để lưu Bằng Tốt Nghiệp và vinh danh Bảng Vàng nhé! 🌸`
        );
      }
      return;
    }

    // 3. Đã hoàn thành 25 bài và đã đăng nhập -> BẬT LỄ TỐT NGHIỆP N5 HOÀNH TRÁNG!
    this.showGraduationModal();
  }

  // --------------------------------------------------------------------------
  // LỄ TỐT NGHIỆP: BẰNG TỐT NGHIỆP N5 VỚI CON DẤU HANKO & PHÁO HOA
  // --------------------------------------------------------------------------
  showGraduationModal() {
    const prog = this.getUserProgress();
    const user = prog.currentUser || { displayName: 'Học Viên Xuất Sắc' };

    this.launchConfetti();

    if (window.soundSystem) window.soundSystem.playVictory();
    if (window.mascot) {
      window.mascot.setCharacter('sensei');
      window.mascot.setMood(
        'celebrate',
        `🎉 OMEDETOU GOZAIMASU! Chúc mừng học viên ${user.displayName} đã chính thức Tốt Nghiệp Toàn Bộ 25 Bài JLPT N5! 🏆🌸`,
        6000
      );
    }

    let modal = document.getElementById('graduation-n5-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'graduation-n5-modal';
      modal.className = 'modal-overlay';
      modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
      };
      document.body.appendChild(modal);
    }

    modal.classList.remove('hidden');
    modal.classList.add('active');
    modal.style.display = 'flex';

    modal.innerHTML = `
      <div class="modal-card graduation-cert-card">
        
        <div class="cert-border-outer">
          <div class="cert-border-inner">
            
            <div class="cert-header">
              <span class="cert-emblem">🌸 ⛩️ 🌸</span>
              <h2 class="cert-main-title">BẰNG TỐT NGHIỆP SƠ CẤP JLPT N5</h2>
              <p class="cert-sub-title">日本語能力試験 N5 修了証書</p>
            </div>

            <div class="cert-body">
              <p class="cert-congrats-text">Chứng nhận học viên ưu tú:</p>
              <h3 class="cert-student-name">${user.displayName}</h3>
              
              <div class="cert-achievement-box">
                <div class="cert-stat-item">
                  <span class="cert-stat-num">25 / 25</span>
                  <span class="cert-stat-label">Bài học Minna N5</span>
                </div>
                <div class="cert-stat-item">
                  <span class="cert-stat-num">⭐⭐⭐</span>
                  <span class="cert-stat-label">Xếp loại Xuất Sắc</span>
                </div>
                <div class="cert-stat-item">
                  <span class="cert-stat-num">${user.profile?.exp || 500} EXP</span>
                  <span class="cert-stat-label">Điểm Danh Dự</span>
                </div>
              </div>

              <p class="cert-praise-speech">
                "Đã kiên trì vượt qua 5 chặng hành trình từ Tokyo đến Đỉnh Phú Sĩ, hoàn thành trọn vẹn ngữ pháp và từ vựng 25 Bài Sơ cấp. Đủ tư cách bước vào Lộ trình JLPT N4!"
              </p>
            </div>

            <div class="cert-footer">
              <div class="cert-date-col">
                <span>Ngày cấp: ${new Date().toLocaleDateString('vi-VN')}</span>
                <span>Học viện: Nihongo Go! Academy</span>
              </div>

              <div class="cert-hanko-seal">
                <div class="hanko-circle-red">
                  <span>高木</span>
                  <span>先生</span>
                  <small>認証</small>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="modal-footer cert-modal-actions">
          <button class="btn btn-secondary" onclick="document.getElementById('graduation-n5-modal').remove()">
            Lưu Kỷ Niệm 📥
          </button>
          <button class="btn btn-primary btn-advance-n4" onclick="window.roadmapModule.proceedToN4()">
            🚀 Bước Vào Lộ Trình JLPT N4 Ngay!
          </button>
        </div>

      </div>
    `;
  }

  proceedToN4() {
    const modal = document.getElementById('graduation-n5-modal');
    if (modal) modal.remove();

    if (window.app) {
      window.app.selectLevel('n4');
    }

    // Tự động mở Chặng 6
    this.expandedRegions[6] = true;
    this.render();

    if (window.soundSystem) window.soundSystem.playVictory();
    alert('🎉 CHÀO MỪNG BẠN BƯỚC VÀO LỘ TRÌNH JLPT N4 (Bài 26 đến Bài 50)!\nChúc bạn tiếp tục giữ vững phong độ và sớm chinh phục chứng chỉ quốc tế N4!');
  }

  // --------------------------------------------------------------------------
  // HỘP THÔNG BÁO NHẮC NHỞ CỦA CÔ TANAKA
  // --------------------------------------------------------------------------
  showTanakaAlert(messageHtml) {
    const toastId = 'roadmap-takagi-toast';
    let toast = document.getElementById(toastId);
    if (!toast) {
      toast = document.createElement('div');
      toast.id = toastId;
      toast.className = 'sensei-mistake-toast anim-slide-in';
      document.body.appendChild(toast);
    }

    toast.innerHTML = `
      <div class="toast-avatar" style="font-size: 32px;">👩‍🏫</div>
      <div class="toast-body">
        <div class="toast-title">Tanaka-sensei (高木先生) nhắc nhở:</div>
        <div class="toast-desc">${messageHtml}</div>
      </div>
      <button class="toast-close-btn" onclick="this.parentElement.remove()">✕</button>
    `;

    setTimeout(() => {
      if (toast && toast.parentElement) {
        toast.remove();
      }
    }, 6000);
  }

  // --------------------------------------------------------------------------
  // BẮN PHÁO HOA TOÀN MÀN HÌNH (CONFETTI CANVAS)
  // --------------------------------------------------------------------------
  launchConfetti() {
    let canvas = document.getElementById('roadmap-confetti-canvas');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'roadmap-confetti-canvas';
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

    const colors = ['#FF6B6B', '#FCC419', '#51CF66', '#339AF0', '#CC5DE8', '#FF922B'];
    const particles = [];

    for (let i = 0; i < 140; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        r: Math.random() * 7 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedY: Math.random() * 4 + 3,
        speedX: Math.random() * 2 - 1
      });
    }

    let frameCount = 0;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.y += p.speedY;
        p.x += p.speedX;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      frameCount++;
      if (frameCount < 180) {
        requestAnimationFrame(draw);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    draw();
  }

  // --------------------------------------------------------------------------
  // TIỆN ÍCH HELPER
  // --------------------------------------------------------------------------
  getAvatarColor(avatarId) {
    const map = {
      shiba: '#FFE8CC',
      ninja: '#E6FCF5',
      samurai: '#FFF3BF',
      miko: '#FFF0F6',
      tanuki: '#F3F0FF',
      sensei: '#E7F5FF'
    };
    return map[avatarId] || '#FFE8CC';
  }

  getAvatarEmoji(avatarId) {
    const map = {
      shiba: '🐕',
      ninja: '🥷',
      samurai: '🥋',
      miko: '🌸',
      tanuki: '🦝',
      sensei: '👩‍🏫'
    };
    return map[avatarId] || '🐕';
  }
}

// ----------------------------------------------------------------------------
// BỘ CHỌN BÀI HỌC NHANH TOÀN CỤC (QUICK LESSON SELECTOR) CHO TẤT CẢ CÁC TAB
// ----------------------------------------------------------------------------
window.renderQuickLessonSelector = function(selectedLesson, tabContext) {
  const unlocked = window.authModule ? window.authModule.getUnlockedLesson() : 1;
  const completedObj = window.authModule ? window.authModule.getCompletedLessons() : {};
  const allLessons = window.LESSONS_DATA ? [...(window.LESSONS_DATA.n5 || []), ...(window.LESSONS_DATA.n4 || [])] : [];
  const maxLesson = Math.max(25, unlocked);

  let optionsHtml = `<option value="all" ${selectedLesson === 'all' || !selectedLesson ? 'selected' : ''}>🌐 Toàn bộ Từ vựng Đang Học</option>`;

  allLessons.slice(0, maxLesson).forEach(l => {
    const lNum = l.lessonNumber;
    const isCompleted = !!completedObj[lNum]?.completed;
    const isUnlocked = lNum <= unlocked;
    const count = l.vocab ? l.vocab.length : 0;
    const isSel = (selectedLesson && parseInt(selectedLesson, 10) === lNum);
    const lvlTag = lNum >= 26 ? 'N4' : 'N5';

    if (isUnlocked) {
      optionsHtml += `
        <option value="${lNum}" ${isSel ? 'selected' : ''}>
          ${isCompleted ? '✅' : '🎯'} [${lvlTag}] Bài ${lNum}: ${l.topicVi} (${count} từ)
        </option>
      `;
    } else {
      optionsHtml += `
        <option value="${lNum}" disabled class="opt-locked">
          🔒 [${lvlTag}] Bài ${lNum}: ${l.topicVi} (Cần vượt Bài ${lNum - 1})
        </option>
      `;
    }
  });

  return `
    <div class="quick-lesson-selector-bar" data-tab-context="${tabContext}">
      <div class="ql-label">
        <span class="ql-badge-tag">📚 Chọn Bài Học</span>
        <span class="ql-title">Đang luyện tập theo:</span>
      </div>
      <div class="ql-dropdown-wrap">
        <select class="quick-lesson-select" onchange="window.handleQuickLessonChange(this.value, '${tabContext}')">
          ${optionsHtml}
        </select>
      </div>
      <div class="ql-unlocked-status">
        <span class="ql-pill">Tiến độ mở khóa: <strong>Bài ${unlocked}/50</strong></span>
      </div>
    </div>
  `;
};

window.handleQuickLessonChange = function(lessonValue, tabContext) {
  const lNum = lessonValue === 'all' ? 'all' : parseInt(lessonValue, 10);
  
  if (tabContext === 'flashcard' && window.flashcardModule) {
    if (lNum === 'all') {
      window.flashcardModule.init(window.JLPT_DATA?.n5 || []);
      window.flashcardModule.currentLesson = null;
    } else {
      window.flashcardModule.loadLesson(lNum);
    }
  } else if (tabContext === 'guess-game' && window.guessGame) {
    window.guessGame.setLesson(lNum);
  } else if (tabContext === 'speech-test' && window.speechModule) {
    if (lNum === 'all') {
      window.speechModule.setWordList(window.JLPT_DATA?.n5 || []);
      window.speechModule.currentLesson = null;
      window.speechModule.renderLessonSpeechMissionBanner();
    } else {
      window.speechModule.loadLesson(lNum);
    }
  } else if (tabContext === 'memory-game' && window.memoryGame) {
    window.memoryGame.setLesson(lNum);
  }
};

// Khởi tạo instance toàn cục sẵn sàng sử dụng
window.roadmapModule = new JapaneseRoadmapModule();
