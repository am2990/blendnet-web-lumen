
import React, { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import CaseStudyCard from '@/components/CaseStudyCard';

const CaseStudies: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
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
    {
      id: 'manufacturing-optimization',
      title: 'Manufacturing Process Optimization',
      client: 'Automotive Manufacturer',
      category: 'Industrial AI',
      imageUrl: 'https://images.unsplash.com/photo-1565108945639-76fde7919a68',
      summary: 'Using AI to optimize manufacturing processes, reducing waste by 32% and increasing throughput.',
    },
    {
      id: 'supply-chain-intelligence',
      title: 'Supply Chain Intelligence System',
      client: 'Logistics Company',
      category: 'Supply Chain AI',
      imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df',
      summary: 'Creating an intelligent supply chain system that improved delivery times by 23% and reduced costs.',
    },
    {
      id: 'customer-experience',
      title: 'Enhanced Customer Experience Platform',
      client: 'Telecommunications Provider',
      category: 'Customer AI',
      imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095',
      summary: 'Implementing an AI-powered customer experience platform that increased satisfaction scores by 45%.',
    },
  ];

  // Extract unique categories
  const categories = Array.from(new Set(caseStudies.map(study => study.category)));

  // Filter case studies based on active filter
  const filteredStudies = activeFilter 
    ? caseStudies.filter(study => study.category === activeFilter)
    : caseStudies;

  return (
    <MainLayout>
      <Hero
        title="Case Studies"
        subtitle="Discover how BlendNet has helped organizations transform their operations with AI."
        backgroundImage="https://images.unsplash.com/photo-1551434678-e076c223a692"
      />

      <section className="py-16">
        <div className="section-container">
          <div className="mb-8">
            <p className="text-gray-600 text-lg max-w-3xl mb-8">
              Our AI solutions have delivered measurable results across industries. 
              Explore our case studies to see how we've helped organizations like yours overcome challenges and achieve their goals.
            </p>
            
            {/* Category filter */}
            <div className="flex flex-wrap gap-3 mb-8">
              <button
                onClick={() => setActiveFilter(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === null 
                    ? 'bg-brand-primary text-white' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === category 
                      ? 'bg-brand-primary text-white' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <CaseStudyCard
                key={study.id}
                id={study.id}
                title={study.title}
                client={study.client}
                category={study.category}
                imageUrl={study.imageUrl}
                summary={study.summary}
              />
            ))}
          </div>
          
          {filteredStudies.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No case studies found for the selected category.</p>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default CaseStudies;
