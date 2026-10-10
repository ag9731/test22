import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const SeoServices = () => {
  return (
    <ServiceLayout 
      title="Search Engine Optimization (SEO) Services" 
      description="Comprehensive SEO services to improve your organic search visibility. We offer technical SEO, on-page optimization, and content strategy."
      url="/seo-services"
      defaultService="Search Engine Optimization (SEO) Services"
    >
      
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Improve Your Organic Search Visibility</h2>
            <p className="mb-4 text-gray-600 text-lg">
              Unlike paid advertising, organic search visibility (SEO) provides long-term traffic and credibility. We implement proven SEO strategies to help your website rank better over time.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Our Comprehensive SEO Approach</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li>In-depth keyword research and competitor analysis.</li>
              <li>Technical SEO to ensure your site is easily crawled and indexed.</li>
              <li>On-page SEO, including title tags, meta descriptions, and heading hierarchy.</li>
              <li>Content optimization tailored to user search intent.</li>
              <li>Strategic internal linking to distribute page authority.</li>
              <li>Website performance optimization and Search Console monitoring.</li>
            </ul>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Setting Expectations</h3>
            <p className="mb-4 text-gray-600">
              SEO is a long-term investment. While we apply best practices to improve your visibility, search engines use complex algorithms. Therefore, we never guarantee first-page rankings or a specific ranking position, but we focus on measurable growth in organic traffic.
            </p>
        
    </ServiceLayout>
  );
};

export default SeoServices;
