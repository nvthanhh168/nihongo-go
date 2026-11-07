// ============================================================================
// HỆ THỐNG LINH VẬT HOẠT HÌNH & MINH HỌA HỌC TIẾNG NHẬT N5 (MASCOT ENGINE)
// Bao gồm 2 nhân vật:
// 1. Shiba Sensei (柴先生) - Chú chó Shiba đáng yêu, trợ lý học vui vẻ
// 2. Tanaka-sensei (田中先生 / Kibishii Sensei) - Cô giáo khó tính đeo kính, gõ thước chỉ bảng
// Đầy đủ 5 trạng thái hoạt hình CSS Keyframes thực sự:
// - idle: Chớp mắt, vẫy tai/tóc nhẹ nhàng
// - listening: Đeo tai nghe, sóng âm nhấp nhô khi bấm Micro
// - happy: Nhảy múa, bắn tim / hoa anh đào khi đạt điểm cao
// - strict / angry: Đẩy kính chớp sáng, nhíu mày, gõ thước khi phát âm sai/hết giờ
// - encouraging: Gật đầu cổ vũ khi đạt điểm trung bình
// ============================================================================

class JapaneseMascot {
  constructor(containerId = 'mascot-container') {
    this.container = document.getElementById(containerId);
    this.character = 'shiba'; // 'shiba' hoặc 'sensei'
    this.currentMood = 'idle';
    this.dialogTimeout = null;
    this.render();
  }

  // Chuyển đổi nhân vật giữa Shiba Sensei và Cô giáo Tanaka
  setCharacter(charName) {
    if (charName !== 'shiba' && charName !== 'sensei') return;
    this.character = charName;

    // Cập nhật giao diện Switcher
    const btnShiba = document.getElementById('char-btn-shiba');
    const btnSensei = document.getElementById('char-btn-sensei');
    if (btnShiba && btnSensei) {
      btnShiba.classList.toggle('active', charName === 'shiba');
      btnSensei.classList.toggle('active', charName === 'sensei');
    }

    // Đổi hiển thị giữa 2 SVG
    const shibaSvg = document.getElementById('shiba-svg-wrap');
    const senseiSvg = document.getElementById('sensei-svg-wrap');
    if (shibaSvg && senseiSvg) {
      shibaSvg.style.display = (charName === 'shiba') ? 'block' : 'none';
      senseiSvg.style.display = (charName === 'sensei') ? 'block' : 'none';
    }

    // Cập nhật tên và vai trò ở sidebar
    const nameEl = document.getElementById('mascot-name');
    const roleEl = document.getElementById('mascot-role');

    if (charName === 'shiba') {
      if (nameEl) nameEl.textContent = 'Shiba Sensei (柴先生)';
      if (roleEl) roleEl.textContent = 'Trợ lý học tiếng Nhật vui vẻ 🐕';
      this.say('Konnichiwa! Cùng học N5 với Shiba nhé! 🐾', 3000);
    } else {
      if (nameEl) nameEl.textContent = 'Tanaka-sensei (高木先生)';
      if (roleEl) roleEl.textContent = 'Kibishii Sensei • Cô giáo nghiêm khắc 👩‍🏫';
      this.say('Tập trung cao độ! Đứng thẳng lưng lên, sai một dấu trường âm là tôi bắt chép phạt đấy! 👩‍🏫', 3500);
    }

    // Đặt lại tâm trạng về idle
    this.setMood('idle');
  }

