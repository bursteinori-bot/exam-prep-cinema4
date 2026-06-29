const EXAM_DATE = new Date('2026-07-26');

// mandatory: true = סרט חובה לצפייה מלאה; false = רק קטע הוקרן בשיעור
const LESSONS = [
  // ── סמסטר א ──────────────────────────────────
  {
    id: 'א1',
    semester: 'א',
    title: 'הקולנוע האמריקאי בשנות ה-50',
    subtitle: 'השפעת הטלוויזיה · רדיפות אנטי-קומוניסטיות · ז\'אנרים (מערבון, מוזיקל, מד"ב) · קזאן · היצ\'קוק',
    films: [
      {
        id: 'sa_sunset',
        title: 'שדרות סאנסט / Sunset Boulevard',
        director: 'בילי ויילדר',
        year: 1950,
        country: 'ארה"ב',
        duration: 110,
        mandatory: false,
        clips: [
          'הפתיחה',
          'הקרנת הסרטים בביתה של נורמה',
          'סצנת הסיום'
        ]
      },
      {
        id: 'sa_eve',
        title: 'הכל אודות חווה / All About Eve',
        director: 'ג\'וזף מנקייביץ',
        year: 1950,
        country: 'ארה"ב',
        duration: 138,
        mandatory: false,
        clips: [
          'המסיבה בביתה של מרגו צ\'נינג'
        ]
      },
      {
        id: 'sa_waterfront',
        title: 'חופי הכרך / On the Waterfront',
        director: 'איליה קזאן',
        year: 1954,
        country: 'ארה"ב',
        duration: 108,
        mandatory: false,
        clips: [
          'הנסיעה במכונית עם צ\'ארלי'
        ]
      },
      {
        id: 'sa_streetcar',
        title: 'חשמלית ושמה תשוקה / A Streetcar Named Desire',
        director: 'איליה קזאן',
        year: 1951,
        country: 'ארה"ב',
        duration: 122,
        mandatory: false,
        clips: [
          'המפגש בין סטנלי לבלאנש'
        ]
      },
      {
        id: 'sa_searchers',
        title: 'המחפשים / The Searchers',
        director: 'ג\'ון פורד',
        year: 1956,
        country: 'ארה"ב',
        duration: 119,
        mandatory: false,
        clips: [
          'מתוך A Personal Journey with Martin Scorsese – התפתחות דמות הגיבור ב-3 מערבונים של פורד'
        ]
      },
      {
        id: 'sa_rio_bravo',
        title: 'ריו בראבו / Rio Bravo',
        director: 'הווארד הוקס',
        year: 1959,
        country: 'ארה"ב',
        duration: 141,
        mandatory: false,
        clips: [
          'דוד זוכה לשיקום'
        ]
      },
      {
        id: 'sa_gentlemen',
        title: 'גברים מעדיפים בלונדיניות / Gentlemen Prefer Blondes',
        director: 'הווארד הוקס',
        year: 1953,
        country: 'ארה"ב',
        duration: 91,
        mandatory: false,
        clips: [
          'Diamonds Are A Girl\'s Best Friend'
        ]
      },
      {
        id: 'sa_rebel',
        title: 'מרד הנעורים / Rebel Without a Cause',
        director: 'ניקולס ריי',
        year: 1955,
        country: 'ארה"ב',
        duration: 111,
        mandatory: false,
        clips: [
          'העימות של ג\'ים עם ההורים אחרי התאונה',
          'מתוך A Personal Journey – מלודרמות חתרניות (סירק, ריי)'
        ]
      },
      {
        id: 'sa_some_like',
        title: 'חמים וטעים / Some Like It Hot',
        director: 'בילי ויילדר',
        year: 1959,
        country: 'ארה"ב',
        duration: 120,
        mandatory: false,
        clips: [
          'הפיתוי של שוגר',
          'הטנגו של דפני ואוזגוד'
        ]
      },
      {
        id: 'sa_apartment',
        title: 'הדירה / The Apartment',
        director: 'בילי ויילדר',
        year: 1960,
        country: 'ארה"ב',
        duration: 125,
        mandatory: false,
        clips: [
          '7 דקות ראשונות'
        ]
      },
      {
        id: 'sa_vertigo',
        title: 'ורטיגו / Vertigo',
        director: 'אלפרד היצ\'קוק',
        year: 1958,
        country: 'ארה"ב',
        duration: 124,
        mandatory: false,
        clips: [
          'כותרות הפתיחה',
          'סיקוונס הפתיחה',
          'מהביקור עם ג\'ודי בחנות הבגדים עד ההתגלות המלאה שלה'
        ]
      },
      {
        id: 'sa_psycho',
        title: 'פסיכו / Psycho',
        director: 'אלפרד היצ\'קוק',
        year: 1960,
        country: 'ארה"ב',
        duration: 109,
        mandatory: false,
        clips: [
          'השיחה של נורמן ומריון, ההצצה של נורמן',
          'סיקוונס הרצח במקלחת',
          'השוואה בין Psycho של היצ\'קוק לגרסת גוס ואן סנט 1998'
        ]
      },
      {
        id: 'sa_nxnw',
        title: 'מזימות בינלאומיות / North by Northwest',
        director: 'אלפרד היצ\'קוק',
        year: 1959,
        country: 'ארה"ב',
        duration: 136,
        mandatory: false,
        clips: [
          'הפתיחה',
          'בחדר המלון של קפלן',
          'המעלית',
          'סוף הר ראשמור עד סיום הסרט'
        ]
      },
      {
        id: 'sa_day_earth',
        title: 'היום שבו העולם עמד מלכת / The Day the Earth Stood Still',
        director: 'רוברט וויז',
        year: 1951,
        country: 'ארה"ב',
        duration: 92,
        mandatory: false,
        clips: [
          'הנאום של קלאטו בפני נציגי האנושות'
        ]
      },
      {
        id: 'sa_invasion',
        title: 'פלישת חוטפי הגופות / Invasion of the Body Snatchers',
        director: 'דון סיגל',
        year: 1956,
        country: 'ארה"ב',
        duration: 80,
        mandatory: false,
        clips: [
          'ד"ר בנל ובטי צופים בעירה מחלון המשרד ונלכדים'
        ]
      },
      {
        id: 'sa_hollywood_ten',
        title: 'The Hollywood Ten (תיעודי)',
        director: '',
        year: 1950,
        country: 'ארה"ב',
        duration: null,
        mandatory: false,
        clips: [
          'קטע מהסרט התיעודי'
        ]
      },
      {
        id: 'sa_noon',
        title: 'בצהרי היום / High Noon',
        director: 'פרד זינמן',
        year: 1952,
        country: 'ארה"ב',
        duration: 85,
        mandatory: false,
        clips: [
          'כתיבת הצוואה והעריכה הצולבת',
          'סיום הסרט'
        ]
      },
      {
        id: 'sa_kazan_oscar',
        title: 'קליפ: הענקת אוסקר הכבוד לאיליה קזאן',
        director: '',
        year: 1999,
        country: '',
        duration: null,
        mandatory: false,
        clips: [
          'הענקת האוסקר ותגובות הקהל'
        ]
      }
    ]
  },
  {
    id: 'א2',
    semester: 'א',
    title: 'מודרניזם בקולנוע הצרפתי של שנות ה-50',
    subtitle: 'רובר ברסון · ז\'אק טאטי · ז\'אן-פייר מלוויל · אינגמר ברגמן',
    films: [
      {
        id: 'sa_bresson_condemned',
        title: 'הנידון למוות ברח / A Man Escaped',
        director: 'רובר ברסון',
        year: 1956,
        country: 'צרפת',
        duration: 100,
        mandatory: false,
        clips: [
          '5 דקות ראשונות'
        ]
      },
      {
        id: 'sa_bresson_gentle',
        title: 'אישה עדינה / Une femme douce',
        director: 'רובר ברסון',
        year: 1969,
        country: 'צרפת',
        duration: 88,
        mandatory: false,
        clips: [
          '5 דקות ראשונות'
        ]
      },
      {
        id: 'sa_bresson_pickpocket',
        title: 'הכייס / Pickpocket',
        director: 'רובר ברסון',
        year: 1959,
        country: 'צרפת',
        duration: 75,
        mandatory: false,
        clips: [
          'סצנת הכיוס בתחנת הרכבת'
        ]
      },
      {
        id: 'sa_bresson_money',
        title: 'הכסף / L\'Argent',
        director: 'רובר ברסון',
        year: 1983,
        country: 'צרפת',
        duration: 85,
        mandatory: false,
        clips: [
          'מוכר הדלק מקבל את השטר המזויף והולך למסעדה'
        ]
      },
      {
        id: 'sa_tati_holiday',
        title: 'חופשתו של מר הולו / Les Vacances de M. Hulot',
        director: 'ז\'אק טאטי',
        year: 1953,
        country: 'צרפת',
        duration: 86,
        mandatory: false,
        clips: [
          'על החוף',
          'הסירה המתקפלת',
          'פחית הצבע'
        ]
      },
      {
        id: 'sa_tati_uncle',
        title: 'זה הדוד שלי / Mon Oncle',
        director: 'ז\'אק טאטי',
        year: 1958,
        country: 'צרפת',
        duration: 117,
        mandatory: false,
        clips: [
          'ארוחת הגן המשובשת'
        ]
      },
      {
        id: 'sa_tati_playtime',
        title: 'פלייטיים / Playtime',
        director: 'ז\'אק טאטי',
        year: 1967,
        country: 'צרפת',
        duration: 124,
        mandatory: false,
        clips: [
          'ההגעה לבניין המשרדים וחדר ההמתנה',
          'Video essay: PlayTime Anatomy of a Gag',
          'Video essay: Jacques Tati – Where to Find Visual Comedy'
        ]
      },
      {
        id: 'sa_melville_silence',
        title: 'שתיקת הים / Le Silence de la Mer',
        director: 'ז\'אן-פייר מלוויל',
        year: 1949,
        country: 'צרפת',
        duration: 87,
        mandatory: false,
        clips: [
          'כניסת הקצין הגרמני לבית'
        ]
      },
      {
        id: 'sa_melville_samurai',
        title: 'הסמוראי / Le Samouraï',
        director: 'ז\'אן-פייר מלוויל',
        year: 1967,
        country: 'צרפת',
        duration: 105,
        mandatory: false,
        clips: [
          'הפתיחה של הסרט עד ההגעה למתקין לוחיות הרישוי'
        ]
      },
      {
        id: 'sa_melville_army',
        title: 'צבא הצללים / Army of Shadows',
        director: 'ז\'אן-פייר מלוויל',
        year: 1969,
        country: 'צרפת/איטליה',
        duration: 145,
        mandatory: false,
        clips: [
          'סצנת חיסול הבוגד'
        ]
      },
      {
        id: 'sa_bergman_summer',
        title: 'הקיץ שלי עם מוניקה / Summer with Monika',
        director: 'אינגמר ברגמן',
        year: 1953,
        country: 'שבדיה',
        duration: 96,
        mandatory: false,
        clips: [
          'החופש בקיץ',
          'החיכוך עם הבעל עד המבט למצלמה'
        ]
      },
      {
        id: 'sa_bergman_strawberries',
        title: 'תותי בר / Wild Strawberries',
        director: 'אינגמר ברגמן',
        year: 1957,
        country: 'שבדיה',
        duration: 91,
        mandatory: false,
        clips: [
          'הפתיחה עד סוף החלום'
        ]
      },
      {
        id: 'sa_bergman_seventh',
        title: 'החותם השביעי / The Seventh Seal',
        director: 'אינגמר ברגמן',
        year: 1957,
        country: 'שבדיה',
        duration: 96,
        mandatory: false,
        clips: [
          'הפתיחה',
          'השיחה עם המוות בכנסיה'
        ]
      },
      {
        id: 'sa_bergman_persona',
        title: 'פרסונה / Persona',
        director: 'אינגמר ברגמן',
        year: 1966,
        country: 'שבדיה',
        duration: 80,
        mandatory: false,
        clips: [
          'הפתיחה'
        ]
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
