import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const GoogleBusinessProfileManagement = () => {
  return (
    <ServiceLayout 
      title="Google Business Profile Management" 
      description="Ongoing management of your Google Business Profile. We handle updates, posts, and monitor performance insights."
      url="/google-business-profile-management"
      defaultService="Google Business Profile Management"
    >
      
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Ongoing Profile Maintenance for Local Success</h2>
            <p className="mb-4 text-gray-600">
              A Google Business Profile requires ongoing attention to remain competitive. Our management services ensure your profile stays active, accurate, and engaging.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Our Management Services Include</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li>Regular business information updates (hours, holidays, etc.).</li>
              <li>Keeping services and product categories up to date.</li>
              <li>Uploading new, relevant photos.</li>
              <li>Publishing regular business updates and promotional posts.</li>
              <li>Support and guidance for responding to customer reviews.</li>
              <li>Analyzing performance insights and local SEO metrics.</li>
            </ul>
        
    </ServiceLayout>
  );
};

export default GoogleBusinessProfileManagement;
