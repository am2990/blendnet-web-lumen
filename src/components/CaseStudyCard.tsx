
import React from 'react';
import { Link } from 'react-router-dom';
import BlurImage from './BlurImage';

interface CaseStudyCardProps {
  id: string;
  title: string;
  client: string;
  category: string;
  imageUrl: string;
  summary: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  id,
  title,
  client,
  category,
  imageUrl,
  summary,
}) => {
  return (
    <Link to={`/case-studies/${id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
        <div className="aspect-[16/9] overflow-hidden">
          <BlurImage
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-medium bg-brand-accent text-brand-primary px-2 py-1 rounded">
              {category}
            </span>
            <span className="text-sm text-gray-500">{client}</span>
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-primary transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 line-clamp-2">{summary}</p>
        </div>
      </div>
    </Link>
  );
};

export default CaseStudyCard;
