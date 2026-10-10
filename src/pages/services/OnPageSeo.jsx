import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const OnPageSeo = () => {
  return (
    <ServiceLayout 
      title="On-Page SEO Services" 
      description="Optimize your website content, meta tags, and structure with our on-page SEO services for better search relevance."
      url="/on-page-seo"
      defaultService="On-Page SEO Services"
    >
      
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Optimize Your Content for Search Relevance</h2>
            <p className="mb-4 text-gray-600">
              On-page SEO ensures that search engines understand exactly what your pages are about. We optimize individual web pages to rank higher and earn more relevant traffic.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">On-Page Optimization Includes</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li>Crafting compelling title tags and meta descriptions.</li>
              <li>Establishing a logical heading hierarchy (H1, H2, H3).</li>
              <li>Keyword mapping and natural content optimization.</li>
              <li>Adding descriptive image alt text.</li>
              <li>Improving internal link structure.</li>
              <li>Creating clean, readable URL structures.</li>
              <li>Aligning content quality with user search intent.</li>
            </ul>
        
    </ServiceLayout>
  );
};

export default OnPageSeo;
