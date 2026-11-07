// ============================================================================
// MODULE KANA: BẢNG CHỮ CÁI TIẾNG NHẬT & TẬP VIẾT THÔNG MINH (KANA & KANJI CANVAS)
// 1. Bảng Hiragana & Katakana đầy đủ: Seion (46 cơ bản), Dakuon (Âm đục) & Youon (Âm ghép)
// 2. Phát âm chuẩn bản xứ, Romaji, mẹo nhớ mặt chữ hình ảnh & từ vựng N5 mẫu
// 3. Bảng Tập Viết Canvas HTML5: Chữ mẫu mờ, lưới ô vuông chuẩn Nhật (Genkouyoushi)
// 4. Engine "Cô Giáo Tanaka Chấm Chữ": So khớp độ phủ pixel, phân tích tỷ lệ nét và phê bình
// ============================================================================

// DỮ LIỆU BẢNG CHỮ CÁI HIRAGANA & KATAKANA ĐẦY ĐỦ
const KANA_DATABASE = {
  // --------------------------------------------------------------------------
  // 1. BẢNG 46 CHỮ CÁI CƠ BẢN (SEION - 清音)
  // --------------------------------------------------------------------------
  seion: [
    { hira: 'あ', kata: 'ア', romaji: 'a', mnemonic: 'Giống quả táo Apple có cuống và thân tròn trịa', sample: 'あさ (Buổi sáng)' },
    { hira: 'い', kata: 'イ', romaji: 'i', mnemonic: 'Giống hai con lươn (Eel) song song bơi uốn lượn', sample: 'いぬ (Con chó)' },
    { hira: 'う', kata: 'ウ', romaji: 'u', mnemonic: 'Giống người đang cúi gập lưng vác bao đồ nặng', sample: 'うみ (Biển cả)' },
    { hira: 'え', kata: 'エ', romaji: 'e', mnemonic: 'Giống người đang chạy bộ tập thể dục năng động', sample: 'えき (Nhà ga)' },
    { hira: 'お', kata: 'オ', romaji: 'o', mnemonic: 'Giống người nhảy cao trên sân băng nghệ thuật', sample: 'お茶 (Trà xanh)' },

    { hira: 'か', kata: 'カ', romaji: 'ka', mnemonic: 'Giống cánh cung đang bật mạnh với nét phẩy trợ lực', sample: 'かさ (Cái ô/dù)' },
    { hira: 'き', kata: 'キ', romaji: 'ki', mnemonic: 'Giống chiếc chìa khóa (Key) cổ điển có 2 then ngang', sample: 'き (Cây cối)' },
    { hira: 'く', kata: 'ク', romaji: 'ku', mnemonic: 'Giống mỏ chim kền kền đang há to cất tiếng kêu', sample: 'くるま (Ô tô)' },
    { hira: 'け', kata: 'ケ', romaji: 'ke', mnemonic: 'Giống thân cây trúc đứng thẳng bên hàng rào', sample: 'けさ (Sáng nay)' },
    { hira: 'こ', kata: 'コ', romaji: 'ko', mnemonic: 'Giống hai mảnh gỗ ghép lại của chiếc hộp nhỏ', sample: 'こども (Trẻ em)' },

    { hira: 'さ', kata: 'サ', romaji: 'sa', mnemonic: 'Giống chiếc đĩa đang lướt trên mặt bàn xoay', sample: 'さかな (Con cá)' },
    { hira: 'し', kata: 'シ', romaji: 'shi', mnemonic: 'Giống lưỡi câu cá uốn cong móc con cá lớn', sample: 'しろい (Màu trắng)' },
    { hira: 'す', kata: 'ス', romaji: 'su', mnemonic: 'Giống vòng đu quay xích đu có vòng xoắn tít', sample: 'すし (Món Sushi)' },
    { hira: 'せ', kata: 'セ', romaji: 'se', mnemonic: 'Giống vị sư phụ ngồi nghiêm nghị trên đệm thiền', sample: 'せんせい (Thầy cô)' },
    { hira: 'そ', kata: 'ソ', romaji: 'so', mnemonic: 'Giống đường kim mũi chỉ khâu zig-zag uốn lượn', sample: 'そら (Bầu trời)' },

    { hira: 'た', kata: 'タ', romaji: 'ta', mnemonic: 'Giống chữ "ta" trong bảng chữ La-tinh lồng ghép khéo léo', sample: 'たべる (Ăn uống)' },
    { hira: 'ち', kata: 'チ', romaji: 'chi', mnemonic: 'Giống cô gái cất bước nhảy múa cổ vũ sôi động', sample: 'ちち (Bố tôi)' },
    { hira: 'つ', kata: 'ツ', romaji: 'tsu', mnemonic: 'Giống con sóng thần khổng lồ cuộn tròn bờ cát', sample: 'つき (Mặt trăng)' },
    { hira: 'て', kata: 'テ', romaji: 'te', mnemonic: 'Giống bàn tay chìa ra đón nhận món quà quý', sample: 'て (Bàn tay)' },
    { hira: 'と', kata: 'ト', romaji: 'to', mnemonic: 'Giống chiếc gai nhọn đâm vào ngón chân cái', sample: 'ともだち (Bạn bè)' },

    { hira: 'な', kata: 'ナ', romaji: 'na', mnemonic: 'Giống bà xơ đội khăn trùm quỳ gối trước cây thánh giá', sample: 'なつ (Mùa hè)' },
    { hira: 'に', kata: 'ニ', romaji: 'ni', mnemonic: 'Giống cây kim và hai sợi chỉ may vá tinh xảo', sample: 'にほん (Nước Nhật)' },
    { hira: 'ぬ', kata: 'ヌ', romaji: 'nu', mnemonic: 'Giống bát mì ramen có đôi đũa gắp sợi mì xoăn', sample: 'いぬ (Con chó)' },
    { hira: 'ね', kata: 'ネ', romaji: 'ne', mnemonic: 'Giống con mèo có chiếc đuôi dài cuộn tròn vòng xoắn', sample: 'ねこ (Con mèo)' },
    { hira: 'の', kata: 'ノ', romaji: 'no', mnemonic: 'Giống biển cấm hình tròn có vạch chéo quen thuộc', sample: 'のみもの (Đồ uống)' },

    { hira: 'は', kata: 'ハ', romaji: 'ha', mnemonic: 'Giống bà mẹ bồng đứa con nhỏ trên tay âu yếm', sample: 'はな (Bông hoa)' },
    { hira: 'ひ', kata: 'ヒ', romaji: 'hi', mnemonic: 'Giống nụ cười tươi híp mắt hình chữ U rộng', sample: 'ひと (Con người)' },
    { hira: 'ふ', kata: 'フ', romaji: 'fu', mnemonic: 'Giống núi Phú Sĩ tuyết phủ với mây bay quanh đỉnh', sample: 'ふね (Con thuyền)' },
    { hira: 'へ', kata: 'ヘ', romaji: 'he', mnemonic: 'Giống ngọn đồi thoai thoải trải dài miền quê', sample: 'へや (Căn phòng)' },
    { hira: 'ほ', kata: 'ホ', romaji: 'ho', mnemonic: 'Giống người lính đội mũ đứng gác nghiêm trang', sample: 'ほん (Cuốn sách)' },

    { hira: 'ま', kata: 'マ', romaji: 'ma', mnemonic: 'Giống cột buồm tàu thủy giăng cờ đón gió lộng', sample: 'まち (Thành phố)' },
    { hira: 'み', kata: 'ミ', romaji: 'mi', mnemonic: 'Giống nốt nhạc may mắn có 3 nét thanh thoát', sample: 'みず (Nước uống)' },
    { hira: 'む', kata: 'ム', romaji: 'mu', mnemonic: 'Giống chú bò sữa mập mạp có đuôi cong vút', sample: 'むし (Côn trùng)' },
    { hira: 'め', kata: 'メ', romaji: 'me', mnemonic: 'Giống sợi mì ramen xoắn lại hình con mắt (Me)', sample: 'め (Đôi mắt)' },
    { hira: 'も', kata: 'モ', romaji: 'mo', mnemonic: 'Giống chiếc lưỡi câu kép móc được nhiều cá hơn', sample: 'もの (Đồ vật)' },

    { hira: 'や', kata: 'ヤ', romaji: 'ya', mnemonic: 'Giống chú bò Tây Tạng có cặp sừng cong dũng mãnh', sample: 'やま (Ngọn núi)' },
    { hira: '', kata: '', romaji: '', mnemonic: '', sample: '' }, // Ô trống theo bảng 5 cột
    { hira: 'ゆ', kata: 'ユ', romaji: 'yu', mnemonic: 'Giống chú cá bơi lội uốn mình dưới nước trong', sample: 'ゆき (Tuyết trắng)' },
    { hira: '', kata: '', romaji: '', mnemonic: '', sample: '' }, // Ô trống
    { hira: 'よ', kata: 'ヨ', romaji: 'yo', mnemonic: 'Giống chiếc kèn trumpet phát ra điệu nhạc rộn rã', sample: 'よる (Ban đêm)' },

    { hira: 'ら', kata: 'ラ', romaji: 'ra', mnemonic: 'Giống chú lạc đà có chiếc bướu lớn trên lưng', sample: 'らいしゅう (Tuần sau)' },
    { hira: 'り', kata: 'リ', romaji: 'ri', mnemonic: 'Giống hai dải ruy-băng bay phấp phới trong gió', sample: 'りんご (Quả táo)' },
    { hira: 'る', kata: 'ル', romaji: 'ru', mnemonic: 'Giống cung đường đèo có vòng xoáy tròn ốc đảo', sample: 'くるま (Xe hơi)' },
    { hira: 'れ', kata: 'レ', romaji: 're', mnemonic: 'Giống người đang quỳ gối lễ phép chào hỏi', sample: 'れんしゅう (Luyện tập)' },
    { hira: 'ろ', kata: 'ロ', romaji: 'ro', mnemonic: 'Giống chiếc hộp mở nắp không có vòng thắt', sample: 'ろく (Số 6)' },

    { hira: 'わ', kata: 'ワ', romaji: 'wa', mnemonic: 'Giống chú thiên nga uốn cong cổ trắng muốt', sample: 'わたし (Tôi)' },
    { hira: '', kata: '', romaji: '', mnemonic: '', sample: '' },
    { hira: '', kata: '', romaji: '', mnemonic: '', sample: '' },
    { hira: '', kata: '', romaji: '', mnemonic: '', sample: '' },
    { hira: 'を', kata: 'ヲ', romaji: 'wo', mnemonic: 'Trợ từ chỉ tân ngữ - giống vận động viên trượt băng', sample: 'ほん を よむ (Đọc sách)' },

    { hira: 'ん', kata: 'ン', romaji: 'n', mnemonic: 'Âm mũi độc lập - giống chữ n viết nghiêng mềm mại', sample: 'にほん (Nước Nhật)' }
  ],

  // --------------------------------------------------------------------------
  // 2. ÂM ĐỤC & ÂM NỬA ĐỤC (DAKUON / HANDAKUON - 濁音・半濁音)
  // --------------------------------------------------------------------------
  dakuon: [
    { hira: 'が', kata: 'ガ', romaji: 'ga', mnemonic: 'Hàng Ka thêm dấu phẩy Tenten đục hóa thành Ga', sample: 'がくせい (Học sinh)' },
    { hira: 'ぎ', kata: 'ギ', romaji: 'gi', mnemonic: 'Chữ Ki có dấu âm đục', sample: 'ぎんこう (Ngân hàng)' },
    { hira: 'ぐ', kata: 'グ', romaji: 'gu', mnemonic: 'Chữ Ku có dấu âm đục', sample: 'ぐらい (Khoảng chừng)' },
    { hira: 'げ', kata: 'ゲ', romaji: 'ge', mnemonic: 'Chữ Ke có dấu âm đục', sample: 'げつようび (Thứ hai)' },
    { hira: 'ご', kata: 'ゴ', romaji: 'go', mnemonic: 'Chữ Ko có dấu âm đục', sample: 'ごはん (Cơm/bữa ăn)' },

    { hira: 'ざ', kata: 'ザ', romaji: 'za', mnemonic: 'Hàng Sa thêm Tenten thành Za', sample: 'ざっし (Tạp chí)' },
    { hira: 'じ', kata: 'ジ', romaji: 'ji', mnemonic: 'Âm đặc biệt Ji (không phải zi)', sample: 'じかん (Thời gian)' },
    { hira: 'ず', kata: 'ズ', romaji: 'zu', mnemonic: 'Chữ Su có dấu âm đục', sample: 'ちず (Bản đồ)' },
    { hira: 'ぜ', kata: 'ゼ', romaji: 'ze', mnemonic: 'Chữ Se có dấu âm đục', sample: 'ぜんぶ (Toàn bộ)' },
    { hira: 'ぞ', kata: 'ゾ', romaji: 'zo', mnemonic: 'Chữ So có dấu âm đục', sample: 'どうぞ (Xin mời)' },

    { hira: 'だ', kata: 'ダ', romaji: 'da', mnemonic: 'Hàng Ta thêm Tenten thành Da', sample: 'だいがく (Trường đại học)' },
    { hira: 'ぢ', kata: 'ヂ', romaji: 'ji', mnemonic: 'Âm Dji đồng âm với じ', sample: 'はなぢ (Chảy máu cam)' },
    { hira: 'づ', kata: 'ヅ', romaji: 'zu', mnemonic: 'Âm Dzu đồng âm với ず', sample: 'つづく (Tiếp tục)' },
    { hira: 'で', kata: 'デ', romaji: 'de', mnemonic: 'Trợ từ chỉ nơi chốn / phương tiện', sample: 'でんしゃ (Tàu điện)' },
    { hira: 'ど', kata: 'ド', romaji: 'do', mnemonic: 'Chữ To có dấu âm đục', sample: 'どこ (Ở đâu)' },

    { hira: 'ば', kata: 'バ', romaji: 'ba', mnemonic: 'Hàng Ha thêm Tenten thành âm Ba', sample: 'ばんごはん (Bữa tối)' },
    { hira: 'び', kata: 'ビ', romaji: 'bi', mnemonic: 'Chữ Hi có dấu âm đục', sample: 'びょういん (Bệnh viện)' },
    { hira: 'ぶ', kata: 'ブ', romaji: 'bu', mnemonic: 'Chữ Fu có dấu âm đục', sample: 'ぶんか (Văn hóa)' },
    { hira: 'べ', kata: 'ベ', romaji: 'be', mnemonic: 'Chữ He có dấu âm đục', sample: 'べんきょう (Học tập)' },
    { hira: 'ぼ', kata: 'ボ', romaji: 'bo', mnemonic: 'Chữ Ho có dấu âm đục', sample: 'ぼうし (Chiếc mũ)' },

    { hira: 'ぱ', kata: 'パ', romaji: 'pa', mnemonic: 'Hàng Ha thêm khuyên tròn Maru thành âm Pa bật hơi', sample: 'パン (Bánh mì)' },
    { hira: 'ぴ', kata: 'ピ', romaji: 'pi', mnemonic: 'Chữ Hi thêm vòng tròn Maru', sample: 'ぴかぴか (Lấp lánh)' },
    { hira: 'ぷ', kata: 'プ', romaji: 'pu', mnemonic: 'Chữ Fu thêm vòng tròn Maru', sample: 'てんぷら (Món Tempura)' },
    { hira: 'ぺ', kata: 'ペ', romaji: 'pe', mnemonic: 'Chữ He thêm vòng tròn Maru', sample: 'ペン (Bút mực)' },
    { hira: 'ぽ', kata: 'ポ', romaji: 'po', mnemonic: 'Chữ Ho thêm vòng tròn Maru', sample: 'ポスト (Hòm thư)' }
  ],

  // --------------------------------------------------------------------------
  // 3. ÂM GHÉP (YOUON - 拗音)
  // --------------------------------------------------------------------------
  youon: [
    { hira: 'きゃ', kata: 'キャ', romaji: 'kya', mnemonic: 'Ki ghép với ya nhỏ', sample: 'きゃく (Khách hàng)' },
    { hira: 'きゅ', kata: 'キュ', romaji: 'kyu', mnemonic: 'Ki ghép với yu nhỏ', sample: 'きゅう (Số 9)' },
    { hira: 'きょ', kata: 'キョ', romaji: 'kyo', mnemonic: 'Ki ghép với yo nhỏ', sample: 'きょう (Hôm nay)' },

    { hira: 'しゃ', kata: 'シャ', romaji: 'sha', mnemonic: 'Shi ghép với ya nhỏ', sample: 'しゃしん (Bức ảnh)' },
    { hira: 'しゅ', kata: 'シュ', romaji: 'shu', mnemonic: 'Shi ghép với yu nhỏ', sample: 'しゅくだい (Bài tập về nhà)' },
    { hira: 'しょ', kata: 'ショ', romaji: 'sho', mnemonic: 'Shi ghép với yo nhỏ', sample: 'しょくどう (Nhà ăn)' },

    { hira: 'ちゃ', kata: 'チャ', romaji: 'cha', mnemonic: 'Chi ghép với ya nhỏ', sample: 'おちゃ (Trà xanh)' },
    { hira: 'ちゅ', kata: 'チュ', romaji: 'chu', mnemonic: 'Chi ghép với yu nhỏ', sample: 'ちゅうごく (Trung Quốc)' },
    { hira: 'ちょ', kata: 'チョ', romaji: 'cho', mnemonic: 'Chi ghép với yo nhỏ', sample: 'ちょっと (Một chút)' },

    { hira: 'にゃ', kata: 'ニャ', romaji: 'nya', mnemonic: 'Ni ghép với ya nhỏ (tiếng mèo kêu)', sample: 'にゃんこ (Mèo con)' },
    { hira: 'にゅ', kata: 'ニュ', romaji: 'nyu', mnemonic: 'Ni ghép với yu nhỏ', sample: 'ぎゅうにゅう (Sữa bò)' },
    { hira: 'にょ', kata: 'ニョ', romaji: 'nyo', mnemonic: 'Ni ghép với yo nhỏ', sample: 'にょうぼう (Người vợ)' },

    { hira: 'ひゃ', kata: 'ヒャ', romaji: 'hya', mnemonic: 'Hi ghép với ya nhỏ', sample: 'ひゃく (Số 100)' },
    { hira: 'ひゅ', kata: 'ヒュ', romaji: 'hyu', mnemonic: 'Hi ghép với yu nhỏ', sample: 'ひゅうひゅう (Tiếng gió rít)' },
    { hira: 'ひょ', kata: 'ヒョ', romaji: 'hyo', mnemonic: 'Hi ghép với yo nhỏ', sample: 'ひょうげん (Biểu hiện)' },

    { hira: 'みゃ', kata: 'ミャ', romaji: 'mya', mnemonic: 'Mi ghép với ya nhỏ', sample: 'みゃく (Mạch đập)' },
    { hira: 'みゅ', kata: 'ミュ', romaji: 'myu', mnemonic: 'Mi ghép với yu nhỏ', sample: 'ミュージック (Âm nhạc)' },
    { hira: 'みょ', kata: 'ミョ', romaji: 'myo', mnemonic: 'Mi ghép với yo nhỏ', sample: 'みょうにち (Ngày mai)' },

    { hira: 'りゃ', kata: 'リャ', romaji: 'rya', mnemonic: 'Ri ghép với ya nhỏ', sample: 'りゃく (Tóm tắt/viết tắt)' },
    { hira: 'りゅ', kata: 'リュ', romaji: 'ryu', mnemonic: 'Ri ghép với yu nhỏ', sample: 'りゅうがくせい (Du học sinh)' },
    { hira: 'りょ', kata: 'リョ', romaji: 'ryo', mnemonic: 'Ri ghép với yo nhỏ', sample: 'りょこう (Đi du lịch)' },

    { hira: 'ぎゃ', kata: 'ギャ', romaji: 'gya', mnemonic: 'Gi ghép với ya nhỏ', sample: 'ぎゃく (Ngược lại)' },
    { hira: 'ぎゅ', kata: 'ギュ', romaji: 'gyu', mnemonic: 'Gi ghép với yu nhỏ', sample: 'ぎゅうにく (Thịt bò)' },
    { hira: 'ぎょ', kata: 'ギョ', romaji: 'gyo', mnemonic: 'Gi ghép với yo nhỏ', sample: 'ぎょうざ (Bánh sủi cảo Gyoza)' },

    { hira: 'じゃ', kata: 'ジャ', romaji: 'ja', mnemonic: 'Ji ghép với ya nhỏ', sample: 'じゃあ (Vậy thì...)' },
    { hira: 'じゅ', kata: 'ジュ', romaji: 'ju', mnemonic: 'Ji ghép với yu nhỏ', sample: 'じゅぎょう (Tiết học)' },
    { hira: 'じょ', kata: 'ジョ', romaji: 'jo', mnemonic: 'Ji ghép với yo nhỏ', sample: 'じょせい (Phụ nữ)' },

    { hira: 'びゃ', kata: 'ビャ', romaji: 'bya', mnemonic: 'Bi ghép với ya nhỏ', sample: 'さんびゃく (300)' },
    { hira: 'びゅ', kata: 'ビュ', romaji: 'byu', mnemonic: 'Bi ghép với yu nhỏ', sample: 'びゅーびゅー (Gió thổi mạnh)' },
    { hira: 'びょ', kata: 'ビョ', romaji: 'byo', mnemonic: 'Bi ghép với yo nhỏ', sample: 'びょういん (Bệnh viện)' },

    { hira: 'ぴゃ', kata: 'ピャ', romaji: 'pya', mnemonic: 'Pi ghép với ya nhỏ', sample: 'ろっぴゃく (600)' },
    { hira: 'ぴゅ', kata: 'ピュ', romaji: 'pyu', mnemonic: 'Pi ghép với yu nhỏ', sample: 'ピューマ (Báo sư tử)' },
    { hira: 'ぴょ', kata: 'ピョ', romaji: 'pyo', mnemonic: 'Pi ghép với yo nhỏ', sample: 'ぴょんぴょん (Nhảy lò cò)' }
  ]
};

