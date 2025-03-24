
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import BlurImage from '@/components/BlurImage';

const LMS: React.FC = () => {
  const features = [
    "Customizable learning paths for different user roles and skill levels",
    "Rich multimedia content support including videos, interactive quizzes, and simulations",
    "Detailed analytics and reporting on user progress and engagement",
    "AI-powered content recommendations based on user performance",
    "Integration with Microsoft Teams, Zoom, and other collaboration tools",
    "Mobile-friendly design for learning on the go",
    "Gamification features to increase learner engagement",
    "Enterprise-grade security and compliance features"
  ];

  return (
    <MainLayout>
      <Hero
        title="Learning Management System"
        subtitle="A comprehensive solution for educational institutions and corporate training needs."
        ctaText="Request Demo"
        ctaLink="/contact"
        secondaryCtaText="Learn More"
        secondaryCtaLink="#features"
      />

      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Transform How Your Organization Learns</h2>
              <p className="text-gray-600 mb-6">
                Our Learning Management System (LMS) is built on modern cloud architecture to provide a 
                scalable, reliable, and secure platform for delivering training and educational content 
                to your users.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you're a university looking to enhance your online learning offerings, or a 
                corporation seeking to upskill your workforce, our LMS provides the tools and features 
                you need to create engaging learning experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-brand-primary hover:bg-brand-primary/90">
                  <Link to="/contact">Schedule a Demo</Link>
                </Button>
                <Button asChild variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary/10">
                  <Link to="/case-studies">View Case Studies</Link>
                </Button>
              </div>
            </div>
            <div>
              <BlurImage 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Learning Management System"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our LMS combines powerful functionality with ease of use to create an exceptional learning experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-brand-primary flex-shrink-0 mt-1" size={20} />
                  <p>{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="section-container">
          <div className="bg-brand-primary/5 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
                <p className="text-gray-600 mb-6">
                  Join hundreds of organizations that have transformed their learning programs with our LMS platform.
                </p>
                <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary/90">
                  <Link to="/contact">Contact Us Today</Link>
                </Button>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
                    <BlurImage 
                      src="https://images.unsplash.com/photo-1531482615713-2afd69097998"
                      alt="LMS Dashboard"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
                    <BlurImage 
                      src="https://images.unsplash.com/photo-1542744094-3a31f272c490"
                      alt="Mobile Learning"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
                    <BlurImage 
                      src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173"
                      alt="Collaborative Learning"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
                    <BlurImage 
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
                      alt="Analytics Dashboard"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default LMS;
