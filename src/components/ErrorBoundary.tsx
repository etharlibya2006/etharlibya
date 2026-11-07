import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error caught by ErrorBoundary:', error, errorInfo);
    this.setState({ errorInfo });
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleResetSafe = () => {
    try {
      // Clear potentially corrupted local state if any
      sessionStorage.clear();
      window.location.href = window.location.pathname;
    } catch {
      window.location.reload();
    }
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div
          dir="rtl"
          className="min-h-screen bg-[#fbf9f6] flex items-center justify-center p-6 text-stone-900 font-sans"
        >
          <div className="max-w-lg w-full bg-white rounded-3xl border-2 border-[#b4362d] shadow-2xl p-8 text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-50 border-2 border-[#d9b239] flex items-center justify-center text-[#b4362d] shadow-md">
              <AlertTriangle className="w-8 h-8 stroke-[2.2]" />
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl font-black text-stone-900 font-cinzel">
                شركة إيثار ليبيا للاستيراد وتوزيع المواد الغذائية
              </h1>
              <p className="text-sm font-bold text-[#b4362d]">
                تم حماية الموقع تلقائياً من الشاشة البيضاء
              </p>
              <p className="text-xs text-stone-600 leading-relaxed">
                واجه المتصفح تعارضاً مؤقتاً أثناء معالجة البيانات، وتم تفعيل نظام الحماية التلقائي لمنع توقف الموقع. يمكنك المتابعة بشكل فوري عبر الخيارات أدناه:
              </p>
            </div>

            {this.state.error && (
              <div className="p-3 bg-stone-100 rounded-xl text-left text-[11px] font-mono text-stone-600 overflow-x-auto max-h-24">
                {this.state.error.toString()}
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={this.handleReload}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#b4362d] text-white text-xs font-bold shadow hover:bg-[#8e241c] transition-all"
              >
                <RefreshCw className="w-4 h-4" />
                <span>إعادة تحميل الصفحة</span>
              </button>
              <button
                onClick={this.handleResetSafe}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-stone-200 text-stone-800 text-xs font-bold hover:bg-stone-300 transition-all"
              >
                <Home className="w-4 h-4" />
                <span>العودة للواجهة الرئيسية</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