// DANH SÁCH CÁC CHỮ KANJI N5 TIÊU BIỂU ĐỂ TẬP VIẾT
const KANJI_PRACTICE_LIST = [
  { kanji: '日', hira: 'ひ / にち', romaji: 'hi / nichi', meaning: 'Mặt trời, Ngày', strokes: 4 },
  { kanji: '月', hira: 'つき / げつ', romaji: 'tsuki / getsu', meaning: 'Mặt trăng, Tháng', strokes: 4 },
  { kanji: '火', hira: 'ひ / か', romaji: 'hi / ka', meaning: 'Lửa, Thứ ba', strokes: 4 },
  { kanji: '水', hira: 'みず / すい', romaji: 'mizu / sui', meaning: 'Nước, Thứ tư', strokes: 4 },
  { kanji: '木', hira: 'き / もく', romaji: 'ki / moku', meaning: 'Cây cối, Thứ năm', strokes: 4 },
  { kanji: '金', hira: 'かね / きん', romaji: 'kane / kin', meaning: 'Tiền, Vàng, Thứ sáu', strokes: 8 },
  { kanji: '土', hira: 'つち / ど', romaji: 'tsuchi / do', meaning: 'Đất, Thứ bảy', strokes: 3 },
  { kanji: '人', hira: 'ひと / じん', romaji: 'hito / jin', meaning: 'Con người', strokes: 2 },
  { kanji: '食', hira: 'たべる / しょく', romaji: 'taberu / shoku', meaning: 'Ăn uống, Thực phẩm', strokes: 9 },
  { kanji: '飲', hira: 'のむ / いん', romaji: 'nomu / in', meaning: 'Uống nước', strokes: 12 },
  { kanji: '見', hira: 'みる / けん', romaji: 'miru / ken', meaning: 'Nhìn, Xem', strokes: 7 },
  { kanji: '行', hira: 'いく / こう', romaji: 'iku / kou', meaning: 'Đi lại', strokes: 6 },
  { kanji: '来', hira: 'くる / らい', romaji: 'kuru / rai', meaning: 'Đến nơi', strokes: 7 },
  { kanji: '本', hira: 'ほん', romaji: 'hon', meaning: 'Sách, Gốc rễ', strokes: 5 },
  { kanji: '学', hira: 'まなぶ / がく', romaji: 'manabu / gaku', meaning: 'Học tập', strokes: 8 },
  { kanji: '先', hira: 'さき / せん', romaji: 'saki / sen', meaning: 'Trước, Tiên sinh', strokes: 6 }
];

