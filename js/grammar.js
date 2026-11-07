// ============================================================================
// MODULE GRAMMAR: KHO NGỮ PHÁP N5 CỐT LÕI & GAME SẮP XẾP CÂU (SENTENCE SCRAMBLE)
// 1. Kho 22 cấu trúc ngữ pháp N5 trọng tâm: Công thức, ví dụ có phát âm, cảnh báo lỗi Cô Tanaka
// 2. Game Ghép Câu N5: Giải cứu trợ từ, chống bẫy distractor, chấm điểm và mổ xẻ lỗi vị trí từ
// ============================================================================

// KHO DỮ LIỆU 22 CẤU TRÚC NGỮ PHÁP N5 CỐT LÕI
const JLPT_N5_GRAMMAR = [
  {
    id: 'gr_n5_01',
    category: 'cau_truc',
    title: '1. Khẳng định & Phủ định danh từ',
    formula: '[N1] は [N2] です / じゃありません',
    meaning: 'N1 là N2 / N1 không phải là N2',
    explanation: 'Trợ từ 「は」(đọc là "wa") đánh dấu chủ đề của câu. 「です」thể hiện sự lịch sự ở thì hiện tại/tương lai. Phủ định thân mật là 「じゃありません」, trang trọng hơn là 「ではありません」.',
    examples: [
      { ja: 'わたしはがくせいです。', hira: 'わたしはがくせいです', romaji: 'Watashi wa gakusei desu.', vi: 'Tôi là học sinh.' },
      { ja: 'たなかさんはせんせいじゃありません。', hira: 'たなかさんはせんせいじゃありません', romaji: 'Tanaka-san wa sensei ja arimasen.', vi: 'Anh Tanaka không phải là giáo viên.' }
    ],
    takagiWarning: 'Trợ từ 「は」ở đây TUYỆT ĐỐI KHÔNG đọc là "ha"! Rất nhiều bạn phát âm nhầm thành "ha desu" là người Nhật cười cho đấy nhé!'
  },
  {
    id: 'gr_n5_02',
    category: 'cau_truc',
    title: '2. Câu hỏi nghi vấn & Thắc mắc',
    formula: 'Câu + か',
    meaning: '... có phải không? / ... hả?',
    explanation: 'Thêm trợ từ 「か」vào cuối câu để biến câu khẳng định thành câu hỏi. Trong văn viết tiếng Nhật, không cần thêm dấu chấm hỏi (?) mà chỉ cần dấu chấm tròn (。).',
    examples: [
      { ja: 'あなたはにほんじんですか。', hira: 'あなたはにほんじんですか', romaji: 'Anata wa nihonjin desu ka.', vi: 'Bạn có phải là người Nhật không?' },
      { ja: 'はい、そうです。/ いいえ、ちがいます。', hira: 'はい、そうです。/ いいえ、ちがいます', romaji: 'Hai, sou desu. / Iie, chigaimasu.', vi: 'Vâng, đúng vậy. / Không, không phải.' }
    ],
    takagiWarning: 'Khi trả lời câu hỏi "Có phải không?", đừng nói mỗi "Hai" cộc lốc! Người Tokyo luôn đáp đầy đủ "Hai, sou desu" để giữ phép lịch sự!'
  },
  {
    id: 'gr_n5_03',
    category: 'cau_truc',
    title: '3. Nối danh từ & Quan hệ sở hữu',
    formula: '[N1] の [N2]',
    meaning: 'N2 của N1 / N2 thuộc về N1',
    explanation: 'Trợ từ 「の」nối hai danh từ với nhau. N1 bổ nghĩa cho N2. Có thể diễn đạt sở hữu (sách của tôi), xuất xứ (xe của Nhật), hoặc thể loại (sách tiếng Nhật).',
    examples: [
      { ja: 'これはわたしのほんです。', hira: 'これはわたしのほんです', romaji: 'Kore wa watashi no hon desu.', vi: 'Đây là cuốn sách của tôi.' },
      { ja: 'にほんごのせんせいです。', hira: 'にほんごのせんせいです', romaji: 'Nihongo no sensei desu.', vi: 'Là giáo viên dạy tiếng Nhật.' }
    ],
    takagiWarning: 'Trật tự từ trong tiếng Nhật NGƯỢC với tiếng Việt: "Sách của tôi" trong tiếng Nhật phải nói là "Tôi の Sách" (わたしのほん)!'
  },
  {
    id: 'gr_n5_04',
    category: 'tro_tu',
    title: '4. Trợ từ tân ngữ trực tiếp を',
    formula: '[Danh từ] を + [Ngoại động từ]',
    meaning: 'Làm hành động tác động lên Danh từ',
    explanation: 'Trợ từ 「を」(viết là wo nhưng đọc là "o") dùng để đánh dấu đối tượng chịu tác động trực tiếp của hành động (ăn cơm, uống nước, đọc sách...).',
    examples: [
      { ja: 'ごはんをたべます。', hira: 'ごはんをたべます', romaji: 'Gohan o tabemasu.', vi: 'Tôi ăn cơm.' },
      { ja: 'みずをのみます。', hira: 'みずをのみます', romaji: 'Mizu o nomimasu.', vi: 'Tôi uống nước.' },
      { ja: 'ほんをよみます。', hira: 'ほんをよみます', romaji: 'Hon o yomimasu.', vi: 'Tôi đọc sách.' }
    ],
    takagiWarning: 'Chữ này viết là 「を」chứ không được viết là 「お」! Chỉ dùng 「を」làm trợ từ tân ngữ, không bao giờ đứng đầu một từ vựng!'
  },
  {
    id: 'gr_n5_05',
    category: 'tro_tu',
    title: '5. Trợ từ nơi chốn hành động で',
    formula: '[Địa điểm] で + [Động từ hành động]',
    meaning: 'Làm việc gì ĐÓ TẠI địa điểm nào đó',
    explanation: 'Dùng 「で」để chỉ nơi diễn ra một hành động cụ thể (học bài ở thư viện, ăn cơm ở nhà hàng, mua đồ ở siêu thị).',
    examples: [
      { ja: 'としょかんでべんきょうします。', hira: 'としょかんでべんきょうします', romaji: 'Toshokan de benkyou shimasu.', vi: 'Tôi học bài ở thư viện.' },
      { ja: 'レストランでごはんをたべます。', hira: 'レストランでごはんをたべます', romaji: 'Resutoran de gohan o tabemasu.', vi: 'Tôi ăn cơm ở nhà hàng.' }
    ],
    takagiWarning: 'LỖI KINH ĐIỂN: Cực kỳ nhiều bạn nhầm 「で」với 「に」! Nhớ kỹ: CÓ HÀNH ĐỘNG diễn ra tại nơi đó thì bắt buộc dùng 「で」!'
  },
  {
    id: 'gr_n5_06',
    category: 'tro_tu',
    title: '6. Trợ từ điểm đến & Thời gian cụ thể に',
    formula: '[Địa điểm] に 行きます / [Thời gian có số] に [Động từ]',
    meaning: 'Đi ĐẾN đâu / Làm việc gì VÀO LÚC mấy giờ',
    explanation: '1. Chỉ đích đến của các động từ di chuyển (行きます, 来ます, 帰ります).\n2. Đi kèm thời gian có con số cụ thể (7 giờ, ngày 5, tháng 4).',
    examples: [
      { ja: 'わたしはがっこうにいきます。', hira: 'わたしはがっこうにいきます', romaji: 'Watashi wa gakkou ni ikimasu.', vi: 'Tôi đi đến trường học.' },
      { ja: 'まいあさ７じにおきます。', hira: 'まいあさしちじにおきます', romaji: 'Maiasa shichi-ji ni okimasu.', vi: 'Mỗi sáng tôi thức dậy lúc 7 giờ.' }
    ],
    takagiWarning: 'Thời gian chung chung như "Hôm nay (きょう)", "Ngày mai (あした)", "Mỗi ngày (まいにち)" TUYỆT ĐỐI KHÔNG dùng 「に」!'
  },
  {
    id: 'gr_n5_07',
    category: 'tro_tu',
    title: '7. Trợ từ hướng di chuyển へ',
    formula: '[Địa điểm] へ + 行きます / 来ます / 帰ります',
    meaning: 'Hướng về / Đi về phía địa điểm nào đó',
    explanation: 'Trợ từ 「へ」(viết là he nhưng đọc là "e") nhấn mạnh hướng di chuyển của hành trình.',
    examples: [
      { ja: 'とうきょうへいきます。', hira: 'とうきょうへいきます', romaji: 'Toukyou e ikimasu.', vi: 'Tôi đi về hướng Tokyo.' },
      { ja: 'うちへかえります。', hira: 'うちへかえります', romaji: 'Uchi e kaerimasu.', vi: 'Tôi trở về nhà.' }
    ],
    takagiWarning: 'Trợ từ này viết là 「へ」(he) nhưng khi làm trợ từ bắt buộc phải phát âm là "e"! Nhớ kéo dài trường âm của Toukyou nhé!'
  },
  {
    id: 'gr_n5_08',
    category: 'tro_tu',
    title: '8. Trợ từ cùng với / và と',
    formula: '[Người] と + [Động từ] / [N1] と [N2]',
    meaning: 'Làm việc gì CÙNG VỚI ai / N1 VÀ N2',
    explanation: '1. Chỉ đối tượng cùng tham gia hành động.\n2. Liệt kê toàn bộ các danh từ.',
    examples: [
      { ja: 'ともだちとにほんへいきます。', hira: 'ともだちとにほんへいきます', romaji: 'Tomodachi to Nihon e ikimasu.', vi: 'Tôi đi Nhật cùng với bạn.' },
      { ja: 'パンとたまごをたべます。', hira: 'パンとたまごをたべます', romaji: 'Pan to tamago o tabemasu.', vi: 'Tôi ăn bánh mì và trứng.' }
    ],
    takagiWarning: 'Nếu đi một mình thì nói là 「ひとりで」(Hitori de) chứ không bao giờ được nói 「わたしと」(Watashi to) nhé!'
  },
  {
    id: 'gr_n5_09',
    category: 'tro_tu',
    title: '9. Trợ từ đồng nhất も (Cũng)',
    formula: '[N] も ...',
    meaning: 'N cũng ...',
    explanation: 'Dùng khi muốn lặp lại một thông tin tương đồng với đối tượng được nhắc trước đó. 「も」sẽ thay thế hoàn toàn cho 「は」, 「が」, 「を」.',
    examples: [
      { ja: 'わたしもベトナムじんです。', hira: 'わたしもベトナムじんです', romaji: 'Watashi mo Betonamu-jin desu.', vi: 'Tôi cũng là người Việt Nam.' },
      { ja: 'これもおいしいです。', hira: 'これもおいしいです', romaji: 'Kore mo oishii desu.', vi: 'Cái này cũng ngon.' }
    ],
    takagiWarning: 'Sai lầm phổ biến: Viết cả 「は」và 「も」thành 「はも」hoặc 「もは」! 「も」đã đứng thì gạt phăng 「は」ra ngoài!'
  },
  {
    id: 'gr_n5_10',
    category: 'tro_tu',
    title: '10. Điểm xuất phát & Đích đến: から ～ まで',
    formula: '[Thời gian/Địa điểm] から [Thời gian/Địa điểm] まで',
    meaning: 'Từ ... đến ...',
    explanation: '「から」chỉ điểm bắt đầu (thời gian hoặc không gian), 「まで」chỉ điểm kết thúc.',
    examples: [
      { ja: '９じから５じまではたらきます。', hira: 'くじからごじまではたらきます', romaji: 'Ku-ji kara go-ji made hatarakimasu.', vi: 'Tôi làm việc từ 9 giờ đến 5 giờ.' },
      { ja: 'ハノイからとうきょうまでひこうきでいきます。', hira: 'ハノイからとうきょうまでひこうきでいきます', romaji: 'Hanoi kara Toukyou made hikouki de ikimasu.', vi: 'Tôi đi bằng máy bay từ Hà Nội đến Tokyo.' }
    ],
    takagiWarning: 'Số 9 trong 9 giờ phải đọc là 「くじ」(ku-ji), tuyệt đối không được đọc là "kyuu-ji"!'
  },
  {
    id: 'gr_n5_11',
    category: 'tro_tu',
    title: '11. Trợ từ phương tiện & công cụ で',
    formula: '[Phương tiện / Công cụ / Ngôn ngữ] で + [Động từ]',
    meaning: 'Bằng phương tiện gì / Bằng dụng cụ gì / Bằng tiếng gì',
    explanation: 'Chỉ cách thức, công cụ dùng để hoàn thành một hành động.',
    examples: [
      { ja: 'バスでかいしゃへいきます。', hira: 'バスでかいしゃへいきます', romaji: 'Basu de kaisha e ikimasu.', vi: 'Tôi đi đến công ty bằng xe buýt.' },
      { ja: 'はしでごはんをたべます。', hira: 'はしでごはんをたべます', romaji: 'Hashi de gohan o tabemasu.', vi: 'Tôi ăn cơm bằng đũa.' },
      { ja: 'にほんごではなします。', hira: 'にほんごではなします', romaji: 'Nihongo de hanashimasu.', vi: 'Nói chuyện bằng tiếng Nhật.' }
    ],
    takagiWarning: 'Đi bộ thì dùng 「あるいて」(aruite), KHÔNG được dùng 「あるいてで」! Chú ý kỹ bẫy thi N5 này!'
  },
  {
    id: 'gr_n5_12',
    category: 'cau_truc',
    title: '12. Sự tồn tại của Người & Động vật: います',
    formula: '[Địa điểm] に [Người/Động vật] が います',
    meaning: 'Ở đâu đó CÓ người hoặc con vật',
    explanation: 'Dùng 「います」cho những sinh vật sống có thể tự cử động được (người, chó, mèo, chim...).',
    examples: [
      { ja: 'きょうしつにがくせいがいます。', hira: 'きょうしつにがくせいがいます', romaji: 'Kyoushitsu ni gakusei ga imasu.', vi: 'Trong lớp học có học sinh.' },
      { ja: 'にわにいぬがいます。', hira: 'にわにいぬがいます', romaji: 'Niwa ni inu ga imasu.', vi: 'Ở ngoài sân có con chó.' }
    ],
    takagiWarning: 'Nhiều bạn thấy con cá hay con chim lại dùng 「あります」! Sinh vật tự thở, tự bơi, tự chạy được bắt buộc phải dùng 「います」!'
  },
  {
    id: 'gr_n5_13',
    category: 'cau_truc',
    title: '13. Sự tồn tại của Đồ vật & Cây cối: あります',
    formula: '[Địa điểm] に [Đồ vật/Cây cối] が あります',
    meaning: 'Ở đâu đó CÓ đồ vật, cây cối, xe cộ',
    explanation: 'Dùng 「あります」cho vật vô tri vô giác, cây cối, hoa cỏ, hoặc các sự kiện (hội nghị, tiệc...).',
    examples: [
      { ja: 'つくえのうえにほんがあります。', hira: 'つくえのうえにほんがあります', romaji: 'Tsukue no ue ni hon ga arimasu.', vi: 'Trên bàn có cuốn sách.' },
      { ja: 'こうえんにさくらがあります。', hira: 'こうえんにさくらがあります', romaji: 'Kouen ni sakura ga arimasu.', vi: 'Ở công viên có cây hoa anh đào.' }
    ],
    takagiWarning: 'Cây cối tuy là sinh vật sống nhưng KHÔNG tự di chuyển được, nên trong tư duy người Nhật vẫn dùng 「あります」!'
  },
  {
    id: 'gr_n5_14',
    category: 'dong_tu',
    title: '14. Các thì lịch sự của Thể ます',
    formula: 'V-ます / V-ません / V-ました / V-ませんでした',
    meaning: 'Làm / Không làm / Đã làm / Đã không làm',
    explanation: 'Bảng thì cơ bản nhất trong giao tiếp lịch sự chuẩn mực (Desu/Masu) của người Nhật.',
    examples: [
      { ja: 'きのう、べんきょうしました。', hira: 'きのう、べんきょうしました', romaji: 'Kinou, benkyou shimashita.', vi: 'Hôm qua tôi đã học bài.' },
      { ja: 'あした、どこもいきません。', hira: 'あした、どこもいきません', romaji: 'Ashita, doko mo ikimasen.', vi: 'Ngày mai tôi không đi đâu cả.' }
    ],
    takagiWarning: 'Câu có trạng từ quá khứ như "Hôm qua (きのう)" mà đuôi động từ vẫn để 「ます」thì chắc chắn bị tôi gạch đỏ cả bài!'
  },
  {
    id: 'gr_n5_15',
    category: 'the_te',
    title: '15. Nhờ vả & Yêu cầu lịch sự: ～てください',
    formula: 'V-て + ください',
    meaning: 'Xin hãy làm V / Vui lòng làm V',
    explanation: 'Chia động từ sang Thể Te (て) rồi ghép với ください để nhờ vả một cách nhã nhặn.',
    examples: [
      { ja: 'にほんごをはなしてください。', hira: 'にほんごをはなしてください', romaji: 'Nihongo o hanashite kudasai.', vi: 'Xin hãy nói bằng tiếng Nhật.' },
      { ja: 'ちょっとまってください。', hira: 'ちょっとまってください', romaji: 'Chotto matte kudasai.', vi: 'Xin vui lòng chờ một chút.' }
    ],
    takagiWarning: 'Động từ 「まちます」(Chờ) sang thể Te là 「まって」có âm ngắt (っ), không được nói là "matite"!'
  },
  {
    id: 'gr_n5_16',
    category: 'the_te',
    title: '16. Hành động đang diễn ra: ～ています',
    formula: 'V-て + います',
    meaning: 'Đang làm V / Đang trong trạng thái V',
    explanation: '1. Diễn tả hành động đang tiến hành tại thời điểm nói.\n2. Diễn tả trạng thái kết quả còn lưu lại (kết hôn, sống ở đâu, biết ai đó).',
    examples: [
      { ja: 'いま、ごはんをたべています。', hira: 'いま、ごはんをたべています', romaji: 'Ima, gohan o tabete imasu.', vi: 'Bây giờ tôi đang ăn cơm.' },
      { ja: 'とうきょうにすんでいます。', hira: 'とうきょうにすんでいます', romaji: 'Toukyou ni sunde imasu.', vi: 'Tôi đang sinh sống ở Tokyo.' }
    ],
    takagiWarning: '"Sống ở đâu" dùng trợ từ 「に」: とうきょうにすんでいます, đừng nhầm thành trợ từ で nhé!'
  },
  {
    id: 'gr_n5_17',
    category: 'dong_tu',
    title: '17. Khuyên đừng làm gì: ～ないでください',
    formula: 'V-ない + でください',
    meaning: 'Xin đừng làm V / Vui lòng không làm V',
    explanation: 'Chia động từ sang Thể Phủ Định Ngắn (Nai-form) rồi cộng với でください.',
    examples: [
      { ja: 'ここでしゃしんをとらないでください。', hira: 'ここでしゃしんをとらないでください', romaji: 'Koko de shashin o toranaide kudasai.', vi: 'Xin đừng chụp ảnh ở đây.' },
      { ja: 'たばこをすわないでください。', hira: 'たばこをすわないでください', romaji: 'Tabako o suwanaide kudasai.', vi: 'Xin đừng hút thuốc lá.' }
    ],
    takagiWarning: 'Động từ nhóm 1 tận cùng bằng う (như すいます - hút thuốc) sang thể Nai là 「すわない」(thêm わ chứ không phải あ)!'
  },
  {
    id: 'gr_n5_18',
    category: 'dong_tu',
    title: '18. Trải nghiệm & Đã từng: ～たことがあります',
    formula: 'V-た + ことがあります',
    meaning: 'Đã từng làm V / Chưa từng làm V',
    explanation: 'Chia động từ sang Thể Quá Khứ Ngắn (Ta-form) để nói về kinh nghiệm trong đời.',
    examples: [
      { ja: 'ふじさんにのぼったことがあります。', hira: 'ふじさんにのぼったことがあります', romaji: 'Fuji-san ni nobotta koto ga arimasu.', vi: 'Tôi đã từng leo núi Phú Sĩ.' },
      { ja: 'すしをたべたことがありません。', hira: 'すしをたべたことがありません', romaji: 'Sushi o tabeta koto ga arimasen.', vi: 'Tôi chưa từng ăn món Sushi.' }
    ],
    takagiWarning: 'Leo núi dùng trợ từ 「に」(ふじさんにのぼります) vì núi là đích đến của từng bước chân!'
  },
  {
    id: 'gr_n5_19',
    category: 'dong_tu',
    title: '19. Khả năng & Năng lực: ～ことができます',
    formula: 'V-る (Thể từ điển) + ことができます',
    meaning: 'Có thể làm V / Biết làm V',
    explanation: 'Biến động từ thành một cụm danh từ bằng cách thêm 「こと」rồi đi với 「が できます」.',
    examples: [
      { ja: 'わたしはにほんごをはなすことができます。', hira: 'わたしはにほんごをはなすことができます', romaji: 'Watashi wa nihongo o hanasu koto ga dekimasu.', vi: 'Tôi có thể nói được tiếng Nhật.' },
      { ja: 'ピアノをひくことができます。', hira: 'ピアノをひくことができます', romaji: 'Piano o hiku koto ga dekimasu.', vi: 'Tôi có thể chơi đàn piano.' }
    ],
    takagiWarning: 'Trước 「こと」bắt buộc phải là THỂ TỪ ĐIỂN (Jishokei)! Tuyệt đối không để 「はなしますこと」đâu đấy!'
  },
  {
    id: 'gr_n5_20',
    category: 'cau_truc',
    title: '20. Rủ rê & Đề nghị: ～ませんか / ～ましょう',
    formula: 'V-ませんか (Rủ rê) / V-ましょう (Cùng làm nhé)',
    meaning: 'Cùng làm V với tôi không? / Chúng ta cùng làm V nhé!',
    explanation: '「～ませんか」hỏi ý kiến đối phương một cách tôn trọng, nếu đối phương đồng ý thì chốt lại bằng 「～ましょう」.',
    examples: [
      { ja: 'いっしょにおちゃをのみませんか。', hira: 'いっしょにおちゃをのみませんか', romaji: 'Issho ni ocha o nomimasen ka.', vi: 'Cùng uống trà với tôi không?' },
      { ja: 'ええ、のみましょう！', hira: 'ええ、のみましょう', romaji: 'Ee, nomimashou!', vi: 'Vâng, cùng uống nào!' }
    ],
    takagiWarning: 'Muốn mời mọc tinh tế kiểu Nhật Bản, hãy luôn dùng 「ませんか」để người nghe có đường từ chối nếu bận, đừng ép buộc!'
  },
  {
    id: 'gr_n5_21',
    category: 'dong_tu',
    title: '21. Mong muốn của bản thân: ～たいです',
    formula: 'V-bỏ ます + たいです / たくありません',
    meaning: 'Muốn làm V / Không muốn làm V',
    explanation: 'Bỏ đuôi ます rồi thêm たいです. Chỉ dùng để diễn tả ý muốn của người nói (hoặc hỏi người đối diện), không dùng để nói về mong muốn của người thứ ba.',
    examples: [
      { ja: 'にほんへいきたいです。', hira: 'にほんへいきたいです', romaji: 'Nihon e ikitai desu.', vi: 'Tôi muốn đi Nhật Bản.' },
      { ja: 'きょうはなにもたべたくありません。', hira: 'きょうはなにもたべたくありません', romaji: 'Kyou wa nani mo tabetaku arimasen.', vi: 'Hôm nay tôi không muốn ăn gì cả.' }
    ],
    takagiWarning: 'Với người lớn tuổi hơn hoặc cấp trên, không được hỏi trực tiếp "Sensei wa ikitai desu ka?", như thế là thất lễ trong văn hóa Nhật!'
  },
  {
    id: 'gr_n5_22',
    category: 'the_te',
    title: '22. Xin phép: ～てもいいですか & Cấm đoán: ～てはいけません',
    formula: 'V-て + もいいですか / V-て + はいけません',
    meaning: 'Làm V có được không? / Không được phép làm V',
    explanation: 'Dùng để xin phép thực hiện hành động, và đưa ra quy tắc cấm đoán nghiêm khắc.',
    examples: [
      { ja: 'しゃしんをとってもいいですか。', hira: 'しゃしんをとってもいいですか', romaji: 'Shashin o totte mo ii desu ka.', vi: 'Tôi chụp ảnh có được không ạ?' },
      { ja: 'ここでたばこをすってはいけません。', hira: 'ここでたばこをすってはいけません', romaji: 'Koko de tabako o sutte wa ikemasen.', vi: 'Không được hút thuốc ở đây.' }
    ],
    takagiWarning: 'Chữ 「は」trong 「てはいけません」được đọc là "wa", mang sắc thái quy định cấm đoán nghiêm khắc!'
  }
];