  // Khởi tạo HTML và 2 bản vẽ SVG chi tiết
  render() {
    if (!this.container) return;

    this.container.innerHTML = `
      <div class="mascot-wrapper" id="mascot-wrapper">

        <!-- Nút chuyển đổi nhân vật: Shiba Sensei vs Cô giáo khó tính -->
        <div class="mascot-char-switcher">
          <button class="char-pill-btn ${this.character === 'shiba' ? 'active' : ''}" id="char-btn-shiba" onclick="window.mascot.setCharacter('shiba')">
            🐕 Shiba
          </button>
          <button class="char-pill-btn ${this.character === 'sensei' ? 'active' : ''}" id="char-btn-sensei" onclick="window.mascot.setCharacter('sensei')">
            👩‍🏫 Cô Tanaka
          </button>
        </div>

        <!-- Bong bóng lời thoại (Speech Bubble) -->
        <div class="mascot-bubble" id="mascot-bubble">
          <span id="mascot-text">Konnichiwa! Chào mừng bạn đến với Nihongo Go! 🌸</span>
        </div>
        
        <!-- Khung chứa Mascot Avatar hoạt hình -->
        <div class="mascot-body-container anim-idle" id="mascot-avatar">

          <!-- ================= NHÂN VẬT 1: SHIBA SENSEI SVG ================= -->
          <div id="shiba-svg-wrap" class="mascot-char-wrap" style="display: ${this.character === 'shiba' ? 'block' : 'none'};">
            <svg class="mascot-svg" viewBox="0 0 200 200" width="170" height="170">
              <defs>
                <linearGradient id="shibaFur" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#FFA94D" />
                  <stop offset="100%" stop-color="#E8590C" />
                </linearGradient>
                <linearGradient id="shibaWhite" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#FFFFFF" />
                  <stop offset="100%" stop-color="#FFF4E6" />
                </linearGradient>
                <linearGradient id="sakuraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#FF8787" />
                  <stop offset="100%" stop-color="#E03131" />
                </linearGradient>
              </defs>

              <!-- Headband (Hachimaki - Băng đô Samurai) -->
              <path d="M 38 68 Q 100 56 162 68" stroke="#FA5252" stroke-width="12" stroke-linecap="round" fill="none" />
              <circle cx="100" cy="62" r="5" fill="#FFF" />
              <!-- Nơ thắt băng đô phía sau -->
              <path d="M 160 68 Q 176 75 182 90" stroke="#FA5252" stroke-width="8" stroke-linecap="round" fill="none" />
              <path d="M 160 68 Q 172 86 166 96" stroke="#FA5252" stroke-width="6" stroke-linecap="round" fill="none" />

              <!-- Thân & Kimono xanh truyền thống -->
              <path d="M 58 148 Q 100 134 142 148 L 158 196 Q 100 206 42 196 Z" fill="#228BE6" />
              <path d="M 78 148 L 100 176 L 122 148" fill="#E7F5FF" />
              <path d="M 94 154 L 100 176 L 106 154" fill="#FA5252" />

              <!-- Tai trái vẫy nhẹ nhàng bằng CSS Keyframes -->
              <g class="shiba-ear left-ear">
                <path d="M 45 75 Q 34 22 72 45 Z" fill="url(#shibaFur)" />
                <path d="M 50 64 Q 44 36 66 52 Z" fill="#FFC9C9" />
              </g>

              <!-- Tai phải vẫy nhẹ nhàng -->
              <g class="shiba-ear right-ear">
                <path d="M 155 75 Q 166 22 128 45 Z" fill="url(#shibaFur)" />
                <path d="M 150 64 Q 156 36 134 52 Z" fill="#FFC9C9" />
              </g>

              <!-- Khuôn mặt tròn Shiba Inu -->
              <ellipse cx="100" cy="105" rx="60" ry="52" fill="url(#shibaFur)" />

              <!-- Mảng lông trắng 2 bên má -->
              <path d="M 50 115 Q 45 145 75 145 Q 100 145 100 120 Q 100 145 125 145 Q 155 145 150 115 Q 135 85 100 85 Q 65 85 50 115 Z" fill="url(#shibaWhite)" />

              <!-- Đốm lông mày trắng Kawaii -->
              <circle cx="75" cy="80" r="5.5" fill="#FFF" />
              <circle cx="125" cy="80" r="5.5" fill="#FFF" />

              <!-- Mắt Trạng Thái Bình Thường (Normal) -->
              <g class="mascot-eyes" id="eyes-normal">
                <ellipse cx="75" cy="98" rx="8" ry="10" fill="#212529" />
                <circle cx="72" cy="95" r="3.5" fill="#FFFFFF" />
                <circle cx="77" cy="101" r="1.5" fill="#FFFFFF" />

                <ellipse cx="125" cy="98" rx="8" ry="10" fill="#212529" />
                <circle cx="122" cy="95" r="3.5" fill="#FFFFFF" />
                <circle cx="127" cy="101" r="1.5" fill="#FFFFFF" />
              </g>

              <!-- Mắt Trạng Thái Vui Vẻ (Happy Stars/Curved) -->
              <g class="mascot-eyes" id="eyes-happy" style="display: none;">
                <path d="M 67 100 Q 75 88 83 100" stroke="#212529" stroke-width="4.5" stroke-linecap="round" fill="none" />
                <path d="M 117 100 Q 125 88 133 100" stroke="#212529" stroke-width="4.5" stroke-linecap="round" fill="none" />
              </g>

              <!-- Mắt Trạng Thái Buồn / Thất Vọng (Sad) -->
              <g class="mascot-eyes" id="eyes-sad" style="display: none;">
                <path d="M 67 95 Q 75 105 83 95" stroke="#212529" stroke-width="4" stroke-linecap="round" fill="none" />
                <path d="M 117 95 Q 125 105 133 95" stroke="#212529" stroke-width="4" stroke-linecap="round" fill="none" />
                <ellipse cx="60" cy="106" rx="4" ry="6" fill="#74C0FC" />
              </g>

              <!-- Mắt Nghiêm Khắc / Quyết Tâm (Strict Shiba) -->
              <g class="mascot-eyes" id="shiba-eyes-strict" style="display: none;">
                <line x1="66" y1="92" x2="84" y2="102" stroke="#212529" stroke-width="4.5" stroke-linecap="round" />
                <line x1="134" y1="92" x2="116" y2="102" stroke="#212529" stroke-width="4.5" stroke-linecap="round" />
                <circle cx="76" cy="101" r="4.5" fill="#E03131" />
                <circle cx="124" cy="101" r="4.5" fill="#E03131" />
              </g>

              <!-- Má hồng Rosy Cheeks -->
              <ellipse cx="60" cy="118" rx="10" ry="6" fill="#FF8787" opacity="0.65" />
              <ellipse cx="140" cy="118" rx="10" ry="6" fill="#FF8787" opacity="0.65" />

              <!-- Mũi Shiba hình tam giác ngược -->
              <path d="M 94 110 Q 100 106 106 110 Q 103 117 100 117 Q 97 117 94 110 Z" fill="#212529" />

              <!-- Miệng -->
              <g class="mascot-mouth" id="mouth-group">
                <path id="mouth-path" d="M 93 118 Q 100 123 100 125 Q 100 123 107 118" stroke="#212529" stroke-width="3" stroke-linecap="round" fill="none" />
                <!-- Miệng há to vui mừng -->
                <path id="mouth-open" d="M 91 120 Q 100 140 109 120 Z" fill="#FF6B6B" style="display: none;" />
                <!-- Miệng mím nghiêm khắc -->
                <line id="shiba-mouth-strict" x1="93" y1="124" x2="107" y2="124" stroke="#212529" stroke-width="3" stroke-linecap="round" style="display: none;" />
              </g>

              <!-- Tai nghe Bluetooth khi người dùng bấm Micro (Listening Mode) -->
              <g id="mascot-headphones" style="display: none;">
                <path d="M 32 105 A 75 75 0 0 1 168 105" stroke="#7950F2" stroke-width="8" fill="none" stroke-linecap="round"/>
                <rect x="22" y="88" width="18" height="34" rx="9" fill="#5F3DC4" />
                <rect x="160" y="88" width="18" height="34" rx="9" fill="#5F3DC4" />
                <!-- Sóng âm thanh nhấp nhô -->
                <path class="soundwave-arc arc-1" d="M 14 105 A 16 16 0 0 1 14 90" stroke="#7950F2" stroke-width="3.5" fill="none" stroke-linecap="round"/>
                <path class="soundwave-arc arc-2" d="M 186 105 A 16 16 0 0 0 186 90" stroke="#7950F2" stroke-width="3.5" fill="none" stroke-linecap="round"/>
              </g>

              <!-- Hai chân trước (Paws) -->
              <ellipse cx="75" cy="188" rx="14" ry="10" fill="#FFF" stroke="#E9ECEF" stroke-width="2" />
              <ellipse cx="125" cy="188" rx="14" ry="10" fill="#FFF" stroke="#E9ECEF" stroke-width="2" />
            </svg>
          </div>

          <!-- ================= NHÂN VẬT 2: CÔ GIÁO KHÓ TÍNH TANAKA-SENSEI ================= -->
          <div id="sensei-svg-wrap" class="mascot-char-wrap" style="display: ${this.character === 'sensei' ? 'block' : 'none'};">
            <svg class="mascot-svg sensei-svg" viewBox="0 0 200 200" width="170" height="170">
              <defs>
                <linearGradient id="senseiHairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#2D3748" />
                  <stop offset="100%" stop-color="#1A202C" />
                </linearGradient>
                <linearGradient id="suitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#1864AB" />
                  <stop offset="100%" stop-color="#0B3C6D" />
                </linearGradient>
                <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#FFF0F0" />
                  <stop offset="100%" stop-color="#FFE3E3" />
                </linearGradient>
              </defs>

              <!-- Tóc búi cao phía sau (Teacher Bun) -->
              <circle cx="100" cy="38" r="24" fill="url(#senseiHairGrad)" />
              <!-- Trâm cài tóc hoa anh đào đỏ -->
              <line x1="72" y1="36" x2="128" y2="30" stroke="#FA5252" stroke-width="4" stroke-linecap="round" />
              <circle cx="76" cy="36" r="6" fill="#FA5252" />

              <!-- Trang phục: Áo Vest xanh đậm & Sơ mi trắng cổ bẻ & Nơ cổ đỏ -->
              <path d="M 52 144 Q 100 132 148 144 L 162 198 Q 100 206 38 198 Z" fill="url(#suitGrad)" />
              <!-- Cổ áo sơ mi trắng hình chữ V -->
              <polygon points="80,140 100,172 120,140" fill="#FFFFFF" />
              <!-- Cà vạt / Nơ đỏ giáo viên -->
              <polygon points="96,150 104,150 102,176 98,176" fill="#E03131" />
              <polygon points="94,150 106,150 100,158" fill="#C92A2A" />

              <!-- Cổ và khuôn mặt -->
              <rect x="91" y="125" width="18" height="20" fill="url(#skinGrad)" rx="4" />
              <ellipse class="sensei-face" cx="100" cy="98" rx="46" ry="44" fill="url(#skinGrad)" />

              <!-- Mái tóc ngang trán phong cách Anime giáo viên -->
              <path class="sensei-hair-fringe" d="M 54 84 Q 100 62 146 84 Q 138 60 100 58 Q 62 60 54 84 Z" fill="url(#senseiHairGrad)" />
              <path d="M 52 84 Q 48 120 54 135 Q 60 115 58 92 Z" fill="url(#senseiHairGrad)" />
              <path d="M 148 84 Q 152 120 146 135 Q 140 115 142 92 Z" fill="url(#senseiHairGrad)" />

              <!-- Lông mày: Bình thường -->
              <g id="sensei-brow-normal">
                <path d="M 70 82 Q 80 77 90 83" stroke="#212529" stroke-width="2.5" fill="none" stroke-linecap="round" />
                <path d="M 110 83 Q 120 77 130 82" stroke="#212529" stroke-width="2.5" fill="none" stroke-linecap="round" />
              </g>

              <!-- Lông mày: Nghiêm khắc (Furrowed V-shape Brows) -->
              <g id="sensei-brow-strict" style="display: none;">
                <path d="M 70 80 L 92 88" stroke="#C92A2A" stroke-width="3.5" stroke-linecap="round" />
                <path d="M 130 80 L 108 88" stroke="#C92A2A" stroke-width="3.5" stroke-linecap="round" />
              </g>

              <!-- CẶP KÍNH ĐỎ GIÁO VIÊN ĐẶC TRƯNG -->
              <g class="sensei-glasses" id="sensei-glasses">
                <!-- Gọng kính trái -->
                <rect x="66" y="86" width="28" height="18" rx="5" fill="#E7F5FF" fill-opacity="0.3" stroke="#C92A2A" stroke-width="3" />
                <!-- Gọng kính phải -->
                <rect x="106" y="86" width="28" height="18" rx="5" fill="#E7F5FF" fill-opacity="0.3" stroke="#C92A2A" stroke-width="3" />
                <!-- Cầu kính giữa 2 mắt -->
                <line x1="94" y1="94" x2="106" y2="94" stroke="#C92A2A" stroke-width="3" />
                <!-- Gọng 2 bên tai -->
                <line x1="66" y1="92" x2="55" y2="88" stroke="#C92A2A" stroke-width="2.5" />
                <line x1="134" y1="92" x2="145" y2="88" stroke="#C92A2A" stroke-width="2.5" />

                <!-- ÁNH SÁNG CHỚP LÓA KHI BẮT LỖI (Glasses Glint Flash) -->
                <polygon id="glasses-glint" points="80,82 86,95 100,95 89,103 93,115 80,107 67,115 71,103 60,95 74,95" fill="#FFFFFF" opacity="0" />
              </g>

              <!-- Mắt Trạng Thái Bình Thường (Normal Sensei Eyes) -->
              <g id="sensei-eyes-normal">
                <circle cx="80" cy="95" r="5" fill="#1864AB" />
                <circle cx="78" cy="93" r="2" fill="#FFF" />
                <circle cx="120" cy="95" r="5" fill="#1864AB" />
                <circle cx="118" cy="93" r="2" fill="#FFF" />
              </g>

              <!-- Mắt Trạng Thái Vui Vẻ (Happy Crescents ^ ^) -->
              <g id="sensei-eyes-happy" style="display: none;">
                <path d="M 72 96 Q 80 87 88 96" stroke="#1864AB" stroke-width="3.5" fill="none" stroke-linecap="round" />
                <path d="M 112 96 Q 120 87 128 96" stroke="#1864AB" stroke-width="3.5" fill="none" stroke-linecap="round" />
              </g>

              <!-- Mắt Trạng Thái Nghiêm Khắc / Nhìn Trừng Trừng (Strict Glare) -->
              <g id="sensei-eyes-strict" style="display: none;">
                <ellipse cx="80" cy="95" rx="5" ry="3" fill="#E03131" />
                <ellipse cx="120" cy="95" rx="5" ry="3" fill="#E03131" />
              </g>

              <!-- Dấu gân giận dữ đặc trưng anime khi học sinh sai (💢 Anger Vein) -->
              <g id="sensei-anger-mark" class="anime-vein" style="display: none;">
                <path d="M 138 68 Q 142 64 146 68 M 142 64 Q 138 68 142 72 M 146 68 Q 150 72 146 76 M 142 72 Q 146 76 142 80" stroke="#E03131" stroke-width="3" fill="none" stroke-linecap="round" />
              </g>

              <!-- Má hồng duyên dáng của cô giáo -->
              <ellipse cx="68" cy="108" rx="8" ry="4" fill="#FFA8A8" opacity="0.6" />
              <ellipse cx="132" cy="108" rx="8" ry="4" fill="#FFA8A8" opacity="0.6" />

              <!-- Miệng Cô Giáo -->
              <g id="sensei-mouth-group">
                <path id="sensei-mouth-normal" d="M 94 116 Q 100 120 106 116" stroke="#C92A2A" stroke-width="2" fill="none" stroke-linecap="round" />
                <path id="sensei-mouth-open" d="M 93 115 Q 100 128 107 115 Z" fill="#E03131" style="display: none;" />
                <line id="sensei-mouth-strict" x1="93" y1="118" x2="107" y2="118" stroke="#A61E4D" stroke-width="2.5" stroke-linecap="round" style="display: none;" />
              </g>

              <!-- THƯỚC CHỈ BẢNG BẰNG GỖ CỦA CÔ GIÁO (Teacher's Pointer Ruler) -->
              <g id="sensei-pointer-ruler" class="sensei-ruler">
                <!-- Thân thước dài -->
                <line x1="145" y1="170" x2="185" y2="78" stroke="#D9480F" stroke-width="5" stroke-linecap="round" />
                <!-- Đầu chỉ bằng đồng / kim loại mạ vàng -->
                <polygon points="183,74 188,77 186,85 180,82" fill="#FCC419" />
                <!-- Bàn tay cô giáo đang cầm thước -->
                <circle cx="145" cy="170" r="8" fill="url(#skinGrad)" stroke="#FFE3E3" stroke-width="2" />
              </g>

              <!-- Tai nghe Bluetooth khi cô giáo lắng nghe học sinh đọc -->
              <g id="sensei-headphones" style="display: none;">
                <path d="M 50 96 A 55 55 0 0 1 150 96" stroke="#9C36B5" stroke-width="7" fill="none" stroke-linecap="round"/>
                <rect x="42" y="85" width="14" height="26" rx="6" fill="#862E9C" />
                <rect x="144" y="85" width="14" height="26" rx="6" fill="#862E9C" />
                <!-- Sóng âm thanh nhấp nhô -->
                <path class="soundwave-arc arc-1" d="M 34 98 A 14 14 0 0 1 34 86" stroke="#AE3EC9" stroke-width="3" fill="none" stroke-linecap="round"/>
                <path class="soundwave-arc arc-2" d="M 166 98 A 14 14 0 0 0 166 86" stroke="#AE3EC9" stroke-width="3" fill="none" stroke-linecap="round"/>
              </g>
            </svg>
          </div>

          <!-- Lớp hiệu ứng cánh hoa anh đào và tim bay lơ lửng -->
          <div class="mascot-fx-layer" id="mascot-fx-layer"></div>

        </div>
      </div>
    `;
  }