class JapaneseKanaModule {
  constructor() {
    this.currentAlphabet = 'hiragana'; // 'hiragana' hoặc 'katakana'
    this.currentCategory = 'seion';    // 'seion', 'dakuon', 'youon'
    this.selectedChar = null;          // Chữ cái đang được chọn xem chi tiết

    // Thuộc tính Canvas tập viết
    this.canvas = null;
    this.ctx = null;
    this.isDrawing = false;
    this.brushColor = '#1A1A1A';       // Mực tàu truyền thống
    this.brushSize = 14;               // Độ dày nét
    this.showGhost = true;             // Hiển thị chữ mẫu mờ
    this.showGrid = true;              // Hiển thị lưới ô vuông chuẩn Nhật
    this.writingTarget = 'あ';         // Ký tự đang tập viết
    this.writingType = 'kana';         // 'kana' hoặc 'kanji'
    this.drawingHistory = [];          // Lịch sử nét vẽ để Undo
    this.userHasDrawn = false;
  }

  init() {
    this.selectedChar = KANA_DATABASE.seion[0];
    this.writingTarget = 'あ';
    this.render();
  }

  // --------------------------------------------------------------------------
  // CHUYỂN ĐỔI BẢNG VÀ PHÂN MỤC
  // --------------------------------------------------------------------------
  setAlphabet(type) {
    this.currentAlphabet = type;
    this.renderKanaGrid();
    if (window.soundSystem) window.soundSystem.playPop();
  }

