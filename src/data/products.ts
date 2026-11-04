export interface Product {
  id: string;
  nameAr: string;
  nameEn: string;
  brand: 'MONALISA' | 'BAKEMATE' | 'Nutri-Food' | 'LookMe' | 'BOLANTY' | 'LIBRA';
  category: 'biscuits' | 'wafers' | 'cakes' | 'confectionery' | 'beverages' | 'other';
  image: string;
  weight: string;
  cartonSpec: string;
  descriptionAr: string;
  descriptionEn: string;
  featuresAr: string[];
  featuresEn: string[];
  isFlagship?: boolean;
}

export const PRODUCTS: Product[] = [
  // ==========================================
  // --- MONALISA FLAGSHIP BRAND (مونا ليزا) ---
  // ==========================================

  // 1. Choco Biscuit Dark Chocolate
  {
    id: 'monalisa-choco-biscuit-dark',
    nameAr: 'بسكويت مونا ليزا شوكو بيسكويت بالشوكولاتة الداكنة',
    nameEn: 'MONALISA Choco Biscuit (Dark Chocolate & Petit Beurre)',
    brand: 'MONALISA',
    category: 'biscuits',
    image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_59_20_PM-6_ba489de7.png',
    weight: 'قطعة مغلفة فردياً',
    cartonSpec: 'علبة كرتونية راقية بنية وذهبية',
    descriptionAr: 'طعم غني من الشوكولاتة الداكنة الفاخرة مع بسكويت بيتي بور المقرمش الذهبي لعشاق المذاق الأصيل.',
    descriptionEn: 'Rich, intense dark chocolate slab atop a crispy golden Petit Beurre biscuit for true connoisseurs.',
    featuresAr: ['شوكولاتة داكنة غنية', 'بسكويت بيتي بور مقرمش', 'تغليف فردي أنيق يحفظ الجودة'],
    featuresEn: ['Rich dark chocolate slab', 'Crisp Petit Beurre biscuit', 'Individual freshness foil wrap'],
    isFlagship: true,
  },

  // 2. Choco Biscuit Milk & Petit Beurre (Blue Box)
  {
    id: 'monalisa-choco-biscuit-milk',
    nameAr: 'بسكويت مونا ليزا شوكو بيسكويت بشوكولاتة الحليب والبيتي بور',
    nameEn: 'MONALISA Choco Biscuit (Milk Chocolate & Petit Beurre)',
    brand: 'MONALISA',
    category: 'biscuits',
    image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_59_14_PM-3_bffcc3d3.png',
    weight: 'قطعة مغلفة فردياً',
    cartonSpec: 'علبة كرتونية زرقاء أنيقة',
    descriptionAr: 'مزيج بسكويت بيتي بور الكلاسيكي الهش مع لوح سميك من شوكولاتة الحليب الصافية المذابة.',
    descriptionEn: 'Classic crisp Petit Beurre biscuit layered with a generous slab of velvety milk chocolate.',
    featuresAr: ['شوكولاتة حليب ناعمة', 'بسكويت مقرمش كلاسيكي', 'مثالي مع الشاي والقهوة'],
    featuresEn: ['Smooth dairy milk chocolate', 'Crunchy Petit Beurre', 'Ideal with tea and coffee'],
    isFlagship: true,
  },

  // 3. Choco Biscuit Cocoa Biscuit with Milk Chocolate (Green Box)
  {
    id: 'monalisa-choco-biscuit-cocoa',
    nameAr: 'بسكويت مونا ليزا شوكو بيسكويت بالكاكاو وشوكولاتة الحليب',
    nameEn: 'MONALISA Choco Biscuit (Milk Chocolate & Cocoa Biscuit)',
    brand: 'MONALISA',
    category: 'biscuits',
    image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_59_11_PM-2_b91814cf.png',
    weight: 'قطعة مغلفة فردياً',
    cartonSpec: 'علبة خضراء تجارية أنيقة',
    descriptionAr: 'بسكويت الكاكاو الهش والمحمص مغطى بلوح سميك من شوكولاتة الحليب الفاخرة لتناغم كاكاو مضاعف.',
    descriptionEn: 'Decadent cocoa biscuit base layered with smooth, melt-in-the-mouth milk chocolate.',
    featuresAr: ['بسكويت كاكاو محمص طبيعي', 'شوكولاتة حليب فاخرة', 'تغليف معدني عازل للرطوبة'],
    featuresEn: ['Natural toasted cocoa biscuit', 'Premium milk chocolate slab', 'Hermetic foil protection'],
    isFlagship: true,
  },

  // 4. Mini Biscuits Strawberry 30g
  {
    id: 'monalisa-mini-biscuits-strawberry',
    nameAr: 'ميني بسكويت مونا ليزا بنكهة الفراولة',
    nameEn: 'MONALISA Mini Biscuits (Strawberry Flavor)',
    brand: 'MONALISA',
    category: 'biscuits',
    image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_59_21_PM-7_e3339329.png',
    weight: 'الوزن 30 جرام',
    cartonSpec: 'مقاس العلبة 24 × 12 عبوة (820g)',
    descriptionAr: 'متعة الشوكولاتة المقرمشة بنكهة الفراولة المنعشة، حجم ميني عملي ومحبوب للأطفال والرحلات.',
    descriptionEn: 'Crispy bite-sized mini biscuits filled with luscious strawberry cream in an on-the-go snack pouch.',
    featuresAr: ['الوزن الصافي 30 جرام للعبوة', 'مقاس العلبة 24 × 12', 'نكهة الفراولة الطبيعية المحبوبة'],
    featuresEn: ['Net weight 30g per pack', 'Carton box spec 24 x 12', 'Natural strawberry flavor'],
  },

  // 5. Chocolate Tiger Filled Biscuit Pouch
  {
    id: 'monalisa-chocolate-tiger-pouch',
    nameAr: 'بسكويت كرات مونا ليزا المحشوة بالشوكولاتة',
    nameEn: 'MONALISA Chocolate Filled Snack Biscuits (Pouch)',
    brand: 'MONALISA',
    category: 'biscuits',
    image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_51_27_PM-3_4288735d.png',
    weight: 'كيس مقرمشات عائلي',
    cartonSpec: 'كرتون شحن جملة للمحلات',
    descriptionAr: 'حبات بسكويت ذهبية مقرمشة برسومات مرحة، محشوة بقلب شوكولاتة كريمية تذوب فوراً في الفم.',
    descriptionEn: 'Playful embossed crispy biscuit bites filled with rich, flowing chocolate cream center.',
    featuresAr: ['رسومات مرحة ومحبوبة للأطفال', 'حشوة شوكولاتة كثيفة', 'كيس عائلي محكم الإغلاق'],
    featuresEn: ['Fun embossed characters', 'Rich creamy center', 'Freshness zip-lock bag'],
  },

  // 6. Wafers Extra Milky
  {
    id: 'monalisa-wafers-milky',
    nameAr: 'ويفر مونا ليزا إكسترا - حليب',
    nameEn: 'MONALISA Wafers Extra (Milky Cream)',
    brand: 'MONALISA',
    category: 'wafers',
    image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_59_18_PM-5_dcc67f73.png',
    weight: 'عبوة ويفر إكسترا',
    cartonSpec: 'كرتونة عرض نقاط البيع',
    descriptionAr: 'طبقات ويفر ذهبية خفيفة ومقرمشة تتخللها كريمة حليب طازجة وكثيفة لمذاق فائق النعومة.',
    descriptionEn: 'Feather-light crispy wafer layers infused with dense, velvety fresh milk cream.',
    featuresAr: ['كريمة حليب طازجة ونقية', 'قرمشة استثنائية في كل قضمة', 'تغليف عازل للرطوبة'],
    featuresEn: ['Pure fresh milk cream', 'Crisp multi-layered wafer', 'Moisture-proof foil wrapper'],
    isFlagship: true,
  },

  // 7. Wafers Extra Coconut
  {
    id: 'monalisa-wafers-coconut',
    nameAr: 'ويفر مونا ليزا إكسترا - جوز الهند',
    nameEn: 'MONALISA Wafers Extra (Coconut Cream)',
    brand: 'MONALISA',
    category: 'wafers',
    image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_59_16_PM-4_840757ff.png',
    weight: 'عبوة ويفر إكسترا',
    cartonSpec: 'كرتونة توزيع للمتاجر',
    descriptionAr: 'قرمشة الويفر الاستوائية الفاخرة مع كريمة جوز الهند الطبيعي الغني بالنكهة المنعشة.',
    descriptionEn: 'Crisp golden wafers paired with rich, aromatic tropical coconut cream.',
    featuresAr: ['جوز هند طبيعي استوائي', 'ويفر رقيق فائق الهشاشة', 'طعم استوائي مميز'],
    featuresEn: ['Natural tropical coconut', 'Feather-light crunchy sheets', 'Distinctive refreshing taste'],
    isFlagship: true,
  },

  // 8. Wafers Extra Chocolate 50g
  {
    id: 'monalisa-wafers-chocolate-50g',
    nameAr: 'ويفر مونا ليزا إكسترا بالشوكولاتة 50g',
    nameEn: 'MONALISA Wafers Extra Chocolate 50g',
    brand: 'MONALISA',
    category: 'wafers',
    image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_51_29_PM-4_8dc7156e.png',
    weight: '50 جرام (50g e)',
    cartonSpec: 'علب عرض تجارية مخصصة',
    descriptionAr: 'ويفر الشوكولاتة الأيقوني من مونا ليزا بوزن 50 جرام، قرمشة متوازنة مع كريمة الكاكاو الإيطالية.',
    descriptionEn: 'The iconic 50g chocolate wafer bar from Mona Lisa, layered with decadent Italian-style cocoa cream.',
    featuresAr: ['وزن مثالي 50 جرام للوجبات السريعة', 'شوكولاتة بنكهة إيطالية أصيلة', 'تغليف عالي الجودة'],
    featuresEn: ['Ideal 50g snack weight', 'Authentic Italian chocolate style', 'Premium sealed wrapper'],
    isFlagship: true,
  },

  // 9. Wafers Extra Display Box (Red & Green)
  {
    id: 'monalisa-wafers-display-box',
    nameAr: 'تشكيلة ويفر مونا ليزا إكسترا (صناديق العرض الفاخرة)',
    nameEn: 'MONALISA Wafers Extra Display Pack (Chocolate & Hazelnut)',
    brand: 'MONALISA',
    category: 'wafers',
    image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_51_31_PM-5_4ed75563.png',
    weight: 'علب عرض مزدوجة',
    cartonSpec: 'صناديق حمراء وخضراء لنقاط البيع والسوبرماركت',
    descriptionAr: 'صناديق عرض كرتونية جاهزة للرفوف تضم ويفر مونا ليزا إكسترا بنكهتي الشوكولاتة والبندق.',
    descriptionEn: 'Ready-to-display retail counter boxes showcasing Mona Lisa Extra wafers in Chocolate and Hazelnut.',
    featuresAr: ['صناديق عرض بصرية جذابة', 'نكهتا الشوكولاتة والبندق', 'مجهزة مباشرة للعرض في نقاط البيع'],
    featuresEn: ['Vibrant shelf-ready packaging', 'Chocolate and hazelnut varieties', 'Instant point-of-sale appeal'],
  },

  // 10. Swiss Roll (Hazelnut, Caramel, Chocolate)
  {
    id: 'monalisa-swiss-roll',
    nameAr: 'سويس رول مونا ليزا (بندق - كراميل - شوكولاتة)',
    nameEn: 'MONALISA Swiss Roll (Hazelnut, Caramel & Chocolate)',
    brand: 'MONALISA',
    category: 'cakes',
    image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_51_23_PM-2_f9ac5fc2.png',
    weight: 'عبوة رول كيك عائلية',
    cartonSpec: '3 نكهات متنوعة في كرتونة الشحن',
    descriptionAr: 'كيك إسفنجي طري ملفوف بعناية ومحشو بكريمة البندق المحمص، الكراميل الذهبي، أو الشوكولاتة الغنية.',
    descriptionEn: 'Ultra-soft sponge cake rolls swirled with roasted hazelnut cream, luscious caramel, or dark chocolate.',
    featuresAr: ['قوام إسفنجي فائق الطراوة', 'خطوط تزيين الشوكولاتة الفاخرة', '3 نكهات رئيسية'],
    featuresEn: ['Super soft sponge texture', 'Artisan chocolate drizzle', '3 customer-favorite flavors'],
    isFlagship: true,
  },

  // 11. Snowflake Pistachio
  {
    id: 'monalisa-snowflake-pistachio',
    nameAr: 'كيك مونا ليزا سنو فليك بطعم الفستق الحلبي',
    nameEn: 'MONALISA SNOWFLAKE (Pistachio Cream Cake)',
    brand: 'MONALISA',
    category: 'cakes',
    image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_29_01_PM-5_e07aa92b.png',
    weight: 'قطعة كيك مغلفة فاخرة',
    cartonSpec: 'كرتون شحن نقاط البيع الفاخرة',
    descriptionAr: 'تحفة حلويات من مونا ليزا: كيكة هشة محشوة بكريمة الحليب ومغلفة بطبقة غنية من الفستق الحلبي المحمص.',
    descriptionEn: 'Gourmet dome cake filled with smooth milk cream and generously enrobed in crushed roasted pistachios.',
    featuresAr: ['فستق حلبي فاخر ومطحون', 'حشوة كريمة حليبية مركزة', 'مظهر أنيق ومذاق ملكي'],
    featuresEn: ['Premium crushed pistachios', 'Dense milk cream center', 'Royal gourmet presentation'],
    isFlagship: true,
  },

  // 12. Snowflake Coconut & Milk Duo
  {
    id: 'monalisa-snowflake-duo',
    nameAr: 'كيك مونا ليزا سنو فليك (جوز الهند والحليب)',
    nameEn: 'MONALISA SNOWFLAKE (Coconut & Milk Flavors)',
    brand: 'MONALISA',
    category: 'cakes',
    image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_59_08_PM-1_f1b5f11e.png',
    weight: 'عبوة فردية مميزة',
    cartonSpec: 'علبة عرض ثنائية النكهات',
    descriptionAr: 'نكهتان لذيذتان: سنو فليك جوز الهند الأزرق وسنو فليك الحليب الأحمر مع طعم متوازن يذوب في الفم.',
    descriptionEn: 'Two signature flavors: Snowflake Coconut (Blue) and Snowflake Milk (Red) with melt-in-mouth balance.',
    featuresAr: ['نكهتان رئيسيتان: جوز هند وحليب', 'طبقة تغطية كريمة ناعمة', 'قوام كيك طازج وهش'],
    featuresEn: ['Two signature flavors', 'Soft cream enrobing', 'Melt-in-mouth balance'],
  },

  // 13. Spekuloos Lotus Crunch
  {
    id: 'monalisa-spekuloos',
    nameAr: 'كيك مونا ليزا سبيكولوس لوتس كرنش',
    nameEn: 'MONALISA Spekuloos Lotus Crunch Cake',
    brand: 'MONALISA',
    category: 'cakes',
    image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_33_20_PM-7_1bcfdb66.png',
    weight: 'قطعة كيك مغلفة',
    cartonSpec: 'كرتونة توزيع متخصصة',
    descriptionAr: 'كيكة كاكاو رطبة محشوة بقلب ناعم من كريمة بسكويت اللوتس السبيكولوس الأصلي ومغطاة بكرانش اللوتس.',
    descriptionEn: 'Moist cocoa cake stuffed with authentic Lotus Speculoos biscuit cream and crunchy biscuit coating.',
    featuresAr: ['حشوة بسكويت لوتس أصلية', 'قرمشة خارجية ونعومة داخلية', 'نكهة القرفة والكراميل'],
    featuresEn: ['Authentic Lotus biscuit cream', 'Crunchy shell & moist cake', 'Caramelized spice notes'],
    isFlagship: true,
  },

  // 14. Oreo Dream Cookies & Cream
  {
    id: 'monalisa-oreo-dream',
    nameAr: 'كيك مونا ليزا أوريو دريم كوكيز آند كريم',
    nameEn: 'MONALISA Oreo Dream (Cookies & Cream Cake)',
    brand: 'MONALISA',
    category: 'cakes',
    image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_33_24_PM-9_f612ea4c.png',
    weight: 'حبة كيك فردية مغلفة',
    cartonSpec: 'كرتونة عرض تجزئة',
    descriptionAr: 'مزيج ساحر من كيك الشوكولاتة الداكنة المغطى بقطع بسكويت الأوريو ومحشو بكريمة الفانيليا البيضاء.',
    descriptionEn: 'Decadent dark cocoa cake layered with crushed Oreo biscuits and smooth vanilla cream.',
    featuresAr: ['قطع بسكويت أوريو حقيقية', 'كريمة الفانيليا الغنية', 'تجربة كوكيز آند كريم استثنائية'],
    featuresEn: ['Real crushed cookies', 'Rich vanilla cream', 'Indulgent cookies & cream fusion'],
  },

  // 15. Biscotti Spread
  {
    id: 'monalisa-biscotti-spread',
    nameAr: 'كريمة بسكوت مونا ليزا بيسكوتي سبريد',
    nameEn: 'MONALISA Biscotti Spread (Caramelized Biscuit Butter)',
    brand: 'MONALISA',
    category: 'confectionery',
    image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_51_20_PM-1_5ebf1232.png',
    weight: 'برطمان زجاجي فاخر',
    cartonSpec: 'كرتون شحن محمي ضد الصدمات',
    descriptionAr: 'زبدة بسكويت بيسكوتي الفاخرة، قوام مخملي سهل الدهن ومثالي للحلويات والمخبوزات والإفطار.',
    descriptionEn: 'Gourmet spreadable biscuit butter with deep caramelized aroma for bakeries, desserts, and breakfast.',
    featuresAr: ['قوام مخملي ناعم للغاية', 'مذاق الكراميل والقرفة الأوروبية', 'مثالي للدهن والحلويات والمقاهي'],
    featuresEn: ['Velvety smooth consistency', 'Rich caramelized flavor', 'Ideal for baking and spreads'],
    isFlagship: true,
  },

  // 16. Biscotti Spread Gourmet Table
  {
    id: 'monalisa-biscotti-spread-table',
    nameAr: 'كريمة بسكوت مونا ليزا متعددة الاستخدامات',
    nameEn: 'MONALISA Biscotti Spread Gourmet Serving',
    brand: 'MONALISA',
    category: 'confectionery',
    image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_28_57_PM-3_3ace99f6.png',
    weight: 'برطمان مع تقديم حلويات',
    cartonSpec: 'مخصص للمقاهي والمخابز والفنادق',
    descriptionAr: 'كريمة بسكوت مونا ليزا المعتمدة من كبار الطهاة والمخابز، مثالية لتزيين الكيك والتشيز كيك وتوست الإفطار.',
    descriptionEn: 'Multi-use Mona Lisa biscuit spread for hospitality, specialty cafes, cake decorating, and bakeries.',
    featuresAr: ['متعددة الاستخدامات للحلويات', 'ثبات ممتاز عند درجات الحرارة المختلفة', 'طعم غني يرفع قيمة المنتج النهائي'],
    featuresEn: ['Multi-purpose dessert ingredient', 'Temperature stable', 'Elevates finished dessert value'],
  },

  // 17. Sweetened Condensed Milk 397g
  {
    id: 'monalisa-condensed-milk',
    nameAr: 'مونا ليزا حليب مكثف محلى فاخر 397g',
    nameEn: 'MONALISA Sweetened Condensed Milk (Gold Edition 397g)',
    brand: 'MONALISA',
    category: 'other',
    image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_29_09_PM-9_7877b288.png',
    weight: '397 جرام (397g e)',
    cartonSpec: 'كرتون شحن جملة 48/24 عبوة صفيح',
    descriptionAr: 'حليب مكثف محلى عالي اللزوجة والجودة، مصنوع من حليب أبقار طازج ونقي وبدون مواد حافظة، جودة تستحقها.',
    descriptionEn: 'Premium sweetened condensed milk with rich velvety viscosity made from fresh milk with no preservatives.',
    featuresAr: ['مصنوع من حليب طازج 100%', 'بدون مواد حافظة', 'مثالي للحلويات والمشروبات 397g'],
    featuresEn: ['Made from 100% fresh milk', 'No artificial preservatives', 'Ideal for desserts and coffee drinks'],
    isFlagship: true,
  },

  // 18. Chocolate Powder Yellow Tub 420g
  {
    id: 'monalisa-chocolate-powder-yellow',
    nameAr: 'مسحوق الشوكولاتة مونا ليزا مع الحليب 420g',
    nameEn: 'MONALISA Chocolate Powder (Add Milk Yellow Tub 420g)',
    brand: 'MONALISA',
    category: 'beverages',
    image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_51_36_PM-7_60ef5a4c.png',
    weight: 'الوزن الصافي 420 جرام (420g e)',
    cartonSpec: 'علبة أسطوانية محكمة الإغلاق',
    descriptionAr: 'مسحوق شوكولاتة مونا ليزا سريع الذوبان مع الحليب، طعم محبوب للأطفال وغني بالطاقة لبداية يوم نشيطة.',
    descriptionEn: 'Instant cocoa drink powder with real chocolate taste, fast dissolving in warm or cold milk.',
    featuresAr: ['يذوب فوراً في الحليب', 'حجم اقتصادي 420 جرام', 'علبة بلاستيكية محكمة الإغلاق'],
    featuresEn: ['Instant dissolve in milk', 'Economic 420g tub', 'Moisture-tight storage tub'],
    isFlagship: true,
  },

  // 19. Chocolate Powder Red Edition 420g
  {
    id: 'monalisa-chocolate-powder-red',
    nameAr: 'مسحوق الشوكولاتة والكاكاو مونا ليزا (فيتامين د)',
    nameEn: 'MONALISA Chocolate Powder (Real Cocoa & Vitamin D 420g)',
    brand: 'MONALISA',
    category: 'beverages',
    image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_29_05_PM-7_038f11ea.png',
    weight: 'الوزن الصافي 420 جرام (420g e)',
    cartonSpec: 'كاكاو حقيقي Real Cocoa · فيتامين D',
    descriptionAr: 'مسحوق الكاكاو الطبيعي المدعم بفيتامين د وخالٍ من المواد الحافظة والألوان الصناعية لبناء صحي للأطفال.',
    descriptionEn: 'Fortified chocolate powder with real natural cocoa and Vitamin D, zero artificial additives.',
    featuresAr: ['كاكاو طبيعي حقيقي Real Cocoa', 'معزز بفيتامين د النشط', 'خالٍ من الإضافات والألوان الصناعية'],
    featuresEn: ['Real natural cocoa', 'Fortified with Vitamin D', 'No artificial colors or additives'],
  },

  // ==========================================
  // --- BAKEMATE BRAND LINEUP (بيكميت) ---
  // ==========================================

  // 20. Digestive Cookies
  {
    id: 'bakemate-digestive-cookies',
    nameAr: 'بسكويت دايجستيف بيكميت قرمشة ذهبية لا تقاوم',
    nameEn: 'BAKEMATE Digestive Cookies (Whole Wheat)',
    brand: 'BAKEMATE',
    category: 'biscuits',
    image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_28_59_PM-4_3d6a1144.png',
    weight: 'عبوة رول كرتونية فاخرة',
    cartonSpec: 'كرتونة توزيع جملة Leader in Quality',
    descriptionAr: 'بسكويت دايجستيف التقليدي المصنوع من حبوب القمح الكاملة، قرمشة ذهبية لا تقاوم وخيار مثالي مع الشاي.',
    descriptionEn: 'Traditional whole-wheat digestive biscuits with unmistakable golden crunch and wholesome fiber.',
    featuresAr: ['مصنوع من حبوب القمح الكاملة', 'قرمشة ذهبية بطعم لا يقاوم', 'مثالي مع الشاي والقهوة'],
    featuresEn: ['Made with whole wheat', 'Golden crunchy texture', 'Perfect tea-time companion'],
  },

  // 21. Crispy Crumbs Choco Chip Cookies
  {
    id: 'bakemate-crispy-crumbs',
    nameAr: 'كريسبي كوكيز بسكويت رقائق الشوكولاتة الفاخر بيكميت',
    nameEn: 'BAKEMATE Crispy Crumbs Choco Chip Cookies',
    brand: 'BAKEMATE',
    category: 'biscuits',
    image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_29_07_PM-8_dfc2751f.png',
    weight: 'علبة كوكيز فاخرة صفراء',
    cartonSpec: 'كرتونة متجر تجزئة',
    descriptionAr: 'كوكيز أمريكي كلاسيكي محشو بقطع رقائق الشوكولاتة الفاخرة وقرمشة ذهبية تدوم طويلاً.',
    descriptionEn: 'Premium American-style chocolate chip cookies with rich melt-in-the-mouth cocoa morsels.',
    featuresAr: ['رقائق شوكولاتة فاخرة كثيفة', 'قرمشة ذهبية تذوب في الفم', 'صندوق كرتوني جذاب'],
    featuresEn: ['Generous chocolate chips', 'Golden melt-in-mouth crispness', 'Luxury yellow carton box'],
  },

  // 22. Kreme-C 4 Flavors
  {
    id: 'bakemate-kreme-c-flavors',
    nameAr: 'بسكويت كريم-أو أربع نكهات بيكميت (متعة لا تنتهي)',
    nameEn: 'BAKEMATE Kreme-C (4 Flavours: Vanilla, Strawberry, Orange, Choco)',
    brand: 'BAKEMATE',
    category: 'biscuits',
    image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_33_27_PM-10_fa47e44a.png',
    weight: 'عبوات رول سريعة ملونة',
    cartonSpec: 'تشكيلة 4 نكهات: فانيليا، فراولة، برتقال، شوكولاتة',
    descriptionAr: 'بسكويت شطيرة محشو بكريمة لذيذة متوفر بأربعة نكهات: فانيليا غنية، فراولة، برتقال، وشوكولاتة.',
    descriptionEn: 'Assorted sandwich biscuits filled with rich cream available in Vanilla, Strawberry, Orange, and Chocolate.',
    featuresAr: ['4 نكهات محبوبة لجميع الأذواق', 'حشوة كريمة كثيفة ومبهجة', 'سعر اقتصادي مناسب للتوزيع الواسع'],
    featuresEn: ['4 customer-favorite flavors', 'Rich cream filling', 'Fast-moving commercial retail product'],
  },

  // 23. Kreme-C Sandwich Tower
  {
    id: 'bakemate-kreme-c-tower',
    nameAr: 'تشكيلة بسكويت ساندويتش كريم-أو بيكميت المتكاملة',
    nameEn: 'BAKEMATE Kreme-C Flavoured Sandwich Tower',
    brand: 'BAKEMATE',
    category: 'biscuits',
    image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_28_55_PM-2_af23689d.png',
    weight: 'برج النكهات الأربعة',
    cartonSpec: 'كرتون شحن جملة مخصص',
    descriptionAr: 'بسكويت كريم-أو بشخصيات مبتسمة مرحة، أربع نكهات متعة لا تنتهي لتلبية طلبات التجزئة والجملة.',
    descriptionEn: 'Kreme-C iconic cream sandwich biscuits packaged in vibrant retail wraps for grocery shelves.',
    featuresAr: ['تصميم مرح بشخصيات مبتسمة', 'تنوع واسع يرضي أذواق العائلات', 'تغليف جذاب لرفوف المتاجر'],
    featuresEn: ['Cheerful smiley embossed faces', 'Family variety pack', 'High-impact shelf presentation'],
  },

  // 24. Duo-Fun Double Cream Sandwich
  {
    id: 'bakemate-duo-fun',
    nameAr: 'بسكويت دو-فن نكهتين في قضمة واحدة بيكميت',
    nameEn: 'BAKEMATE DUO-FUN (Chocolate & Vanilla Cream Sandwich)',
    brand: 'BAKEMATE',
    category: 'biscuits',
    image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_29_03_PM-6_aba1d6cb.png',
    weight: 'عبوة كرتونية مستطيلة',
    cartonSpec: 'كرتون شحن جملة مخصص',
    descriptionAr: 'تجربة فريدة تجمع بين حشوة شوكولاتة وحشوة فانيليا في بسكويت كاكاو محمص واحد: نكهتان في قضمة واحدة.',
    descriptionEn: 'Dual-cream sandwich biscuit delivering both rich cocoa and sweet vanilla cream in every single bite.',
    featuresAr: ['نكهتان في قضمة واحدة', 'بسكويت كاكاو محفور مقرمش', 'علبة كرتونية موفرة'],
    featuresEn: ['Two flavors in one bite', 'Embossed cocoa biscuits', 'Value pack format'],
  },

  // 25. Bon Ton Rolls
  {
    id: 'bakemate-bon-ton-rolls',
    nameAr: 'بون تون رولز ويفر الشوكولاتة الكريمية بيكميت',
    nameEn: 'BAKEMATE BON TON Rolls (Chocolate Cream Rolls)',
    brand: 'BAKEMATE',
    category: 'wafers',
    image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_33_03_PM-1_e71c500b.png',
    weight: 'أصابع ويفر رول مقرمشة',
    cartonSpec: 'صندوق عرض تجاري أصفر وأحمر',
    descriptionAr: 'طعم الشوكولاتة الكريمية في كل لفة، أصابع ويفر رول هشة محشوة بالكاكاو ومغلفة بشوكولاتة الحليب.',
    descriptionEn: 'Crispy wafer rolls filled with rich creamy chocolate and fully coated with decadent chocolate.',
    featuresAr: ['طعم الشوكولاتة الكريمية في كل لفة', 'تغليف ذهبي جذاب للمحلات', 'ويفر رول فائق الهشاشة'],
    featuresEn: ['Rich chocolate cream in every roll', 'Vibrant golden packaging', 'Extra crispy rolled wafer'],
  },

  // ==========================================
  // --- NUTRI-FOOD BRAND LINEUP (غذائي) ---
  // ==========================================

  // 26. Waffle Mozaik
  {
    id: 'nutri-food-waffle-mozaik',
    nameAr: 'وافل موزاييك مذاق غني بالشوكولاتة غذائي',
    nameEn: 'Nutri-Food Mozaik Waffle Cake',
    brand: 'Nutri-Food',
    category: 'cakes',
    image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_33_16_PM-6_e83a543b.png',
    weight: 'قطعة وافل مغلفة',
    cartonSpec: 'كرتون تجزئة وجملة',
    descriptionAr: 'وافل رخامي بنقوش الموزاييك الشهيرة، يمزج بين عجينتي الفانيليا والكاكاو مع حشوة شوكولاتة مركزة.',
    descriptionEn: 'Marble mosaic patterned waffle blending golden vanilla batter and rich chocolate swirl filling.',
    featuresAr: ['نقشة الموزاييك الرخامية الفريدة', 'مذاق غني بالشوكولاتة السائلة', 'تغليف محكم يحفظ الطراوة'],
    featuresEn: ['Unique marble mosaic pattern', 'Liquid cocoa center', 'Heat-sealed protective wrap'],
  },

  // 27. Waffle Chocolate
  {
    id: 'nutri-food-waffle-chocolate',
    nameAr: 'وافل شوكولاتة طعم غني بالشوكولاتة غذائي',
    nameEn: 'Nutri-Food Chocolate Waffle Cake',
    brand: 'Nutri-Food',
    category: 'cakes',
    image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_33_14_PM-5_dd5c293c.png',
    weight: 'قطعة وافل مغلفة',
    cartonSpec: 'علبة شحن تجارية',
    descriptionAr: 'وافل محشو بكريمة الشوكولاتة الكثيفة ومغطى بطبقة شوكولاتة ناعمة مع خطوط التزيين الشهية.',
    descriptionEn: 'Soft baked waffle glazed with creamy chocolate drizzle and packed with rich cocoa filling.',
    featuresAr: ['طعم غني بالشوكولاتة المزدوجة', 'قوام إسفنجي طري لا يجف', 'طاقة سريعة وسناك مفضل'],
    featuresEn: ['Double chocolate experience', 'Moist, tender crumb', 'Energizing quick snack'],
  },

  // 28. Waffle Tiramisu
  {
    id: 'nutri-food-waffle-tiramisu',
    nameAr: 'وافل تيراميسو بالكاكاو والقهوة غذائي',
    nameEn: 'Nutri-Food Waffle Tiramisu (Cocoa & Coffee)',
    brand: 'Nutri-Food',
    category: 'cakes',
    image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_33_07_PM-2_6735f79b.png',
    weight: 'قطعة وافل مغلفة',
    cartonSpec: 'علبة كرتون سوبرماركت',
    descriptionAr: 'كيك وافل إيطالي طري وناعم محشو بكريمة التيراميسو الفاخرة ونفحات القهوة الإيطالية والكاكاو.',
    descriptionEn: 'Soft bakery waffle filled with exquisite Italian tiramisu coffee and cocoa cream.',
    featuresAr: ['نكهة التيراميسو والكاكاو والقهوة', 'عجينة وافل طازجة وطرية', 'طاقة سريعة ومذاق مميز'],
    featuresEn: ['Authentic Italian tiramisu & coffee', 'Fresh soft waffle crumb', 'Great grab-and-go snack'],
  },

  // 29. Mellow Chocolate Coated Cake
  {
    id: 'nutri-food-mellow-chocolate',
    nameAr: 'كيك ميلو مغطى بالشوكولاتة غذائي',
    nameEn: 'Nutri-Food Mellow Chocolate Coated Cake',
    brand: 'Nutri-Food',
    category: 'cakes',
    image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_33_22_PM-8_aa340ec5.png',
    weight: 'حبة كيك مغلفة',
    cartonSpec: 'كرتون عرض نقاط البيع',
    descriptionAr: 'طبقات كيك إسفنجي هش محشوة بالمارشميلو والكريمة البيضاء ومغطاة بالشوكولاتة الفاخرة.',
    descriptionEn: 'Layered sponge cake topped with soft marshmallow cream and fully coated in chocolate.',
    featuresAr: ['كيك مغطى بالشوكولاتة', 'حشوة مارشميلو وكريمة خفيفة', 'حجم مثالي لوجبة خفيفة'],
    featuresEn: ['Chocolate coated sponge', 'Light marshmallow cream core', 'Ideal single-serve snack'],
  },

  // 30. Mellow Chocolate & Coconut
  {
    id: 'nutri-food-mellow-coconut',
    nameAr: 'كيك ميلو مغطى بالشوكولاتة وجوز الهند غذائي',
    nameEn: 'Nutri-Food Mellow Chocolate & Coconut Cake',
    brand: 'Nutri-Food',
    category: 'cakes',
    image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_33_11_PM-4_0e34df1f.png',
    weight: 'حبة كيك مغلفة',
    cartonSpec: 'كرتون عرض للمحلات',
    descriptionAr: 'كيك إسفنجي محشو بالكريمة ومغطى بالشوكولاتة ورشات سخية من جوز الهند الطبيعي المبشور.',
    descriptionEn: 'Chocolate coated cake with marshmallow filling generously sprinkled with fresh shredded coconut.',
    featuresAr: ['مغطى بالشوكولاتة وجوز الهند', 'توليفة كاكاو ومارشميلو متوازنة', 'طعم غني لا يُقاوم'],
    featuresEn: ['Chocolate & coconut coating', 'Balanced cocoa & marshmallow', 'Irresistible rich flavor'],
  },

  // 31. Snow Flake Cacao & Coconut Cake
  {
    id: 'nutri-food-snowflake-cacao-coconut',
    nameAr: 'كيك سنو فليك كاكاو بجوز الهند غذائي',
    nameEn: 'Nutri-Food SNOW FLAKE (Cacao Cake with Coconut)',
    brand: 'Nutri-Food',
    category: 'cakes',
    image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_33_09_PM-3_9bdc5719.png',
    weight: 'حبة كيك قبة مغلفة',
    cartonSpec: 'كرتون شحن نقاط البيع',
    descriptionAr: 'كيك قبة بالكاكاو محشو بكريمة الحليب الصافية ومكسو بطبقة ناصعة من مبشور جوز الهند الطبيعي.',
    descriptionEn: 'Dome-shaped cocoa cake filled with rich milk cream and generously enrobed in pure shredded coconut.',
    featuresAr: ['كيك كاكاو بجوز الهند الطبيعي', 'حشوة كريمة حليبية غنية', 'تغليف أزرق سماوي جذاب'],
    featuresEn: ['Cacao cake with shredded coconut', 'Creamy milk core', 'Vibrant sky-blue pouch'],
  },

  // 32. Snow Flake White Coated Cake
  {
    id: 'nutri-food-snowflake-white',
    nameAr: 'كيك سنوفليك مغطى بالكريمة البيضاء غذائي',
    nameEn: 'Nutri-Food SNOW FLAKE (White Coated Cake with Milk Cream)',
    brand: 'Nutri-Food',
    category: 'cakes',
    image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_29_11_PM-10_c2273c67.png',
    weight: 'حبة كيك قبة مغلفة',
    cartonSpec: 'كرتون شحن جملة',
    descriptionAr: 'كيك إسفنجي ذهبي محشو بكريمة الحليب ومغلف بطبقة كريمة بيضاء ناصعة مع خطوط الكاكاو التزيينية.',
    descriptionEn: 'Golden sponge cake filled with milk cream and glazed in a smooth white coating with cocoa drizzle.',
    featuresAr: ['كيك مغطى بالكريمة البيضاء', 'حشوة كريمة حليب ناعمة', 'مظهر أنيق ومذاق فاخر'],
    featuresEn: ['White coated dome cake', 'Soft milk cream center', 'Artisan chocolate drizzle'],
  },

  // ==========================================
  // --- LOOKME BRAND (لوك مي) ---
  // ==========================================

  // 33. LookMe Choco Croissant 24 PCE
  {
    id: 'lookme-choco-croissant',
    nameAr: 'بريوش لوك مي شوكو كرواسون LookMe (24 قطعة)',
    nameEn: 'LookMe Choco Croissant Brioche (24 PCE)',
    brand: 'LookMe',
    category: 'cakes',
    image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_59_24_PM-8_f18a1faa.png',
    weight: 'قطعة بريوش طرية',
    cartonSpec: 'عبوة كرتونية عملية 24 قطعة (24 PCE)',
    descriptionAr: 'متعة الشوكولاتة في كل قطعة، بريوش مورق وهش محشو بكريمة الشوكولاتة الكثيفة: دلل نفسك مع LookMe.',
    descriptionEn: 'Tender French-style flaky brioche pastry packed with rich, flowing chocolate cream in 24-piece cartons.',
    featuresAr: ['متعة الشوكولاتة في كل قطعة', 'عجينة بريوش طرية ومورقة', 'عبوة تجارية 24 قطعة مميزة للمقاهي والمدارس'],
    featuresEn: ['Indulgent chocolate in every bite', 'Flaky golden brioche pastry', '24-piece retail carton box'],
    isFlagship: true,
  },

  // ==========================================
  // --- BOLANTY BRAND (بولانتي) ---
  // ==========================================

  // 34. Bolanty Coconut Chocolate Bar 2x24 Pcs
  {
    id: 'bolanty-chocolate-coconut-bar',
    nameAr: 'بولانتي جوز الهند المغطى بالشوكولاتة (2 × 24 قطعة)',
    nameEn: 'BOLANTY Coconuts Covered With Chocolate (2 X 24 Pcs)',
    brand: 'BOLANTY',
    category: 'confectionery',
    image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_28_50_PM-1_f04aa489.png',
    weight: 'بار جوز هند طبيعي',
    cartonSpec: 'صندوق عرض 2 × 24 قطعة (2 X 24 Pcs)',
    descriptionAr: 'جوز هند استوائي طبيعي طازج ومبشور بدقة، مغطى بطبقة سميكة من شوكولاتة الحليب الفاخرة بطعم استوائي ساحر.',
    descriptionEn: 'Moist shredded natural tropical coconut bars thickly enveloped in rich milk chocolate, double packed 2x24 pcs.',
    featuresAr: ['جوز هند طبيعي استوائي مبشور', 'تغطية شوكولاتة حليب ناعمة', 'عبوة مزدوجة 2 × 24 قطعة'],
    featuresEn: ['100% natural shredded coconut', 'Velvety milk chocolate coating', 'Double pack display 2 x 24 pcs'],
    isFlagship: true,
  },

  // ==========================================
  // --- LIBRA BRAND (ليبرا كوفي بركة) ---
  // ==========================================

  // 35. Libra Coffee Braka Biscuits
  {
    id: 'libra-coffee-braka',
    nameAr: 'بسكويت القهوة كوفي بركة ليبرا الفاخر (حلال)',
    nameEn: 'LIBRA Coffee Braka Biscuits (Crispy Roasted Coffee)',
    brand: 'LIBRA',
    category: 'biscuits',
    image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_51_34_PM-6_23596e29.png',
    weight: 'عبوة بسكويت مقرمشة',
    cartonSpec: 'كرتون شحن جملة موثق حلال',
    descriptionAr: 'بسكويت مقرمش خفيف بنكهة حبوب القهوة المحمصة، رفيق القهوة الصباحية المفضل لأصحاب الذوق الرفيع وحاصل على شهادة حلال.',
    descriptionEn: 'Aromatic crispy biscuits infused with roasted coffee aroma, officially Halal-certified and perfect with hot coffee.',
    featuresAr: ['نكهة قهوة محمصة أصلية', 'قوام خفيف ومقرمش جداً', 'حاصل على شهادة الحلال المعتمدة'],
    featuresEn: ['Authentic roasted coffee aroma', 'Extra crispy and light', 'Certified Halal product'],
    isFlagship: true,
  },
];

