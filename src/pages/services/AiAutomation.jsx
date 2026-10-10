import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const AiAutomation = () => {
  return (
    <ServiceLayout 
      title="AI Automation Services" 
      description="Streamline your business operations with practical AI automation. Reduce repetitive tasks and improve efficiency."
      url="/ai-automation"
      defaultService="AI Automation Services"
    >
      
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Streamline Operations with Practical AI Workflows</h2>
            <p className="mb-4 text-gray-600">
              Artificial Intelligence isn't just a buzzword; it's a tool for practical business efficiency. We implement AI automation solutions that reduce manual effort and accelerate your workflows.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Practical Business Applications</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li>Automation of repetitive administrative tasks.</li>
              <li>AI-assisted customer enquiry handling and sorting.</li>
              <li>Efficient lead management workflows.</li>
              <li>Seamless API integrations between your existing business software.</li>
              <li>Comprehensive business process analysis to identify automation opportunities.</li>
            </ul>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Implementation</h3>
            <p className="mb-4 text-gray-600">
              We focus on building reliable, maintainable automations that solve real problems, rather than making vague AI claims.
            </p>
        
    </ServiceLayout>
  );
};

export default AiAutomation;
