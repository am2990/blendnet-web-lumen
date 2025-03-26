
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import BlurImage from './BlurImage';

interface CaseStudyDetailsProps {
  id: string;
  title: string;
  client: string;
  category: string;
  imageUrl: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

const CaseStudyDetails: React.FC<CaseStudyDetailsProps> = ({
  title,
  client,
  category,
  imageUrl,
  summary,
  challenge,
  solution,
  results,
  technologies,
  testimonial,
}) => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm font-medium bg-brand-accent text-brand-primary px-2 py-1 rounded">
            {category}
          </span>
          <span className="text-sm text-gray-500">{client}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-gray-600">{summary}</p>
      </div>

      {/* Main Image */}
      <div className="rounded-lg overflow-hidden shadow-lg mb-12">
        <BlurImage
          src={imageUrl}
          alt={title}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Challenge */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
        <p className="text-gray-600">{challenge}</p>
      </div>

      {/* Solution */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
        <p className="text-gray-600">{solution}</p>
      </div>

      {/* Results */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Results</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          {results.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>

      {/* Testimonial */}
      {testimonial && (
        <div className="bg-brand-primary rounded-lg p-8 text-white mb-10">
          <svg className="w-10 h-10 text-brand-secondary mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className="text-xl italic mb-4">{testimonial.quote}</p>
          <div className="font-semibold">{testimonial.author}</div>
          <div className="text-white/70">{testimonial.role}</div>
        </div>
      )}

      {/* Technologies */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* CTAs */}
      <div className="border-t pt-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <Link to="/case-studies">
          <Button variant="outline">
            ← Back to Case Studies
          </Button>
        </Link>
        <Link to="/contact">
          <Button className="bg-brand-primary hover:bg-brand-primary/90">
            Discuss Your Project
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyDetails;
