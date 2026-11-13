import { Product, PRODUCTS } from './products';

export interface AppSettings {
  whatsappNumber: string; // e.g. "0925062360"
  phoneDisplay: string;    // e.g. "092 506 2360"
  phoneSecondary: string;  // e.g. "091 325 3515"
  email: string;           // e.g. "etharlibya2015@gmail.com"
  tripoliAddressAr: string;
  tripoliAddressEn: string;
  commercialLicenseNo: string;
  taxNumber: string;
  chamberRegNo: string;
  facebookUrl: string;
  tiktokUrl: string;
  instagramUrl: string;
}

export const DEFAULT_SETTINGS: AppSettings = {
  whatsappNumber: '0925062360',
  phoneDisplay: '092 506 2360',
  phoneSecondary: '091 325 3515',
  email: 'etharlibya2015@gmail.com',
  tripoliAddressAr: 'ليبيا، طرابلس - طريق السواني / الكريمية - مجمع المستودعات المركزية (شارع الثانوية والعسل)',
  tripoliAddressEn: 'Tripoli, Libya - Al-Karimiyah Central Logistics Hub (Al-Thanawiya & Honey St)',
  commercialLicenseNo: '2006-218-0489',
  taxNumber: '10920067845',
  chamberRegNo: '45892 / طرابلس',
  facebookUrl: 'https://facebook.com',
  tiktokUrl: 'https://tiktok.com/@etharlibya',
  instagramUrl: 'https://instagram.com/etharlibya',
};

export interface GalleryItem {
  id: string;
  category: 'trucks' | 'warehouses' | 'distribution';
  src: string;
  fallbackSrc?: string;
  titleAr: string;
  titleEn: string;
  tagAr: string;
  tagEn: string;
  descAr: string;
  descEn: string;
  locationAr: string;
  locationEn: string;
  badgeAr: string;
  badgeEn: string;
}

export function normalizeAssetPath(raw?: string): string {
  if (!raw) return '';
  const trimmed = raw.trim();
  if (
    trimmed.startsWith('data:') ||
    trimmed.startsWith('blob:') ||
    trimmed.startsWith('http://') ||
    trimmed.startsWith('https://')
  ) {
    return trimmed;
  }
  if (trimmed.startsWith('./assets/')) return trimmed;
  if (trimmed.startsWith('/assets/')) return `.${trimmed}`;
  if (trimmed.startsWith('assets/')) return `./${trimmed}`;
  return trimmed;
}

function sanitizeGalleryItems(items: GalleryItem[]): GalleryItem[] {
  const cleaned = items
    .filter((item) => Boolean(item && item.src))
    .map((item) => ({
      ...item,
      src: normalizeAssetPath(item.src),
      fallbackSrc: item.fallbackSrc ? normalizeAssetPath(item.fallbackSrc) : undefined,
    }));
  return cleaned.length > 0 ? cleaned : DEFAULT_GALLERY_ITEMS;
}

