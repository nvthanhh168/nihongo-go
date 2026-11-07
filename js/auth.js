// ============================================================================
// MODULE AUTH & CLOUD-READY LOCAL DATABASE: HỆ THỐNG TÀI KHOẢN HỌC VIÊN
// Quản lý Đăng Nhập, Đăng Ký, Avatar Nhật Bản, Lộ trình 25 Bài Minna N5,
// Phân tách dữ liệu cá nhân theo từng tài khoản & Tự động lưu tiến độ
// ============================================================================

const AVATAR_LIST = [
  { id: 'shiba', name: 'Shiba Inu', emoji: '🐕', title: 'Tân Binh Đáng Yêu', color: '#FFE8CC' },
  { id: 'ninja', name: 'Ninja Phản Xạ', emoji: '🥷', title: 'Cao Thủ Đoán Từ', color: '#E6FCF5' },
  { id: 'samurai', name: 'Samurai N5', emoji: '🥋', title: 'Chiến Binh Kỷ Luật', color: '#FFF3BF' },
  { id: 'miko', name: 'Miko Đền Thần', emoji: '🌸', title: 'Nữ Vu May Mắn', color: '#FFF0F6' },
  { id: 'tanuki', name: 'Tanuki Tinh Nghịch', emoji: '🦝', title: 'Thần Biến Hóa', color: '#F3F0FF' },
  { id: 'sensei', name: 'Học Giả Tokyo', emoji: '👩‍🏫', title: 'Học Trò Cưng Tanaka', color: '#E7F5FF' }
];

const MINNA_LESSONS_N5 = [
  { id: 1, title: 'Bài 1', desc: 'Chào hỏi, Đại từ nhân xưng & Giới thiệu bản thân', targetWords: 15 },
  { id: 2, title: 'Bài 2', desc: 'Đồ vật xung quanh (これ, それ, あれ & この, その, あの)', targetWords: 14 },
  { id: 3, title: 'Bài 3', desc: 'Địa điểm & Nơi chốn (ここ, そこ, あそこ & どこ)', targetWords: 16 },
  { id: 4, title: 'Bài 4', desc: 'Thời gian, Giờ giấc & Hoạt động hàng ngày (～ます)', targetWords: 18 },
  { id: 5, title: 'Bài 5', desc: 'Đi lại, Phương tiện & Ngày tháng (いきます, きます, かえります)', targetWords: 16 },
  { id: 6, title: 'Bài 6', desc: 'Ăn uống & Hành động tác động lên đối tượng (Trợ từ を)', targetWords: 18 },
  { id: 7, title: 'Bài 7', desc: 'Công cụ, Phương tiện & Tặng/Nhận quà (Trợ từ で, あげます)', targetWords: 15 },
  { id: 8, title: 'Bài 8', desc: 'Tính từ đuôi い & Tính từ đuôi な trong miêu tả', targetWords: 20 },
  { id: 9, title: 'Bài 9', desc: 'Sở thích, Năng lực & Lí do (すき, じょうず, わかります, から)', targetWords: 16 },
  { id: 10, title: 'Bài 10', desc: 'Tồn tại của người & vật (います, あります, Trợ từ に)', targetWords: 16 },
  { id: 11, title: 'Bài 11', desc: 'Số lượng, Lượng từ & Thời lượng (1 cái, 2 cái, 1 người...)', targetWords: 18 },
  { id: 12, title: 'Bài 12', desc: 'So sánh hơn & So sánh nhất trong tiếng Nhật (より, どちら)', targetWords: 15 },
  { id: 13, title: 'Bài 13', desc: 'Bày tỏ mong muốn & Đi đâu làm gì (たいです, にいきます)', targetWords: 15 },
  { id: 14, title: 'Bài 14', desc: 'Thể て của Động từ & Câu yêu cầu lịch sự (～てください)', targetWords: 18 },
  { id: 15, title: 'Bài 15', desc: 'Xin phép (～てもいいですか) & Cấm đoán (～てはいけません)', targetWords: 16 },
  { id: 16, title: 'Bài 16', desc: 'Chuỗi hành động liên tiếp & Đặc điểm người/vật (V-て, V-て...)', targetWords: 16 },
  { id: 17, title: 'Bài 17', desc: 'Thể ない của Động từ & Khuyên không nên làm (～ないでください)', targetWords: 16 },
  { id: 18, title: 'Bài 18', desc: 'Thể từ điển (Jishokei) & Bày tỏ khả năng (～ことができます)', targetWords: 17 },
  { id: 19, title: 'Bài 19', desc: 'Thể た của Động từ & Diễn tả kinh nghiệm (～たことがあります)', targetWords: 16 },
  { id: 20, title: 'Bài 20', desc: 'Thể thông thường (Futsuukei) trong giao tiếp thân mật', targetWords: 18 },
  { id: 21, title: 'Bài 21', desc: 'Bày tỏ ý kiến & Phỏng đoán (～とおもいます, ～といいました)', targetWords: 16 },
  { id: 22, title: 'Bài 22', desc: 'Mệnh đề bổ nghĩa cho danh từ trong tiếng Nhật N5', targetWords: 15 },
  { id: 23, title: 'Bài 23', desc: 'Cấu trúc điều kiện thời gian (～とき, ～と khi làm gì)', targetWords: 16 },
  { id: 24, title: 'Bài 24', desc: 'Cho và nhận hành động giúp đỡ (くれます, もらいます, あげます)', targetWords: 15 },
  { id: 25, title: 'Bài 25', desc: 'Cấu trúc giả định điều kiện tổng kết N5 (～たら, ～ても)', targetWords: 20 },
  { id: 26, title: 'Bài 26 (N4)', desc: 'Giải thích lý do & Xin lời khuyên (～んです, ～たらいいですか)', targetWords: 35 },
  { id: 27, title: 'Bài 27 (N4)', desc: 'Động từ Thể Khả năng (可能形 - Kanoukei) & Năng lực', targetWords: 33 },
  { id: 28, title: 'Bài 28 (N4)', desc: 'Hành động song song (～ながら) & Nhiều lý do (～し、～し)', targetWords: 40 },
  { id: 29, title: 'Bài 29 (N4)', desc: 'Tự động từ & Diễn tả trạng thái kết quả (V-ています)', targetWords: 39 },
  { id: 30, title: 'Bài 30 (N4)', desc: 'Trạng thái có chủ đích (～てあります) & Chuẩn bị trước (～ておきます)', targetWords: 39 },
  { id: 31, title: 'Bài 31 (N4)', desc: 'Thể Ý chí & Kế hoạch tương lai (～よう, ～つもり, ～予定)', targetWords: 28 },
  { id: 32, title: 'Bài 32 (N4)', desc: 'Lời khuyên & Phỏng đoán (～たほうがいい, ～でしょう, ～かもしれない)', targetWords: 50 },
  { id: 33, title: 'Bài 33 (N4)', desc: 'Thể Mệnh lệnh, Cấm chỉ & Ý nghĩa biển báo (命令形・禁止形)', targetWords: 36 },
  { id: 34, title: 'Bài 34 (N4)', desc: 'Làm theo hướng dẫn & Thứ tự hành động (～とおりに, ～あとで)', targetWords: 34 },
  { id: 35, title: 'Bài 35 (N4)', desc: 'Thể Điều kiện Giả định (条件形 ～ば, ～なら, ～ば～ほど)', targetWords: 34 },
  { id: 36, title: 'Bài 36 (N4)', desc: 'Mục đích & Sự thay đổi năng lực/thói quen (～ように, ～ようになります)', targetWords: 45 },
  { id: 37, title: 'Bài 37 (N4)', desc: 'Thể Bị động & Phát minh sáng chế (受身形 ～られます, Nによって)', targetWords: 40 },
  { id: 38, title: 'Bài 38 (N4)', desc: 'Danh từ hóa mệnh đề với の (～のは, ～のが, ～のを忘れました)', targetWords: 44 },
  { id: 39, title: 'Bài 39 (N4)', desc: 'Nguyên nhân dẫn đến Cảm xúc & Kết quả (～て, Nで, ～ので)', targetWords: 44 },
  { id: 40, title: 'Bài 40 (N4)', desc: 'Câu hỏi lồng trong mệnh đề & Thử làm (～か, ～かどうか, ～てみます)', targetWords: 62 },
  { id: 41, title: 'Bài 41 (N4)', desc: 'Kính ngữ Cho & Nhận (いただき, くださる, やる, ～ていただけませんか)', targetWords: 54 },
  { id: 42, title: 'Bài 42 (N4)', desc: 'Mục đích & Công dụng (～ために, ～のに, V-るのに使います)', targetWords: 44 },
  { id: 43, title: 'Bài 43 (N4)', desc: 'Phỏng đoán thị giác & Thể て来ます (～そうです, V-て来ます)', targetWords: 30 },
  { id: 44, title: 'Bài 44 (N4)', desc: 'Quá mức & Dễ / Khó làm (～すぎます, ～やすい, ～にくい)', targetWords: 41 },
  { id: 45, title: 'Bài 45 (N4)', desc: 'Giả định tình huống & Trái với kỳ vọng (～場合は, ～のに)', targetWords: 32 },
  { id: 46, title: 'Bài 46 (N4)', desc: 'Thời điểm hành động & Chắc chắn (～ところだ, ～たばかりだ, ～はずだ)', targetWords: 24 },
  { id: 47, title: 'Bài 47 (N4)', desc: 'Truyền đạt thông tin & Cảm quan (～そうです, ～ようです, 声/音/におい/味がします)', targetWords: 31 },
  { id: 48, title: 'Bài 48 (N4)', desc: 'Thể Sai khiến & Cho phép (使役形 ～させます, ～させてください)', targetWords: 24 },
  { id: 49, title: 'Bài 49 (N4)', desc: 'Tôn Kính Ngữ Sonkeigo (お+V+になります, Động từ tôn kính đặc biệt)', targetWords: 39 },
  { id: 50, title: 'Bài 50 (N4)', desc: 'Khiêm Nhường Ngữ Kenjougo (お+V+します, Động từ khiêm nhường & Tốt nghiệp N4)', targetWords: 43 }
];

