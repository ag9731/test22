import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const TechnicalSeo = () => {
  return (
    <ServiceLayout 
      title="Technical SEO Services" 
      description="Technical SEO audits and optimization to ensure search engines can properly crawl and index your website."
      url="/technical-seo"
      defaultService="Technical SEO Services"
    >
      
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Build a Strong Foundation for Search Engines</h2>
            <p className="mb-4 text-gray-600">
              Great content won't rank if search engines can't access it. Our technical SEO services ensure your website's architecture is fully optimized for crawlability and indexability.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Technical SEO Components</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li>Comprehensive technical SEO audits.</li>
              <li>Optimization of XML sitemaps and robots.txt files.</li>
              <li>Implementation of canonical tags to prevent duplicate content.</li>
              <li>Management of proper URL redirects.</li>
              <li>Page speed and Core Web Vitals optimization.</li>
              <li>Mobile usability enhancements.</li>
              <li>Implementation of appropriate structured data (schema markup).</li>
            </ul>
        
    </ServiceLayout>
  );
};

export default TechnicalSeo;
