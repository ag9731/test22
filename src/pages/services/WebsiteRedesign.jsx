import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const WebsiteRedesign = () => {
  return (
    <ServiceLayout 
      title="Website Redesign Services" 
      description="Modernize your outdated website with our redesign services. Improve user experience, mobile responsiveness, and overall performance."
      url="/website-redesign"
      defaultService="Website Redesign Services"
    >
      
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Breathe New Life into Your Outdated Website</h2>
            <p className="mb-4 text-gray-600">
              An outdated website can cost you clients. We specialize in modernizing existing websites, improving their visual appeal, functionality, and search engine performance.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Why Redesign Your Website?</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li>Improve mobile responsiveness for modern devices.</li>
              <li>Enhance user experience and simplify navigation.</li>
              <li>Optimize performance and page load speeds.</li>
              <li>Implement conversion-focused layouts to generate more leads.</li>
              <li>Careful SEO migration to preserve your existing search rankings.</li>
            </ul>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Our Redesign Approach</h3>
            <p className="mb-4 text-gray-600">
              We analyze your current website's weaknesses and retain what works. We ensure that existing URLs are preserved where possible and implement proper redirects to avoid losing traffic.
            </p>
        
    </ServiceLayout>
  );
};

export default WebsiteRedesign;
