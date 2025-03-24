
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import BlurImage from '@/components/BlurImage';

interface SolutionItemProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const SolutionItem: React.FC<SolutionItemProps> = ({ title, description, imageUrl, link }) => {
  return (
    <div className="group">
      <div className="flex flex-col lg:flex-row gap-8 items-center bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
        <div className="w-full lg:w-1/3">
          <div className="aspect-[4/3] overflow-hidden rounded-lg">
            <BlurImage
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
        <div className="w-full lg:w-2/3">
          <h3 className="text-2xl font-semibold mb-3 group-hover:text-brand-primary transition-colors">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
          <Button asChild className="bg-brand-primary hover:bg-brand-primary/90">
            <Link to={link}>Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

const Solutions: React.FC = () => {
  const solutionsList = [
    {
      title: "Learning Management System",
      description: "Our comprehensive LMS solution provides a scalable, reliable, and secure platform for delivering training and educational content. Whether you're a university looking to enhance your online learning offerings, or a corporation seeking to upskill your workforce, our LMS offers the tools and features needed to create engaging learning experiences.",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      link: "/solutions/lms"
    },
    {
      title: "AI at Edge",
      description: "Our Edge AI solutions bring machine learning capabilities directly to your edge devices, enabling real-time analysis and decision-making without relying on cloud connectivity. From industrial IoT applications to retail analytics and smart city infrastructure, our Edge AI platform delivers reliable performance where traditional cloud-based solutions fall short.",
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      link: "/solutions/ai-edge"
    },
    {
      title: "Skilling Tutor (Disha)",
      description: "Disha is our revolutionary AI-powered skilling platform that acts as a personal tutor and career guide. It helps learners identify their strengths, address skill gaps, and chart a clear path toward their career goals using advanced machine learning algorithms to provide personalized recommendations.",
      imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      link: "/solutions/disha"
    },
    {
      title: "Soft Skills with AI (ComuniQa)",
      description: "ComuniQa is our innovative AI platform designed to help individuals and teams develop the soft skills essential for professional success. Using advanced natural language processing and conversational AI, it creates realistic scenarios where users can practice and refine their communication skills.",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      link: "/solutions/comuniqa"
    }
  ];

  return (
    <MainLayout>
      <Hero
        title="Our Solutions"
        subtitle="Discover our comprehensive suite of AI-powered solutions designed to transform education and skill development."
      />

      <section className="py-16">
        <div className="section-container">
          <div className="mb-12">
            <p className="text-gray-600 text-lg max-w-3xl">
              At BlendNet, we leverage the latest advancements in artificial intelligence to create 
              innovative solutions for learning, skill development, and business transformation. 
              Our products are designed to be scalable, secure, and adaptable to your specific needs.
            </p>
          </div>

          <div className="space-y-8">
            {solutionsList.map((solution, index) => (
              <SolutionItem
                key={index}
                title={solution.title}
                description={solution.description}
                imageUrl={solution.imageUrl}
                link={solution.link}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-primary/5">
        <div className="section-container">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Our team of experts can help you develop customized AI solutions tailored to your specific business needs.
            </p>
            <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary/90">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Solutions;