// KHO CÂU HỎI GAME SẮP XẾP CÂU (SENTENCE SCRAMBLE) - CÓ BẪY TRỢ TỪ
const SCRAMBLE_CHALLENGES = [
  {
    id: 'scramble_01',
    vi: 'Tôi ăn cơm ở nhà.',
    correctTokens: ['わたしは', 'うちで', 'ごはんを', 'たべます'],
    distractors: ['に', 'が'],
    grammarTip: 'Địa điểm diễn ra hành động ăn cơm dùng trợ từ 「で」, tân ngữ cơm dùng 「を」.',
    particleFocus: 'で vs に',
    explanation: 'Ở nhà là nơi diễn ra hành động ăn cơm, phải dùng 「うちで」chứ không được dùng 「うちに」!'
  },
  {
    id: 'scramble_02',
    vi: 'Mỗi sáng tôi thức dậy lúc 7 giờ.',
    correctTokens: ['まいあさ', '７じに', 'おきます'],
    distractors: ['で', 'を'],
    grammarTip: 'Thời gian có con số cụ thể (7 giờ) bắt buộc phải đi với trợ từ 「に」.',
    particleFocus: 'に thời gian',
    explanation: 'Thời gian có giờ giấc chính xác như 7 giờ phải đi với trợ từ 「に」, không dùng 「で」!'
  },
  {
    id: 'scramble_03',
    vi: 'Tôi đi đến trường học bằng xe buýt.',
    correctTokens: ['わたしは', 'バスで', 'がっこうに', 'いきます'],
    distractors: ['を', 'へで'],
    grammarTip: 'Phương tiện di chuyển dùng 「で」, đích đến dùng 「に」hoặc 「へ」, động từ ở cuối câu.',
    particleFocus: 'で phương tiện & に điểm đến',
    explanation: 'Xe buýt là phương tiện di chuyển phải đi với 「で」(バスで), đích đến đi với 「に」(がっこうに)!'
  },
  {
    id: 'scramble_04',
    vi: 'Trong lớp học có thầy giáo.',
    correctTokens: ['きょうしつに', 'せんせいが', 'います'],
    distractors: ['あります', 'で'],
    grammarTip: 'Thầy giáo là con người (sinh vật sống) nên phải dùng 「います」và địa điểm tồn tại dùng 「に」.',
    particleFocus: 'います vs あります',
    explanation: 'Thầy giáo là người biết cử động và giảng bài, sao em lại chọn 「あります」như đồ vật thế hả?!'
  },
  {
    id: 'scramble_05',
    vi: 'Xin hãy nói bằng tiếng Nhật.',
    correctTokens: ['にほんごで', 'はなして', 'ください'],
    distractors: ['を', 'に'],
    grammarTip: 'Công cụ ngôn ngữ dùng 「で」, yêu cầu lịch sự dùng thể Te + ください.',
    particleFocus: 'で ngôn ngữ & てください',
    explanation: 'Nói bằng thứ tiếng gì là công cụ ngôn ngữ, phải dùng 「にほんごで」chứ không dùng 「を」!'
  },
  {
    id: 'scramble_06',
    vi: 'Hôm qua tôi đã học bài cùng với bạn bè.',
    correctTokens: ['きのう', 'ともだちと', 'べんきょうしました'],
    distractors: ['ます', 'に'],
    grammarTip: 'Có "Hôm qua (きのう)" thì đuôi phải là quá khứ 「ました」, cùng ai đó dùng 「と」.',
    particleFocus: 'Thì quá khứ ました & と',
    explanation: 'Đã có trạng từ hôm qua (きのう) thì động từ phải chia quá khứ 「べんきょうしました」!'
  },
  {
    id: 'scramble_07',
    vi: 'Bạn có cùng uống trà với tôi không?',
    correctTokens: ['いっしょに', 'おちゃを', 'のみませんか'],
    distractors: ['に', 'ましょう'],
    grammarTip: 'Rủ rê lịch sự hỏi ý kiến dùng 「～ませんか」, tân ngữ trà dùng 「を」.',
    particleFocus: 'V-ませんか',
    explanation: 'Rủ rê người khác một cách nhã nhặn thì hỏi bằng 「のみませんか」, chốt cùng làm mới dùng 「ましょう」!'
  },
  {
    id: 'scramble_08',
    vi: 'Tôi có thể nói được tiếng Nhật.',
    correctTokens: ['わたしは', 'にほんごを', 'はなすことが', 'できます'],
    distractors: ['はなします', 'に'],
    grammarTip: 'Trước ことができます bắt buộc phải là Động từ thể từ điển (Jishokei: はなす).',
    particleFocus: 'V-る ことができます',
    explanation: 'Sau trợ từ và trước 「こと」bắt buộc dùng thể từ điển 「はなす」, không được dùng 「はなします」!'
  },
  {
    id: 'scramble_09',
    vi: 'Ở công viên có cây hoa anh đào.',
    correctTokens: ['こうえんに', 'さくらが', 'あります'],
    distractors: ['います', 'を'],
    grammarTip: 'Cây cối đứng yên một chỗ, người Nhật coi là thực vật vô tri nên dùng 「あります」.',
    particleFocus: 'あります cây cối',
    explanation: 'Cây hoa anh đào không biết đi lại như người, trong tiếng Nhật bắt buộc dùng 「あります」!'
  },
  {
    id: 'scramble_10',
    vi: 'Tôi đã từng leo núi Phú Sĩ.',
    correctTokens: ['ふじさんに', 'のぼったことが', 'あります'],
    distractors: ['のぼる', 'を'],
    grammarTip: 'Nói về trải nghiệm trong đời dùng Thể Ta (Quá khứ ngắn) + ことがあります.',
    particleFocus: 'V-た ことがあります',
    explanation: 'Diễn tả trải nghiệm từng làm thì động từ phải chia thể Ta 「のぼった」!'
  }
];

