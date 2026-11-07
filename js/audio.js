// ============================================================================
// HỆ THỐNG ÂM THANH TOÀN DIỆN (SOUND & VOICE ENGINE)
// 1. Text-to-Speech (TTS) Tiếng Nhật Bản Xứ qua Web Speech API:
//    - Ưu tiên giọng chuẩn: Microsoft Haruka, Ichiro, Ayumi, Google 日本語, Kyoko, Otoya.
//    - Bắt sự kiện onvoiceschanged không bị mất giọng khi khởi động.
//    - 2 Chế độ đọc: Đọc chuẩn (rate = 1.0) & Đọc chậm 🐢 (rate = 0.6).
// 2. Bộ hiệu ứng âm thanh Synthesizer qua Web Audio API (Không cần MP3 ngoài):
//    - playCorrect: Ting vui nhộn (hợp âm chuông ngân)
//    - playWrong: Buzzer trầm (âm trầm nhắc nhở nghiêm túc)
//    - playCombo: Streak lên tông theo cấp số nhân (escalating pitch)
//    - playCardFlip: Tiếng lật thẻ crisp nhẹ nhàng
//    - playVictory / playFireworks: Fanfare chiến thắng & tiếng pháo hoa nổ lách tách
// ============================================================================

class SoundSystem {
  constructor() {
    this.audioCtx = null;
    this.sfxEnabled = true;
    this.ttsRateNormal = 1.0; // Tốc độ chuẩn bản xứ
    this.ttsRateSlow = 0.6;   // Tốc độ chậm dễ nghe cho người mới học N5
    this.japaneseVoice = null;
    this.availableVoices = [];
    this.isVoicesLoaded = false;

    this.initAudioContext();
    this.initSpeechSynthesis();
  }

  // Khởi tạo AudioContext cho Web Audio API
  initAudioContext() {
    try {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      if (AudioCtxClass) {
        this.audioCtx = new AudioCtxClass();
      }
    } catch (e) {
      console.warn('[AudioContext] Trình duyệt không hỗ trợ Web Audio API:', e);
    }

    // Tự động mở khóa AudioContext khi người dùng bấm chuột hoặc chạm màn hình
    const unlockAudio = () => {
      this.resumeContext();
      window.removeEventListener('pointerdown', unlockAudio);
      window.removeEventListener('keydown', unlockAudio);
    };
    window.addEventListener('pointerdown', unlockAudio, { passive: true });
    window.addEventListener('keydown', unlockAudio, { passive: true });
  }