export const DEFAULT_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'karimiyah_showroom_shelf',
    category: 'warehouses',
    src: './assets/facilities/karimiyah_showroom_shelf.webp',
    fallbackSrc: './assets/facilities/karimiyah_showroom_shelf.jpg',
    titleAr: 'صالة ومعرض المنتجات ونقطة التوزيع المركزية بالكريمية',
    titleEn: 'Al-Karimiyah Central Showroom & Distribution Hub',
    tagAr: 'المستودع الرئيسي وصالة العرض',
    tagEn: 'HQ Showroom & Hub',
    descAr: 'معرض ومركز التوزيع الرئيسي الذي يضم كافة أصناف موناليزا، بيك ميت، لوك مي، وباقي الوكالات لتسهيل المعاينة وتجهيز طلبيات الجملة للتجار.',
    descEn: 'Master showroom and wholesale fulfillment center exhibiting full brand portfolios of MONALISA, BAKEMATE, LookMe, and partner lines.',
    locationAr: 'طرابلس - الكريمية · شارع العسل والثانوية',
    locationEn: 'Tripoli - Al-Karimiyah, Honey St & High School St',
    badgeAr: 'معاينة واستلام جملة فوري',
    badgeEn: 'Immediate Wholesale Pickup',
  },
  {
    id: 'truck_loading_dock',
    category: 'trucks',
    src: './assets/facilities/truck_loading_dock.webp',
    fallbackSrc: './assets/facilities/truck_loading_dock.jpg',
    titleAr: 'أرصفة الاستلام والتفريغ المباشر للحاويات وشحنات الكيك والويفر',
    titleEn: 'Inbound Freight Logistics & Container Receiving Dock',
    tagAr: 'رصيف الشحن والتفريغ المباشر',
    tagEn: 'Direct Inbound Dock',
    descAr: 'وصول الشاحنات الثقيلة والمقطورات المحملة بكراتين موناليزا وبضائع الاستيراد إلى رصيف التحميل المجهز بالمستودع المركزي بالكريمية لتفريغها وفرزها.',
    descEn: 'Heavy logistics trailers docking at Tripoli Karimiyah master warehouse unloading pallets of MONALISA products for immediate sorting.',
    locationAr: 'طرابلس - الكريمية · مستودع الاستلام المركزي',
    locationEn: 'Tripoli - Al-Karimiyah Central Logistics Hub',
    badgeAr: 'استقبال وتفريغ يومي منتظم',
    badgeEn: 'Daily Scheduled Inbound',
  },
  {
    id: 'refrigerated_fleet_worker',
    category: 'trucks',
    src: './assets/facilities/refrigerated_fleet_worker.webp',
    fallbackSrc: './assets/facilities/refrigerated_fleet_worker.jpg',
    titleAr: 'مستودعات التبريد وشحن البضائع الحساسة بالأسطول المبرد',
    titleEn: 'Insulated Refrigerated Transport Fleet (Tripoli Plate 34-2 N)',
    tagAr: 'نقل مبرد ومكيف 100%',
    tagEn: 'Temperature-Controlled Fleet',
    descAr: 'تحميل كراتين ويفر وشوكولاتة موناليزا داخل مقصورات التبريد المعزولة لضمان ثبات القوام وجودة المنتج الفائقة في حرارة الصيف ومختلف فصول السنة.',
    descEn: 'Logistics crew loading MONALISA chocolate and wafer products into modern insulated refrigerated cargo bays preserving optimum quality.',
    locationAr: 'مستودعات الكريمية · رصيف شاحنات التبريد',
    locationEn: 'Karimiyah Warehousing · Refrigerated Fleet Bay',
    badgeAr: 'لوحة نقل معتمدة: ن 34 - 2',
    badgeEn: 'Official Plate: 34-2 N',
  },
  {
    id: 'bonton_fleet_dispatch',
    category: 'warehouses',
    src: './assets/facilities/bonton_fleet_dispatch.webp',
    fallbackSrc: './assets/facilities/bonton_fleet_dispatch.jpg',
    titleAr: 'مناولة بضائع الجملة وتجهيز شاحنات التوزيع للمدن والمحافظات',
    titleEn: 'Bakemate & Confectionery Freight Dispatch (Libya 25-53205)',
    tagAr: 'مناولة لوجستية متخصصة',
    tagEn: 'Professional Freight Handling',
    descAr: 'فريق العمل اللوجستي داخل الشاحنة لتفريغ وترتيب كراتين رولات بون تون (Bon Ton)، وبسكويت شوكو بي آر (Choco BR) لتسليمها لمتاجر الجملة والموزعين.',
    descEn: 'Logistics handling crew inside commercial transport vehicles preparing cartons of Bon Ton rolls and Choco BR biscuits for scheduled retail deliveries.',
    locationAr: 'طرابلس - الكريمية · رصيف شحن الجملة',
    locationEn: 'Tripoli Karimiyah Wholesale Dispatch Bay',
    badgeAr: 'شاحنة توزيع: ليبيا 25-53205',
    badgeEn: 'Vehicle Plate: Libya 25-53205',
  },
  {
    id: 'pickup_distribution_road',
    category: 'distribution',
    src: './assets/facilities/pickup_distribution_road.webp',
    fallbackSrc: './assets/facilities/pickup_distribution_road.jpg',
    titleAr: 'شاحنات التوزيع التجاري السريع تجوب المدن والطرق الليبية',
    titleEn: 'Commercial Highway Express Delivery (Mona Lisa Wafers)',
    tagAr: 'تغذية الأسواق والمحال يومياً',
    tagEn: 'Rapid Retail Replenishment',
    descAr: 'شاحنات النقل الخفيف تنطلق يومياً محملة بكراتين ويفر موناليزا اكسترا وباقي الأصناف لتوصيلها فورياً لمحلات التجزئة والسوبرماركت عبر كافة المدن.',
    descEn: 'Commercial delivery pickup transporting stacked secured MONALISA cartons across Libyan arterial highways directly to retailers.',
    locationAr: 'الطريق الساحلي وشرايين النقل بين المدن',
    locationEn: 'Tripoli Arterial Expressways & Regional Routes',
    badgeAr: 'توصيل وتغذية مستمرة للأسواق',
    badgeEn: 'Continuous Market Replenishment',
  },
];

