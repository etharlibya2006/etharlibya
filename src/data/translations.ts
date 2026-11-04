export type Language = 'ar' | 'en';

export interface Translations {
  nav: {
    home: string;
    about: string;
    products: string;
    brands: string;
    distribution: string;
    globalSourcing: string;
    b2b: string;
    contact: string;
    switchLang: string;
    ctaButton: string;
  };
  hero: {
    cblBadge: string;
    headline: string;
    slogan: string;
    subheadline: string;
    exploreProducts: string;
    partnerWithUs: string;
    metrics: {
      experience: { value: string; label: string };
      coverage: { value: string; label: string };
      productsCount: { value: string; label: string };
      countries: { value: string; label: string };
    };
  };
  about: {
    badge: string;
    title: string;
    intro: string;
    milestone1Year: string;
    milestone1Title: string;
    milestone1Desc: string;
    milestone2Year: string;
    milestone2Title: string;
    milestone2Desc: string;
    milestone3Year: string;
    milestone3Title: string;
    milestone3Desc: string;
    visionTitle: string;
    visionDesc: string;
    missionTitle: string;
    missionDesc: string;
    whyUsTitle: string;
    pillars: Array<{ title: string; desc: string }>;
    cblComplianceTitle: string;
    cblComplianceDesc: string;
    facilitiesTitle: string;
    facilityHq: string;
    facilityWarehouse: string;
    facilityFleet: string;
  };
  products: {
    badge: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    filterAll: string;
    viewDetails: string;
    orderWhatsApp: string;
    specWeight: string;
    specCarton: string;
    keyFeatures: string;
    noResults: string;
    quickInquiry: string;
  };
  brands: {
    badge: string;
    title: string;
    subtitle: string;
    monalisaTitle: string;
    monalisaBadge: string;
    monalisaDesc: string;
    monalisaTagline: string;
    monalisaFeatures: string[];
    partnerBrandsTitle: string;
    partnerBrandsSubtitle: string;
  };
  distribution: {
    badge: string;
    title: string;
    subtitle: string;
    callout: string;
    cities: {
      tripoli: { name: string; role: string; desc: string; stats: string };
      misrata: { name: string; role: string; desc: string; stats: string };
      benghazi: { name: string; role: string; desc: string; stats: string };
      sebha: { name: string; role: string; desc: string; stats: string };
    };
    infrastructureTitle: string;
    warehousesTitle: string;
    warehousesDesc: string;
    fleetTitle: string;
    fleetDesc: string;
    complianceTitle: string;
    complianceDesc: string;
  };
  globalSourcing: {
    badge: string;
    title: string;
    subtitle: string;
    quoteTitle: string;
    quoteText: string;
    countriesTitle: string;
    countriesSubtitle: string;
    countriesList: Array<{ name: string; flag: string; special: string }>;
    internationalAdvantages: Array<{ title: string; desc: string }>;
  };
  b2b: {
    badge: string;
    title: string;
    subtitle: string;
    tracksTitle: string;
    tracks: Array<{ id: string; title: string; desc: string; badge: string }>;
    formTitle: string;
    formSubtitle: string;
    companyName: string;
    country: string;
    representativeName: string;
    phoneWhatsApp: string;
    email: string;
    cooperationType: string;
    message: string;
    submitButton: string;
    successMessage: string;
    directContactNote: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    addressTitle: string;
    addressValue: string;
    phoneTitle: string;
    phones: string[];
    emailTitle: string;
    emailValue: string;
    hoursTitle: string;
    hoursValue: string;
    openInMaps: string;
    socialTitle: string;
    facebook: string;
    tiktok: string;
  };
  footer: {
    companyName: string;
    description: string;
    rights: string;
    cblAffiliation: string;
    quickLinks: string;
    contactSummary: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      products: 'منتجاتنا',
      brands: 'علاماتنا التجارية',
      distribution: 'انتشارنا في ليبيا',
      globalSourcing: 'مصادر الاستيراد',
      b2b: 'التعاون التجاري',
      contact: 'اتصل بنا',
      switchLang: 'English',
      ctaButton: 'كن شريكاً تجارياً',
    },
    hero: {
      cblBadge: 'معتمد للتجارة والاستيراد المالي · تحت إشراف مصرف ليبيا المركزي (CBL)',
      headline: 'نربط الأسواق العالمية بالسوق الليبي',
      slogan: '«خبرة منذ 2006، وانتشار يصنع الفرق»',
      subheadline:
        'إيثار ليبيا شركة رائدة متخصصة في استيراد وتسويق وتوزيع المواد الغذائية؛ نمتلك خبرة تمتد منذ عام 2006، وشبكة تسويقية ولوجستية واسعة تغطي مختلف أنحاء ليبيا شرقاً وغرباً وجنوباً.',
      exploreProducts: 'اكتشف منتجاتنا',
      partnerWithUs: 'كن شريكاً تجارياً',
      metrics: {
        experience: { value: '+18 عاماً', label: 'خبرة في السوق الليبي منذ 2006' },
        coverage: { value: '100%', label: 'تغطية لكافة الأقاليم الليبية' },
        productsCount: { value: '+30', label: 'منتجاً وعلامة تجارية معتمدة' },
        countries: { value: '8+', label: 'دول ومصادر استيراد عالمية' },
      },
    },
    about: {
      badge: 'نبذة عن الشركة',
      title: 'إيثار ليبيا لاستيراد وتوزيع المواد الغذائية',
      intro:
        'منذ انطلاقتنا في عام 2006، ونحن نعمل على بناء حضور قوي وموثوق في سوق المواد الغذائية الليبي، مستندين إلى رؤية طموحة تقوم على توفير منتجات غذائية متنوعة، وتعزيز ثقة المستهلك، وبناء علاقات تجارية طويلة الأمد مع شركائنا الدوليين والمحليين.',
      milestone1Year: '2006',
      milestone1Title: 'الانطلاقة الأولى في السوق المحلي',
      milestone1Desc:
        'بدأت رحلتنا في مجال التسويق وتوزيع المواد الغذائية، وترسيخ قاعدة العملاء وتجار الجملة في طرابلس والمنطقة الغربية.',
      milestone2Year: '2015',
      milestone2Title: 'التوسع الاستراتيجي والاستيراد المباشر',
      milestone2Desc:
        'انتقلت إيثار ليبيا إلى مرحلة الاستيراد المباشر والتعامل مع كبرى المصانع والموردين في آسيا وأوروبا عبر الاعتمادات المستندية الرسمية.',
      milestone3Year: 'اليوم',
      milestone3Title: 'انتشار شامل وعلامات تجارية خاصة',
      milestone3Desc:
        'تغطية شاملة لربوع ليبيا شرقاً وغرباً وجنوباً، وتطوير علامات تجارية رائدة كعلامة MONALISA – موناليزا التي تتصدر السوق.',
      visionTitle: 'رؤيتنا',
      visionDesc:
        'أن نكون من الشركات الرائدة في استيراد وتسويق وتوزيع المواد الغذائية في ليبيا، وأن نساهم في تطوير قطاع الأغذية من خلال التميز في المنتجات والخدمات وبناء علامات تجارية ذات حضور قوي.',
      missionTitle: 'رسالتنا',
      missionDesc:
        'توفير منتجات غذائية متنوعة وعالية الجودة من الأسواق العالمية، وتقديمها للمستهلك الليبي من خلال شبكة تسويقية وتوزيعية فعالة، مع الالتزام بالمصداقية وبناء علاقات مستدامة مع شركائنا.',
      whyUsTitle: 'لماذا إيثار ليبيا؟',
      pillars: [
        {
          title: 'خبرة ممتدة',
          desc: 'حضور مستمر وخبرة ميدانية عميقة في السوق الليبي منذ عام 2006 تلبي تطلعات المستهلك والتاجر.',
        },
        {
          title: 'انتشار واسع',
          desc: 'قاعدة تسويقية وشبكة توزيع متطورة تغطي مختلف أنحاء ليبيا شرقاً وغرباً وجنوباً بكفاءة عالية.',
        },
        {
          title: 'استيراد عالمي',
          desc: 'علاقات تجارية راسخة مع مصانع وموردين من تركيا، الصين، إسبانيا، الهند، إيطاليا، وماليزيا.',
        },
        {
          title: 'علامات تجارية خاصة',
          desc: 'نمتلك ونعمل على تطوير علامات تجارية خاصة قادرة على المنافسة مثل MONALISA – موناليزا.',
        },
        {
          title: 'شراكات استراتيجية',
          desc: 'نسعى إلى علاقات تجارية طويلة الأمد مبنية على الشفافية وتنمية الفرص المتبادلة.',
        },
      ],
      cblComplianceTitle: 'الامتثال التجاري والرقابي لمصرف ليبيا المركزي (CBL)',
      cblComplianceDesc:
        'تعمل إيثار ليبيا وفق الأنظمة والضوابط الصادرة عن مصرف ليبيا المركزي ووزارة الاقتصاد والتجارة؛ حيث تتم كافة عمليات الاستيراد عبر الاعتمادات المستندية البنكية الرسمية (Letters of Credit)، مع الفحص المخبري الدقيق لدى مركز الرقابة على الأغذية والأدوية لضمان سلامة المستهلك الليبي والموثوقية المالية التامة مع الشركاء الدوليين.',
      facilitiesTitle: 'بنيتنا التحتية الميدانية',
      facilityHq: 'المقر الرئيسي والمكاتب الإدارية: طرابلس – الكريمية (شارع الثانوية)',
      facilityWarehouse: 'مستودعات مركزية ومخازن مجهزة بأنظمة ضبط الحرارة وسلاسل الإمداد',
      facilityFleet: 'أسطول شاحنات توزيع مجهزة تجوب المحافظات والمراكز الحضرية الليبية يومياً',
    },
    products: {
      badge: 'كتالوج المنتجات الرسمي',
      title: 'منتجات غذائية مختارة بعناية للمستهلك الليبي',
      subtitle:
        'نقدم تشكيلة متنوعة من أجود أنواع البسكويت، الويفر، الكيك، الشوكولاتة، والمشروبات من أرقى المصانع العالمية.',
      searchPlaceholder: 'ابحث عن منتج أو علامة تجارية...',
      filterAll: 'جميع المنتجات',
      viewDetails: 'عرض المواصفات',
      orderWhatsApp: 'طلب جملة واستفسار عبر واتساب',
      specWeight: 'الوزن الصافي',
      specCarton: 'مواصفة العبوة / الكرتونة',
      keyFeatures: 'أبرز مميزات المنتج',
      noResults: 'لم يتم العثور على منتجات مطابقة لخيارات البحث الحالية.',
      quickInquiry: 'استفسر عن هذا المنتج لمتاجرك',
    },
    brands: {
      badge: 'محفظة العلامات التجارية',
      title: 'علامات تجارية تصنع الفارق في السوق',
      subtitle:
        'نجمع بين علامتنا التجارية الخاصة MONALISA وشراكات التوزيع الحصري لأبرز العلامات الغذائية العالمية.',
      monalisaTitle: 'MONALISA – موناليزا',
      monalisaBadge: 'العلامة التجارية الخاصة بشركة إيثار ليبيا',
      monalisaDesc:
        'تمثل علامة MONALISA ركيزة استراتيجية في رؤية إيثار ليبيا لبناء منتجات عالية الجودة تنافس كبرى الماركات العالمية في السوق الليبي. تشمل منتجات موناليزا بسكويت الشوكولاتة الفاخر، ويفر إكسترا بنكهات جوز الهند والحليب والشوكولاتة، حليب مكثف محلى فائق الجودة، زبدة بسكويت بيسكوتي لوتس سبريد، مسحوق شوكولاتة الحليب، وكيك سنو فليك الراقي.',
      monalisaTagline: 'جودة استثنائية · مذاق إيطالي أصيل · قيمة تنافسية لا تضاهى',
      monalisaFeatures: [
        'تصنيع مطابق لأعلى المعايير الغذائية الدولية',
        'تغليف فاخر يجذب المستهلك على أرفف السوبرماركت',
        'تنوع واسع يشمل المخبوزات والحلويات ومشروبات الكاكاو',
        'حضور تسويقي قوي وحملات ترويجية مستمرة',
      ],
      partnerBrandsTitle: 'العلامات التجارية الشريكة',
      partnerBrandsSubtitle:
        'علاقات توزيع وتوريد تمثل كبرى الشركات الغذائية العالمية في السوق الليبي',
    },
    distribution: {
      badge: 'الانتشار اللوجستي والوصول',
      title: 'شبكة توزيع حقيقية تغطي مختلف أنحاء ليبيا',
      subtitle:
        'نصل بمنتجاتنا إلى أقصى نقاط البيع ومتاجر الجملة والتجزئة شرقاً وغرباً وجنوباً، مدعومة بمراكز لوجستية حقيقية.',
      callout: '«انتشارنا في ليبيا هو قوتنا، وشبكتنا تربط الأسواق العالمية بكل بيت ليبي»',
      cities: {
        tripoli: {
          name: 'طرابلس (المقر المركزي)',
          role: 'المركز التجاري الرئيسي والمستودعات المركزية (الكريمية)',
          desc: 'إدارة العمليات، التخزين المركزي، وتغذية أسواق طرابلس الكبرى، الزاوية، جبل نفوسة، والمدن المجاورة.',
          stats: 'توزيع يومي مباشر لأكثر من 1500+ نقطة بيع وجملة',
        },
        misrata: {
          name: 'مصراتة (المحور اللوجستي والميناء)',
          role: 'بوابة الاستقبال البحري والتخليص الجمركي السريع',
          desc: 'استقبال الحاويات من الموانئ العالمية، والتوزيع للوسط والمناطق الحرة والتجارية.',
          stats: 'ربط مباشر بالموانئ البحرية وخطوط الإمداد المركزية',
        },
        benghazi: {
          name: 'بنغازي (محور المنطقة الشرقية)',
          role: 'مركز التوزيع الرئيسي للمنطقة الشرقية',
          desc: 'تغذية أسواق بنغازي، المرج، البيضاء، درنة، وطبرق بشبكة وكلاء وتوزيع معتمدين.',
          stats: 'تغطية كاملة للمنطقة الشرقية بسلاسل توريد منتظمة',
        },
        sebha: {
          name: 'سبها (محور الجنوب الليبي)',
          role: 'نقطة الربط الإقليمي لمدن وفزان والجنوب',
          desc: 'شاحنات نقل مجهزة تضمن وصول المنتجات الطازجة للمستهلك في عمق الجنوب الليبي.',
          stats: 'رحلات شحن دورية مستقرة لكافة مدن الجنوب',
        },
      },
      infrastructureTitle: 'البنية اللوجستية التشغيلية',
      warehousesTitle: 'المستودعات المركزية (الكريمية)',
      warehousesDesc:
        'تقع مستودعاتنا في قلب منطقة الكريمية بطرابلس، وهي المركز التجاري الأكبر لتجارة الأغذية في ليبيا، ومجهزة بمواصفات حفظ مثالية ومساحات تخزينية شاسعة.',
      fleetTitle: 'أسطول النقل والتوزيع',
      fleetDesc:
        'أسطول من الشاحنات التجارية وسيارات التوزيع المجهزة لضمان وصول البضائع بحالتها الأصلية دون تأخير إلى كافة المدن الليبية.',
      complianceTitle: 'الرقابة والتخزين المطابق للمواصفات',
      complianceDesc:
        'تخضع مستودعاتنا لنظام إدارة جرد حديث ونظم تهوية وحفظ تطابق المعايير الصحية والرقابية الليبية والدولية.',
    },
    globalSourcing: {
      badge: 'الاستيراد وسلاسل الإمداد العالمية',
      title: 'مصادر استيرادنا من كبرى الأسواق العالمية',
      subtitle:
        'نتعاون مع مصانع عالمية في قارات آسيا وأوروبا لتقديم أجود المنتجات التي ترتقي بذوق المستهلك الليبي.',
      quoteTitle: 'رسالة إيثار ليبيا إلى المصانع والشركات العالمية',
      quoteText:
        '«هل تبحث عن شريك تجاري موثوق لدخول السوق الليبي؟ إيثار ليبيا ترحب بالتعاون مع المصانع والشركات العالمية في مجال استيراد وتوزيع المنتجات الغذائية.»',
      countriesTitle: 'الدول الشريكة ومصادر التوريد',
      countriesSubtitle: 'شبكة تعاملات تجارية واعتمادات مستندية نشطة مع أهم مراكز صناعة الأغذية في العالم',
      countriesList: [
        { name: 'الصين', flag: '🇨🇳', special: 'حلويات، بسكويت، وتغليف مبتكر' },
        { name: 'تركيا', flag: '🇹🇷', special: 'مخبوزات، ويفر فاخر، وشوكولاتة راقية' },
        { name: 'إسبانيا', flag: '🇪🇸', special: 'منتجات غذائية متوسطية عالية الجودة' },
        { name: 'الهند', flag: '🇮🇳', special: 'بسكويت الدايجستيف والكوكيز والمخبوزات' },
        { name: 'فيتنام', flag: '🇻🇳', special: 'حلويات ومنتجات غذائية متنوعة' },
        { name: 'ماليزيا', flag: '🇲🇾', special: 'ويفر وشوكولاتة بمواصفات عالمية' },
        { name: 'بلغاريا', flag: '🇧🇬', special: 'كيك أوروبي ومنتجات محشوة فاخرة' },
        { name: 'إيطاليا', flag: '🇮🇹', special: 'خلطات الكاكاو ونكهات موناليزا الأصيلة' },
      ],
      internationalAdvantages: [
        {
          title: 'الامتثال الكامل لمصرف ليبيا المركزي (CBL)',
          desc: 'فتح الاعتمادات المستندية البنكية بسلاسة والالتزام الصارم بالإجراءات النقدية والقانونية.',
        },
        {
          title: 'التخليص الجمركي والرقابة الغذائية',
          desc: 'خبرة عريقة في إجراءات الإفراج الجمركي والفحص المخبري الليبي السريع دون أي تأخير.',
        },
        {
          title: 'حماية وتطوير العلامات التجارية',
          desc: 'نعمل كوكيل حقيقي يبني حضور علامتك في السوق الليبي ولا نكتفي بمجرد البيع العابر.',
        },
        {
          title: 'الوصول الفوري للمستهلك الليبي',
          desc: 'شبكة من المستودعات وأسطول شاحنات ينقل المنتجات فوراً إلى رفوف المتاجر في كل مدينة.',
        },
      ],
    },
    b2b: {
      badge: 'بوابة الشركاء والمصانع',
      title: 'فرص التعاون التجاري والشراكة الدولية',
      subtitle:
        'نفتح آفاق التعاون المباشر مع المصانع والشركات المصدرة عبر نماذج عمل مرنة وموثوقة تحقق النمو المتبادل.',
      tracksTitle: 'مسارات التعاون المتاحة للمصانع والشركات:',
      tracks: [
        {
          id: 'exclusive',
          title: 'طلبات التوزيع الحصري',
          desc: 'تمثيل حصري لعلامتكم التجارية في السوق الليبي مع الالتزام بخطط تسويقية واستهداف بيعي مدروس.',
          badge: 'Exclusive Distribution',
        },
        {
          id: 'import',
          title: 'الاستيراد والتوريد المباشر',
          desc: 'شراء وتوريد كميات تجارية منتظمة بحاويات كاملة عبر الاعتمادات البنكية الرسمية (CBL Letters of Credit).',
          badge: 'Direct Sourcing & Import',
        },
        {
          id: 'private-label',
          title: 'التصنيع بالعلامة الخاصة (Private Label)',
          desc: 'تصنيع منتجات غذائية لصالح علامتنا التجارية MONALISA وفق مواصفاتنا الخاصة وبأعلى جودة.',
          badge: 'OEM & Private Label',
        },
        {
          id: 'joint-venture',
          title: 'الشراكات التجارية طويلة الأمد',
          desc: 'بناء تحالفات استراتيجية لفتح خطوط إنتاج جديدة وتوسيع الحصة السوقية داخل ليبيا ودول الجوار.',
          badge: 'Strategic Joint Ventures',
        },
      ],
      formTitle: 'نموذج طلب الشراكة والتعاون التجاري (B2B Enquiry)',
      formSubtitle: 'املأ بيانات شركتك وسيتواصل معك قسم التجارة الدولية بإيثار ليبيا خلال 24 ساعة عمل',
      companyName: 'اسم الشركة / المصنع',
      country: 'الدولة والمدينة',
      representativeName: 'اسم المسؤول والمنصب',
      phoneWhatsApp: 'رقم الهاتف / الواتساب (مع رمز الدولة)',
      email: 'البريد الإلكتروني للعمل',
      cooperationType: 'نوع التعاون المطلوب',
      message: 'تفاصيل المنتجات أو العرض التجاري المقترح',
      submitButton: 'إرسال طلب الشراكة رسمياً',
      successMessage: 'تم استلام طلبكم بنجاح! سيتواصل معكم فريق إدارة الاستيراد والتعاون التجاري قريباً.',
      directContactNote: 'يمكنكم أيضاً مراسلتنا مباشرة عبر البريد المعتمد: ethar.libya2015@gmail.com أو عبر واتساب.',
    },
    contact: {
      badge: 'التواصل والمقر',
      title: 'تواصل مع إيثار ليبيا',
      subtitle: 'فريقنا التجاري والإداري مستعد لخدمة العملاء والموردين وشركاء الأعمال على مدار الساعة.',
      addressTitle: 'المقر الرئيسي والمستودعات',
      addressValue: 'ليبيا – طرابلس، منطقة الكريمية (شارع الثانوية)',
      phoneTitle: 'الهواتف الرسمية وخدمة الواتساب',
      phones: ['هاتف الشركة والمبيعات: 0925062360', 'هاتف الإدارة والمسؤول: 0913253515'],
      emailTitle: 'البريد الإلكتروني الرسمي',
      emailValue: 'ethar.libya2015@gmail.com',
      hoursTitle: 'أوقات العمل الرسمية',
      hoursValue: 'السبت إلى الخميس: 8:30 صباحاً – 6:00 مساءً',
      openInMaps: 'فتح الموقع على خرائط Google',
      socialTitle: 'تابعنا على المنصات الرسمية',
      facebook: 'صفحة إيثار ليبيا على فيسبوك',
      tiktok: 'حساب إيثار ليبيا على تيك توك (@etharlibya)',
    },
    footer: {
      companyName: 'شركة إيثار ليبيا لاستيراد وتوزيع المواد الغذائية',
      description:
        'كيان تجاري وطني رائد بخبرة تمتد منذ 2006 في استيراد وتسويق وتوزيع السلع الغذائية بمختلف ربوع ليبيا، وصاحب العلامة التجارية MONALISA.',
      rights: 'جميع الحقوق محفوظة © 2006 - 2026 شركة إيثار ليبيا. مسجلة ومعتمدة.',
      cblAffiliation: 'تخضع العمليات البنكية والتجارية للشركة لضوابط واعتمادات مصرف ليبيا المركزي (CBL).',
      quickLinks: 'روابط الوصول السريع',
      contactSummary: 'المقر: طرابلس - الكريمية · هاتف: 0925062360 / 0913253515',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      products: 'Products',
      brands: 'Our Brands',
      distribution: 'Distribution Reach',
      globalSourcing: 'Global Sourcing',
      b2b: 'B2B Trade Portal',
      contact: 'Contact Us',
      switchLang: 'العربية',
      ctaButton: 'Partner With Us',
    },
    hero: {
      cblBadge: 'Officially Accredited for Trade & Sourcing · Audited under Central Bank of Libya (CBL)',
      headline: 'Connecting Global Food Markets to Libya',
      slogan: '«Experience Since 2006, Distribution That Makes The Difference»',
      subheadline:
        'Ethar Libya is a premier FMCG company specializing in the direct import, marketing, and nationwide distribution of high-grade food products across all western, eastern, and southern regions of Libya.',
      exploreProducts: 'Explore Our Products',
      partnerWithUs: 'Become a Trade Partner',
      metrics: {
        experience: { value: '+18 Years', label: 'Libyan Market Leadership Since 2006' },
        coverage: { value: '100%', label: 'Nationwide Reach in Libya' },
        productsCount: { value: '+30', label: 'Certified Food Brands & SKUs' },
        countries: { value: '8+', label: 'Global Sourcing & Trade Partners' },
      },
    },
    about: {
      badge: 'Corporate Profile',
      title: 'Ethar Libya for Food Import & Distribution',
      intro:
        'Since our inception in 2006, we have established a commanding and trusted market presence across the Libyan food sector, driven by a forward-looking vision to deliver superior consumer goods, foster retailer trust, and cultivate sustainable international partnerships.',
      milestone1Year: '2006',
      milestone1Title: 'Domestic Distribution Launch',
      milestone1Desc:
        'Initiated operations in domestic food marketing, building wholesale networks throughout Tripoli and Western Libya.',
      milestone2Year: '2015',
      milestone2Title: 'Strategic Global Import Expansion',
      milestone2Desc:
        'Transitioned into direct international importing, establishing banking Letters of Credit with major food manufacturers across Europe and Asia.',
      milestone3Year: 'Today',
      milestone3Title: 'Nationwide Network & Proprietary Brands',
      milestone3Desc:
        'Covering the entirety of Libya while nurturing top-tier private brands like MONALISA that command dominant market share.',
      visionTitle: 'Our Vision',
      visionDesc:
        'To stand as the foremost food import and distribution enterprise in Libya, elevating the national consumer goods landscape through exceptional product standards and resilient, celebrated brands.',
      missionTitle: 'Our Mission',
      missionDesc:
        'To source diversified, high-quality food products from international markets and supply them seamlessly to Libyan consumers through an agile distribution network rooted in integrity.',
      whyUsTitle: 'Why Ethar Libya?',
      pillars: [
        {
          title: 'Deep Market Heritage',
          desc: 'Unbroken market track record and operational expertise in Libya since 2006.',
        },
        {
          title: 'Nationwide Penetration',
          desc: 'Expansive marketing footprint reaching wholesalers, hypermarkets, and retailers across Libya.',
        },
        {
          title: 'Global Sourcing Power',
          desc: 'Direct supplier relationships with world-class manufacturers in Turkey, China, Spain, India, and Italy.',
        },
        {
          title: 'Proprietary Brand Portfolio',
          desc: 'Creators and brand owners of high-equity household names, led by MONALISA.',
        },
        {
          title: 'Strategic Alliances',
          desc: 'Long-term joint commitments providing international suppliers with friction-free market entry.',
        },
      ],
      cblComplianceTitle: 'Central Bank of Libya (CBL) Compliance & Trade Rigor',
      cblComplianceDesc:
        'Ethar Libya operates in full adherence to the regulatory decrees issued by the Central Bank of Libya (CBL) and the Ministry of Economy. All import transactions are structured through formal banking Letters of Credit (LCs) alongside comprehensive inspection and laboratory certification by the Libyan Food and Drug Control Center.',
      facilitiesTitle: 'Operational Infrastructure',
      facilityHq: 'Headquarters: Tripoli, Libya – Al-Karimiyah Wholesale District (Al-Thanawiya Street)',
      facilityWarehouse: 'Central logistics warehouses engineered with temperature-controlled storage and pallet racking',
      facilityFleet: 'Fleet of dedicated commercial distribution vehicles connecting urban centers and regional hubs',
    },
    products: {
      badge: 'Official Product Portfolio',
      title: 'Curated Consumer Products for the Libyan Market',
      subtitle:
        'Explore our selection of biscuits, premium wafers, sponge cakes, chocolates, spreads, and cocoa beverages from global manufacturers.',
      searchPlaceholder: 'Search by product name or brand...',
      filterAll: 'All Products',
      viewDetails: 'View Specifications',
      orderWhatsApp: 'Wholesale Inquiry via WhatsApp',
      specWeight: 'Net Weight',
      specCarton: 'Packaging / Carton Spec',
      keyFeatures: 'Product Highlights',
      noResults: 'No products matched your selected criteria.',
      quickInquiry: 'Inquire About Wholesale Pricing',
    },
    brands: {
      badge: 'Brand Portfolio',
      title: 'Brands Driving Consumer Demand in Libya',
      subtitle:
        'Combining our flagship proprietary brand MONALISA with prestigious international distribution partnerships.',
      monalisaTitle: 'MONALISA',
      monalisaBadge: 'Flagship Proprietary Brand of Ethar Libya',
      monalisaDesc:
        'MONALISA represents the pinnacle of Ethar Libya’s vision to deliver Italian-inspired, gourmet confectionery tailored for the modern consumer. Our portfolio spans chocolate-coated biscuits, extra cream wafers, rich sweetened condensed milk, velvety biscotti spread, kids cocoa powder, and soft Swiss rolls and snowflake cakes.',
      monalisaTagline: 'Exceptional Quality · Authentic Recipe · Unrivaled Value',
      monalisaFeatures: [
        'Formulated to rigorous European food safety standards',
        'Eye-catching shelf packaging engineered for retail velocity',
        'Multi-category breadth spanning confectionery, bakery, and dairy',
        'Sustained marketing campaigns across national media channels',
      ],
      partnerBrandsTitle: 'International Partner Brands',
      partnerBrandsSubtitle:
        'Exclusive sourcing and distribution alliances representing leading global food companies.',
    },
    distribution: {
      badge: 'Distribution Network',
      title: 'Nationwide Logistics Covering All Regions of Libya',
      subtitle:
        'We deliver products directly to wholesale distribution centers, supermarkets, and neighborhood stores across Libya.',
      callout: '«Our reach across Libya is our competitive strength, connecting world-class brands with every Libyan household.»',
      cities: {
        tripoli: {
          name: 'Tripoli (Headquarters & Central Hub)',
          role: 'Corporate HQ & Master Distribution Hub (Al-Karimiyah)',
          desc: 'Command center for supply chain, warehousing, and direct distribution across Greater Tripoli and Western Libya.',
          stats: 'Daily distribution to over 1,500+ wholesale and retail outlets',
        },
        misrata: {
          name: 'Misrata (Maritime Logistics Port Hub)',
          role: 'Primary Gateway for Maritime Freight & Customs Clearance',
          desc: 'High-speed container handling from international container lines into central Libyan trade corridors.',
          stats: 'Direct container port integration and bonded clearance',
        },
        benghazi: {
          name: 'Benghazi (Eastern Regional Hub)',
          role: 'Distribution Hub for Cyrenaica & Eastern Markets',
          desc: 'Supplying Benghazi, Al-Marj, Al-Bayda, Derna, and Tobruk through an established regional network.',
          stats: 'Reliable weekly replenishment cycles across Eastern cities',
        },
        sebha: {
          name: 'Sebha (Southern Hub & Fezzan Gateway)',
          role: 'Strategic Logistics Link for Southern Libya',
          desc: 'Dedicated transport links ensuring remote desert communities receive fresh stock consistently.',
          stats: 'Scheduled long-haul transport routes to Southern centers',
        },
      },
      infrastructureTitle: 'Operational Facilities',
      warehousesTitle: 'Central Warehouses (Al-Karimiyah)',
      warehousesDesc:
        'Strategically situated in Al-Karimiyah, Tripoli—Libya’s most prominent wholesale trade hub—providing modern high-density pallet storage and temperature management.',
      fleetTitle: 'Commercial Vehicle Fleet',
      fleetDesc:
        'A fleet of delivery vehicles and long-haul trucks equipped to maintain product integrity throughout transit.',
      complianceTitle: 'Food Safety & Controlled Storage',
      complianceDesc:
        'Facilities managed with digital inventory tracking and strict hygiene standards meeting both Libyan and international norms.',
    },
    globalSourcing: {
      badge: 'Global Sourcing & Supply Chain',
      title: 'Importing Directly from World-Class Food Manufacturers',
      subtitle:
        'Partnering with certified producers across Asia and Europe to provide Libyan consumers with dependable quality.',
      quoteTitle: 'Official Message to International Manufacturers & Exporters',
      quoteText:
        '«Are you seeking a trusted commercial partner to access and expand in the Libyan food market? Ethar Libya warmly welcomes collaboration with global food manufacturers and exporters.»',
      countriesTitle: 'Sourcing Origins & Trade Partners',
      countriesSubtitle: 'Active Letters of Credit and bilateral trade with major food export nations',
      countriesList: [
        { name: 'China', flag: '🇨🇳', special: 'Confectionery, snack biscuits & packaging innovations' },
        { name: 'Turkey', flag: '🇹🇷', special: 'Gourmet bakery, premium wafers & chocolate creations' },
        { name: 'Spain', flag: '🇪🇸', special: 'High-grade Mediterranean foods & grocery lines' },
        { name: 'India', flag: '🇮🇳', special: 'Digestive biscuits, cookies & bulk bakery goods' },
        { name: 'Vietnam', flag: '🇻🇳', special: 'Confectionery & diversified consumer goods' },
        { name: 'Malaysia', flag: '🇲🇾', special: 'Premium cocoa wafers & certified confectionery' },
        { name: 'Bulgaria', flag: '🇧🇬', special: 'European cakes, sponge rolls & filled pastries' },
        { name: 'Italy', flag: '🇮🇹', special: 'Authentic cocoa recipes & MONALISA brand heritage' },
      ],
      internationalAdvantages: [
        {
          title: 'Full Central Bank of Libya (CBL) Compliance',
          desc: 'Seamless execution of documentary Letters of Credit (LCs) backed by banking transparency.',
        },
        {
          title: 'Expedited Customs & Quality Clearance',
          desc: 'Decades of expertise navigating Libyan customs protocols and Food & Drug inspection standards.',
        },
        {
          title: 'Brand Incubation & Shelf Dominance',
          desc: 'We act as dedicated brand stewards, building long-term equity rather than transactional drops.',
        },
        {
          title: 'Last-Mile Route-to-Market',
          desc: 'Immediate access to our warehouses and sales fleet placing your products on shelves rapidly.',
        },
      ],
    },
    b2b: {
      badge: 'B2B Trade Portal',
      title: 'Commercial Cooperation & Manufacturer Opportunities',
      subtitle:
        'Empowering international principals and food factories with dependable market access and mutual growth models.',
      tracksTitle: 'Strategic Partnership Models for Global Exporters:',
      tracks: [
        {
          id: 'exclusive',
          title: 'Exclusive Distribution Agreements',
          desc: 'Sole representation of your brand within the Libyan market with agreed annual targets and marketing commitments.',
          badge: 'Exclusive Distribution',
        },
        {
          id: 'import',
          title: 'Direct Sourcing & Regular Importation',
          desc: 'Regular, high-volume container purchases transacted through formal CBL documentary Letters of Credit.',
          badge: 'Direct Sourcing & Import',
        },
        {
          id: 'private-label',
          title: 'Private Label & OEM Manufacturing',
          desc: 'Contract manufacturing under our proprietary MONALISA brand tailored to our precise quality specifications.',
          badge: 'OEM & Private Label',
        },
        {
          id: 'joint-venture',
          title: 'Long-Term Strategic Partnerships',
          desc: 'Joint development of new product lines, packaging localization, and multi-year market penetration strategies.',
          badge: 'Strategic Joint Ventures',
        },
      ],
      formTitle: 'B2B Trade & Partnership Inquiry Form',
      formSubtitle: 'Submit your company and product details; our international trade desk will reply within 24 business hours.',
      companyName: 'Company / Factory Name',
      country: 'Country & City of Origin',
      representativeName: 'Contact Person & Title',
      phoneWhatsApp: 'Phone / WhatsApp (with country code)',
      email: 'Corporate Email',
      cooperationType: 'Desired Partnership Track',
      message: 'Product Catalog Overview or Proposal Details',
      submitButton: 'Submit Formal Business Enquiry',
      successMessage: 'Inquiry received successfully! Our International Trade Division will be in contact shortly.',
      directContactNote: 'You may also reach our executive desk directly at: ethar.libya2015@gmail.com or via WhatsApp.',
    },
    contact: {
      badge: 'Corporate Contact',
      title: 'Connect with Ethar Libya',
      subtitle: 'Our commercial and operations teams are ready to support clients, retailers, and international suppliers.',
      addressTitle: 'Headquarters & Central Logistics',
      addressValue: 'Tripoli, Libya – Al-Karimiyah District (Al-Thanawiya Street)',
      phoneTitle: 'Direct Phone & WhatsApp Channels',
      phones: ['Sales & Inquiries: +218 92 506 2360', 'Executive Desk: +218 91 325 3515'],
      emailTitle: 'Corporate Email',
      emailValue: 'ethar.libya2015@gmail.com',
      hoursTitle: 'Operating Hours',
      hoursValue: 'Saturday to Thursday: 8:30 AM – 6:00 PM (GMT+2)',
      openInMaps: 'Open Location on Google Maps',
      socialTitle: 'Official Social Media Channels',
      facebook: 'Ethar Libya Official Facebook Page',
      tiktok: 'Ethar Libya TikTok Channel (@etharlibya)',
    },
    footer: {
      companyName: 'Ethar Libya for Food Import & Distribution',
      description:
        'A leading Libyan FMCG enterprise operating since 2006, delivering trusted international food brands across the nation and home to the MONALISA brand.',
      rights: 'All Rights Reserved © 2006 - 2026 Ethar Libya. Officially Registered & Certified.',
      cblAffiliation: 'Financial and import transactions operate in compliance with Central Bank of Libya (CBL) standards.',
      quickLinks: 'Quick Links',
      contactSummary: 'Tripoli, Al-Karimiyah · Tel: +218 92 506 2360 / +218 91 325 3515',
    },
  },
};
