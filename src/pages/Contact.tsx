
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';

const Contact: React.FC = () => {
  const officeLocations = [
    {
      city: 'San Francisco',
      address: '123 Tech Plaza, Suite 400\nSan Francisco, CA 94105',
      phone: '+1 (415) 555-1234',
      email: 'sf@blendnet.ai',
    },
    {
      city: 'New York',
      address: '456 Innovation Tower\nNew York, NY 10001',
      phone: '+1 (212) 555-5678',
      email: 'nyc@blendnet.ai',
    },
    {
      city: 'London',
      address: '78 AI Square, Floor 15\nLondon, EC2A 4BX, UK',
      phone: '+44 20 5555 1234',
      email: 'london@blendnet.ai',
    },
  ];

  const faqItems = [
    {
      question: 'How quickly can we implement your AI solutions?',
      answer: 'Implementation timelines vary based on the complexity of your needs and existing infrastructure. Typically, our solutions can be deployed within 4-12 weeks, with initial results visible within the first month.',
    },
    {
      question: 'Do you offer custom AI solutions or only pre-built products?',
      answer: 'We offer both pre-built products like CT Nova and fully custom AI solutions tailored to your specific business challenges. Our team works closely with you to determine the best approach for your needs.',
    },
    {
      question: 'What kind of support do you provide after implementation?',
      answer: 'We provide comprehensive post-implementation support, including technical assistance, training, and ongoing optimization. Our support packages are designed to ensure you get maximum value from your AI investment.',
    },
    {
      question: 'How do you ensure data security and privacy?',
      answer: 'Data security is our top priority. We implement industry-leading security measures, comply with relevant regulations (GDPR, CCPA, etc.), and can deploy solutions within your own infrastructure to maintain data sovereignty.',
    },
  ];

  return (
    <MainLayout>
      <Hero
        title="Contact Us"
        subtitle="Get in touch with our team to discuss how we can help transform your business with AI."
        backgroundImage="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107"
      />

      <section className="py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="mb-6">Get in Touch</h2>
              <p className="text-gray-600 text-lg mb-8">
                Have questions about our AI solutions or want to discuss your specific needs? 
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Our Offices</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {officeLocations.map((office, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-lg font-semibold mb-2">{office.city}</h4>
                      <p className="text-gray-600 mb-4 whitespace-pre-line">{office.address}</p>
                      <div className="space-y-1">
                        <p className="text-sm">
                          <span className="font-medium">Phone: </span>
                          <a 
                            href={`tel:${office.phone.replace(/\D/g, '')}`} 
                            className="text-brand-primary hover:text-brand-secondary transition-colors"
                          >
                            {office.phone}
                          </a>
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Email: </span>
                          <a 
                            href={`mailto:${office.email}`} 
                            className="text-brand-primary hover:text-brand-secondary transition-colors"
                          >
                            {office.email}
                          </a>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  {faqItems.map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-lg font-semibold mb-2">{item.question}</h4>
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm 
                title="Contact Form"
                subtitle="Fill out the form below and our team will get back to you shortly."
              />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
