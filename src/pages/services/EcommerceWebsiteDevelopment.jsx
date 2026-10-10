import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const EcommerceWebsiteDevelopment = () => {
  return (
    <ServiceLayout 
      title="E-commerce Website Development" 
      description="Secure and scalable online store development. We build functional e-commerce websites with shopping carts and payment gateways."
      url="/ecommerce-website-development"
      defaultService="E-commerce Website Development"
    >
      
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Start Selling Online with a Robust E-commerce Store</h2>
            <p className="mb-4 text-gray-600">
              Transform your retail business with a custom e-commerce website. We develop secure, high-performing online stores that provide a seamless shopping experience for your customers.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">E-commerce Features</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li>Comprehensive product catalogues and categorization.</li>
              <li>Secure shopping cart and checkout processes.</li>
              <li>Payment gateway integration for seamless transactions.</li>
              <li>Order management and tracking capabilities.</li>
              <li>Mobile-optimized shopping experience.</li>
              <li>SEO for product pages to improve visibility.</li>
            </ul>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Performance and Security</h3>
            <p className="mb-4 text-gray-600">
              We prioritize the security of customer data and the performance of your store, ensuring fast load times and reliable uptime during peak traffic periods.
            </p>
        
    </ServiceLayout>
  );
};

export default EcommerceWebsiteDevelopment;
