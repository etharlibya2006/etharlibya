import React, { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
  fallbackIcon?: React.ReactNode;
}

function normalizeImagePath(raw?: string): string {
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

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  loading = 'lazy',
  decoding = 'async',
  fallbackIcon,
  ...props
}) => {
  const normalized = normalizeImagePath(src);
  const [currentSrc, setCurrentSrc] = useState<string>(normalized);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const fallbackStepRef = useRef<number>(0);

  useEffect(() => {
    setCurrentSrc(normalized);
    setHasError(false);
    fallbackStepRef.current = 0;

    // If image is already cached/complete in browser, mark loaded immediately so opacity never gets stuck at 0
    const imgEl = imgRef.current;
    if (imgEl && imgEl.complete && imgEl.naturalWidth > 0) {
      setIsLoaded(true);
    } else {
      setIsLoaded(false);
    }
  }, [normalized]);

  const handleError = () => {
    const step = fallbackStepRef.current;
    if (step === 0 && currentSrc.endsWith('.webp')) {
      fallbackStepRef.current = 1;
      setCurrentSrc(currentSrc.replace(/\.webp$/, '.png'));
      return;
    }
    if (step <= 1 && (currentSrc.endsWith('.webp') || currentSrc.endsWith('.png'))) {
      fallbackStepRef.current = 2;
      setCurrentSrc(currentSrc.replace(/\.(webp|png)$/, '.jpg'));
      return;
    }
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div className={`relative flex items-center justify-center w-full h-full overflow-hidden ${containerClassName}`}>
      {/* Subtle Shimmer Placeholder only while network fetch is actively pending */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-stone-100/70 animate-pulse flex items-center justify-center pointer-events-none">
          <div className="w-7 h-7 rounded-full border-2 border-stone-200 border-t-[#b4362d] animate-spin opacity-40" />
        </div>
      )}

      {/* Actual Image */}
      {!hasError && currentSrc ? (
        <img
          ref={imgRef}
          src={currentSrc}
          alt={alt}
          loading={loading}
          decoding={decoding}
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
          className={`${className} transition-opacity duration-200 opacity-100`}
          {...props}
        />
      ) : (
        <div className="flex flex-col items-center justify-center text-stone-300 text-xs p-2 text-center">
          {fallbackIcon || <span className="font-mono text-[10px] text-stone-400">إيثار ليبيا</span>}
        </div>
      )}
    </div>
  );
};
