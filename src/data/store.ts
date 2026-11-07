import { Product, PRODUCTS } from './products';

export interface AppSettings {
  whatsappNumber: string; // e.g. "218925062360"
  phoneDisplay: string;    // e.g. "+218 92 506 2360"
  email: string;           // e.g. "info@etharlibya.ly"
  tripoliAddressAr: string;
  tripoliAddressEn: string;
  adminPin: string;        // Default: "ethar2026"
}

export const DEFAULT_SETTINGS: AppSettings = {
  whatsappNumber: '218925062360',
  phoneDisplay: '+218 92 506 2360',
  email: 'info@ethar-libya.ly',
  tripoliAddressAr: 'ليبيا، طرابلس - طريق السواني / الكريمية - مجمع المستودعات المركزية',
  tripoliAddressEn: 'Tripoli, Libya - Al-Sawani Road / Al-Karimiyah Hub',
  adminPin: 'ethar2026',
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

export const DEFAULT_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'bonton_fleet_dispatch',
    category: 'trucks',
    src: './assets/facilities/bonton_fleet_dispatch.webp',
    fallbackSrc: './assets/facilities/bonton_fleet_dispatch.jpg',
    titleAr: 'تفريغ وشحن بون تون وشوكو بي آر (شاحنة ليبيا 25-53205)',
    titleEn: 'Bakemate Freight Handling (Libya Plate 25-53205)',
    tagAr: 'مناولة لوجستية متخصصة',
    tagEn: 'Professional Freight Handling',
    descAr: 'فريق العمل اللوجستي داخل الشاحنة لتفريغ وترتيب كراتين رولات بون تون (Bon Ton)، وبسكويت شوكو بي آر (Choco BR)، ويم وان (Wim Wan).',
    descEn: 'Logistics handling crew inside the commercial transport vehicle unloading cartons of Bon Ton rolls and Choco BR biscuits for scheduled store distribution.',
    locationAr: 'طرابلس - الكريمية · رصيف شحن الجملة',
    locationEn: 'Tripoli Karimiyah Wholesale Dispatch Bay',
    badgeAr: 'لوحة الشاحنة: ليبيا 25-53205',
    badgeEn: 'Vehicle Plate: Libya 25-53205',
  },
  {
    id: 'truck_loading_dock',
    category: 'trucks',
    src: './assets/facilities/truck_loading_dock.webp',
    fallbackSrc: './assets/facilities/truck_loading_dock.jpg',
    titleAr: 'تفريغ وتوريد شحنات مونا ليسا سويس رول',
    titleEn: 'Container Dock Unloading - Mona Lisa Swiss Rolls',
    tagAr: 'رصيف التحميل المباشر',
    tagEn: 'Direct Logistics Loading Dock',
    descAr: 'وصول الشاحنات المحملة بكراتين سويس رول مونا ليسا إلى رصيف التحميل المجهز بالمستودع المركزي بالكريمية، لتصنيفها وتوزيعها المباشر.',
    descEn: 'Heavy logistics trailers docking at Tripoli Karimiyah hub unloading pallets of Mona Lisa Swiss Roll cartons for direct dispatch.',
    locationAr: 'طرابلس - الكريمية · مستودع الاستلام المركزي',
    locationEn: 'Tripoli - Al-Karimiyah Central Logistics Hub',
    badgeAr: 'شحنات يومية منتظمة',
    badgeEn: 'Daily Scheduled Inbound',
  },
  {
    id: 'refrigerated_fleet_worker',
    category: 'trucks',
    src: './assets/facilities/refrigerated_fleet_worker.webp',
    fallbackSrc: './assets/facilities/refrigerated_fleet_worker.jpg',
    titleAr: 'أسطول شاحنات التبريد المجهزة (لوحة طرابلس ن 34 - 2)',
    titleEn: 'Insulated Refrigerated Fleet (Tripoli Plate 34-2 N)',
    tagAr: 'نقل مبرد ومكيف 100%',
    tagEn: 'Temperature-Controlled Logistics',
    descAr: 'تحميل كراتين ويفر مونا ليسا سنوفليك واكسترا داخل مقصورة التبريد المعزولة لضمان ثبات القوام وجودة الشوكولاتة في مختلف فصول السنة.',
    descEn: 'Logistics crew loading Mona Lisa Snowflake and Extra wafers into modern insulated refrigerated cargo bays preserving crispiness.',
    locationAr: 'مستودعات الكريمية · رصيف شاحنات التبريد',
    locationEn: 'Karimiyah Warehousing · Refrigerated Fleet Bay',
    badgeAr: 'لوحة نقل معتمدة: ن 34 - 2',
    badgeEn: 'Official Plate: 34-2 N',
  },
  {
    id: 'pickup_distribution_road',
    category: 'distribution',
    src: './assets/facilities/pickup_distribution_road.webp',
    fallbackSrc: './assets/facilities/pickup_distribution_road.jpg',
    titleAr: 'شاحنات التوزيع التجاري السريع على الطرق الليبية',
    titleEn: 'Commercial Highway Express Delivery (Mona Lisa Wafers)',
    tagAr: 'تغذية الأسواق والمحال',
    tagEn: 'Rapid Retail Replenishment',
    descAr: 'شاحنات النقل الخفيف تنطلق يومياً محملة بكراتين ويفر مونا ليسا اكسترا (أزرق، أحمر، أخضر) لتوصيلها فورياً لمحلات التجزئة والسوبرماركت.',
    descEn: 'Commercial delivery pickup transporting stacked secured Mona Lisa cartons across Libyan arterial highways directly to retailers.',
    locationAr: 'الطريق الساحلي وشرايين النقل بين المدن',
    locationEn: 'Tripoli Arterial Expressways & Regional Routes',
    badgeAr: 'توصيل خلال 24 ساعة',
    badgeEn: '24h Fast Fulfillment',
  },
  {
    id: 'karimiyah_showroom_shelf',
    category: 'warehouses',
    src: './assets/facilities/karimiyah_showroom_shelf.webp',
    fallbackSrc: './assets/facilities/karimiyah_showroom_shelf.jpg',
    titleAr: 'صالة عرض المنتجات النموذجية بالكريمية',
    titleEn: 'Al-Karimiyah Showroom Unit (Honey St & High School St)',
    tagAr: 'الكريمية شارع العسل والثانوية',
    tagEn: 'Al-Karimiyah Honey St & High School St',
    descAr: 'جناح وخزانة العرض النموذجية التي تضم أصناف ويفر مونا ليسا، بورتو بيلو، وبسكويت الشوكولاتة لتسهيل معاينة الأصناف واختيار طلبيات الجملة.',
    descEn: 'Dedicated retail showroom display cabinet exhibiting the full portfolio of Mona Lisa wafers, Porto Bello snacks, and biscuits in Al-Karimiyah.',
    locationAr: 'الكريمية · شارع العسل وشارع الثانوية',
    locationEn: 'Al-Karimiyah, Honey St & High School St, Tripoli',
    badgeAr: 'معاينة وطلب فوري',
    badgeEn: 'On-Demand Wholesale Orders',
  },
  {
    id: 'consumer_moments_wafers',
    category: 'distribution',
    src: './assets/facilities/consumer_moments_wafers.webp',
    fallbackSrc: './assets/facilities/consumer_moments_wafers.jpg',
    titleAr: 'اختيار العائلة الليبية الأول ولمسات السعادة',
    titleEn: 'The Libyan Household Favorite - Pure Crispiness',
    tagAr: 'ثقة المستهلك وجودة المذاق',
    tagEn: 'Household Consumer Trust',
    descAr: 'حضور منتجات مونا ليسا وبيك ميت في كل بيت ليبي؛ طعم الويفر الهش والمكونات النقية التي تمنح الأطفال والعائلات لحظات لا تُنسى.',
    descEn: 'Mona Lisa wafers bring smiles to Libyan homes every day, renowned for rich cream, authentic Italian wafer recipe, and wholesome quality.',
    locationAr: 'في كل بيت ليبي · من طرابلس إلى بنغازي وسبها',
    locationEn: 'Across Libyan Homes from Tripoli to Benghazi',
    badgeAr: 'جودة معتمدة ومرخصة',
    badgeEn: 'FDA & Health Certified',
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
        return parsed;
      }
    }
  } catch (err) {
    console.error('Error reading stored products:', err);
  }
  return PRODUCTS;
}