export interface BrandItem {
  id: string;
  name: string;
  brandKey: string;
  logo: string;
  fallbackLogo?: string;
  badgeAr: string;
  badgeEn: string;
  badgeColor?: string;
  categoryAr: string;
  categoryEn: string;
  descAr: string;
  descEn: string;
  isDarkCard?: boolean;
}

export const DEFAULT_BRAND_ITEMS: BrandItem[] = [
  {
    id: 'brand-monalisa',
    name: 'MONALISA · موناليزا',
    brandKey: 'MONALISA',
    logo: './assets/logos/monalisa_italy_flag.webp',
    badgeAr: 'العلامة الرائدة الأكثر طلباً',
    badgeEn: 'Flagship Brand',
    badgeColor: 'emerald',
    categoryAr: 'ويفر إيطالي، سويس رول، شوكولاتة، وحليب مكثف',
    categoryEn: 'Italian Wafer, Swiss Roll & Confectionery',
    descAr: 'تشكيلة الويفر الإيطالي، سويس رول الشوكولاتة، الكيك، والحليب المكثف المحلى الفاخر المستورد حصرياً.',
    descEn: 'Italian-style crispy wafers, Swiss rolls, chocolate confectionery, and sweetened condensed milk.',
    isDarkCard: false,
  },
  {
    id: 'brand-bakemate',
    name: 'BAKEMATE · بيك ميت',
    brandKey: 'BAKEMATE',
    logo: './assets/logos/bakemate_seal.svg',
    badgeAr: 'مخبوزات وبسكويت عالمي',
    badgeEn: 'Global Bakery Lines',
    badgeColor: 'amber',
    categoryAr: 'رولات الويفر بون تون، دايجستيف، وشوكو بي آر',
    categoryEn: 'Bon Ton Wafer Rolls, Digestives & Biscuits',
    descAr: 'رولات الويفر المحشوة بون تون (Bon Ton)، بسكويت الدايجستيف بالقمح الكامل، وشوكو بي آر ويم وان.',
    descEn: 'Bon Ton chocolate wafer rolls, whole wheat digestives, and Choco BR crispy biscuits.',
    isDarkCard: false,
  },
  {
    id: 'brand-lookme',
    name: 'LookMe · لوك مي',
    brandKey: 'LookMe',
    logo: './assets/logos/lookme_logo.svg',
    badgeAr: 'كواسون وبريوش فاخر',
    badgeEn: 'French Viennoiserie',
    badgeColor: 'gold',
    categoryAr: 'بريوش الكواسون المورق بكريمة الكاكاو الذائبة',
    categoryEn: 'Flaky French Croissants & Viennoiserie',
    descAr: 'بريوش الكواسون المورق والمحشو بكريمة الكاكاو الذائبة بعبوات 24 قطعة مخصصة للمقاهي والمدارس.',
    descEn: 'Flaky brioche croissants filled with luscious melted cocoa cream in 24-piece cartons.',
    isDarkCard: true,
  },
];

const PRODUCTS_STORAGE_KEY = 'ethar_libya_products_v1';
const SETTINGS_STORAGE_KEY = 'ethar_libya_settings_v1';
const GALLERY_STORAGE_KEY = 'ethar_libya_gallery_v1';
const BRANDS_STORAGE_KEY = 'ethar_libya_brands_v1';

