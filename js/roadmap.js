// ============================================================================
// MODULE ROADMAP: BẢN ĐỒ CHINH PHỤC 25 LEVEL JLPT N5 -> JLPT N4
// 5 Chặng địa danh Nhật Bản (Tokyo -> Kyoto -> Osaka -> Hokkaido -> Phú Sĩ)
// Bảng Nhiệm Vụ Bài Học (Lesson Mission Modal), Tự Động Thăng Cấp & Mở Khóa,
// Cổng Torii Chuyển Cấp N4, Bằng Tốt Nghiệp N5 & Pháo Hoa Toàn Màn Hình
// ============================================================================

const ROADMAP_REGIONS = [
  {
    id: 1,
    name: 'Chặng 1: Khởi Hành Từ Tokyo (東京)',
    icon: '🗼',
    range: [1, 5],
    desc: 'Làm quen tiếng Nhật, Chào hỏi, Giới thiệu bản thân, Đồ vật quanh ta, Địa điểm, Thời gian & Tàu điện Shinkansen',
    themeColor: '#E03131',
    bgGradient: 'linear-gradient(135deg, #FFF0F6 0%, #FFE3E3 100%)'
  },
  {
    id: 2,
    name: 'Chặng 2: Khám Phá Cố Đô Kyoto (京都)',
    icon: '⛩️',
    range: [6, 10],
    desc: 'Ẩm thực Nhật Bản, Trao nhận quà tặng, Miêu tả tính cách & cảm nhận, Sở thích thể thao & Vị trí không gian',
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
    desc: 'Chuỗi hành động sinh hoạt, Sức khỏe bệnh viện (Thể ない), Năng lực (Thể từ điển), Trải nghiệm văn hóa (Thể た) & Hội thoại thân mật (Futsuukei)',
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
    desc: 'Lý do & Thắc mắc (～んです), Động từ Thể Khả năng, Hành động song song (～ながら), Tự động từ trạng thái & Chuẩn bị sẵn sàng (V-てあります)',
    themeColor: '#D6336C',
    bgGradient: 'linear-gradient(135deg, #FFF0F6 0%, #FFDEEB 100%)'
  }
];

class JapaneseRoadmapModule {
  constructor() {
    this.containerId = 'roadmap-container';
    this.currentLevelTarget = 'N5';
    this.activeMissionLesson = null;
  }

  init() {
    this.render();
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
      // Chế độ khách (lấy từ localStorage dự phòng)
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
    for (let i = 1; i <= 25; i++) {
      if (completedLessons[i] && completedLessons[i].completed) {
        completedCount++;
      }
    }

    return {
      isLogged,
      currentUser,
      unlockedLesson: unlocked,
      completedLessons,
      completedCount,
      percent: Math.min(100, Math.round((completedCount / 25) * 100))
    };
  }

