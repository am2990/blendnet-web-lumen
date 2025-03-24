
import React from 'react';
import { ArrowRight, Brain, PieChart, Server, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import CaseStudyCard from '@/components/CaseStudyCard';
import ContactForm from '@/components/ContactForm';
import BlurImage from '@/components/BlurImage';

const Home: React.FC = () => {
  const services = [
    {
      title: 'AI Consulting',
      description: 'Strategic guidance on implementing AI solutions that drive business value and innovation.',
      icon: <Brain size={40} />,
      link: '/services/ai-consulting',
    },
    {
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with our advanced analytics solutions.',
      icon: <PieChart size={40} />,
      link: '/services/data-analytics',
    },
    {
      title: 'ML Engineering',
      description: 'End-to-end machine learning solutions from concept to deployment and monitoring.',
      icon: <Server size={40} />,
      link: '/services/ml-engineering',
    },
    {
      title: 'AI Security',
      description: 'Protect your AI systems and data with our comprehensive security solutions.',
      icon: <Shield size={40} />,
      link: '/services/ai-security',
    },
  ];

  const caseStudies = [
    {
      id: 'retail-transformation',
      title: 'Retail Transformation with Predictive Analytics',
      client: 'Global Retail Chain',
      category: 'Predictive Analytics',
      imageUrl: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0',
      summary: 'How a global retail chain increased sales by 28% using our predictive analytics platform.',
    },
    {
      id: 'healthcare-efficiency',
      title: 'Healthcare Efficiency through AI Automation',
      client: 'Regional Healthcare Provider',
      category: 'Healthcare AI',
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
      summary: 'Reducing administrative workload by 40% and improving patient care with AI automation.',
    },
    {
      id: 'financial-insights',
      title: 'Financial Insights Platform',
      client: 'Investment Firm',
      category: 'Financial AI',
      imageUrl: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11',
      summary: 'Creating a next-generation insights platform that helped identify investment opportunities.',
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <Hero
        title="Transforming Business with Intelligent AI Solutions"
        subtitle="We help organizations harness the power of artificial intelligence to solve complex problems and drive innovation."
        ctaText="Explore Solutions"
        ctaLink="/#solutions"
        secondaryCtaText="Contact Us"
        secondaryCtaLink="/contact"
        isHomepage
      />

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg">
              Comprehensive AI services designed to deliver tangible business results and competitive advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About CT Nova Section */}
      <section className="py-20 bg-brand-accent">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="mb-4">Introducing CT Nova</h2>
              <p className="text-gray-600 text-lg mb-6">
                An AI-enhanced learning platform that helps organizations deliver training at scale—fast. 
                Built on the foundation of Microsoft Community Training and running natively on Azure.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <div className="text-brand-secondary mt-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <span>Deploy seamlessly into your Azure subscription</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-brand-secondary mt-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <span>Flexible and modern learning experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-brand-secondary mt-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <span>Enterprise-grade learning for any organization</span>
                </li>
              </ul>
              <Link to="/ct-nova">
                <Button className="bg-brand-primary hover:bg-brand-primary/90">
                  Learn More about CT Nova
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <BlurImage
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                  alt="CT Nova Learning Platform"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Case Studies</h2>
            <p className="text-gray-600 text-lg">
              See how we've helped organizations across industries leverage AI to achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard
                key={caseStudy.id}
                id={caseStudy.id}
                title={caseStudy.title}
                client={caseStudy.client}
                category={caseStudy.category}
                imageUrl={caseStudy.imageUrl}
                summary={caseStudy.summary}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/case-studies">
              <Button variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
                View All Case Studies
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-brand-accent">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="mb-4">Ready to Transform Your Business?</h2>
              <p className="text-gray-600 text-lg mb-6">
                Let's discuss how our AI solutions can help you achieve your business goals. 
                Fill out the form and our team will get back to you shortly.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-brand-primary/10 p-3 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:contact@blendnet.ai" className="text-brand-primary hover:text-brand-secondary transition-colors">
                      contact@blendnet.ai
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-brand-primary/10 p-3 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 16.92V19.92C21.0011 20.1985 20.9441 20.4741 20.8325 20.7293C20.7209 20.9845 20.5573 21.2136 20.3521 21.4019C20.1468 21.5902 19.9046 21.7335 19.6407 21.8227C19.3769 21.9119 19.0974 21.9451 18.82 21.92C15.7428 21.5856 12.787 20.5342 10.19 18.85C7.77383 17.3147 5.72533 15.2662 4.19 12.85C2.5 10.2412 1.44818 7.271 1.12 4.18C1.09501 3.90347 1.12788 3.62476 1.21649 3.36163C1.30511 3.09849 1.44756 2.85669 1.63476 2.65163C1.82196 2.44656 2.0498 2.28271 2.30379 2.1705C2.55777 2.05829 2.83233 2.00024 3.11 2H6.11C6.59534 1.9952 7.06717 2.16705 7.43286 2.48351C7.79855 2.79996 8.03169 3.23942 8.08 3.72C8.17465 4.68004 8.37145 5.62282 8.67 6.53C8.77495 6.88789 8.77266 7.27096 8.66335 7.62798C8.55403 7.98499 8.34226 8.29562 8.05 8.52L6.8 9.77C8.22626 12.2706 10.2794 14.3237 12.78 15.75L14.03 14.5C14.2544 14.2077 14.565 13.996 14.922 13.8866C15.279 13.7773 15.6621 13.775 16.02 13.88C16.9272 14.1785 17.87 14.3753 18.83 14.47C19.3141 14.5187 19.7564 14.754 20.0748 15.1224C20.3932 15.4908 20.5653 15.9659 20.56 16.45L21 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:+15551234567" className="text-brand-primary hover:text-brand-secondary transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