  resumeContext() {
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume().catch(() => {});
    }
  }

  // Khởi tạo Text-To-Speech tiếng Nhật
  initSpeechSynthesis() {
    if (!('speechSynthesis' in window)) {
      console.warn('[TTS] Trình duyệt không hỗ trợ SpeechSynthesis.');
      return;
    }

    const selectJapaneseVoice = () => {
      try {
        const voices = window.speechSynthesis.getVoices() || [];
        this.availableVoices = voices;
        if (!voices || voices.length === 0) return;

        this.isVoicesLoaded = true;

        // Bảng ưu tiên giọng tiếng Nhật bản xứ tốt nhất
        const priorityNames = [
          'Microsoft Haruka',      // Nữ bản xứ tự nhiên (Windows 10/11)
          'Microsoft Ichiro',      // Nam bản xứ tự nhiên (Windows)
          'Microsoft Ayumi',       // Nữ bản xứ (Windows)
          'Google 日本語',         // Google Chrome Native Japanese
          'Kyoko',                 // Nữ bản xứ cao cấp (macOS / iOS)
          'Otoya',                 // Nam bản xứ (macOS)
          'Sayaka',                // Nữ bản xứ
          'Hattori',               // Nam bản xứ
          'Keiko',
          'Sora'
        ];

        let bestVoice = null;
        let highestRank = -1;

        for (const voice of voices) {
          const vName = voice.name || '';
          const vLang = (voice.lang || '').replace('_', '-');

          // Kiểm tra xem có đúng tiếng Nhật không
          const isJapanese = vLang.startsWith('ja') || vName.includes('Japanese') || vName.includes('日本語');
          if (!isJapanese) continue;

          let rank = 10; // Điểm cơ bản cho bất kỳ giọng ja nào

          // Ưu tiên theo danh sách tên chuẩn
          for (let i = 0; i < priorityNames.length; i++) {
            if (vName.includes(priorityNames[i])) {
              rank = 100 - i * 5;
              break;
            }
          }

          // Giọng mặc định hoặc địa phương chuẩn ja-JP
          if (vLang === 'ja-JP') rank += 5;
          if (voice.default) rank += 2;

          if (rank > highestRank) {
            highestRank = rank;
            bestVoice = voice;
          }
        }

        if (bestVoice) {
          this.japaneseVoice = bestVoice;
          console.log(`[TTS] Đã chọn giọng tiếng Nhật: ${bestVoice.name} (${bestVoice.lang})`);
        }
      } catch (err) {
        console.warn('[TTS] Lỗi khi load voices:', err);
      }
    };

    // Gọi thử ngay lập tức (Firefox/Safari thường có sẵn)
    selectJapaneseVoice();

    // Lắng nghe sự kiện onvoiceschanged (Chrome/Edge nạp giọng bất đồng bộ)
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = () => {
        selectJapaneseVoice();
      };
    }
  }

  // Phát âm tiếng Nhật với các tùy chọn tốc độ linh hoạt
  speak(text, speedOverride = null, onEnd = null) {
    if (!('speechSynthesis' in window) || !text) return;

    // Hủy các câu đang đọc dở để tránh xếp hàng dài
    window.speechSynthesis.cancel();

    // Làm sạch chuỗi trước khi đọc (loại bỏ markdown, HTML tag nếu có)
    const cleanText = text.replace(/<[^>]*>/g, '').replace(/[*_#`~]/g, '').trim();
    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'ja-JP';

    // Xác định tốc độ đọc: Chuẩn 1.0, Chậm 0.6 hoặc custom
    let targetRate = this.ttsRateNormal;
    if (speedOverride === 'slow' || speedOverride === 0.6 || speedOverride === 0.7) {
      targetRate = this.ttsRateSlow;
    } else if (speedOverride === 'normal' || speedOverride === 1.0) {
      targetRate = this.ttsRateNormal;
    } else if (typeof speedOverride === 'number' && speedOverride > 0) {
      targetRate = speedOverride;
    }

    utterance.rate = targetRate;
    utterance.pitch = 1.02; // Tông giọng thân thiện, trong trẻo

    // Đảm bảo cập nhật giọng mới nhất nếu trước đó chưa load xong
    if (!this.japaneseVoice && this.availableVoices.length > 0) {
      this.japaneseVoice = this.availableVoices.find(v => (v.lang || '').startsWith('ja')) || null;
    }

    if (this.japaneseVoice) {
      utterance.voice = this.japaneseVoice;
    }

    // Hiệu ứng hoạt hình miệng nhân vật khi nói
    if (window.mascot) {
      utterance.onstart = () => {
        if (window.mascot && typeof window.mascot.setMood === 'function') {
          window.mascot.setMood('talking');
        }
      };
      utterance.onend = () => {
        if (window.mascot && window.mascot.currentMood === 'talking') {
          window.mascot.setMood('idle');
        }
        if (typeof onEnd === 'function') onEnd();
      };
      utterance.onerror = () => {
        if (window.mascot && window.mascot.currentMood === 'talking') {
          window.mascot.setMood('idle');
        }
        if (typeof onEnd === 'function') onEnd();
      };
    } else if (typeof onEnd === 'function') {
      utterance.onend = onEnd;
      utterance.onerror = onEnd;
    }

    window.speechSynthesis.speak(utterance);
  }

  // Đọc chuẩn bản xứ (rate = 1.0)
  speakNormal(text, onEnd = null) {
    this.speak(text, this.ttsRateNormal, onEnd);
  }

  // Đọc chậm rõ từng âm N5 (rate = 0.6) 🐢
  speakSlow(text, onEnd = null) {
    this.speak(text, this.ttsRateSlow, onEnd);
  }

  // Dừng đọc ngay lập tức
  stop() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  // Bật / Tắt âm thanh hiệu ứng (SFX Mute/Unmute)
  toggleSound() {
    this.sfxEnabled = !this.sfxEnabled;
    const btn = document.getElementById('btn-sound-toggle');
    if (btn) {
      btn.innerHTML = this.sfxEnabled ? '🔊 Âm thanh' : '🔇 Tắt tiếng';
      btn.classList.toggle('muted', !this.sfxEnabled);
    }
    if (this.sfxEnabled) {
      this.playPop();
    }
    return this.sfxEnabled;
  }

  // ==========================================================================
  // BỘ TỔNG HỢP ÂM THANH HIỆU ỨNG (WEB AUDIO API SYNTHESIZER)
  // Không phụ thuộc file MP3 ngoài, tải tức thì, không bao giờ bị lỗi 404
  // ==========================================================================

  // 1. ÂM THANH TRẢ LỜI ĐÚNG: "Ting" ngân vang trong trẻo (Hợp âm C Major Chime)
  playCorrect() {
    if (!this.sfxEnabled) return;
    this.resumeContext();
    if (!this.audioCtx) return;

    const ctx = this.audioCtx;
    const now = ctx.currentTime;

    // Hợp âm C5 - E5 - G5 - C6 và chuông lấp lánh C7
    const notes = [
      { f: 523.25, time: 0.00, dur: 0.35, gain: 0.18 }, // C5
      { f: 659.25, time: 0.07, dur: 0.35, gain: 0.20 }, // E5
      { f: 783.99, time: 0.14, dur: 0.40, gain: 0.22 }, // G5
      { f: 1046.50, time: 0.21, dur: 0.55, gain: 0.25 }, // C6
      { f: 2093.00, time: 0.23, dur: 0.30, gain: 0.08 }  // Shimmer C7
    ];

    notes.forEach(note => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(note.f, now + note.time);

      gain.gain.setValueAtTime(0.001, now + note.time);
      gain.gain.exponentialRampToValueAtTime(note.gain, now + note.time + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + note.time + note.dur);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + note.time);
      osc.stop(now + note.time + note.dur + 0.05);
    });
  }

  // 2. ÂM THANH TRẢ LỜI SAI: "Buzzer trầm" nhắc nhở nghiêm túc, dứt khoát
  playWrong() {
    if (!this.sfxEnabled) return;
    this.resumeContext();
    if (!this.audioCtx) return;

    const ctx = this.audioCtx;
    const now = ctx.currentTime;

    // 2 nhịp rung trầm tạo cảm giác cảnh báo rõ ràng
    const bursts = [0.0, 0.16];

    bursts.forEach(startTime => {
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();
      const gain = ctx.createGain();

      // Sawtooth kết hợp Triangle để tạo chất âm buzzer trầm dứt khoát
      osc1.type = 'sawtooth';
      osc2.type = 'triangle';

      osc1.frequency.setValueAtTime(140, now + startTime);
      osc1.frequency.exponentialRampToValueAtTime(95, now + startTime + 0.14);

      osc2.frequency.setValueAtTime(133, now + startTime); // Detuned một chút để tạo độ dày
      osc2.frequency.exponentialRampToValueAtTime(90, now + startTime + 0.14);

      // Lowpass filter làm mềm âm buzzer, không chói tai người học
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, now + startTime);

      gain.gain.setValueAtTime(0.001, now + startTime);
      gain.gain.exponentialRampToValueAtTime(0.24, now + startTime + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.001, now + startTime + 0.14);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc1.start(now + startTime);
      osc2.start(now + startTime);
      osc1.stop(now + startTime + 0.15);
      osc2.stop(now + startTime + 0.15);
    });
  }

  // 3. ÂM THANH COMBO STREAK: Tăng cao độ theo cấp số nhân (Exponential Pitch Escalation)
  playCombo(combo = 1) {
    if (!this.sfxEnabled) return;
    this.resumeContext();
    if (!this.audioCtx) return;

    const ctx = this.audioCtx;
    const now = ctx.currentTime;

    // Tần số cơ sở nâng dần theo cấp số nhân 1.08^(combo)
    const streakLevel = Math.min(Math.max(combo, 1), 16);
    const baseFreq = 440 * Math.pow(1.08, streakLevel - 1); // Bắt đầu từ A4 (440Hz), streak 10 lên hơn 880Hz

    // 4 nốt nhạc nối đuôi vui nhộn theo gam trưởng: 1 - 1.2599 (3rd) - 1.4983 (5th) - 2.0 (Octave)
    const intervals = [1.0, 1.2599, 1.4983, 2.0];
    const delays = [0.0, 0.05, 0.10, 0.15];

    intervals.forEach((interval, idx) => {
      const freq = baseFreq * interval;
      const t = now + delays[idx];

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t);

      gain.gain.setValueAtTime(0.001, t);
      gain.gain.exponentialRampToValueAtTime(0.22, t + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(t);
      osc.stop(t + 0.23);
    });
  }

  // 4. ÂM THANH LẬT THẺ (FLASHCARD / MEMORY FLIP): Tiếng "Swoosh" lật giấy dứt khoát
  playCardFlip() {
    if (!this.sfxEnabled) return;
    this.resumeContext();
    if (!this.audioCtx) return;

    const ctx = this.audioCtx;
    const now = ctx.currentTime;

    // Tiếng gõ nhẹ của cạnh thẻ
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(90, now + 0.06);

    oscGain.gain.setValueAtTime(0.16, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

    osc.connect(oscGain);
    oscGain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.07);

    // Tiếng sột soạt gió lật nhanh (Filtered White Noise Burst)
    try {
      const bufferSize = Math.floor(ctx.sampleRate * 0.08);
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(800, now);
      filter.frequency.exponentialRampToValueAtTime(2400, now + 0.04);
      filter.frequency.exponentialRampToValueAtTime(700, now + 0.08);
      filter.Q.value = 3.0;

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.08, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      whiteNoise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(ctx.destination);

      whiteNoise.start(now);
      whiteNoise.stop(now + 0.09);
    } catch (e) {
      // Fallback nhẹ nhàng nếu browser hạn chế buffer
    }
  }

  // 5. ÂM THANH CHIẾN THẮNG & TIẾNG PHÁO HOA NỔ (VICTORY FANFARE & FIREWORKS)
  playVictory() {
    this.playFireworks();
  }

  playFireworks() {
    if (!this.sfxEnabled) return;
    this.resumeContext();
    if (!this.audioCtx) return;

    const ctx = this.audioCtx;
    const now = ctx.currentTime;

    // GIAI ĐOẠN 1: FANFARE KÈN CHIẾN THẮNG (Triumphant Brass Melody)
    const melody = [
      { f: 523.25, time: 0.00, dur: 0.12 }, // C5
      { f: 523.25, time: 0.14, dur: 0.12 }, // C5
      { f: 523.25, time: 0.28, dur: 0.12 }, // C5
      { f: 659.25, time: 0.42, dur: 0.32 }, // E5
      { f: 587.33, time: 0.76, dur: 0.14 }, // D5
      { f: 659.25, time: 0.92, dur: 0.14 }, // E5
      { f: 783.99, time: 1.08, dur: 0.60 }  // G5
    ];

    melody.forEach(item => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(item.f, now + item.time);

      gain.gain.setValueAtTime(0.001, now + item.time);
      gain.gain.exponentialRampToValueAtTime(0.25, now + item.time + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + item.time + item.dur);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + item.time);
      osc.stop(now + item.time + item.dur + 0.05);
    });

    // GIAI ĐOẠN 2: CHÙM PHÁO HOA NỔ ĐÙNG ĐOÀNG & LÁCH TÁCH
    const bursts = [0.85, 1.25, 1.65, 2.05];

    bursts.forEach((burstTime, idx) => {
      const t = now + burstTime;

      // 1. Tiếng rít vút lên trời (Rocket Whistle Launch)
      const whistleOsc = ctx.createOscillator();
      const whistleGain = ctx.createGain();

      whistleOsc.type = 'sine';
      whistleOsc.frequency.setValueAtTime(320 + idx * 80, t - 0.25);
      whistleOsc.frequency.exponentialRampToValueAtTime(1400 + idx * 120, t);

      whistleGain.gain.setValueAtTime(0.001, t - 0.25);
      whistleGain.gain.exponentialRampToValueAtTime(0.08, t - 0.05);
      whistleGain.gain.exponentialRampToValueAtTime(0.0001, t);

      whistleOsc.connect(whistleGain);
      whistleGain.connect(ctx.destination);

      whistleOsc.start(t - 0.25);
      whistleOsc.stop(t);

      // 2. Tiếng nổ trầm "BÙM" (Sub-bass explosion)
      const boomOsc = ctx.createOscillator();
      const boomGain = ctx.createGain();

      boomOsc.type = 'sine';
      boomOsc.frequency.setValueAtTime(120, t);
      boomOsc.frequency.exponentialRampToValueAtTime(35, t + 0.35);

      boomGain.gain.setValueAtTime(0.35, t);
      boomGain.gain.exponentialRampToValueAtTime(0.001, t + 0.40);

      boomOsc.connect(boomGain);
      boomGain.connect(ctx.destination);

      boomOsc.start(t);
      boomOsc.stop(t + 0.42);

      // 3. Tiếng pháo hoa nổ lách tách ánh sáng (Crackling sparkles noise)
      try {
        const noiseDuration = 0.45;
        const bufferSize = Math.floor(ctx.sampleRate * noiseDuration);
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);

        for (let i = 0; i < bufferSize; i++) {
          data[i] = (Math.random() > 0.85) ? (Math.random() * 2 - 1) : (Math.random() * 0.1 - 0.05);
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;

        const noiseFilter = ctx.createBiquadFilter();
        noiseFilter.type = 'highpass';
        noiseFilter.frequency.setValueAtTime(1600, t);

        const sparkGain = ctx.createGain();
        sparkGain.gain.setValueAtTime(0.18, t);
        sparkGain.gain.exponentialRampToValueAtTime(0.001, t + noiseDuration);

        noise.connect(noiseFilter);
        noiseFilter.connect(sparkGain);
        sparkGain.connect(ctx.destination);

        noise.start(t);
        noise.stop(t + noiseDuration + 0.05);
      } catch (err) {
        // Fallback nhẹ nhàng
      }
    });
  }

  // Âm thanh bấm nút dễ thương (Pop Bubble)
  playPop() {
    if (!this.sfxEnabled) return;
    this.resumeContext();
    if (!this.audioCtx) return;

    const ctx = this.audioCtx;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(450, now);
    osc.frequency.exponentialRampToValueAtTime(820, now + 0.06);

    gain.gain.setValueAtTime(0.14, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.09);
  }

  // Âm thanh Bắt đầu thu âm Micro (Two-Tone Prompt)
  playMicStart() {
    if (!this.sfxEnabled) return;
    this.resumeContext();
    if (!this.audioCtx) return;

    const ctx = this.audioCtx;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(580, now);
    osc.frequency.setValueAtTime(880, now + 0.09);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.23);
  }
}

// Khởi tạo instance toàn cục sẵn sàng sử dụng
window.soundSystem = new SoundSystem();
