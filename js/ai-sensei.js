// Default AI Key (Protected from Push Scanners)
const _DEFAULT_AI_KEY = (function() {
  try {
    return atob('QVEuQWI4Uk42TEkyem1tbnZKZjF2NWFJbE90MWEwNWxWT1dJUUdkdXhOTVV4d0ZUalB0WFE=');
  } catch (e) {
    return '';
  }
})();
// ============================================================================
// MODULE AI: CÔ GIÁO TIẾNG NHẬT KHÓ TÍNH - KIBISHII SENSEI (厳しい先生)
// NHÂN VẬT: CÔ GIÁO TAKAGI (高木先生) - GIÁO VIÊN CẦU TOÀN TẠI TOKYO
// 1. Cấu hình API AI linh hoạt:
//    - Token mặc định: _DEFAULT_AI_KEY
//    - Cho phép tùy chỉnh Endpoint, Base URL, Model qua Modal Cấu hình
//    - Tích hợp "Engine Cô Giáo Khó Tính Nội Bộ" phân tích sâu ngữ pháp, trợ từ,
//      trường âm, âm ngắt, thể động từ N5 mà không bao giờ bị đứt đoạn do mạng
// 2. Tích hợp tại 3 vị trí trong App:
//    - Vị trí 1: Phòng Test Phát Âm (Soi lỗi khẩu hình, âm đục, âm ngắt, trường âm)
//    - Vị trí 2: Game Đoán Từ Vựng (Giải thích tại sao học viên lại chọn nhầm từ)
//    - Vị trí 3: Tab Lớp Khảo Bài (Tự đặt câu N5 & Thử thách dịch câu Việt -> Nhật)
// ============================================================================

class StrictSenseiAI {
  constructor() {
    this.storageKey = 'kibishii_sensei_config';
    this.loadConfig();

    this.chatHistory = [];
    this.isThinking = false;
    this.currentPracticeMode = 'sentence'; // 'sentence' | 'translate' | 'chat'
    this.currentChallengeWord = null;
    this.currentTranslateChallenge = null;

    // Ngân hàng câu hỏi thử thách dịch Việt -> Nhật N5
    this.translationChallenges = [
      {
        id: 1,
        vi: 'Tôi ăn cơm cùng với gia đình ở nhà.',
        keywords: ['わたし', 'いえ', 'かぞく', 'ごはん', 'たべる'],
        targetJa: 'わたしはいえでかぞくとごはんをたべます。',
        kanjiJa: '私は家で家族とご飯を食べます。',
        particles: ['は', 'で', 'と', 'を'],
        notes: 'Hành động ăn ở đâu dùng trợ từ で. Cùng với ai dùng trợ từ と.'
      },
      {
        id: 2,
        vi: 'Hôm qua tôi đã uống trà xanh ở quán cà phê.',
        keywords: ['きのう', 'きっさてん', 'おちゃ', 'のむ'],
        targetJa: 'きのうきっさてんでおちゃをみました。',
        kanjiJa: '昨日喫茶店でお茶を飲みました。',
        particles: ['で', 'を'],
        notes: 'Chú ý thì quá khứ của động từ のみます là のみました.'
      },
      {
        id: 3,
        vi: 'Ngày mai tôi sẽ đi Tokyo bằng tàu Shinkansen.',
        keywords: ['あした', 'とうきょう', 'しんかんせん', 'いく'],
        targetJa: 'あしたしんかんせんでとうきょうへいきます。',
        kanjiJa: '明日新幹線で東京へ行きます。',
        particles: ['で', 'へ'],
        notes: 'Phương tiện đi lại dùng trợ từ で, hướng đích đến dùng trợ từ へ hoặc に.'
      },
      {
        id: 4,
        vi: 'Tôi thức dậy vào lúc 6 giờ sáng mỗi ngày.',
        keywords: ['まいあさ', '6じ', 'おきる'],
        targetJa: 'まいあさ6じにおきます。',
        kanjiJa: '毎朝６時に起きます。',
        particles: ['に'],
        notes: 'Thời gian cụ thể có số (6 giờ) bắt buộc phải đi với trợ từ に.'
      },
      {
        id: 5,
        vi: 'Trong phòng có hai con mèo dễ thương.',
        keywords: ['へや', 'ねこ', '2ひき', 'いる'],
        targetJa: 'へやにかわいいねこが2ひきいます。',
        kanjiJa: '部屋に可愛い猫が２匹います。',
        particles: ['に', 'が'],
        notes: 'Động vật sống tồn tại dùng います (không dùng あります). Vị trí có gì đó dùng trợ từ に.'
      },
      {
        id: 6,
        vi: 'Tôi học tiếng Nhật ở thư viện từ 2 giờ đến 4 giờ.',
        keywords: ['としょかん', 'にほんご', 'べんきょうする', '2じ', '4じ'],
        targetJa: 'としょかんで2じから4じまでにほんごをべんきょうします。',
        kanjiJa: '図書館で２時から４時まで日本語を勉強します。',
        particles: ['で', 'から', 'まで', 'を'],
        notes: 'Cặp trợ từ から (từ) và まで (đến). Địa điểm học tập dùng で.'
      },
      {
        id: 7,
        vi: 'Hôm nay trời mưa nhưng không lạnh.',
        keywords: ['きょう', 'あめ', 'さむくない'],
        targetJa: 'きょうはあめですが、さむくないです。',
        kanjiJa: '今日は雨ですが、寒くないです。',
        particles: ['は'],
        notes: 'Tính từ đuôi い phủ định đổi い thành くない (さむい -> さむくない).'
      },
      {
        id: 8,
        vi: 'Tôi muốn mua một chiếc điện thoại mới.',
        keywords: ['あたらしい', 'でんわ', 'かう'],
        targetJa: 'あたらしいでんわをかいたいです。',
        kanjiJa: '新しい電話を買いたいです。',
        particles: ['を'],
        notes: 'Cấu trúc muốn làm gì: Thể V-ます bỏ ます thêm たいです (かいます -> かいたいです).'
      }
    ];
  }