class JapaneseGrammarModule {
  constructor() {
    this.currentTabMode = 'handbook'; // 'handbook' (kho ngữ pháp) hoặc 'scramble' (game ghép câu)
    this.selectedGrammarCategory = 'all';
    this.searchTerm = '';

    // Trạng thái Game Sắp Xếp Câu
    this.challenges = [...SCRAMBLE_CHALLENGES];
    this.currentChallengeIndex = 0;
    this.userSlots = [];     // Các token người chơi đã chọn lên khay câu
    this.availableTokens = []; // Các token còn lại trong khay lựa chọn
    this.score = 0;
    this.combo = 0;
    this.gameFinished = false;
  }

  init() {
    this.loadChallenge(0);
    this.render();
  }

  setTabMode(mode) {
    this.currentTabMode = mode;
    this.render();
    if (window.soundSystem) window.soundSystem.playPop();
  }

  // --------------------------------------------------------------------------
  // GIAO DIỆN CHÍNH CỦA TAB NGỮ PHÁP & GHÉP CÂU
  // --------------------------------------------------------------------------
  render() {
    const container = document.getElementById('grammar-scramble-container');
    if (!container) return;

    container.innerHTML = `
      <div class="grammar-main-wrapper">
        
        <!-- THANH CHỌN 2 CHẾ ĐỘ: KHO NGỮ PHÁP VS GAME GHÉP CÂU -->
        <div class="grammar-nav-switcher">
          <button class="nav-switch-btn ${this.currentTabMode === 'handbook' ? 'active' : ''}" 
                  onclick="window.grammarModule.setTabMode('handbook')">
            📖 Kho 22 Ngữ Pháp N5 Cốt Lõi
          </button>
          <button class="nav-switch-btn ${this.currentTabMode === 'scramble' ? 'active' : ''}" 
                  onclick="window.grammarModule.setTabMode('scramble')">
            🧩 Game Ghép Câu N5 (Giải Cứu Trợ Từ)
          </button>
        </div>

        <!-- PHẦN 1: KHO NGỮ PHÁP N5 -->
        <div class="grammar-handbook-view ${this.currentTabMode === 'handbook' ? '' : 'hidden'}" id="grammar-handbook-view">
          <div class="grammar-filter-bar">
            <div class="grammar-search-wrap">
              <input 
                type="text" 
                class="search-input" 
                placeholder="🔍 Tìm kiếm ngữ pháp N5 (ví dụ: は, を, に, で, thể て, たい, から...)" 
                oninput="window.grammarModule.onSearchGrammar(this.value)"
              >
            </div>
            <div class="grammar-cat-chips">
              <button class="cat-chip ${this.selectedGrammarCategory === 'all' ? 'active' : ''}" onclick="window.grammarModule.filterCategory('all')">Tất cả (22)</button>
              <button class="cat-chip ${this.selectedGrammarCategory === 'tro_tu' ? 'active' : ''}" onclick="window.grammarModule.filterCategory('tro_tu')">Trợ từ cốt lõi</button>
              <button class="cat-chip ${this.selectedGrammarCategory === 'dong_tu' ? 'active' : ''}" onclick="window.grammarModule.filterCategory('dong_tu')">Chia thể động từ</button>
              <button class="cat-chip ${this.selectedGrammarCategory === 'the_te' ? 'active' : ''}" onclick="window.grammarModule.filterCategory('the_te')">Mẫu câu Thể て</button>
              <button class="cat-chip ${this.selectedGrammarCategory === 'cau_truc' ? 'active' : ''}" onclick="window.grammarModule.filterCategory('cau_truc')">Mẫu câu giao tiếp</button>
            </div>
          </div>

          <div class="grammar-cards-grid" id="grammar-cards-grid">
            <!-- Render danh sách thẻ ngữ pháp -->
          </div>
        </div>

        <!-- PHẦN 2: GAME SẮP XẾP CÂU (SENTENCE SCRAMBLE) -->
        <div class="grammar-scramble-view ${this.currentTabMode === 'scramble' ? '' : 'hidden'}" id="grammar-scramble-view">
          <div class="scramble-game-container" id="scramble-game-container">
            <!-- Render game container -->
          </div>
        </div>

      </div>
    `;

    if (this.currentTabMode === 'handbook') {
      this.renderGrammarList();
    } else {
      this.renderScrambleUI();
    }
  }