  // Cập nhật trạng thái tâm trạng với 5 trạng thái hoạt hình CSS thực thụ
  setMood(mood, message = null, duration = 3000) {
    this.currentMood = mood;
    const avatar = document.getElementById('mascot-avatar');
    if (!avatar) return;

    // Reset toàn bộ class hoạt hình cũ
    avatar.className = 'mascot-body-container';

    // 1. Reset phần tử Shiba
    const eyesNormal = document.getElementById('eyes-normal');
    const eyesHappy = document.getElementById('eyes-happy');
    const eyesSad = document.getElementById('eyes-sad');
    const shibaEyesStrict = document.getElementById('shiba-eyes-strict');
    const mouthPath = document.getElementById('mouth-path');
    const mouthOpen = document.getElementById('mouth-open');
    const shibaMouthStrict = document.getElementById('shiba-mouth-strict');
    const headphones = document.getElementById('mascot-headphones');

    if (eyesNormal) eyesNormal.style.display = 'block';
    if (eyesHappy) eyesHappy.style.display = 'none';
    if (eyesSad) eyesSad.style.display = 'none';
    if (shibaEyesStrict) shibaEyesStrict.style.display = 'none';
    if (mouthPath) mouthPath.style.display = 'block';
    if (mouthOpen) mouthOpen.style.display = 'none';
    if (shibaMouthStrict) shibaMouthStrict.style.display = 'none';
    if (headphones) headphones.style.display = 'none';

    // 2. Reset phần tử Cô giáo Tanaka
    const senseiBrowNormal = document.getElementById('sensei-brow-normal');
    const senseiBrowStrict = document.getElementById('sensei-brow-strict');
    const senseiEyesNormal = document.getElementById('sensei-eyes-normal');
    const senseiEyesHappy = document.getElementById('sensei-eyes-happy');
    const senseiEyesStrict = document.getElementById('sensei-eyes-strict');
    const senseiMouthNormal = document.getElementById('sensei-mouth-normal');
    const senseiMouthOpen = document.getElementById('sensei-mouth-open');
    const senseiMouthStrict = document.getElementById('sensei-mouth-strict');
    const senseiAnger = document.getElementById('sensei-anger-mark');
    const senseiHeadphones = document.getElementById('sensei-headphones');
    const ruler = document.getElementById('sensei-pointer-ruler');
    const glint = document.getElementById('glasses-glint');

    if (senseiBrowNormal) senseiBrowNormal.style.display = 'block';
    if (senseiBrowStrict) senseiBrowStrict.style.display = 'none';
    if (senseiEyesNormal) senseiEyesNormal.style.display = 'block';
    if (senseiEyesHappy) senseiEyesHappy.style.display = 'none';
    if (senseiEyesStrict) senseiEyesStrict.style.display = 'none';
    if (senseiMouthNormal) senseiMouthNormal.style.display = 'block';
    if (senseiMouthOpen) senseiMouthOpen.style.display = 'none';
    if (senseiMouthStrict) senseiMouthStrict.style.display = 'none';
    if (senseiAnger) senseiAnger.style.display = 'none';
    if (senseiHeadphones) senseiHeadphones.style.display = 'none';
    if (ruler) ruler.classList.remove('anim-ruler-tap');
    if (glint) glint.classList.remove('anim-glasses-glint');

    // 3. Kích hoạt hiệu ứng tương ứng từng trạng thái
    switch (mood) {
      // 1. TRẠNG THÁI IDLE: Thở nhẹ, vẫy tai/tóc êm đềm
      case 'idle':
        avatar.classList.add('anim-idle');
        break;

      // 2. TRẠNG THÁI LISTENING: Đeo tai nghe, sóng âm nhấp nhô khi bấm Micro
      case 'listening':
        avatar.classList.add('anim-listening');
        if (headphones) headphones.style.display = 'block';
        if (senseiHeadphones) senseiHeadphones.style.display = 'block';
        break;

      // 3. TRẠNG THÁI HAPPY: Nhảy múa vui nhộn, mắt cười, hoa tim bay bổng
      case 'happy':
        avatar.classList.add('anim-happy');
        if (eyesNormal) eyesNormal.style.display = 'none';
        if (eyesHappy) eyesHappy.style.display = 'block';
        if (mouthOpen) mouthOpen.style.display = 'block';
        if (mouthPath) mouthPath.style.display = 'none';

        if (senseiEyesNormal) senseiEyesNormal.style.display = 'none';
        if (senseiEyesHappy) senseiEyesHappy.style.display = 'block';
        if (senseiMouthNormal) senseiMouthNormal.style.display = 'none';
        if (senseiMouthOpen) senseiMouthOpen.style.display = 'block';

        this.spawnFloatingSakura(6);
        break;

      // 4. TRẠNG THÁI STRICT / ANGRY: Nhíu mày, gõ thước, kính chớp sáng
      case 'strict':
      case 'angry':
        avatar.classList.add('anim-strict');
        // Shiba
        if (eyesNormal) eyesNormal.style.display = 'none';
        if (shibaEyesStrict) shibaEyesStrict.style.display = 'block';
        if (mouthPath) mouthPath.style.display = 'none';
        if (shibaMouthStrict) shibaMouthStrict.style.display = 'block';

        // Cô giáo Tanaka
        if (senseiBrowNormal) senseiBrowNormal.style.display = 'none';
        if (senseiBrowStrict) senseiBrowStrict.style.display = 'block';
        if (senseiEyesNormal) senseiEyesNormal.style.display = 'none';
        if (senseiEyesStrict) senseiEyesStrict.style.display = 'block';
        if (senseiMouthNormal) senseiMouthNormal.style.display = 'none';
        if (senseiMouthStrict) senseiMouthStrict.style.display = 'block';
        if (senseiAnger) senseiAnger.style.display = 'block';
        if (ruler) ruler.classList.add('anim-ruler-tap');
        if (glint) glint.classList.add('anim-glasses-glint');
        break;

      // 5. TRẠNG THÁI ENCOURAGING: Gật đầu động viên, cổ vũ ấm áp
      case 'encouraging':
        avatar.classList.add('anim-encouraging');
        if (eyesHappy) eyesHappy.style.display = 'block';
        if (eyesNormal) eyesNormal.style.display = 'none';

        if (senseiEyesHappy) senseiEyesHappy.style.display = 'block';
        if (senseiEyesNormal) senseiEyesNormal.style.display = 'none';
        break;

      // TRẠNG THÁI CELEBRATE: Ăn mừng chiến thắng (Hoàn thành level / thắng game)
      case 'celebrate':
        avatar.classList.add('anim-celebrate');
        if (eyesNormal) eyesNormal.style.display = 'none';
        if (eyesHappy) eyesHappy.style.display = 'block';
        if (mouthOpen) mouthOpen.style.display = 'block';
        if (mouthPath) mouthPath.style.display = 'none';

        if (senseiEyesNormal) senseiEyesNormal.style.display = 'none';
        if (senseiEyesHappy) senseiEyesHappy.style.display = 'block';
        if (senseiMouthOpen) senseiMouthOpen.style.display = 'block';
        if (senseiMouthNormal) senseiMouthNormal.style.display = 'none';

        this.launchConfetti();
        this.spawnFloatingSakura(12);
        break;

      // TRẠNG THÁI TALKING: Khi phát âm mẫu hoặc nói chuyện
      case 'talking':
        avatar.classList.add('anim-talking');
        if (mouthOpen) mouthOpen.style.display = 'block';
        if (mouthPath) mouthPath.style.display = 'none';
        if (senseiMouthOpen) senseiMouthOpen.style.display = 'block';
        if (senseiMouthNormal) senseiMouthNormal.style.display = 'none';
        break;

      // TRẠNG THÁI SAD: Khi thất bại / hết tim
      case 'sad':
        avatar.classList.add('anim-sad');
        if (eyesNormal) eyesNormal.style.display = 'none';
        if (eyesSad) eyesSad.style.display = 'block';
        break;

      default:
        avatar.classList.add('anim-idle');
        break;
    }

    if (message) {
      this.say(message, duration);
    }
  }

