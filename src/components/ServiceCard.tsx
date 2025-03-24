
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  variant?: 'default' | 'outlined' | 'minimal';
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link,
  variant = 'default',
}) => {
  const cardStyles = {
    default: 'bg-white border border-gray-200 shadow-md hover:shadow-lg',
    outlined: 'bg-white border-2 border-brand-primary hover:bg-brand-accent/30',
    minimal: 'bg-transparent hover:bg-brand-accent/30',
  };

  return (
    <div className={`rounded-lg p-6 transition-all duration-300 hover-scale ${cardStyles[variant]}`}>
      <div className="mb-4 text-brand-secondary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to={link} 
        className="inline-flex items-center text-brand-primary font-medium hover:text-brand-secondary transition-colors gap-1"
      >
        Learn more <ArrowRight size={16} />
      </Link>
    </div>
  );
};

export default ServiceCard;