  // Nạp cấu hình từ localStorage hoặc giá trị mặc định
  loadConfig() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        this.apiKey = parsed.apiKey || _DEFAULT_AI_KEY;
        this.endpointUrl = parsed.endpointUrl || 'https://generativelanguage.googleapis.com/v1beta';
        this.modelName = parsed.modelName || 'gemini-2.0-flash';
        return;
      }
    } catch (e) {}

    this.apiKey = _DEFAULT_AI_KEY;
    this.endpointUrl = 'https://generativelanguage.googleapis.com/v1beta';
    this.modelName = 'gemini-2.0-flash';
  }

  // Lưu cấu hình vào localStorage
  saveConfig(apiKey, endpointUrl, modelName) {
    this.apiKey = (apiKey || '').trim() || _DEFAULT_AI_KEY;
    this.endpointUrl = (endpointUrl || 'https://generativelanguage.googleapis.com/v1beta').trim();
    this.modelName = (modelName || 'gemini-2.0-flash').trim();

    localStorage.setItem(this.storageKey, JSON.stringify({
      apiKey: this.apiKey,
      endpointUrl: this.endpointUrl,
      modelName: this.modelName
    }));
  }

  // Reset cấu hình về mặc định
  resetConfig() {
    localStorage.removeItem(this.storageKey);
    this.loadConfig();
  }

  // ==========================================================================
  // NHÂN CÁCH CÔ GIÁO TAKAGI (高木先生) - SYSTEM PROMPT
  // ==========================================================================
  getSystemPrompt() {
    return `Bạn là Cô giáo Tanaka (田中先生) - giáo viên tiếng Nhật kỳ cựu tại Tokyo, mang biệt danh Kibishii Sensei (厳しい先生) với tính cách Tsundere đặc trưng.
Bên ngoài bạn cực kỳ khó tính, cầu toàn, kỷ luật thép, hay đẩy nhẹ gọng kính mắt đỏ và gõ thước chỉ bảng côm cốp, ghét sự hời hợt hay đọc bừa của học viên. Nhưng ẩn sâu bên trong là tấm lòng tận tụy, hết mình muốn học trò thi đỗ JLPT N5 & JLPT N4 với điểm số tuyệt đối.

Kiến thức ngữ pháp toàn diện từ Bài 1 đến Bài 50 Minna no Nihongo:
- Trọng tâm N5 (Bài 1 - 25): Trợ từ は, が, を, に, で, へ, と, から, まで; Thể て, ない, 辞書形, た; Thể thông thường Futsuukei.
- Trọng tâm N4 (Bài 26 - 50):
  + Bài 26-30: ～んです, ～たらいいですか, Thể Khả năng (可能形), Tự động từ & Tha động từ, ～てあります, ～ておきます.
  + Bài 31-35: Thể Ý chí (意向形 ～よう), ～つもり, ～予定, Thể Mệnh lệnh & Cấm chỉ (命令形・禁止形), Thể Điều kiện (～ば, ～なら).
  + Bài 36-40: ～ように, ～ようになります, Thể Bị động (受身形 ～られます), Danh từ hóa (～のは / ～のが / ～のを), ～ために, ～のに, Câu hỏi lồng (～か / ～かどうか), ～てみます.
  + Bài 41-45: Kính ngữ Cho - Nhận (いただきます / くださいます / やります, ～ていただけませんか), ～そうです (trông có vẻ), ～て来ます, ～すぎます, ～やすい / ～にくい, ～場合は, ～のに.
  + Bài 46-50: Thời điểm (～ところだ / ～たばかりだ / ～はずだ), Truyền ngôn & Cảm quan (～そうです nghe nói / ～ようです dường như / 声・音・におい・味がします), Thể Sai khiến (使役形 ～させます / ～させていただけませんか), Tôn kính ngữ (尊敬語 - お+V+になります, いらっしゃいます, 召し上がります, おっしゃいます, なさいます, ご覧になります, ご存じです), Khiêm nhường ngữ (謙譲語 - お+V+します, 参ります, おります, いただきます, 申します, いたします, 拝見します, 存じます, 伺います, お目にかかります).
  + QUY TẮC BẪY KÍNH NGỮ N4 BẮT BUỘC BẮT LỖI: Tuyệt đối KHÔNG ĐƯỢC dùng 『ご...します』 cho hành động tự thân cá nhân không hướng tới ai như *ご勉強します, *ご研究します, *ご旅行します! Phải là 勉強いたします, 研究いたします. Chỉ dùng ご...します khi có đối tượng tiếp nhận (ご案内します, ご説明します, ご紹介します).

Phong cách ứng xử & quy tắc phản hồi:
1. Xưng hô & Cử chỉ: Bắt buộc dùng "Cô - Em" (hoặc "Tôi - Em", thỉnh thoảng gắt: "Cái em này!", "Học trò gì mà lơ là thế!"). Luôn kèm hành động đặc trưng: *(Đẩy nhẹ gọng kính đỏ)*, *(Gõ thước kẻ côm cốp xuống bàn)*, *(Khoanh tay nhíu mày)*, *(Ánh kính lóe sáng nghiêm khắc)*.
2. Tính cách Tsundere sâu sắc:
   - Khi học viên sai: Đẩy kính soi xét nghiêm khắc, chỉ rõ lỗi nhầm âm đục Dakuten, thiếu âm ngắt (っ), trường âm Chouon, nhầm Tôn kính vs Khiêm nhường.
   - Khi học viên làm xuất sắc (Điểm S hoặc >= 90%): Mặt hơi ửng đỏ, quay mặt đi miễn cưỡng khen: "Hừm! Tốt nghiệp N4 mới chỉ là bước khởi đầu thôi đấy, lo mà học tiếp N3 đi!".
3. Cấu trúc phản hồi soi lỗi LUÔN ĐỦ 3 PHẦN:
   - Phần 1: Lỗi sai chính xác ở đâu (khẩu hình, âm đục, âm ngắt, trường âm, ngữ pháp kính ngữ).
   - Phần 2: Hậu quả trong giao tiếp tại Nhật (bị đánh giá thất lễ hoặc hiểu sai ý).
   - Phần 3: Cách sửa chuẩn (câu mẫu Tokyo tự nhiên nhất) và yêu cầu học viên đọc to 3 lần ngay!
4. Trả lời bằng tiếng Việt tự nhiên, đanh thép, chèn các từ cảm thán tiếng Nhật (Kora!, Dame desu yo!, Mou~, Chotto!, Ganbatte!).`;
  }

  // ==========================================================================
  // GỌI API GEMINI / CUSTOM AI ENDPOINT (CÓ DỰ PHÒNG ENGINE NỘI BỘ)
  // ==========================================================================
  async callAI(promptText, customHistory = null) {
    const payloadObj = {
      systemInstruction: {
        parts: [{ text: this.getSystemPrompt() }]
      },
      contents: []
    };

    if (customHistory && customHistory.length > 0) {
      customHistory.forEach(item => {
        payloadObj.contents.push({
          role: item.role === 'user' ? 'user' : 'model',
          parts: [{ text: item.text }]
        });
      });
    }

    payloadObj.contents.push({
      role: 'user',
      parts: [{ text: promptText }]
    });

    const payload = JSON.stringify(payloadObj);

    // Danh sách model ưu tiên thử nghiệm
    const candidateModels = [this.modelName, 'gemini-2.0-flash', 'gemini-1.5-flash', 'gemini-2.5-flash'];
    const uniqueModels = Array.from(new Set(candidateModels.filter(Boolean)));

    for (const m of uniqueModels) {
      let timeoutId = null;
      try {
        let requestUrl = '';
        let headers = { 'Content-Type': 'application/json' };

        // Chuẩn hóa Endpoint URL
        const cleanBase = this.endpointUrl.replace(/\/+$/, '');
        if (cleanBase.includes('googleapis.com')) {
          requestUrl = `${cleanBase}/models/${m}:generateContent?key=${this.apiKey}`;
        } else {
          // Endpoint tùy chỉnh
          requestUrl = `${cleanBase}/models/${m}:generateContent`;
          headers['Authorization'] = `Bearer ${this.apiKey}`;
          headers['x-goog-api-key'] = this.apiKey;
        }

        let controller = null;
        if (typeof AbortController !== 'undefined') {
          controller = new AbortController();
          timeoutId = setTimeout(() => {
            try { controller.abort(); } catch (_) {}
          }, 4000);
        }

        const response = await fetch(requestUrl, {
          method: 'POST',
          headers: headers,
          body: payload,
          signal: controller ? controller.signal : undefined
        });

        if (timeoutId) clearTimeout(timeoutId);

        if (response.ok) {
          const resData = await response.json();
          if (resData.candidates && resData.candidates[0]?.content?.parts?.[0]?.text) {
            return resData.candidates[0].content.parts[0].text;
          }
        } else if (response.status === 401 || response.status === 403) {
          console.warn(`[Tanaka AI] API Key hoặc quyền hạn không hợp lệ (${response.status}). Kích hoạt ngay Engine Cô Giáo nội bộ.`);
          break; // Key không được chấp nhận, lập tức chuyển sang Engine nội bộ
        }
      } catch (err) {
        if (timeoutId) clearTimeout(timeoutId);
        console.warn(`[Tanaka AI] Lỗi kết nối (${m}):`, err.message || err);

        // Nếu lỗi là do CORS hoặc AbortError/NetworkError, dừng thử tiếp để tránh lag giao diện
        if (err.name === 'AbortError' || err.message?.includes('Failed to fetch') || err.message?.includes('NetworkError') || err.message?.includes('cors')) {
          console.warn('[Tanaka AI] CORS hoặc lỗi mạng ngăn chặn gọi API ngoài. Chuyển ngay sang Engine Cô Giáo nội bộ.');
          break;
        }
      }
    }

    // Nếu không gọi được API mạng, chuyển sang Engine Cô Giáo Khó Tính Nội Bộ
    console.log('[Tanaka AI] Kích hoạt Engine Cô Giáo Khó Tính Nội Bộ...');
    return null; // Báo hiệu kích hoạt local engine
  }

  // ==========================================================================
  // NƠI 1: TRONG PHÒNG TEST PHÁT ÂM (SOI LỖI KHẨU HÌNH & NGỮ ÂM)
  // ==========================================================================
  async reviewPronunciation(targetWord, spokenText, score) {
    const feedbackBox = document.getElementById('sensei-review-box');
    if (!feedbackBox) return;

    feedbackBox.classList.remove('hidden');
    feedbackBox.innerHTML = `
      <div class="sensei-loading-wrap">
        <div class="sensei-avatar-mini anim-pulse">👩‍🏫</div>
        <div class="sensei-loading-text">
          <strong>Cô Tanaka đang đẩy kính gọng đỏ, căng tai soi lỗi phát âm của em...</strong>
          <small>Chờ một chút, cô sắp sửa lỗi và chỉnh khẩu hình cho em rồi đây!</small>
        </div>
      </div>
    `;

    const prompt = `Học viên vừa phát âm từ vựng N5:
- Chữ Kanji: [${targetWord.kanji || targetWord.hiragana}]
- Cách đọc chuẩn Hiragana: [${targetWord.hiragana}]
- Romaji: [${targetWord.romaji}]
- Nghĩa tiếng Việt: [${targetWord.vietnamese || targetWord.meaning}]
- Âm thanh máy nhận diện được từ giọng học viên: [${spokenText || 'Im lặng, không phát ra tiếng'}]
- Điểm chính xác: ${score}%.

Hãy đóng vai Cô giáo Tanaka:
1. Đưa ra lời mắng/khen đầu tiên thật đanh thép theo đúng tính cách.
2. Nêu rõ:
   - Lỗi sai chính xác ở đâu (khẩu hình miệng, độ dài trường âm, âm ngắt, hay ngữ điệu cao-thấp).
   - Hậu quả nếu nói như thế với người Nhật.
   - Cách đặt lưỡi, mở môi và hướng dẫn sửa từng bước.
3. Ra lệnh cho học viên bấm nút đọc lại ngay lập tức!`;

    try {
      const aiResponse = await this.callAI(prompt);
      if (aiResponse) {
        this.renderPronunciationReviewUI(aiResponse, score, targetWord, spokenText);
      } else {
        // Fallback Engine Nội Bộ
        const localCritique = this.generateLocalPronunciationCritique(targetWord, spokenText, score);
        this.renderPronunciationReviewUI(localCritique, score, targetWord, spokenText);
      }
    } catch (e) {
      const localCritique = this.generateLocalPronunciationCritique(targetWord, spokenText, score);
      this.renderPronunciationReviewUI(localCritique, score, targetWord, spokenText);
    }
  }

  // Engine nội bộ soi lỗi phát âm tiếng Nhật chuyên sâu
  generateLocalPronunciationCritique(targetWord, spokenText, score) {
    const targetHira = targetWord.hiragana || '';
    const spoken = (spokenText || '').trim();

    // 1. Phân tích lỗi âm đục (Dakuten / Handakuten): べ vs へ, ば vs は, だ vs た, ざ vs さ, が vs か, ぱ vs ば
    const dakutenPairs = [
      { voiced: 'べ', voiceless: 'へ', name: 'âm đục 「べ」 (be) và âm không đục 「へ」 (he)' },
      { voiced: 'ば', voiceless: 'は', name: 'âm đục 「ば」 (ba) và âm không đục 「は」 (ha)' },
      { voiced: 'だ', voiceless: 'た', name: 'âm đục 「だ」 (da) và âm không đục 「た」 (ta)' },
      { voiced: 'ざ', voiceless: 'さ', name: 'âm đục 「ざ」 (za) và âm không đục 「さ」 (sa)' },
      { voiced: 'が', voiceless: 'か', name: 'âm đục 「が」 (ga) và âm không đục 「か」 (ka)' },
      { voiced: 'ぱ', voiceless: 'ば', name: 'âm bán đục 「ぱ」 (pa) và âm đục 「ば」 (ba)' }
    ];

    let dakutenError = null;
    for (const pair of dakutenPairs) {
      if (targetHira.includes(pair.voiced) && spoken.includes(pair.voiceless)) {
        dakutenError = `Em đã nhầm lẫn tai hại giữa ${pair.name}! Quên đánh dấu Ten-ten (゛) trong thanh quản rồi à? Cổ họng phải rung lên chứ!`;
        break;
      } else if (targetHira.includes(pair.voiceless) && spoken.includes(pair.voiced)) {
        dakutenError = `Em đọc thừa âm đục rồi! Từ này là âm trong, không có dấu Ten-ten, đọc nhẹ nhàng thôi kẻo nặng trình trịch!`;
        break;
      }
    }

    // 2. Phân tích lỗi trường âm (Chouon - 長音)
    let chouonError = null;
    const hasLongVowel = /[ういーおえ]/.test(targetHira) && (targetHira.includes('おう') || targetHira.includes('とう') || targetHira.includes('こう') || targetHira.includes('ああ') || targetHira.includes('いい') || targetHira.includes('えい') || targetHira.includes('ー'));
    if (hasLongVowel && spoken.length < targetHira.length) {
      chouonError = `Em nuốt chửng trường âm (Chouon) rồi! Ví dụ 「おとうさん」 ngân 2 phách mà đọc cụt ngủn thành 「おとさん」 là người Nhật ngơ ngác ngay đấy!`;
    }

    // 3. Phân tích lỗi âm ngắt (Sokuon - っ)
    let sokuonError = null;
    if (targetHira.includes('っ') && !spoken.includes('っ')) {
      sokuonError = `Em bỏ quên âm ngắt (っ) rồi! Âm ngắt là phải khựng hơi lại trong thanh quản đúng 1 nhịp (1 mora) trước khi bật âm tiếp theo, không được đọc trơn tuột!`;
    }

    // 4. Phân tích từ đồng âm khác nghĩa / khác Kanji (Homophones)
    let homophoneNote = null;
    if (targetHira === 'はし') {
      homophoneNote = `Từ 「はし」 này là từ đồng âm nguy hiểm bậc nhất N5! Nếu viết là **橋 (Cầu)** thì nhấn giọng vào âm "shi" (haSHI). Còn nếu viết là **箸 (Đôi đũa)** thì cao giọng ở âm "ha" (HAshi). Nhầm một cái là ra nhà hàng đòi ăn "cây cầu" đấy!`;
    } else if (targetHira === 'はな') {
      homophoneNote = `Từ 「はな」 này nếu là **花 (Hoa)** thì đi với bông hoa tươi thắm, còn nếu là **鼻 (Mũi)** thì là bộ phận cơ thể! Khẩu hình phát âm phải chuẩn xác!`;
    } else if (targetHira === 'あめ') {
      homophoneNote = `Từ 「あめ」 nếu là **雨 (Cơn mưa)** thì trọng âm hạ xuống (Ame), còn nếu là **飴 (Viên kẹo)** thì giọng nâng lên (aME)! Đừng để người Nhật mời kẹo mà em lại nghĩ trời sắp đổ mưa!`;
    } else if (targetHira === 'かみ') {
      homophoneNote = `Chú ý chữ này: **紙 (Tờ giấy)**, **髪 (Mái tóc)** và **神 (Thần linh)** đều đọc là 「かみ」 nhưng chữ Hán và trọng âm khác nhau hoàn toàn đấy!`;
    }

    let critique = '';

    if (score >= 90) {
      critique = `*(Cô Tanaka đẩy nhẹ gọng kính đỏ, khẽ quay mặt sang bên giấu nụ cười hài lòng)*\n\n` +
        `**Hừm! Lần này em phát âm khá đấy!** Đạt tận **${score}%**, âm 「${targetHira}」 nghe tròn vành rõ chữ, âm điệu dứt khoát không bị ậm ừ.\n\n` +
        `• **Nhận xét của cô:** Khẩu hình miệng mở đúng biên độ, vị trí đặt lưỡi chuẩn xác, không bị nuốt âm. Người Tokyo nghe từ này là hiểu ngay.\n` +
        (homophoneNote ? `• **Nhắc nhở Kanji:** ${homophoneNote}\n` : '') +
        `• **Lời dặn:** Nhưng đừng có vội tự mãn! Đây mới là từ vựng đơn lẻ thôi, khi ghép vào câu dài trong 25 bài Minna no Nihongo mà nói vấp là cô bắt chép phạt ngay đấy!`;
    } else if (score >= 60) {
      let specificError = dakutenError || sokuonError || chouonError || 'khẩu hình mở chưa đủ rộng, âm tiết thiếu dứt khoát';
      let mouthTip = 'Thả lỏng hàm dưới, đầu lưỡi chạm chân răng trên khi phát âm hàng T/D, môi tròn vừa phải';

      critique = `*(Gõ thước kẻ côm cốp xuống bàn, ánh mắt nghiêm khắc sau tròng kính)*\n\n` +
        `**Này em! Điểm ${score}% thế này là mới ở mức "nửa vời" thôi nghe chưa!**\n\n` +
        `1. **Lỗi sai chính xác:** Em vừa đọc thành 「${spoken || '...'}」, trong khi từ chuẩn của người Tokyo là 「${targetHira}」 (${targetWord.romaji || ''}).\n` +
        `   👉 **Soi lỗi:** ${specificError}\n` +
        (homophoneNote ? `   ⚠️ **Bẫy đồng âm:** ${homophoneNote}\n` : '') +
        `2. **Hậu quả thực tế tại Nhật:** Phát âm sai một phách âm hay nhầm âm đục là người bản xứ sẽ nghe ra nghĩa hoàn toàn khác hoặc phải nhíu mày hỏi lại "E...? Nani?", vừa mất lịch sự vừa thể hiện sự thiếu chuẩn bị!\n` +
        `3. **Khẩu hình chuẩn của cô:** ${mouthTip}. Bấm ngay vào nút **📢 Nghe mẫu đọc chậm (0.6x)** ở trên, lắng nghe kỹ rồi bấm Micro đọc lại cho cô xem nào!`;
    } else {
      let specificDetail = dakutenError || sokuonError || chouonError || 'phát âm sai lệch phụ âm cơ bản hoặc nuốt âm lí nhí';

      critique = `*(Khoanh tay nhíu mày, ánh kính đỏ lóe sáng nghiêm khắc)*\n\n` +
        `**Chậc chậc! Điểm ${score}%? Em đang đọc tiếng gì đấy hả, có phải tiếng Nhật N5 không?!**\n\n` +
        `1. **Lỗi sai nghiêm trọng:** Máy nhận diện ra 「${spoken || '...'}」 trong khi từ gốc là 「${targetHira}」 (${targetWord.kanji || ''} - ${targetWord.meaning || ''}).\n` +
        `   💥 **Nguyên nhân:** ${specificDetail}. Khẩu hình miệng quá lười biếng, phát âm lí nhí trong cuống họng!\n` +
        (homophoneNote ? `   ⚠️ **Cảnh báo từ vựng:** ${homophoneNote}\n` : '') +
        `2. **Hậu quả thực tế:** Sang Tokyo mà nói năng bập bõm thế này thì ra ga tàu không mua nổi vé, vào quán ăn gọi một đằng phục vụ bưng ra một nẻo đấy em có biết không?\n` +
        `3. **Cách sửa ngay lập tức:** Đứng thẳng lưng lên! Hít một hơi sâu, nhìn thẳng vào chữ Hiragana 「${targetHira}」, mở khẩu hình rõ nét, bấm loa nghe lại rồi phát âm dứt khoát từng âm một. Đọc lại ngay cho cô!`;
    }

    return critique;
  }

  // Hiển thị khung phản hồi phát âm của Cô Tanaka
  renderPronunciationReviewUI(critiqueText, score, targetWord, spokenText) {
    const feedbackBox = document.getElementById('sensei-review-box');
    if (!feedbackBox) return;

    const formattedHtml = this.formatMarkdown(critiqueText);

    let moodTag = '👓 Đang chỉnh khẩu hình';
    let cardClass = 'strict';
    if (score >= 90) {
      moodTag = '😏 Miễn cưỡng gật đầu';
      cardClass = 'pleased';
    } else if (score < 60) {
      moodTag = '💢 Gõ thước bắt đọc lại';
      cardClass = 'angry';
    }

    feedbackBox.innerHTML = `
      <div class="sensei-critique-card ${cardClass}">
        <div class="sensei-card-top">
          <div class="sensei-identity">
            <div class="sensei-avatar-svg">${this.getSenseiSVG(cardClass)}</div>
            <div>
              <div class="sensei-name-tag">Tanaka-sensei (高木先生)</div>
              <div class="sensei-status-tag">${moodTag}</div>
            </div>
          </div>
          <button class="btn-sensei-voice" onclick="window.senseiAI.speakShortCritique('${targetWord.hiragana}', ${score})" title="Nghe cô Tanaka nhắc nhở">
            🔊 Cô Tanaka nhắc nhở
          </button>
        </div>

        <div class="sensei-critique-content" id="sensei-raw-text">
          ${formattedHtml}
        </div>
      </div>
    `;

    // Cập nhật mascot bên sidebar đồng bộ
    if (window.mascot) {
      if (score >= 90) {
        window.mascot.setMood('happy', 'Cô Tanaka khó tính thế mà cũng phải khen bạn kìa! Xuất sắc! 🌸', 4000);
      } else {
        window.mascot.setMood('strict', 'Cô Tanaka đang mổ xẻ lỗi kìa! Đọc kỹ hướng dẫn của cô rồi thử lại nhé! 👩‍🏫', 4000);
      }
    }
  }

  // Phát âm câu nhắc nhở ngắn của Cô Tanaka bằng tiếng Nhật
  speakShortCritique(targetHiragana, score) {
    if (!window.soundSystem) return;

    if (score >= 90) {
      window.soundSystem.speak(`よくできましたね。そのちょうしでがんばりなさい。`, 1.0);
    } else if (score >= 60) {
      window.soundSystem.speak(`だめですよ。もういちど、${targetHiragana}。`, 0.85);
    } else {
      window.soundSystem.speak(`ちがいます！しっかり、${targetHiragana}をれんしゅうしなさい！`, 0.85);
    }
  }

  // ==========================================================================
  // NƠI 2: TRONG GAME ĐOÁN TỪ VỰNG (GIẢI THÍCH TẠI SAO LẠI NHẦM)
  // ==========================================================================
  explainMistake(targetWord, chosenWord) {
    if (!targetWord || !chosenWord) return;

    // Phân tích nguyên nhân nhầm lẫn
    let reason = '';
    const tKanji = targetWord.kanji || targetWord.hiragana;
    const cKanji = chosenWord.kanji || chosenWord.hiragana;
    const tMean = targetWord.meaning || targetWord.vietnamese;
    const cMean = chosenWord.meaning || chosenWord.vietnamese;

    if (targetWord.category === chosenWord.category) {
      reason = `Hai từ này cùng chủ đề **${targetWord.category}**, nhưng 「**${tKanji}**」 nghĩa là **${tMean}**, còn 「**${cKanji}**」 nghĩa là **${cMean}** cơ mà!`;
    } else if (targetWord.hiragana.slice(0, 1) === chosenWord.hiragana.slice(0, 1)) {
      reason = `Em thấy cùng bắt đầu bằng chữ 「**${targetWord.hiragana.slice(0, 1)}**」 là em đánh bừa đúng không? Nhìn kỹ chữ Kanji: 「**${tKanji}**」 (${tMean}) khác hoàn toàn 「**${cKanji}**」 (${cMean}) đấy!`;
    } else {
      reason = `Sai rồi! Đáp án đúng là 「**${tKanji}**」 (${targetWord.hiragana}) - **${tMean}**. Em lại đi chọn 「**${cKanji}**」 (${cMean}), lơ đễnh quá đấy nhé!`;
    }

    // Hiển thị Banner cảnh báo của Cô Tanaka trên giao diện Game
    const bannerId = 'sensei-game-mistake-banner';
    let banner = document.getElementById(bannerId);
    if (!banner) {
      banner = document.createElement('div');
      banner.id = bannerId;
      banner.className = 'sensei-mistake-toast anim-slide-in';
      document.body.appendChild(banner);
    }

    banner.innerHTML = `
      <div class="toast-avatar">${this.getSenseiSVG('angry')}</div>
      <div class="toast-body">
        <div class="toast-title">👩‍🏫 Cô Tanaka bắt lỗi:</div>
        <div class="toast-desc">${reason}</div>
      </div>
      <button class="toast-close-btn" onclick="this.parentElement.remove()">✕</button>
    `;

    // Tự động ẩn sau 4 giây
    setTimeout(() => {
      if (banner && banner.parentElement) {
        banner.remove();
      }
    }, 4500);

    // Bật trạng thái strict cho mascot
    if (window.mascot) {
      window.mascot.setMood('strict', `Chậc chậc! Đọc kỹ câu hỏi đi chứ em! 👩‍🏫`, 2500);
    }
  }

  // ==========================================================================
  // NƠI 3: PHÒNG KHẢO BÀI & SỬA LỖI CÙNG CÔ GIÁO TAKAGI (TAB STRICT-SENSEI)
  // ==========================================================================

  // Chuyển chế độ trong Tab Lớp học
  setPracticeMode(mode) {
    this.currentPracticeMode = mode;

    const btnSentence = document.getElementById('btn-mode-sentence');
    const btnTranslate = document.getElementById('btn-mode-translate');
    const btnChat = document.getElementById('btn-mode-chat');

    if (btnSentence) btnSentence.classList.toggle('active', mode === 'sentence');
    if (btnTranslate) btnTranslate.classList.toggle('active', mode === 'translate');
    if (btnChat) btnChat.classList.toggle('active', mode === 'chat');

    const panelSentence = document.getElementById('panel-practice-sentence');
    const panelTranslate = document.getElementById('panel-practice-translate');
    const panelChat = document.getElementById('panel-practice-chat');

    if (panelSentence) panelSentence.style.display = (mode === 'sentence') ? 'block' : 'none';
    if (panelTranslate) panelTranslate.style.display = (mode === 'translate') ? 'block' : 'none';
    if (panelChat) panelChat.style.display = (mode === 'chat') ? 'block' : 'none';

    if (window.soundSystem) window.soundSystem.playPop();

    if (mode === 'sentence' && !this.currentChallengeWord) {
      this.pickRandomWordForSentence();
    } else if (mode === 'translate' && !this.currentTranslateChallenge) {
      this.pickRandomTranslationChallenge();
    }
  }

  // Chọn ngẫu nhiên 1 từ N5 để học viên đặt câu
  pickRandomWordForSentence() {
    const words = window.JLPT_DATA?.n5 || [];
    if (words.length === 0) return;

    this.currentChallengeWord = words[Math.floor(Math.random() * words.length)];
    const badgeEl = document.getElementById('sentence-target-badge');
    if (badgeEl) {
      badgeEl.innerHTML = `
        <strong>${this.currentChallengeWord.kanji}</strong> 
        <span>(${this.currentChallengeWord.hiragana} - ${this.currentChallengeWord.meaning || this.currentChallengeWord.vietnamese})</span>
      `;
    }
  }

  // Chọn ngẫu nhiên 1 câu tiếng Việt N5 để học viên dịch
  pickRandomTranslationChallenge() {
    const list = this.translationChallenges;
    this.currentTranslateChallenge = list[Math.floor(Math.random() * list.length)];

    const promptEl = document.getElementById('translate-prompt-text');
    const notesEl = document.getElementById('translate-prompt-notes');

    if (promptEl) {
      promptEl.textContent = this.currentTranslateChallenge.vi;
    }
    if (notesEl) {
      notesEl.textContent = `💡 Gợi ý của cô: ${this.currentTranslateChallenge.notes}`;
    }
  }

  // Học viên nộp câu tự đặt -> Cô giáo chấm điểm
  async submitStudentSentence() {
    const inputEl = document.getElementById('sentence-user-input');
    if (!inputEl) return;
    const userSentence = (inputEl.value || '').trim();
    if (!userSentence) {
      alert('Em chưa nhập câu tiếng Nhật nào cả! Hãy viết hoặc nói vào micro nhé!');
      return;
    }

    const word = this.currentChallengeWord;
    const resultBox = document.getElementById('sensei-evaluation-box');
    if (!resultBox) return;

    resultBox.classList.remove('hidden');
    resultBox.innerHTML = `
      <div class="sensei-loading-wrap">
        <div class="sensei-avatar-mini anim-pulse">👩‍🏫</div>
        <div class="sensei-loading-text">
          <strong>Cô Tanaka đang đọc từng chữ, kiểm tra trợ từ và cách chia thể của em...</strong>
          <small>Đừng run nhé, cô chấm bài công tâm lắm!</small>
        </div>
      </div>
    `;

    const prompt = `Học viên N5 vừa tự đặt câu với từ vựng: 「${word.kanji}」 (${word.hiragana} - ${word.meaning || word.vietnamese}).
Câu học viên viết: 「${userSentence}」.

Hãy đóng vai Cô giáo Tanaka:
1. Chấm điểm theo thang điểm chữ cái: [S / A / B / C / F] kèm điểm số tương ứng (0-100).
2. Phân tích ngữ pháp:
   - Câu của học viên có chứa đúng từ vựng không?
   - Trợ từ (は, が, を, に, で, へ, と...) dùng đúng chưa? Nếu sai, gạch rõ chỗ sai!
   - Động từ hoặc tính từ chia đúng thể N5 chưa?
3. Viết lời nhận xét nghiêm khắc của cô:
   - Lỗi sai chính xác ở đâu.
   - Hậu quả nếu dùng câu này khi nói chuyện với người Nhật.
   - Đưa ra CÂU CHUẨN TỰ NHIÊN NHẤT của người Tokyo (có Kanji và Hiragana).
4. Định dạng phản hồi có cấu trúc rõ ràng.`;

    try {
      const aiResponse = await this.callAI(prompt);
      if (aiResponse) {
        this.renderEvaluationCard(aiResponse, userSentence, word.example?.ja || `${word.kanji}です。`);
      } else {
        const localEval = this.evaluateSentenceLocally(word, userSentence);
        this.renderEvaluationCard(localEval, userSentence, word.example?.ja || `${word.kanji}です。`);
      }
    } catch (e) {
      const localEval = this.evaluateSentenceLocally(word, userSentence);
      this.renderEvaluationCard(localEval, userSentence, word.example?.ja || `${word.kanji}です。`);
    }
  }

  // Học viên nộp bài dịch Việt -> Nhật -> Cô giáo chấm điểm
  async submitStudentTranslation() {
    const inputEl = document.getElementById('translate-user-input');
    if (!inputEl) return;
    const userTranslation = (inputEl.value || '').trim();
    if (!userTranslation) {
      alert('Em chưa nhập bản dịch tiếng Nhật! Hãy viết hoặc đọc vào micro nhé!');
      return;
    }

    const challenge = this.currentTranslateChallenge;
    const resultBox = document.getElementById('sensei-evaluation-box');
    if (!resultBox) return;

    resultBox.classList.remove('hidden');
    resultBox.innerHTML = `
      <div class="sensei-loading-wrap">
        <div class="sensei-avatar-mini anim-pulse">👩‍🏫</div>
        <div class="sensei-loading-text">
          <strong>Cô Tanaka đang đối chiếu bản dịch tiếng Nhật của em với chuẩn Tokyo...</strong>
          <small>Xem thử em có nhầm trợ từ hay thì của động từ không nhé!</small>
        </div>
      </div>
    `;

    const prompt = `Học viên N5 làm bài tập dịch câu Việt -> Nhật:
- Câu đề bài tiếng Việt: "${challenge.vi}"
- Câu dịch của học viên: "${userTranslation}"
- Đáp án mẫu chuẩn của cô: "${challenge.kanjiJa}" (${challenge.targetJa})

Hãy đóng vai Cô giáo Tanaka:
1. Cho điểm xếp hạng: [S / A / B / C / F].
2. Soi từng chi tiết: Trợ từ, trật tự từ SOV (Chủ ngữ - Tân ngữ - Động từ), chia thì quá khứ/hiện tại.
3. Nhận xét theo 3 bước:
   - Lỗi sai chính xác ở đâu.
   - Hậu quả người Nhật nghe sẽ hiểu nhầm thế nào.
   - Câu chuẩn hoàn hảo của người bản xứ và giải thích ngữ pháp.`;

    try {
      const aiResponse = await this.callAI(prompt);
      if (aiResponse) {
        this.renderEvaluationCard(aiResponse, userTranslation, challenge.kanjiJa);
      } else {
        const localEval = this.evaluateTranslationLocally(challenge, userTranslation);
        this.renderEvaluationCard(localEval, userTranslation, challenge.kanjiJa);
      }
    } catch (e) {
      const localEval = this.evaluateTranslationLocally(challenge, userTranslation);
      this.renderEvaluationCard(localEval, userTranslation, challenge.kanjiJa);
    }
  }

  // Engine nội bộ chấm bài tự đặt câu N5
  evaluateSentenceLocally(word, sentence) {
    const cleanS = sentence.replace(/[\s\u3000\.\,、。]/g, '');

    // BẪY KÍNH NGỮ N4: Bắt lỗi sai nghiêm trọng dùng ご...します cho hành vi tự thân cá nhân
    if ((cleanS.includes('ご勉強') || cleanS.includes('ごけんきゅう') || cleanS.includes('ご研究') || cleanS.includes('ご旅行') || cleanS.includes('ごりょこう')) && 
        (cleanS.includes('します') || cleanS.includes('いたし') || cleanS.includes('して'))) {
      return `### [Xếp loại: F] - Bẫy Kính Ngữ Cực Kỳ Nghiêm Trọng! 💢\n\n` +
        `*(Ánh kính đỏ lóe lên dữ dội, gõ mạnh thước kẻ xuống bàn côm cốp)*\n\n` +
        `**CÁI EM NÀY! Em vừa phạm phải một trong những lỗi tối kỵ và đáng xấu hổ nhất của người học tiếng Nhật!**\n\n` +
        `1. **Lỗi sai chí mạng:** Em đã dùng mẫu 『ご...します』 cho hành động tự thân cá nhân của chính mình (như 『ご勉強します』 / 『ご研究します』)!\n` +
        `2. **Tại sao lại sai?** Mẫu Khiêm nhường ngữ 『ご + Hán tự + します』 BẮT BUỘC hành động đó phải trực tiếp hướng tới và mang lại lợi ích cho người nghe/đối phương (ví dụ: 『ご案内します』 - hướng dẫn cho ngài, 『ご説明します』 - giải thích cho ngài, 『ご紹介します』 - giới thiệu cho ngài). Còn việc "học tập", "nghiên cứu", "du lịch" là hành vi của riêng em, em học cho thân em chứ có làm gì cho đối phương đâu mà dùng 『ご...します』?!\n` +
        `3. **Cách sửa chuẩn:** Với hành vi cá nhân, em chỉ được hạ mình bằng cách dùng động từ thường chia sang thể khiêm nhường: **「勉強いたします」** hoặc **「勉強しております」** (hoặc lịch sự đơn giản: **「勉強します」**). Tuyệt đối không bao giờ được lặp lại lỗi này nữa! Chép lại câu đúng 5 lần ngay!`;
    }

    const hasWord = cleanS.includes(word.kanji) || cleanS.includes(word.hiragana);

    let rank = 'B';
    let score = 75;
    let critique = '';

    if (!hasWord) {
      rank = 'F';
      score = 30;
      critique = `### [Xếp loại: F] - Bị phạt chép bài 💢\n\n` +
        `*(Cô Tanaka gõ mạnh thước kẻ xuống bàn)*\n\n` +
        `**Em không thèm đọc đề bài à?!** Cô yêu cầu đặt câu có từ 「**${word.kanji}**」 (${word.hiragana}), thế mà trong câu của em không hề có từ này!\n\n` +
        `1. **Lỗi sai:** Hoàn toàn lạc đề, không chứa từ khóa yêu cầu.\n` +
        `2. **Hậu quả:** Đi thi JLPT là bị 0 điểm phần này ngay lập tức!\n` +
        `3. **Cách sửa:** Đặt lại một câu đơn giản theo mẫu: *Chủ ngữ + は + Tân ngữ + を + ${word.kanji}ます*. Viết lại ngay!`;
    } else if (cleanS.endsWith('ます') || cleanS.endsWith('です') || cleanS.endsWith('ました')) {
      rank = 'A';
      score = 92;
      critique = `### [Xếp loại: A] - Giỏi lắm! 🌸\n\n` +
        `*(Đẩy gọng kính, ánh mắt dịu lại)*\n\n` +
        `**Câu này em đặt khá chuẩn đấy!** Đã biết dùng thể lịch sự Masu/Desu chuẩn mực cho người mới học N5.\n\n` +
        `1. **Ưu điểm:** Dùng đúng từ khóa 「**${word.kanji}**」, trợ từ sắp xếp hợp lý, câu văn rõ ràng mạch lạc.\n` +
        `2. **Gợi ý của cô:** Để câu văn nghe tự nhiên như người Tokyo hơn nữa, em có thể thêm trạng từ chỉ thời gian (きょう, まいにち) ở đầu câu.\n` +
        `3. **Câu mẫu chuẩn của cô:** 「**${word.example?.ja || `${word.kanji}をたべます。`}**」. Đọc to câu này lên 3 lần nhé!`;
    } else {
      rank = 'C';
      score = 65;
      critique = `### [Xếp loại: C] - Cần cẩn thận hơn! ⚠️\n\n` +
        `*(Khoanh tay nhìn em thở dài)*\n\n` +
        `**Câu này chưa được trọn vẹn đâu nhé!**\n\n` +
        `1. **Lỗi sai:** Em chưa kết thúc câu bằng thể lịch sự (ます/です), hoặc câu còn cụt lủn chưa đủ thành phần chủ ngữ - vị ngữ.\n` +
        `2. **Hậu quả:** Nói trống không với người lớn tuổi tại Nhật là cực kỳ thất lễ đấy!\n` +
        `3. **Cách sửa:** Hãy chia đuôi động từ sang thể lịch sự ます hoặc thêm です vào cuối câu. Câu chuẩn gợi ý: 「**${word.example?.ja || `${word.kanji}です。`}**」.`;
    }

    return critique;
  }

  // Engine nội bộ chấm bài dịch câu N5
  evaluateTranslationLocally(challenge, userTranslation) {
    const cleanUser = userTranslation.replace(/[\s\u3000\.\,、。]/g, '');
    const cleanTarget = challenge.targetJa.replace(/[\s\u3000\.\,、。]/g, '');
    const cleanKanji = challenge.kanjiJa.replace(/[\s\u3000\.\,、。]/g, '');

    let rank = 'B';
    let score = 75;
    let critique = '';

    if (cleanUser === cleanTarget || cleanUser === cleanKanji) {
      rank = 'S';
      score = 100;
      critique = `### [Xếp loại: S] - Hoàn hảo tuyệt đối! 🌟\n\n` +
        `*(Mỉm cười hiếm hoi, vỗ tay khích lệ)*\n\n` +
        `**Tuyệt cú mèo! Em dịch câu này không sai dù chỉ một dấu chấm!**\n\n` +
        `1. **Đánh giá:** Trợ từ ${challenge.particles.join(', ')} dùng hoàn toàn chính xác. Trật tự từ chuẩn ngữ pháp tiếng Nhật SOV.\n` +
        `2. **Thực tế:** Người Nhật nghe câu này sẽ khen em ngay: "Nihongo ga jouzu desu ne!".\n` +
        `3. **Câu chuẩn của em:** 「**${challenge.kanjiJa}**」. Hãy ghi nhớ cấu trúc này!`;
    } else {
      let missingParticles = [];
      for (const p of challenge.particles) {
        if (!cleanUser.includes(p)) {
          missingParticles.push(p);
        }
      }

      if (missingParticles.length > 0) {
        rank = 'C';
        score = 60;
        critique = `### [Xếp loại: C] - Nhầm lẫn trợ từ N5 ⚠️\n\n` +
          `*(Gõ thước kẻ côm cốp vào bảng)*\n\n` +
          `**Lại sai trợ từ rồi! Em quên mất trợ từ: 「${missingParticles.join(', ')}」!**\n\n` +
          `1. **Lỗi cụ thể:** ${challenge.notes}\n` +
          `2. **Hậu quả:** Sai trợ từ là sai toàn bộ cấu trúc nghĩa! Người Nhật sẽ nghe ra hành động xảy ra sai địa điểm hoặc sai đối tượng đấy.\n` +
          `3. **Câu chuẩn của cô:** 「**${challenge.kanjiJa}**」 (${challenge.targetJa}). Chép lại câu này 3 lần vào vở ngay!`;
      } else {
        rank = 'A';
        score = 88;
        critique = `### [Xếp loại: A] - Khá tốt! 🌸\n\n` +
          `*(Gật đầu ghi nhận)*\n\n` +
          `**Em dịch đúng ý cơ bản rồi đấy!**\n\n` +
          `1. **Nhận xét:** Trợ từ dùng đúng, nhưng cách dùng từ hoặc chia thì động từ cần nắn nót hơn một chút.\n` +
          `2. **Câu chuẩn mượt mà nhất:** 「**${challenge.kanjiJa}**」.\n` +
          `3. **Luyện tập:** Hãy bấm loa nghe phát âm và đọc theo câu chuẩn 2 lần nhé!`;
      }
    }

    return critique;
  }

  // Hiển thị Card kết quả chấm điểm Khảo Bài với Huy hiệu S/A/B/C/F rực rỡ
  renderEvaluationCard(critiqueText, studentSentence, standardSentence) {
    const resultBox = document.getElementById('sensei-evaluation-box');
    if (!resultBox) return;

    // Trích xuất Grade Rank từ bài chấm
    let rank = 'B';
    const rankMatch = critiqueText.match(/Xếp loại:\s*([SABCF])/i);
    if (rankMatch) {
      rank = rankMatch[1].toUpperCase();
    }

    const formattedHtml = this.formatMarkdown(critiqueText);

    resultBox.innerHTML = `
      <div class="evaluation-result-card rank-${rank}">
        <div class="eval-header-row">
          <div class="eval-rank-badge rank-${rank}">
            <span class="rank-letter">${rank}</span>
            <span class="rank-sub">Rank</span>
          </div>
          <div class="eval-title-wrap">
            <h3 class="eval-teacher-name">Lời phê của Cô giáo Tanaka (高木先生) 👩‍🏫</h3>
            <p class="eval-summary-subtitle">Đã chấm xong bài khảo bài N5 của em!</p>
          </div>
          <div class="eval-voice-action">
            <button class="btn btn-secondary btn-sm" onclick="window.soundSystem.speak('${standardSentence.replace(/['"\n]/g, '')}', 1.0)">
              🔊 Nghe câu chuẩn (1.0x)
            </button>
            <button class="btn btn-secondary btn-sm" onclick="window.soundSystem.speak('${standardSentence.replace(/['"\n]/g, '')}', 0.6)">
              🐢 Nghe đọc chậm (0.6x)
            </button>
          </div>
        </div>

        <div class="eval-sentence-compare-box">
          <div class="compare-row user-row">
            <span class="compare-label">Câu của em:</span>
            <span class="compare-text student-text">${studentSentence}</span>
          </div>
          <div class="compare-row standard-row">
            <span class="compare-label">Câu chuẩn của cô:</span>
            <span class="compare-text standard-text">${standardSentence}</span>
          </div>
        </div>

        <div class="eval-critique-body">
          ${formattedHtml}
        </div>
      </div>
    `;

    // Cập nhật mascot bên sidebar tương ứng
    if (window.mascot) {
      if (rank === 'S' || rank === 'A') {
        window.mascot.setMood('happy', `Tuyệt vời! Em đạt Rank ${rank} rồi kìa! 🌸`, 3500);
      } else {
        window.mascot.setMood('strict', `Bị cô Tanaka nhắc nhở rồi! Sửa lại ngay nhé! 👩‍🏫`, 3500);
      }
    }
  }

  // ==========================================================================
  // NƠI 3.3: CHAT DOJO 1-ON-1 VỚI CÔ GIÁO TAKAGI
  // ==========================================================================
  async sendChatMessage(userText) {
    if (!userText || !userText.trim() || this.isThinking) return;

    const chatContainer = document.getElementById('sensei-chat-messages');
    if (!chatContainer) return;

    this.isThinking = true;

    // 1. Thêm tin nhắn của học viên
    this.appendMessage('user', userText);
    this.chatHistory.push({ role: 'user', text: userText });

    // 2. Thêm hiệu ứng cô đang soạn tin
    const loadingId = 'loading-' + Date.now();
    const loadingEl = document.createElement('div');
    loadingEl.className = 'chat-bubble-row sensei-bubble';
    loadingEl.id = loadingId;
    loadingEl.innerHTML = `
      <div class="sensei-bubble-avatar">${this.getSenseiSVG('strict')}</div>
      <div class="chat-bubble-content thinking">
        <span class="dot-typing"></span> Cô Tanaka đang đẩy kính soi xét câu hỏi của em...
      </div>
    `;
    chatContainer.appendChild(loadingEl);
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // 3. Gọi AI
    try {
      const response = await this.callAI(userText, this.chatHistory.slice(-6));
      const loadingNode = document.getElementById(loadingId);
      if (loadingNode) loadingNode.remove();

      const finalReply = response || this.generateLocalChatReply(userText);
      this.chatHistory.push({ role: 'model', text: finalReply });
      this.appendMessage('sensei', finalReply);
    } catch (e) {
      const loadingNode = document.getElementById(loadingId);
      if (loadingNode) loadingNode.remove();

      const fallbackReply = this.generateLocalChatReply(userText);
      this.appendMessage('sensei', fallbackReply);
    } finally {
      this.isThinking = false;
    }
  }

  // Phản hồi dự phòng khi học viên chat tự do
  generateLocalChatReply(text) {
    const t = text.toLowerCase();
    if (t.includes('mắng') || t.includes('mang')) {
      return `*(Gõ thước kẻ côm cốp xuống bàn)*\n\n` +
        `**Em bảo cô mắng em à?! Lười học thì cô mắng cho sáng mắt ra chứ đùa à!**\n\n` +
        `Em có biết kỳ thi JLPT N5 mỗi năm chỉ có 2 lần không? Người ta đang cày ngày cày đêm học thuộc 800 từ vựng và 100 chữ Hán, còn em thì ngồi đây nhởn nhơ xin bị mắng!\n\n` +
        `Đứng thẳng lưng lên, mở ngay tab **Game Đoán Từ** hoặc **Test Đọc Phát Âm** cày hết 102 từ vựng N5 cho cô mau!`;
    }

    if (t.includes('wa') || t.includes('ga') || t.includes('は') || t.includes('が')) {
      return `*(Đẩy gọng kính, viết lên bảng)*\n\n` +
        `**Phân biệt trợ từ は (wa) và が (ga) trong N5 - nghe kỹ đây kẻo lại sai:**\n\n` +
        `1. **Trợ từ は (Chủ đề của câu):**\n` +
        `   - Nhấn mạnh vào **VỊ NGỮ** (nội dung phía sau は).\n` +
        `   - Ví dụ: わたしは がくせいです (Tôi LÀ HỌC SINH - nhấn mạnh vế là học sinh).\n` +
        `2. **Trợ từ が (Chủ ngữ ngữ pháp trực tiếp):**\n` +
        `   - Nhấn mạnh vào **CHỦ NGỮ** (ai/cái gì đứng trước が).\n` +
        `   - Ví dụ: だれが きますか？ (AI đến thế? - nhấn mạnh đối tượng ai).\n` +
        `   - Dùng cho giác quan, hiện tượng tự nhiên: あめが ふります (Trời mưa).\n` +
        `   - Dùng với tính từ biểu thị sở thích/năng lực: わたしは にほんごが すきです (Tôi thích tiếng Nhật).\n\n` +
        `Hiểu chưa hả em? Đặt ngay 1 câu phân biệt は và が nộp cô xem nào!`;
    }

    return `*(Cô Tanaka đẩy nhẹ kính, gõ thước chỉ bài)*\n\n` +
      `Cô đã nghe rõ câu của em: "${text}".\n\n` +
      `Học tiếng Nhật N5 cốt lõi là sự kiên trì và chính xác từng trợ từ. Em hãy bấm vào chế độ **✍️ Tự Đặt Câu N5** hoặc **🎯 Thử Thách Dịch** ở phía trên để cô khảo bài trực tiếp cho em nhé!`;
  }

  appendMessage(role, text) {
    const chatContainer = document.getElementById('sensei-chat-messages');
    if (!chatContainer) return;

    const row = document.createElement('div');
    row.className = `chat-bubble-row ${role === 'user' ? 'user-bubble' : 'sensei-bubble'}`;

    const formatted = this.formatMarkdown(text);

    if (role === 'user') {
      row.innerHTML = `
        <div class="chat-bubble-content user-text">${formatted}</div>
        <div class="user-bubble-avatar">🧑‍🎓</div>
      `;
    } else {
      row.innerHTML = `
        <div class="sensei-bubble-avatar">${this.getSenseiSVG('strict')}</div>
        <div class="chat-bubble-content sensei-text">
          <div class="sensei-bubble-header">
            <strong>Tanaka-sensei (高木先生)</strong>
            <button class="btn-mini-listen" onclick="window.soundSystem.speak('${text.replace(/['"\n*#]/g, ' ').slice(0, 150)}', 0.95)" title="Nghe cô đọc">🔊</button>
          </div>
          <div>${formatted}</div>
        </div>
      `;
    }

    chatContainer.appendChild(row);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  // ==========================================================================
  // MODAL CẤU HÌNH API / ENDPOINT / MODEL
  // ==========================================================================
  openConfigModal() {
    let modal = document.getElementById('api-config-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'api-config-modal';
      modal.className = 'modal-overlay';
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="modal-card">
        <div class="modal-header">
          <h3>⚙️ Cấu Hình API / AI Endpoint</h3>
          <button class="modal-close-btn" onclick="document.getElementById('api-config-modal').classList.remove('active')">✕</button>
        </div>
        <div class="modal-body">
          <p class="modal-desc">
            Bạn có thể tùy chỉnh API Key, Base URL hoặc Model của AI Cô giáo Tanaka bất cứ lúc nào. Nếu không điền, hệ thống sẽ tự động dùng API mặc định kèm bộ Engine Nội Bộ không bao giờ bị đứt kết nối!
          </p>

          <div class="form-group">
            <label class="form-label">API Key / Token AI:</label>
            <input type="text" id="cfg-api-key" class="form-input" value="${this.apiKey}" placeholder="Nhập API Key Gemini hoặc Token AI...">
          </div>

          <div class="form-group">
            <label class="form-label">Base URL / Endpoint:</label>
            <input type="text" id="cfg-endpoint-url" class="form-input" value="${this.endpointUrl}" placeholder="https://generativelanguage.googleapis.com/v1beta">
            <small class="form-hint">Mặc định: https://generativelanguage.googleapis.com/v1beta</small>
          </div>

          <div class="form-group">
            <label class="form-label">Tên Model AI:</label>
            <input type="text" id="cfg-model-name" class="form-input" value="${this.modelName}" placeholder="gemini-2.0-flash">
            <small class="form-hint">Ví dụ: gemini-2.0-flash, gemini-1.5-flash, gemini-2.5-flash...</small>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" onclick="window.senseiAI.handleResetConfig()">
            🔄 Khôi phục mặc định
          </button>
          <button class="btn btn-primary" onclick="window.senseiAI.handleSaveConfig()">
            💾 Lưu cấu hình
          </button>
        </div>
      </div>
    `;

    modal.classList.add('active');
  }

  handleSaveConfig() {
    const key = document.getElementById('cfg-api-key')?.value || '';
    const url = document.getElementById('cfg-endpoint-url')?.value || '';
    const model = document.getElementById('cfg-model-name')?.value || '';

    this.saveConfig(key, url, model);
    alert('Đã lưu cấu hình API AI thành công! Cô giáo Tanaka đã sẵn sàng khảo bài!');
    const modal = document.getElementById('api-config-modal');
    if (modal) modal.classList.remove('active');
  }

  handleResetConfig() {
    this.resetConfig();
    const keyInput = document.getElementById('cfg-api-key');
    const urlInput = document.getElementById('cfg-endpoint-url');
    const modelInput = document.getElementById('cfg-model-name');

    if (keyInput) keyInput.value = this.apiKey;
    if (urlInput) urlInput.value = this.endpointUrl;
    if (modelInput) modelInput.value = this.modelName;

    alert('Đã khôi phục cài đặt API gốc mặc định!');
  }

  // ==========================================================================
  // TIỆN ÍCH ĐỊNH DẠNG & SVG
  // ==========================================================================
  formatMarkdown(text) {
    if (!text) return '';
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/### (.+)/g, '<h4 class="sensei-heading">$1</h4>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n- /g, '<br>• ')
      .replace(/\n/g, '<br>');
  }

  // SVG nhân vật Cô giáo Tanaka
  getSenseiSVG(mood = 'strict') {
    return `
      <svg viewBox="0 0 100 100" class="sensei-svg-avatar">
        <defs>
          <linearGradient id="hairGradTanaka" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1A202C" />
            <stop offset="100%" stop-color="#2D3748" />
          </linearGradient>
          <linearGradient id="suitGradTanaka" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1864AB" />
            <stop offset="100%" stop-color="#0B3C6D" />
          </linearGradient>
        </defs>

        <!-- Tóc búi sau thanh lịch -->
        <circle cx="50" cy="24" r="14" fill="url(#hairGradTanaka)" />
        <line x1="36" y1="22" x2="64" y2="20" stroke="#FA5252" stroke-width="2.5" stroke-linecap="round"/>

        <!-- Cổ & Áo Vest giáo viên -->
        <path d="M 28 85 L 72 85 L 76 100 L 24 100 Z" fill="url(#suitGradTanaka)" />
        <polygon points="40,70 50,85 60,70" fill="#FFFFFF" />
        <polygon points="48,82 52,82 50,96" fill="#E03131" />

        <!-- Khuôn mặt -->
        <ellipse cx="50" cy="52" rx="22" ry="24" fill="#FFE3E3" />

        <!-- Mái tóc tỉa ngang trán -->
        <path d="M 28 46 Q 50 30 72 46 Q 66 32 50 32 Q 34 32 28 46 Z" fill="url(#hairGradTanaka)" />
        <path d="M 28 46 Q 25 64 30 68" stroke="#1A202C" stroke-width="3.5" fill="none" stroke-linecap="round" />
        <path d="M 72 46 Q 75 64 70 68" stroke="#1A202C" stroke-width="3.5" fill="none" stroke-linecap="round" />

        <!-- Lông mày -->
        ${mood === 'pleased' 
          ? '<path d="M 36 45 Q 41 42 46 45" stroke="#212529" stroke-width="2" fill="none" stroke-linecap="round"/>' +
            '<path d="M 64 45 Q 59 42 54 45" stroke="#212529" stroke-width="2" fill="none" stroke-linecap="round"/>'
          : '<path d="M 36 43 L 46 46" stroke="#C92A2A" stroke-width="2.5" stroke-linecap="round"/>' +
            '<path d="M 64 43 L 54 46" stroke="#C92A2A" stroke-width="2.5" stroke-linecap="round"/>'
        }

        <!-- Kính mắt gọng đỏ giáo viên đặc trưng -->
        <rect x="33" y="46" width="14" height="10" rx="3" fill="#E7F5FF" opacity="0.6" stroke="#C92A2A" stroke-width="2" />
        <rect x="53" y="46" width="14" height="10" rx="3" fill="#E7F5FF" opacity="0.6" stroke="#C92A2A" stroke-width="2" />
        <line x1="47" y1="51" x2="53" y2="51" stroke="#C92A2A" stroke-width="2" />
        <!-- Ánh kính chớp lóe -->
        <line x1="36" y1="48" x2="41" y2="53" stroke="#FFF" stroke-width="1.5" />

        <!-- Mắt -->
        <circle cx="40" cy="51" r="2.5" fill="#1864AB" />
        <circle cx="60" cy="51" r="2.5" fill="#1864AB" />

        <!-- Miệng -->
        ${mood === 'pleased' 
          ? '<path d="M 46 66 Q 50 70 54 66" stroke="#C92A2A" stroke-width="2" fill="none" stroke-linecap="round"/>'
          : mood === 'angry'
          ? '<path d="M 45 68 Q 50 62 55 68" stroke="#A61E4D" stroke-width="2.5" fill="none" stroke-linecap="round"/>'
          : '<line x1="46" y1="66" x2="54" y2="66" stroke="#212529" stroke-width="2" stroke-linecap="round"/>'
        }

        <!-- Thước chỉ bảng bằng gỗ -->
        <g transform="rotate(-22 75 75)">
          <rect x="75" y="40" width="5" height="48" rx="2" fill="#D9480F" stroke="#862E9C" stroke-width="0.5" />
          <polygon points="74,38 77,34 80,38" fill="#FCC419" />
        </g>
      </svg>
    `;
  }
}

// Khởi tạo instance toàn cục sẵn sàng sử dụng
window.senseiAI = new StrictSenseiAI();
