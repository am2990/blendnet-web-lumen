
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import CaseStudyDetails from '@/components/CaseStudyDetails';

const SupplyChainIntelligence: React.FC = () => {
  return (
    <MainLayout>
      <Hero
        title="Case Study"
        subtitle="Supply Chain Intelligence System"
        backgroundImage="https://images.unsplash.com/photo-1556740738-b6a63e27c4df"
      />

      <section className="py-16">
        <div className="section-container">
          <CaseStudyDetails
            id="supply-chain-intelligence"
            title="Supply Chain Intelligence System"
            client="Logistics Company"
            category="Supply Chain AI"
            imageUrl="https://images.unsplash.com/photo-1556740738-b6a63e27c4df"
            summary="Creating an intelligent supply chain system that improved delivery times by 23% and reduced costs."
            challenge="The logistics company was struggling with supply chain visibility, inefficient routing, and unpredictable disruptions. They had data from multiple systems that wasn't being integrated effectively, making it difficult to optimize operations. They needed a solution that could provide end-to-end visibility and predictive capabilities to anticipate and mitigate disruptions."
            solution="We developed a supply chain intelligence system that integrates data from all touchpoints in the supply chain, from suppliers to customers. The system uses machine learning to predict demand patterns, optimize inventory levels, and create dynamic routing plans. It includes real-time monitoring of external factors like weather and traffic, automatically adjusting routes and schedules to avoid delays. A digital twin of the entire supply chain enables scenario planning and risk assessment."
            results={[
              "23% improvement in on-time delivery",
              "19% reduction in transportation costs",
              "42% reduction in order fulfillment time",
              "27% decrease in inventory holding costs",
              "67% improvement in disruption response time"
            ]}
            technologies={[
              "Machine Learning",
              "Digital Twin",
              "IoT",
              "Blockchain",
              "Real-time Analytics",
              "Geospatial Analysis",
              "React"
            ]}
            testimonial={{
              quote: "The supply chain intelligence system has fundamentally changed how we operate. We now have visibility into every aspect of our supply chain and can predict issues before they impact our customers. The ROI has been substantial, both in direct cost savings and in improved customer satisfaction.",
              author: "Sarah Williams",
              role: "Chief Operations Officer, Logistics Company"
            }}
          />
        </div>
      </section>
    </MainLayout>
  );
};

export default SupplyChainIntelligence;
