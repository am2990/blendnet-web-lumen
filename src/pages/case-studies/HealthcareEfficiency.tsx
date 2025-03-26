
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import CaseStudyDetails from '@/components/CaseStudyDetails';

const HealthcareEfficiency: React.FC = () => {
  return (
    <MainLayout>
      <Hero
        title="Case Study"
        subtitle="Healthcare Efficiency through AI Automation"
        backgroundImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
      />

      <section className="py-16">
        <div className="section-container">
          <CaseStudyDetails
            id="healthcare-efficiency"
            title="Healthcare Efficiency through AI Automation"
            client="Regional Healthcare Provider"
            category="Healthcare AI"
            imageUrl="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
            summary="Reducing administrative workload by 40% and improving patient care with AI automation."
            challenge="The healthcare provider was facing significant challenges with administrative overhead, which was taking valuable time away from patient care. Staff were spending up to 30% of their time on documentation, scheduling, and other administrative tasks. Additionally, they struggled with coordination between departments and facilities, leading to delays in patient care."
            solution="We deployed our healthcare-specific AI automation platform that included natural language processing for documentation, intelligent scheduling, and an automated triage system. The platform seamlessly integrated with their electronic health record system, allowing for automated data entry and extraction. We also implemented a secure communication system for better cross-department coordination."
            results={[
              "40% reduction in administrative workload",
              "25% increase in patient face-time for healthcare professionals",
              "35% faster patient processing times",
              "18% improvement in interdepartmental communication efficiency",
              "Significant improvement in staff satisfaction and retention"
            ]}
            technologies={[
              "Natural Language Processing",
              "TensorFlow",
              "Azure Health Bot",
              "FHIR API Integration",
              "React Native",
              "Azure Cognitive Services"
            ]}
            testimonial={{
              quote: "The AI automation solution has been transformative for our organization. Our staff can now focus on what matters most – patient care – rather than paperwork and administrative tasks. The system is remarkably intuitive and has been readily adopted by our team.",
              author: "Dr. Michael Rodriguez",
              role: "Chief Medical Officer, Regional Healthcare Provider"
            }}
          />
        </div>
      </section>
    </MainLayout>
  );
};

export default HealthcareEfficiency;