  // Hiển thị lời thoại Mascot trong bong bóng
  say(text, duration = 3500) {
    const bubble = document.getElementById('mascot-bubble');
    const textEl = document.getElementById('mascot-text');
    if (!bubble || !textEl) return;

    clearTimeout(this.dialogTimeout);
    textEl.innerHTML = text;
    bubble.classList.add('visible');

    if (duration > 0) {
      this.dialogTimeout = setTimeout(() => {
        bubble.classList.remove('visible');
        if (this.currentMood !== 'idle') {
          this.setMood('idle');
        }
      }, duration);
    }
  }

  // Hiệu ứng cánh hoa anh đào và tim bay lên lơ lửng khi trả lời đúng / đạt điểm cao
  spawnFloatingSakura(count = 8) {
    const fxLayer = document.getElementById('mascot-fx-layer');
    if (!fxLayer) return;

    const symbols = ['🌸', '✨', '💖', '💮', '⭐'];

    for (let i = 0; i < count; i++) {
      const petal = document.createElement('span');
      petal.className = 'floating-particle';
      petal.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      petal.style.left = `${15 + Math.random() * 70}%`;
      petal.style.bottom = '10px';
      petal.style.animationDuration = `${1.2 + Math.random() * 1.5}s`;
      petal.style.animationDelay = `${Math.random() * 0.4}s`;
      petal.style.fontSize = `${14 + Math.random() * 12}px`;

      fxLayer.appendChild(petal);

      setTimeout(() => {
        petal.remove();
      }, 2500);
    }
  }

