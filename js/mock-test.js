// ============================================================================
// MODULE MOCK TEST: BÀI THI THỬ MINI JLPT N5 BẢN QUYỀN CÔ TAKAGI
// 1. Đề thi 15 câu chuẩn cấu trúc 4 phần (Moji-Goi, Kanji, Bunpou, Choukai nghe hiểu)
// 2. Đồng hồ đếm ngược 10 phút (600s), ma trận 15 câu nhảy nhanh
// 3. Đóng dấu mộc đỏ son 合格 (ĐỖ) hoặc 不合格 (TRƯỢT) chuẩn Inkan Nhật Bản
// 4. Mổ xẻ bẫy đề thi và giải thích từng câu chi tiết của Cô Giáo Tanaka
// ============================================================================

const JLPT_N5_MOCK_EXAM = [
  // --------------------------------------------------------------------------
  // PHẦN 1: MOJI - GOI (TỪ VỰNG & CÁCH ĐỌC CHỮ KANJI) - 4 CÂU
  // --------------------------------------------------------------------------
  {
    id: 'q01',
    mondai: 1,
    mondaiTitle: 'Mondai 1: Moji-Goi (Cách đọc chữ Kanji gạch chân)',
    instruction: 'Chọn cách đọc Hiragana đúng của từ được gạch chân:',
    sentence: 'きのう、<u>本</u> を ３さつ かいました。',
    targetWord: '本',
    options: ['ぼん', 'ほん', 'ぽん', 'はん'],
    correctIndex: 1, // B. ほん
    meaning: 'Hôm qua tôi đã mua 3 cuốn sách.',
    takagiExplanation: 'Chữ「本」đứng độc lập đọc chuẩn là「ほん」(hon). Nhiều bạn học sinh bị nhầm lẫn với cách biến âm của lượng từ đếm số cuốn sách (さんぼん/いっぽん) nên chọn nhầm ぼん hoặc ぽん!'
  },
  {
    id: 'q02',
    mondai: 1,
    mondaiTitle: 'Mondai 1: Moji-Goi (Cách đọc chữ Kanji gạch chân)',
    instruction: 'Chọn cách đọc Hiragana đúng của từ được gạch chân:',
    sentence: 'きょうは とても <u>天気</u> が いいですね。',
    targetWord: '天気',
    options: ['でんき', 'てんき', 'てんぎ', 'でんぎ'],
    correctIndex: 1, // B. てんき
    meaning: 'Hôm nay thời tiết đẹp quá nhỉ.',
    takagiExplanation: 'Bẫy âm đục kinh điển!「天気」(Thời tiết) đọc là「てんき」(tenki) âm trong. Còn「でんき」(denki) có âm đục là "Điện khí", nghĩa là bóng đèn hoặc dòng điện!'
  },
  {
    id: 'q03',
    mondai: 1,
    mondaiTitle: 'Mondai 1: Moji-Goi (Cách đọc chữ Kanji gạch chân)',
    instruction: 'Chọn cách đọc Hiragana đúng của từ được gạch chân:',
    sentence: 'あさ、パン と <u>卵</u> を たべました。',
    targetWord: '卵',
    options: ['たばこ', 'たまご', 'だまご', 'たまごう'],
    correctIndex: 1, // B. たまご
    meaning: 'Buổi sáng tôi đã ăn bánh mì và trứng.',
    takagiExplanation: 'Chữ「卵」(Trứng) đọc là「たまご」(tamago). Không có trường âm (không phải tamagou), và không được nhầm với「たばこ」(thuốc lá)!'
  },
  {
    id: 'q04',
    mondai: 1,
    mondaiTitle: 'Mondai 1: Moji-Goi (Cách đọc chữ Kanji gạch chân)',
    instruction: 'Chọn cách đọc Hiragana đúng của từ được gạch chân:',
    sentence: 'この <u>部屋</u> は あかるい です。',
    targetWord: '部屋',
    options: ['へや', 'べや', 'えや', 'へやま'],
    correctIndex: 0, // A. へや
    meaning: 'Căn phòng này rất sáng sủa.',
    takagiExplanation: 'Chữ「部屋」(Căn phòng) đọc là「へや」(heya). Chữ 部 khi đứng một mình hay trong từ này giữ âm trong là へ, không biến thành べya đâu nhé!'
  },

  // --------------------------------------------------------------------------
  // PHẦN 2: KANJI (NHÌN TỪ HIRAGANA -> CHỌN CHỮ KANJI ĐÚNG) - 4 CÂU
  // --------------------------------------------------------------------------
  {
    id: 'q05',
    mondai: 2,
    mondaiTitle: 'Mondai 2: Kanji (Chọn chữ Hán tương ứng)',
    instruction: 'Chọn chữ Kanji đúng của từ được gạch chân:',
    sentence: 'あした、レストラン で ごはん を <u>たべます</u>。',
    targetWord: 'たべます',
    options: ['飲みます', '食べます', '見ます', '行きます'],
    correctIndex: 1, // B. 食べます
    meaning: 'Ngày mai tôi sẽ ăn cơm ở nhà hàng.',
    takagiExplanation: 'Động từ "Ăn" là chữ THỰC「食」trong「食べます」. Chữ A là chữ ẨM「飲」(Uống), chữ C là KIẾN「見」(Nhìn), chữ D là HÀNH「行」(Đi). Không được nhầm giữa Ăn và Uống!'
  },
  {
    id: 'q06',
    mondai: 2,
    mondaiTitle: 'Mondai 2: Kanji (Chọn chữ Hán tương ứng)',
    instruction: 'Chọn chữ Kanji đúng của từ được gạch chân:',
    sentence: 'のど が かわきましたから、冷たい <u>みず</u> を ください。',
    targetWord: 'みず',
    options: ['氷', '永', '水', '木'],
    correctIndex: 2, // C. 水
    meaning: 'Vì khát nước nên xin hãy cho tôi nước lạnh.',
    takagiExplanation: 'Nước là chữ THỦY「水」. Chú ý: Chữ 氷 có thêm dấu phẩy ở góc trên là chữ BĂNG (nước đá), còn chữ 木 là MỘC (cây cối). Nhìn kỹ từng nét phẩy nhé!'
  },
  {
    id: 'q07',
    mondai: 2,
    mondaiTitle: 'Mondai 2: Kanji (Chọn chữ Hán tương ứng)',
    instruction: 'Chọn chữ Kanji đúng của từ được gạch chân:',
    sentence: 'わたし の いえ に かわいい <u>いぬ</u> が います。',
    targetWord: 'いぬ',
    options: ['太', '犬', '大', '天'],
    correctIndex: 1, // B. 犬
    meaning: 'Ở nhà tôi có một chú chó rất đáng yêu.',
    takagiExplanation: 'Con chó là chữ KHUYỂN「犬」, có dấu chấm ở trên vai phải! Chữ A「太」là chữ THÁI (béo) dấu chấm ở dưới bụng, chữ C「大」là chữ ĐẠI (to lớn) không có chấm nào!'
  },
  {
    id: 'q08',
    mondai: 2,
    mondaiTitle: 'Mondai 2: Kanji (Chọn chữ Hán tương ứng)',
    instruction: 'Chọn chữ Kanji đúng của từ được gạch chân:',
    sentence: 'まいしゅう、にほんご の <u>ほん</u> を よみます。',
    targetWord: 'ほん',
    options: ['木', '本', '体', '休'],
    correctIndex: 1, // B. 本
    meaning: 'Mỗi tuần tôi đều đọc sách tiếng Nhật.',
    takagiExplanation: 'Cuốn sách là chữ BẢN「本」với một nét gạch ngang ở gốc cây. Chữ A là 木 (cây cối), chữ D là 休 (nghỉ ngơi - người tựa vào gốc cây).'
  },

  // --------------------------------------------------------------------------
  // PHẦN 3: BUNPOU (NGỮ PHÁP & TRỢ TỪ N5) - 4 CÂU
  // --------------------------------------------------------------------------
  {
    id: 'q09',
    mondai: 3,
    mondaiTitle: 'Mondai 3: Bunpou (Ngữ pháp & Trợ từ điền vào chỗ trống)',
    instruction: 'Chọn từ hoặc trợ từ thích hợp nhất điền vào (   ):',
    sentence: 'わたし は まいにち としょかん (   ) べんきょうします。',
    targetWord: '(   )',
    options: ['に', 'で', 'を', 'へ'],
    correctIndex: 1, // B. で
    meaning: 'Mỗi ngày tôi đều học bài ở thư viện.',
    takagiExplanation: 'Thư viện là nơi DIỄN RA HÀNH ĐỘNG HỌC BÀI, bắt buộc phải dùng trợ từ「で」! Rất nhiều bạn chọn nhầm「に」vì dịch máy móc chữ "ở" trong tiếng Việt!'
  },
  {
    id: 'q10',
    mondai: 3,
    mondaiTitle: 'Mondai 3: Bunpou (Ngữ pháp & Trợ từ điền vào chỗ trống)',
    instruction: 'Chọn từ hoặc trợ từ thích hợp nhất điền vào (   ):',
    sentence: 'まいあさ、わたし は ７じ (   ) おきます。',
    targetWord: '(   )',
    options: ['に', 'で', 'を', 'から'],
    correctIndex: 0, // A. に
    meaning: 'Mỗi sáng tôi thức dậy vào lúc 7 giờ.',
    takagiExplanation: 'Thời gian có con số cụ thể (7 giờ, ngày 15, tháng 4) làm mốc thực hiện hành động bắt buộc đi với trợ từ「に」. Không dùng「で」chỉ thời gian!'
  },
  {
    id: 'q11',
    mondai: 3,
    mondaiTitle: 'Mondai 3: Bunpou (Ngữ pháp & Trợ từ điền vào chỗ trống)',
    instruction: 'Chọn từ hoặc trợ từ thích hợp nhất điền vào (   ):',
    sentence: 'にほん の さくら を (   ) ことが ありますか。',
    targetWord: '(   )',
    options: ['みる', 'みた', 'みます', 'みて'],
    correctIndex: 1, // B. みた
    meaning: 'Bạn đã từng nhìn thấy hoa anh đào Nhật Bản chưa?',
    takagiExplanation: 'Mẫu câu diễn tả kinh nghiệm đã từng làm gì là:「V-た ことがあります」. Động từ 見ます chia sang thể Ta là「みた」! Không dùng thể từ điển hay thể ます!'
  },
  {
    id: 'q12',
    mondai: 3,
    mondaiTitle: 'Mondai 3: Bunpou (Ngữ pháp & Trợ từ điền vào chỗ trống)',
    instruction: 'Chọn từ hoặc trợ từ thích hợp nhất điền vào (   ):',
    sentence: 'きょうしつ に たなかせんせい (   ) います。',
    targetWord: '(   )',
    options: ['を', 'が', 'で', 'は'],
    correctIndex: 1, // B. が
    meaning: 'Trong lớp học có thầy Tanaka.',
    takagiExplanation: 'Cấu trúc chỉ sự tồn tại: [Địa điểm] に [Đối tượng] が います/あります. Đối tượng tồn tại phải đi với trợ từ「が」, không bao giờ dùng「を」với います!'
  },

  // --------------------------------------------------------------------------
  // PHẦN 4: CHOUKAI (NGHE HIỂU ĐỐI THOẠI ÂM THANH) - 3 CÂU
  // --------------------------------------------------------------------------
  {
    id: 'q13',
    mondai: 4,
    mondaiTitle: 'Mondai 4: Choukai (Nghe hiểu đối thoại Audio)',
    instruction: 'Bấm nút "🔊 Bấm Nghe Đoạn Hội Thoại" và chọn câu trả lời đúng:',
    sentence: '🎧 [Đoạn đối thoại giá tiền cuốn sách]',
    audioScript: 'おとこのひと：すみません、この本はいくらですか。おんなのひと：それは、ごひゃくえんですよ。もんだい：本はいくらですか。',
    displayQuestion: 'Q: 本は いくら ですか。(Cuốn sách giá bao nhiêu?)',
    options: ['500えん', '5000えん', '1500えん', '50えん'],
    correctIndex: 0, // A. 500えん
    meaning: 'Người nam: "Xin lỗi, cuốn sách này giá bao nhiêu ạ?" - Người nữ: "Cái đó 500 yên bạn nhé." -> Câu hỏi: Cuốn sách giá bao nhiêu?',
    takagiExplanation: 'Người bán hàng trả lời rõ ràng:「ごひゃくえん」(500 yên). Số 500 đọc là go-hyaku. Nếu chọn 5000 là nhầm sang go-sen rồi!'
  },
  {
    id: 'q14',
    mondai: 4,
    mondaiTitle: 'Mondai 4: Choukai (Nghe hiểu đối thoại Audio)',
    instruction: 'Bấm nút "🔊 Bấm Nghe Đoạn Hội Thoại" và chọn câu trả lời đúng:',
    sentence: '🎧 [Đoạn đối thoại về kế hoạch ngày mai]',
    audioScript: 'おとこのひと：あした、いっしょに映画を見ませんか。おんなのひと：あしたは、ちょっと…。アルバイトがありますから。もんだい：おんなのひとは、あした何をしますか。',
    displayQuestion: 'Q: おんなのひと は あした 何を しますか。(Người phụ nữ ngày mai sẽ làm gì?)',
    options: ['えいが を みます', 'アルバイト を します', 'やすみます', 'りょこう に いきます'],
    correctIndex: 1, // B. アルバイト を します
    meaning: 'Người nam: "Ngày mai cùng đi xem phim nhé?" - Người nữ: "Ngày mai thì hơi... vì tôi có lịch làm thêm rồi." -> Câu hỏi: Người phụ nữ ngày mai làm gì?',
    takagiExplanation: 'Người phụ nữ đã khéo léo từ chối lời mời xem phim bằng câu:「あしたはちょっと…アルバイトがありますから」(Ngày mai tôi bận đi làm thêm rồi). Đáp án đúng là B!'
  },
  {
    id: 'q15',
    mondai: 4,
    mondaiTitle: 'Mondai 4: Choukai (Nghe hiểu đối thoại Audio)',
    instruction: 'Bấm nút "🔊 Bấm Nghe Đoạn Hội Thoại" và chọn câu trả lời đúng:',
    sentence: '🎧 [Đoạn đối thoại ngày Chủ Nhật]',
    audioScript: 'おんなのひと：たなかさん、日曜日にどこへ行きましたか。おとこのひと：どこも行きませんでした。うちでゆっくり休みました。もんだい：たなかさんは、日曜日に何をしましたか。',
    displayQuestion: 'Q: たなかさん は 日曜日 に 何を しましたか。(Chủ nhật Tanaka đã làm gì?)',
    options: ['うみ へ いきました', 'うち で やすみました', 'デパート で かいもの を しました', 'かいしゃ で はたらきました'],
    correctIndex: 1, // B. うち で やすみました
    meaning: 'Người nữ: "Anh Tanaka, chủ nhật anh đã đi đâu thế?" - Tanaka: "Tôi chẳng đi đâu cả. Tôi nghỉ ngơi thong thả ở nhà." -> Câu hỏi: Tanaka làm gì?',
    takagiExplanation: 'Tanaka đã nói:「どこも行きませんでした。うちでゆっくり休みました」(Không đi đâu cả, ở nhà nghỉ ngơi thong thả). Do đó đáp án chuẩn là B!'
  }
];