export const CATEGORIES = [
  { id: 'all', nameAr: 'جميع المنتجات', nameEn: 'All Products' },
  { id: 'biscuits', nameAr: 'البسكويت والكوكيز', nameEn: 'Biscuits & Cookies' },
  { id: 'wafers', nameAr: 'الويفر والرولز', nameEn: 'Wafers & Rolls' },
  { id: 'cakes', nameAr: 'الكيك والسويس رول والوافل', nameEn: 'Cakes, Rolls & Waffles' },
  { id: 'confectionery', nameAr: 'الشوكولاتة وكريمة الدهن', nameEn: 'Chocolates & Spreads' },
  { id: 'beverages', nameAr: 'مسحوق الكاكاو والمشروبات', nameEn: 'Cocoa Powder & Drinks' },
  { id: 'other', nameAr: 'حليب مكثف ومواد غذائية', nameEn: 'Condensed Milk & Pantry' },
] as const;

export const BRANDS = [
  { id: 'all', name: 'كل العلامات التجارية', nameEn: 'All Brands' },
  { id: 'MONALISA', name: 'موناليزا (MONALISA)', nameEn: 'MONALISA (Flagship)' },
  { id: 'BAKEMATE', name: 'بيكميت (BAKEMATE)', nameEn: 'BAKEMATE' },
  { id: 'Nutri-Food', name: 'غذائي (Nutri-Food)', nameEn: 'Nutri-Food' },
  { id: 'LookMe', name: 'لوك مي (LookMe)', nameEn: 'LookMe' },
  { id: 'BOLANTY', name: 'بولانتي (BOLANTY)', nameEn: 'BOLANTY' },
  { id: 'LIBRA', name: 'ليبرا كوفي بركة (LIBRA)', nameEn: 'LIBRA' },
] as const;
