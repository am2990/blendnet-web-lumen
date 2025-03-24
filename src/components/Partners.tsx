import React from 'react';

interface PartnerLogoProps {
  name: string;
  logo: string;
  link: string;
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({ name, logo, link }) => (
  <a 
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
  >
    <img src={logo} alt={`${name} logo`} className="max-h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
  </a>
);

const Partners: React.FC = () => {
  const partners = [
    {
      name: "Microsoft",
      logo: "/images/partners/microsoft.svg",
      link: "https://microsoft.com"
    },
    {
      name: "SES",
      logo: "/images/partners/ses.svg",
      link: "https://ses.com"
    },
    {
      name: "Earth Care Foundation",
      logo: "/images/partners/earthcare.svg",
      link: "https://earthcarefoundation.org"
    },
    {
      name: "JungleWorks",
      logo: "/images/partners/jungleworks.svg",
      link: "https://jungleworks.com"
    },
    {
      name: "Orbit Skilling",
      logo: "/images/partners/orbit.svg",
      link: "https://orbitskilling.com"
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-primary mb-4">Our Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We collaborate with industry leaders to deliver cutting-edge solutions and drive innovation.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {partners.map((partner, index) => (
            <PartnerLogo key={index} {...partner} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners; 