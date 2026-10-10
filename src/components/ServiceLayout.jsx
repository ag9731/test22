import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SEO from './SEO';
import ContactForm from './ContactForm';

const ServiceLayout = ({ title, description, url, children, defaultService }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const serviceCategories = [
    { name: "Website Development", path: "/website-development" },
    { name: "Digital Marketing", path: "/digital-marketing" },
    { name: "SEO Services", path: "/seo-services" },
    { name: "Google Ads Management", path: "/google-ads-management" },
    { name: "Google Business Profile", path: "/google-business-profile-optimization" },
    { name: "Lead Generation", path: "/lead-generation" },
    { name: "AI Automation", path: "/ai-automation" },
  ];

  return (
    <div className="bg-gray-50 font-poppins min-h-screen">
      <SEO title={title} description={description} url={url} />

      {/* Hero Section */}
      <section 
        className="text-white py-20 px-4 relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80)' }}
      >
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">{description}</p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row gap-10">
          
          {/* Left / Main Content */}
          <div className="lg:w-2/3 bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-100">
            {children}
          </div>

          {/* Right / Sidebar */}
          <div className="lg:w-1/3 flex flex-col gap-8">
            {/* Form Widget */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Get a Free Consultation</h3>
              <p className="text-sm text-gray-600 mb-6">Fill out the form below to discuss your project requirements.</p>
              <ContactForm defaultService={defaultService || title} isShortForm={true} />
            </div>

            {/* Related Services Widget */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Explore Services</h3>
              <ul className="flex flex-col gap-2">
                {serviceCategories.map((service, index) => (
                  <li key={index}>
                    <Link 
                      to={service.path} 
                      className={`block px-4 py-3 rounded transition-colors ${pathname === service.path ? 'bg-primary text-white' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ServiceLayout;