// Get products from localStorage or fallback to default
export function getStoredProducts(): Product[] {
  try {
    const raw = localStorage.getItem(PRODUCTS_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.map((p: Product) => ({
          ...p,
          image: normalizeAssetPath(p.image),
        }));
      }
    }
  } catch (err) {
    console.error('Error reading stored products:', err);
  }
  return PRODUCTS;
}

// Get Gallery Items
export function getStoredGalleryItems(): GalleryItem[] {
  try {
    const raw = localStorage.getItem(GALLERY_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return sanitizeGalleryItems(parsed);
      }
    }
  } catch (err) {
    console.error('Error reading stored gallery:', err);
  }
  return DEFAULT_GALLERY_ITEMS;
}

// Get Brands
export function getStoredBrands(): BrandItem[] {
  try {
    const raw = localStorage.getItem(BRANDS_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.map((b: BrandItem) => ({
          ...b,
          logo: normalizeAssetPath(b.logo),
          fallbackLogo: b.fallbackLogo ? normalizeAssetPath(b.fallbackLogo) : undefined,
        }));
      }
    }
  } catch (err) {
    console.error('Error reading stored brands:', err);
  }
  return DEFAULT_BRAND_ITEMS;
}

// Get settings
export function getStoredSettings(): AppSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_STORAGE_KEY);
    if (raw) {
      return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
    }
  } catch (err) {
    console.error('Error reading stored settings:', err);
  }
  return DEFAULT_SETTINGS;
}

// Asynchronously load public/data/site_data.json on initial load without breaking or blocking UI
let isDataInitialized = false;
export async function initRemoteOrStaticData(): Promise<void> {
  if (isDataInitialized) return;
  isDataInitialized = true;

  const candidateUrls = [
    './data/site_data.json',
    '/etharlibya/data/site_data.json',
    'data/site_data.json',
  ];

  for (const baseUrl of candidateUrls) {
    try {
      const res = await fetch(`${baseUrl}?t=${Date.now()}`, { cache: 'no-cache' });
      if (res.ok) {
        const contentType = res.headers.get('content-type') || '';
        // Only parse if server actually returned JSON (prevents HTML 404 pages from crashing JSON parser)
        if (!contentType.includes('application/json') && !contentType.includes('text/plain') && contentType !== '') {
          continue;
        }

        const text = await res.text();
        // Guard against HTML error pages that returned 200
        if (!text || text.trim().startsWith('<')) {
          continue;
        }

        const data = JSON.parse(text);
        if (data && typeof data === 'object') {
          let changed = false;

          if (Array.isArray(data.products) && data.products.length > 0) {
            try {
              const normalizedProducts = data.products.map((p: Product) => ({
                ...p,
                image: normalizeAssetPath(p.image),
              }));
              localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(normalizedProducts));
              changed = true;
            } catch {
              // Ignore storage quota
            }
          }

          if (Array.isArray(data.gallery) && data.gallery.length > 0) {
            try {
              const cleanedGallery = sanitizeGalleryItems(data.gallery);
              localStorage.setItem(GALLERY_STORAGE_KEY, JSON.stringify(cleanedGallery));
              changed = true;
            } catch {
              // Ignore storage quota
            }
          }

          if (Array.isArray(data.brands) && data.brands.length > 0) {
            try {
              const normalizedBrands = data.brands.map((b: BrandItem) => ({
                ...b,
                logo: normalizeAssetPath(b.logo),
                fallbackLogo: b.fallbackLogo ? normalizeAssetPath(b.fallbackLogo) : undefined,
              }));
              localStorage.setItem(BRANDS_STORAGE_KEY, JSON.stringify(normalizedBrands));
              changed = true;
            } catch {
              // Ignore storage quota
            }
          }

          if (changed) {
            window.dispatchEvent(new CustomEvent('ethar_data_updated', { detail: { type: 'all' } }));
          }
          // Successfully loaded from remote site_data.json
          break;
        }
      }
    } catch {
      // Continue to next candidate
    }
  }
}