  setCategory(cat) {
    this.currentCategory = cat;
    this.renderKanaGrid();
    if (window.soundSystem) window.soundSystem.playPop();
  }

  // --------------------------------------------------------------------------
  // RENDER TOÀN BỘ GIAO DIỆN TAB BẢNG CHỮ CÁI & TẬP VIẾT
  // --------------------------------------------------------------------------
  render() {
    const container = document.getElementById('kana-practice-container');
    if (!container) return;

    container.innerHTML = `
      <div class="kana-layout-wrapper">
        
        <!-- CỘT TRÁI: BẢNG CHỮ CÁI HIRAGANA & KATAKANA -->
        <div class="kana-chart-section">
          
          <div class="kana-chart-header">
            <!-- Nút chọn bảng Hiragana vs Katakana -->
            <div class="alphabet-toggle-bar">
              <button class="btn-alphabet-tab ${this.currentAlphabet === 'hiragana' ? 'active' : ''}" 
                      onclick="window.kanaModule.setAlphabet('hiragana')">
                🌸 Hiragana (Chữ mềm)
              </button>
              <button class="btn-alphabet-tab ${this.currentAlphabet === 'katakana' ? 'active' : ''}" 
                      onclick="window.kanaModule.setAlphabet('katakana')">
                ⚡ Katakana (Chữ cứng)
              </button>
            </div>

            <!-- Nút chọn 3 phân mục: Cơ bản (Seion), Âm đục (Dakuon), Âm ghép (Youon) -->
            <div class="kana-subcat-bar">
              <button class="kana-subcat-chip ${this.currentCategory === 'seion' ? 'active' : ''}" 
                      onclick="window.kanaModule.setCategory('seion')">
                1. Bảng 46 chữ cơ bản (Seion)
              </button>
              <button class="kana-subcat-chip ${this.currentCategory === 'dakuon' ? 'active' : ''}" 
                      onclick="window.kanaModule.setCategory('dakuon')">
                2. Âm đục & Bán đục (Dakuon)
              </button>
              <button class="kana-subcat-chip ${this.currentCategory === 'youon' ? 'active' : ''}" 
                      onclick="window.kanaModule.setCategory('youon')">
                3. Âm ghép (Youon)
              </button>
            </div>
          </div>

          <!-- Lưới các ô chữ cái tương tác -->
          <div class="kana-grid-container" id="kana-grid-container">
            <!-- Render danh sách ô chữ bằng renderKanaGrid() -->
          </div>

          <!-- Khung thẻ chi tiết chữ cái đang chọn -->
          <div class="kana-detail-card" id="kana-detail-card">
            <!-- Render chi tiết chữ, mẹo nhớ & từ vựng N5 -->
          </div>

        </div>

        <!-- CỘT PHẢI: BẢNG TẬP VIẾT THÔNG MINH (CANVAS SHODO) -->
        <div class="kana-canvas-section">
          
          <div class="canvas-section-header">
            <div class="canvas-title-wrap">
              <h3>✍️ Bảng Tập Viết Thông Minh</h3>
              <p>Vẽ theo chữ mẫu mờ & căn tỷ lệ trên lưới ô vuông Nhật Bản</p>
            </div>
            
            <!-- Bộ chọn nhanh tập viết: Kana hiện tại hoặc Kanji N5 -->
            <div class="canvas-target-selector">
              <button class="target-type-chip ${this.writingType === 'kana' ? 'active' : ''}" 
                      onclick="window.kanaModule.setWritingType('kana')">
                Chữ Kana
              </button>
              <button class="target-type-chip ${this.writingType === 'kanji' ? 'active' : ''}" 
                      onclick="window.kanaModule.setWritingType('kanji')">
                Chữ Kanji N5
              </button>
            </div>
          </div>

          <!-- Chọn ký tự Kanji mẫu nếu ở chế độ Kanji -->
          <div class="kanji-quick-bar ${this.writingType === 'kanji' ? '' : 'hidden'}" id="kanji-quick-bar">
            <!-- Render các nút Kanji N5 -->
          </div>

          <!-- KHUNG CANVAS VẼ TẬP VIẾT -->
          <div class="canvas-board-container">
            <canvas id="kana-draw-canvas" width="380" height="380"></canvas>
            
            <div class="canvas-overlay-guide" id="canvas-guide-display">
              <span class="guide-character" id="canvas-guide-char">${this.writingTarget}</span>
            </div>
          </div>

          <!-- THANH CÔNG CỤ BÚT VẼ & ĐIỀU KHIỂN CANVAS -->
          <div class="canvas-toolbar">
            
            <!-- Màu mực -->
            <div class="tool-group colors-group">
              <button class="color-dot active" style="background: #1A1A1A;" onclick="window.kanaModule.setBrushColor('#1A1A1A', this)" title="Mực Tàu đen"></button>
              <button class="color-dot" style="background: #E03131;" onclick="window.kanaModule.setBrushColor('#E03131', this)" title="Mực son đỏ"></button>
              <button class="color-dot" style="background: #1864AB;" onclick="window.kanaModule.setBrushColor('#1864AB', this)" title="Mực xanh"></button>
            </div>

            <!-- Cỡ nét bút -->
            <div class="tool-group brush-sizes">
              <button class="brush-size-btn" onclick="window.kanaModule.setBrushSize(8, this)">Nét thanh</button>
              <button class="brush-size-btn active" onclick="window.kanaModule.setBrushSize(14, this)">Nét vừa</button>
              <button class="brush-size-btn" onclick="window.kanaModule.setBrushSize(22, this)">Thư pháp</button>
            </div>

            <!-- Bật/tắt lưới & chữ mẫu -->
            <div class="tool-group toggles-group">
              <button class="btn-tool-toggle ${this.showGrid ? 'active' : ''}" id="btn-toggle-grid" onclick="window.kanaModule.toggleGrid()" title="Bật/Tắt lưới ô vuông Nhật">
                🪟 Lưới ô
              </button>
              <button class="btn-tool-toggle ${this.showGhost ? 'active' : ''}" id="btn-toggle-ghost" onclick="window.kanaModule.toggleGhost()" title="Bật/Tắt chữ mẫu mờ">
                👻 Chữ mẫu
              </button>
              <button class="btn-tool-action" onclick="window.kanaModule.clearCanvas()" title="Xóa toàn bộ nét vẽ">
                🗑️ Xóa viết lại
              </button>
            </div>

          </div>

          <!-- NÚT GỬI CÔ TAKAGI CHẤM CHỮ -->
          <div class="canvas-submit-row">
            <button class="btn btn-primary btn-large btn-sensei-grade" onclick="window.kanaModule.gradeStrokeQuality()">
              👩‍🏫 Nhờ Cô Giáo Tanaka Chấm Nét Chữ 📝
            </button>
          </div>

          <!-- KHUNG KẾT QUẢ ĐÁNH GIÁ NÉT CHỮ CỦA CÔ TAKAGI -->
          <div class="sensei-handwriting-critique hidden" id="handwriting-critique-box">
            <!-- Render kết quả mổ xẻ độ cân đối của nét chữ -->
          </div>

        </div>

      </div>
    `;

    this.renderKanaGrid();
    this.renderDetailCard();
    this.initCanvas();
    this.renderKanjiBar();
  }

