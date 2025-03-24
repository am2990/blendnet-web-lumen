
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import BlurImage from '@/components/BlurImage';
import { MessageSquare, Users, Award, LineChart } from 'lucide-react';

const ComuniQa: React.FC = () => {
  const features = [
    {
      title: "Interactive Conversation Practice",
      description: "AI-powered partners for realistic conversation practice in various scenarios",
      icon: <MessageSquare className="w-10 h-10 text-brand-primary" />
    },
    {
      title: "Team Collaboration Skills",
      description: "Simulated team environments to develop leadership and collaboration skills",
      icon: <Users className="w-10 h-10 text-brand-primary" />
    },
    {
      title: "Communication Certification",
      description: "Industry-recognized certifications for soft skills mastery",
      icon: <Award className="w-10 h-10 text-brand-primary" />
    },
    {
      title: "Progress Analytics",
      description: "Detailed analytics to track improvement in communication effectiveness",
      icon: <LineChart className="w-10 h-10 text-brand-primary" />
    }
  ];

  return (
    <MainLayout>
      <Hero
        title="Soft Skills with AI (ComuniQa)"
        subtitle="Develop essential soft skills and communication abilities through AI-powered interactions."
        ctaText="Try ComuniQa"
        ctaLink="/contact"
        secondaryCtaText="Learn More"
        secondaryCtaLink="#features"
      />

      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Master the Art of Communication</h2>
              <p className="text-gray-600 mb-6">
                ComuniQa is our innovative AI platform designed to help individuals and teams develop 
                the soft skills essential for professional success in today's collaborative workplace.
              </p>
              <p className="text-gray-600 mb-6">
                Using advanced natural language processing and conversational AI, ComuniQa creates 
                realistic scenarios where users can practice and refine their communication skills, 
                from presentations and negotiations to conflict resolution and team leadership.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-brand-primary hover:bg-brand-primary/90">
                  <Link to="/contact">Schedule a Demo</Link>
                </Button>
                <Button asChild variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary/10">
                  <Link to="/case-studies">View Success Stories</Link>
                </Button>
              </div>
            </div>
            <div>
              <BlurImage 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="ComuniQa Platform"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ComuniQa offers comprehensive tools to develop and enhance essential soft skills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Why Soft Skills Matter</h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-brand-primary mb-2">85% of Job Success</h3>
                  <p className="text-gray-600">Research shows that 85% of job success comes from having well-developed soft skills.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-brand-primary mb-2">Top Employer Demand</h3>
                  <p className="text-gray-600">Communication consistently ranks as the #1 skill employers look for in candidates.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-brand-primary mb-2">Leadership Advancement</h3>
                  <p className="text-gray-600">Strong soft skills are the key differentiator for leadership advancement.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-brand-primary mb-2">Remote Work Essential</h3>
                  <p className="text-gray-600">Clear communication is even more critical in remote and hybrid work environments.</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <BlurImage 
                src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca"
                alt="Communication and Teamwork"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-primary/5">
        <div className="section-container">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">How It Works</h2>
                  <ol className="space-y-6">
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-brand-primary text-white font-bold">
                        1
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Skill Assessment</h3>
                        <p className="text-gray-600">Initial evaluation to identify communication strengths and areas for improvement.</p>
                      </div>
                    </li>
                    
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-brand-primary text-white font-bold">
                        2
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Personalized Training Plan</h3>
                        <p className="text-gray-600">AI-generated customized learning path based on individual needs and goals.</p>
                      </div>
                    </li>
                    
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-brand-primary text-white font-bold">
                        3
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Interactive Practice</h3>
                        <p className="text-gray-600">Realistic AI-powered scenarios to practice and develop communication skills.</p>
                      </div>
                    </li>
                    
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-brand-primary text-white font-bold">
                        4
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Real-time Feedback</h3>
                        <p className="text-gray-600">Instant analysis and actionable recommendations for improvement.</p>
                      </div>
                    </li>
                    
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-brand-primary text-white font-bold">
                        5
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Progress Tracking</h3>
                        <p className="text-gray-600">Detailed analytics to measure improvement over time.</p>
                      </div>
                    </li>
                  </ol>
                </div>
                <div>
                  <BlurImage 
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad"
                    alt="ComuniQa in Action"
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Communication Skills?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Join thousands of professionals who have transformed their careers with ComuniQa's AI-powered soft skills training.
            </p>
            <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary/90">
              <Link to="/contact">Get Started with ComuniQa</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ComuniQa;
