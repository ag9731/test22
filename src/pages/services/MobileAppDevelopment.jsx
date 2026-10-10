import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const MobileAppDevelopment = () => {
  return (
    <ServiceLayout 
      title="Mobile App Development" 
      description="Professional mobile application development services. We design and build intuitive apps for your business needs."
      url="/mobile-app-development"
      defaultService="Mobile App Development"
    >
      
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Engage Your Audience on the Go</h2>
            <p className="mb-4 text-gray-600">
              Bring your business directly to your customers' smartphones with our mobile app development services. We create functional, user-friendly applications that drive engagement.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Our App Development Process</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li>Comprehensive mobile application planning based on your business use cases.</li>
              <li>Intuitive user interface (UI) and user experience (UX) design.</li>
              <li>Robust backend and API integration for seamless data flow.</li>
              <li>Thorough testing across multiple devices.</li>
              <li>Deployment to app stores and ongoing maintenance.</li>
            </ul>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Let's Discuss Your App Idea</h3>
            <p className="mb-4 text-gray-600">
              Whether you need an internal business tool or a customer-facing app, our development team has the expertise to bring your vision to life.
            </p>
        
    </ServiceLayout>
  );
};

export default MobileAppDevelopment;
