import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const DigitalMarketing = () => {
  return (
    <ServiceLayout 
      title="Digital Marketing Services" 
      description="Comprehensive digital marketing strategies to grow your business online. We offer Google Ads, Meta Ads, SEO, and social media marketing."
      url="/digital-marketing"
      defaultService="Digital Marketing Services"
    >
      
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Data-Driven Digital Marketing Strategies</h2>
            <p className="mb-4 text-gray-600">
              A beautiful website needs traffic to generate leads. Our digital marketing services are designed to increase your online visibility, attract relevant visitors, and convert them into customers.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Our Marketing Channels</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li><strong>Google Ads:</strong> Reach people actively searching for your services.</li>
              <li><strong>Meta Ads:</strong> Targeted advertising on Facebook and Instagram.</li>
              <li><strong>Search Engine Optimization (SEO):</strong> Improve your organic search rankings.</li>
              <li><strong>Social Media Marketing:</strong> Build brand awareness and engage your audience.</li>
              <li><strong>Lead Generation:</strong> Focused campaigns to capture high-quality inquiries.</li>
            </ul>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Choosing the Right Strategy</h3>
            <p className="mb-4 text-gray-600">
              The appropriate marketing strategy depends heavily on your specific business, target audience, budget, and overall objectives. We work with you to measure performance and optimize campaigns continuously.
            </p>
        
    </ServiceLayout>
  );
};

export default DigitalMarketing;