  // --------------------------------------------------------------------------
  // HIỂN THỊ LƯỚI CHỮ CÁI KANA
  // --------------------------------------------------------------------------
  renderKanaGrid() {
    const gridEl = document.getElementById('kana-grid-container');
    if (!gridEl) return;

    const list = KANA_DATABASE[this.currentCategory] || [];
    let html = '';

    list.forEach((item, index) => {
      if (!item.hira && !item.kata) {
        // Ô rỗng giữ layout 5 cột
        html += '<div class="kana-cell empty-cell"></div>';
        return;
      }

      const displayChar = this.currentAlphabet === 'hiragana' ? item.hira : item.kata;
      const isSelected = this.selectedChar && this.selectedChar.romaji === item.romaji;

      html += `
        <div class="kana-cell ${isSelected ? 'active-cell' : ''}" 
             onclick="window.kanaModule.selectKana(${index})">
          <span class="kana-char-main">${displayChar}</span>
          <span class="kana-romaji-sub">${item.romaji}</span>
        </div>
      `;
    });

    gridEl.innerHTML = html;
  }

  // --------------------------------------------------------------------------
  // CHỌN CHỮ CÁI VÀ PHÁT ÂM + HIỂN THỊ MẸO NHỚ
  // --------------------------------------------------------------------------
  selectKana(index) {
    const list = KANA_DATABASE[this.currentCategory] || [];
    const item = list[index];
    if (!item || (!item.hira && !item.kata)) return;

    this.selectedChar = item;
    const charToSpeak = this.currentAlphabet === 'hiragana' ? item.hira : item.kata;

    // Phát âm giọng Nhật chuẩn
    if (window.soundSystem) {
      window.soundSystem.speak(item.hira, 1.0);
    }

    // Cập nhật giao diện lưới và thẻ chi tiết
    this.renderKanaGrid();
    this.renderDetailCard();

    // Tự động nạp chữ này vào Bảng Tập Viết
    this.writingType = 'kana';
    this.writingTarget = charToSpeak;
    this.updateCanvasGuide();
    this.clearCanvas();
  }

