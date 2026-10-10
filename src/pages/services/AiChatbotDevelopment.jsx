import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const AiChatbotDevelopment = () => {
  return (
    <ServiceLayout 
      title="AI Chatbot Development" 
      description="Custom AI chatbot development for websites. Automate customer support, capture leads, and answer FAQs 24/7."
      url="/ai-chatbot-development"
      defaultService="AI Chatbot Development"
    >
      
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Intelligent Website Chatbots for 24/7 Engagement</h2>
            <p className="mb-4 text-gray-600">
              Improve your website's customer experience and capture leads around the clock with custom AI chatbot solutions.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Chatbot Capabilities</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li>Automated customer enquiry handling.</li>
              <li>Instant answers to frequently asked questions (FAQs).</li>
              <li>Seamless lead capture and data collection.</li>
              <li>Training chatbots on your specific business knowledge sources.</li>
              <li>Smooth human handoff when complex support is required.</li>
            </ul>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Reliable Integration</h3>
            <p className="mb-4 text-gray-600">
              We implement rigorously tested chatbots that integrate cleanly with your website and supported CRM systems.
            </p>
        
    </ServiceLayout>
  );
};

export default AiChatbotDevelopment;
