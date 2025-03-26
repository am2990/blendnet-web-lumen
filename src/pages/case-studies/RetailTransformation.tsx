
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import CaseStudyDetails from '@/components/CaseStudyDetails';

const RetailTransformation: React.FC = () => {
  return (
    <MainLayout>
      <Hero
        title="Case Study"
        subtitle="Retail Transformation with Predictive Analytics"
        backgroundImage="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0"
      />

      <section className="py-16">
        <div className="section-container">
          <CaseStudyDetails
            id="retail-transformation"
            title="Retail Transformation with Predictive Analytics"
            client="Global Retail Chain"
            category="Predictive Analytics"
            imageUrl="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0"
            summary="How a global retail chain increased sales by 28% using our predictive analytics platform."
            challenge="This global retail chain with over 500 locations was struggling to optimize inventory and personalize marketing. Their legacy systems couldn't process the vast amount of customer data they were collecting, resulting in overstocking, stockouts, and generic marketing campaigns that weren't resonating with customers."
            solution="We implemented our AI-driven predictive analytics platform that processed historical sales data, customer behavior, and external factors like weather and local events. The system provided inventory forecasting at the store level and created customer micro-segments for targeted marketing. Our solution integrated with their existing systems through APIs, minimizing disruption while providing powerful new capabilities."
            results={[
              "28% increase in overall sales within 6 months",
              "42% reduction in overstocking costs",
              "17% improvement in marketing campaign ROI",
              "31% reduction in stockouts",
              "Improved customer satisfaction scores by 22%"
            ]}
            technologies={[
              "TensorFlow",
              "Azure Machine Learning",
              "Power BI",
              "Python",
              "React",
              "PostgreSQL"
            ]}
            testimonial={{
              quote: "BlendNet's predictive analytics platform has completely transformed our inventory management and marketing approach. The ROI has been remarkable, and we're now expanding the solution to all our global locations.",
              author: "Jennifer Liu",
              role: "Chief Digital Officer, Global Retail Chain"
            }}
          />
        </div>
      </section>
    </MainLayout>
  );
};

export default RetailTransformation;
