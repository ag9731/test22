import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const LeadGeneration = () => {
  return (
    <ServiceLayout 
      title="Lead Generation Services" 
      description="Effective lead generation strategies using targeted advertising, optimized landing pages, and conversion tracking."
      url="/lead-generation"
      defaultService="Lead Generation Services"
    >
      
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Drive High-Quality Inquiries to Your Business</h2>
            <p className="mb-4 text-gray-600 text-lg">
              Our lead generation services focus on attracting relevant prospects and converting them into actionable inquiries through optimized marketing channels.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Our Lead Generation Strategy</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li>Multi-channel approach using Google Ads and Meta Ads.</li>
              <li>Development of high-converting landing pages.</li>
              <li>Implementation of website enquiry forms and lead capture methods.</li>
              <li>Rigorous conversion tracking to measure success.</li>
              <li>Continuous campaign optimization to improve lead quality and volume.</li>
            </ul>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Understanding Lead Quality</h3>
            <p className="mb-4 text-gray-600">
              Lead volume and quality depend on multiple factors, including targeting precision, your budget, the strength of your offer, and how quickly your team follows up. We focus on delivering the right prospects to your inbox.
            </p>
        
    </ServiceLayout>
  );
};

export default LeadGeneration;