  // Pháo hoa giấy ăn mừng rực rỡ khi hoàn thành bài học
  launchConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.className = 'confetti-overlay';
    document.body.appendChild(confettiContainer);

    const colors = ['#FF6B6B', '#4DABF7', '#FFD43B', '#51CF66', '#FCC419', '#CC5DE8', '#FF922B', '#20C997'];

    for (let i = 0; i < 50; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      piece.style.left = Math.random() * 100 + 'vw';
      piece.style.top = '-20px';
      piece.style.transform = `rotate(${Math.random() * 360}deg)`;
      piece.style.animationDuration = 1.2 + Math.random() * 1.8 + 's';
      piece.style.animationDelay = Math.random() * 0.3 + 's';
      confettiContainer.appendChild(piece);
    }

    setTimeout(() => {
      confettiContainer.remove();
    }, 3200);
  }
}

// ============================================================================
// BỘ VẼ HÌNH MINH HỌA HOẠT HÌNH SVG TƯỢNG TRƯNG CHO TỪNG TỪ VỰNG N5
// Giúp ghi nhớ từ vựng qua hình ảnh trực quan cực kỳ sinh động
// ============================================================================

const SVG_ICONS = {
  // Chào hỏi & Giao tiếp
  hello: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><text x="50" y="65" font-size="46" text-anchor="middle">👋</text></svg>`,
  sunrise: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><circle cx="50" cy="65" r="28" fill="#FF922B"/><path d="M 15 75 L 85 75" stroke="#FFA94D" stroke-width="6" stroke-linecap="round"/><text x="50" y="55" font-size="34" text-anchor="middle">🌅</text></svg>`,
  night: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#343A40"/><path d="M 40 25 A 30 30 0 0 0 75 75 A 35 35 0 1 1 40 25 Z" fill="#FCC419"/><circle cx="30" cy="35" r="3" fill="#FFF"/><circle cx="70" cy="30" r="2" fill="#FFF"/></svg>`,
  bow: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><text x="50" y="66" font-size="46" text-anchor="middle">🙏</text></svg>`,
  wave: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><text x="50" y="66" font-size="46" text-anchor="middle">🙋‍♂️</text></svg>`,
  apology: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><text x="50" y="66" font-size="46" text-anchor="middle">🙇</text></svg>`,

  // Ẩm thực
  water: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><path d="M 50 20 Q 30 55 30 70 A 20 20 0 0 0 70 70 Q 70 55 50 20 Z" fill="#339AF0"/><circle cx="45" cy="62" r="4" fill="#FFF" opacity="0.6"/></svg>`,
  rice: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><path d="M 22 55 Q 50 90 78 55 Z" fill="#E03131"/><ellipse cx="50" cy="53" rx="28" ry="15" fill="#FFFFFF"/><circle cx="50" cy="50" r="4" fill="#E03131"/></svg>`,
  tea: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><rect x="30" y="40" width="40" height="42" rx="10" fill="#69DB7C"/><ellipse cx="50" cy="40" rx="20" ry="8" fill="#40C057"/><path d="M 45 28 Q 50 20 46 12" stroke="#B2F2BB" stroke-width="3" fill="none"/><path d="M 55 28 Q 60 20 56 12" stroke="#B2F2BB" stroke-width="3" fill="none"/></svg>`,
  apple: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><circle cx="42" cy="58" r="25" fill="#FA5252"/><circle cx="58" cy="58" r="25" fill="#E03131"/><path d="M 50 35 Q 52 20 62 18" stroke="#845EF7" stroke-width="4" fill="none"/><path d="M 55 25 Q 70 20 68 30 Z" fill="#40C057"/></svg>`,
  fish: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><path d="M 20 50 Q 55 25 80 50 Q 55 75 20 50 Z" fill="#4DABF7"/><polygon points="15,35 30,50 15,65" fill="#339AF0"/><circle cx="68" cy="46" r="4" fill="#FFF"/><circle cx="69" cy="46" r="2" fill="#000"/></svg>`,
  meat: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><path d="M 25 45 C 25 30 75 25 80 50 C 85 75 35 80 25 45 Z" fill="#FA5252"/><ellipse cx="52" cy="52" rx="14" ry="10" fill="#FFF"/><circle cx="52" cy="52" r="5" fill="#FA5252"/></svg>`,
  egg: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><ellipse cx="50" cy="55" rx="26" ry="32" fill="#FFFFFF" stroke="#F1F3F5" stroke-width="2"/><ellipse cx="50" cy="58" rx="16" ry="16" fill="#FCC419"/></svg>`,
  sushi: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><rect x="25" y="50" width="50" height="25" rx="8" fill="#FFF" stroke="#E9ECEF"/><path d="M 22 45 Q 50 35 78 45 L 75 56 Q 50 48 25 56 Z" fill="#FF8787"/><rect x="44" y="44" width="12" height="32" rx="2" fill="#212529"/></svg>`,
  bread: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><path d="M 25 40 Q 50 20 75 40 L 75 70 Q 50 78 25 70 Z" fill="#FFA94D"/><ellipse cx="50" cy="42" rx="22" ry="12" fill="#FFD8A8"/></svg>`,

  // Động vật & Thiên nhiên
  dog: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><ellipse cx="50" cy="55" rx="30" ry="25" fill="#FFA94D"/><path d="M 25 35 Q 20 60 35 55 Z" fill="#D9480F"/><path d="M 75 35 Q 80 60 65 55 Z" fill="#D9480F"/><circle cx="40" cy="50" r="4" fill="#000"/><circle cx="60" cy="50" r="4" fill="#000"/><ellipse cx="50" cy="62" rx="6" ry="4" fill="#212529"/></svg>`,
  cat: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F8F0FC"/><polygon points="25,50 35,25 50,45" fill="#CC5DE8"/><polygon points="75,50 65,25 50,45" fill="#CC5DE8"/><ellipse cx="50" cy="58" rx="28" ry="24" fill="#E599F7"/><circle cx="40" cy="55" r="4" fill="#343A40"/><circle cx="60" cy="55" r="4" fill="#343A40"/><polygon points="50,62 47,66 53,66" fill="#F06595"/></svg>`,
  bird: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="45" cy="50" r="22" fill="#74C0FC"/><polygon points="65,48 85,53 65,60" fill="#FF922B"/><circle cx="52" cy="45" r="3.5" fill="#000"/></svg>`,
  flower: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><g fill="#FF8787"><circle cx="50" cy="35" r="14"/><circle cx="65" cy="45" r="14"/><circle cx="60" cy="63" r="14"/><circle cx="40" cy="63" r="14"/><circle cx="35" cy="45" r="14"/></g><circle cx="50" cy="50" r="10" fill="#FFD43B"/></svg>`,
  tree: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><rect x="44" y="55" width="12" height="30" rx="3" fill="#845EF7"/><circle cx="50" cy="45" r="25" fill="#51CF66"/><circle cx="38" cy="40" r="18" fill="#40C057"/><circle cx="62" cy="40" r="18" fill="#37B24D"/></svg>`,
  mountain: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><polygon points="50,20 85,80 15,80" fill="#4DABF7"/><polygon points="50,20 62,42 50,38 38,42" fill="#FFFFFF"/></svg>`,
  rain: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E9ECEF"/><path d="M 30 50 A 15 15 0 0 1 65 40 A 18 18 0 0 1 78 55 A 12 12 0 0 1 70 65 L 30 65 A 12 12 0 0 1 30 50 Z" fill="#868E96"/><path d="M 35 72 L 30 84 M 50 72 L 45 84 M 65 72 L 60 84" stroke="#339AF0" stroke-width="4" stroke-linecap="round"/></svg>`,
  sun: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><circle cx="50" cy="50" r="24" fill="#FF922B"/><path d="M 50 15 L 50 8 M 50 85 L 50 92 M 15 50 L 8 50 M 85 50 L 92 50 M 26 26 L 20 20 M 74 74 L 80 80 M 26 74 L 20 80 M 74 26 L 80 20" stroke="#FF922B" stroke-width="5" stroke-linecap="round"/></svg>`,

  // Đồ vật
  book: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><path d="M 20 30 Q 50 35 50 75 Q 20 70 20 30 Z" fill="#74C0FC"/><path d="M 80 30 Q 50 35 50 75 Q 80 70 80 30 Z" fill="#4DABF7"/><line x1="50" y1="35" x2="50" y2="75" stroke="#1864AB" stroke-width="3"/></svg>`,
  car: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><path d="M 20 58 L 28 42 Q 35 35 55 35 L 70 42 L 82 50 L 82 65 L 18 65 Z" fill="#FA5252"/><circle cx="34" cy="68" r="8" fill="#343A40"/><circle cx="68" cy="68" r="8" fill="#343A40"/><circle cx="34" cy="68" r="3" fill="#FFF"/><circle cx="68" cy="68" r="3" fill="#FFF"/></svg>`,
  bag: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><path d="M 38 40 A 12 12 0 0 1 62 40" stroke="#E8590C" stroke-width="4" fill="none"/><rect x="25" y="40" width="50" height="42" rx="8" fill="#FFA94D"/><rect x="30" y="55" width="40" height="20" rx="4" fill="#FF922B"/></svg>`,
  clock: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><circle cx="50" cy="50" r="32" fill="#FFF" stroke="#40C057" stroke-width="6"/><line x1="50" y1="50" x2="50" y2="30" stroke="#2B8A3E" stroke-width="4" stroke-linecap="round"/><line x1="50" y1="50" x2="65" y2="50" stroke="#FA5252" stroke-width="3" stroke-linecap="round"/></svg>`,
  bicycle: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F8F0FC"/><circle cx="30" cy="62" r="14" fill="none" stroke="#7950F2" stroke-width="4"/><circle cx="70" cy="62" r="14" fill="none" stroke="#7950F2" stroke-width="4"/><polygon points="30,62 50,62 42,42 60,42 70,62" fill="none" stroke="#7950F2" stroke-width="4"/></svg>`,
  phone: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="32" y="22" width="36" height="58" rx="8" fill="#343A40"/><rect x="35" y="28" width="30" height="44" rx="3" fill="#4DABF7"/><circle cx="50" cy="76" r="2.5" fill="#FFF"/></svg>`,
  pencil: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><g transform="rotate(45 50 50)"><rect x="42" y="25" width="16" height="45" fill="#FCC419"/><polygon points="42,70 58,70 50,85" fill="#FFE066"/><polygon points="47,80 53,80 50,85" fill="#212529"/></g></svg>`,
  umbrella: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><path d="M 20 50 Q 50 15 80 50 Z" fill="#845EF7"/><line x1="50" y1="35" x2="50" y2="75" stroke="#5F3DC4" stroke-width="4"/><path d="M 50 75 A 6 6 0 0 0 42 75" stroke="#5F3DC4" stroke-width="4" fill="none"/></svg>`,

  // Gia đình & Địa điểm
  family: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><text x="50" y="66" font-size="44" text-anchor="middle">👨‍👩‍👧</text></svg>`,
  father: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><text x="50" y="66" font-size="44" text-anchor="middle">👨</text></svg>`,
  mother: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><text x="50" y="66" font-size="44" text-anchor="middle">👩</text></svg>`,
  friends: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><text x="50" y="66" font-size="44" text-anchor="middle">🧑‍🤝‍🧑</text></svg>`,
  teacher: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><text x="50" y="66" font-size="44" text-anchor="middle">👨‍🏫</text></svg>`,
  student: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><text x="50" y="66" font-size="44" text-anchor="middle">🧑‍🎓</text></svg>`,
  school: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><polygon points="50,22 80,42 20,42" fill="#E03131"/><rect x="25" y="42" width="50" height="38" fill="#FFA94D"/><rect x="42" y="60" width="16" height="20" fill="#862E9C"/></svg>`,
  house: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><polygon points="50,20 82,46 18,46" fill="#FA5252"/><rect x="25" y="46" width="50" height="36" fill="#FFF4E6"/><rect x="42" y="58" width="16" height="24" fill="#A61E4D"/></svg>`,
  station: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><text x="50" y="66" font-size="44" text-anchor="middle">🚉</text></svg>`,
  hospital: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><rect x="25" y="32" width="50" height="50" rx="8" fill="#FFF" stroke="#FA5252" stroke-width="4"/><line x1="50" y1="44" x2="50" y2="70" stroke="#FA5252" stroke-width="8" stroke-linecap="round"/><line x1="37" y1="57" x2="63" y2="57" stroke="#FA5252" stroke-width="8" stroke-linecap="round"/></svg>`,
  train: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="25" y="30" width="50" height="42" rx="8" fill="#228BE6"/><rect x="32" y="36" width="36" height="18" rx="4" fill="#E7F5FF"/><circle cx="36" cy="62" r="4" fill="#FFD43B"/><circle cx="64" cy="62" r="4" fill="#FFD43B"/></svg>`,
  airplane: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><text x="50" y="66" font-size="44" text-anchor="middle">✈️</text></svg>`,

  // Động từ & Tính từ
  eat: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><text x="50" y="66" font-size="44" text-anchor="middle">🍜</text></svg>`,
  drink: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><text x="50" y="66" font-size="44" text-anchor="middle">☕</text></svg>`,
  go: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><text x="50" y="66" font-size="44" text-anchor="middle">🚶‍♂️</text></svg>`,
  watch: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F8F0FC"/><text x="50" y="66" font-size="44" text-anchor="middle">👀</text></svg>`,
  listen: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><text x="50" y="66" font-size="44" text-anchor="middle">🎧</text></svg>`,
  speak: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><text x="50" y="66" font-size="44" text-anchor="middle">💬</text></svg>`,
  buy: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><text x="50" y="66" font-size="44" text-anchor="middle">🛒</text></svg>`,
  study: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><text x="50" y="66" font-size="44" text-anchor="middle">✍️</text></svg>`,
  big: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><text x="50" y="66" font-size="44" text-anchor="middle">🐘</text></svg>`,
  small: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><text x="50" y="66" font-size="44" text-anchor="middle">🐭</text></svg>`,
  delicious: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><text x="50" y="66" font-size="44" text-anchor="middle">😋</text></svg>`,
  cute: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><text x="50" y="66" font-size="44" text-anchor="middle">🥰</text></svg>`,
  fun: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F8F0FC"/><text x="50" y="66" font-size="44" text-anchor="middle">🎉</text></svg>`,
  sparkle: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><text x="50" y="66" font-size="44" text-anchor="middle">✨</text></svg>`
};

function getVocabIllustration(item) {
  if (item && item.svgIllustration) {
    return item.svgIllustration;
  }
  if (item && item.svg && SVG_ICONS[item.svg]) {
    return SVG_ICONS[item.svg];
  }
  return `<div class="vocab-card-emoji-wrap"><span class="vocab-card-emoji">${(item && item.emoji) || '🌸'}</span></div>`;
}

window.JapaneseMascot = JapaneseMascot;
window.SVG_ICONS = SVG_ICONS;
window.getVocabIllustration = getVocabIllustration;