// JLPT N4 Mock Exam (20 questions across 5 Mondai)
const JLPT_N4_MOCK_EXAM = [
  {
    "id": "n4_q01",
    "mondai": 1,
    "mondaiTitle": "Mondai 1: 漢字の読み方 (Cách đọc chữ Kanji gạch chân)",
    "instruction": "Chọn cách đọc Hiragana đúng của từ được gạch chân:",
    "sentence": "妹は <u>毎週</u> プールへ 通っています。",
    "targetWord": "毎週",
    "options": [
      "まいしゅう",
      "まいしゅ",
      "まいにち",
      "まいげつ"
    ],
    "correctIndex": 0,
    "meaning": "Em gái tôi mỗi tuần đều đi đến bể bơi.",
    "takagiExplanation": "Chữ「毎週」(mỗi tuần) có trường âm「まいしゅう」(maishuu). Bẫy âm ngắn まいしゅ là lỗi rất nhiều thí sinh N4 chủ quan mắc phải!"
  },
  {
    "id": "n4_q02",
    "mondai": 1,
    "mondaiTitle": "Mondai 1: 漢字の読み方 (Cách đọc chữ Kanji gạch chân)",
    "instruction": "Chọn cách đọc Hiragana đúng của từ được gạch chân:",
    "sentence": "この 計画に <u>反対</u> する 人は いません。",
    "targetWord": "反対",
    "options": [
      "はんだい",
      "はんたい",
      "ほんたい",
      "はんてい"
    ],
    "correctIndex": 1,
    "meaning": "Không có ai phản đối kế hoạch này cả.",
    "takagiExplanation": "Bẫy âm đục Dakuten! Chữ「反対」(phản đối) đọc là「はんたい」(hantai) âm trong, chữ 対 (đối) ở đây đọc là たい chứ KHÔNG PHẢI âm đục だい!"
  },
  {
    "id": "n4_q03",
    "mondai": 1,
    "mondaiTitle": "Mondai 1: 漢字の読み方 (Cách đọc chữ Kanji gạch chân)",
    "instruction": "Chọn cách đọc Hiragana đúng của từ được gạch chân:",
    "sentence": "彼と <u>知り合って</u> もう 5年に なります。",
    "targetWord": "知り合って",
    "options": [
      "ちりあって",
      "とりあって",
      "しりあって",
      "しりかって"
    ],
    "correctIndex": 2,
    "meaning": "Tôi quen biết anh ấy đến nay đã được 5 năm rồi.",
    "takagiExplanation": "Động từ ghép「知り合います」(quen biết nhau) chia thể て là「しりあって」(shiriatte). Chữ 知る đọc là しる, không được nhầm với âm On ち!"
  },
  {
    "id": "n4_q04",
    "mondai": 1,
    "mondaiTitle": "Mondai 1: 漢字の読み方 (Cách đọc chữ Kanji gạch chân)",
    "instruction": "Chọn cách đọc Hiragana đúng của từ được gạch chân:",
    "sentence": "地震の ときは、グラウンドへ <u>避難</u> してください。",
    "targetWord": "避難",
    "options": [
      "ひなん",
      "ひだん",
      "びなん",
      "へなん"
    ],
    "correctIndex": 0,
    "meaning": "Khi có động đất, xin hãy sơ tán ra sân trường.",
    "takagiExplanation": "Chữ「避難」(lánh nạn, sơ tán) đọc chuẩn là「ひなん」(hinan). Cả 2 chữ Hán đều là âm trong, không có âm đục び hay だ!"
  },
  {
    "id": "n4_q05",
    "mondai": 2,
    "mondaiTitle": "Mondai 2: 文字の書き方 (Chọn Kanji / Katakana đúng)",
    "instruction": "Chọn chữ Kanji đúng cho từ Hiragana được gạch chân:",
    "sentence": "駅の前で 友達に 荷物を <u>わたしました</u>。",
    "targetWord": "わたしました",
    "options": [
      "抜しました",
      "渡しました",
      "移しました",
      "訪しました"
    ],
    "correctIndex": 1,
    "meaning": "Tôi đã trao hành lý cho bạn ở trước cửa ga.",
    "takagiExplanation": "Động từ「わたします」(trao đưa) viết chữ Hán là「渡」(Độ trong vượt sông, trao tay), có bộ Ba Chấm Thủy 氵 bên trái. Chữ 抜 (Bạt - rút ra) hay 移 (Di - di chuyển) là bẫy dạng chữ na ná!"
  },
  {
    "id": "n4_q06",
    "mondai": 2,
    "mondaiTitle": "Mondai 2: 文字の書き方 (Chọn Kanji / Katakana đúng)",
    "instruction": "Chọn cách viết Kanji đúng cho từ Hiragana được gạch chân:",
    "sentence": "田中先生は 素晴らしい <u>さくひん</u> を 作られました。",
    "targetWord": "さくひん",
    "options": [
      "作本",
      "作品",
      "昨品",
      "作口"
    ],
    "correctIndex": 1,
    "meaning": "Cô Tanaka đã sáng tác một tác phẩm vô cùng tuyệt vời.",
    "takagiExplanation": "Từ「さくひん」(tác phẩm) viết là「作品」(Tác + Phẩm - bộ Khẩu xếp chồng). Đừng nhầm chữ 作 (Tác) với 昨 (Tối trong hôm qua)! Đi thi gạch chân chữ 作 mà chọn 昨 là bị trừ điểm ngay!"
  },
  {
    "id": "n4_q07",
    "mondai": 2,
    "mondaiTitle": "Mondai 2: 文字の書き方 (Chọn Kanji / Katakana đúng)",
    "instruction": "Chọn cách viết Kanji đúng cho từ Hiragana được gạch chân:",
    "sentence": "その ニュースは 今夜 テレビで <u>ほうそう</u> されます。",
    "targetWord": "ほうそう",
    "options": [
      "放送",
      "報送",
      "放争",
      "法送"
    ],
    "correctIndex": 0,
    "meaning": "Bản tin đó sẽ được phát sóng trên truyền hình tối nay.",
    "takagiExplanation": "Chữ「ほうそう」(phát sóng, truyền thanh) là「放送」(Phóng + Tống). Rất nhiều bạn nhầm sang chữ 報 (Báo trong thông báo)! Nhớ kỹ: Phát sóng là 放 (Phóng thích tín hiệu ra không trung)!"
  },
  {
    "id": "n4_q08",
    "mondai": 2,
    "mondaiTitle": "Mondai 2: 文字の書き方 (Chọn Kanji / Katakana đúng)",
    "instruction": "Chọn từ Katakana viết chuẩn nhất cho đồ vật gạch chân:",
    "sentence": "旅行会社で ツアーの <u>tờ rơi giới thiệu</u> を もらいました。",
    "targetWord": "tờ rơi giới thiệu",
    "options": [
      "パンフレット",
      "ハンフレット",
      "パソフレット",
      "パンフッレト"
    ],
    "correctIndex": 0,
    "meaning": "Tôi đã lấy tập sách tờ rơi quảng cáo tour du lịch ở công ty lữ hành.",
    "takagiExplanation": "Bẫy Katakana kinh điển:「パンフレット」(pamphlet). Nhầm chữ パ (Handakuten) với ハ, nhầm ン với ソ, hoặc đặt sai âm ngắt ッ!"
  },
  {
    "id": "n4_q09",
    "mondai": 3,
    "mondaiTitle": "Mondai 3: 文脈規定 (Điền từ hợp ngữ cảnh)",
    "instruction": "Chọn từ vựng thích hợp nhất điền vào chỗ trống （　　）:",
    "sentence": "台所から なんだか カレーの いい（　　）が しますね。",
    "targetWord": "いいにおい",
    "options": [
      "あじ",
      "におい",
      "おと",
      "こえ"
    ],
    "correctIndex": 1,
    "meaning": "Từ trong bếp thoang thoảng phát ra mùi cà ri thơm nức nhỉ.",
    "takagiExplanation": "Bài 47 Minna N4: Nhận biết cảm quan bằng giác quan! Mùi hương thơm thì phải đi với「においが します」(có mùi). Còn「味が します」là có vị,「音が します」là có tiếng động,「声が します」là có tiếng người nói!"
  },
  {
    "id": "n4_q10",
    "mondai": 3,
    "mondaiTitle": "Mondai 3: 文脈規定 (Điền từ hợp ngữ cảnh)",
    "instruction": "Chọn dạng động từ thích hợp nhất điền vào chỗ trống （　　）:",
    "sentence": "バスは たった今（　　）ところですから、走っても 間に合いません。",
    "targetWord": "出たところ",
    "options": [
      "出る",
      "出た",
      "出ている",
      "出ます"
    ],
    "correctIndex": 1,
    "meaning": "Xe buýt vừa mới xuất phát tức thì xong, giờ có chạy cũng không kịp nữa đâu.",
    "takagiExplanation": "Bài 46 Minna N4: Mẫu câu thời điểm! Đã có phó từ「たった今」(vừa mới tức thì) thì BẮT BUỘC động từ phải chia thể quá khứ「V-たところだ」! Còn V-るところだ là sắp sửa, V-ているところだ là đang trong lúc."
  },
  {
    "id": "n4_q11",
    "mondai": 3,
    "mondaiTitle": "Mondai 3: 文脈規定 (Điền từ hợp ngữ cảnh)",
    "instruction": "Chọn từ khiêm nhường thích hợp nhất điền vào chỗ trống （　　）:",
    "sentence": "先生、今 お時間は よろしいでしょうか。少し（　　）たい ことが ございます。",
    "targetWord": "伺いたい",
    "options": [
      "おっしゃい",
      "召し上がり",
      "伺い",
      "参り"
    ],
    "correctIndex": 2,
    "meaning": "Thưa cô, bây giờ cô có tiện không ạ? Em có điều muốn thưa hỏi cô đôi lời ạ.",
    "takagiExplanation": "Bài 50 Minna N4: Khiêm nhường ngữ! Học sinh muốn hỏi giáo viên thì dùng「伺います」(うかがいます - khiêm nhường của 聞きます/尋ねます). Còn おっしゃいます và 召し上がります là Tôn kính ngữ (chỉ hành động của đối phương), không được dùng cho bản thân mình!"
  },
  {
    "id": "n4_q12",
    "mondai": 3,
    "mondaiTitle": "Mondai 3: 文脈規定 (Điền từ hợp ngữ cảnh)",
    "instruction": "Chọn động từ thích hợp nhất điền vào chỗ trống （　　）:",
    "sentence": "急に 雨が 激しく なってきたので、傘を（　　）ました。",
    "targetWord": "さしました",
    "options": [
      "かけ",
      "はき",
      "さし",
      "つけ"
    ],
    "correctIndex": 2,
    "meaning": "Bỗng nhiên mưa rào to quá nên tôi đã che ô.",
    "takagiExplanation": "Bài 47 Minna N4: Đi với cái ô (傘) thì động từ giương ô, che ô bắt buộc dùng「傘をさします」(さす). Tuyệt đối không dùng かけます (đeo kính) hay はきます (xỏ giày)!"
  },
  {
    "id": "n4_q13",
    "mondai": 4,
    "mondaiTitle": "Mondai 4: 言い換え類義 (Chọn câu có cùng ý nghĩa)",
    "instruction": "Chọn câu có ý nghĩa gần nhất với câu được cho:",
    "sentence": "田中さんは 先月 <u>婚約しました</u>。",
    "targetWord": "婚約しました",
    "options": [
      "田中さんは 先月 結婚する 約束を しました。",
      "田中さんは 先月 結婚式を 挙げました。",
      "田中さんは 先月 恋人と 別れました。",
      "田中さんは 先月 新しい 友達が できました。"
    ],
    "correctIndex": 0,
    "meaning": "Anh Tanaka đã đính hôn vào tháng trước.",
    "takagiExplanation": "Bài 47 Minna N4:「婚約する」(đính hôn) =「結婚する約束をする」(hứa hẹn kết hôn). Đính hôn là lập lời ước hẹn trước, chưa phải là làm đám cưới (結婚式を挙げる)!"
  },
  {
    "id": "n4_q14",
    "mondai": 4,
    "mondaiTitle": "Mondai 4: 言い換え類義 (Chọn câu có cùng ý nghĩa)",
    "instruction": "Chọn câu có ý nghĩa gần nhất với câu được cho:",
    "sentence": "山田さんの 家へ 行きましたが、<u>留守でした</u>。",
    "targetWord": "留守でした",
    "options": [
      "山田さんは 家で 寝ていました。",
      "山田さんは 家に いませんでした。",
      "山田さんは 忙しく 働いていました。",
      "山田さんは 友達と 話していました。"
    ],
    "correctIndex": 1,
    "meaning": "Tôi đã đến nhà anh Yamada nhưng anh ấy vắng nhà.",
    "takagiExplanation": "Bài 46 Minna N4:「留守」(るす) nghĩa là vắng nhà =「家に いませんでした」(không có ở nhà)!"
  },
  {
    "id": "n4_q15",
    "mondai": 4,
    "mondaiTitle": "Mondai 4: 言い換え類義 (Chọn câu có cùng ý nghĩa)",
    "instruction": "Chọn câu có ý nghĩa gần nhất với câu được cho:",
    "sentence": "社長は その 資料を <u>ご覧になりました</u>。",
    "targetWord": "ご覧になりました",
    "options": [
      "社長は その 資料を 見せました。",
      "社長は その 資料を 書きました。",
      "社長は その 資料を 見ました。",
      "社長は その 資料を 買いました。"
    ],
    "correctIndex": 2,
    "meaning": "Giám đốc đã xem qua tập tài liệu đó rồi.",
    "takagiExplanation": "Bài 49 Minna N4: Tôn kính ngữ đặc biệt!「ご覧になります」chính là Tôn kính ngữ của động từ「見ます」(xem, nhìn)!"
  },
  {
    "id": "n4_q16",
    "mondai": 4,
    "mondaiTitle": "Mondai 4: 言い換え類義 (Chọn câu có cùng ý nghĩa)",
    "instruction": "Chọn câu có ý nghĩa gần nhất với câu được cho:",
    "sentence": "私は 明日 先生の 研究室へ <u>参ります</u>。",
    "targetWord": "参ります",
    "options": [
      "私は 明日 先生の 研究室へ 行きます。",
      "私は 明日 先生の 研究室から 帰ります。",
      "先生は 明日 研究室へ 来られます。",
      "私は 明日 先生の 研究室に 泊まります。"
    ],
    "correctIndex": 0,
    "meaning": "Ngày mai tôi xin phép được đến phòng nghiên cứu của cô giáo.",
    "takagiExplanation": "Bài 50 Minna N4: Khiêm nhường ngữ đặc biệt!「参ります」(まいります) là Khiêm nhường ngữ của「行きます / 来ます」(đi/đến) khi nói về hành động của chính mình!"
  },
  {
    "id": "n4_q17",
    "mondai": 5,
    "mondaiTitle": "Mondai 5: ことばの使い方 (Cách dùng từ đúng nhất)",
    "instruction": "Chọn câu sử dụng từ 「たった今」 chính xác và tự nhiên nhất:",
    "sentence": "Từ cần xét: 「たった今」",
    "targetWord": "たった今",
    "options": [
      "父は たった今 会社から 帰って 来ました。",
      "たった今から 宿題を 始めましょう。",
      "明日は たった今 雨が 降るでしょう。",
      "たった今 来週の スケジュールを 立てます。"
    ],
    "correctIndex": 0,
    "meaning": "Bố tôi vừa mới đi làm về tức thì.",
    "takagiExplanation": "Bài 46 Minna N4: Phó từ「たった今」có nghĩa là vừa mới tích tắc tức thì, luôn đi với động từ thì quá khứ「V-ました / V-たばかり / V-たところ」. Không dùng cho tương lai hay thì hiện tại!"
  },
  {
    "id": "n4_q18",
    "mondai": 5,
    "mondaiTitle": "Mondai 5: ことばの使い方 (Cách dùng từ đúng nhất)",
    "instruction": "Chọn câu sử dụng từ 「遠慮なく」 chính xác và tự nhiên nhất:",
    "sentence": "Từ cần xét: 「遠慮なく」",
    "targetWord": "遠慮なく",
    "options": [
      "どうぞ 遠慮なく たくさん 召し上がって ください。",
      "明日は 遠慮なく 学校を 休みます。",
      "試験の ときは 遠慮なく 集中してください。",
      "雨が 遠慮なく 激しく 降っています。"
    ],
    "correctIndex": 0,
    "meaning": "Xin mời quý khách đừng khách sáo, cứ dùng thật nhiều vào nhé.",
    "takagiExplanation": "Bài 49 Minna N4:「遠慮なく」(không ngần ngại, đừng khách sáo) dùng khi mời mọc, khuyên người khác cứ tự nhiên đón nhận sự hiếu khách chu đáo của mình!"
  },
  {
    "id": "n4_q19",
    "mondai": 5,
    "mondaiTitle": "Mondai 5: ことばの使い方 (Bẫy Kính Ngữ N4 Tối Kỵ)",
    "instruction": "【BẪY KÍNH NGỮ N4】Chọn câu tiếng Nhật LỊCH SỰ VÀ ĐÚNG NGỮ PHÁP NHẤT khi một học viên nói về việc học tập của bản thân mình:",
    "sentence": "Tình huống: Học trò nói về việc học tiếng Nhật của chính mình trước mặt giáo viên:",
    "targetWord": "Học tập bản thân",
    "options": [
      "私は 毎日 日本語を 勉強しております。",
      "私は 毎日 日本語を ご勉強しています。",
      "先生は 毎日 日本語を 勉強いたします。",
      "私は 毎日 日本語を ご覧になります。"
    ],
    "correctIndex": 0,
    "meaning": "Dạ thưa cô, em mỗi ngày đều chuyên tâm học tiếng Nhật ạ.",
    "takagiExplanation": "BẪY TỬ THẦN CỦA KÍNH NGỮ N4! Rất nhiều người nhầm lẫn đem mẫu「ご + Hán tự + します」áp dụng bừa bãi thành「*ご勉強しています」! TUYỆT ĐỐI SAI! Mẫu「ご...します」chỉ áp dụng khi hành động hướng tới người khác (như ご案内します). Còn học tập là việc tự thân của mình, phải dùng động từ thường và hạ đuôi khiêm nhường:「勉強しております / 勉強いたします」!"
  },
  {
    "id": "n4_q20",
    "mondai": 5,
    "mondaiTitle": "Mondai 5: ことばの使い方 (Cách dùng từ đúng nhất)",
    "instruction": "Chọn câu sử dụng mẫu xin phép sai khiến 「～させていただけませんか」 chính xác nhất:",
    "sentence": "Tình huống: Nhân viên xin phép sếp cho về sớm vì bị sốt:",
    "targetWord": "～させていただけませんか",
    "options": [
      "熱が ありますので、今日は 早く 帰らせて いただけませんか。",
      "熱が ありますので、今日は 早く 帰られて いただけませんか。",
      "熱が ありますので、部長を 早く 帰らせて いただけませんか。",
      "熱が ありますので、今日は 早く 帰ることに しました。"
    ],
    "correctIndex": 0,
    "meaning": "Vì em bị sốt, hôm nay sếp có thể vui lòng cho phép em về sớm được không ạ?",
    "takagiExplanation": "Bài 48 Minna N4: Đỉnh cao xin phép lịch sự trong công sở Nhật Bản:「Động từ thể Sai khiến + ていただけませんか」! 帰る (nhóm 1) -> thể sai khiến là 帰らせる -> 帰らせていただけませんか (Xin ngài hãy cho phép tôi được về)!"
  }
];


