
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
    <div className={`relative ${isHomepage ? 'min-h-screen' : 'min-h-[50vh]'} flex items-center overflow-hidden bg-gradient-to-br from-white to-brand-accent/5`}>
      {/* Background Grid Animation */}
      <div className="absolute inset-0 z-0">
        <div className="grid-background"></div>
      </div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 z-0 opacity-60">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      
      {/* Abstract geometric shapes */}
      <div className="absolute right-0 bottom-0 z-0 opacity-20">
        <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="geometric-shape">
          <path fill="var(--brand-primary)" d="M49.2,-61.6C62.9,-51.3,72.7,-34.7,76.1,-16.8C79.5,1.1,76.5,20.4,67.1,35.1C57.7,49.8,41.8,59.9,24.4,66.2C7,72.6,-11.8,75.2,-29.6,70.3C-47.5,65.4,-64.4,53.1,-72.7,36.2C-81,19.3,-80.6,-2.2,-73.1,-19.3C-65.6,-36.4,-51,-48.9,-36.1,-58.7C-21.1,-68.4,-5.9,-75.4,8.6,-85.4C23.2,-95.4,35.6,-71.8,49.2,-61.6Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="absolute left-5 bottom-5 z-0 opacity-20">
        <svg width="300" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="geometric-shape-alt">
          <path fill="var(--brand-secondary)" d="M45.3,-53.4C58.9,-40.7,70.3,-25.3,73.8,-7.8C77.3,9.8,72.8,29.4,61.5,43.2C50.2,57,32,64.8,13.3,67.5C-5.5,70.2,-24.8,67.7,-39.1,58.1C-53.4,48.5,-62.7,31.8,-68.4,12.6C-74.1,-6.7,-76.2,-28.5,-66.9,-43.9C-57.5,-59.2,-36.7,-68,-17.1,-68.9C2.6,-69.9,31.7,-66.1,45.3,-53.4Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      {/* Tech images in background */}
      <div className="absolute z-0 right-10 top-1/4 opacity-40 transform rotate-6">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
          alt="Tech Professional" 
          className="w-72 h-auto rounded-lg shadow-xl tech-image"
        />
      </div>
      
      <div className="absolute z-0 left-10 bottom-20 opacity-30 transform -rotate-3">
        <img 
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
          alt="Modern Technology" 
          className="w-64 h-auto rounded-lg shadow-xl tech-image-alt"
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

      <style dangerouslySetInnerHTML={{ __html: `
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
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.9;
          }
        }
        
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .grid-background {
          position: absolute;
          width: 200%;
          height: 200%;
          background-image: linear-gradient(rgba(65, 132, 247, 0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(65, 132, 247, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: pulse 15s ease-in-out infinite;
        }
        
        .particle {
          position: absolute;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: linear-gradient(145deg, rgba(65, 132, 247, 0.4), rgba(65, 84, 247, 0.1));
          animation: float 15s infinite;
          opacity: 0.3;
        }
        
        .particle:nth-child(1) {
          top: 20%;
          left: 10%;
          width: 80px;
          height: 80px;
          animation-duration: 22s;
          animation-delay: 0s;
        }
        
        .particle:nth-child(2) {
          top: 70%;
          left: 30%;
          width: 60px;
          height: 60px;
          animation-duration: 18s;
          animation-delay: 1s;
        }
        
        .particle:nth-child(3) {
          top: 40%;
          right: 15%;
          width: 70px;
          height: 70px;
          animation-duration: 25s;
          animation-delay: 2s;
        }
        
        .particle:nth-child(4) {
          top: 80%;
          right: 25%;
          width: 50px;
          height: 50px;
          animation-duration: 20s;
          animation-delay: 0.5s;
        }
        
        .particle:nth-child(5) {
          top: 10%;
          right: 40%;
          width: 90px;
          height: 90px;
          animation-duration: 24s;
          animation-delay: 1.5s;
        }
        
        .geometric-shape {
          animation: rotate 30s linear infinite;
        }
        
        .geometric-shape-alt {
          animation: rotate 40s linear infinite reverse;
        }
        
        .tech-image {
          animation: float 20s ease-in-out infinite;
          filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.1));
        }
        
        .tech-image-alt {
          animation: float 25s ease-in-out infinite;
          animation-delay: 5s;
          filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.1));
        }
      `}} />
    </div>
  );
};

export default Hero;
