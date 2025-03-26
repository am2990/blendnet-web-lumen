
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import CaseStudyDetails from '@/components/CaseStudyDetails';

const CustomerExperience: React.FC = () => {
  return (
    <MainLayout>
      <Hero
        title="Case Study"
        subtitle="Enhanced Customer Experience Platform"
        backgroundImage="https://images.unsplash.com/photo-1573164713988-8665fc963095"
      />

      <section className="py-16">
        <div className="section-container">
          <CaseStudyDetails
            id="customer-experience"
            title="Enhanced Customer Experience Platform"
            client="Telecommunications Provider"
            category="Customer AI"
            imageUrl="https://images.unsplash.com/photo-1573164713988-8665fc963095"
            summary="Implementing an AI-powered customer experience platform that increased satisfaction scores by 45%."
            challenge="The telecommunications provider was facing increasing customer churn and declining satisfaction scores. Their customer service operations were fragmented across multiple channels, with inconsistent experiences and long resolution times. They lacked a unified view of customer interactions and couldn't effectively personalize service or anticipate customer needs."
            solution="We created a comprehensive customer experience platform powered by AI. The system unifies all customer interaction channels (phone, chat, email, social media) and provides agents with real-time recommendations based on customer history and predictive analytics. It includes sentiment analysis to gauge customer emotions, automatic categorization of issues, and proactive outreach for potential problems detected in network data. We also implemented a self-service portal with an advanced conversational AI assistant."
            results={[
              "45% increase in customer satisfaction scores",
              "32% reduction in customer churn",
              "27% decrease in average handling time",
              "38% improvement in first-contact resolution rate",
              "52% increase in self-service utilization",
              "Significant reduction in support costs while improving service quality"
            ]}
            technologies={[
              "Natural Language Processing",
              "Sentiment Analysis",
              "Machine Learning",
              "Conversational AI",
              "Omnichannel Integration",
              "Real-time Analytics",
              "React"
            ]}
            testimonial={{
              quote: "The customer experience platform has completely transformed our relationship with our customers. We're now able to provide personalized, proactive service that anticipates their needs. The impact on our business metrics has been remarkable – higher satisfaction, lower churn, and actually reducing costs while providing better service.",
              author: "David Patel",
              role: "Customer Experience Director, Telecommunications Provider"
            }}
          />
        </div>
      </section>
    </MainLayout>
  );
};

export default CustomerExperience;
