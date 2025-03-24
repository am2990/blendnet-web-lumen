
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import BlurImage from './BlurImage';

interface SolutionCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ title, description, imageUrl, link }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
    <div className="aspect-[16/9] overflow-hidden">
      <BlurImage
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-brand-primary group-hover:text-brand-secondary transition-colors">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button asChild variant="outline" className="w-full border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
        <Link to={link}>Learn More</Link>
      </Button>
    </div>
  </div>
);

const Solutions: React.FC = () => {
  const solutions = [
    {
      title: "Learning Management System",
      description: "A comprehensive LMS solution for educational institutions and corporate training.",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      link: "/solutions/lms"
    },
    {
      title: "AI at Edge",
      description: "Cutting-edge AI solutions deployed at the edge for real-time processing and analytics.",
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      link: "/solutions/ai-edge"
    },
    {
      title: "Skilling Tutor (Disha)",
      description: "AI-powered personalized tutoring system for skill development and career guidance.",
      imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      link: "/solutions/disha"
    },
    {
      title: "Soft Skills with AI (ComuniQa)",
      description: "Interactive AI platform for developing essential soft skills and communication abilities.",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      link: "/solutions/comuniqa"
    }
  ];

  return (
    <section id="solutions" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-primary mb-4">Our Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive suite of AI-powered solutions designed to transform education and skill development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
