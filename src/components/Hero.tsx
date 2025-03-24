
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
    <div className={`relative ${isHomepage ? 'min-h-screen' : 'min-h-[50vh]'} flex items-center overflow-hidden`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated wave pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg 
            className="w-full h-full animate-[pulse_15s_ease-in-out_infinite]" 
            viewBox="0 0 1440 320" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              fill="#4A86E8" 
              fillOpacity="1" 
              d="M0,192L48,186.7C96,181,192,171,288,154.7C384,139,480,117,576,128C672,139,768,181,864,197.3C960,213,1056,203,1152,170.7C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        
        <div className="absolute inset-0 opacity-10 -translate-y-40 -scale-x-100">
          <svg 
            className="w-full h-full animate-[pulse_18s_ease-in-out_infinite_reverse]" 
            viewBox="0 0 1440 320" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              fill="#61D095" 
              fillOpacity="1" 
              d="M0,192L80,176C160,160,320,128,480,117.3C640,107,800,117,960,138.7C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
        
        {/* AI Network Visualization */}
        <div className="absolute inset-0">
          {/* Network nodes */}
          <div className="hidden lg:block">
            {Array.from({ length: 8 }).map((_, i) => (
              <div 
                key={i}
                className="absolute w-2 h-2 bg-brand-primary rounded-full"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${10 + Math.random() * 80}%`,
                  opacity: 0.6 + Math.random() * 0.4,
                  animation: `pulse-grow ${3 + Math.random() * 4}s infinite alternate`
                }}
              />
            ))}
            
            {/* Neural network lines */}
            <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
              <line x1="20%" y1="30%" x2="40%" y2="50%" stroke="#4A86E8" strokeWidth="1" />
              <line x1="40%" y1="50%" x2="60%" y2="30%" stroke="#4A86E8" strokeWidth="1" />
              <line x1="60%" y1="30%" x2="80%" y2="40%" stroke="#4A86E8" strokeWidth="1" />
              <line x1="30%" y1="60%" x2="50%" y2="70%" stroke="#61D095" strokeWidth="1" />
              <line x1="50%" y1="70%" x2="70%" y2="60%" stroke="#61D095" strokeWidth="1" />
              <line x1="40%" y1="50%" x2="50%" y2="70%" stroke="#4A86E8" strokeWidth="1" />
              <line x1="60%" y1="30%" x2="70%" y2="60%" stroke="#4A86E8" strokeWidth="1" />
            </svg>
            
            {/* Floating data visualization elements */}
            <div className="absolute top-1/4 right-1/4 w-24 h-16 opacity-10 animate-[float_8s_ease-in-out_infinite]">
              <svg viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="15" height="40" fill="#4A86E8" />
                <rect x="30" y="20" width="15" height="30" fill="#4A86E8" />
                <rect x="50" y="15" width="15" height="35" fill="#4A86E8" />
                <rect x="70" y="5" width="15" height="45" fill="#4A86E8" />
              </svg>
            </div>
            
            <div className="absolute bottom-1/3 left-1/3 w-32 h-32 opacity-10 animate-[float_10s_ease-in-out_infinite_alternate]">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#61D095" strokeWidth="2" />
                <path d="M20,50 Q50,20 80,50 Q50,80 20,50" fill="none" stroke="#61D095" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Background */}
      {backgroundImage ? (
        <div className="absolute inset-0 overflow-hidden z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-white/70" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-brand-accent to-white z-0" />
      )}
      
      {/* AI/Technology Visual Elements */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-20 hidden lg:block z-0">
        <svg width="700" height="700" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="#4A86E8" strokeWidth="0.5" fill="none" className="animate-[spin_40s_linear_infinite]" />
          <circle cx="50" cy="50" r="35" stroke="#61D095" strokeWidth="0.5" fill="none" className="animate-[spin_30s_linear_infinite_reverse]" />
          <circle cx="50" cy="50" r="30" stroke="#4A86E8" strokeWidth="0.5" fill="none" className="animate-[spin_20s_linear_infinite]" />
          <circle cx="50" cy="50" r="25" stroke="#61D095" strokeWidth="0.5" fill="none" className="animate-[spin_15s_linear_infinite_reverse]" />
          <circle cx="50" cy="50" r="20" stroke="#4A86E8" strokeWidth="0.5" fill="none" className="animate-[spin_10s_linear_infinite]" />
        </svg>
      </div>
      
      {/* Showcase Images - Moved from top-left to bottom-right and mid-right */}
      <div className="absolute -bottom-10 -right-20 w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl hidden lg:block opacity-60 transform rotate-12 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
          alt="AI Technology" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-1/3 right-10 w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl hidden lg:block opacity-50 z-0">
        <img 
          src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb" 
          alt="Cloud Deployment" 
          className="w-full h-full object-cover"
        />
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
                  <Link to={ctaLink}>
                    {ctaText}
                  </Link>
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
    </div>
  );
};

export default Hero;
