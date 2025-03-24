
import React from 'react';
import MainLayout from '@/layouts/MainLayout';

const Refund: React.FC = () => {
  return (
    <MainLayout className="pt-24">
      <div className="section-container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-8">Refund Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p>Last updated: June 1, 2023</p>
            
            <h2 className="mt-8 mb-4">1. General Terms</h2>
            <p>
              At BlendNet AI, we strive to ensure complete satisfaction with our services. This Refund Policy outlines the terms and conditions for refunds related to our products and services, including CT Nova and other AI solutions.
            </p>
            
            <h2 className="mt-8 mb-4">2. Subscription Services</h2>
            <h3 className="mt-6 mb-3">Trial Period</h3>
            <p>
              For subscription-based services that include a trial period:
            </p>
            <ul className="list-disc pl-8 my-4 space-y-2">
              <li>You may cancel your subscription during the trial period and receive a full refund of any paid fees.</li>
              <li>The trial period typically lasts 14 days from the start date of your subscription.</li>
              <li>Cancellation must be requested in writing before the trial period ends.</li>
            </ul>
            
            <h3 className="mt-6 mb-3">Active Subscriptions</h3>
            <p>
              For active subscriptions beyond the trial period:
            </p>
            <ul className="list-disc pl-8 my-4 space-y-2">
              <li>Annual subscriptions may be eligible for a prorated refund within the first 30 days of service.</li>
              <li>No refunds will be issued after 30 days of active service.</li>
              <li>Refunds are calculated based on unused service time.</li>
            </ul>
            
            <h2 className="mt-8 mb-4">3. Custom Solutions and Consulting Services</h2>
            <p>
              For custom AI solutions and consulting services:
            </p>
            <ul className="list-disc pl-8 my-4 space-y-2">
              <li>Refunds for custom development work are evaluated on a case-by-case basis.</li>
              <li>Services delivered according to agreed specifications are not eligible for refunds.</li>
              <li>Deposits for custom work may be non-refundable, as specified in individual contracts.</li>
            </ul>
            
            <h2 className="mt-8 mb-4">4. Refund Process</h2>
            <p>
              To request a refund:
            </p>
            <ol className="list-decimal pl-8 my-4 space-y-2">
              <li>Contact our support team at support@blendnet.ai</li>
              <li>Provide your account information and reason for the refund request</li>
              <li>Allow up to 5-10 business days for review</li>
              <li>If approved, refunds will be processed to the original payment method</li>
            </ol>
            
            <h2 className="mt-8 mb-4">5. Exceptions</h2>
            <p>
              Refunds may not be available in the following cases:
            </p>
            <ul className="list-disc pl-8 my-4 space-y-2">
              <li>Violation of our Terms of Service</li>
              <li>Abuse of our services or systems</li>
              <li>Services already delivered and accepted</li>
              <li>Custom development work already completed</li>
            </ul>
            
            <h2 className="mt-8 mb-4">6. Payment Processing</h2>
            <p>
              When a refund is approved:
            </p>
            <ul className="list-disc pl-8 my-4 space-y-2">
              <li>Credit card refunds typically appear within 5-10 business days</li>
              <li>Bank transfer refunds may take up to 15 business days</li>
              <li>Processing times may vary depending on your financial institution</li>
            </ul>
            
            <h2 className="mt-8 mb-4">7. Changes to This Policy</h2>
            <p>
              We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes to this policy constitutes acceptance of those changes.
            </p>
            
            <h2 className="mt-8 mb-4">8. Contact Us</h2>
            <p>
              If you have questions about our Refund Policy, please contact us:
            </p>
            <ul className="list-none space-y-2">
              <li>By email: billing@blendnet.ai</li>
              <li>By phone: +1 (415) 555-1234</li>
              <li>By mail: 123 Tech Plaza, Suite 400, San Francisco, CA 94105</li>
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Refund;
