
import React from 'react';
import MainLayout from '@/layouts/MainLayout';

const Privacy: React.FC = () => {
  return (
    <MainLayout className="pt-24">
      <div className="section-container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p>Last updated: June 1, 2023</p>
            
            <h2 className="mt-8 mb-4">1. Introduction</h2>
            <p>
              At BlendNet AI ("Company", "we", "our", "us"), we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website blendnet.ai and use our CT Nova platform ("Service").
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
            </p>
            
            <h2 className="mt-8 mb-4">2. Information We Collect</h2>
            <h3 className="mt-6 mb-3">Personal Information</h3>
            <p>
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-8 my-4 space-y-2">
              <li>Register for our Service</li>
              <li>Express interest in obtaining information about us or our products</li>
              <li>Participate in activities on our Service</li>
              <li>Contact us</li>
            </ul>
            <p>
              The personal information we collect may include:
            </p>
            <ul className="list-disc pl-8 my-4 space-y-2">
              <li>Name and contact information</li>
              <li>Email address</li>
              <li>Business information</li>
              <li>Payment information</li>
              <li>Usage data and preferences</li>
            </ul>
            
            <h3 className="mt-6 mb-3">Automatically Collected Information</h3>
            <p>
              We automatically collect certain information when you visit, use, or navigate our Service. This information does not reveal your specific identity but may include:
            </p>
            <ul className="list-disc pl-8 my-4 space-y-2">
              <li>Device and usage information</li>
              <li>IP address</li>
              <li>Browser and device characteristics</li>
              <li>Operating system</li>
              <li>Language preferences</li>
              <li>Referring URLs</li>
            </ul>
            
            <h2 className="mt-8 mb-4">3. How We Use Your Information</h2>
            <p>
              We use the information we collect or receive:
            </p>
            <ul className="list-disc pl-8 my-4 space-y-2">
              <li>To provide, operate, and maintain our Service</li>
              <li>To improve, personalize, and expand our Service</li>
              <li>To understand and analyze how you use our Service</li>
              <li>To develop new products, services, features, and functionality</li>
              <li>To communicate with you about updates, security alerts, and support</li>
              <li>To prevent fraud</li>
            </ul>
            
            <h2 className="mt-8 mb-4">4. Data Security</h2>
            <p>
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
            </p>
            
            <h2 className="mt-8 mb-4">5. Your Data Protection Rights</h2>
            <p>
              You have certain data protection rights. These include:
            </p>
            <ul className="list-disc pl-8 my-4 space-y-2">
              <li>The right to access, update or to delete your personal information</li>
              <li>The right of rectification</li>
              <li>The right to object</li>
              <li>The right of restriction</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            
            <h2 className="mt-8 mb-4">6. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier.
            </p>
            <p>
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
            </p>
            
            <h2 className="mt-8 mb-4">7. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
            
            <h2 className="mt-8 mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-none space-y-2">
              <li>By email: privacy@blendnet.ai</li>
              <li>By phone: +1 (415) 555-1234</li>
              <li>By mail: 123 Tech Plaza, Suite 400, San Francisco, CA 94105</li>
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Privacy;
