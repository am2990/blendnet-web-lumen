
import React from 'react';
import MainLayout from '@/layouts/MainLayout';

const Terms: React.FC = () => {
  return (
    <MainLayout className="pt-24">
      <div className="section-container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-8">Terms and Conditions</h1>
          
          <div className="prose prose-lg max-w-none">
            <p>Last updated: June 1, 2023</p>
            
            <h2 className="mt-8 mb-4">1. Introduction</h2>
            <p>
              Welcome to BlendNet AI ("Company", "we", "our", "us"). These Terms of Service ("Terms", "Terms of Service") govern your use of our website located at blendnet.ai and our CT Nova platform (together or individually "Service") operated by BlendNet AI.
            </p>
            <p>
              Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages. Please read it here: <a href="/privacy" className="text-brand-primary hover:text-brand-secondary transition-colors">Privacy Policy</a>.
            </p>
            <p>
              Your agreement with us includes these Terms and our Privacy Policy ("Agreements"). You acknowledge that you have read and understood Agreements, and agree to be bound by them.
            </p>
            <p>
              If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by emailing at support@blendnet.ai so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or use Service.
            </p>
            
            <h2 className="mt-8 mb-4">2. Communications</h2>
            <p>
              By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing at support@blendnet.ai.
            </p>
            
            <h2 className="mt-8 mb-4">3. Purchases</h2>
            <p>
              If you wish to purchase any product or service made available through Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.
            </p>
            <p>
              You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.
            </p>
            <p>
              We reserve the right to refuse or cancel your order at any time for reasons including but not limited to: product or service availability, errors in the description or price of the product or service, error in your order or other reasons.
            </p>
            
            <h2 className="mt-8 mb-4">4. Subscriptions</h2>
            <p>
              Some parts of Service are billed on a subscription basis ("Subscription(s)"). You will be billed in advance on a recurring and periodic basis ("Billing Cycle"). Billing cycles are set on an annual basis.
            </p>
            <p>
              At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or BlendNet AI cancels it. You may cancel your Subscription renewal either through your online account management page or by contacting BlendNet AI customer support team.
            </p>
            
            <h2 className="mt-8 mb-4">5. Content</h2>
            <p>
              Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for Content that you post on or through Service, including its legality, reliability, and appropriateness.
            </p>
            <p>
              By posting Content on or through Service, You represent and warrant that: (i) Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, and (ii) that the posting of your Content on or through Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity. We reserve the right to terminate the account of anyone found to be infringing on a copyright.
            </p>
            
            <h2 className="mt-8 mb-4">6. Prohibited Uses</h2>
            <p>
              You may use Service only for lawful purposes and in accordance with Terms. You agree not to use Service:
            </p>
            <ul className="list-disc pl-8 my-4 space-y-2">
              <li>In any way that violates any applicable national or international law or regulation.</li>
              <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.</li>
              <li>To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person or entity.</li>
              <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.</li>
            </ul>
            
            <h2 className="mt-8 mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <ul className="list-none space-y-2">
              <li>By email: legal@blendnet.ai</li>
              <li>By phone: +1 (415) 555-1234</li>
              <li>By mail: 123 Tech Plaza, Suite 400, San Francisco, CA 94105</li>
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Terms;
