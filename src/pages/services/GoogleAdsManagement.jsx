import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const GoogleAdsManagement = () => {
  return (
    <ServiceLayout 
      title="Google Ads Management Services" 
      description="Professional Google Ads management to reach customers searching for your business. Maximize your budget and generate qualified leads."
      url="/google-ads-management"
      defaultService="Google Ads Management Services"
    >
      
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Expert Google Ads Management</h2>
            <p className="mb-4 text-gray-600 text-lg">
              Google Ads can help your business reach people exactly when they are searching for relevant products and services. We manage your campaigns to ensure your advertising budget is spent efficiently.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">What Our Management Includes</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li>Google Search Ads campaign creation and management.</li>
              <li>In-depth keyword research and targeting.</li>
              <li>Compelling ad copy and asset creation.</li>
              <li>Precise location and audience targeting.</li>
              <li>Campaign structure and budget planning.</li>
              <li>Accurate conversion tracking setup.</li>
              <li>Continuous performance monitoring, reporting, and optimization.</li>
            </ul>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Our Process</h3>
            <p className="mb-4 text-gray-600">
              We start by understanding your ideal customer and business goals. We then structure campaigns that target high-intent keywords, track every conversion, and continuously optimize to improve your cost-per-lead. Note that while we strive for the best results, we do not guarantee specific lead volumes or click costs, as these depend on market competition.
            </p>
        
    </ServiceLayout>
  );
};

export default GoogleAdsManagement;
