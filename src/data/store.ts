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

const PRODUCTS_STORAGE_KEY = 'ethar_libya_products_v1';
const SETTINGS_STORAGE_KEY = 'ethar_libya_settings_v1';

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

// Reset products back to the original hardcoded PRODUCTS array
export function resetStoredProducts(): void {
  try {
    localStorage.removeItem(PRODUCTS_STORAGE_KEY);
    window.dispatchEvent(new CustomEvent('ethar_data_updated', { detail: { type: 'products' } }));
  } catch (err) {
    console.error('Error resetting products:', err);
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
  const data = {
    products: getStoredProducts(),
    settings: getStoredSettings(),
    exportedAt: new Date().toISOString(),
    version: '1.0',
    app: 'Ethar Libya Corporate Portal',
  };
  return JSON.stringify(data, null, 2);
}

// Import data from JSON
export function importDataFromJSON(jsonString: string): boolean {
  try {
    const data = JSON.parse(jsonString);
    if (data && Array.isArray(data.products)) {
      saveStoredProducts(data.products);
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
