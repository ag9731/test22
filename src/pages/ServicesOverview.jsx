import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import { Globe, TrendingUp, Search, MapPin, Zap, Bot } from 'lucide-react';

const serviceCategories = [
  {
    title: "Website Development",
    icon: <Globe className="w-8 h-8 text-primary" />,
    description: "Professional, responsive websites built to convert visitors into clients.",
    links: [
      { name: "Website Design & Development", path: "/website-development" },
      { name: "Business Website Development", path: "/business-website-development" },
      { name: "E-commerce Website Development", path: "/ecommerce-website-development" },
      { name: "Website Redesign", path: "/website-redesign" },
      { name: "Web Application Development", path: "/web-application-development" },
      { name: "Mobile App Development", path: "/mobile-app-development" },
    ]
  },
  {
    title: "Digital Marketing",
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    description: "Data-driven marketing strategies to increase your online presence.",
    links: [
      { name: "Digital Marketing Services", path: "/digital-marketing" },
      { name: "Google Ads Management", path: "/google-ads-management" },
      { name: "Meta Ads Management", path: "/meta-ads-management" },
      { name: "Social Media Marketing", path: "/social-media-marketing" },
      { name: "Lead Generation", path: "/lead-generation" },
    ]
  },
  {
    title: "Search Engine Optimization",
    icon: <Search className="w-8 h-8 text-primary" />,
    description: "Improve your organic search rankings and drive sustainable traffic.",
    links: [
      { name: "SEO Services", path: "/seo-services" },
      { name: "Local SEO", path: "/local-seo" },
      { name: "Technical SEO", path: "/technical-seo" },
      { name: "On-Page SEO", path: "/on-page-seo" },
    ]
  },
  {
    title: "Google Business Profile",
    icon: <MapPin className="w-8 h-8 text-primary" />,
    description: "Optimize your local presence on Google Maps and search results.",
    links: [
      { name: "Google Business Profile Optimization", path: "/google-business-profile-optimization" },
      { name: "Google Maps Ranking", path: "/google-maps-ranking" },
      { name: "Google Business Profile Management", path: "/google-business-profile-management" },
    ]
  },
  {
    title: "AI Automation",
    icon: <Bot className="w-8 h-8 text-primary" />,
    description: "Streamline operations with smart AI-driven automation.",
    links: [
      { name: "AI Automation Services", path: "/ai-automation" },
      { name: "AI Chatbot Development", path: "/ai-chatbot-development" },
      { name: "Business Process Automation", path: "/business-process-automation" },
    ]
  }
];

const ServicesOverview = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="font-poppins bg-gray-50 min-h-screen">
      <SEO 
        title="Our Services" 
        description="Explore our comprehensive website development, digital marketing, SEO, and AI automation services to help your business grow." 
        url="/services" 
      />

      {/* Hero Section */}
      <section 
        className="text-white py-20 px-4 relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80)' }}
      >
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Comprehensive digital solutions to build your online presence, attract more customers, and automate your operations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceCategories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-800">{category.title}</h2>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">{category.description}</p>
              
              <ul className="space-y-3">
                {category.links.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.path} className="text-primary hover:text-blue-800 font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Need Help Choosing the Right Service?</h2>
          <p className="text-lg mb-8 opacity-90">Contact our experts to discuss your business goals and find the best digital solutions for your needs.</p>
          <Link to="/contact-us" className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-block">
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesOverview;
