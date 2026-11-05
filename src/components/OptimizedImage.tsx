import React, { useState } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
  fallbackIcon?: React.ReactNode;
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
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative flex items-center justify-center w-full h-full overflow-hidden ${containerClassName}`}>
      {/* Shimmer Skeleton Placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-stone-100/80 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-stone-200 border-t-[#b4362d] animate-spin opacity-40" />
        </div>
      )}

      {/* Actual Image */}
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding={decoding}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            // Try PNG fallback if webp failed or vice versa
            setHasError(true);
          }}
          className={`${className} transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
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