class JLPTMockTestModule {
  constructor() {
    this.currentLevel = "N5";
    this.questions = JLPT_N5_MOCK_EXAM;
    this.currentIndex = 0;
    this.userAnswers = {};
    this.timer = null;
    this.timeLeft = 600;   // 10 phút = 600 giây
    this.isExamStarted = false;
    this.isSubmitted = false;
    this.finalScore = 0;
    this.correctCount = 0;
  }

  init() {
    this.render();
  }

  // --------------------------------------------------------------------------
  // GIAO DIỆN CHÍNH CỦA TAB THI THỬ JLPT N5
  // --------------------------------------------------------------------------
  selectLevel(level) {
    if (this.isExamStarted) {
      if (!confirm('Bạn có chắc muốn chuyển đề thi khác không? Tiến trình làm bài hiện tại sẽ bị hủy.')) return;
      clearInterval(this.timer);
    }
    this.currentLevel = (level && level.toUpperCase() === 'N4') ? 'N4' : 'N5';
    this.questions = this.currentLevel === 'N4' ? JLPT_N4_MOCK_EXAM : JLPT_N5_MOCK_EXAM;
    this.timeLeft = this.currentLevel === 'N4' ? 900 : 600;
    this.isExamStarted = false;
    this.isSubmitted = false;
    this.currentIndex = 0;
    this.userAnswers = {};
    this.render();
  }