class JapaneseAuthModule {
  constructor() {
    this.dbKey = 'nihongo_users_db';
    this.sessionKey = 'nihongo_current_user';
    this.selectedAvatar = 'shiba';
    this.currentTab = 'login'; // 'login' | 'register'
    this.currentUser = null;
    this.cloudSyncDebounceTimer = null;

    // Cấu hình Cloud Sync Endpoint (Tự động thích ứng giữa Localhost và Vercel)
    this.apiEndpoint = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
      ? 'https://nihongo-go-rho.vercel.app/api/sync'
      : '/api/sync';

    this.initDatabase();
    this.loadSession();
    this.setupListeners();
    this.initCloudSync();
  }

  // --------------------------------------------------------------------------
  // KHỞI TẠO CƠ SỞ DỮ LIỆU LOCAL
  // --------------------------------------------------------------------------
  initDatabase() {
    try {
      const existing = localStorage.getItem(this.dbKey);
      if (!existing) {
        // Tạo tài khoản mẫu Demo để học viên có thể trải nghiệm ngay
        const demoUser = {
          username: 'sakura_n5',
          email: 'sakura@nihongo.jp',
          displayName: 'Sakura Chan 🌸',
          passwordHash: this.hashPassword('123456'),
          avatar: 'miko',
          createdAt: new Date().toISOString(),
          lastLoginAt: new Date().toISOString(),
          profile: {
            currentJLPTLevel: 'N5',
            unlockedLesson: 1, // Mặc định Level 1 (xong Level 1 mới mở khóa Level 2)
            completedLessons: {},
            learnedWords: ['n5_001', 'n5_002', 'n5_003', 'n5_004', 'n5_005', 'n5_006', 'n5_007', 'n5_008', 'n5_009', 'n5_010'],
            wrongWords: [],
            exp: 340,
            level: 3,
            coins: 85,
            streak: 3,
            lastActiveDate: new Date().toISOString().slice(0, 10),
            badges: ['tan_binh_nhap_mon', 'hoc_tro_shiba']
          }
        };

        const initialDB = {
          'sakura_n5': demoUser
        };
        localStorage.setItem(this.dbKey, JSON.stringify(initialDB));
      }
    } catch (e) {
      console.warn('[Auth] Không thể khởi tạo database:', e);
    }
  }

  // --------------------------------------------------------------------------
  // HÀM HỖ TRỢ TRUY XUẤT DATABASE
  // --------------------------------------------------------------------------
  getUsersDB() {
    try {
      const data = localStorage.getItem(this.dbKey);
      return data ? JSON.parse(data) : {};
    } catch (e) {
      return {};
    }
  }

  saveUsersDB(db) {
    try {
      localStorage.setItem(this.dbKey, JSON.stringify(db));
    } catch (e) {
      console.error('[Auth] Lỗi lưu database:', e);
    }
  }

  // Mã hóa mật khẩu nhẹ nhàng (Base64 + Salt) cho môi trường local
  hashPassword(pwd) {
    const salt = 'nihongo_go_secret_salt_';
    return btoa(unescape(encodeURIComponent(salt + pwd)));
  }

  verifyPassword(pwd, hashed) {
    if (!hashed) return false;
    return this.hashPassword(pwd) === hashed;
  }