  // --------------------------------------------------------------------------
  // RENDER DANH SÁCH 22 CẤU TRÚC NGỮ PHÁP N5
  // --------------------------------------------------------------------------
  onSearchGrammar(val) {
    this.searchTerm = (val || '').toLowerCase().trim();
    this.renderGrammarList();
  }

  filterCategory(cat) {
    this.selectedGrammarCategory = cat;
    document.querySelectorAll('.cat-chip').forEach(c => {
      c.classList.toggle('active', c.textContent.includes(cat) || (cat === 'all' && c.textContent.includes('Tất cả')));
    });
    this.renderGrammarList();
    if (window.soundSystem) window.soundSystem.playPop();
  }

  renderGrammarList() {
    const grid = document.getElementById('grammar-cards-grid');
    if (!grid) return;

    const term = this.searchTerm;
    const filtered = JLPT_N5_GRAMMAR.filter(g => {
      if (this.selectedGrammarCategory !== 'all' && g.category !== this.selectedGrammarCategory) {
        return false;
      }
      if (term) {
        const titleMatch = g.title.toLowerCase().includes(term);
        const formulaMatch = g.formula.toLowerCase().includes(term);
        const meaningMatch = g.meaning.toLowerCase().includes(term);
        if (!titleMatch && !formulaMatch && !meaningMatch) return false;
      }
      return true;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="vault-empty-state" style="grid-column: 1 / -1;">
          <div class="empty-icon">🔍</div>
          <h4>Không tìm thấy cấu trúc ngữ pháp nào phù hợp!</h4>
          <p>Thử tìm với từ khóa trợ từ khác (ví dụ: は, を, に, で, thể て, たい, あります...)</p>
        </div>
      `;
      return;
    }

    let html = '';
    filtered.forEach(g => {
      html += `
        <div class="grammar-card-item">
          <div class="grammar-card-top">
            <h3 class="grammar-title">${g.title}</h3>
            <span class="grammar-meaning-badge">${g.meaning}</span>
          </div>

          <!-- Công thức đóng khung nổi bật -->
          <div class="grammar-formula-box">
            <code>${g.formula}</code>
          </div>

          <p class="grammar-explanation">${g.explanation.replace(/\n/g, '<br>')}</p>

          <!-- Câu ví dụ thực tế có nút phát âm -->
          <div class="grammar-examples-list">
            <div class="examples-header">📝 Ví dụ chuẩn người Tokyo:</div>
            ${g.examples.map(ex => `
              <div class="example-single-row">
                <button class="btn-audio-circle-mini" onclick="window.soundSystem.speak('${ex.hira}', 0.9)" title="Nghe phát âm">🔊</button>
                <div class="example-text-wrap">
                  <span class="ex-ja">${ex.ja}</span>
                  <span class="ex-vi">(${ex.vi})</span>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Cảnh báo lỗi Cô Giáo Tanaka Hay Mắng -->
          <div class="grammar-takagi-alert">
            <div class="takagi-alert-title">
              <span>👩‍🏫</span> <strong>LỖI CÔ TAKAGI HAY MẮNG:</strong>
            </div>
            <p class="takagi-alert-desc">${g.takagiWarning}</p>
          </div>
        </div>
      `;
    });

    grid.innerHTML = html;
  }

  // --------------------------------------------------------------------------
  // GAME SẮP XẾP CÂU (SENTENCE SCRAMBLE - GIẢI CỨU TRỢ TỪ)
  // --------------------------------------------------------------------------
  loadChallenge(index) {
    if (index >= this.challenges.length) {
      this.gameFinished = true;
      return;
    }

    this.currentChallengeIndex = index;
    const challenge = this.challenges[index];
    this.userSlots = [];

    // Gộp các token đúng và token gây nhiễu (distractors) rồi xáo trộn
    const allTokens = [...challenge.correctTokens, ...(challenge.distractors || [])];
    this.availableTokens = allTokens.map((t, i) => ({
      id: `token_${i}_${t}`,
      text: t
    })).sort(() => Math.random() - 0.5);
  }

  renderScrambleUI() {
    const area = document.getElementById('scramble-game-container');
    if (!area) return;

    if (this.gameFinished) {
      area.innerHTML = `
        <div class="game-over-panel victory">
          <div class="result-trophy">🏆</div>
          <h2 class="result-title">XUẤT SẮC! BẬC THẦY NGỮ PHÁP N5!</h2>
          <p>Bạn đã chinh phục toàn bộ các câu đố trợ từ và sắp xếp ngữ pháp hóc búa của Cô Tanaka!</p>
          <div class="stats-summary">
            <div class="stat-box">
              <span class="stat-number">${this.score}</span>
              <span class="stat-label">Tổng Điểm ⭐</span>
            </div>
            <div class="stat-box">
              <span class="stat-number">${this.challenges.length}/${this.challenges.length}</span>
              <span class="stat-label">Câu Hoàn Thành 📖</span>
            </div>
          </div>
          <div class="game-over-actions">
            <button class="btn btn-primary btn-large" onclick="window.grammarModule.restartGame()">
              🔄 Chơi lại từ đầu
            </button>
            <button class="btn btn-secondary btn-large" onclick="window.grammarModule.setTabMode('handbook')">
              📖 Đọc lại sổ tay ngữ pháp
            </button>
          </div>
        </div>
      `;
      return;
    }

    const challenge = this.challenges[this.currentChallengeIndex];

    area.innerHTML = `
      <!-- HUD ĐIỂM SỐ & TIẾN ĐỘ -->
      <div class="scramble-hud">
        <span class="hud-item">Câu số: <strong>${this.currentChallengeIndex + 1} / ${this.challenges.length}</strong></span>
        <span class="hud-item combo-badge ${this.combo >= 2 ? 'on-fire' : ''}">🔥 Combo: x${this.combo}</span>
        <span class="hud-item">⭐ Điểm: <strong>${this.score}</strong></span>
        <span class="hud-item focus-badge">🎯 Trọng tâm: ${challenge.particleFocus}</span>
      </div>

      <!-- ĐỀ BÀI: NGHĨA TIẾNG VIỆT -->
      <div class="scramble-prompt-card">
        <span class="prompt-badge">Hãy sắp xếp các từ thành câu tiếng Nhật mang nghĩa:</span>
        <h2 class="prompt-vietnamese">"${challenge.vi}"</h2>
      </div>

      <!-- KHAY 1: CÂU ĐANG GHÉP (SLOTS / DROPZONE) -->
      <div class="scramble-dropzone-box">
        <div class="dropzone-label">
          <span>Khay ghép câu của bạn:</span>
          <small class="hint-small">(Click vào thẻ đã đặt để gỡ trả lại khay dưới)</small>
        </div>
        <div class="dropzone-slots" id="scramble-user-slots">
          ${this.userSlots.length === 0 ? '<div class="slot-placeholder">👆 Chọn các từ và trợ từ ở khay bên dưới để đưa lên đây...</div>' : ''}
          ${this.userSlots.map((tok, idx) => `
            <button class="token-chip in-slot" onclick="window.grammarModule.removeFromSlot(${idx})">
              ${tok.text}
              <span class="token-remove-x">✕</span>
            </button>
          `).join('')}
        </div>
      </div>

      <!-- KHAY 2: KHO TỪ VỰNG & TRỢ TỪ (WORD POOL - CÓ TRỢ TỪ GÂY NHIỄU) -->
      <div class="scramble-wordpool-box">
        <div class="wordpool-label">Kho từ & Trợ từ lựa chọn (chú ý tránh bẫy trợ từ gây nhiễu):</div>
        <div class="wordpool-tokens" id="scramble-pool-tokens">
          ${this.availableTokens.map((tok, idx) => `
            <button class="token-chip in-pool" onclick="window.grammarModule.addToSlot(${idx})">
              ${tok.text}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- CÁC NÚT ĐIỀU KHIỂN & KIỂM TRA -->
      <div class="scramble-actions-bar">
        <button class="btn btn-secondary" onclick="window.grammarModule.resetCurrentChallenge()">
          🔄 Xếp lại từ đầu
        </button>
        <button class="btn btn-secondary" onclick="window.grammarModule.showSenseiHint()">
          💡 Gợi ý của Cô Tanaka
        </button>
        <button class="btn btn-primary btn-large btn-check-sentence" onclick="window.grammarModule.checkSentence()">
          🎯 Kiểm Tra Đáp Án ➔
        </button>
      </div>

      <!-- BONG BÓNG NHẬN XÉT CỦA CÔ GIÁO TAKAGI (MỔ XẺ LỖI SAI NGỮ PHÁP) -->
      <div class="scramble-sensei-feedback hidden" id="scramble-sensei-feedback">
        <!-- Render phê bình của cô giáo -->
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // THAO TÁC THÊM / BỚT THẺ TỪ VÀO KHAY CÂU
  // --------------------------------------------------------------------------
  addToSlot(index) {
    if (index >= this.availableTokens.length) return;
    const token = this.availableTokens.splice(index, 1)[0];
    this.userSlots.push(token);

    if (window.soundSystem) window.soundSystem.playPop();
    this.renderScrambleUI();
  }

  removeFromSlot(index) {
    if (index >= this.userSlots.length) return;
    const token = this.userSlots.splice(index, 1)[0];
    this.availableTokens.push(token);

    if (window.soundSystem) window.soundSystem.playPop();
    this.renderScrambleUI();
  }

  resetCurrentChallenge() {
    this.loadChallenge(this.currentChallengeIndex);
    this.renderScrambleUI();
    if (window.soundSystem) window.soundSystem.playPop();
  }

  restartGame() {
    this.score = 0;
    this.combo = 0;
    this.gameFinished = false;
    this.loadChallenge(0);
    this.renderScrambleUI();
  }

  showSenseiHint() {
    const challenge = this.challenges[this.currentChallengeIndex];
    if (window.mascot) {
      window.mascot.setMood('talking', `Gợi ý của cô: "${challenge.grammarTip}" 💡`, 4500);
    }
  }

  // --------------------------------------------------------------------------
  // KIỂM TRA ĐÁP ÁN & MỔ XẺ LỖI SAI CỦA CÔ TAKAGI
  // --------------------------------------------------------------------------
  checkSentence() {
    const feedbackBox = document.getElementById('scramble-sensei-feedback');
    if (!feedbackBox) return;

    const challenge = this.challenges[this.currentChallengeIndex];
    const userString = this.userSlots.map(t => t.text).join('');
    const correctString = challenge.correctTokens.join('');

    // Nếu chưa ghép đủ từ
    if (this.userSlots.length === 0) {
      alert('Em chưa đưa từ nào lên khay ghép câu cả! Hãy click chọn từ trước nhé! 👩‍🏫');
      return;
    }

    if (userString === correctString) {
      // ĐÁP ÁN ĐÚNG 100%!
      this.combo++;
      const gainedScore = 100 + this.combo * 25;
      this.score += gainedScore;

      if (window.soundSystem) {
        if (this.combo >= 2) {
          window.soundSystem.playCombo(this.combo);
        } else {
          window.soundSystem.playCorrect();
        }
        // Phát âm câu hoàn chỉnh
        window.soundSystem.speak(correctString, 0.95);
      }

      if (window.mascot) {
        window.mascot.setMood('happy', `Chính xác rồi! "${correctString}"! Câu ghép rất tự nhiên! 🌸✨`, 3000);
      }

      if (window.app) {
        window.app.addExp(25);
        window.app.addCoins(5);
      }

      feedbackBox.className = 'scramble-sensei-feedback feedback-correct';
      feedbackBox.classList.remove('hidden');
      feedbackBox.innerHTML = `
        <div class="feedback-inner">
          <div class="feedback-badge-top">🎉 CHÍNH XÁC HOÀN TOÀN! (+${gainedScore} ĐIỂM)</div>
          <h3 class="feedback-correct-sentence">${correctString}</h3>
          <p class="feedback-explanation">💡 <strong>Phân tích ngữ pháp:</strong> ${challenge.grammarTip}</p>
          <div class="feedback-actions">
            <button class="btn btn-secondary btn-sm" onclick="window.soundSystem.speak('${correctString}', 0.9)">
              🔊 Nghe lại câu
            </button>
            <button class="btn btn-primary btn-sm" onclick="window.grammarModule.nextChallenge()">
              Câu tiếp theo ➔
            </button>
          </div>
        </div>
      `;
    } else {
      // ĐÁP ÁN SAI - CÔ TAKAGI MỔ XẺ LỖI
      this.combo = 0;
      if (window.soundSystem) window.soundSystem.playWrong();

      // Kiểm tra xem lỗi do đâu
      let specificCritique = challenge.explanation;

      // Kiểm tra nếu để động từ sai vị trí
      const lastCorrectToken = challenge.correctTokens[challenge.correctTokens.length - 1];
      const lastUserToken = this.userSlots[this.userSlots.length - 1]?.text;

      if (lastUserToken !== lastCorrectToken) {
        specificCritique = `Quy tắc vàng của tiếng Nhật: ĐỘNG TỪ BẮT BUỘC ĐỨNG Ở CUỐI CÂU! Em lại để "${lastUserToken}" ở cuối là ngữ pháp lộn xộn hết cả rồi!`;
      }

      // Kiểm tra nếu dính bẫy distractor
      const usedDistractor = challenge.distractors.find(d => this.userSlots.some(tok => tok.text === d));
      if (usedDistractor) {
        specificCritique = `Trúng bẫy trợ từ gây nhiễu rồi! Em nhét trợ từ 「${usedDistractor}」vào câu là sai bản chất ngữ pháp! ${challenge.explanation}`;
      }

      if (window.mascot) {
        window.mascot.setCharacter('sensei');
        window.mascot.setMood('strict', `Chưa chính xác! Cô Tanaka nhắc: Cần xem lại trợ từ và vị trí động từ! 👩‍🏫`, 3500);
      }

      feedbackBox.className = 'scramble-sensei-feedback feedback-wrong';
      feedbackBox.classList.remove('hidden');
      feedbackBox.innerHTML = `
        <div class="feedback-inner">
          <div class="feedback-badge-top">⚠️ CÔ TAKAGI CHỈ RA LỖI SAI:</div>
          <p class="feedback-words">${specificCritique}</p>
          <div class="feedback-prompt-again">
            Em hãy gỡ các từ sai xuống khay và thử ghép lại cho chuẩn nhé!
          </div>
          <div class="feedback-actions">
            <button class="btn btn-secondary btn-sm" onclick="window.grammarModule.resetCurrentChallenge()">
              🔄 Xếp lại câu này
            </button>
          </div>
        </div>
      `;
    }
  }

  nextChallenge() {
    this.loadChallenge(this.currentChallengeIndex + 1);
    this.renderScrambleUI();
  }
}

// Khởi tạo instance toàn cục
window.grammarModule = new JapaneseGrammarModule();