  render() {
    const container = document.getElementById('mock-test-container');
    if (!container) return;

    if (!this.isExamStarted) {
      this.renderWelcomeScreen(container);
    } else if (this.isSubmitted) {
      this.renderResultScreen(container);
    } else {
      this.renderExamHall(container);
    }
  }

  // MÀN HÌNH CHÀO MỪNG & HƯỚNG DẪN THI
  renderWelcomeScreen(container) {
    const isN4 = this.currentLevel === 'N4';
    const totalQ = isN4 ? 20 : 15;
    const timeMinutes = isN4 ? 15 : 10;

    container.innerHTML = `
      <div class="mock-welcome-card">
        <!-- Bộ chọn Cấp Độ Đề Thi (N5 vs N4) -->
        <div class="mock-level-switch-wrap" style="display: flex; justify-content: center; gap: 12px; margin-bottom: 24px;">
          <button class="btn ${!isN4 ? 'btn-primary' : 'btn-outline'}" onclick="window.mockTestModule.selectLevel('N5')" style="padding: 10px 22px; font-weight: 700; border-radius: 30px; font-size: 15px; cursor: pointer;">
            🎯 Đề Thi Thử N5 (15 Câu • 10 Phút)
          </button>
          <button class="btn ${isN4 ? 'btn-primary' : 'btn-outline'}" onclick="window.mockTestModule.selectLevel('N4')" style="padding: 10px 22px; font-weight: 700; border-radius: 30px; font-size: 15px; cursor: pointer;">
            🏆 Đề Thi Thử N4 Chuẩn 5 Mondai (20 Câu • 15 Phút)
          </button>
        </div>

        <div class="welcome-badge-header">
          <span class="exam-cert-icon">${isN4 ? '🏆' : '🎌'}</span>
          <h2>KỲ THI THỬ NĂNG LỰC TIẾNG NHẬT MINI JLPT ${this.currentLevel}</h2>
          <p class="exam-subtitle">${isN4 ? 'Chuẩn cấu trúc 5 Mondai chữ Hán & Từ vựng N4 • Bắt lỗi bẫy Kính ngữ' : 'Chuẩn cấu trúc 4 phần thi N5 • Giám thị: Cô giáo Tanaka (厳しい先生)'}</p>
        </div>

        <div class="exam-specs-grid">
          <div class="spec-card">
            <span class="spec-icon">📝</span>
            <strong>${totalQ} Câu hỏi</strong>
            <small>${isN4 ? 'Đầy đủ 5 Mondai chuẩn JLPT N4' : 'Đầy đủ 4 Mondai chuẩn đề JEES N5'}</small>
          </div>
          <div class="spec-card">
            <span class="spec-icon">⏱️</span>
            <strong>${timeMinutes} Phút</strong>
            <small>Bấm giờ đếm ngược tự động thu bài</small>
          </div>
          <div class="spec-card">
            <span class="spec-icon">💮</span>
            <strong>Mộc đỏ 合格</strong>
            <small>Đạt từ 70% trở lên để đỗ ${this.currentLevel}</small>
          </div>
          <div class="spec-card">
            <span class="spec-icon">👩‍🏫</span>
            <strong>Cô Tanaka mổ xẻ</strong>
            <small>Giải thích cặn kẽ từng bẫy đề thi</small>
          </div>
        </div>

        <div class="exam-rules-box">
          <h4>📋 Quy chế phòng thi của Cô Tanaka (${this.currentLevel}):</h4>
          ${isN4 ? `
            <ul>
              <li><strong>Mondai 1 (漢字の読み方 - 4 câu):</strong> Cách đọc Hiragana của Kanji, cẩn thận bẫy trường âm & âm đục.</li>
              <li><strong>Mondai 2 (文字の書き方 - 4 câu):</strong> Cách viết chữ Kanji & Katakana chuẩn xác, tránh nhầm bộ thủ tương đồng.</li>
              <li><strong>Mondai 3 (文脈規定 - 4 câu):</strong> Điền từ hợp ngữ cảnh, phân biệt cảm giác giác quan (mùi/vị/âm thanh) và thời điểm (ところ/ばかり).</li>
              <li><strong>Mondai 4 (言い換え類義 - 4 câu):</strong> Tìm câu đồng nghĩa tương đương, nắm chắc ý nghĩa từ vựng N4.</li>
              <li><strong>Mondai 5 (ことばの使い方 - 4 câu):</strong> Dạng bài phân loại N4 cao cấp, bẫy Kính ngữ tối kỵ (chú ý cấm kỵ dùng ご...します cho bản thân!).</li>
            </ul>
          ` : `
            <ul>
              <li><strong>Mondai 1 (Moji-Goi):</strong> 4 câu cách đọc chữ Kanji, cẩn thận bẫy âm đục và trường âm.</li>
              <li><strong>Mondai 2 (Kanji):</strong> 4 câu nhận diện chữ Hán, chú ý từng nét phẩy và nét chấm.</li>
              <li><strong>Mondai 3 (Bunpou):</strong> 4 câu ngữ pháp và trợ từ, phân biệt chính xác に / で / を.</li>
              <li><strong>Mondai 4 (Choukai):</strong> 3 câu nghe hiểu Audio, bấm nút nghe đoạn hội thoại để chọn đáp án.</li>
            </ul>
          `}
        </div>

        <div class="exam-start-actions">
          <button class="btn btn-primary btn-large btn-start-test" onclick="window.mockTestModule.startExam()">
            🚀 Bắt Đầu Làm Bài Thi ${this.currentLevel} Ngay (${timeMinutes} Phút)
          </button>
        </div>
      </div>
    `;
  }

