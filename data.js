const EXAM_DATE = new Date('2026-07-26');

// mandatory: true = סרט חובה לצפייה מלאה; false = רק קטע הוקרן בשיעור
const LESSONS = [
  // ── סמסטר א ──────────────────────────────────
  {
    id: 'א1',
    semester: 'א',
    title: 'הקולנוע האמריקאי בשנות ה-50',
    subtitle: 'השפעת הטלוויזיה · רדיפות אנטי-קומוניסטיות · ז\'אנרים (מערבון, מוזיקל, מד"ב) · אליה קאזאן',
    films: [
      {
        id: 'sem_a_american_notes',
        title: 'נושא: טלוויזיה ורדיפות אנטי-קומוניסטיות',
        director: '',
        year: null,
        country: '',
        duration: null,
        mandatory: false,
        clips: []
      },
      {
        id: 'sem_a_genres',
        title: 'נושא: ז\'אנרים - מערבון, מוזיקל, מד"ב',
        director: '',
        year: null,
        country: '',
        duration: null,
        mandatory: false,
        clips: []
      },
      {
        id: 'sem_a_kazan',
        title: 'נושא: אליה קאזאן',
        director: 'Elia Kazan',
        year: null,
        country: 'ארה"ב',
        duration: null,
        mandatory: false,
        clips: []
      }
    ]
  },
  {
    id: 'א2',
    semester: 'א',
    title: 'מודרניזם בקולנוע הצרפתי של שנות ה-50',
    subtitle: 'ברסון · טאטי · מלוויל',
    films: [
      {
        id: 'sem_a_bresson',
        title: 'נושא: רובר ברסון',
        director: 'Robert Bresson',
        year: null,
        country: 'צרפת',
        duration: null,
        mandatory: false,
        clips: []
      },
      {
        id: 'sem_a_tati',
        title: 'נושא: ז\'אק טאטי',
        director: 'Jacques Tati',
        year: null,
        country: 'צרפת',
        duration: null,
        mandatory: false,
        clips: []
      },
      {
        id: 'sem_a_melville',
        title: 'נושא: ז\'אן-פייר מלוויל',
        director: 'Jean-Pierre Melville',
        year: null,
        country: 'צרפת',
        duration: null,
        mandatory: false,
        clips: []
      }
    ]
  },
  // ── סמסטר ב ──────────────────────────────────
  {
    id: 1,
    title: 'מודרניזם איטלקי – מיכלאנג\'לו אנטוניוני',
    films: [
      {
        id: 'love_in_city_antonioni',
        title: 'Love in the City – פרק Attempted Suicide',
        director: 'מיכלאנג\'לו אנטוניוני',
        year: 1953,
        country: 'איטליה',
        duration: null,
        mandatory: false,
        clips: ['תיאור ניסיון ההתאבדות בנהר']
      },
      {
        id: 'avventura',
        title: "L'Avventura / ההרפתקה",
        director: 'מיכלאנג\'לו אנטוניוני',
        year: 1960,
        country: 'איטליה',
        duration: 140,
        mandatory: true,
        clips: [
          'היעלמות אנה ואחריה קלאודיה וסאנדרו'
        ]
      },
      {
        id: 'la_notte',
        title: 'La Notte / הלילה',
        director: 'מיכלאנג\'לו אנטוניוני',
        year: 1961,
        country: 'איטליה',
        duration: 122,
        mandatory: false,
        clips: ['הביקור בבית החולים']
      },
      {
        id: 'eclisse',
        title: "L'Eclisse / ליקוי החמה",
        director: 'מיכלאנג\'לו אנטוניוני',
        year: 1962,
        country: 'איטליה',
        duration: 125,
        mandatory: false,
        clips: ['סקוונס הסיום']
      },
      {
        id: 'blowup',
        title: 'Blow Up / יצרים',
        director: 'מיכלאנג\'לו אנטוניוני',
        year: 1966,
        country: 'בריטניה/איטליה',
        duration: 110,
        mandatory: true,
        clips: [
          'הפתיחה',
          'פיתוח התצלומים',
          'הסיום'
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'מודרניזם איטלקי – פדריקו פליני',
    films: [
      {
        id: 'love_in_city_fellini',
        title: 'Love in the City – פרק "סוכנויות הכרויות"',
        director: 'פדריקו פליני',
        year: 1953,
        country: 'איטליה',
        duration: null,
        mandatory: false,
        clips: ['פרק "סוכנויות הכרויות"']
      },
      {
        id: 'amarcord',
        title: 'Amarcord / זיכרונות',
        director: 'פדריקו פליני',
        year: 1973,
        country: 'איטליה',
        duration: 123,
        mandatory: false,
        clips: ['סצנת המורים בבית הספר']
      },
      {
        id: 'vitelloni',
        title: 'I Vitelloni / הבטלנים',
        director: 'פדריקו פליני',
        year: 1953,
        country: 'איטליה',
        duration: 103,
        mandatory: false,
        clips: ['הפתיחה', 'ביקור בים']
      },
      {
        id: 'cabiria',
        title: 'Nights of Cabiria / לילות קביריה',
        director: 'פדריקו פליני',
        year: 1957,
        country: 'איטליה',
        duration: 110,
        mandatory: false,
        clips: ['הפתיחה', 'הסיום']
      },
      {
        id: 'dolcevita',
        title: 'La Dolce Vita / החיים המתוקים',
        director: 'פדריקו פליני',
        year: 1959,
        country: 'איטליה',
        duration: 170,
        mandatory: true,
        clips: [
          'הפתיחה',
          'סצנת הקזינו'
        ]
      },
      {
        id: 'divorce_italian',
        title: 'גירושין איטלקי (התייחסות ל-La Dolce Vita)',
        director: 'פייטרו ג\'רמי',
        year: 1961,
        country: 'איטליה',
        duration: null,
        mandatory: false,
        clips: ['הקרנת La Dolce Vita']
      },
      {
        id: 'we_loved',
        title: 'כך כל כך אהבנו / C\'eravamo tanto amati',
        director: 'אטורה סקולה',
        year: 1974,
        country: 'איטליה',
        duration: null,
        mandatory: false,
        clips: ['הקרנה החוזרת האחרונה של La Dolce Vita']
      },
      {
        id: 'dr_antonio',
        title: 'יותיפה של ד"ר אנטוניו / Le tentazioni del dottor Antonio',
        director: 'פדריקו פליני',
        year: 1962,
        country: 'איטליה',
        duration: null,
        mandatory: false,
        clips: ['גילוי של אניטה מהפוסטר']
      },
      {
        id: 'intervista',
        title: 'Intervista / ראיון',
        director: 'פדריקו פליני',
        year: 1987,
        country: 'איטליה',
        duration: null,
        mandatory: false,
        clips: ['הביקור בבית אניטה']
      },
      {
        id: '8half',
        title: '8½',
        director: 'פדריקו פליני',
        year: 1963,
        country: 'איטליה',
        duration: 133,
        mandatory: true,
        clips: [
          'הפתיחה',
          'מעיינות הבריאות',
          'סצנת גיוס הנשים',
          'הסיום'
        ]
      },
      {
        id: 'stardust',
        title: 'Stardust Memories / אבק כוכבים',
        director: 'וודי אלן',
        year: 1980,
        country: 'ארה"ב',
        duration: null,
        mandatory: false,
        clips: ['הפתיחה']
      },
      {
        id: 'all_that_jazz',
        title: 'All That Jazz / כל הז\'אז הזה',
        director: 'בוב פוסי',
        year: 1979,
        country: 'ארה"ב',
        duration: null,
        mandatory: false,
        clips: ['הגיבור עומד למות']
      }
    ]
  },
  {
    id: 3,
    title: 'פריצת הגל החדש הצרפתי',
    films: [
      {
        id: 'video_essay_newwave',
        title: 'Video Essay: The Most Important Movement in Cinema',
        director: '',
        year: null,
        country: '',
        duration: null,
        mandatory: false,
        clips: ['Why We All Steal From It']
      },
      {
        id: 'fourhundred',
        title: '400 הלקות / Les Quatre Cents Coups',
        director: 'פרנסואה טריפו',
        year: 1959,
        country: 'צרפת',
        duration: 99,
        mandatory: true,
        clips: [
          'יום החופש מבית הספר',
          'הבריחה עד סיום הסרט'
        ]
      },
      {
        id: 'jules_jim',
        title: 'Jules et Jim / ז\'ול וג\'ים',
        director: 'פרנסואה טריפו',
        year: 1962,
        country: 'צרפת',
        duration: null,
        mandatory: false,
        clips: [
          'הריצה על הגשר',
          'הקרנת האסיוניות'
        ]
      },
      {
        id: 'video_essay_godard',
        title: 'Video Essay: How Jean-Luc Godard Liberated Cinema',
        director: '',
        year: null,
        country: '',
        duration: null,
        mandatory: false,
        clips: ['הסרטון המלא']
      },
      {
        id: 'breathless',
        title: 'עד כלות הנשימה / À bout de souffle',
        director: 'ז\'אן-לוק גודאר',
        year: 1960,
        country: 'צרפת',
        duration: 90,
        mandatory: true,
        clips: [
          '5 דקות ראשונות',
          'הפגישה השנייה של מישל ופטרישיה'
        ]
      },
      {
        id: 'vivre_sa_vie',
        title: 'Vivre sa vie / לחיות את חייה',
        director: 'ז\'אן-לוק גודאר',
        year: 1962,
        country: 'צרפת',
        duration: null,
        mandatory: false,
        clips: ['שיחת ננה עם המבקר בבית הקפה']
      },
      {
        id: 'bande_a_part',
        title: 'Bande à part / חבורה נפרדת',
        director: 'ז\'אן-לוק גודאר',
        year: 1964,
        country: 'צרפת',
        duration: null,
        mandatory: false,
        clips: ['הריקוד והשיחה בבית הקפה']
      },
      {
        id: 'pierrot',
        title: 'Pierrot le Fou / פיירו המטורף',
        director: 'ז\'אן-לוק גודאר',
        year: 1965,
        country: 'צרפת',
        duration: 115,
        mandatory: true,
        clips: [
          'הנסיעה במכונית',
          'השהייה בחוף הים'
        ]
      },
      {
        id: 'weekend_godard',
        title: 'Weekend / סוף שבוע',
        director: 'ז\'אן-לוק גודאר',
        year: 1967,
        country: 'צרפת',
        duration: null,
        mandatory: false,
        clips: ['פקק התנועה']
      }
    ]
  },
  {
    id: 4,
    title: 'יוצרי הגל החדש והגדה השמאלית',
    films: [
      {
        id: 'night_fog',
        title: 'לילה וערפל / Nuit et brouillard',
        director: 'אלן רנה',
        year: 1956,
        country: 'צרפת',
        duration: null,
        mandatory: false,
        clips: ['הגעה ברכבת למחנה הריכוז לעומת צילומי ההווה']
      },
      {
        id: 'hiroshima',
        title: 'הירושימה אהובתי / Hiroshima mon amour',
        director: 'אלן רנה',
        year: 1959,
        country: 'צרפת/יפן',
        duration: 90,
        mandatory: true,
        clips: [
          '7 דקות ראשונות'
        ]
      },
      {
        id: 'marienbad',
        title: 'השנה שעברה במריאנבד / L\'Année dernière à Marienbad',
        director: 'אלן רנה',
        year: 1961,
        country: 'צרפת',
        duration: null,
        mandatory: false,
        clips: ['שיחה בגן תוך "חזרה לעבר" עם הדמויות']
      },
      {
        id: 'lola_demy',
        title: 'לולה / Lola',
        director: 'ז\'אק דמי',
        year: 1961,
        country: 'צרפת',
        duration: null,
        mandatory: false,
        clips: ['הפרידה בסוף הסרט']
      },
      {
        id: 'umbrellas',
        title: 'מטריות שרבורג / Les Parapluies de Cherbourg',
        director: 'ז\'אק דמי',
        year: 1964,
        country: 'צרפת',
        duration: 85,
        mandatory: true,
        clips: [
          'כותרות הפתיחה',
          'שיר הפרידה'
        ]
      },
      {
        id: 'rochefort',
        title: 'הנערות מרושפור / Les Demoiselles de Rochefort',
        director: 'ז\'אק דמי',
        year: 1967,
        country: 'צרפת',
        duration: null,
        mandatory: false,
        clips: ['שתי האחיות מרושפור']
      },
      {
        id: 'lalaland',
        title: 'לה לה לנד / La La Land',
        director: 'דיימן שאזל',
        year: 2016,
        country: 'ארה"ב',
        duration: null,
        mandatory: false,
        clips: ['סצנת הפתיחה']
      },
      {
        id: 'jeanne_garcon',
        title: 'Jeanne et le garçon formidable',
        director: 'ז\'אק מרטין / אוליביה דוקסטל',
        year: 1998,
        country: 'צרפת',
        duration: null,
        mandatory: false,
        clips: ['שיר "נדבקתי ב-AIDS"']
      },
      {
        id: 'diary_pregnant',
        title: 'Diary of a Pregnant Woman',
        director: 'אניס ורדא',
        year: 1958,
        country: 'צרפת',
        duration: null,
        mandatory: false,
        clips: ['קטעים מהסרט']
      },
      {
        id: 'cleo',
        title: 'קליאו מ-5 עד 7 / Cléo de 5 à 7',
        director: 'אניס ורדא',
        year: 1962,
        country: 'צרפת',
        duration: 90,
        mandatory: true,
        clips: [
          'כותרות הפתיחה',
          'יציאת הגיבורה לרחוב',
          'השיחה עם החייל',
          'סיום הסרט'
        ]
      },
      {
        id: 'le_bonheur',
        title: 'Le Bonheur / האושר',
        director: 'אניס ורדא',
        year: 1965,
        country: 'צרפת',
        duration: null,
        mandatory: false,
        clips: ['הדייט של פרנסואה והפילגש']
      }
    ]
  },
  {
    id: 5,
    title: 'קולנוע פוסט-סטליניסטי: ברית המועצות ופולין',
    films: [
      {
        id: 'cranes',
        title: 'עגורים עפים / Летят журавли',
        director: 'מיכאיל קלטוזוב',
        year: 1957,
        country: 'ברה"מ',
        duration: null,
        mandatory: false,
        clips: [
          'מארק אונס/מפתה ורוניקה',
          'הפרידה מבוריס'
        ]
      },
      {
        id: 'ashes',
        title: 'אפר ויהלומים / Popiół i diament',
        director: 'אנדז\'י ווידה',
        year: 1958,
        country: 'פולין',
        duration: 102,
        mandatory: true,
        clips: [
          'טיול לילי בכנסייה עם מאצ\'ק וקריסטינה'
        ]
      },
      {
        id: 'iam_cuba',
        title: 'אני קובה / Soy Cuba',
        director: 'מיכאיל קלטוזוב',
        year: 1964,
        country: 'ברה"מ',
        duration: 140,
        mandatory: true,
        clips: [
          'הפרידה מבוריס – שוט הרציפה המלון',
          'האיכר הקובני שורף את השדה עד המולוטוב בדרייב-אין'
        ]
      }
    ]
  },
  {
    id: 6,
    title: 'קולנוע סובייטי בשנות ה-60 וה-70: טרקובסקי ופרדז\'נוב',
    films: [
      {
        id: 'ivans_childhood',
        title: 'ילדות איוואן / Иваново детство',
        director: 'אנדריי טרקובסקי',
        year: 1962,
        country: 'ברה"מ',
        duration: null,
        mandatory: false,
        clips: ['הפתיחה']
      },
      {
        id: 'rublev',
        title: 'אנדריי רובלב / Андрей Рублёв',
        director: 'אנדריי טרקובסקי',
        year: 1972,
        country: 'ברה"מ',
        duration: 208,
        mandatory: true,
        clips: [
          'סצנת פצצת הנחושת'
        ]
      },
      {
        id: 'tarkovsky_prayer',
        title: 'Andrey Tarkovsky: A Cinema Prayer (וידאו)',
        director: 'אנדריי טרקובסקי-ג\'וניור',
        year: 2019,
        country: '',
        duration: null,
        mandatory: false,
        clips: ['על ילדותו של טרקובסקי ביחס ל"המראה"']
      },
      {
        id: 'solaris',
        title: 'סולאריס / Солярис',
        director: 'אנדריי טרקובסקי',
        year: 1972,
        country: 'ברה"מ',
        duration: null,
        mandatory: false,
        clips: ['הגיבור מתבונן בזיכרונות ילדות']
      },
      {
        id: 'nostalghia',
        title: 'נוסטלגיה / Nostalghia',
        director: 'אנדריי טרקובסקי',
        year: 1983,
        country: 'איטליה/ברה"מ',
        duration: null,
        mandatory: false,
        clips: ['דומיניקו שורף את עצמו']
      },
      {
        id: 'ascent',
        title: 'העלייה / Восхождение',
        director: 'לריסה שפיטקו',
        year: 1977,
        country: 'ברה"מ',
        duration: null,
        mandatory: false,
        clips: ['שני הפרטיזנים נלכדים עד ההגעה לכפר']
      },
      {
        id: 'come_see',
        title: 'צא וראה / Иди и смотри',
        director: 'אלם קלימוב',
        year: 1985,
        country: 'ברה"מ',
        duration: 137,
        mandatory: true,
        clips: [
          'פלורה וגלאשה ביער',
          'הבריחה אחרי ההפצצה הגרמנית'
        ]
      },
      {
        id: 'shadows_ancestors',
        title: 'צלליות אבותינו הנשכחים / Тіні забутих предків',
        director: 'סרגיי פרדז\'נוב',
        year: 1965,
        country: 'ברה"מ',
        duration: null,
        mandatory: false,
        clips: ['הפגישה הסופית בין איוואן לקרצ\'ה']
      },
      {
        id: 'pomegranates',
        title: 'צבע רימונים / Цвет граната',
        director: 'סרגיי פרדז\'נוב',
        year: 1969,
        country: 'ברה"מ',
        duration: null,
        mandatory: false,
        clips: ['10 דקות ראשונות']
      }
    ]
  },
  {
    id: 7,
    title: 'קולנוע מזרח אירופי בשנות ה-60 – הונגריה, צ\'כיה, יוגוסלביה',
    films: [
      {
        id: 'ashes_wajda2',
        title: 'אפר ויהלומים (קטע נוסף)',
        director: 'אנדז\'י ווידה',
        year: 1958,
        country: 'פולין',
        duration: null,
        mandatory: false,
        clips: ['מאצ\'ק ובגלה הלילי']
      },
      {
        id: 'man_marble',
        title: 'איש השיש / Człowiek z marmuru',
        director: 'אנדז\'י ווידה',
        year: 1977,
        country: 'פולין',
        duration: null,
        mandatory: false,
        clips: ['מאחורי הקלעים של צילומי סרטי התעמולה של ביורטק']
      },
      {
        id: 'two_men',
        title: 'שני אנשים וארון / Dwaj ludzie z szafą',
        director: 'רומן פולנסקי',
        year: 1958,
        country: 'פולין',
        duration: null,
        mandatory: false,
        clips: ['קטעים מהסרט']
      },
      {
        id: 'knife_water',
        title: 'סכין במים / Nóż w wodzie',
        director: 'רומן פולנסקי',
        year: 1962,
        country: 'פולין',
        duration: null,
        mandatory: false,
        clips: ['סצנת הצגת הסכין לראשונה']
      },
      {
        id: 'blind_chance',
        title: 'כוחו של מקרה / Przypadek',
        director: 'קשישטוף קישלובסקי',
        year: 1987,
        country: 'פולין',
        duration: null,
        mandatory: false,
        clips: ['5 דקות ראשונות עד ההגעה לתחנת הרכבת']
      },
      {
        id: 'short_killing',
        title: 'סיפור קצר על רצח / Krótki film o zabijaniu',
        director: 'קשישטוף קישלובסקי',
        year: 1988,
        country: 'פולין',
        duration: null,
        mandatory: false,
        clips: [
          'הצעיר מסתובב בעיר לפני הרצח',
          'עורך הדין/החוקר לפני התלייה'
        ]
      },
      {
        id: 'loves_blonde',
        title: 'אהביו של בלונדינית / Lásky jedné plavovlásky',
        director: 'מילוש פורמן',
        year: 1965,
        country: 'צ\'כוסלובקיה',
        duration: null,
        mandatory: false,
        clips: ['שיחה אחרי הסקס עד ההסתננות בבוקר']
      },
      {
        id: 'firemans_ball',
        title: 'נשף כבאים / Hoří, má panenko',
        director: 'מילוש פורמן',
        year: 1967,
        country: 'צ\'כוסלובקיה',
        duration: null,
        mandatory: false,
        clips: ['הנינים שנפלו מתחת לשולחן']
      },
      {
        id: 'trains',
        title: 'רכבות נשמרות היטב / Ostře sledované vlaky',
        director: 'ז\'ירי מנצל',
        year: 1966,
        country: 'צ\'כוסלובקיה',
        duration: 94,
        mandatory: true,
        clips: [
          'פתיחת הסרט',
          '"מחמיצת" הנשיקה של הגיבור'
        ]
      },
      {
        id: 'daisies',
        title: 'חמניות / Sedmikrásky',
        director: 'ורה חיטילובה',
        year: 1966,
        country: 'צ\'כוסלובקיה',
        duration: null,
        mandatory: false,
        clips: ['5 דקות ראשונות', 'הגלישה מהשולחן']
      },
      {
        id: 'the_joke',
        title: 'הבדיחה / Žert',
        director: 'יירי הירש',
        year: 1969,
        country: 'צ\'כוסלובקיה',
        duration: null,
        mandatory: false,
        clips: ['התזכורת לחברים בדין ובחשבון']
      },
      {
        id: 'wr',
        title: 'ו.ר.: תעלומות האורגניזם / W.R.: Misterije organizma',
        director: 'דושאן מאקבייב',
        year: 1971,
        country: 'יוגוסלביה',
        duration: 85,
        mandatory: true,
        clips: ['הנאום בדבר החופש המיני תחת סוציאליזם']
      }
    ]
  },
  {
    id: 8,
    title: 'מודרניזם פוליטי בקולנוע האיטלקי: פאזוליני, ברטולוצ\'י, פונטקורבו',
    films: [
      {
        id: 'teorema',
        title: 'תיאורמה / Teorema',
        director: 'פייר פאולו פאזוליני',
        year: 1968,
        country: 'איטליה',
        duration: 95,
        mandatory: true,
        clips: []
      },
      {
        id: 'conformist',
        title: 'הקונפורמיסט / Il Conformista',
        director: 'ברנרדו ברטולוצ\'י',
        year: 1970,
        country: 'איטליה',
        duration: 108,
        mandatory: true,
        clips: []
      },
      {
        id: 'algiers',
        title: 'קרב על אלג\'יר / La Battaglia di Algeri',
        director: 'ג\'ילו פונטקורבו',
        year: 1966,
        country: 'איטליה',
        duration: 122,
        mandatory: true,
        clips: []
      }
    ]
  },
  {
    id: 9,
    title: 'ספגטי מערבוני ועמלקי קיצוני באיטליה',
    films: [
      {
        id: 'goodbadugly',
        title: 'הטוב, הרע והמכוער / Il Buono, il Brutto, il Cattivo',
        director: 'סרג\'יו לאונה',
        year: 1966,
        country: 'איטליה',
        duration: 170,
        mandatory: true,
        clips: []
      },
      {
        id: 'sevenbeauties',
        title: 'שבע יפיפיות / Pasqualino Settebellezze',
        director: 'לינה וורטמולר',
        year: 1975,
        country: 'איטליה',
        duration: 116,
        mandatory: true,
        clips: []
      }
    ]
  },
  {
    id: 10,
    title: 'טבחי מטבח וריאליזם בקולנוע הבריטי בשנות ה-60',
    films: [
      {
        id: 'kes',
        title: 'קס / Kes',
        director: 'קן לואץ',
        year: 1969,
        country: 'בריטניה',
        duration: 109,
        mandatory: true,
        clips: []
      },
      {
        id: 'loneliness',
        title: 'בדידותו של הרץ למרחקים ארוכים / The Loneliness of the Long Distance Runner',
        director: 'טוני ריצ\'ארדסון',
        year: 1962,
        country: 'בריטניה',
        duration: 104,
        mandatory: true,
        clips: []
      }
    ]
  },
  {
    id: 11,
    title: 'פנייה סגנונית בקולנוע הבריטי בשנות ה-60 וה-70',
    films: [
      {
        id: 'dont_look_now',
        title: 'המבט / Don\'t Look Now',
        director: 'ניקולס רוג\'',
        year: 1973,
        country: 'בריטניה',
        duration: 111,
        mandatory: true,
        clips: []
      },
      {
        id: 'if',
        title: 'אם היה... / If....',
        director: 'לינדזי אנדרסון',
        year: 1968,
        country: 'בריטניה',
        duration: 112,
        mandatory: true,
        clips: []
      }
    ]
  }
];