// Save products to localStorage and trigger custom event
export function saveStoredProducts(products: Product[]): void {
  try {
    localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));
    window.dispatchEvent(new CustomEvent('ethar_data_updated', { detail: { type: 'products' } }));
  } catch (err) {
    console.error('Error saving stored products:', err);
  }
}

// Reset products back to original PRODUCTS array
export function resetStoredProducts(): void {
  try {
    localStorage.removeItem(PRODUCTS_STORAGE_KEY);
    window.dispatchEvent(new CustomEvent('ethar_data_updated', { detail: { type: 'products' } }));
  } catch (err) {
    console.error('Error resetting products:', err);
  }
}

// Get Gallery Items
export function getStoredGalleryItems(): GalleryItem[] {
  try {
    const raw = localStorage.getItem(GALLERY_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.error('Error reading stored gallery:', err);
  }
  return DEFAULT_GALLERY_ITEMS;
}

// Save Gallery Items
export function saveStoredGalleryItems(items: GalleryItem[]): void {
  try {
    localStorage.setItem(GALLERY_STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new CustomEvent('ethar_data_updated', { detail: { type: 'gallery' } }));
  } catch (err) {
    console.error('Error saving stored gallery:', err);
  }
}

// Reset Gallery Items
export function resetStoredGalleryItems(): void {
  try {
    localStorage.removeItem(GALLERY_STORAGE_KEY);
    window.dispatchEvent(new CustomEvent('ethar_data_updated', { detail: { type: 'gallery' } }));
  } catch (err) {
    console.error('Error resetting gallery:', err);
  }
}

// Get Brands
export function getStoredBrands(): BrandItem[] {
  try {
    const raw = localStorage.getItem(BRANDS_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.error('Error reading stored brands:', err);
  }
  return DEFAULT_BRAND_ITEMS;
}

// Save Brands
export function saveStoredBrands(items: BrandItem[]): void {
  try {
    localStorage.setItem(BRANDS_STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new CustomEvent('ethar_data_updated', { detail: { type: 'brands' } }));
  } catch (err) {
    console.error('Error saving stored brands:', err);
  }
}

// Reset Brands
export function resetStoredBrands(): void {
  try {
    localStorage.removeItem(BRANDS_STORAGE_KEY);
    window.dispatchEvent(new CustomEvent('ethar_data_updated', { detail: { type: 'brands' } }));
  } catch (err) {
    console.error('Error resetting brands:', err);
  }
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

// Save settings
export function saveStoredSettings(settings: AppSettings): void {
  try {
    localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
    window.dispatchEvent(new CustomEvent('ethar_data_updated', { detail: { type: 'settings' } }));
  } catch (err) {
    console.error('Error saving stored settings:', err);
  }
}

// Export all data as downloadable JSON
export function exportDataAsJSON(): string {
  const data = getCurrentSiteDataPayload();
  return JSON.stringify(data, null, 2);
}

// Get current full site data payload
export function getCurrentSiteDataPayload() {
  return {
    version: '2.0',
    app: 'Ethar Libya Corporate Portal',
    updatedAt: new Date().toISOString(),
    products: getStoredProducts(),
    gallery: getStoredGalleryItems(),
    brands: getStoredBrands(),
    settings: getStoredSettings(),
  };
}

// Download site_data.json directly for GitHub commit
export function downloadSiteDataFile(): void {
  try {
    const payload = getCurrentSiteDataPayload();
    const jsonString = JSON.stringify(payload, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'site_data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  } catch (err) {
    console.error('Failed to download site_data.json:', err);
  }
}

// Attempt direct save to workspace/disk if running via dev server
export async function syncSiteDataToDisk(): Promise<{ success: boolean; message: string }> {
  try {
    const payload = getCurrentSiteDataPayload();
    const res = await fetch('./api/save-site-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      const data = await res.json();
      return { success: true, message: data.message || 'تم حفظ التحديثات بنجاح في ملفات المشروع' };
    }
    return { success: false, message: 'تعذر الحفظ المباشر على الخادم؛ يرجى تنزيل ملف site_data.json ورفعه لمستودع GitHub' };
  } catch {
    return { success: false, message: 'بيئة الاستضافة ثابتة؛ يمكنك تحميل ملف site_data.json ورفعه لمستودع GitHub بنقرة واحدة' };
  }
}

// Asynchronously load public/data/site_data.json on initial load without breaking or blocking UI
let isDataInitialized = false;
export async function initRemoteOrStaticData(): Promise<void> {
  if (isDataInitialized) return;
  isDataInitialized = true;

  try {
    const res = await fetch('./data/site_data.json?t=' + Date.now(), { cache: 'no-cache' });
    if (res.ok) {
      const data = await res.json();
      if (data && typeof data === 'object') {
        let changed = false;

        // If local storage has never been customized, or to keep fresh with GitHub repository:
        const hasCustomProducts = localStorage.getItem(PRODUCTS_STORAGE_KEY) !== null;
        if (!hasCustomProducts && Array.isArray(data.products) && data.products.length > 0) {
          localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(data.products));
          changed = true;
        }

        const hasCustomGallery = localStorage.getItem(GALLERY_STORAGE_KEY) !== null;
        if (!hasCustomGallery && Array.isArray(data.gallery) && data.gallery.length > 0) {
          localStorage.setItem(GALLERY_STORAGE_KEY, JSON.stringify(data.gallery));
          changed = true;
        }

        const hasCustomBrands = localStorage.getItem(BRANDS_STORAGE_KEY) !== null;
        if (!hasCustomBrands && Array.isArray(data.brands) && data.brands.length > 0) {
          localStorage.setItem(BRANDS_STORAGE_KEY, JSON.stringify(data.brands));
          changed = true;
        }

        if (changed) {
          window.dispatchEvent(new CustomEvent('ethar_data_updated', { detail: { type: 'all' } }));
        }
      }
    }
  } catch (err) {
    console.debug('Static site_data.json not loaded, using embedded code defaults.', err);
  }
}

// Import data from JSON
export function importDataFromJSON(jsonString: string): boolean {
  try {
    const data = JSON.parse(jsonString);
    if (data) {
      if (Array.isArray(data.products)) {
        saveStoredProducts(data.products);
      }
      if (Array.isArray(data.gallery)) {
        saveStoredGalleryItems(data.gallery);
      }
      if (Array.isArray(data.brands)) {
        saveStoredBrands(data.brands);
      }
      if (data.settings) {
        saveStoredSettings({ ...DEFAULT_SETTINGS, ...data.settings });
      }
      return true;
    }
  } catch (err) {
    console.error('Invalid JSON imported:', err);
  }
  return false;
}

