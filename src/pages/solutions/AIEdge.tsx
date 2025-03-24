
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import BlurImage from '@/components/BlurImage';
import { CheckCircle, Server, Zap, Shield, BarChart } from 'lucide-react';

const AIEdge: React.FC = () => {
  const benefits = [
    {
      title: "Reduced Latency",
      description: "Process data locally for real-time insights without cloud roundtrips",
      icon: <Zap className="w-10 h-10 text-brand-primary" />
    },
    {
      title: "Enhanced Privacy",
      description: "Keep sensitive data on-device to meet compliance requirements",
      icon: <Shield className="w-10 h-10 text-brand-primary" />
    },
    {
      title: "Bandwidth Efficiency",
      description: "Only send relevant processed data to the cloud, reducing costs",
      icon: <Server className="w-10 h-10 text-brand-primary" />
    },
    {
      title: "Offline Capability",
      description: "Continue operations even when network connectivity is limited",
      icon: <BarChart className="w-10 h-10 text-brand-primary" />
    }
  ];

  return (
    <MainLayout>
      <Hero
        title="AI at the Edge"
        subtitle="Deploy powerful AI capabilities at the network edge for real-time processing and decision making."
        ctaText="Request Demo"
        ctaLink="/contact"
        secondaryCtaText="Learn More"
        secondaryCtaLink="#benefits"
      />

      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Intelligence Where It Matters Most</h2>
              <p className="text-gray-600 mb-6">
                Our Edge AI solutions bring machine learning capabilities directly to your edge devices, 
                enabling real-time analysis and decision-making without relying on cloud connectivity.
              </p>
              <p className="text-gray-600 mb-6">
                From industrial IoT applications to retail analytics and smart city infrastructure, 
                our Edge AI platform is designed to deliver reliable performance where 
                traditional cloud-based solutions fall short.
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
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                alt="AI at Edge"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Benefits</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Deploy AI models at the edge to transform how you collect, analyze, and act on data.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Use Cases</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-brand-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Smart Manufacturing</h3>
                    <p className="text-gray-600">Real-time anomaly detection and equipment maintenance predictions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-brand-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Retail Analytics</h3>
                    <p className="text-gray-600">In-store customer behavior analysis and inventory optimization.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-brand-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Healthcare Monitoring</h3>
                    <p className="text-gray-600">Continuous patient monitoring with privacy-preserving local processing.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-brand-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Smart City Infrastructure</h3>
                    <p className="text-gray-600">Traffic management, public safety, and environmental monitoring systems.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <BlurImage 
                src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
                alt="Edge Computing Use Cases"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-primary/5">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Deploy AI at the Edge?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Contact our team to discuss your edge computing needs and how our solutions can help.
            </p>
            <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary/90">
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AIEdge;
