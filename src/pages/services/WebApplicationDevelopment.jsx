import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const WebApplicationDevelopment = () => {
  return (
    <ServiceLayout 
      title="Web Application Development" 
      description="Custom web application development services. We build scalable business dashboards, workflow apps, and database-driven solutions."
      url="/web-application-development"
      defaultService="Web Application Development"
    >
      
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Custom Web Applications Tailored to Your Business</h2>
            <p className="mb-4 text-gray-600">
              When a standard website isn't enough, we build custom web applications to streamline your business operations, manage data, and improve efficiency.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Our Web App Solutions</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li>Custom business dashboards and portals.</li>
              <li>Workflow and process management applications.</li>
              <li>Secure, database-driven applications.</li>
              <li>Third-party API integrations.</li>
              <li>Robust user authentication and role-based access control.</li>
            </ul>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Development and Maintenance</h3>
            <p className="mb-4 text-gray-600">
              We follow a rigorous development and testing process to ensure your application is bug-free and secure. Post-launch, we offer ongoing maintenance to keep your software running smoothly.
            </p>
        
    </ServiceLayout>
  );
};

export default WebApplicationDevelopment;
