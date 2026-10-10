import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const LocalSeo = () => {
  return (
    <ServiceLayout 
      title="Local SEO Services" 
      description="Improve your visibility in local search results. We optimize your local listings, Google Business Profile, and location-specific pages."
      url="/local-seo"
      defaultService="Local SEO Services"
    >
      
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Dominate Local Search Results</h2>
            <p className="mb-4 text-gray-600">
              If your business serves specific geographic areas, local SEO is essential. We help you increase your visibility for customers searching for services near them.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Local SEO Strategies</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li>Targeted local keyword research.</li>
              <li>Creation of location-specific landing pages.</li>
              <li>Ensuring business information consistency (NAP) across the web.</li>
              <li>Google Business Profile optimization.</li>
              <li>Local business citations and directory listings where appropriate.</li>
              <li>Guidance on review generation and reputation management.</li>
            </ul>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Track Your Local Growth</h3>
            <p className="mb-4 text-gray-600">
              We monitor your local search performance closely to ensure you are capturing local demand effectively.
            </p>
        
    </ServiceLayout>
  );
};

export default LocalSeo;
