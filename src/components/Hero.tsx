
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
  isHomepage?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink = '/',
  secondaryCtaText,
  secondaryCtaLink = '/',
  backgroundImage,
  isHomepage = false,
}) => {
  return (
    <div className={`relative ${isHomepage ? 'min-h-screen' : 'min-h-[50vh]'} flex items-center`}>
      {/* Background */}
      {backgroundImage ? (
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/90 to-brand-primary/70" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary/80" />
      )}
      
      {/* Content */}
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className={`text-white ${isHomepage ? 'text-display-large' : ''} font-bold animate-slide-up`}>
            {title}
          </h1>
          <p className="mt-6 text-white/90 text-xl animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
            {subtitle}
          </p>
          
          {(ctaText || secondaryCtaText) && (
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
              {ctaText && (
                <Button asChild className="bg-white text-brand-primary hover:bg-white/90">
                  <Link to={ctaLink}>
                    {ctaText}
                  </Link>
                </Button>
              )}
              
              {secondaryCtaText && (
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to={secondaryCtaLink}>
                    {secondaryCtaText}
                  </Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Triangle Shape Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          className="relative block w-full h-16 md:h-24"
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            className="fill-current text-white"
            d="M1200 120L0 16.48V0h1200v120z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
