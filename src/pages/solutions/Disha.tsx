
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import BlurImage from '@/components/BlurImage';
import { Brain, Target, Workflow, Users } from 'lucide-react';

const Disha: React.FC = () => {
  const features = [
    {
      title: "Personalized Learning Paths",
      description: "AI-driven personalized learning recommendations based on user skills and goals",
      icon: <Brain className="w-10 h-10 text-brand-primary" />
    },
    {
      title: "Career Goal Mapping",
      description: "Help learners visualize and plan their career progression with clear milestones",
      icon: <Target className="w-10 h-10 text-brand-primary" />
    },
    {
      title: "Skill Gap Analysis",
      description: "Identify and address skill gaps with targeted learning recommendations",
      icon: <Workflow className="w-10 h-10 text-brand-primary" />
    },
    {
      title: "Peer Learning Networks",
      description: "Connect learners with similar goals and complementary skills",
      icon: <Users className="w-10 h-10 text-brand-primary" />
    }
  ];

  return (
    <MainLayout>
      <Hero
        title="Skilling Tutor (Disha)"
        subtitle="AI-powered personalized tutoring system for skill development and career guidance."
        ctaText="Try Disha"
        ctaLink="/contact"
        secondaryCtaText="Learn More"
        secondaryCtaLink="#features"
      />

      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Your AI Career Guide</h2>
              <p className="text-gray-600 mb-6">
                Disha is our revolutionary AI-powered skilling platform that acts as a personal tutor and career guide.
                It helps learners identify their strengths, address skill gaps, and chart a clear path toward their career goals.
              </p>
              <p className="text-gray-600 mb-6">
                Using advanced machine learning algorithms, Disha analyzes learning patterns, career trends, and industry requirements
                to provide personalized recommendations and guidance that evolve as the learner progresses.
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
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                alt="Skilling Tutor Disha"
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
              Disha combines AI-powered assessment, personalized learning paths, and career guidance in one comprehensive platform.
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
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl font-bold mb-6">How Disha Works</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-brand-primary text-white font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Skill Assessment</h3>
                      <p className="text-gray-600">Comprehensive assessments to identify current skill levels and aptitudes.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-brand-primary text-white font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Goal Setting</h3>
                      <p className="text-gray-600">Collaborative process to define clear and achievable career objectives.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-brand-primary text-white font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Personalized Learning</h3>
                      <p className="text-gray-600">AI-generated learning paths tailored to individual needs and goals.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-brand-primary text-white font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Progress Tracking</h3>
                      <p className="text-gray-600">Real-time monitoring and feedback to keep learners on track.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-brand-primary text-white font-bold">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Adaptive Guidance</h3>
                      <p className="text-gray-600">Continuous refinement of recommendations based on progress and changing industry needs.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100">
                <BlurImage 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                  alt="Disha in Action"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-primary/5">
        <div className="section-container">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Learning Journey?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Join thousands of learners who have accelerated their career growth with Disha.
            </p>
            <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary/90">
              <Link to="/contact">Get Started with Disha</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Disha;
