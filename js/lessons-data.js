// ============================================================================
// MODULE LESSONS DATA: LỘ TRÌNH 25 BÀI JLPT N5 (LEVEL 1 -> 25)
// VÀ LỘ TRÌNH MỞ RỘNG JLPT N4 (BÀI 26 -> 50)
// Chuẩn cấu trúc Minna no Nihongo & JEES Japan Foundation
// ============================================================================

const LESSONS_N5 = [
  // --------------------------------------------------------------------------
  // BÀI 1: CHÀO HỎI, QUỐC GIA & GIỚI THIỆU BẢN THÂN
  // --------------------------------------------------------------------------
  {
    lessonNumber: 1,
    level: 'N5',
    title: 'Bài 1: Giới thiệu bản thân & Nghề nghiệp',
    topicVi: 'Giới thiệu bản thân & Nghề nghiệp',
    icon: '👋',
    grammarPoint: 'Ngữ pháp cốt lõi: ～は～ (Khẳng định/Phủ định/Nghi vấn), ～も～ (Cũng là)',
    vocab: [
      {
        id: 'n5_l01_01',
        lesson: 1,
        lessonId: 1,
        level: 'N5',
        kanji: '私',
        hanViet: 'Tư',
        hiragana: 'わたし',
        romaji: 'watashi',
        meaning: 'tôi',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="38" r="16" fill="#1864AB"/><path d="M26 80 C26 62 74 62 74 80 Z" fill="#339AF0"/></svg>`,
        example: {
          ja: '私はベトナム人です。',
          hira: 'わたしはベトナムじんです。',
          vi: 'Tôi là người Việt Nam.'
        }
      },
      {
        id: 'n5_l01_02',
        lesson: 1,
        lessonId: 1,
        level: 'N5',
        kanji: '私たち',
        hanViet: 'Tư',
        hiragana: 'わたしたち',
        romaji: 'watashitachi',
        meaning: 'chúng ta, chúng tôi',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="38" cy="38" r="13" fill="#1864AB"/><circle cx="62" cy="38" r="13" fill="#339AF0"/><path d="M20 80 C20 64 56 64 56 80 Z" fill="#1864AB"/><path d="M44 80 C44 64 80 64 80 80 Z" fill="#339AF0"/></svg>`,
        example: {
          ja: '私たちは学生です。',
          hira: 'わたしたちはがくせいです。',
          vi: 'Chúng tôi là học sinh, sinh viên.'
        }
      },
      {
        id: 'n5_l01_03',
        lesson: 1,
        lessonId: 1,
        level: 'N5',
        kanji: 'あなた',
        hanViet: 'Quý Phương',
        hiragana: 'あなた',
        romaji: 'anata',
        meaning: 'bạn',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF0F6"/><circle cx="50" cy="38" r="16" fill="#D6336C"/><path d="M26 80 C26 62 74 62 74 80 Z" fill="#F783AC"/></svg>`,
        example: {
          ja: 'あなたはお元気ですか。',
          hira: 'あなたはおげんきですか。',
          vi: 'Bạn có khỏe không?'
        }
      },
      {
        id: 'n5_l01_04',
        lesson: 1,
        lessonId: 1,
        level: 'N5',
        kanji: 'あの人',
        hanViet: 'Nhân',
        hiragana: 'あのひと',
        romaji: 'ano hito',
        meaning: 'người kia',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><circle cx="45" cy="38" r="14" fill="#7048E8"/><path d="M24 78 C24 62 66 62 66 78 Z" fill="#845EF7"/><path d="M68 45 L82 35 M82 35 L76 33 M82 35 L80 41" stroke="#E03131" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`,
        example: {
          ja: 'あの人はだれですか。',
          hira: 'あのひとはだれですか。',
          vi: 'Người kia là ai thế?'
        }
      },
      {
        id: 'n5_l01_05',
        lesson: 1,
        lessonId: 1,
        level: 'N5',
        kanji: 'あの方',
        hanViet: 'Phương',
        hiragana: 'あのかた',
        romaji: 'ano kata',
        meaning: 'vị kia',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="45" cy="38" r="14" fill="#0CA678"/><path d="M24 78 C24 62 66 62 66 78 Z" fill="#20C997"/><polygon points="45,18 41,26 50,26" fill="#F59F00"/></svg>`,
        example: {
          ja: 'あの方はどなたですか。',
          hira: 'あのかたはどなたですか。',
          vi: 'Vị kia là vị nào thế ạ?'
        }
      },
      {
        id: 'n5_l01_06',
        lesson: 1,
        lessonId: 1,
        level: 'N5',
        kanji: '皆さん',
        hanViet: 'Giai',
        hiragana: 'みなさん',
        romaji: 'minasan',
        meaning: 'các bạn, mọi người',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><circle cx="32" cy="36" r="10" fill="#F59F00"/><circle cx="50" cy="32" r="11" fill="#E67700"/><circle cx="68" cy="36" r="10" fill="#F59F00"/><path d="M18 78 C18 64 46 64 46 78 Z" fill="#F59F00"/><path d="M34 76 C34 60 66 60 66 76 Z" fill="#E67700"/><path d="M54 78 C54 64 82 64 82 78 Z" fill="#F59F00"/></svg>`,
        example: {
          ja: '皆さん、おはようございます。',
          hira: 'みなさん、おはようございます。',
          vi: 'Chào buổi sáng các bạn, mọi người.'
        }
      },
      {
        id: 'n5_l01_07',
        lesson: 1,
        lessonId: 1,
        level: 'N5',
        kanji: '～さん',
        hanViet: 'Sam',
        hiragana: '～さん',
        romaji: '-san',
        meaning: 'anh, chị',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F1F3F5"/><rect x="25" y="32" width="50" height="36" rx="8" fill="#495057"/><text x="50" y="56" font-size="20" font-weight="900" fill="#FFF" text-anchor="middle">SAN</text></svg>`,
        example: {
          ja: '田中さんは日本人です。',
          hira: 'たなかさんはにほんじんです。',
          vi: 'Anh Tanaka là người Nhật.'
        }
      },
      {
        id: 'n5_l01_08',
        lesson: 1,
        lessonId: 1,
        level: 'N5',
        kanji: '～ちゃん',
        hanViet: 'Chan',
        hiragana: '～ちゃん',
        romaji: '-chan',
        meaning: 'bé gái',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF0F6"/><circle cx="50" cy="45" r="18" fill="#FF8787"/><path d="M32 35 Q50 20 68 35" stroke="#E64980" stroke-width="4" fill="none"/><polygon points="34,26 42,32 34,38" fill="#F783AC"/><polygon points="66,26 58,32 66,38" fill="#F783AC"/></svg>`,
        example: {
          ja: 'さくらちゃんは７歳です。',
          hira: 'さくらちゃんはななさいです。',
          vi: 'Bé gái Sakura được 7 tuổi.'
        }
      },
      {
        id: 'n5_l01_09',
        lesson: 1,
        lessonId: 1,
        level: 'N5',
        kanji: '～くん',
        hanViet: 'Quân',
        hiragana: '～くん',
        romaji: '-kun',
        meaning: 'bé trai',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="45" r="18" fill="#4DABF7"/><rect x="36" y="24" width="28" height="8" rx="3" fill="#1864AB"/></svg>`,
        example: {
          ja: 'けんたくんは学生です。',
          hira: 'けんたくんはがくせいです。',
          vi: 'Bé trai Kenta là học sinh.'
        }
      },
      {
        id: 'n5_l01_10',
        lesson: 1,
        lessonId: 1,
        level: 'N5',
        kanji: '～人',
        hanViet: 'Nhân',
        hiragana: '～じん',
        romaji: '-jin',
        meaning: 'người nước ~',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="50" r="30" stroke="#0CA678" stroke-width="4" fill="none"/><ellipse cx="50" cy="50" rx="16" ry="30" stroke="#0CA678" stroke-width="3" fill="none"/><line x1="20" y1="50" x2="80" y2="50" stroke="#0CA678" stroke-width="3"/></svg>`,
        example: {
          ja: 'マイクさんはアメリカ人です。',
          hira: 'マイクさんはアメリカじんです。',
          vi: 'Anh Mike là người nước Mỹ.'
        }
      },
      {
        id: 'n5_l01_11',
        lesson: 1,
        lessonId: 1,
        level: 'N5',
        kanji: '先生',
        hanViet: 'Tiên Sinh',
        hiragana: 'せんせい',
        romaji: 'sensei',
        meaning: 'giáo viên',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><circle cx="50" cy="36" r="14" fill="#F59F00"/><path d="M28 80 C28 62 72 62 72 80 Z" fill="#FCC419"/><rect x="36" y="32" width="28" height="6" rx="2" fill="#212529"/></svg>`,
        example: {
          ja: '高木先生は日本語の先生です。',
          hira: 'たかぎせんせいはにほんごのせんせいです。',
          vi: 'Cô Tanaka là giáo viên tiếng Nhật.'
        }
      },
      {
        id: 'n5_l01_12',
        lesson: 1,
        lessonId: 1,
        level: 'N5',
        kanji: '教師',
        hanViet: 'Giáo Sư',
        hiragana: 'きょうし',
        romaji: 'kyoushi',
        meaning: 'giáo viên nghề nghiệp',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><rect x="26" y="24" width="48" height="34" rx="4" fill="#2B8A3E"/><line x1="50" y1="58" x2="50" y2="78" stroke="#495057" stroke-width="4"/><line x1="36" y1="78" x2="64" y2="78" stroke="#495057" stroke-width="4"/></svg>`,
        example: {
          ja: '私の仕事は日本語の教師です。',
          hira: 'わたしのしごとはにほんごのきょうしです。',
          vi: 'Nghề nghiệp của tôi là giáo viên tiếng Nhật.'
        }
      },
      {
        id: 'n5_l01_13',
        lesson: 1,
        lessonId: 1,
        level: 'N5',
        kanji: '学生',
        hanViet: 'Học Sinh',
        hiragana: 'がくせい',
        romaji: 'gakusei',
        meaning: 'học sinh, sinh viên',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="36" r="14" fill="#0CA678"/><polygon points="50,15 32,25 68,25" fill="#20C997"/><path d="M28 80 C28 64 72 64 72 80 Z" fill="#38D9A9"/></svg>`,
        example: {
          ja: '妹は大学生です。',
          hira: 'いもうとはだいがくせいです。',
          vi: 'Em gái tôi là sinh viên trường đại học.'
        }
      },
      {
        id: 'n5_l01_14',
        lesson: 1,
        lessonId: 1,
        level: 'N5',
        kanji: '会社員',
        hanViet: 'Hội Xã Viên',
        hiragana: 'かいしゃいん',
        romaji: 'kaishain',
        meaning: 'nhân viên công ty',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F1F3F5"/><rect x="32" y="42" width="36" height="42" rx="4" fill="#495057"/><polygon points="46,55 54,55 50,75" fill="#FA5252"/></svg>`,
        example: {
          ja: '父は会社員です。',
          hira: 'ちちはかいしゃいんです。',
          vi: 'Bố tôi là nhân viên công ty.'
        }
      },
      {
        id: 'n5_l01_15',
        lesson: 1,
        lessonId: 1,
        level: 'N5',
        kanji: '～社員',
        hanViet: 'Xã Viên',
        hiragana: '～しゃいん',
        romaji: '-shain',
        meaning: 'nhân viên công ty ~',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="28" y="30" width="44" height="44" rx="6" fill="#1864AB"/><text x="50" y="58" font-size="22" font-weight="900" fill="#FFF" text-anchor="middle">社</text></svg>`,
        example: {
          ja: 'IMCの社員です。',
          hira: 'アイエムシーのしゃいんです。',
          vi: 'Tôi là nhân viên công ty IMC.'
        }
      },
      {
        id: 'n5_l01_16',
        lesson: 1,
        lessonId: 1,
        level: 'N5',
        kanji: '銀行員',
        hanViet: 'Ngân Hành Viên',
        hiragana: 'ぎんこういん',
        romaji: 'ginkouin',
        meaning: 'nhân viên ngân hàng',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><circle cx="50" cy="38" r="14" fill="#F59F00"/><path d="M28 80 C28 62 72 62 72 80 Z" fill="#FAB005"/><circle cx="50" cy="62" r="8" fill="#FFF"/><text x="50" y="67" font-size="12" font-weight="900" fill="#E67700" text-anchor="middle">¥</text></svg>`,
        example: {
          ja: '母は銀行員です。',
          hira: 'はははぎんこういんです。',
          vi: 'Mẹ tôi là nhân viên ngân hàng.'
        }
      },
      {
        id: 'n5_l01_17',
        lesson: 1,
        lessonId: 1,
        level: 'N5',
        kanji: '医者',
        hanViet: 'Y Giả',
        hiragana: 'いしゃ',
        romaji: 'isha',
        meaning: 'bác sĩ',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><circle cx="50" cy="36" r="14" fill="#40C057"/><path d="M28 80 C28 62 72 62 72 80 Z" fill="#51CF66"/><rect x="46" y="48" width="8" height="24" fill="#FFF"/><rect x="38" y="56" width="24" height="8" fill="#FFF"/></svg>`,
        example: {
          ja: '兄は病院の医者です。',
          hira: 'あにはびょういんのいしゃです。',
          vi: 'Anh trai tôi là bác sĩ ở bệnh viện.'
        }
      },
      {
        id: 'n5_l01_18',
        lesson: 1,
        lessonId: 1,
        level: 'N5',
        kanji: '研究者',
        hanViet: 'Nghiên Cứu Giả',
        hiragana: 'けんきゅうしゃ',
        romaji: 'kenkyuusha',
        meaning: 'nghiên cứu sinh',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><path d="M44 30 L44 48 L32 68 C30 72 34 76 40 76 L60 76 C66 76 70 72 68 68 L56 48 L56 30 Z" fill="#7950F2"/><rect x="40" y="24" width="20" height="6" fill="#5F3DC4"/></svg>`,
        example: {
          ja: 'ワンさんは大学の研究者です。',
          hira: 'ワンさんはだいがくのけんきゅうしゃです。',
          vi: 'Anh Wang là nghiên cứu sinh ở trường đại học.'
        }
      },
      {
        id: 'n5_l01_19',
        lesson: 1,
        lessonId: 1,
        level: 'N5',
        kanji: 'エンジニア',
        hanViet: 'Kỹ Sư',
        hiragana: 'エンジニア',
        romaji: 'enjinia',
        meaning: 'kỹ sư',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="50" r="24" fill="#339AF0"/><circle cx="50" cy="50" r="10" fill="#FFF"/><path d="M46 20 L54 20 L52 30 L48 30 Z M46 80 L54 80 L52 70 L48 70 Z M20 46 L20 54 L30 52 L30 48 Z M80 46 L80 54 L70 52 L70 48 Z" fill="#1864AB"/></svg>`,
        example: {
          ja: '彼はITのエンジニアです。',
          hira: 'かれはアイティーのエンジニアです。',
          vi: 'Anh ấy là kỹ sư công nghệ thông tin.'
        }
      },
      {
        id: 'n5_l01_20',
        lesson: 1,
        lessonId: 1,
        level: 'N5',
        kanji: '大学',
        hanViet: 'Đại Học',
        hiragana: 'だいがく',
        romaji: 'daigaku',
        meaning: 'trường đại học',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><polygon points="50,22 22,38 78,38" fill="#E67700"/><rect x="28" y="38" width="8" height="34" fill="#FAB005"/><rect x="46" y="38" width="8" height="34" fill="#FAB005"/><rect x="64" y="38" width="8" height="34" fill="#FAB005"/><rect x="20" y="72" width="60" height="8" fill="#E67700"/></svg>`,
        example: {
          ja: 'ハノイ大学で日本語を勉強します。',
          hira: 'ハノイだいがくでにほんごをべんきょうします。',
          vi: 'Tôi học tiếng Nhật ở trường Đại học Hà Nội.'
        }
      },
      {
        id: 'n5_l01_21',
        lesson: 1,
        lessonId: 1,
        level: 'N5',
        kanji: '病院',
        hanViet: 'Bệnh Viện',
        hiragana: 'びょういん',
        romaji: 'byouin',
        meaning: 'bệnh viện',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><rect x="25" y="35" width="50" height="45" rx="6" fill="#FA5252"/><rect x="46" y="44" width="8" height="18" fill="#FFF"/><rect x="41" y="49" width="18" height="8" fill="#FFF"/><rect x="44" y="65" width="12" height="15" fill="#FFF"/></svg>`,
        example: {
          ja: 'あそこに大きな病院があります。',
          hira: 'あそこにおおきなびょういんがあります。',
          vi: 'Ở đằng kia có bệnh viện lớn.'
        }
      },
      {
        id: 'n5_l01_22',
        lesson: 1,
        lessonId: 1,
        level: 'N5',
        kanji: '電気',
        hanViet: 'Điện Khí',
        hiragana: 'でんき',
        romaji: 'denki',
        meaning: 'điện',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><path d="M50 20 C38 20 28 30 28 42 C28 50 34 56 38 62 L38 68 L62 68 L62 62 C66 56 72 50 72 42 C72 30 62 20 50 20 Z" fill="#FCC419"/><rect x="42" y="68" width="16" height="8" rx="2" fill="#868E96"/></svg>`,
        example: {
          ja: '部屋の電気をつけます。',
          hira: 'へやのでんきをつけます。',
          vi: 'Tôi bật đèn điện trong phòng.'
        }
      },
      {
        id: 'n5_l01_23',
        lesson: 1,
        lessonId: 1,
        level: 'N5',
        kanji: 'だれ',
        hanViet: 'Thùy',
        hiragana: 'だれ',
        romaji: 'dare',
        meaning: 'ai',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F1F3F5"/><text x="50" y="68" font-size="52" font-weight="900" fill="#495057" text-anchor="middle">?</text></svg>`,
        example: {
          ja: 'あの人はだれですか。',
          hira: 'あのひとはだれですか。',
          vi: 'Người kia là ai thế?'
        }
      },
      {
        id: 'n5_l01_24',
        lesson: 1,
        lessonId: 1,
        level: 'N5',
        kanji: 'どなた',
        hanViet: 'Hà Phương',
        hiragana: 'どなた',
        romaji: 'donata',
        meaning: 'vị nào',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><text x="50" y="66" font-size="46" font-weight="900" fill="#0CA678" text-anchor="middle">?</text><circle cx="50" cy="20" r="6" fill="#F59F00"/></svg>`,
        example: {
          ja: 'あの方はどなたですか。',
          hira: 'あのかたはどなたですか。',
          vi: 'Vị kia là vị nào thế ạ?'
        }
      },
      {
        id: 'n5_l01_25',
        lesson: 1,
        lessonId: 1,
        level: 'N5',
        kanji: '～歳',
        hanViet: 'Tuế',
        hiragana: '～さい',
        romaji: '-sai',
        meaning: 'tuổi',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF0F6"/><rect x="30" y="45" width="40" height="30" rx="4" fill="#F783AC"/><line x1="50" y1="30" x2="50" y2="45" stroke="#E64980" stroke-width="4"/><circle cx="50" cy="26" r="4" fill="#FCC419"/></svg>`,
        example: {
          ja: '私は２０歳です。',
          hira: 'わたしははたちです。',
          vi: 'Tôi tròn 20 tuổi.'
        }
      },
      {
        id: 'n5_l01_26',
        lesson: 1,
        lessonId: 1,
        level: 'N5',
        kanji: '何歳',
        hanViet: 'Hà Tuế',
        hiragana: 'なんさい',
        romaji: 'nansai',
        meaning: 'mấy tuổi',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><text x="38" y="62" font-size="28" font-weight="900" fill="#D9480F">何</text><text x="68" y="62" font-size="28" font-weight="900" fill="#D9480F">?</text></svg>`,
        example: {
          ja: 'あなたは何歳ですか。',
          hira: 'あなたはなんさいですか。',
          vi: 'Bạn bao nhiêu tuổi?'
        }
      },
      {
        id: 'n5_l01_27',
        lesson: 1,
        lessonId: 1,
        level: 'N5',
        kanji: 'おいくつ',
        hanViet: 'Kỷ Hà',
        hiragana: 'おいくつ',
        romaji: 'oikutsu',
        meaning: 'mấy tuổi - lịch sự',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><text x="50" y="58" font-size="20" font-weight="900" fill="#7048E8" text-anchor="middle">おいくつ</text></svg>`,
        example: {
          ja: '先生はおいくつですか。',
          hira: 'せんせいはおいくつですか。',
          vi: 'Thầy bao nhiêu tuổi rồi ạ?'
        }
      },
      {
        id: 'n5_l01_28',
        lesson: 1,
        lessonId: 1,
        level: 'N5',
        kanji: 'はい',
        hanViet: 'Hải',
        hiragana: 'はい',
        romaji: 'hai',
        meaning: 'vâng, dạ',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><circle cx="50" cy="50" r="32" fill="#40C057"/><path d="M36 50 L46 60 L64 38" stroke="#FFF" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        example: {
          ja: 'はい、そうです。',
          hira: 'はい、そうです。',
          vi: 'Vâng, đúng như vậy.'
        }
      },
      {
        id: 'n5_l01_29',
        lesson: 1,
        lessonId: 1,
        level: 'N5',
        kanji: 'いいえ',
        hanViet: 'Bất',
        hiragana: 'いいえ',
        romaji: 'iie',
        meaning: 'không',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><circle cx="50" cy="50" r="32" fill="#FA5252"/><path d="M38 38 L62 62 M62 38 L38 62" stroke="#FFF" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`,
        example: {
          ja: 'いいえ、ちがいます。',
          hira: 'いいえ、ちがいます。',
          vi: 'Không, không phải đâu.'
        }
      },
      {
        id: 'n5_l01_30',
        lesson: 1,
        lessonId: 1,
        level: 'N5',
        kanji: '失礼ですが',
        hanViet: 'Thất Lễ',
        hiragana: 'しつれいですが',
        romaji: 'shitsurei desu ga',
        meaning: 'xin lỗi khi hỏi',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><path d="M30 65 Q50 35 70 65" stroke="#F59F00" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="50" cy="30" r="10" fill="#E67700"/></svg>`,
        example: {
          ja: '失礼ですが、お名前は？',
          hira: 'しつれいですが、おなまえは？',
          vi: 'Xin lỗi khi hỏi, bạn tên là gì vậy ạ?'
        }
      },
      {
        id: 'n5_l01_31',
        lesson: 1,
        lessonId: 1,
        level: 'N5',
        kanji: 'お名前は？',
        hanViet: 'Danh Tiền',
        hiragana: 'おなまえは？',
        romaji: 'onamae wa?',
        meaning: 'bạn tên gì?',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="25" y="32" width="50" height="36" rx="6" fill="#339AF0"/><text x="50" y="55" font-size="14" font-weight="900" fill="#FFF" text-anchor="middle">NAME</text></svg>`,
        example: {
          ja: 'お名前は何ですか。',
          hira: 'おなまえはなんですか。',
          vi: 'Tên của bạn là gì vậy?'
        }
      },
      {
        id: 'n5_l01_32',
        lesson: 1,
        lessonId: 1,
        level: 'N5',
        kanji: '初めまして',
        hanViet: 'Sơ',
        hiragana: 'はじめまして',
        romaji: 'hajimemashite',
        meaning: 'chào lần đầu gặp mặt',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF0F6"/><path d="M30 55 C30 45 42 45 46 55 L54 55 C58 45 70 45 70 55" stroke="#D6336C" stroke-width="4" fill="none"/><line x1="42" y1="55" x2="58" y2="55" stroke="#F783AC" stroke-width="6"/></svg>`,
        example: {
          ja: '初めまして、ナムです。',
          hira: 'はじめまして、ナムです。',
          vi: 'Rất hân hạnh được gặp lần đầu, tôi là Nam.'
        }
      },
      {
        id: 'n5_l01_33',
        lesson: 1,
        lessonId: 1,
        level: 'N5',
        kanji: 'どうぞよろしくお願いします',
        hanViet: 'Nguyện',
        hiragana: 'どうぞよろしくおねがいします',
        romaji: 'douzo yoroshiku onegaishimasu',
        meaning: 'rất hân hạnh được làm quen',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="32" r="12" fill="#0CA678"/><path d="M30 76 C30 56 70 56 70 76 Z" fill="#20C997"/><path d="M42 48 L58 48" stroke="#FFF" stroke-width="4" stroke-linecap="round"/></svg>`,
        example: {
          ja: 'どうぞよろしくお願いします。',
          hira: 'どうぞよろしくおねがいします。',
          vi: 'Rất hân hạnh được làm quen, rất mong nhận được sự giúp đỡ.'
        }
      }
    ]
  },

  // --------------------------------------------------------------------------
  // BÀI 2: ĐỒ VẬT QUANH TA & VĂN PHÒNG PHẨM
  // --------------------------------------------------------------------------
  {
    lessonNumber: 2,
    level: 'N5',
    title: 'Bài 2: Đồ vật quanh ta & Văn phòng phẩm',
    topicVi: 'Đồ vật quanh ta & Văn phòng phẩm',
    icon: '📚',
    grammarPoint: 'Ngữ pháp cốt lõi: これ/それ/あれ (Đại từ chỉ thị vật), この/その/あの + N (Chỉ định từ)',
    vocab: [
      {
        id: 'n5_l02_01',
        lesson: 2,
        lessonId: 2,
        level: 'N5',
        kanji: 'これ',
        hanViet: 'Cử',
        hiragana: 'これ',
        romaji: 'kore',
        meaning: 'cái này',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="35" y="45" width="30" height="30" rx="4" fill="#339AF0"/><path d="M50 18 L50 38 M42 30 L50 38 L58 30" stroke="#1864AB" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        example: {
          ja: 'これは本です。',
          hira: 'これはほんです。',
          vi: 'Đây là cuốn sách.'
        }
      },
      {
        id: 'n5_l02_02',
        lesson: 2,
        lessonId: 2,
        level: 'N5',
        kanji: 'それ',
        hanViet: 'Kỳ',
        hiragana: 'それ',
        romaji: 'sore',
        meaning: 'cái đó, vật đó',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><rect x="52" y="45" width="28" height="28" rx="4" fill="#F59F00"/><path d="M25 60 L44 60 M36 52 L44 60 L36 68" stroke="#E67700" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        example: {
          ja: 'それは何ですか。',
          hira: 'それはなんですか。',
          vi: 'Đó là cái gì thế?'
        }
      },
      {
        id: 'n5_l02_03',
        lesson: 2,
        lessonId: 2,
        level: 'N5',
        kanji: 'あれ',
        hanViet: 'Bỉ',
        hiragana: 'あれ',
        romaji: 'are',
        meaning: 'cái kia, vật kia',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><rect x="62" y="24" width="22" height="22" rx="4" fill="#0CA678"/><path d="M22 75 L52 45 M38 43 L52 45 L50 59" stroke="#20C997" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        example: {
          ja: 'あれは私の傘です。',
          hira: 'あれはわたしのかさです。',
          vi: 'Kia là cây dù của tôi.'
        }
      },
      {
        id: 'n5_l02_04',
        lesson: 2,
        lessonId: 2,
        level: 'N5',
        kanji: 'この',
        hanViet: 'Cử',
        hiragana: 'この',
        romaji: 'kono',
        meaning: '~ này',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF0F6"/><text x="50" y="58" font-size="28" font-weight="900" fill="#D6336C" text-anchor="middle">この</text></svg>`,
        example: {
          ja: 'この本は面白いです。',
          hira: 'このほんはおもしろいです。',
          vi: 'Cuốn sách này rất thú vị.'
        }
      },
      {
        id: 'n5_l02_05',
        lesson: 2,
        lessonId: 2,
        level: 'N5',
        kanji: 'その',
        hanViet: 'Kỳ',
        hiragana: 'その',
        romaji: 'sono',
        meaning: '~ đó',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><text x="50" y="58" font-size="28" font-weight="900" fill="#E8590C" text-anchor="middle">その</text></svg>`,
        example: {
          ja: 'その時計はいくらですか。',
          hira: 'そのとけいはいくらですか。',
          vi: 'Chiếc đồng hồ đó bao nhiêu tiền vậy?'
        }
      },
      {
        id: 'n5_l02_06',
        lesson: 2,
        lessonId: 2,
        level: 'N5',
        kanji: 'あの',
        hanViet: 'Bỉ',
        hiragana: 'あの',
        romaji: 'ano',
        meaning: '~ kia',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><text x="50" y="58" font-size="28" font-weight="900" fill="#7048E8" text-anchor="middle">あの</text></svg>`,
        example: {
          ja: 'あの車は誰のですか。',
          hira: 'あのかるまはだれのですか。',
          vi: 'Chiếc xe ô tô kia là của ai vậy?'
        }
      },
      {
        id: 'n5_l02_07',
        lesson: 2,
        lessonId: 2,
        level: 'N5',
        kanji: '本',
        hanViet: 'Bản',
        hiragana: 'ほん',
        romaji: 'hon',
        meaning: 'sách',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><rect x="25" y="25" width="50" height="50" rx="4" fill="#E67700"/><path d="M50 25 L50 75" stroke="#FFF" stroke-width="3"/></svg>`,
        example: {
          ja: '日本語の本を買いました。',
          hira: 'にほんごのほんをかいました。',
          vi: 'Tôi đã mua cuốn sách tiếng Nhật.'
        }
      },
      {
        id: 'n5_l02_08',
        lesson: 2,
        lessonId: 2,
        level: 'N5',
        kanji: '辞書',
        hanViet: 'Từ Thư',
        hiragana: 'じしょ',
        romaji: 'jisho',
        meaning: 'từ điển',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="26" y="24" width="48" height="52" rx="4" fill="#1971C2"/><text x="50" y="55" font-size="16" fill="#FFF" text-anchor="middle" font-weight="bold">ABC</text></svg>`,
        example: {
          ja: '電子辞書を使います。',
          hira: 'でんしじしょをつかいます。',
          vi: 'Tôi sử dụng từ điển điện tử.'
        }
      },
      {
        id: 'n5_l02_09',
        lesson: 2,
        lessonId: 2,
        level: 'N5',
        kanji: '雑誌',
        hanViet: 'Tạp Chí',
        hiragana: 'ざっし',
        romaji: 'zasshi',
        meaning: 'tạp chí',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF0F6"/><rect x="28" y="22" width="44" height="56" rx="4" fill="#D6336C"/><circle cx="50" cy="42" r="10" fill="#FFF"/></svg>`,
        example: {
          ja: '日本のファッション雑誌です。',
          hira: 'にほんのファッションざっしです。',
          vi: 'Đây là tạp chí thời trang Nhật Bản.'
        }
      },
      {
        id: 'n5_l02_10',
        lesson: 2,
        lessonId: 2,
        level: 'N5',
        kanji: '新聞',
        hanViet: 'Tân Văn',
        hiragana: 'しんぶん',
        romaji: 'shinbun',
        meaning: 'báo',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F8F9FA"/><rect x="24" y="26" width="52" height="48" rx="2" fill="#ADB5BD"/><line x1="32" y1="40" x2="68" y2="40" stroke="#343A40" stroke-width="3"/></svg>`,
        example: {
          ja: '毎朝新聞を読みます。',
          hira: 'まいあさしんぶんをよみます。',
          vi: 'Mỗi sáng tôi đều đọc báo.'
        }
      },
      {
        id: 'n5_l02_11',
        lesson: 2,
        lessonId: 2,
        level: 'N5',
        kanji: 'ノート',
        hanViet: 'Vở',
        hiragana: 'ノート',
        romaji: 'no-to',
        meaning: 'vở',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><rect x="28" y="24" width="46" height="54" rx="4" fill="#0CA678"/><line x1="36" y1="36" x2="66" y2="36" stroke="#FFF" stroke-width="2.5"/><line x1="36" y1="46" x2="66" y2="46" stroke="#FFF" stroke-width="2.5"/><line x1="36" y1="56" x2="66" y2="56" stroke="#FFF" stroke-width="2.5"/></svg>`,
        example: {
          ja: 'ノートに漢字を書きます。',
          hira: 'ノートにかんじをかきます。',
          vi: 'Tôi viết chữ Hán vào cuốn vở.'
        }
      },
      {
        id: 'n5_l02_12',
        lesson: 2,
        lessonId: 2,
        level: 'N5',
        kanji: '手帳',
        hanViet: 'Thủ Trướng',
        hiragana: 'てちょう',
        romaji: 'techou',
        meaning: 'sổ tay',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><rect x="30" y="24" width="40" height="52" rx="4" fill="#5F3DC4"/><rect x="34" y="32" width="32" height="6" fill="#D0BFFF"/></svg>`,
        example: {
          ja: '手帳に予定を書きます。',
          hira: 'てちょうによていをかきます。',
          vi: 'Tôi ghi lịch trình vào cuốn sổ tay.'
        }
      },
      {
        id: 'n5_l02_13',
        lesson: 2,
        lessonId: 2,
        level: 'N5',
        kanji: '名刺',
        hanViet: 'Danh Thích',
        hiragana: 'めいし',
        romaji: 'meishi',
        meaning: 'danh thiếp',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="22" y="32" width="56" height="36" rx="4" fill="#FFF" stroke="#1864AB" stroke-width="2"/><circle cx="34" cy="46" r="6" fill="#339AF0"/><line x1="45" y1="44" x2="68" y2="44" stroke="#495057" stroke-width="2"/><line x1="45" y1="50" x2="62" y2="50" stroke="#868E96" stroke-width="2"/></svg>`,
        example: {
          ja: '私の名刺をどうぞ。',
          hira: 'わたしのめいしをどうぞ。',
          vi: 'Xin mời nhận danh thiếp của tôi.'
        }
      },
      {
        id: 'n5_l02_14',
        lesson: 2,
        lessonId: 2,
        level: 'N5',
        kanji: 'テレホンカード',
        hanViet: 'Điện Thoại Thẻ',
        hiragana: 'テレホンカード',
        romaji: 'terehon ka-do',
        meaning: 'thẻ điện thoại',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><rect x="22" y="30" width="56" height="40" rx="4" fill="#20C997"/><circle cx="36" cy="48" r="8" fill="#FFF"/><path d="M33 46 Q36 43 39 46" stroke="#0CA678" stroke-width="2" fill="none"/></svg>`,
        example: {
          ja: 'これはテレホンカードです。',
          hira: 'これはテレホンカードです。',
          vi: 'Đây là thẻ gọi điện thoại công cộng.'
        }
      },
      {
        id: 'n5_l02_15',
        lesson: 2,
        lessonId: 2,
        level: 'N5',
        kanji: 'カード',
        hanViet: 'Thẻ',
        hiragana: 'カード',
        romaji: 'ka-do',
        meaning: 'thẻ, cạc',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><rect x="22" y="32" width="56" height="36" rx="4" fill="#FAB005"/><rect x="22" y="40" width="56" height="8" fill="#212529"/></svg>`,
        example: {
          ja: 'クレジットカードで払います。',
          hira: 'クレジットカードではらいます。',
          vi: 'Tôi thanh toán bằng thẻ tín dụng.'
        }
      },
      {
        id: 'n5_l02_16',
        lesson: 2,
        lessonId: 2,
        level: 'N5',
        kanji: '鉛筆',
        hanViet: 'Duyên Bút',
        hiragana: 'えんぴつ',
        romaji: 'enpitsu',
        meaning: 'bút chì',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><polygon points="25,75 35,45 45,75" fill="#FCC419"/><rect x="35" y="25" width="10" height="40" fill="#F59F00"/></svg>`,
        example: {
          ja: '鉛筆で名前を書きます。',
          hira: 'えんぴつでなまえをかきます。',
          vi: 'Tôi viết tên bằng cây bút chì.'
        }
      },
      {
        id: 'n5_l02_17',
        lesson: 2,
        lessonId: 2,
        level: 'N5',
        kanji: 'ボールペン',
        hanViet: 'Bút Bi',
        hiragana: 'ボールペン',
        romaji: 'bo-rupen',
        meaning: 'bút bi',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><path d="M30 75 L70 35 L75 40 L35 80 Z" fill="#1864AB"/><polygon points="25,85 30,75 35,80" fill="#212529"/></svg>`,
        example: {
          ja: '黒いボールペンをください。',
          hira: 'くろいボールペンをください。',
          vi: 'Xin hãy cho tôi cây bút bi mực đen.'
        }
      },
      {
        id: 'n5_l02_18',
        lesson: 2,
        lessonId: 2,
        level: 'N5',
        kanji: 'シャープペンシル',
        hanViet: 'Bút Chì Kim',
        hiragana: 'シャープペンシル',
        romaji: 'sha-pu penshiru',
        meaning: 'bút chì kim',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F1F3F5"/><rect x="47" y="20" width="6" height="55" fill="#495057"/><polygon points="46,75 54,75 50,85" fill="#CED4DA"/><line x1="50" y1="85" x2="50" y2="90" stroke="#212529" stroke-width="1.5"/></svg>`,
        example: {
          ja: 'このシャープペンシルは便利です。',
          hira: 'このシャープペンシルはべんりです。',
          vi: 'Cây bút chì kim này rất tiện lợi.'
        }
      },
      {
        id: 'n5_l02_19',
        lesson: 2,
        lessonId: 2,
        level: 'N5',
        kanji: '鍵',
        hanViet: 'Kiện',
        hiragana: 'かぎ',
        romaji: 'kagi',
        meaning: 'chìa khóa',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><circle cx="36" cy="40" r="14" stroke="#F59F00" stroke-width="5" fill="none"/><line x1="46" y1="48" x2="72" y2="74" stroke="#F59F00" stroke-width="5" stroke-linecap="round"/><line x1="62" y1="64" x2="68" y2="58" stroke="#F59F00" stroke-width="4"/><line x1="68" y1="70" x2="74" y2="64" stroke="#F59F00" stroke-width="4"/></svg>`,
        example: {
          ja: '部屋の鍵を忘れました。',
          hira: 'へやのかぎをわすれました。',
          vi: 'Tôi đã để quên chìa khóa phòng.'
        }
      },
      {
        id: 'n5_l02_20',
        lesson: 2,
        lessonId: 2,
        level: 'N5',
        kanji: '時計',
        hanViet: 'Thời Kế',
        hiragana: 'とけい',
        romaji: 'tokei',
        meaning: 'đồng hồ',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="50" r="30" stroke="#1864AB" stroke-width="5" fill="#FFF"/><line x1="50" y1="50" x2="50" y2="32" stroke="#212529" stroke-width="3" stroke-linecap="round"/><line x1="50" y1="50" x2="64" y2="50" stroke="#E03131" stroke-width="2.5" stroke-linecap="round"/></svg>`,
        example: {
          ja: 'これは日本の時計です。',
          hira: 'これはにほんのとけいです。',
          vi: 'Đây là chiếc đồng hồ của Nhật Bản.'
        }
      },
      {
        id: 'n5_l02_21',
        lesson: 2,
        lessonId: 2,
        level: 'N5',
        kanji: 'そうですか',
        hanViet: 'Nhiên',
        hiragana: 'そうですか',
        romaji: 'sou desu ka',
        meaning: 'Đúng như thế à?',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><circle cx="50" cy="45" r="24" fill="#FCC419"/><text x="50" y="54" font-size="28" font-weight="900" fill="#D9480F" text-anchor="middle">!</text></svg>`,
        example: {
          ja: 'そうですか、分かりました。',
          hira: 'そうですか、わかりました。',
          vi: 'Đúng như thế à, tôi hiểu rồi.'
        }
      },
      {
        id: 'n5_l02_22',
        lesson: 2,
        lessonId: 2,
        level: 'N5',
        kanji: 'あのう',
        hanViet: 'À',
        hiragana: 'あのう',
        romaji: 'anou',
        meaning: 'à, ờ...',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F1F3F5"/><circle cx="34" cy="50" r="5" fill="#868E96"/><circle cx="50" cy="50" r="5" fill="#868E96"/><circle cx="66" cy="50" r="5" fill="#868E96"/></svg>`,
        example: {
          ja: 'あのう、すみません。',
          hira: 'あのう、すみません。',
          vi: 'À... ờ, xin lỗi làm phiền một chút ạ.'
        }
      },
      {
        id: 'n5_l02_23',
        lesson: 2,
        lessonId: 2,
        level: 'N5',
        kanji: 'ほんの気持ちです',
        hanViet: 'Bản Khí Trì',
        hiragana: 'ほんのきもちです',
        romaji: 'honno kimochi desu',
        meaning: 'Đây chỉ là chút lòng thành',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><path d="M50 70 C50 70 28 52 28 38 C28 28 36 22 44 22 C48 22 50 26 50 26 C50 26 52 22 56 22 C64 22 72 28 72 38 C72 52 50 70 50 70 Z" fill="#FA5252"/></svg>`,
        example: {
          ja: 'どうぞ、ほんの気持ちです。',
          hira: 'どうぞ、ほんのきもちです。',
          vi: 'Xin mời nhận, đây chỉ là chút lòng thành của tôi thôi.'
        }
      },
      {
        id: 'n5_l02_24',
        lesson: 2,
        lessonId: 2,
        level: 'N5',
        kanji: 'どうぞ',
        hanViet: 'Nhập',
        hiragana: 'どうぞ',
        romaji: 'douzo',
        meaning: 'Xin mời',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><path d="M30 50 L65 50 M52 38 L65 50 L52 62" stroke="#0CA678" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        example: {
          ja: 'お茶をどうぞ。',
          hira: 'おちゃをどうぞ。',
          vi: 'Xin mời dùng trà.'
        }
      },
      {
        id: 'n5_l02_25',
        lesson: 2,
        lessonId: 2,
        level: 'N5',
        kanji: 'どうも',
        hanViet: 'Tạ',
        hiragana: 'どうも',
        romaji: 'doumo',
        meaning: 'Cảm ơn',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF0F6"/><circle cx="50" cy="35" r="12" fill="#E64980"/><path d="M32 75 C32 58 68 58 68 75 Z" fill="#F783AC"/></svg>`,
        example: {
          ja: 'どうも、ありがとう。',
          hira: 'どうも、ありがとう。',
          vi: 'Cảm ơn bạn nhé.'
        }
      },
      {
        id: 'n5_l02_26',
        lesson: 2,
        lessonId: 2,
        level: 'N5',
        kanji: 'どうもありがとうございます',
        hanViet: 'Hữu Nan',
        hiragana: 'どうもありがとうございます',
        romaji: 'doumo arigatou gozaimasu',
        meaning: 'Xin chân thành cảm ơn',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><circle cx="50" cy="32" r="11" fill="#F59F00"/><path d="M28 75 C28 54 72 54 72 75 Z" fill="#FCC419"/><path d="M36 52 Q50 64 64 52" stroke="#D9480F" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`,
        example: {
          ja: '先生、どうもありがとうございます。',
          hira: 'せんせい、どうもありがとうございます。',
          vi: 'Thưa cô giáo, em xin chân thành cảm ơn cô.'
        }
      },
      {
        id: 'n5_l02_27',
        lesson: 2,
        lessonId: 2,
        level: 'N5',
        kanji: 'これからお世話になります',
        hanViet: 'Thế Thoại',
        hiragana: 'これからおせわになります',
        romaji: 'korekara osewa ni narimasu',
        meaning: 'Từ nay rất mong được giúp đỡ',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="36" cy="38" r="10" fill="#1864AB"/><circle cx="64" cy="38" r="10" fill="#339AF0"/><path d="M22 76 C22 60 50 60 50 76 Z" fill="#1864AB"/><path d="M50 76 C50 60 78 60 78 76 Z" fill="#339AF0"/><path d="M42 58 L58 58" stroke="#FCC419" stroke-width="5" stroke-linecap="round"/></svg>`,
        example: {
          ja: '隣の部屋です。これからお世話になります。',
          hira: 'となりのへやです。これからおせわになります。',
          vi: 'Tôi ở phòng bên cạnh. Từ nay rất mong được giúp đỡ.'
        }
      },
      {
        id: 'n5_l02_28',
        lesson: 2,
        lessonId: 2,
        level: 'N5',
        kanji: 'こちらこそよろしく',
        hanViet: 'Phương Hảo',
        hiragana: 'こちらこそよろしく',
        romaji: 'kochirakoso yoroshiku',
        meaning: 'Chính tôi cũng mong được giúp đỡ',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="32" r="12" fill="#0CA678"/><path d="M30 76 C30 56 70 56 70 76 Z" fill="#20C997"/><path d="M40 48 L60 48" stroke="#FFF" stroke-width="4" stroke-linecap="round"/></svg>`,
        example: {
          ja: 'こちらこそよろしくお願いします。',
          hira: 'こちらこそよろしくおねがいします。',
          vi: 'Chính tôi mới là người cần anh giúp đỡ ạ.'
        }
      }
    ]
  },

  // --------------------------------------------------------------------------
  // BÀI 3: ĐỊA ĐIỂM, PHÒNG ỐC & TÒA NHÀ TRUNG TÂM
  // --------------------------------------------------------------------------
  // BÀI 3: ĐỊA ĐIỂM, TẦNG LẦU & MUA SẮM (24 TỪ)
  // --------------------------------------------------------------------------
  {
    lessonNumber: 3,
    level: 'N5',
    title: 'Bài 3: Địa điểm, Tầng lầu & Mua sắm',
    topicVi: 'Địa điểm, Tầng lầu & Mua sắm',
    icon: '🏢',
    grammarPoint: 'Chỉ vị trí: ここ/そこ/あそこ/どこ, lịch sự こちら/そちら/あちら/どちら. Cấu trúc N1 は N2 (địa điểm) です. Hỏi giá tiền: ～はいくらですか.',
    vocab: [
      {
        id: 'n5_l03_01',
        lesson: 3,
        lessonId: 3,
        level: 'N5',
        kanji: 'ここ',
        hanViet: '',
        hiragana: 'ここ',
        romaji: 'koko',
        meaning: 'chỗ này, ở đây',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="50" r="14" fill="#1971C2"/><circle cx="50" cy="50" r="28" fill="none" stroke="#339AF0" stroke-width="4" stroke-dasharray="6 4"/></svg>`,
        example: {
          ja: 'ここは教室です。',
          hira: 'ここはきょうしつです。',
          vi: 'Đây là phòng học.'
        }
      },
      {
        id: 'n5_l03_02',
        lesson: 3,
        lessonId: 3,
        level: 'N5',
        kanji: 'そこ',
        hanViet: '',
        hiragana: 'そこ',
        romaji: 'soko',
        meaning: 'chỗ đó, ở đó',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><circle cx="62" cy="50" r="12" fill="#F59F00"/><path d="M25 50 L48 50 M42 42 L50 50 L42 58" stroke="#E67700" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        example: {
          ja: 'そこは受付です。',
          hira: 'そこはうけつけです。',
          vi: 'Đó là quầy lễ tân.'
        }
      },
      {
        id: 'n5_l03_03',
        lesson: 3,
        lessonId: 3,
        level: 'N5',
        kanji: 'あそこ',
        hanViet: '',
        hiragana: 'あそこ',
        romaji: 'asoko',
        meaning: 'chỗ kia, ở đằng kia',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><circle cx="75" cy="50" r="10" fill="#7950F2"/><path d="M20 50 L62 50 M54 42 L64 50 L54 58" stroke="#5F3DC4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        example: {
          ja: 'あそこは食堂です。',
          hira: 'あそこはしょくどうです。',
          vi: 'Đằng kia là nhà ăn.'
        }
      },
      {
        id: 'n5_l03_04',
        lesson: 3,
        lessonId: 3,
        level: 'N5',
        kanji: 'どこ',
        hanViet: '',
        hiragana: 'どこ',
        romaji: 'doko',
        meaning: 'ở đâu, chỗ nào',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><circle cx="50" cy="38" r="16" fill="#FA5252"/><path d="M50 54 L50 68" stroke="#C92A2A" stroke-width="5" stroke-linecap="round"/><circle cx="50" cy="78" r="3" fill="#C92A2A"/></svg>`,
        example: {
          ja: 'お手洗いはどこですか。',
          hira: 'おてあらいはどこですか。',
          vi: 'Nhà vệ sinh ở đâu vậy?'
        }
      },
      {
        id: 'n5_l03_05',
        lesson: 3,
        lessonId: 3,
        level: 'N5',
        kanji: 'こちら',
        hanViet: '',
        hiragana: 'こちら',
        romaji: 'kochira',
        meaning: 'phía này (lịch sự)',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><path d="M65 30 L35 50 L65 70" stroke="#0CA678" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`,
        example: {
          ja: '事務所はこちらでございます。',
          hira: 'じむしょはこちらでございます。',
          vi: 'Văn phòng ở phía này ạ.'
        }
      },
      {
        id: 'n5_l03_06',
        lesson: 3,
        lessonId: 3,
        level: 'N5',
        kanji: 'そちら',
        hanViet: '',
        hiragana: 'そちら',
        romaji: 'sochira',
        meaning: 'đằng này, phía đó (lịch sự)',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><path d="M35 30 L65 50 L35 70" stroke="#40C057" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`,
        example: {
          ja: 'エレベーターはそちらです。',
          hira: 'エレベーターはそちらです。',
          vi: 'Thang máy ở phía đó ạ.'
        }
      },
      {
        id: 'n5_l03_07',
        lesson: 3,
        lessonId: 3,
        level: 'N5',
        kanji: '靴',
        hanViet: 'Ngoa',
        hiragana: 'くつ',
        romaji: 'kutsu',
        meaning: 'giầy, đôi giày',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><path d="M22 62 C22 50 36 44 48 44 C54 44 60 52 70 52 C78 52 82 58 82 66 L22 66 Z" fill="#D9480F"/><rect x="22" y="66" width="60" height="6" rx="2" fill="#862E9C"/></svg>`,
        example: {
          ja: 'これは日本の靴です。',
          hira: 'これはにほんのくつです。',
          vi: 'Đây là giày của Nhật Bản.'
        }
      },
      {
        id: 'n5_l03_08',
        lesson: 3,
        lessonId: 3,
        level: 'N5',
        kanji: 'ネクタイ',
        hanViet: '',
        hiragana: 'ネクタイ',
        romaji: 'nekutai',
        meaning: 'cà vạt',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><polygon points="45,20 55,20 53,30 47,30" fill="#1971C2"/><polygon points="47,30 53,30 58,72 50,82 42,72" fill="#228BE6"/><polygon points="46,45 54,45 53,52 47,52" fill="#1864AB"/></svg>`,
        example: {
          ja: 'そのネクタイを見せてください。',
          hira: 'そのネクタイをみせてください。',
          vi: 'Hãy cho tôi xem chiếc cà vạt đó.'
        }
      },
      {
        id: 'n5_l03_09',
        lesson: 3,
        lessonId: 3,
        level: 'N5',
        kanji: 'ワイン',
        hanViet: '',
        hiragana: 'ワイン',
        romaji: 'wain',
        meaning: 'rượu vang',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F8F0FC"/><path d="M38 32 C38 48 46 54 48 56 L48 74 L38 74 L38 78 L62 78 L62 74 L52 74 L52 56 C54 54 62 48 62 32 Z" fill="#C2255C"/><path d="M40 38 C44 46 56 46 60 38 Z" fill="#E64980"/></svg>`,
        example: {
          ja: 'フランスのワインをください。',
          hira: 'フランスのワインをください。',
          vi: 'Xin cho tôi rượu vang của Pháp.'
        }
      },
      {
        id: 'n5_l03_10',
        lesson: 3,
        lessonId: 3,
        level: 'N5',
        kanji: '煙草',
        hanViet: 'Yên Thảo',
        hiragana: 'たばこ',
        romaji: 'tabako',
        meaning: 'thuốc lá',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F1F3F5"/><rect x="25" y="44" width="40" height="12" rx="2" fill="#E9ECEF" stroke="#ADB5BD" stroke-width="2"/><rect x="65" y="44" width="12" height="12" fill="#F59F00"/><path d="M22 42 Q18 36 22 30 Q26 24 20 18" stroke="#868E96" stroke-width="2" fill="none"/></svg>`,
        example: {
          ja: '煙草の売り場はどこですか。',
          hira: 'たばこのうりばはどこですか。',
          vi: 'Quầy bán thuốc lá ở đâu vậy?'
        }
      },
      {
        id: 'n5_l03_11',
        lesson: 3,
        lessonId: 3,
        level: 'N5',
        kanji: '売り場',
        hanViet: 'Mại Trường',
        hiragana: 'うりば',
        romaji: 'uriba',
        meaning: 'quầy bán',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><rect x="24" y="48" width="52" height="30" rx="3" fill="#F59F00"/><path d="M20 48 L28 32 L72 32 L80 48 Z" fill="#FCC419"/><circle cx="50" cy="62" r="6" fill="#FFF"/></svg>`,
        example: {
          ja: '靴の売り場は2階です。',
          hira: 'くつのうりばはにかいです。',
          vi: 'Quầy bán giày ở tầng 2.'
        }
      },
      {
        id: 'n5_l03_12',
        lesson: 3,
        lessonId: 3,
        level: 'N5',
        kanji: '地下',
        hanViet: 'Địa Hạ',
        hiragana: 'ちか',
        romaji: 'chika',
        meaning: 'tầng hầm/dưới',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E9ECEF"/><line x1="18" y1="46" x2="82" y2="46" stroke="#495057" stroke-width="4"/><polygon points="50,78 35,54 65,54" fill="#343A40"/><text x="50" y="38" text-anchor="middle" font-size="14" font-weight="bold" fill="#495057">1F</text><text x="50" y="70" text-anchor="middle" font-size="11" font-weight="bold" fill="#FFF">B1</text></svg>`,
        example: {
          ja: '地下にスーパーがあります。',
          hira: 'ちかにスーパーがあります。',
          vi: 'Ở dưới tầng hầm có siêu thị.'
        }
      },
      {
        id: 'n5_l03_13',
        lesson: 3,
        lessonId: 3,
        level: 'N5',
        kanji: 'ー階',
        hanViet: 'Giai',
        hiragana: 'ーかい/ーがい',
        romaji: '-kai / -gai',
        meaning: 'tầng',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="30" y="22" width="40" height="56" rx="4" fill="#339AF0"/><line x1="30" y1="40" x2="70" y2="40" stroke="#FFF" stroke-width="2"/><line x1="30" y1="58" x2="70" y2="58" stroke="#FFF" stroke-width="2"/><text x="50" y="35" text-anchor="middle" font-size="10" fill="#FFF">3F</text><text x="50" y="53" text-anchor="middle" font-size="10" fill="#FFF">2F</text><text x="50" y="72" text-anchor="middle" font-size="10" fill="#FFF">1F</text></svg>`,
        example: {
          ja: '会議室は3階です。',
          hira: 'かいぎしつはさんがいです。',
          vi: 'Phòng họp ở tầng 3.'
        }
      },
      {
        id: 'n5_l03_14',
        lesson: 3,
        lessonId: 3,
        level: 'N5',
        kanji: '何階',
        hanViet: 'Hà Giai',
        hiragana: 'なんがい',
        romaji: 'nangai',
        meaning: 'tầng mấy',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><rect x="30" y="24" width="40" height="54" rx="4" fill="#FCC419"/><text x="50" y="56" text-anchor="middle" font-size="28" font-weight="bold" fill="#D9480F">?</text></svg>`,
        example: {
          ja: '食堂は何階ですか。',
          hira: 'しょくどうはなんがいですか。',
          vi: 'Nhà ăn ở tầng mấy vậy?'
        }
      },
      {
        id: 'n5_l03_15',
        lesson: 3,
        lessonId: 3,
        level: 'N5',
        kanji: 'ー円',
        hanViet: 'Viên',
        hiragana: 'ーえん',
        romaji: '-en',
        meaning: 'yên (tiền Nhật)',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><circle cx="50" cy="50" r="30" fill="#FFD43B" stroke="#FAB005" stroke-width="3"/><text x="50" y="60" text-anchor="middle" font-size="30" font-weight="bold" fill="#D9480F">¥</text></svg>`,
        example: {
          ja: 'このペンは百円です。',
          hira: 'このペンはひゃくえんです。',
          vi: 'Chiếc bút này giá 100 yên.'
        }
      },
      {
        id: 'n5_l03_16',
        lesson: 3,
        lessonId: 3,
        level: 'N5',
        kanji: 'いくら',
        hanViet: 'Kỷ',
        hiragana: 'いくら',
        romaji: 'ikura',
        meaning: 'bao nhiêu tiền',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><circle cx="50" cy="46" r="24" fill="#FF922B"/><text x="50" y="56" text-anchor="middle" font-size="22" font-weight="bold" fill="#FFF">¥?</text></svg>`,
        example: {
          ja: 'この傘はいくらですか。',
          hira: 'このかさはいくらですか。',
          vi: 'Chiếc ô này bao nhiêu tiền?'
        }
      },
      {
        id: 'n5_l03_17',
        lesson: 3,
        lessonId: 3,
        level: 'N5',
        kanji: '百',
        hanViet: 'Bách',
        hiragana: 'ひゃく',
        romaji: 'hyaku',
        meaning: 'trăm (100)',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="22" y="34" width="56" height="32" rx="4" fill="#339AF0"/><text x="50" y="56" text-anchor="middle" font-size="18" font-weight="bold" fill="#FFF">100</text></svg>`,
        example: {
          ja: '百円玉を入れます。',
          hira: 'ひゃくえんだまをいれます。',
          vi: 'Bỏ đồng 100 yên vào.'
        }
      },
      {
        id: 'n5_l03_18',
        lesson: 3,
        lessonId: 3,
        level: 'N5',
        kanji: '千',
        hanViet: 'Thiên',
        hiragana: 'せん',
        romaji: 'sen',
        meaning: 'nghìn (1.000)',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><rect x="20" y="34" width="60" height="32" rx="4" fill="#20C997"/><text x="50" y="56" text-anchor="middle" font-size="16" font-weight="bold" fill="#FFF">1,000</text></svg>`,
        example: {
          ja: '千円のシャツを買いました。',
          hira: 'せんえんのシャツをかいました。',
          vi: 'Tôi đã mua chiếc áo sơ mi một nghìn yên.'
        }
      },
      {
        id: 'n5_l03_19',
        lesson: 3,
        lessonId: 3,
        level: 'N5',
        kanji: '万',
        hanViet: 'Vạn',
        hiragana: 'まん',
        romaji: 'man',
        meaning: 'vạn (10.000)',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><rect x="18" y="34" width="64" height="32" rx="4" fill="#FAB005"/><text x="50" y="56" text-anchor="middle" font-size="15" font-weight="bold" fill="#664D03">10,000</text></svg>`,
        example: {
          ja: 'このカメラは一万円です。',
          hira: 'このカメラはいちまんえんです。',
          vi: 'Chiếc máy ảnh này một vạn yên (10.000 yên).'
        }
      },
      {
        id: 'n5_l03_20',
        lesson: 3,
        lessonId: 3,
        level: 'N5',
        kanji: 'すみません',
        hanViet: '',
        hiragana: 'すみません',
        romaji: 'sumimasen',
        meaning: 'Xin lỗi',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><circle cx="50" cy="38" r="14" fill="#FF922B"/><path d="M30 76 C30 60 70 60 70 76 Z" fill="#FFA94D"/><path d="M38 48 Q50 42 62 48" stroke="#D9480F" stroke-width="3" fill="none"/></svg>`,
        example: {
          ja: 'すみません、時計はどこですか。',
          hira: 'すみません、とけいはどこですか。',
          vi: 'Xin lỗi, đồng hồ ở đâu vậy ạ?'
        }
      },
      {
        id: 'n5_l03_21',
        lesson: 3,
        lessonId: 3,
        level: 'N5',
        kanji: '～でございます',
        hanViet: '',
        hiragana: '～でございます',
        romaji: '~de gozaimasu',
        meaning: 'cách nói lịch sự của です',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><circle cx="50" cy="36" r="14" fill="#7950F2"/><path d="M28 78 C28 62 72 62 72 78 Z" fill="#845EF7"/><path d="M42 46 L58 46" stroke="#FFF" stroke-width="3"/></svg>`,
        example: {
          ja: 'ワイン売り場は地下でございます。',
          hira: 'ワインうりばはちかでございます。',
          vi: 'Quầy bán rượu vang ở tầng hầm thưa quý khách.'
        }
      },
      {
        id: 'n5_l03_22',
        lesson: 3,
        lessonId: 3,
        level: 'N5',
        kanji: '見せてください',
        hanViet: 'Kiến',
        hiragana: 'みせてください',
        romaji: 'misete kudasai',
        meaning: 'Hãy cho tôi xem',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="50" r="22" fill="none" stroke="#1971C2" stroke-width="4"/><circle cx="50" cy="50" r="10" fill="#228BE6"/><path d="M26 50 Q50 24 74 50 Q50 76 26 50 Z" fill="none" stroke="#1971C2" stroke-width="3"/></svg>`,
        example: {
          ja: 'その靴を見せてください。',
          hira: 'そのくつをみせてください。',
          vi: 'Xin cho tôi xem đôi giày đó.'
        }
      },
      {
        id: 'n5_l03_23',
        lesson: 3,
        lessonId: 3,
        level: 'N5',
        kanji: 'じゃ',
        hanViet: '',
        hiragana: 'じゃ',
        romaji: 'ja',
        meaning: 'thế thì, vậy thì',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><path d="M28 50 L68 50 M52 34 L68 50 L52 66" stroke="#0CA678" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        example: {
          ja: 'じゃ、これをください。',
          hira: 'じゃ、これをください。',
          vi: 'Thế thì, xin bán cho tôi cái này.'
        }
      },
      {
        id: 'n5_l03_24',
        lesson: 3,
        lessonId: 3,
        level: 'N5',
        kanji: '～をください',
        hanViet: '',
        hiragana: '～をください',
        romaji: '~o kudasai',
        meaning: 'Xin cho tôi ~',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><path d="M30 65 Q50 48 70 65 L66 74 Q50 60 34 74 Z" fill="#FA5252"/><circle cx="50" cy="38" r="10" fill="#E03131"/></svg>`,
        example: {
          ja: 'このネクタイをください。',
          hira: 'このネクタイをください。',
          vi: 'Xin hãy bán cho tôi chiếc cà vạt này.'
        }
      }
    ]
  },

// --------------------------------------------------------------------------
  // BÀI 4: THỜI GIAN, GIỜ GIẤC & SINH HOẠT HẰNG NGÀY (27 TỪ)
  // --------------------------------------------------------------------------
  {
    lessonNumber: 4,
    level: 'N5',
    title: 'Bài 4: Giờ giấc & Sinh hoạt hằng ngày',
    topicVi: 'Giờ giấc & Sinh hoạt hằng ngày',
    icon: '⏰',
    grammarPoint: 'Cách nói giờ và phút (～時 ～分). Thời điểm diễn ra hành động: Danh từ thời gian + に + Động từ. Cặp trợ từ から (từ) ~ まで (đến).',
    vocab: [
      {
        id: 'n5_l04_01',
        lesson: 4,
        lessonId: 4,
        level: 'N5',
        kanji: '起きます',
        hanViet: 'Khởi',
        hiragana: 'おきます',
        romaji: 'okimasu',
        meaning: 'thức dậy',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><circle cx="50" cy="50" r="16" fill="#F59F00"/><path d="M50 20 L50 28 M50 72 L50 80 M20 50 L28 50 M72 50 L80 50" stroke="#F59F00" stroke-width="4" stroke-linecap="round"/><path d="M30 68 Q50 48 70 68" stroke="#D9480F" stroke-width="3" fill="none"/></svg>`,
        example: {
          ja: '毎朝6時に起きます。',
          hira: 'まいあさ6じにおきます。',
          vi: 'Mỗi sáng tôi thức dậy lúc 6 giờ.'
        }
      },
      {
        id: 'n5_l04_02',
        lesson: 4,
        lessonId: 4,
        level: 'N5',
        kanji: '寝ます',
        hanViet: 'Tẩm',
        hiragana: 'ねます',
        romaji: 'nemasu',
        meaning: 'ngủ',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#343A40"/><path d="M42 28 C56 28 66 42 66 58 C66 68 62 76 54 80 C68 76 78 62 78 46 C78 30 64 18 48 18 C46 18 44 18 42 19 Z" fill="#FFD43B"/><circle cx="34" cy="38" r="2" fill="#FFF"/><circle cx="30" cy="46" r="3" fill="#FFF"/></svg>`,
        example: {
          ja: '夜11時に寝ます。',
          hira: 'よる11じにねます。',
          vi: 'Tôi đi ngủ vào lúc 11 giờ đêm.'
        }
      },
      {
        id: 'n5_l04_03',
        lesson: 4,
        lessonId: 4,
        level: 'N5',
        kanji: '働きます',
        hanViet: 'Động',
        hiragana: 'はたらきます',
        romaji: 'hatarakimasu',
        meaning: 'làm việc',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="25" y="44" width="50" height="34" rx="4" fill="#1971C2"/><path d="M40 44 L40 34 C40 30 60 30 60 34 L60 44" stroke="#1864AB" stroke-width="4" fill="none"/><line x1="25" y1="56" x2="75" y2="56" stroke="#339AF0" stroke-width="2"/></svg>`,
        example: {
          ja: '9時から5時まで働きます。',
          hira: 'くじからごじまではたらきます。',
          vi: 'Tôi làm việc từ 9 giờ đến 5 giờ.'
        }
      },
      {
        id: 'n5_l04_04',
        lesson: 4,
        lessonId: 4,
        level: 'N5',
        kanji: '休みます',
        hanViet: 'Hưu',
        hiragana: 'やすみます',
        romaji: 'yasumimasu',
        meaning: 'nghỉ ngơi',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="42" r="14" fill="#0CA678"/><path d="M32 78 C32 64 68 64 68 78 Z" fill="#20C997"/><path d="M58 34 Q66 28 64 22" stroke="#12B886" stroke-width="2" fill="none"/></svg>`,
        example: {
          ja: '日曜日に休みます。',
          hira: 'にちようびにやすみます。',
          vi: 'Tôi nghỉ ngơi vào ngày Chủ Nhật.'
        }
      },
      {
        id: 'n5_l04_05',
        lesson: 4,
        lessonId: 4,
        level: 'N5',
        kanji: '勉強します',
        hanViet: 'Miễn Cưỡng',
        hiragana: 'べんきょうします',
        romaji: 'benkyoushimasu',
        meaning: 'học',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><polygon points="50,22 84,36 50,50 16,36" fill="#F76707"/><polygon points="26,45 26,62 50,72 50,50" fill="#E8590C"/><line x1="84" y1="36" x2="84" y2="60" stroke="#D9480F" stroke-width="3"/></svg>`,
        example: {
          ja: '毎晩日本語を勉強します。',
          hira: 'まいばんにほんごをべんきょうします。',
          vi: 'Mỗi tối tôi đều học tiếng Nhật.'
        }
      },
      {
        id: 'n5_l04_06',
        lesson: 4,
        lessonId: 4,
        level: 'N5',
        kanji: '終わります',
        hanViet: 'Chung',
        hiragana: 'おわります',
        romaji: 'owarimasu',
        meaning: 'kết thúc',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F8F0FC"/><circle cx="50" cy="50" r="28" fill="#AE3EC9"/><rect x="40" y="40" width="20" height="20" rx="3" fill="#FFF"/></svg>`,
        example: {
          ja: '会議は12時に終わります。',
          hira: 'かいぎはじゅうにじにおわります。',
          vi: 'Cuộc họp kết thúc lúc 12 giờ.'
        }
      },
      {
        id: 'n5_l04_07',
        lesson: 4,
        lessonId: 4,
        level: 'N5',
        kanji: 'デパート',
        hanViet: '',
        hiragana: 'デパート',
        romaji: 'depa-to',
        meaning: 'bách hóa',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><rect x="25" y="28" width="50" height="50" rx="4" fill="#F59F00"/><text x="50" y="46" text-anchor="middle" font-size="12" font-weight="bold" fill="#FFF">DEPT</text><rect x="42" y="58" width="16" height="20" fill="#FFF"/></svg>`,
        example: {
          ja: 'デパートは10時に開きます。',
          hira: 'デパートはじゅうじにあきます。',
          vi: 'Trung tâm bách hóa mở cửa lúc 10 giờ.'
        }
      },
      {
        id: 'n5_l04_08',
        lesson: 4,
        lessonId: 4,
        level: 'N5',
        kanji: '銀行',
        hanViet: 'Ngân Hàng',
        hiragana: 'ぎんこう',
        romaji: 'ginkou',
        meaning: 'ngân hàng',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><polygon points="50,22 80,38 20,38" fill="#1864AB"/><rect x="24" y="42" width="10" height="26" fill="#339AF0"/><rect x="45" y="42" width="10" height="26" fill="#339AF0"/><rect x="66" y="42" width="10" height="26" fill="#339AF0"/><rect x="18" y="68" width="64" height="8" rx="2" fill="#1864AB"/></svg>`,
        example: {
          ja: '銀行は9時から3時までです。',
          hira: 'ぎんこうはくじからさんじまでです。',
          vi: 'Ngân hàng mở cửa từ 9 giờ đến 3 giờ.'
        }
      },
      {
        id: 'n5_l04_09',
        lesson: 4,
        lessonId: 4,
        level: 'N5',
        kanji: '郵便局',
        hanViet: 'Bưu Tiện Cục',
        hiragana: 'ゆうびんきょく',
        romaji: 'yuubinkyoku',
        meaning: 'bưu điện',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><rect x="24" y="32" width="52" height="46" rx="4" fill="#E03131"/><text x="50" y="56" text-anchor="middle" font-size="24" font-weight="bold" fill="#FFF">〒</text></svg>`,
        example: {
          ja: '郵便局へ切手を買いに行きます。',
          hira: 'ゆうびんきょくへきってをかいにいきます。',
          vi: 'Tôi đi bưu điện để mua tem.'
        }
      },
      {
        id: 'n5_l04_10',
        lesson: 4,
        lessonId: 4,
        level: 'N5',
        kanji: '図書館',
        hanViet: 'Đồ Thư Quán',
        hiragana: 'としょかん',
        romaji: 'toshokan',
        meaning: 'thư viện',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><rect x="24" y="32" width="52" height="46" rx="4" fill="#0CA678"/><path d="M35 44 L45 44 M35 52 L55 52 M35 60 L65 60" stroke="#FFF" stroke-width="3" stroke-linecap="round"/></svg>`,
        example: {
          ja: '図書館で本を借ります。',
          hira: 'としょかんでほんをかります。',
          vi: 'Tôi mượn sách ở thư viện.'
        }
      },
      {
        id: 'n5_l04_11',
        lesson: 4,
        lessonId: 4,
        level: 'N5',
        kanji: '美術館',
        hanViet: 'Mỹ Thuật Quán',
        hiragana: 'びじゅつかん',
        romaji: 'bijutsukan',
        meaning: 'bảo tàng mỹ thuật',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><rect x="24" y="28" width="52" height="42" rx="4" fill="#7950F2"/><circle cx="40" cy="44" r="6" fill="#FFD43B"/><polygon points="30,62 48,48 68,62" fill="#BE4BDB"/></svg>`,
        example: {
          ja: '日曜日に美術館へ行きます。',
          hira: 'にちようびにびじゅつかんへいきます。',
          vi: 'Chủ Nhật tôi đi bảo tàng mỹ thuật.'
        }
      },
      {
        id: 'n5_l04_12',
        lesson: 4,
        lessonId: 4,
        level: 'N5',
        kanji: '今',
        hanViet: 'Kim',
        hiragana: 'いま',
        romaji: 'ima',
        meaning: 'bây giờ',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><circle cx="50" cy="50" r="28" fill="#FFF" stroke="#F59F00" stroke-width="4"/><line x1="50" y1="50" x2="50" y2="32" stroke="#E67700" stroke-width="3" stroke-linecap="round"/><line x1="50" y1="50" x2="64" y2="50" stroke="#E67700" stroke-width="3" stroke-linecap="round"/></svg>`,
        example: {
          ja: '今何時ですか。',
          hira: 'いまなんじですか。',
          vi: 'Bây giờ là mấy giờ?'
        }
      },
      {
        id: 'n5_l04_13',
        lesson: 4,
        lessonId: 4,
        level: 'N5',
        kanji: 'ー時',
        hanViet: 'Thời',
        hiragana: 'ーじ',
        romaji: '-ji',
        meaning: 'giờ (hậu tố)',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="50" r="28" fill="#339AF0"/><text x="50" y="58" text-anchor="middle" font-size="22" font-weight="bold" fill="#FFF">1:00</text></svg>`,
        example: {
          ja: '今は一時です。',
          hira: 'いまはいちじです。',
          vi: 'Bây giờ là 1 giờ.'
        }
      },
      {
        id: 'n5_l04_14',
        lesson: 4,
        lessonId: 4,
        level: 'N5',
        kanji: 'ー分',
        hanViet: 'Phân',
        hiragana: 'ーふん/ぷん',
        romaji: '-fun / -pun',
        meaning: 'phút (hậu tố)',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="50" r="28" fill="#20C997"/><text x="50" y="58" text-anchor="middle" font-size="20" font-weight="bold" fill="#FFF">:05</text></svg>`,
        example: {
          ja: '今は一時十分です。',
          hira: 'いまはいちじじゅっぷんです。',
          vi: 'Bây giờ là 1 giờ 10 phút.'
        }
      },
      {
        id: 'n5_l04_15',
        lesson: 4,
        lessonId: 4,
        level: 'N5',
        kanji: '半',
        hanViet: 'Bán',
        hiragana: 'はん',
        romaji: 'han',
        meaning: 'rưỡi, nửa',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><path d="M50 22 A28 28 0 0 1 50 78 Z" fill="#F59F00"/><circle cx="50" cy="50" r="28" fill="none" stroke="#F59F00" stroke-width="4"/><text x="50" y="56" text-anchor="middle" font-size="14" font-weight="bold" fill="#FFF">1/2</text></svg>`,
        example: {
          ja: '今は七時半です。',
          hira: 'いまはしちじはんです。',
          vi: 'Bây giờ là 7 giờ rưỡi.'
        }
      },
      {
        id: 'n5_l04_16',
        lesson: 4,
        lessonId: 4,
        level: 'N5',
        kanji: '何時',
        hanViet: 'Hà Thời',
        hiragana: 'なんじ',
        romaji: 'nanji',
        meaning: 'mấy giờ',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><circle cx="50" cy="50" r="28" fill="#FF922B"/><text x="50" y="58" text-anchor="middle" font-size="22" font-weight="bold" fill="#FFF">?時</text></svg>`,
        example: {
          ja: '会議は何時ですか。',
          hira: 'かいぎはなんじですか。',
          vi: 'Cuộc họp lúc mấy giờ?'
        }
      },
      {
        id: 'n5_l04_17',
        lesson: 4,
        lessonId: 4,
        level: 'N5',
        kanji: '何分',
        hanViet: 'Hà Phân',
        hiragana: 'なんぷん',
        romaji: 'nanpun',
        meaning: 'mấy phút',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><circle cx="50" cy="50" r="28" fill="#FF922B"/><text x="50" y="58" text-anchor="middle" font-size="22" font-weight="bold" fill="#FFF">?分</text></svg>`,
        example: {
          ja: '今何時何分ですか。',
          hira: 'いまなんじなんぷんですか。',
          vi: 'Bây giờ là mấy giờ mấy phút?'
        }
      },
      {
        id: 'n5_l04_18',
        lesson: 4,
        lessonId: 4,
        level: 'N5',
        kanji: '午前',
        hanViet: 'Ngọ Tiền',
        hiragana: 'ごぜん',
        romaji: 'gozen',
        meaning: 'sáng AM',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="46" r="16" fill="#339AF0"/><text x="50" y="76" text-anchor="middle" font-size="14" font-weight="bold" fill="#1864AB">AM</text></svg>`,
        example: {
          ja: '午前9時に銀行へ行きます。',
          hira: 'ごぜんくじにぎんこうへいきます。',
          vi: 'Tôi đi ngân hàng lúc 9 giờ sáng.'
        }
      },
      {
        id: 'n5_l04_19',
        lesson: 4,
        lessonId: 4,
        level: 'N5',
        kanji: '午後',
        hanViet: 'Ngọ Hậu',
        hiragana: 'ごご',
        romaji: 'gogo',
        meaning: 'chiều PM',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><circle cx="50" cy="46" r="16" fill="#F76707"/><text x="50" y="76" text-anchor="middle" font-size="14" font-weight="bold" fill="#D9480F">PM</text></svg>`,
        example: {
          ja: '午後3時に友達と会います。',
          hira: 'ごごさんじにともだちとあいます。',
          vi: 'Tôi gặp bạn lúc 3 giờ chiều.'
        }
      },
      {
        id: 'n5_l04_20',
        lesson: 4,
        lessonId: 4,
        level: 'N5',
        kanji: '朝',
        hanViet: 'Triều',
        hiragana: 'あさ',
        romaji: 'asa',
        meaning: 'buổi sáng',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><circle cx="50" cy="62" r="24" fill="#FF6B6B"/><line x1="16" y1="62" x2="84" y2="62" stroke="#C92A2A" stroke-width="4"/></svg>`,
        example: {
          ja: '朝ご飯を食べます。',
          hira: 'あさごはんをたべます。',
          vi: 'Tôi ăn bữa sáng.'
        }
      },
      {
        id: 'n5_l04_21',
        lesson: 4,
        lessonId: 4,
        level: 'N5',
        kanji: '昼',
        hanViet: 'Trù',
        hiragana: 'ひる',
        romaji: 'hiru',
        meaning: 'buổi trưa',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><circle cx="50" cy="50" r="22" fill="#FCC419"/><line x1="50" y1="18" x2="50" y2="24" stroke="#F59F00" stroke-width="3"/></svg>`,
        example: {
          ja: '昼休みに散歩します。',
          hira: 'ひるやすみにさんぽします。',
          vi: 'Tôi đi dạo vào giờ nghỉ trưa.'
        }
      },
      {
        id: 'n5_l04_22',
        lesson: 4,
        lessonId: 4,
        level: 'N5',
        kanji: '晩',
        hanViet: 'Vãn',
        hiragana: 'ばん',
        romaji: 'ban',
        meaning: 'buổi tối',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#343A40"/><path d="M40 28 C56 28 66 42 66 58 C66 68 62 76 54 80 C68 76 78 62 78 46 C78 30 64 18 48 18 C45 18 42 19 40 20 Z" fill="#FFD43B"/></svg>`,
        example: {
          ja: '晩ご飯を食べました。',
          hira: 'ばんごはんをたべました。',
          vi: 'Tôi đã ăn cơm tối rồi.'
        }
      },
      {
        id: 'n5_l04_23',
        lesson: 4,
        lessonId: 4,
        level: 'N5',
        kanji: '昨日',
        hanViet: 'Tạc Nhật',
        hiragana: 'きのう',
        romaji: 'kinou',
        meaning: 'hôm qua',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E9ECEF"/><rect x="24" y="28" width="52" height="48" rx="4" fill="#868E96"/><path d="M60 52 L40 52 M48 44 L40 52 L48 60" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        example: {
          ja: '昨日は勉強しませんでした。',
          hira: 'きのうはべんきょうしませんでした。',
          vi: 'Hôm qua tôi đã không học.'
        }
      },
      {
        id: 'n5_l04_24',
        lesson: 4,
        lessonId: 4,
        level: 'N5',
        kanji: '今日',
        hanViet: 'Kim Nhật',
        hiragana: 'きょう',
        romaji: 'kyou',
        meaning: 'hôm nay',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><rect x="24" y="28" width="52" height="48" rx="4" fill="#F59F00"/><circle cx="50" cy="52" r="10" fill="#FFF"/></svg>`,
        example: {
          ja: '今日はいい天気ですね。',
          hira: 'きょうはいいてんきですね。',
          vi: 'Hôm nay thời tiết đẹp nhỉ.'
        }
      },
      {
        id: 'n5_l04_25',
        lesson: 4,
        lessonId: 4,
        level: 'N5',
        kanji: '明日',
        hanViet: 'Minh Nhật',
        hiragana: 'あした',
        romaji: 'ashita',
        meaning: 'ngày mai',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="24" y="28" width="52" height="48" rx="4" fill="#228BE6"/><path d="M40 52 L60 52 M52 44 L60 52 L52 60" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        example: {
          ja: '明日は会社へ行きます。',
          hira: 'あしたはかいしゃへいきます。',
          vi: 'Ngày mai tôi đi làm ở công ty.'
        }
      },
      {
        id: 'n5_l04_26',
        lesson: 4,
        lessonId: 4,
        level: 'N5',
        kanji: '番号',
        hanViet: 'Phiên Hiệu',
        hiragana: 'ばんごう',
        romaji: 'bangou',
        meaning: 'số',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><rect x="24" y="32" width="52" height="38" rx="4" fill="#0CA678"/><text x="50" y="58" text-anchor="middle" font-size="22" font-weight="bold" fill="#FFF">#No.</text></svg>`,
        example: {
          ja: '電話番号を教えてください。',
          hira: 'でんわばんごうをおしえてください。',
          vi: 'Xin hãy cho tôi biết số điện thoại.'
        }
      },
      {
        id: 'n5_l04_27',
        lesson: 4,
        lessonId: 4,
        level: 'N5',
        kanji: '何番',
        hanViet: 'Hà Phiên',
        hiragana: 'なんばん',
        romaji: 'nanban',
        meaning: 'số mấy',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><rect x="24" y="32" width="52" height="38" rx="4" fill="#FF922B"/><text x="50" y="58" text-anchor="middle" font-size="22" font-weight="bold" fill="#FFF">#?</text></svg>`,
        example: {
          ja: '部屋の番号は何番ですか。',
          hira: 'へやのばんごうはなんばんですか。',
          vi: 'Số phòng là số mấy vậy?'
        }
      }
    ]
  },

// --------------------------------------------------------------------------
  // BÀI 5: PHƯƠNG TIỆN GIAO THÔNG & NGÀY THÁNG (45 TỪ)
  // --------------------------------------------------------------------------
  {
    lessonNumber: 5,
    level: 'N5',
    title: 'Bài 5: Phương tiện giao thông & Ngày tháng',
    topicVi: 'Phương tiện giao thông & Ngày tháng',
    icon: '🚅',
    grammarPoint: 'Động từ di chuyển: 行きます/来ます/帰ります. Trợ từ へ chỉ đích đến. Trợ từ で chỉ phương tiện. Cùng với ai: ～と～. Ngày tháng & câu hỏi いつ.',
    vocab: [
      {
        id: 'n5_l05_01',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '行きます',
        hanViet: 'Hành',
        hiragana: 'いきます',
        romaji: 'ikimasu',
        meaning: 'đi',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><path d="M30 50 L70 50 M55 35 L70 50 L55 65" stroke="#1971C2" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        example: {
          ja: '京都へ行きます。',
          hira: 'きょうとへいきます。',
          vi: 'Tôi đi Kyoto.'
        }
      },
      {
        id: 'n5_l05_02',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '来ます',
        hanViet: 'Lai',
        hiragana: 'きます',
        romaji: 'kimasu',
        meaning: 'đến',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><path d="M70 50 L30 50 M45 35 L30 50 L45 65" stroke="#0CA678" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        example: {
          ja: '友達が日本へ来ます。',
          hira: 'ともだちがにほんへきます。',
          vi: 'Bạn tôi đến Nhật Bản.'
        }
      },
      {
        id: 'n5_l05_03',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '帰ります',
        hanViet: 'Quy',
        hiragana: 'かえります',
        romaji: 'kaerimasu',
        meaning: 'về',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><polygon points="50,25 78,48 22,48" fill="#F76707"/><rect x="30" y="48" width="40" height="28" fill="#FF922B"/><rect x="44" y="58" width="12" height="18" fill="#FFF"/></svg>`,
        example: {
          ja: 'うちへ帰ります。',
          hira: 'うちへかえります。',
          vi: 'Tôi về nhà.'
        }
      },
      {
        id: 'n5_l05_04',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '自転車',
        hanViet: 'Tự Chuyển Xa',
        hiragana: 'じてんしゃ',
        romaji: 'jitensha',
        meaning: 'xe đạp',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F8F9FA"/><circle cx="32" cy="62" r="14" stroke="#495057" stroke-width="4" fill="none"/><circle cx="68" cy="62" r="14" stroke="#495057" stroke-width="4" fill="none"/><line x1="32" y1="62" x2="52" y2="44" stroke="#228BE6" stroke-width="4"/></svg>`,
        example: {
          ja: '自転車で駅まで行きます。',
          hira: 'じてんしゃでえきまでいきます。',
          vi: 'Tôi đi xe đạp tới nhà ga.'
        }
      },
      {
        id: 'n5_l05_05',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '歩いて',
        hanViet: 'Bộ',
        hiragana: 'あるいて',
        romaji: 'aruite',
        meaning: 'đi bộ',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="52" cy="28" r="8" fill="#0CA678"/><path d="M46 38 L54 50 L42 74 M54 50 L66 68" stroke="#0CA678" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`,
        example: {
          ja: '駅から歩いて帰ります。',
          hira: 'えきからあるいてかえります。',
          vi: 'Tôi đi bộ từ ga về nhà.'
        }
      },
      {
        id: 'n5_l05_06',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '人',
        hanViet: 'Nhân',
        hiragana: 'ひと',
        romaji: 'hito',
        meaning: 'người',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="35" r="14" fill="#1971C2"/><path d="M30 76 C30 58 70 58 70 76 Z" fill="#339AF0"/></svg>`,
        example: {
          ja: 'あの人は親切です。',
          hira: 'あのひとはしんせつです。',
          vi: 'Người kia rất tốt bụng.'
        }
      },
      {
        id: 'n5_l05_07',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '友達',
        hanViet: 'Hữu Đạt',
        hiragana: 'ともだち',
        romaji: 'tomodachi',
        meaning: 'bạn bè',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><circle cx="36" cy="38" r="12" fill="#F76707"/><circle cx="64" cy="38" r="12" fill="#FF922B"/><path d="M22 76 C22 60 50 60 50 76 Z" fill="#F76707"/><path d="M50 76 C50 60 78 60 78 76 Z" fill="#FF922B"/></svg>`,
        example: {
          ja: '友達と映画を見ます。',
          hira: 'ともだちとえいがをみます。',
          vi: 'Tôi xem phim cùng bạn bè.'
        }
      },
      {
        id: 'n5_l05_08',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '彼',
        hanViet: 'Bỉ',
        hiragana: 'かれ',
        romaji: 'kare',
        meaning: 'anh ấy, bạn trai',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="36" r="14" fill="#1864AB"/><path d="M28 76 C28 58 72 58 72 76 Z" fill="#1971C2"/></svg>`,
        example: {
          ja: '彼は親切な先生です。',
          hira: 'かれはしんせつなせんせいです。',
          vi: 'Anh ấy là một giáo viên tốt bụng.'
        }
      },
      {
        id: 'n5_l05_09',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '彼女',
        hanViet: 'Bỉ Nữ',
        hiragana: 'かのじょ',
        romaji: 'kanojo',
        meaning: 'cô ấy, bạn gái',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF0F6"/><circle cx="50" cy="36" r="14" fill="#D6336C"/><path d="M28 76 C28 58 72 58 72 76 Z" fill="#F06595"/></svg>`,
        example: {
          ja: '彼女は英語が上手です。',
          hira: 'かのじょはえいごがじょうずです。',
          vi: 'Cô ấy giỏi tiếng Anh.'
        }
      },
      {
        id: 'n5_l05_10',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '家族',
        hanViet: 'Gia Tộc',
        hiragana: 'かぞく',
        romaji: 'kazoku',
        meaning: 'gia đình',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><circle cx="34" cy="36" r="10" fill="#F59F00"/><circle cx="66" cy="36" r="10" fill="#F59F00"/><circle cx="50" cy="46" r="8" fill="#FCC419"/><path d="M20 76 C20 62 46 62 46 76 Z" fill="#F59F00"/><path d="M54 76 C54 62 80 62 80 76 Z" fill="#F59F00"/><path d="M38 76 C38 66 62 66 62 76 Z" fill="#FCC419"/></svg>`,
        example: {
          ja: '家族と旅行します。',
          hira: 'かぞくとりょこうします。',
          vi: 'Tôi đi du lịch cùng gia đình.'
        }
      },
      {
        id: 'n5_l05_11',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '一人で',
        hanViet: 'Nhất Nhân',
        hiragana: 'ひとりで',
        romaji: 'hitoride',
        meaning: 'một mình',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F1F3F5"/><circle cx="50" cy="36" r="14" fill="#495057"/><path d="M30 76 C30 60 70 60 70 76 Z" fill="#868E96"/></svg>`,
        example: {
          ja: '一人で東京へ行きます。',
          hira: 'ひとりでとうきょうへいきます。',
          vi: 'Tôi đi Tokyo một mình.'
        }
      },
      {
        id: 'n5_l05_12',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '先週',
        hanViet: 'Tiên Chu',
        hiragana: 'せんしゅう',
        romaji: 'senshuu',
        meaning: 'tuần trước',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E9ECEF"/><rect x="22" y="26" width="56" height="48" rx="4" fill="#868E96"/><path d="M58 50 L42 50 M48 42 L42 50 L48 58" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        example: {
          ja: '先週日本へ来ました。',
          hira: 'せんしゅうにほんへきました。',
          vi: 'Tôi đã đến Nhật Bản vào tuần trước.'
        }
      },
      {
        id: 'n5_l05_13',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '今週',
        hanViet: 'Kim Chu',
        hiragana: 'こんしゅう',
        romaji: 'konshuu',
        meaning: 'tuần này',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><rect x="22" y="26" width="56" height="48" rx="4" fill="#F59F00"/><circle cx="50" cy="50" r="8" fill="#FFF"/></svg>`,
        example: {
          ja: '今週は忙しいです。',
          hira: 'こんしゅうはいそがしいです。',
          vi: 'Tuần này tôi rất bận.'
        }
      },
      {
        id: 'n5_l05_14',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '来週',
        hanViet: 'Lai Chu',
        hiragana: 'らいしゅう',
        romaji: 'raishuu',
        meaning: 'tuần sau',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="22" y="26" width="56" height="48" rx="4" fill="#228BE6"/><path d="M42 50 L58 50 M52 42 L58 50 L52 58" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        example: {
          ja: '来週テストがあります。',
          hira: 'らいしゅうテストがあります。',
          vi: 'Tuần sau sẽ có bài kiểm tra.'
        }
      },
      {
        id: 'n5_l05_15',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '先月',
        hanViet: 'Tiên Nguyệt',
        hiragana: 'せんげつ',
        romaji: 'sengetsu',
        meaning: 'tháng trước',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E9ECEF"/><path d="M48 24 C58 24 66 34 66 48 C66 62 58 72 48 72 C42 72 38 70 34 66 C42 62 48 56 48 48 C48 40 42 34 34 30 C38 26 42 24 48 24 Z" fill="#868E96"/></svg>`,
        example: {
          ja: '先月ハノイへ行きました。',
          hira: 'せんげつハノイへいきました。',
          vi: 'Tháng trước tôi đã đi Hà Nội.'
        }
      },
      {
        id: 'n5_l05_16',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '今月',
        hanViet: 'Kim Nguyệt',
        hiragana: 'こんげつ',
        romaji: 'kongetsu',
        meaning: 'tháng này',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><path d="M48 24 C58 24 66 34 66 48 C66 62 58 72 48 72 C42 72 38 70 34 66 C42 62 48 56 48 48 C48 40 42 34 34 30 C38 26 42 24 48 24 Z" fill="#F59F00"/></svg>`,
        example: {
          ja: '今月誕生日です。',
          hira: 'こんげつたんじょうびです。',
          vi: 'Tháng này là sinh nhật của tôi.'
        }
      },
      {
        id: 'n5_l05_17',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '来月',
        hanViet: 'Lai Nguyệt',
        hiragana: 'らいげつ',
        romaji: 'raigetsu',
        meaning: 'tháng sau',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><path d="M48 24 C58 24 66 34 66 48 C66 62 58 72 48 72 C42 72 38 70 34 66 C42 62 48 56 48 48 C48 40 42 34 34 30 C38 26 42 24 48 24 Z" fill="#228BE6"/></svg>`,
        example: {
          ja: '来月国へ帰ります。',
          hira: 'らいげつくにへかえります。',
          vi: 'Tháng sau tôi sẽ về nước.'
        }
      },
      {
        id: 'n5_l05_18',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '去年',
        hanViet: 'Khứ Niên',
        hiragana: 'きょねん',
        romaji: 'kyonen',
        meaning: 'năm ngoái',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E9ECEF"/><rect x="22" y="28" width="56" height="46" rx="4" fill="#868E96"/><text x="50" y="56" text-anchor="middle" font-size="14" font-weight="bold" fill="#FFF">-1 Year</text></svg>`,
        example: {
          ja: '去年大学を卒業しました。',
          hira: 'きょねんだいがくをそつぎょうしました。',
          vi: 'Năm ngoái tôi đã tốt nghiệp đại học.'
        }
      },
      {
        id: 'n5_l05_19',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '今年',
        hanViet: 'Kim Niên',
        hiragana: 'ことし',
        romaji: 'kotoshi',
        meaning: 'năm nay',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><rect x="22" y="28" width="56" height="46" rx="4" fill="#F59F00"/><text x="50" y="56" text-anchor="middle" font-size="14" font-weight="bold" fill="#FFF">This Year</text></svg>`,
        example: {
          ja: '今年20歳になります。',
          hira: 'ことしはたちになります。',
          vi: 'Năm nay tôi tròn 20 tuổi.'
        }
      },
      {
        id: 'n5_l05_20',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '来年',
        hanViet: 'Lai Niên',
        hiragana: 'らいねん',
        romaji: 'rainen',
        meaning: 'năm sau',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="22" y="28" width="56" height="46" rx="4" fill="#228BE6"/><text x="50" y="56" text-anchor="middle" font-size="14" font-weight="bold" fill="#FFF">+1 Year</text></svg>`,
        example: {
          ja: '来年日本で働きます。',
          hira: 'らいねんにほんではたらきます。',
          vi: 'Năm sau tôi sẽ làm việc ở Nhật Bản.'
        }
      },
      {
        id: 'n5_l05_21',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: 'ー月',
        hanViet: 'Nguyệt',
        hiragana: 'ーがつ',
        romaji: '-gatsu',
        meaning: 'tháng (hậu tố đếm tháng)',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="50" r="28" fill="#20C997"/><text x="50" y="58" text-anchor="middle" font-size="20" font-weight="bold" fill="#FFF">4月</text></svg>`,
        example: {
          ja: '桜は四月に咲きます。',
          hira: 'さくらはしがつにさきます。',
          vi: 'Hoa anh đào nở vào tháng 4.'
        }
      },
      {
        id: 'n5_l05_22',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '何月',
        hanViet: 'Hà Nguyệt',
        hiragana: 'なんがつ',
        romaji: 'nangatsu',
        meaning: 'tháng mấy',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><circle cx="50" cy="50" r="28" fill="#FCC419"/><text x="50" y="58" text-anchor="middle" font-size="20" font-weight="bold" fill="#D9480F">?月</text></svg>`,
        example: {
          ja: '誕生日は何月ですか。',
          hira: 'たんじょうびはなんがつですか。',
          vi: 'Sinh nhật bạn vào tháng mấy?'
        }
      },
      {
        id: 'n5_l05_23',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '一日',
        hanViet: 'Nhất Nhật',
        hiragana: 'ついたち',
        romaji: 'tsuitachi',
        meaning: 'mồng 1',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><rect x="22" y="26" width="56" height="48" rx="4" fill="#E03131"/><text x="50" y="58" text-anchor="middle" font-size="24" font-weight="bold" fill="#FFF">1日</text></svg>`,
        example: {
          ja: '五月一日は休日です。',
          hira: 'ごがつついたちはきゅうじつです。',
          vi: 'Mồng 1 tháng 5 là ngày nghỉ.'
        }
      },
      {
        id: 'n5_l05_24',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '二日',
        hanViet: 'Nhị Nhật',
        hiragana: 'ふつか',
        romaji: 'futsuka',
        meaning: 'mồng 2',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="22" y="26" width="56" height="48" rx="4" fill="#339AF0"/><text x="50" y="58" text-anchor="middle" font-size="24" font-weight="bold" fill="#FFF">2日</text></svg>`,
        example: {
          ja: '二日に会議があります。',
          hira: 'ふつかにかいぎがあります。',
          vi: 'Mồng 2 có cuộc họp.'
        }
      },
      {
        id: 'n5_l05_25',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '三日',
        hanViet: 'Tam Nhật',
        hiragana: 'みっか',
        romaji: 'mikka',
        meaning: 'mồng 3',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><rect x="22" y="26" width="56" height="48" rx="4" fill="#20C997"/><text x="50" y="58" text-anchor="middle" font-size="24" font-weight="bold" fill="#FFF">3日</text></svg>`,
        example: {
          ja: '三日に友達と会います。',
          hira: 'みっかにともだちとあいます。',
          vi: 'Mồng 3 tôi gặp bạn.'
        }
      },
      {
        id: 'n5_l05_26',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '四日',
        hanViet: 'Tứ Nhật',
        hiragana: 'よっか',
        romaji: 'yokka',
        meaning: 'mồng 4',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><rect x="22" y="26" width="56" height="48" rx="4" fill="#F59F00"/><text x="50" y="58" text-anchor="middle" font-size="24" font-weight="bold" fill="#FFF">4日</text></svg>`,
        example: {
          ja: '四日は日曜日です。',
          hira: 'よっかはにちようびです。',
          vi: 'Mồng 4 là Chủ Nhật.'
        }
      },
      {
        id: 'n5_l05_27',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '五日',
        hanViet: 'Ngũ Nhật',
        hiragana: 'いつか',
        romaji: 'itsuka',
        meaning: 'mồng 5',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><rect x="22" y="26" width="56" height="48" rx="4" fill="#7950F2"/><text x="50" y="58" text-anchor="middle" font-size="24" font-weight="bold" fill="#FFF">5日</text></svg>`,
        example: {
          ja: '五日にテストがあります。',
          hira: 'いつかにテストがあります。',
          vi: 'Mồng 5 có bài kiểm tra.'
        }
      },
      {
        id: 'n5_l05_28',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '六日',
        hanViet: 'Lục Nhật',
        hiragana: 'むいか',
        romaji: 'muika',
        meaning: 'mồng 6',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="22" y="26" width="56" height="48" rx="4" fill="#1864AB"/><text x="50" y="58" text-anchor="middle" font-size="24" font-weight="bold" fill="#FFF">6日</text></svg>`,
        example: {
          ja: '六日に荷物が届きます。',
          hira: 'むいかににもつがとどきます。',
          vi: 'Hành lý sẽ đến vào mồng 6.'
        }
      },
      {
        id: 'n5_l05_29',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '七日',
        hanViet: 'Thất Nhật',
        hiragana: 'なのか',
        romaji: 'nanoka',
        meaning: 'mồng 7',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><rect x="22" y="26" width="56" height="48" rx="4" fill="#F76707"/><text x="50" y="58" text-anchor="middle" font-size="24" font-weight="bold" fill="#FFF">7日</text></svg>`,
        example: {
          ja: '七日は七夕です。',
          hira: 'なのかはたなばたです。',
          vi: 'Mồng 7 là lễ Tanabata.'
        }
      },
      {
        id: 'n5_l05_30',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '八日',
        hanViet: 'Bát Nhật',
        hiragana: 'ようか',
        romaji: 'youka',
        meaning: 'mồng 8',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><rect x="22" y="26" width="56" height="48" rx="4" fill="#0CA678"/><text x="50" y="58" text-anchor="middle" font-size="24" font-weight="bold" fill="#FFF">8日</text></svg>`,
        example: {
          ja: '八日に病院へ行きます。',
          hira: 'ようかにびょういんへいきます。',
          vi: 'Mồng 8 tôi đi bệnh viện.'
        }
      },
      {
        id: 'n5_l05_31',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '九日',
        hanViet: 'Cửu Nhật',
        hiragana: 'ここのか',
        romaji: 'kokonoka',
        meaning: 'mồng 9',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F8F0FC"/><rect x="22" y="26" width="56" height="48" rx="4" fill="#AE3EC9"/><text x="50" y="58" text-anchor="middle" font-size="24" font-weight="bold" fill="#FFF">9日</text></svg>`,
        example: {
          ja: '九日は休みです。',
          hira: 'ここのかはやすみです。',
          vi: 'Mồng 9 là ngày nghỉ.'
        }
      },
      {
        id: 'n5_l05_32',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '十日',
        hanViet: 'Thập Nhật',
        hiragana: 'とおか',
        romaji: 'tooka',
        meaning: 'mồng 10',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><rect x="22" y="26" width="56" height="48" rx="4" fill="#FAB005"/><text x="50" y="58" text-anchor="middle" font-size="24" font-weight="bold" fill="#FFF">10日</text></svg>`,
        example: {
          ja: '十日に出発します。',
          hira: 'とおかにしゅっぱつします。',
          vi: 'Mồng 10 tôi xuất phát.'
        }
      },
      {
        id: 'n5_l05_33',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '十四日',
        hanViet: 'Thập Tứ Nhật',
        hiragana: 'じゅうよっか',
        romaji: 'juuyokka',
        meaning: 'ngày 14',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><rect x="22" y="26" width="56" height="48" rx="4" fill="#FA5252"/><text x="50" y="58" text-anchor="middle" font-size="22" font-weight="bold" fill="#FFF">14日</text></svg>`,
        example: {
          ja: '二月十四日はバレンタインデーです。',
          hira: 'にがつじゅうよっかはバレンタインデーです。',
          vi: 'Ngày 14 tháng 2 là ngày Valentine.'
        }
      },
      {
        id: 'n5_l05_34',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '二十日',
        hanViet: 'Nhị Thập Nhật',
        hiragana: 'はつか',
        romaji: 'hatsuka',
        meaning: 'ngày 20',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="22" y="26" width="56" height="48" rx="4" fill="#1C7ED6"/><text x="50" y="58" text-anchor="middle" font-size="22" font-weight="bold" fill="#FFF">20日</text></svg>`,
        example: {
          ja: '二十日は給料日です。',
          hira: 'はつかはきゅうりょうびです。',
          vi: 'Ngày 20 là ngày nhận lương.'
        }
      },
      {
        id: 'n5_l05_35',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '二十四日',
        hanViet: 'Nhị Thập Tứ Nhật',
        hiragana: 'にじゅうよっか',
        romaji: 'nijuuyokka',
        meaning: 'ngày 24',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><rect x="22" y="26" width="56" height="48" rx="4" fill="#FD7E14"/><text x="50" y="58" text-anchor="middle" font-size="20" font-weight="bold" fill="#FFF">24日</text></svg>`,
        example: {
          ja: '十二月二十四日はクリスマスイブです。',
          hira: 'じゅうにがつにじゅうよっかはクリスマスイブです。',
          vi: 'Ngày 24 tháng 12 là đêm Giáng sinh.'
        }
      },
      {
        id: 'n5_l05_36',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: 'ー日',
        hanViet: 'Nhật',
        hiragana: 'ーにち',
        romaji: '-nichi',
        meaning: 'ngày (hậu tố đếm ngày)',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="50" r="28" fill="#12B886"/><text x="50" y="58" text-anchor="middle" font-size="20" font-weight="bold" fill="#FFF">15日</text></svg>`,
        example: {
          ja: '十五日は金曜日です。',
          hira: 'じゅうごにちはきんようびです。',
          vi: 'Ngày 15 là thứ Sáu.'
        }
      },
      {
        id: 'n5_l05_37',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '何日',
        hanViet: 'Hà Nhật',
        hiragana: 'なんにち',
        romaji: 'nannichi',
        meaning: 'ngày mấy',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><circle cx="50" cy="50" r="28" fill="#F59F00"/><text x="50" y="58" text-anchor="middle" font-size="20" font-weight="bold" fill="#FFF">?日</text></svg>`,
        example: {
          ja: '今日は何日ですか。',
          hira: 'きょうはなんにちですか。',
          vi: 'Hôm nay là ngày mấy?'
        }
      },
      {
        id: 'n5_l05_38',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: 'いつ',
        hanViet: '',
        hiragana: 'いつ',
        romaji: 'itsu',
        meaning: 'khi nào',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><circle cx="50" cy="50" r="28" fill="#7950F2"/><text x="50" y="60" text-anchor="middle" font-size="26" font-weight="bold" fill="#FFF">?</text></svg>`,
        example: {
          ja: 'いつ日本へ行きますか。',
          hira: 'いつにほんへいきますか。',
          vi: 'Khi nào bạn đi Nhật Bản?'
        }
      },
      {
        id: 'n5_l05_39',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '誕生日',
        hanViet: 'Đản Sinh Nhật',
        hiragana: 'たんじょうび',
        romaji: 'tanjoubi',
        meaning: 'sinh nhật',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF0F6"/><rect x="30" y="48" width="40" height="28" rx="4" fill="#F06595"/><rect x="47" y="48" width="6" height="28" fill="#FFF"/><rect x="48" y="32" width="4" height="16" fill="#FAB005"/><circle cx="50" cy="28" r="4" fill="#FF8787"/></svg>`,
        example: {
          ja: 'お誕生日おめでとうございます。',
          hira: 'おたんじょうびおめでとうございます。',
          vi: 'Chúc mừng sinh nhật!'
        }
      },
      {
        id: 'n5_l05_40',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '普通',
        hanViet: 'Phổ Thông',
        hiragana: 'ふつう',
        romaji: 'futsuu',
        meaning: 'tàu thường',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="25" y="32" width="50" height="38" rx="6" fill="#339AF0"/><rect x="32" y="40" width="14" height="12" fill="#FFF"/><rect x="54" y="40" width="14" height="12" fill="#FFF"/><circle cx="36" cy="62" r="3" fill="#FFD43B"/><circle cx="64" cy="62" r="3" fill="#FFD43B"/></svg>`,
        example: {
          ja: '普通電車に乗ります。',
          hira: 'ふつうでんしゃにのります。',
          vi: 'Tôi lên tàu thường (đỗ mọi ga).'
        }
      },
      {
        id: 'n5_l05_41',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '急行',
        hanViet: 'Cấp Hành',
        hiragana: 'きゅうこう',
        romaji: 'kyuukou',
        meaning: 'tàu tốc hành',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><rect x="25" y="32" width="50" height="38" rx="6" fill="#F76707"/><path d="M42 42 L58 42 M50 36 L58 42 L50 48" stroke="#FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        example: {
          ja: '急行は次の駅に止まります。',
          hira: 'きゅうこうはつぎのえきにとまります。',
          vi: 'Tàu tốc hành sẽ đỗ ở ga tiếp theo.'
        }
      },
      {
        id: 'n5_l05_42',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '特急',
        hanViet: 'Đặc Cấp',
        hiragana: 'とっきゅう',
        romaji: 'tokkyuu',
        meaning: 'tàu đặc biệt',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><rect x="25" y="32" width="50" height="38" rx="6" fill="#E03131"/><polygon points="46,38 58,48 46,58" fill="#FFD43B"/></svg>`,
        example: {
          ja: '特急券を買います。',
          hira: 'とっきゅうけんをかいます。',
          vi: 'Tôi mua vé tàu đặc biệt (tokkyuu).'
        }
      },
      {
        id: 'n5_l05_43',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '次の',
        hanViet: 'Thứ',
        hiragana: 'つぎの',
        romaji: 'tsugino',
        meaning: 'tiếp theo',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><path d="M35 50 L65 50 M52 38 L65 50 L52 62" stroke="#0CA678" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        example: {
          ja: '次の電車は何時ですか。',
          hira: 'つぎのでんしゃはなんじですか。',
          vi: 'Chuyến tàu tiếp theo là lúc mấy giờ?'
        }
      },
      {
        id: 'n5_l05_44',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: 'どういたしまして',
        hanViet: '',
        hiragana: 'どういたしまして',
        romaji: 'douitashimashite',
        meaning: 'Không có chi',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="40" r="14" fill="#339AF0"/><path d="M28 76 C28 60 72 60 72 76 Z" fill="#4DABF7"/><path d="M42 46 Q50 54 58 46" stroke="#FFF" stroke-width="3" stroke-linecap="round" fill="none"/></svg>`,
        example: {
          ja: '「ありがとうございます。」「どういたしまして。」',
          hira: '「ありがとうございます。」「どういたしまして。」',
          vi: '“Cảm ơn anh.” “Không có chi.”'
        }
      },
      {
        id: 'n5_l05_45',
        lesson: 5,
        lessonId: 5,
        level: 'N5',
        kanji: '一番線',
        hanViet: 'Phiên Tuyến',
        hiragana: 'いちばんせん',
        romaji: 'ichibansen',
        meaning: 'đường tàu số 1',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><rect x="22" y="30" width="56" height="40" rx="4" fill="#F59F00"/><text x="50" y="58" text-anchor="middle" font-size="20" font-weight="bold" fill="#FFF">1番線</text></svg>`,
        example: {
          ja: '東京行きは一番線です。',
          hira: 'とうきょうゆきはいちばんせんです。',
          vi: 'Tàu đi Tokyo ở đường tàu số 1.'
        }
      }
    ]
  },

// --------------------------------------------------------------------------
  // BÀI 6: ĐỘNG TỪ HÀNH ĐỘNG & RỦ RÊ (28 TỪ)
  // --------------------------------------------------------------------------
  {
    lessonNumber: 6,
    level: 'N5',
    title: 'Bài 6: Động từ hành động & Bữa ăn',
    topicVi: 'Động từ hành động & Rủ rê',
    icon: '🍱',
    grammarPoint: 'Ngoại động từ: Danh từ + を + Động từ (食べます, 飲みます...). Địa điểm diễn ra hành động: N + で + V. Mời mọc & rủ rê: ～ませんか, ～ましょう.',
    vocab: [
      {
        id: 'n5_l06_01',
        lesson: 6,
        lessonId: 6,
        level: 'N5',
        kanji: '食べます',
        hanViet: 'Thực',
        hiragana: 'たべます',
        romaji: 'tabemasu',
        meaning: 'ăn',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><path d="M28 50 C28 72 72 72 72 50 Z" fill="#D9480F"/><path d="M30 50 C30 36 70 36 70 50 Z" fill="#FFF"/><line x1="24" y1="36" x2="76" y2="46" stroke="#495057" stroke-width="3"/></svg>`,
        example: {
          ja: 'ご飯を食べます。',
          hira: 'ごはんをたべます。',
          vi: 'Tôi ăn cơm.'
        }
      },
      {
        id: 'n5_l06_02',
        lesson: 6,
        lessonId: 6,
        level: 'N5',
        kanji: '飲みます',
        hanViet: 'Ẩm',
        hiragana: 'のみます',
        romaji: 'nomimasu',
        meaning: 'uống',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><path d="M36 32 L38 68 C38 72 62 72 62 68 L64 32 Z" fill="#339AF0"/><ellipse cx="50" cy="32" rx="14" ry="4" fill="#1864AB"/></svg>`,
        example: {
          ja: '水を飲みます。',
          hira: 'みずをのみます。',
          vi: 'Tôi uống nước.'
        }
      },
      {
        id: 'n5_l06_03',
        lesson: 6,
        lessonId: 6,
        level: 'N5',
        kanji: '吸います',
        hanViet: 'Hấp',
        hiragana: 'すいます',
        romaji: 'suimasu',
        meaning: 'hút (thuốc)',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F1F3F5"/><rect x="25" y="44" width="40" height="12" rx="2" fill="#E9ECEF" stroke="#ADB5BD" stroke-width="2"/><rect x="65" y="44" width="12" height="12" fill="#F59F00"/><path d="M22 42 Q18 36 22 30 Q26 24 20 18" stroke="#868E96" stroke-width="2" fill="none"/></svg>`,
        example: {
          ja: '煙草を吸います。',
          hira: 'たばこをすいます。',
          vi: 'Tôi hút thuốc lá.'
        }
      },
      {
        id: 'n5_l06_04',
        lesson: 6,
        lessonId: 6,
        level: 'N5',
        kanji: '見ます',
        hanViet: 'Kiến',
        hiragana: 'みます',
        romaji: 'mimasu',
        meaning: 'xem, nhìn',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="50" r="22" fill="none" stroke="#0CA678" stroke-width="4"/><circle cx="50" cy="50" r="10" fill="#20C997"/><path d="M26 50 Q50 26 74 50 Q50 74 26 50 Z" fill="none" stroke="#0CA678" stroke-width="3"/></svg>`,
        example: {
          ja: 'テレビを見ます。',
          hira: 'テレビをみます。',
          vi: 'Tôi xem ti vi.'
        }
      },
      {
        id: 'n5_l06_05',
        lesson: 6,
        lessonId: 6,
        level: 'N5',
        kanji: '聞きます',
        hanViet: 'Văn',
        hiragana: 'ききます',
        romaji: 'kikimasu',
        meaning: 'nghe',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><path d="M30 50 A20 20 0 0 1 70 50" fill="none" stroke="#7950F2" stroke-width="5" stroke-linecap="round"/><rect x="25" y="46" width="10" height="20" rx="4" fill="#5F3DC4"/><rect x="65" y="46" width="10" height="20" rx="4" fill="#5F3DC4"/></svg>`,
        example: {
          ja: '音楽を聞きます。',
          hira: 'おんがくをききます。',
          vi: 'Tôi nghe âm nhạc.'
        }
      },
      {
        id: 'n5_l06_06',
        lesson: 6,
        lessonId: 6,
        level: 'N5',
        kanji: '読みます',
        hanViet: 'Độc',
        hiragana: 'よみます',
        romaji: 'yomimasu',
        meaning: 'đọc',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><polygon points="50,30 20,40 20,72 50,62" fill="#FD7E14"/><polygon points="50,30 80,40 80,72 50,62" fill="#F76707"/><line x1="50" y1="30" x2="50" y2="62" stroke="#FFF" stroke-width="2"/></svg>`,
        example: {
          ja: '本を読みます。',
          hira: 'ほんをよみます。',
          vi: 'Tôi đọc sách.'
        }
      },
      {
        id: 'n5_l06_07',
        lesson: 6,
        lessonId: 6,
        level: 'N5',
        kanji: '書きます',
        hanViet: 'Thư',
        hiragana: 'かきます',
        romaji: 'kakimasu',
        meaning: 'viết, vẽ',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><polygon points="65,25 75,35 40,70 30,70 30,60" fill="#1971C2"/><polygon points="28,72 34,72 30,76" fill="#1864AB"/></svg>`,
        example: {
          ja: '手紙を書きます。',
          hira: 'てがみをかきます。',
          vi: 'Tôi viết thư.'
        }
      },
      {
        id: 'n5_l06_08',
        lesson: 6,
        lessonId: 6,
        level: 'N5',
        kanji: '買います',
        hanViet: 'Mãi',
        hiragana: 'かいます',
        romaji: 'kaimasu',
        meaning: 'mua',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><rect x="28" y="44" width="44" height="34" rx="4" fill="#F59F00"/><path d="M40 44 L40 32 C40 28 60 28 60 32 L60 44" stroke="#E67700" stroke-width="4" fill="none"/></svg>`,
        example: {
          ja: 'パンを買います。',
          hira: 'パンをかいます。',
          vi: 'Tôi mua bánh mì.'
        }
      },
      {
        id: 'n5_l06_09',
        lesson: 6,
        lessonId: 6,
        level: 'N5',
        kanji: '撮ります',
        hanViet: 'Toát',
        hiragana: 'とります',
        romaji: 'torimasu',
        meaning: 'chụp ảnh',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E9ECEF"/><rect x="24" y="36" width="52" height="36" rx="4" fill="#495057"/><circle cx="50" cy="54" r="12" fill="#868E96"/><circle cx="50" cy="54" r="7" fill="#212529"/><rect x="34" y="30" width="14" height="6" fill="#343A40"/></svg>`,
        example: {
          ja: '写真を撮ります。',
          hira: 'しゃしんをとります。',
          vi: 'Tôi chụp ảnh.'
        }
      },
      {
        id: 'n5_l06_10',
        lesson: 6,
        lessonId: 6,
        level: 'N5',
        kanji: 'します',
        hanViet: '',
        hiragana: 'します',
        romaji: 'shimasu',
        meaning: 'làm, chơi',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><polygon points="50,22 84,36 50,50 16,36" fill="#FA5252"/><path d="M30 50 L50 68 L70 50" stroke="#E03131" stroke-width="4" stroke-linecap="round" fill="none"/></svg>`,
        example: {
          ja: '宿題をします。',
          hira: 'しゅくだいをします。',
          vi: 'Tôi làm bài tập về nhà.'
        }
      },
      {
        id: 'n5_l06_11',
        lesson: 6,
        lessonId: 6,
        level: 'N5',
        kanji: '会います',
        hanViet: 'Hội',
        hiragana: 'あいます',
        romaji: 'aimasu',
        meaning: 'gặp gỡ bạn',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><circle cx="36" cy="38" r="12" fill="#F76707"/><circle cx="64" cy="38" r="12" fill="#FF922B"/><path d="M22 76 C22 60 50 60 50 76 Z" fill="#F76707"/><path d="M50 76 C50 60 78 60 78 76 Z" fill="#FF922B"/></svg>`,
        example: {
          ja: '駅で友達に会います。',
          hira: 'えきでともだちにあいます。',
          vi: 'Tôi gặp bạn ở nhà ga.'
        }
      },
      {
        id: 'n5_l06_12',
        lesson: 6,
        lessonId: 6,
        level: 'N5',
        kanji: 'ビデオ',
        hanViet: '',
        hiragana: 'ビデオ',
        romaji: 'bideo',
        meaning: 'băng video, video',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="22" y="32" width="56" height="36" rx="4" fill="#1971C2"/><circle cx="38" cy="50" r="8" fill="#FFF"/><circle cx="62" cy="50" r="8" fill="#FFF"/><line x1="38" y1="50" x2="62" y2="50" stroke="#FFF" stroke-width="3"/></svg>`,
        example: {
          ja: 'ビデオを見ます。',
          hira: 'ビデオをみます。',
          vi: 'Tôi xem video.'
        }
      },
      {
        id: 'n5_l06_13',
        lesson: 6,
        lessonId: 6,
        level: 'N5',
        kanji: '映画',
        hanViet: 'Ánh Họa',
        hiragana: 'えいが',
        romaji: 'eiga',
        meaning: 'phim',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#343A40"/><rect x="24" y="30" width="52" height="40" rx="3" fill="#212529" stroke="#CED4DA" stroke-width="2"/><polygon points="44,40 60,50 44,60" fill="#FFD43B"/></svg>`,
        example: {
          ja: '映画館で映画を見ました。',
          hira: 'えいがかんでえいがをみました。',
          vi: 'Tôi đã xem phim ở rạp chiếu phim.'
        }
      },
      {
        id: 'n5_l06_14',
        lesson: 6,
        lessonId: 6,
        level: 'N5',
        kanji: 'CD',
        hanViet: '',
        hiragana: 'CD',
        romaji: 'shii-dii',
        meaning: 'đĩa CD',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F8F9FA"/><circle cx="50" cy="50" r="30" fill="#E9ECEF" stroke="#CED4DA" stroke-width="3"/><circle cx="50" cy="50" r="10" fill="#FFF" stroke="#ADB5BD" stroke-width="2"/><circle cx="50" cy="50" r="4" fill="#495057"/></svg>`,
        example: {
          ja: '日本のCDを買いました。',
          hira: 'にほんのCDをかいました。',
          vi: 'Tôi đã mua đĩa CD của Nhật.'
        }
      },
      {
        id: 'n5_l06_15',
        lesson: 6,
        lessonId: 6,
        level: 'N5',
        kanji: '手紙',
        hanViet: 'Thủ Chỉ',
        hiragana: 'てがみ',
        romaji: 'tegami',
        meaning: 'thư, bức thư',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><rect x="22" y="34" width="56" height="34" rx="3" fill="#FFA8A8"/><polygon points="22,34 50,54 78,34" fill="#FA5252"/></svg>`,
        example: {
          ja: '家族に手紙を書きました。',
          hira: 'かぞくにてがみをかきました。',
          vi: 'Tôi đã viết thư cho gia đình.'
        }
      },
      {
        id: 'n5_l06_16',
        lesson: 6,
        lessonId: 6,
        level: 'N5',
        kanji: 'レポート',
        hanViet: '',
        hiragana: 'レポート',
        romaji: 'repo-to',
        meaning: 'báo cáo',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="28" y="24" width="44" height="52" rx="3" fill="#FFF" stroke="#339AF0" stroke-width="3"/><line x1="36" y1="36" x2="64" y2="36" stroke="#1864AB" stroke-width="3"/><line x1="36" y1="46" x2="64" y2="46" stroke="#74C0FC" stroke-width="3"/><line x1="36" y1="56" x2="54" y2="56" stroke="#74C0FC" stroke-width="3"/></svg>`,
        example: {
          ja: 'レポートを出します。',
          hira: 'レポートをだします。',
          vi: 'Tôi nộp báo cáo.'
        }
      },
      {
        id: 'n5_l06_17',
        lesson: 6,
        lessonId: 6,
        level: 'N5',
        kanji: '写真',
        hanViet: 'Tả Chân',
        hiragana: 'しゃしん',
        romaji: 'shashin',
        meaning: 'ảnh, bức ảnh',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><rect x="24" y="28" width="52" height="44" rx="4" fill="#20C997"/><circle cx="38" cy="42" r="6" fill="#FFD43B"/><polygon points="30,62 48,46 68,62" fill="#0CA678"/></svg>`,
        example: {
          ja: '旅行の写真を撮りました。',
          hira: 'りょこうのしゃしんをとりました。',
          vi: 'Tôi đã chụp ảnh chuyến du lịch.'
        }
      },
      {
        id: 'n5_l06_18',
        lesson: 6,
        lessonId: 6,
        level: 'N5',
        kanji: '店',
        hanViet: 'Điếm',
        hiragana: 'みせ',
        romaji: 'mise',
        meaning: 'cửa hàng',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><polygon points="18,44 50,22 82,44" fill="#F76707"/><rect x="26" y="44" width="48" height="34" fill="#FF922B"/><rect x="42" y="56" width="16" height="22" fill="#FFF"/></svg>`,
        example: {
          ja: 'あの店は安いです。',
          hira: 'あのみせはやすいです。',
          vi: 'Cửa hàng kia giá rẻ.'
        }
      },
      {
        id: 'n5_l06_19',
        lesson: 6,
        lessonId: 6,
        level: 'N5',
        kanji: 'レストラン',
        hanViet: '',
        hiragana: 'レストラン',
        romaji: 'resutoran',
        meaning: 'nhà hàng',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><rect x="24" y="32" width="52" height="44" rx="4" fill="#FD7E14"/><circle cx="50" cy="52" r="12" fill="#FFF"/><line x1="34" y1="44" x2="34" y2="60" stroke="#FFF" stroke-width="2"/><line x1="66" y1="44" x2="66" y2="60" stroke="#FFF" stroke-width="2"/></svg>`,
        example: {
          ja: 'レストランで晩ご飯を食べます。',
          hira: 'レストランでばんごはんをたべます。',
          vi: 'Tôi ăn cơm tối ở nhà hàng.'
        }
      },
      {
        id: 'n5_l06_20',
        lesson: 6,
        lessonId: 6,
        level: 'N5',
        kanji: '庭',
        hanViet: 'Đình',
        hiragana: 'にわ',
        romaji: 'niwa',
        meaning: 'vườn, sân vườn',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="40" r="18" fill="#40C057"/><rect x="46" y="56" width="8" height="22" fill="#862E9C"/><circle cx="34" cy="52" r="10" fill="#20C997"/><circle cx="66" cy="52" r="10" fill="#20C997"/></svg>`,
        example: {
          ja: '庭に花がたくさんあります。',
          hira: 'にわにはながたくさんあります。',
          vi: 'Trong vườn có rất nhiều hoa.'
        }
      },
      {
        id: 'n5_l06_21',
        lesson: 6,
        lessonId: 6,
        level: 'N5',
        kanji: '宿題',
        hanViet: 'Túc Đề',
        hiragana: 'しゅくだい',
        romaji: 'shukudai',
        meaning: 'bài tập',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><rect x="26" y="26" width="48" height="52" rx="4" fill="#FCC419"/><line x1="34" y1="38" x2="66" y2="38" stroke="#FFF" stroke-width="3"/><line x1="34" y1="50" x2="66" y2="50" stroke="#FFF" stroke-width="3"/><line x1="34" y1="62" x2="52" y2="62" stroke="#FFF" stroke-width="3"/></svg>`,
        example: {
          ja: '宿題を忘れました。',
          hira: 'しゅくだいをわすれました。',
          vi: 'Tôi quên làm bài tập về nhà rồi.'
        }
      },
      {
        id: 'n5_l06_22',
        lesson: 6,
        lessonId: 6,
        level: 'N5',
        kanji: 'テニス',
        hanViet: '',
        hiragana: 'テニス',
        romaji: 'tenisu',
        meaning: 'tennis',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><circle cx="50" cy="50" r="26" fill="#A9E34B"/><path d="M32 38 Q50 50 32 62 M68 38 Q50 50 68 62" stroke="#FFF" stroke-width="3" fill="none"/></svg>`,
        example: {
          ja: '土曜日にテニスをします。',
          hira: 'どようびにてニスをします。',
          vi: 'Thứ Bảy tôi chơi tennis.'
        }
      },
      {
        id: 'n5_l06_23',
        lesson: 6,
        lessonId: 6,
        level: 'N5',
        kanji: 'サッカー',
        hanViet: '',
        hiragana: 'サッカー',
        romaji: 'sakka-',
        meaning: 'bóng đá',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F8F9FA"/><circle cx="50" cy="50" r="28" fill="#FFF" stroke="#343A40" stroke-width="3"/><polygon points="50,38 58,45 55,54 45,54 42,45" fill="#343A40"/></svg>`,
        example: {
          ja: '公園でサッカーをしましょう。',
          hira: 'こうえんでサッカーをしましょう。',
          vi: 'Cùng đá bóng ở công viên nhé.'
        }
      },
      {
        id: 'n5_l06_24',
        lesson: 6,
        lessonId: 6,
        level: 'N5',
        kanji: 'お花見',
        hanViet: 'Hoa Kiến',
        hiragana: 'おはなみ',
        romaji: 'ohanami',
        meaning: 'ngắm hoa',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF0F6"/><circle cx="50" cy="50" r="12" fill="#F06595"/><circle cx="50" cy="30" r="8" fill="#FCC2D7"/><circle cx="70" cy="50" r="8" fill="#FCC2D7"/><circle cx="50" cy="70" r="8" fill="#FCC2D7"/><circle cx="30" cy="50" r="8" fill="#FCC2D7"/></svg>`,
        example: {
          ja: '一緒にお花見に行きませんか。',
          hira: 'いっしょにおはなみにいきませんか。',
          vi: 'Cùng đi ngắm hoa anh đào với tôi không?'
        }
      },
      {
        id: 'n5_l06_25',
        lesson: 6,
        lessonId: 6,
        level: 'N5',
        kanji: '何',
        hanViet: 'Hà',
        hiragana: 'なに',
        romaji: 'nani',
        meaning: 'cái gì',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><circle cx="50" cy="50" r="28" fill="#FF922B"/><text x="50" y="60" text-anchor="middle" font-size="28" font-weight="bold" fill="#FFF">?</text></svg>`,
        example: {
          ja: '何を飲みますか。',
          hira: 'なにをのみますか。',
          vi: 'Bạn uống cái gì?'
        }
      },
      {
        id: 'n5_l06_26',
        lesson: 6,
        lessonId: 6,
        level: 'N5',
        kanji: '一緒に',
        hanViet: 'Nhất Tự',
        hiragana: 'いっしょに',
        romaji: 'isshoni',
        meaning: 'cùng nhau',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="38" cy="40" r="10" fill="#1971C2"/><circle cx="62" cy="40" r="10" fill="#228BE6"/><path d="M26 74 C26 60 50 60 50 74 Z" fill="#1971C2"/><path d="M50 74 C50 60 74 60 74 74 Z" fill="#228BE6"/></svg>`,
        example: {
          ja: '一緒に京都へ行きましょう。',
          hira: 'いっしょにきょうとへいきましょう。',
          vi: 'Hãy cùng nhau đi Kyoto nhé.'
        }
      },
      {
        id: 'n5_l06_27',
        lesson: 6,
        lessonId: 6,
        level: 'N5',
        kanji: 'ちょっと',
        hanViet: '',
        hiragana: 'ちょっと',
        romaji: 'chotto',
        meaning: 'một chút, một ít',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><path d="M38 45 Q50 35 62 45" stroke="#E67700" stroke-width="4" stroke-linecap="round" fill="none"/><circle cx="50" cy="62" r="5" fill="#F59F00"/></svg>`,
        example: {
          ja: 'ちょっと待ってください。',
          hira: 'ちょっとまってください。',
          vi: 'Xin hãy chờ một chút.'
        }
      },
      {
        id: 'n5_l06_28',
        lesson: 6,
        lessonId: 6,
        level: 'N5',
        kanji: 'いただきます',
        hanViet: '',
        hiragana: 'いただきます',
        romaji: 'itadakimasu',
        meaning: 'Cảm ơn, tôi xin phép ăn/uống',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><circle cx="50" cy="38" r="14" fill="#F76707"/><path d="M30 76 C30 62 70 62 70 76 Z" fill="#FF922B"/><line x1="44" y1="48" x2="56" y2="48" stroke="#FFF" stroke-width="3"/></svg>`,
        example: {
          ja: 'ご飯の前に「いただきます」と言います。',
          hira: 'ごはんのまえに「いただきます」といいます。',
          vi: 'Trước bữa ăn người Nhật nói “Itadakimasu” (Mời mọi người xơi cơm).'
        }
      }
    ]
  },

// --------------------------------------------------------------------------
  // BÀI 7: CÔNG CỤ, QUÀ TẶNG & CHO NHẬN (23 TỪ)
  // --------------------------------------------------------------------------
  {
    lessonNumber: 7,
    level: 'N5',
    title: 'Bài 7: Công cụ, Quà tặng & Trao nhận',
    topicVi: 'Công cụ, Quà tặng & Cho nhận',
    icon: '🎁',
    grammarPoint: 'Công cụ/phương tiện thực hiện hành động: Danh từ + で + Động từ (はしで食べます, 日本語で話します). Hành động trao và nhận: Danh từ 1 に Danh từ 2 を あげます / もらいます. Đã làm gì rồi: もう + V-ました.',
    vocab: [
      {
        id: 'n5_l07_01',
        lesson: 7,
        lessonId: 7,
        level: 'N5',
        kanji: '切ります',
        hanViet: 'Thiết',
        hiragana: 'きります',
        romaji: 'kirimasu',
        meaning: 'cắt',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><circle cx="36" cy="68" r="8" fill="none" stroke="#E03131" stroke-width="3"/><circle cx="64" cy="68" r="8" fill="none" stroke="#E03131" stroke-width="3"/><line x1="42" y1="64" x2="60" y2="30" stroke="#C92A2A" stroke-width="4"/><line x1="58" y1="64" x2="40" y2="30" stroke="#C92A2A" stroke-width="4"/></svg>`,
        example: {
          ja: 'はさみで紙を切ります。',
          hira: 'はさみでかみをきります。',
          vi: 'Tôi cắt giấy bằng kéo.'
        }
      },
      {
        id: 'n5_l07_02',
        lesson: 7,
        lessonId: 7,
        level: 'N5',
        kanji: '送ります',
        hanViet: 'Tống',
        hiragana: 'おくります',
        romaji: 'okurimasu',
        meaning: 'gửi',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="22" y="36" width="56" height="34" rx="3" fill="#339AF0"/><path d="M22 36 L50 56 L78 36" fill="#1864AB"/></svg>`,
        example: {
          ja: '荷物を送ります。',
          hira: 'にもつをおくります。',
          vi: 'Tôi gửi bưu kiện, hàng hóa.'
        }
      },
      {
        id: 'n5_l07_03',
        lesson: 7,
        lessonId: 7,
        level: 'N5',
        kanji: 'あげます',
        hanViet: '',
        hiragana: 'あげます',
        romaji: 'agemasu',
        meaning: 'tặng, cho',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF0F6"/><rect x="28" y="44" width="44" height="34" rx="3" fill="#F06595"/><rect x="46" y="44" width="8" height="34" fill="#FCC2D7"/><circle cx="50" cy="38" r="8" fill="#D6336C"/></svg>`,
        example: {
          ja: '母に花をあげます。',
          hira: 'ははにはなをあげます。',
          vi: 'Tôi tặng hoa cho mẹ.'
        }
      },
      {
        id: 'n5_l07_04',
        lesson: 7,
        lessonId: 7,
        level: 'N5',
        kanji: 'もらいます',
        hanViet: '',
        hiragana: 'もらいます',
        romaji: 'moraimasu',
        meaning: 'nhận',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><path d="M30 64 Q50 46 70 64 L66 74 Q50 58 34 74 Z" fill="#20C997"/><circle cx="50" cy="38" r="10" fill="#0CA678"/></svg>`,
        example: {
          ja: '先生に本をもらいました。',
          hira: 'せんせいにほんをもらいました。',
          vi: 'Tôi đã nhận sách từ thầy giáo.'
        }
      },
      {
        id: 'n5_l07_05',
        lesson: 7,
        lessonId: 7,
        level: 'N5',
        kanji: '貸します',
        hanViet: 'Thải',
        hiragana: 'かします',
        romaji: 'kashimasu',
        meaning: 'cho mượn',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><rect x="25" y="40" width="30" height="40" rx="3" fill="#F59F00"/><path d="M45 50 L75 50 M65 42 L75 50 L65 58" stroke="#E67700" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        example: {
          ja: '友達にお金を貸します。',
          hira: 'ともだちにおかねをかします。',
          vi: 'Tôi cho bạn mượn tiền.'
        }
      },
      {
        id: 'n5_l07_06',
        lesson: 7,
        lessonId: 7,
        level: 'N5',
        kanji: '借ります',
        hanViet: 'Tá',
        hiragana: 'かります',
        romaji: 'karimasu',
        meaning: 'mượn',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="45" y="40" width="30" height="40" rx="3" fill="#339AF0"/><path d="M55 50 L25 50 M35 42 L25 50 L35 58" stroke="#1864AB" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        example: {
          ja: '図書館で本を借ります。',
          hira: 'としょかんでほんをかります。',
          vi: 'Tôi mượn sách ở thư viện.'
        }
      },
      {
        id: 'n5_l07_07',
        lesson: 7,
        lessonId: 7,
        level: 'N5',
        kanji: '教えます',
        hanViet: 'Giáo',
        hiragana: 'おしえます',
        romaji: 'oshiemasu',
        meaning: 'dạy, chỉ',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><rect x="24" y="28" width="52" height="34" rx="3" fill="#7950F2"/><circle cx="50" cy="72" r="10" fill="#5F3DC4"/></svg>`,
        example: {
          ja: '学生に日本語を教えます。',
          hira: 'がくせいににほんごをおしえます。',
          vi: 'Tôi dạy tiếng Nhật cho học sinh.'
        }
      },
      {
        id: 'n5_l07_08',
        lesson: 7,
        lessonId: 7,
        level: 'N5',
        kanji: '習います',
        hanViet: 'Tập',
        hiragana: 'ならいます',
        romaji: 'naraimasu',
        meaning: 'học, tập',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="38" r="14" fill="#0CA678"/><polygon points="50,20 80,32 50,44 20,32" fill="#20C997"/><path d="M30 76 C30 62 70 62 70 76 Z" fill="#20C997"/></svg>`,
        example: {
          ja: '先生にピアノを習います。',
          hira: 'せんせいにピアノをならいます。',
          vi: 'Tôi học đàn piano từ thầy giáo.'
        }
      },
      {
        id: 'n5_l07_09',
        lesson: 7,
        lessonId: 7,
        level: 'N5',
        kanji: 'かけます',
        hanViet: '',
        hiragana: 'かけます',
        romaji: 'kakemasu',
        meaning: 'gọi điện thoại',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><path d="M35 30 C30 30 25 35 25 40 C25 60 40 75 60 75 C65 75 70 70 70 65 L64 56 C62 54 58 54 56 56 L52 60 C44 56 39 51 35 43 L39 39 C41 37 41 33 39 31 Z" fill="#F76707"/></svg>`,
        example: {
          ja: '友達に電話をかけます。',
          hira: 'ともだちにでんわをかけます。',
          vi: 'Tôi gọi điện thoại cho bạn bè.'
        }
      },
      {
        id: 'n5_l07_10',
        lesson: 7,
        lessonId: 7,
        level: 'N5',
        kanji: '手',
        hanViet: 'Thủ',
        hiragana: 'て',
        romaji: 'te',
        meaning: 'tay',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><path d="M38 74 L38 50 C38 46 42 46 42 50 L42 38 C42 34 46 34 46 38 L46 36 C46 32 50 32 50 36 L50 40 C50 36 54 36 54 40 L54 56 C58 56 62 60 62 66 L62 74 Z" fill="#FFA94D"/></svg>`,
        example: {
          ja: '手でご飯を食べます。',
          hira: 'てでごはんをたべます。',
          vi: 'Tôi ăn cơm bằng tay.'
        }
      },
      {
        id: 'n5_l07_11',
        lesson: 7,
        lessonId: 7,
        level: 'N5',
        kanji: 'はし',
        hanViet: '',
        hiragana: 'はし',
        romaji: 'hashi',
        meaning: 'đũa',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><line x1="36" y1="20" x2="48" y2="80" stroke="#D9480F" stroke-width="4" stroke-linecap="round"/><line x1="46" y1="20" x2="56" y2="80" stroke="#D9480F" stroke-width="4" stroke-linecap="round"/></svg>`,
        example: {
          ja: 'はしでラーメンを食べます。',
          hira: 'はしでラーメンをたべます。',
          vi: 'Tôi ăn mì ramen bằng đũa.'
        }
      },
      {
        id: 'n5_l07_12',
        lesson: 7,
        lessonId: 7,
        level: 'N5',
        kanji: 'スプーン',
        hanViet: '',
        hiragana: 'スプーン',
        romaji: 'supu-n',
        meaning: 'thìa',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E9ECEF"/><ellipse cx="50" cy="35" rx="14" ry="18" fill="#CED4DA"/><rect x="47" y="50" width="6" height="32" rx="3" fill="#ADB5BD"/></svg>`,
        example: {
          ja: 'スプーンでカレーを食べます。',
          hira: 'スプーンでカレーをたべます。',
          vi: 'Tôi ăn cà ri bằng thìa.'
        }
      },
      {
        id: 'n5_l07_13',
        lesson: 7,
        lessonId: 7,
        level: 'N5',
        kanji: 'ナイフ',
        hanViet: '',
        hiragana: 'ナイフ',
        romaji: 'naifu',
        meaning: 'dao',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E9ECEF"/><path d="M47 22 C47 22 55 30 55 52 L47 52 Z" fill="#ADB5BD"/><rect x="46" y="52" width="8" height="28" rx="2" fill="#495057"/></svg>`,
        example: {
          ja: 'ナイフで肉を切ります。',
          hira: 'ナイフでにくをきります。',
          vi: 'Tôi cắt thịt bằng dao.'
        }
      },
      {
        id: 'n5_l07_14',
        lesson: 7,
        lessonId: 7,
        level: 'N5',
        kanji: 'フォーク',
        hanViet: '',
        hiragana: 'フォーク',
        romaji: 'fo-ku',
        meaning: 'dĩa',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E9ECEF"/><rect x="42" y="24" width="3" height="22" fill="#ADB5BD"/><rect x="47" y="24" width="3" height="22" fill="#ADB5BD"/><rect x="52" y="24" width="3" height="22" fill="#ADB5BD"/><rect x="57" y="24" width="3" height="22" fill="#ADB5BD"/><rect x="42" y="44" width="18" height="6" fill="#ADB5BD"/><rect x="48" y="50" width="6" height="30" rx="2" fill="#868E96"/></svg>`,
        example: {
          ja: 'フォークでケーキを食べます。',
          hira: 'フォークでケーキをたべます。',
          vi: 'Tôi ăn bánh ngọt bằng nĩa.'
        }
      },
      {
        id: 'n5_l07_15',
        lesson: 7,
        lessonId: 7,
        level: 'N5',
        kanji: 'はさみ',
        hanViet: '',
        hiragana: 'はさみ',
        romaji: 'hasami',
        meaning: 'kéo',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><circle cx="38" cy="68" r="8" fill="none" stroke="#FA5252" stroke-width="4"/><circle cx="62" cy="68" r="8" fill="none" stroke="#FA5252" stroke-width="4"/><line x1="42" y1="64" x2="60" y2="28" stroke="#ADB5BD" stroke-width="4"/><line x1="58" y1="64" x2="40" y2="28" stroke="#ADB5BD" stroke-width="4"/></svg>`,
        example: {
          ja: 'はさみで写真を切ります。',
          hira: 'はさみでしゃしんをきります。',
          vi: 'Tôi cắt ảnh bằng kéo.'
        }
      },
      {
        id: 'n5_l07_16',
        lesson: 7,
        lessonId: 7,
        level: 'N5',
        kanji: 'パソコン',
        hanViet: '',
        hiragana: 'パソコン',
        romaji: 'pasokon',
        meaning: 'máy tính cá nhân',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="25" y="28" width="50" height="34" rx="3" fill="#1864AB"/><rect x="29" y="32" width="42" height="26" fill="#E7F5FF"/><polygon points="20,66 80,66 74,74 26,74" fill="#ADB5BD"/></svg>`,
        example: {
          ja: 'パソコンでレポートを書きます。',
          hira: 'パソコンでレポートをかきます。',
          vi: 'Tôi viết báo cáo bằng máy tính cá nhân.'
        }
      },
      {
        id: 'n5_l07_17',
        lesson: 7,
        lessonId: 7,
        level: 'N5',
        kanji: 'ケータイ',
        hanViet: '',
        hiragana: 'ケータイ',
        romaji: 'ke-tai',
        meaning: 'điện thoại di động',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><rect x="34" y="22" width="32" height="56" rx="6" fill="#343A40"/><rect x="38" y="28" width="24" height="38" fill="#FFF"/><circle cx="50" cy="71" r="3" fill="#FFF"/></svg>`,
        example: {
          ja: 'ケータイで写真を撮ります。',
          hira: 'ケータイでしゃしんをとります。',
          vi: 'Tôi chụp ảnh bằng điện thoại di động.'
        }
      },
      {
        id: 'n5_l07_18',
        lesson: 7,
        lessonId: 7,
        level: 'N5',
        kanji: 'メール',
        hanViet: '',
        hiragana: 'メール',
        romaji: 'me-ru',
        meaning: 'email',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="22" y="32" width="56" height="36" rx="4" fill="#339AF0"/><path d="M22 36 L50 56 L78 36" stroke="#FFF" stroke-width="3" fill="none"/></svg>`,
        example: {
          ja: '先生にメールを送りました。',
          hira: 'せんせいにメールをおくりました。',
          vi: 'Tôi đã gửi email cho thầy giáo.'
        }
      },
      {
        id: 'n5_l07_19',
        lesson: 7,
        lessonId: 7,
        level: 'N5',
        kanji: '年賀状',
        hanViet: 'Niên Hạ Trạng',
        hiragana: 'ねんがじょう',
        romaji: 'nengajou',
        meaning: 'thiệp chúc Tết',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><rect x="26" y="24" width="48" height="52" rx="3" fill="#FFF" stroke="#E03131" stroke-width="3"/><circle cx="50" cy="46" r="12" fill="#FA5252"/><text x="50" y="70" text-anchor="middle" font-size="10" font-weight="bold" fill="#E03131">賀正</text></svg>`,
        example: {
          ja: '日本の友達に年賀状を送ります。',
          hira: 'にほんのともだちにねんがじょうをおくります。',
          vi: 'Tôi gửi thiệp chúc Tết cho bạn bè người Nhật.'
        }
      },
      {
        id: 'n5_l07_20',
        lesson: 7,
        lessonId: 7,
        level: 'N5',
        kanji: '旅行',
        hanViet: 'Lữ Hành',
        hiragana: 'りょこう',
        romaji: 'ryokou',
        meaning: 'du lịch',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><rect x="28" y="38" width="44" height="36" rx="4" fill="#20C997"/><path d="M40 38 L40 28 L60 28 L60 38" stroke="#0CA678" stroke-width="4" fill="none"/><line x1="36" y1="74" x2="36" y2="78" stroke="#495057" stroke-width="4"/><line x1="64" y1="74" x2="64" y2="78" stroke="#495057" stroke-width="4"/></svg>`,
        example: {
          ja: '夏休みに旅行へ行きます。',
          hira: 'なつやすみにりょこうへいきます。',
          vi: 'Kỳ nghỉ hè tôi sẽ đi du lịch.'
        }
      },
      {
        id: 'n5_l07_21',
        lesson: 7,
        lessonId: 7,
        level: 'N5',
        kanji: 'お土産',
        hanViet: 'Thổ Sản',
        hiragana: 'おみやげ',
        romaji: 'omiyage',
        meaning: 'quà đi xa về',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><rect x="26" y="42" width="48" height="34" rx="4" fill="#FAB005"/><polygon points="22,42 50,30 78,42" fill="#F59F00"/><circle cx="50" cy="54" r="6" fill="#FFF"/></svg>`,
        example: {
          ja: '東京のお土産を買いました。',
          hira: 'とうきょうのおみやげをかいました。',
          vi: 'Tôi đã mua quà lưu niệm của Tokyo.'
        }
      },
      {
        id: 'n5_l07_22',
        lesson: 7,
        lessonId: 7,
        level: 'N5',
        kanji: 'ヨーロッパ',
        hanViet: '',
        hiragana: 'ヨーロッパ',
        romaji: 'yo-roppa',
        meaning: 'Châu Âu',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="50" r="28" fill="#1971C2"/><circle cx="50" cy="34" r="2" fill="#FFD43B"/><circle cx="62" cy="40" r="2" fill="#FFD43B"/><circle cx="66" cy="50" r="2" fill="#FFD43B"/><circle cx="62" cy="60" r="2" fill="#FFD43B"/><circle cx="50" cy="66" r="2" fill="#FFD43B"/><circle cx="38" cy="60" r="2" fill="#FFD43B"/><circle cx="34" cy="50" r="2" fill="#FFD43B"/><circle cx="38" cy="40" r="2" fill="#FFD43B"/></svg>`,
        example: {
          ja: 'ヨーロッパへ旅行に行きたいです。',
          hira: 'ヨーロッパへりょこうにいきたいです。',
          vi: 'Tôi muốn đi du lịch Châu Âu.'
        }
      },
      {
        id: 'n5_l07_23',
        lesson: 7,
        lessonId: 7,
        level: 'N5',
        kanji: 'スペイン',
        hanViet: '',
        hiragana: 'スペイン',
        romaji: 'supein',
        meaning: 'Tây Ban Nha',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><rect x="22" y="30" width="56" height="10" fill="#E03131"/><rect x="22" y="40" width="56" height="20" fill="#FAB005"/><rect x="22" y="60" width="56" height="10" fill="#E03131"/></svg>`,
        example: {
          ja: 'スペイン語を勉強します。',
          hira: 'スペインごをべんきょうします。',
          vi: 'Tôi học tiếng Tây Ban Nha.'
        }
      }
    ]
  },

// --------------------------------------------------------------------------
  // BÀI 8: TÍNH TỪ MIÊU TẢ TÍNH CHẤT & CẢM NHẬN (50 TỪ)
  // --------------------------------------------------------------------------
  {
    lessonNumber: 8,
    level: 'N5',
    title: 'Bài 8: Tính từ Tính chất & Cảm nhận',
    topicVi: 'Tính từ miêu tả Tính chất & Cảm nhận',
    icon: '🌸',
    grammarPoint: 'Tính từ đuôi な (きれいな町, 親切です / じゃありません) và Tính từ đuôi い (高い山, 寒いです / くないです). Nối câu tương phản: ～が、～. Phó từ mức độ: とても (rất), あまり (không lắm).',
    vocab: [
      {
        id: 'n5_l08_01',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: 'ハンサム[な]',
        hanViet: '',
        hiragana: 'ハンサム[な]',
        romaji: 'hansamu[na]',
        meaning: 'đẹp trai',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="38" r="16" fill="#1971C2"/><path d="M26 80 C26 62 74 62 74 80 Z" fill="#339AF0"/><path d="M42 32 Q50 24 58 32" stroke="#FFF" stroke-width="3" fill="none"/></svg>`,
        example: {
          ja: '彼はとてもハンサムな人です。',
          hira: 'かれはとてもハンサムなひとです。',
          vi: 'Anh ấy là một người rất đẹp trai.'
        }
      },
      {
        id: 'n5_l08_02',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '綺麗[な]',
        hanViet: 'Kỳ Lệ',
        hiragana: 'きれい[な]',
        romaji: 'kirei[na]',
        meaning: 'đẹp, sạch sẽ',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF0F6"/><polygon points="50,20 60,40 82,42 66,58 70,80 50,68 30,80 34,58 18,42 40,40" fill="#F06595"/></svg>`,
        example: {
          ja: 'この花はとても綺麗です。',
          hira: 'このはなはとてもつれいです。',
          vi: 'Bông hoa này rất là đẹp.'
        }
      },
      {
        id: 'n5_l08_03',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '静か[な]',
        hanViet: 'Tĩnh',
        hiragana: 'しずか[な]',
        romaji: 'shizuka[na]',
        meaning: 'yên tĩnh',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="40" r="14" fill="#0CA678"/><rect x="47" y="54" width="6" height="24" fill="#20C997"/><circle cx="50" cy="40" r="4" fill="#FFF"/></svg>`,
        example: {
          ja: 'この図書館はとても静かです。',
          hira: 'このとしょかんはとてもしずかです。',
          vi: 'Thư viện này rất yên tĩnh.'
        }
      },
      {
        id: 'n5_l08_04',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '賑やか[な]',
        hanViet: 'Chẩn',
        hiragana: 'にぎやか[な]',
        romaji: 'nigiyaka[na]',
        meaning: 'náo nhiệt',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><circle cx="34" cy="45" r="12" fill="#F59F00"/><circle cx="66" cy="45" r="12" fill="#F76707"/><polygon points="50,20 54,32 66,32 56,40 60,52 50,44 40,52 44,40 34,32 46,32" fill="#FCC419"/></svg>`,
        example: {
          ja: '東京は賑やかな町です。',
          hira: 'とうきょうはにぎやかなまちです。',
          vi: 'Tokyo là một thành phố náo nhiệt.'
        }
      },
      {
        id: 'n5_l08_05',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '有名[な]',
        hanViet: 'Hữu Danh',
        hiragana: 'ゆうめい[な]',
        romaji: 'yuumei[na]',
        meaning: 'nổi tiếng',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><circle cx="50" cy="44" r="22" fill="#7950F2"/><polygon points="50,28 55,38 66,39 58,47 60,58 50,52 40,58 42,47 34,39 45,38" fill="#FFD43B"/></svg>`,
        example: {
          ja: '富士山は有名な山です。',
          hira: 'ふじさんはゆうめいなやまです。',
          vi: 'Núi Phú Sĩ là ngọn núi nổi tiếng.'
        }
      },
      {
        id: 'n5_l08_06',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '親切[な]',
        hanViet: 'Thân Thiết',
        hiragana: 'しんせつ[な]',
        romaji: 'shinsetsu[na]',
        meaning: 'tốt bụng, thân thiện',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><path d="M50 72 C30 54 22 42 22 34 C22 26 28 22 36 22 C42 22 46 26 50 30 C54 26 58 22 64 22 C72 22 78 26 78 34 C78 42 70 54 50 72 Z" fill="#FA5252"/></svg>`,
        example: {
          ja: '先生はとても親切です。',
          hira: 'せんせいはとてもしんせつです。',
          vi: 'Thầy giáo rất tốt bụng và nhiệt tình.'
        }
      },
      {
        id: 'n5_l08_07',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '元気[な]',
        hanViet: 'Nguyên Khí',
        hiragana: 'げんき[な]',
        romaji: 'genki[na]',
        meaning: 'khỏe mạnh',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="50" r="28" fill="#20C997"/><path d="M38 52 Q50 62 62 52" stroke="#FFF" stroke-width="4" stroke-linecap="round" fill="none"/><circle cx="42" cy="42" r="4" fill="#FFF"/><circle cx="58" cy="42" r="4" fill="#FFF"/></svg>`,
        example: {
          ja: 'お元気ですか。はい、元気です。',
          hira: 'おげんきですか。はい、げんきです。',
          vi: 'Bạn có khỏe không? Vâng, tôi khỏe.'
        }
      },
      {
        id: 'n5_l08_08',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '暇[な]',
        hanViet: 'Hạ',
        hiragana: 'ひま[な]',
        romaji: 'hima[na]',
        meaning: 'rảnh rỗi',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><circle cx="50" cy="50" r="26" fill="none" stroke="#FAB005" stroke-width="4"/><line x1="50" y1="50" x2="50" y2="34" stroke="#F59F00" stroke-width="3"/><line x1="50" y1="50" x2="62" y2="50" stroke="#F59F00" stroke-width="3"/></svg>`,
        example: {
          ja: '明日は暇ですか。',
          hira: 'あしたはひまですか。',
          vi: 'Ngày mai bạn có rảnh không?'
        }
      },
      {
        id: 'n5_l08_09',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '便利[な]',
        hanViet: 'Tiện Lợi',
        hiragana: 'べんり[な]',
        romaji: 'benri[na]',
        meaning: 'tiện lợi',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="50" r="26" fill="#339AF0"/><path d="M38 50 L46 58 L64 40" stroke="#FFF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`,
        example: {
          ja: '地下鉄はとても便利です。',
          hira: 'ちかてつはとてもべんりです。',
          vi: 'Tàu điện ngầm rất tiện lợi.'
        }
      },
      {
        id: 'n5_l08_10',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '素敵[な]',
        hanViet: 'Tố Địch',
        hiragana: 'すてき[な]',
        romaji: 'suteki[na]',
        meaning: 'đẹp, tuyệt vời',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><polygon points="50,18 62,38 84,40 68,56 72,78 50,68 28,78 32,56 16,40 38,38" fill="#FF922B"/></svg>`,
        example: {
          ja: '素敵なネクタイですね。',
          hira: 'すてきなネクタイですね。',
          vi: 'Chiếc cà vạt đẹp và tuyệt quá nhỉ.'
        }
      },
      {
        id: 'n5_l08_11',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '大きい',
        hanViet: 'Đại',
        hiragana: 'おおきい',
        romaji: 'ookii',
        meaning: 'to, lớn',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="22" y="22" width="56" height="56" rx="6" fill="#1971C2"/></svg>`,
        example: {
          ja: 'これは大きい家です。',
          hira: 'これはおおきいいえです。',
          vi: 'Đây là một ngôi nhà to lớn.'
        }
      },
      {
        id: 'n5_l08_12',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '小さい',
        hanViet: 'Tiểu',
        hiragana: 'ちいさい',
        romaji: 'chiisai',
        meaning: 'nhỏ, bé',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="40" y="40" width="20" height="20" rx="3" fill="#339AF0"/></svg>`,
        example: {
          ja: 'この鞄は小さいです。',
          hira: 'このかばんはちいさいです。',
          vi: 'Chiếc cặp này nhỏ bé.'
        }
      },
      {
        id: 'n5_l08_13',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '新しい',
        hanViet: 'Tân',
        hiragana: 'あたらしい',
        romaji: 'atarashii',
        meaning: 'mới',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><polygon points="50,22 60,40 80,40 64,54 70,74 50,62 30,74 36,54 20,40 40,40" fill="#20C997"/></svg>`,
        example: {
          ja: '新しい車を買いました。',
          hira: 'あたらしいくるまをかいました。',
          vi: 'Tôi đã mua một chiếc xe hơi mới.'
        }
      },
      {
        id: 'n5_l08_14',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '古い',
        hanViet: 'Cổ',
        hiragana: 'ふるい',
        romaji: 'furui',
        meaning: 'cũ',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E9ECEF"/><rect x="25" y="32" width="50" height="42" rx="4" fill="#868E96"/><line x1="30" y1="42" x2="70" y2="42" stroke="#CED4DA" stroke-width="2"/></svg>`,
        example: {
          ja: 'この時計は古いです。',
          hira: 'このとけいはふるいです。',
          vi: 'Chiếc đồng hồ này đã cũ.'
        }
      },
      {
        id: 'n5_l08_15',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '良い',
        hanViet: 'Lương',
        hiragana: 'いい/よい',
        romaji: 'ii / yoi',
        meaning: 'tốt',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="50" r="26" fill="#0CA678"/><path d="M38 50 L46 58 L64 40" stroke="#FFF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`,
        example: {
          ja: '今日はいい天気ですね。',
          hira: 'きょうはいいてんきですね。',
          vi: 'Hôm nay thời tiết tốt quá nhỉ.'
        }
      },
      {
        id: 'n5_l08_16',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '悪い',
        hanViet: 'Ác',
        hiragana: 'わるい',
        romaji: 'warui',
        meaning: 'xấu, tồi',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><circle cx="50" cy="50" r="26" fill="#E03131"/><line x1="38" y1="38" x2="62" y2="62" stroke="#FFF" stroke-width="5" stroke-linecap="round"/><line x1="62" y1="38" x2="38" y2="62" stroke="#FFF" stroke-width="5" stroke-linecap="round"/></svg>`,
        example: {
          ja: '昨日は天気が悪かったです。',
          hira: 'きのうはてんきがわるかったです。',
          vi: 'Hôm qua thời tiết đã rất xấu.'
        }
      },
      {
        id: 'n5_l08_17',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '暑い/熱い',
        hanViet: 'Thử Nhiệt',
        hiragana: 'あつい',
        romaji: 'atsui',
        meaning: 'nóng (thời tiết / nhiệt độ)',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><circle cx="50" cy="50" r="20" fill="#F76707"/><line x1="50" y1="16" x2="50" y2="24" stroke="#D9480F" stroke-width="4"/><line x1="50" y1="76" x2="50" y2="84" stroke="#D9480F" stroke-width="4"/><line x1="16" y1="50" x2="24" y2="50" stroke="#D9480F" stroke-width="4"/><line x1="76" y1="50" x2="84" y2="50" stroke="#D9480F" stroke-width="4"/></svg>`,
        example: {
          ja: '日本の夏はとても暑いです。',
          hira: 'にほんのなつはとてもあついです。',
          vi: 'Mùa hè Nhật Bản rất nóng.'
        }
      },
      {
        id: 'n5_l08_18',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '寒い',
        hanViet: 'Hàn',
        hiragana: 'さむい',
        romaji: 'samui',
        meaning: 'lạnh (thời tiết)',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><path d="M50 20 L50 80 M20 50 L80 50 M28 28 L72 72 M28 72 L72 28" stroke="#339AF0" stroke-width="4" stroke-linecap="round"/></svg>`,
        example: {
          ja: '北海道の冬は寒いです。',
          hira: 'ほっかいどうのふゆはさむいです。',
          vi: 'Mùa đông ở Hokkaido rất lạnh.'
        }
      },
      {
        id: 'n5_l08_19',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '冷たい',
        hanViet: 'Lãnh',
        hiragana: 'つめたい',
        romaji: 'tsumetai',
        meaning: 'lạnh buốt (cảm giác đồ vật/nước)',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="34" y="34" width="32" height="32" rx="4" fill="#74C0FC" stroke="#1971C2" stroke-width="2"/><line x1="34" y1="50" x2="66" y2="50" stroke="#FFF" stroke-width="2"/></svg>`,
        example: {
          ja: '冷たい水をください。',
          hira: 'つめたいみずをください。',
          vi: 'Xin cho tôi nước lạnh.'
        }
      },
      {
        id: 'n5_l08_20',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '難しい',
        hanViet: 'Nan',
        hiragana: 'むずかしい',
        romaji: 'muzukashii',
        meaning: 'khó',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><circle cx="50" cy="50" r="28" fill="#FA5252"/><text x="50" y="60" text-anchor="middle" font-size="28" font-weight="bold" fill="#FFF">?</text></svg>`,
        example: {
          ja: '漢字はとても難しいです。',
          hira: 'かんじはとてもむずかしいです。',
          vi: 'Chữ Hán rất là khó.'
        }
      },
      {
        id: 'n5_l08_21',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '易しい',
        hanViet: 'Dịch',
        hiragana: 'やさしい',
        romaji: 'yasashii',
        meaning: 'dễ',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="50" r="28" fill="#20C997"/><text x="50" y="60" text-anchor="middle" font-size="22" font-weight="bold" fill="#FFF">1+1</text></svg>`,
        example: {
          ja: 'このテストは易しいです。',
          hira: 'このテストはやさしいです。',
          vi: 'Bài kiểm tra này rất dễ.'
        }
      },
      {
        id: 'n5_l08_22',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '高い',
        hanViet: 'Cao',
        hiragana: 'たかい',
        romaji: 'takai',
        meaning: 'cao, đắt',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><path d="M50 20 L76 76 L24 76 Z" fill="#F59F00"/><text x="50" y="68" text-anchor="middle" font-size="16" font-weight="bold" fill="#FFF">¥↑</text></svg>`,
        example: {
          ja: 'このカメラはとても高いです。',
          hira: 'このカメラはとてもたかいです。',
          vi: 'Chiếc máy ảnh này rất đắt.'
        }
      },
      {
        id: 'n5_l08_23',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '安い',
        hanViet: 'An',
        hiragana: 'やすい',
        romaji: 'yasui',
        meaning: 'rẻ',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="50" r="26" fill="#0CA678"/><text x="50" y="58" text-anchor="middle" font-size="16" font-weight="bold" fill="#FFF">¥↓</text></svg>`,
        example: {
          ja: 'この店は安くて美味しいです。',
          hira: 'このみせはやすくておいしいです。',
          vi: 'Cửa hàng này vừa rẻ lại vừa ngon.'
        }
      },
      {
        id: 'n5_l08_24',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '低い',
        hanViet: 'Đê',
        hiragana: 'ひくい',
        romaji: 'hikui',
        meaning: 'thấp',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E9ECEF"/><rect x="28" y="54" width="44" height="24" rx="4" fill="#868E96"/><path d="M50 24 L50 46 M42 38 L50 46 L58 38" stroke="#495057" stroke-width="4" stroke-linecap="round"/></svg>`,
        example: {
          ja: 'あの山は低いです。',
          hira: 'あのやまはひくいです。',
          vi: 'Ngọn núi kia thấp.'
        }
      },
      {
        id: 'n5_l08_25',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '面白い',
        hanViet: 'Diện Bạch',
        hiragana: 'おもしろい',
        romaji: 'omoshiroi',
        meaning: 'thú vị, hay',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><circle cx="50" cy="50" r="28" fill="#FCC419"/><circle cx="40" cy="44" r="4" fill="#343A40"/><circle cx="60" cy="44" r="4" fill="#343A40"/><path d="M38 56 Q50 68 62 56" stroke="#343A40" stroke-width="3" stroke-linecap="round" fill="none"/></svg>`,
        example: {
          ja: 'この本はとても面白いです。',
          hira: 'このほんはとてもおもしろいです。',
          vi: 'Cuốn sách này rất hay và thú vị.'
        }
      },
      {
        id: 'n5_l08_26',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '美味しい',
        hanViet: 'Mỹ Vị',
        hiragana: 'おいしい',
        romaji: 'oishii',
        meaning: 'ngon',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><circle cx="50" cy="50" r="28" fill="#FF922B"/><path d="M38 52 Q50 64 62 52" stroke="#FFF" stroke-width="4" stroke-linecap="round" fill="none"/><path d="M48 62 Q52 70 56 62" fill="#FA5252"/></svg>`,
        example: {
          ja: '日本料理は美味しいです。',
          hira: 'にほんりょうりはおいしいです。',
          vi: 'Món ăn Nhật Bản rất ngon.'
        }
      },
      {
        id: 'n5_l08_27',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '忙しい',
        hanViet: 'Mang',
        hiragana: 'いそがしい',
        romaji: 'isogashii',
        meaning: 'bận',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><circle cx="50" cy="46" r="22" fill="#FA5252"/><line x1="50" y1="46" x2="50" y2="34" stroke="#FFF" stroke-width="3"/><line x1="50" y1="46" x2="60" y2="46" stroke="#FFF" stroke-width="3"/><path d="M30 76 L70 76" stroke="#C92A2A" stroke-width="4" stroke-linecap="round"/></svg>`,
        example: {
          ja: '今日は仕事が忙しいです。',
          hira: 'きょうはしごとがいそがしいです。',
          vi: 'Hôm nay công việc rất bận rộn.'
        }
      },
      {
        id: 'n5_l08_28',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '楽しい',
        hanViet: 'Lạc',
        hiragana: 'たのしい',
        romaji: 'tanoshii',
        meaning: 'vui vẻ',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF0F6"/><circle cx="50" cy="50" r="28" fill="#F06595"/><circle cx="40" cy="42" r="4" fill="#FFF"/><circle cx="60" cy="42" r="4" fill="#FFF"/><path d="M36 54 Q50 68 64 54" stroke="#FFF" stroke-width="4" stroke-linecap="round" fill="none"/></svg>`,
        example: {
          ja: '日本語の勉強は楽しいです。',
          hira: 'にほんごのべんきょうはたのしいです。',
          vi: 'Học tiếng Nhật rất vui vẻ.'
        }
      },
      {
        id: 'n5_l08_29',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '白い',
        hanViet: 'Bạch',
        hiragana: 'しろい',
        romaji: 'shiroi',
        meaning: 'trắng',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F8F9FA" stroke="#CED4DA" stroke-width="3"/><circle cx="50" cy="50" r="26" fill="#FFF" stroke="#ADB5BD" stroke-width="2"/></svg>`,
        example: {
          ja: '白いシャツを着ます。',
          hira: 'しろいシャツをきます。',
          vi: 'Tôi mặc áo sơ mi trắng.'
        }
      },
      {
        id: 'n5_l08_30',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '黒い',
        hanViet: 'Hắc',
        hiragana: 'くろい',
        romaji: 'kuroi',
        meaning: 'đen',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#343A40"/><circle cx="50" cy="50" r="26" fill="#212529"/></svg>`,
        example: {
          ja: '黒い靴を買いました。',
          hira: 'くろいくつをかいました。',
          vi: 'Tôi đã mua đôi giày màu đen.'
        }
      },
      {
        id: 'n5_l08_31',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '赤い',
        hanViet: 'Xích',
        hiragana: 'あかい',
        romaji: 'akai',
        meaning: 'đỏ',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><circle cx="50" cy="50" r="26" fill="#E03131"/></svg>`,
        example: {
          ja: '赤いりんごを食べます。',
          hira: 'あかいりんごをたべます。',
          vi: 'Tôi ăn quả táo đỏ.'
        }
      },
      {
        id: 'n5_l08_32',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '青い',
        hanViet: 'Thanh',
        hiragana: 'あおい',
        romaji: 'aoi',
        meaning: 'xanh',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="50" r="26" fill="#1971C2"/></svg>`,
        example: {
          ja: '青い空が綺麗です。',
          hira: 'あおいそらがきれいです。',
          vi: 'Bầu trời xanh thật là đẹp.'
        }
      },
      {
        id: 'n5_l08_33',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '桜',
        hanViet: 'Anh',
        hiragana: 'さくら',
        romaji: 'sakura',
        meaning: 'hoa anh đào',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF0F6"/><circle cx="50" cy="50" r="10" fill="#F06595"/><circle cx="50" cy="32" r="8" fill="#FCC2D7"/><circle cx="67" cy="44" r="8" fill="#FCC2D7"/><circle cx="60" cy="65" r="8" fill="#FCC2D7"/><circle cx="40" cy="65" r="8" fill="#FCC2D7"/><circle cx="33" cy="44" r="8" fill="#FCC2D7"/></svg>`,
        example: {
          ja: '桜の花が咲きました。',
          hira: 'さくらのはながさきました。',
          vi: 'Hoa anh đào đã nở rồi.'
        }
      },
      {
        id: 'n5_l08_34',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '山',
        hanViet: 'Sơn',
        hiragana: 'やま',
        romaji: 'yama',
        meaning: 'núi',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><polygon points="50,24 78,74 22,74" fill="#0CA678"/><polygon points="50,24 60,42 40,42" fill="#FFF"/></svg>`,
        example: {
          ja: '週末に山へ登ります。',
          hira: 'しゅうまつにやまへのぼります。',
          vi: 'Cuối tuần tôi đi leo núi.'
        }
      },
      {
        id: 'n5_l08_35',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '町',
        hanViet: 'Đinh',
        hiragana: 'まち',
        romaji: 'machi',
        meaning: 'thị trấn, khu phố',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="22" y="42" width="24" height="34" fill="#1971C2"/><rect x="54" y="32" width="24" height="44" fill="#339AF0"/><rect x="30" y="50" width="8" height="8" fill="#FFF"/><rect x="62" y="42" width="8" height="8" fill="#FFF"/></svg>`,
        example: {
          ja: '静かな町に住んでいます。',
          hira: 'しずかなまちにすんでいます。',
          vi: 'Tôi đang sống ở một thị trấn yên bình.'
        }
      },
      {
        id: 'n5_l08_36',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '食べ物',
        hanViet: 'Thực Vật',
        hiragana: 'たべもの',
        romaji: 'tabemono',
        meaning: 'đồ ăn',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><path d="M26 52 C26 72 74 72 74 52 Z" fill="#F76707"/><path d="M30 52 C30 38 70 38 70 52 Z" fill="#FFF"/></svg>`,
        example: {
          ja: '好きな食べ物は何ですか。',
          hira: 'すきなたべものはなんですか。',
          vi: 'Món ăn yêu thích của bạn là gì?'
        }
      },
      {
        id: 'n5_l08_37',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '車',
        hanViet: 'Xa',
        hiragana: 'くるま',
        romaji: 'kuruma',
        meaning: 'ô tô',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><path d="M26 62 L32 44 L68 44 L74 62 Z" fill="#1864AB"/><circle cx="36" cy="64" r="8" fill="#343A40"/><circle cx="64" cy="64" r="8" fill="#343A40"/></svg>`,
        example: {
          ja: '日本の車は有名です。',
          hira: 'にほんのくるまはゆうめいです。',
          vi: 'Xe hơi của Nhật rất nổi tiếng.'
        }
      },
      {
        id: 'n5_l08_38',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '所',
        hanViet: 'Sở',
        hiragana: 'ところ',
        romaji: 'tokoro',
        meaning: 'nơi, chỗ',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><circle cx="50" cy="44" r="14" fill="#E03131"/><path d="M50 58 L50 74" stroke="#C92A2A" stroke-width="4"/><circle cx="50" cy="44" r="5" fill="#FFF"/></svg>`,
        example: {
          ja: 'ここは静かな所です。',
          hira: 'ここはしずかなところです。',
          vi: 'Nơi này là một chỗ rất yên tĩnh.'
        }
      },
      {
        id: 'n5_l08_39',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '寮',
        hanViet: 'Liêu',
        hiragana: 'りょう',
        romaji: 'ryou',
        meaning: 'ký túc xá',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><polygon points="50,22 80,42 20,42" fill="#F59F00"/><rect x="26" y="42" width="48" height="34" fill="#FAB005"/><rect x="42" y="56" width="16" height="20" fill="#FFF"/></svg>`,
        example: {
          ja: '大学の寮に住んでいます。',
          hira: 'だいがくのりょうにすんでいます。',
          vi: 'Tôi đang sống ở ký túc xá trường đại học.'
        }
      },
      {
        id: 'n5_l08_40',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '勉強',
        hanViet: 'Miễn Cưỡng',
        hiragana: 'べんきょう',
        romaji: 'benkyou',
        meaning: 'việc học',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><polygon points="50,24 82,38 50,52 18,38" fill="#F76707"/><polygon points="28,46 28,64 50,74 50,52" fill="#D9480F"/></svg>`,
        example: {
          ja: '毎日の勉強は大切です。',
          hira: 'まいにちのべんきょうはたいせつです。',
          vi: 'Việc học mỗi ngày là rất quan trọng.'
        }
      },
      {
        id: 'n5_l08_41',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '生活',
        hanViet: 'Sinh Hoạt',
        hiragana: 'せいかつ',
        romaji: 'seikatsu',
        meaning: 'cuộc sống',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="40" r="16" fill="#20C997"/><path d="M28 76 C28 60 72 60 72 76 Z" fill="#0CA678"/></svg>`,
        example: {
          ja: '日本の生活はどうですか。',
          hira: 'にほんのせいかつはどうですか。',
          vi: 'Cuộc sống ở Nhật Bản thế nào?'
        }
      },
      {
        id: 'n5_l08_42',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '仕事',
        hanViet: 'Sĩ Sự',
        hiragana: 'しごと',
        romaji: 'shigoto',
        meaning: 'công việc',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="26" y="40" width="48" height="34" rx="4" fill="#1864AB"/><path d="M40 40 L40 32 C40 28 60 28 60 32 L60 40" stroke="#1971C2" stroke-width="4" fill="none"/></svg>`,
        example: {
          ja: '仕事は忙しいですが、面白いです。',
          hira: 'しごとはいそがしいですが、おもしろいです。',
          vi: 'Công việc bận rộn nhưng rất thú vị.'
        }
      },
      {
        id: 'n5_l08_43',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: 'どう',
        hanViet: '',
        hiragana: 'どう',
        romaji: 'dou',
        meaning: 'thế nào',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><circle cx="50" cy="50" r="28" fill="#7950F2"/><text x="50" y="60" text-anchor="middle" font-size="28" font-weight="bold" fill="#FFF">?</text></svg>`,
        example: {
          ja: '大学の寮はどうですか。',
          hira: 'だいがくのりょうはどうですか。',
          vi: 'Ký túc xá trường đại học như thế nào?'
        }
      },
      {
        id: 'n5_l08_44',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: 'どんな～',
        hanViet: '',
        hiragana: 'どんな～',
        romaji: 'donna~',
        meaning: '~ như thế nào',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><circle cx="50" cy="50" r="28" fill="#FF922B"/><text x="50" y="58" text-anchor="middle" font-size="18" font-weight="bold" fill="#FFF">どんな?</text></svg>`,
        example: {
          ja: 'ハノイはどんな町ですか。',
          hira: 'ハノイはどんなまちですか。',
          vi: 'Hà Nội là một thành phố như thế nào?'
        }
      },
      {
        id: 'n5_l08_45',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: 'どれ',
        hanViet: '',
        hiragana: 'どれ',
        romaji: 'dore',
        meaning: 'cái nào',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><rect x="22" y="38" width="16" height="24" rx="3" fill="#F59F00"/><rect x="42" y="38" width="16" height="24" rx="3" fill="#E67700"/><rect x="62" y="38" width="16" height="24" rx="3" fill="#F59F00"/><text x="50" y="30" text-anchor="middle" font-size="14" font-weight="bold" fill="#D9480F">?</text></svg>`,
        example: {
          ja: 'あなたの傘はどれですか。',
          hira: 'あなたのかさはどれですか。',
          vi: 'Chiếc ô của bạn là cái nào?'
        }
      },
      {
        id: 'n5_l08_46',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: 'とても',
        hanViet: '',
        hiragana: 'とても',
        romaji: 'totemo',
        meaning: 'rất',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><circle cx="50" cy="50" r="28" fill="#FA5252"/><text x="50" y="58" text-anchor="middle" font-size="18" font-weight="bold" fill="#FFF">VERY</text></svg>`,
        example: {
          ja: 'このラーメンはとても美味しいです。',
          hira: 'このラーメンはとてもおいしいです。',
          vi: 'Món mì ramen này rất ngon.'
        }
      },
      {
        id: 'n5_l08_47',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: 'あまり',
        hanViet: '',
        hiragana: 'あまり',
        romaji: 'amari',
        meaning: 'không ~ lắm',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E9ECEF"/><circle cx="50" cy="50" r="28" fill="#868E96"/><text x="50" y="58" text-anchor="middle" font-size="18" font-weight="bold" fill="#FFF">NOT</text></svg>`,
        example: {
          ja: 'ここはあまり静かじゃありません。',
          hira: 'ここはあまりしずかじゃありません。',
          vi: 'Ở đây không yên tĩnh lắm.'
        }
      },
      {
        id: 'n5_l08_48',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: 'そして',
        hanViet: '',
        hiragana: 'そして',
        romaji: 'soshite',
        meaning: 'và, rồi thì',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="50" r="28" fill="#228BE6"/><text x="50" y="58" text-anchor="middle" font-size="20" font-weight="bold" fill="#FFF">&amp;</text></svg>`,
        example: {
          ja: '日本の料理は美味しくて、そして綺麗です。',
          hira: 'にほんのりょうりはおいしくて、そしてつれいです。',
          vi: 'Món ăn Nhật Bản ngon và còn đẹp mắt nữa.'
        }
      },
      {
        id: 'n5_l08_49',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: '～が、～',
        hanViet: '',
        hiragana: '～が、～',
        romaji: '~ga, ~',
        meaning: 'nhưng',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><circle cx="50" cy="50" r="28" fill="#FD7E14"/><text x="50" y="58" text-anchor="middle" font-size="16" font-weight="bold" fill="#FFF">BUT</text></svg>`,
        example: {
          ja: '日本の食べ物は美味しいですが、高いです。',
          hira: 'にほんのたべものはおいしいですが、たかいです。',
          vi: 'Đồ ăn Nhật Bản ngon nhưng đắt.'
        }
      },
      {
        id: 'n5_l08_50',
        lesson: 8,
        lessonId: 8,
        level: 'N5',
        kanji: 'お元気ですか',
        hanViet: 'Nguyên Khí',
        hiragana: 'おげんきですか',
        romaji: 'ogenki desu ka',
        meaning: 'Anh có khỏe không?',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="38" r="14" fill="#0CA678"/><path d="M30 76 C30 62 70 62 70 76 Z" fill="#20C997"/><path d="M40 48 Q50 56 60 48" stroke="#FFF" stroke-width="3" fill="none"/></svg>`,
        example: {
          ja: '皆さん、お元気ですか。',
          hira: 'みなさん、おげんきですか。',
          vi: 'Mọi người có khỏe không ạ?'
        }
      }
    ]
  },

// --------------------------------------------------------------------------
  // BÀI 9: SỞ THÍCH, NĂNG KHIẾU & LÝ DO (30 TỪ)
  // --------------------------------------------------------------------------
  {
    lessonNumber: 9,
    level: 'N5',
    title: 'Bài 9: Sở thích, Năng khiếu & Lý do',
    topicVi: 'Sở thích, Năng khiếu & Lý do',
    icon: '🎵',
    grammarPoint: 'Đối tượng của cảm xúc & năng khiếu: Danh từ + が + 好き / 嫌い / 上手 / 下手 です. Sở hữu/tồn tại đồ vật: N + が あります. Giải thích lý do: Mệnh đề + から, Hỏi lý do: どうして.',
    vocab: [
      {
        id: 'n5_l09_01',
        lesson: 9,
        lessonId: 9,
        level: 'N5',
        kanji: 'あります',
        hanViet: '',
        hiragana: 'あります',
        romaji: 'arimasu',
        meaning: 'có, sở hữu',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="28" y="32" width="44" height="42" rx="4" fill="#339AF0"/><circle cx="50" cy="53" r="8" fill="#FFF"/></svg>`,
        example: {
          ja: '車があります。',
          hira: 'くるまがあります。',
          vi: 'Tôi có một chiếc xe hơi.'
        }
      },
      {
        id: 'n5_l09_02',
        lesson: 9,
        lessonId: 9,
        level: 'N5',
        kanji: '好き[な]',
        hanViet: 'Hảo',
        hiragana: 'すき[な]',
        romaji: 'suki[na]',
        meaning: 'thích',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><path d="M50 72 C30 54 22 42 22 34 C22 26 28 22 36 22 C42 22 46 26 50 30 C54 26 58 22 64 22 C72 22 78 26 78 34 C78 42 70 54 50 72 Z" fill="#FA5252"/></svg>`,
        example: {
          ja: '日本料理が好きです。',
          hira: 'にほんりょうりがすきです。',
          vi: 'Tôi thích các món ăn Nhật Bản.'
        }
      },
      {
        id: 'n5_l09_03',
        lesson: 9,
        lessonId: 9,
        level: 'N5',
        kanji: '嫌い[な]',
        hanViet: 'Hiềm',
        hiragana: 'きらい[な]',
        romaji: 'kirai[na]',
        meaning: 'ghét',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E9ECEF"/><circle cx="50" cy="50" r="28" fill="#868E96"/><path d="M36 60 Q50 48 64 60" stroke="#FFF" stroke-width="4" stroke-linecap="round" fill="none"/></svg>`,
        example: {
          ja: '魚が嫌いです。',
          hira: 'さかながきらいです。',
          vi: 'Tôi không thích cá.'
        }
      },
      {
        id: 'n5_l09_04',
        lesson: 9,
        lessonId: 9,
        level: 'N5',
        kanji: '上手[な]',
        hanViet: 'Thượng Thủ',
        hiragana: 'じょうず[な]',
        romaji: 'jouzu[na]',
        meaning: 'giỏi',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><polygon points="50,20 60,38 82,40 66,56 70,78 50,66 30,78 34,56 18,40 40,38" fill="#FAB005"/><circle cx="50" cy="50" r="6" fill="#FFF"/></svg>`,
        example: {
          ja: '彼女は歌が上手です。',
          hira: 'かのじょはうたがじょうずです。',
          vi: 'Cô ấy hát rất giỏi.'
        }
      },
      {
        id: 'n5_l09_05',
        lesson: 9,
        lessonId: 9,
        level: 'N5',
        kanji: '下手[な]',
        hanViet: 'Hạ Thủ',
        hiragana: 'へた[な]',
        romaji: 'heta[na]',
        meaning: 'kém, yếu',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><circle cx="50" cy="50" r="28" fill="#FFA94D"/><path d="M50 30 L50 70 M38 58 L50 70 L62 58" stroke="#D9480F" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        example: {
          ja: '私はダンスが下手です。',
          hira: 'わたしはダンスがへたです。',
          vi: 'Tôi nhảy khiêu vũ rất kém.'
        }
      },
      {
        id: 'n5_l09_06',
        lesson: 9,
        lessonId: 9,
        level: 'N5',
        kanji: '料理',
        hanViet: 'Liệu Lý',
        hiragana: 'りょうり',
        romaji: 'ryouri',
        meaning: 'món ăn, nấu ăn',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><path d="M26 52 C26 72 74 72 74 52 Z" fill="#F76707"/><path d="M30 52 C30 38 70 38 70 52 Z" fill="#FFF"/><line x1="22" y1="38" x2="78" y2="48" stroke="#495057" stroke-width="3"/></svg>`,
        example: {
          ja: '母の料理はとても美味しいです。',
          hira: 'ははのりょうりはとてもおいしいです。',
          vi: 'Món ăn mẹ nấu rất ngon.'
        }
      },
      {
        id: 'n5_l09_07',
        lesson: 9,
        lessonId: 9,
        level: 'N5',
        kanji: '飲み物',
        hanViet: 'Ẩm Vật',
        hiragana: 'のみもの',
        romaji: 'nomimono',
        meaning: 'đồ uống',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><path d="M34 32 L38 70 C38 74 62 74 62 70 L66 32 Z" fill="#339AF0"/><line x1="56" y1="20" x2="48" y2="50" stroke="#FF922B" stroke-width="4" stroke-linecap="round"/></svg>`,
        example: {
          ja: '冷たい飲み物を飲みます。',
          hira: 'つめたいのみものをのみます。',
          vi: 'Tôi uống đồ uống lạnh.'
        }
      },
      {
        id: 'n5_l09_08',
        lesson: 9,
        lessonId: 9,
        level: 'N5',
        kanji: 'スポーツ',
        hanViet: '',
        hiragana: 'スポーツ',
        romaji: 'supo-tsu',
        meaning: 'thể thao',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><circle cx="50" cy="50" r="28" fill="#F76707"/><path d="M32 38 Q50 50 32 62 M68 38 Q50 50 68 62" stroke="#FFF" stroke-width="3" fill="none"/></svg>`,
        example: {
          ja: 'どんなスポーツが好きですか。',
          hira: 'どんなスポーツがすきですか。',
          vi: 'Bạn thích môn thể thao nào?'
        }
      },
      {
        id: 'n5_l09_09',
        lesson: 9,
        lessonId: 9,
        level: 'N5',
        kanji: '野球',
        hanViet: 'Dã Cầu',
        hiragana: 'やきゅう',
        romaji: 'yakyuu',
        meaning: 'bóng chày',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F8F9FA"/><circle cx="50" cy="50" r="26" fill="#FFF" stroke="#CED4DA" stroke-width="3"/><path d="M36 34 Q44 50 36 66 M64 34 Q56 50 64 66" stroke="#E03131" stroke-width="2" stroke-dasharray="2 2" fill="none"/></svg>`,
        example: {
          ja: '日本人は野球が大好きです。',
          hira: 'にほんじんはやきゅうがだいすきです。',
          vi: 'Người Nhật Bản rất thích bóng chày.'
        }
      },
      {
        id: 'n5_l09_10',
        lesson: 9,
        lessonId: 9,
        level: 'N5',
        kanji: 'ダンス',
        hanViet: '',
        hiragana: 'ダンス',
        romaji: 'dansu',
        meaning: 'khiêu vũ',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><circle cx="50" cy="30" r="10" fill="#7950F2"/><path d="M38 46 L50 40 L62 48 M50 40 L44 64 L36 78 M44 64 L56 78" stroke="#5F3DC4" stroke-width="4" stroke-linecap="round" fill="none"/></svg>`,
        example: {
          ja: '友達とダンスを習います。',
          hira: 'ともだちとダンスをならいます。',
          vi: 'Tôi học khiêu vũ cùng bạn bè.'
        }
      },
      {
        id: 'n5_l09_11',
        lesson: 9,
        lessonId: 9,
        level: 'N5',
        kanji: '音楽',
        hanViet: 'Âm Lạc',
        hiragana: 'おんがく',
        romaji: 'ongaku',
        meaning: 'âm nhạc',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="36" cy="62" r="8" fill="#0CA678"/><circle cx="64" cy="54" r="8" fill="#0CA678"/><path d="M42 62 L42 30 L70 22 L70 54" stroke="#0CA678" stroke-width="4" fill="none"/><line x1="42" y1="36" x2="70" y2="28" stroke="#0CA678" stroke-width="4"/></svg>`,
        example: {
          ja: '毎日音楽を聞きます。',
          hira: 'まいにちおんがくをききます。',
          vi: 'Mỗi ngày tôi đều nghe âm nhạc.'
        }
      },
      {
        id: 'n5_l09_12',
        lesson: 9,
        lessonId: 9,
        level: 'N5',
        kanji: '歌',
        hanViet: 'Ca',
        hiragana: 'うた',
        romaji: 'uta',
        meaning: 'bài hát',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF0F6"/><circle cx="44" cy="58" r="10" fill="#F06595"/><path d="M52 58 L52 24 L68 28" stroke="#D6336C" stroke-width="4" stroke-linecap="round" fill="none"/></svg>`,
        example: {
          ja: '日本の歌を歌います。',
          hira: 'にほんのうたをうたいます。',
          vi: 'Tôi hát bài hát Nhật Bản.'
        }
      },
      {
        id: 'n5_l09_13',
        lesson: 9,
        lessonId: 9,
        level: 'N5',
        kanji: 'クラシック',
        hanViet: '',
        hiragana: 'クラシック',
        romaji: 'kurashikku',
        meaning: 'nhạc cổ điển',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><circle cx="50" cy="50" r="28" fill="#FAB005"/><text x="50" y="58" text-anchor="middle" font-size="14" font-weight="bold" fill="#FFF">CLASSIC</text></svg>`,
        example: {
          ja: 'クラシック音楽が好きです。',
          hira: 'クラシックおんがくがすきです。',
          vi: 'Tôi thích nhạc cổ điển.'
        }
      },
      {
        id: 'n5_l09_14',
        lesson: 9,
        lessonId: 9,
        level: 'N5',
        kanji: 'ジャズ',
        hanViet: '',
        hiragana: 'ジャズ',
        romaji: 'jazu',
        meaning: 'nhạc jazz',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><circle cx="50" cy="50" r="28" fill="#7950F2"/><text x="50" y="58" text-anchor="middle" font-size="16" font-weight="bold" fill="#FFF">JAZZ</text></svg>`,
        example: {
          ja: '喫茶店でジャズを聞きます。',
          hira: 'きっさてんでジャズをききます。',
          vi: 'Tôi nghe nhạc jazz ở quán cà phê.'
        }
      },
      {
        id: 'n5_l09_15',
        lesson: 9,
        lessonId: 9,
        level: 'N5',
        kanji: 'コンサート',
        hanViet: '',
        hiragana: 'コンサート',
        romaji: 'konsa-to',
        meaning: 'hòa nhạc',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><polygon points="50,22 62,42 84,42 66,58 72,78 50,66 28,78 34,58 16,42 38,42" fill="#FA5252"/></svg>`,
        example: {
          ja: '日曜日にコンサートへ行きます。',
          hira: 'にちようびにコンサートへいきます。',
          vi: 'Chủ Nhật tôi đi xem buổi hòa nhạc.'
        }
      },
      {
        id: 'n5_l09_16',
        lesson: 9,
        lessonId: 9,
        level: 'N5',
        kanji: 'カラオケ',
        hanViet: '',
        hiragana: 'カラオケ',
        romaji: 'karaoke',
        meaning: 'karaoke',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF0F6"/><circle cx="50" cy="38" r="14" fill="#F06595"/><rect x="46" y="52" width="8" height="26" fill="#D6336C"/></svg>`,
        example: {
          ja: '友達とカラオケへ行きました。',
          hira: 'ともだちとカラオケへいきました。',
          vi: 'Tôi đã đi hát karaoke cùng bạn bè.'
        }
      },
      {
        id: 'n5_l09_17',
        lesson: 9,
        lessonId: 9,
        level: 'N5',
        kanji: '歌舞伎',
        hanViet: 'Ca Vũ Kĩ',
        hiragana: 'かぶき',
        romaji: 'kabuki',
        meaning: 'kịch Kabuki',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><ellipse cx="50" cy="50" rx="24" ry="30" fill="#FFF" stroke="#E03131" stroke-width="3"/><path d="M38 42 L46 42 M54 42 L62 42" stroke="#E03131" stroke-width="3"/><path d="M42 62 Q50 68 58 62" stroke="#E03131" stroke-width="3" fill="none"/></svg>`,
        example: {
          ja: '東京で歌舞伎を見ました。',
          hira: 'とうきょうでかぶきをみました。',
          vi: 'Tôi đã xem kịch Kabuki ở Tokyo.'
        }
      },
      {
        id: 'n5_l09_18',
        lesson: 9,
        lessonId: 9,
        level: 'N5',
        kanji: '少し',
        hanViet: 'Thiểu',
        hiragana: 'すこし',
        romaji: 'sukoshi',
        meaning: 'một ít, một chút',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="50" r="10" fill="#20C997"/></svg>`,
        example: {
          ja: '日本語が少し分かります。',
          hira: 'にほんごがすこしわかります。',
          vi: 'Tôi hiểu một chút tiếng Nhật.'
        }
      },
      {
        id: 'n5_l09_19',
        lesson: 9,
        lessonId: 9,
        level: 'N5',
        kanji: '全然',
        hanViet: 'Toàn Nhiên',
        hiragana: 'ぜんぜん',
        romaji: 'zenzen',
        meaning: 'hoàn toàn không',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E9ECEF"/><circle cx="50" cy="50" r="26" fill="#868E96"/><text x="50" y="58" text-anchor="middle" font-size="16" font-weight="bold" fill="#FFF">0%</text></svg>`,
        example: {
          ja: '英語が全然分かりません。',
          hira: 'えいごがぜんぜんわかりません。',
          vi: 'Tôi hoàn toàn không hiểu tiếng Anh.'
        }
      },
      {
        id: 'n5_l09_20',
        lesson: 9,
        lessonId: 9,
        level: 'N5',
        kanji: '早く/速く',
        hanViet: 'Tảo Viễn',
        hiragana: 'はやく',
        romaji: 'hayaku',
        meaning: 'sớm, nhanh',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><path d="M30 50 L65 50 M52 38 L65 50 L52 62" stroke="#F59F00" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        example: {
          ja: '毎朝早く起きます。',
          hira: 'まいあさはやくおきます。',
          vi: 'Mỗi sáng tôi thức dậy sớm.'
        }
      },
      {
        id: 'n5_l09_21',
        lesson: 9,
        lessonId: 9,
        level: 'N5',
        kanji: '～から',
        hanViet: '',
        hiragana: '～から',
        romaji: '~kara',
        meaning: 'vì, bởi vì',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="50" r="28" fill="#339AF0"/><text x="50" y="58" text-anchor="middle" font-size="14" font-weight="bold" fill="#FFF">BECAUSE</text></svg>`,
        example: {
          ja: '時間がありませんから、タクシーで行きます。',
          hira: 'じかんがありませんから、タクシーでいきます。',
          vi: 'Vì không có thời gian nên tôi sẽ đi bằng taxi.'
        }
      },
      {
        id: 'n5_l09_22',
        lesson: 9,
        lessonId: 9,
        level: 'N5',
        kanji: 'どうして',
        hanViet: '',
        hiragana: 'どうして',
        romaji: 'doushite',
        meaning: 'tại sao',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><circle cx="50" cy="50" r="28" fill="#FF922B"/><text x="50" y="60" text-anchor="middle" font-size="28" font-weight="bold" fill="#FFF">?</text></svg>`,
        example: {
          ja: 'どうして昨日休みましたか。',
          hira: 'どうしてきのうやすみましたか。',
          vi: 'Tại sao hôm qua bạn lại nghỉ học?'
        }
      },
      {
        id: 'n5_l09_23',
        lesson: 9,
        lessonId: 9,
        level: 'N5',
        kanji: '残念ですね',
        hanViet: 'Tàn Niệm',
        hiragana: 'ざんねんですね',
        romaji: 'zannen desu ne',
        meaning: 'Thật đáng tiếc',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E9ECEF"/><circle cx="50" cy="50" r="28" fill="#868E96"/><path d="M38 58 Q50 48 62 58" stroke="#FFF" stroke-width="4" stroke-linecap="round" fill="none"/></svg>`,
        example: {
          ja: '「行けません。」「そうですか、残念ですね。」',
          hira: '「いけません。」「そうですか、ざんねんですね。」',
          vi: '“Tôi không đi được.” “Vậy à, thật là đáng tiếc nhỉ.”'
        }
      },
      {
        id: 'n5_l09_24',
        lesson: 9,
        lessonId: 9,
        level: 'N5',
        kanji: 'すみません',
        hanViet: '',
        hiragana: 'すみません',
        romaji: 'sumimasen',
        meaning: 'Tôi xin lỗi',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><circle cx="50" cy="38" r="14" fill="#FF922B"/><path d="M30 76 C30 60 70 60 70 76 Z" fill="#FFA94D"/></svg>`,
        example: {
          ja: '遅れてすみません。',
          hira: 'おくれてすみません。',
          vi: 'Tôi xin lỗi vì đã đến muộn.'
        }
      },
      {
        id: 'n5_l09_25',
        lesson: 9,
        lessonId: 9,
        level: 'N5',
        kanji: 'もしもし',
        hanViet: '',
        hiragana: 'もしもし',
        romaji: 'moshimoshi',
        meaning: 'Alo (nghe điện thoại)',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><path d="M34 32 C30 32 26 36 26 40 C26 58 42 74 60 74 C64 74 68 70 68 66 L64 58 C62 56 58 56 56 58 L52 62 C44 58 40 54 36 46 L40 42 C42 40 42 36 40 34 Z" fill="#0CA678"/></svg>`,
        example: {
          ja: 'もしもし、田中さんですか。',
          hira: 'もしもし、たなかさんですか。',
          vi: 'Alo, có phải anh Tanaka không ạ?'
        }
      },
      {
        id: 'n5_l09_26',
        lesson: 9,
        lessonId: 9,
        level: 'N5',
        kanji: 'ああ',
        hanViet: '',
        hiragana: 'ああ',
        romaji: 'aa',
        meaning: 'a a (nhận ra điều gì)',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><circle cx="50" cy="50" r="28" fill="#F59F00"/><text x="50" y="58" text-anchor="middle" font-size="20" font-weight="bold" fill="#FFF">AH!</text></svg>`,
        example: {
          ja: 'ああ、分かりました。',
          hira: 'ああ、わかりました。',
          vi: 'A a, tôi hiểu ra rồi.'
        }
      },
      {
        id: 'n5_l09_27',
        lesson: 9,
        lessonId: 9,
        level: 'N5',
        kanji: '一緒にいかがですか',
        hanViet: '',
        hiragana: 'いっしょにいかがですか',
        romaji: 'isshoni ikaga desu ka',
        meaning: 'Cùng đi với tôi có được không?',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="36" cy="40" r="10" fill="#1971C2"/><circle cx="64" cy="40" r="10" fill="#228BE6"/><path d="M24 74 C24 60 48 60 48 74 Z" fill="#1971C2"/><path d="M52 74 C52 60 76 60 76 74 Z" fill="#228BE6"/></svg>`,
        example: {
          ja: 'コンサートへ一緒に行きませんか。',
          hira: 'コンサートへいっしょにいきませんか。',
          vi: 'Cùng đi xem hòa nhạc với tôi có được không?'
        }
      },
      {
        id: 'n5_l09_28',
        lesson: 9,
        lessonId: 9,
        level: 'N5',
        kanji: '[～は]ちょっと',
        hanViet: '',
        hiragana: '[～は]ちょっと',
        romaji: '[~wa] chotto',
        meaning: '~ thì hơi bất tiện, khó',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><circle cx="50" cy="42" r="14" fill="#FF922B"/><path d="M30 76 C30 62 70 62 70 76 Z" fill="#FFA94D"/><path d="M42 50 Q50 44 58 50" stroke="#FFF" stroke-width="3" fill="none"/></svg>`,
        example: {
          ja: '日曜日はちょっと用事があります。',
          hira: 'にちようびはちょっとようじがあります。',
          vi: 'Chủ Nhật thì tôi hơi có chút việc bận.'
        }
      },
      {
        id: 'n5_l09_29',
        lesson: 9,
        lessonId: 9,
        level: 'N5',
        kanji: 'だめですか',
        hanViet: '',
        hiragana: 'だめですか',
        romaji: 'dame desu ka',
        meaning: 'Không được ư?',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><circle cx="50" cy="50" r="26" fill="#FA5252"/><line x1="38" y1="38" x2="62" y2="62" stroke="#FFF" stroke-width="5" stroke-linecap="round"/><line x1="62" y1="38" x2="38" y2="62" stroke="#FFF" stroke-width="5" stroke-linecap="round"/></svg>`,
        example: {
          ja: '明日はだめですか。',
          hira: 'あしたはだめですか。',
          vi: 'Ngày mai không được sao bạn?'
        }
      },
      {
        id: 'n5_l09_30',
        lesson: 9,
        lessonId: 9,
        level: 'N5',
        kanji: 'また今度お願いします',
        hanViet: 'Kim Độ Nguyện',
        hiragana: 'またこんどおねがいします',
        romaji: 'mata kondo onegaishimasu',
        meaning: 'Lần sau lại mời tôi nhé',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="38" r="14" fill="#0CA678"/><path d="M30 76 C30 60 70 60 70 76 Z" fill="#20C997"/><path d="M40 48 L60 48" stroke="#FFF" stroke-width="3" stroke-linecap="round"/></svg>`,
        example: {
          ja: '残念ですが、また今度お願いします。',
          hira: 'ざんねんですが、またこんどおねがいします。',
          vi: 'Tiếc quá, hẹn lần sau lại mời tôi nhé.'
        }
      }
    ]
  },

// --------------------------------------------------------------------------
  // BÀI 10: VỊ TRÍ KHÔNG GIAN & SỰ TỒN TẠI (28 TỪ)
  // --------------------------------------------------------------------------
  {
    lessonNumber: 10,
    level: 'N5',
    title: 'Bài 10: Vị trí không gian & Sự tồn tại',
    topicVi: 'Vị trí không gian & Sự tồn tại',
    icon: '📍',
    grammarPoint: 'Sự tồn tại: Địa điểm に Người/Động vật が います; Địa điểm に Đồ vật が あります. Vị trí không gian: Danh từ 1 の (上, 下, 前, 後ろ, 左, 右, 中, 外, 隣, 近く, 間) に N2 が あります/います. Liệt kê không đầy đủ: ～や～[など].',
    vocab: [
      {
        id: 'n5_l10_01',
        lesson: 10,
        lessonId: 10,
        level: 'N5',
        kanji: 'います',
        hanViet: '',
        hiragana: 'います',
        romaji: 'imasu',
        meaning: 'tồn tại, có (người/động vật)',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="36" r="14" fill="#1971C2"/><path d="M28 76 C28 58 72 58 72 76 Z" fill="#339AF0"/></svg>`,
        example: {
          ja: '教室に学生がいます。',
          hira: 'きょうしつにがくせいがいます。',
          vi: 'Có học sinh ở trong phòng học.'
        }
      },
      {
        id: 'n5_l10_02',
        lesson: 10,
        lessonId: 10,
        level: 'N5',
        kanji: '窓',
        hanViet: 'Song',
        hiragana: 'まど',
        romaji: 'mado',
        meaning: 'cửa sổ',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="25" y="25" width="50" height="50" rx="3" fill="#FFF" stroke="#1864AB" stroke-width="4"/><line x1="50" y1="25" x2="50" y2="75" stroke="#1864AB" stroke-width="3"/><line x1="25" y1="50" x2="75" y2="50" stroke="#1864AB" stroke-width="3"/></svg>`,
        example: {
          ja: '窓を開けてください。',
          hira: 'まどをあけてください。',
          vi: 'Xin hãy mở cửa sổ ra.'
        }
      },
      {
        id: 'n5_l10_03',
        lesson: 10,
        lessonId: 10,
        level: 'N5',
        kanji: 'ポスト',
        hanViet: '',
        hiragana: 'ポスト',
        romaji: 'posuto',
        meaning: 'hòm thư',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><rect x="30" y="28" width="40" height="44" rx="4" fill="#E03131"/><text x="50" y="52" text-anchor="middle" font-size="20" font-weight="bold" fill="#FFF">〒</text><rect x="46" y="72" width="8" height="14" fill="#868E96"/></svg>`,
        example: {
          ja: '手紙をポストに入れます。',
          hira: 'てがみをポストにいれます。',
          vi: 'Tôi bỏ thư vào hòm thư.'
        }
      },
      {
        id: 'n5_l10_04',
        lesson: 10,
        lessonId: 10,
        level: 'N5',
        kanji: 'ビル',
        hanViet: '',
        hiragana: 'ビル',
        romaji: 'biru',
        meaning: 'tòa nhà',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E9ECEF"/><rect x="30" y="22" width="40" height="56" rx="3" fill="#495057"/><rect x="36" y="28" width="8" height="8" fill="#FFF"/><rect x="56" y="28" width="8" height="8" fill="#FFF"/><rect x="36" y="42" width="8" height="8" fill="#FFF"/><rect x="56" y="42" width="8" height="8" fill="#FFF"/><rect x="36" y="56" width="8" height="8" fill="#FFF"/><rect x="56" y="56" width="8" height="8" fill="#FFF"/></svg>`,
        example: {
          ja: '高いビルがたくさんあります。',
          hira: 'たかいビルがたくさんあります。',
          vi: 'Có rất nhiều tòa nhà cao tầng.'
        }
      },
      {
        id: 'n5_l10_05',
        lesson: 10,
        lessonId: 10,
        level: 'N5',
        kanji: '公園',
        hanViet: 'Công Viên',
        hiragana: 'こうえん',
        romaji: 'kouen',
        meaning: 'công viên',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="36" cy="42" r="14" fill="#20C997"/><rect x="33" y="54" width="6" height="20" fill="#862E9C"/><circle cx="64" cy="46" r="10" fill="#40C057"/><rect x="62" y="54" width="4" height="20" fill="#862E9C"/></svg>`,
        example: {
          ja: '公園を散歩します。',
          hira: 'こうえんをさんぽします。',
          vi: 'Tôi đi dạo ở công viên.'
        }
      },
      {
        id: 'n5_l10_06',
        lesson: 10,
        lessonId: 10,
        level: 'N5',
        kanji: '喫茶店',
        hanViet: 'Khiết Trà Điếm',
        hiragana: 'きっさてん',
        romaji: 'kissaten',
        meaning: 'quán giải khát',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><path d="M30 40 L34 66 C34 72 64 72 64 66 L68 40 Z" fill="#D9480F"/><path d="M68 44 C76 44 76 60 68 60" stroke="#D9480F" stroke-width="4" fill="none"/></svg>`,
        example: {
          ja: '喫茶店でコーヒーを飲みます。',
          hira: 'きっさてんでコーヒーをのみます。',
          vi: 'Tôi uống cà phê ở quán giải khát.'
        }
      },
      {
        id: 'n5_l10_07',
        lesson: 10,
        lessonId: 10,
        level: 'N5',
        kanji: '本屋',
        hanViet: 'Bản Ốc',
        hiragana: 'ほんや',
        romaji: 'hon\'ya',
        meaning: 'hiệu sách',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><polygon points="20,44 50,22 80,44" fill="#F59F00"/><rect x="28" y="44" width="44" height="34" fill="#FAB005"/><rect x="36" y="52" width="12" height="18" fill="#FFF"/><rect x="52" y="52" width="12" height="18" fill="#FFF"/></svg>`,
        example: {
          ja: '本屋で辞書を買いました。',
          hira: 'ほんやでじしょをかいました。',
          vi: 'Tôi đã mua từ điển ở hiệu sách.'
        }
      },
      {
        id: 'n5_l10_08',
        lesson: 10,
        lessonId: 10,
        level: 'N5',
        kanji: '～屋',
        hanViet: 'Ốc',
        hiragana: '～や',
        romaji: '~ya',
        meaning: 'hiệu, cửa hàng ~',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><polygon points="22,42 50,24 78,42" fill="#F76707"/><rect x="28" y="42" width="44" height="34" fill="#FF922B"/><rect x="42" y="54" width="16" height="22" fill="#FFF"/></svg>`,
        example: {
          ja: '花屋で花を買います。',
          hira: 'はなやではなをかいます。',
          vi: 'Tôi mua hoa ở tiệm hoa.'
        }
      },
      {
        id: 'n5_l10_09',
        lesson: 10,
        lessonId: 10,
        level: 'N5',
        kanji: '乗り場',
        hanViet: 'Thừa Trường',
        hiragana: 'のりば',
        romaji: 'noriba',
        meaning: 'bến xe',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="26" y="34" width="48" height="34" rx="4" fill="#1864AB"/><circle cx="36" cy="64" r="5" fill="#FFD43B"/><circle cx="64" cy="64" r="5" fill="#FFD43B"/><line x1="20" y1="74" x2="80" y2="74" stroke="#495057" stroke-width="4"/></svg>`,
        example: {
          ja: 'タクシーの乗り場はあそこです。',
          hira: 'タクシーののりばはあそこです。',
          vi: 'Bến đón taxi ở đằng kia.'
        }
      },
      {
        id: 'n5_l10_10',
        lesson: 10,
        lessonId: 10,
        level: 'N5',
        kanji: '県',
        hanViet: 'Huyện',
        hiragana: 'けん',
        romaji: 'ken',
        meaning: 'tỉnh, huyện',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="50" r="28" fill="#20C997"/><text x="50" y="58" text-anchor="middle" font-size="18" font-weight="bold" fill="#FFF">県</text></svg>`,
        example: {
          ja: '静岡県に富士山があります。',
          hira: 'しずおかけんにふじさんがあります。',
          vi: 'Ở tỉnh Shizuoka có núi Phú Sĩ.'
        }
      },
      {
        id: 'n5_l10_11',
        lesson: 10,
        lessonId: 10,
        level: 'N5',
        kanji: '上',
        hanViet: 'Thượng',
        hiragana: 'うえ',
        romaji: 'ue',
        meaning: 'trên',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><line x1="20" y1="62" x2="80" y2="62" stroke="#1864AB" stroke-width="5" stroke-linecap="round"/><polygon points="50,24 64,44 36,44" fill="#339AF0"/><line x1="50" y1="44" x2="50" y2="58" stroke="#339AF0" stroke-width="5"/></svg>`,
        example: {
          ja: '机の上に本があります。',
          hira: 'つくえのうえにほんがあります。',
          vi: 'Ở trên bàn có quyển sách.'
        }
      },
      {
        id: 'n5_l10_12',
        lesson: 10,
        lessonId: 10,
        level: 'N5',
        kanji: '下',
        hanViet: 'Hạ',
        hiragana: 'した',
        romaji: 'shita',
        meaning: 'dưới',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><line x1="20" y1="38" x2="80" y2="38" stroke="#D9480F" stroke-width="5" stroke-linecap="round"/><polygon points="50,76 36,56 64,56" fill="#FF922B"/><line x1="50" y1="42" x2="50" y2="56" stroke="#FF922B" stroke-width="5"/></svg>`,
        example: {
          ja: '机の下に猫がいます。',
          hira: 'つくえのしたにねこがいます。',
          vi: 'Ở dưới gầm bàn có một con mèo.'
        }
      },
      {
        id: 'n5_l10_13',
        lesson: 10,
        lessonId: 10,
        level: 'N5',
        kanji: '前',
        hanViet: 'Tiền',
        hiragana: 'まえ',
        romaji: 'mae',
        meaning: 'trước',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="62" cy="50" r="14" fill="#0CA678"/><rect x="24" y="38" width="22" height="24" rx="3" fill="#20C997"/></svg>`,
        example: {
          ja: '駅の前にポストがあります。',
          hira: 'えきのまえにポストがあります。',
          vi: 'Ở trước nhà ga có một thùng thư.'
        }
      },
      {
        id: 'n5_l10_14',
        lesson: 10,
        lessonId: 10,
        level: 'N5',
        kanji: '後ろ',
        hanViet: 'Hậu',
        hiragana: 'うしろ',
        romaji: 'ushiro',
        meaning: 'sau',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><circle cx="36" cy="50" r="14" fill="#7950F2"/><rect x="54" y="38" width="22" height="24" rx="3" fill="#B197FC"/></svg>`,
        example: {
          ja: '私の後ろに田中さんがいます。',
          hira: 'わたしのうしろにたなかさんがいます。',
          vi: 'Ở phía sau tôi có anh Tanaka.'
        }
      },
      {
        id: 'n5_l10_15',
        lesson: 10,
        lessonId: 10,
        level: 'N5',
        kanji: '左',
        hanViet: 'Tả',
        hiragana: 'ひだり',
        romaji: 'hidari',
        meaning: 'bên trái',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><path d="M68 50 L32 50 M44 38 L32 50 L44 62" stroke="#1971C2" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        example: {
          ja: '右へ曲がって、左です。',
          hira: 'みぎへまがって、ひだりです。',
          vi: 'Rẽ phải rồi nó nằm ở bên trái.'
        }
      },
      {
        id: 'n5_l10_16',
        lesson: 10,
        lessonId: 10,
        level: 'N5',
        kanji: '右',
        hanViet: 'Hữu',
        hiragana: 'みぎ',
        romaji: 'migi',
        meaning: 'bên phải',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><path d="M32 50 L68 50 M56 38 L68 50 L56 62" stroke="#F76707" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        example: {
          ja: '銀行の右に本屋があります。',
          hira: 'ぎんこうのみぎにほんやがあります。',
          vi: 'Ở bên phải ngân hàng có một hiệu sách.'
        }
      },
      {
        id: 'n5_l10_17',
        lesson: 10,
        lessonId: 10,
        level: 'N5',
        kanji: '中',
        hanViet: 'Trung',
        hiragana: 'なか',
        romaji: 'naka',
        meaning: 'bên trong',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><rect x="25" y="25" width="50" height="50" rx="4" fill="none" stroke="#F59F00" stroke-width="4"/><circle cx="50" cy="50" r="10" fill="#E67700"/></svg>`,
        example: {
          ja: '鞄の中に鍵があります。',
          hira: 'かばんのなかにかぎがあります。',
          vi: 'Ở trong cặp có chiếc chìa khóa.'
        }
      },
      {
        id: 'n5_l10_18',
        lesson: 10,
        lessonId: 10,
        level: 'N5',
        kanji: '外',
        hanViet: 'Ngoại',
        hiragana: 'そと',
        romaji: 'soto',
        meaning: 'bên ngoài',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><rect x="25" y="32" width="36" height="36" rx="4" fill="none" stroke="#0CA678" stroke-width="4"/><circle cx="75" cy="50" r="10" fill="#20C997"/></svg>`,
        example: {
          ja: '外はとても寒いです。',
          hira: 'そとはとてもさむいです。',
          vi: 'Bên ngoài trời rất lạnh.'
        }
      },
      {
        id: 'n5_l10_19',
        lesson: 10,
        lessonId: 10,
        level: 'N5',
        kanji: '隣',
        hanViet: 'Lân',
        hiragana: 'となり',
        romaji: 'tonari',
        meaning: 'bên cạnh',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="24" y="35" width="22" height="30" rx="3" fill="#1864AB"/><rect x="54" y="35" width="22" height="30" rx="3" fill="#339AF0"/></svg>`,
        example: {
          ja: 'スーパーの隣に花屋があります。',
          hira: 'スーパーのとなりにはなやがあります。',
          vi: 'Ở bên cạnh siêu thị có tiệm hoa.'
        }
      },
      {
        id: 'n5_l10_20',
        lesson: 10,
        lessonId: 10,
        level: 'N5',
        kanji: '近く',
        hanViet: 'Cận',
        hiragana: 'ちかく',
        romaji: 'chikaku',
        meaning: 'gần',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><circle cx="44" cy="50" r="12" fill="#F59F00"/><circle cx="62" cy="50" r="8" fill="#FCC419"/></svg>`,
        example: {
          ja: '家の近くに公園があります。',
          hira: 'いえのちかくにこうえんがあります。',
          vi: 'Ở gần nhà tôi có một công viên.'
        }
      },
      {
        id: 'n5_l10_21',
        lesson: 10,
        lessonId: 10,
        level: 'N5',
        kanji: '間',
        hanViet: 'Gian',
        hiragana: 'あいだ',
        romaji: 'aida',
        meaning: 'ở giữa',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><rect x="20" y="35" width="18" height="30" rx="3" fill="#7950F2"/><circle cx="50" cy="50" r="10" fill="#FFD43B"/><rect x="62" y="35" width="18" height="30" rx="3" fill="#7950F2"/></svg>`,
        example: {
          ja: '銀行と郵便局の間に本屋があります。',
          hira: 'ぎんこうとゆうびんきょくのあいだにほんやがあります。',
          vi: 'Ở giữa ngân hàng và bưu điện có hiệu sách.'
        }
      },
      {
        id: 'n5_l10_22',
        lesson: 10,
        lessonId: 10,
        level: 'N5',
        kanji: '～や～[など]',
        hanViet: '',
        hiragana: '～や～[など]',
        romaji: '~ya~[nado]',
        meaning: 'và ~ và ~',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="34" cy="50" r="10" fill="#0CA678"/><text x="50" y="55" text-anchor="middle" font-size="16" font-weight="bold" fill="#0CA678">や</text><circle cx="66" cy="50" r="10" fill="#20C997"/></svg>`,
        example: {
          ja: '箱の中に写真や手紙があります。',
          hira: 'はこのなかにしゃしんやてがみがあります。',
          vi: 'Ở trong hộp có ảnh và thư (vân vân).'
        }
      },
      {
        id: 'n5_l10_23',
        lesson: 10,
        lessonId: 10,
        level: 'N5',
        kanji: '一番～',
        hanViet: 'Nhất Phiên',
        hiragana: 'いちばん',
        romaji: 'ichiban',
        meaning: 'thứ nhất/trên cùng',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><circle cx="50" cy="50" r="28" fill="#FAB005"/><text x="50" y="58" text-anchor="middle" font-size="22" font-weight="bold" fill="#FFF">#1</text></svg>`,
        example: {
          ja: '棚の一番上に本があります。',
          hira: 'たなのいちばんうえにほんがあります。',
          vi: 'Ở trên cùng của chiếc giá sách có quyển sách.'
        }
      },
      {
        id: 'n5_l10_24',
        lesson: 10,
        lessonId: 10,
        level: 'N5',
        kanji: 'ー段目',
        hanViet: 'Đoạn Mục',
        hiragana: 'ーだんめ',
        romaji: '-danme',
        meaning: 'ngăn thứ ~',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="25" y="24" width="50" height="52" rx="3" fill="none" stroke="#1971C2" stroke-width="3"/><line x1="25" y1="41" x2="75" y2="41" stroke="#1971C2" stroke-width="2"/><line x1="25" y1="58" x2="75" y2="58" stroke="#1971C2" stroke-width="2"/><text x="50" y="37" text-anchor="middle" font-size="10" font-weight="bold" fill="#1864AB">1段</text></svg>`,
        example: {
          ja: '二段目にワインがあります。',
          hira: 'にだんめにワインがあります。',
          vi: 'Ở ngăn thứ hai có chai rượu vang.'
        }
      },
      {
        id: 'n5_l10_25',
        lesson: 10,
        lessonId: 10,
        level: 'N5',
        kanji: 'どうもすみません',
        hanViet: '',
        hiragana: 'どうもすみません',
        romaji: 'doumo sumimasen',
        meaning: 'Cảm ơn/Xin lỗi',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><circle cx="50" cy="38" r="14" fill="#FF922B"/><path d="M30 76 C30 60 70 60 70 76 Z" fill="#FFA94D"/><path d="M40 48 L60 48" stroke="#FFF" stroke-width="3" stroke-linecap="round"/></svg>`,
        example: {
          ja: '教えてくれて、どうもすみません。',
          hira: 'おしえてくれて、どうもすみません。',
          vi: 'Cảm ơn anh rất nhiều vì đã chỉ cho tôi.'
        }
      },
      {
        id: 'n5_l10_26',
        lesson: 10,
        lessonId: 10,
        level: 'N5',
        kanji: 'チリソース',
        hanViet: '',
        hiragana: 'チリソース',
        romaji: 'chiri so-su',
        meaning: 'tương ớt',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><path d="M42 30 L58 30 L54 74 L46 74 Z" fill="#E03131"/><rect x="44" y="24" width="12" height="6" fill="#495057"/><ellipse cx="50" cy="52" rx="4" ry="8" fill="#FFF"/></svg>`,
        example: {
          ja: 'チリソースはどこにありますか。',
          hira: 'チリソースはどこにありますか。',
          vi: 'Tương ớt ở chỗ nào vậy ạ?'
        }
      },
      {
        id: 'n5_l10_27',
        lesson: 10,
        lessonId: 10,
        level: 'N5',
        kanji: '奥',
        hanViet: 'Áo',
        hiragana: 'おく',
        romaji: 'oku',
        meaning: 'phía sâu bên trong',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E9ECEF"/><polygon points="20,24 80,24 65,76 35,76" fill="#868E96"/><circle cx="50" cy="50" r="8" fill="#212529"/></svg>`,
        example: {
          ja: '店の奥にあります。',
          hira: 'みせのおくにあります。',
          vi: 'Nằm ở phía sâu bên trong cửa hàng.'
        }
      },
      {
        id: 'n5_l10_28',
        lesson: 10,
        lessonId: 10,
        level: 'N5',
        kanji: 'スパイスコーナー',
        hanViet: '',
        hiragana: 'スパイスコーナー',
        romaji: 'supaisu ko-na-',
        meaning: 'quầy gia vị',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><rect x="25" y="38" width="50" height="38" rx="4" fill="#F59F00"/><text x="50" y="60" text-anchor="middle" font-size="12" font-weight="bold" fill="#FFF">SPICE</text></svg>`,
        example: {
          ja: 'スパイスコーナーは一番奥です。',
          hira: 'スパイスコーナーはいちばんおくです。',
          vi: 'Quầy gia vị nằm ở tận cùng bên trong.'
        }
      }
    ]
  },

// --------------------------------------------------------------------------
  // BÀI 11: SỐ ĐẾM, LƯỢNG TỪ & KHOẢNG THỜI GIAN (35 TỪ)
  // --------------------------------------------------------------------------
  {
    lessonNumber: 11,
    level: 'N5',
    title: 'Bài 11: Số đếm, Lượng từ & Thời gian',
    topicVi: 'Số đếm, Lượng từ & Khoảng thời gian',
    icon: '🛒',
    grammarPoint: 'Số đếm đồ vật thông dụng: ひとつ, ふたつ... とお. Lượng từ chỉ thời gian: ー時間, ー週間, ーか月, ー年. Hỏi khoảng bao lâu: どのくらい. Tần suất: Thời gian に X回. Tổng cộng: 全部で. Giới hạn: ～だけ.',
    vocab: [
      {
        id: 'n5_l11_01',
        lesson: 11,
        lessonId: 11,
        level: 'N5',
        kanji: 'います[子どもが～]',
        hanViet: 'Tử',
        hiragana: 'こどもがいます',
        romaji: 'kodomo ga imasu',
        meaning: 'có con, có em bé',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF0F6"/><circle cx="50" cy="40" r="14" fill="#F06595"/><path d="M32 76 C32 62 68 62 68 76 Z" fill="#FCC2D7"/><circle cx="45" cy="38" r="2" fill="#FFF"/><circle cx="55" cy="38" r="2" fill="#FFF"/></svg>`,
        example: {
          ja: '子どもが二人います。',
          hira: 'こどもがふたりいます。',
          vi: 'Tôi có hai đứa con.'
        }
      },
      {
        id: 'n5_l11_02',
        lesson: 11,
        lessonId: 11,
        level: 'N5',
        kanji: 'います[日本に～]',
        hanViet: 'Nhật Bản',
        hiragana: 'にほんにいます',
        romaji: 'nihon ni imasu',
        meaning: 'ở Nhật Bản',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="50" r="30" fill="#FFF" stroke="#1864AB" stroke-width="3"/><circle cx="50" cy="50" r="14" fill="#E03131"/></svg>`,
        example: {
          ja: '日本に一年います。',
          hira: 'にほんにいちねんいます。',
          vi: 'Tôi ở Nhật Bản một năm.'
        }
      },
      {
        id: 'n5_l11_03',
        lesson: 11,
        lessonId: 11,
        level: 'N5',
        kanji: 'かかります',
        hanViet: '',
        hiragana: 'かかります',
        romaji: 'kakarimasu',
        meaning: 'tốn thời gian/tiền bạc',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><circle cx="50" cy="50" r="26" fill="none" stroke="#F59F00" stroke-width="4"/><line x1="50" y1="50" x2="50" y2="34" stroke="#E67700" stroke-width="4"/><line x1="50" y1="50" x2="64" y2="50" stroke="#E67700" stroke-width="4"/></svg>`,
        example: {
          ja: '東京まで一時間かかります。',
          hira: 'とうきょうまでいちじかんかかります。',
          vi: 'Tới Tokyo tốn mất một tiếng.'
        }
      },
      {
        id: 'n5_l11_04',
        lesson: 11,
        lessonId: 11,
        level: 'N5',
        kanji: '休みます[会社を～]',
        hanViet: 'Hưu Hội Xã',
        hiragana: 'かいしゃをやすみます',
        romaji: 'kaisha o yasumimasu',
        meaning: 'nghỉ làm ở công ty',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="40" r="14" fill="#0CA678"/><path d="M30 76 C30 62 70 62 70 76 Z" fill="#20C997"/><line x1="38" y1="50" x2="62" y2="50" stroke="#FFF" stroke-width="3"/></svg>`,
        example: {
          ja: '風邪で会社を休みます。',
          hira: 'かぜでかいしゃをやすみます。',
          vi: 'Vì bị cảm cúm nên tôi xin nghỉ làm.'
        }
      },
      {
        id: 'n5_l11_05',
        lesson: 11,
        lessonId: 11,
        level: 'N5',
        kanji: '一つ',
        hanViet: 'Nhất',
        hiragana: 'ひとつ',
        romaji: 'hitotsu',
        meaning: '1 cái',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><circle cx="50" cy="50" r="16" fill="#F76707"/><text x="50" y="56" text-anchor="middle" font-size="16" font-weight="bold" fill="#FFF">1</text></svg>`,
        example: {
          ja: 'りんごを一つください。',
          hira: 'りんごをひとつください。',
          vi: 'Xin cho tôi một quả táo.'
        }
      },
      {
        id: 'n5_l11_06',
        lesson: 11,
        lessonId: 11,
        level: 'N5',
        kanji: '二つ',
        hanViet: 'Nhị',
        hiragana: 'ふたつ',
        romaji: 'futatsu',
        meaning: '2 cái',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><circle cx="38" cy="50" r="12" fill="#F76707"/><circle cx="62" cy="50" r="12" fill="#F76707"/></svg>`,
        example: {
          ja: 'みかんを二つ買いました。',
          hira: 'みかんをふたつかいました。',
          vi: 'Tôi đã mua hai quả quýt.'
        }
      },
      {
        id: 'n5_l11_07',
        lesson: 11,
        lessonId: 11,
        level: 'N5',
        kanji: '三つ',
        hanViet: 'Tam',
        hiragana: 'みっつ',
        romaji: 'mittsu',
        meaning: '3 cái',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><circle cx="50" cy="36" r="10" fill="#F76707"/><circle cx="36" cy="60" r="10" fill="#F76707"/><circle cx="64" cy="60" r="10" fill="#F76707"/></svg>`,
        example: {
          ja: 'ケーキを三つください。',
          hira: 'ケーキをみっつください。',
          vi: 'Xin cho tôi 3 chiếc bánh ngọt.'
        }
      },
      {
        id: 'n5_l11_08',
        lesson: 11,
        lessonId: 11,
        level: 'N5',
        kanji: '四つ',
        hanViet: 'Tứ',
        hiragana: 'よっつ',
        romaji: 'yottsu',
        meaning: '4 cái',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><circle cx="38" cy="38" r="9" fill="#F76707"/><circle cx="62" cy="38" r="9" fill="#F76707"/><circle cx="38" cy="62" r="9" fill="#F76707"/><circle cx="62" cy="62" r="9" fill="#F76707"/></svg>`,
        example: {
          ja: '椅子が四つあります。',
          hira: 'いすがよっつあります。',
          vi: 'Có 4 chiếc ghế.'
        }
      },
      {
        id: 'n5_l11_09',
        lesson: 11,
        lessonId: 11,
        level: 'N5',
        kanji: '五つ',
        hanViet: 'Ngũ',
        hiragana: 'いつつ',
        romaji: 'itsutsu',
        meaning: '5 cái',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><circle cx="34" cy="34" r="8" fill="#F76707"/><circle cx="66" cy="34" r="8" fill="#F76707"/><circle cx="50" cy="50" r="8" fill="#F76707"/><circle cx="34" cy="66" r="8" fill="#F76707"/><circle cx="66" cy="66" r="8" fill="#F76707"/></svg>`,
        example: {
          ja: '卵を五つ使います。',
          hira: 'たまごをいつつつかいます。',
          vi: 'Tôi dùng 5 quả trứng.'
        }
      },
      {
        id: 'n5_l11_10',
        lesson: 11,
        lessonId: 11,
        level: 'N5',
        kanji: '六つ',
        hanViet: 'Lục',
        hiragana: 'むっつ',
        romaji: 'muttsu',
        meaning: '6 cái',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><circle cx="36" cy="32" r="7" fill="#F76707"/><circle cx="64" cy="32" r="7" fill="#F76707"/><circle cx="36" cy="50" r="7" fill="#F76707"/><circle cx="64" cy="50" r="7" fill="#F76707"/><circle cx="36" cy="68" r="7" fill="#F76707"/><circle cx="64" cy="68" r="7" fill="#F76707"/></svg>`,
        example: {
          ja: 'パンを六つ買いました。',
          hira: 'パンをむっつかいました。',
          vi: 'Tôi đã mua 6 chiếc bánh mì.'
        }
      },
      {
        id: 'n5_l11_11',
        lesson: 11,
        lessonId: 11,
        level: 'N5',
        kanji: '七つ',
        hanViet: 'Thất',
        hiragana: 'ななつ',
        romaji: 'nanatsu',
        meaning: '7 cái',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><text x="50" y="60" text-anchor="middle" font-size="28" font-weight="bold" fill="#F76707">7</text></svg>`,
        example: {
          ja: 'みかんを七つ食べました。',
          hira: 'みかんをななつたべました。',
          vi: 'Tôi đã ăn 7 quả quýt.'
        }
      },
      {
        id: 'n5_l11_12',
        lesson: 11,
        lessonId: 11,
        level: 'N5',
        kanji: '八つ',
        hanViet: 'Bát',
        hiragana: 'やっつ',
        romaji: 'yattsu',
        meaning: '8 cái',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><text x="50" y="60" text-anchor="middle" font-size="28" font-weight="bold" fill="#F76707">8</text></svg>`,
        example: {
          ja: '箱が八つあります。',
          hira: 'はこがやっつあります。',
          vi: 'Có 8 chiếc hộp.'
        }
      },
      {
        id: 'n5_l11_13',
        lesson: 11,
        lessonId: 11,
        level: 'N5',
        kanji: '九つ',
        hanViet: 'Cửu',
        hiragana: 'ここのつ',
        romaji: 'kokonotsu',
        meaning: '9 cái',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><text x="50" y="60" text-anchor="middle" font-size="28" font-weight="bold" fill="#F76707">9</text></svg>`,
        example: {
          ja: 'りんごを九つ買いました。',
          hira: 'りんごをここのつかいました。',
          vi: 'Tôi đã mua 9 quả táo.'
        }
      },
      {
        id: 'n5_l11_14',
        lesson: 11,
        lessonId: 11,
        level: 'N5',
        kanji: '十',
        hanViet: 'Thập',
        hiragana: 'とお',
        romaji: 'too',
        meaning: '10 cái',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><text x="50" y="60" text-anchor="middle" font-size="26" font-weight="bold" fill="#F76707">10</text></svg>`,
        example: {
          ja: 'ペンを十本買いました。',
          hira: 'ペンをじゅっぽんかいました。',
          vi: 'Tôi mua 10 chiếc bút.'
        }
      },
      {
        id: 'n5_l11_15',
        lesson: 11,
        lessonId: 11,
        level: 'N5',
        kanji: 'いくつ',
        hanViet: '',
        hiragana: 'いくつ',
        romaji: 'ikutsu',
        meaning: 'mấy cái',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><circle cx="50" cy="50" r="28" fill="#F59F00"/><text x="50" y="60" text-anchor="middle" font-size="28" font-weight="bold" fill="#FFF">?</text></svg>`,
        example: {
          ja: 'りんごをいくつ買いましたか。',
          hira: 'りんごをいくつかいましたか。',
          vi: 'Bạn đã mua mấy quả táo?'
        }
      },
      {
        id: 'n5_l11_16',
        lesson: 11,
        lessonId: 11,
        level: 'N5',
        kanji: '妹',
        hanViet: 'Muội',
        hiragana: 'いもうと',
        romaji: 'imouto',
        meaning: 'em gái mình',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF0F6"/><circle cx="50" cy="38" r="14" fill="#F06595"/><path d="M30 76 C30 60 70 60 70 76 Z" fill="#FCC2D7"/></svg>`,
        example: {
          ja: '妹は高校生です。',
          hira: 'いもうとはこうこうせいです。',
          vi: 'Em gái tôi là học sinh cấp 3.'
        }
      },
      {
        id: 'n5_l11_17',
        lesson: 11,
        lessonId: 11,
        level: 'N5',
        kanji: '妹さん',
        hanViet: 'Muội',
        hiragana: 'いもうとさん',
        romaji: 'imoutosan',
        meaning: 'em gái người khác',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF0F6"/><circle cx="50" cy="36" r="14" fill="#D6336C"/><path d="M28 76 C28 58 72 58 72 76 Z" fill="#F06595"/></svg>`,
        example: {
          ja: '妹さんはお元気ですか。',
          hira: 'いもうとさんはおげんきですか。',
          vi: 'Em gái của anh có khỏe không?'
        }
      },
      {
        id: 'n5_l11_18',
        lesson: 11,
        lessonId: 11,
        level: 'N5',
        kanji: '外国',
        hanViet: 'Ngoại Quốc',
        hiragana: 'がいこく',
        romaji: 'gaikoku',
        meaning: 'nước ngoài',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="50" r="28" fill="#339AF0"/><ellipse cx="50" cy="50" rx="14" ry="28" fill="none" stroke="#FFF" stroke-width="2"/><line x1="22" y1="50" x2="78" y2="50" stroke="#FFF" stroke-width="2"/></svg>`,
        example: {
          ja: '外国へ旅行に行きます。',
          hira: 'がいこくへりょこうにいきます。',
          vi: 'Tôi đi du lịch nước ngoài.'
        }
      },
      {
        id: 'n5_l11_19',
        lesson: 11,
        lessonId: 11,
        level: 'N5',
        kanji: 'ー時間',
        hanViet: 'Thời Gian',
        hiragana: 'ーじかん',
        romaji: '-jikan',
        meaning: 'tiếng đồng hồ',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="50" r="28" fill="#1971C2"/><text x="50" y="58" text-anchor="middle" font-size="16" font-weight="bold" fill="#FFF">1 hr</text></svg>`,
        example: {
          ja: '毎日二時間勉強します。',
          hira: 'まいにちにじかんべんきょうします。',
          vi: 'Mỗi ngày tôi học 2 tiếng đồng hồ.'
        }
      },
      {
        id: 'n5_l11_20',
        lesson: 11,
        lessonId: 11,
        level: 'N5',
        kanji: 'ー週間',
        hanViet: 'Chu Gian',
        hiragana: 'ーしゅうかん',
        romaji: '-shuukan',
        meaning: 'tuần',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><rect x="22" y="26" width="56" height="48" rx="4" fill="#0CA678"/><text x="50" y="56" text-anchor="middle" font-size="16" font-weight="bold" fill="#FFF">7 days</text></svg>`,
        example: {
          ja: '一週間に一回映画を見ます。',
          hira: 'いっしゅうかんにいっかいえいがをみます。',
          vi: 'Một tuần tôi xem phim một lần.'
        }
      },
      {
        id: 'n5_l11_21',
        lesson: 11,
        lessonId: 11,
        level: 'N5',
        kanji: 'ーか月',
        hanViet: 'Nguyệt',
        hiragana: 'ーかげつ',
        romaji: '-kagetsu',
        meaning: 'tháng',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><rect x="22" y="26" width="56" height="48" rx="4" fill="#F59F00"/><text x="50" y="56" text-anchor="middle" font-size="14" font-weight="bold" fill="#FFF">1 Month</text></svg>`,
        example: {
          ja: '一か月に二回国へ電話します。',
          hira: 'いっかげつににかいくにへでんわします。',
          vi: 'Một tháng tôi gọi điện về nước hai lần.'
        }
      },
      {
        id: 'n5_l11_22',
        lesson: 11,
        lessonId: 11,
        level: 'N5',
        kanji: 'ー年',
        hanViet: 'Niên',
        hiragana: 'ーねん',
        romaji: '-nen',
        meaning: 'năm',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><rect x="22" y="26" width="56" height="48" rx="4" fill="#7950F2"/><text x="50" y="56" text-anchor="middle" font-size="15" font-weight="bold" fill="#FFF">1 Year</text></svg>`,
        example: {
          ja: '日本に三年います。',
          hira: 'にほんにさんねんいます。',
          vi: 'Tôi ở Nhật 3 năm.'
        }
      },
      {
        id: 'n5_l11_23',
        lesson: 11,
        lessonId: 11,
        level: 'N5',
        kanji: '～くらい',
        hanViet: '',
        hiragana: '～くらい',
        romaji: '~kurai',
        meaning: 'khoảng ~',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E9ECEF"/><circle cx="50" cy="50" r="28" fill="#868E96"/><text x="50" y="58" text-anchor="middle" font-size="18" font-weight="bold" fill="#FFF">≈</text></svg>`,
        example: {
          ja: '学生が30人くらいいます。',
          hira: 'がくせいがさんじゅうにんくらいいます。',
          vi: 'Có khoảng 30 học sinh.'
        }
      },
      {
        id: 'n5_l11_24',
        lesson: 11,
        lessonId: 11,
        level: 'N5',
        kanji: 'どのくらい',
        hanViet: '',
        hiragana: 'どのくらい',
        romaji: 'dono kurai',
        meaning: 'khoảng bao lâu?',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><circle cx="50" cy="50" r="28" fill="#FF922B"/><text x="50" y="58" text-anchor="middle" font-size="20" font-weight="bold" fill="#FFF">? hr</text></svg>`,
        example: {
          ja: '東京までどのくらいかかりますか。',
          hira: 'とうきょうまでどのくらいかかりますか。',
          vi: 'Đến Tokyo tốn khoảng bao lâu?'
        }
      },
      {
        id: 'n5_l11_25',
        lesson: 11,
        lessonId: 11,
        level: 'N5',
        kanji: '全部で',
        hanViet: 'Toàn Bộ',
        hiragana: 'ぜんぶで',
        romaji: 'zenbude',
        meaning: 'tổng cộng',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><circle cx="50" cy="50" r="28" fill="#FAB005"/><text x="50" y="58" text-anchor="middle" font-size="20" font-weight="bold" fill="#FFF">SUM</text></svg>`,
        example: {
          ja: '全部で五千円です。',
          hira: 'ぜんぶでごせんえんです。',
          vi: 'Tổng cộng là 5.000 yên.'
        }
      },
      {
        id: 'n5_l11_26',
        lesson: 11,
        lessonId: 11,
        level: 'N5',
        kanji: '皆',
        hanViet: 'Giai',
        hiragana: 'みんな',
        romaji: 'minna',
        meaning: 'tất cả mọi người',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="34" cy="42" r="10" fill="#1864AB"/><circle cx="66" cy="42" r="10" fill="#1864AB"/><circle cx="50" cy="36" r="10" fill="#339AF0"/><path d="M20 74 C20 62 48 62 48 74 Z" fill="#1864AB"/><path d="M52 74 C52 62 80 62 80 74 Z" fill="#1864AB"/></svg>`,
        example: {
          ja: 'みんなで歌いましょう。',
          hira: 'みんなでうたいましょう。',
          vi: 'Cả nhà cùng nhau hát nào.'
        }
      },
      {
        id: 'n5_l11_27',
        lesson: 11,
        lessonId: 11,
        level: 'N5',
        kanji: '～だけ',
        hanViet: '',
        hiragana: '～だけ',
        romaji: '~dake',
        meaning: 'chỉ ~',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><circle cx="50" cy="50" r="28" fill="#FA5252"/><text x="50" y="58" text-anchor="middle" font-size="16" font-weight="bold" fill="#FFF">ONLY</text></svg>`,
        example: {
          ja: '休みは日曜日だけです。',
          hira: 'やすみはにちようびだけです。',
          vi: 'Ngày nghỉ chỉ có mỗi Chủ Nhật.'
        }
      },
      {
        id: 'n5_l11_28',
        lesson: 11,
        lessonId: 11,
        level: 'N5',
        kanji: 'いらっしゃいませ',
        hanViet: '',
        hiragana: 'いらっしゃいませ',
        romaji: 'irasshaimase',
        meaning: 'Xin mời vào',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="38" r="14" fill="#0CA678"/><path d="M30 76 C30 60 70 60 70 76 Z" fill="#20C997"/><path d="M40 48 L60 48" stroke="#FFF" stroke-width="3" stroke-linecap="round"/></svg>`,
        example: {
          ja: 'いらっしゃいませ。何名様ですか。',
          hira: 'いらっしゃいませ。なんめいさまですか。',
          vi: 'Kính chào quý khách! Quý khách đi mấy người ạ?'
        }
      },
      {
        id: 'n5_l11_29',
        lesson: 11,
        lessonId: 11,
        level: 'N5',
        kanji: 'いい天気ですね',
        hanViet: 'Thiên Khí',
        hiragana: 'いいてんきですね',
        romaji: 'ii tenki desu ne',
        meaning: 'Thời tiết đẹp nhỉ',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><circle cx="50" cy="50" r="20" fill="#F59F00"/><line x1="50" y1="18" x2="50" y2="24" stroke="#F59F00" stroke-width="4"/><line x1="50" y1="76" x2="50" y2="82" stroke="#F59F00" stroke-width="4"/><line x1="18" y1="50" x2="24" y2="50" stroke="#F59F00" stroke-width="4"/><line x1="76" y1="50" x2="82" y2="50" stroke="#F59F00" stroke-width="4"/></svg>`,
        example: {
          ja: 'いい天気ですね。散歩しましょう。',
          hira: 'いいてんきですね。さんぽしましょう。',
          vi: 'Thời tiết đẹp quá nhỉ. Đi dạo thôi nào.'
        }
      },
      {
        id: 'n5_l11_30',
        lesson: 11,
        lessonId: 11,
        level: 'N5',
        kanji: 'お出かけですか',
        hanViet: 'Xuất',
        hiragana: 'おでかけですか',
        romaji: 'odekake desu ka',
        meaning: 'Anh đi ra ngoài đấy à?',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="34" r="12" fill="#1971C2"/><path d="M36 48 L50 60 L64 48 M50 60 L50 80" stroke="#1864AB" stroke-width="4" fill="none"/></svg>`,
        example: {
          ja: '「お出かけですか。」「ええ、ちょっと駅まで。」',
          hira: '「おでかけですか。」「ええ、ちょっとえきまで。」',
          vi: '“Anh đi ra ngoài đấy à?” “Vâng, ra ga một chút ạ.”'
        }
      },
      {
        id: 'n5_l11_31',
        lesson: 11,
        lessonId: 11,
        level: 'N5',
        kanji: 'ちょっと～まで',
        hanViet: '',
        hiragana: 'ちょっと～まで',
        romaji: 'chotto ~made',
        meaning: 'Đi đến ~ một chút',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><path d="M30 50 L65 50 M52 38 L65 50 L52 62" stroke="#F76707" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        example: {
          ja: 'ちょっとコンビニまで行ってきます。',
          hira: 'ちょっとコンビニまでいってきます。',
          vi: 'Tôi ra cửa hàng tiện lợi một chút rồi về.'
        }
      },
      {
        id: 'n5_l11_32',
        lesson: 11,
        lessonId: 11,
        level: 'N5',
        kanji: '行っていらっしゃい',
        hanViet: 'Hành',
        hiragana: 'いっていらっしゃい',
        romaji: 'itte irasshai',
        meaning: 'Anh đi rồi về nhé',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="38" r="14" fill="#0CA678"/><path d="M30 76 C30 60 70 60 70 76 Z" fill="#20C997"/><path d="M60 46 L74 36" stroke="#0CA678" stroke-width="4" stroke-linecap="round"/></svg>`,
        example: {
          ja: '「行ってきます。」「行っていらっしゃい。」',
          hira: '「いってきます。」「いっていらっしゃい。」',
          vi: '“Con đi đây ạ.” “Con đi rồi về nhé.”'
        }
      },
      {
        id: 'n5_l11_33',
        lesson: 11,
        lessonId: 11,
        level: 'N5',
        kanji: '行ってまいります',
        hanViet: 'Hành',
        hiragana: 'いってまいります',
        romaji: 'itte mairimasu',
        meaning: 'Tôi đi đây (khiêm nhường)',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="38" r="14" fill="#1864AB"/><path d="M30 76 C30 60 70 60 70 76 Z" fill="#339AF0"/><path d="M42 48 L58 48" stroke="#FFF" stroke-width="3"/></svg>`,
        example: {
          ja: 'では、行ってまいります。',
          hira: 'では、いってまいります。',
          vi: 'Thế thì, tôi xin phép đi đây ạ.'
        }
      },
      {
        id: 'n5_l11_34',
        lesson: 11,
        lessonId: 11,
        level: 'N5',
        kanji: 'それから',
        hanViet: '',
        hiragana: 'それから',
        romaji: 'sorekara',
        meaning: 'sau đó',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><path d="M30 50 L68 50 M54 36 L68 50 L54 64" stroke="#FD7E14" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        example: {
          ja: 'ご飯を食べます。それから勉強します。',
          hira: 'ごはんをたべます。それからべんきょうします。',
          vi: 'Tôi ăn cơm. Sau đó tôi học bài.'
        }
      },
      {
        id: 'n5_l11_35',
        lesson: 11,
        lessonId: 11,
        level: 'N5',
        kanji: 'オーストラリア',
        hanViet: '',
        hiragana: 'オーストラリア',
        romaji: 'o-sutoraria',
        meaning: 'Úc',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="22" y="30" width="56" height="40" rx="3" fill="#1864AB"/><polygon points="34,36 34,44 42,40" fill="#FFF"/><circle cx="62" cy="40" r="2" fill="#FFF"/><circle cx="68" cy="50" r="2" fill="#FFF"/><circle cx="58" cy="56" r="2" fill="#FFF"/></svg>`,
        example: {
          ja: 'オーストラリアから来ました。',
          hira: 'オーストラリアからきました。',
          vi: 'Tôi đến từ nước Úc.'
        }
      }
    ]
  },

// --------------------------------------------------------------------------
  // BÀI 12: THỜI TIẾT, BỐN MÙA, LỄ HỘI & SO SÁNH (48 TỪ)
  // --------------------------------------------------------------------------
  {
    lessonNumber: 12,
    level: 'N5',
    title: 'Bài 12: Bốn mùa, Thời tiết & So sánh',
    topicVi: 'Thời tiết, Bốn mùa, Lễ hội & So sánh',
    icon: '🍁',
    grammarPoint: 'Quá khứ tính từ: Tính từ い (～かったです / くなかったです), Tính từ な & Danh từ (～でした / じゃありませんでした). So sánh hơn: N1 は N2 より Tính từ です. So sánh giữa 2 vật: N1 と N2 と どちらが～ですか. So sánh nhất: Phạm vi で 何/どこ/だれ/いつ が 一番～ですか.',
    vocab: [
      {
        id: 'n5_l12_01',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: '簡単[な]',
        hanViet: 'Giản Đơn',
        hiragana: 'かんたん[な]',
        romaji: 'kantan[na]',
        meaning: 'dễ, đơn giản',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="50" r="28" fill="#20C997"/><text x="50" y="58" text-anchor="middle" font-size="20" font-weight="bold" fill="#FFF">EASY</text></svg>`,
        example: {
          ja: 'この試験は簡単でした。',
          hira: 'このしけんはかんたんでした。',
          vi: 'Kỳ thi này đã rất đơn giản.'
        }
      },
      {
        id: 'n5_l12_02',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: '近い',
        hanViet: 'Cận',
        hiragana: 'ちかい',
        romaji: 'chikai',
        meaning: 'gần',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="44" cy="50" r="12" fill="#1971C2"/><circle cx="62" cy="50" r="10" fill="#339AF0"/></svg>`,
        example: {
          ja: '私の家は駅から近いです。',
          hira: 'わたしのいえはえきからちかいです。',
          vi: 'Nhà tôi ở gần nhà ga.'
        }
      },
      {
        id: 'n5_l12_03',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: '遠い',
        hanViet: 'Viễn',
        hiragana: 'とおい',
        romaji: 'tooi',
        meaning: 'xa',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><circle cx="28" cy="50" r="12" fill="#F76707"/><line x1="42" y1="50" x2="68" y2="50" stroke="#FF922B" stroke-width="3" stroke-dasharray="4 4"/><circle cx="78" cy="50" r="8" fill="#F76707"/></svg>`,
        example: {
          ja: '空港は町から遠いです。',
          hira: 'くうこうはまちからとおいです。',
          vi: 'Sân bay ở xa thành phố.'
        }
      },
      {
        id: 'n5_l12_04',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: '早い',
        hanViet: 'Tốc',
        hiragana: 'はやい',
        romaji: 'hayai',
        meaning: 'nhanh, sớm',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><path d="M25 50 L65 50 M52 38 L65 50 L52 62" stroke="#F59F00" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        example: {
          ja: '新幹線はとても早いです。',
          hira: 'しんかんせんはとてもはやいです。',
          vi: 'Tàu Shinkansen chạy rất nhanh.'
        }
      },
      {
        id: 'n5_l12_05',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: '遅い',
        hanViet: 'Trì',
        hiragana: 'おそい',
        romaji: 'osoi',
        meaning: 'chậm, muộn',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E9ECEF"/><path d="M30 60 C30 46 70 46 70 60 Z" fill="#868E96"/><circle cx="75" cy="58" r="5" fill="#495057"/></svg>`,
        example: {
          ja: 'このバスは遅いです。',
          hira: 'このバスはおそいです。',
          vi: 'Chiếc xe buýt này chạy chậm.'
        }
      },
      {
        id: 'n5_l12_06',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: '多い[人が～]',
        hanViet: 'Đa Nhân',
        hiragana: 'ひとがおおい',
        romaji: 'hito ga ooi',
        meaning: 'nhiều người',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="30" cy="40" r="8" fill="#1864AB"/><circle cx="50" cy="36" r="8" fill="#1864AB"/><circle cx="70" cy="40" r="8" fill="#1864AB"/><path d="M22 66 C22 56 38 56 38 66 Z" fill="#339AF0"/><path d="M42 64 C42 54 58 54 58 64 Z" fill="#339AF0"/><path d="M62 66 C62 56 78 56 78 66 Z" fill="#339AF0"/></svg>`,
        example: {
          ja: '東京は人が多いです。',
          hira: 'とうきょうはひとがおおいです。',
          vi: 'Tokyo rất đông người.'
        }
      },
      {
        id: 'n5_l12_07',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: '少ない[人が～]',
        hanViet: 'Thiểu Nhân',
        hiragana: 'ひとがすくない',
        romaji: 'hito ga sukunai',
        meaning: 'ít người',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F8F9FA"/><circle cx="50" cy="40" r="10" fill="#868E96"/><path d="M38 72 C38 60 62 60 62 72 Z" fill="#ADB5BD"/></svg>`,
        example: {
          ja: '公園に人が少ないです。',
          hira: 'こうえんにひとがすくないです。',
          vi: 'Trong công viên có ít người.'
        }
      },
      {
        id: 'n5_l12_08',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: '暖かい',
        hanViet: 'Noãn',
        hiragana: 'あたたかい',
        romaji: 'atatakai',
        meaning: 'ấm áp',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><circle cx="50" cy="50" r="22" fill="#FF922B"/><line x1="50" y1="18" x2="50" y2="24" stroke="#F76707" stroke-width="4"/><line x1="50" y1="76" x2="50" y2="82" stroke="#F76707" stroke-width="4"/><line x1="18" y1="50" x2="24" y2="50" stroke="#F76707" stroke-width="4"/><line x1="76" y1="50" x2="82" y2="50" stroke="#F76707" stroke-width="4"/></svg>`,
        example: {
          ja: '春は暖かいです。',
          hira: 'はるはあたたかいです。',
          vi: 'Mùa xuân thời tiết ấm áp.'
        }
      },
      {
        id: 'n5_l12_09',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: '涼しい',
        hanViet: 'Lương',
        hiragana: 'すずしい',
        romaji: 'suzushii',
        meaning: 'mát mẻ',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><path d="M25 40 Q50 30 75 40 M30 52 Q55 42 80 52 M25 64 Q50 54 75 64" stroke="#0CA678" stroke-width="4" stroke-linecap="round" fill="none"/></svg>`,
        example: {
          ja: '秋は涼しくて好きです。',
          hira: 'あきはすずしくてすきです。',
          vi: 'Mùa thu mát mẻ nên tôi rất thích.'
        }
      },
      {
        id: 'n5_l12_10',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: '甘い',
        hanViet: 'Cam',
        hiragana: 'あまい',
        romaji: 'amai',
        meaning: 'ngọt',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF0F6"/><circle cx="50" cy="45" r="16" fill="#F06595"/><rect x="47" y="60" width="6" height="24" fill="#D6336C"/></svg>`,
        example: {
          ja: 'このケーキはとても甘いです。',
          hira: 'このケーキはとてもあまいです。',
          vi: 'Chiếc bánh ngọt này rất ngọt.'
        }
      },
      {
        id: 'n5_l12_11',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: '辛い',
        hanViet: 'Tân',
        hiragana: 'からい',
        romaji: 'karai',
        meaning: 'cay',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><path d="M42 25 Q68 40 54 74 Q44 54 42 25 Z" fill="#E03131"/><path d="M42 25 Q38 18 48 16" stroke="#2B8A3E" stroke-width="3" fill="none"/></svg>`,
        example: {
          ja: 'このカレーは辛いです。',
          hira: 'このカレーはからいです。',
          vi: 'Món cà ri này rất cay.'
        }
      },
      {
        id: 'n5_l12_12',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: '重い',
        hanViet: 'Trọng',
        hiragana: 'おもい',
        romaji: 'omoi',
        meaning: 'nặng',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E9ECEF"/><rect x="25" y="44" width="50" height="34" rx="4" fill="#495057"/><path d="M40 44 L40 32 C40 28 60 28 60 32 L60 44" stroke="#343A40" stroke-width="4" fill="none"/><text x="50" y="66" text-anchor="middle" font-size="12" font-weight="bold" fill="#FFF">100kg</text></svg>`,
        example: {
          ja: 'この荷物はとても重いです。',
          hira: 'このにもつはとてもおもいです。',
          vi: 'Hành lý này rất là nặng.'
        }
      },
      {
        id: 'n5_l12_13',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: '軽い',
        hanViet: 'Khinh',
        hiragana: 'かるい',
        romaji: 'karui',
        meaning: 'nhẹ',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><path d="M50 25 C34 40 34 60 50 75 C66 60 66 40 50 25 Z" fill="#74C0FC"/><line x1="50" y1="25" x2="50" y2="75" stroke="#1971C2" stroke-width="2"/></svg>`,
        example: {
          ja: 'このパソコンは軽いです。',
          hira: 'このパソコンはかるいです。',
          vi: 'Chiếc máy tính này rất nhẹ.'
        }
      },
      {
        id: 'n5_l12_14',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: 'いい[コーヒーが～]',
        hanViet: '',
        hiragana: 'コーヒーがいい',
        romaji: 'ko-hi- ga ii',
        meaning: 'thích/chọn cà phê hơn',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><path d="M30 40 L34 66 C34 72 64 72 64 66 L68 40 Z" fill="#D9480F"/><circle cx="50" cy="50" r="8" fill="#FFF"/></svg>`,
        example: {
          ja: 'お茶よりコーヒーがいいです。',
          hira: 'おちゃよりコーヒーがいいです。',
          vi: 'So với trà thì tôi thích cà phê hơn.'
        }
      },
      {
        id: 'n5_l12_15',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: '季節',
        hanViet: 'Quý Tiết',
        hiragana: 'きせつ',
        romaji: 'kisetsu',
        meaning: 'mùa',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><circle cx="36" cy="36" r="10" fill="#FCC2D7"/><circle cx="64" cy="36" r="10" fill="#74C0FC"/><circle cx="36" cy="64" r="10" fill="#FF922B"/><circle cx="64" cy="64" r="10" fill="#CED4DA"/></svg>`,
        example: {
          ja: '日本には四つの季節があります。',
          hira: 'にほんにはよっつのきせつがあります。',
          vi: 'Ở Nhật Bản có 4 mùa.'
        }
      },
      {
        id: 'n5_l12_16',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: '春',
        hanViet: 'Xuân',
        hiragana: 'はる',
        romaji: 'haru',
        meaning: 'mùa xuân',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF0F6"/><circle cx="50" cy="50" r="12" fill="#F06595"/><circle cx="50" cy="30" r="8" fill="#FCC2D7"/><circle cx="70" cy="50" r="8" fill="#FCC2D7"/><circle cx="50" cy="70" r="8" fill="#FCC2D7"/><circle cx="30" cy="50" r="8" fill="#FCC2D7"/></svg>`,
        example: {
          ja: '春に桜が咲きます。',
          hira: 'はるにさくらがさきます。',
          vi: 'Vào mùa xuân hoa anh đào nở.'
        }
      },
      {
        id: 'n5_l12_17',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: '夏',
        hanViet: 'Hạ',
        hiragana: 'なつ',
        romaji: 'natsu',
        meaning: 'mùa hè',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><circle cx="50" cy="50" r="24" fill="#F76707"/></svg>`,
        example: {
          ja: '夏休みに海へ行きます。',
          hira: 'なつやすみにうみへいきます。',
          vi: 'Kỳ nghỉ hè tôi đi biển.'
        }
      },
      {
        id: 'n5_l12_18',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: '秋',
        hanViet: 'Thu',
        hiragana: 'あき',
        romaji: 'aki',
        meaning: 'mùa thu',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><path d="M50 24 L56 42 L72 38 L62 50 L74 62 L56 58 L50 76 L44 58 L26 62 L38 50 L28 38 L44 42 Z" fill="#D9480F"/></svg>`,
        example: {
          ja: '秋は紅葉が綺麗です。',
          hira: 'あきはもみじがきれいです。',
          vi: 'Mùa thu lá đỏ rất đẹp.'
        }
      },
      {
        id: 'n5_l12_19',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: '冬',
        hanViet: 'Đông',
        hiragana: 'ふゆ',
        romaji: 'fuyu',
        meaning: 'mùa đông',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><path d="M50 20 L50 80 M20 50 L80 50 M28 28 L72 72 M28 72 L72 28" stroke="#339AF0" stroke-width="4" stroke-linecap="round"/></svg>`,
        example: {
          ja: '冬は雪が降ります。',
          hira: 'ふゆはゆきがふります。',
          vi: 'Mùa đông có tuyết rơi.'
        }
      },
      {
        id: 'n5_l12_20',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: '天気',
        hanViet: 'Thiên Khí',
        hiragana: 'てんき',
        romaji: 'tenki',
        meaning: 'thời tiết',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><circle cx="50" cy="50" r="20" fill="#F59F00"/></svg>`,
        example: {
          ja: '今日の天気はどうですか。',
          hira: 'きょうのてんきはどうですか。',
          vi: 'Thời tiết hôm nay thế nào?'
        }
      },
      {
        id: 'n5_l12_21',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: '雨',
        hanViet: 'Vũ',
        hiragana: 'あめ',
        romaji: 'ame',
        meaning: 'mưa',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><path d="M30 44 C26 44 22 48 22 54 C22 60 28 64 36 64 L68 64 C74 64 80 58 80 52 C80 46 74 42 68 42 C66 34 58 28 50 28 C42 28 34 34 30 44 Z" fill="#ADB5BD"/><line x1="36" y1="72" x2="32" y2="80" stroke="#339AF0" stroke-width="3"/><line x1="50" y1="72" x2="46" y2="80" stroke="#339AF0" stroke-width="3"/><line x1="64" y1="72" x2="60" y2="80" stroke="#339AF0" stroke-width="3"/></svg>`,
        example: {
          ja: '雨が降っています。',
          hira: 'あめがふっています。',
          vi: 'Trời đang mưa.'
        }
      },
      {
        id: 'n5_l12_22',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: '雪',
        hanViet: 'Tuyết',
        hiragana: 'ゆき',
        romaji: 'yuki',
        meaning: 'tuyết',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="40" r="14" fill="#FFF"/><circle cx="50" cy="64" r="20" fill="#FFF"/><circle cx="45" cy="38" r="2" fill="#343A40"/><circle cx="55" cy="38" r="2" fill="#343A40"/></svg>`,
        example: {
          ja: '昨日は雪でした。',
          hira: 'きのうはゆきでした。',
          vi: 'Hôm qua trời đã có tuyết rơi.'
        }
      },
      {
        id: 'n5_l12_23',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: '曇り',
        hanViet: 'Đàm',
        hiragana: 'くもり',
        romaji: 'kumori',
        meaning: 'nhiều mây, u ám',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E9ECEF"/><path d="M30 46 C26 46 22 50 22 56 C22 62 28 66 36 66 L68 66 C74 66 80 60 80 54 C80 48 74 44 68 44 C66 36 58 30 50 30 C42 30 34 36 30 46 Z" fill="#868E96"/></svg>`,
        example: {
          ja: '今日は曇りです。',
          hira: 'きょうはくもりです。',
          vi: 'Hôm nay trời nhiều mây.'
        }
      },
      {
        id: 'n5_l12_24',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: 'ホテル',
        hanViet: '',
        hiragana: 'ホテル',
        romaji: 'hoteru',
        meaning: 'khách sạn',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="26" y="24" width="48" height="54" rx="4" fill="#1864AB"/><text x="50" y="46" text-anchor="middle" font-size="16" font-weight="bold" fill="#FFF">H</text><rect x="42" y="60" width="16" height="18" fill="#FFF"/></svg>`,
        example: {
          ja: 'ホテルに泊まります。',
          hira: 'ホテルにとまります。',
          vi: 'Tôi trọ lại ở khách sạn.'
        }
      },
      {
        id: 'n5_l12_25',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: '空港',
        hanViet: 'Không Cảng',
        hiragana: 'くうこう',
        romaji: 'kuukou',
        meaning: 'sân bay',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><polygon points="50,22 56,44 78,54 78,60 56,54 56,70 64,76 64,80 50,76 36,80 36,76 44,70 44,54 22,60 22,54 44,44" fill="#1971C2"/></svg>`,
        example: {
          ja: '空港までタクシーで行きます。',
          hira: 'くうこうまでタクシーでいきます。',
          vi: 'Tôi đi taxi đến sân bay.'
        }
      },
      {
        id: 'n5_l12_26',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: '海',
        hanViet: 'Hải',
        hiragana: 'うみ',
        romaji: 'umi',
        meaning: 'biển',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><path d="M15 54 Q32 46 50 54 Q68 62 85 54 L85 85 L15 85 Z" fill="#228BE6"/><circle cx="50" cy="30" r="10" fill="#F59F00"/></svg>`,
        example: {
          ja: '夏休みに海で泳ぎます。',
          hira: 'なつやすみにうみでおよぎます。',
          vi: 'Kỳ nghỉ hè tôi bơi ở biển.'
        }
      },
      {
        id: 'n5_l12_27',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: '世界',
        hanViet: 'Thế Giới',
        hiragana: 'せかい',
        romaji: 'sekai',
        meaning: 'thế giới',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="50" r="28" fill="#20C997"/><ellipse cx="50" cy="50" rx="14" ry="28" fill="none" stroke="#FFF" stroke-width="2"/><line x1="22" y1="50" x2="78" y2="50" stroke="#FFF" stroke-width="2"/></svg>`,
        example: {
          ja: '世界中を旅行したいです。',
          hira: 'せかいじゅうをりょこうしたいです。',
          vi: 'Tôi muốn đi du lịch vòng quanh thế giới.'
        }
      },
      {
        id: 'n5_l12_28',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: 'パーティー',
        hanViet: '',
        hiragana: 'パーティー',
        romaji: 'pa-ti-',
        meaning: 'bữa tiệc',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF0F6"/><polygon points="50,22 80,72 20,72" fill="#F06595"/><circle cx="50" cy="22" r="5" fill="#FFD43B"/></svg>`,
        example: {
          ja: '誕生日のパーティーをします。',
          hira: 'たんじょうびのパーティーをします。',
          vi: 'Tôi tổ chức bữa tiệc sinh nhật.'
        }
      },
      {
        id: 'n5_l12_29',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: 'お祭り',
        hanViet: 'Tế',
        hiragana: 'おまつり',
        romaji: 'omatsuri',
        meaning: 'lễ hội',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><rect x="36" y="28" width="28" height="44" rx="4" fill="#E03131"/><line x1="50" y1="20" x2="50" y2="28" stroke="#343A40" stroke-width="3"/><line x1="50" y1="72" x2="50" y2="80" stroke="#FA5252" stroke-width="3"/></svg>`,
        example: {
          ja: '京都のお祭りを見ました。',
          hira: 'きょうとのおまつりをみました。',
          vi: 'Tôi đã xem lễ hội ở Kyoto.'
        }
      },
      {
        id: 'n5_l12_30',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: '試験',
        hanViet: 'Thí Nghiệm',
        hiragana: 'しけん',
        romaji: 'shiken',
        meaning: 'kỳ thi/kiểm tra',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><rect x="28" y="24" width="44" height="52" rx="4" fill="#FFF" stroke="#FAB005" stroke-width="3"/><circle cx="50" cy="50" r="14" fill="none" stroke="#E03131" stroke-width="4"/></svg>`,
        example: {
          ja: '明日は日本語の試験です。',
          hira: 'あしたはにほんごのしけんです。',
          vi: 'Ngày mai là kỳ thi tiếng Nhật.'
        }
      },
      {
        id: 'n5_l12_31',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: 'すき焼き',
        hanViet: 'Thiêu',
        hiragana: 'すきやき',
        romaji: 'sukiyaki',
        meaning: 'món Sukiyaki',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><circle cx="50" cy="52" r="26" fill="#343A40"/><circle cx="50" cy="52" r="20" fill="#D9480F"/></svg>`,
        example: {
          ja: 'すき焼きを食べたことがありますか。',
          hira: 'すきやきをたべたことがありますか。',
          vi: 'Bạn đã từng ăn món Sukiyaki bao giờ chưa?'
        }
      },
      {
        id: 'n5_l12_32',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: '刺身',
        hanViet: 'Thích Thân',
        hiragana: 'さしみ',
        romaji: 'sashimi',
        meaning: 'món Sashimi',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><polygon points="30,45 65,30 70,55 35,70" fill="#FA5252"/><line x1="38" y1="48" x2="65" y2="40" stroke="#FFF" stroke-width="2"/></svg>`,
        example: {
          ja: '刺身は新鮮で美味しいです。',
          hira: 'さしみはしんせんでおいしいです。',
          vi: 'Sashimi tươi ngon lắm.'
        }
      },
      {
        id: 'n5_l12_33',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: 'おすし',
        hanViet: '',
        hiragana: 'おすし',
        romaji: 'osushi',
        meaning: 'món Sushi',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><rect x="25" y="44" width="50" height="26" rx="10" fill="#FFF" stroke="#CED4DA" stroke-width="2"/><ellipse cx="50" cy="44" rx="24" ry="10" fill="#FF922B"/><rect x="44" y="38" width="12" height="32" fill="#2B8A3E"/></svg>`,
        example: {
          ja: 'おすしが好きですか。',
          hira: 'おすしがすきですか。',
          vi: 'Bạn có thích ăn Sushi không?'
        }
      },
      {
        id: 'n5_l12_34',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: '天ぷら',
        hanViet: 'Thiên',
        hiragana: 'てんぷら',
        romaji: 'tenpura',
        meaning: 'món Tempura',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><path d="M30 65 Q45 35 70 35 Q55 55 40 70 Z" fill="#FAB005"/><circle cx="72" cy="34" r="5" fill="#E03131"/></svg>`,
        example: {
          ja: '天ぷらとうどんを食べます。',
          hira: 'てんぷらとうどんをたべます。',
          vi: 'Tôi ăn mì Udon với Tempura.'
        }
      },
      {
        id: 'n5_l12_35',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: '生け花',
        hanViet: 'Sinh Hoa',
        hiragana: 'いけばな',
        romaji: 'ikebana',
        meaning: 'nghệ thuật cắm hoa',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><path d="M35 60 L40 78 L60 78 L65 60 Z" fill="#868E96"/><line x1="50" y1="60" x2="50" y2="34" stroke="#2B8A3E" stroke-width="4"/><circle cx="50" cy="30" r="8" fill="#F06595"/></svg>`,
        example: {
          ja: '生け花を習っています。',
          hira: 'いけばなをならっています。',
          vi: 'Tôi đang học nghệ thuật cắm hoa Ikebana.'
        }
      },
      {
        id: 'n5_l12_36',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: '紅葉',
        hanViet: 'Hồng Diệp',
        hiragana: 'もみじ',
        romaji: 'momiji',
        meaning: 'lá đỏ, lá phong',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><path d="M50 20 L56 38 L72 34 L62 46 L74 58 L56 54 L50 72 L44 54 L26 58 L38 46 L28 34 L44 38 Z" fill="#E03131"/></svg>`,
        example: {
          ja: '京都の紅葉は素晴らしいです。',
          hira: 'きょうとのもみじはすばらしいです。',
          vi: 'Lá đỏ mùa thu ở Kyoto rất tuyệt vời.'
        }
      },
      {
        id: 'n5_l12_37',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: 'どちら',
        hanViet: '',
        hiragana: 'どちら',
        romaji: 'dochira',
        meaning: 'đằng nào trong 2 thứ',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><path d="M35 50 L20 50 M26 44 L20 50 L26 56" stroke="#1971C2" stroke-width="4" stroke-linecap="round"/><path d="M65 50 L80 50 M74 44 L80 50 L74 56" stroke="#1971C2" stroke-width="4" stroke-linecap="round"/><circle cx="50" cy="50" r="8" fill="#339AF0"/></svg>`,
        example: {
          ja: 'りんごとみかんとどちらが好きですか。',
          hira: 'りんごとみかんとどちらがすきですか。',
          vi: 'Táo và quýt bạn thích quả nào hơn?'
        }
      },
      {
        id: 'n5_l12_38',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: 'どちらも',
        hanViet: '',
        hiragana: 'どちらも',
        romaji: 'dochira mo',
        meaning: 'cả hai',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="36" cy="50" r="12" fill="#0CA678"/><circle cx="64" cy="50" r="12" fill="#0CA678"/></svg>`,
        example: {
          ja: 'どちらも好きです。',
          hira: 'どちらもすきです。',
          vi: 'Cả hai thứ tôi đều thích.'
        }
      },
      {
        id: 'n5_l12_39',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: 'ずっと',
        hanViet: '',
        hiragana: 'ずっと',
        romaji: 'zutto',
        meaning: 'suốt, hơn hẳn',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><path d="M25 50 L75 50 M60 35 L75 50 L60 65" stroke="#F59F00" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        example: {
          ja: 'バスより電車の方がずっと早いです。',
          hira: 'バスよりでんしゃのほうがずっとはやいです。',
          vi: 'Tàu điện nhanh hơn xe buýt rất nhiều.'
        }
      },
      {
        id: 'n5_l12_40',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: '初めて',
        hanViet: 'Sơ',
        hiragana: 'はじめて',
        romaji: 'hajimete',
        meaning: 'lần đầu tiên',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><circle cx="50" cy="50" r="28" fill="#7950F2"/><text x="50" y="58" text-anchor="middle" font-size="20" font-weight="bold" fill="#FFF">1st</text></svg>`,
        example: {
          ja: '日本へ初めて行きました。',
          hira: 'にほんへはじめていきました。',
          vi: 'Tôi lần đầu tiên đi Nhật Bản.'
        }
      },
      {
        id: 'n5_l12_41',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: 'ただいま',
        hanViet: '',
        hiragana: 'ただいま',
        romaji: 'tadaima',
        meaning: 'Tôi đã về đây',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><polygon points="50,25 78,48 22,48" fill="#F76707"/><rect x="30" y="48" width="40" height="28" fill="#FF922B"/><rect x="44" y="58" width="12" height="18" fill="#FFF"/></svg>`,
        example: {
          ja: '「ただいま。」「お帰りなさい。」',
          hira: '「ただいま。」「おかえりなさい。」',
          vi: '“Tôi đã về đây.” “Anh đã về đấy à.”'
        }
      },
      {
        id: 'n5_l12_42',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: 'お帰りなさい',
        hanViet: 'Quy',
        hiragana: 'おかえりなさい',
        romaji: 'okaerinasai',
        meaning: 'Anh đã về đấy à',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="38" r="14" fill="#0CA678"/><path d="M30 76 C30 60 70 60 70 76 Z" fill="#20C997"/></svg>`,
        example: {
          ja: 'お帰りなさい。お疲れ様でした。',
          hira: 'おかえりなさい。おつかれさまでした。',
          vi: 'Anh đã về đấy à. Anh đã vất vả rồi.'
        }
      },
      {
        id: 'n5_l12_43',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: 'すごいですね',
        hanViet: '',
        hiragana: 'すごいですね',
        romaji: 'sugoi desu ne',
        meaning: 'Giỏi ghê nhỉ',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><polygon points="50,20 62,40 84,40 68,56 72,78 50,66 28,78 32,56 16,40 38,40" fill="#FAB005"/></svg>`,
        example: {
          ja: '日本語がお上手ですね。すごいですね！',
          hira: 'にほんごがおじょうずですね。すごいですね！',
          vi: 'Tiếng Nhật bạn giỏi quá. Thật đáng nể!'
        }
      },
      {
        id: 'n5_l12_44',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: 'でも',
        hanViet: '',
        hiragana: 'でも',
        romaji: 'demo',
        meaning: 'nhưng, thế nhưng',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><circle cx="50" cy="50" r="28" fill="#FA5252"/><text x="50" y="58" text-anchor="middle" font-size="16" font-weight="bold" fill="#FFF">BUT</text></svg>`,
        example: {
          ja: '日本料理は美味しいです。でも、高いです。',
          hira: 'にほんりょうりはおいしいです。でも、たかいです。',
          vi: 'Món ăn Nhật ngon nhưng đắt.'
        }
      },
      {
        id: 'n5_l12_45',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: 'つかれました',
        hanViet: '',
        hiragana: 'つかれました',
        romaji: 'tsukaremashita',
        meaning: 'Tôi đã mệt rồi',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E9ECEF"/><circle cx="50" cy="46" r="22" fill="#868E96"/><path d="M40 56 Q50 48 60 56" stroke="#FFF" stroke-width="3" fill="none"/></svg>`,
        example: {
          ja: '今日はたくさん歩きましたから、つかれました。',
          hira: 'きょうはたくさんあるきましたから、つかれました。',
          vi: 'Hôm nay đi bộ nhiều nên tôi đã mệt nhoài.'
        }
      },
      {
        id: 'n5_l12_46',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: '祇園祭',
        hanViet: 'Kì Viên Tế',
        hiragana: 'ぎおんまつり',
        romaji: 'gion matsuri',
        meaning: 'lễ hội Gion',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><rect x="30" y="30" width="40" height="42" fill="#E03131"/><circle cx="50" cy="50" r="10" fill="#FFD43B"/></svg>`,
        example: {
          ja: '祇園祭は京都で一番有名なお祭りです。',
          hira: 'ぎおんまつりはきょうとでいちばんゆうめいなおまつりです。',
          vi: 'Lễ hội Gion là lễ hội nổi tiếng nhất ở Kyoto.'
        }
      },
      {
        id: 'n5_l12_47',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: 'ホンコン',
        hanViet: '',
        hiragana: 'ホンコン',
        romaji: 'honkon',
        meaning: 'Hồng Kông',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><rect x="22" y="30" width="56" height="40" rx="3" fill="#E03131"/><circle cx="50" cy="50" r="10" fill="#FFF"/></svg>`,
        example: {
          ja: 'ホンコンへ旅行に行きました。',
          hira: 'ホンコンへりょこうにいきました。',
          vi: 'Tôi đã đi du lịch Hồng Kông.'
        }
      },
      {
        id: 'n5_l12_48',
        lesson: 12,
        lessonId: 12,
        level: 'N5',
        kanji: 'シンガポール',
        hanViet: '',
        hiragana: 'シンガポール',
        romaji: 'shingapo-ru',
        meaning: 'Singapore',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><rect x="22" y="30" width="56" height="20" fill="#E03131"/><rect x="22" y="50" width="56" height="20" fill="#FFF"/></svg>`,
        example: {
          ja: 'シンガポールは綺麗で安全な国です。',
          hira: 'シンガポールはきれいであんぜんなくにです。',
          vi: 'Singapore là một đất nước sạch đẹp và an toàn.'
        }
      }
    ]
  },

// --------------------------------------------------------------------------
  // BÀI 13: MONG MUỐN, DU LỊCH & GỌI MÓN (41 TỪ)
  // --------------------------------------------------------------------------
  {
    lessonNumber: 13,
    level: 'N5',
    title: 'Bài 13: Mong muốn, Du lịch & Gọi món',
    topicVi: 'Mong muốn, Du lịch & Gọi món',
    icon: '🍜',
    grammarPoint: 'Mong muốn sở hữu: Danh từ + が 欲しいです. Mong muốn hành động: Động từ Thể ます bỏ ます + たいです / たくないです. Đi đâu để làm gì: Địa điểm + へ + V(bỏ ます)/Danh từ + に 行きます / 来ます / 帰ります.',
    vocab: [
      {
        id: 'n5_l13_01',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: '遊びます',
        hanViet: 'Du',
        hiragana: 'あそびます',
        romaji: 'asobimasu',
        meaning: 'chơi',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><circle cx="50" cy="50" r="26" fill="#FCC419"/><circle cx="40" cy="42" r="4" fill="#343A40"/><circle cx="60" cy="42" r="4" fill="#343A40"/><path d="M38 54 Q50 66 62 54" stroke="#343A40" stroke-width="4" stroke-linecap="round" fill="none"/></svg>`,
        example: {
          ja: '週末友達と遊びます。',
          hira: 'しゅうまつともだちとあそびます。',
          vi: 'Cuối tuần tôi đi chơi cùng bạn bè.'
        }
      },
      {
        id: 'n5_l13_02',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: '泳ぎます',
        hanViet: 'Vịnh',
        hiragana: 'およぎます',
        romaji: 'oyogimasu',
        meaning: 'bơi',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="34" cy="40" r="8" fill="#1971C2"/><path d="M42 42 L64 48 L76 42" stroke="#1971C2" stroke-width="4" fill="none"/><path d="M20 62 Q50 54 80 62" stroke="#339AF0" stroke-width="4" fill="none"/></svg>`,
        example: {
          ja: 'プールで泳ぎます。',
          hira: 'プールでおよぎます。',
          vi: 'Tôi bơi ở bể bơi.'
        }
      },
      {
        id: 'n5_l13_03',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: '迎えます',
        hanViet: 'Nghênh',
        hiragana: 'むかえます',
        romaji: 'mukaemasu',
        meaning: 'đón',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="38" r="14" fill="#0CA678"/><path d="M30 76 C30 60 70 60 70 76 Z" fill="#20C997"/><path d="M24 46 L36 56" stroke="#0CA678" stroke-width="4" stroke-linecap="round"/><path d="M76 46 L64 56" stroke="#0CA678" stroke-width="4" stroke-linecap="round"/></svg>`,
        example: {
          ja: '空港へ友達を迎えます。',
          hira: 'くうこうへともだちをむかえます。',
          vi: 'Tôi ra sân bay đón bạn.'
        }
      },
      {
        id: 'n5_l13_04',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: '疲れます',
        hanViet: 'Bì',
        hiragana: 'つかれます',
        romaji: 'tsukaremasu',
        meaning: 'mệt',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E9ECEF"/><circle cx="50" cy="46" r="20" fill="#868E96"/><path d="M42 56 Q50 50 58 56" stroke="#FFF" stroke-width="3" fill="none"/></svg>`,
        example: {
          ja: '仕事でとても疲れました。',
          hira: 'しごとでとてもつかれました。',
          vi: 'Tôi đã rất mệt mỏi vì công việc.'
        }
      },
      {
        id: 'n5_l13_05',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: '出します[手紙を～]',
        hanViet: 'Xuất Thủ Chỉ',
        hiragana: 'てがみをだします',
        romaji: 'tegami o dashimasu',
        meaning: 'gửi thư',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><rect x="24" y="34" width="52" height="34" rx="3" fill="#FFA8A8"/><polygon points="24,34 50,52 76,34" fill="#FA5252"/></svg>`,
        example: {
          ja: '郵便局で手紙を出します。',
          hira: 'ゆうびんきょくでてがみをだします。',
          vi: 'Tôi gửi thư ở bưu điện.'
        }
      },
      {
        id: 'n5_l13_06',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: '入ります[喫茶店に～]',
        hanViet: 'Nhập Khiết Trà Điếm',
        hiragana: 'きっさてんにはいります',
        romaji: 'kissaten ni hairimasu',
        meaning: 'vào quán giải khát',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><polygon points="30,30 50,20 70,30" fill="#F76707"/><rect x="34" y="30" width="32" height="46" fill="#FF922B"/><path d="M42 60 L50 50 L58 60" stroke="#FFF" stroke-width="4" stroke-linecap="round" fill="none"/></svg>`,
        example: {
          ja: '喫茶店に入りましょう。',
          hira: 'きっさてんにはいりましょう。',
          vi: 'Cùng vào quán cà phê nhé.'
        }
      },
      {
        id: 'n5_l13_07',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: '出ます[喫茶店を～]',
        hanViet: 'Xuất Khiết Trà Điếm',
        hiragana: 'きっさてんをでます',
        romaji: 'kissaten o demasu',
        meaning: 'ra khỏi quán',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="34" y="30" width="32" height="46" fill="#339AF0"/><path d="M42 46 L50 56 L58 46" stroke="#FFF" stroke-width="4" stroke-linecap="round" fill="none"/></svg>`,
        example: {
          ja: '5時に店を出ます。',
          hira: 'ごじにみせをでます。',
          vi: 'Tôi ra khỏi quán lúc 5 giờ.'
        }
      },
      {
        id: 'n5_l13_08',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: '結婚します',
        hanViet: 'Kết Hôn',
        hiragana: 'けっこんします',
        romaji: 'kekkonshimasu',
        meaning: 'kết hôn',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF0F6"/><circle cx="42" cy="50" r="14" fill="none" stroke="#FAB005" stroke-width="4"/><circle cx="58" cy="50" r="14" fill="none" stroke="#FAB005" stroke-width="4"/><circle cx="50" cy="38" r="4" fill="#E03131"/></svg>`,
        example: {
          ja: '来年結婚します。',
          hira: 'らいねんけっこんします。',
          vi: 'Năm sau tôi sẽ kết hôn.'
        }
      },
      {
        id: 'n5_l13_09',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: '買い物します',
        hanViet: 'Mãi Vật',
        hiragana: 'かいものします',
        romaji: 'kaimonoshimasu',
        meaning: 'mua sắm',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><rect x="28" y="42" width="44" height="36" rx="4" fill="#F59F00"/><path d="M40 42 L40 30 C40 26 60 26 60 30 L60 42" stroke="#E67700" stroke-width="4" fill="none"/></svg>`,
        example: {
          ja: 'デパートで買い物します。',
          hira: 'デパートでかいものします。',
          vi: 'Tôi đi mua sắm ở trung tâm thương mại.'
        }
      },
      {
        id: 'n5_l13_10',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: '食事します',
        hanViet: 'Thực Sự',
        hiragana: 'しょくじします',
        romaji: 'shokujishimasu',
        meaning: 'dùng bữa',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><circle cx="50" cy="50" r="22" fill="#FFF" stroke="#FF922B" stroke-width="4"/><line x1="20" y1="36" x2="20" y2="64" stroke="#F76707" stroke-width="3"/><line x1="80" y1="36" x2="80" y2="64" stroke="#F76707" stroke-width="3"/></svg>`,
        example: {
          ja: 'レストランで食事します。',
          hira: 'レストランでしょくじします。',
          vi: 'Tôi dùng bữa ở nhà hàng.'
        }
      },
      {
        id: 'n5_l13_11',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: '散歩します[公園を～]',
        hanViet: 'Tản Bộ Công Viên',
        hiragana: 'こうえんをさんぽします',
        romaji: 'kouen o sanposhimasu',
        meaning: 'đi dạo công viên',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="52" cy="28" r="8" fill="#0CA678"/><path d="M46 38 L54 50 L42 74 M54 50 L66 68" stroke="#0CA678" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`,
        example: {
          ja: '毎朝公園を散歩します。',
          hira: 'まいあさこうえんをさんぽします。',
          vi: 'Mỗi sáng tôi đều đi dạo ở công viên.'
        }
      },
      {
        id: 'n5_l13_12',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: '大変[な]',
        hanViet: 'Đại Biến',
        hiragana: 'たいへん[な]',
        romaji: 'taihen[na]',
        meaning: 'vất vả',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><circle cx="50" cy="46" r="22" fill="#FA5252"/><line x1="50" y1="36" x2="50" y2="48" stroke="#FFF" stroke-width="4"/><circle cx="50" cy="56" r="3" fill="#FFF"/></svg>`,
        example: {
          ja: '毎日仕事が大変です。',
          hira: 'まいにちしごとがたいへんです。',
          vi: 'Công việc mỗi ngày rất vất vả.'
        }
      },
      {
        id: 'n5_l13_13',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: '欲しい',
        hanViet: 'Dục',
        hiragana: 'ほしい',
        romaji: 'hoshii',
        meaning: 'muốn có',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF0F6"/><polygon points="50,20 62,38 84,40 68,56 72,78 50,66 28,78 32,56 16,40 38,38" fill="#F06595"/></svg>`,
        example: {
          ja: '新しいパソコンが欲しいです。',
          hira: 'あたらしいパソコンがほしいです。',
          vi: 'Tôi muốn có một chiếc máy tính cá nhân mới.'
        }
      },
      {
        id: 'n5_l13_14',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: '寂しい',
        hanViet: 'Tịch',
        hiragana: 'さびしい',
        romaji: 'sabishii',
        meaning: 'buồn, cô đơn',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E9ECEF"/><circle cx="50" cy="46" r="22" fill="#868E96"/><path d="M40 56 Q50 48 60 56" stroke="#FFF" stroke-width="3" fill="none"/></svg>`,
        example: {
          ja: '一人は寂しいです。',
          hira: 'ひとりはさびしいです。',
          vi: 'Ở một mình thì buồn và cô đơn lắm.'
        }
      },
      {
        id: 'n5_l13_15',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: '広い',
        hanViet: 'Quảng',
        hiragana: 'ひろい',
        romaji: 'hiroi',
        meaning: 'rộng',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="20" y="24" width="60" height="52" rx="4" fill="none" stroke="#1971C2" stroke-width="4"/></svg>`,
        example: {
          ja: '私の部屋は広いです。',
          hira: 'わたしのへやはひろいです。',
          vi: 'Phòng của tôi rất rộng.'
        }
      },
      {
        id: 'n5_l13_16',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: '狭い',
        hanViet: 'Hiệp',
        hiragana: 'せまい',
        romaji: 'semai',
        meaning: 'hẹp',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E9ECEF"/><rect x="36" y="24" width="28" height="52" rx="4" fill="none" stroke="#868E96" stroke-width="4"/></svg>`,
        example: {
          ja: 'この部屋は狭いです。',
          hira: 'このへやはせまいです。',
          vi: 'Căn phòng này chật hẹp.'
        }
      },
      {
        id: 'n5_l13_17',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: '市役所',
        hanViet: 'Thị Dịch Sở',
        hiragana: 'しやくしょ',
        romaji: 'shiyakusho',
        meaning: 'tòa hành chính thành phố',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><polygon points="50,22 80,40 20,40" fill="#1864AB"/><rect x="26" y="40" width="48" height="38" fill="#339AF0"/><rect x="44" y="58" width="12" height="20" fill="#FFF"/></svg>`,
        example: {
          ja: '市役所へ外国人登録に行きます。',
          hira: 'しやくしょへがいこくじんとうろくにいきます。',
          vi: 'Tôi đến tòa hành chính thành phố để làm đăng ký người nước ngoài.'
        }
      },
      {
        id: 'n5_l13_18',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: 'プール',
        hanViet: '',
        hiragana: 'プール',
        romaji: 'pu-ru',
        meaning: 'bể bơi',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="22" y="36" width="56" height="34" rx="4" fill="#339AF0"/><path d="M26 50 Q50 44 74 50" stroke="#FFF" stroke-width="3" fill="none"/></svg>`,
        example: {
          ja: '暑いからプールへ行きましょう。',
          hira: 'あついからプールへいきましょう。',
          vi: 'Vì trời nóng nên cùng đi bể bơi nào.'
        }
      },
      {
        id: 'n5_l13_19',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: '川',
        hanViet: 'Xuyên',
        hiragana: 'かわ',
        romaji: 'kawa',
        meaning: 'con sông',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><path d="M36 20 Q48 50 36 80 M50 20 Q62 50 50 80 M64 20 Q76 50 64 80" stroke="#20C997" stroke-width="4" fill="none"/></svg>`,
        example: {
          ja: '川で魚を釣ります。',
          hira: 'かわでさかなをつります。',
          vi: 'Tôi câu cá ở dòng sông.'
        }
      },
      {
        id: 'n5_l13_20',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: '経済',
        hanViet: 'Kinh Tế',
        hiragana: 'けいざい',
        romaji: 'keizai',
        meaning: 'kinh tế',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><polyline points="26,68 44,50 58,58 76,32" stroke="#FAB005" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`,
        example: {
          ja: '大学で経済を勉強します。',
          hira: 'だいがくでけいざいをべんきょうします。',
          vi: 'Tôi học ngành kinh tế ở trường đại học.'
        }
      },
      {
        id: 'n5_l13_21',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: '美術',
        hanViet: 'Mỹ Thuật',
        hiragana: 'びじゅつ',
        romaji: 'bijutsu',
        meaning: 'mỹ thuật',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><path d="M30 65 C22 45 42 25 65 30 C75 32 80 44 70 55 C65 60 55 58 52 64 C48 72 36 78 30 65 Z" fill="#7950F2"/><circle cx="40" cy="40" r="4" fill="#FFD43B"/><circle cx="52" cy="38" r="4" fill="#FF6B6B"/><circle cx="62" cy="48" r="4" fill="#51CF66"/></svg>`,
        example: {
          ja: '日本の美術に興味があります。',
          hira: 'にほんのびじゅつにきょうみがあります。',
          vi: 'Tôi có hứng thú với mỹ thuật Nhật Bản.'
        }
      },
      {
        id: 'n5_l13_22',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: '釣り',
        hanViet: 'Câu',
        hiragana: 'つり',
        romaji: 'tsuri',
        meaning: 'câu cá',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><path d="M30 70 L60 25 M60 25 L65 55 Q65 68 55 68" stroke="#1971C2" stroke-width="3" fill="none"/></svg>`,
        example: {
          ja: '週末に川へ釣りに行きます。',
          hira: 'しゅうまつにかわへつりにいきます。',
          vi: 'Cuối tuần tôi đi câu cá ở bờ sông.'
        }
      },
      {
        id: 'n5_l13_23',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: 'スキー',
        hanViet: '',
        hiragana: 'スキー',
        romaji: 'suki-',
        meaning: 'trượt tuyết',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="48" cy="30" r="8" fill="#1864AB"/><line x1="28" y1="68" x2="68" y2="76" stroke="#339AF0" stroke-width="5" stroke-linecap="round"/><line x1="34" y1="74" x2="74" y2="82" stroke="#339AF0" stroke-width="5" stroke-linecap="round"/></svg>`,
        example: {
          ja: '冬にスキーへ行きたいです。',
          hira: 'ふゆにスキーへいきたいです。',
          vi: 'Mùa đông tôi muốn đi trượt tuyết.'
        }
      },
      {
        id: 'n5_l13_24',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: '会議',
        hanViet: 'Hội Nghị',
        hiragana: 'かいぎ',
        romaji: 'kaigi',
        meaning: 'cuộc họp',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="25" y="44" width="50" height="24" rx="4" fill="#1864AB"/><circle cx="34" cy="34" r="6" fill="#339AF0"/><circle cx="50" cy="34" r="6" fill="#339AF0"/><circle cx="66" cy="34" r="6" fill="#339AF0"/></svg>`,
        example: {
          ja: '午後から大事な会議があります。',
          hira: 'ごごからだいじなかいぎがあります。',
          vi: 'Từ chiều có cuộc họp rất quan trọng.'
        }
      },
      {
        id: 'n5_l13_25',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: '登録',
        hanViet: 'Đăng Lục',
        hiragana: 'とうろく',
        romaji: 'touroku',
        meaning: 'việc đăng ký',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><rect x="28" y="24" width="44" height="52" rx="4" fill="#20C997"/><path d="M38 50 L46 58 L62 42" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`,
        example: {
          ja: '市役所で登録をします。',
          hira: 'しやくしょでとうろくをします。',
          vi: 'Tôi làm thủ tục đăng ký ở ủy ban thành phố.'
        }
      },
      {
        id: 'n5_l13_26',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: '週末',
        hanViet: 'Chu Mạt',
        hiragana: 'しゅうまつ',
        romaji: 'shuumatsu',
        meaning: 'cuối tuần',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><rect x="24" y="28" width="52" height="46" rx="4" fill="#FAB005"/><text x="50" y="58" text-anchor="middle" font-size="14" font-weight="bold" fill="#FFF">WEEKEND</text></svg>`,
        example: {
          ja: '週末は何をしますか。',
          hira: 'しゅうまつはなにをしますか。',
          vi: 'Cuối tuần bạn sẽ làm gì?'
        }
      },
      {
        id: 'n5_l13_27',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: '～ごろ',
        hanViet: '',
        hiragana: '～ごろ',
        romaji: '~goro',
        meaning: 'khoảng thời điểm',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E9ECEF"/><circle cx="50" cy="50" r="28" fill="#868E96"/><text x="50" y="56" text-anchor="middle" font-size="14" font-weight="bold" fill="#FFF">AT ~</text></svg>`,
        example: {
          ja: '六時ごろご飯を食べます。',
          hira: 'ろくじごろごはんをたべます。',
          vi: 'Tôi ăn cơm vào khoảng tầm 6 giờ.'
        }
      },
      {
        id: 'n5_l13_28',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: '何か',
        hanViet: 'Hà',
        hiragana: 'なにか',
        romaji: 'nanika',
        meaning: 'cái gì đó',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><circle cx="50" cy="50" r="28" fill="#FF922B"/><text x="50" y="58" text-anchor="middle" font-size="14" font-weight="bold" fill="#FFF">SOMETHING</text></svg>`,
        example: {
          ja: '何か食べたいです。',
          hira: 'なにかたべたいです。',
          vi: 'Tôi muốn ăn cái gì đó.'
        }
      },
      {
        id: 'n5_l13_29',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: 'どこか',
        hanViet: '',
        hiragana: 'どこか',
        romaji: 'dokoka',
        meaning: 'ở đâu đó',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="50" r="28" fill="#339AF0"/><text x="50" y="58" text-anchor="middle" font-size="13" font-weight="bold" fill="#FFF">SOMEWHERE</text></svg>`,
        example: {
          ja: '週末どこかへ行きましたか。',
          hira: 'しゅうまつどこかへいきましたか。',
          vi: 'Cuối tuần bạn có đi đâu đó không?'
        }
      },
      {
        id: 'n5_l13_30',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: 'お腹が空きました',
        hanViet: 'Phúc Không',
        hiragana: 'おなかがすきました',
        romaji: 'onaka ga sukimashita',
        meaning: 'Tôi đói rồi',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><circle cx="50" cy="50" r="24" fill="none" stroke="#F76707" stroke-width="4"/><text x="50" y="56" text-anchor="middle" font-size="13" font-weight="bold" fill="#D9480F">EMPTY</text></svg>`,
        example: {
          ja: 'お腹が空きましたね。何か食べましょう。',
          hira: 'おなかがすきましたね。なにかたべましょう。',
          vi: 'Đói bụng quá rồi nhỉ. Cùng kiếm gì ăn thôi.'
        }
      },
      {
        id: 'n5_l13_31',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: 'お腹がいっぱいです',
        hanViet: 'Phúc',
        hiragana: 'おなかがいっぱいです',
        romaji: 'onaka ga ippai desu',
        meaning: 'Tôi no rồi',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="50" r="26" fill="#20C997"/><text x="50" y="56" text-anchor="middle" font-size="14" font-weight="bold" fill="#FFF">FULL</text></svg>`,
        example: {
          ja: 'たくさん食べましたから、お腹がいっぱいです。',
          hira: 'たくさんたべましたから、おなかがいっぱいです。',
          vi: 'Tôi đã ăn nhiều rồi nên no căng cả bụng.'
        }
      },
      {
        id: 'n5_l13_32',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: '喉が乾きました',
        hanViet: 'Hầu Can',
        hiragana: 'のどがかわきました',
        romaji: 'nodo ga kawakimashita',
        meaning: 'Tôi khát',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><path d="M50 24 C50 24 35 45 35 56 C35 65 42 72 50 72 C58 72 65 65 65 56 C65 45 50 24 50 24 Z" fill="#339AF0"/></svg>`,
        example: {
          ja: '喉が乾きましたから、お茶を飲みます。',
          hira: 'のどがかわきましたから、おちゃをのみます。',
          vi: 'Vì khát nước nên tôi uống trà.'
        }
      },
      {
        id: 'n5_l13_33',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: 'そうですね',
        hanViet: '',
        hiragana: 'そうですね',
        romaji: 'sou desu ne',
        meaning: 'Đúng thế nhỉ',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><circle cx="50" cy="38" r="14" fill="#FF922B"/><path d="M30 76 C30 60 70 60 70 76 Z" fill="#FFA94D"/><path d="M42 48 Q50 54 58 48" stroke="#FFF" stroke-width="3" fill="none"/></svg>`,
        example: {
          ja: '「今日は暑いですね。」「そうですね。」',
          hira: '「きょうはあついですね。」「そうですね。」',
          vi: '“Hôm nay nóng nhỉ.” “Đúng thế thật.”'
        }
      },
      {
        id: 'n5_l13_34',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: 'そうしましょう',
        hanViet: '',
        hiragana: 'そうしましょう',
        romaji: 'sou shimashou',
        meaning: 'Ừ, làm như thế đi',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="50" r="26" fill="#0CA678"/><path d="M38 50 L46 58 L64 40" stroke="#FFF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`,
        example: {
          ja: '「休憩しましょう。」「そうしましょう。」',
          hira: '「きゅうけいしましょう。」「そうしましょう。」',
          vi: '“Nghỉ giải lao đi.” “Ừ, làm thế đi.”'
        }
      },
      {
        id: 'n5_l13_35',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: 'ご注文は？',
        hanViet: 'Chú Văn',
        hiragana: 'ごちゅうもんは？',
        romaji: 'gochuumon wa?',
        meaning: 'Anh/chị gọi món gì ạ?',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><rect x="28" y="26" width="44" height="48" rx="4" fill="#FAB005"/><text x="50" y="56" text-anchor="middle" font-size="16" font-weight="bold" fill="#FFF">MENU</text></svg>`,
        example: {
          ja: 'ご注文はお決まりですか。',
          hira: 'ごちゅうもんはおきまりですか。',
          vi: 'Quý khách đã chọn được món chưa ạ?'
        }
      },
      {
        id: 'n5_l13_36',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: '定食',
        hanViet: 'Định Thực',
        hiragana: 'ていしょく',
        romaji: 'teishoku',
        meaning: 'cơm suất',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><rect x="22" y="34" width="56" height="38" rx="4" fill="#D9480F"/><circle cx="36" cy="53" r="10" fill="#FFF"/><circle cx="62" cy="53" r="10" fill="#FF922B"/></svg>`,
        example: {
          ja: '魚の定食をお願いします。',
          hira: 'さかなのていしょくをおねがいします。',
          vi: 'Xin cho tôi một suất cơm cá.'
        }
      },
      {
        id: 'n5_l13_37',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: '牛どん',
        hanViet: 'Ngưu',
        hiragana: 'ぎゅうどん',
        romaji: 'gyuudon',
        meaning: 'cơm thịt bò Gyudon',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><path d="M26 50 C26 72 74 72 74 50 Z" fill="#D9480F"/><path d="M28 50 C28 36 72 36 72 50 Z" fill="#F76707"/></svg>`,
        example: {
          ja: '牛どんを二つください。',
          hira: 'ぎゅうどんをふたつください。',
          vi: 'Cho tôi hai bát cơm bò Gyudon.'
        }
      },
      {
        id: 'n5_l13_38',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: '少々お待ちください',
        hanViet: 'Thiểu Thiểu Đãi',
        hiragana: 'しょうしょうおまちください',
        romaji: 'shoushou omachi kudasai',
        meaning: 'Xin chờ một chút',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="38" r="14" fill="#0CA678"/><path d="M30 76 C30 60 70 60 70 76 Z" fill="#20C997"/><path d="M40 48 L60 48" stroke="#FFF" stroke-width="3" stroke-linecap="round"/></svg>`,
        example: {
          ja: 'はい、少々お待ちください。',
          hira: 'はい、しょうしょうおまちください。',
          vi: 'Vâng, xin quý khách vui lòng đợi trong giây lát.'
        }
      },
      {
        id: 'n5_l13_39',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: '別々に',
        hanViet: 'Biệt Biệt',
        hiragana: 'べつべつに',
        romaji: 'betsubetsuni',
        meaning: 'tính riêng',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="25" y="36" width="20" height="28" rx="3" fill="#1864AB"/><rect x="55" y="36" width="20" height="28" rx="3" fill="#339AF0"/></svg>`,
        example: {
          ja: '別々にお願いします。',
          hira: 'べつべつにおねがいします。',
          vi: 'Xin hãy tính tiền riêng từng người ạ.'
        }
      },
      {
        id: 'n5_l13_40',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: 'ロシア',
        hanViet: '',
        hiragana: 'ロシア',
        romaji: 'roshia',
        meaning: 'Nga',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="22" y="30" width="56" height="13" fill="#FFF" stroke="#CED4DA" stroke-width="1"/><rect x="22" y="43" width="56" height="14" fill="#1971C2"/><rect x="22" y="57" width="56" height="13" fill="#E03131"/></svg>`,
        example: {
          ja: 'ロシアはとても広い国です。',
          hira: 'ロシアはとてもひろいくにです。',
          vi: 'Nước Nga là một quốc gia rất rộng lớn.'
        }
      },
      {
        id: 'n5_l13_41',
        lesson: 13,
        lessonId: 13,
        level: 'N5',
        kanji: 'つる屋',
        hanViet: 'Ốc',
        hiragana: 'つるや',
        romaji: 'tsuruya',
        meaning: 'nhà hàng Tsuruya',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><polygon points="22,42 50,24 78,42" fill="#F76707"/><rect x="28" y="42" width="44" height="34" fill="#FF922B"/><rect x="42" y="54" width="16" height="22" fill="#FFF"/></svg>`,
        example: {
          ja: 'つる屋で食事をしましょう。',
          hira: 'つるやでしょくじをしましょう。',
          vi: 'Cùng dùng bữa ở quán Tsuruya nhé.'
        }
      }
    ]
  },

// --------------------------------------------------------------------------
  // BÀI 14: ĐỘNG TỪ THỂ て, YÊU CẦU & ĐANG DIỄN RA (22 TỪ)
  // --------------------------------------------------------------------------
  {
    lessonNumber: 14,
    level: 'N5',
    title: 'Bài 14: Động từ thể て & Nhờ vả',
    topicVi: 'Động từ thể て, Yêu cầu & Đang diễn ra',
    icon: '⚡',
    grammarPoint: 'Quy tắc chia Động từ Thể て (Nhóm 1, 2, 3). Yêu cầu nhờ vả lịch sự: ～てください. Đang làm gì: ～ています. Đề nghị giúp đỡ: ～ましょうか.',
    vocab: [
      {
        id: 'n5_l14_01',
        lesson: 14,
        lessonId: 14,
        level: 'N5',
        kanji: 'つけます',
        hanViet: '',
        hiragana: 'つけます',
        romaji: 'tsukemasu',
        meaning: 'bật (điện/điều hòa)',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><circle cx="50" cy="46" r="18" fill="#FAB005"/><line x1="50" y1="18" x2="50" y2="24" stroke="#FAB005" stroke-width="4"/><line x1="28" y1="30" x2="34" y2="36" stroke="#FAB005" stroke-width="4"/><line x1="72" y1="30" x2="66" y2="36" stroke="#FAB005" stroke-width="4"/><rect x="44" y="64" width="12" height="12" fill="#868E96"/></svg>`,
        example: {
          ja: '電気をつけてください。',
          hira: 'でんきをつけてください。',
          vi: 'Xin hãy bật đèn lên.'
        }
      },
      {
        id: 'n5_l14_02',
        lesson: 14,
        lessonId: 14,
        level: 'N5',
        kanji: '消します',
        hanViet: 'Tiêu',
        hiragana: 'けします',
        romaji: 'keshimasu',
        meaning: 'tắt (điện/điều hòa)',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#343A40"/><circle cx="50" cy="46" r="18" fill="#495057"/><rect x="44" y="64" width="12" height="12" fill="#868E96"/></svg>`,
        example: {
          ja: 'エアコンを消してください。',
          hira: 'エアコンをけしてください。',
          vi: 'Xin hãy tắt máy điều hòa đi.'
        }
      },
      {
        id: 'n5_l14_03',
        lesson: 14,
        lessonId: 14,
        level: 'N5',
        kanji: '開けます',
        hanViet: 'Khai',
        hiragana: 'あけます',
        romaji: 'akemasu',
        meaning: 'mở cửa',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="25" y="25" width="50" height="50" rx="3" fill="none" stroke="#1864AB" stroke-width="4"/><polygon points="25,25 45,30 45,70 25,75" fill="#339AF0"/></svg>`,
        example: {
          ja: 'ドアを開けてください。',
          hira: 'ドアをあけてください。',
          vi: 'Xin hãy mở cửa ra.'
        }
      },
      {
        id: 'n5_l14_04',
        lesson: 14,
        lessonId: 14,
        level: 'N5',
        kanji: '閉めます',
        hanViet: 'Bế',
        hiragana: 'しめます',
        romaji: 'shimemasu',
        meaning: 'đóng cửa',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E9ECEF"/><rect x="25" y="25" width="50" height="50" rx="3" fill="#868E96" stroke="#495057" stroke-width="4"/><circle cx="65" cy="50" r="4" fill="#FFD43B"/></svg>`,
        example: {
          ja: '窓を閉めてください。',
          hira: 'まどをしめてください。',
          vi: 'Xin hãy đóng cửa sổ lại.'
        }
      },
      {
        id: 'n5_l14_05',
        lesson: 14,
        lessonId: 14,
        level: 'N5',
        kanji: '急ぎます',
        hanViet: 'Cấp',
        hiragana: 'いそぎます',
        romaji: 'isogimasu',
        meaning: 'vội, gấp',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><circle cx="52" cy="28" r="8" fill="#F76707"/><path d="M46 38 L54 50 L42 74 M54 50 L66 68" stroke="#F76707" stroke-width="5" stroke-linecap="round" fill="none"/><line x1="26" y1="42" x2="16" y2="42" stroke="#FF922B" stroke-width="3"/></svg>`,
        example: {
          ja: '時間がないから急ぎましょう。',
          hira: 'じかんがないからいそぎましょう。',
          vi: 'Vì không có thời gian nên hãy nhanh lên nào.'
        }
      },
      {
        id: 'n5_l14_06',
        lesson: 14,
        lessonId: 14,
        level: 'N5',
        kanji: '待ちます',
        hanViet: 'Đãi',
        hiragana: 'まちます',
        romaji: 'machimasu',
        meaning: 'đợi, chờ',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><circle cx="50" cy="50" r="26" fill="none" stroke="#F59F00" stroke-width="4"/><line x1="50" y1="50" x2="50" y2="34" stroke="#E67700" stroke-width="4"/><line x1="50" y1="50" x2="62" y2="50" stroke="#E67700" stroke-width="4"/></svg>`,
        example: {
          ja: 'ここで待ってください。',
          hira: 'ここでまってください。',
          vi: 'Xin hãy đợi ở đây.'
        }
      },
      {
        id: 'n5_l14_07',
        lesson: 14,
        lessonId: 14,
        level: 'N5',
        kanji: '止めます',
        hanViet: 'Chỉ',
        hiragana: 'とめます',
        romaji: 'tomemasu',
        meaning: 'dừng, đỗ xe',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><polygon points="50,22 76,34 76,66 50,78 24,66 24,34" fill="#E03131"/><text x="50" y="58" text-anchor="middle" font-size="14" font-weight="bold" fill="#FFF">STOP</text></svg>`,
        example: {
          ja: 'ここに車を止めないでください。',
          hira: 'ここにくるまをとめないでください。',
          vi: 'Xin đừng đỗ xe ở chỗ này.'
        }
      },
      {
        id: 'n5_l14_08',
        lesson: 14,
        lessonId: 14,
        level: 'N5',
        kanji: '曲がります',
        hanViet: 'Khúc',
        hiragana: 'まがります',
        romaji: 'magarimasu',
        meaning: 'rẽ trái/phải',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><path d="M35 70 L35 45 Q35 35 45 35 L70 35 M60 25 L72 35 L60 45" stroke="#1971C2" stroke-width="5" stroke-linecap="round" fill="none"/></svg>`,
        example: {
          ja: '次の角を右へ曲がってください。',
          hira: 'つぎのかどをみぎへまがってください。',
          vi: 'Xin hãy rẽ phải ở góc phố tiếp theo.'
        }
      },
      {
        id: 'n5_l14_09',
        lesson: 14,
        lessonId: 14,
        level: 'N5',
        kanji: '持ちます',
        hanViet: 'Trì',
        hiragana: 'もちます',
        romaji: 'mochimasu',
        meaning: 'mang, cầm',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><rect x="30" y="44" width="40" height="32" rx="4" fill="#20C997"/><path d="M40 44 L40 32 C40 28 60 28 60 32 L60 44" stroke="#0CA678" stroke-width="4" fill="none"/></svg>`,
        example: {
          ja: '重い荷物を持ちます。',
          hira: 'おもいにもつをもちます。',
          vi: 'Tôi xách hành lý nặng.'
        }
      },
      {
        id: 'n5_l14_10',
        lesson: 14,
        lessonId: 14,
        level: 'N5',
        kanji: '取ります',
        hanViet: 'Thủ',
        hiragana: 'とります',
        romaji: 'torimasu',
        meaning: 'lấy',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><path d="M30 60 Q50 42 70 60 L66 72 Q50 54 34 72 Z" fill="#F76707"/></svg>`,
        example: {
          ja: '塩を取ってください。',
          hira: 'しおをとってください。',
          vi: 'Xin hãy lấy giúp tôi lọ muối.'
        }
      },
      {
        id: 'n5_l14_11',
        lesson: 14,
        lessonId: 14,
        level: 'N5',
        kanji: '手伝います',
        hanViet: 'Thủ Truyền',
        hiragana: 'てつだいます',
        romaji: 'tetsudaimasu',
        meaning: 'giúp đỡ',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="36" cy="38" r="10" fill="#1864AB"/><circle cx="64" cy="38" r="10" fill="#339AF0"/><path d="M24 74 C24 60 48 60 48 74 Z" fill="#1864AB"/><path d="M52 74 C52 60 76 60 76 74 Z" fill="#339AF0"/><line x1="36" y1="52" x2="64" y2="52" stroke="#FFF" stroke-width="3"/></svg>`,
        example: {
          ja: '荷物を手伝いましょうか。',
          hira: 'にもつをてつだいましょうか。',
          vi: 'Tôi xách hành lý giúp bạn nhé?'
        }
      },
      {
        id: 'n5_l14_12',
        lesson: 14,
        lessonId: 14,
        level: 'N5',
        kanji: '呼びます',
        hanViet: 'Hô',
        hiragana: 'よびます',
        romaji: 'yobimasu',
        meaning: 'gọi taxi/tên',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><rect x="25" y="38" width="50" height="30" rx="4" fill="#FAB005"/><circle cx="36" cy="68" r="6" fill="#343A40"/><circle cx="64" cy="68" r="6" fill="#343A40"/><text x="50" y="32" text-anchor="middle" font-size="12" font-weight="bold" fill="#D9480F">TAXI</text></svg>`,
        example: {
          ja: 'タクシーを呼びましょうか。',
          hira: 'タクシーをよびましょうか。',
          vi: 'Tôi gọi taxi giúp bạn nhé?'
        }
      },
      {
        id: 'n5_l14_13',
        lesson: 14,
        lessonId: 14,
        level: 'N5',
        kanji: '話します',
        hanViet: 'Thoại',
        hiragana: 'はなします',
        romaji: 'hanashimasu',
        meaning: 'nói chuyện',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="38" r="14" fill="#0CA678"/><path d="M30 76 C30 60 70 60 70 76 Z" fill="#20C997"/><path d="M66 42 Q76 42 76 52 Q76 60 68 60 L64 64 L64 60" fill="#0CA678"/></svg>`,
        example: {
          ja: '日本語で話してください。',
          hira: 'にほんごではなしてください。',
          vi: 'Xin hãy nói chuyện bằng tiếng Nhật.'
        }
      },
      {
        id: 'n5_l14_14',
        lesson: 14,
        lessonId: 14,
        level: 'N5',
        kanji: '見せます',
        hanViet: 'Kiến',
        hiragana: 'みせます',
        romaji: 'misemasu',
        meaning: 'cho xem',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="50" r="22" fill="none" stroke="#1971C2" stroke-width="4"/><circle cx="50" cy="50" r="10" fill="#228BE6"/><path d="M26 50 Q50 24 74 50 Q50 76 26 50 Z" fill="none" stroke="#1971C2" stroke-width="3"/></svg>`,
        example: {
          ja: 'パスポートを見せてください。',
          hira: 'パスポートをみせてください。',
          vi: 'Xin hãy cho tôi xem hộ chiếu.'
        }
      },
      {
        id: 'n5_l14_15',
        lesson: 14,
        lessonId: 14,
        level: 'N5',
        kanji: '教えます',
        hanViet: 'Giáo',
        hiragana: 'おしえます',
        romaji: 'oshiemasu',
        meaning: 'cho biết địa chỉ/thông tin',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><rect x="25" y="28" width="50" height="34" rx="3" fill="#7950F2"/><circle cx="50" cy="72" r="8" fill="#5F3DC4"/></svg>`,
        example: {
          ja: '電話番号を教えてください。',
          hira: 'でんわばんごうをおしえてください。',
          vi: 'Xin hãy cho tôi biết số điện thoại.'
        }
      },
      {
        id: 'n5_l14_16',
        lesson: 14,
        lessonId: 14,
        level: 'N5',
        kanji: '始めます',
        hanViet: 'Thủy',
        hiragana: 'はじめます',
        romaji: 'hajimemasu',
        meaning: 'bắt đầu',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><polygon points="42,32 68,50 42,68" fill="#0CA678"/></svg>`,
        example: {
          ja: '授業を始めましょう。',
          hira: 'じゅぎょうをはじめましょう。',
          vi: 'Cùng bắt đầu tiết học nào.'
        }
      },
      {
        id: 'n5_l14_17',
        lesson: 14,
        lessonId: 14,
        level: 'N5',
        kanji: 'あれ',
        hanViet: '',
        hiragana: 'あれ',
        romaji: 'are',
        meaning: 'ô! câu cảm thán',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><circle cx="50" cy="50" r="28" fill="#F59F00"/><text x="50" y="60" text-anchor="middle" font-size="28" font-weight="bold" fill="#FFF">!</text></svg>`,
        example: {
          ja: 'あれ、鍵がありません。',
          hira: 'あれ、かぎがありません。',
          vi: 'Ô kìa, không thấy chìa khóa đâu cả.'
        }
      },
      {
        id: 'n5_l14_18',
        lesson: 14,
        lessonId: 14,
        level: 'N5',
        kanji: '信号を右へ曲がってください',
        hanViet: 'Tín Hiệu Hữu Khúc',
        hiragana: 'しんごうをみぎへまがってください',
        romaji: 'shingou o migi e magatte kudasai',
        meaning: 'rẽ phải ở đèn tín hiệu',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="42" y="22" width="16" height="42" rx="4" fill="#343A40"/><circle cx="50" cy="30" r="5" fill="#E03131"/><circle cx="50" cy="43" r="5" fill="#FAB005"/><circle cx="50" cy="56" r="5" fill="#20C997"/><path d="M50 72 L68 72 M60 66 L68 72 L60 78" stroke="#1971C2" stroke-width="4" stroke-linecap="round"/></svg>`,
        example: {
          ja: 'あの信号を右へ曲がってください。',
          hira: 'あのしんごうをみぎへまがってください。',
          vi: 'Xin hãy rẽ phải ở cột đèn tín hiệu kia.'
        }
      },
      {
        id: 'n5_l14_19',
        lesson: 14,
        lessonId: 14,
        level: 'N5',
        kanji: 'まっすぐ',
        hanViet: '',
        hiragana: 'まっすぐ',
        romaji: 'massugu',
        meaning: 'thẳng',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><line x1="50" y1="75" x2="50" y2="25" stroke="#0CA678" stroke-width="6" stroke-linecap="round"/><polygon points="50,20 40,36 60,36" fill="#0CA678"/></svg>`,
        example: {
          ja: 'この道をまっすぐ行ってください。',
          hira: 'このみちをまっすぐいってください。',
          vi: 'Xin hãy đi thẳng con đường này.'
        }
      },
      {
        id: 'n5_l14_20',
        lesson: 14,
        lessonId: 14,
        level: 'N5',
        kanji: 'これでおねがいします',
        hanViet: 'Nguyện',
        hiragana: 'これでおねがいします',
        romaji: 'kore de onegaishimasu',
        meaning: 'gửi anh tiền',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><circle cx="50" cy="50" r="28" fill="#FFD43B" stroke="#FAB005" stroke-width="3"/><text x="50" y="60" text-anchor="middle" font-size="28" font-weight="bold" fill="#D9480F">¥</text></svg>`,
        example: {
          ja: '「二千円です。」「これでおねがいします。」',
          hira: '「にせんえんです。」「これでおねがいします。」',
          vi: '“Hết 2.000 yên ạ.” “Gửi anh tiền này.”'
        }
      },
      {
        id: 'n5_l14_21',
        lesson: 14,
        lessonId: 14,
        level: 'N5',
        kanji: 'お釣り',
        hanViet: 'Điếu',
        hiragana: 'おつり',
        romaji: 'otsuri',
        meaning: 'tiền lẻ/tiền thừa',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E9ECEF"/><circle cx="42" cy="52" r="14" fill="#ADB5BD"/><circle cx="58" cy="44" r="14" fill="#CED4DA"/><text x="50" y="58" text-anchor="middle" font-size="12" font-weight="bold" fill="#495057">¥</text></svg>`,
        example: {
          ja: 'お釣りを忘れないでください。',
          hira: 'おつりをわすれないでください。',
          vi: 'Xin đừng quên lấy tiền thừa.'
        }
      },
      {
        id: 'n5_l14_22',
        lesson: 14,
        lessonId: 14,
        level: 'N5',
        kanji: '梅田',
        hanViet: 'Mai Điền',
        hiragana: 'うめだ',
        romaji: 'umeda',
        meaning: 'khu Umeda Osaka',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="25" y="25" width="50" height="50" rx="4" fill="#1864AB"/><text x="50" y="56" text-anchor="middle" font-size="14" font-weight="bold" fill="#FFF">UMEDA</text></svg>`,
        example: {
          ja: '梅田までタクシーで行きます。',
          hira: 'うめだまでタクシーでいきます。',
          vi: 'Tôi đi taxi đến khu Umeda ở Osaka.'
        }
      }
    ]
  },

// --------------------------------------------------------------------------
  // BÀI 15: XIN PHÉP, CẤM ĐOÁN & TRẠNG THÁI NGHỀ NGHIỆP (28 TỪ)
  // --------------------------------------------------------------------------
  {
    lessonNumber: 15,
    level: 'N5',
    title: 'Bài 15: Xin phép, Cấm đoán & Nghề nghiệp',
    topicVi: 'Xin phép, Cấm đoán & Trạng thái nghề nghiệp',
    icon: '⚖️',
    grammarPoint: 'Xin phép làm gì: Động từ Thể て + もいいです. Cấm đoán không được làm: Động từ Thể て + はいけません. Trạng thái tiếp diễn / nghề nghiệp / tình trạng hôn nhân: ～ています (知っています, 住んでいます, 結婚しています, 売っています).',
    vocab: [
      {
        id: 'n5_l15_01',
        lesson: 15,
        lessonId: 15,
        level: 'N5',
        kanji: '立ちます',
        hanViet: 'Lập',
        hiragana: 'たちます',
        romaji: 'tachimasu',
        meaning: 'đứng',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="28" r="10" fill="#1971C2"/><line x1="50" y1="38" x2="50" y2="60" stroke="#1864AB" stroke-width="5"/><line x1="50" y1="60" x2="42" y2="78" stroke="#1864AB" stroke-width="4"/><line x1="50" y1="60" x2="58" y2="78" stroke="#1864AB" stroke-width="4"/></svg>`,
        example: {
          ja: 'ここに立たないでください。',
          hira: 'ここにたたないでください。',
          vi: 'Xin đừng đứng ở chỗ này.'
        }
      },
      {
        id: 'n5_l15_02',
        lesson: 15,
        lessonId: 15,
        level: 'N5',
        kanji: '座ります',
        hanViet: 'Tọa',
        hiragana: 'すわります',
        romaji: 'suwarimasu',
        meaning: 'ngồi',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><circle cx="48" cy="30" r="10" fill="#F76707"/><path d="M48 40 L48 56 L64 56 M48 56 L44 76 M64 56 L64 76" stroke="#D9480F" stroke-width="4" fill="none"/></svg>`,
        example: {
          ja: 'どうぞここに座ってください。',
          hira: 'どうぞここにすわってください。',
          vi: 'Xin mời ngồi xuống đây.'
        }
      },
      {
        id: 'n5_l15_03',
        lesson: 15,
        lessonId: 15,
        level: 'N5',
        kanji: '使います',
        hanViet: 'Sử',
        hiragana: 'つかいます',
        romaji: 'tsukaimasu',
        meaning: 'dùng, sử dụng',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="50" r="26" fill="#20C997"/><path d="M38 50 L46 58 L64 40" stroke="#FFF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`,
        example: {
          ja: 'このペンを使ってもいいですか。',
          hira: 'このペンをつかってもいいですか。',
          vi: 'Tôi dùng chiếc bút này có được không?'
        }
      },
      {
        id: 'n5_l15_04',
        lesson: 15,
        lessonId: 15,
        level: 'N5',
        kanji: '置きます',
        hanViet: 'Trí',
        hiragana: 'おきます',
        romaji: 'okimasu',
        meaning: 'đặt, để',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><line x1="20" y1="64" x2="80" y2="64" stroke="#495057" stroke-width="4"/><rect x="36" y="38" width="28" height="26" rx="3" fill="#FAB005"/></svg>`,
        example: {
          ja: '机の上に荷物を置きます。',
          hira: 'つくえのうえににもつをおきます。',
          vi: 'Tôi đặt hành lý ở trên bàn.'
        }
      },
      {
        id: 'n5_l15_05',
        lesson: 15,
        lessonId: 15,
        level: 'N5',
        kanji: '知ります',
        hanViet: 'Tri',
        hiragana: 'しります',
        romaji: 'shirimasu',
        meaning: 'biết',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><circle cx="50" cy="46" r="18" fill="#FAB005"/><line x1="50" y1="18" x2="50" y2="24" stroke="#FAB005" stroke-width="4"/><line x1="26" y1="30" x2="32" y2="36" stroke="#FAB005" stroke-width="4"/><line x1="74" y1="30" x2="68" y2="36" stroke="#FAB005" stroke-width="4"/></svg>`,
        example: {
          ja: 'あの人の名前を知っていますか。',
          hira: 'あのひとのなまえをしっていますか。',
          vi: 'Bạn có biết tên người kia không?'
        }
      },
      {
        id: 'n5_l15_06',
        lesson: 15,
        lessonId: 15,
        level: 'N5',
        kanji: '売ります',
        hanViet: 'Mãi',
        hiragana: 'うります',
        romaji: 'urimasu',
        meaning: 'bán',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><rect x="26" y="44" width="48" height="32" rx="4" fill="#F76707"/><text x="50" y="66" text-anchor="middle" font-size="14" font-weight="bold" fill="#FFF">SALE</text></svg>`,
        example: {
          ja: '古い車を売りました。',
          hira: 'ふるいくるまをうりました。',
          vi: 'Tôi đã bán chiếc xe hơi cũ.'
        }
      },
      {
        id: 'n5_l15_07',
        lesson: 15,
        lessonId: 15,
        level: 'N5',
        kanji: '作ります',
        hanViet: 'Tác',
        hiragana: 'つくります',
        romaji: 'tsukurimasu',
        meaning: 'chế tạo, làm ra',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="30" y="36" width="40" height="38" rx="4" fill="#1971C2"/><circle cx="50" cy="55" r="8" fill="#FFD43B"/></svg>`,
        example: {
          ja: '晩ご飯を作ります。',
          hira: 'ばんごはんをつくります。',
          vi: 'Tôi nấu cơm tối.'
        }
      },
      {
        id: 'n5_l15_08',
        lesson: 15,
        lessonId: 15,
        level: 'N5',
        kanji: '住みます',
        hanViet: 'Trú',
        hiragana: 'すみます',
        romaji: 'sumimasu',
        meaning: 'sống',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><polygon points="50,22 80,44 20,44" fill="#F76707"/><rect x="28" y="44" width="44" height="34" fill="#FF922B"/><rect x="44" y="56" width="12" height="22" fill="#FFF"/></svg>`,
        example: {
          ja: '東京に住んでいます。',
          hira: 'とうきょうにすんでいます。',
          vi: 'Tôi đang sống ở Tokyo.'
        }
      },
      {
        id: 'n5_l15_09',
        lesson: 15,
        lessonId: 15,
        level: 'N5',
        kanji: '研究します',
        hanViet: 'Nghiên Cứu',
        hiragana: 'けんきゅうします',
        romaji: 'kenkyuushimasu',
        meaning: 'nghiên cứu',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><path d="M44 25 L56 25 L56 45 L68 68 C70 72 66 76 62 76 L38 76 C34 76 30 72 32 68 L44 45 Z" fill="#7950F2"/><circle cx="50" cy="62" r="4" fill="#FFF"/></svg>`,
        example: {
          ja: '大学で経済を研究しています。',
          hira: 'だいがくでけいざいをけんきゅうしています。',
          vi: 'Tôi đang nghiên cứu kinh tế ở trường đại học.'
        }
      },
      {
        id: 'n5_l15_10',
        lesson: 15,
        lessonId: 15,
        level: 'N5',
        kanji: '知っています',
        hanViet: 'Tri',
        hiragana: 'しっています',
        romaji: 'shitte imasu',
        meaning: 'biết',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="50" r="26" fill="#0CA678"/><path d="M38 50 L46 58 L64 40" stroke="#FFF" stroke-width="5" stroke-linecap="round" fill="none"/></svg>`,
        example: {
          ja: 'はい、知っています。',
          hira: 'はい、しっています。',
          vi: 'Vâng, tôi có biết.'
        }
      },
      {
        id: 'n5_l15_11',
        lesson: 15,
        lessonId: 15,
        level: 'N5',
        kanji: '住んでいます',
        hanViet: 'Trú',
        hiragana: 'すんでいます',
        romaji: 'sunde imasu',
        meaning: 'đang sống',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><polygon points="50,24 76,46 24,46" fill="#1864AB"/><rect x="30" y="46" width="40" height="32" fill="#339AF0"/><rect x="45" y="58" width="10" height="20" fill="#FFF"/></svg>`,
        example: {
          ja: '家族とハノイに住んでいます。',
          hira: 'かぞくとハノイにすんでいます。',
          vi: 'Tôi đang sống cùng gia đình ở Hà Nội.'
        }
      },
      {
        id: 'n5_l15_12',
        lesson: 15,
        lessonId: 15,
        level: 'N5',
        kanji: '資料',
        hanViet: 'Tư Liệu',
        hiragana: 'しりょう',
        romaji: 'shiryou',
        meaning: 'tài liệu, tư liệu',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="28" y="24" width="44" height="52" rx="3" fill="#FFF" stroke="#1971C2" stroke-width="3"/><line x1="36" y1="36" x2="64" y2="36" stroke="#1864AB" stroke-width="3"/><line x1="36" y1="46" x2="64" y2="46" stroke="#74C0FC" stroke-width="3"/><line x1="36" y1="56" x2="54" y2="56" stroke="#74C0FC" stroke-width="3"/></svg>`,
        example: {
          ja: '会議の資料を配ります。',
          hira: 'かいぎのしりょうをくばります。',
          vi: 'Tôi phát tài liệu cho cuộc họp.'
        }
      },
      {
        id: 'n5_l15_13',
        lesson: 15,
        lessonId: 15,
        level: 'N5',
        kanji: 'カタログ',
        hanViet: '',
        hiragana: 'カタログ',
        romaji: 'katarogu',
        meaning: 'catalô',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><polygon points="48,24 80,36 80,76 48,64" fill="#FAB005"/><polygon points="48,24 16,36 16,76 48,64" fill="#F59F00"/></svg>`,
        example: {
          ja: 'カタログを見せてください。',
          hira: 'カタログをみせてください。',
          vi: 'Xin vui lòng cho tôi xem catalô.'
        }
      },
      {
        id: 'n5_l15_14',
        lesson: 15,
        lessonId: 15,
        level: 'N5',
        kanji: '時刻表',
        hanViet: 'Thời Khắc Biểu',
        hiragana: 'じこくひょう',
        romaji: 'jikokuhyou',
        meaning: 'bảng giờ tàu chạy',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="26" y="24" width="48" height="52" rx="3" fill="#FFF" stroke="#1864AB" stroke-width="3"/><line x1="26" y1="38" x2="74" y2="38" stroke="#1864AB" stroke-width="2"/><line x1="50" y1="38" x2="50" y2="76" stroke="#1864AB" stroke-width="2"/></svg>`,
        example: {
          ja: '駅で時刻表をもらいました。',
          hira: 'えきでじこくひょうをもらいました。',
          vi: 'Tôi đã lấy bảng giờ tàu chạy ở nhà ga.'
        }
      },
      {
        id: 'n5_l15_15',
        lesson: 15,
        lessonId: 15,
        level: 'N5',
        kanji: '服',
        hanViet: 'Phục',
        hiragana: 'ふく',
        romaji: 'fuku',
        meaning: 'quần áo',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF0F6"/><polygon points="50,26 65,34 76,46 66,54 60,46 60,76 40,76 40,46 34,54 24,46 35,34" fill="#F06595"/></svg>`,
        example: {
          ja: '新しい服を買いました。',
          hira: 'あたらしいふくをかいました。',
          vi: 'Tôi đã mua quần áo mới.'
        }
      },
      {
        id: 'n5_l15_16',
        lesson: 15,
        lessonId: 15,
        level: 'N5',
        kanji: '製品',
        hanViet: 'Chế Phẩm',
        hiragana: 'せいひん',
        romaji: 'seihin',
        meaning: 'sản phẩm',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><rect x="28" y="34" width="44" height="40" rx="3" fill="#F76707"/><polygon points="28,34 50,22 72,34" fill="#FFA94D"/><line x1="50" y1="34" x2="50" y2="74" stroke="#FFF" stroke-width="2"/></svg>`,
        example: {
          ja: '日本の製品は質が良いです。',
          hira: 'にほんのせいひんはしつがよいです。',
          vi: 'Sản phẩm của Nhật Bản chất lượng rất tốt.'
        }
      },
      {
        id: 'n5_l15_17',
        lesson: 15,
        lessonId: 15,
        level: 'N5',
        kanji: 'ソフト',
        hanViet: '',
        hiragana: 'ソフト',
        romaji: 'sofuto',
        meaning: 'phần mềm',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="25" y="28" width="50" height="44" rx="4" fill="#339AF0"/><text x="50" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#FFF">&lt;/&gt;</text></svg>`,
        example: {
          ja: 'コンピューターのソフトを作ります。',
          hira: 'コンピューターのソフトをつくります。',
          vi: 'Tôi phát triển phần mềm máy tính.'
        }
      },
      {
        id: 'n5_l15_18',
        lesson: 15,
        lessonId: 15,
        level: 'N5',
        kanji: '専門',
        hanViet: 'Chuyên Môn',
        hiragana: 'せんもん',
        romaji: 'senmon',
        meaning: 'chuyên môn',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><circle cx="50" cy="50" r="28" fill="#7950F2"/><text x="50" y="58" text-anchor="middle" font-size="16" font-weight="bold" fill="#FFF">PRO</text></svg>`,
        example: {
          ja: '私の専門は経済です。',
          hira: 'わたしのせんもんはけいざいです。',
          vi: 'Chuyên ngành của tôi là kinh tế.'
        }
      },
      {
        id: 'n5_l15_19',
        lesson: 15,
        lessonId: 15,
        level: 'N5',
        kanji: '歯医者',
        hanViet: 'Xỉ Y Giả',
        hiragana: 'はいしゃ',
        romaji: 'haisha',
        meaning: 'nha sĩ',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><path d="M36 28 C42 28 46 34 50 38 C54 34 58 28 64 28 C74 28 76 42 74 54 C72 68 62 76 58 76 C54 76 52 64 50 64 C48 64 46 76 42 76 C38 76 28 68 26 54 C24 42 26 28 36 28 Z" fill="#FFF" stroke="#1971C2" stroke-width="3"/></svg>`,
        example: {
          ja: '歯が痛いから歯医者へ行きます。',
          hira: 'はがいたいからはいしゃへいきます。',
          vi: 'Vì đau răng nên tôi đi gặp nha sĩ.'
        }
      },
      {
        id: 'n5_l15_20',
        lesson: 15,
        lessonId: 15,
        level: 'N5',
        kanji: '床屋',
        hanViet: 'Sàng Ốc',
        hiragana: 'とこや',
        romaji: 'tokoya',
        meaning: 'hiệu cắt tóc',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="42" y="24" width="16" height="52" rx="4" fill="#FFF" stroke="#343A40" stroke-width="3"/><line x1="42" y1="36" x2="58" y2="44" stroke="#E03131" stroke-width="4"/><line x1="42" y1="48" x2="58" y2="56" stroke="#1971C2" stroke-width="4"/><line x1="42" y1="60" x2="58" y2="68" stroke="#E03131" stroke-width="4"/></svg>`,
        example: {
          ja: '床屋で髪を切りました。',
          hira: 'とこやでかみをきりました。',
          vi: 'Tôi đã cắt tóc ở tiệm cắt tóc nam.'
        }
      },
      {
        id: 'n5_l15_21',
        lesson: 15,
        lessonId: 15,
        level: 'N5',
        kanji: 'カウンター',
        hanViet: '',
        hiragana: 'カウンター',
        romaji: 'kaunta-',
        meaning: 'quầy bán vé',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><rect x="22" y="52" width="56" height="26" rx="3" fill="#D9480F"/><circle cx="50" cy="38" r="12" fill="#F76707"/></svg>`,
        example: {
          ja: 'チケットはカウンターで買います。',
          hira: 'チケットはカウンターでかいます。',
          vi: 'Mua vé ở quầy bán vé.'
        }
      },
      {
        id: 'n5_l15_22',
        lesson: 15,
        lessonId: 15,
        level: 'N5',
        kanji: '独身',
        hanViet: 'Độc Thân',
        hiragana: 'どくしん',
        romaji: 'dokushin',
        meaning: 'độc thân',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="36" r="14" fill="#1971C2"/><path d="M30 76 C30 60 70 60 70 76 Z" fill="#339AF0"/></svg>`,
        example: {
          ja: '木村さんは独身です。',
          hira: 'きむらさんはどくしんです。',
          vi: 'Anh Kimura vẫn còn độc thân.'
        }
      },
      {
        id: 'n5_l15_23',
        lesson: 15,
        lessonId: 15,
        level: 'N5',
        kanji: '特に',
        hanViet: 'Đặc',
        hiragana: 'とくに',
        romaji: 'tokuni',
        meaning: 'đặc biệt',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><polygon points="50,20 62,40 84,40 68,56 72,78 50,66 28,78 32,56 16,40 38,40" fill="#FAB005"/></svg>`,
        example: {
          ja: '特にすしが好きです。',
          hira: 'とくにすしがすきです。',
          vi: 'Đặc biệt tôi rất thích món Sushi.'
        }
      },
      {
        id: 'n5_l15_24',
        lesson: 15,
        lessonId: 15,
        level: 'N5',
        kanji: '思い出します',
        hanViet: 'Tư Xuất',
        hiragana: 'おもいだします',
        romaji: 'omoidashimasu',
        meaning: 'nhớ lại, hồi tưởng',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><circle cx="50" cy="48" r="22" fill="#7950F2"/><circle cx="40" cy="32" r="4" fill="#B197FC"/><circle cx="48" cy="24" r="6" fill="#B197FC"/><circle cx="62" cy="20" r="10" fill="#B197FC"/></svg>`,
        example: {
          ja: '家族を思い出します。',
          hira: 'かぞくをおもいだします。',
          vi: 'Tôi nhớ về gia đình.'
        }
      },
      {
        id: 'n5_l15_25',
        lesson: 15,
        lessonId: 15,
        level: 'N5',
        kanji: 'ご家族',
        hanViet: 'Gia Tộc',
        hiragana: 'ごかぞく',
        romaji: 'gokazoku',
        meaning: 'gia đình người khác',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><circle cx="34" cy="36" r="10" fill="#F59F00"/><circle cx="66" cy="36" r="10" fill="#F59F00"/><circle cx="50" cy="46" r="8" fill="#FCC419"/><path d="M20 76 C20 62 46 62 46 76 Z" fill="#F59F00"/><path d="M54 76 C54 62 80 62 80 76 Z" fill="#F59F00"/><path d="M38 76 C38 66 62 66 62 76 Z" fill="#FCC419"/></svg>`,
        example: {
          ja: 'ご家族はお元気ですか。',
          hira: 'ごかぞくはおげんきですか。',
          vi: 'Gia đình bạn có khỏe không?'
        }
      },
      {
        id: 'n5_l15_26',
        lesson: 15,
        lessonId: 15,
        level: 'N5',
        kanji: 'いらっしゃいます',
        hanViet: '',
        hiragana: 'いらっしゃいます',
        romaji: 'irasshaimasu',
        meaning: 'kính ngữ của います/いきます',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="36" r="14" fill="#0CA678"/><path d="M28 76 C28 58 72 58 72 76 Z" fill="#20C997"/><path d="M40 48 L60 48" stroke="#FFF" stroke-width="3" stroke-linecap="round"/></svg>`,
        example: {
          ja: '先生はいらっしゃいますか。',
          hira: 'せんせいはいらっしゃいますか。',
          vi: 'Thầy giáo có ở đây không ạ?'
        }
      },
      {
        id: 'n5_l15_27',
        lesson: 15,
        lessonId: 15,
        level: 'N5',
        kanji: '高校',
        hanViet: 'Cao Hiệu',
        hiragana: 'こうこう',
        romaji: 'koukou',
        meaning: 'trường THPT',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="24" y="32" width="52" height="44" rx="4" fill="#1864AB"/><text x="50" y="58" text-anchor="middle" font-size="16" font-weight="bold" fill="#FFF">高</text></svg>`,
        example: {
          ja: '高校で英語を教えます。',
          hira: 'こうこうでえいごをおしえます。',
          vi: 'Tôi dạy tiếng Anh ở trường cấp 3.'
        }
      },
      {
        id: 'n5_l15_28',
        lesson: 15,
        lessonId: 15,
        level: 'N5',
        kanji: '日本橋',
        hanViet: 'Nhật Bản Kiều',
        hiragana: 'にっぽんばし',
        romaji: 'nipponbashi',
        meaning: 'khu phố Nipponbashi ở Osaka',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><path d="M20 62 Q50 40 80 62" stroke="#D9480F" stroke-width="6" fill="none"/><line x1="32" y1="52" x2="32" y2="72" stroke="#D9480F" stroke-width="3"/><line x1="50" y1="46" x2="50" y2="72" stroke="#D9480F" stroke-width="3"/><line x1="68" y1="52" x2="68" y2="72" stroke="#D9480F" stroke-width="3"/></svg>`,
        example: {
          ja: '大阪の日本橋へ電気製品を買いに行きます。',
          hira: 'おおさかのにっぽんばしへでんきせいひんをかいにいきます。',
          vi: 'Tôi đến khu Nipponbashi ở Osaka để mua đồ điện tử.'
        }
      }
    ]
  },

  // --------------------------------------------------------------------------
  // BÃ€I 16: CHUá»–I HÃ€NH Äá»˜NG, Äá»€N CHÃ™A & GIAO Dá»ŠCH ATM
  // --------------------------------------------------------------------------
{
  lessonNumber: 16,
  level: 'N5',
  title: 'Bài 16: Chuỗi hành động, Đền chùa & Giao dịch ATM',
  topicVi: 'Cách đi tàu xe, Tham quan đền chùa & Rút tiền tại cây ATM',
  icon: '🏧',
  grammarPoint: 'Nối chuỗi hành động theo thứ tự: V1-て, V2-て, V3-ます. Sau khi làm xong việc 1 thì làm việc 2: V1-てから V2. Miêu tả tính chất liên tiếp: Tính từ -くて, -で. Chủ ngữ phụ: N1 は N2 が Tính từ.',
  vocab: [
    {
      id: 'n5_l16_01',
      lesson: 16,
      lessonId: 16,
      level: 'N5',
      kanji: 'シャワー',
      hanViet: 'Vòi sen',
      hiragana: 'シャワー',
      romaji: 'shawaa',
      meaning: 'vòi hoa sen, tắm vòi sen',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><path d="M25 75 L45 35 Q50 25 65 25 L75 25" stroke="#1C7ED6" stroke-width="5" fill="none" stroke-linecap="round"/><ellipse cx="40" cy="38" rx="14" ry="8" fill="#4DABF7" transform="rotate(-30 40 38)"/><line x1="30" y1="52" x2="25" y2="68" stroke="#339AF0" stroke-width="3" stroke-dasharray="2,3"/><line x1="38" y1="55" x2="35" y2="72" stroke="#339AF0" stroke-width="3" stroke-dasharray="2,3"/><line x1="46" y1="58" x2="45" y2="76" stroke="#339AF0" stroke-width="3" stroke-dasharray="2,3"/></svg>`,
      example: {
        ja: '毎朝シャワーを浴びてから朝ご飯を食べます。',
        hira: 'まいあさ シャワーを あびてから あさごはんを たべます。',
        vi: 'Mỗi sáng sau khi tắm vòi sen tôi mới ăn bữa sáng.'
      }
    },
    {
      id: 'n5_l16_02',
      lesson: 16,
      lessonId: 16,
      level: 'N5',
      kanji: '緑',
      hanViet: 'Lục',
      hiragana: 'みどり',
      romaji: 'midori',
      meaning: 'màu xanh lá cây, cây xanh',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><path d="M50 20 C32 20 22 40 32 60 C38 72 50 80 50 80 C50 80 62 72 68 60 C78 40 68 20 50 20 Z" fill="#40C057"/><path d="M50 28 L50 72" stroke="#2B8A3E" stroke-width="3"/><path d="M50 42 Q60 38 64 34" stroke="#2B8A3E" stroke-width="2" fill="none"/><path d="M50 54 Q40 50 36 46" stroke="#2B8A3E" stroke-width="2" fill="none"/></svg>`,
      example: {
        ja: 'この公園は緑が多くて空気がきれいです。',
        hira: 'この こうえんは みどりが おおくて くうきが きれいです。',
        vi: 'Công viên này nhiều cây xanh và không khí trong lành.'
      }
    },
    {
      id: 'n5_l16_03',
      lesson: 16,
      lessonId: 16,
      level: 'N5',
      kanji: 'お寺',
      hanViet: 'Tự',
      hiragana: 'おてら',
      romaji: 'otera',
      meaning: 'chùa, ngôi chùa Phật giáo',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><path d="M50 20 L50 26 M28 34 Q50 22 72 34 L66 40 L34 40 Z" fill="#D9480F" stroke="#D9480F" stroke-width="2"/><path d="M20 50 Q50 36 80 50 L74 58 L26 58 Z" fill="#E8590C"/><rect x="34" y="58" width="32" height="24" fill="#FFE8CC" stroke="#D9480F" stroke-width="2"/><rect x="44" y="66" width="12" height="16" fill="#846358"/></svg>`,
      example: {
        ja: '京都の有名なお寺を見学しました。',
        hira: 'きょうとの ゆうめいな おてらを けんがくしました。',
        vi: 'Tôi đã đi tham quan ngôi chùa nổi tiếng ở Kyoto.'
      }
    },
    {
      id: 'n5_l16_04',
      lesson: 16,
      lessonId: 16,
      level: 'N5',
      kanji: '神社',
      hanViet: 'Thần Xã',
      hiragana: 'じんじゃ',
      romaji: 'jinja',
      meaning: 'đền thờ Thần đạo Nhật Bản',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><path d="M18 30 Q50 24 82 30 L80 36 Q50 30 20 36 Z" fill="#E03131"/><rect x="25" y="40" width="50" height="5" fill="#E03131"/><line x1="32" y1="34" x2="32" y2="80" stroke="#C92A2A" stroke-width="6"/><line x1="68" y1="34" x2="68" y2="80" stroke="#C92A2A" stroke-width="6"/></svg>`,
      example: {
        ja: 'お正月に家族と神社へお祈りに行きます。',
        hira: 'おしょうがつに かぞくと じんじゃへ おいのりに いきます。',
        vi: 'Vào dịp Tết tôi cùng gia đình đến đền thờ Thần đạo để cầu may.'
      }
    },
    {
      id: 'n5_l16_05',
      lesson: 16,
      lessonId: 16,
      level: 'N5',
      kanji: '留学生',
      hanViet: 'Lưu Học Sinh',
      hiragana: 'りゅうがくせい',
      romaji: 'ryuugakusei',
      meaning: 'du học sinh',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="38" r="16" fill="#FFA94D"/><path d="M26 80 C26 62 74 62 74 80 Z" fill="#1971C2"/><polygon points="50,14 26,24 50,34 74,24" fill="#343A40"/><line x1="68" y1="26" x2="72" y2="38" stroke="#FAB005" stroke-width="2"/></svg>`,
      example: {
        ja: 'マリアさんはベトナムからの留学生です。',
        hira: 'マリアさんは ベトナムからの りゅうがくせいです。',
        vi: 'Maria là du học sinh đến từ Việt Nam.'
      }
    },
    {
      id: 'n5_l16_06',
      lesson: 16,
      lessonId: 16,
      level: 'N5',
      kanji: '番',
      hanViet: 'Phiên',
      hiragana: 'ばん',
      romaji: 'ban',
      meaning: 'số ~ (số hiệu, số thứ tự)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><circle cx="50" cy="50" r="30" fill="#FCC419"/><text x="50" y="60" font-size="28" font-weight="bold" fill="#FFF" text-anchor="middle">#1</text></svg>`,
      example: {
        ja: '何番のバスに乗ればいいですか。',
        hira: 'なんばんの バスに のれば いいですか。',
        vi: 'Tôi nên lên tuyến xe buýt số mấy thì được?'
      }
    },
    {
      id: 'n5_l16_07',
      lesson: 16,
      lessonId: 16,
      level: 'N5',
      kanji: 'どうやって',
      hanViet: 'Cách thức',
      hiragana: 'どうやって',
      romaji: 'dou yatte',
      meaning: 'làm thế nào, đi bằng cách nào',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><circle cx="50" cy="46" r="24" fill="#9775FA"/><text x="50" y="56" font-size="30" font-weight="bold" fill="#FFF" text-anchor="middle">?</text><path d="M30 76 L70 76" stroke="#7950F2" stroke-width="4" stroke-dasharray="4,4"/></svg>`,
      example: {
        ja: '大学までどうやって行きますか。',
        hira: 'だいがくまで どうやって いきますか。',
        vi: 'Làm thế nào để đi đến trường đại học?'
      }
    },
    {
      id: 'n5_l16_08',
      lesson: 16,
      lessonId: 16,
      level: 'N5',
      kanji: 'どの',
      hanViet: 'Nào',
      hiragana: 'どの',
      romaji: 'dono',
      meaning: 'cái nào (trong 3 cái trở lên)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><circle cx="30" cy="46" r="10" fill="#ADB5BD"/><circle cx="50" cy="42" r="12" fill="#FF922B"/><circle cx="70" cy="46" r="10" fill="#ADB5BD"/><path d="M50 64 L50 78 M42 70 L50 64 L58 70" stroke="#E8590C" stroke-width="3" fill="none"/></svg>`,
      example: {
        ja: 'サントスさんの傘はどの傘ですか。',
        hira: 'サントスさんの かさは どのかさですか。',
        vi: 'Cái ô của anh Santos là cái ô nào trong số này?'
      }
    },
    {
      id: 'n5_l16_09',
      lesson: 16,
      lessonId: 16,
      level: 'N5',
      kanji: 'まだまだです',
      hanViet: 'Vị',
      hiragana: 'まだまだです',
      romaji: 'madamada desu',
      meaning: 'không, tôi còn kém lắm / vẫn chưa ăn thua',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F1F3F5"/><circle cx="50" cy="44" r="18" fill="#FFA94D"/><path d="M35 76 Q50 64 65 76" stroke="#495057" stroke-width="4" fill="none"/><circle cx="43" cy="42" r="3" fill="#343A40"/><circle cx="57" cy="42" r="3" fill="#343A40"/><path d="M44 52 Q50 48 56 52" stroke="#343A40" stroke-width="2" fill="none"/></svg>`,
      example: {
        ja: '日本語が上手ですね。―いいえ、まだまだです。',
        hira: 'にほんごが じょうずですね。―いいえ、まだまだです。',
        vi: 'Tiếng Nhật của bạn giỏi quá! - Không, tôi còn kém lắm.'
      }
    },
    {
      id: 'n5_l16_10',
      lesson: 16,
      lessonId: 16,
      level: 'N5',
      kanji: 'お引き出しですか',
      hanViet: 'Dẫn Xuất',
      hiragana: 'おひきだしですか',
      romaji: 'ohikidashi desu ka',
      meaning: 'anh/chị rút tiền ạ?',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><rect x="25" y="25" width="50" height="50" rx="6" fill="#20C997"/><rect x="35" y="44" width="30" height="6" rx="2" fill="#099268"/><rect x="38" y="52" width="24" height="14" fill="#D3F9D8"/><text x="50" y="63" font-size="9" fill="#087F5B" text-anchor="middle" font-weight="bold">¥</text></svg>`,
      example: {
        ja: 'いらっしゃいませ。お引き出しですか。',
        hira: 'いらっしゃいませ。おひきだしですか。',
        vi: 'Kính chào quý khách. Quý khách muốn rút tiền ạ?'
      }
    },
    {
      id: 'n5_l16_11',
      lesson: 16,
      lessonId: 16,
      level: 'N5',
      kanji: 'まず',
      hanViet: 'Tiên',
      hiragana: 'まず',
      romaji: 'mazu',
      meaning: 'trước hết, đầu tiên',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="34" cy="50" r="16" fill="#339AF0"/><text x="34" y="56" font-size="16" font-weight="bold" fill="#FFF" text-anchor="middle">1</text><path d="M54 50 L72 50 M64 42 L72 50 L64 58" stroke="#1864AB" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      example: {
        ja: 'まず、キャッシュカードを入れてください。',
        hira: 'まず、キャッシュカードを いれてください。',
        vi: 'Trước hết, xin hãy đưa thẻ ATM vào máy.'
      }
    },
    {
      id: 'n5_l16_12',
      lesson: 16,
      lessonId: 16,
      level: 'N5',
      kanji: 'キャッシュカード',
      hanViet: 'Thẻ ATM',
      hiragana: 'キャッシュカード',
      romaji: 'kyasshu kaado',
      meaning: 'thẻ ngân hàng, thẻ ATM',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><rect x="20" y="32" width="60" height="36" rx="4" fill="#FD7E14"/><rect x="20" y="40" width="60" height="8" fill="#343A40"/><rect x="28" y="54" width="12" height="8" rx="2" fill="#FFE8CC"/></svg>`,
      example: {
        ja: 'キャッシュカードを機械に入れます。',
        hira: 'キャッシュカードを きかいに いれます。',
        vi: 'Tôi đưa thẻ ngân hàng vào máy rút tiền.'
      }
    },
    {
      id: 'n5_l16_13',
      lesson: 16,
      lessonId: 16,
      level: 'N5',
      kanji: '暗証番号',
      hanViet: 'Ám Chứng Phiên Hiệu',
      hiragana: 'あんしょうばんごう',
      romaji: 'anshoubangou',
      meaning: 'mã số bí mật PIN',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F8F9FA"/><rect x="26" y="34" width="48" height="32" rx="4" fill="#495057"/><circle cx="35" cy="50" r="4" fill="#FFD43B"/><circle cx="45" cy="50" r="4" fill="#FFD43B"/><circle cx="55" cy="50" r="4" fill="#FFD43B"/><circle cx="65" cy="50" r="4" fill="#FFD43B"/></svg>`,
      example: {
        ja: '次に暗証番号を４桁押してください。',
        hira: 'つぎに あんしょうばんごうを よんけた おしてください。',
        vi: 'Tiếp theo xin hãy bấm mã số PIN gồm 4 chữ số.'
      }
    },
    {
      id: 'n5_l16_14',
      lesson: 16,
      lessonId: 16,
      level: 'N5',
      kanji: '次に',
      hanViet: 'Thứ',
      hiragana: 'つぎに',
      romaji: 'tsugi ni',
      meaning: 'tiếp theo, sau đó',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><path d="M25 50 L65 50 M55 38 L67 50 L55 62" stroke="#40C057" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="75" cy="50" r="6" fill="#2B8A3E"/></svg>`,
      example: {
        ja: '次に、確認ボタンを押します。',
        hira: 'つぎに、かくにんボタンを おします。',
        vi: 'Tiếp theo, hãy nhấn nút xác nhận.'
      }
    },
    {
      id: 'n5_l16_15',
      lesson: 16,
      lessonId: 16,
      level: 'N5',
      kanji: '金額',
      hanViet: 'Kim Ngạch',
      hiragana: 'きんがく',
      romaji: 'kingaku',
      meaning: 'số tiền, khoản tiền',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><circle cx="50" cy="50" r="28" fill="#FAB005"/><text x="50" y="60" font-size="28" font-weight="bold" fill="#FFF" text-anchor="middle">¥</text></svg>`,
      example: {
        ja: '引き出したい金額を入力してください。',
        hira: 'ひきだしたい きんがくを にゅうりょくしてください。',
        vi: 'Xin hãy nhập số tiền bạn muốn rút.'
      }
    },
    {
      id: 'n5_l16_16',
      lesson: 16,
      lessonId: 16,
      level: 'N5',
      kanji: '確認',
      hanViet: 'Xác Nhận',
      hiragana: 'かくにん',
      romaji: 'kakunin',
      meaning: 'sự xác nhận, kiểm tra',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="50" r="30" fill="#20C997"/><path d="M38 50 L46 58 L64 40" stroke="#FFF" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      example: {
        ja: '内容を確認して、ボタンを押してください。',
        hira: 'ないようを かくにんして、ボタンを おしてください。',
        vi: 'Xin hãy xác nhận lại nội dung rồi bấm nút.'
      }
    }
  ]
},

  // --------------------------------------------------------------------------
  // BÃ€I 17: Sá»¨C KHá»ŽE, Bá»†NH VIá»†N & NGHÄ¨A Vá»¤
  // --------------------------------------------------------------------------
{
  lessonNumber: 17,
  level: 'N5',
  title: 'Bài 17: Sức khỏe, Bệnh viện & Nghĩa vụ',
  topicVi: 'Khám bệnh, Uống thuốc, Triệu chứng & Nghĩa vụ phải làm',
  icon: '🏥',
  grammarPoint: 'Cách chia Thể ない (Nai-form). Khuyên can lịch sự: V-ないでください (Xin đừng...). Nghĩa vụ bắt buộc: V-なければなりません (Phải làm...). Miễn trừ nghĩa vụ: V-なくてもいいです (Không cần làm cũng được). Giới hạn thời gian: N [thời gian] までに.',
  vocab: [
    {
      id: 'n5_l17_01',
      lesson: 17,
      lessonId: 17,
      level: 'N5',
      kanji: '持って来ます',
      hanViet: 'Trì Lai',
      hiragana: 'もってきます',
      romaji: 'mottekimasu',
      meaning: 'mang đến, đem theo',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="32" y="40" width="36" height="28" rx="4" fill="#339AF0"/><path d="M42 40 V32 Q50 26 58 32 V40" stroke="#1864AB" stroke-width="3" fill="none"/><path d="M68 54 L84 54 M78 48 L84 54 L78 60" stroke="#1971C2" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`,
      example: {
        ja: '明日は保険証を持って来てください。',
        hira: 'あしたは ほけんしょうを もってきてください。',
        vi: 'Ngày mai xin hãy mang theo thẻ bảo hiểm y tế.'
      }
    },
    {
      id: 'n5_l17_02',
      lesson: 17,
      lessonId: 17,
      level: 'N5',
      kanji: '心配します',
      hanViet: 'Tâm Phối',
      hiragana: 'しんぱいします',
      romaji: 'shinpai shimasu',
      meaning: 'lo lắng, bận tâm',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><circle cx="50" cy="46" r="20" fill="#FFA94D"/><path d="M38 42 Q44 38 46 42" stroke="#495057" stroke-width="2" fill="none"/><path d="M54 42 Q56 38 62 42" stroke="#495057" stroke-width="2" fill="none"/><path d="M44 56 Q50 50 56 56" stroke="#495057" stroke-width="2" fill="none"/><path d="M66 38 Q74 34 76 42" stroke="#E8590C" stroke-width="2" fill="none"/></svg>`,
      example: {
        ja: '心配しないでください、大丈夫ですよ。',
        hira: 'しんぱいしないでください、だいじょうぶですよ。',
        vi: 'Xin đừng lo lắng, mọi chuyện ổn cả thôi ạ.'
      }
    },
    {
      id: 'n5_l17_03',
      lesson: 17,
      lessonId: 17,
      level: 'N5',
      kanji: '残業します',
      hanViet: 'Tàn Nghiệp',
      hiragana: 'ざんぎょうします',
      romaji: 'zangyou shimasu',
      meaning: 'làm thêm giờ, tăng ca',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#343A40"/><circle cx="50" cy="46" r="22" fill="#495057" stroke="#FFD43B" stroke-width="2"/><line x1="50" y1="46" x2="50" y2="34" stroke="#FFD43B" stroke-width="3"/><line x1="50" y1="46" x2="62" y2="46" stroke="#FFD43B" stroke-width="3"/><rect x="36" y="72" width="28" height="6" fill="#868E96"/></svg>`,
      example: {
        ja: '今日は仕事がたくさんあるので残業します。',
        hira: 'きょうは しごとが たくさんあるので ざんぎょうします。',
        vi: 'Hôm nay vì có nhiều việc nên tôi phải làm thêm giờ.'
      }
    },
    {
      id: 'n5_l17_04',
      lesson: 17,
      lessonId: 17,
      level: 'N5',
      kanji: '出張します',
      hanViet: 'Xuất Trương',
      hiragana: 'しゅっちょうします',
      romaji: 'shucchou shimasu',
      meaning: 'đi công tác',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="30" y="44" width="40" height="30" rx="3" fill="#1C7ED6"/><path d="M42 44 V36 Q50 30 58 36 V44" stroke="#1864AB" stroke-width="3" fill="none"/><line x1="30" y1="56" x2="70" y2="56" stroke="#FFF" stroke-width="2"/><path d="M65 24 L85 24 L75 34 Z" fill="#4DABF7"/></svg>`,
      example: {
        ja: '来週東京へ出張しなければなりません。',
        hira: 'らいしゅう とうきょうへ しゅっちょうしなければなりません。',
        vi: 'Tuần sau tôi phải đi công tác ở Tokyo.'
      }
    },
    {
      id: 'n5_l17_05',
      lesson: 17,
      lessonId: 17,
      level: 'N5',
      kanji: '飲みます[薬を～]',
      hanViet: 'Ẩm Dược',
      hiragana: 'のみます[くすりを～]',
      romaji: 'nomimasu [kusuri o~]',
      meaning: 'uống thuốc',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><rect x="42" y="24" width="26" height="48" rx="13" fill="#FF6B6B" transform="rotate(30 55 48)"/><line x1="38" y1="48" x2="68" y2="48" stroke="#FFF" stroke-width="3" transform="rotate(30 53 48)"/><circle cx="34" cy="62" r="6" fill="#FA5252"/></svg>`,
      example: {
        ja: '一日三回、食後に薬を飲みます。',
        hira: 'いちにち さんかい、しょくごに くすりを のみます。',
        vi: 'Mỗi ngày 3 lần, tôi uống thuốc sau bữa ăn.'
      }
    },
    {
      id: 'n5_l17_06',
      lesson: 17,
      lessonId: 17,
      level: 'N5',
      kanji: '入ります[お風呂に～]',
      hanViet: 'Nhập Phong Lữ',
      hiragana: 'はいります[おふろに～]',
      romaji: 'hairimasu [ofuro ni~]',
      meaning: 'tắm bồn, ngâm mình trong bồn tắm',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><ellipse cx="50" cy="65" rx="30" ry="14" fill="#339AF0"/><path d="M42 48 Q46 36 44 26" stroke="#74C0FC" stroke-width="3" fill="none"/><path d="M54 48 Q58 36 56 26" stroke="#74C0FC" stroke-width="3" fill="none"/><circle cx="50" cy="54" r="8" fill="#FFA94D"/></svg>`,
      example: {
        ja: '熱があるときはお風呂に入ってはいけません。',
        hira: 'ねつが あるときは おふろに はいってはいけません。',
        vi: 'Khi bị sốt thì không được ngâm bồn tắm.'
      }
    },
    {
      id: 'n5_l17_07',
      lesson: 17,
      lessonId: 17,
      level: 'N5',
      kanji: '大切[な]',
      hanViet: 'Đại Thiết',
      hiragana: 'たいせつ[な]',
      romaji: 'taisetsu [na]',
      meaning: 'quan trọng, quý giá',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF0F6"/><path d="M50 30 C40 18 20 25 20 45 C20 65 50 82 50 82 C50 82 80 65 80 45 C80 25 60 18 50 30 Z" fill="#F06595"/><circle cx="42" cy="38" r="4" fill="#FFF" opacity="0.6"/></svg>`,
      example: {
        ja: '健康保険証はとても大切です。',
        hira: 'けんこうほけんしょうは とても たいせつです。',
        vi: 'Thẻ bảo hiểm y tế là đồ rất quan trọng.'
      }
    },
    {
      id: 'n5_l17_08',
      lesson: 17,
      lessonId: 17,
      level: 'N5',
      kanji: '大丈夫[な]',
      hanViet: 'Đại Trượng Phu',
      hiragana: 'だいじょうぶ[な]',
      romaji: 'daijoubu [na]',
      meaning: 'không sao, ổn thỏa, yên tâm',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="50" r="30" fill="#20C997"/><path d="M38 50 L46 58 L62 42" stroke="#FFF" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      example: {
        ja: '薬を飲んだから、もう大丈夫です。',
        hira: 'くすりを のんだから、もう だいじょうぶです。',
        vi: 'Vì tôi đã uống thuốc rồi nên bây giờ ổn rồi ạ.'
      }
    },
    {
      id: 'n5_l17_09',
      lesson: 17,
      lessonId: 17,
      level: 'N5',
      kanji: '危ない',
      hanViet: 'Nguy',
      hiragana: 'あぶない',
      romaji: 'abunai',
      meaning: 'nguy hiểm',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><polygon points="50,20 84,76 16,76" fill="#F59F00"/><line x1="50" y1="38" x2="50" y2="58" stroke="#FFF" stroke-width="5" stroke-linecap="round"/><circle cx="50" cy="68" r="3.5" fill="#FFF"/></svg>`,
      example: {
        ja: '夜道は危ないですから気をつけてください。',
        hira: 'よみちは あぶないですから きをつけてください。',
        vi: 'Đường đêm rất nguy hiểm nên bạn hãy cẩn thận nhé.'
      }
    },
    {
      id: 'n5_l17_10',
      lesson: 17,
      lessonId: 17,
      level: 'N5',
      kanji: '問題',
      hanViet: 'Vấn Đề',
      hiragana: 'もんだい',
      romaji: 'mondai',
      meaning: 'vấn đề, câu hỏi bài tập',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><circle cx="50" cy="48" r="26" fill="#7950F2"/><text x="50" y="58" font-size="30" font-weight="bold" fill="#FFF" text-anchor="middle">Q</text></svg>`,
      example: {
        ja: 'テストのこの問題は少し難しいです。',
        hira: 'テストの このもんだいは すこし むずかしいです。',
        vi: 'Câu hỏi này trong bài kiểm tra hơi khó.'
      }
    },
    {
      id: 'n5_l17_11',
      lesson: 17,
      lessonId: 17,
      level: 'N5',
      kanji: '答え',
      hanViet: 'Đáp',
      hiragana: 'こたえ',
      romaji: 'kotae',
      meaning: 'câu trả lời, lời giải, đáp án',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><circle cx="50" cy="48" r="26" fill="#40C057"/><text x="50" y="58" font-size="30" font-weight="bold" fill="#FFF" text-anchor="middle">A</text></svg>`,
      example: {
        ja: '先生、この問題の答えを教えてください。',
        hira: 'せんせい、このもんだいの こたえを おしえてください。',
        vi: 'Thưa thầy, xin hãy chỉ cho em đáp án của câu hỏi này.'
      }
    },
    {
      id: 'n5_l17_12',
      lesson: 17,
      lessonId: 17,
      level: 'N5',
      kanji: '禁煙',
      hanViet: 'Cấm Yên',
      hiragana: 'きんえん',
      romaji: 'kin\'en',
      meaning: 'cấm hút thuốc',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><circle cx="50" cy="50" r="32" stroke="#E03131" stroke-width="6" fill="none"/><line x1="28" y1="28" x2="72" y2="72" stroke="#E03131" stroke-width="6"/><rect x="36" y="46" width="28" height="8" rx="1" fill="#868E96"/></svg>`,
      example: {
        ja: '病院の中は禁煙ですから吸わないでください。',
        hira: 'びょういんの なかは きんえんですから すわないでください。',
        vi: 'Trong bệnh viện cấm hút thuốc nên xin đừng hút ở đây.'
      }
    },
    {
      id: 'n5_l17_13',
      lesson: 17,
      lessonId: 17,
      level: 'N5',
      kanji: '健康保険証',
      hanViet: 'Kiện Khang Bảo Hiểm Chứng',
      hiragana: 'けんこうほけんしょう',
      romaji: 'kenkou hokenshou',
      meaning: 'thẻ bảo hiểm y tế',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="22" y="30" width="56" height="40" rx="4" fill="#339AF0"/><circle cx="36" cy="50" r="8" fill="#FFF"/><line x1="50" y1="44" x2="70" y2="44" stroke="#FFF" stroke-width="2.5"/><line x1="50" y1="52" x2="66" y2="52" stroke="#FFF" stroke-width="2.5"/></svg>`,
      example: {
        ja: '受付で健康保険証を見せてください。',
        hira: 'うけつけで けんこうほけんしょうを みせてください。',
        vi: 'Xin hãy xuất trình thẻ bảo hiểm y tế tại quầy tiếp tân.'
      }
    },
    {
      id: 'n5_l17_14',
      lesson: 17,
      lessonId: 17,
      level: 'N5',
      kanji: '風邪',
      hanViet: 'Phong Tà',
      hiragana: 'かぜ',
      romaji: 'kaze',
      meaning: 'cảm, cảm cúm',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="46" r="22" fill="#FFA94D"/><rect x="38" y="48" width="24" height="14" rx="2" fill="#FFF"/><line x1="38" y1="54" x2="30" y2="50" stroke="#FFF" stroke-width="2"/><line x1="62" y1="54" x2="70" y2="50" stroke="#FFF" stroke-width="2"/><circle cx="43" cy="40" r="3" fill="#495057"/><circle cx="57" cy="40" r="3" fill="#495057"/></svg>`,
      example: {
        ja: '風邪をひいたので病院へ行きます。',
        hira: 'かぜを ひいたので びょういんへ いきます。',
        vi: 'Vì bị cảm cúm nên tôi đi đến bệnh viện.'
      }
    },
    {
      id: 'n5_l17_15',
      lesson: 17,
      lessonId: 17,
      level: 'N5',
      kanji: '熱',
      hanViet: 'Nhiệt',
      hiragana: 'ねつ',
      romaji: 'netsu',
      meaning: 'sốt, nhiệt độ cơ thể cao',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><rect x="46" y="24" width="8" height="40" rx="4" fill="#FA5252"/><circle cx="50" cy="68" r="12" fill="#E03131"/><line x1="47" y1="36" x2="43" y2="36" stroke="#FA5252" stroke-width="2"/><line x1="47" y1="44" x2="41" y2="44" stroke="#FA5252" stroke-width="2"/><line x1="47" y1="52" x2="43" y2="52" stroke="#FA5252" stroke-width="2"/></svg>`,
      example: {
        ja: '今朝から高い熱があります。',
        hira: 'けさから たかいねつが あります。',
        vi: 'Từ sáng nay tôi đã bị sốt cao.'
      }
    },
    {
      id: 'n5_l17_16',
      lesson: 17,
      lessonId: 17,
      level: 'N5',
      kanji: '病気',
      hanViet: 'Bệnh Khí',
      hiragana: 'びょうき',
      romaji: 'byouki',
      meaning: 'ốm, bệnh tật',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><rect x="30" y="32" width="40" height="40" rx="6" fill="#FD7E14"/><rect x="46" y="38" width="8" height="28" fill="#FFF"/><rect x="36" y="48" width="28" height="8" fill="#FFF"/></svg>`,
      example: {
        ja: '病気ですから会社を休みます。',
        hira: 'びょうきですから かいしゃを やすみます。',
        vi: 'Vì bị ốm nên tôi xin nghỉ làm ở công ty.'
      }
    },
    {
      id: 'n5_l17_17',
      lesson: 17,
      lessonId: 17,
      level: 'N5',
      kanji: '薬',
      hanViet: 'Dược',
      hiragana: 'くすり',
      romaji: 'kusuri',
      meaning: 'thuốc uống, dược phẩm',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="34" y="26" width="32" height="48" rx="16" fill="#4DABF7"/><line x1="34" y1="50" x2="66" y2="50" stroke="#FFF" stroke-width="3"/><circle cx="50" cy="62" r="5" fill="#FFF"/></svg>`,
      example: {
        ja: '頭が痛いので薬を買いました。',
        hira: 'あたまが いたいので くすりを かいました。',
        vi: 'Vì đau đầu nên tôi đã mua thuốc uống.'
      }
    },
    {
      id: 'n5_l17_18',
      lesson: 17,
      lessonId: 17,
      level: 'N5',
      kanji: 'お風呂',
      hanViet: 'Phong Lữ',
      hiragana: 'おふろ',
      romaji: 'ofuro',
      meaning: 'bồn tắm kiểu Nhật',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><path d="M22 52 Q50 48 78 52 L74 72 Q50 78 26 72 Z" fill="#20C997"/><path d="M40 44 Q44 32 40 24" stroke="#66D9E8" stroke-width="3" fill="none"/><path d="M52 44 Q56 32 52 24" stroke="#66D9E8" stroke-width="3" fill="none"/></svg>`,
      example: {
        ja: '日本の家にはお風呂があります。',
        hira: 'にほんの いえには おふろが あります。',
        vi: 'Trong hầu hết các ngôi nhà Nhật Bản đều có bồn tắm.'
      }
    },
    {
      id: 'n5_l17_19',
      lesson: 17,
      lessonId: 17,
      level: 'N5',
      kanji: '上着',
      hanViet: 'Thượng Trước',
      hiragana: 'うわぎ',
      romaji: 'uwagi',
      meaning: 'áo khoác ngoài',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><path d="M30 30 L50 44 L70 30 L80 46 L70 50 L70 76 L30 76 L30 50 L20 46 Z" fill="#F59F00"/><line x1="50" y1="44" x2="50" y2="76" stroke="#D9480F" stroke-width="2"/></svg>`,
      example: {
        ja: '外は寒いですから上着を着てください。',
        hira: 'そとは さむいですから うわぎを きてください。',
        vi: 'Bên ngoài trời rét nên bạn hãy mặc áo khoác vào nhé.'
      }
    },
    {
      id: 'n5_l17_20',
      lesson: 17,
      lessonId: 17,
      level: 'N5',
      kanji: '下着',
      hanViet: 'Hạ Trước',
      hiragana: 'したぎ',
      romaji: 'shitagi',
      meaning: 'quần áo lót',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F8F9FA"/><path d="M34 30 L44 38 L56 38 L66 30 L74 44 L66 48 L66 74 L34 74 L34 48 L26 44 Z" fill="#CED4DA"/><circle cx="50" cy="50" r="2" fill="#868E96"/></svg>`,
      example: {
        ja: 'デパートで新しい下着を買いました。',
        hira: 'デパートで あたらしい したぎを かいました。',
        vi: 'Tôi đã mua quần áo lót mới ở trung tâm thương mại.'
      }
    },
    {
      id: 'n5_l17_21',
      lesson: 17,
      lessonId: 17,
      level: 'N5',
      kanji: '先生',
      hanViet: 'Tiên Sinh',
      hiragana: 'せんせい',
      romaji: 'sensei',
      meaning: 'bác sĩ (cách bệnh nhân gọi bác sĩ)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="38" r="16" fill="#FFA94D"/><path d="M26 80 C26 62 74 62 74 80 Z" fill="#FFF" stroke="#4DABF7" stroke-width="2"/><path d="M42 56 Q50 64 58 56" stroke="#495057" stroke-width="2" fill="none"/><circle cx="50" cy="66" r="4" fill="#339AF0"/></svg>`,
      example: {
        ja: '先生、喉が痛くて熱があります。',
        hira: 'せんせい、のどが いたくて ねつが あります。',
        vi: 'Thưa bác sĩ, tôi bị đau họng và phát sốt.'
      }
    },
    {
      id: 'n5_l17_22',
      lesson: 17,
      lessonId: 17,
      level: 'N5',
      kanji: '二、三日',
      hanViet: 'Nhị Tam Nhật',
      hiragana: 'にさんにち',
      romaji: 'ni-san nichi',
      meaning: 'hai ba ngày, vài ngày',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><rect x="25" y="30" width="50" height="44" rx="4" fill="#FF922B"/><rect x="25" y="30" width="50" height="12" fill="#E8590C"/><text x="50" y="60" font-size="16" font-weight="bold" fill="#FFF" text-anchor="middle">2~3日</text></svg>`,
      example: {
        ja: '二、三日ゆっくり休んでください。',
        hira: 'にさんにち ゆっくり やすんでください。',
        vi: 'Hãy nghỉ ngơi tĩnh dưỡng trong vài ngày nhé.'
      }
    },
    {
      id: 'n5_l17_23',
      lesson: 17,
      lessonId: 17,
      level: 'N5',
      kanji: '～までに',
      hanViet: 'Hạn định',
      hiragana: '～までに',
      romaji: '~made ni',
      meaning: 'trước thời hạn ~, muộn nhất là ~',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><circle cx="50" cy="46" r="22" fill="#FFF" stroke="#FA5252" stroke-width="4"/><line x1="50" y1="46" x2="50" y2="34" stroke="#FA5252" stroke-width="3"/><line x1="50" y1="46" x2="60" y2="46" stroke="#FA5252" stroke-width="3"/><line x1="68" y1="24" x2="68" y2="68" stroke="#E03131" stroke-width="4"/></svg>`,
      example: {
        ja: '金曜日までにレポートを出さなければなりません。',
        hira: 'きんようびまでに レポートを ださなければなりません。',
        vi: 'Tôi phải nộp bài báo cáo trước ngày thứ Sáu.'
      }
    },
    {
      id: 'n5_l17_24',
      lesson: 17,
      lessonId: 17,
      level: 'N5',
      kanji: 'ですから',
      hanViet: 'Liên từ',
      hiragana: 'ですから',
      romaji: 'desukara',
      meaning: 'vì thế, do đó, vì vậy',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><path d="M30 50 L60 50 M50 38 L62 50 L50 62" stroke="#40C057" stroke-width="5" stroke-linecap="round"/><circle cx="72" cy="50" r="4" fill="#2B8A3E"/></svg>`,
      example: {
        ja: '雨が降っています。ですから傘を持っていきます。',
        hira: 'あめが ふっています。ですから かさを もっていきます。',
        vi: 'Trời đang mưa. Vì thế tôi mang theo ô.'
      }
    },
    {
      id: 'n5_l17_25',
      lesson: 17,
      lessonId: 17,
      level: 'N5',
      kanji: 'どうしましたか',
      hanViet: 'Thăm hỏi',
      hiragana: 'どうしましたか',
      romaji: 'dou shimashita ka',
      meaning: 'anh/chị bị làm sao thế?',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><circle cx="50" cy="46" r="22" fill="#9775FA"/><text x="50" y="56" font-size="28" font-weight="bold" fill="#FFF" text-anchor="middle">?</text></svg>`,
      example: {
        ja: '顔色が悪いですね。どうしましたか。',
        hira: 'かおいろが わるいですね。どうしましたか。',
        vi: 'Sắc mặt anh trông kém quá. Anh bị làm sao vậy?'
      }
    },
    {
      id: 'n5_l17_26',
      lesson: 17,
      lessonId: 17,
      level: 'N5',
      kanji: '痛いです',
      hanViet: 'Thống',
      hiragana: 'いたいです',
      romaji: 'itai desu',
      meaning: 'bị đau, nhức',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><circle cx="50" cy="46" r="20" fill="#FFA94D"/><path d="M40 40 L44 44 M44 40 L40 44" stroke="#495057" stroke-width="2"/><path d="M56 40 L60 44 M60 40 L56 44" stroke="#495057" stroke-width="2"/><path d="M44 56 Q50 50 56 56" stroke="#E03131" stroke-width="3" fill="none"/><polygon points="26,30 36,36 30,42" fill="#FA5252"/></svg>`,
      example: {
        ja: '昨日からお腹が痛いです。',
        hira: 'きのうから おなかが いたいです。',
        vi: 'Từ hôm qua bụng tôi đã bị đau.'
      }
    },
    {
      id: 'n5_l17_27',
      lesson: 17,
      lessonId: 17,
      level: 'N5',
      kanji: '喉',
      hanViet: 'Hầu',
      hiragana: 'のど',
      romaji: 'nodo',
      meaning: 'cổ họng',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><path d="M38 30 C38 48 42 68 50 78 C58 68 62 48 62 30" stroke="#FF922B" stroke-width="4" fill="none"/><circle cx="50" cy="52" r="8" fill="#FA5252"/></svg>`,
      example: {
        ja: '風邪をひいて喉が痛いです。',
        hira: 'かぜを ひいて のどが いたいです。',
        vi: 'Tôi bị cảm và đau rát ở cổ họng.'
      }
    },
    {
      id: 'n5_l17_28',
      lesson: 17,
      lessonId: 17,
      level: 'N5',
      kanji: 'お大事に',
      hanViet: 'Đại Sự',
      hiragana: 'おだいじに',
      romaji: 'odaiji ni',
      meaning: 'anh/chị nhớ giữ gìn sức khỏe / chúc mau khỏe lại',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><path d="M50 28 C42 18 24 24 24 42 C24 62 50 78 50 78 C50 78 76 62 76 42 C76 24 58 18 50 28 Z" fill="#51CF66"/><path d="M38 48 L46 56 L62 38" stroke="#FFF" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`,
      example: {
        ja: '無理をしないで、どうぞお大事に。',
        hira: 'むりを しないで、どうぞ おだいじに。',
        vi: 'Xin đừng làm việc quá sức nhé, chúc anh mau khỏe lại!'
      }
    }
  ]
},

  // --------------------------------------------------------------------------
  // BÃ€I 18: KHáº¢ NÄ‚NG, Sá»ž THÃCH & CHá»¨C Vá»¤
  // --------------------------------------------------------------------------
{
  lessonNumber: 18,
  level: 'N5',
  title: 'Bài 18: Khả năng, Sở thích & Chức vụ',
  topicVi: 'Khả năng, Sở thích cá nhân, Nghề nghiệp chức vụ & Động vật',
  icon: '🎯',
  grammarPoint: 'Động từ Thể từ điển (Jishokei). Diễn tả khả năng làm việc gì: V-る ことができます. Nói về sở thích cá nhân: 趣味は V-ることです. Trước khi làm việc gì: V1-る まえに V2 / Danh từ の まえに.',
  vocab: [
    {
      id: 'n5_l18_01',
      lesson: 18,
      lessonId: 18,
      level: 'N5',
      kanji: '出来ます',
      hanViet: 'Xuất Lai',
      hiragana: 'できます',
      romaji: 'dekimasu',
      meaning: 'có thể làm được',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#D3F9D8"/><polygon points="50,22 80,70 20,70" fill="#40C057"/><circle cx="50" cy="52" r="8" fill="#FFF"/></svg>`,
      example: {
        ja: 'ミラーさんは日本語で会話が出来ます。',
        hira: 'ミラーさんは にほんごで かいわが できます。',
        vi: 'Anh Miller có thể hội thoại trôi chảy bằng tiếng Nhật.'
      }
    },
    {
      id: 'n5_l18_02',
      lesson: 18,
      lessonId: 18,
      level: 'N5',
      kanji: '洗います',
      hanViet: 'Tiển',
      hiragana: 'あらいます',
      romaji: 'araimasu',
      meaning: 'rửa, giặt giũ',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><ellipse cx="50" cy="55" rx="22" ry="14" fill="#339AF0"/><circle cx="42" cy="38" r="6" fill="#74C0FC"/><circle cx="56" cy="34" r="8" fill="#4DABF7"/><circle cx="64" cy="44" r="5" fill="#A5D8FF"/></svg>`,
      example: {
        ja: 'ご飯を食べる前に手を洗います。',
        hira: 'ごはんを たべるまえに てを あらいます。',
        vi: 'Trước khi ăn cơm tôi rửa sạch tay.'
      }
    },
    {
      id: 'n5_l18_03',
      lesson: 18,
      lessonId: 18,
      level: 'N5',
      kanji: '弾きます',
      hanViet: 'Dẫn',
      hiragana: 'ひきます',
      romaji: 'hikimasu',
      meaning: 'kéo, chơi đàn (piano, guitar)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><rect x="25" y="34" width="50" height="34" rx="3" fill="#343A40"/><line x1="33" y1="34" x2="33" y2="54" stroke="#FFF" stroke-width="4"/><line x1="42" y1="34" x2="42" y2="54" stroke="#FFF" stroke-width="4"/><line x1="51" y1="34" x2="51" y2="54" stroke="#FFF" stroke-width="4"/><line x1="60" y1="34" x2="60" y2="54" stroke="#FFF" stroke-width="4"/><line x1="69" y1="34" x2="69" y2="54" stroke="#FFF" stroke-width="4"/></svg>`,
      example: {
        ja: '弟は上手にギターを弾くことができます。',
        hira: 'おとうとは じょうずに ギターを ひくことができます。',
        vi: 'Em trai tôi có thể chơi đàn guitar rất giỏi.'
      }
    },
    {
      id: 'n5_l18_04',
      lesson: 18,
      lessonId: 18,
      level: 'N5',
      kanji: '歌います',
      hanViet: 'Ca',
      hiragana: 'うたいます',
      romaji: 'utaimasu',
      meaning: 'hát, ca hát',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><ellipse cx="50" cy="38" rx="10" ry="14" fill="#FA5252"/><path d="M44 50 L46 72 L54 72 L56 50 Z" fill="#868E96"/><path d="M64 28 C74 24 74 36 68 40" stroke="#FA5252" stroke-width="3" fill="none"/></svg>`,
      example: {
        ja: 'カラオケで日本の歌を歌いました。',
        hira: 'カラオケで にほんのうたを うたいました。',
        vi: 'Tôi đã hát những bài hát tiếng Nhật tại quán karaoke.'
      }
    },
    {
      id: 'n5_l18_05',
      lesson: 18,
      lessonId: 18,
      level: 'N5',
      kanji: '集めます',
      hanViet: 'Tập',
      hiragana: 'あつめます',
      romaji: 'atsumemasu',
      meaning: 'sưu tầm, thu thập, gom lại',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><rect x="25" y="35" width="22" height="26" rx="2" fill="#FFA94D"/><rect x="38" y="42" width="24" height="28" rx="2" fill="#FF922B"/><rect x="52" y="32" width="22" height="26" rx="2" fill="#FD7E14"/></svg>`,
      example: {
        ja: '世界中の切手を集めるのが趣味です。',
        hira: 'せかいじゅうの きってを あつめるのが しゅみです。',
        vi: 'Sở thích của tôi là sưu tập tem từ khắp nơi trên thế giới.'
      }
    },
    {
      id: 'n5_l18_06',
      lesson: 18,
      lessonId: 18,
      level: 'N5',
      kanji: '捨てます',
      hanViet: 'Xả',
      hiragana: 'すてます',
      romaji: 'sutemasu',
      meaning: 'vứt bỏ, vứt rác',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F1F3F5"/><path d="M34 40 L66 40 L62 76 L38 76 Z" fill="#868E96"/><line x1="30" y1="36" x2="70" y2="36" stroke="#495057" stroke-width="3"/><rect x="46" y="30" width="8" height="6" fill="#495057"/><circle cx="50" cy="48" r="4" fill="#FA5252"/></svg>`,
      example: {
        ja: 'ここにゴミを捨ててはいけません。',
        hira: 'ここに ゴミを すてては いけません。',
        vi: 'Không được vứt rác ở chỗ này.'
      }
    },
    {
      id: 'n5_l18_07',
      lesson: 18,
      lessonId: 18,
      level: 'N5',
      kanji: '換えます',
      hanViet: 'Hoán',
      hiragana: 'かえます',
      romaji: 'kaemasu',
      meaning: 'đổi, hoán đổi ngoại tệ',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="36" cy="50" r="14" fill="#20C997"/><text x="36" y="55" font-size="12" fill="#FFF" font-weight="bold" text-anchor="middle">$</text><circle cx="64" cy="50" r="14" fill="#12B886"/><text x="64" y="55" font-size="12" fill="#FFF" font-weight="bold" text-anchor="middle">¥</text><path d="M42 36 Q50 30 58 36" stroke="#087F5B" stroke-width="2" fill="none"/><path d="M58 64 Q50 70 42 64" stroke="#087F5B" stroke-width="2" fill="none"/></svg>`,
      example: {
        ja: '空港でベトナムドンを日本円に換えます。',
        hira: 'くうこうで ベトナムドンを にほんえんに かえます。',
        vi: 'Tôi đổi tiền Việt Nam Đồng sang Yên Nhật ở sân bay.'
      }
    },
    {
      id: 'n5_l18_08',
      lesson: 18,
      lessonId: 18,
      level: 'N5',
      kanji: '運転します',
      hanViet: 'Vận Chuyển',
      hiragana: 'うんてんします',
      romaji: 'unten shimasu',
      meaning: 'lái xe',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="50" r="28" stroke="#1C7ED6" stroke-width="6" fill="none"/><circle cx="50" cy="50" r="8" fill="#1864AB"/><line x1="50" y1="22" x2="50" y2="42" stroke="#1C7ED6" stroke-width="4"/><line x1="26" y1="62" x2="44" y2="54" stroke="#1C7ED6" stroke-width="4"/><line x1="74" y1="62" x2="56" y2="54" stroke="#1C7ED6" stroke-width="4"/></svg>`,
      example: {
        ja: '車を運転することができますか。',
        hira: 'くるまを うんてんする ことが できますか。',
        vi: 'Bạn có biết lái xe ô tô không?'
      }
    },
    {
      id: 'n5_l18_09',
      lesson: 18,
      lessonId: 18,
      level: 'N5',
      kanji: '予約します',
      hanViet: 'Dự Ước',
      hiragana: 'よやくします',
      romaji: 'yoyaku shimasu',
      meaning: 'đặt chỗ trước, hẹn trước',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><rect x="25" y="28" width="50" height="46" rx="4" fill="#FF922B"/><rect x="25" y="28" width="50" height="12" fill="#D9480F"/><circle cx="42" cy="54" r="4" fill="#FFF"/><line x1="52" y1="54" x2="66" y2="54" stroke="#FFF" stroke-width="3"/></svg>`,
      example: {
        ja: 'インターネットで新幹線の切符を予約しました。',
        hira: 'インターネットで しんかんせんの きっぷを よやくしました。',
        vi: 'Tôi đã đặt vé tàu Shinkansen qua mạng internet.'
      }
    },
    {
      id: 'n5_l18_10',
      lesson: 18,
      lessonId: 18,
      level: 'N5',
      kanji: '見学します',
      hanViet: 'Kiến Học',
      hiragana: 'けんがくします',
      romaji: 'kengaku shimasu',
      meaning: 'kiến tập, tham quan học tập',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><circle cx="44" cy="46" r="16" fill="#845EF7"/><circle cx="44" cy="46" r="8" fill="#FFF"/><line x1="56" y1="58" x2="74" y2="76" stroke="#5F3DC4" stroke-width="6" stroke-linecap="round"/></svg>`,
      example: {
        ja: '自動車の工場を見学したいです。',
        hira: 'じどうしゃの こうじょうを けんがくしたいです。',
        vi: 'Tôi muốn đi tham quan kiến tập tại nhà máy chế tạo ô tô.'
      }
    },
    {
      id: 'n5_l18_11',
      lesson: 18,
      lessonId: 18,
      level: 'N5',
      kanji: 'ピアノ',
      hanViet: 'Dương cầm',
      hiragana: 'ピアノ',
      romaji: 'piano',
      meaning: 'đàn piano, dương cầm',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F8F9FA"/><rect x="22" y="32" width="56" height="38" rx="4" fill="#212529"/><rect x="26" y="44" width="48" height="22" fill="#FFF"/><rect x="32" y="44" width="4" height="12" fill="#212529"/><rect x="40" y="44" width="4" height="12" fill="#212529"/><rect x="52" y="44" width="4" height="12" fill="#212529"/><rect x="60" y="44" width="4" height="12" fill="#212529"/></svg>`,
      example: {
        ja: '子供のときからピアノを習っています。',
        hira: 'こどもの ときから ピアノを ならっています。',
        vi: 'Tôi đã học đàn piano từ khi còn nhỏ.'
      }
    },
    {
      id: 'n5_l18_12',
      lesson: 18,
      lessonId: 18,
      level: 'N5',
      kanji: 'ーメートル',
      hanViet: 'Mét',
      hiragana: 'ーメートル',
      romaji: '~meetoru',
      meaning: 'mét (đơn vị đo độ dài)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><rect x="20" y="44" width="60" height="16" rx="2" fill="#FCC419"/><line x1="28" y1="44" x2="28" y2="52" stroke="#495057" stroke-width="2"/><line x1="36" y1="44" x2="36" y2="50" stroke="#495057" stroke-width="2"/><line x1="44" y1="44" x2="44" y2="52" stroke="#495057" stroke-width="2"/><line x1="52" y1="44" x2="52" y2="50" stroke="#495057" stroke-width="2"/><line x1="60" y1="44" x2="60" y2="52" stroke="#495057" stroke-width="2"/></svg>`,
      example: {
        ja: '私はプールで百メートル泳ぐことができます。',
        hira: 'わたしは プールで ひゃくメートル およぐことが できます。',
        vi: 'Tôi có thể bơi 100 mét trong hồ bơi.'
      }
    },
    {
      id: 'n5_l18_13',
      lesson: 18,
      lessonId: 18,
      level: 'N5',
      kanji: '国際～',
      hanViet: 'Quốc Tế',
      hiragana: 'こくさい～',
      romaji: 'kokusai~',
      meaning: 'quốc tế ~',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="50" r="28" stroke="#1971C2" stroke-width="4" fill="none"/><ellipse cx="50" cy="50" rx="14" ry="28" stroke="#1971C2" stroke-width="3" fill="none"/><line x1="22" y1="50" x2="78" y2="50" stroke="#1971C2" stroke-width="3"/></svg>`,
      example: {
        ja: '彼は来週国際会議に出席します。',
        hira: 'かれは らいしゅう こくさいかいぎに しゅっせきします。',
        vi: 'Anh ấy sẽ tham dự một hội nghị quốc tế vào tuần sau.'
      }
    },
    {
      id: 'n5_l18_14',
      lesson: 18,
      lessonId: 18,
      level: 'N5',
      kanji: '現金',
      hanViet: 'Hiện Kim',
      hiragana: 'げんきん',
      romaji: 'genkin',
      meaning: 'tiền mặt',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><rect x="22" y="34" width="56" height="32" rx="3" fill="#20C997"/><circle cx="50" cy="50" r="9" fill="#FFF"/><text x="50" y="54" font-size="12" fill="#099268" font-weight="bold" text-anchor="middle">¥</text></svg>`,
      example: {
        ja: 'カードが使えないので現金で払います。',
        hira: 'カードが つかえないので げんきんで はらいます。',
        vi: 'Vì không dùng được thẻ nên tôi thanh toán bằng tiền mặt.'
      }
    },
    {
      id: 'n5_l18_15',
      lesson: 18,
      lessonId: 18,
      level: 'N5',
      kanji: '趣味',
      hanViet: 'Thú Vị',
      hiragana: 'しゅみ',
      romaji: 'shumi',
      meaning: 'sở thích, thú vui',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF0F6"/><circle cx="50" cy="50" r="24" fill="#FF8787"/><path d="M42 46 C42 42 46 38 50 42 C54 38 58 42 58 46 C58 54 50 60 50 60 C50 60 42 54 42 46 Z" fill="#FFF"/></svg>`,
      example: {
        ja: '私の趣味は外国の映画を見ることです。',
        hira: 'わたしの しゅみは がいこくの えいがを みることです。',
        vi: 'Sở thích của tôi là xem phim nước ngoài.'
      }
    },
    {
      id: 'n5_l18_16',
      lesson: 18,
      lessonId: 18,
      level: 'N5',
      kanji: '日記',
      hanViet: 'Nhật Kí',
      hiragana: 'にっき',
      romaji: 'nikki',
      meaning: 'nhật ký',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="28" y="24" width="44" height="52" rx="3" fill="#1C7ED6"/><rect x="34" y="30" width="34" height="40" rx="1" fill="#FFF"/><line x1="40" y1="40" x2="62" y2="40" stroke="#ADB5BD" stroke-width="2"/><line x1="40" y1="48" x2="62" y2="48" stroke="#ADB5BD" stroke-width="2"/><line x1="40" y1="56" x2="56" y2="56" stroke="#ADB5BD" stroke-width="2"/></svg>`,
      example: {
        ja: '寝る前に毎晩日記を書きます。',
        hira: 'ねるまえに まいばん にっきを かきます。',
        vi: 'Trước khi đi ngủ mỗi tối tôi đều viết nhật ký.'
      }
    },
    {
      id: 'n5_l18_17',
      lesson: 18,
      lessonId: 18,
      level: 'N5',
      kanji: 'お祈り',
      hanViet: 'Kì',
      hiragana: 'おいのり',
      romaji: 'oinori',
      meaning: 'sự cầu nguyện, lời cầu nguyện',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><path d="M42 36 C42 36 46 24 50 36 C54 24 58 36 58 36 L56 64 L44 64 Z" fill="#FCC419"/><circle cx="50" cy="22" r="4" fill="#F59F00"/><path d="M38 72 L62 72" stroke="#E67700" stroke-width="3"/></svg>`,
      example: {
        ja: '毎朝神様にお祈りをします。',
        hira: 'まいあさ かみさまに おいのりを します。',
        vi: 'Mỗi sáng tôi đều cầu nguyện với Thượng đế.'
      }
    },
    {
      id: 'n5_l18_18',
      lesson: 18,
      lessonId: 18,
      level: 'N5',
      kanji: '課長',
      hanViet: 'Khóa Trưởng',
      hiragana: 'かちょう',
      romaji: 'kachou',
      meaning: 'tổ trưởng, trưởng nhóm',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="38" r="16" fill="#FFA94D"/><path d="M28 80 C28 62 72 62 72 80 Z" fill="#1864AB"/><polygon points="50,56 46,74 54,74" fill="#FF8787"/></svg>`,
      example: {
        ja: '中村課長に書類を提出しました。',
        hira: 'なかむらかちょうに しょるいを ていしゅつしました。',
        vi: 'Tôi đã nộp tài liệu cho tổ trưởng Nakamura.'
      }
    },
    {
      id: 'n5_l18_19',
      lesson: 18,
      lessonId: 18,
      level: 'N5',
      kanji: '部長',
      hanViet: 'Bộ Trưởng',
      hiragana: 'ぶちょう',
      romaji: 'buchou',
      meaning: 'trưởng phòng',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><circle cx="50" cy="38" r="16" fill="#FFA94D"/><path d="M26 80 C26 62 74 62 74 80 Z" fill="#D9480F"/><polygon points="50,54 44,76 56,76" fill="#FCC419"/><circle cx="50" cy="54" r="3" fill="#FFF"/></svg>`,
      example: {
        ja: '山田部長は今会議室にいらっしゃいます。',
        hira: 'やまだぶちょうは いま かいぎしつに いらっしゃいます。',
        vi: 'Trưởng phòng Yamada hiện đang ở trong phòng họp.'
      }
    },
    {
      id: 'n5_l18_20',
      lesson: 18,
      lessonId: 18,
      level: 'N5',
      kanji: '社長',
      hanViet: 'Xã Trưởng',
      hiragana: 'しゃちょう',
      romaji: 'shachou',
      meaning: 'giám đốc, chủ tịch công ty',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F8F9FA"/><circle cx="50" cy="36" r="16" fill="#FFA94D"/><path d="M24 80 C24 58 76 58 76 80 Z" fill="#212529"/><polygon points="50,54 44,78 56,78" fill="#FA5252"/><polygon points="46,24 54,24 50,20" fill="#FCC419"/></svg>`,
      example: {
        ja: 'わが社の社長はとても親切な方です。',
        hira: 'わがしゃの しゃちょうは とても しんせつな かたです。',
        vi: 'Giám đốc công ty chúng tôi là một người rất tốt bụng.'
      }
    },
    {
      id: 'n5_l18_21',
      lesson: 18,
      lessonId: 18,
      level: 'N5',
      kanji: '動物',
      hanViet: 'Động Vật',
      hiragana: 'どうぶつ',
      romaji: 'doubutsu',
      meaning: 'động vật, muông thú',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><circle cx="50" cy="50" r="22" fill="#F59F00"/><circle cx="36" cy="32" r="8" fill="#F59F00"/><circle cx="64" cy="32" r="8" fill="#F59F00"/><circle cx="44" cy="46" r="3" fill="#212529"/><circle cx="56" cy="46" r="3" fill="#212529"/><ellipse cx="50" cy="54" rx="5" ry="3" fill="#212529"/></svg>`,
      example: {
        ja: '上野動物園でたくさんの動物を見ました。',
        hira: 'うえのどうぶつえんで たくさんの どうぶつを みました。',
        vi: 'Tôi đã nhìn thấy rất nhiều động vật ở vườn thú Ueno.'
      }
    },
    {
      id: 'n5_l18_22',
      lesson: 18,
      lessonId: 18,
      level: 'N5',
      kanji: '馬',
      hanViet: 'Mã',
      hiragana: 'うま',
      romaji: 'uma',
      meaning: 'con ngựa',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><path d="M34 76 L34 46 Q38 30 52 26 L66 38 L58 48 L62 76" stroke="#D9480F" stroke-width="5" fill="none" stroke-linejoin="round"/><circle cx="56" cy="36" r="3" fill="#D9480F"/></svg>`,
      example: {
        ja: '北海道の牧場で馬に乗ったことがあります。',
        hira: 'ほっかいどうの ぼくじょうで うまに のったことが あります。',
        vi: 'Tôi từng cưỡi ngựa ở một trang trại tại Hokkaido.'
      }
    },
    {
      id: 'n5_l18_23',
      lesson: 18,
      lessonId: 18,
      level: 'N5',
      kanji: 'へえ',
      hanViet: 'Cảm thán',
      hiragana: 'へえ',
      romaji: 'hee',
      meaning: 'thế ạ!, thật ư! (ngạc nhiên)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><circle cx="50" cy="46" r="22" fill="#9775FA"/><ellipse cx="50" cy="52" rx="6" ry="9" fill="#FFF"/><circle cx="43" cy="40" r="3" fill="#FFF"/><circle cx="57" cy="40" r="3" fill="#FFF"/></svg>`,
      example: {
        ja: 'へえ、一人で日本へ来たんですか。すごいですね！',
        hira: 'へえ、ひとりで にほんへ きたんですか。すごいですね！',
        vi: 'Thế ạ! Anh đến Nhật một mình ư? Đỉnh thật đấy!'
      }
    },
    {
      id: 'n5_l18_24',
      lesson: 18,
      lessonId: 18,
      level: 'N5',
      kanji: 'それは面白いですね',
      hanViet: 'Diện Bạch',
      hiragana: 'それはおもしろいですね',
      romaji: 'sore wa omoshiroi desu ne',
      meaning: 'hay thật nhỉ, thú vị ghê',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><circle cx="50" cy="48" r="24" fill="#FCC419"/><path d="M40 54 Q50 64 60 54" stroke="#FFF" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="42" cy="44" r="3.5" fill="#212529"/><circle cx="58" cy="44" r="3.5" fill="#212529"/></svg>`,
      example: {
        ja: '昔の切手集めですか。それは面白いですね。',
        hira: 'むかしの きってあつめですか。それは おもしろいですね。',
        vi: 'Sưu tầm tem cổ à? Điều đó thú vị thật nhỉ!'
      }
    },
    {
      id: 'n5_l18_25',
      lesson: 18,
      lessonId: 18,
      level: 'N5',
      kanji: 'なかなか',
      hanViet: 'Phó từ',
      hiragana: 'なかなか',
      romaji: 'nakanaka',
      meaning: 'khó mà, mãi mà không (đi với phủ định)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F1F3F5"/><line x1="28" y1="50" x2="72" y2="50" stroke="#868E96" stroke-width="5" stroke-linecap="round"/><line x1="60" y1="36" x2="60" y2="64" stroke="#FA5252" stroke-width="4"/></svg>`,
      example: {
        ja: '日本ではなかなか馬を見ることができません。',
        hira: 'にほんでは なかなか うまを みることが できません。',
        vi: 'Ở Nhật Bản khó mà nhìn thấy ngựa được.'
      }
    },
    {
      id: 'n5_l18_26',
      lesson: 18,
      lessonId: 18,
      level: 'N5',
      kanji: '牧場',
      hanViet: 'Mục Trường',
      hiragana: 'ぼくじょう',
      romaji: 'bokujou',
      meaning: 'trang trại chăn nuôi gia súc',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><path d="M20 74 Q50 56 80 74 Z" fill="#51CF66"/><rect x="36" y="38" width="28" height="22" fill="#D9480F"/><polygon points="32,38 50,24 68,38" fill="#FA5252"/><rect x="46" y="48" width="8" height="12" fill="#FFF"/></svg>`,
      example: {
        ja: '週末に家族と牧場へ遊びに行きました。',
        hira: 'しゅうまつに かぞくと ぼくじょうへ あそびに いきました。',
        vi: 'Cuối tuần tôi cùng gia đình đi chơi ở trang trại.'
      }
    },
    {
      id: 'n5_l18_27',
      lesson: 18,
      lessonId: 18,
      level: 'N5',
      kanji: '本当ですか',
      hanViet: 'Bản Đương',
      hiragana: 'ほんとうですか',
      romaji: 'hontou desu ka',
      meaning: 'thật không ạ?, có thật vậy không?',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="46" r="24" fill="#339AF0"/><text x="44" y="56" font-size="24" font-weight="bold" fill="#FFF">?</text><text x="56" y="56" font-size="24" font-weight="bold" fill="#FFD43B">!</text></svg>`,
      example: {
        ja: '明日テストがないんですか。本当ですか。',
        hira: 'あした テストが ないんですか。ほんとうですか。',
        vi: 'Ngày mai không có bài kiểm tra ư? Có thật không ạ?'
      }
    },
    {
      id: 'n5_l18_28',
      lesson: 18,
      lessonId: 18,
      level: 'N5',
      kanji: '是非',
      hanViet: 'Thị Phi',
      hiragana: 'ぜひ',
      romaji: 'zehi',
      meaning: 'nhất định, tha thiết mong muốn',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><path d="M50 24 L56 38 L72 38 L60 48 L64 64 L50 54 L36 64 L40 48 L28 38 L44 38 Z" fill="#FA5252"/></svg>`,
      example: {
        ja: '今度ぜひ私の国へ遊びに来てください。',
        hira: 'こんど ぜひ わたしのくにへ あそびに きてください。',
        vi: 'Lần tới nhất định hãy ghé sang đất nước tôi chơi nhé!'
      }
    },
    {
      id: 'n5_l18_29',
      lesson: 18,
      lessonId: 18,
      level: 'N5',
      kanji: 'ビートルズ',
      hanViet: 'Ban nhạc',
      hiragana: 'ビートルズ',
      romaji: 'biitoruzu',
      meaning: 'ban nhạc The Beatles huyền thoại',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#343A40"/><circle cx="50" cy="50" r="28" fill="#212529" stroke="#868E96" stroke-width="2"/><circle cx="50" cy="50" r="10" fill="#FCC419"/><circle cx="50" cy="50" r="3" fill="#212529"/></svg>`,
      example: {
        ja: '父はビートルズの曲が大好きです。',
        hira: 'ちちは ビートルズの きょくが だいすきです。',
        vi: 'Bố tôi rất thích các ca khúc của ban nhạc The Beatles.'
      }
    }
  ]
},

  // --------------------------------------------------------------------------
  // BÃ€I 19: TRáº¢I NGHIá»†M VÄ‚N HÃ“A & THAY Äá»”I TRáº NG THÃI
  // --------------------------------------------------------------------------
{
  lessonNumber: 19,
  level: 'N5',
  title: 'Bài 19: Trải nghiệm văn hóa & Thay đổi trạng thái',
  topicVi: 'Leo núi, Tắm suối nước nóng, Trải nghiệm văn hóa & Thay đổi trạng thái',
  icon: '🗻',
  grammarPoint: 'Động từ Thể Quá khứ ngắn た (Ta-form). Diễn tả trải nghiệm từng làm: V-た ことがあります (Đã từng...). Liệt kê hành động đại diện không theo trình tự: V1-たり, V2-たり します. Diễn tả sự biến đổi trạng thái: Tính từ đuôi い bỏ い + く / Tính từ đuôi な và Danh từ + に + なります.',
  vocab: [
    {
      id: 'n5_l19_01',
      lesson: 19,
      lessonId: 19,
      level: 'N5',
      kanji: '登ります[山に～]',
      hanViet: 'Đăng',
      hiragana: 'のぼります[やまに～]',
      romaji: 'noborimasu [yama ni~]',
      meaning: 'leo núi, trèo lên',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><polygon points="50,22 84,76 16,76" fill="#1864AB"/><polygon points="50,22 62,42 38,42" fill="#FFF"/><circle cx="58" cy="50" r="4" fill="#FFA94D"/><path d="M58 54 L62 66 M54 60 L66 60" stroke="#FFF" stroke-width="2"/></svg>`,
      example: {
        ja: '富士山に登ったことがありますか。',
        hira: 'ふじさんに のぼったことが ありますか。',
        vi: 'Bạn đã từng leo núi Phú Sĩ bao giờ chưa?'
      }
    },
    {
      id: 'n5_l19_02',
      lesson: 19,
      lessonId: 19,
      level: 'N5',
      kanji: '泊まります[ホテルに～]',
      hanViet: 'Bạc',
      hiragana: 'とまります[ホテルに～]',
      romaji: 'tomarimasu [hoteru ni~]',
      meaning: 'trọ lại, ở lại khách sạn',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="28" y="30" width="44" height="46" rx="4" fill="#339AF0"/><rect x="36" y="38" width="8" height="8" fill="#FFF"/><rect x="56" y="38" width="8" height="8" fill="#FFF"/><rect x="36" y="52" width="8" height="8" fill="#FFF"/><rect x="56" y="52" width="8" height="8" fill="#FFF"/><rect x="44" y="64" width="12" height="12" fill="#1864AB"/></svg>`,
      example: {
        ja: '京都の伝統的な旅館に泊まりました。',
        hira: 'きょうとの でんとうてきな りょかんに とまりました。',
        vi: 'Tôi đã trọ lại một lữ quán truyền thống ở Kyoto.'
      }
    },
    {
      id: 'n5_l19_03',
      lesson: 19,
      lessonId: 19,
      level: 'N5',
      kanji: '掃除します',
      hanViet: 'Tảo Trừ',
      hiragana: 'そうじします',
      romaji: 'souji shimasu',
      meaning: 'dọn dẹp vệ sinh, quét dọn',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><line x1="62" y1="24" x2="42" y2="60" stroke="#868E96" stroke-width="4" stroke-linecap="round"/><polygon points="34,60 48,56 40,78 26,76" fill="#FAB005"/><line x1="28" y1="74" x2="38" y2="76" stroke="#E67700" stroke-width="2"/></svg>`,
      example: {
        ja: '日曜日の午前中に部屋を掃除します。',
        hira: 'にちようびの ごぜんちゅうに へやを そうじします。',
        vi: 'Tôi dọn dẹp phòng vào buổi sáng Chủ Nhật.'
      }
    },
    {
      id: 'n5_l19_04',
      lesson: 19,
      lessonId: 19,
      level: 'N5',
      kanji: '洗濯します',
      hanViet: 'Tiển Trạc',
      hiragana: 'せんたくします',
      romaji: 'sentaku shimasu',
      meaning: 'giặt giũ quần áo',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="28" y="26" width="44" height="52" rx="4" fill="#4DABF7"/><circle cx="50" cy="54" r="16" fill="#FFF"/><circle cx="50" cy="54" r="12" fill="#1C7ED6"/><circle cx="58" cy="34" r="3" fill="#FFF"/></svg>`,
      example: {
        ja: '天気がいいので洗濯します。',
        hira: 'てんきが いいので せんたくします。',
        vi: 'Vì thời tiết đẹp nên tôi giặt quần áo.'
      }
    },
    {
      id: 'n5_l19_05',
      lesson: 19,
      lessonId: 19,
      level: 'N5',
      kanji: '連絡します',
      hanViet: 'Liên Lạc',
      hiragana: 'れんらくします',
      romaji: 'renraku shimasu',
      meaning: 'liên lạc, thông báo',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="34" cy="50" r="12" fill="#20C997"/><circle cx="66" cy="50" r="12" fill="#20C997"/><line x1="44" y1="50" x2="56" y2="50" stroke="#099268" stroke-width="3" stroke-dasharray="2,2"/></svg>`,
      example: {
        ja: '駅に着いたら電話で連絡してください。',
        hira: 'えきに ついたら でんわで れんらくしてください。',
        vi: 'Khi đến nhà ga xin hãy gọi điện liên lạc cho tôi nhé.'
      }
    },
    {
      id: 'n5_l19_06',
      lesson: 19,
      lessonId: 19,
      level: 'N5',
      kanji: 'なります',
      hanViet: 'Biến đổi',
      hiragana: 'なります',
      romaji: 'narimasu',
      meaning: 'trở thành, trở nên',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF0F6"/><circle cx="30" cy="50" r="8" fill="#FFA8A8"/><path d="M42 50 L58 50 M52 42 L60 50 L52 58" stroke="#E03131" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="72" cy="50" r="14" fill="#FF6B6B"/></svg>`,
      example: {
        ja: '春になって、桜が綺麗に咲きました。',
        hira: 'はるになって、さくらが きれいに さきました。',
        vi: 'Mùa xuân đến, hoa anh đào đã nở rộ rất đẹp.'
      }
    },
    {
      id: 'n5_l19_07',
      lesson: 19,
      lessonId: 19,
      level: 'N5',
      kanji: '眠い',
      hanViet: 'Miên',
      hiragana: 'ねむい',
      romaji: 'nemui',
      meaning: 'buồn ngủ',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><circle cx="50" cy="50" r="24" fill="#9775FA"/><line x1="40" y1="46" x2="46" y2="46" stroke="#FFF" stroke-width="3" stroke-linecap="round"/><line x1="54" y1="46" x2="60" y2="46" stroke="#FFF" stroke-width="3" stroke-linecap="round"/><ellipse cx="50" cy="58" rx="4" ry="6" fill="#FFF"/><text x="68" y="38" font-size="14" font-weight="bold" fill="#7950F2">Zzz</text></svg>`,
      example: {
        ja: '昨夜あまり寝なかったので今とても眠いです。',
        hira: 'ゆうべ あまり ねなかったので いま とても ねむいです。',
        vi: 'Tối qua tôi không ngủ được nhiều nên giờ rất buồn ngủ.'
      }
    },
    {
      id: 'n5_l19_08',
      lesson: 19,
      lessonId: 19,
      level: 'N5',
      kanji: '弱い',
      hanViet: 'Nhược',
      hiragana: 'よわい',
      romaji: 'yowai',
      meaning: 'yếu, yếu ớt (sức khỏe, tửu lượng)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F8F9FA"/><path d="M34 50 Q50 62 66 50" stroke="#ADB5BD" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="40" cy="40" r="3" fill="#868E96"/><circle cx="60" cy="40" r="3" fill="#868E96"/></svg>`,
      example: {
        ja: 'お酒に弱いのでビールを一杯だけ飲みます。',
        hira: 'おさけに よわいので ビールを いっぱいで のみます。',
        vi: 'Vì tửu lượng yếu nên tôi chỉ uống một ly bia thôi.'
      }
    },
    {
      id: 'n5_l19_09',
      lesson: 19,
      lessonId: 19,
      level: 'N5',
      kanji: '強い',
      hanViet: 'Cường',
      hiragana: 'つよい',
      romaji: 'tsuyoi',
      meaning: 'mạnh mẽ, khỏe khoắn',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><path d="M34 54 C34 40 44 32 50 40 C56 32 66 40 66 54 C66 66 50 74 50 74 C50 74 34 66 34 54 Z" fill="#FA5252"/><polygon points="46,26 54,26 52,36 48,36" fill="#FCC419"/></svg>`,
      example: {
        ja: '毎日運動して体が強くなりました。',
        hira: 'まいにち うんどうして からだが つよくなりました。',
        vi: 'Nhờ tập luyện thể thao mỗi ngày nên cơ thể tôi đã khỏe mạnh lên.'
      }
    },
    {
      id: 'n5_l19_10',
      lesson: 19,
      lessonId: 19,
      level: 'N5',
      kanji: '調子がいい',
      hanViet: 'Điều Tử',
      hiragana: 'ちょうしがいい',
      romaji: 'choushi ga ii',
      meaning: 'trong tình trạng tốt, phong độ cao',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><circle cx="50" cy="50" r="26" fill="#40C057"/><path d="M40 54 Q50 64 60 54" stroke="#FFF" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="43" cy="44" r="3" fill="#FFF"/><circle cx="57" cy="44" r="3" fill="#FFF"/></svg>`,
      example: {
        ja: '今日は体の調子がいいですから散歩します。',
        hira: 'きょうは からだの ちょうしが いいですから さんぽします。',
        vi: 'Hôm nay thể trạng rất tốt nên tôi đi dạo bộ.'
      }
    },
    {
      id: 'n5_l19_11',
      lesson: 19,
      lessonId: 19,
      level: 'N5',
      kanji: '調子が悪い',
      hanViet: 'Điều Tử Ác',
      hiragana: 'ちょうしがわるい',
      romaji: 'choushi ga warui',
      meaning: 'trong tình trạng xấu, mệt mỏi, hỏng hóc',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><circle cx="50" cy="50" r="26" fill="#FF6B6B"/><path d="M40 58 Q50 48 60 58" stroke="#FFF" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="43" cy="44" r="3" fill="#FFF"/><circle cx="57" cy="44" r="3" fill="#FFF"/></svg>`,
      example: {
        ja: 'パソコンの調子が悪くて動きません。',
        hira: 'パソコンの ちょうしが わるくて うごきません。',
        vi: 'Máy vi tính bị trục trặc nên không hoạt động được.'
      }
    },
    {
      id: 'n5_l19_12',
      lesson: 19,
      lessonId: 19,
      level: 'N5',
      kanji: '調子',
      hanViet: 'Điều Tử',
      hiragana: 'ちょうし',
      romaji: 'choushi',
      meaning: 'tình trạng, trạng thái',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><path d="M25 60 L40 40 L55 54 L75 32" stroke="#FD7E14" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="75" cy="32" r="5" fill="#E8590C"/></svg>`,
      example: {
        ja: '最近お仕事の調子はいかがですか。',
        hira: 'さいきん おしごとの ちょうしは いかがですか。',
        vi: 'Dạo này tình hình công việc của anh thế nào rồi?'
      }
    },
    {
      id: 'n5_l19_13',
      lesson: 19,
      lessonId: 19,
      level: 'N5',
      kanji: 'ゴルフ',
      hanViet: 'Môn gôn',
      hiragana: 'ゴルフ',
      romaji: 'gorufu',
      meaning: 'môn thể thao gôn (golf)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><path d="M30 68 L50 24 L56 24 L36 68 Z" fill="#868E96"/><ellipse cx="33" cy="70" rx="8" ry="4" fill="#495057"/><circle cx="68" cy="70" r="5" fill="#FFF" stroke="#ADB5BD" stroke-width="1.5"/></svg>`,
      example: {
        ja: '部長は週末によくゴルフをなさいます。',
        hira: 'ぶちょうは しゅうまつに よく ゴルフを なさいます。',
        vi: 'Trưởng phòng thường hay chơi gôn vào dịp cuối tuần.'
      }
    },
    {
      id: 'n5_l19_14',
      lesson: 19,
      lessonId: 19,
      level: 'N5',
      kanji: '相撲',
      hanViet: 'Tướng Phác',
      hiragana: 'すもう',
      romaji: 'sumou',
      meaning: 'võ vật Sumo truyền thống Nhật Bản',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><circle cx="50" cy="50" r="28" stroke="#D9480F" stroke-width="4" fill="none"/><circle cx="50" cy="38" r="10" fill="#FFA94D"/><path d="M38 52 C38 48 62 48 62 52 L60 70 L40 70 Z" fill="#D9480F"/></svg>`,
      example: {
        ja: '一度日本の相撲を見たいです。',
        hira: 'いちど にほんの すもうを みたいです。',
        vi: 'Tôi muốn được xem đấu vật Sumo Nhật Bản một lần.'
      }
    },
    {
      id: 'n5_l19_15',
      lesson: 19,
      lessonId: 19,
      level: 'N5',
      kanji: 'パチンコ',
      hanViet: 'Pachinko',
      hiragana: 'パチンコ',
      romaji: 'pachinko',
      meaning: 'trò chơi bắn bi Pachinko',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><circle cx="50" cy="50" r="26" fill="#FCC419"/><circle cx="44" cy="44" r="5" fill="#FFF"/><circle cx="56" cy="44" r="5" fill="#FFF"/><circle cx="50" cy="58" r="5" fill="#FFF"/></svg>`,
      example: {
        ja: '駅の前に新しいパチンコ屋ができました。',
        hira: 'えきのまえに あたらしい パチンコやが できました。',
        vi: 'Trước nhà ga vừa có một quán bắn bi Pachinko mới mở.'
      }
    },
    {
      id: 'n5_l19_16',
      lesson: 19,
      lessonId: 19,
      level: 'N5',
      kanji: 'お茶',
      hanViet: 'Trà',
      hiragana: 'おちゃ',
      romaji: 'ocha',
      meaning: 'trà đạo, nước chè xanh',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><ellipse cx="50" cy="56" rx="22" ry="12" fill="#40C057"/><path d="M28 56 Q50 78 72 56 Z" fill="#2B8A3E"/><ellipse cx="50" cy="56" rx="16" ry="8" fill="#51CF66"/></svg>`,
      example: {
        ja: '京都でお茶を習ったことがあります。',
        hira: 'きょうとで おちゃを ならったことが あります。',
        vi: 'Tôi từng học nghệ thuật trà đạo ở Kyoto.'
      }
    },
    {
      id: 'n5_l19_17',
      lesson: 19,
      lessonId: 19,
      level: 'N5',
      kanji: '日',
      hanViet: 'Nhật',
      hiragana: 'ひ',
      romaji: 'hi',
      meaning: 'ngày, mặt trời',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><circle cx="50" cy="50" r="20" fill="#FA5252"/><line x1="50" y1="20" x2="50" y2="12" stroke="#FA5252" stroke-width="4"/><line x1="50" y1="80" x2="50" y2="88" stroke="#FA5252" stroke-width="4"/><line x1="20" y1="50" x2="12" y2="50" stroke="#FA5252" stroke-width="4"/><line x1="80" y1="50" x2="88" y2="50" stroke="#FA5252" stroke-width="4"/></svg>`,
      example: {
        ja: '休みの日には掃除したり洗濯したりします。',
        hira: 'やすみの ひには そうじしたり せんたくしたり します。',
        vi: 'Vào những ngày nghỉ tôi thường dọn dẹp và giặt giũ.'
      }
    },
    {
      id: 'n5_l19_18',
      lesson: 19,
      lessonId: 19,
      level: 'N5',
      kanji: '一度',
      hanViet: 'Nhất Độ',
      hiragana: 'いちど',
      romaji: 'ichido',
      meaning: 'một lần',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="50" r="24" fill="#339AF0"/><text x="50" y="60" font-size="28" font-weight="bold" fill="#FFF" text-anchor="middle">1</text></svg>`,
      example: {
        ja: '一度北海道へスキーに行きたいです。',
        hira: 'いちど ほっかいどうへ スキーに いきたいです。',
        vi: 'Tôi muốn đến Hokkaido trượt tuyết một lần.'
      }
    },
    {
      id: 'n5_l19_19',
      lesson: 19,
      lessonId: 19,
      level: 'N5',
      kanji: '一度も',
      hanViet: 'Nhất Độ',
      hiragana: 'いちども',
      romaji: 'ichidomo',
      meaning: 'chưa lần nào, chưa từng bao giờ (đi với phủ định)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><circle cx="50" cy="50" r="24" stroke="#FA5252" stroke-width="4" fill="none"/><line x1="34" y1="34" x2="66" y2="66" stroke="#FA5252" stroke-width="4"/><text x="50" y="58" font-size="22" font-weight="bold" fill="#FA5252" text-anchor="middle">0</text></svg>`,
      example: {
        ja: '私は一度も刺身を食べたことがありません。',
        hira: 'わたしは いちども さしみを たべたことが ありません。',
        vi: 'Tôi chưa từng ăn món sashimi một lần nào cả.'
      }
    },
    {
      id: 'n5_l19_20',
      lesson: 19,
      lessonId: 19,
      level: 'N5',
      kanji: '段々',
      hanViet: 'Đoạn',
      hiragana: 'だんだん',
      romaji: 'dandan',
      meaning: 'dần dần, từ từ',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><path d="M24 72 L40 72 L40 56 L56 56 L56 40 L72 40 L72 26" stroke="#FF922B" stroke-width="5" fill="none" stroke-linecap="round"/></svg>`,
      example: {
        ja: '十月になって段々寒くなってきました。',
        hira: 'じゅうがつになって だんだん さむくなって きました。',
        vi: 'Sang tháng mười trời đã dần dần trở nên lạnh hơn.'
      }
    },
    {
      id: 'n5_l19_21',
      lesson: 19,
      lessonId: 19,
      level: 'N5',
      kanji: 'もうすぐ',
      hanViet: 'Phó từ',
      hiragana: 'もうすぐ',
      romaji: 'mousugu',
      meaning: 'sắp, sắp sửa',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><circle cx="50" cy="50" r="24" fill="#51CF66"/><path d="M42 50 L56 50 M50 44 L56 50 L50 56" stroke="#FFF" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`,
      example: {
        ja: 'もうすぐ夏休みが始まりますね。',
        hira: 'もうすぐ なつやすみが はじまりますね。',
        vi: 'Sắp bắt đầu kỳ nghỉ hè rồi nhỉ.'
      }
    },
    {
      id: 'n5_l19_22',
      lesson: 19,
      lessonId: 19,
      level: 'N5',
      kanji: 'お陰様で',
      hanViet: 'Âm Dạng',
      hiragana: 'おかげさまで',
      romaji: 'okagesamade',
      meaning: 'nhờ trời / nhờ ơn anh chị (cảm ơn)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="50" r="26" fill="#4DABF7"/><path d="M38 52 L46 60 L62 42" stroke="#FFF" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`,
      example: {
        ja: 'お元気ですか。―はい、お陰様で元気です。',
        hira: 'おげんきですか。―はい、おかげさまで げんきです。',
        vi: 'Anh có khỏe không? - Vâng, nhờ ơn anh chị tôi vẫn khỏe ạ.'
      }
    },
    {
      id: 'n5_l19_23',
      lesson: 19,
      lessonId: 19,
      level: 'N5',
      kanji: '乾杯',
      hanViet: 'Cạn Bôi',
      hiragana: 'かんぱい',
      romaji: 'kanpai',
      meaning: 'cạn ly, nâng cốc!',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><path d="M36 34 L46 54 L36 70" stroke="#F59F00" stroke-width="4" fill="none"/><path d="M64 34 L54 54 L64 70" stroke="#F59F00" stroke-width="4" fill="none"/><circle cx="50" cy="42" r="4" fill="#FCC419"/></svg>`,
      example: {
        ja: '皆さんの健康のために乾杯しましょう！',
        hira: 'みなさんの けんこうのために かんぱいしましょう！',
        vi: 'Chúng ta hãy cùng nâng ly vì sức khỏe của mọi người nhé!'
      }
    },
    {
      id: 'n5_l19_24',
      lesson: 19,
      lessonId: 19,
      level: 'N5',
      kanji: '実は',
      hanViet: 'Thực',
      hiragana: 'じつは',
      romaji: 'jitsu wa',
      meaning: 'thực ra thì, sự thực là',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><circle cx="50" cy="46" r="20" fill="#7950F2"/><text x="50" y="54" font-size="22" font-weight="bold" fill="#FFF" text-anchor="middle">!</text></svg>`,
      example: {
        ja: '実は、来月日本へ引っ越すことになりました。',
        hira: 'じつは、らいげつ にほんへ ひっこすことに なりました。',
        vi: 'Thực ra là, tháng sau tôi sẽ chuyển nhà sang Nhật Bản.'
      }
    },
    {
      id: 'n5_l19_25',
      lesson: 19,
      lessonId: 19,
      level: 'N5',
      kanji: 'ダイエット',
      hanViet: 'Ăn kiêng',
      hiragana: 'ダイエット',
      romaji: 'daietto',
      meaning: 'chế độ ăn kiêng, giảm cân',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><rect x="28" y="32" width="44" height="42" rx="6" fill="#20C997"/><circle cx="50" cy="50" r="10" fill="#FFF"/><line x1="50" y1="50" x2="56" y2="44" stroke="#099268" stroke-width="2.5"/></svg>`,
      example: {
        ja: '最近太ったのでダイエットを始めました。',
        hira: 'さいきん ふとったので ダイエットを はじめました。',
        vi: 'Dạo này tôi tăng cân nên đã bắt đầu ăn kiêng.'
      }
    },
    {
      id: 'n5_l19_26',
      lesson: 19,
      lessonId: 19,
      level: 'N5',
      kanji: '何回も',
      hanViet: 'Hà Hồi',
      hiragana: 'なんかいも',
      romaji: 'nankai mo',
      meaning: 'nhiều lần, rất nhiều lần',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><circle cx="36" cy="46" r="12" fill="#F59F00"/><circle cx="64" cy="46" r="12" fill="#F59F00"/><text x="50" y="74" font-size="16" font-weight="bold" fill="#D9480F" text-anchor="middle">∞</text></svg>`,
      example: {
        ja: '富士山には何回も登ったことがあります。',
        hira: 'ふじさんには なんかいも のぼったことが あります。',
        vi: 'Tôi đã từng leo núi Phú Sĩ rất nhiều lần rồi.'
      }
    },
    {
      id: 'n5_l19_27',
      lesson: 19,
      lessonId: 19,
      level: 'N5',
      kanji: 'しかし',
      hanViet: 'Liên từ',
      hiragana: 'しかし',
      romaji: 'shikashi',
      meaning: 'tuy nhiên, nhưng mà',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><path d="M30 44 L50 44 M50 38 L44 44 L50 50" stroke="#FA5252" stroke-width="3" fill="none"/><path d="M70 56 L50 56 M50 50 L56 56 L50 62" stroke="#495057" stroke-width="3" fill="none"/></svg>`,
      example: {
        ja: '日本料理はおいしいです。しかし、少し高いです。',
        hira: 'にほんりょうりは おいしいです。しかし、すこし たかいです。',
        vi: 'Món ăn Nhật rất ngon. Tuy nhiên, giá hơi đắt một chút.'
      }
    },
    {
      id: 'n5_l19_28',
      lesson: 19,
      lessonId: 19,
      level: 'N5',
      kanji: '無理[な]',
      hanViet: 'Vô Lí',
      hiragana: 'むり[な]',
      romaji: 'muri [na]',
      meaning: 'quá sức, không thể làm nổi',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F1F3F5"/><circle cx="50" cy="50" r="28" stroke="#E03131" stroke-width="5" fill="none"/><line x1="32" y1="32" x2="68" y2="68" stroke="#E03131" stroke-width="5"/></svg>`,
      example: {
        ja: '一日でこの本を全部覚えるのは無理です。',
        hira: 'いちにちで このほんを ぜんぶ おぼえるのは むりです。',
        vi: 'Học thuộc hết cuốn sách này trong một ngày là điều quá sức.'
      }
    },
    {
      id: 'n5_l19_29',
      lesson: 19,
      lessonId: 19,
      level: 'N5',
      kanji: '体にいい',
      hanViet: 'Thể',
      hiragana: 'からだにいい',
      romaji: 'karada ni ii',
      meaning: 'tốt cho cơ thể, có lợi cho sức khỏe',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><path d="M50 30 C42 20 26 26 26 44 C26 62 50 78 50 78 C50 78 74 62 74 44 C74 26 58 20 50 30 Z" fill="#40C057"/><polygon points="48,42 54,48 64,38" fill="#FFF"/></svg>`,
      example: {
        ja: '毎朝野菜ジュースを飲むのは体にいいです。',
        hira: 'まいあさ やさいジュースを のむのは からだに いいです。',
        vi: 'Mỗi sáng uống nước ép rau củ rất tốt cho sức khỏe.'
      }
    },
    {
      id: 'n5_l19_30',
      lesson: 19,
      lessonId: 19,
      level: 'N5',
      kanji: 'ケーキ',
      hanViet: 'Bánh ngọt',
      hiragana: 'ケーキ',
      romaji: 'keeki',
      meaning: 'bánh ngọt, bánh gato',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF0F6"/><polygon points="25,68 75,68 50,34" fill="#FF8787"/><line x1="25" y1="68" x2="75" y2="68" stroke="#F06595" stroke-width="4"/><circle cx="50" cy="28" r="5" fill="#E03131"/></svg>`,
      example: {
        ja: '誕生日に友達がおいしいケーキをくれました。',
        hira: 'たんじょうびに ともだちが おいしい ケーキを くれました。',
        vi: 'Vào ngày sinh nhật bạn bè đã tặng tôi chiếc bánh kem rất ngon.'
      }
    }
  ]
},

  // --------------------------------------------------------------------------
  // BÃ€I 20: GIAO TIáº¾P THÃ‚N Máº¬T & THá»‚ THÃ”NG THÆ¯á»œNG
  // --------------------------------------------------------------------------
{
  lessonNumber: 20,
  level: 'N5',
  title: 'Bài 20: Giao tiếp thân mật & Thể thông thường',
  topicVi: 'Hội thoại thân mật bạn bè, Xưng hô & Thể thông thường (Futsuukei)',
  icon: '💬',
  grammarPoint: 'Cách chuyển đổi giữa Thể Lịch sự (丁寧語) và Thể Thông thường (普通形). Động từ, Tính từ và Danh từ dạng thể thông thường dùng khi trò chuyện với gia đình, người thân và bạn bè đồng trang lứa.',
  vocab: [
    {
      id: 'n5_l20_01',
      lesson: 20,
      lessonId: 20,
      level: 'N5',
      kanji: '要ります[ビザが～]',
      hanViet: 'Yếu',
      hiragana: 'いります[ビザが～]',
      romaji: 'irimasu [biza ga~]',
      meaning: 'cần thị thực/visa (Động từ nhóm 1)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><circle cx="50" cy="50" r="26" fill="#F59F00"/><text x="50" y="60" font-size="28" fill="#FFF" text-anchor="middle" font-weight="bold">!</text></svg>`,
      example: {
        ja: 'ビザが要る？―ううん、要らない。',
        hira: 'ビザがいる？―ううん、いらない。',
        vi: 'Có cần visa không? - Không, không cần đâu.'
      }
    },
    {
      id: 'n5_l20_02',
      lesson: 20,
      lessonId: 20,
      level: 'N5',
      kanji: '調べます',
      hanViet: 'Điều',
      hiragana: 'しらべます',
      romaji: 'shirabemasu',
      meaning: 'tìm hiểu, điều tra, tra cứu',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="44" cy="44" r="16" fill="#339AF0"/><circle cx="44" cy="44" r="8" fill="#FFF"/><line x1="56" y1="56" x2="74" y2="74" stroke="#1864AB" stroke-width="6" stroke-linecap="round"/></svg>`,
      example: {
        ja: '分からない言葉を辞書で調べます。',
        hira: 'わからない ことばを じしょで しらべます。',
        vi: 'Tôi tra từ chưa biết ở trong từ điển.'
      }
    },
    {
      id: 'n5_l20_03',
      lesson: 20,
      lessonId: 20,
      level: 'N5',
      kanji: '直します',
      hanViet: 'Trực',
      hiragana: 'なおします',
      romaji: 'naoshimasu',
      meaning: 'sửa chữa, đính chính, chữa bài',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><line x1="28" y1="62" x2="64" y2="26" stroke="#40C057" stroke-width="6" stroke-linecap="round"/><polygon points="24,68 36,66 28,58" fill="#2B8A3E"/><path d="M52 46 L62 56" stroke="#2B8A3E" stroke-width="2"/></svg>`,
      example: {
        ja: '先生に作文の文法を直してもらいました。',
        hira: 'せんせいに さくぶんの ぶんぽうを なおして もらいました。',
        vi: 'Tôi đã nhờ thầy giáo sửa lại ngữ pháp bài văn.'
      }
    },
    {
      id: 'n5_l20_04',
      lesson: 20,
      lessonId: 20,
      level: 'N5',
      kanji: '修理します',
      hanViet: 'Tu Lí',
      hiragana: 'しゅうりします',
      romaji: 'shuuri shimasu',
      meaning: 'tu sửa máy móc, sửa đồ đạc',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><path d="M30 68 L60 38" stroke="#FD7E14" stroke-width="6" stroke-linecap="round"/><path d="M54 32 C54 26 62 26 66 30 C70 34 70 42 64 42" stroke="#E8590C" stroke-width="5" fill="none"/></svg>`,
      example: {
        ja: '壊れた自転車を自分で修理しました。',
        hira: 'こわれた じてんしゃを じぶんで しゅうりしました。',
        vi: 'Tôi đã tự tay sửa chiếc xe đạp bị hỏng.'
      }
    },
    {
      id: 'n5_l20_05',
      lesson: 20,
      lessonId: 20,
      level: 'N5',
      kanji: '電話します',
      hanViet: 'Điện Thoại',
      hiragana: 'でんわします',
      romaji: 'denwa shimasu',
      meaning: 'gọi điện thoại',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><rect x="36" y="24" width="28" height="52" rx="4" fill="#20C997"/><circle cx="50" cy="68" r="3" fill="#FFF"/><rect x="40" y="30" width="20" height="32" rx="1" fill="#FFF"/></svg>`,
      example: {
        ja: '後で友達に電話するよ。',
        hira: 'あとで ともだちに でんわするよ。',
        vi: 'Lát nữa tớ sẽ gọi điện thoại cho bạn nhé.'
      }
    },
    {
      id: 'n5_l20_06',
      lesson: 20,
      lessonId: 20,
      level: 'N5',
      kanji: '僕',
      hanViet: 'Bộc',
      hiragana: 'ぼく',
      romaji: 'boku',
      meaning: 'tớ, mình (nam giới xưng hô thân mật)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="38" r="16" fill="#FFA94D"/><path d="M26 80 C26 62 74 62 74 80 Z" fill="#1971C2"/><path d="M38 32 Q50 24 62 32" stroke="#343A40" stroke-width="4" fill="none"/></svg>`,
      example: {
        ja: '僕も一緒に映画を見に行くよ。',
        hira: 'ぼくも いっしょに えいがを みにいくよ。',
        vi: 'Tớ cũng đi xem phim cùng với các cậu nhé!'
      }
    },
    {
      id: 'n5_l20_07',
      lesson: 20,
      lessonId: 20,
      level: 'N5',
      kanji: '君',
      hanViet: 'Quân',
      hiragana: 'きみ',
      romaji: 'kimi',
      meaning: 'cậu, bạn (dùng với người ngang hàng hoặc nhỏ hơn)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><circle cx="50" cy="38" r="16" fill="#FFA94D"/><path d="M26 80 C26 62 74 62 74 80 Z" fill="#F59F00"/><path d="M42 50 L50 58 L58 50" stroke="#FFF" stroke-width="2" fill="none"/></svg>`,
      example: {
        ja: '君も明日のパーティーに来る？',
        hira: 'きみも あしたの パーティーに くる？',
        vi: 'Cậu cũng đến bữa tiệc ngày mai chứ?'
      }
    },
    {
      id: 'n5_l20_08',
      lesson: 20,
      lessonId: 20,
      level: 'N5',
      kanji: '～君',
      hanViet: 'Quân',
      hiragana: '～くん',
      romaji: '~kun',
      meaning: 'bạn ~, em ~ (hậu tố gọi nam thanh thiếu niên)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="42" r="16" fill="#339AF0"/><text x="50" y="74" font-size="16" font-weight="bold" fill="#1864AB" text-anchor="middle">~くん</text></svg>`,
      example: {
        ja: '田中君、この資料をコピーしてくれる？',
        hira: 'たなかくん、このしりょうを コピーしてくれる？',
        vi: 'Cậu Tanaka ơi, photo giúp mình tập tài liệu này được không?'
      }
    },
    {
      id: 'n5_l20_09',
      lesson: 20,
      lessonId: 20,
      level: 'N5',
      kanji: 'うん',
      hanViet: 'Thân mật',
      hiragana: 'うん',
      romaji: 'un',
      meaning: 'ừ, vâng (thể thông thường của はい)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><circle cx="50" cy="50" r="26" fill="#40C057"/><path d="M40 50 L47 57 L60 43" stroke="#FFF" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`,
      example: {
        ja: '明日暇？―うん、暇だよ。',
        hira: 'あした ひま？―うん、ひまだよ。',
        vi: 'Ngày mai cậu rảnh không? - Ừ, tớ rảnh.'
      }
    },
    {
      id: 'n5_l20_10',
      lesson: 20,
      lessonId: 20,
      level: 'N5',
      kanji: 'ううん',
      hanViet: 'Thân mật',
      hiragana: 'ううん',
      romaji: 'uun',
      meaning: 'không (thể thông thường của いいえ)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><circle cx="50" cy="50" r="26" fill="#FA5252"/><line x1="42" y1="42" x2="58" y2="58" stroke="#FFF" stroke-width="4" stroke-linecap="round"/><line x1="58" y1="42" x2="42" y2="58" stroke="#FFF" stroke-width="4" stroke-linecap="round"/></svg>`,
      example: {
        ja: '昨日どこか行った？―ううん、どこも行かなかった。',
        hira: 'きのう どこか いった？―ううん、どこも いかなかった。',
        vi: 'Hôm qua cậu có đi đâu không? - Không, tớ chẳng đi đâu cả.'
      }
    },
    {
      id: 'n5_l20_11',
      lesson: 20,
      lessonId: 20,
      level: 'N5',
      kanji: 'サラリーマン',
      hanViet: 'Công sở',
      hiragana: 'サラリーマン',
      romaji: 'sarariiman',
      meaning: 'nhân viên công sở, người làm công ăn lương',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="36" r="14" fill="#FFA94D"/><path d="M28 78 C28 60 72 60 72 78 Z" fill="#1C7ED6"/><polygon points="50,52 46,72 54,72" fill="#FA5252"/></svg>`,
      example: {
        ja: '父は東京の会社で働くサラリーマンです。',
        hira: 'ちちは とうきょうの かいしゃで はたらく サラリーマンです。',
        vi: 'Bố tôi là nhân viên văn phòng làm việc ở công ty tại Tokyo.'
      }
    },
    {
      id: 'n5_l20_12',
      lesson: 20,
      lessonId: 20,
      level: 'N5',
      kanji: '言葉',
      hanViet: 'Ngôn Diệp',
      hiragana: 'ことば',
      romaji: 'kotoba',
      meaning: 'từ vựng, ngôn từ, tiếng nói',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><path d="M25 36 C25 28 40 28 50 28 C60 28 75 28 75 36 C75 52 60 52 50 52 L36 64 L38 52 C30 52 25 46 25 36 Z" fill="#FD7E14"/><circle cx="40" cy="40" r="3" fill="#FFF"/><circle cx="50" cy="40" r="3" fill="#FFF"/><circle cx="60" cy="40" r="3" fill="#FFF"/></svg>`,
      example: {
        ja: '日本の若者の言葉は面白いですね。',
        hira: 'にほんの わかものの ことばは おもしろいですね。',
        vi: 'Tiếng lóng của giới trẻ Nhật Bản thú vị thật đấy.'
      }
    },
    {
      id: 'n5_l20_13',
      lesson: 20,
      lessonId: 20,
      level: 'N5',
      kanji: '物価',
      hanViet: 'Vật Giá',
      hiragana: 'ぶっか',
      romaji: 'bukka',
      meaning: 'vật giá, mức giá cả sinh hoạt',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><path d="M26 66 L44 48 L56 56 L74 34" stroke="#FA5252" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><polygon points="68,34 76,34 74,42" fill="#FA5252"/><circle cx="38" cy="72" r="4" fill="#FCC419"/><circle cx="52" cy="72" r="4" fill="#FCC419"/><circle cx="66" cy="72" r="4" fill="#FCC419"/></svg>`,
      example: {
        ja: '東京は物価が高いけれど便利です。',
        hira: 'とうきょうは ぶっかが たかいけれど べんりです。',
        vi: 'Tokyo giá cả đắt đỏ nhưng cuộc sống rất tiện lợi.'
      }
    }
  ]
},

// --------------------------------------------------------------------------
  // BÃ€I 21: SUY NGHÄ¨, Ã KIáº¾N & TIN Tá»¨C Äá»œI Sá»NG
  // --------------------------------------------------------------------------
{
  lessonNumber: 21,
  level: 'N5',
  title: 'Bài 21: Bày tỏ Ý kiến & Trích dẫn',
  topicVi: 'Suy nghĩ, Ý kiến, Bày tỏ quan điểm & Tin tức đời sống',
  icon: '💡',
  grammarPoint: 'Bày tỏ ý kiến cá nhân: [Thể thông thường] + と思います (Tôi nghĩ rằng...). Thuật lại lời nói của người khác: [Thể thông thường] + と言いました (Ai đó đã nói là...). Xác nhận đồng tình: [Thể thông thường] + でしょう？ (Có đúng không nhỉ?).',
  vocab: [
    {
      id: 'n5_l21_01',
      lesson: 21,
      lessonId: 21,
      level: 'N5',
      kanji: '言います',
      hanViet: 'Ngôn',
      hiragana: 'いいます',
      romaji: 'iimasu',
      meaning: 'nói, bảo rằng',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="40" r="16" fill="#FFA94D"/><path d="M26 80 C26 62 74 62 74 80 Z" fill="#1C7ED6"/><path d="M68 36 C74 32 78 40 74 46" stroke="#1864AB" stroke-width="3" fill="none"/></svg>`,
      example: {
        ja: '田中さんは明日休むと言いました。',
        hira: 'たなかさんは あした やすむと いいました。',
        vi: 'Anh Tanaka đã nói rằng ngày mai anh ấy sẽ nghỉ.'
      }
    },
    {
      id: 'n5_l21_02',
      lesson: 21,
      lessonId: 21,
      level: 'N5',
      kanji: '足ります',
      hanViet: 'Túc',
      hiragana: 'たります',
      romaji: 'tarimasu',
      meaning: 'đủ, đầy đủ (Động từ nhóm 2)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><circle cx="50" cy="50" r="26" fill="#40C057"/><path d="M38 50 L46 58 L62 42" stroke="#FFF" stroke-width="5" fill="none" stroke-linecap="round"/></svg>`,
      example: {
        ja: '時間が足りませんから急ぎましょう。',
        hira: 'じかんが たりませんから いそぎましょう。',
        vi: 'Vì không đủ thời gian nên chúng ta hãy khẩn trương lên.'
      }
    },
    {
      id: 'n5_l21_03',
      lesson: 21,
      lessonId: 21,
      level: 'N5',
      kanji: '勝ちます',
      hanViet: 'Thắng',
      hiragana: 'かちます',
      romaji: 'kachimasu',
      meaning: 'thắng, chiến thắng',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><polygon points="50,22 80,72 20,72" fill="#FAB005"/><polygon points="50,34 54,44 64,44 56,50 59,60 50,54 41,60 44,50 36,44 46,44" fill="#FFF"/></svg>`,
      example: {
        ja: '昨日のサッカーの試合は日本が勝ちました。',
        hira: 'きのうの サッカーの しあいは にほんが かちました。',
        vi: 'Trận thi đấu bóng đá hôm qua đội Nhật Bản đã giành chiến thắng.'
      }
    },
    {
      id: 'n5_l21_04',
      lesson: 21,
      lessonId: 21,
      level: 'N5',
      kanji: '負けます',
      hanViet: 'Phụ',
      hiragana: 'まけます',
      romaji: 'makemasu',
      meaning: 'thua, thất bại',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F1F3F5"/><circle cx="50" cy="50" r="24" fill="#ADB5BD"/><path d="M40 58 Q50 48 60 58" stroke="#FFF" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="43" cy="44" r="3" fill="#FFF"/><circle cx="57" cy="44" r="3" fill="#FFF"/></svg>`,
      example: {
        ja: '試合に負けてとても悔しいです。',
        hira: 'しあいに まけて とても くやしいです。',
        vi: 'Thua trận đấu tôi thấy rất tiếc nuối.'
      }
    },
    {
      id: 'n5_l21_05',
      lesson: 21,
      lessonId: 21,
      level: 'N5',
      kanji: 'あります[お祭りが～]',
      hanViet: 'Có',
      hiragana: 'あります[おまつりが～]',
      romaji: 'arimasu [omatsuri ga~]',
      meaning: 'được tổ chức, diễn ra lễ hội',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><ellipse cx="50" cy="50" rx="18" ry="24" fill="#FA5252"/><line x1="50" y1="20" x2="50" y2="26" stroke="#495057" stroke-width="3"/><line x1="50" y1="74" x2="50" y2="82" stroke="#495057" stroke-width="3"/><line x1="32" y1="50" x2="68" y2="50" stroke="#FFF" stroke-width="2"/></svg>`,
      example: {
        ja: '今夜神社でお祭りがあります。',
        hira: 'こんや じんじゃで おまつりが あります。',
        vi: 'Tối nay ở đền Thần đạo có tổ chức lễ hội.'
      }
    },
    {
      id: 'n5_l21_06',
      lesson: 21,
      lessonId: 21,
      level: 'N5',
      kanji: '役に立ちます',
      hanViet: 'Dịch Lập',
      hiragana: 'やくにたちます',
      romaji: 'yaku ni tachimasu',
      meaning: 'có ích, hữu ích, tiện dụng',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="50" r="26" fill="#20C997"/><polygon points="50,30 55,42 67,42 57,50 61,62 50,55 39,62 43,50 33,42 45,42" fill="#FFF"/></svg>`,
      example: {
        ja: 'この辞書はとても役に立ちます。',
        hira: 'この じしょは とても やくにたちます。',
        vi: 'Cuốn từ điển này rất hữu ích.'
      }
    },
    {
      id: 'n5_l21_07',
      lesson: 21,
      lessonId: 21,
      level: 'N5',
      kanji: '無駄[な]',
      hanViet: 'Vô Đà',
      hiragana: 'むだ[な]',
      romaji: 'muda [na]',
      meaning: 'lãng phí, vô ích, vô bổ',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><circle cx="50" cy="50" r="28" stroke="#FA5252" stroke-width="5" fill="none"/><line x1="32" y1="32" x2="68" y2="68" stroke="#FA5252" stroke-width="5"/></svg>`,
      example: {
        ja: 'お金と時間を無駄にしてはいけません。',
        hira: 'おかねと じかんを むだにしては いけません。',
        vi: 'Không được lãng phí tiền bạc và thời gian.'
      }
    },
    {
      id: 'n5_l21_08',
      lesson: 21,
      lessonId: 21,
      level: 'N5',
      kanji: '不便[な]',
      hanViet: 'Bất Tiện',
      hiragana: 'ふべん[な]',
      romaji: 'fuben [na]',
      meaning: 'bất tiện, không thuận tiện',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><rect x="28" y="32" width="44" height="40" rx="4" fill="#FF922B"/><line x1="36" y1="52" x2="64" y2="52" stroke="#FFF" stroke-width="4"/><circle cx="50" cy="42" r="3" fill="#FFF"/></svg>`,
      example: {
        ja: '駅から遠いので少し不便です。',
        hira: 'えきから とおいので すこし ふべんです。',
        vi: 'Vì xa nhà ga nên cuộc sống hơi bất tiện.'
      }
    },
    {
      id: 'n5_l21_09',
      lesson: 21,
      lessonId: 21,
      level: 'N5',
      kanji: '同じ',
      hanViet: 'Đồng',
      hiragana: 'おなじ',
      romaji: 'onaji',
      meaning: 'giống nhau, tương tự',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="50" r="26" fill="#339AF0"/><line x1="36" y1="44" x2="64" y2="44" stroke="#FFF" stroke-width="4"/><line x1="36" y1="56" x2="64" y2="56" stroke="#FFF" stroke-width="4"/></svg>`,
      example: {
        ja: '私と山田さんは同じ会社で働いています。',
        hira: 'わたしと やまださんは おなじ かいしゃで はたらいています。',
        vi: 'Tôi và anh Yamada cùng làm việc ở một công ty giống nhau.'
      }
    },
    {
      id: 'n5_l21_10',
      lesson: 21,
      lessonId: 21,
      level: 'N5',
      kanji: 'すごい',
      hanViet: 'Xuất sắc',
      hiragana: 'すごい',
      romaji: 'sugoi',
      meaning: 'ghê quá, giỏi quá, siêu đẳng',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><circle cx="50" cy="50" r="26" fill="#F59F00"/><polygon points="50,28 56,40 68,40 58,48 62,60 50,53 38,60 42,48 32,40 44,40" fill="#FFF"/></svg>`,
      example: {
        ja: '日本語がペラペラですね。すごいです！',
        hira: 'にほんごが ペラペラですね。すごいです！',
        vi: 'Tiếng Nhật của bạn lưu loát quá. Giỏi thật đấy!'
      }
    },
    {
      id: 'n5_l21_11',
      lesson: 21,
      lessonId: 21,
      level: 'N5',
      kanji: '首相',
      hanViet: 'Thủ Tướng',
      hiragana: 'しゅしょう',
      romaji: 'shushou',
      meaning: 'thủ tướng chính phủ',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="38" r="16" fill="#FFA94D"/><path d="M26 80 C26 62 74 62 74 80 Z" fill="#1864AB"/><polygon points="50,56 46,76 54,76" fill="#FA5252"/></svg>`,
      example: {
        ja: '日本の首相がテレビで演説しました。',
        hira: 'にほんの しゅしょうが テレビで えんぜつしました。',
        vi: 'Thủ tướng Nhật Bản đã phát biểu diễn thuyết trên truyền hình.'
      }
    },
    {
      id: 'n5_l21_12',
      lesson: 21,
      lessonId: 21,
      level: 'N5',
      kanji: '大統領',
      hanViet: 'Đại Thống Lãnh',
      hiragana: 'だいとうりょう',
      romaji: 'daitouryou',
      meaning: 'tổng thống',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><circle cx="50" cy="38" r="16" fill="#FFA94D"/><path d="M26 80 C26 62 74 62 74 80 Z" fill="#5F3DC4"/><circle cx="50" cy="22" r="5" fill="#FCC419"/></svg>`,
      example: {
        ja: 'アメリカの大統領が日本を訪問しました。',
        hira: 'アメリカの だいとうりょうが にほんを ほうもんしました。',
        vi: 'Tổng thống Mỹ đã có chuyến viếng thăm Nhật Bản.'
      }
    },
    {
      id: 'n5_l21_13',
      lesson: 21,
      lessonId: 21,
      level: 'N5',
      kanji: '政治',
      hanViet: 'Chính Trị',
      hiragana: 'せいじ',
      romaji: 'seiji',
      meaning: 'chính trị',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><polygon points="50,22 22,40 78,40" fill="#1C7ED6"/><rect x="30" y="40" width="8" height="28" fill="#1864AB"/><rect x="46" y="40" width="8" height="28" fill="#1864AB"/><rect x="62" y="40" width="8" height="28" fill="#1864AB"/><rect x="22" y="68" width="56" height="8" fill="#1C7ED6"/></svg>`,
      example: {
        ja: '大学で日本の政治について勉強しています。',
        hira: 'だいがくで にほんの せいじについて べんきょうしています。',
        vi: 'Tôi đang nghiên cứu về chính trị Nhật Bản tại trường đại học.'
      }
    },
    {
      id: 'n5_l21_14',
      lesson: 21,
      lessonId: 21,
      level: 'N5',
      kanji: 'ニュース',
      hanViet: 'Thời sự',
      hiragana: 'ニュース',
      romaji: 'nyuusu',
      meaning: 'bản tin, tin tức thời sự',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><rect x="24" y="28" width="52" height="42" rx="4" fill="#FD7E14"/><circle cx="36" cy="42" r="5" fill="#FFF"/><line x1="46" y1="38" x2="68" y2="38" stroke="#FFF" stroke-width="2.5"/><line x1="46" y1="46" x2="68" y2="46" stroke="#FFF" stroke-width="2.5"/><line x1="30" y1="56" x2="70" y2="56" stroke="#FFF" stroke-width="2.5"/></svg>`,
      example: {
        ja: '毎朝七時のニュースを見ます。',
        hira: 'まいあさ しちじの ニュースを みます。',
        vi: 'Mỗi sáng tôi đều theo dõi bản tin thời sự lúc 7 giờ.'
      }
    },
    {
      id: 'n5_l21_15',
      lesson: 21,
      lessonId: 21,
      level: 'N5',
      kanji: 'スピーチ',
      hanViet: 'Diễn thuyết',
      hiragana: 'スピーチ',
      romaji: 'supiichi',
      meaning: 'bài diễn thuyết, phát biểu',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><rect x="44" y="24" width="12" height="24" rx="6" fill="#F59F00"/><line x1="50" y1="48" x2="50" y2="68" stroke="#495057" stroke-width="3"/><line x1="38" y1="68" x2="62" y2="68" stroke="#495057" stroke-width="4"/><path d="M38 34 Q34 46 50 46 Q66 46 62 34" stroke="#E67700" stroke-width="2" fill="none"/></svg>`,
      example: {
        ja: '結婚式でスピーチをしなければなりません。',
        hira: 'けっこんしきで スピーチを しなければなりません。',
        vi: 'Tôi phải có một bài phát biểu tại lễ cưới.'
      }
    },
    {
      id: 'n5_l21_16',
      lesson: 21,
      lessonId: 21,
      level: 'N5',
      kanji: '試合',
      hanViet: 'Thí Hợp',
      hiragana: 'しあい',
      romaji: 'shiai',
      meaning: 'trận đấu, cuộc thi đấu thể thao',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><circle cx="50" cy="50" r="26" fill="#FA5252"/><path d="M36 50 L46 60 L64 40" stroke="#FFF" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`,
      example: {
        ja: '明日の午後野球の試合があります。',
        hira: 'あしたの ごご やきゅうの しあいが あります。',
        vi: 'Chiều mai sẽ diễn ra trận thi đấu bóng chày.'
      }
    },
    {
      id: 'n5_l21_17',
      lesson: 21,
      lessonId: 21,
      level: 'N5',
      kanji: 'アルバイト',
      hanViet: 'Làm thêm',
      hiragana: 'アルバイト',
      romaji: 'arubaito',
      meaning: 'công việc làm thêm, bán thời gian',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><rect x="28" y="28" width="44" height="46" rx="4" fill="#20C997"/><circle cx="50" cy="46" r="12" fill="#FFF"/><text x="50" y="51" font-size="14" font-weight="bold" fill="#099268" text-anchor="middle">¥</text></svg>`,
      example: {
        ja: 'コンビニでアルバイトをしています。',
        hira: 'コンビニで アルバイトを しています。',
        vi: 'Tôi đang làm thêm tại một cửa hàng tiện lợi.'
      }
    }
  ]
},

  // --------------------------------------------------------------------------
  // BÃ€I 22: NHÃ€ Cá»¬A KIá»‚U NHáº¬T & Má»†NH Äá»€ Äá»ŠNH NGá»®
  // --------------------------------------------------------------------------
{
  lessonNumber: 22,
  level: 'N5',
  title: 'Bài 22: Nhà cửa kiểu Nhật & Mệnh đề định ngữ',
  topicVi: 'Phòng ốc truyền thống, Tiền thuê nhà & Mệnh đề bổ nghĩa cho Danh từ',
  icon: '🏡',
  grammarPoint: 'Mệnh đề bổ nghĩa cho Danh từ (Định ngữ): Trong tiếng Nhật, mệnh đề bổ nghĩa luôn đứng trước Danh từ được bổ nghĩa, và động từ trong mệnh đề bổ nghĩa bắt buộc chia về Thể Thông thường (Futsuukei). Chủ ngữ của mệnh đề bổ nghĩa đi với trợ từ が.',
  vocab: [
    {
      id: 'n5_l22_01',
      lesson: 22,
      lessonId: 22,
      level: 'N5',
      kanji: 'こちら',
      hanViet: 'Phía này',
      hiragana: 'こちら',
      romaji: 'kochira',
      meaning: 'cái này / người này / phía này (lịch sự)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><path d="M30 50 L65 50 M55 38 L68 50 L55 62" stroke="#1C7ED6" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="76" cy="50" r="5" fill="#1864AB"/></svg>`,
      example: {
        ja: 'こちらは新しくできたアパートです。',
        hira: 'こちらは あたらしく できた アパートです。',
        vi: 'Đây là căn hộ chung cư mới xây xong.'
      }
    },
    {
      id: 'n5_l22_02',
      lesson: 22,
      lessonId: 22,
      level: 'N5',
      kanji: '家賃',
      hanViet: 'Gia Nhẫm',
      hiragana: 'やちん',
      romaji: 'yachin',
      meaning: 'tiền thuê nhà hàng tháng',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><polygon points="50,24 24,44 76,44" fill="#E8590C"/><rect x="30" y="44" width="40" height="32" fill="#FFA94D"/><rect x="44" y="54" width="12" height="22" fill="#FFF"/><text x="50" y="68" font-size="10" font-weight="bold" fill="#D9480F" text-anchor="middle">¥</text></svg>`,
      example: {
        ja: '毎月の家賃は八万円です。',
        hira: 'まいつきの やちんは はちまんえんです。',
        vi: 'Tiền thuê nhà mỗi tháng là 8 vạn Yên.'
      }
    },
    {
      id: 'n5_l22_03',
      lesson: 22,
      lessonId: 22,
      level: 'N5',
      kanji: 'うーん',
      hanViet: 'Đắn đo',
      hiragana: 'うーん',
      romaji: 'uun',
      meaning: 'ừ ~ để tôi xem / ừm...',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F1F3F5"/><circle cx="50" cy="46" r="22" fill="#FFA94D"/><ellipse cx="44" cy="42" rx="3" ry="2" fill="#343A40"/><ellipse cx="56" cy="42" rx="3" ry="2" fill="#343A40"/><path d="M42 56 Q50 50 58 56" stroke="#343A40" stroke-width="2.5" fill="none"/></svg>`,
      example: {
        ja: 'うーん、少し駅から遠いですね。',
        hira: 'うーん、すこし えきから とおいですね。',
        vi: 'Ừm ~, cách nhà ga hơi xa một chút nhỉ.'
      }
    },
    {
      id: 'n5_l22_04',
      lesson: 22,
      lessonId: 22,
      level: 'N5',
      kanji: 'ダイニングキッチン',
      hanViet: 'Bếp ăn',
      hiragana: 'ダイニングキッチン',
      romaji: 'dainingu kicchin',
      meaning: 'bếp kèm phòng ăn (DK)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><rect x="25" y="36" width="50" height="34" rx="3" fill="#20C997"/><rect x="30" y="44" width="16" height="12" fill="#FFF"/><rect x="52" y="44" width="18" height="12" fill="#099268"/></svg>`,
      example: {
        ja: 'この部屋には広いダイニングキッチンがあります。',
        hira: 'この へやには ひろい ダイニングキッチンが あります。',
        vi: 'Căn phòng này có khu bếp kèm phòng ăn rất rộng rãi.'
      }
    },
    {
      id: 'n5_l22_05',
      lesson: 22,
      lessonId: 22,
      level: 'N5',
      kanji: '和室',
      hanViet: 'Hòa Thất',
      hiragana: 'わしつ',
      romaji: 'washitsu',
      meaning: 'phòng kiểu Nhật trải chiếu Tatami',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><rect x="24" y="32" width="52" height="42" fill="#FAB005"/><line x1="50" y1="32" x2="50" y2="74" stroke="#FFF" stroke-width="2"/><line x1="24" y1="53" x2="76" y2="53" stroke="#FFF" stroke-width="2"/></svg>`,
      example: {
        ja: '日本の家にはたいてい和室があります。',
        hira: 'にほんの いえには たいてい わしつが あります。',
        vi: 'Trong nhà ở Nhật thường có phòng kiểu Nhật truyền thống.'
      }
    },
    {
      id: 'n5_l22_06',
      lesson: 22,
      lessonId: 22,
      level: 'N5',
      kanji: '押入れ',
      hanViet: 'Áp Nhập',
      hiragana: 'おしいれ',
      romaji: 'oshiire',
      meaning: 'tủ âm tường để chăn gối phòng Nhật',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><rect x="26" y="28" width="48" height="48" fill="#D9480F"/><line x1="50" y1="28" x2="50" y2="76" stroke="#FFF" stroke-width="2"/><circle cx="44" cy="52" r="2" fill="#FFF"/><circle cx="56" cy="52" r="2" fill="#FFF"/></svg>`,
      example: {
        ja: '布団を押入れにしまいます。',
        hira: 'ふとんを おしいれに しまいます。',
        vi: 'Tôi cất chăn đệm vào trong tủ âm tường.'
      }
    },
    {
      id: 'n5_l22_07',
      lesson: 22,
      lessonId: 22,
      level: 'N5',
      kanji: '布団',
      hanViet: 'Bố Đoàn',
      hiragana: 'ふとん',
      romaji: 'futon',
      meaning: 'chăn đệm nệm kiểu Nhật',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF0F6"/><rect x="26" y="38" width="48" height="30" rx="6" fill="#F06595"/><rect x="30" y="32" width="20" height="10" rx="3" fill="#FFF"/><path d="M26 50 Q50 56 74 50" stroke="#FFF" stroke-width="2" fill="none"/></svg>`,
      example: {
        ja: '和室に布団を敷いて寝ます。',
        hira: 'わしつに ふとんを しいて ねます。',
        vi: 'Tôi trải nệm ở phòng kiểu Nhật để ngủ.'
      }
    },
    {
      id: 'n5_l22_08',
      lesson: 22,
      lessonId: 22,
      level: 'N5',
      kanji: 'アパート',
      hanViet: 'Căn hộ',
      hiragana: 'アパート',
      romaji: 'apaato',
      meaning: 'nhà chung cư, căn hộ cho thuê',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="28" y="28" width="44" height="48" rx="2" fill="#339AF0"/><rect x="34" y="34" width="8" height="8" fill="#FFF"/><rect x="46" y="34" width="8" height="8" fill="#FFF"/><rect x="58" y="34" width="8" height="8" fill="#FFF"/><rect x="34" y="48" width="8" height="8" fill="#FFF"/><rect x="46" y="48" width="8" height="8" fill="#FFF"/><rect x="58" y="48" width="8" height="8" fill="#FFF"/></svg>`,
      example: {
        ja: '学校の近くのアパートに住んでいます。',
        hira: 'がっこうの ちかくの アパートに すんでいます。',
        vi: 'Tôi đang sống ở một căn hộ gần trường học.'
      }
    },
    {
      id: 'n5_l22_09',
      lesson: 22,
      lessonId: 22,
      level: 'N5',
      kanji: 'パリ',
      hanViet: 'Ba Lê',
      hiragana: 'パリ',
      romaji: 'pari',
      meaning: 'thủ đô Paris nước Pháp',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><polygon points="50,20 40,76 60,76" fill="#1864AB"/><path d="M42 66 Q50 56 58 66" fill="#FFF"/><line x1="36" y1="52" x2="64" y2="52" stroke="#339AF0" stroke-width="3"/></svg>`,
      example: {
        ja: 'いつかパリへ旅行に行きたいです。',
        hira: 'いつか パリへ りょこうに いきたいです。',
        vi: 'Một ngày nào đó tôi muốn đi du lịch đến Paris.'
      }
    },
    {
      id: 'n5_l22_10',
      lesson: 22,
      lessonId: 22,
      level: 'N5',
      kanji: '万里の長城',
      hanViet: 'Vạn Lí Trường Thành',
      hiragana: 'ばんりのちょうじょう',
      romaji: 'banri no choujou',
      meaning: 'Vạn Lý Trường Thành',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><path d="M18 64 Q35 48 50 58 T82 44" stroke="#D9480F" stroke-width="6" fill="none"/><rect x="46" y="44" width="10" height="16" fill="#D9480F"/></svg>`,
      example: {
        ja: '中国の万里の長城を見たことがあります。',
        hira: 'ちゅうごくの ばんりのちょうじょうを みたことが あります。',
        vi: 'Tôi từng được tận mắt ngắm nhìn Vạn Lý Trường Thành ở Trung Quốc.'
      }
    },
    {
      id: 'n5_l22_11',
      lesson: 22,
      lessonId: 22,
      level: 'N5',
      kanji: '余暇開発センター',
      hanViet: 'Dư Hạ Ngoại Phát',
      hiragana: 'よかかいはつセンター',
      romaji: 'yoka kaihatsu sentaa',
      meaning: 'Trung tâm phát triển hoạt động giải trí',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><rect x="26" y="32" width="48" height="42" rx="4" fill="#40C057"/><polygon points="50,22 22,34 78,34" fill="#2B8A3E"/><circle cx="50" cy="52" r="8" fill="#FFF"/></svg>`,
      example: {
        ja: '余暇開発センターの調査を読みました。',
        hira: 'よかかいはつセンターの ちょうさを よみました。',
        vi: 'Tôi đã đọc bản khảo sát của Trung tâm phát triển hoạt động giải trí.'
      }
    },
    {
      id: 'n5_l22_12',
      lesson: 22,
      lessonId: 22,
      level: 'N5',
      kanji: 'レジャー白書',
      hanViet: 'Bạch Thư',
      hiragana: 'レジャーはくしょ',
      romaji: 'rejaa hakusho',
      meaning: 'Sách trắng về thời gian rảnh rỗi & giải trí',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F8F9FA"/><rect x="28" y="24" width="44" height="54" rx="3" fill="#FFF" stroke="#495057" stroke-width="3"/><line x1="36" y1="36" x2="64" y2="36" stroke="#495057" stroke-width="3"/><line x1="36" y1="46" x2="64" y2="46" stroke="#868E96" stroke-width="2"/><line x1="36" y1="54" x2="56" y2="54" stroke="#868E96" stroke-width="2"/></svg>`,
      example: {
        ja: 'レジャー白書によると、国内旅行が人気です。',
        hira: 'レジャーはくしょによると、こくないりょこうが にんきです。',
        vi: 'Theo Sách trắng về giải trí, du lịch nội địa rất được ưa chuộng.'
      }
    }
  ]
},

  // --------------------------------------------------------------------------
  // BÃ€I 23: THAO TÃC MÃY MÃ“C & CHá»ˆ ÄÆ¯á»œNG GIAO THÃ”NG
  // --------------------------------------------------------------------------
{
  lessonNumber: 23,
  level: 'N5',
  title: 'Bài 23: Thao tác máy móc & Chỉ đường giao thông',
  topicVi: 'Cách vận hành thiết bị, Băng qua đường & Chỉ dẫn phương hướng',
  icon: '🚦',
  grammarPoint: 'Khi làm việc gì: [Thể từ điển / Thể ない / Danh từ の] + とき (Khi...). Hễ... thì xảy ra kết quả tất nhiên: [Thể từ điển] + と (Hễ vặn núm thì âm to lên). Di chuyển qua một không gian xác định: Địa điểm を Động từ di chuyển (歩きます, 渡ります, 走ります).',
  vocab: [
    {
      id: 'n5_l23_01',
      lesson: 23,
      lessonId: 23,
      level: 'N5',
      kanji: '聞きます[先生に～]',
      hanViet: 'Văn Tiên Sinh',
      hiragana: 'ききます[せんせいに～]',
      romaji: 'kikimasu [sensei ni~]',
      meaning: 'hỏi thầy cô giáo',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="40" r="16" fill="#FFA94D"/><path d="M26 80 C26 62 74 62 74 80 Z" fill="#1C7ED6"/><circle cx="70" cy="30" r="10" fill="#FFD43B"/><text x="70" y="35" font-size="12" font-weight="bold" fill="#D9480F" text-anchor="middle">?</text></svg>`,
      example: {
        ja: '分からない言葉を先生に聞きます。',
        hira: 'わからない ことばを せんせいに ききます。',
        vi: 'Tôi hỏi giáo viên những từ ngữ chưa hiểu.'
      }
    },
    {
      id: 'n5_l23_02',
      lesson: 23,
      lessonId: 23,
      level: 'N5',
      kanji: '回します',
      hanViet: 'Hồi',
      hiragana: 'まわします',
      romaji: 'mawashimasu',
      meaning: 'vặn núm, xoay tròn',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><circle cx="50" cy="50" r="22" fill="#FD7E14"/><line x1="50" y1="36" x2="50" y2="50" stroke="#FFF" stroke-width="4" stroke-linecap="round"/><path d="M28 50 A22 22 0 1 1 50 72" stroke="#E8590C" stroke-width="3" fill="none" stroke-linecap="round"/><polygon points="46,76 52,70 52,80" fill="#E8590C"/></svg>`,
      example: {
        ja: 'このつまみを右へ回すと音が大きくなります。',
        hira: 'この つまみを みぎへ まわすと おとが おおきくなります。',
        vi: 'Hễ vặn núm này sang phải thì âm thanh sẽ to lên.'
      }
    },
    {
      id: 'n5_l23_03',
      lesson: 23,
      lessonId: 23,
      level: 'N5',
      kanji: '引きます',
      hanViet: 'Dẫn',
      hiragana: 'ひきます',
      romaji: 'hikimasu',
      meaning: 'kéo, giật về phía mình',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="36" y="24" width="28" height="52" fill="#339AF0"/><circle cx="42" cy="50" r="3" fill="#FFF"/><path d="M68 50 L84 50 M76 42 L68 50 L76 58" stroke="#1864AB" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`,
      example: {
        ja: 'このドアを引いて開けてください。',
        hira: 'この ドアを ひいて あけてください。',
        vi: 'Xin hãy kéo cánh cửa này ra để mở.'
      }
    },
    {
      id: 'n5_l23_04',
      lesson: 23,
      lessonId: 23,
      level: 'N5',
      kanji: '変えます',
      hanViet: 'Biến',
      hiragana: 'かえます',
      romaji: 'kaemasu',
      meaning: 'đổi, thay đổi kênh/chế độ',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="36" cy="50" r="14" fill="#20C997"/><circle cx="64" cy="50" r="14" fill="#099268"/><path d="M42 38 Q50 32 58 38" stroke="#087F5B" stroke-width="3" fill="none"/><path d="M58 62 Q50 68 42 62" stroke="#087F5B" stroke-width="3" fill="none"/></svg>`,
      example: {
        ja: 'チャンネルを変えてもいいですか。',
        hira: 'チャンネルを かえても いいですか。',
        vi: 'Tôi đổi kênh truyền hình có được không?'
      }
    },
    {
      id: 'n5_l23_05',
      lesson: 23,
      lessonId: 23,
      level: 'N5',
      kanji: '触ります[ドアに～]',
      hanViet: 'Xúc',
      hiragana: 'さわります[ドアに～]',
      romaji: 'sawarimasu [doa ni~]',
      meaning: 'sờ, chạm tay vào cửa',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><path d="M44 32 C44 26 48 26 48 32 L48 46 L52 46 C52 42 56 42 56 46 L60 46 C60 42 64 42 64 46 L64 60 C64 72 40 72 40 60 Z" fill="#FA5252"/><line x1="32" y1="20" x2="32" y2="80" stroke="#495057" stroke-width="4"/></svg>`,
      example: {
        ja: 'ペンキを塗ったばかりですから触らないでください。',
        hira: 'ペンキを ぬったばかりですから さわらないでください。',
        vi: 'Sơn vừa mới quét xong nên xin đừng chạm tay vào.'
      }
    },
    {
      id: 'n5_l23_06',
      lesson: 23,
      lessonId: 23,
      level: 'N5',
      kanji: '出ます[お釣りが～]',
      hanViet: 'Xuất Điếu',
      hiragana: 'でます[おつりが～]',
      romaji: 'demasu [otsuri ga~]',
      meaning: 'tiền thừa/tiền lẻ chạy ra',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><rect x="25" y="28" width="50" height="34" rx="4" fill="#495057"/><rect x="36" y="52" width="28" height="6" fill="#212529"/><circle cx="50" cy="68" r="8" fill="#FCC419"/><text x="50" y="72" font-size="10" font-weight="bold" fill="#D9480F" text-anchor="middle">¥</text></svg>`,
      example: {
        ja: 'ボタンを押すとお釣りが出ます。',
        hira: 'ボタンを おすと おつりが でます。',
        vi: 'Hễ nhấn nút này thì tiền thừa sẽ chạy ra.'
      }
    },
    {
      id: 'n5_l23_07',
      lesson: 23,
      lessonId: 23,
      level: 'N5',
      kanji: '動きます[時計が～]',
      hanViet: 'Động Gian Kế',
      hiragana: 'うごきます[とけいが～]',
      romaji: 'ugokimasu [tokei ga~]',
      meaning: 'đồng hồ chạy, chuyển động',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="50" r="28" fill="#FFF" stroke="#1C7ED6" stroke-width="4"/><line x1="50" y1="50" x2="50" y2="34" stroke="#1864AB" stroke-width="3"/><line x1="50" y1="50" x2="62" y2="50" stroke="#FA5252" stroke-width="2"/><circle cx="50" cy="50" r="3" fill="#1864AB"/></svg>`,
      example: {
        ja: '電池を入れたら時計が動きました。',
        hira: 'でんちを いれたら とけいが うごきました。',
        vi: 'Sau khi lắp pin vào thì đồng hồ đã chạy bình thường.'
      }
    },
    {
      id: 'n5_l23_08',
      lesson: 23,
      lessonId: 23,
      level: 'N5',
      kanji: '歩きます[道を～]',
      hanViet: 'Bộ Đạo',
      hiragana: 'あるきます[みちを～]',
      romaji: 'arukimasu [michi o~]',
      meaning: 'đi bộ trên đường',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><circle cx="50" cy="30" r="10" fill="#FFA94D"/><path d="M42 44 L50 56 L58 44" stroke="#2B8A3E" stroke-width="4" fill="none"/><line x1="50" y1="56" x2="42" y2="76" stroke="#2B8A3E" stroke-width="4"/><line x1="50" y1="56" x2="60" y2="72" stroke="#2B8A3E" stroke-width="4"/></svg>`,
      example: {
        ja: '毎朝公園の道を歩きます。',
        hira: 'まいあさ こうえんの みちを あるきます。',
        vi: 'Mỗi sáng tôi đều đi bộ trên con đường trong công viên.'
      }
    },
    {
      id: 'n5_l23_09',
      lesson: 23,
      lessonId: 23,
      level: 'N5',
      kanji: '渡ります[橋を～]',
      hanViet: 'Độ Kiều',
      hiragana: 'わたります[はしを～]',
      romaji: 'watarimasu [hashi o~]',
      meaning: 'đi qua cầu, băng qua',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><path d="M20 62 Q50 42 80 62" stroke="#D9480F" stroke-width="6" fill="none"/><line x1="35" y1="54" x2="35" y2="74" stroke="#D9480F" stroke-width="3"/><line x1="65" y1="54" x2="65" y2="74" stroke="#D9480F" stroke-width="3"/><circle cx="50" cy="40" r="4" fill="#FFA94D"/></svg>`,
      example: {
        ja: '気をつけて橋を渡ってください。',
        hira: 'きをつけて はしを わたってください。',
        vi: 'Xin hãy chú ý cẩn thận khi đi qua cây cầu.'
      }
    },
    {
      id: 'n5_l23_10',
      lesson: 23,
      lessonId: 23,
      level: 'N5',
      kanji: '気をつけます[車に～]',
      hanViet: 'Khí Xa',
      hiragana: 'きをつけます[くるまに～]',
      romaji: 'ki o tsukemasu [kuruma ni~]',
      meaning: 'chú ý cẩn thận xe cộ',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><polygon points="50,20 82,76 18,76" fill="#F59F00"/><line x1="50" y1="38" x2="50" y2="58" stroke="#FFF" stroke-width="5" stroke-linecap="round"/><circle cx="50" cy="68" r="3.5" fill="#FFF"/></svg>`,
      example: {
        ja: '道を渡るとき車に気をつけてください。',
        hira: 'みちを わたるとき くるまに きをつけてください。',
        vi: 'Khi băng qua đường xin hãy chú ý xe cộ cẩn thận.'
      }
    },
    {
      id: 'n5_l23_11',
      lesson: 23,
      lessonId: 23,
      level: 'N5',
      kanji: '引っ越しします',
      hanViet: 'Dẫn Việt',
      hiragana: 'ひっこしします',
      romaji: 'hikkoshi shimasu',
      meaning: 'chuyển nhà, dọn nhà',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><rect x="25" y="44" width="34" height="26" fill="#FF922B"/><polygon points="42,26 22,44 62,44" fill="#D9480F"/><path d="M64 56 L82 56 M74 48 L82 56 L74 64" stroke="#FD7E14" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`,
      example: {
        ja: '来月新しいアパートへ引っ越しします。',
        hira: 'らいげつ あたらしい アパートへ ひっこしします。',
        vi: 'Tháng sau tôi sẽ chuyển nhà đến căn hộ mới.'
      }
    },
    {
      id: 'n5_l23_12',
      lesson: 23,
      lessonId: 23,
      level: 'N5',
      kanji: '電気屋',
      hanViet: 'Điện Khí Ốc',
      hiragana: 'でんきや',
      romaji: 'denkiya',
      meaning: 'cửa hàng đồ điện máy',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><polygon points="50,22 22,38 78,38" fill="#F59F00"/><rect x="28" y="38" width="44" height="38" fill="#FFF" stroke="#F59F00" stroke-width="2"/><polygon points="52,44 44,56 50,56 46,68 58,54 52,54" fill="#FAB005"/></svg>`,
      example: {
        ja: '電気屋で新しい冷蔵庫を買いました。',
        hira: 'でんきやで あたらしい れいぞうこを かいました。',
        vi: 'Tôi đã mua chiếc tủ lạnh mới ở tiệm điện máy.'
      }
    },
    {
      id: 'n5_l23_13',
      lesson: 23,
      lessonId: 23,
      level: 'N5',
      kanji: '～屋',
      hanViet: 'Ốc',
      hiragana: '～や',
      romaji: '~ya',
      meaning: 'cửa hàng ~, tiệm bán ~',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF0F6"/><polygon points="50,24 22,40 78,40" fill="#E64980"/><rect x="28" y="40" width="44" height="36" fill="#FFF" stroke="#E64980" stroke-width="2"/><rect x="42" y="52" width="16" height="24" fill="#FF8787"/></svg>`,
      example: {
        ja: '駅の前のパン屋でサンドイッチを買いました。',
        hira: 'えきのまえの パンやで サンドイッチを かいました。',
        vi: 'Tôi mua bánh mì kẹp ở tiệm bánh mì trước nhà ga.'
      }
    },
    {
      id: 'n5_l23_14',
      lesson: 23,
      lessonId: 23,
      level: 'N5',
      kanji: 'サイズ',
      hanViet: 'Kích cỡ',
      hiragana: 'サイズ',
      romaji: 'saizu',
      meaning: 'kích cỡ, size quần áo giày dép',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F1F3F5"/><rect x="24" y="36" width="52" height="28" rx="3" fill="#495057"/><text x="50" y="55" font-size="16" font-weight="bold" fill="#FFD43B" text-anchor="middle">SIZE: M</text></svg>`,
      example: {
        ja: 'このシャツのサイズはちょうどいいです。',
        hira: 'この シャツの サイズは ちょうどいいです。',
        vi: 'Kích cỡ chiếc áo sơ mi này vừa vặn chuẩn luôn.'
      }
    },
    {
      id: 'n5_l23_15',
      lesson: 23,
      lessonId: 23,
      level: 'N5',
      kanji: '音',
      hanViet: 'Âm',
      hiragana: 'おと',
      romaji: 'oto',
      meaning: 'âm thanh, tiếng động',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><polygon points="34,42 46,32 46,68 34,58 26,58 26,42" fill="#1C7ED6"/><path d="M54 38 Q64 50 54 62" stroke="#339AF0" stroke-width="3" fill="none"/><path d="M62 30 Q76 50 62 70" stroke="#339AF0" stroke-width="3" fill="none"/></svg>`,
      example: {
        ja: '隣の部屋から変な音が聞こえます。',
        hira: 'となりの へやから へんな おとが きこえます。',
        vi: 'Có âm thanh kỳ lạ phát ra từ căn phòng bên cạnh.'
      }
    },
    {
      id: 'n5_l23_16',
      lesson: 23,
      lessonId: 23,
      level: 'N5',
      kanji: '機械',
      hanViet: 'Cơ Giới',
      hiragana: 'きかい',
      romaji: 'kikai',
      meaning: 'máy móc, thiết bị kỹ thuật',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F8F9FA"/><circle cx="50" cy="50" r="22" fill="#868E96"/><circle cx="50" cy="50" r="8" fill="#FFF"/><rect x="46" y="22" width="8" height="10" fill="#868E96"/><rect x="46" y="68" width="8" height="10" fill="#868E96"/><rect x="22" y="46" width="10" height="8" fill="#868E96"/><rect x="68" y="46" width="10" height="8" fill="#868E96"/></svg>`,
      example: {
        ja: 'この機械の使い方を教えてください。',
        hira: 'この きかいの つかいかたを おしえてください。',
        vi: 'Xin hãy hướng dẫn tôi cách sử dụng cỗ máy này.'
      }
    },
    {
      id: 'n5_l23_17',
      lesson: 23,
      lessonId: 23,
      level: 'N5',
      kanji: 'つまみ',
      hanViet: 'Núm vặn',
      hiragana: 'つまみ',
      romaji: 'tsumami',
      meaning: 'núm vặn, nút xoay',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><circle cx="50" cy="50" r="24" fill="#FF922B"/><line x1="50" y1="32" x2="50" y2="50" stroke="#FFF" stroke-width="5" stroke-linecap="round"/></svg>`,
      example: {
        ja: 'このつまみを回して温度を調節します。',
        hira: 'この つまみを まわして おんどを ちょうせつします。',
        vi: 'Vặn núm này để điều chỉnh nhiệt độ.'
      }
    },
    {
      id: 'n5_l23_18',
      lesson: 23,
      lessonId: 23,
      level: 'N5',
      kanji: '故障',
      hanViet: 'Cố Chướng',
      hiragana: 'こしょう',
      romaji: 'koshou',
      meaning: 'sự hỏng hóc, sự cố máy',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><circle cx="50" cy="50" r="24" fill="#FA5252"/><path d="M42 38 L58 62 M58 38 L42 62" stroke="#FFF" stroke-width="4" stroke-linecap="round"/></svg>`,
      example: {
        ja: 'エレベーターが故障して動かない。',
        hira: 'エレベーターが こしょうして うごかない。',
        vi: 'Thang máy bị hỏng nên không hoạt động được.'
      }
    },
    {
      id: 'n5_l23_19',
      lesson: 23,
      lessonId: 23,
      level: 'N5',
      kanji: '道',
      hanViet: 'Đạo',
      hiragana: 'みち',
      romaji: 'michi',
      meaning: 'con đường, đường sá',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F1F3F5"/><polygon points="34,80 44,20 56,20 66,80" fill="#495057"/><line x1="50" y1="28" x2="50" y2="40" stroke="#FFD43B" stroke-width="3"/><line x1="50" y1="50" x2="50" y2="62" stroke="#FFD43B" stroke-width="3"/><line x1="50" y1="70" x2="50" y2="80" stroke="#FFD43B" stroke-width="3"/></svg>`,
      example: {
        ja: 'この道をまっすぐ行くと駅があります。',
        hira: 'この みちを まっすぐ いくと えきが あります。',
        vi: 'Đi thẳng con đường này sẽ thấy nhà ga.'
      }
    },
    {
      id: 'n5_l23_20',
      lesson: 23,
      lessonId: 23,
      level: 'N5',
      kanji: '交差点',
      hanViet: 'Giao Sai Điểm',
      hiragana: 'こうさてん',
      romaji: 'kousaten',
      meaning: 'ngã tư đường',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="42" y="16" width="16" height="68" fill="#495057"/><rect x="16" y="42" width="68" height="16" fill="#495057"/><rect x="42" y="42" width="16" height="16" fill="#343A40"/></svg>`,
      example: {
        ja: '次の交差点を右へ曲がってください。',
        hira: 'つぎの こうさてんを みぎへ まがってください。',
        vi: 'Xin hãy rẽ phải ở ngã tư tiếp theo.'
      }
    },
    {
      id: 'n5_l23_21',
      lesson: 23,
      lessonId: 23,
      level: 'N5',
      kanji: '信号',
      hanViet: 'Tín Hiệu',
      hiragana: 'しんごう',
      romaji: 'shingou',
      meaning: 'đèn tín hiệu giao thông',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F8F9FA"/><rect x="40" y="20" width="20" height="52" rx="6" fill="#343A40"/><circle cx="50" cy="30" r="6" fill="#FA5252"/><circle cx="50" cy="46" r="6" fill="#FCC419"/><circle cx="50" cy="62" r="6" fill="#40C057"/><line x1="50" y1="72" x2="50" y2="84" stroke="#495057" stroke-width="4"/></svg>`,
      example: {
        ja: '信号が赤のときは止まらなければなりません。',
        hira: 'しんごうが あかのときは とまらなければなりません。',
        vi: 'Khi đèn tín hiệu chuyển sang màu đỏ thì bắt buộc phải dừng lại.'
      }
    },
    {
      id: 'n5_l23_22',
      lesson: 23,
      lessonId: 23,
      level: 'N5',
      kanji: '角',
      hanViet: 'Giác',
      hiragana: 'かど',
      romaji: 'kado',
      meaning: 'góc đường, khúc quanh',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><path d="M30 76 L66 76 L66 24" stroke="#FD7E14" stroke-width="8" fill="none" stroke-linejoin="round"/><circle cx="66" cy="76" r="6" fill="#D9480F"/></svg>`,
      example: {
        ja: 'あそこの角にコンビニがありますよ。',
        hira: 'あそこの かどに コンビニが ありますよ。',
        vi: 'Ở khúc quanh đằng kia có cửa hàng tiện lợi đấy.'
      }
    },
    {
      id: 'n5_l23_23',
      lesson: 23,
      lessonId: 23,
      level: 'N5',
      kanji: '橋',
      hanViet: 'Kiều',
      hiragana: 'はし',
      romaji: 'hashi',
      meaning: 'cây cầu',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><path d="M18 64 Q50 40 82 64" stroke="#C92A2A" stroke-width="6" fill="none"/><line x1="34" y1="54" x2="34" y2="76" stroke="#C92A2A" stroke-width="3"/><line x1="66" y1="54" x2="66" y2="76" stroke="#C92A2A" stroke-width="3"/></svg>`,
      example: {
        ja: '大きな橋を渡って向こうの町へ行きます。',
        hira: 'おおきな はしを わたって むこうの まちへ いきます。',
        vi: 'Băng qua cây cầu lớn để sang thị trấn bên kia.'
      }
    },
    {
      id: 'n5_l23_24',
      lesson: 23,
      lessonId: 23,
      level: 'N5',
      kanji: '駐車場',
      hanViet: 'Trú Xa Trường',
      hiragana: 'ちゅうしゃじょう',
      romaji: 'chuushajou',
      meaning: 'bãi đỗ xe ô tô',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="24" y="24" width="52" height="52" rx="8" fill="#1C7ED6"/><text x="50" y="62" font-size="34" font-weight="bold" fill="#FFF" text-anchor="middle">P</text></svg>`,
      example: {
        ja: 'スーパーの駐車場に車を止めました。',
        hira: 'スーパーの ちゅうしゃじょうに くるまを とめました。',
        vi: 'Tôi đã đỗ xe ở bãi đỗ xe của siêu thị.'
      }
    },
    {
      id: 'n5_l23_25',
      lesson: 23,
      lessonId: 23,
      level: 'N5',
      kanji: 'ー目',
      hanViet: 'Mục',
      hiragana: 'ーめ',
      romaji: '~me',
      meaning: 'thứ ~, số ~ (hậu tố chỉ số thứ tự)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><circle cx="50" cy="50" r="26" fill="#FAB005"/><text x="50" y="58" font-size="20" font-weight="bold" fill="#FFF" text-anchor="middle">2nd</text></svg>`,
      example: {
        ja: '二つ目の信号を左へ曲がってください。',
        hira: 'ふたつめの しんごうを ひだりへ まがってください。',
        vi: 'Xin hãy rẽ trái ở cột đèn tín hiệu thứ hai.'
      }
    },
    {
      id: 'n5_l23_26',
      lesson: 23,
      lessonId: 23,
      level: 'N5',
      kanji: 'お正月',
      hanViet: 'Chính Nguyệt',
      hiragana: 'おしょうがつ',
      romaji: 'oshougatsu',
      meaning: 'Tết Dương lịch truyền thống Nhật',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><circle cx="50" cy="50" r="24" fill="#FA5252"/><circle cx="50" cy="50" r="16" fill="#FFF"/><text x="50" y="58" font-size="16" font-weight="bold" fill="#FA5252" text-anchor="middle">寿</text></svg>`,
      example: {
        ja: 'お正月におせち料理を食べます。',
        hira: 'おしょうがつに おせちりょうりを たべます。',
        vi: 'Vào dịp Tết tôi thưởng thức các món ăn truyền thống Osechi.'
      }
    },
    {
      id: 'n5_l23_27',
      lesson: 23,
      lessonId: 23,
      level: 'N5',
      kanji: 'ご馳走様でした',
      hanViet: 'Trì Tẩu Dạng',
      hiragana: 'ごちそうさまでした',
      romaji: 'gochisousama deshita',
      meaning: 'cảm ơn vì bữa ăn ngon',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><ellipse cx="50" cy="56" rx="26" ry="14" fill="#40C057"/><path d="M30 56 Q50 80 70 56 Z" fill="#2B8A3E"/><line x1="25" y1="38" x2="75" y2="38" stroke="#D9480F" stroke-width="4" stroke-linecap="round"/></svg>`,
      example: {
        ja: 'とてもおいしかったです。ご馳走様でした！',
        hira: 'とても おいしかったです。ごちそうさまでした！',
        vi: 'Bữa ăn rất ngon miệng. Cảm ơn vì bữa ăn thịnh soạn ạ!'
      }
    },
    {
      id: 'n5_l23_28',
      lesson: 23,
      lessonId: 23,
      level: 'N5',
      kanji: '建物',
      hanViet: 'Kiến Vật',
      hiragana: 'たてもの',
      romaji: 'tatemono',
      meaning: 'tòa nhà, công trình xây dựng',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="30" y="24" width="40" height="56" rx="2" fill="#1C7ED6"/><rect x="36" y="32" width="8" height="8" fill="#FFF"/><rect x="56" y="32" width="8" height="8" fill="#FFF"/><rect x="36" y="46" width="8" height="8" fill="#FFF"/><rect x="56" y="46" width="8" height="8" fill="#FFF"/><rect x="44" y="64" width="12" height="16" fill="#1864AB"/></svg>`,
      example: {
        ja: 'あそこに高い建物が見えますね。',
        hira: 'あそこに たかい たてものが みえますね。',
        vi: 'Ở đằng kia có thể nhìn thấy tòa nhà cao ốc nhỉ.'
      }
    },
    {
      id: 'n5_l23_29',
      lesson: 23,
      lessonId: 23,
      level: 'N5',
      kanji: '外国人登録証',
      hanViet: 'Ngoại Quốc Nhân Đăng Lục Chứng',
      hiragana: 'がいこくじんとうろくしょう',
      romaji: 'gaikokujin tourokushou',
      meaning: 'thẻ đăng ký người nước ngoài',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><rect x="22" y="30" width="56" height="40" rx="4" fill="#20C997"/><circle cx="36" cy="50" r="8" fill="#FFF"/><line x1="50" y1="44" x2="70" y2="44" stroke="#FFF" stroke-width="3"/><line x1="50" y1="52" x2="66" y2="52" stroke="#FFF" stroke-width="3"/></svg>`,
      example: {
        ja: '役所で外国人登録証の手続きをしました。',
        hira: 'やくしょで がいこくじんとうろくしょうの てつづきを しました。',
        vi: 'Tôi đã làm thủ tục cấp thẻ đăng ký người nước ngoài ở ủy ban.'
      }
    },
    {
      id: 'n5_l23_30',
      lesson: 23,
      lessonId: 23,
      level: 'N5',
      kanji: '法隆寺',
      hanViet: 'Pháp Long Tự',
      hiragana: 'ほうりゅうじ',
      romaji: 'houryuuji',
      meaning: 'chùa Horyuji cổ kính tại Nara',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><polygon points="50,18 30,30 70,30" fill="#D9480F"/><polygon points="50,30 26,44 74,44" fill="#D9480F"/><polygon points="50,44 22,58 78,58" fill="#D9480F"/><rect x="36" y="58" width="28" height="22" fill="#FFA94D"/><rect x="44" y="68" width="12" height="12" fill="#D9480F"/></svg>`,
      example: {
        ja: '奈良の法隆寺は世界で一番古い木造建築です。',
        hira: 'ならの ほうりゅうじは せかいで いちばん ふるい もくぞうけんちくです。',
        vi: 'Chùa Horyuji ở Nara là công trình kiến trúc bằng gỗ cổ nhất thế giới.'
      }
    }
  ]
},

  // --------------------------------------------------------------------------
  // BÃ€I 24: CHO NHáº¬N Ã‚N HUá»† & GIÃšP Äá» 
  // --------------------------------------------------------------------------
{
  lessonNumber: 24,
  level: 'N5',
  title: 'Bài 24: Cho nhận ân huệ & Giúp đỡ',
  topicVi: 'Tặng quà, Trao nhận ân huệ & Giúp đỡ lẫn nhau',
  icon: '🎁',
  grammarPoint: 'Các cấu trúc cho - nhận hành động (Ân huệ): [Người khác] が わたしに Danh từ を くれます (Ai đó tặng quà cho tôi). [Ai đó] に/から V-て もらいます (Nhận được hành động giúp đỡ từ ai). [Người khác] が わたしに V-て くれます (Ai đó làm giúp tôi việc gì). V-て あげます (Tôi làm giúp ai việc gì).',
  vocab: [
    {
      id: 'n5_l24_01',
      lesson: 24,
      lessonId: 24,
      level: 'N5',
      kanji: 'くれます',
      hanViet: 'Cho tôi',
      hiragana: 'くれます',
      romaji: 'kuremasu',
      meaning: 'cho, tặng tôi / người thân của tôi',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF0F6"/><rect x="28" y="38" width="44" height="36" rx="4" fill="#F06595"/><rect x="46" y="38" width="8" height="36" fill="#FFF"/><line x1="28" y1="52" x2="72" y2="52" stroke="#FFF" stroke-width="6"/><circle cx="50" cy="34" r="8" fill="#FF8787"/></svg>`,
      example: {
        ja: '誕生日に母が時計をくれました。',
        hira: 'たんじょうびに ははが とけいを くれました。',
        vi: 'Vào ngày sinh nhật mẹ đã tặng tôi một chiếc đồng hồ đeo tay.'
      }
    },
    {
      id: 'n5_l24_02',
      lesson: 24,
      lessonId: 24,
      level: 'N5',
      kanji: '連れて行きます',
      hanViet: 'Liên Hành',
      hiragana: 'つれていきます',
      romaji: 'tsurete ikimasu',
      meaning: 'dẫn đi cùng, dắt đi theo',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="38" cy="36" r="12" fill="#339AF0"/><path d="M22 74 C22 56 54 56 54 74 Z" fill="#1C7ED6"/><circle cx="64" cy="46" r="9" fill="#FFA94D"/><path d="M52 74 C52 62 76 62 76 74 Z" fill="#F76707"/><line x1="44" y1="60" x2="58" y2="64" stroke="#495057" stroke-width="3"/></svg>`,
      example: {
        ja: '週末に子供を動物園へ連れて行きます。',
        hira: 'しゅうまつに こどもを どうぶつえんへ つれていきます。',
        vi: 'Dịp cuối tuần tôi dẫn các con đi chơi ở vườn bách thú.'
      }
    },
    {
      id: 'n5_l24_03',
      lesson: 24,
      lessonId: 24,
      level: 'N5',
      kanji: 'ワゴン車',
      hanViet: 'Xa',
      hiragana: 'ワゴンしゃ',
      romaji: 'wagonsha',
      meaning: 'xe ô tô kiểu wagon, xe chở gia đình',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><rect x="20" y="40" width="60" height="24" rx="4" fill="#FD7E14"/><rect x="26" y="32" width="46" height="14" rx="2" fill="#FFA94D"/><circle cx="34" cy="66" r="8" fill="#343A40"/><circle cx="66" cy="66" r="8" fill="#343A40"/><rect x="30" y="34" width="16" height="10" fill="#FFF"/><rect x="52" y="34" width="16" height="10" fill="#FFF"/></svg>`,
      example: {
        ja: '家族みんなでワゴン車に乗って海へ行きました。',
        hira: 'かぞく みんなで ワゴンしゃに のって うみへ いきました。',
        vi: 'Cả gia đình cùng ngồi trên chiếc xe wagon đi ra bãi biển.'
      }
    },
    {
      id: 'n5_l24_04',
      lesson: 24,
      lessonId: 24,
      level: 'N5',
      kanji: 'お弁当',
      hanViet: 'Biện Đương',
      hiragana: 'おべんとう',
      romaji: 'obentou',
      meaning: 'cơm hộp bento Nhật Bản',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><rect x="24" y="32" width="52" height="40" rx="4" fill="#D9480F"/><rect x="28" y="36" width="20" height="32" rx="2" fill="#FFF"/><circle cx="38" cy="52" r="4" fill="#E03131"/><rect x="52" y="36" width="20" height="14" rx="2" fill="#40C057"/><rect x="52" y="54" width="20" height="14" rx="2" fill="#FAB005"/></svg>`,
      example: {
        ja: '毎朝自分でお弁当を作っています。',
        hira: 'まいあさ じぶんで おべんとうを つくっています。',
        vi: 'Mỗi sáng tôi đều tự tay nấu cơm hộp bento mang đi làm.'
      }
    },
    {
      id: 'n5_l24_05',
      lesson: 24,
      lessonId: 24,
      level: 'N5',
      kanji: '母の日',
      hanViet: 'Mẫu Nhật',
      hiragana: 'ははのひ',
      romaji: 'haha no hi',
      meaning: 'Ngày của Mẹ',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF0F6"/><circle cx="50" cy="42" r="16" fill="#F06595"/><circle cx="42" cy="38" r="8" fill="#FF8787"/><circle cx="58" cy="38" r="8" fill="#FF8787"/><line x1="50" y1="58" x2="50" y2="78" stroke="#40C057" stroke-width="4"/><path d="M50 68 Q58 64 62 68" stroke="#40C057" stroke-width="3" fill="none"/></svg>`,
      example: {
        ja: '母の日にきれいなカーネーションを贈りました。',
        hira: 'ははのひに きれいな カーネーションを おくりました。',
        vi: 'Vào Ngày của Mẹ tôi đã gửi tặng mẹ những bông hoa cẩm chướng tuyệt đẹp.'
      }
    }
  ]
},

  // --------------------------------------------------------------------------
  // BÃ€I 25: ÄIá»€U KIá»†N GIáº¢ Äá»ŠNH & Tá»T NGHIá»†P N5 LÃŠN N4
  // --------------------------------------------------------------------------
{
  lessonNumber: 25,
  level: 'N5',
  title: 'Bài 25: Giả định, Điều kiện & Tốt nghiệp N5 lên N4',
  topicVi: 'Điều kiện giả định たら, Dù cho ても & Hoàn thành N5 chinh phục Phú Sĩ',
  icon: '🎓',
  grammarPoint: 'Cấu trúc điều kiện giả định trong tương lai: [Động từ thể Quá khứ た / Tính từ / Danh từ] + ら (Nếu... thì). Phối hợp với phó từ もし (Nếu như). Cấu trúc nghịch biện dù cho: [Động từ thể て / Tính từ đuôi く / Tính từ đuôi で] + も (Dù cho... thì vẫn). Phối hợp với phó từ いくら (Dù cho có... đến mấy).',
  vocab: [
    {
      id: 'n5_l25_01',
      lesson: 25,
      lessonId: 25,
      level: 'N5',
      kanji: '考えます',
      hanViet: 'Khảo',
      hiragana: 'かんがえます',
      romaji: 'kangaemasu',
      meaning: 'suy nghĩ, đắn đo suy xét',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="45" r="20" fill="#339AF0"/><circle cx="50" cy="45" r="8" fill="#FFF"/><path d="M42 70 L58 70" stroke="#1864AB" stroke-width="4"/><circle cx="70" cy="30" r="4" fill="#FFA94D"/><circle cx="78" cy="22" r="6" fill="#FFA94D"/></svg>`,
      example: {
        ja: 'よく考えてから答えを出してください。',
        hira: 'よく かんがえてから こたえを だしてください。',
        vi: 'Hãy suy nghĩ thật kỹ rồi hãy đưa ra câu trả lời.'
      }
    },
    {
      id: 'n5_l25_02',
      lesson: 25,
      lessonId: 25,
      level: 'N5',
      kanji: '着きます[駅に～]',
      hanViet: 'Trước Dịch',
      hiragana: 'つきます[えきに～]',
      romaji: 'tsukimasu [eki ni~]',
      meaning: 'đến nhà ga, tới nơi',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><rect x="25" y="32" width="50" height="38" rx="4" fill="#40C057"/><polygon points="50,18 20,34 80,34" fill="#2B8A3E"/><rect x="42" y="46" width="16" height="24" fill="#FFF"/></svg>`,
      example: {
        ja: '電車は午後三時に東京駅に着きます。',
        hira: 'でんしゃは ごご さんじに とうきょうえきに つきます。',
        vi: 'Chuyến tàu sẽ đến ga Tokyo vào lúc 3 giờ chiều.'
      }
    },
    {
      id: 'n5_l25_03',
      lesson: 25,
      lessonId: 25,
      level: 'N5',
      kanji: '留学します',
      hanViet: 'Lưu Học',
      hiragana: 'りゅうがくします',
      romaji: 'ryuugaku shimasu',
      meaning: 'đi du học nước ngoài',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="50" cy="38" r="16" fill="#FFA94D"/><polygon points="50,14 26,24 50,34 74,24" fill="#343A40"/><path d="M26 80 C26 62 74 62 74 80 Z" fill="#1C7ED6"/><circle cx="68" cy="24" r="3" fill="#FAB005"/></svg>`,
      example: {
        ja: '来年の秋から日本の大学へ留学します。',
        hira: 'らいねんの あきから にほんの だいがくへ りゅうがくします。',
        vi: 'Từ mùa thu năm sau tôi sẽ đi du học tại trường đại học ở Nhật Bản.'
      }
    },
    {
      id: 'n5_l25_04',
      lesson: 25,
      lessonId: 25,
      level: 'N5',
      kanji: '取ります[年を～]',
      hanViet: 'Thủ Niên',
      hiragana: 'とります[としを～]',
      romaji: 'torimasu [toshi o~]',
      meaning: 'thêm tuổi, có tuổi, già đi',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F8F9FA"/><circle cx="50" cy="40" r="16" fill="#FFA94D"/><path d="M38 28 C38 22 62 22 62 28" stroke="#ADB5BD" stroke-width="4" fill="none"/><line x1="58" y1="56" x2="68" y2="78" stroke="#868E96" stroke-width="4" stroke-linecap="round"/><path d="M28 80 C28 64 72 64 72 80 Z" fill="#495057"/></svg>`,
      example: {
        ja: '年を取ったら静かな田舎で暮らしたいです。',
        hira: 'としを とったら しずかな いなかで くらしたいです。',
        vi: 'Khi có tuổi tôi muốn được sống ở một vùng quê yên bình.'
      }
    },
    {
      id: 'n5_l25_05',
      lesson: 25,
      lessonId: 25,
      level: 'N5',
      kanji: '田舎',
      hanViet: 'Điền Xá',
      hiragana: 'いなか',
      romaji: 'inaka',
      meaning: 'quê hương, vùng nông thôn',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#EBFBEE"/><polygon points="20,74 50,42 80,74" fill="#51CF66"/><polygon points="45,74 65,52 85,74" fill="#40C057"/><rect x="36" y="56" width="16" height="18" fill="#D9480F"/><polygon points="32,56 44,46 56,56" fill="#E8590C"/></svg>`,
      example: {
        ja: '夏休みに田舎の祖父母の家へ帰ります。',
        hira: 'なつやすみに いなかの そふぼの いえへ かえります。',
        vi: 'Vào kỳ nghỉ hè tôi về thăm quê của ông bà.'
      }
    },
    {
      id: 'n5_l25_06',
      lesson: 25,
      lessonId: 25,
      level: 'N5',
      kanji: '大使館',
      hanViet: 'Đại Sứ Quán',
      hiragana: 'たいしかん',
      romaji: 'taishikan',
      meaning: 'đại sứ quán',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><polygon points="50,20 22,36 78,36" fill="#1C7ED6"/><rect x="28" y="36" width="44" height="42" fill="#FFF" stroke="#1C7ED6" stroke-width="2"/><circle cx="50" cy="52" r="6" fill="#FA5252"/><line x1="26" y1="20" x2="26" y2="36" stroke="#495057" stroke-width="2"/><rect x="26" y="20" width="12" height="8" fill="#FA5252"/></svg>`,
      example: {
        ja: 'ビザを申請するために大使館へ行きました。',
        hira: 'ビザを しんせいするために たいしかんへ いきました。',
        vi: 'Tôi đã đến đại sứ quán để làm thủ tục xin visa.'
      }
    },
    {
      id: 'n5_l25_07',
      lesson: 25,
      lessonId: 25,
      level: 'N5',
      kanji: 'グループ',
      hanViet: 'Nhóm',
      hiragana: 'グループ',
      romaji: 'guruupu',
      meaning: 'nhóm, đoàn thể',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><circle cx="34" cy="40" r="10" fill="#FFA94D"/><path d="M22 66 C22 52 46 52 46 66 Z" fill="#FF922B"/><circle cx="66" cy="40" r="10" fill="#FFA94D"/><path d="M54 66 C54 52 78 52 78 66 Z" fill="#FF922B"/><circle cx="50" cy="34" r="10" fill="#339AF0"/><path d="M38 64 C38 50 62 50 62 64 Z" fill="#1C7ED6"/></svg>`,
      example: {
        ja: '四人のグループで日本語の発表をします。',
        hira: 'よにんの グループで にほんごの はっぴょうを します。',
        vi: 'Nhóm 4 người chúng tôi sẽ thuyết trình bằng tiếng Nhật.'
      }
    },
    {
      id: 'n5_l25_08',
      lesson: 25,
      lessonId: 25,
      level: 'N5',
      kanji: 'チャンス',
      hanViet: 'Cơ hội',
      hiragana: 'チャンス',
      romaji: 'chansu',
      meaning: 'cơ hội, dịp may',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF9DB"/><polygon points="50,22 58,38 76,38 62,50 66,66 50,56 34,66 38,50 24,38 42,38" fill="#FAB005"/><circle cx="50" cy="48" r="4" fill="#FFF"/></svg>`,
      example: {
        ja: '留学のチャンスがあればぜひ行きたいです。',
        hira: 'りゅうがくの チャンスが あれば ぜひ いきたいです。',
        vi: 'Nếu có cơ hội du học tôi nhất định sẽ nắm bắt và đi ngay.'
      }
    },
    {
      id: 'n5_l25_09',
      lesson: 25,
      lessonId: 25,
      level: 'N5',
      kanji: '億',
      hanViet: 'Ức',
      hiragana: 'おく',
      romaji: 'oku',
      meaning: 'một trăm triệu (100.000.000)',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><circle cx="50" cy="50" r="28" fill="#20C997"/><text x="50" y="58" font-size="22" font-weight="bold" fill="#FFF" text-anchor="middle">10⁸</text></svg>`,
      example: {
        ja: 'もし一億円あったら世界旅行をしたいです。',
        hira: 'もし いちおくえん あったら せかいりょこうを したいです。',
        vi: 'Nếu có 100 triệu Yên tôi muốn đi du lịch vòng quanh thế giới.'
      }
    },
    {
      id: 'n5_l25_10',
      lesson: 25,
      lessonId: 25,
      level: 'N5',
      kanji: 'もし[～たら]',
      hanViet: 'Giả định',
      hiragana: 'もし[～たら]',
      romaji: 'moshi [~tara]',
      meaning: 'nếu ~ thì, giả sử',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#F3F0FF"/><circle cx="50" cy="46" r="24" fill="#845EF7"/><text x="50" y="56" font-size="28" font-weight="bold" fill="#FFF" text-anchor="middle">IF</text></svg>`,
      example: {
        ja: 'もし雨が降ったら試合は中止になります。',
        hira: 'もし あめが ふったら しあいは ちゅうしに なります。',
        vi: 'Nếu như trời mưa thì trận đấu sẽ bị hoãn lại.'
      }
    },
    {
      id: 'n5_l25_11',
      lesson: 25,
      lessonId: 25,
      level: 'N5',
      kanji: 'いくら[～ても]',
      hanViet: 'Điều kiện',
      hiragana: 'いくら[～ても]',
      romaji: 'ikura [~temo]',
      meaning: 'cho dù thế nào ~ đi chăng nữa',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><circle cx="50" cy="50" r="26" fill="#FA5252"/><path d="M34 50 L66 50" stroke="#FFF" stroke-width="5" stroke-linecap="round"/><circle cx="50" cy="36" r="4" fill="#FFF"/><circle cx="50" cy="64" r="4" fill="#FFF"/></svg>`,
      example: {
        ja: 'いくら安くても、必要のない物は買いません。',
        hira: 'いくら やすくても、ひつようのない ものは かいません。',
        vi: 'Dù cho có rẻ đến đâu thì đồ không cần thiết tôi cũng không mua.'
      }
    },
    {
      id: 'n5_l25_12',
      lesson: 25,
      lessonId: 25,
      level: 'N5',
      kanji: '転勤',
      hanViet: 'Chuyển Cần',
      hiragana: 'てんきん',
      romaji: 'tenkin',
      meaning: 'sự chuyển công tác sang chi nhánh khác',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><rect x="24" y="34" width="22" height="34" fill="#1C7ED6"/><rect x="54" y="34" width="22" height="34" fill="#339AF0"/><path d="M42 46 Q50 38 58 46" stroke="#FA5252" stroke-width="3" fill="none"/><polygon points="56,44 60,48 54,48" fill="#FA5252"/></svg>`,
      example: {
        ja: '来月大阪の支社へ転勤することになりました。',
        hira: 'らいげつ おおさかの ししゃへ てんきんすることに なりました。',
        vi: 'Tháng sau tôi được quyết định chuyển công tác về chi nhánh Osaka.'
      }
    },
    {
      id: 'n5_l25_13',
      lesson: 25,
      lessonId: 25,
      level: 'N5',
      kanji: 'こと',
      hanViet: 'Sự',
      hiragana: 'こと',
      romaji: 'koto',
      meaning: 'sự việc, chuyện, điều',
      svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF4E6"/><rect x="30" y="28" width="40" height="46" rx="4" fill="#FF922B"/><line x1="38" y1="40" x2="62" y2="40" stroke="#FFF" stroke-width="3"/><line x1="38" y1="50" x2="62" y2="50" stroke="#FFF" stroke-width="3"/><line x1="38" y1="60" x2="54" y2="60" stroke="#FFF" stroke-width="3"/></svg>`,
      example: {
        ja: '日本の文化についていろいろなことを知りたいです。',
        hira: 'にほんの ぶんかについて いろいろな ことを しりたいです。',
        vi: 'Tôi muốn tìm hiểu nhiều điều về nền văn hóa Nhật Bản.'
      }
    }
  ]
}
];

// ============================================================================
// LỘ TRÌNH MỞ RỘNG JLPT N4 (TỪ BÀI 26 ĐẾN BÀI 50)
// Sẵn sàng kích hoạt ngay khi hoàn thành N5
// ============================================================================
const LESSONS_N4 = [
  {
    lessonNumber: 26,
    level: 'N4',
    title: 'Bài 26: Thể Thể Hiện Lý Do & Thắc Mắc (～んです)',
    topicVi: 'Giải thích nguyên nhân, tò mò & Yêu cầu giải thích tình huống',
    icon: '🔍',
    grammarPoint: 'Cấu trúc [Thể thông thường] + んです / んですか. Nhờ vả giải quyết tình huống khó khăn: ～んですが、V-ていただけませんか.',
    vocab: [
      {
        id: 'n4_l26_01',
        level: 'N4',
        lessonId: 26,
        kanji: '診る',
        hiragana: 'みる',
        romaji: 'miru',
        hanViet: 'CHẨN',
        meaning: 'Khám bệnh, chẩn đoán',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE3E3"/><line x1="30" y1="50" x2="70" y2="50" stroke="#FA5252" stroke-width="8"/><line x1="50" y1="30" x2="50" y2="70" stroke="#FA5252" stroke-width="8"/></svg>`,
        example: {
          ja: '医者に診てもらいましょう。',
          hira: 'いしゃにみてもらいましょう。',
          romaji: 'Isha ni mite moraimashou.',
          vi: 'Chúng ta hãy nhờ bác sĩ khám bệnh nhé.'
        }
      },
      {
        id: 'n4_l26_02',
        level: 'N4',
        lessonId: 26,
        kanji: '探す',
        hiragana: 'さがす',
        romaji: 'sagasu',
        hanViet: 'THÁM',
        meaning: 'Tìm kiếm vật bị mất hoặc việc làm',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><circle cx="44" cy="44" r="18" stroke="#1864AB" stroke-width="5" fill="none"/><line x1="58" y1="58" x2="76" y2="76" stroke="#1864AB" stroke-width="6"/></svg>`,
        example: {
          ja: '鍵を探しているんです。',
          hira: 'かぎをさがしているんです。',
          romaji: 'Kagi o sagashite iru n desu.',
          vi: 'Tôi đang tìm kiếm chiếc chìa khóa ạ.'
        }
      },
      {
        id: 'n4_l26_03',
        level: 'N4',
        lessonId: 26,
        kanji: '遅れる',
        hiragana: 'おくれる',
        romaji: 'okureru',
        hanViet: 'TRÌ',
        meaning: 'Bị trễ, muộn giờ',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFF3BF"/><circle cx="50" cy="50" r="26" stroke="#E67700" stroke-width="4" fill="#FFF"/><line x1="50" y1="50" x2="68" y2="50" stroke="#FA5252" stroke-width="3"/></svg>`,
        example: {
          ja: '電車が遅れたんです。',
          hira: 'でんしゃがおくれたんです。',
          romaji: 'Densha ga okureta n desu.',
          vi: 'Là vì tàu điện bị trễ chuyến đấy ạ.'
        }
      }
    ]
  },
  {
    lessonNumber: 27,
    level: 'N4',
    title: 'Bài 27: Động Từ Thể Khả Năng (可能形 - Kanoukei)',
    topicVi: 'Năng lực, điều kiện ngoại cảnh & Có thể làm được gì',
    icon: '⚡',
    grammarPoint: 'Cách chia Thể khả năng (V-れる / られる). Trợ từ を đổi thành が đi với động từ khả năng (日本語が話せます). Phân biệt 見える (nhìn thấy tự nhiên) và 見られる (có thể xem).',
    vocab: [
      {
        id: 'n4_l27_01',
        level: 'N4',
        lessonId: 27,
        kanji: '飼う',
        hiragana: 'かう',
        romaji: 'kau',
        hanViet: 'TỰ',
        meaning: 'Nuôi nấng (thú cưng)',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#FFE8CC"/><circle cx="50" cy="52" r="20" fill="#FFA94D"/></svg>`,
        example: {
          ja: 'マンションで犬が飼えますか。',
          hira: 'マンションでいぬがかえますか。',
          romaji: 'Manshon de inu ga kaemasu ka.',
          vi: 'Ở chung cư có thể nuôi chó được không?'
        }
      },
      {
        id: 'n4_l27_02',
        level: 'N4',
        lessonId: 27,
        kanji: '建てる',
        hiragana: 'たてる',
        romaji: 'tateru',
        hanViet: 'KIẾN',
        meaning: 'Xây dựng nhà cửa, tòa nhà',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E6FCF5"/><rect x="30" y="38" width="40" height="42" fill="#0CA678"/></svg>`,
        example: {
          ja: '将来自分の家を建てたいです。',
          hira: 'しょうらいじぶんのいえをたてたいです。',
          romaji: 'Shourai jibun no ie o tatetai desu.',
          vi: 'Tương lai tôi muốn tự xây ngôi nhà của chính mình.'
        }
      }
    ]
  },
  {
    lessonNumber: 28,
    level: 'N4',
    title: 'Bài 28: Vừa... Vừa (～ながら) & Thói quen thường nhật',
    topicVi: 'Hai hành động song song & Nêu lý do liên hoàn (～し、～し)',
    icon: '🎧',
    grammarPoint: 'Hai hành động diễn ra cùng một lúc: V1-bỏ ます + ながら V2. Thói quen duy trì hàng ngày: V-ています. Liệt kê nhiều nguyên nhân: ～し、～し、だから...',
    vocab: [
      {
        id: 'n4_l28_01',
        level: 'N4',
        lessonId: 28,
        kanji: '売れる',
        hiragana: 'うれる',
        romaji: 'ureru',
        hanViet: 'MẠI',
        meaning: 'Bán chạy, được tiêu thụ tốt',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#D3F9D8"/><polygon points="50,22 80,70 20,70" fill="#2B8A3E"/></svg>`,
        example: {
          ja: 'このパンはとてもよく売れています。',
          hira: 'このパンはとてもよくうれています。',
          romaji: 'Kono pan wa totemo yoku urete imasu.',
          vi: 'Loại bánh mì này đang bán rất chạy.'
        }
      },
      {
        id: 'n4_l28_02',
        level: 'N4',
        lessonId: 28,
        kanji: '通う',
        hiragana: 'かよう',
        romaji: 'kayou',
        hanViet: 'THÔNG',
        meaning: 'Đi lại thường xuyên (đi làm, đi học)',
        svgIllustration: `<svg viewBox="0 0 100 100" class="vocab-card-svg"><circle cx="50" cy="50" r="45" fill="#E7F5FF"/><path d="M25 50 L75 50" stroke="#1864AB" stroke-width="6"/></svg>`,
        example: {
          ja: '大学に通いながらアルバイトをします。',
          hira: 'だいがくにかよいながらアルバイトをします。',
          romaji: 'Daigaku ni kayoinagara arubaito o shimasu.',
          vi: 'Vừa đi học đại học tôi vừa đi làm thêm.'
        }
      }
    ]
  }
];

// Tạo cấu trúc outline từ Bài 29 đến 50 của N4 để sẵn sàng mở rộng
const N4_OUTLINE_TOPICS = [
  'Bài 29: Trạng thái kết quả tự phát (V-ています - Tự động từ)',
  'Bài 30: Chuẩn bị sẵn sàng (V-てあります - Tha động từ)',
  'Bài 31: Ý định làm gì (Thể ý chí 意向形 - Ikoukei)',
  'Bài 32: Lời khuyên nên / không nên (～ほうがいいです & ～でしょう)',
  'Bài 33: Thể mệnh lệnh & Thể cấm đoán (命令形・禁止形)',
  'Bài 34: Làm theo như hướng dẫn (～とおりに & ～あとで)',
  'Bài 35: Cấu trúc Điều kiện Thể ば (仮定形)',
  'Bài 36: Cố gắng để đạt được mục tiêu (～ようにします)',
  'Bài 37: Thể Bị động (受身形 - Ukemi)',
  'Bài 38: Danh từ hóa Động từ bằng の (～のは楽しいです)',
  'Bài 39: Nguyên nhân, lý do tự nhiên (V-て、A-くて)',
  'Bài 40: Nghi vấn từ lồng trong câu (～かどうか)',
  'Bài 41: Cho và nhận kính ngữ (やる, いただく, くださる)',
  'Bài 42: Mục đích vì ai / để làm gì (～ために & ～のに)',
  'Bài 43: Dự đoán sắp xảy ra (V-bỏ ます + そうです)',
  'Bài 44: Quá mức độ (V-bỏ ます + すぎます)',
  'Bài 45: Trường hợp giả định (～ばあいは)',
  'Bài 46: Vừa mới làm xong (V-たところです / V-たばかり)',
  'Bài 47: Nghe nói là (Thể thông thường + そうです - Truyền văn)',
  'Bài 48: Thể Sai khiến (使役形 - Shieki bắt ai làm gì)',
  'Bài 49: Kính ngữ Tôn kính ngữ (尊敬語 - Sonkeigo)',
  'Bài 50: Kính ngữ Khiêm nhường ngữ (謙譲語 - Kenjougo) & Tốt nghiệp N4'
];

N4_OUTLINE_TOPICS.forEach((topic, idx) => {
  const lessonNum = 29 + idx;
  LESSONS_N4.push({
    lessonNumber: lessonNum,
    level: 'N4',
    title: topic.split(':')[0].trim(),
    topicVi: topic.split(':')[1]?.trim() || topic,
    icon: '📖',
    grammarPoint: 'Ngữ pháp trọng tâm N4 Minna no Nihongo.',
    vocab: []
  });
});

// ============================================================================
// HỆ THỐNG TIỆN ÍCH QUẢN LÝ LỘ TRÌNH BÀI HỌC
// ============================================================================
class JapaneseLessonsManager {
  constructor() {
    this.n5 = LESSONS_N5;
    this.n4 = LESSONS_N4;
  }

  getLesson(level, lessonNumber) {
    const list = level.toUpperCase() === 'N4' ? this.n4 : this.n5;
    return list.find(l => l.lessonNumber === lessonNumber) || null;
  }

  getAllVocabForLevel(level) {
    const list = level.toUpperCase() === 'N4' ? this.n4 : this.n5;
    const all = [];
    list.forEach(l => {
      if (Array.isArray(l.vocab)) {
        all.push(...l.vocab);
      }
    });
    return all;
  }

  // Kết nối và cập nhật kho JLPT_DATA toàn cục
  syncWithGlobalData() {
    if (!window.JLPT_DATA) {
      window.JLPT_DATA = { n5: [], n4: [], n3: [], n2: [], n1: [] };
    }

    // Đưa toàn bộ từ vựng 25 bài N5 vào kho
    const n5Vocab = this.getAllVocabForLevel('N5');
    if (n5Vocab.length > 0) {
      // Hợp nhất những từ chưa có
      // Há»£p nháº¥t vÃ  cáº­p nháº­t tá»« vá»±ng N5 tá»« cÃ¡c bÃ i há»c
      const vocabMap = new Map();
      window.JLPT_DATA.n5.forEach(w => vocabMap.set(w.id, w));
      n5Vocab.forEach(w => vocabMap.set(w.id, w));
      window.JLPT_DATA.n5 = Array.from(vocabMap.values());
      window.JLPT_DATA.lessons = LESSONS_N5;
    }

    // Nạp từ vựng N4 vào kho
    const n4Vocab = this.getAllVocabForLevel('N4');
    if (n4Vocab.length > 0) {
      window.JLPT_DATA.n4 = n4Vocab;
    }
  }
}

// Khởi tạo instance toàn cục
window.LESSONS_DATA = new JapaneseLessonsManager();
window.LESSONS_DATA.syncWithGlobalData();
