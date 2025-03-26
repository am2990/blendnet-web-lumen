
import React from 'react';
import { Check, UserCheck, BarChart, Award, Database, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import BlurImage from '@/components/BlurImage';

const CTNova: React.FC = () => {
  const features = [
    {
      title: 'Seamless Azure Integration',
      description: 'Deploy directly from the Azure portal into your own subscription with no friction.',
      icon: <Database size={24} />,
    },
    {
      title: 'AI-Enhanced Learning',
      description: 'Personalized learning paths and recommendations powered by artificial intelligence.',
      icon: <BarChart size={24} />,
    },
    {
      title: 'Enterprise-Grade Security',
      description: 'Robust security features to protect your organization\'s data and content.',
      icon: <ShieldCheck size={24} />,
    },
    {
      title: 'Flexible Customization',
      description: 'Tailor the platform to match your organization\'s branding and requirements.',
      icon: <UserCheck size={24} />,
    },
    {
      title: 'Comprehensive Analytics',
      description: 'Detailed insights into learner engagement and performance.',
      icon: <BarChart size={24} />,
    },
    {
      title: 'Award-Winning Support',
      description: 'Dedicated team of experts to ensure your success with the platform.',
      icon: <Award size={24} />,
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <Hero
        title="CT Nova: AI-Enhanced Learning at Scale"
        subtitle="Empower your organization with a modern learning platform built on Microsoft Community Training and running natively on Azure."
        ctaText="Request a Demo"
        ctaLink="#contact"
        backgroundImage="https://images.unsplash.com/photo-1588702547923-7093a6c3ba33"
      />

      {/* Main Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Transform Training Delivery</h2>
            <p className="text-gray-600 text-lg">
              CT Nova delivers a flexible, reliable, and modern learning experience for organizations of all sizes.
              From NGOs to Fortune 500s, bring enterprise-grade learning to every corner of your community.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Powerful Learning Management in Your Azure Environment
              </h3>
              <p className="text-gray-600 mb-6">
                CT Nova deploys directly into your Azure subscription, giving you complete control over your data
                and infrastructure while leveraging the power of Microsoft's cloud platform.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-brand-secondary/20 p-1 rounded-full">
                    <Check size={16} className="text-brand-secondary" />
                  </div>
                  <span>Direct Azure Portal deployment</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-brand-secondary/20 p-1 rounded-full">
                    <Check size={16} className="text-brand-secondary" />
                  </div>
                  <span>Utilize your existing Azure security and compliance features</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-brand-secondary/20 p-1 rounded-full">
                    <Check size={16} className="text-brand-secondary" />
                  </div>
                  <span>Scale seamlessly with your organization's needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-brand-secondary/20 p-1 rounded-full">
                    <Check size={16} className="text-brand-secondary" />
                  </div>
                  <span>Built-in integration with Microsoft 365 services</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <BlurImage
                  src="https://images.unsplash.com/photo-1581090700227-8e3b68303d4a"
                  alt="CT Nova on Azure"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <div className="text-brand-primary font-medium">Microsoft Azure</div>
                <div className="text-sm text-gray-600">Natively integrated for seamless deployment</div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                <div className="bg-brand-secondary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <div className="text-brand-secondary">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Quote Section */}
          <div className="bg-brand-primary rounded-lg p-8 md:p-12 mb-20">
            <div className="max-w-3xl mx-auto text-center">
              <svg className="w-12 h-12 mx-auto mb-6 text-brand-secondary" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-xl md:text-2xl text-white italic mb-6">
                "CT Nova has transformed how we deliver training across our global workforce. The Azure integration made deployment seamless, and the AI-enhanced features have significantly improved engagement and completion rates."
              </p>
              <div className="text-brand-secondary font-medium">Sarah Johnson</div>
              <div className="text-white/70">Chief Learning Officer, Fortune 500 Company</div>
            </div>
          </div>

          {/* How It Works */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">How CT Nova Works</h2>
            <p className="text-gray-600 text-lg">
              A simple three-step process to transform your organization's learning capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center">
              <div className="bg-brand-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-primary text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Deploy</h3>
              <p className="text-gray-600">
                Seamlessly deploy CT Nova directly from the Azure portal to your subscription in minutes.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-brand-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-primary text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customize</h3>
              <p className="text-gray-600">
                Tailor the platform to your organization's needs with easy configuration options.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-brand-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-primary text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Launch</h3>
              <p className="text-gray-600">
                Start delivering high-quality training content to your entire organization immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-brand-accent">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-600 text-lg">
              Flexible pricing options to meet the needs of organizations of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 hover-scale">
              <div className="text-brand-secondary font-medium mb-2">Basic</div>
              <h3 className="text-3xl font-bold mb-4">Limited Support</h3>
              <p className="text-gray-600 mb-6">Perfect for small organizations getting started with digital learning.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-brand-secondary mt-0.5" />
                  <span>Up to 500 users</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-brand-secondary mt-0.5" />
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-brand-secondary mt-0.5" />
                  <span>Azure deployment</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-brand-secondary mt-0.5" />
                  <span>Email support</span>
                </li>
              </ul>
              <Button className="w-full bg-brand-primary hover:bg-brand-primary/90">Get Started</Button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 hover-scale border-2 border-brand-secondary relative transform scale-105 z-10">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-secondary text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="text-brand-secondary font-medium mb-2">Premium</div>
              <h3 className="text-3xl font-bold mb-4">Priority Support</h3>
              <p className="text-gray-600 mb-6">Advanced features for growing organizations with diverse learning needs.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-brand-secondary mt-0.5" />
                  <span>Up to 2,000 users</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-brand-secondary mt-0.5" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-brand-secondary mt-0.5" />
                  <span>Full AI capabilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-brand-secondary mt-0.5" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-brand-secondary mt-0.5" />
                  <span>Custom branding</span>
                </li>
              </ul>
              <Button className="w-full bg-brand-secondary hover:bg-brand-secondary/90">Get Started</Button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 hover-scale">
              <div className="text-brand-secondary font-medium mb-2">Enterprise</div>
              <h3 className="text-3xl font-bold mb-4">Custom Features</h3>
              <p className="text-gray-600 mb-6">Tailored solutions for large organizations with complex requirements.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-brand-secondary mt-0.5" />
                  <span>Unlimited users</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-brand-secondary mt-0.5" />
                  <span>Enterprise analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-brand-secondary mt-0.5" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-brand-secondary mt-0.5" />
                  <span>Dedicated support team</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-brand-secondary mt-0.5" />
                  <span>Multi-region deployment</span>
                </li>
              </ul>
              <Button className="w-full bg-brand-primary hover:bg-brand-primary/90">Contact Sales</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Ready to Transform Your Learning?</h2>
            <p className="text-gray-600 text-lg">
              Get in touch with our team to schedule a demo and learn how CT Nova can help your organization.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <ContactForm 
              title="Request a Demo"
              subtitle="Fill out the form below and our team will reach out to schedule a personalized demonstration of CT Nova."
            />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CTNova;
