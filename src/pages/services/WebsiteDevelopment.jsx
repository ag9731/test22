import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const WebsiteDevelopment = () => {
  return (
    <ServiceLayout 
      title="Website Development Services" 
      description="Professional website development services for businesses. We build fast, mobile-responsive, and custom websites tailored to your business needs."
      url="/website-development"
      defaultService="Website Development Services"
    >
      
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Custom Website Design & Development</h2>
            <p className="mb-4 text-gray-600">
              A professionally developed website is the foundation of your online presence. At Parvi Digital, we build fast, secure, and mobile-friendly websites that help you present your services and receive inquiries effectively.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">What We Offer</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li>Responsive website development for all devices.</li>
              <li>Custom business websites tailored to your requirements.</li>
              <li>Performance optimization for fast loading speeds.</li>
              <li>Mobile usability and seamless user experience.</li>
              <li>Website redesign for outdated sites.</li>
              <li>Ongoing website maintenance and support.</li>
            </ul>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Our Development Process</h3>
            <p className="mb-4 text-gray-600">
              We start by understanding your business goals, target audience, and functional requirements. Then, our team designs a customized layout before proceeding with full-stack development, rigorous testing, and launch.
            </p>
        
    </ServiceLayout>
  );
};

export default WebsiteDevelopment;
