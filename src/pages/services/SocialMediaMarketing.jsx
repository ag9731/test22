import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const SocialMediaMarketing = () => {
  return (
    <ServiceLayout 
      title="Social Media Marketing Services" 
      description="Professional social media marketing to build your brand online. We handle content planning, posting, and audience engagement."
      url="/social-media-marketing"
      defaultService="Social Media Marketing Services"
    >
      
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Build Brand Awareness and Engage Your Audience</h2>
            <p className="mb-4 text-gray-600">
              A strong social media presence helps you connect with your customers and build trust. We provide comprehensive social media marketing services to keep your audience engaged.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">What We Do</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li>Develop a tailored social media strategy for your brand.</li>
              <li>Content planning and creative development.</li>
              <li>Consistent social media page management.</li>
              <li>Audience engagement and community building.</li>
              <li>Performance monitoring to measure brand growth.</li>
            </ul>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Connecting with Your Market</h3>
            <p className="mb-4 text-gray-600">
              Whether you are B2B or B2C, we help identify which platforms are right for your business and create content that resonates with your target demographic.
            </p>
        
    </ServiceLayout>
  );
};

export default SocialMediaMarketing;
