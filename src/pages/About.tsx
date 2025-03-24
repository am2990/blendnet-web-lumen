
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import TeamMember from '@/components/TeamMember';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      bio: 'With over 15 years of experience in AI and machine learning, Alex founded BlendNet to help organizations leverage the power of artificial intelligence.',
      imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
      socialLinks: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      bio: 'Sarah leads our technical team, bringing 12 years of experience in developing cutting-edge AI solutions for enterprise clients.',
      imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
      socialLinks: {
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
      },
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of AI Research',
      bio: 'Michael oversees our AI research initiatives, focusing on developing innovative solutions that push the boundaries of what's possible.',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      socialLinks: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
    },
    {
      name: 'Emily Barnes',
      role: 'Director of Client Success',
      bio: 'Emily ensures our clients achieve measurable results from our AI solutions, drawing on her background in business transformation.',
      imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
      socialLinks: {
        linkedin: 'https://linkedin.com',
      },
    },
    {
      name: 'David Kim',
      role: 'Lead Data Scientist',
      bio: 'David brings expertise in advanced analytics and machine learning models that turn complex data into actionable insights for our clients.',
      imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
      socialLinks: {
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
      },
    },
    {
      name: 'Priya Patel',
      role: 'VP of Product',
      bio: 'Priya drives our product strategy, ensuring our AI solutions meet the evolving needs of our clients and the market.',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      socialLinks: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
    },
  ];

  const timeline = [
    {
      year: '2018',
      title: 'Founded',
      description: 'BlendNet was founded with the mission to make AI accessible to organizations of all sizes.',
    },
    {
      year: '2019',
      title: 'First Enterprise Client',
      description: 'Secured our first enterprise client, a Fortune 500 company looking to transform their data strategy.',
    },
    {
      year: '2020',
      title: 'Research Partnership',
      description: 'Established a research partnership with Stanford University to advance AI capabilities.',
    },
    {
      year: '2021',
      title: 'CT Nova Launch',
      description: 'Launched our flagship product, CT Nova, bringing AI-enhanced learning to organizations globally.',
    },
    {
      year: '2022',
      title: 'International Expansion',
      description: 'Opened offices in London and Singapore, expanding our global presence.',
    },
    {
      year: '2023',
      title: 'AI Excellence Award',
      description: 'Received the AI Excellence Award for our innovative solutions and client results.',
    },
  ];

  return (
    <MainLayout>
      <Hero
        title="About BlendNet"
        subtitle="We're on a mission to transform how organizations leverage artificial intelligence."
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978"
      />

      {/* Our Story */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Story</h2>
              <div className="space-y-4">
                <p className="text-gray-600 text-lg">
                  BlendNet was founded in 2018 with a clear vision: to make the power of artificial intelligence accessible and actionable for organizations of all sizes. We recognized that while AI technology was advancing rapidly, many organizations struggled to implement effective solutions that delivered real business value.
                </p>
                <p className="text-gray-600 text-lg">
                  Our team of AI experts, data scientists, and business consultants set out to bridge this gap, creating solutions that combine cutting-edge technology with practical application. We believe that AI should not just be a buzzword, but a transformative force that helps organizations solve real problems and achieve measurable results.
                </p>
                <p className="text-gray-600 text-lg">
                  Today, BlendNet works with clients across industries, from Fortune 500 companies to innovative startups, helping them harness the power of AI to drive innovation, improve efficiency, and create competitive advantage.
                </p>
              </div>

              <div className="mt-8">
                <Link to="/contact">
                  <Button className="bg-brand-primary hover:bg-brand-primary/90">
                    Get in Touch
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <img
                      src="https://images.unsplash.com/photo-1559136555-9303baea8ebd"
                      alt="BlendNet Office"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <img
                      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
                      alt="BlendNet Team Collaboration"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="pt-6">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                      alt="BlendNet Team Meeting"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-20 bg-brand-accent">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 text-lg">
              We're guided by a strong set of principles that shape everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover-scale">
              <div className="text-brand-secondary text-3xl mb-4">01</div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously push the boundaries of what's possible with AI, staying at the forefront of technological advancement to bring the best solutions to our clients.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover-scale">
              <div className="text-brand-secondary text-3xl mb-4">02</div>
              <h3 className="text-xl font-semibold mb-3">Simplicity</h3>
              <p className="text-gray-600">
                We believe that powerful technology should be accessible and easy to use. We focus on creating solutions that deliver value without unnecessary complexity.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover-scale">
              <div className="text-brand-secondary text-3xl mb-4">03</div>
              <h3 className="text-xl font-semibold mb-3">Impact</h3>
              <p className="text-gray-600">
                We measure our success by the tangible results we deliver for our clients. Everything we do is focused on creating meaningful, measurable impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Our Journey</h2>
            <p className="text-gray-600 text-lg">
              From our founding to today, we've been on an exciting path of growth and innovation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start mb-8">
                <div className="flex flex-col items-center mr-6">
                  <div className="bg-brand-primary text-white px-3 py-1 rounded font-semibold">
                    {item.year}
                  </div>
                  <div className="h-full w-0.5 bg-gray-200 mt-2"></div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 flex-1 hover-scale">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-brand-accent">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Our Team</h2>
            <p className="text-gray-600 text-lg">
              Meet the experts behind BlendNet's innovative AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                imageUrl={member.imageUrl}
                socialLinks={member.socialLinks}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-20">
        <div className="section-container">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 max-w-4xl mx-auto text-center">
            <h2 className="mb-4">Join Our Team</h2>
            <p className="text-gray-600 text-lg mb-8">
              We're always looking for talented individuals who are passionate about AI and want to make a difference.
              Check out our current openings or reach out to discuss opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-brand-primary hover:bg-brand-primary/90">
                View Open Positions
              </Button>
              <Button variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
                Contact HR
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