  // BẮT ĐẦU TÍNH GIỜ VÀ MỞ BÀI THI
  startExam() {
    this.questions = this.currentLevel === "N4" ? JLPT_N4_MOCK_EXAM : JLPT_N5_MOCK_EXAM;
    this.isExamStarted = true;
    this.isSubmitted = false;
    this.currentIndex = 0;
    this.userAnswers = {};
    this.timeLeft = this.currentLevel === "N4" ? 900 : 600;

    if (window.soundSystem) window.soundSystem.playCorrect();

    if (window.mascot) {
      window.mascot.setCharacter('sensei');
      window.mascot.setMood('strict', 'Thời gian làm bài thi 10 phút bắt đầu! Đọc đề thật kỹ, không được vội vàng! 👩‍🏫', 4000);
    }

    this.startTimer();
    this.render();
  }

  startTimer() {
    this.stopTimer();
    this.timer = setInterval(() => {
      this.timeLeft--;
      this.updateTimerDisplay();

      if (this.timeLeft <= 0) {
        this.stopTimer();
        alert('⏰ ĐÃ HẾT GIỜ LÀM BÀI! Hệ thống sẽ tự động thu bài nộp cho Cô Tanaka chấm!');
        this.submitExam();
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
    this.timer = null;
  }

  quitExam() {
    if (confirm('Bạn có chắc muốn thoát phòng thi? Tiến độ làm bài hiện tại sẽ bị hủy và trở về màn hình giới thiệu.')) {
      this.stopTimer();
      this.isExamStarted = false;
      this.isSubmitted = false;
      this.render();
      if (window.soundSystem) window.soundSystem.playPop();
    }
  }

  updateTimerDisplay() {
    const timerEl = document.getElementById('mock-exam-timer');
    if (!timerEl) return;

    const mins = Math.floor(this.timeLeft / 60);
    const secs = this.timeLeft % 60;
    const timeStr = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    
    timerEl.textContent = `⏳ ${timeStr}`;
    if (this.timeLeft <= 60) {
      timerEl.classList.add('urgent-red');
    } else {
      timerEl.classList.remove('urgent-red');
    }
  }

  // GIAO DIỆN PHÒNG THI (EXAM HALL)
  renderExamHall(container) {
    const q = this.questions[this.currentIndex];
    const mins = Math.floor(this.timeLeft / 60);
    const secs = this.timeLeft % 60;
    const timeStr = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    const selectedOpt = this.userAnswers[q.id];

    container.innerHTML = `
      <div class="exam-hall-layout">
        
        <!-- CỘT TRÁI: KHU VỰC CÂU HỎI HIỆN TẠI -->
        <div class="exam-question-area">
          
          <!-- Header câu hỏi & Mondai -->
          <div class="exam-q-header">
            <div class="mondai-badge">${q.mondaiTitle}</div>
            <div class="q-counter-badge">Câu ${this.currentIndex + 1} / ${this.questions.length}</div>
          </div>

          <div class="exam-q-instruction">${q.instruction}</div>

          <!-- Nội dung câu hỏi -->
          <div class="exam-q-body">
            ${q.mondai === 4 ? `
              <div class="choukai-audio-player-box">
                <button class="btn-choukai-play" onclick="window.mockTestModule.playChoukaiAudio('${q.audioScript}')">
                  🔊 Bấm Nghe Đoạn Hội Thoại Choukai
                </button>
                <div class="audio-wave-anim">
                  <span></span><span></span><span></span><span></span><span></span>
                </div>
                <div class="choukai-q-text">${q.displayQuestion}</div>
              </div>
            ` : `
              <h2 class="exam-q-sentence">${q.sentence}</h2>
            `}
          </div>

          <!-- Danh sách 4 phương án lựa chọn A, B, C, D -->
          <div class="exam-options-grid">
            ${q.options.map((opt, idx) => {
              const letter = ['1', '2', '3', '4'][idx];
              const isChecked = selectedOpt === idx;
              return `
                <button class="exam-opt-item ${isChecked ? 'selected' : ''}" 
                        onclick="window.mockTestModule.selectAnswer('${q.id}', ${idx})">
                  <span class="opt-num">${letter}</span>
                  <span class="opt-content">${opt}</span>
                </button>
              `;
            }).join('')}
          </div>

          <!-- Thanh điều hướng nút Câu trước / Câu kế / Nộp bài / Thoát -->
          <div class="exam-nav-footer">
            <button class="btn btn-secondary" onclick="window.mockTestModule.prevQuestion()" ${this.currentIndex === 0 ? 'disabled' : ''}>
              ⬅️ Câu trước
            </button>
            
            <button class="btn btn-danger btn-submit-exam" onclick="window.mockTestModule.confirmSubmit()">
              📝 Nộp bài thi
            </button>

            <button class="btn btn-outline-danger" onclick="window.mockTestModule.quitExam()">
              ⏹️ Thoát phòng thi
            </button>

            <button class="btn btn-primary" onclick="window.mockTestModule.nextQuestion()" ${this.currentIndex === this.questions.length - 1 ? 'disabled' : ''}>
              Câu tiếp theo ➡️
            </button>
          </div>

        </div>

        <!-- CỘT PHẢI: MA TRẬN 15 CÂU HỎI & ĐỒNG HỒ ĐẾM NGƯỢC -->
        <div class="exam-sidebar-palette">
          <div class="exam-timer-box">
            <div class="timer-label">Thời gian làm bài:</div>
            <div class="timer-digits ${this.timeLeft <= 60 ? 'urgent-red' : ''}" id="mock-exam-timer">
              ⏳ ${timeStr}
            </div>
          </div>

          <div class="palette-title">Danh sách 15 câu hỏi:</div>
          <div class="question-palette-grid">
            ${this.questions.map((item, idx) => {
              const isAnswered = this.userAnswers[item.id] !== undefined;
              const isCurrent = idx === this.currentIndex;
              return `
                <button class="palette-num-btn ${isAnswered ? 'answered' : ''} ${isCurrent ? 'current' : ''}" 
                        onclick="window.mockTestModule.jumpToQuestion(${idx})" 
                        title="Câu ${idx + 1}">
                  ${idx + 1}
                </button>
              `;
            }).join('')}
          </div>

          <div class="palette-legend">
            <span class="legend-item"><span class="dot answered"></span> Đã chọn</span>
            <span class="legend-item"><span class="dot current"></span> Đang xem</span>
            <span class="legend-item"><span class="dot empty"></span> Chưa chọn</span>
          </div>

          <div class="exam-mascot-tip">
            👩‍🏫 <em>"Đừng để trống câu nào! Nhớ kiểm tra lại toàn bộ trước khi bấm nộp bài nhé!"</em>
          </div>
        </div>

      </div>
    `;
  }

  // PHÁT ÂM THANH ĐOẠN HỘI THOẠI CHOUKAI (CÓ NGẮT NGHỈ RÕ RÀNG)
  playChoukaiAudio(script) {
    if (!window.soundSystem) return;
    window.soundSystem.speak(script, 0.92);
  }

  selectAnswer(qId, optIndex) {
    this.userAnswers[qId] = optIndex;
    if (window.soundSystem) window.soundSystem.playPop();
    this.render();
  }

  nextQuestion() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.render();
    }
  }

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.render();
    }
  }

  jumpToQuestion(index) {
    this.currentIndex = index;
    this.render();
  }

  confirmSubmit() {
    const answeredCount = Object.keys(this.userAnswers).length;
    const total = this.questions.length;

    if (answeredCount < total) {
      const missing = total - answeredCount;
      if (!confirm(`Em vẫn còn ${missing} câu chưa chọn đáp án! Có chắc chắn muốn nộp bài sớm không? 👩‍🏫`)) {
        return;
      }
    } else {
      if (!confirm('Em có chắc chắn muốn nộp bài để Cô Tanaka chấm điểm không?')) {
        return;
      }
    }

    this.submitExam();
  }

  // CHẤM ĐIỂM & ĐÓNG DẤU MỘC ĐỎ
  submitExam() {
    clearInterval(this.timer);
    this.isSubmitted = true;

    // Tính số câu đúng
    let correct = 0;
    this.questions.forEach(q => {
      if (this.userAnswers[q.id] === q.correctIndex) {
        correct++;
      }
    });

    this.correctCount = correct;
    this.finalScore = Math.round((correct / this.questions.length) * 100);

    const isPassed = this.finalScore >= 70;

    if (isPassed) {
      if (window.soundSystem) window.soundSystem.playVictory();
      if (window.guessGame && typeof window.guessGame.launchCanvasConfetti === 'function') {
        window.guessGame.launchCanvasConfetti();
      }
      if (window.mascot) {
        window.mascot.setMood('celebrate', `OMEDETOU! Em đã đỗ kỳ thi thử N5 với ${this.finalScore}/100 điểm! 🏆🌸`, 5000);
      }
      if (window.app) {
        window.app.addExp(100);
        window.app.addCoins(30);
      }
    } else {
      if (window.soundSystem) window.soundSystem.playWrong();
      if (window.mascot) {
        window.mascot.setCharacter('sensei');
        window.mascot.setMood('strict', `Không đạt rồi! Điểm số ${this.finalScore}/100 là TRƯỢT N5! Xem lại từng câu sai ngay! 👩‍🏫`, 4500);
      }
    }

    this.render();
  }

  // MÀN HÌNH BẢNG ĐIỂM TỔNG KẾT & ĐÓNG DẤU MỘC ĐỎ
  renderResultScreen(container) {
    const isPassed = this.finalScore >= 70;
    const today = new Date().toLocaleDateString('vi-VN');

    container.innerHTML = `
      <div class="mock-result-dashboard">
        
        <!-- BẢNG ĐIỂM & MỘC ĐỎ CHỨNG NHẬN -->
        <div class="exam-cert-card ${isPassed ? 'passed' : 'failed'}">
          
          <div class="cert-watermark">JLPT ${this.currentLevel}</div>

          <!-- MỘC ĐỎ TRUYỀN THỐNG NHẬT BẢN (HANKO / INKAN STAMP) -->
          <div class="hanko-seal-stamp ${isPassed ? 'stamp-goukaku' : 'stamp-fugoukaku'}">
            <div class="stamp-circle-inner">
              <span class="stamp-top-text">日本テスト</span>
              <span class="stamp-main-text">${isPassed ? '合格' : '不合格'}</span>
              <span class="stamp-bottom-text">高木先生認</span>
            </div>
          </div>

          <div class="cert-header">
            <h2>KẾT QUẢ THI THỬ JLPT ${this.currentLevel} (BẢN ĐÁNH GIÁ)</h2>
            <p>Kỳ thi sát hạch toàn diện • Đánh giá bởi Cô giáo Tanaka (東京)</p>
          </div>

          <!-- Điểm số & Xếp loại -->
          <div class="cert-score-display">
            <div class="score-big-box">
              <span class="score-val">${this.finalScore}</span>
              <span class="score-unit">/ 100 ĐIỂM</span>
            </div>
            <div class="score-detail-pills">
              <span class="cert-pill">🎯 Số câu đúng: <strong>${this.correctCount} / ${this.questions.length}</strong></span>
              <span class="cert-pill">⏱️ Thời gian thi: <strong>${Math.floor(((this.currentLevel === "N4" ? 900 : 600) - this.timeLeft) / 60)} phút ${(600 - this.timeLeft) % 60} giây</strong></span>
              <span class="cert-pill">📅 Ngày thi: <strong>${today}</strong></span>
              <span class="cert-pill status-pill ${isPassed ? 'text-pass' : 'text-fail'}">
                ${isPassed ? '✓ KẾT QUẢ: ĐỖ (合格)' : '✗ KẾT QUẢ: TRƯỢT (不合格)'}
              </span>
            </div>
          </div>

          <!-- Lời phê của Cô Giáo Tanaka -->
          <div class="sensei-verdict-box">
            <div class="verdict-avatar">👩‍🏫</div>
            <div class="verdict-content">
              <h4>Lời phê duyệt của Cô giáo Tanaka:</h4>
              <p>
                ${isPassed ? 
                  `"Làm rất tốt! Đạt ${this.finalScore}/100 điểm nghĩa là em đã nắm chắc nền tảng từ vựng, Kanji và ngữ pháp N5 cơ bản. Tuy nhiên, kỳ thi thật sẽ có thêm áp lực phòng thi, đừng bao giờ tự mãn mà hãy tiếp tục rèn luyện thêm Kaiwa và Choukai nhé!"` :
                  `"Chậc chậc! Chỉ đạt được ${this.finalScore}/100 điểm là TRƯỢT N5 rồi đấy! Đề thi cơ bản thế này mà vẫn nhầm trợ từ に/で, nhầm chữ Hán và nghe chưa kịp bắt từ khóa! Em phải mở ngay mục Sổ tay và Lớp khảo bài để chép phạt và ôn lại ngay lập tức!"`
                }
              </p>
            </div>
          </div>

          <div class="cert-actions-row">
            <button class="btn btn-primary btn-large" onclick="window.mockTestModule.startExam()">
              🔄 Thi thử lại lần nữa
            </button>
            <button class="btn btn-secondary btn-large" onclick="window.app.switchTab('strict-sensei')">
              👩‍🏫 Đi khảo bài cùng Cô Tanaka
            </button>
          </div>

        </div>

        <!-- DANH SÁCH CHI TIẾT 15 CÂU HỎI VÀ LỜI GIẢI CỦA CÔ TAKAGI -->
        <div class="exam-review-section">
          <h3 class="review-title">📋 Bảng Mổ Xẻ Chi Tiết Từng Câu Hỏi & Lỗi Sai:</h3>

          <div class="review-questions-list">
            ${this.questions.map((q, idx) => {
              const userAns = this.userAnswers[q.id];
              const isCorrect = userAns === q.correctIndex;
              const userText = userAns !== undefined ? q.options[userAns] : 'Chưa chọn';
              const correctText = q.options[q.correctIndex];

              return `
                <div class="review-q-card ${isCorrect ? 'card-correct' : 'card-wrong'}">
                  <div class="review-q-header">
                    <span class="review-q-number">Câu ${idx + 1} (${q.mondaiTitle})</span>
                    <span class="review-status-tag ${isCorrect ? 'tag-correct' : 'tag-wrong'}">
                      ${isCorrect ? '✓ Đúng (+6.7đ)' : '✗ Sai (0đ)'}
                    </span>
                  </div>

                  <div class="review-q-content">
                    <div class="review-sentence">${q.mondai === 4 ? q.displayQuestion : q.sentence}</div>
                    ${q.mondai === 4 ? `
                      <button class="btn-audio-circle-mini" onclick="window.mockTestModule.playChoukaiAudio('${q.audioScript}')" title="Nghe lại đoạn Choukai">🔊 Nghe lại đoạn hội thoại</button>
                    ` : ''}
                    <div class="review-meaning"><em>Nghĩa tiếng Việt:</em> ${q.meaning}</div>
                  </div>

                  <div class="review-answers-compare">
                    <div class="ans-col ${isCorrect ? 'text-success' : 'text-danger'}">
                      <strong>Đáp án của bạn:</strong> ${userText}
                    </div>
                    <div class="ans-col text-correct-highlight">
                      <strong>Đáp án chuẩn của đề:</strong> ${correctText}
                    </div>
                  </div>

                  <!-- Lời mổ xẻ bẫy đề thi của Cô Tanaka -->
                  <div class="review-takagi-note">
                    <strong>👩‍🏫 Cô Tanaka giải thích:</strong> ${q.takagiExplanation}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

      </div>
    `;
  }
}

// Khởi tạo instance toàn cục
window.mockTestModule = new JLPTMockTestModule();
