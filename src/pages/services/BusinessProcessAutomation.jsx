import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const BusinessProcessAutomation = () => {
  return (
    <ServiceLayout 
      title="Business Process Automation" 
      description="Automate your business processes to save time and reduce errors. We connect your tools and build efficient workflows."
      url="/business-process-automation"
      defaultService="Business Process Automation"
    >
      
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Save Time by Automating Repetitive Tasks</h2>
            <p className="mb-4 text-gray-600">
              Manual data entry and disjointed systems slow your business down. We analyze your workflows and build automations that connect your tools and process data seamlessly.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">What We Automate</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li>Identifying and mapping repetitive manual tasks.</li>
              <li>Automated form and data processing.</li>
              <li>Internal notification systems (e.g., Slack, Email alerts).</li>
              <li>CRM and business tool integrations.</li>
              <li>AI-assisted data sorting and tagging.</li>
            </ul>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Custom Solutions</h3>
            <p className="mb-4 text-gray-600">
              The exact automation solution depends heavily on your unique business processes and the systems you currently use. We provide robust testing and error handling to ensure reliability.
            </p>
        
    </ServiceLayout>
  );
};

export default BusinessProcessAutomation;
