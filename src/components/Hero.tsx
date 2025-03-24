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
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={`relative ${isHomepage ? 'min-h-screen' : 'min-h-[50vh]'} flex items-center overflow-hidden bg-gradient-to-br from-brand-primary/5 to-brand-accent/5`}>
      {/* Animated Wave Background */}
      <div className="absolute inset-0 z-0">
        {/* First wave */}
        <div className="absolute inset-0">
          <svg 
            className="absolute w-full h-full" 
            viewBox="0 0 1440 320" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ 
              animation: 'wave 35s linear infinite',
              opacity: 0.15
            }}
          >
            <path 
              fill="var(--brand-primary)"
              d="M0,160L34.3,165.3C68.6,171,137,181,206,165.3C274.3,149,343,107,411,96C480,85,549,107,617,128C685.7,149,754,171,823,165.3C891.4,160,960,128,1029,117.3C1097.1,107,1166,117,1234,122.7C1302.9,128,1371,128,1406,128L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Second wave */}
        <div className="absolute inset-0">
          <svg 
            className="absolute w-full h-full" 
            viewBox="0 0 1440 320" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ 
              animation: 'wave 25s linear infinite',
              opacity: 0.1
            }}
          >
            <path 
              fill="var(--brand-accent)"
              d="M0,224L34.3,213.3C68.6,203,137,181,206,186.7C274.3,192,343,224,411,224C480,224,549,192,617,181.3C685.7,171,754,181,823,192C891.4,203,960,213,1029,213.3C1097.1,213,1166,203,1234,186.7C1302.9,171,1371,149,1406,138.7L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Third wave */}
        <div className="absolute inset-0">
          <svg 
            className="absolute w-full h-full" 
            viewBox="0 0 1440 320" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ 
              animation: 'wave 30s linear infinite',
              opacity: 0.05
            }}
          >
            <path 
              fill="var(--brand-primary)"
              d="M0,96L34.3,106.7C68.6,117,137,139,206,149.3C274.3,160,343,160,411,144C480,128,549,96,617,80C685.7,64,754,64,823,80C891.4,96,960,128,1029,144C1097.1,160,1166,160,1234,149.3C1302.9,139,1371,117,1406,106.7L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className={`text-brand-primary ${isHomepage ? 'text-display-large' : ''} font-bold animate-slide-up`}>
            {title}
          </h1>
          <p className="mt-6 text-gray-600 text-xl animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
            {subtitle}
          </p>
          
          {(ctaText || secondaryCtaText) && (
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
              {ctaText && (
                <Button asChild className="bg-brand-primary hover:bg-brand-primary/90">
                  <a href={ctaLink} onClick={handleScroll}>
                    {ctaText}
                  </a>
                </Button>
              )}
              
              {secondaryCtaText && (
                <Button asChild variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary/10">
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

      <style jsx>{`
        @keyframes wave {
          0% {
            transform: translateX(0) scaleY(1);
          }
          50% {
            transform: translateX(-50%) scaleY(0.95);
          }
          100% {
            transform: translateX(-100%) scaleY(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
