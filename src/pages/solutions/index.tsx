
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import BlurImage from '@/components/BlurImage';
import YoutubeEmbed from '@/components/YoutubeEmbed';

const SolutionsPage: React.FC = () => {
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
  
  const videos = [
    {
      videoId: "dQw4w9WgXcQ",
      title: "Introduction to BlendNet AI Solutions"
    },
    {
      videoId: "jNQXAC9IVRw",
      title: "CT Nova Platform Showcase"
    },
    {
      videoId: "jhFDyDgMVUI",
      title: "AI at the Edge: Use Cases & Benefits"
    },
    {
      videoId: "_GuOjXYl5ew",
      title: "Future of AI in Education"
    }
  ];

  return (
    <MainLayout>
      <Hero
        title="Our Solutions"
        subtitle="Innovative AI-powered solutions designed to transform your organization"
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
      />

      <section className="py-16">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Comprehensive AI Solutions</h2>
            <p className="text-gray-600 text-lg">
              Discover our suite of AI-powered solutions designed to address specific business challenges
              and drive meaningful outcomes for your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            {solutions.map((solution, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300">
                <div className="aspect-[16/9] overflow-hidden">
                  <BlurImage
                    src={solution.imageUrl}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-brand-primary group-hover:text-brand-secondary transition-colors">{solution.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{solution.description}</p>
                  <Button asChild className="mt-auto bg-brand-primary hover:bg-brand-primary/90">
                    <Link to={solution.link}>Learn More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Video Section */}
          <div className="bg-brand-accent rounded-lg p-8 md:p-12 mb-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="mb-4">Watch Our Solutions in Action</h2>
              <p className="text-gray-600 text-lg">
                See our AI solutions at work through these informative videos showcasing real-world applications and benefits.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map((video, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <YoutubeEmbed videoId={video.videoId} title={video.title} />
                  <h3 className="text-lg font-semibold mt-4 mb-2">{video.title}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-6">Ready to Transform Your Business?</h3>
            <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
              Contact us today to discuss how our AI solutions can address your specific challenges and drive growth for your organization.
            </p>
            <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary/90">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default SolutionsPage;
