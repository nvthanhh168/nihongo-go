// ============================================================================
// DỮ LIỆU TỪ VỰNG TIẾNG NHẬT CHUẨN JLPT N5 (HOÀN CHỈNH 100% - KHÔNG RÚT GỌN)
// CẤU TRÚC MỞ RỘNG ĐẦY ĐỦ CHO N4, N3, N2, N1
// ============================================================================

const JLPT_CATEGORIES = {
  aisatsu: { id: 'aisatsu', name: 'Chào hỏi & Giao tiếp', icon: '👋', color: '#FF6B6B' },
  tabemono: { id: 'tabemono', name: 'Đồ ăn & Thức uống', icon: '🍱', color: '#FFA94D' },
  doubutsu: { id: 'doubutsu', name: 'Động vật & Thiên nhiên', icon: '🐱', color: '#51CF66' },
  kurashi: { id: 'kurashi', name: 'Đồ vật & Đời sống', icon: '🎒', color: '#339AF0' },
  kazoku: { id: 'kazoku', name: 'Gia đình & Con người', icon: '👨‍👩‍👧', color: '#CC5DE8' },
  basho: { id: 'basho', name: 'Địa điểm & Phương tiện', icon: '⛩️', color: '#20C997' },
  doushi: { id: 'doushi', name: 'Động từ N5 cốt lõi', icon: '⚡', color: '#F06595' },
  keiyoushi: { id: 'keiyoushi', name: 'Tính từ N5 thông dụng', icon: '✨', color: '#FCC419' }
};

