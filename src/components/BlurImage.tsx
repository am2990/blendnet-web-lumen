
import React, { useState, useEffect } from 'react';

interface BlurImageProps {
  src: string;
  alt: string;
  className?: string;
}

const BlurImage: React.FC<BlurImageProps> = ({ src, alt, className = '' }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <div className={`overflow-hidden ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className={`transition-all duration-500 ${isLoaded ? 'blur-0 scale-100' : 'blur-md scale-105'}`}
      />
    </div>
  );
};

export default BlurImage;
