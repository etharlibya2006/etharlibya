import React, { useState, useEffect, useRef } from 'react';
import { Product, CATEGORIES, BRANDS } from '../data/products';
import {
  getStoredProducts,
  saveStoredProducts,
  resetStoredProducts,
  getStoredSettings,
  saveStoredSettings,
  exportDataAsJSON,
  importDataFromJSON,
  AppSettings,
  GalleryItem,
  getStoredGalleryItems,
  saveStoredGalleryItems,
  resetStoredGalleryItems,
  BrandItem,
  getStoredBrands,
  saveStoredBrands,
  resetStoredBrands,
} from '../data/store';
import {
  Lock,
  Unlock,
  ShieldCheck,
  Plus,
  Edit2,
  Trash2,
  Download,
  Upload,
  Copy,
  Check,
  X,
  Search,
  Sparkles,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  RefreshCw,
  ExternalLink,
  Package,
  Layers,
  Star,
  Image as ImageIcon,
  Key,
  Warehouse,
  Truck,
  Award,
} from 'lucide-react';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ isOpen, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('ethar_admin_auth') === 'true';
  });
  const [enteredPin, setEnteredPin] = useState<string>('');
  const [pinError, setPinError] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'products' | 'gallery' | 'brands' | 'contact' | 'backup'>('products');

  // Stored state
  const [products, setProducts] = useState<Product[]>([]);
  const [settings, setSettings] = useState<AppSettings>(getStoredSettings());
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [brands, setBrands] = useState<BrandItem[]>([]);

  // Search & Filter in Admin
  const [adminSearch, setAdminSearch] = useState<string>('');
  const [adminCategory, setAdminCategory] = useState<string>('all');
  const [adminBrand, setAdminBrand] = useState<string>('all');

  // Product Edit Modal
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isNewProduct, setIsNewProduct] = useState<boolean>(false);

  // Gallery Edit Modal
  const [editingGalleryItem, setEditingGalleryItem] = useState<GalleryItem | null>(null);
  const [isNewGalleryItem, setIsNewGalleryItem] = useState<boolean>(false);
  const galleryFileInputRef = useRef<HTMLInputElement>(null);

  // Brand Edit Modal
  const [editingBrand, setEditingBrand] = useState<BrandItem | null>(null);
  const [isNewBrand, setIsNewBrand] = useState<boolean>(false);
  const brandFileInputRef = useRef<HTMLInputElement>(null);

  const [toastMessage, setToastMessage] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const jsonImportRef = useRef<HTMLInputElement>(null);

  // Load products, settings, gallery & brands on mount / open
  useEffect(() => {
    if (isOpen) {
      setProducts(getStoredProducts());
      setSettings(getStoredSettings());
      setGalleryItems(getStoredGalleryItems());
      setBrands(getStoredBrands());
    }
  }, [isOpen]);

  // Show Toast
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  // PIN Login Handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const currentPin = settings.adminPin || 'ethar2026';
    if (enteredPin.trim() === currentPin) {
      setIsAuthenticated(true);
      sessionStorage.setItem('ethar_admin_auth', 'true');
      setPinError('');
      setEnteredPin('');
      showToast('تم تسجيل الدخول بنجاح إلى لوحة الإدارة');
    } else {
      setPinError('رمز الدخول غير صحيح، يرجى المحاولة مجدداً');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('ethar_admin_auth');
    setEnteredPin('');
  };

  // Save Product (Add or Edit)
  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;

    if (!editingProduct.nameAr.trim() || !editingProduct.nameEn.trim()) {
      alert('يرجى إدخال اسم المنتج باللغتين العربية والإنجليزية');
      return;
    }

    let updatedList: Product[];
    if (isNewProduct) {
      const newProd: Product = {
        ...editingProduct,
        id: editingProduct.id || `product-${Date.now()}`,
      };
      updatedList = [newProd, ...products];
      showToast('تمت إضافة المنتج بنجاح');
    } else {
      updatedList = products.map((p) => (p.id === editingProduct.id ? editingProduct : p));
      showToast('تم تعديل بيانات المنتج بنجاح');
    }

    setProducts(updatedList);
    saveStoredProducts(updatedList);
    setEditingProduct(null);
  };

  // Delete Product
  const handleDeleteProduct = (id: string, nameAr: string) => {
    if (window.confirm(`هل أنت متأكد من حذف المنتج: "${nameAr}"؟`)) {
      const updated = products.filter((p) => p.id !== id);
      setProducts(updated);
      saveStoredProducts(updated);
      showToast('تم حذف المنتج بنجاح');
    }
  };

  // Toggle Flagship
  const handleToggleFlagship = (id: string) => {
    const updated = products.map((p) =>
      p.id === id ? { ...p, isFlagship: !p.isFlagship } : p
    );
    setProducts(updated);
    saveStoredProducts(updated);
    showToast('تم تحديث حالة تمييز المنتج');
  };

  // Open Add Product Modal
  const handleOpenAddModal = () => {
    setIsNewProduct(true);
    setEditingProduct({
      id: `prod-${Date.now()}`,
      nameAr: '',
      nameEn: '',
      brand: 'MONALISA',
      category: 'biscuits',
      image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_59_20_PM-6_ba489de7.webp',
      weight: 'قطعة مغلفة 100g',
      cartonSpec: 'كرتونة 24 قطعة',
      descriptionAr: '',
      descriptionEn: '',
      featuresAr: ['جودة مطابقة للمواصفات القياسية'],
      featuresEn: ['High quality compliant standard'],
      isFlagship: false,
    });
  };

  // Handle Image File Upload (converted to Base64 data URL)
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert('حجم الصورة كبير، يفضل اختيار صورة أقل من 2 ميغابايت لضمان سرعة التحميل.');
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result && editingProduct) {
          setEditingProduct({
            ...editingProduct,
            image: event.target.result as string,
          });
          showToast('تم تحميل صورة المنتج بنجاح');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Save Settings
  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    saveStoredSettings(settings);
    showToast('تم حفظ أرقام وبيانات الاتصال بنجاح');
  };

  // Download JSON
  const handleDownloadJSON = () => {
    const jsonStr = exportDataAsJSON();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ethar-libya-products-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('تم تحميل ملف التحديثات بنجاح');
  };

  // Import JSON
  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content && importDataFromJSON(content)) {
        setProducts(getStoredProducts());
        setSettings(getStoredSettings());
        showToast('تم استيراد كافة البيانات والمنتجات بنجاح');
      } else {
        alert('الملف غير صالح أو لا يحتوي على بنية بيانات صحيحة.');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  // Reset to Defaults
  const handleResetDefaults = () => {
    if (
      window.confirm(
        'تحذير: هل أنت متأكد من استعادة بيانات المنتجات الأصلية المصنعية؟ سيتم التراجع عن أي إضافات أو تعديلات قمت بها.'
      )
    ) {
      resetStoredProducts();
      setProducts(getStoredProducts());
      showToast('تمت استعادة المنتجات الأصلية بنجاح');
    }
  };

  // --- GALLERY HANDLERS ---
  const handleOpenAddGalleryModal = () => {
    setIsNewGalleryItem(true);
    setEditingGalleryItem({
      id: `gallery-${Date.now()}`,
      category: 'trucks',
      src: './assets/facilities/truck_loading_dock.webp',
      fallbackSrc: './assets/facilities/truck_loading_dock.jpg',
      titleAr: '',
      titleEn: '',
      tagAr: 'عمليات ميدانية',
      tagEn: 'Field Operations',
      descAr: '',
      descEn: '',
      locationAr: 'طرابلس - الكريمية',
      locationEn: 'Tripoli - Al-Karimiyah',
      badgeAr: 'عمليات يومية',
      badgeEn: 'Daily Operations',
    });
  };

  const handleSaveGalleryItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingGalleryItem) return;
    if (!editingGalleryItem.titleAr.trim()) {
      alert('يرجى إدخال عنوان الصورة بالعربية');
      return;
    }

    let updatedList: GalleryItem[];
    if (isNewGalleryItem) {
      const newItem: GalleryItem = {
        ...editingGalleryItem,
        id: editingGalleryItem.id || `gallery-${Date.now()}`,
      };
      updatedList = [newItem, ...galleryItems];
      showToast('تمت إضافة الصورة بنجاح إلى المعرض');
    } else {
      updatedList = galleryItems.map((item) =>
        item.id === editingGalleryItem.id ? editingGalleryItem : item
      );
      showToast('تم حفظ تعديلات الصورة بنجاح');
    }

    setGalleryItems(updatedList);
    saveStoredGalleryItems(updatedList);
    setEditingGalleryItem(null);
  };

  const handleDeleteGalleryItem = (id: string, titleAr: string) => {
    if (window.confirm(`هل أنت متأكد من حذف صورة "${titleAr}" من المعرض؟`)) {
      const updated = galleryItems.filter((i) => i.id !== id);
      setGalleryItems(updated);
      saveStoredGalleryItems(updated);
      showToast('تم حذف الصورة من المعرض');
    }
  };

  const handleResetGallery = () => {
    if (window.confirm('هل تريد استعادة صور المعرض الافتراضية للأسطول والمخازن؟')) {
      resetStoredGalleryItems();
      setGalleryItems(getStoredGalleryItems());
      showToast('تمت استعادة صور المعرض الأصلية');
    }
  };

  const handleGalleryImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 3 * 1024 * 1024) {
        alert('حجم الصورة كبير، يفضل اختيار صورة أقل من 3 ميغابايت.');
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result && editingGalleryItem) {
          setEditingGalleryItem({
            ...editingGalleryItem,
            src: event.target.result as string,
            fallbackSrc: event.target.result as string,
          });
          showToast('تم تحميل الصورة بنجاح');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // --- BRAND HANDLERS ---
  const handleOpenAddBrandModal = () => {
    setIsNewBrand(true);
    setEditingBrand({
      id: `brand-${Date.now()}`,
      name: '',
      brandKey: '',
      logo: './assets/logos/monalisa_italy_flag.webp',
      badgeAr: 'وكالة معتمدة',
      badgeEn: 'Authorized Brand',
      badgeColor: 'emerald',
      categoryAr: '',
      categoryEn: '',
      descAr: '',
      descEn: '',
      isDarkCard: false,
    });
  };

  const handleSaveBrand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingBrand) return;
    if (!editingBrand.name.trim()) {
      alert('يرجى إدخال اسم العلامة التجارية');
      return;
    }

    let updatedList: BrandItem[];
    if (isNewBrand) {
      const newBrand: BrandItem = {
        ...editingBrand,
        id: editingBrand.id || `brand-${Date.now()}`,
        brandKey: editingBrand.brandKey || editingBrand.name.split(' ')[0],
      };
      updatedList = [...brands, newBrand];
      showToast('تمت إضافة العلامة التجارية بنجاح');
    } else {
      updatedList = brands.map((b) => (b.id === editingBrand.id ? editingBrand : b));
      showToast('تم حفظ تعديلات العلامة التجارية بنجاح');
    }

    setBrands(updatedList);
    saveStoredBrands(updatedList);
    setEditingBrand(null);
  };

  const handleDeleteBrand = (id: string, name: string) => {
    if (window.confirm(`هل أنت متأكد من حذف العلامة التجارية "${name}" من الموقع؟`)) {
      const updated = brands.filter((b) => b.id !== id);
      setBrands(updated);
      saveStoredBrands(updated);
      showToast('تم حذف العلامة التجارية بنجاح');
    }
  };

  const handleResetBrands = () => {
    if (window.confirm('هل تريد استعادة شعارات العلامات التجارية الافتراضية؟')) {
      resetStoredBrands();
      setBrands(getStoredBrands());
      showToast('تمت استعادة العلامات التجارية الأصلية');
    }
  };

  const handleBrandLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert('حجم الملف كبير، يفضل اختيار شعار أقل من 2 ميغابايت.');
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result && editingBrand) {
          setEditingBrand({
            ...editingBrand,
            logo: event.target.result as string,
          });
          showToast('تم تحميل الشعار بنجاح');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Filtered Products in Admin
  const filteredAdminProducts = products.filter((p) => {
    const q = adminSearch.toLowerCase();
    const matchSearch =
      !q ||
      p.nameAr.toLowerCase().includes(q) ||
      p.nameEn.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q);
    const matchCategory = adminCategory === 'all' || p.category === adminCategory;
    const matchBrand = adminBrand === 'all' || p.brand === adminBrand;
    return matchSearch && matchCategory && matchBrand;
  });

  if (!isOpen) return null;

  return (
    <div
      dir="rtl"
      className="fixed inset-0 z-[100] bg-stone-900/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto animate-in fade-in duration-200"
    >
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[110] bg-[#111] text-[#d9b239] border border-[#d9b239] px-6 py-2.5 rounded-full shadow-2xl flex items-center gap-2 text-xs font-bold font-mono animate-bounce">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Screen 1: Lock / Auth Prompt */}
      {!isAuthenticated ? (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border-3 border-[#d9b239] p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-[#b4362d] via-[#d9b239] to-[#b4362d]" />

          <button
            onClick={onClose}
            className="absolute top-4 left-4 p-1 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-16 h-16 rounded-2xl bg-[#fbf9f6] border-2 border-[#d9b239] mx-auto flex items-center justify-center text-[#b4362d] mb-4 shadow-inner">
            <Lock className="w-8 h-8" />
          </div>

          <h3 className="text-xl font-black text-stone-900 mb-1 font-cinzel">
            لوحة الإدارة - إيثار ليبيا
          </h3>
          <p className="text-xs text-stone-500 mb-6">
            منطقة مخصصة لإدارة الكتالوج وتعديل بيانات المنتجات والاتصال
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-stone-700 text-right mb-1">
                رمز المرور السري (Admin PIN)
              </label>
              <input
                type="password"
                value={enteredPin}
                onChange={(e) => setEnteredPin(e.target.value)}
                placeholder="أدخل الرمز السري..."
                autoFocus
                className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-[#b4362d] text-center font-mono text-lg tracking-widest outline-none transition-all"
              />
              {pinError && <p className="text-xs text-red-600 font-bold mt-1.5">{pinError}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-[#b4362d] to-[#8f2119] text-white font-bold rounded-xl hover:brightness-110 transition-all shadow-md flex items-center justify-center gap-2 text-sm"
            >
              <Unlock className="w-4 h-4 text-[#d9b239]" />
              <span>تسجيل الدخول للوحة التحكم</span>
            </button>

            <div className="pt-2 text-[11px] text-stone-600 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-stone-600" />
              <span>الرمز الافتراضي: </span>
              <code className="text-[#b4362d] font-bold font-mono">ethar2026</code>
            </div>
          </form>
        </div>
      ) : (
        /* Screen 2: Full Admin Dashboard Panel */
        <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl border-2 border-stone-300 overflow-hidden max-h-[92vh] flex flex-col my-auto">
          {/* Top Bar */}
          <div className="bg-gradient-to-r from-[#b4362d] via-[#942921] to-[#7a1e17] px-6 py-4 text-white flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#d9b239]">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-white/10 border border-[#d9b239] flex items-center justify-center shadow-inner">
                <ShieldCheck className="w-6 h-6 text-[#d9b239]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-black font-cinzel">إيثار ليبيا · لوحة التحكم والإدارة</h2>
                  <span className="text-[10px] font-bold bg-[#d9b239] text-[#50120d] px-2 py-0.5 rounded-full font-mono">
                    ADMIN
                  </span>
                </div>
                <p className="text-[11px] text-white/80">إدارة المنتجات والمحتوى محلياً بدون سيرفرات خارجية</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleLogout}
                className="px-3 py-1.5 rounded-lg bg-black/20 hover:bg-black/40 text-white/90 text-xs font-bold transition-colors flex items-center gap-1.5"
                title="قفل لوحة التحكم"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>قفل</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="إغلاق والعودة للموقع"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Tabs & KPI Quick Stats */}
          <div className="bg-[#fbf9f6] border-b border-stone-200 px-6 py-3 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveTab('products')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  activeTab === 'products'
                    ? 'bg-[#b4362d] text-white shadow-sm'
                    : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
                }`}
              >
                <Package className="w-4 h-4" />
                <span>إدارة المنتجات ({products.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('gallery')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  activeTab === 'gallery'
                    ? 'bg-[#b4362d] text-white shadow-sm'
                    : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
                }`}
              >
                <Warehouse className="w-4 h-4" />
                <span>المخازن والأسطول ({galleryItems.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('brands')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  activeTab === 'brands'
                    ? 'bg-[#b4362d] text-white shadow-sm'
                    : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
                }`}
              >
                <Award className="w-4 h-4" />
                <span>شعارات العلامات ({brands.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('contact')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  activeTab === 'contact'
                    ? 'bg-[#b4362d] text-white shadow-sm'
                    : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>بيانات الاتصال</span>
              </button>

              <button
                onClick={() => setActiveTab('backup')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  activeTab === 'backup'
                    ? 'bg-[#b4362d] text-white shadow-sm'
                    : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
                }`}
              >
                <Download className="w-4 h-4" />
                <span>النسخ الاحتياطي</span>
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-4 text-xs font-mono text-stone-500">
              <span>موناليزا: <b className="text-[#b4362d]">{products.filter((p) => p.brand === 'MONALISA').length}</b></span>
              <span>·</span>
              <span>المميزة: <b className="text-amber-600">{products.filter((p) => p.isFlagship).length}</b></span>
            </div>
          </div>

          {/* Main Body Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-white">
            {/* TAB 1: PRODUCTS MANAGEMENT */}
            {activeTab === 'products' && (
              <div className="space-y-6">
                {/* Search & Actions Bar */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-[#fbf9f6] p-4 rounded-2xl border border-stone-200">
                  <div className="flex flex-1 items-center gap-2">
                    <div className="relative flex-1">
                      <input
                        type="text"
                        value={adminSearch}
                        onChange={(e) => setAdminSearch(e.target.value)}
                        placeholder="ابحث باسم المنتج أو العلامة..."
                        className="w-full pl-4 pr-9 py-2.5 rounded-xl border border-stone-200 text-xs focus:border-[#b4362d] outline-none"
                      />
                      <Search className="w-4 h-4 text-stone-400 absolute top-3 right-3" />
                    </div>

                    <select
                      value={adminCategory}
                      onChange={(e) => setAdminCategory(e.target.value)}
                      className="px-3 py-2.5 rounded-xl border border-stone-200 text-xs font-bold text-stone-700 outline-none bg-white"
                    >
                      {CATEGORIES.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.nameAr}
                        </option>
                      ))}
                    </select>

                    <select
                      value={adminBrand}
                      onChange={(e) => setAdminBrand(e.target.value)}
                      className="px-3 py-2.5 rounded-xl border border-stone-200 text-xs font-bold text-stone-700 outline-none bg-white"
                    >
                      {BRANDS.map((b) => (
                        <option key={b.id} value={b.id}>
                          {b.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    onClick={handleOpenAddModal}
                    className="px-4 py-2.5 rounded-xl bg-[#b4362d] text-white text-xs font-bold hover:brightness-110 transition-all flex items-center justify-center gap-1.5 shadow-sm shrink-0"
                  >
                    <Plus className="w-4 h-4" />
                    <span>إضافة منتج جديد</span>
                  </button>
                </div>

                {/* Products Table */}
                <div className="border border-stone-200 rounded-2xl overflow-hidden shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-right text-xs">
                      <thead className="bg-[#fbf9f6] text-stone-700 border-b border-stone-200 font-cinzel">
                        <tr>
                          <th className="p-3.5 w-16">الصورة</th>
                          <th className="p-3.5">اسم المنتج</th>
                          <th className="p-3.5">العلامة والقسم</th>
                          <th className="p-3.5">الوزن والكرتونة</th>
                          <th className="p-3.5 text-center">مميز</th>
                          <th className="p-3.5 text-center">إجراءات</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100">
                        {filteredAdminProducts.length > 0 ? (
                          filteredAdminProducts.map((p) => (
                            <tr key={p.id} className="hover:bg-stone-50/80 transition-colors">
                              <td className="p-3">
                                <div className="w-12 h-12 rounded-lg bg-[#fbf9f6] border border-stone-200 p-1 flex items-center justify-center overflow-hidden">
                                  <img
                                    src={p.image}
                                    alt={p.nameAr}
                                    className="max-h-full max-w-full object-contain"
                                    onError={(e) => {
                                      (e.target as HTMLImageElement).src =
                                        './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_59_20_PM-6_ba489de7.webp';
                                    }}
                                  />
                                </div>
                              </td>

                              <td className="p-3">
                                <span className="font-bold text-stone-900 block">{p.nameAr}</span>
                                <span className="text-[11px] text-stone-500 font-mono block">{p.nameEn}</span>
                              </td>

                              <td className="p-3">
                                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-black bg-stone-100 text-[#b4362d] font-cinzel mb-1">
                                  {p.brand}
                                </span>
                                <span className="text-stone-500 block text-[11px]">
                                  {CATEGORIES.find((c) => c.id === p.category)?.nameAr || p.category}
                                </span>
                              </td>

                              <td className="p-3 text-stone-600 font-mono text-[11px]">
                                <div>{p.weight}</div>
                                <div className="text-stone-400 text-[10px]">{p.cartonSpec}</div>
                              </td>

                              <td className="p-3 text-center">
                                <button
                                  onClick={() => handleToggleFlagship(p.id)}
                                  title={p.isFlagship ? 'إلغاء التمييز' : 'تمييز كمنتج رئيسي'}
                                  className={`p-1.5 rounded-lg transition-colors ${
                                    p.isFlagship
                                      ? 'text-amber-500 hover:text-amber-600 bg-amber-50'
                                      : 'text-stone-300 hover:text-stone-400'
                                  }`}
                                >
                                  <Star className={`w-4 h-4 ${p.isFlagship ? 'fill-amber-400' : ''}`} />
                                </button>
                              </td>

                              <td className="p-3 text-center">
                                <div className="inline-flex items-center gap-1.5">
                                  <button
                                    onClick={() => {
                                      setIsNewProduct(false);
                                      setEditingProduct({ ...p });
                                    }}
                                    className="p-1.5 rounded-lg bg-stone-100 hover:bg-[#b4362d] hover:text-white text-stone-600 transition-colors"
                                    title="تعديل المنتج"
                                  >
                                    <Edit2 className="w-3.5 h-3.5" />
                                  </button>

                                  <button
                                    onClick={() => handleDeleteProduct(p.id, p.nameAr)}
                                    className="p-1.5 rounded-lg bg-stone-100 hover:bg-red-600 hover:text-white text-stone-600 transition-colors"
                                    title="حذف المنتج"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={6} className="text-center py-10 text-stone-400">
                              لا توجد منتجات مطابقة لخيارات البحث الحالية
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* TAB: GALLERY MANAGEMENT */}
            {activeTab === 'gallery' && (
              <div className="space-y-6">
                {/* Header Bar */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#fbf9f6] p-4 rounded-2xl border border-stone-200">
                  <div>
                    <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                      <Warehouse className="w-5 h-5 text-[#b4362d]" />
                      <span>معرض البنية التحتية والأسطول والمخازن ({galleryItems.length} صور)</span>
                    </h3>
                    <p className="text-xs text-stone-500 mt-1">
                      تحكم كامل بصور الشاحنات، المستودعات بسوق الكريمية، ورصيف التحميل الميداني، مع إمكانية رفع صور جديدة مباشرة.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 self-stretch sm:self-auto">
                    <button
                      onClick={handleResetGallery}
                      className="px-3.5 py-2 rounded-xl bg-white text-stone-700 hover:text-stone-900 border border-stone-200 text-xs font-bold transition-colors flex items-center gap-1.5"
                      title="استعادة الصور الافتراضية"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>استعادة الأصل</span>
                    </button>

                    <button
                      onClick={handleOpenAddGalleryModal}
                      className="px-4 py-2 rounded-xl bg-[#b4362d] text-white hover:brightness-110 text-xs font-bold transition-all shadow-md flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4 text-[#d9b239]" />
                      <span>إضافة صورة جديدة</span>
                    </button>
                  </div>
                </div>

                {/* Gallery Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {galleryItems.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-2xl border border-stone-200 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-[#b4362d] transition-all flex flex-col justify-between"
                    >
                      <div>
                        {/* Image Preview */}
                        <div className="relative aspect-[4/3] w-full bg-stone-100 overflow-hidden">
                          <img
                            src={item.src}
                            alt={item.titleAr}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              if (item.fallbackSrc && e.currentTarget.src !== item.fallbackSrc) {
                                e.currentTarget.src = item.fallbackSrc;
                              }
                            }}
                          />
                          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/75 text-white text-[11px] font-bold backdrop-blur-xs">
                            {item.category === 'trucks'
                              ? 'شاحنات وأسطول'
                              : item.category === 'warehouses'
                              ? 'مستودعات وتخزين'
                              : 'توزيع سريع'}
                          </div>
                          <div className="absolute bottom-2 left-2 right-2 text-white bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-lg text-[11px] font-mono truncate">
                            {item.locationAr}
                          </div>
                        </div>

                        {/* Details */}
                        <div className="p-4 space-y-2">
                          <div className="inline-block text-[10px] font-bold text-[#b4362d] bg-red-50 px-2 py-0.5 rounded font-mono">
                            {item.badgeAr}
                          </div>
                          <h4 className="text-sm font-bold text-stone-900 line-clamp-1">
                            {item.titleAr}
                          </h4>
                          <p className="text-[11px] text-stone-500 line-clamp-2 leading-relaxed">
                            {item.descAr}
                          </p>
                        </div>
                      </div>

                      {/* Card Footer Actions */}
                      <div className="p-4 pt-3 border-t border-stone-100 bg-[#fbf9f6] flex items-center justify-between">
                        <span className="text-[11px] font-mono text-stone-400">
                          {item.id}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => {
                              setIsNewGalleryItem(false);
                              setEditingGalleryItem({ ...item });
                            }}
                            className="p-1.5 rounded-lg bg-stone-200/70 hover:bg-[#b4362d] hover:text-white text-stone-700 transition-colors flex items-center gap-1 text-xs font-bold"
                            title="تعديل الصورة"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                            <span>تعديل</span>
                          </button>

                          <button
                            onClick={() => handleDeleteGalleryItem(item.id, item.titleAr)}
                            className="p-1.5 rounded-lg bg-stone-200/70 hover:bg-red-600 hover:text-white text-stone-700 transition-colors"
                            title="حذف الصورة"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: BRANDS & LOGOS MANAGEMENT */}
            {activeTab === 'brands' && (
              <div className="space-y-6">
                {/* Header Bar */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#fbf9f6] p-4 rounded-2xl border border-stone-200">
                  <div>
                    <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                      <Award className="w-5 h-5 text-[#b4362d]" />
                      <span>شعارات ووكالات العلامات التجارية ({brands.length} علامات)</span>
                    </h3>
                    <p className="text-xs text-stone-500 mt-1">
                      إدارة شعارات العلامات المعتمدة (MONALISA, BAKEMATE, LookMe)، وتعديل ملفات اللوجو ونصوص التعريف الرسمية.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 self-stretch sm:self-auto">
                    <button
                      onClick={handleResetBrands}
                      className="px-3.5 py-2 rounded-xl bg-white text-stone-700 hover:text-stone-900 border border-stone-200 text-xs font-bold transition-colors flex items-center gap-1.5"
                      title="استعادة الشعارات الأصلية"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>استعادة الأصل</span>
                    </button>

                    <button
                      onClick={handleOpenAddBrandModal}
                      className="px-4 py-2 rounded-xl bg-[#b4362d] text-white hover:brightness-110 text-xs font-bold transition-all shadow-md flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4 text-[#d9b239]" />
                      <span>إضافة علامة تجارية</span>
                    </button>
                  </div>
                </div>

                {/* Brands Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {brands.map((b) => (
                    <div
                      key={b.id}
                      className={`rounded-2xl border-2 p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-all ${
                        b.isDarkCard
                          ? 'bg-stone-950 border-stone-800 text-white'
                          : 'bg-white border-stone-200 text-stone-900'
                      }`}
                    >
                      <div>
                        {/* Logo Container Preview */}
                        <div
                          className={`w-full h-36 rounded-xl flex items-center justify-center p-4 mb-4 border ${
                            b.isDarkCard ? 'bg-black border-stone-800' : 'bg-stone-50 border-stone-200'
                          }`}
                        >
                          <img
                            src={b.logo}
                            alt={b.name}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>

                        {/* Text Info */}
                        <div className="space-y-2">
                          <div
                            className={`inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                              b.isDarkCard
                                ? 'bg-stone-800 text-stone-300'
                                : b.badgeColor === 'emerald'
                                ? 'bg-emerald-50 text-emerald-800'
                                : 'bg-amber-50 text-amber-800'
                            }`}
                          >
                            {b.badgeAr}
                          </div>
                          <h4 className="text-base font-bold font-cinzel">
                            {b.name}
                          </h4>
                          <p
                            className={`text-xs leading-relaxed ${
                              b.isDarkCard ? 'text-stone-400' : 'text-stone-600'
                            }`}
                          >
                            {b.descAr}
                          </p>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="pt-4 mt-4 border-t border-stone-200/30 flex items-center justify-between">
                        <span className="text-[10px] font-mono text-stone-400">
                          {b.brandKey}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => {
                              setIsNewBrand(false);
                              setEditingBrand({ ...b });
                            }}
                            className={`p-1.5 rounded-lg text-xs font-bold flex items-center gap-1 transition-colors ${
                              b.isDarkCard
                                ? 'bg-stone-800 hover:bg-[#b4362d] text-white'
                                : 'bg-stone-100 hover:bg-[#b4362d] hover:text-white text-stone-700'
                            }`}
                            title="تعديل العلامة والشعار"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                            <span>تعديل</span>
                          </button>

                          <button
                            onClick={() => handleDeleteBrand(b.id, b.name)}
                            className="p-1.5 rounded-lg bg-stone-100 hover:bg-red-600 hover:text-white text-stone-700 transition-colors"
                            title="حذف العلامة"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: CONTACT & WHATSAPP SETTINGS */}
            {activeTab === 'contact' && (
              <form onSubmit={handleSaveSettings} className="max-w-2xl mx-auto space-y-6 py-4">
                <div className="bg-[#fbf9f6] p-6 rounded-2xl border border-stone-200 space-y-4">
                  <h3 className="text-sm font-bold text-stone-900 border-b border-stone-200 pb-2 flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>أرقام الواتساب وطلبات التوريد</span>
                  </h3>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      رقم واتساب طلبات الجملة (بالصيغة الدولية بدون علامة +)
                    </label>
                    <input
                      type="text"
                      value={settings.whatsappNumber}
                      onChange={(e) => setSettings({ ...settings, whatsappNumber: e.target.value })}
                      placeholder="218925062360"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 font-mono text-sm outline-none focus:border-[#b4362d]"
                    />
                    <p className="text-[11px] text-stone-500 mt-1">
                      الرقم الذي تُرسل إليه رسائل طلبات الجملة تلقائياً من الكتالوج.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      رقم الهاتف الظاهر للزوار بالموقع
                    </label>
                    <input
                      type="text"
                      value={settings.phoneDisplay}
                      onChange={(e) => setSettings({ ...settings, phoneDisplay: e.target.value })}
                      placeholder="+218 92 506 2360"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 font-mono text-sm outline-none focus:border-[#b4362d]"
                    />
                  </div>
                </div>

                <div className="bg-[#fbf9f6] p-6 rounded-2xl border border-stone-200 space-y-4">
                  <h3 className="text-sm font-bold text-stone-900 border-b border-stone-200 pb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#b4362d]" />
                    <span>البريد الإلكتروني والمقر الرئيسي</span>
                  </h3>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">البريد الإلكتروني</label>
                    <input
                      type="email"
                      value={settings.email}
                      onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                      placeholder="info@ethar-libya.ly"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 font-mono text-sm outline-none focus:border-[#b4362d]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">عنوان المقر (بالعربية)</label>
                    <input
                      type="text"
                      value={settings.tripoliAddressAr}
                      onChange={(e) => setSettings({ ...settings, tripoliAddressAr: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm outline-none focus:border-[#b4362d]"
                    />
                  </div>
                </div>

                <div className="bg-[#fbf9f6] p-6 rounded-2xl border border-stone-200 space-y-4">
                  <h3 className="text-sm font-bold text-stone-900 border-b border-stone-200 pb-2 flex items-center gap-2">
                    <Key className="w-4 h-4 text-amber-600" />
                    <span>تغيير رمز المرور السري للوحة التحكم (Admin PIN)</span>
                  </h3>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">الرمز الجديد</label>
                    <input
                      type="text"
                      value={settings.adminPin}
                      onChange={(e) => setSettings({ ...settings, adminPin: e.target.value })}
                      placeholder="ethar2026"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 font-mono text-sm outline-none focus:border-[#b4362d]"
                    />
                    <p className="text-[11px] text-stone-500 mt-1">
                      احتفظ بهذا الرمز جيداً لكي تتمكن من فتح لوحة التحكم به دائماً.
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#b4362d] text-white font-bold rounded-xl hover:brightness-110 transition-all shadow-md flex items-center justify-center gap-2 text-sm"
                >
                  <Check className="w-4 h-4 text-[#d9b239]" />
                  <span>حفظ التعديلات</span>
                </button>
              </form>
            )}

            {/* TAB 3: BACKUP, EXPORT & RESET */}
            {activeTab === 'backup' && (
              <div className="max-w-2xl mx-auto space-y-6 py-4">
                {/* Download Backup */}
                <div className="bg-[#fbf9f6] p-6 rounded-2xl border border-stone-200 flex items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-stone-900 mb-1">تحميل ملف التحديثات والنسخة الاحتياطية (JSON)</h4>
                    <p className="text-xs text-stone-500">
                      احفظ نسخة بملف واحد على جهازك تحتوي جميع المنتجات المضافة والمعدلة وبيانات الاتصال.
                    </p>
                  </div>
                  <button
                    onClick={handleDownloadJSON}
                    className="px-4 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors flex items-center gap-2 shrink-0 shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span>تنزيل الملف</span>
                  </button>
                </div>

                {/* Import Backup */}
                <div className="bg-[#fbf9f6] p-6 rounded-2xl border border-stone-200 flex items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-stone-900 mb-1">استيراد ملف تحديثات جاهز</h4>
                    <p className="text-xs text-stone-500">
                      ارفع ملف التحديثات المحفوظ سابقاً لاسترجاع كافة المنتجات على أي جهاز أو متصفح آخر.
                    </p>
                  </div>
                  <div>
                    <input
                      type="file"
                      ref={jsonImportRef}
                      onChange={handleImportJSON}
                      accept=".json"
                      className="hidden"
                    />
                    <button
                      onClick={() => jsonImportRef.current?.click()}
                      className="px-4 py-2.5 rounded-xl bg-[#b4362d] text-white font-bold text-xs hover:brightness-110 transition-colors flex items-center gap-2 shrink-0 shadow-sm"
                    >
                      <Upload className="w-4 h-4 text-[#d9b239]" />
                      <span>رفع ملف JSON</span>
                    </button>
                  </div>
                </div>

                {/* Reset to Factory Defaults */}
                <div className="bg-red-50/50 p-6 rounded-2xl border border-red-200 flex items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-red-900 mb-1">استعادة البيانات الأصلية للشركة</h4>
                    <p className="text-xs text-red-700/80">
                      في حال الرغبة في الرجوع للكتالوج الأصلي المكوّن من 35 منتجاً مع إلغاء كافة التعديلات.
                    </p>
                  </div>
                  <button
                    onClick={handleResetDefaults}
                    className="px-4 py-2.5 rounded-xl bg-red-600 text-white font-bold text-xs hover:bg-red-700 transition-colors flex items-center gap-2 shrink-0 shadow-sm"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>استعادة الأصل</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Product Edit / Add Modal */}
      {editingProduct && (
        <div className="fixed inset-0 z-[120] bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 overflow-y-auto">
          <div className="w-full max-w-2xl bg-white rounded-2xl border-2 border-[#d9b239] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            <div className="bg-[#fbf9f6] px-6 py-4 border-b border-stone-200 flex items-center justify-between">
              <h3 className="text-base font-black text-stone-900 font-cinzel">
                {isNewProduct ? 'إضافة منتج جديد' : `تعديل: ${editingProduct.nameAr}`}
              </h3>
              <button
                onClick={() => setEditingProduct(null)}
                className="p-1 rounded text-stone-400 hover:text-stone-700 hover:bg-stone-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProduct} className="p-6 overflow-y-auto space-y-4 text-xs">
              {/* Product Names */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-stone-700 mb-1">اسم المنتج بالعربية *</label>
                  <input
                    type="text"
                    required
                    value={editingProduct.nameAr}
                    onChange={(e) => setEditingProduct({ ...editingProduct, nameAr: e.target.value })}
                    placeholder="مثال: بسكويت موناليزا ويفر شوكولاتة"
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 outline-none focus:border-[#b4362d]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-stone-700 mb-1">Product Name in English *</label>
                  <input
                    type="text"
                    required
                    dir="ltr"
                    value={editingProduct.nameEn}
                    onChange={(e) => setEditingProduct({ ...editingProduct, nameEn: e.target.value })}
                    placeholder="e.g. MONALISA Choco Biscuit"
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 outline-none focus:border-[#b4362d] font-mono"
                  />
                </div>
              </div>

              {/* Brand & Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-stone-700 mb-1">العلامة التجارية</label>
                  <select
                    value={editingProduct.brand}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        brand: e.target.value as Product['brand'],
                      })
                    }
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 outline-none focus:border-[#b4362d] bg-white font-cinzel"
                  >
                    <option value="MONALISA">موناليزا (MONALISA - العلامة الخاصة)</option>
                    <option value="BAKEMATE">بيكميت (BAKEMATE)</option>
                    <option value="Nutri-Food">غذائي (Nutri-Food)</option>
                    <option value="LookMe">لوك مي (LookMe)</option>
                    <option value="BOLANTY">بولانتي (BOLANTY)</option>
                    <option value="LIBRA">ليبرا (LIBRA)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-stone-700 mb-1">القسم / التصنيف</label>
                  <select
                    value={editingProduct.category}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        category: e.target.value as Product['category'],
                      })
                    }
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 outline-none focus:border-[#b4362d] bg-white"
                  >
                    <option value="biscuits">البسكويت والكوكيز</option>
                    <option value="wafers">الويفر والرولز</option>
                    <option value="cakes">الكيك والسويس رول</option>
                    <option value="confectionery">الشوكولاتة وكريمة الدهن</option>
                    <option value="beverages">مسحوق الكاكاو والمشروبات</option>
                    <option value="other">حليب مكثف ومواد غذائية</option>
                  </select>
                </div>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-stone-700 mb-1">الوزن / التعبئة الفردية</label>
                  <input
                    type="text"
                    value={editingProduct.weight}
                    onChange={(e) => setEditingProduct({ ...editingProduct, weight: e.target.value })}
                    placeholder="مثال: قطعة 100g أو علبة 397g"
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 outline-none focus:border-[#b4362d]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-stone-700 mb-1">مواصفات الكرتونة (Carton Spec)</label>
                  <input
                    type="text"
                    value={editingProduct.cartonSpec}
                    onChange={(e) => setEditingProduct({ ...editingProduct, cartonSpec: e.target.value })}
                    placeholder="مثال: كرتونة 24 قطعة"
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 outline-none focus:border-[#b4362d]"
                  />
                </div>
              </div>

              {/* Product Image */}
              <div>
                <label className="block font-bold text-stone-700 mb-1">صورة المنتج</label>
                <div className="flex items-center gap-4 bg-[#fbf9f6] p-3 rounded-xl border border-stone-200">
                  <div className="w-16 h-16 rounded-lg bg-white border border-stone-300 p-1 flex items-center justify-center overflow-hidden shrink-0">
                    <img
                      src={editingProduct.image}
                      alt="معاينة"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <div className="flex-1 space-y-2">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageUpload}
                      accept="image/*"
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-3 py-1.5 rounded-lg bg-stone-800 text-white font-bold text-[11px] hover:bg-black transition-colors flex items-center gap-1.5"
                    >
                      <ImageIcon className="w-3.5 h-3.5" />
                      <span>رفع صورة جديدة من جهازك</span>
                    </button>
                    <p className="text-[10px] text-stone-400">
                      يدعم صور PNG, WebP, JPG مباشرة من جهازك أو موبايلك.
                    </p>
                  </div>
                </div>
              </div>

              {/* Descriptions */}
              <div>
                <label className="block font-bold text-stone-700 mb-1">الوصف بالعربية</label>
                <textarea
                  rows={2}
                  value={editingProduct.descriptionAr}
                  onChange={(e) => setEditingProduct({ ...editingProduct, descriptionAr: e.target.value })}
                  placeholder="وصف تسويقي للمنتج..."
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 outline-none focus:border-[#b4362d]"
                />
              </div>

              {/* Flagship Checkbox */}
              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="flagshipCheck"
                  checked={editingProduct.isFlagship || false}
                  onChange={(e) => setEditingProduct({ ...editingProduct, isFlagship: e.target.checked })}
                  className="w-4 h-4 accent-[#b4362d] rounded"
                />
                <label htmlFor="flagshipCheck" className="font-bold text-stone-800 cursor-pointer select-none">
                  تمييز هذا المنتج كمنتج رئيسي فاخر (Flagship Showcase)
                </label>
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 border-t border-stone-200 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingProduct(null)}
                  className="px-4 py-2 rounded-xl text-stone-600 hover:bg-stone-100 font-bold"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl bg-[#b4362d] text-white font-bold hover:brightness-110 shadow-md"
                >
                  حفظ المنتج
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Gallery Item Edit / Add Modal */}
      {editingGalleryItem && (
        <div className="fixed inset-0 z-[120] bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 overflow-y-auto">
          <div className="w-full max-w-2xl bg-white rounded-2xl border-2 border-[#d9b239] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            <div className="bg-[#fbf9f6] px-6 py-4 border-b border-stone-200 flex items-center justify-between">
              <h3 className="text-base font-black text-stone-900 font-cinzel">
                {isNewGalleryItem ? 'إضافة صورة جديدة للمعرض' : `تعديل: ${editingGalleryItem.titleAr}`}
              </h3>
              <button
                onClick={() => setEditingGalleryItem(null)}
                className="p-1 rounded text-stone-400 hover:text-stone-700 hover:bg-stone-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveGalleryItem} className="p-6 space-y-4 overflow-y-auto text-xs">
              {/* Category & Badge */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-stone-700 mb-1">قسم وتصنيف الصورة</label>
                  <select
                    value={editingGalleryItem.category}
                    onChange={(e) =>
                      setEditingGalleryItem({
                        ...editingGalleryItem,
                        category: e.target.value as 'trucks' | 'warehouses' | 'distribution',
                      })
                    }
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 outline-none focus:border-[#b4362d]"
                  >
                    <option value="trucks">شاحنات وأسطول النقل المبرد (Trucks)</option>
                    <option value="warehouses">المستودعات المركزية بسوق الكريمية (Warehouses)</option>
                    <option value="distribution">التوزيع السريع على الطرق الليبية (Distribution)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-stone-700 mb-1">الشارة التوثيقية (مثال: لوحة النقل)</label>
                  <input
                    type="text"
                    value={editingGalleryItem.badgeAr}
                    onChange={(e) =>
                      setEditingGalleryItem({ ...editingGalleryItem, badgeAr: e.target.value })
                    }
                    placeholder="مثال: لوحة الشاحنة: ليبيا 25-53205"
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 outline-none focus:border-[#b4362d]"
                  />
                </div>
              </div>

              {/* Image Preview & Upload */}
              <div>
                <label className="block font-bold text-stone-700 mb-1">صورة المخازن / الشاحنة</label>
                <div className="flex flex-col sm:flex-row items-center gap-4 bg-[#fbf9f6] p-3 rounded-xl border border-stone-200">
                  <div className="w-32 h-24 rounded-lg bg-stone-200 border border-stone-300 overflow-hidden shrink-0 flex items-center justify-center">
                    <img
                      src={editingGalleryItem.src}
                      alt="معاينة"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 space-y-2 w-full">
                    <input
                      type="file"
                      ref={galleryFileInputRef}
                      onChange={handleGalleryImageUpload}
                      accept="image/*"
                      className="hidden"
                    />
                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        onClick={() => galleryFileInputRef.current?.click()}
                        className="px-3.5 py-1.5 rounded-lg bg-[#b4362d] text-white font-bold text-xs hover:brightness-110 transition-colors flex items-center gap-1.5 shadow-sm"
                      >
                        <ImageIcon className="w-3.5 h-3.5 text-[#d9b239]" />
                        <span>رفع صورة من جهازك / هاتفك</span>
                      </button>
                    </div>
                    <div>
                      <input
                        type="text"
                        value={editingGalleryItem.src}
                        onChange={(e) =>
                          setEditingGalleryItem({
                            ...editingGalleryItem,
                            src: e.target.value,
                            fallbackSrc: e.target.value,
                          })
                        }
                        placeholder="أو أدخل مسار أو رابط الصورة المباشر..."
                        className="w-full px-3 py-1.5 rounded-lg border border-stone-300 font-mono text-[11px] outline-none focus:border-[#b4362d]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Titles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-stone-700 mb-1">عنوان الصورة (بالعربية)</label>
                  <input
                    type="text"
                    value={editingGalleryItem.titleAr}
                    onChange={(e) =>
                      setEditingGalleryItem({ ...editingGalleryItem, titleAr: e.target.value })
                    }
                    placeholder="مثال: تفريغ وشحن بون تون وشوكو بي آر"
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 outline-none focus:border-[#b4362d]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-stone-700 mb-1">العنوان (باللغة الإنجليزية)</label>
                  <input
                    type="text"
                    value={editingGalleryItem.titleEn}
                    onChange={(e) =>
                      setEditingGalleryItem({ ...editingGalleryItem, titleEn: e.target.value })
                    }
                    placeholder="e.g. Bakemate Freight Logistics Handling"
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 outline-none focus:border-[#b4362d]"
                  />
                </div>
              </div>

              {/* Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-stone-700 mb-1">الموقع الجغرافي (بالعربية)</label>
                  <input
                    type="text"
                    value={editingGalleryItem.locationAr}
                    onChange={(e) =>
                      setEditingGalleryItem({ ...editingGalleryItem, locationAr: e.target.value })
                    }
                    placeholder="مثال: الكريمية · شارع العسل والثانوية"
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 outline-none focus:border-[#b4362d]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-stone-700 mb-1">الموقع (بالإنجليزية)</label>
                  <input
                    type="text"
                    value={editingGalleryItem.locationEn}
                    onChange={(e) =>
                      setEditingGalleryItem({ ...editingGalleryItem, locationEn: e.target.value })
                    }
                    placeholder="e.g. Tripoli Karimiyah Wholesale District"
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 outline-none focus:border-[#b4362d]"
                  />
                </div>
              </div>

              {/* Descriptions */}
              <div>
                <label className="block font-bold text-stone-700 mb-1">الوصف التفصيلي (بالعربية)</label>
                <textarea
                  rows={2}
                  value={editingGalleryItem.descAr}
                  onChange={(e) =>
                    setEditingGalleryItem({ ...editingGalleryItem, descAr: e.target.value })
                  }
                  placeholder="اكتب نبذة توضيحية عن الشاحنة أو المستودع أو عملية الشحن..."
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 outline-none focus:border-[#b4362d]"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 border-t border-stone-200 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingGalleryItem(null)}
                  className="px-4 py-2 rounded-xl text-stone-600 hover:bg-stone-100 font-bold"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl bg-[#b4362d] text-white font-bold hover:brightness-110 shadow-md"
                >
                  حفظ صورة المعرض
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Brand Edit / Add Modal */}
      {editingBrand && (
        <div className="fixed inset-0 z-[120] bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 overflow-y-auto">
          <div className="w-full max-w-xl bg-white rounded-2xl border-2 border-[#d9b239] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            <div className="bg-[#fbf9f6] px-6 py-4 border-b border-stone-200 flex items-center justify-between">
              <h3 className="text-base font-black text-stone-900 font-cinzel">
                {isNewBrand ? 'إضافة علامة تجارية وشعار جديد' : `تعديل: ${editingBrand.name}`}
              </h3>
              <button
                onClick={() => setEditingBrand(null)}
                className="p-1 rounded text-stone-400 hover:text-stone-700 hover:bg-stone-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveBrand} className="p-6 space-y-4 overflow-y-auto text-xs">
              {/* Logo Upload & Preview */}
              <div>
                <label className="block font-bold text-stone-700 mb-1">شعار العلامة التجارية (Logo)</label>
                <div className="flex items-center gap-4 bg-[#fbf9f6] p-3 rounded-xl border border-stone-200">
                  <div
                    className={`w-24 h-20 rounded-lg border border-stone-300 p-2 flex items-center justify-center overflow-hidden shrink-0 ${
                      editingBrand.isDarkCard ? 'bg-black' : 'bg-white'
                    }`}
                  >
                    <img
                      src={editingBrand.logo}
                      alt="معاينة اللوجو"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <div className="flex-1 space-y-2">
                    <input
                      type="file"
                      ref={brandFileInputRef}
                      onChange={handleBrandLogoUpload}
                      accept="image/*"
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => brandFileInputRef.current?.click()}
                      className="px-3 py-1.5 rounded-lg bg-[#b4362d] text-white font-bold text-xs hover:brightness-110 transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <ImageIcon className="w-3.5 h-3.5 text-[#d9b239]" />
                      <span>رفع ملف الشعار من جهازك</span>
                    </button>
                    <input
                      type="text"
                      value={editingBrand.logo}
                      onChange={(e) => setEditingBrand({ ...editingBrand, logo: e.target.value })}
                      placeholder="أو أدخل مسار الشعار مباشرة..."
                      className="w-full px-3 py-1.5 rounded-lg border border-stone-300 font-mono text-[11px] outline-none focus:border-[#b4362d]"
                    />
                  </div>
                </div>
              </div>

              {/* Name & Key */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-stone-700 mb-1">اسم العلامة التجارية</label>
                  <input
                    type="text"
                    value={editingBrand.name}
                    onChange={(e) => setEditingBrand({ ...editingBrand, name: e.target.value })}
                    placeholder="مثال: MONALISA · موناليزا"
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 outline-none focus:border-[#b4362d]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-stone-700 mb-1">الرمز التعريفي (Brand Key)</label>
                  <input
                    type="text"
                    value={editingBrand.brandKey}
                    onChange={(e) => setEditingBrand({ ...editingBrand, brandKey: e.target.value })}
                    placeholder="MONALISA"
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 font-mono outline-none focus:border-[#b4362d]"
                  />
                </div>
              </div>

              {/* Badge & Color */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-stone-700 mb-1">الشارة الترويجية (Badge)</label>
                  <input
                    type="text"
                    value={editingBrand.badgeAr}
                    onChange={(e) => setEditingBrand({ ...editingBrand, badgeAr: e.target.value })}
                    placeholder="مثال: العلامة الرائدة الأكثر طلباً"
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 outline-none focus:border-[#b4362d]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-stone-700 mb-1">لون الشارة</label>
                  <select
                    value={editingBrand.badgeColor || 'emerald'}
                    onChange={(e) => setEditingBrand({ ...editingBrand, badgeColor: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 outline-none focus:border-[#b4362d]"
                  >
                    <option value="emerald">أخضر زمردي (Emerald)</option>
                    <option value="amber">ذهبي كهرماني (Amber)</option>
                    <option value="gold">ذهبي كلاسيكي (Gold)</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block font-bold text-stone-700 mb-1">الوصف والتعريف بالعلامة</label>
                <textarea
                  rows={2}
                  value={editingBrand.descAr}
                  onChange={(e) => setEditingBrand({ ...editingBrand, descAr: e.target.value })}
                  placeholder="مثال: تشكيلة الويفر الإيطالي، سويس رول الشوكولاتة، الكيك..."
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 outline-none focus:border-[#b4362d]"
                />
              </div>

              {/* Dark Card Style Checkbox */}
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="darkCardCheck"
                  checked={editingBrand.isDarkCard || false}
                  onChange={(e) => setEditingBrand({ ...editingBrand, isDarkCard: e.target.checked })}
                  className="w-4 h-4 accent-[#b4362d] rounded"
                />
                <label htmlFor="darkCardCheck" className="font-bold text-stone-800 cursor-pointer select-none">
                  عرض البطاقة بخلفية سوداء فاخرة (مثل علامة لوك مي LookMe)
                </label>
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 border-t border-stone-200 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingBrand(null)}
                  className="px-4 py-2 rounded-xl text-stone-600 hover:bg-stone-100 font-bold"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl bg-[#b4362d] text-white font-bold hover:brightness-110 shadow-md"
                >
                  حفظ العلامة التجارية
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