  // --------------------------------------------------------------------------
  // QUẢN LÝ TRẠNG THÁI 3 NHIỆM VỤ CỦA TỪNG BÀI HỌC (1 ĐẾN 25)
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
        window.mascot.setMood('happy', `🌸 Tuyệt vời! Em đã hoàn thành Nhiệm Vụ 1: Học từ vựng Bài ${lNum}! ✨`, 3500);
      }
    } else if (missionKey === 'game') {
      state.gameDone = true;
      state.gameScore = data.gameScore || 80;
      if (window.soundSystem) window.soundSystem.playCorrect();
      if (window.mascot) {
        window.mascot.setMood('happy', `🎯 Xuất sắc! Em đã hoàn thành Nhiệm Vụ 2: Vượt Game Đoán Từ Bài ${lNum} với ${state.gameScore}% điểm! 🔥`, 4000);
      }
    } else if (missionKey === 'pronun') {
      state.pronunDone = true;
      state.pronunScore = data.pronunScore || 80;
      state.pronunPassedCount = Math.max(state.pronunPassedCount || 0, data.pronunPassedCount || 3);
      if (window.soundSystem) window.soundSystem.playVictory();
      if (window.mascot) {
        window.mascot.setMood('celebrate', `🎙️ Giỏi lắm! Em đã hoàn thành Nhiệm Vụ 3: Khảo bài phát âm chuẩn với Cô Tanaka! 🌸`, 4000);
      }
    }

    this.saveLessonMissionState(lNum, state);
    this.updateMissionModalIfOpen(lNum);

    // Nếu cả 3 nhiệm vụ đều đã hoàn thành và bài chưa được chốt -> Kích hoạt Lễ hoàn thành bài!
    if (state.vocabDone && state.gameDone && state.pronunDone && !state.completed) {
      this.checkAndCompleteLesson(lNum, state);
    }
  }

  // Tự động thăng cấp và chốt bài học
  checkAndCompleteLesson(lessonNumber, currentState = null) {
    const lNum = parseInt(lessonNumber, 10);
    const state = currentState || this.getLessonMissionState(lNum);

    if (!state.vocabDone || !state.gameDone || !state.pronunDone) {
      return;
    }

    state.completed = true;

    // Tính số sao dựa trên điểm game đoán từ & điểm phát âm
    const avgScore = Math.round(((state.gameScore || 80) + (state.pronunScore || 85)) / 2);
    let stars = 3;
    if (avgScore < 75) stars = 1;
    else if (avgScore < 88) stars = 2;
    state.stars = stars;

    this.saveLessonMissionState(lNum, state);

    // Mở khóa bài tiếp theo qua AuthModule
    let result = { unlocked: lNum < 25 ? lNum + 1 : 25 };
    if (window.authModule && typeof window.authModule.completeLesson === 'function') {
      result = window.authModule.completeLesson(lNum, {
        stars: stars,
        gameScore: state.gameScore || 85,
        pronunScore: state.pronunScore || 85
      }) || result;
    }

    // Hiển thị thông báo chiến thắng rực rỡ phong cách Anime
    this.showLessonVictoryModal(lNum, state, result.unlocked);

    // Re-render lại roadmap
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

    container.innerHTML = `
      <div class="roadmap-main-wrapper">
        
        <!-- ================= KHỐI 1: THANH TIẾN ĐỘ TỔNG N5 ================= -->
        <div class="roadmap-header-hud">
          
          <div class="hud-top-meta">
            <div class="hud-hero-left">
              <span class="hud-map-icon">🗺️</span>
              <div>
                <h2>BẢN ĐỒ CHINH PHỤC 25 BÀI JLPT N5</h2>
                <p>Hành trình 5 Chặng từ Tokyo đến Đỉnh Phú Sĩ • Chuẩn giáo trình Minna no Nihongo</p>
              </div>
            </div>

            <div class="hud-user-profile-card">
              ${prog.isLogged ? `
                <div class="hud-user-avatar" style="background: ${this.getAvatarColor(prog.currentUser.avatar)};">
                  ${this.getAvatarEmoji(prog.currentUser.avatar)}
                </div>
                <div class="hud-user-details">
                  <strong>${prog.currentUser.displayName}</strong>
                  <span class="hud-rank-tag">🏆 Level ${prog.currentUser.profile?.level || 1} • Đang ở Bài ${prog.unlockedLesson}/25</span>
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

          <!-- Thanh tiến trình % -->
          <div class="roadmap-progress-bar-wrap">
            <div class="progress-labels-row">
              <span>Tiến độ N5: <strong>Đã hoàn thành ${prog.completedCount} / 25 Bài</strong></span>
              <span class="progress-percent-badge">${prog.percent}%</span>
            </div>
            <div class="roadmap-progress-track">
              <div class="roadmap-progress-fill" style="width: ${prog.percent}%;"></div>
            </div>
          </div>

        </div>

        <!-- ================= KHỐI 2: ĐƯỜNG ĐI UỐN LƯỢN (WINDING ROADMAP) ================= -->
        <div class="roadmap-serpentine-track">
          
          ${ROADMAP_REGIONS.map(reg => {
            const lessonsInRegion = allLessons.filter(l => l && l.lessonNumber >= reg.range[0] && l.lessonNumber <= reg.range[1]);

            return `
              <div class="roadmap-region-section" style="background: ${reg.bgGradient};">
                
                <!-- Tiêu đề chặng -->
                <div class="region-banner-header" style="border-left-color: ${reg.themeColor};">
                  <div class="region-title-wrap">
                    <span class="region-badge-icon">${reg.icon}</span>
                    <div>
                      <h3>${reg.name}</h3>
                      <p>${reg.desc}</p>
                    </div>
                  </div>
                  <div class="region-stage-pill" style="background: ${reg.themeColor};">
                    Bài ${reg.range[0]} - ${reg.range[1]}
                  </div>
                </div>

                <!-- Lưới / Đường uốn lượn 5 Bài học của chặng -->
                <div class="region-lessons-path">
                  ${lessonsInRegion.map((lesson, idx) => {
                    const lNum = lesson.lessonNumber;
                    const isCompleted = prog.completedLessons[lNum]?.completed;
                    const isCurrent = (lNum === prog.unlockedLesson) && !isCompleted;
                    const isLocked = lNum > prog.unlockedLesson;

                    let nodeClass = 'locked';
                    if (isCompleted) nodeClass = 'completed';
                    else if (isCurrent) nodeClass = 'current';

                    const starsCount = prog.completedLessons[lNum]?.stars || (isCompleted ? 3 : 0);
                    const starsDisplay = isCompleted ? '⭐'.repeat(starsCount) : '';
                    const score = prog.completedLessons[lNum]?.gameScore || 90;

                    // Vị trí so le uốn lượn zigzag (trái - giữa - phải)
                    const zigzagPos = idx % 2 === 0 ? 'pos-left' : 'pos-right';

                    return `
                      <div class="roadmap-node-wrap ${zigzagPos}">
                        
                        <div class="lesson-level-node ${nodeClass}" id="lesson-node-${lNum}" onclick="window.roadmapModule.handleNodeClick(${lNum})">
                          
                          <!-- Vòng tròn số Level -->
                          <div class="node-circle-badge">
                            <span class="node-num">${lNum}</span>
                            ${isCompleted ? '<span class="node-check-corner">✅</span>' : ''}
                            ${isLocked ? '<span class="node-lock-corner">🔒</span>' : ''}
                          </div>

                          <!-- Thông tin bài học -->
                          <div class="node-content-card">
                            <div class="node-top-bar">
                              <span class="node-lesson-tag">${lesson.icon} Bài ${lNum}</span>
                              ${isCompleted ? `<span class="node-stars">${starsDisplay}</span>` : ''}
                              ${isCurrent ? '<span class="node-current-tag anim-pulse">🎯 Đang Học</span>' : ''}
                              ${isLocked ? '<span class="node-locked-tag">Đang Khóa</span>' : ''}
                            </div>
                            
                            <h4 class="node-topic-title">${lesson.topicVi}</h4>
                            <p class="node-grammar-preview">${lesson.grammarPoint.split('.')[0]}.</p>

                            <!-- Nút hành động tương ứng trạng thái -->
                            <div class="node-action-foot">
                              ${isCompleted ? `
                                <span class="node-completed-score">Điểm: <strong>${score}đ</strong></span>
                                <button class="btn btn-sm btn-review-node">Nhiệm Vụ & Ôn Tập 🔄</button>
                              ` : isCurrent ? `
                                <div class="node-shiba-pointer">
                                  <span class="shiba-pointer-icon">🐕</span>
                                  <span class="shiba-pointer-bubble">Mục tiêu tiếp theo của em đây!</span>
                                </div>
                                <button class="btn btn-primary btn-sm btn-start-node">Vào Nhận Nhiệm Vụ 🚀</button>
                              ` : `
                                <span class="node-locked-hint">Cần hoàn thành Bài ${lNum - 1} 🔒</span>
                              `}
                            </div>
                          </div>

                        </div>

                      </div>
                    `;
                  }).join('')}
                </div>

              </div>
            `;
          }).join('')}

          <!-- ================= KHỐI 3: CỔNG THĂNG CẤP JLPT N4 ================= -->
          <div class="roadmap-n4-gateway-section ${prog.completedCount >= 25 ? 'unlocked' : 'sealed'}" onclick="window.roadmapModule.handleN4GateClick()">
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
                    🔒 PHONG ẤN BẢO VỆ: Cần hoàn thành 25/25 Bài N5 (Hiện tại: ${prog.completedCount}/25)
                  </div>
                `}
              </div>

              <div class="gateway-action-btn">
                ${prog.completedCount >= 25 ? `
                  <button class="btn btn-primary btn-enter-n4">
                    📜 Nhận Bằng N5 & Lên N4 🎓
                  </button>
                ` : `
                  <button class="btn btn-secondary btn-locked-gate">
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
  // XỬ LÝ SỰ KIỆN CLICK VÀO NÚT BÀI HỌC
  // --------------------------------------------------------------------------
  handleNodeClick(lessonNumber) {
    const prog = this.getUserProgress();

    // KIỂM TRA ĐẶC BIỆT CHO CẤP ĐỘ N4 (BÀI 26 ĐẾN 30):
    if (lessonNumber >= 26) {
      // 1. Phải đăng nhập
      if (!prog.isLogged) {
        if (window.soundSystem) window.soundSystem.playBuzzer();
        this.showTanakaAlert(
          `Cấp độ Trung Cấp JLPT N4 (Bài 26 - 30) yêu cầu <strong>Đăng nhập tài khoản học viên</strong> để hệ thống bảo lưu học bạ và ghi nhận chứng chỉ đám mây!<br><br>` +
          `Vui lòng Đăng nhập hoặc Tạo tài khoản miễn phí để tiếp tục. 🔑`
        );
        if (window.authModule) {
          setTimeout(() => window.authModule.openAuthModal('login'), 800);
        }
        return;
      }

      // 2. Phải hoàn thành toàn bộ 25 bài N5
      if (prog.completedCount < 25) {
        if (window.soundSystem) window.soundSystem.playBuzzer();
        this.showTanakaAlert(
          `Cổng Thăng Cấp N4 đang được niêm phong bảo vệ!<br><br>` +
          `Em cần hoàn thành xuất sắc <strong>toàn bộ 25 Bài học N5</strong> trước khi mở khóa Bài 26. Hiện tại em mới hoàn thành ${prog.completedCount}/25 Bài! 👩‍🏫`
        );
        return;
      }
    }

    // 1. Nếu bài đang bị khóa
    if (lessonNumber > prog.unlockedLesson) {
      if (window.soundSystem) window.soundSystem.playBuzzer();
      
      this.showTanakaAlert(
        `Chưa xong Bài ${lessonNumber - 1} mà đã đòi nhảy cóc sang Bài ${lessonNumber} hả em?!<br>` +
        `Học tiếng Nhật không có chuyện đốt cháy giai đoạn! Em hãy quay lại hoàn thành chắc chắn Bài ${prog.unlockedLesson} trước cho cô! 👩‍🏫`
      );

      if (window.mascot) {
        window.mascot.setCharacter('sensei');
        window.mascot.setMood('strict', `Chưa xong Bài ${lessonNumber - 1} thì không được mở Bài ${lessonNumber} đâu nhé! 👩‍🏫`, 3500);
      }
      return;
    }

    // 2. Nếu bài đã mở khóa -> Mở Bảng Nhiệm Vụ Bài Học (Lesson Mission Modal)
    this.openLessonMissionModal(lessonNumber);
  }

  // --------------------------------------------------------------------------
  // BẢNG NHIỆM VỤ BÀI HỌC (LESSON MISSION MODAL)
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

    return `
      <div class="modal-card lesson-mission-modal-card">
        
        <!-- Header Bài Học -->
        <div class="mission-modal-header">
          <div class="mission-header-info">
            <span class="mission-badge-pill">${lesson.icon} CẤP ĐỘ N5 • BÀI ${lNum}</span>
            <h2 class="mission-title">${lesson.topicVi}</h2>
            <p class="mission-ja-subtitle">${lesson.topicJa || ''} • ${lesson.grammarPoint}</p>
          </div>
          <button class="modal-close-btn" onclick="window.roadmapModule.closeLessonMissionModal()" title="Đóng">✕</button>
        </div>

        <!-- Thanh Tiến Trình 3 Nhiệm Vụ -->
        <div class="mission-progress-overview">
          <div class="mission-progress-labels">
            <span>Tiến độ vượt bài: <strong>${completedCount} / 3 Nhiệm vụ hoàn thành</strong></span>
            <span class="mission-percent-tag ${completedCount === 3 ? 'all-done' : ''}">${progressPercent}%</span>
          </div>
          <div class="mission-progress-track">
            <div class="mission-progress-fill" style="width: ${progressPercent}%;"></div>
          </div>
        </div>

        <!-- Danh Sách 3 Nhiệm Vụ -->
        <div class="mission-steps-list">
          
          <!-- ================= NHIỆM VỤ 1: FLASHCARD ================= -->
          <div class="mission-step-card ${state.vocabDone ? 'step-done' : 'step-pending'}">
            <div class="step-num-badge">
              ${state.vocabDone ? '✅' : '1'}
            </div>
            
            <div class="step-details">
              <div class="step-top-line">
                <h4>Nhiệm vụ 1: 📖 Học Flashcard Từ Vựng Bài ${lNum}</h4>
                ${state.vocabDone ? `
                  <span class="mission-status-badge done">✅ ĐÃ HOÀN THÀNH</span>
                ` : `
                  <span class="mission-status-badge pending">⏳ CHƯA HOÀN THÀNH</span>
                `}
              </div>
              <p class="step-desc">
                Lật mở và làm quen toàn bộ <strong>${lesson.vocab?.length || 20} từ vựng N5 trọng tâm</strong> của bài học này. Nghe cách phát âm chuẩn và ghi nhớ Kanji.
              </p>
            </div>

            <div class="step-action-col">
              <button class="btn ${state.vocabDone ? 'btn-outline-secondary' : 'btn-primary'} btn-step-action" 
                      onclick="window.roadmapModule.startMission(${lNum}, 'flashcard')">
                ${state.vocabDone ? 'Ôn Tập Lại 🃏' : 'Lật Thẻ Học Ngay 🃏'}
              </button>
            </div>
          </div>

          <!-- ================= NHIỆM VỤ 2: GAME ĐOÁN TỪ ================= -->
          <div class="mission-step-card ${state.gameDone ? 'step-done' : 'step-pending'}">
            <div class="step-num-badge">
              ${state.gameDone ? '✅' : '2'}
            </div>
            
            <div class="step-details">
              <div class="step-top-line">
                <h4>Nhiệm vụ 2: 🎮 Vượt Game Đoán Từ Bài ${lNum} (≥ 70%)</h4>
                ${state.gameDone ? `
                  <span class="mission-status-badge done">✅ ĐÃ ĐẠT (${state.gameScore}% - ⭐⭐⭐)</span>
                ` : `
                  <span class="mission-status-badge pending">⏳ CẦN ĐẠT ≥ 70%</span>
                `}
              </div>
              <p class="step-desc">
                Thử thách phản xạ đoán nghĩa 4 đáp án nhanh trong 15s cho từ vựng Bài ${lNum}. <strong>Đạt từ 70% điểm trở lên</strong> để vượt qua thử thách này!
              </p>
            </div>

            <div class="step-action-col">
              <button class="btn ${state.gameDone ? 'btn-outline-warning' : 'btn-warning'} btn-step-action" 
                      onclick="window.roadmapModule.startMission(${lNum}, 'game')">
                ${state.gameDone ? 'Chơi Lại Game 🎯' : 'Vào Chơi Game Ngay 🎯'}
              </button>
            </div>
          </div>

          <!-- ================= NHIỆM VỤ 3: TEST PHÁT ÂM AI ================= -->
          <div class="mission-step-card ${state.pronunDone ? 'step-done' : 'step-pending'}">
            <div class="step-num-badge">
              ${state.pronunDone ? '✅' : '3'}
            </div>
            
            <div class="step-details">
              <div class="step-top-line">
                <h4>Nhiệm vụ 3: 🎤 Khảo Bài Phát Âm Với Cô Tanaka (≥ 3 từ ≥ 60%)</h4>
                ${state.pronunDone ? `
                  <span class="mission-status-badge done">✅ ĐÃ ĐẠT (${state.pronunPassedCount || 3}/3 từ ≥ 60%)</span>
                ` : `
                  <span class="mission-status-badge pending">⏳ ĐÃ ĐẠT ${state.pronunPassedCount || 0}/3 TỪ (≥ 60%)</span>
                `}
              </div>
              <p class="step-desc">
                Bật Micro đọc to rõ ràng các từ vựng của Bài ${lNum}. Hệ thống AI sẽ chấm điểm và Cô Tanaka sẽ phê duyệt khi em <strong>phát âm đạt từ 3 từ trở lên (≥ 60%)</strong>.
              </p>
            </div>

            <div class="step-action-col">
              <button class="btn ${state.pronunDone ? 'btn-outline-info' : 'btn-info'} btn-step-action" 
                      onclick="window.roadmapModule.startMission(${lNum}, 'speech')">
                ${state.pronunDone ? 'Luyện Lại Giọng 🎙️' : 'Bật Micro Luyện Đọc 🎙️'}
              </button>
            </div>
          </div>

        </div>

        <!-- Footer Modal -->
        <div class="mission-modal-footer">
          ${completedCount === 3 ? `
            <div class="mission-all-done-banner">
              <span>🎉 Em đã hoàn thành xuất sắc 3/3 Nhiệm vụ của Bài ${lNum}!</span>
              <button class="btn btn-success" onclick="window.roadmapModule.showLessonVictoryModal(${lNum}, ${JSON.stringify(state).replace(/"/g, '&quot;')}, ${lNum < 25 ? lNum + 1 : 25})">
                🏆 Xem Bảng Vàng & Cúp Bài Học
              </button>
            </div>
          ` : `
            <div class="mission-footer-hint">
              <span>💡 Hãy hoàn thành đủ 3 nhiệm vụ trên để Cô Tanaka cấp sao và tự động mở khóa Bài ${lNum < 25 ? lNum + 1 : 25}!</span>
            </div>
          `}
        </div>

      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // BẮT ĐẦU TỪNG NHIỆM VỤ (CHUYỂN TAB & NẠP ĐÚNG TỪ VỰNG CỦA BÀI HỌC)
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
  // POPUP CHIẾN THẮNG RỰC RỠ PHONG CÁCH ANIME (HOÀN THÀNH BÀI N -> MỞ KHÓA BÀI N+1)
  // --------------------------------------------------------------------------
  showLessonVictoryModal(lessonNumber, state, newUnlocked) {
    const lNum = parseInt(lessonNumber, 10);
    const nextLessonNum = lNum < 25 ? lNum + 1 : 25;
    const nextLesson = window.LESSONS_DATA ? window.LESSONS_DATA.getLesson('N5', nextLessonNum) : null;
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
          <p class="victory-sub-text">Em đã xuất sắc vượt qua toàn bộ 3 nhiệm vụ của Bài ${lNum}!</p>
        </div>

        <!-- Bảng điểm chi tiết -->
        <div class="victory-score-grid">
          <div class="v-score-item">
            <span class="v-score-label">📖 Flashcard</span>
            <span class="v-score-val text-success">Đã Thuộc ✅</span>
          </div>
          <div class="v-score-item">
            <span class="v-score-label">🎮 Game Đoán Từ</span>
            <span class="v-score-val text-warning">${state.gameScore || 85}%</span>
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
            <h3 class="v-next-title">${nextLesson ? `${nextLesson.icon} Bài ${nextLessonNum}: ${nextLesson.topicVi}` : `Bài ${nextLessonNum}`}</h3>
            <p class="v-next-desc">${nextLesson ? nextLesson.grammarPoint : ''}</p>
          </div>
        ` : `
          <div class="victory-next-lesson-box max-level">
            <div class="v-next-tag">👑 ĐÃ CHINH PHỤC TOÀN BỘ 25 BÀI N5! 👑</div>
            <h3 class="v-next-title">Cổng Torii JLPT N4 Đã Được Giải Phóng!</h3>
            <p class="v-next-desc">Hãy đến Cổng Thăng Cấp N4 để nhận Bằng Tốt Nghiệp và bước vào Sơ Trung Cấp!</p>
          </div>
        `}

        <div class="victory-actions-row">
          <button class="btn btn-secondary" onclick="window.roadmapModule.viewOnMapAndScroll(${nextLessonNum})">
            🗺️ Xem Trên Bản Đồ
          </button>
          
          ${lNum < 25 ? `
            <button class="btn btn-primary btn-advance-next" onclick="window.roadmapModule.closeVictoryModal(); window.roadmapModule.openLessonMissionModal(${nextLessonNum});">
              🚀 Vào Học Bài ${nextLessonNum} Ngay!
            </button>
          ` : `
            <button class="btn btn-primary btn-advance-next" onclick="window.roadmapModule.closeVictoryModal(); window.roadmapModule.handleN4GateClick();">
              📜 Nhận Bằng N5 Ngay!
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

  viewOnMapAndScroll(lessonNumber) {
    this.closeVictoryModal();
    if (window.app) window.app.switchTab('roadmap');
    this.scrollToLessonNode(lessonNumber);
  }

  scrollToLessonNode(lessonNumber) {
    setTimeout(() => {
      const node = document.getElementById(`lesson-node-${lessonNumber}`);
      if (node) {
        node.scrollIntoView({ behavior: 'smooth', block: 'center' });
        node.classList.add('anim-golden-pulse');
        setTimeout(() => node.classList.remove('anim-golden-pulse'), 4500);
      }
    }, 400);
  }

  // --------------------------------------------------------------------------
  // XỬ LÝ SỰ KIỆN CLICK VÀO CỔNG CHUYỂN CẤP N4
  // --------------------------------------------------------------------------
  handleN4GateClick() {
    const prog = this.getUserProgress();

    // 1. Chưa hoàn thành đủ 25 bài N5
    if (prog.completedCount < 25) {
      if (window.soundSystem) window.soundSystem.playBuzzer();
      this.showTanakaAlert(
        `Cổng N4 được niêm phong nghiêm ngặt! Em mới hoàn thành có <strong>${prog.completedCount}/25 Bài</strong> N5 thôi!<br>` +
        `Không nắm chắc kiến thức sơ cấp N5 thì lên N4 làm sao nghe hiểu và chia thể động từ được?! Hãy cày xong cả 25 bài rồi quay lại đây nhận bằng tốt nghiệp! 👩‍🏫`
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

    if (window.soundSystem) window.soundSystem.playCorrect();
    alert('🎉 CHÀO MỪNG BẠN BƯỚC VÀO LỘ TRÌNH JLPT N4 (Bài 26 đến Bài 50)!\nChúc bạn tiếp tục giữ vững phong độ và sớm chinh phục chứng chỉ quốc tế N4!');
  }

  // --------------------------------------------------------------------------
  // HỘP THÔNG BÁO NHẮC NHỞ CỦA CÔ TAKAGI
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
    }, 5500);
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
        tilt: Math.random() * 10 - 5,
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
  const allN5Lessons = window.LESSONS_DATA ? window.LESSONS_DATA.n5 : [];
  const totalN5Words = window.JLPT_DATA?.n5?.length || 104;

  let optionsHtml = `<option value="all" ${selectedLesson === 'all' || !selectedLesson ? 'selected' : ''}>🌐 Toàn bộ Từ vựng JLPT N5 (${totalN5Words} từ)</option>`;

  allN5Lessons.forEach(l => {
    const lNum = l.lessonNumber;
    const isCompleted = !!completedObj[lNum]?.completed;
    const isUnlocked = lNum <= unlocked;
    const count = l.vocab ? l.vocab.length : 0;
    const isSel = (selectedLesson && parseInt(selectedLesson, 10) === lNum);

    if (isUnlocked) {
      optionsHtml += `
        <option value="${lNum}" ${isSel ? 'selected' : ''}>
          ${isCompleted ? '✅' : '🎯'} Bài ${lNum}: ${l.topicVi} (${count} từ)
        </option>
      `;
    } else {
      optionsHtml += `
        <option value="${lNum}" disabled class="opt-locked">
          🔒 Bài ${lNum}: ${l.topicVi} (Cần vượt Bài ${lNum - 1})
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
        <span class="ql-pill">Tiến độ mở khóa: <strong>Bài ${unlocked}/25</strong></span>
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