  renderDetailCard() {
    const cardEl = document.getElementById('kana-detail-card');
    if (!cardEl || !this.selectedChar) return;

    const item = this.selectedChar;
    const displayChar = this.currentAlphabet === 'hiragana' ? item.hira : item.kata;
    const altChar = this.currentAlphabet === 'hiragana' ? item.kata : item.hira;
    const altName = this.currentAlphabet === 'hiragana' ? 'Katakana' : 'Hiragana';

    cardEl.innerHTML = `
      <div class="kana-detail-inner">
        <div class="kana-hero-wrap">
          <div class="kana-hero-char">${displayChar}</div>
          <div class="kana-hero-meta">
            <span class="romaji-large">${item.romaji}</span>
            <span class="alt-char">Dạng ${altName}: <strong>${altChar}</strong></span>
          </div>
          <button class="btn-voice-round" onclick="window.soundSystem.speak('${item.hira}', 1.0)" title="Nghe phát âm chuẩn">
            🔊 Nghe đọc
          </button>
        </div>

        <div class="kana-mnemonic-box">
          <div class="mnemonic-title">💡 Mẹo nhớ mặt chữ nhanh bằng hình ảnh:</div>
          <p class="mnemonic-desc">${item.mnemonic}</p>
        </div>

        <div class="kana-sample-box">
          <span class="sample-label">📖 Từ vựng N5 tiêu biểu:</span>
          <strong class="sample-word">${item.sample}</strong>
          <button class="btn-mini-voice" onclick="window.soundSystem.speak('${item.sample.split(' ')[0]}', 0.9)">
            🔊 Nghe từ
          </button>
        </div>

        <div class="kana-action-footer">
          <button class="btn-load-canvas-orange" onclick="window.kanaModule.loadCharToCanvas('${displayChar}')">
            ⚡ Đưa vào Bảng tập viết ngay
          </button>
        </div>
      </div>
    `;
  }

