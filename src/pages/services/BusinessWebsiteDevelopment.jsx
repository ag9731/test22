import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const BusinessWebsiteDevelopment = () => {
  return (
    <ServiceLayout 
      title="Business Website Development" 
      description="Professional website development for small and medium-sized businesses. Get a mobile-friendly, search-optimized business website today."
      url="/business-website-development"
      defaultService="Business Website Development"
    >
      
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Websites for Small and Medium-Sized Businesses</h2>
            <p className="mb-4 text-gray-600">
              A business website is often the first point of contact for potential clients. We build clean, professional, and informative websites that establish trust and credibility for your brand.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Key Features of Our Business Websites</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li>Clear business information and service pages.</li>
              <li>Mobile-friendly design for browsing on the go.</li>
              <li>Integrated contact forms and easy navigation.</li>
              <li>WhatsApp and call-to-action buttons.</li>
              <li>Search engine optimization foundations.</li>
            </ul>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Pricing and Launch</h3>
            <p className="mb-4 text-gray-600">
              Pricing depends on the number of pages, custom features, and integration requirements. Contact us for a precise quote. We also provide ongoing website maintenance to ensure your business remains online without interruptions.
            </p>
        
    </ServiceLayout>
  );
};

export default BusinessWebsiteDevelopment;