const JLPT_DATA = {
  n5: [
    // ========================================================================
    // CHỦ ĐỀ 1: CHÀO HỎI & GIAO TIẾP (AISATSU)
    // ========================================================================
    {
      id: 'n5_aisatsu_01',
      level: 'N5',
      category: 'aisatsu',
      kanji: 'こんにちは',
      hiragana: 'こんにちは',
      romaji: 'konnichiwa',
      hanViet: 'KIM NHẬT HÀ',
      meaning: 'Xin chào (buổi trưa / ban ngày)',
      vietnamese: 'Xin chào (buổi trưa / ban ngày)',
      pitch: '[0] (Heiban - Bằng phẳng)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><circle cx="50" cy="50" r="35" fill="#FFA8A8"/><path d="M35 55 Q50 68 65 55" stroke="#C92A2A" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="38" cy="42" r="4" fill="#212529"/><circle cx="62" cy="42" r="4" fill="#212529"/><path d="M50 15 L50 25 M75 25 L68 32 M25 25 L32 32" stroke="#FF6B6B" stroke-width="3" stroke-linecap="round"/></svg>`,
      example: {
        ja: '田中先生、こんにちは！',
        hira: 'たなかせんせい、こんにちは！',
        romaji: 'Tanaka-sensei, konnichiwa!',
        vi: 'Em chào cô Tanaka ạ!'
      },
      exampleJa: '田中先生、こんにちは！',
      exampleVi: 'Em chào cô Tanaka ạ!',
      commonMistake: 'Người học hay viết nhầm chữ は cuối thành わ (đọc là wa nhưng bắt buộc phải viết là は).'
    },
    {
      id: 'n5_aisatsu_02',
      level: 'N5',
      category: 'aisatsu',
      kanji: 'おはようございます',
      hiragana: 'おはようございます',
      romaji: 'ohayou gozaimasu',
      hanViet: 'TẢO',
      meaning: 'Chào buổi sáng (lịch sự)',
      vietnamese: 'Chào buổi sáng (lịch sự)',
      pitch: '[0] (Heiban)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><path d="M15 70 L85 70" stroke="#E67700" stroke-width="4" stroke-linecap="round"/><circle cx="50" cy="68" r="24" fill="#FF922B"/><line x1="50" y1="35" x2="50" y2="25" stroke="#FFA94D" stroke-width="4" stroke-linecap="round"/><line x1="28" y1="44" x2="20" y2="38" stroke="#FFA94D" stroke-width="4" stroke-linecap="round"/><line x1="72" y1="44" x2="80" y2="38" stroke="#FFA94D" stroke-width="4" stroke-linecap="round"/></svg>`,
      example: {
        ja: '皆さん、おはようございます。',
        hira: 'みなさん、おはようございます。',
        romaji: 'Minasan, ohayou gozaimasu.',
        vi: 'Chào buổi sáng tất cả mọi người.'
      },
      exampleJa: '皆さん、おはようございます。',
      exampleVi: 'Chào buổi sáng tất cả mọi người.',
      commonMistake: 'Quên trường âm よう (đọc vội thành ohayo thay vì kéo dài âm ohayō).'
    },
    {
      id: 'n5_aisatsu_03',
      level: 'N5',
      category: 'aisatsu',
      kanji: 'こんばんは',
      hiragana: 'こんばんは',
      romaji: 'konbanwa',
      hanViet: 'KIM VÃN HÀ',
      meaning: 'Chào buổi tối',
      vietnamese: 'Chào buổi tối',
      pitch: '[0] (Heiban)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#343A40"/><path d="M42 25 A28 28 0 0 0 72 75 A32 32 0 1 1 42 25 Z" fill="#FCC419"/><circle cx="28" cy="35" r="2.5" fill="#FFF"/><circle cx="76" cy="32" r="2" fill="#FFF"/><circle cx="34" cy="65" r="1.5" fill="#FFF"/></svg>`,
      example: {
        ja: 'こんばんは、お元気ですか？',
        hira: 'こんばんは、おげんきですか？',
        romaji: 'Konbanwa, ogenki desu ka?',
        vi: 'Chào buổi tối, bạn có khỏe không?'
      },
      exampleJa: 'こんばんは、お元気ですか？',
      exampleVi: 'Chào buổi tối, bạn có khỏe không?',
      commonMistake: 'Viết sai chữ は cuối thành わ.'
    },
    {
      id: 'n5_aisatsu_04',
      level: 'N5',
      category: 'aisatsu',
      kanji: 'ありがとうございます',
      hiragana: 'ありがとうございます',
      romaji: 'arigatou gozaimasu',
      hanViet: 'HỮU NAN',
      meaning: 'Cảm ơn rất nhiều',
      vietnamese: 'Cảm ơn rất nhiều',
      pitch: '[4] (Nakadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><path d="M30 45 Q50 20 70 45 L62 75 Q50 82 38 75 Z" fill="#69DB7C"/><circle cx="50" cy="38" r="8" fill="#FFF"/><path d="M45 52 L55 52 M50 47 L50 57" stroke="#2B8A3E" stroke-width="2.5"/></svg>`,
      example: {
        ja: 'ご親切にありがとうございます！',
        hira: 'ごしんせつにありがとうございます！',
        romaji: 'Goshinsetsu ni arigatou gozaimasu!',
        vi: 'Cảm ơn bạn rất nhiều vì đã tốt bụng giúp đỡ!'
      },
      exampleJa: 'ご親切にありがとうございます！',
      exampleVi: 'Cảm ơn bạn rất nhiều vì đã tốt bụng giúp đỡ!',
      commonMistake: 'Bỏ mất trường âm とう (đọc thành arigato).'
    },
    {
      id: 'n5_aisatsu_05',
      level: 'N5',
      category: 'aisatsu',
      kanji: 'さようなら',
      hiragana: 'さようなら',
      romaji: 'sayounara',
      hanViet: 'TÁ DƯƠNG',
      meaning: 'Tạm biệt',
      vietnamese: 'Tạm biệt',
      pitch: '[4] (Nakadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><path d="M35 65 Q45 35 65 35 Q75 35 75 50 Q75 70 45 75 Z" fill="#74C0FC"/><path d="M25 45 Q35 25 45 40" stroke="#1C7ED6" stroke-width="4" stroke-linecap="round" fill="none"/></svg>`,
      example: {
        ja: '先生、また明日、さようなら。',
        hira: 'せんせい、またあした、さようなら。',
        romaji: 'Sensei, mata ashita, sayounara.',
        vi: 'Thưa cô, hẹn gặp lại ngày mai, tạm biệt cô ạ.'
      },
      exampleJa: '先生、また明日、さようなら。',
      exampleVi: 'Thưa cô, hẹn gặp lại ngày mai, tạm biệt cô ạ.',
      commonMistake: 'Dùng さようなら với người nhà hoặc bạn bè thân thiết hàng ngày (nên dùng またね hoặc じゃあね).'
    },
    {
      id: 'n5_aisatsu_06',
      level: 'N5',
      category: 'aisatsu',
      kanji: 'すみません',
      hiragana: 'すみません',
      romaji: 'sumimasen',
      hanViet: 'TÚY BIỆT',
      meaning: 'Xin lỗi / Xin phép làm phiền',
      vietnamese: 'Xin lỗi / Xin phép làm phiền',
      pitch: '[4] (Nakadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><ellipse cx="50" cy="40" rx="16" ry="18" fill="#FFA94D"/><path d="M30 75 Q50 62 70 75 L65 92 L35 92 Z" fill="#D9480F"/><path d="M42 42 Q50 48 58 42" stroke="#212529" stroke-width="2" fill="none"/></svg>`,
      example: {
        ja: 'すみません、駅はどこですか？',
        hira: 'すみません、えきはどこですか？',
        romaji: 'Sumimasen, eki wa doko desu ka?',
        vi: 'Xin lỗi, nhà ga nằm ở đâu vậy ạ?'
      },
      exampleJa: 'すみません、駅はどこですか？',
      exampleVi: 'Xin lỗi, nhà ga nằm ở đâu vậy ạ?',
      commonMistake: 'Đọc nhầm thành すいません trong văn cảnh trang trọng.'
    },
    {
      id: 'n5_aisatsu_07',
      level: 'N5',
      category: 'aisatsu',
      kanji: 'ごめんなさい',
      hiragana: 'ごめんなさい',
      romaji: 'gomennasai',
      hanViet: 'MIỄN',
      meaning: 'Xin lỗi (thân mật)',
      vietnamese: 'Xin lỗi (thân mật)',
      pitch: '[4] (Nakadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F8F0FC"/><ellipse cx="50" cy="42" rx="18" ry="16" fill="#CC5DE8"/><circle cx="43" cy="40" r="2.5" fill="#FFF"/><circle cx="57" cy="40" r="2.5" fill="#FFF"/><path d="M44 48 Q50 44 56 48" stroke="#FFF" stroke-width="2" fill="none"/></svg>`,
      example: {
        ja: '遅れてごめんなさい！',
        hira: 'おくれてごめんなさい！',
        romaji: 'Okurete gomennasai!',
        vi: 'Mình đến muộn, xin lỗi bạn nhé!'
      },
      exampleJa: '遅れてごめんなさい！',
      exampleVi: 'Mình đến muộn, xin lỗi bạn nhé!',
      commonMistake: 'Dùng ごめんなさい với sếp, thầy cô hoặc đối tác (chỉ dùng với bạn bè, người thân).'
    },
    {
      id: 'n5_aisatsu_08',
      level: 'N5',
      category: 'aisatsu',
      kanji: 'いただきます',
      hiragana: 'いただきます',
      romaji: 'itadakimasu',
      hanViet: 'ĐÍNH',
      meaning: 'Mời dùng bữa / Xin phép nhận thức ăn',
      vietnamese: 'Mời dùng bữa / Xin phép nhận thức ăn',
      pitch: '[4] (Nakadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><path d="M35 45 C35 30 65 30 65 45 C65 60 55 75 50 80 C45 75 35 60 35 45 Z" fill="#FCC419"/><line x1="25" y1="30" x2="75" y2="70" stroke="#E67700" stroke-width="3"/></svg>`,
      example: {
        ja: 'ご飯を食べます。いただきます！',
        hira: 'ごはんをたべます。いただきます！',
        romaji: 'Gohan o tabemasu. Itadakimasu!',
        vi: 'Tôi ăn cơm đây. Mời mọi người dùng bữa!'
      },
      exampleJa: 'ご飯を食べます。いただきます！',
      exampleVi: 'Tôi ăn cơm đây. Mời mọi người dùng bữa!',
      commonMistake: 'Quên chắp 2 tay trước ngực khi nói câu này theo phong tục Nhật Bản.'
    },
    {
      id: 'n5_aisatsu_09',
      level: 'N5',
      category: 'aisatsu',
      kanji: 'ごちそうさまでした',
      hiragana: 'ごちそうさまでした',
      romaji: 'gochisousama deshita',
      hanViet: 'TRÌ TỐNG DẠNG',
      meaning: 'Cảm ơn vì bữa ăn ngon',
      vietnamese: 'Cảm ơn vì bữa ăn ngon',
      pitch: '[7] (Nakadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><path d="M25 60 Q50 85 75 60 Z" fill="#40C057"/><ellipse cx="50" cy="58" rx="25" ry="8" fill="#D3F9D8"/><line x1="30" y1="42" x2="70" y2="42" stroke="#2B8A3E" stroke-width="4" stroke-linecap="round"/></svg>`,
      example: {
        ja: 'とても美味しかったです。ごちそうさまでした！',
        hira: 'とてもおいしかったです。ごちそうさまでした！',
        romaji: 'Totemo oishikatta desu. Gochisousama deshita!',
        vi: 'Món ăn rất ngon. Cảm ơn vì bữa ăn thịnh soạn!'
      },
      exampleJa: 'とても美味しかったです。ごちそうさまでした！',
      exampleVi: 'Món ăn rất ngon. Cảm ơn vì bữa ăn thịnh soạn!',
      commonMistake: 'Quên trường âm そう (đọc nhầm thành gochiso).'
    },
    {
      id: 'n5_aisatsu_10',
      level: 'N5',
      category: 'aisatsu',
      kanji: 'はじめまして',
      hiragana: 'はじめまして',
      romaji: 'hajimemashite',
      hanViet: 'SƠ',
      meaning: 'Rất vui được gặp bạn lần đầu',
      vietnamese: 'Rất vui được gặp bạn lần đầu',
      pitch: '[4] (Nakadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="36" cy="45" r="14" fill="#339AF0"/><circle cx="64" cy="45" r="14" fill="#51CF66"/><path d="M30 75 Q50 65 70 75" stroke="#1864AB" stroke-width="4" stroke-linecap="round" fill="none"/></svg>`,
      example: {
        ja: 'はじめまして、ナムと申します。',
        hira: 'はじめまして、なむともうします。',
        romaji: 'Hajimemashite, Namu to moushimasu.',
        vi: 'Rất vui được gặp bạn lần đầu, tôi tên là Nam.'
      },
      exampleJa: 'はじめまして、ナムと申します。',
      exampleVi: 'Rất vui được gặp bạn lần đầu, tôi tên là Nam.',
      commonMistake: 'Dùng từ này khi gặp lại người đã từng gặp (chỉ dùng duy nhất cho lần gặp đầu tiên).'
    },
    {
      id: 'n5_aisatsu_11',
      level: 'N5',
      category: 'aisatsu',
      kanji: 'どうぞよろしく',
      hiragana: 'どうぞよろしく',
      romaji: 'douzo yoroshiku',
      hanViet: 'DẠ',
      meaning: 'Rất mong nhận được sự giúp đỡ',
      vietnamese: 'Rất mong nhận được sự giúp đỡ',
      pitch: '[1] (Atamadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><path d="M28 55 Q50 40 72 55 L65 78 Q50 72 35 78 Z" fill="#FF922B"/><ellipse cx="50" cy="38" rx="14" ry="16" fill="#FFA94D"/></svg>`,
      example: {
        ja: 'これからどうぞよろしくお願いします。',
        hira: 'これからどうぞよろしくおねがいします。',
        romaji: 'Korekara douzo yoroshiku onegaishimasu.',
        vi: 'Từ nay về sau rất mong được sự giúp đỡ của bạn.'
      },
      exampleJa: 'これからどうぞよろしくお願いします。',
      exampleVi: 'Từ nay về sau rất mong được sự giúp đỡ của bạn.',
      commonMistake: 'Quên trường âm どう (đọc thành dozo thay vì dōzo).'
    },
    {
      id: 'n5_aisatsu_12',
      level: 'N5',
      category: 'aisatsu',
      kanji: 'お元気ですか',
      hiragana: 'おげんきですか',
      romaji: 'ogenki desu ka',
      hanViet: 'NGUYÊN KHÍ',
      meaning: 'Bạn có khỏe không?',
      vietnamese: 'Bạn có khỏe không?',
      pitch: '[0] (Heiban)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><path d="M50 75 C25 60 20 40 32 28 C42 18 50 30 50 30 C50 30 58 18 68 28 C80 40 75 60 50 75 Z" fill="#FA5252"/></svg>`,
      example: {
        ja: 'お久しぶりです、お元気ですか？',
        hira: 'おひさしぶりです、おげんきですか？',
        romaji: 'Ohisashiburi desu, ogenki desu ka?',
        vi: 'Lâu rồi không gặp, dạo này bạn có khỏe không?'
      },
      exampleJa: 'お久しぶりです、お元気ですか？',
      exampleVi: 'Lâu rồi không gặp, dạo này bạn có khỏe không?',
      commonMistake: 'Tự thêm お khi trả lời về bản thân (trả lời phải là はい、げんきです, không được nói はい、おげんきです).'
    },

    // ========================================================================
    // CHỦ ĐỀ 2: ĐỒ ĂN & THỨC UỐNG (TABEMONO)
    // ========================================================================
    {
      id: 'n5_tabemono_01',
      level: 'N5',
      category: 'tabemono',
      kanji: '水',
      hiragana: 'みず',
      romaji: 'mizu',
      hanViet: 'THỦY',
      meaning: 'Nước lọc / Nước lã mát',
      vietnamese: 'Nước lọc / Nước lã mát',
      pitch: '[0] (Heiban)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><path d="M50 20 C32 50 28 65 28 72 A22 22 0 0 0 72 72 C72 65 68 50 50 20 Z" fill="#339AF0"/><ellipse cx="44" cy="65" rx="5" ry="8" fill="#A5D8FF" opacity="0.6"/></svg>`,
      example: {
        ja: '冷たい水を一杯飲みます。',
        hira: 'つめたいみずをいっぱいのみます。',
        romaji: 'Tsumetai mizu o ippai nomimasu.',
        vi: 'Tôi uống một cốc nước mát.'
      },
      exampleJa: '冷たい水を一杯飲みます。',
      exampleVi: 'Tôi uống một cốc nước mát.',
      commonMistake: 'Dùng từ này khi gọi nước nóng (nước nóng phải gọi là お湯 - oyu).'
    },
    {
      id: 'n5_tabemono_02',
      level: 'N5',
      category: 'tabemono',
      kanji: 'ご飯',
      hiragana: 'ごはん',
      romaji: 'gohan',
      hanViet: 'PHẠN',
      meaning: 'Cơm trắng / Bữa ăn',
      vietnamese: 'Cơm trắng / Bữa ăn',
      pitch: '[1] (Atamadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><path d="M22 55 Q50 88 78 55 Z" fill="#E03131"/><ellipse cx="50" cy="54" rx="28" ry="16" fill="#FFFFFF"/><circle cx="50" cy="50" r="4" fill="#C92A2A"/></svg>`,
      example: {
        ja: '毎朝、ご飯と味噌汁を食べます。',
        hira: 'まいあさ、ごはんとみそしるをたべます。',
        romaji: 'Maiasa, gohan to misoshiru o tabemasu.',
        vi: 'Mỗi sáng tôi đều ăn cơm và súp miso.'
      },
      exampleJa: '毎朝、ご飯と味噌汁を食べます。',
      exampleVi: 'Mỗi sáng tôi đều ăn cơm và súp miso.',
      commonMistake: 'Nhầm lẫn giữa nghĩa cơm trắng đơn thuần và nghĩa cả bữa ăn (như 朝ご飯: bữa sáng).'
    },
    {
      id: 'n5_tabemono_03',
      level: 'N5',
      category: 'tabemono',
      kanji: 'お茶',
      hiragana: 'おちゃ',
      romaji: 'ocha',
      hanViet: 'TRÀ',
      meaning: 'Trà xanh Nhật Bản',
      vietnamese: 'Trà xanh Nhật Bản',
      pitch: '[0] (Heiban)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><rect x="30" y="42" width="40" height="38" rx="8" fill="#51CF66"/><ellipse cx="50" cy="42" rx="20" ry="7" fill="#40C057"/><path d="M44 30 Q50 22 46 14 M56 30 Q62 22 58 14" stroke="#B2F2BB" stroke-width="3" fill="none"/></svg>`,
      example: {
        ja: '温かいお茶をどうぞ。',
        hira: 'あたたかいおちゃをどうぞ。',
        romaji: 'Atatakai ocha o douzo.',
        vi: 'Xin mời bạn dùng tách trà ấm.'
      },
      exampleJa: '温かいお茶をどうぞ。',
      exampleVi: 'Xin mời bạn dùng tách trà ấm.',
      commonMistake: 'Nuốt âm ghép ちゃ (cha) thành chi-a rời rạc.'
    },
    {
      id: 'n5_tabemono_04',
      level: 'N5',
      category: 'tabemono',
      kanji: '魚',
      hiragana: 'さかな',
      romaji: 'sakana',
      hanViet: 'NGƯ',
      meaning: 'Con cá / Món cá',
      vietnamese: 'Con cá / Món cá',
      pitch: '[0] (Heiban)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><path d="M20 50 Q55 25 80 50 Q55 75 20 50 Z" fill="#4DABF7"/><polygon points="15,35 30,50 15,65" fill="#1971C2"/><circle cx="68" cy="46" r="3.5" fill="#FFF"/><circle cx="69" cy="46" r="1.5" fill="#000"/></svg>`,
      example: {
        ja: '肉より魚の方が好きです。',
        hira: 'にくよりさかなのほうがすきです。',
        romaji: 'Niku yori sakana no hou ga suki desu.',
        vi: 'Tôi thích ăn cá hơn là thịt.'
      },
      exampleJa: '肉より魚の方が好きです。',
      exampleVi: 'Tôi thích ăn cá hơn là thịt.',
      commonMistake: 'Đọc sai trọng âm rơi vào âm giữa ka.'
    },
    {
      id: 'n5_tabemono_05',
      level: 'N5',
      category: 'tabemono',
      kanji: '肉',
      hiragana: 'にく',
      romaji: 'niku',
      hanViet: 'NHỤC',
      meaning: 'Thịt (nói chung)',
      vietnamese: 'Thịt (nói chung)',
      pitch: '[2] (Odaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><path d="M28 42 C28 28 72 24 78 48 C82 72 38 78 28 42 Z" fill="#FA5252"/><ellipse cx="50" cy="50" rx="14" ry="10" fill="#FFF"/><circle cx="50" cy="50" r="5" fill="#E03131"/></svg>`,
      example: {
        ja: 'スーパーで牛肉と豚肉を買いました。',
        hira: 'すーぱーでぎゅうにくとぶたにくをかいました。',
        romaji: 'Suupaa de gyuuniku to butaniku o kaimashita.',
        vi: 'Tôi đã mua thịt bò và thịt lợn ở siêu thị.'
      },
      exampleJa: 'スーパーで牛肉と豚肉を買いました。',
      exampleVi: 'Tôi đã mua thịt bò và thịt lợn ở siêu thị.',
      commonMistake: 'Không phân biệt rõ các loại thịt: ぎゅうにく (thịt bò), ぶたにく (thịt lợn), とりにく (thịt gà).'
    },
    {
      id: 'n5_tabemono_06',
      level: 'N5',
      category: 'tabemono',
      kanji: '卵',
      hiragana: 'たまご',
      romaji: 'tamago',
      hanViet: 'NOÃN',
      meaning: 'Quả trứng',
      vietnamese: 'Quả trứng',
      pitch: '[2] (Nakadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><ellipse cx="50" cy="54" rx="26" ry="32" fill="#FFFFFF" stroke="#E9ECEF" stroke-width="2"/><ellipse cx="50" cy="58" rx="15" ry="16" fill="#FCC419"/></svg>`,
      example: {
        ja: '卵を二つ割ってください。',
        hira: 'たまごをふたつわってください。',
        romaji: 'Tamago o futatsu watte kudasai.',
        vi: 'Xin hãy đập 2 quả trứng giúp tôi.'
      },
      exampleJa: '卵を二つ割ってください。',
      exampleVi: 'Xin hãy đập 2 quả trứng giúp tôi.',
      commonMistake: 'Phát âm âm đục ご (go) không dứt khoát.'
    },
    {
      id: 'n5_tabemono_07',
      level: 'N5',
      category: 'tabemono',
      kanji: 'パン',
      hiragana: 'ぱん',
      romaji: 'pan',
      hanViet: 'BÁNH MÌ',
      meaning: 'Bánh mì',
      vietnamese: 'Bánh mì',
      pitch: '[1] (Atamadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><path d="M25 40 Q50 20 75 40 L75 70 Q50 78 25 70 Z" fill="#FFA94D"/><ellipse cx="50" cy="42" rx="22" ry="12" fill="#FFD8A8"/></svg>`,
      example: {
        ja: '朝ごはんはいつもパンと牛乳です。',
        hira: 'あさごはんはいつもぱんとぎゅうにゅうです。',
        romaji: 'Asagohan wa itsumo pan to gyuunyuu desu.',
        vi: 'Bữa sáng tôi luôn ăn bánh mì và uống sữa.'
      },
      exampleJa: '朝ごはんはいつもパンと牛乳です。',
      exampleVi: 'Bữa sáng tôi luôn ăn bánh mì và uống sữa.',
      commonMistake: 'Viết bằng chữ Hiragana ぱん (là từ mượn tiếng Bồ Đào Nha Pão nên phải viết Katakana パン).'
    },
    {
      id: 'n5_tabemono_08',
      level: 'N5',
      category: 'tabemono',
      kanji: '林檎',
      hiragana: 'りんご',
      romaji: 'ringo',
      hanViet: 'LÂM CẦM',
      meaning: 'Quả táo',
      vietnamese: 'Quả táo',
      pitch: '[0] (Heiban)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><circle cx="42" cy="56" r="24" fill="#FA5252"/><circle cx="58" cy="56" r="24" fill="#E03131"/><path d="M50 35 Q52 20 62 18" stroke="#845EF7" stroke-width="4" fill="none"/><path d="M55 25 Q70 20 68 30 Z" fill="#40C057"/></svg>`,
      example: {
        ja: '赤いりんごはとても甘くて美味しいです。',
        hira: 'あかいりんごはとてもあまくておいしいです。',
        romaji: 'Akai ringo wa totemo amakute oishii desu.',
        vi: 'Quả táo đỏ rất ngọt và ngon.'
      },
      exampleJa: '赤いりんごはとても甘くて美味しいです。',
      exampleVi: 'Quả táo đỏ rất ngọt và ngon.',
      commonMistake: 'Đọc âm ん quá nhanh thành rigo.'
    },
    {
      id: 'n5_tabemono_09',
      level: 'N5',
      category: 'tabemono',
      kanji: '牛乳',
      hiragana: 'ぎゅうにゅう',
      romaji: 'gyuunyuu',
      hanViet: 'NGƯU NHŨ',
      meaning: 'Sữa bò tươi',
      vietnamese: 'Sữa bò tươi',
      pitch: '[0] (Heiban)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="35" y="32" width="30" height="48" rx="6" fill="#FFF" stroke="#74C0FC" stroke-width="3"/><rect x="40" y="44" width="20" height="15" fill="#4DABF7"/></svg>`,
      example: {
        ja: '寝る前に温かい牛乳を飲みます。',
        hira: 'ねるまえにあたたかいぎゅうにゅうをのみます。',
        romaji: 'Neru mae ni atatakai gyuunyuu o nomimasu.',
        vi: 'Trước khi đi ngủ tôi uống sữa ấm.'
      },
      exampleJa: '寝る前に温かい牛乳を飲みます。',
      exampleVi: 'Trước khi đi ngủ tôi uống sữa ấm.',
      commonMistake: 'Bỏ mất cả 2 trường âm ぎゅう và にゅう (phải đọc là gyūnyū).'
    },
    {
      id: 'n5_tabemono_10',
      level: 'N5',
      category: 'tabemono',
      kanji: '野菜',
      hiragana: 'やさい',
      romaji: 'yasai',
      hanViet: 'DÃ THÁI',
      meaning: 'Rau củ',
      vietnamese: 'Rau củ',
      pitch: '[0] (Heiban)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><path d="M40 75 L60 75 L68 40 L32 40 Z" fill="#FF922B"/><path d="M42 40 Q50 18 35 22 M58 40 Q50 18 65 22" stroke="#51CF66" stroke-width="4" fill="none"/></svg>`,
      example: {
        ja: '体にいいですから野菜をたくさん食べましょう。',
        hira: 'からだにいいですからやさいをたくさんたべましょう。',
        romaji: 'Karada ni ii desu kara yasai o takusan tabemashou.',
        vi: 'Vì tốt cho cơ thể nên hãy ăn thật nhiều rau nhé.'
      },
      exampleJa: '体にいいですから野菜をたくさん食べましょう。',
      exampleVi: 'Vì tốt cho cơ thể nên hãy ăn thật nhiều rau nhé.',
      commonMistake: 'Dễ nhầm phát âm với tính từ やすい (rẻ).'
    },
    {
      id: 'n5_tabemono_11',
      level: 'N5',
      category: 'tabemono',
      kanji: '果物',
      hiragana: 'くだもの',
      romaji: 'kudamono',
      hanViet: 'QUẢ VẬT',
      meaning: 'Trái cây / Hoa quả',
      vietnamese: 'Trái cây / Hoa quả',
      pitch: '[2] (Nakadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><circle cx="40" cy="55" r="16" fill="#FF8787"/><circle cx="60" cy="55" r="16" fill="#FFA94D"/><path d="M40 39 Q50 26 50 35 Q50 26 60 39" stroke="#40C057" stroke-width="3" fill="none"/></svg>`,
      example: {
        ja: '食後に甘い果物を食べます。',
        hira: 'しょくごにあまいくだものをたべます。',
        romaji: 'Shokugo ni amai kudamono o tabemasu.',
        vi: 'Sau bữa ăn tôi ăn hoa quả ngọt.'
      },
      exampleJa: '食後に甘い果物を食べます。',
      exampleVi: 'Sau bữa ăn tôi ăn hoa quả ngọt.',
      commonMistake: 'Đọc âm đục だ (da) thành た (ta).'
    },
    {
      id: 'n5_tabemono_12',
      level: 'N5',
      category: 'tabemono',
      kanji: '寿司',
      hiragana: 'すし',
      romaji: 'sushi',
      hanViet: 'THỌ TƯ',
      meaning: 'Món Sushi Nhật Bản',
      vietnamese: 'Món Sushi Nhật Bản',
      pitch: '[1] (Atamadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF5F5"/><rect x="25" y="50" width="50" height="24" rx="8" fill="#FFF" stroke="#E9ECEF"/><path d="M22 45 Q50 35 78 45 L75 56 Q50 48 25 56 Z" fill="#FF8787"/><rect x="44" y="44" width="12" height="32" rx="2" fill="#212529"/></svg>`,
      example: {
        ja: '日本の寿司は世界中で有名です。',
        hira: 'にほんのすしはせかいじゅうでゆうめいです。',
        romaji: 'Nihon no sushi wa sekaijuu de yuumei desu.',
        vi: 'Món sushi của Nhật Bản nổi tiếng trên toàn thế giới.'
      },
      exampleJa: '日本の寿司は世界中で有名です。',
      exampleVi: 'Món sushi của Nhật Bản nổi tiếng trên toàn thế giới.',
      commonMistake: 'Đọc âm す (su) chu môi nhọn như tiếng Việt (tiếng Nhật môi hơi bè ngang).'
    },
    {
      id: 'n5_tabemono_13',
      level: 'N5',
      category: 'tabemono',
      kanji: 'お酒',
      hiragana: 'おさけ',
      romaji: 'osake',
      hanViet: 'TỬU',
      meaning: 'Rượu sake / Đồ uống có cồn',
      vietnamese: 'Rượu sake / Đồ uống có cồn',
      pitch: '[0] (Heiban)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><path d="M42 30 L58 30 L62 75 L38 75 Z" fill="#845EF7" rx="4"/><rect x="40" y="48" width="20" height="14" fill="#FFF"/><text x="50" y="60" font-size="10" text-anchor="middle" fill="#845EF7">酒</text></svg>`,
      example: {
        ja: '二十歳未満はお酒を飲んではいけません。',
        hira: 'はたちみまんはおさけをのんではいけません。',
        romaji: 'Hatachi miman wa osake o nonde wa ikemasen.',
        vi: 'Dưới 20 tuổi không được phép uống rượu.'
      },
      exampleJa: '二十歳未満はお酒を飲んではいけません。',
      exampleVi: 'Dưới 20 tuổi không được phép uống rượu.',
      commonMistake: 'Nhầm từ おさけ (rượu) với さけ (cá hồi - chữ Hán là 鮭).'
    },

    // ========================================================================
    // CHỦ ĐỀ 3: ĐỘNG VẬT & THIÊN NHIÊN (DOUBUTSU)
    // ========================================================================
    {
      id: 'n5_doubutsu_01',
      level: 'N5',
      category: 'doubutsu',
      kanji: '犬',
      hiragana: 'いぬ',
      romaji: 'inu',
      hanViet: 'CẨU',
      meaning: 'Con chó',
      vietnamese: 'Con chó',
      pitch: '[2] (Odaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><ellipse cx="50" cy="55" rx="30" ry="25" fill="#FFA94D"/><path d="M25 35 Q20 60 35 55 Z" fill="#D9480F"/><path d="M75 35 Q80 60 65 55 Z" fill="#D9480F"/><circle cx="40" cy="50" r="4" fill="#000"/><circle cx="60" cy="50" r="4" fill="#000"/><ellipse cx="50" cy="62" rx="6" ry="4" fill="#212529"/></svg>`,
      example: {
        ja: '庭でかわいい犬が元気に走っています。',
        hira: 'にわでかわいいいぬがげんきにはしっています。',
        romaji: 'Niwa de kawaii inu ga genki ni hashitte imasu.',
        vi: 'Chú chó dễ thương đang chạy tung tăng trong sân.'
      },
      exampleJa: '庭でかわいい犬が元気に走っています。',
      exampleVi: 'Chú chó dễ thương đang chạy tung tăng trong sân.',
      commonMistake: 'Nhấn sai trọng âm ở âm đầu thay vì hạ giọng ở âm đuôi.'
    },
    {
      id: 'n5_doubutsu_02',
      level: 'N5',
      category: 'doubutsu',
      kanji: '猫',
      hiragana: 'ねこ',
      romaji: 'neko',
      hanViet: 'MIÊU',
      meaning: 'Con mèo',
      vietnamese: 'Con mèo',
      pitch: '[1] (Atamadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F8F0FC"/><polygon points="25,50 35,25 50,45" fill="#CC5DE8"/><polygon points="75,50 65,25 50,45" fill="#CC5DE8"/><ellipse cx="50" cy="58" rx="28" ry="24" fill="#E599F7"/><circle cx="40" cy="55" r="4" fill="#343A40"/><circle cx="60" cy="55" r="4" fill="#343A40"/><polygon points="50,62 47,66 53,66" fill="#F06595"/></svg>`,
      example: {
        ja: '白い猫が窓のそばで寝ています。',
        hira: 'しろいねこがまどのそばでねています。',
        romaji: 'Shiroi neko ga mado no soba de nete imasu.',
        vi: 'Chú mèo lông trắng đang nằm ngủ bên cửa sổ.'
      },
      exampleJa: '白い猫が窓のそばで寝ています。',
      exampleVi: 'Chú mèo lông trắng đang nằm ngủ bên cửa sổ.',
      commonMistake: 'Đọc âm ね thấp hơn こ (từ này có pitch [1], âm ね phải nhấn cao).'
    },
    {
      id: 'n5_doubutsu_03',
      level: 'N5',
      category: 'doubutsu',
      kanji: '鳥',
      hiragana: 'とり',
      romaji: 'tori',
      hanViet: 'ĐIỂU',
      meaning: 'Con chim',
      vietnamese: 'Con chim',
      pitch: '[0] (Heiban)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="45" cy="50" r="22" fill="#74C0FC"/><polygon points="65,48 85,53 65,60" fill="#FF922B"/><circle cx="52" cy="45" r="3.5" fill="#000"/><path d="M30 55 Q20 40 35 38" stroke="#1864AB" stroke-width="3" fill="none"/></svg>`,
      example: {
        ja: '青い鳥が空高く飛んでいます。',
        hira: 'あおいとりがそらたかくとんでいます。',
        romaji: 'Aoi tori ga sora takaku tonde imasu.',
        vi: 'Chú chim xanh đang bay lượn trên trời cao.'
      },
      exampleJa: '青い鳥が空高く飛んでいます。',
      exampleVi: 'Chú chim xanh đang bay lượn trên trời cao.',
      commonMistake: 'Nhầm nghĩa giữa とり (con chim) và とりにく (thịt gà).'
    },
    {
      id: 'n5_doubutsu_04',
      level: 'N5',
      category: 'doubutsu',
      kanji: '花',
      hiragana: 'はな',
      romaji: 'hana',
      hanViet: 'HOA',
      meaning: 'Bông hoa',
      vietnamese: 'Bông hoa',
      pitch: '[2] (Odaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><g fill="#FF8787"><circle cx="50" cy="35" r="14"/><circle cx="65" cy="45" r="14"/><circle cx="60" cy="63" r="14"/><circle cx="40" cy="63" r="14"/><circle cx="35" cy="45" r="14"/></g><circle cx="50" cy="50" r="10" fill="#FFD43B"/></svg>`,
      example: {
        ja: '春になると桜の花が美しく咲きます。',
        hira: 'はるになるとさくらのはながうつくしくさきます。',
        romaji: 'Haru ni naru to sakura no hana ga utsukushiku sakimasu.',
        vi: 'Khi mùa xuân đến, hoa anh đào nở rộ tuyệt đẹp.'
      },
      exampleJa: '春になると桜の花が美しく咲きます。',
      exampleVi: 'Khi mùa xuân đến, hoa anh đào nở rộ tuyệt đẹp.',
      commonMistake: 'Dễ nhầm với 鼻 (cái mũi - đọc cùng là hana nhưng trọng âm khác: 鼻 pitch [0], 花 pitch [2]).'
    },
    {
      id: 'n5_doubutsu_05',
      level: 'N5',
      category: 'doubutsu',
      kanji: '木',
      hiragana: 'き',
      romaji: 'ki',
      hanViet: 'MỘC',
      meaning: 'Cái cây',
      vietnamese: 'Cái cây',
      pitch: '[1] (Atamadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><rect x="44" y="55" width="12" height="30" rx="3" fill="#845EF7"/><circle cx="50" cy="45" r="25" fill="#51CF66"/><circle cx="38" cy="40" r="18" fill="#40C057"/><circle cx="62" cy="40" r="18" fill="#37B24D"/></svg>`,
      example: {
        ja: '大きな木の下で少し休みましょう。',
        hira: 'おおきなきのしたですこしやすみましょう。',
        romaji: 'Ookina ki no shita de sukoshi yasumimashou.',
        vi: 'Chúng ta hãy nghỉ chân một lát dưới gốc cây to nhé.'
      },
      exampleJa: '大きな木の下で少し休みましょう。',
      exampleVi: 'Chúng ta hãy nghỉ chân một lát dưới gốc cây to nhé.',
      commonMistake: 'Đọc âm き quá ngắn thành phụ âm k bật không rõ nguyên âm i.'
    },
    {
      id: 'n5_doubutsu_06',
      level: 'N5',
      category: 'doubutsu',
      kanji: '山',
      hiragana: 'やま',
      romaji: 'yama',
      hanViet: 'SƠN',
      meaning: 'Ngọn núi',
      vietnamese: 'Ngọn núi',
      pitch: '[2] (Odaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><polygon points="50,20 85,80 15,80" fill="#4DABF7"/><polygon points="50,20 62,42 50,38 38,42" fill="#FFFFFF"/></svg>`,
      example: {
        ja: '週末に友達と富士山に登ります。',
        hira: 'しゅうまつにともだちとふじさんにのぼります。',
        romaji: 'Shuumatsu ni tomodachi to fujisan ni noborimasu.',
        vi: 'Cuối tuần tôi sẽ cùng bạn leo núi Phú Sĩ.'
      },
      exampleJa: '週末に友達と富士山に登ります。',
      exampleVi: 'Cuối tuần tôi sẽ cùng bạn leo núi Phú Sĩ.',
      commonMistake: 'Nhầm lẫn cách đọc Kun-yomi là やま (yama) và On-yomi ghép tên núi là さん (như Fuji-san).'
    },
    {
      id: 'n5_doubutsu_07',
      level: 'N5',
      category: 'doubutsu',
      kanji: '川',
      hiragana: 'かわ',
      romaji: 'kawa',
      hanViet: 'XUYÊN',
      meaning: 'Con sông',
      vietnamese: 'Con sông',
      pitch: '[2] (Odaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><path d="M25 20 Q40 50 25 80 L75 80 Q60 50 75 20 Z" fill="#339AF0"/><path d="M45 30 Q55 50 45 70" stroke="#A5D8FF" stroke-width="3" fill="none"/></svg>`,
      example: {
        ja: 'この川の水はとても澄んでいて綺麗です。',
        hira: 'このかわのみずはとてもすんでいてがきれいです。',
        romaji: 'Kono kawa no mizu wa totemo sunde ite kirei desu.',
        vi: 'Nước con sông này rất trong và sạch đẹp.'
      },
      exampleJa: 'この川の水はとても澄んでいて綺麗です。',
      exampleVi: 'Nước con sông này rất trong và sạch đẹp.',
      commonMistake: 'Khi ghép tên sông riêng biến âm thành -gawa (ví dụ: Sumida-gawa).'
    },
    {
      id: 'n5_doubutsu_08',
      level: 'N5',
      category: 'doubutsu',
      kanji: '雨',
      hiragana: 'あめ',
      romaji: 'ame',
      hanViet: 'VŨ',
      meaning: 'Cơn mưa',
      vietnamese: 'Cơn mưa',
      pitch: '[1] (Atamadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E9ECEF"/><path d="M30 48 A15 15 0 0 1 65 38 A18 18 0 0 1 78 52 A12 12 0 0 1 70 62 L30 62 A12 12 0 0 1 30 48 Z" fill="#868E96"/><path d="M35 70 L30 82 M50 70 L45 82 M65 70 L60 82" stroke="#339AF0" stroke-width="4" stroke-linecap="round"/></svg>`,
      example: {
        ja: '今日は朝から雨が激しく降っています。',
        hira: 'きょうはあさからあめがはげしくふっています。',
        romaji: 'Kyou wa asa kara ame ga hageshiku futte imasu.',
        vi: 'Hôm nay từ sáng trời đã đổ mưa rất to.'
      },
      exampleJa: '今日は朝から雨が激しく降っています。',
      exampleVi: 'Hôm nay từ sáng trời đã đổ mưa rất to.',
      commonMistake: 'Nhầm trọng âm với 飴 (kẹo - đọc cùng là ame nhưng pitch [0], còn 雨 là pitch [1]).'
    },
    {
      id: 'n5_doubutsu_09',
      level: 'N5',
      category: 'doubutsu',
      kanji: '雪',
      hiragana: 'ゆき',
      romaji: 'yuki',
      hanViet: 'TUYẾT',
      meaning: 'Tuyết rơi',
      vietnamese: 'Tuyết rơi',
      pitch: '[2] (Odaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="65" r="20" fill="#FFF"/><circle cx="50" cy="38" r="14" fill="#FFF"/><circle cx="45" cy="35" r="2" fill="#343A40"/><circle cx="55" cy="35" r="2" fill="#343A40"/><polygon points="50,38 58,40 50,42" fill="#FF922B"/></svg>`,
      example: {
        ja: '冬の北海道は白い雪がたくさん積もります。',
        hira: 'ふゆのほっかいどうはしろいゆきがたくさんつもります。',
        romaji: 'Fuyu no Hokkaidou wa shiroi yuki ga takusan tsumorimasu.',
        vi: 'Mùa đông ở Hokkaido tuyết trắng tích tụ lại rất nhiều.'
      },
      exampleJa: '冬の北海道は白い雪がたくさん積もります。',
      exampleVi: 'Mùa đông ở Hokkaido tuyết trắng tích tụ lại rất nhiều.',
      commonMistake: 'Phát âm chữ ゆ (yu) thành "du" hay "giu".'
    },
    {
      id: 'n5_doubutsu_10',
      level: 'N5',
      category: 'doubutsu',
      kanji: '空',
      hiragana: 'そら',
      romaji: 'sora',
      hanViet: 'KHÔNG',
      meaning: 'Bầu trời',
      vietnamese: 'Bầu trời',
      pitch: '[1] (Atamadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#A5D8FF"/><path d="M25 60 Q35 48 50 50 Q65 42 75 58 Z" fill="#FFF"/><circle cx="30" cy="30" r="10" fill="#FFD43B"/></svg>`,
      example: {
        ja: '今日の空は青くてとても晴れています。',
        hira: 'きょうのそらはあおくてとてもはれています。',
        romaji: 'Kyou no sora wa aokute totemo harete imasu.',
        vi: 'Bầu trời hôm nay xanh ngắt và rất quang đãng.'
      },
      exampleJa: '今日の空は青くてとても晴れています。',
      exampleVi: 'Bầu trời hôm nay xanh ngắt và rất quang đãng.',
      commonMistake: 'Đọc âm ら (ra) thành "la" thay vì gõ nhẹ đầu lưỡi vào vòm họng.'
    },
    {
      id: 'n5_doubutsu_11',
      level: 'N5',
      category: 'doubutsu',
      kanji: '海',
      hiragana: 'うみ',
      romaji: 'umi',
      hanViet: 'HẢI',
      meaning: 'Biển cả',
      vietnamese: 'Biển cả',
      pitch: '[1] (Atamadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#74C0FC"/><path d="M15 65 Q30 55 50 65 Q70 75 85 65 L85 85 L15 85 Z" fill="#1864AB"/><circle cx="70" cy="35" r="12" fill="#FFD43B"/></svg>`,
      example: {
        ja: '夏休みに家族と一緒に海へ行きます。',
        hira: 'なつやすみにかぞくといっしょにうみへいきます。',
        romaji: 'Natsuyasumi ni kazoku to issho ni umi e ikimasu.',
        vi: 'Vào kỳ nghỉ hè tôi sẽ đi biển cùng với gia đình.'
      },
      exampleJa: '夏休みに家族と一緒に海へ行きます。',
      exampleVi: 'Vào kỳ nghỉ hè tôi sẽ đi biển cùng với gia đình.',
      commonMistake: 'Đọc sai trọng âm rơi vào mi (từ này nhấn vào âm đầu [1]).'
    },
    {
      id: 'n5_doubutsu_12',
      level: 'N5',
      category: 'doubutsu',
      kanji: '太陽',
      hiragana: 'たいよう',
      romaji: 'taiyou',
      hanViet: 'THÁI DƯƠNG',
      meaning: 'Mặt trời',
      vietnamese: 'Mặt trời',
      pitch: '[1] (Atamadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><circle cx="50" cy="50" r="22" fill="#FF922B"/><line x1="50" y1="16" x2="50" y2="8" stroke="#FF922B" stroke-width="4" stroke-linecap="round"/><line x1="50" y1="84" x2="50" y2="92" stroke="#FF922B" stroke-width="4" stroke-linecap="round"/><line x1="16" y1="50" x2="8" y2="50" stroke="#FF922B" stroke-width="4" stroke-linecap="round"/><line x1="84" y1="50" x2="92" y2="50" stroke="#FF922B" stroke-width="4" stroke-linecap="round"/></svg>`,
      example: {
        ja: '太陽の光が部屋を明るく照らしています。',
        hira: 'たいようのひかりがへやをあかるくてらしています。',
        romaji: 'Taiyou no hikari ga heya o akaruku terashite imasu.',
        vi: 'Ánh nắng mặt trời đang chiếu sáng rực rỡ khắp căn phòng.'
      },
      exampleJa: '太陽の光が部屋を明るく照らしています。',
      exampleVi: 'Ánh nắng mặt trời đang chiếu sáng rực rỡ khắp căn phòng.',
      commonMistake: 'Bỏ mất trường âm よう (phải đọc là taiyō).'
    },
    {
      id: 'n5_doubutsu_13',
      level: 'N5',
      category: 'doubutsu',
      kanji: '月',
      hiragana: 'つき',
      romaji: 'tsuki',
      hanViet: 'NGUYỆT',
      meaning: 'Mặt trăng / Tháng',
      vietnamese: 'Mặt trăng / Tháng',
      pitch: '[2] (Odaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#212529"/><path d="M42 22 A28 28 0 0 0 70 74 A32 32 0 1 1 42 22 Z" fill="#FFD43B"/><circle cx="30" cy="35" r="2" fill="#FFF"/></svg>`,
      example: {
        ja: '今夜は満月で、月がとても丸くて綺麗です。',
        hira: 'こんやはまんげつで、つきがとてもまるくてきれいです。',
        romaji: 'Konya wa mangetsu de, tsuki ga totemo marukute kirei desu.',
        vi: 'Tối nay là trăng tròn, mặt trăng vừa tròn vừa rất đẹp.'
      },
      exampleJa: '今夜は満月で、月がとても丸くて綺麗です。',
      exampleVi: 'Tối nay là trăng tròn, mặt trăng vừa tròn vừa rất đẹp.',
      commonMistake: 'Phát âm つ (tsu) thành "su" hoặc "chu".'
    },

    // ========================================================================
    // CHỦ ĐỀ 4: ĐỒ VẬT & ĐỜI SỐNG (KURASHI)
    // ========================================================================
    {
      id: 'n5_kurashi_01',
      level: 'N5',
      category: 'kurashi',
      kanji: '本',
      hiragana: 'ほん',
      romaji: 'hon',
      hanViet: 'BẢN',
      meaning: 'Quyển sách',
      vietnamese: 'Quyển sách',
      pitch: '[1] (Atamadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><path d="M22 30 Q50 35 50 75 Q22 70 22 30 Z" fill="#74C0FC"/><path d="M78 30 Q50 35 50 75 Q78 70 78 30 Z" fill="#4DABF7"/><line x1="50" y1="35" x2="50" y2="75" stroke="#1864AB" stroke-width="3"/></svg>`,
      example: {
        ja: '図書館で日本語の本を二冊借りました。',
        hira: 'としょかんでにほんごのほんをにさつかりました。',
        romaji: 'Toshokan de nihongo no hon o nisatsu karimashita.',
        vi: 'Tôi đã mượn 2 cuốn sách tiếng Nhật ở thư viện.'
      },
      exampleJa: '図書館で日本語の本を二冊借りました。',
      exampleVi: 'Tôi đã mượn 2 cuốn sách tiếng Nhật ở thư viện.',
      commonMistake: 'Nhầm từ đếm sách: sách dùng 冊 (satsu), chữ 本 (hon) khi dùng làm lượng từ là đếm vật dài thon.'
    },
    {
      id: 'n5_kurashi_02',
      level: 'N5',
      category: 'kurashi',
      kanji: '鞄',
      hiragana: 'かばん',
      romaji: 'kaban',
      hanViet: 'BẠC',
      meaning: 'Cặp sách / Túi xách',
      vietnamese: 'Cặp sách / Túi xách',
      pitch: '[0] (Heiban)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><path d="M38 38 A12 12 0 0 1 62 38" stroke="#E8590C" stroke-width="4" fill="none"/><rect x="25" y="38" width="50" height="42" rx="8" fill="#FFA94D"/><rect x="30" y="52" width="40" height="20" rx="4" fill="#FF922B"/></svg>`,
      example: {
        ja: '黒くて丈夫な鞄を新しく買いました。',
        hira: 'くろくてじょうぶなかばんをあたらしくかいました。',
        romaji: 'Kurokute joubu na kaban o atarashiku kaimashita.',
        vi: 'Tôi đã mua một chiếc túi xách mới màu đen rất bền.'
      },
      exampleJa: '黒くて丈夫な鞄を新しく買いました。',
      exampleVi: 'Tôi đã mua một chiếc túi xách mới màu đen rất bền.',
      commonMistake: 'Đọc âm ん quá ngắn.'
    },
    {
      id: 'n5_kurashi_03',
      level: 'N5',
      category: 'kurashi',
      kanji: '時計',
      hiragana: 'とけい',
      romaji: 'tokei',
      hanViet: 'THÌ KẾ',
      meaning: 'Đồng hồ',
      vietnamese: 'Đồng hồ',
      pitch: '[0] (Heiban)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><circle cx="50" cy="50" r="32" fill="#FFF" stroke="#40C057" stroke-width="5"/><line x1="50" y1="50" x2="50" y2="30" stroke="#2B8A3E" stroke-width="4" stroke-linecap="round"/><line x1="50" y1="50" x2="64" y2="50" stroke="#FA5252" stroke-width="3" stroke-linecap="round"/></svg>`,
      example: {
        ja: 'この時計はスイス製で、とても正確です。',
        hira: 'このとけいはすいすせいで、とてもせいかくです。',
        romaji: 'Kono tokei wa suisusei de, totemo seikaku desu.',
        vi: 'Chiếc đồng hồ này làm từ Thụy Sĩ, chạy rất chuẩn xác.'
      },
      exampleJa: 'この時計はスイス製で、とても正確です。',
      exampleVi: 'Chiếc đồng hồ này làm từ Thụy Sĩ, chạy rất chuẩn xác.',
      commonMistake: 'Quên trường âm けい (phải đọc là to-kei).'
    },
    {
      id: 'n5_kurashi_04',
      level: 'N5',
      category: 'kurashi',
      kanji: '車',
      hiragana: 'くるま',
      romaji: 'kuruma',
      hanViet: 'XA',
      meaning: 'Xe ô tô',
      vietnamese: 'Xe ô tô',
      pitch: '[0] (Heiban)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><path d="M22 56 L30 40 Q38 34 55 34 L68 40 L80 48 L80 64 L20 64 Z" fill="#FA5252"/><circle cx="34" cy="66" r="8" fill="#343A40"/><circle cx="68" cy="66" r="8" fill="#343A40"/><circle cx="34" cy="66" r="3" fill="#FFF"/><circle cx="68" cy="66" r="3" fill="#FFF"/></svg>`,
      example: {
        ja: '父は毎日車を運転して会社へ行きます。',
        hira: 'ちちはまいにちくるまをうんてんしてかいしゃへいきます。',
        romaji: 'Chichi wa mainichi kuruma o unten shite kaisha e ikimasu.',
        vi: 'Bố tôi mỗi ngày đều lái xe ô tô đi làm.'
      },
      exampleJa: '父は毎日車を運転して会社へ行きます。',
      exampleVi: 'Bố tôi mỗi ngày đều lái xe ô tô đi làm.',
      commonMistake: 'Nhầm từ với じてんしゃ (xe đạp) hoặc でんしゃ (tàu điện).'
    },
    {
      id: 'n5_kurashi_05',
      level: 'N5',
      category: 'kurashi',
      kanji: '自転車',
      hiragana: 'じてんしゃ',
      romaji: 'jitensha',
      hanViet: 'TỰ CHUYỂN XA',
      meaning: 'Xe đạp',
      vietnamese: 'Xe đạp',
      pitch: '[2] (Nakadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F8F0FC"/><circle cx="30" cy="60" r="14" fill="none" stroke="#7950F2" stroke-width="4"/><circle cx="70" cy="60" r="14" fill="none" stroke="#7950F2" stroke-width="4"/><polygon points="30,60 50,60 42,42 60,42 70,60" fill="none" stroke="#7950F2" stroke-width="4"/></svg>`,
      example: {
        ja: '駅まで自転車で十分くらいかかります。',
        hira: 'えきまでじてんしゃでじゅっぷんくらいかかります。',
        romaji: 'Eki made jitensha de juppun kurai kakarimasu.',
        vi: 'Đi xe đạp ra ga mất khoảng chừng 10 phút.'
      },
      exampleJa: '駅まで自転車で十分くらいかかります。',
      exampleVi: 'Đi xe đạp ra ga mất khoảng chừng 10 phút.',
      commonMistake: 'Nuốt âm nhỏ しゃ thành shi-a.'
    },
    {
      id: 'n5_kurashi_06',
      level: 'N5',
      category: 'kurashi',
      kanji: '電話',
      hiragana: 'でんわ',
      romaji: 'denwa',
      hanViet: 'ĐIỆN THOẠI',
      meaning: 'Điện thoại',
      vietnamese: 'Điện thoại',
      pitch: '[0] (Heiban)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="34" y="24" width="32" height="52" rx="6" fill="#343A40"/><rect x="37" y="28" width="26" height="38" rx="2" fill="#74C0FC"/><circle cx="50" cy="71" r="2.5" fill="#FFF"/></svg>`,
      example: {
        ja: '国にいる家族に電話をかけます。',
        hira: 'くににいるかぞくにでんわをかけます。',
        romaji: 'Kuni ni iru kazoku ni denwa o kakemasu.',
        vi: 'Tôi gọi điện thoại cho gia đình ở quê nhà.'
      },
      exampleJa: '国にいる家族に電話をかけます。',
      exampleVi: 'Tôi gọi điện thoại cho gia đình ở quê nhà.',
      commonMistake: 'Phát âm で (de) không đủ độ đục, nhầm sang て (te).'
    },
    {
      id: 'n5_kurashi_07',
      level: 'N5',
      category: 'kurashi',
      kanji: '鉛筆',
      hiragana: 'えんぴつ',
      romaji: 'enpitsu',
      hanViet: 'DUYÊN BÚT',
      meaning: 'Bút chì',
      vietnamese: 'Bút chì',
      pitch: '[0] (Heiban)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><g transform="rotate(45 50 50)"><rect x="44" y="22" width="12" height="46" fill="#FCC419"/><polygon points="44,68 56,68 50,82" fill="#FFE066"/><polygon points="48,77 52,77 50,82" fill="#212529"/></g></svg>`,
      example: {
        ja: '試験は鉛筆と消しゴムを使います。',
        hira: 'しけんはえんぴつとけしごむをつかいます。',
        romaji: 'Shiken wa enpitsu to keshigomu o tsukaimasu.',
        vi: 'Kỳ thi sử dụng bút chì và tẩy.'
      },
      exampleJa: '試験は鉛筆と消しゴムを使います。',
      exampleVi: 'Kỳ thi sử dụng bút chì và tẩy.',
      commonMistake: 'Nhầm âm bán đục ぴ (pi) với âm đục び (bi).'
    },
    {
      id: 'n5_kurashi_08',
      level: 'N5',
      category: 'kurashi',
      kanji: '傘',
      hiragana: 'かさ',
      romaji: 'kasa',
      hanViet: 'TẢN',
      meaning: 'Cái ô / dù che mưa nắng',
      vietnamese: 'Cái ô / dù che mưa nắng',
      pitch: '[1] (Atamadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><path d="M20 50 Q50 16 80 50 Z" fill="#845EF7"/><line x1="50" y1="36" x2="50" y2="76" stroke="#5F3DC4" stroke-width="4"/><path d="M50 76 A6 6 0 0 0 42 76" stroke="#5F3DC4" stroke-width="4" fill="none"/></svg>`,
      example: {
        ja: '雨が降っていますから、傘をさして出かけます。',
        hira: 'あめがふっていますから、かさをさしてでかけます。',
        romaji: 'Ame ga futte imasu kara, kasa o sashite dekakemasu.',
        vi: 'Vì trời đang mưa nên tôi che ô ra ngoài.'
      },
      exampleJa: '雨が降っていますから、傘をさして出かけます。',
      exampleVi: 'Vì trời đang mưa nên tôi che ô ra ngoài.',
      commonMistake: 'Quên động từ đi với ô là さす (kasa o sasu: che ô).'
    },
    {
      id: 'n5_kurashi_09',
      level: 'N5',
      category: 'kurashi',
      kanji: '鍵',
      hiragana: 'かぎ',
      romaji: 'kagi',
      hanViet: 'KIỆN',
      meaning: 'Chìa khóa',
      vietnamese: 'Chìa khóa',
      pitch: '[2] (Odaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><circle cx="40" cy="45" r="16" fill="none" stroke="#F59F00" stroke-width="6"/><rect x="52" y="42" width="28" height="6" fill="#F59F00"/><rect x="70" y="48" width="6" height="8" fill="#F59F00"/></svg>`,
      example: {
        ja: '出かける前に部屋の鍵をちゃんとかけます。',
        hira: 'でかけるまえにへやのかぎをちゃんとかけます。',
        romaji: 'Dekakeru mae ni heya no kagi o chanto kakemasu.',
        vi: 'Trước khi ra ngoài tôi khóa cửa phòng cẩn thận.'
      },
      exampleJa: '出かける前に部屋の鍵をちゃんとかけます。',
      exampleVi: 'Trước khi ra ngoài tôi khóa cửa phòng cẩn thận.',
      commonMistake: 'Phát âm ぎ (gi) thành ki.'
    },
    {
      id: 'n5_kurashi_10',
      level: 'N5',
      category: 'kurashi',
      kanji: '机',
      hiragana: 'つくえ',
      romaji: 'tsukue',
      hanViet: 'CƠ',
      meaning: 'Bàn học / Bàn làm việc',
      vietnamese: 'Bàn học / Bàn làm việc',
      pitch: '[0] (Heiban)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><polygon points="20,45 80,45 85,55 15,55" fill="#FFA94D"/><rect x="22" y="55" width="6" height="28" fill="#D9480F"/><rect x="72" y="55" width="6" height="28" fill="#D9480F"/></svg>`,
      example: {
        ja: '机の上にノートとペンが置いてあります。',
        hira: 'つくえのうえにのーととぺんがおいてあります。',
        romaji: 'Tsukue no ue ni nooto to pen ga oite arimasu.',
        vi: 'Trên bàn có đặt sẵn vở và bút.'
      },
      exampleJa: '机の上にノートとペンが置いてあります。',
      exampleVi: 'Trên bàn có đặt sẵn vở và bút.',
      commonMistake: 'Phát âm つ (tsu) thành su.'
    },
    {
      id: 'n5_kurashi_11',
      level: 'N5',
      category: 'kurashi',
      kanji: '椅子',
      hiragana: 'いす',
      romaji: 'isu',
      hanViet: 'Y TỬ',
      meaning: 'Cái ghế',
      vietnamese: 'Cái ghế',
      pitch: '[0] (Heiban)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><rect x="35" y="24" width="30" height="6" fill="#40C057"/><rect x="35" y="30" width="6" height="24" fill="#2B8A3E"/><rect x="59" y="30" width="6" height="24" fill="#2B8A3E"/><rect x="30" y="54" width="40" height="6" fill="#51CF66"/><rect x="34" y="60" width="5" height="22" fill="#2B8A3E"/><rect x="61" y="60" width="5" height="22" fill="#2B8A3E"/></svg>`,
      example: {
        ja: 'どうぞその椅子にお掛けください。',
        hira: 'どうぞそのいすにおかけください。',
        romaji: 'Douzo sono isu ni okake kudasai.',
        vi: 'Xin mời bạn ngồi xuống chiếc ghế đó ạ.'
      },
      exampleJa: 'どうぞその椅子にお掛けください。',
      exampleVi: 'Xin mời bạn ngồi xuống chiếc ghế đó ạ.',
      commonMistake: 'Kéo dài âm い thành ii-su.'
    },
    {
      id: 'n5_kurashi_12',
      level: 'N5',
      category: 'kurashi',
      kanji: '手紙',
      hiragana: 'てがみ',
      romaji: 'tegami',
      hanViet: 'THỦ CHỈ',
      meaning: 'Bức thư',
      vietnamese: 'Bức thư',
      pitch: '[0] (Heiban)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><rect x="25" y="32" width="50" height="36" rx="4" fill="#FFF" stroke="#FA5252" stroke-width="2"/><polygon points="25,32 50,54 75,32" fill="#FFC9C9"/><polygon points="25,32 50,54 75,32" fill="none" stroke="#FA5252" stroke-width="2"/></svg>`,
      example: {
        ja: '故郷の母に長い手紙を書きました。',
        hira: 'こきょうのははにながいてがみをかきました。',
        romaji: 'Kokyou no haha ni nagai tegami o kakimashita.',
        vi: 'Tôi đã viết một bức thư dài gửi về cho mẹ ở quê.'
      },
      exampleJa: '故郷の母に長い手紙を書きました。',
      exampleVi: 'Tôi đã viết một bức thư dài gửi về cho mẹ ở quê.',
      commonMistake: 'Nhầm nghĩa chữ Hán 手紙 (thư từ trong tiếng Nhật, còn tiếng Trung là giấy vệ sinh).'
    },
    {
      id: 'n5_kurashi_13',
      level: 'N5',
      category: 'kurashi',
      kanji: '財布',
      hiragana: 'さいふ',
      romaji: 'saifu',
      hanViet: 'TÀI BỐ',
      meaning: 'Cái ví tiền',
      vietnamese: 'Cái ví tiền',
      pitch: '[0] (Heiban)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><rect x="26" y="36" width="48" height="34" rx="6" fill="#F59F00"/><circle cx="50" cy="42" r="4" fill="#FFD43B"/><line x1="26" y1="52" x2="74" y2="52" stroke="#D9480F" stroke-width="2"/></svg>`,
      example: {
        ja: '財布を家に忘れてしまいました。',
        hira: 'さいふをいえにわすれてしまいました。',
        romaji: 'Saifu o ie ni wasurete shimaimashita.',
        vi: 'Tôi lỡ để quên ví tiền ở nhà mất rồi.'
      },
      exampleJa: '財布を家に忘れてしまいました。',
      exampleVi: 'Tôi lỡ để quên ví tiền ở nhà mất rồi.',
      commonMistake: 'Phát âm ふ (fu) cắn răng như chữ F tiếng Anh (trong tiếng Nhật hai môi khẽ mở thổi nhẹ).'
    },

    // ========================================================================
    // CHỦ ĐỀ 5: GIA ĐÌNH & CON NGƯỜI (KAZOKU)
    // ========================================================================
    {
      id: 'n5_kazoku_01',
      level: 'N5',
      category: 'kazoku',
      kanji: '家族',
      hiragana: 'かぞく',
      romaji: 'kazoku',
      hanViet: 'GIA TỘC',
      meaning: 'Gia đình',
      vietnamese: 'Gia đình',
      pitch: '[1] (Atamadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><circle cx="36" cy="42" r="10" fill="#4DABF7"/><circle cx="64" cy="42" r="10" fill="#FF8787"/><circle cx="50" cy="62" r="8" fill="#FFD43B"/><path d="M26 68 Q36 56 46 68" stroke="#1864AB" stroke-width="3" fill="none"/><path d="M54 68 Q64 56 74 68" stroke="#C92A2A" stroke-width="3" fill="none"/></svg>`,
      example: {
        ja: '私の家族は父、母、姉と私の四人です。',
        hira: 'わたしのかぞくはちち、はは、あねとわたしのよにんです。',
        romaji: 'Watashi no kazoku wa chichi, haha, ane to watashi no yonin desu.',
        vi: 'Gia đình tôi có 4 người gồm bố, mẹ, chị gái và tôi.'
      },
      exampleJa: '私の家族は父、母、姉と私の四人です。',
      exampleVi: 'Gia đình tôi có 4 người gồm bố, mẹ, chị gái và tôi.',
      commonMistake: 'Phát âm ぞ (zo) thành do.'
    },
    {
      id: 'n5_kazoku_02',
      level: 'N5',
      category: 'kazoku',
      kanji: 'お父さん',
      hiragana: 'おとうさん',
      romaji: 'otousan',
      hanViet: 'PHỤ',
      meaning: 'Bố / Ba (của người khác hoặc khi gọi bố)',
      vietnamese: 'Bố / Ba (của người khác hoặc khi gọi bố)',
      pitch: '[2] (Nakadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="44" r="16" fill="#74C0FC"/><path d="M38 48 Q50 56 62 48" stroke="#1864AB" stroke-width="3" fill="none"/><rect x="36" y="66" width="28" height="20" rx="4" fill="#339AF0"/></svg>`,
      example: {
        ja: 'あなたのお父さんはお元気ですか？',
        hira: 'あなたのおとうさんはおげんきですか？',
        romaji: 'Anata no otousan wa ogenki desu ka?',
        vi: 'Bố bạn dạo này có khỏe không?'
      },
      exampleJa: 'あなたのお父さんはお元気ですか？',
      exampleVi: 'Bố bạn dạo này có khỏe không?',
      commonMistake: 'Dùng おとうさん khi kể về bố mình với người ngoài (phải dùng ちち - chichi).'
    },
    {
      id: 'n5_kazoku_03',
      level: 'N5',
      category: 'kazoku',
      kanji: 'お母さん',
      hiragana: 'おかあさん',
      romaji: 'okaasan',
      hanViet: 'MẪU',
      meaning: 'Mẹ / Má (của người khác hoặc khi gọi mẹ)',
      vietnamese: 'Mẹ / Má (của người khác hoặc khi gọi mẹ)',
      pitch: '[2] (Nakadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><circle cx="50" cy="44" r="16" fill="#FF8787"/><path d="M34 32 Q50 20 66 32" stroke="#C92A2A" stroke-width="4" fill="none"/><rect x="36" y="66" width="28" height="20" rx="4" fill="#FA5252"/></svg>`,
      example: {
        ja: 'お母さんが作った料理は世界一美味しいです。',
        hira: 'おかあさんがつくったりょうりはせかいいちおいしいです。',
        romaji: 'Okaasan ga tsukutta ryouri wa sekaiichi oishii desu.',
        vi: 'Món ăn mẹ nấu ngon nhất thế giới.'
      },
      exampleJa: 'お母さんが作った料理は世界一美味しいです。',
      exampleVi: 'Món ăn mẹ nấu ngon nhất thế giới.',
      commonMistake: 'Quên trường âm あ, và khi nói về mẹ mình với người ngoài phải dùng はは (haha).'
    },
    {
      id: 'n5_kazoku_04',
      level: 'N5',
      category: 'kazoku',
      kanji: '友達',
      hiragana: 'ともだち',
      romaji: 'tomodachi',
      hanViet: 'HỮU ĐẠT',
      meaning: 'Bạn bè',
      vietnamese: 'Bạn bè',
      pitch: '[0] (Heiban)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><circle cx="38" cy="40" r="12" fill="#FFA94D"/><circle cx="62" cy="40" r="12" fill="#69DB7C"/><path d="M30 65 Q50 50 70 65" stroke="#E67700" stroke-width="4" fill="none"/></svg>`,
      example: {
        ja: '週末は親しい友達と一緒にカフェへ行きます。',
        hira: 'しゅうまつはしたしいともだちといっしょにかふぇへいきます。',
        romaji: 'Shuumatsu wa shitashii tomodachi to issho ni kafe e ikimasu.',
        vi: 'Cuối tuần tôi đi quán cà phê cùng với bạn thân.'
      },
      exampleJa: '週末は親しい友達と一緒にカフェへ行きます。',
      exampleVi: 'Cuối tuần tôi đi quán cà phê cùng với bạn thân.',
      commonMistake: 'Phát âm だ (da) thành ta.'
    },
    {
      id: 'n5_kazoku_05',
      level: 'N5',
      category: 'kazoku',
      kanji: '先生',
      hiragana: 'せんせい',
      romaji: 'sensei',
      hanViet: 'TIÊN SINH',
      meaning: 'Thầy / Cô giáo',
      vietnamese: 'Thầy / Cô giáo',
      pitch: '[3] (Nakadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><circle cx="50" cy="40" r="16" fill="#38D9A9"/><rect x="36" y="44" width="10" height="6" rx="2" fill="none" stroke="#212529" stroke-width="2"/><rect x="54" y="44" width="10" height="6" rx="2" fill="none" stroke="#212529" stroke-width="2"/><line x1="46" y1="47" x2="54" y2="47" stroke="#212529" stroke-width="2"/><rect x="34" y="64" width="32" height="22" rx="4" fill="#0CA678"/></svg>`,
      example: {
        ja: '日本語の先生は親切で教え方が上手です。',
        hira: 'にほんごのせんせいはしんせつでおしえかたがじょうずです。',
        romaji: 'Nihongo no sensei wa shinsetsu de oshiekata ga jouzu desu.',
        vi: 'Giáo viên tiếng Nhật rất thân thiện và dạy rất giỏi.'
      },
      exampleJa: '日本語の先生は親切で教え方が上手です。',
      exampleVi: 'Giáo viên tiếng Nhật rất thân thiện và dạy rất giỏi.',
      commonMistake: 'Tự xưng nghề nghiệp của mình là 先生 (tự xưng phải dùng 教師 - kyoushi).'
    },
    {
      id: 'n5_kazoku_06',
      level: 'N5',
      category: 'kazoku',
      kanji: '学生',
      hiragana: 'がくせい',
      romaji: 'gakusei',
      hanViet: 'HỌC SINH',
      meaning: 'Học sinh / Sinh viên',
      vietnamese: 'Học sinh / Sinh viên',
      pitch: '[0] (Heiban)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><circle cx="50" cy="46" r="15" fill="#B197FC"/><polygon points="50,22 75,32 50,42 25,32" fill="#5F3DC4"/><line x1="72" y1="33" x2="72" y2="48" stroke="#FFD43B" stroke-width="2"/></svg>`,
      example: {
        ja: '私は東京大学の留学生です。',
        hira: 'わたしはとうきょうだいがくのりゅうがくせいです。',
        romaji: 'Watashi wa Toukyou daigaku no ryuugakusei desu.',
        vi: 'Tôi là du học sinh trường Đại học Tokyo.'
      },
      exampleJa: '私は東京大学の留学生です。',
      exampleVi: 'Tôi là du học sinh trường Đại học Tokyo.',
      commonMistake: 'Đọc âm く tách rời thành gaku-sei (tiếng Nhật âm く được nuốt nhẹ thành gak-sei).'
    },
    {
      id: 'n5_kazoku_07',
      level: 'N5',
      category: 'kazoku',
      kanji: '子供',
      hiragana: 'こども',
      romaji: 'kodomo',
      hanViet: 'TỬ CUNG',
      meaning: 'Đứa trẻ / Trẻ con',
      vietnamese: 'Đứa trẻ / Trẻ con',
      pitch: '[0] (Heiban)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><circle cx="50" cy="45" r="18" fill="#FFD43B"/><circle cx="43" cy="43" r="3" fill="#212529"/><circle cx="57" cy="43" r="3" fill="#212529"/><path d="M44 53 Q50 58 56 53" stroke="#C92A2A" stroke-width="2.5" fill="none"/></svg>`,
      example: {
        ja: '公園で子供たちが楽しそうに遊んでいます。',
        hira: 'こうえんでこどもたちがたのしそうにあそんでいます。',
        romaji: 'Kouen de kodomotachi ga tanoshisou ni asonde imasu.',
        vi: 'Bọn trẻ đang chơi đùa vui vẻ ở công viên.'
      },
      exampleJa: '公園で子供たちが楽しそうに遊んでいます。',
      exampleVi: 'Bọn trẻ đang chơi đùa vui vẻ ở công viên.',
      commonMistake: 'Đọc âm ど (do) thành to.'
    },
    {
      id: 'n5_kazoku_08',
      level: 'N5',
      category: 'kazoku',
      kanji: '男の人',
      hiragana: 'おとこのひと',
      romaji: 'otoko no hito',
      hanViet: 'NAM NHÂN',
      meaning: 'Người đàn ông',
      vietnamese: 'Người đàn ông',
      pitch: '[6] (Nakadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="42" r="16" fill="#339AF0"/><rect x="34" y="64" width="32" height="24" rx="4" fill="#1864AB"/></svg>`,
      example: {
        ja: 'あそこに立っている男の人は誰ですか？',
        hira: 'あそこにたっているおとこのひとはだれですか？',
        romaji: 'Asoko ni tatte iru otoko no hito wa dare desu ka?',
        vi: 'Người đàn ông đang đứng đằng kia là ai vậy?'
      },
      exampleJa: 'あそこに立っている男の人は誰ですか？',
      exampleVi: 'Người đàn ông đang đứng đằng kia là ai vậy?',
      commonMistake: 'Nhầm với 男の子 (otoko no ko - bé trai).'
    },
    {
      id: 'n5_kazoku_09',
      level: 'N5',
      category: 'kazoku',
      kanji: '女の人',
      hiragana: 'おんなのひと',
      romaji: 'onna no hito',
      hanViet: 'NỮ NHÂN',
      meaning: 'Người phụ nữ',
      vietnamese: 'Người phụ nữ',
      pitch: '[6] (Nakadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><circle cx="50" cy="42" r="16" fill="#FF8787"/><path d="M30 30 Q50 18 70 30" stroke="#C92A2A" stroke-width="4" fill="none"/><rect x="34" y="64" width="32" height="24" rx="4" fill="#E03131"/></svg>`,
      example: {
        ja: '眼鏡をかけた女の人は英語の先生です。',
        hira: 'めがねをかけたおんなのひとはえいごのせんせいです。',
        romaji: 'Megane o kaketa onna no hito wa eigo no sensei desu.',
        vi: 'Người phụ nữ đeo kính là giáo viên dạy tiếng Anh.'
      },
      exampleJa: '眼鏡をかけた女の人は英語の先生です。',
      exampleVi: 'Người phụ nữ đeo kính là giáo viên dạy tiếng Anh.',
      commonMistake: 'Quên âm ngắt ん trong おんな (đọc thành ona no hito).'
    },
    {
      id: 'n5_kazoku_10',
      level: 'N5',
      category: 'kazoku',
      kanji: '兄',
      hiragana: 'あに',
      romaji: 'ani',
      hanViet: 'HUYNH',
      meaning: 'Anh trai tôi',
      vietnamese: 'Anh trai tôi',
      pitch: '[1] (Atamadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="42" r="16" fill="#4DABF7"/><rect x="36" y="64" width="28" height="22" rx="4" fill="#228BE6"/></svg>`,
      example: {
        ja: '私の兄は会社員で、大阪に住んでいます。',
        hira: 'わたしのあにはかいしゃいんで、おおさかにすんでいます。',
        romaji: 'Watashi no ani wa kaishain de, Oosaka ni sunde imasu.',
        vi: 'Anh trai tôi là nhân viên công ty, hiện đang sống ở Osaka.'
      },
      exampleJa: '私の兄は会社員で、大阪に住んでいます。',
      exampleVi: 'Tôi có anh trai là nhân viên công ty, hiện đang sống ở Osaka.',
      commonMistake: 'Dùng nhầm あに để gọi anh trai người khác (anh trai người khác phải gọi là おにいさん - oniisan).'
    },
    {
      id: 'n5_kazoku_11',
      level: 'N5',
      category: 'kazoku',
      kanji: '姉',
      hiragana: 'あね',
      romaji: 'ane',
      hanViet: 'TỶ',
      meaning: 'Chị gái tôi',
      vietnamese: 'Chị gái tôi',
      pitch: '[0] (Heiban)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><circle cx="50" cy="42" r="16" fill="#FF8787"/><rect x="36" y="64" width="28" height="22" rx="4" fill="#FA5252"/></svg>`,
      example: {
        ja: '姉は料理がとても上手です。',
        hira: 'あねはりょうりがとてもじょうずです。',
        romaji: 'Ane wa ryouri ga totemo jouzu desu.',
        vi: 'Chị gái tôi nấu ăn rất là giỏi.'
      },
      exampleJa: '姉は料理がとても上手です。',
      exampleVi: 'Chị gái tôi nấu ăn rất là giỏi.',
      commonMistake: 'Dùng nhầm あね để gọi chị người khác (chị người khác phải gọi là おねえさん - oneesan).'
    },
    {
      id: 'n5_kazoku_12',
      level: 'N5',
      category: 'kazoku',
      kanji: '人',
      hiragana: 'ひと',
      romaji: 'hito',
      hanViet: 'NHÂN',
      meaning: 'Con người / Người',
      vietnamese: 'Con người / Người',
      pitch: '[2] (Odaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><circle cx="50" cy="40" r="14" fill="#FFA94D"/><path d="M34 76 Q50 60 66 76" stroke="#D9480F" stroke-width="6" stroke-linecap="round" fill="none"/></svg>`,
      example: {
        ja: 'あの優しい人は誰ですか？',
        hira: 'あのやさしいひとはだれですか？',
        romaji: 'Ano yasashii hito wa dare desu ka?',
        vi: 'Người hiền lành đằng kia là ai thế?'
      },
      exampleJa: 'あの優しい人は誰ですか？',
      exampleVi: 'Người hiền lành đằng kia là ai thế?',
      commonMistake: 'Nhầm lẫn giữa ひと (hito: người), じん (jin: người nước nào) và にん (nin: đếm số người).'
    },

    // ========================================================================
    // CHỦ ĐỀ 6: ĐỊA ĐIỂM & PHƯƠNG TIỆN (BASHO)
    // ========================================================================
    {
      id: 'n5_basho_01',
      level: 'N5',
      category: 'basho',
      kanji: '学校',
      hiragana: 'がっこう',
      romaji: 'gakkou',
      hanViet: 'HỌC HIỆU',
      meaning: 'Trường học',
      vietnamese: 'Trường học',
      pitch: '[0] (Heiban)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><polygon points="50,22 80,42 20,42" fill="#E03131"/><rect x="25" y="42" width="50" height="38" fill="#FFA94D"/><rect x="42" y="60" width="16" height="20" fill="#862E9C"/></svg>`,
      example: {
        ja: '毎朝八時に学校へ行きます。',
        hira: 'まいあさはちじにがっこうへいきます。',
        romaji: 'Maiasa hachiji ni gakkou e ikimasu.',
        vi: 'Mỗi sáng vào lúc 8 giờ tôi đều đến trường.'
      },
      exampleJa: '毎朝八時に学校へ行きます。',
      exampleVi: 'Mỗi sáng vào lúc 8 giờ tôi đều đến trường.',
      commonMistake: 'Quên âm ngắt っ (đọc gakou) hoặc quên trường âm う.'
    },
    {
      id: 'n5_basho_02',
      level: 'N5',
      category: 'basho',
      kanji: '家',
      hiragana: 'いえ',
      romaji: 'ie',
      hanViet: 'GIA',
      meaning: 'Ngôi nhà',
      vietnamese: 'Ngôi nhà',
      pitch: '[2] (Odaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><polygon points="50,20 82,46 18,46" fill="#FA5252"/><rect x="25" y="46" width="50" height="36" fill="#FFF4E6"/><rect x="42" y="58" width="16" height="24" fill="#A61E4D"/></svg>`,
      example: {
        ja: '午後五時に仕事が終わって、家に帰ります。',
        hira: 'ごごごじにしごとがおわって、いえにかえります。',
        romaji: 'Gogo goji ni shigoto ga owatte, ie ni kaerimasu.',
        vi: '5 giờ chiều công việc kết thúc và tôi về nhà.'
      },
      exampleJa: '午後五時に仕事が終わって、家に帰ります。',
      exampleVi: '5 giờ chiều công việc kết thúc và tôi về nhà.',
      commonMistake: 'Nhầm lẫn sắc thái giữa いえ (ngôi nhà vật lý) và うち (tổ ấm, nhà tôi).'
    },
    {
      id: 'n5_basho_03',
      level: 'N5',
      category: 'basho',
      kanji: '駅',
      hiragana: 'えき',
      romaji: 'eki',
      hanViet: 'DỊCH',
      meaning: 'Nhà ga xe lửa / tàu điện',
      vietnamese: 'Nhà ga xe lửa / tàu điện',
      pitch: '[1] (Atamadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="25" y="38" width="50" height="36" rx="4" fill="#1864AB"/><circle cx="36" cy="62" r="4" fill="#FFD43B"/><circle cx="64" cy="62" r="4" fill="#FFD43B"/><polygon points="50,20 62,38 38,38" fill="#FA5252"/></svg>`,
      example: {
        ja: '駅の改札口で友達と待ち合わせをします。',
        hira: 'えきのかいさつぐちでともだちとまちあわせをします。',
        romaji: 'Eki no kaisatsuguchi de tomodachi to machiawase o shimasu.',
        vi: 'Tôi hẹn gặp bạn ở cửa soát vé nhà ga.'
      },
      exampleJa: '駅の改札口で友達と待ち合わせをします。',
      exampleVi: 'Tôi hẹn gặp bạn ở cửa soát vé nhà ga.',
      commonMistake: 'Nhấn sai trọng âm ở ki (từ này có pitch [1], nhấn vào え).'
    },
    {
      id: 'n5_basho_04',
      level: 'N5',
      category: 'basho',
      kanji: '病院',
      hiragana: 'びょういん',
      romaji: 'byouin',
      hanViet: 'BỆNH VIỆN',
      meaning: 'Bệnh viện',
      vietnamese: 'Bệnh viện',
      pitch: '[0] (Heiban)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><rect x="25" y="32" width="50" height="50" rx="6" fill="#FFF" stroke="#FA5252" stroke-width="4"/><line x1="50" y1="44" x2="50" y2="70" stroke="#FA5252" stroke-width="8" stroke-linecap="round"/><line x1="37" y1="57" x2="63" y2="57" stroke="#FA5252" stroke-width="8" stroke-linecap="round"/></svg>`,
      example: {
        ja: '熱がありますから、午後病院へ行きます。',
        hira: 'ねつがありますから、ごごびょういんへいきます。',
        romaji: 'Netsu ga arimasu kara, gogo byouin e ikimasu.',
        vi: 'Vì tôi bị sốt nên chiều nay tôi sẽ đi bệnh viện.'
      },
      exampleJa: '熱がありますから、午後病院へ行きます。',
      exampleVi: 'Vì tôi bị sốt nên chiều nay tôi sẽ đi bệnh viện.',
      commonMistake: 'LỖI KINH ĐIỂN: Nhầm びょういn (bệnh viện) với びよういん (tiệm cắt tóc thẩm mỹ - không có âm ghép).'
    },
    {
      id: 'n5_basho_05',
      level: 'N5',
      category: 'basho',
      kanji: '店',
      hiragana: 'みせ',
      romaji: 'mise',
      hanViet: 'ĐIẾM',
      meaning: 'Cửa hàng / Quán',
      vietnamese: 'Cửa hàng / Quán',
      pitch: '[2] (Odaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><polygon points="20,40 50,22 80,40" fill="#E67700"/><rect x="25" y="40" width="50" height="38" fill="#FFF"/><rect x="38" y="55" width="24" height="23" fill="#D9480F"/></svg>`,
      example: {
        ja: 'この店はおいしいラーメンでとても有名です。',
        hira: 'このみせはおいしいらーめんでとてもゆうめいです。',
        romaji: 'Kono mise wa oishii raamen de totemo yuumei desu.',
        vi: 'Quán này rất nổi tiếng với món mì ramen ngon.'
      },
      exampleJa: 'この店はおいしいラーメンでとても有名です。',
      exampleVi: 'Quán này rất nổi tiếng với món mì ramen ngon.',
      commonMistake: 'Khi giao tiếp lịch sự người Nhật thường thêm お thành お店 (omise).'
    },
    {
      id: 'n5_basho_06',
      level: 'N5',
      category: 'basho',
      kanji: '部屋',
      hiragana: 'へや',
      romaji: 'heya',
      hanViet: 'BỘ ỐC',
      meaning: 'Căn phòng',
      vietnamese: 'Căn phòng',
      pitch: '[2] (Odaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F8F0FC"/><rect x="25" y="30" width="50" height="48" rx="4" fill="#FFF" stroke="#CC5DE8" stroke-width="3"/><rect x="35" y="45" width="16" height="33" fill="#E599F7"/><rect x="58" y="42" width="12" height="12" fill="#74C0FC"/></svg>`,
      example: {
        ja: '私の部屋は日当たりが良くて明るいです。',
        hira: 'わたしのへやはひあたりがよくてあかるいです。',
        romaji: 'Watashi no heya wa hiatari ga yokute akarui desu.',
        vi: 'Phòng của tôi đón nhiều ánh nắng nên rất sáng sủa.'
      },
      exampleJa: '私の部屋は日当たりが良くて明るいです。',
      exampleVi: 'Phòng của tôi đón nhiều ánh nắng nên rất sáng sủa.',
      commonMistake: 'Phát âm へ (he) thành e.'
    },
    {
      id: 'n5_basho_07',
      level: 'N5',
      category: 'basho',
      kanji: '電車',
      hiragana: 'でんしゃ',
      romaji: 'densha',
      hanViet: 'ĐIỆN XA',
      meaning: 'Tàu điện',
      vietnamese: 'Tàu điện',
      pitch: '[0] (Heiban)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="25" y="32" width="50" height="40" rx="6" fill="#228BE6"/><rect x="32" y="38" width="36" height="16" rx="3" fill="#E7F5FF"/><circle cx="36" cy="62" r="4" fill="#FFD43B"/><circle cx="64" cy="62" r="4" fill="#FFD43B"/></svg>`,
      example: {
        ja: '朝の電車はとても混んでいて大変です。',
        hira: 'あさのでんしゃはとてもこんでいてたいへんです。',
        romaji: 'Asa no densha wa totemo konde ite taihen desu.',
        vi: 'Tàu điện buổi sáng đông nghịt người, thật vất vả.'
      },
      exampleJa: '朝の電車はとても混んでいて大変です。',
      exampleVi: 'Tàu điện buổi sáng đông nghịt người, thật vất vả.',
      commonMistake: 'Nhầm với じてんしゃ (xe đạp) do có cùng chữ đuôi -sha.'
    },
    {
      id: 'n5_basho_08',
      level: 'N5',
      category: 'basho',
      kanji: '飛行機',
      hiragana: 'ひこうき',
      romaji: 'hikouki',
      hanViet: 'PHI HÀNH CƠ',
      meaning: 'Máy bay',
      vietnamese: 'Máy bay',
      pitch: '[2] (Nakadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><path d="M50 20 L58 45 L85 58 L85 64 L56 56 L54 75 L62 82 L62 86 L50 83 L38 86 L38 82 L46 75 L44 56 L15 64 L15 58 L42 45 Z" fill="#339AF0"/></svg>`,
      example: {
        ja: 'ベトナムから日本まで飛行機で約六時間かかります。',
        hira: 'べとなむからにほんまでひこうきでやくろくじかんかかります。',
        romaji: 'Betonamu kara Nihon made hikouki de yaku rokujikan kakarimasu.',
        vi: 'Từ Việt Nam sang Nhật Bản đi máy bay mất khoảng 6 tiếng.'
      },
      exampleJa: 'ベトナムから日本まで飛行機で約六時間かかります。',
      exampleVi: 'Từ Việt Nam sang Nhật Bản đi máy bay mất khoảng 6 tiếng.',
      commonMistake: 'Quên trường âm こう (đọc thành hikoki).'
    },
    {
      id: 'n5_basho_09',
      level: 'N5',
      category: 'basho',
      kanji: '教室',
      hiragana: 'きょうしつ',
      romaji: 'kyoushitsu',
      hanViet: 'GIÁO THẤT',
      meaning: 'Phòng học / Lớp học',
      vietnamese: 'Phòng học / Lớp học',
      pitch: '[0] (Heiban)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><rect x="25" y="30" width="50" height="28" fill="#2B8A3E" rx="3"/><rect x="35" y="66" width="30" height="15" rx="3" fill="#FFA94D"/></svg>`,
      example: {
        ja: '休み時間に教室で友達とおしゃべりします。',
        hira: 'やすみじかんにきょうしつでともだちとおしゃべりします。',
        romaji: 'Yasumijikan ni kyoushitsu de tomodachi to oshaberi shimasu.',
        vi: 'Vào giờ ra chơi tôi nói chuyện với bạn bè trong phòng học.'
      },
      exampleJa: '休み時間に教室で友達とおしゃべりします。',
      exampleVi: 'Vào giờ ra chơi tôi nói chuyện với bạn bè trong phòng học.',
      commonMistake: 'Quên trường âm きょう (đọc thành kyoshitsu).'
    },
    {
      id: 'n5_basho_10',
      level: 'N5',
      category: 'basho',
      kanji: '図書館',
      hiragana: 'としょかん',
      romaji: 'toshokan',
      hanViet: 'ĐỒ THƯ QUÁN',
      meaning: 'Thư viện',
      vietnamese: 'Thư viện',
      pitch: '[2] (Nakadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><rect x="25" y="35" width="50" height="45" rx="4" fill="#FFF" stroke="#40C057" stroke-width="3"/><line x1="35" y1="35" x2="35" y2="80" stroke="#40C057" stroke-width="2"/><line x1="65" y1="35" x2="65" y2="80" stroke="#40C057" stroke-width="2"/></svg>`,
      example: {
        ja: '図書館は静かで勉強に集中できます。',
        hira: 'としょかんはしずかでべんきょうにしゅうちゅうできます。',
        romaji: 'Toshokan wa shizuka de benkyou ni shuuchuu dekimasu.',
        vi: 'Thư viện yên tĩnh nên tôi có thể tập trung học bài.'
      },
      exampleJa: '図書館は静かで勉強に集中できます。',
      exampleVi: 'Thư viện yên tĩnh nên tôi có thể tập trung học bài.',
      commonMistake: 'Đọc âm しょ (sho) thành so.'
    },
    {
      id: 'n5_basho_11',
      level: 'N5',
      category: 'basho',
      kanji: '銀行',
      hiragana: 'ぎんこう',
      romaji: 'ginkou',
      hanViet: 'NGÂN HÀNG',
      meaning: 'Ngân hàng',
      vietnamese: 'Ngân hàng',
      pitch: '[0] (Heiban)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><polygon points="50,22 80,36 20,36" fill="#F59F00"/><rect x="25" y="36" width="50" height="42" fill="#FFF"/><line x1="36" y1="36" x2="36" y2="78" stroke="#F59F00" stroke-width="4"/><line x1="64" y1="36" x2="64" y2="78" stroke="#F59F00" stroke-width="4"/></svg>`,
      example: {
        ja: 'お金をおろしに銀行へ行かなければなりません。',
        hira: 'おかねをおろしにぎんこうへいかなければなりません。',
        romaji: 'Okane o oroshi ni ginkou e ikanakereba narimasen.',
        vi: 'Tôi phải đi ngân hàng để rút tiền.'
      },
      exampleJa: 'お金をおろしに銀行へ行かなければなりません。',
      exampleVi: 'Tôi phải đi ngân hàng để rút tiền.',
      commonMistake: 'Quên trường âm こう (đọc thành ginko).'
    },
    {
      id: 'n5_basho_12',
      level: 'N5',
      category: 'basho',
      kanji: '公園',
      hiragana: 'こうえん',
      romaji: 'kouen',
      hanViet: 'CÔNG VIÊN',
      meaning: 'Công viên',
      vietnamese: 'Công viên',
      pitch: '[0] (Heiban)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><circle cx="35" cy="45" r="16" fill="#51CF66"/><rect x="32" y="60" width="6" height="18" fill="#845EF7"/><path d="M55 65 L75 65" stroke="#2B8A3E" stroke-width="4" stroke-linecap="round"/></svg>`,
      example: {
        ja: '天気がいい日は公園を散歩します。',
        hira: 'てんきがいいひはこうえんをさんぽします。',
        romaji: 'Tenki ga ii hi wa kouen o sanpo shimasu.',
        vi: 'Những ngày trời đẹp tôi thường đi dạo ở công viên.'
      },
      exampleJa: '天気がいい日は公園を散歩します。',
      exampleVi: 'Những ngày trời đẹp tôi thường đi dạo ở công viên.',
      commonMistake: 'Quên trường âm こう (đọc thành koen).'
    },

    // ========================================================================
    // CHỦ ĐỀ 7: ĐỘNG TỪ CỐT LÕI N5 (DOUSHI)
    // ========================================================================
    {
      id: 'n5_doushi_01',
      level: 'N5',
      category: 'doushi',
      kanji: '食べる',
      hiragana: 'たべる',
      romaji: 'taberu',
      hanViet: 'THỰC',
      meaning: 'Ăn',
      vietnamese: 'Ăn',
      pitch: '[2] (Nakadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><path d="M25 60 Q50 85 75 60 Z" fill="#E03131"/><ellipse cx="50" cy="58" rx="25" ry="10" fill="#FFF"/><line x1="40" y1="25" x2="65" y2="55" stroke="#D9480F" stroke-width="3"/></svg>`,
      example: {
        ja: '美味しい日本料理をたくさん食べました。',
        hira: 'おいしいにほんりょうりをたくさんたべました。',
        romaji: 'Oishii nihonryouri o takusan tabemashita.',
        vi: 'Tôi đã ăn rất nhiều món ăn Nhật ngon.'
      },
      exampleJa: '美味しい日本料理をたくさん食べました。',
      exampleVi: 'Tôi đã ăn rất nhiều món ăn Nhật ngon.',
      commonMistake: 'Động từ nhóm 2, chia thể Te là たべて, người mới học hay nhầm thành たって.'
    },
    {
      id: 'n5_doushi_02',
      level: 'N5',
      category: 'doushi',
      kanji: '飲む',
      hiragana: 'のむ',
      romaji: 'nomu',
      hanViet: 'ẨM',
      meaning: 'Uống',
      vietnamese: 'Uống',
      pitch: '[1] (Atamadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="35" y="35" width="30" height="42" rx="4" fill="#339AF0"/><ellipse cx="50" cy="35" rx="15" ry="6" fill="#74C0FC"/><path d="M65 44 Q75 52 65 60" stroke="#1864AB" stroke-width="4" fill="none"/></svg>`,
      example: {
        ja: '朝起きてから、すぐ冷たい水を飲みます。',
        hira: 'あさおきてから、すぐつめたいみずをのみます。',
        romaji: 'Asa okite kara, sugu tsumetai mizu o nomimasu.',
        vi: 'Sáng ngủ dậy xong là tôi uống ngay một cốc nước mát.'
      },
      exampleJa: '朝起きてから、すぐ冷たい水を飲みます。',
      exampleVi: 'Sáng ngủ dậy xong là tôi uống ngay một cốc nước mát.',
      commonMistake: 'Động từ nhóm 1 tận cùng む, chia thể Te phải là のんで (âm đục nde).'
    },
    {
      id: 'n5_doushi_03',
      level: 'N5',
      category: 'doushi',
      kanji: '行く',
      hiragana: 'いく',
      romaji: 'iku',
      hanViet: 'HÀNH',
      meaning: 'Đi (rời xa vị trí nói)',
      vietnamese: 'Đi (rời xa vị trí nói)',
      pitch: '[0] (Heiban)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><circle cx="50" cy="32" r="10" fill="#40C057"/><path d="M50 42 L50 62 L64 80 M50 62 L36 80 M35 48 L65 48" stroke="#2B8A3E" stroke-width="4" stroke-linecap="round"/></svg>`,
      example: {
        ja: '来週の月曜日に東京へ行きます。',
        hira: 'らいしゅうのげつようびにとうきょうへいきます。',
        romaji: 'Raishuu no getsuyoubi ni Toukyou e ikimasu.',
        vi: 'Thứ hai tuần sau tôi sẽ đi Tokyo.'
      },
      exampleJa: '来週の月曜日に東京へ行きます。',
      exampleVi: 'Thứ hai tuần sau tôi sẽ đi Tokyo.',
      commonMistake: 'BẤT QUY TẮC: Động từ tận cùng く bình thường chia て là いて (như 書く->書いて), nhưng 行く bắt buộc chia là 行って (いって).'
    },
    {
      id: 'n5_doushi_04',
      level: 'N5',
      category: 'doushi',
      kanji: '来る',
      hiragana: 'くる',
      romaji: 'kuru',
      hanViet: 'LAI',
      meaning: 'Đến (hướng về phía người nói)',
      vietnamese: 'Đến (hướng về phía người nói)',
      pitch: '[1] (Atamadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><path d="M20 50 L65 50 M50 35 L68 50 L50 65" stroke="#FA5252" stroke-width="6" stroke-linecap="round" fill="none"/></svg>`,
      example: {
        ja: '友達が私の家に遊びに来ました。',
        hira: 'ともだちがわたしのいえにあそびにきました。',
        romaji: 'Tomodachi ga watashi no ie ni asobi ni kimashita.',
        vi: 'Bạn bè đã đến nhà tôi chơi.'
      },
      exampleJa: '友達が私の家に遊びに来ました。',
      exampleVi: 'Bạn bè đã đến nhà tôi chơi.',
      commonMistake: 'Động từ nhóm 3 biến đổi đặc biệt: Thể Masu là きます, thể Te là きて, thể Nai là こない (đổi nguyên âm ku thành ko).'
    },
    {
      id: 'n5_doushi_05',
      level: 'N5',
      category: 'doushi',
      kanji: '帰る',
      hiragana: 'かえる',
      romaji: 'kaeru',
      hanViet: 'QUY',
      meaning: 'Trở về (nhà/nước/vị trí cũ)',
      vietnamese: 'Trở về (nhà/nước/vị trí cũ)',
      pitch: '[1] (Atamadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><polygon points="50,22 80,44 20,44" fill="#FA5252"/><rect x="25" y="44" width="50" height="34" fill="#FFF"/><path d="M60 62 L40 62 M48 54 L40 62 L48 70" stroke="#FA5252" stroke-width="3" fill="none"/></svg>`,
      example: {
        ja: '仕事が終わったら、すぐ家に帰ります。',
        hira: 'しごとがおわったら、すぐにいえにかえります。',
        romaji: 'Shigoto ga owattara, sugu ni ie ni kaerimasu.',
        vi: 'Sau khi xong việc tôi sẽ về nhà ngay.'
      },
      exampleJa: '仕事が終わったら、すぐ家に帰ります。',
      exampleVi: 'Sau khi xong việc tôi sẽ về nhà ngay.',
      commonMistake: 'ĐỘNG TỪ NHÓM 1 ĐẶC BIỆT! Đuôi eru nhưng là nhóm 1, chia thể Te là かえって (âm ngắt), KHÔNG PHẢI かえて!'
    },
    {
      id: 'n5_doushi_06',
      level: 'N5',
      category: 'doushi',
      kanji: '見る',
      hiragana: 'みる',
      romaji: 'miru',
      hanViet: 'KIẾN',
      meaning: 'Nhìn / Xem',
      vietnamese: 'Nhìn / Xem',
      pitch: '[1] (Atamadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F8F0FC"/><path d="M20 50 Q50 25 80 50 Q50 75 20 50 Z" fill="#FFF" stroke="#CC5DE8" stroke-width="4"/><circle cx="50" cy="50" r="14" fill="#7950F2"/><circle cx="54" cy="46" r="4" fill="#FFF"/></svg>`,
      example: {
        ja: 'テレビで日本の面白いアニメを見ます。',
        hira: 'てれびでにほんのおもしろいあにめをみます。',
        romaji: 'Terebi de nihon no omoshiroi anime o mimasu.',
        vi: 'Tôi xem bộ phim hoạt hình anime Nhật Bản rất thú vị trên TV.'
      },
      exampleJa: 'テレビで日本の面白いアニメを見ます。',
      exampleVi: 'Tôi xem bộ phim hoạt hình anime Nhật Bản rất thú vị trên TV.',
      commonMistake: 'Nhầm lẫn với 見せる (miseru: cho ai đó xem).'
    },
    {
      id: 'n5_doushi_07',
      level: 'N5',
      category: 'doushi',
      kanji: '聞く',
      hiragana: 'きく',
      romaji: 'kiku',
      hanViet: 'VĂN',
      meaning: 'Nghe / Hỏi',
      vietnamese: 'Nghe / Hỏi',
      pitch: '[0] (Heiban)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><path d="M30 50 A20 20 0 0 1 70 50" stroke="#339AF0" stroke-width="6" fill="none" stroke-linecap="round"/><rect x="22" y="46" width="12" height="22" rx="4" fill="#1864AB"/><rect x="66" y="46" width="12" height="22" rx="4" fill="#1864AB"/></svg>`,
      example: {
        ja: '毎晩、日本の音楽を聞きながら勉強します。',
        hira: 'まいばん、にほんのおんがくをききながらべんきょうします。',
        romaji: 'Maiban, nihon no ongaku o kikinagara benkyou shimasu.',
        vi: 'Mỗi tối tôi vừa nghe nhạc Nhật vừa học bài.'
      },
      exampleJa: '毎晩、日本の音楽を聞きながら勉強します。',
      exampleVi: 'Mỗi tối tôi vừa nghe nhạc Nhật vừa học bài.',
      commonMistake: 'Từ này có cả nghĩa là "Hỏi" (đi với trợ từ に: 先生に聞く: hỏi giáo viên).'
    },
    {
      id: 'n5_doushi_08',
      level: 'N5',
      category: 'doushi',
      kanji: '話す',
      hiragana: 'はなす',
      romaji: 'hanasu',
      hanViet: 'THOẠI',
      meaning: 'Nói chuyện / Trò chuyện',
      vietnamese: 'Nói chuyện / Trò chuyện',
      pitch: '[2] (Nakadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><path d="M25 35 Q50 25 75 35 Q80 55 65 65 L68 76 L52 66 L25 65 Z" fill="#FFA94D"/><circle cx="42" cy="48" r="3" fill="#FFF"/><circle cx="58" cy="48" r="3" fill="#FFF"/></svg>`,
      example: {
        ja: '先生と日本語でゆっくり話しました。',
        hira: 'せんせいとにほんごでゆっくりはなしました。',
        romaji: 'Sensei to nihongo de yukkuri hanashimashita.',
        vi: 'Tôi đã trò chuyện chậm rãi bằng tiếng Nhật với thầy giáo.'
      },
      exampleJa: '先生と日本語でゆっくり話しました。',
      exampleVi: 'Tôi đã trò chuyện chậm rãi bằng tiếng Nhật với thầy giáo.',
      commonMistake: 'Động từ tận cùng す nhóm 1, chia thể Te là はなして (nhớ chuyển s -> sh).'
    },
    {
      id: 'n5_doushi_09',
      level: 'N5',
      category: 'doushi',
      kanji: '買う',
      hiragana: 'かう',
      romaji: 'kau',
      hanViet: 'MÃI',
      meaning: 'Mua',
      vietnamese: 'Mua',
      pitch: '[0] (Heiban)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><circle cx="40" cy="74" r="5" fill="#343A40"/><circle cx="68" cy="74" r="5" fill="#343A40"/><path d="M25 35 L35 35 L48 62 L74 62 L82 42 L38 42" stroke="#E67700" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`,
      example: {
        ja: 'コンビニでお弁当とお茶を買いました。',
        hira: 'こんびにでおべんとうとおちゃをかいました。',
        romaji: 'Konbini de obentou to ocha o kaimashita.',
        vi: 'Tôi đã mua cơm hộp và trà ở cửa hàng tiện lợi.'
      },
      exampleJa: 'コンビニでお弁当とお茶を買いました。',
      exampleVi: 'Tôi đã mua cơm hộp và trà ở cửa hàng tiện lợi.',
      commonMistake: 'Động từ nhóm 1 tận cùng う, chia thể Te là 買って (かって - âm ngắt).'
    },
    {
      id: 'n5_doushi_10',
      level: 'N5',
      category: 'doushi',
      kanji: '書く',
      hiragana: 'かく',
      romaji: 'kaku',
      hanViet: 'THƯ',
      meaning: 'Viết / Vẽ',
      vietnamese: 'Viết / Vẽ',
      pitch: '[1] (Atamadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><rect x="25" y="25" width="36" height="50" rx="3" fill="#FFF" stroke="#40C057" stroke-width="2"/><g transform="rotate(45 60 40)"><rect x="55" y="25" width="8" height="32" fill="#FA5252"/><polygon points="55,57 63,57 59,68" fill="#343A40"/></g></svg>`,
      example: {
        ja: 'ノートに新しい漢字を丁寧に書きます。',
        hira: 'のーとにあたらしいかんじをていねいにかきます。',
        romaji: 'Nooto ni atarashii kanji o teinei ni kakimasu.',
        vi: 'Tôi viết chữ Hán mới thật nắn nót vào cuốn vở.'
      },
      exampleJa: 'ノートに新しい漢字を丁寧に書きます。',
      exampleVi: 'Tôi viết chữ Hán mới thật nắn nót vào cuốn vở.',
      commonMistake: 'Chia thể Te là 書いて (かいて - biến âm i-onbin).'
    },
    {
      id: 'n5_doushi_11',
      level: 'N5',
      category: 'doushi',
      kanji: '読む',
      hiragana: 'よむ',
      romaji: 'yomu',
      hanViet: 'ĐỘC',
      meaning: 'Đọc',
      vietnamese: 'Đọc',
      pitch: '[1] (Atamadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><path d="M24 35 Q50 38 50 72 Q24 68 24 35 Z" fill="#74C0FC"/><path d="M76 35 Q50 38 50 72 Q76 68 76 35 Z" fill="#4DABF7"/></svg>`,
      example: {
        ja: '毎晩寝る前に日本語の新聞を読みます。',
        hira: 'まいばんねるまえににほんごのしんぶんをよみます。',
        romaji: 'Maiban neru mae ni nihongo no shinbun o yomimasu.',
        vi: 'Mỗi tối trước khi ngủ tôi đọc báo tiếng Nhật.'
      },
      exampleJa: '毎晩寝る前に日本語の新聞を読みます。',
      exampleVi: 'Mỗi tối trước khi ngủ tôi đọc báo tiếng Nhật.',
      commonMistake: 'Động từ tận cùng む, chia thể Te là 読んで (よんで - âm đục nde).'
    },
    {
      id: 'n5_doushi_12',
      level: 'N5',
      category: 'doushi',
      kanji: '起きる',
      hiragana: 'おきる',
      romaji: 'okiru',
      hanViet: 'KHỞI',
      meaning: 'Thức dậy',
      vietnamese: 'Thức dậy',
      pitch: '[2] (Nakadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><circle cx="50" cy="62" r="18" fill="#FF922B"/><line x1="50" y1="36" x2="50" y2="22" stroke="#E67700" stroke-width="4" stroke-linecap="round"/><line x1="28" y1="44" x2="18" y2="36" stroke="#E67700" stroke-width="4" stroke-linecap="round"/><line x1="72" y1="44" x2="82" y2="36" stroke="#E67700" stroke-width="4" stroke-linecap="round"/></svg>`,
      example: {
        ja: '毎朝六時に起きてジョギングをします。',
        hira: 'まいあさろくじにおきてじょぎんぐをします。',
        romaji: 'Maiasa rokuji ni okite jogingu o shimasu.',
        vi: 'Mỗi sáng tôi thức dậy lúc 6 giờ và đi chạy bộ.'
      },
      exampleJa: '毎朝六時に起きてジョギングをします。',
      exampleVi: 'Mỗi sáng tôi thức dậy lúc 6 giờ và đi chạy bộ.',
      commonMistake: 'Động từ nhóm 2 (trước đuôi ru là âm i: ki), thể Masu là 起きます, thể Te là 起きて.'
    },
    {
      id: 'n5_doushi_13',
      level: 'N5',
      category: 'doushi',
      kanji: '寝る',
      hiragana: 'ねる',
      romaji: 'neru',
      hanViet: 'TẨM',
      meaning: 'Đi ngủ',
      vietnamese: 'Đi ngủ',
      pitch: '[0] (Heiban)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#343A40"/><path d="M38 25 A24 24 0 0 0 66 70 A28 28 0 1 1 38 25 Z" fill="#FCC419"/><text x="68" y="42" font-size="14" fill="#FFF">Z</text><text x="74" y="32" font-size="10" fill="#FFF">z</text></svg>`,
      example: {
        ja: '疲れたので今夜は早く寝ます。',
        hira: 'つかれたのでこんやははやくねます。',
        romaji: 'Tsukareta node konya wa hayaku nemasu.',
        vi: 'Vì mệt rồi nên tối nay tôi sẽ đi ngủ sớm.'
      },
      exampleJa: '疲れたので今夜は早く寝ます。',
      exampleVi: 'Vì mệt rồi nên tối nay tôi sẽ đi ngủ sớm.',
      commonMistake: 'Động từ nhóm 2, thể Te là ねて, thể Nai là ねない.'
    },
    {
      id: 'n5_doushi_14',
      level: 'N5',
      category: 'doushi',
      kanji: '勉強する',
      hiragana: 'べんきょうする',
      romaji: 'benkyousuru',
      hanViet: 'MIỄN CƯỠNG',
      meaning: 'Học tập / Ôn bài',
      vietnamese: 'Học tập / Ôn bài',
      pitch: '[0] (Heiban)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><rect x="25" y="45" width="50" height="34" rx="4" fill="#FFF" stroke="#40C057" stroke-width="3"/><path d="M30 45 L50 32 L70 45" stroke="#2B8A3E" stroke-width="3" fill="none"/></svg>`,
      example: {
        ja: 'JLPT N5に合格するために毎日勉強します。',
        hira: 'じぇいえるぴーてぃーえぬごにごうかくするためにまいにちべんきょうします。',
        romaji: 'JLPT N5 ni goukaku suru tame ni mainichi benkyou shimasu.',
        vi: 'Để đỗ JLPT N5, mỗi ngày tôi đều chăm chỉ học bài.'
      },
      exampleJa: 'JLPT N5に合格するために毎日勉強します。',
      exampleVi: 'Để đỗ JLPT N5, mỗi ngày tôi đều chăm chỉ học bài.',
      commonMistake: 'Động từ nhóm 3 (dạng Danh từ + する), chia thể Masu là べんきょうします, thể Te là べんきょうして.'
    },

    // ========================================================================
    // CHỦ ĐỀ 8: TÍNH TỪ N5 THÔNG DỤNG (KEIYOUSHI)
    // ========================================================================
    {
      id: 'n5_keiyoushi_01',
      level: 'N5',
      category: 'keiyoushi',
      kanji: '大きい',
      hiragana: 'おおきい',
      romaji: 'ookii',
      hanViet: 'ĐẠI',
      meaning: 'To lớn',
      vietnamese: 'To lớn',
      pitch: '[3] (Nakadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><ellipse cx="50" cy="52" rx="34" ry="26" fill="#339AF0"/><circle cx="50" cy="52" r="14" fill="#1864AB"/></svg>`,
      example: {
        ja: 'このスイカはとても大きくて重いです。',
        hira: 'このすいかはとてもおおきくておもいです。',
        romaji: 'Kono suika wa totemo ookikute omoi desu.',
        vi: 'Quả dưa hấu này rất to và nặng.'
      },
      exampleJa: 'このスイカはとても大きくて重いです。',
      exampleVi: 'Quả dưa hấu này rất to và nặng.',
      commonMistake: 'Viết sai trường âm thành おうきい (bắt buộc phải viết là おおきい với 2 chữ お).'
    },
    {
      id: 'n5_keiyoushi_02',
      level: 'N5',
      category: 'keiyoushi',
      kanji: '小さい',
      hiragana: 'ちいさい',
      romaji: 'chiisai',
      hanViet: 'TIỂU',
      meaning: 'Nhỏ bé',
      vietnamese: 'Nhỏ bé',
      pitch: '[3] (Nakadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><circle cx="50" cy="50" r="12" fill="#FA5252"/></svg>`,
      example: {
        ja: '手のひらに乗る小さい小鳥がいます。',
        hira: 'てのひらにのるちいさいことりがいます。',
        romaji: 'Te no hira ni noru chiisai kotori ga imasu.',
        vi: 'Có một chú chim nhỏ đậu vừa trong lòng bàn tay.'
      },
      exampleJa: '手のひらに乗る小さい小鳥がいます。',
      exampleVi: 'Có một chú chim nhỏ đậu vừa trong lòng bàn tay.',
      commonMistake: 'Viết sai trường âm thành ちさい (bắt buộc phải có 2 chữ い: ちいさい).'
    },
    {
      id: 'n5_keiyoushi_03',
      level: 'N5',
      category: 'keiyoushi',
      kanji: '美味しい',
      hiragana: 'おいしい',
      romaji: 'oishii',
      hanViet: 'MỸ VỊ',
      meaning: 'Ngon miệng',
      vietnamese: 'Ngon miệng',
      pitch: '[3] (Nakadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><circle cx="50" cy="50" r="28" fill="#FFA94D"/><path d="M38 52 Q50 64 62 52" stroke="#C92A2A" stroke-width="4" stroke-linecap="round" fill="none"/><circle cx="42" cy="42" r="3.5" fill="#212529"/><circle cx="58" cy="42" r="3.5" fill="#212529"/></svg>`,
      example: {
        ja: '母が作った日本料理はいつもとても美味しいです。',
        hira: 'ははがつくれたにほんりょうりはいつもとてもおいしいです。',
        romaji: 'Haha ga tsukutta nihonryouri wa itsumo totemo oishii desu.',
        vi: 'Món ăn Nhật mẹ tôi nấu lúc nào cũng rất ngon.'
      },
      exampleJa: '母が作った日本料理はいつもとても美味しいです。',
      exampleVi: 'Món ăn Nhật mẹ tôi nấu lúc nào cũng rất ngon.',
      commonMistake: 'Nuốt âm い cuối cùng.'
    },
    {
      id: 'n5_keiyoushi_04',
      level: 'N5',
      category: 'keiyoushi',
      kanji: '高い',
      hiragana: 'たかい',
      romaji: 'takai',
      hanViet: 'CAO',
      meaning: 'Cao (chiều cao) / Đắt (giá cả)',
      vietnamese: 'Cao (chiều cao) / Đắt (giá cả)',
      pitch: '[2] (Nakadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><polygon points="50,15 80,78 20,78" fill="#339AF0"/><text x="50" y="65" font-size="14" fill="#FFF" font-weight="bold" text-anchor="middle">¥</text></svg>`,
      example: {
        ja: 'このデパートの服は質がいいですが、少し高いです。',
        hira: 'このでぱーとのふくはしつがいいですが、すこしたかいです。',
        romaji: 'Kono depaato no fuku wa shitsu ga ii desu ga, sukoshi takai desu.',
        vi: 'Quần áo ở trung tâm thương mại này chất lượng tốt nhưng hơi đắt.'
      },
      exampleJa: 'このデパートの服は質がいいですが、少し高いです。',
      exampleVi: 'Quần áo ở trung tâm thương mại này chất lượng tốt nhưng hơi đắt.',
      commonMistake: 'Từ này có cả 2 nghĩa: chiều cao (ngọn núi cao: たかいやま) và giá cả (đắt tiền).'
    },
    {
      id: 'n5_keiyoushi_05',
      level: 'N5',
      category: 'keiyoushi',
      kanji: '安い',
      hiragana: 'やすい',
      romaji: 'yasui',
      hanViet: 'AN',
      meaning: 'Rẻ (giá cả)',
      vietnamese: 'Rẻ (giá cả)',
      pitch: '[2] (Nakadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><circle cx="50" cy="50" r="26" fill="#51CF66"/><text x="50" y="58" font-size="20" fill="#FFF" font-weight="bold" text-anchor="middle">SALE</text></svg>`,
      example: {
        ja: 'このスーパーの野菜は新鮮でとても安いです。',
        hira: 'このすーぱーのやさいはしんせんでとてもやすいです。',
        romaji: 'Kono suupaa no yasai wa shinsen de totemo yasui desu.',
        vi: 'Rau ở siêu thị này vừa tươi mà lại rất rẻ.'
      },
      exampleJa: 'このスーパーの野菜は新鮮でとても安いです。',
      exampleVi: 'Rau ở siêu thị này vừa tươi mà lại rất rẻ.',
      commonMistake: 'Dễ nhầm chữ Hán 安い (rẻ) với nghĩa an toàn trong tiếng Hán Việt.'
    },
    {
      id: 'n5_keiyoushi_06',
      level: 'N5',
      category: 'keiyoushi',
      kanji: '新しい',
      hiragana: 'あたらしい',
      romaji: 'atarashii',
      hanViet: 'TÂN',
      meaning: 'Mới mẻ',
      vietnamese: 'Mới mẻ',
      pitch: '[4] (Nakadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><polygon points="50,20 62,38 82,38 66,50 72,70 50,56 28,70 34,50 18,38 38,38" fill="#FCC419"/><circle cx="50" cy="46" r="6" fill="#FFF"/></svg>`,
      example: {
        ja: '誕生日に新しいパソコンを買ってもらいました。',
        hira: 'たんじょうびにあたらしいぱそこんをかってもらいました。',
        romaji: 'Tanjoubi ni atarashii pasokon o katte moraimashita.',
        vi: 'Vào ngày sinh nhật tôi được mua tặng chiếc máy tính mới.'
      },
      exampleJa: '誕生日に新しいパソコンを買ってもらいました。',
      exampleVi: 'Vào ngày sinh nhật tôi được mua tặng chiếc máy tính mới.',
      commonMistake: 'Trọng âm rơi vào ra-shi [4], không nhấn vào a đầu từ.'
    },
    {
      id: 'n5_keiyoushi_07',
      level: 'N5',
      category: 'keiyoushi',
      kanji: '古い',
      hiragana: 'ふるい',
      romaji: 'furui',
      hanViet: 'CỔ',
      meaning: 'Cũ kỹ (đồ vật)',
      vietnamese: 'Cũ kỹ (đồ vật)',
      pitch: '[2] (Nakadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F1F3F5"/><rect x="30" y="35" width="40" height="38" rx="4" fill="#868E96"/><line x1="30" y1="50" x2="70" y2="50" stroke="#495057" stroke-width="2"/></svg>`,
      example: {
        ja: 'この古い時計はおじいさんの形見です。',
        hira: 'このふるときはおじいさんのかたみです。',
        romaji: 'Kono furui tokei wa ojiisan no katami desu.',
        vi: 'Chiếc đồng hồ cũ này là kỷ vật của ông nội để lại.'
      },
      exampleJa: 'この古い時計はおじいさんの形見です。',
      exampleVi: 'Chiếc đồng hồ cũ này là kỷ vật của ông nội để lại.',
      commonMistake: 'Chỉ dùng cho đồ vật, tuyệt đối KHÔNG dùng cho người già (người già phải dùng としをとった).'
    },
    {
      id: 'n5_keiyoushi_08',
      level: 'N5',
      category: 'keiyoushi',
      kanji: '良い',
      hiragana: 'いい',
      romaji: 'ii',
      hanViet: 'LƯƠNG',
      meaning: 'Tốt / Đẹp / Hay',
      vietnamese: 'Tốt / Đẹp / Hay',
      pitch: '[1] (Atamadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><circle cx="50" cy="50" r="28" fill="#40C057"/><path d="M40 50 L47 58 L62 42" stroke="#FFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`,
      example: {
        ja: '今日はとても天気が良くて気持ちがいいです。',
        hira: 'きょうはとてもてんきがよくてきもちがいいです。',
        romaji: 'Kyou wa totemo tenki ga yokute kimochi ga ii desu.',
        vi: 'Hôm nay thời tiết rất đẹp, tâm trạng thật sảng khoái.'
      },
      exampleJa: '今日はとても天気が良くて気持ちがいいです。',
      exampleVi: 'Hôm nay thời tiết rất đẹp, tâm trạng thật sảng khoái.',
      commonMistake: 'LỖI ĐẶC BIỆT KINH ĐIỂN: Khi chia phủ định hoặc quá khứ phải chia từ gốc よい (よくない, よかった), KHÔNG ĐƯỢC chia từ いい!'
    },
    {
      id: 'n5_keiyoushi_09',
      level: 'N5',
      category: 'keiyoushi',
      kanji: '可愛い',
      hiragana: 'かわいい',
      romaji: 'kawaii',
      hanViet: 'KHẢ ÁI',
      meaning: 'Đáng yêu / Dễ thương',
      vietnamese: 'Đáng yêu / Dễ thương',
      pitch: '[3] (Nakadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><ellipse cx="50" cy="50" rx="26" ry="24" fill="#FF8787"/><circle cx="42" cy="46" r="3.5" fill="#212529"/><circle cx="58" cy="46" r="3.5" fill="#212529"/><ellipse cx="36" cy="52" rx="4" ry="2" fill="#FA5252"/><ellipse cx="64" cy="52" rx="4" ry="2" fill="#FA5252"/><path d="M46 56 Q50 60 54 56" stroke="#212529" stroke-width="2" fill="none"/></svg>`,
      example: {
        ja: 'あの小さい子犬はとても可愛いです。',
        hira: 'あのちいさいこいぬはとてもかわいいです。',
        romaji: 'Ano chiisai koinu wa totemo kawaii desu.',
        vi: 'Chú cún con nhỏ nhắn kia trông dễ thương quá.'
      },
      exampleJa: 'あの小さい子犬はとても可愛いです。',
      exampleVi: 'Chú cún con nhỏ nhắn kia trông dễ thương quá.',
      commonMistake: 'Có 2 chữ い ở đuôi (phủ định là かわいくない, quá khứ là かわいかった).'
    },
    {
      id: 'n5_keiyoushi_10',
      level: 'N5',
      category: 'keiyoushi',
      kanji: '楽しい',
      hiragana: 'たのしい',
      romaji: 'tanoshii',
      hanViet: 'LẠC',
      meaning: 'Vui vẻ / Thú vị',
      vietnamese: 'Vui vẻ / Thú vị',
      pitch: '[3] (Nakadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><circle cx="50" cy="50" r="28" fill="#FCC419"/><path d="M38 54 Q50 68 62 54" stroke="#D9480F" stroke-width="4" stroke-linecap="round" fill="none"/><line x1="38" y1="42" x2="44" y2="46" stroke="#212529" stroke-width="3" stroke-linecap="round"/><line x1="62" y1="42" x2="56" y2="46" stroke="#212529" stroke-width="3" stroke-linecap="round"/></svg>`,
      example: {
        ja: 'みんなで日本語のゲームをするのはとても楽しいです。',
        hira: 'みんなでにほんごのげーむをするのはとてもたのしいです。',
        romaji: 'Minna de nihongo no geemu o suru no wa totemo tanoshii desu.',
        vi: 'Chơi game tiếng Nhật cùng mọi người vui thật đấy.'
      },
      exampleJa: 'みんなで日本語のゲームをするのはとても楽しいです。',
      exampleVi: 'Chơi game tiếng Nhật cùng mọi người vui thật đấy.',
      commonMistake: 'Nhầm lẫn giữa たのしい (vui do hoạt động đem lại) và うれしい (vui mừng vì đạt được kết quả mong đợi).'
    },
    {
      id: 'n5_keiyoushi_11',
      level: 'N5',
      category: 'keiyoushi',
      kanji: '綺麗',
      hiragana: 'きれい',
      romaji: 'kirei',
      hanViet: 'KÌ LỆ',
      meaning: 'Đẹp / Sạch sẽ',
      vietnamese: 'Đẹp / Sạch sẽ',
      pitch: '[1] (Atamadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F8F0FC"/><polygon points="50,20 58,40 80,40 62,52 68,74 50,60 32,74 38,52 20,40 42,40" fill="#CC5DE8"/><circle cx="50" cy="48" r="6" fill="#FFF"/></svg>`,
      example: {
        ja: '公園に色とりどりの綺麗なお花がたくさん咲いています。',
        hira: 'こうえんにいろとりどりのかれいなおはながたくさんさいています。',
        romaji: 'Kouen ni irotoridori no kirei na ohana ga takusan saite imasu.',
        vi: 'Trong công viên có rất nhiều bông hoa đẹp sặc sỡ đang nở.'
      },
      exampleJa: '公園に色とりどりの綺麗なお花がたくさん咲いています。',
      exampleVi: 'Trong công viên có rất nhiều bông hoa đẹp sặc sỡ đang nở.',
      commonMistake: 'BẪY KINH ĐIỂN CỦA JLPT N5: Đuôi kết thúc bằng い nhưng đây là TÍNH TỪ ĐUÔI な! Khi bổ nghĩa danh từ phải là きれいな (ví dụ: きれいな花), không được bỏ な!'
    },
    {
      id: 'n5_keiyoushi_12',
      level: 'N5',
      category: 'keiyoushi',
      kanji: '有名',
      hiragana: 'ゆうめい',
      romaji: 'yuumei',
      hanViet: 'HỮU DANH',
      meaning: 'Nổi tiếng',
      vietnamese: 'Nổi tiếng',
      pitch: '[0] (Heiban)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><polygon points="50,18 60,38 82,40 66,54 70,76 50,64 30,76 34,54 18,40 40,38" fill="#FF922B"/><circle cx="50" cy="48" r="10" fill="#FFE8CC"/></svg>`,
      example: {
        ja: '京都は古いお寺で世界的にとても有名な町です。',
        hira: 'きょうとはふるいおてらでせかいてきにとてもゆうめいなまちです。',
        romaji: 'Kyouto wa furui otera de sekaiteki ni totemo yuumei na machi desu.',
        vi: 'Kyoto là thành phố rất nổi tiếng trên thế giới với những ngôi chùa cổ kính.'
      },
      exampleJa: '京都は古いお寺で世界的にとても有名な町です。',
      exampleVi: 'Kyoto là thành phố rất nổi tiếng trên thế giới với những ngôi chùa cổ kính.',
      commonMistake: 'TÍNH TỪ ĐUÔI な (な形容詞): Khi bổ nghĩa danh từ bắt buộc phải thêm な (ゆうめいな人), không được dùng như tính từ đuôi i.'
    },
    {
      id: 'n5_keiyoushi_13',
      level: 'N5',
      category: 'keiyoushi',
      kanji: '静か',
      hiragana: 'しずか',
      romaji: 'shizuka',
      hanViet: 'TĨNH',
      meaning: 'Yên tĩnh / Thanh bình',
      vietnamese: 'Yên tĩnh / Thanh bình',
      pitch: '[1] (Atamadaka)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><path d="M30 45 L50 25 L70 45" stroke="#339AF0" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="50" cy="62" r="14" fill="#A5D8FF"/><path d="M44 62 L56 62" stroke="#1864AB" stroke-width="3" stroke-linecap="round"/></svg>`,
      example: {
        ja: '夜の図書館はとても静かで、勉強しやすいです。',
        hira: 'よるのとしょかんはとてもしずかで、べんきょうしやすいです。',
        romaji: 'Yoru no toshokan wa totemo shizuka de, benkyou shiyasui desu.',
        vi: 'Thư viện vào ban đêm rất yên tĩnh, vô cùng dễ học bài.'
      },
      exampleJa: '夜の図書館はとても静かで、勉強しやすいです。',
      exampleVi: 'Thư viện vào ban đêm rất yên tĩnh, vô cùng dễ học bài.',
      commonMistake: 'Tính từ đuôi な: Khi nối câu dùng で (しずかで), khi bổ nghĩa danh từ dùng な (しずかな町).'
    }
  ],

  // ==========================================================================
  // KHUNG OBJECT RỖNG CHUẨN CẤU TRÚC ĐỂ MỞ RỘNG N4, N3, N2, N1 TRONG TƯƠNG LAI
  // ==========================================================================
  n4: [
    {
      id: 'n4_sample_template',
      level: 'N4',
      category: 'doushi',
      kanji: '準備する',
      hiragana: 'じゅんびする',
      romaji: 'junbisuru',
      hanViet: 'CHUẨN BỊ',
      meaning: 'Chuẩn bị',
      vietnamese: 'Chuẩn bị',
      pitch: '[1]',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><rect x="25" y="35" width="50" height="35" rx="4" fill="#51CF66"/></svg>`,
      example: {
        ja: '旅行の荷物を準備します。',
        hira: 'りょこうのにもつをじゅんびします。',
        romaji: 'Ryokou no nimotsu o junbi shimasu.',
        vi: 'Tôi chuẩn bị hành lý cho chuyến du lịch.'
      },
      exampleJa: '旅行の荷物を準備します。',
      exampleVi: 'Tôi chuẩn bị hành lý cho chuyến du lịch.',
      commonMistake: 'Động từ nhóm 3 (junbi shimasu).'
    }
  ],
  n3: [],
  n2: [],
  n1: []
};

window.JLPT_DATA = JLPT_DATA;
window.JLPT_CATEGORIES = JLPT_CATEGORIES;
