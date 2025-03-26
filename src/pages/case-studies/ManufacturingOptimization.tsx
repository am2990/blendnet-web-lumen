
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import CaseStudyDetails from '@/components/CaseStudyDetails';

const ManufacturingOptimization: React.FC = () => {
  return (
    <MainLayout>
      <Hero
        title="Case Study"
        subtitle="Manufacturing Process Optimization"
        backgroundImage="https://images.unsplash.com/photo-1565108945639-76fde7919a68"
      />

      <section className="py-16">
        <div className="section-container">
          <CaseStudyDetails
            id="manufacturing-optimization"
            title="Manufacturing Process Optimization"
            client="Automotive Manufacturer"
            category="Industrial AI"
            imageUrl="https://images.unsplash.com/photo-1565108945639-76fde7919a68"
            summary="Using AI to optimize manufacturing processes, reducing waste by 32% and increasing throughput."
            challenge="The automotive manufacturer was facing significant challenges with production efficiency, quality control, and waste reduction. Their traditional monitoring systems couldn't detect subtle patterns that led to defects, and their production scheduling wasn't optimized for changing demand patterns. They needed a solution that could improve their manufacturing processes without requiring a complete overhaul of their existing infrastructure."
            solution="We implemented our industrial AI platform that combines IoT sensors with machine learning models to optimize manufacturing processes in real-time. The system continuously monitors production parameters, predicts potential issues before they cause defects, and dynamically adjusts production schedules based on demand forecasts. We integrated predictive maintenance capabilities to reduce downtime and implemented computer vision for automated quality inspection."
            results={[
              "32% reduction in material waste",
              "27% increase in production throughput",
              "43% decrease in quality-related issues",
              "18% reduction in energy consumption",
              "61% reduction in unplanned downtime"
            ]}
            technologies={[
              "Industrial IoT",
              "TensorFlow",
              "Computer Vision",
              "Azure IoT Hub",
              "Digital Twin",
              "Python",
              "Time Series Analysis"
            ]}
            testimonial={{
              quote: "The manufacturing optimization platform has delivered results far beyond our expectations. Not only have we seen dramatic improvements in efficiency and quality, but the system continues to get smarter over time, identifying new optimization opportunities we hadn't even considered.",
              author: "Robert Yamamoto",
              role: "VP of Manufacturing, Automotive Manufacturer"
            }}
          />
        </div>
      </section>
    </MainLayout>
  );
};

export default ManufacturingOptimization;