  // --------------------------------------------------------------------------
  // HỆ THỐNG ĐỒNG BỘ ĐÁM MÂY (CLOUD SYNC ENGINE)
  // Đảm bảo đăng nhập và bảo lưu học bạ trên mọi thiết bị (PC, Phone, iPad)
  // --------------------------------------------------------------------------
  // Đọc danh sách users từ Cloud Sync Serverless API
  async fetchCloudUsers() {
    try {
      const res = await fetch(this.apiEndpoint, {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        const data = await res.json();
        if (data && data.users) {
          return { success: true, users: data.users };
        }
      }
    } catch (e) {
      console.warn('[CloudSync] Lỗi fetchCloudUsers:', e.message);
    }
    return { success: false, users: {} };
  }

  // Lấy dữ liệu 1 học viên từ Cloud
  async fetchUserFromCloud(usernameOrEmail) {
    if (!usernameOrEmail) return null;
    const clean = usernameOrEmail.trim().toLowerCase();

    try {
      const res = await fetch(`${this.apiEndpoint}?username=${encodeURIComponent(clean)}`);
      if (res.ok) {
        const data = await res.json();
        if (data && data.user) return data.user;
      }
    } catch (e) {}

    // Fallback: Tìm trong danh sách toàn bộ users
    const { users } = await this.fetchCloudUsers();
    for (const key in users) {
      const u = users[key];
      if (u && (u.username?.toLowerCase() === clean || (u.email && u.email.toLowerCase() === clean))) {
        return u;
      }
    }

    return null;
  }

  // Lưu học viên lên Cloud qua Serverless API
  async saveUserToCloud(user) {
    if (!user || !user.username) return false;

    try {
      const res = await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user })
      });
      if (res.ok) {
        const data = await res.json();
        return !!data.success;
      }
    } catch (e) {
      console.warn('[CloudSync] Lỗi saveUserToCloud:', e.message);
    }
    return false;
  }

  // Tự động khởi tạo kết nối và kéo tài khoản từ Đám Mây khi mở trang
  initCloudSync() {
    setTimeout(async () => {
      try {
        console.log('[CloudSync] 🔄 Đang kiểm tra đồng bộ tài khoản từ Đám Mây...');
        const { success, users } = await this.fetchCloudUsers();
        if (success && users) {
          const db = this.getUsersDB();
          let changed = false;

          for (const key in users) {
            const cloudU = users[key];
            if (!cloudU || !cloudU.username) continue;

            if (!db[key]) {
              db[key] = cloudU;
              changed = true;
            } else {
              // Cập nhật tiến độ nếu Đám Mây cao hơn
              const localU = db[key];
              const cP = cloudU.profile || {};
              const lP = localU.profile || {};
              if ((cP.unlockedLesson || 1) > (lP.unlockedLesson || 1) || (cP.exp || 0) > (lP.exp || 0)) {
                localU.profile = {
                  ...lP,
                  ...cP,
                  unlockedLesson: Math.max(lP.unlockedLesson || 1, cP.unlockedLesson || 1),
                  exp: Math.max(lP.exp || 0, cP.exp || 0),
                  coins: Math.max(lP.coins || 0, cP.coins || 0),
                  streak: Math.max(lP.streak || 1, cP.streak || 1)
                };
                db[key] = localU;
                changed = true;
              }
            }
          }

          if (changed) {
            this.saveUsersDB(db);
            console.log('[CloudSync] ✅ Đã đồng bộ tài khoản từ Đám Mây thành công!');
          }

          // Cập nhật session hiện tại nếu có tiến độ mới hơn
          if (this.currentUser && db[this.currentUser.username]) {
            this.currentUser = db[this.currentUser.username];
            this.syncUserToProgressModule();
            this.renderHeaderAuthUI();
          }
        }
      } catch (e) {
        console.warn('[CloudSync] Khởi tạo tự động gặp lỗi:', e);
      }
    }, 1500);
  }

  // Nút cưỡng bức đồng bộ 2 chiều (Dành cho Profile Modal)
  async forceFullCloudSync() {
    try {
      if (this.currentUser) {
        await this.saveUserToCloud(this.currentUser);
      }
      const { success, users } = await this.fetchCloudUsers();
      if (success && users) {
        const db = this.getUsersDB();
        for (const k in users) {
          if (!db[k]) {
            db[k] = users[k];
          } else {
            const cP = users[k].profile || {};
            const lP = db[k].profile || {};
            db[k].profile = {
              ...lP,
              unlockedLesson: Math.max(lP.unlockedLesson || 1, cP.unlockedLesson || 1),
              exp: Math.max(lP.exp || 0, cP.exp || 0),
              coins: Math.max(lP.coins || 0, cP.coins || 0),
              streak: Math.max(lP.streak || 1, cP.streak || 1)
            };
          }
        }
        this.saveUsersDB(db);
        if (this.currentUser && db[this.currentUser.username]) {
          this.currentUser = db[this.currentUser.username];
          this.syncUserToProgressModule();
          this.renderHeaderAuthUI();
        }
        return { success: true, message: 'Đồng bộ Đám Mây thành công! Mọi học bạ đã được cập nhật.' };
      }
    } catch (e) {
      return { success: false, message: e.message };
    }
    return { success: false, message: 'Không thể kết nối đến máy chủ Đám Mây' };
  }

  // --------------------------------------------------------------------------
  // PHIÊN ĐĂNG NHẬP (SESSION MANAGEMENT)
  // --------------------------------------------------------------------------
  loadSession() {
    try {
      const currentUsername = localStorage.getItem(this.sessionKey);
      if (currentUsername) {
        const db = this.getUsersDB();
        if (db[currentUsername]) {
          this.currentUser = db[currentUsername];
          this.syncUserToProgressModule();
        } else {
          this.currentUser = null;
          localStorage.removeItem(this.sessionKey);
        }
      }
    } catch (e) {
      this.currentUser = null;
    }

    this.renderHeaderAuthUI();
  }

  isLoggedIn() {
    return this.currentUser !== null;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  // Đồng bộ tiến độ từ tài khoản sang ProgressModule & Flashcard
  syncUserToProgressModule() {
    if (!this.currentUser || !this.currentUser.profile) return;

    const p = this.currentUser.profile;

    if (window.progressModule) {
      window.progressModule.exp = p.exp || 0;
      window.progressModule.level = p.level || 1;
      window.progressModule.coins = p.coins !== undefined ? p.coins : 50;
      window.progressModule.streak = p.streak || 1;
      window.progressModule.lastActiveDate = p.lastActiveDate || '';
      window.progressModule.userTitle = window.progressModule.getTitleForLevel(window.progressModule.level);
      window.progressModule.saveProfile();
    }

    if (Array.isArray(p.learnedWords)) {
      localStorage.setItem('jlpt_n5_mastered_words', JSON.stringify(p.learnedWords));
      localStorage.setItem('jlpt_n5_mastered', JSON.stringify(p.learnedWords));
      if (window.flashcardModule) {
        window.flashcardModule.loadSavedProgress();
        window.flashcardModule.updateHeaderMasteryStats();
      }
    }

    if (window.app) {
      window.app.loadUserData();
      window.app.updateUserStatsUI();
    }
  }

  // Tự động lưu tiến độ hiện tại từ ProgressModule và Game vào tài khoản
  autoSaveProgress() {
    if (!this.isLoggedIn()) return;

    try {
      const db = this.getUsersDB();
      const user = db[this.currentUser.username];
      if (!user) return;

      const masteredList = Array.from(window.flashcardModule?.masteredIds || []);
      const mistakesList = window.guessGame?.mistakesList || [];

      user.profile.exp = window.progressModule?.exp || user.profile.exp;
      user.profile.level = window.progressModule?.level || user.profile.level;
      user.profile.coins = window.progressModule?.coins || user.profile.coins;
      user.profile.streak = window.progressModule?.streak || user.profile.streak;
      user.profile.lastActiveDate = window.progressModule?.lastActiveDate || user.profile.lastActiveDate;
      user.profile.learnedWords = masteredList;
      user.profile.wrongWords = mistakesList;

      this.saveUsersDB(db);
      this.currentUser = user;
      this.renderHeaderAuthUI();

      // Tự động lưu lên Cloud (Debounce 2 giây để gom các thao tác liên tiếp)
      clearTimeout(this.cloudSyncDebounceTimer);
      this.cloudSyncDebounceTimer = setTimeout(() => {
        if (this.currentUser) {
          this.saveUserToCloud(this.currentUser).then(ok => {
            if (ok) console.log(`[CloudSync] ☁️ Đã đồng bộ tiến độ học viên ${user.displayName} lên Đám Mây!`);
          }).catch(e => console.warn('[CloudSync] Lỗi autoSave:', e));
        }
      }, 2000);

      console.log(`[Auth] Đã lưu tiến độ cho học viên: ${user.displayName}`);
    } catch (e) {
      console.warn('[Auth] Lỗi autoSaveProgress:', e);
    }
  }

  // --------------------------------------------------------------------------
  // ĐĂNG KÝ TÀI KHOẢN MỚI
  // --------------------------------------------------------------------------
  async register(formData) {
    const { displayName, username, email, password, confirmPassword, avatar } = formData;

    const errorBox = document.getElementById('auth-error-message');
    const setError = (msg) => {
      if (errorBox) {
        errorBox.classList.remove('hidden');
        errorBox.style.background = '#FFF5F5';
        errorBox.style.borderColor = '#FF8787';
        errorBox.style.color = '#C92A2A';
        errorBox.innerHTML = `<strong>👩‍🏫 Cô Tanaka nhắc nhở:</strong> ${msg}`;
      }
    };
    const setNotice = (msg) => {
      if (errorBox) {
        errorBox.classList.remove('hidden');
        errorBox.style.background = '#EBFBEE';
        errorBox.style.borderColor = '#69DB7C';
        errorBox.style.color = '#2B8A3E';
        errorBox.innerHTML = `<strong>🌸 Đám Mây:</strong> ${msg}`;
      }
    };

    // 1. Kiểm tra tính hợp lệ
    const cleanName = (displayName || '').trim();
    const cleanUser = (username || '').trim().toLowerCase();
    const cleanEmail = (email || '').trim().toLowerCase();
    const cleanPwd = (password || '').trim();

    if (!cleanName) {
      setError('Cái em này! Chưa nhập tên hiển thị thì lấy danh tính đâu mà ghi danh vào lớp N5?!');
      return false;
    }

    if (!cleanUser || cleanUser.length < 3) {
      setError('Tên đăng nhập quá ngắn! Em phải đặt tối thiểu 3 ký tự trở lên nghe chưa!');
      return false;
    }

    if (!/^[a-zA-Z0-9_]+$/.test(cleanUser)) {
      setError('Tên đăng nhập chỉ được chứa chữ cái không dấu, chữ số và dấu gạch dưới (_)!');
      return false;
    }

    if (!cleanPwd || cleanPwd.length < 6) {
      setError('Mật khẩu hời hợt thế à? Tối thiểu 6 ký tự để bảo vệ thành quả cày cuốc N5 chứ!');
      return false;
    }

    if (cleanPwd !== (confirmPassword || '').trim()) {
      setError('Hai lần nhập mật khẩu không khớp nhau! Em nhìn thật kỹ từng ký tự rồi gõ lại xem!');
      return false;
    }

    const db = this.getUsersDB();
    if (db[cleanUser]) {
      setError(`Tên đăng nhập 「<strong>${cleanUser}</strong>」 đã có học viên khác sử dụng rồi! Em chọn tên khác ngay!`);
      return false;
    }

    // 2. Tạo tài khoản mới với hồ sơ N5 ban đầu
    const newUser = {
      username: cleanUser,
      email: cleanEmail || `${cleanUser}@nihongo.local`,
      displayName: cleanName,
      passwordHash: this.hashPassword(cleanPwd),
      avatar: avatar || this.selectedAvatar || 'shiba',
      createdAt: new Date().toISOString(),
      lastLoginAt: new Date().toISOString(),
      profile: {
        currentJLPTLevel: 'N5',
        unlockedLesson: 1, // Mặc định Bài 1
        completedLessons: {},
        learnedWords: [],
        wrongWords: [],
        exp: 0,
        level: 1,
        coins: 50, // Quà tân thủ 50 coins
        streak: 1,
        lastActiveDate: new Date().toISOString().slice(0, 10),
        badges: ['tan_binh_nhap_mon']
      }
    };

    db[cleanUser] = newUser;
    this.saveUsersDB(db);

    // 3. Đăng nhập ngay
    this.currentUser = newUser;
    localStorage.setItem(this.sessionKey, cleanUser);

    this.syncUserToProgressModule();
    this.renderHeaderAuthUI();
    this.closeAuthModal();

    // 4. Đồng bộ lên Cloud ngay để đăng nhập được trên mọi thiết bị
    setNotice('☁️ Đang lưu tài khoản lên Đám Mây...');
    this.saveUserToCloud(newUser).then(ok => {
      if (ok) console.log(`[CloudSync] ☁️ Đã sao lưu tài khoản tân binh ${cleanUser} lên Cloud!`);
    });

    if (window.soundSystem) window.soundSystem.playVictory();
    if (window.mascot) {
      window.mascot.setMood(
        'celebrate',
        `🎉 Hoan hô! Chào mừng tân binh ${cleanName} đã gia nhập Nihongo Go! Bắt đầu từ Bài 1 nhé! 🌸`,
        5000
      );
    }

    return true;
  }

  // --------------------------------------------------------------------------
  // ĐĂNG NHẬP (HỖ TRỢ ĐA THIẾT BỊ QUA CLOUD SYNC)
  // --------------------------------------------------------------------------
  async login(formData) {
    const { usernameOrEmail, password, remember } = formData;

    const errorBox = document.getElementById('auth-error-message');
    const setError = (msg) => {
      if (errorBox) {
        errorBox.classList.remove('hidden');
        errorBox.style.background = '#FFF5F5';
        errorBox.style.borderColor = '#FF8787';
        errorBox.style.color = '#C92A2A';
        errorBox.innerHTML = `<strong>👩‍🏫 Cô Tanaka nhắc nhở:</strong> ${msg}`;
      }
    };
    const setNotice = (msg) => {
      if (errorBox) {
        errorBox.classList.remove('hidden');
        errorBox.style.background = '#EBFBEE';
        errorBox.style.borderColor = '#69DB7C';
        errorBox.style.color = '#2B8A3E';
        errorBox.innerHTML = `<strong>🌸 Đám Mây:</strong> ${msg}`;
      }
    };

    const cleanInput = (usernameOrEmail || '').trim().toLowerCase();
    const cleanPwd = (password || '').trim();

    if (!cleanInput) {
      setError('Chưa điền tên đăng nhập hoặc email mà đã bấm đăng nhập rồi à em?');
      return false;
    }

    if (!cleanPwd) {
      setError('Em quên nhập mật khẩu rồi! Điền đầy đủ vào xem nào!');
      return false;
    }

    let db = this.getUsersDB();
    let foundUser = null;

    // 1. Tìm trong bộ nhớ Local trước (0ms)
    for (const key in db) {
      const u = db[key];
      if (u && (u.username.toLowerCase() === cleanInput || (u.email && u.email.toLowerCase() === cleanInput))) {
        foundUser = u;
        break;
      }
    }

    // 2. Nếu không thấy ở Local, tìm trên Đám Mây (Cloud Sync)
    if (!foundUser) {
      setNotice('🔍 Đang kiểm tra tài khoản trên Đám Mây thời gian thực...');
      try {
        const cloudUser = await this.fetchUserFromCloud(cleanInput);
        if (cloudUser && cloudUser.username) {
          foundUser = cloudUser;
          // Lưu vào local cache
          db[foundUser.username] = foundUser;
          this.saveUsersDB(db);
        }
      } catch (e) {
        console.warn('[CloudSync] Lỗi tìm tài khoản Cloud:', e);
      }
    }

    if (!foundUser) {
      setError(`Không tìm thấy tài khoản 「<strong>${cleanInput}</strong>」 trong hệ thống! Em kiểm tra lại hoặc bấm tab Đăng Ký nhé!`);
      return false;
    }

    // 3. Xác thực mật khẩu
    let isCorrect = this.verifyPassword(cleanPwd, foundUser.passwordHash);

    if (!isCorrect) {
      // Có thể tài khoản trên máy này có mật khẩu cũ, thử tải lại thông tin mới nhất từ Cloud
      setNotice('🔍 Đang kiểm tra mật khẩu từ Đám Mây...');
      try {
        const freshCloud = await this.fetchUserFromCloud(cleanInput);
        if (freshCloud && freshCloud.passwordHash && this.verifyPassword(cleanPwd, freshCloud.passwordHash)) {
          foundUser = freshCloud;
          db[foundUser.username] = foundUser;
          this.saveUsersDB(db);
          isCorrect = true;
        }
      } catch (e) {}
    }

    if (!isCorrect) {
      setError('Sai mật khẩu rồi! Đứng thẳng lưng nhớ lại xem mình đã đặt mật khẩu gì nào! Hoặc bấm "Quên mật khẩu?" bên dưới.');
      return false;
    }

    // 4. Đăng nhập thành công
    foundUser.lastLoginAt = new Date().toISOString();
    db[foundUser.username] = foundUser;
    this.saveUsersDB(db);

    this.currentUser = foundUser;
    localStorage.setItem(this.sessionKey, foundUser.username);

    this.syncUserToProgressModule();
    this.renderHeaderAuthUI();
    this.closeAuthModal();

    // Đồng bộ lại với Cloud
    this.saveUserToCloud(foundUser);

    if (window.soundSystem) window.soundSystem.playCorrect();
    if (window.mascot) {
      window.mascot.setMood(
        'happy',
        `🌸 Chào mừng học viên ${foundUser.displayName} quay trở lại! Bạn đang ở Bài ${foundUser.profile?.unlockedLesson || 1}/25! 💪`,
        4500
      );
    }

    return true;
  }

  // --------------------------------------------------------------------------
  // ĐĂNG XUẤT
  // --------------------------------------------------------------------------
  logout() {
    if (!this.isLoggedIn()) return;

    const confirmLogout = confirm(`Học viên ${this.currentUser.displayName} có chắc chắn muốn đăng xuất không?`);
    if (!confirmLogout) return;

    // Lưu lại tiến độ lần cuối
    this.autoSaveProgress();

    this.currentUser = null;
    localStorage.removeItem(this.sessionKey);

    // Chuyển về chế độ Khách (Guest) mặc định
    if (window.progressModule) {
      window.progressModule.loadProfile();
    }

    this.renderHeaderAuthUI();

    if (window.soundSystem) window.soundSystem.playPop();
    if (window.mascot) {
      window.mascot.say('Đã đăng xuất tài khoản. Hẹn gặp lại bạn ở buổi học tiếp theo nhé! 👋🌸', 4000);
    }
  }

  // --------------------------------------------------------------------------
  // TIỆN ÍCH: ĐĂNG NHẬP NHANH TÀI KHOẢN TRẢI NGHIỆM (DEMO 1-CLICK)
  // --------------------------------------------------------------------------
  quickDemoLogin() {
    this.login({
      usernameOrEmail: 'sakura_n5',
      password: '123456',
      remember: true
    });
  }

  // Quên mật khẩu / Khôi phục & Đồng bộ lên Đám Mây
  async forgotPassword(usernameOrEmail) {
    const input = prompt('Nhập tên đăng nhập hoặc email cần khôi phục / đặt mật khẩu mới:', usernameOrEmail || '');
    if (!input) return;

    const db = this.getUsersDB();
    const clean = input.trim().toLowerCase();
    let found = null;

    for (const k in db) {
      if (db[k].username.toLowerCase() === clean || (db[k].email && db[k].email.toLowerCase() === clean)) {
        found = db[k];
        break;
      }
    }

    if (!found) {
      // Tìm trên Cloud
      found = await this.fetchUserFromCloud(clean);
    }

    if (!found) {
      alert(`Không tìm thấy tài khoản "${input}" trong hệ thống!`);
      return;
    }

    const newPwd = prompt(`Học viên: ${found.displayName} (${found.username})\nNhập mật khẩu mới bạn muốn đặt:`, '123456');
    if (!newPwd || newPwd.trim().length < 6) {
      alert('Mật khẩu mới phải có tối thiểu 6 ký tự!');
      return;
    }

    found.passwordHash = this.hashPassword(newPwd.trim());
    db[found.username] = found;
    this.saveUsersDB(db);

    // Đồng bộ ngay lên Đám Mây
    await this.saveUserToCloud(found);

    alert(`✅ Đổi mật khẩu thành công!\nMật khẩu mới của bạn là: "${newPwd.trim()}". Bạn có thể đăng nhập trên mọi thiết bị ngay bây giờ! 🌸`);
  }

  // --------------------------------------------------------------------------
  // HOÀN THÀNH BÀI HỌC & MỞ KHÓA BÀI TIẾP THEO (1 ĐẾN 25)
  // --------------------------------------------------------------------------
  completeLesson(lessonNumber, lessonStats = {}) {
    let unlocked = 1;
    let completedLessons = {};

    if (this.isLoggedIn()) {
      const p = this.currentUser.profile;
      if (!p.completedLessons) p.completedLessons = {};

      p.completedLessons[lessonNumber] = {
        completed: true,
        stars: lessonStats.stars || 3,
        vocabDone: true,
        gameScore: lessonStats.gameScore || 90,
        pronunScore: lessonStats.pronunScore || 85,
        completedAt: new Date().toISOString()
      };

      // Mở khóa bài tiếp theo nếu bài vừa hoàn thành là bài cao nhất (cho phép đến Bài 50 nếu đã đăng nhập)
      if (lessonNumber === p.unlockedLesson && lessonNumber < 50) {
        p.unlockedLesson = lessonNumber + 1;
      }
      unlocked = p.unlockedLesson;
      completedLessons = p.completedLessons;

      this.autoSaveProgress();
      this.renderHeaderAuthUI();
    } else {
      // Chế độ khách (Lưu vào localStorage để không gián đoạn trải nghiệm)
      try {
        unlocked = parseInt(localStorage.getItem('nihongo_guest_unlocked') || '1', 10);
        completedLessons = JSON.parse(localStorage.getItem('nihongo_guest_completed') || '{}');
      } catch (e) {
        unlocked = 1;
        completedLessons = {};
      }

      completedLessons[lessonNumber] = {
        completed: true,
        stars: lessonStats.stars || 3,
        vocabDone: true,
        gameScore: lessonStats.gameScore || 90,
        pronunScore: lessonStats.pronunScore || 85,
        completedAt: new Date().toISOString()
      };

      if (lessonNumber === unlocked && lessonNumber < 25) {
        unlocked = lessonNumber + 1;
      }

      try {
        localStorage.setItem('nihongo_guest_unlocked', unlocked.toString());
        localStorage.setItem('nihongo_guest_completed', JSON.stringify(completedLessons));
      } catch (e) {}
    }

    // Thưởng EXP & Coins
    if (window.progressModule) {
      window.progressModule.addExp(50);
      window.progressModule.addCoins(10);
    }

    if (window.soundSystem) window.soundSystem.playVictory();
    if (window.mascot) {
      const maxL = unlocked > 25 ? 50 : 25;
      window.mascot.setMood(
        'celebrate',
        `🎖️ XUẤT SẮC! Em đã vượt qua Bài ${lessonNumber} và mở khóa BÀI ${unlocked}/${maxL}! Nhận ngay +50 EXP & +10 Coins! 🏆🌸`,
        5000
      );
    }

    // Đồng bộ lại giao diện Roadmap nếu đang mở
    if (window.roadmapModule && typeof window.roadmapModule.render === 'function') {
      window.roadmapModule.render();
    }

    return { unlocked, completedLessons };
  }

  getUnlockedLesson() {
    if (this.isLoggedIn()) {
      return this.currentUser?.profile?.unlockedLesson || 1;
    }
    try {
      return parseInt(localStorage.getItem('nihongo_guest_unlocked') || '1', 10);
    } catch (e) {
      return 1;
    }
  }

  getCompletedLessons() {
    if (this.isLoggedIn()) {
      return this.currentUser?.profile?.completedLessons || {};
    }
    try {
      return JSON.parse(localStorage.getItem('nihongo_guest_completed') || '{}');
    } catch (e) {
      return {};
    }
  }

  // Kiểm tra quyền truy cập bài học
  checkLessonAccess(lessonNumber) {
    if (lessonNumber === 1) return true;

    // Yêu cầu bắt buộc đối với cấp độ N4 (Bài 26 - 30):
    if (lessonNumber >= 26) {
      if (!this.isLoggedIn()) {
        alert('🔒 Cấp độ Trung Cấp JLPT N4 (Bài 26 - 30) yêu cầu ĐĂNG NHẬP tài khoản học viên để bảo lưu học bạ!\nVui lòng đăng nhập hoặc tạo tài khoản miễn phí. 👩‍🏫');
        this.openAuthModal('login');
        return false;
      }

      const p = this.currentUser?.profile;
      let completedN5Count = 0;
      if (p && p.completedLessons) {
        for (let i = 1; i <= 25; i++) {
          if (p.completedLessons[i]?.completed) completedN5Count++;
        }
      }
      if (completedN5Count < 25) {
        alert(`🔒 Cổng N4 đang được niêm phong!\nEm cần hoàn thành đủ 25 Bài học N5 trước khi mở khóa Bài 26 nhé! Hiện tại em mới xong ${completedN5Count}/25 Bài. 👩‍🏫`);
        return false;
      }
    }

    const unlocked = this.getUnlockedLesson();
    if (lessonNumber > unlocked) {
      alert(`🔒 Bài ${lessonNumber} đang bị khóa!\nEm cần hoàn thành Bài ${unlocked} trước khi học tiếp nhé! 👩‍🏫`);
      return false;
    }

    return true;
  }

  // --------------------------------------------------------------------------
  // MODAL LỘ TRÌNH 25 BÀI HỌC MINNA NO NIHONGO N5
  // --------------------------------------------------------------------------
  openLessonSelector() {
    let modal = document.getElementById('lesson-selector-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'lesson-selector-modal';
      modal.className = 'modal-overlay';
      modal.onclick = (e) => {
        if (e.target === modal) this.closeLessonSelector();
      };
      document.body.appendChild(modal);
    }

    modal.classList.remove('hidden');
    modal.classList.add('active');
    modal.style.display = 'flex';

    this.renderLessonSelectorContent();
    if (window.soundSystem) window.soundSystem.playPop();
  }

  closeLessonSelector() {
    const modal = document.getElementById('lesson-selector-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('active');
      modal.style.display = 'none';
    }
  }

  renderLessonSelectorContent() {
    const modal = document.getElementById('lesson-selector-modal');
    if (!modal) return;

    const unlocked = this.isLoggedIn() ? (this.currentUser.profile?.unlockedLesson || 1) : 1;
    const completedObj = this.isLoggedIn() ? (this.currentUser.profile?.completedLessons || {}) : {};

    modal.innerHTML = `
      <div class="modal-card lesson-modal-card">
        
        <div class="modal-header lesson-modal-header">
          <div class="lesson-header-title">
            <span class="lesson-header-icon">🗺️</span>
            <div>
              <h3>LỘ TRÌNH 25 BÀI MINNA NO NIHONGO N5</h3>
              <p class="lesson-header-sub">
                ${this.isLoggedIn() 
                  ? `Học viên: <strong>${this.currentUser.displayName}</strong> • Đang học Bài ${unlocked}/25`
                  : 'Chế độ Khách (Mở sẵn Bài 1) • Đăng nhập để lưu tiến độ và mở khóa cả 25 bài!'}
              </p>
            </div>
          </div>
          <button class="modal-close-btn" onclick="window.authModule.closeLessonSelector()">✕</button>
        </div>

        <div class="modal-body lesson-modal-body">
          <div class="lessons-grid-container">
            ${MINNA_LESSONS_N5.map(l => {
              const isUnlocked = l.id <= unlocked;
              const isCompleted = completedObj[l.id]?.completed;
              const stars = completedObj[l.id]?.stars || 0;
              const starStr = '⭐'.repeat(stars) || '';

              let statusClass = 'locked';
              if (isCompleted) statusClass = 'completed';
              else if (isUnlocked) statusClass = 'active';

              return `
                <div class="lesson-card-item ${statusClass}" onclick="window.authModule.selectLessonFromModal(${l.id})">
                  <div class="lesson-item-top">
                    <span class="lesson-number-badge">Bài ${l.id}</span>
                    <span class="lesson-status-icon">
                      ${isCompleted ? '✅' : isUnlocked ? '📖' : '🔒'}
                    </span>
                  </div>
                  <div class="lesson-item-title">${l.desc}</div>
                  <div class="lesson-item-meta">
                    <span>${starStr}</span>
                    <small>${l.targetWords} từ vựng N5</small>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <div class="modal-footer lesson-modal-footer">
          <button class="btn btn-secondary" onclick="window.authModule.closeLessonSelector()">
            Đóng bảng bài học
          </button>
        </div>

      </div>
    `;
  }

  selectLessonFromModal(lessonId) {
    if (!this.checkLessonAccess(lessonId)) return;

    this.closeLessonSelector();

    // Nạp từ vựng trọng tâm của bài đó vào Flashcard và Game
    const lesson = window.LESSONS_DATA ? window.LESSONS_DATA.getLesson('N5', lessonId) : null;
    const lessonVocab = (lesson && lesson.vocab && lesson.vocab.length > 0) 
      ? lesson.vocab 
      : (window.JLPT_DATA?.n5 || []);

    if (window.flashcardModule && typeof window.flashcardModule.init === 'function') {
      window.flashcardModule.init(lessonVocab);
    }

    if (window.guessGame && typeof window.guessGame.start === 'function') {
      window.guessGame.start(lessonVocab);
    }

    if (window.app) {
      window.app.switchTab('flashcard');
    }

    if (window.soundSystem) window.soundSystem.playCorrect();
    if (window.mascot) {
      const topicName = lesson ? lesson.topicVi : MINNA_LESSONS_N5[lessonId - 1].desc;
      window.mascot.say(`Đã kích hoạt Bài ${lessonId}: ${topicName}! Có ${lessonVocab.length} từ vựng trọng tâm cần chinh phục! 🌸`, 4000);
    }
  }

  // --------------------------------------------------------------------------
  // MODAL ĐĂNG NHẬP & ĐĂNG KÝ PHONG CÁCH ANIME NHẬT BẢN
  // --------------------------------------------------------------------------
  openAuthModal(tab = 'login', customNotice = '') {
    this.currentTab = tab;

    let modal = document.getElementById('user-auth-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'user-auth-modal';
      modal.className = 'modal-overlay';
      modal.onclick = (e) => {
        if (e.target === modal) this.closeAuthModal();
      };
      document.body.appendChild(modal);
    }

    modal.classList.remove('hidden');
    modal.classList.add('active');
    modal.style.display = 'flex';

    this.renderAuthModalContent(customNotice);

    if (window.soundSystem) window.soundSystem.playPop();
  }

  closeAuthModal() {
    const modal = document.getElementById('user-auth-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('active');
      modal.style.display = 'none';
    }
  }

  switchAuthTab(tab) {
    this.currentTab = tab;
    this.renderAuthModalContent();
    if (window.soundSystem) window.soundSystem.playPop();
  }

  selectRegisterAvatar(avatarId) {
    this.selectedAvatar = avatarId;
    document.querySelectorAll('.avatar-pick-card').forEach(card => {
      card.classList.toggle('active', card.getAttribute('data-avatar-id') === avatarId);
    });
    if (window.soundSystem) window.soundSystem.playPop();
  }

  renderAuthModalContent(customNotice = '') {
    const modal = document.getElementById('user-auth-modal');
    if (!modal) return;

    modal.innerHTML = `
      <div class="modal-card anime-auth-card">
        
        <!-- HEADER MODAL PHONG CÁCH NHẬT BẢN -->
        <div class="auth-card-hero">
          <div class="hero-sakura-deco">🌸 ⛩️ 🌸</div>
          <h3>CỔNG HỌC VIÊN NIHONGO GO!</h3>
          <p>Lưu trữ đám mây • Đồng bộ 25 Bài Minna • Vinh danh Bảng vàng N5</p>
          <button class="modal-close-btn auth-hero-close" onclick="window.authModule.closeAuthModal()">✕</button>
        </div>

        <!-- THANH CHUYỂN TAB (ĐĂNG NHẬP / ĐĂNG KÝ) -->
        <div class="auth-tabs-nav">
          <button class="auth-tab-btn ${this.currentTab === 'login' ? 'active' : ''}" onclick="window.authModule.switchAuthTab('login')">
            🔑 Đăng Nhập
          </button>
          <button class="auth-tab-btn ${this.currentTab === 'register' ? 'active' : ''}" onclick="window.authModule.switchAuthTab('register')">
            ✨ Đăng Ký Tài Khoản Mới
          </button>
        </div>

        <!-- NỘI DUNG MODAL BODY -->
        <div class="modal-body auth-modal-body">
          
          <!-- Thông báo tùy biến (nếu có, ví dụ: nhắc đăng nhập để sang Bài 2) -->
          ${customNotice ? `
            <div class="auth-notice-banner">
              ${customNotice}
            </div>
          ` : ''}

          <!-- Hộp thông báo lỗi phong cách Cô Tanaka -->
          <div id="auth-error-message" class="auth-error-box hidden"></div>

          ${this.currentTab === 'login' ? this.renderLoginFormHTML() : this.renderRegisterFormHTML()}

        </div>

      </div>
    `;
  }

  // HTML FORM ĐĂNG NHẬP
  renderLoginFormHTML() {
    return `
      <form class="auth-form" onsubmit="event.preventDefault(); window.authModule.handleLoginSubmit(this);">
        
        <div class="auth-field-group">
          <label>Tên đăng nhập hoặc Email:</label>
          <div class="auth-input-wrapper">
            <span class="input-icon">👤</span>
            <input type="text" name="usernameOrEmail" class="auth-input" placeholder="Ví dụ: sakura_n5 hoặc email..." required autofocus>
          </div>
        </div>

        <div class="auth-field-group">
          <label>Mật khẩu:</label>
          <div class="auth-input-wrapper">
            <span class="input-icon">🔒</span>
            <input type="password" name="password" class="auth-input" placeholder="Nhập mật khẩu của em..." required>
          </div>
        </div>

        <div class="auth-options-row">
          <label class="remember-label">
            <input type="checkbox" name="remember" checked> Ghi nhớ đăng nhập
          </label>
          <button type="button" class="btn-forgot-pwd" onclick="window.authModule.forgotPassword()">
            Quên mật khẩu?
          </button>
        </div>

        <div class="auth-submit-row">
          <button type="submit" class="btn btn-primary btn-auth-submit">
            🌸 Đăng Nhập Vào Lớp Học
          </button>
        </div>

        <div class="auth-demo-divider">
          <span>hoặc trải nghiệm nhanh không cần tạo tài khoản</span>
        </div>

        <div class="auth-quick-actions">
          <button type="button" class="btn btn-secondary btn-demo-quick" onclick="window.authModule.quickDemoLogin()">
            🚀 Dùng ngay Tài khoản Mẫu (Sakura Chan • Đã mở Bài 3)
          </button>
        </div>

      </form>
    `;
  }

  // HTML FORM ĐĂNG KÝ
  renderRegisterFormHTML() {
    return `
      <form class="auth-form" onsubmit="event.preventDefault(); window.authModule.handleRegisterSubmit(this);">
        
        <div class="auth-field-group">
          <label>Tên hiển thị (Tên thật hoặc biệt danh trong lớp):</label>
          <div class="auth-input-wrapper">
            <span class="input-icon">📛</span>
            <input type="text" name="displayName" class="auth-input" placeholder="Ví dụ: Minh Đức, Sakura, Kenji..." required>
          </div>
        </div>

        <div class="auth-fields-split">
          <div class="auth-field-group">
            <label>Tên đăng nhập:</label>
            <div class="auth-input-wrapper">
              <span class="input-icon">👤</span>
              <input type="text" name="username" class="auth-input" placeholder="duc_n5, sakura..." required>
            </div>
          </div>
          <div class="auth-field-group">
            <label>Email (tùy chọn):</label>
            <div class="auth-input-wrapper">
              <span class="input-icon">✉️</span>
              <input type="email" name="email" class="auth-input" placeholder="email@gmail.com">
            </div>
          </div>
        </div>

        <div class="auth-fields-split">
          <div class="auth-field-group">
            <label>Mật khẩu (≥ 6 ký tự):</label>
            <div class="auth-input-wrapper">
              <span class="input-icon">🔒</span>
              <input type="password" name="password" class="auth-input" placeholder="Tối thiểu 6 ký tự" required>
            </div>
          </div>
          <div class="auth-field-group">
            <label>Xác nhận mật khẩu:</label>
            <div class="auth-input-wrapper">
              <span class="input-icon">🔑</span>
              <input type="password" name="confirmPassword" class="auth-input" placeholder="Nhập lại mật khẩu" required>
            </div>
          </div>
        </div>

        <!-- BỘ CHỌN 6 AVATAR HOẠT HÌNH NHẬT BẢN -->
        <div class="auth-avatar-selector-section">
          <label class="avatar-pick-heading">Chọn Avatar Nhân Vật Đại Diện Của Em:</label>
          <div class="avatar-picks-grid">
            ${AVATAR_LIST.map(av => `
              <div class="avatar-pick-card ${this.selectedAvatar === av.id ? 'active' : ''}" 
                   data-avatar-id="${av.id}" 
                   onclick="window.authModule.selectRegisterAvatar('${av.id}')">
                <div class="avatar-pick-circle" style="background: ${av.color};">
                  ${av.emoji}
                </div>
                <div class="avatar-pick-name">${av.name}</div>
                <div class="avatar-pick-role">${av.title}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="auth-submit-row">
          <button type="submit" class="btn btn-primary btn-auth-submit">
            🎌 Hoàn Tất Đăng Ký & Bắt Đầu Học Bài 1
          </button>
        </div>

      </form>
    `;
  }

  handleLoginSubmit(form) {
    const data = {
      usernameOrEmail: form.usernameOrEmail.value,
      password: form.password.value,
      remember: form.remember.checked
    };
    this.login(data);
  }

  handleRegisterSubmit(form) {
    const data = {
      displayName: form.displayName.value,
      username: form.username.value,
      email: form.email?.value || '',
      password: form.password.value,
      confirmPassword: form.confirmPassword.value,
      avatar: this.selectedAvatar
    };
    this.register(data);
  }

  // --------------------------------------------------------------------------
  // RENDER GIAO DIỆN HEADER PROFILE (WIDGET GÓC PHẢI)
  // --------------------------------------------------------------------------
  renderHeaderAuthUI() {
    let container = document.getElementById('auth-header-container');
    if (!container) {
      // Tự động tìm vị trí thích hợp trên thanh header
      const hudBadges = document.querySelector('.user-hud-badges');
      if (hudBadges) {
        container = document.createElement('div');
        container.id = 'auth-header-container';
        container.className = 'auth-header-container';
        hudBadges.appendChild(container);
      } else {
        return;
      }
    }

    if (!this.isLoggedIn()) {
      // Khi CHƯA ĐĂNG NHẬP: Nút nổi bật "🔑 Đăng Nhập" (vừa vặn mọi màn hình điện thoại)
      container.innerHTML = `
        <button class="btn-auth-trigger" onclick="window.authModule.openAuthModal('login')" title="Đăng nhập tài khoản để lưu lộ trình bài học">
          <span>🔑</span> Đăng Nhập
        </button>
      `;
    } else {
      // Khi ĐÃ ĐĂNG NHẬP: Avatar nhân vật, Tên học viên, Huy hiệu N5/N4 Bài X và Nút Đăng xuất
      const user = this.currentUser;
      const avatarObj = AVATAR_LIST.find(a => a.id === user.avatar) || AVATAR_LIST[0];
      const unlockedLesson = user.profile?.unlockedLesson || 1;
      const currentLevel = user.profile?.currentJLPTLevel || (unlockedLesson > 25 ? 'N4' : 'N5');
      const maxL = unlockedLesson > 25 ? 50 : 25;

      container.innerHTML = `
        <div class="user-profile-header-widget">
          
          <!-- Avatar nhân vật -->
          <div class="user-header-avatar" style="background: ${avatarObj.color};" onclick="window.authModule.openLessonSelector()" title="Nhân vật: ${avatarObj.name} • Bấm để xem Lộ trình bài học">
            <span>${avatarObj.emoji}</span>
          </div>

          <!-- Thông tin tên & cấp độ bài học -->
          <div class="user-header-info" onclick="window.authModule.openLessonSelector()" title="Bấm xem Lộ trình bài học Minna">
            <span class="user-header-name" title="${user.displayName}">${user.displayName}</span>
            <span class="user-header-badge">${currentLevel} • Bài ${unlockedLesson}/${maxL} 🏆</span>
          </div>

          <!-- Nút Đăng xuất -->
          <button class="btn-header-logout" onclick="window.authModule.logout()" title="Đăng xuất khỏi tài khoản ${user.username}">
            🚪
          </button>

        </div>
      `;
    }
  }

  setupListeners() {
    // Tự động gọi render Header khi DOM sẵn sàng
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.renderHeaderAuthUI());
    } else {
      this.renderHeaderAuthUI();
    }
  }
}

// Khởi tạo instance toàn cục sẵn sàng sử dụng
window.authModule = new JapaneseAuthModule();
