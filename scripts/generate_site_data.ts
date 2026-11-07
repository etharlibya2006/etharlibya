import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PRODUCTS } from '../src/data/products.ts';
import { DEFAULT_GALLERY_ITEMS, DEFAULT_BRAND_ITEMS, DEFAULT_SETTINGS } from '../src/data/store.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.resolve(__dirname, '../public/data');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const siteData = {
  version: '2.0',
  app: 'Ethar Libya Corporate Portal',
  updatedAt: new Date().toISOString(),
  products: PRODUCTS,
  gallery: DEFAULT_GALLERY_ITEMS,
  brands: DEFAULT_BRAND_ITEMS,
  settings: DEFAULT_SETTINGS,
};

const targetPath = path.join(targetDir, 'site_data.json');
fs.writeFileSync(targetPath, JSON.stringify(siteData, null, 2), 'utf-8');
console.log('Successfully generated:', targetPath);
