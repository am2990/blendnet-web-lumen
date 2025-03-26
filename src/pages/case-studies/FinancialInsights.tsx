
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import CaseStudyDetails from '@/components/CaseStudyDetails';

const FinancialInsights: React.FC = () => {
  return (
    <MainLayout>
      <Hero
        title="Case Study"
        subtitle="Financial Insights Platform"
        backgroundImage="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11"
      />

      <section className="py-16">
        <div className="section-container">
          <CaseStudyDetails
            id="financial-insights"
            title="Financial Insights Platform"
            client="Investment Firm"
            category="Financial AI"
            imageUrl="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11"
            summary="Creating a next-generation insights platform that helped identify investment opportunities."
            challenge="The investment firm was overwhelmed by the volume of financial data and market information they needed to analyze to make investment decisions. Their existing tools weren't capable of processing unstructured data like news articles, social media sentiment, and earnings call transcripts. This meant they were missing valuable signals that could inform their investment strategy."
            solution="We created a custom financial insights platform that combines traditional financial data analysis with advanced natural language processing to analyze unstructured text data. The system processes news articles, social media posts, earnings call transcripts, and regulatory filings in real-time. It identifies trends, sentiment shifts, and potential investment opportunities that might be missed by traditional analysis methods."
            results={[
              "Identified 15 high-potential investment opportunities that were overlooked by traditional methods",
              "22% improvement in investment portfolio performance",
              "65% reduction in time spent on manual data analysis",
              "Ability to process and analyze over 50,000 news articles and social media posts daily",
              "Early detection of market shifts based on sentiment analysis"
            ]}
            technologies={[
              "BERT NLP Models",
              "Python",
              "TensorFlow",
              "AWS Comprehend",
              "React",
              "GraphQL",
              "TimescaleDB"
            ]}
            testimonial={{
              quote: "The financial insights platform has given us a competitive edge in a crowded market. The ability to quickly parse through massive amounts of unstructured data and extract meaningful insights has transformed our investment process.",
              author: "Alexander Chen",
              role: "Managing Director, Investment Firm"
            }}
          />
        </div>
      </section>
    </MainLayout>
  );
};

export default FinancialInsights;