  loadCharToCanvas(char) {
    this.writingTarget = char;
    this.writingType = 'kana';
    this.renderKanjiBar();
    this.clearCanvas();
    if (window.soundSystem) window.soundSystem.playPop();

    // Cuộn mượt đến bảng tập viết nếu trên mobile / iPad
    const canvasSec = document.querySelector('.kana-canvas-section');
    if (canvasSec && window.innerWidth < 992) {
      canvasSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // --------------------------------------------------------------------------
  // DANH SÁCH CHỮ KANJI N5 ĐỂ LUYỆN VIẾT
  // --------------------------------------------------------------------------
  setWritingType(type) {
    this.writingType = type;
    const bar = document.getElementById('kanji-quick-bar');
    
    document.querySelectorAll('.target-type-chip').forEach(c => {
      c.classList.toggle('active', c.textContent.toLowerCase().includes(type));
    });

    if (type === 'kanji') {
      if (bar) bar.classList.remove('hidden');
      this.writingTarget = KANJI_PRACTICE_LIST[0].kanji;
    } else {
      if (bar) bar.classList.add('hidden');
      this.writingTarget = this.currentAlphabet === 'hiragana' ? this.selectedChar.hira : this.selectedChar.kata;
    }

    this.updateCanvasGuide();
    this.clearCanvas();
  }

  renderKanjiBar() {
    const bar = document.getElementById('kanji-quick-bar');
    if (!bar) return;

    let html = '<div class="kanji-chips-scroll">';
    KANJI_PRACTICE_LIST.forEach((k, idx) => {
      html += `
        <button class="kanji-chip ${this.writingTarget === k.kanji ? 'active' : ''}" 
                onclick="window.kanaModule.selectKanji(${idx})" 
                title="${k.hira} (${k.meaning})">
          ${k.kanji}
        </button>
      `;
    });
    html += '</div>';
    bar.innerHTML = html;
  }

  selectKanji(idx) {
    const k = KANJI_PRACTICE_LIST[idx];
    if (!k) return;

    this.writingTarget = k.kanji;
    this.writingType = 'kanji';
    this.renderKanjiBar();
    this.clearCanvas();

    if (window.soundSystem) {
      window.soundSystem.speak(k.hira.split('/')[0].trim(), 1.0);
    }

    const canvasSec = document.querySelector('.kana-canvas-section');
    if (canvasSec && window.innerWidth < 992) {
      canvasSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // --------------------------------------------------------------------------
  // KHỞI TẠO BẢNG TẬP VIẾT HTML5 CANVAS (VẼ CHUỘT & CẢM ỨNG TOUCH)
  // --------------------------------------------------------------------------
  initCanvas() {
    this.canvas = document.getElementById('kana-draw-canvas');
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d', { willReadFrequently: true });
    this.setupCanvasEvents();
    this.drawBackgroundGrid();
    this.updateCanvasGuide();
  }

  drawBackgroundGrid() {
    if (!this.ctx || !this.canvas) return;

    const w = this.canvas.width;
    const h = this.canvas.height;

    // Nền trắng giấy tập viết chuẩn Nhật Bản
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.fillRect(0, 0, w, h);

    if (this.showGrid) {
      this.ctx.save();
      // Khung viền ngoài
      this.ctx.strokeStyle = '#FFC9C9';
      this.ctx.lineWidth = 3;
      this.ctx.strokeRect(10, 10, w - 20, h - 20);

      // Đường kẻ chữ thập trung tâm (Nét đứt chuẩn Nhật Bản Genkouyoushi)
      this.ctx.strokeStyle = '#FFA8A8';
      this.ctx.lineWidth = 1.5;
      this.ctx.setLineDash([6, 6]);

      // Trục dọc trung tâm
      this.ctx.beginPath();
      this.ctx.moveTo(w / 2, 10);
      this.ctx.lineTo(w / 2, h - 10);
      this.ctx.stroke();

      // Trục ngang trung tâm
      this.ctx.beginPath();
      this.ctx.moveTo(10, h / 2);
      this.ctx.lineTo(w - 10, h / 2);
      this.ctx.stroke();

      // Hai đường chéo góc mờ
      this.ctx.strokeStyle = '#FFE3E3';
      this.ctx.setLineDash([4, 8]);
      this.ctx.beginPath();
      this.ctx.moveTo(10, 10);
      this.ctx.lineTo(w - 10, h - 10);
      this.ctx.moveTo(w - 10, 10);
      this.ctx.lineTo(10, h - 10);
      this.ctx.stroke();

      this.ctx.restore();
    }

    // VẼ CHỮ MẪU MỜ ĐÚNG CHÍNH TÂM LƯỚI Ô VUÔNG CHUẨN NHẬT BẢN
    if (this.showGhost && this.writingTarget) {
      this.ctx.save();
      this.ctx.fillStyle = 'rgba(0, 0, 0, 0.12)';
      const fontSize = Math.round(w * 0.65);
      this.ctx.font = `900 ${fontSize}px "Noto Sans JP", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Meiryo", sans-serif`;
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      this.ctx.fillText(this.writingTarget, w / 2, h / 2);
      this.ctx.restore();
    }
  }

  updateCanvasGuide() {
    const guideEl = document.getElementById('canvas-guide-char');
    if (guideEl) {
      guideEl.textContent = this.writingTarget;
      guideEl.style.display = this.showGhost ? 'block' : 'none';
    }
  }

  toggleGrid() {
    this.showGrid = !this.showGrid;
    const btn = document.getElementById('btn-toggle-grid');
    if (btn) btn.classList.toggle('active', this.showGrid);
    this.redrawAll();
  }

  toggleGhost() {
    this.showGhost = !this.showGhost;
    const btn = document.getElementById('btn-toggle-ghost');
    if (btn) btn.classList.toggle('active', this.showGhost);
    this.redrawAll();
  }

  setBrushColor(color, btn) {
    this.brushColor = color;
    document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
    if (btn) btn.classList.add('active');
  }

  setBrushSize(size, btn) {
    this.brushSize = size;
    document.querySelectorAll('.brush-size-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
  }

  setupCanvasEvents() {
    if (!this.canvas) return;

    let currentStroke = [];

    const getPos = (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const scaleX = this.canvas.width / rect.width;
      const scaleY = this.canvas.height / rect.height;

      let clientX = e.clientX;
      let clientY = e.clientY;

      if (e.touches && e.touches[0]) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      }

      return {
        x: (clientX - rect.left) * scaleX,
        y: (clientY - rect.top) * scaleY
      };
    };

    const startDraw = (e) => {
      e.preventDefault();
      this.isDrawing = true;
      this.userHasDrawn = true;
      const pos = getPos(e);
      currentStroke = [pos];

      this.ctx.beginPath();
      this.ctx.moveTo(pos.x, pos.y);
      this.ctx.lineCap = 'round';
      this.ctx.lineJoin = 'round';
      this.ctx.strokeStyle = this.brushColor;
      this.ctx.lineWidth = this.brushSize;
    };

    const draw = (e) => {
      if (!this.isDrawing) return;
      e.preventDefault();
      const pos = getPos(e);
      currentStroke.push(pos);

      this.ctx.lineTo(pos.x, pos.y);
      this.ctx.stroke();
    };

    const stopDraw = () => {
      if (!this.isDrawing) return;
      this.isDrawing = false;
      this.ctx.closePath();
      if (currentStroke.length > 0) {
        this.drawingHistory.push({
          points: currentStroke,
          color: this.brushColor,
          size: this.brushSize
        });
      }
    };

    // Hỗ trợ Pointer Events đồng nhất cho chuột, bút Stylus và màn cảm ứng
    this.canvas.addEventListener('pointerdown', startDraw);
    this.canvas.addEventListener('pointermove', draw);
    this.canvas.addEventListener('pointerup', stopDraw);
    this.canvas.addEventListener('pointerleave', stopDraw);
    this.canvas.addEventListener('pointercancel', stopDraw);
  }

  redrawAll() {
    this.drawBackgroundGrid();
    if (!this.ctx) return;

    this.drawingHistory.forEach(stroke => {
      if (stroke.points.length < 2) return;
      this.ctx.beginPath();
      this.ctx.moveTo(stroke.points[0].x, stroke.points[0].y);
      this.ctx.lineCap = 'round';
      this.ctx.lineJoin = 'round';
      this.ctx.strokeStyle = stroke.color;
      this.ctx.lineWidth = stroke.size;

      for (let i = 1; i < stroke.points.length; i++) {
        this.ctx.lineTo(stroke.points[i].x, stroke.points[i].y);
      }
      this.ctx.stroke();
      this.ctx.closePath();
    });
  }

  clearCanvas() {
    this.drawingHistory = [];
    this.userHasDrawn = false;
    this.drawBackgroundGrid();

    const critiqueBox = document.getElementById('handwriting-critique-box');
    if (critiqueBox) critiqueBox.classList.add('hidden');

    if (window.soundSystem) window.soundSystem.playCardFlip();
  }

  // --------------------------------------------------------------------------
  // ENGINE "CÔ GIÁO TAKAGI CHẤM CHỮ" (PIXEL ANALYSIS & STRICT CRITIQUE)
  // --------------------------------------------------------------------------
  gradeStrokeQuality() {
    const critiqueBox = document.getElementById('handwriting-critique-box');
    if (!critiqueBox || !this.canvas) return;

    if (!this.userHasDrawn || this.drawingHistory.length === 0) {
      alert('Em chưa viết chữ nào lên bảng cả! Hãy cầm chuột hoặc chạm tay vào ô vuông để viết trước nhé! 👩‍🏫');
      return;
    }

    // 1. Phân tích mật độ pixel bằng Canvas ẩn
    const w = this.canvas.width;
    const h = this.canvas.height;

    // Tạo canvas ảo vẽ chữ mẫu mục tiêu với kích thước và font chuẩn
    const ghostCanvas = document.createElement('canvas');
    ghostCanvas.width = w;
    ghostCanvas.height = h;
    const gctx = ghostCanvas.getContext('2d');

    gctx.fillStyle = '#FFFFFF';
    gctx.fillRect(0, 0, w, h);

    gctx.fillStyle = '#000000';
    gctx.font = `900 ${Math.round(w * 0.65)}px "Noto Sans JP", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Meiryo", sans-serif`;
    gctx.textAlign = 'center';
    gctx.textBaseline = 'middle';
    gctx.fillText(this.writingTarget, w / 2, h / 2);

    const ghostImgData = gctx.getImageData(0, 0, w, h).data;
    const userImgData = this.ctx.getImageData(0, 0, w, h).data;

    let targetPixelCount = 0;
    let userPixelCount = 0;
    let overlapPixelCount = 0;

    // Duyệt lưới pixel (bước nhảy 4 pixel để tăng tốc độ xử lý)
    for (let i = 0; i < ghostImgData.length; i += 16) {
      const isTarget = ghostImgData[i] < 200; // Pixel có mực của chữ mẫu
      
      // Pixel người dùng vẽ (khác màu trắng của nền)
      const r = userImgData[i];
      const g = userImgData[i + 1];
      const b = userImgData[i + 2];
      const isUser = (r < 240 || g < 240 || b < 240) && !(r > 240 && g > 150 && b > 150); // Bỏ qua viền đỏ mờ của lưới

      if (isTarget) targetPixelCount++;
      if (isUser) userPixelCount++;
      if (isTarget && isUser) overlapPixelCount++;
    }

    // 2. Tính toán các chỉ số kỹ thuật:
    // Độ phủ nét (Coverage): Người dùng có vẽ đủ các nét của chữ mẫu không?
    const coverage = targetPixelCount > 0 ? (overlapPixelCount / targetPixelCount) : 0;
    // Độ chính xác (Precision): Nét vẽ có nằm trong khuôn chữ hay bị văng/lem ra ngoài quá nhiều?
    const precision = userPixelCount > 0 ? (overlapPixelCount / userPixelCount) : 0;

    // Điểm số tổng hợp (thang điểm 100)
    let score = Math.round((coverage * 0.65 + precision * 0.35) * 100);
    if (userPixelCount < 100) score = Math.min(score, 20); // Vẽ quá ít
    if (score > 100) score = 100;

    // 3. Xếp loại & Tạo lời phê bình nghiêm khắc của Cô Tanaka
    let rank = 'F';
    let rankBadgeClass = 'rank-f';
    let critiqueHeadline = '';
    let detailedCritique = '';
    let actionTip = '';
    let soundToPlay = 'wrong';

    if (score >= 82) {
      rank = 'S';
      rankBadgeClass = 'rank-s';
      soundToPlay = 'correct';
      critiqueHeadline = '🌟 XUẤT THẦN! NÉT BÚT ĐẠT CHUẨN THƯ PHÁP TOKYO!';
      detailedCritique = `Chà! Tôi không ngờ em lại viết nắn nót và cân đối đến thế này! Độ bao phủ nét đạt <strong>${Math.round(coverage * 100)}%</strong>, trọng tâm chữ "${this.writingTarget}" nằm ngay ngắn chính giữa tâm điểm lưới ô vuông! Nét bắt đầu và nét kết thúc dứt khoát, không có nét thừa lem nhem!`;
      actionTip = 'Cô khen! Nhưng thư pháp tiếng Nhật là nghệ thuật rèn luyện cả đời, giữ vững sự điềm tĩnh này khi viết cả câu nhé!';
    } else if (score >= 68) {
      rank = 'A';
      rankBadgeClass = 'rank-a';
      soundToPlay = 'correct';
      critiqueHeadline = '✨ RẤT KHÁ! MẶT CHỮ VUÔNG VỨC RÕ RÀNG';
      detailedCritique = `Mặt chữ "${this.writingTarget}" đã ra đúng hình khối cơ bản của bảng chữ cái, người Nhật nhìn vào là nhận ra ngay. Tuy nhiên, nét móc ở đoạn cuối hơi vội, và độ dày nét chưa đều tay (độ khít đạt <strong>${Math.round(precision * 100)}%</strong>).`;
      actionTip = 'Chú ý quy tắc: Nét ngang viết trước, nét sổ viết sau; từ trên xuống dưới, từ trái sang phải. Viết thêm 3 lần nữa cho nhuyễn!';
    } else if (score >= 50) {
      rank = 'B';
      rankBadgeClass = 'rank-b';
      soundToPlay = 'wrong';
      critiqueHeadline = '⚠️ TẠM ĐƯỢC NHƯNG CÒN LỆCH TỶ LỆ TRỌNG TÂM!';
      detailedCritique = `Chậc chậc! Em nhìn kỹ chữ mẫu xem: Chữ "${this.writingTarget}" của em bị lệch trục sang một bên rồi! Nét phẩy hơi run và độ bao phủ nét mới đạt <strong>${Math.round(coverage * 100)}%</strong>. Người Nhật đọc được nhưng sẽ thấy chữ này của một người đang rất mất kiên nhẫn!`;
      actionTip = 'Hãy dựa vào 4 góc phần tư của lưới chữ thập để căn đều khoảng cách từ tâm ra 4 phía!';
    } else if (score >= 30) {
      rank = 'C';
      rankBadgeClass = 'rank-c';
      soundToPlay = 'wrong';
      critiqueHeadline = '❌ CHỮ QUÁ XIÊU VẸO - CẦN RÈN LẠI TỪNG NÉT!';
      detailedCritique = `Viết thế này là chưa đạt chuẩn N5 đâu nhé! Nét mực bị văng ra ngoài khung chữ mẫu quá nhiều (độ chính xác chỉ đạt <strong>${Math.round(precision * 100)}%</strong>). Chữ tiếng Nhật đòi hỏi sự cân xứng hình học rất khắt khe, không được vẽ đại khái!`;
      actionTip = 'Bấm nút "Chữ mẫu mờ", đưa nét bút đè chuẩn xác theo nét mờ trước khi tự viết tự do!';
    } else {
      rank = 'F';
      rankBadgeClass = 'rank-f';
      soundToPlay = 'wrong';
      critiqueHeadline = '🚨 ĐIỂM F! CẨU THẢ QUÁ - CHÉP PHẠT NGAY!';
      detailedCritique = `Trời đất ơi! Em quẹt ngoáy vài đường như vẽ bùa rồi nộp cho tôi đấy à? Nét chữ "${this.writingTarget}" bị thiếu nét nghiêm trọng, tỷ lệ sai lệch hoàn toàn! Không có một chút tỉ mỉ nào của người học tiếng Nhật cả!`;
      actionTip = 'Xóa bảng ngay lập tức! Chép phạt chữ này 10 lần thật chậm rãi vào vở cho tôi!';
    }

    // Phát âm thanh
    if (window.soundSystem) {
      if (soundToPlay === 'correct') {
        window.soundSystem.playCorrect();
      } else {
        window.soundSystem.playWrong();
      }
    }

    // Linh vật Tanaka phản ứng
    if (window.mascot) {
      if (rank === 'S' || rank === 'A') {
        window.mascot.setMood('happy', `Cô Tanaka chấm: Rank ${rank}! Chữ "${this.writingTarget}" viết rất đẹp! 🌸`, 3000);
      } else {
        window.mascot.setCharacter('sensei');
        window.mascot.setMood('strict', `Chữ "${this.writingTarget}" bị trừ điểm vì lệch tỷ lệ! Viết lại ngay nhé! 👩‍🏫`, 3500);
      }
    }

    // Hiển thị khung nhận xét
    critiqueBox.className = 'sensei-handwriting-critique';
    critiqueBox.classList.remove('hidden');
    critiqueBox.innerHTML = `
      <div class="critique-header">
        <div class="eval-rank-badge ${rankBadgeClass}">${rank}</div>
        <div class="critique-header-text">
          <h4>${critiqueHeadline}</h4>
          <span class="critique-score-meta">Điểm cân đối nét: <strong>${score}/100</strong> (Độ khớp mẫu: ${Math.round(coverage * 100)}%)</span>
        </div>
      </div>

      <div class="critique-body">
        <div class="sensei-speech-avatar">
          <span style="font-size: 32px;">👩‍🏫</span>
        </div>
        <div class="critique-content">
          <p class="critique-words">${detailedCritique}</p>
          <div class="critique-action-box">
            💡 <strong>Lời dặn của Cô Tanaka:</strong> ${actionTip}
          </div>
        </div>
      </div>

      <div class="critique-actions">
        <button class="btn btn-secondary btn-sm" onclick="window.kanaModule.clearCanvas()">
          🔄 Xóa viết lại lần nữa
        </button>
        <button class="btn btn-secondary btn-sm" onclick="window.soundSystem.speak('${this.writingTarget}', 1.0)">
          🔊 Nghe lại phát âm chữ này
        </button>
      </div>
    `;

    critiqueBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// Khởi tạo instance toàn cục
window.kanaModule = new JapaneseKanaModule();
