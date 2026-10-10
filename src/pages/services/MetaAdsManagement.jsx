import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const MetaAdsManagement = () => {
  return (
    <ServiceLayout 
      title="Meta Ads Management (Facebook & Instagram)" 
      description="Targeted Meta Ads management for Facebook and Instagram. Build brand awareness and generate leads with precise audience targeting."
      url="/meta-ads-management"
      defaultService="Meta Ads Management (Facebook & Instagram)"
    >
      
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Engage Your Audience on Facebook and Instagram</h2>
            <p className="mb-4 text-gray-600">
              Meta Ads offer unparalleled audience targeting based on demographics, interests, and behaviors. We manage your Facebook and Instagram campaigns to build brand awareness and drive conversions.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Our Meta Ads Services</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li>Comprehensive audience targeting strategies.</li>
              <li>Campaign planning tailored to your specific objectives.</li>
              <li>Lead generation campaigns to capture inquiries directly on the platform.</li>
              <li>Creative guidance and ad copy development.</li>
              <li>Conversion tracking and pixel implementation.</li>
              <li>Ongoing budget management and campaign monitoring.</li>
            </ul>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Why Meta Ads?</h3>
            <p className="mb-4 text-gray-600">
              Unlike search ads, social media advertising allows you to generate demand by putting your brand in front of users before they even start searching.
            </p>
        
    </ServiceLayout>
  );
};

export default MetaAdsManagement;
