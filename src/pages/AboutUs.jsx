import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';
import image from "../assets/digital marketing agency bangalore.png";

const AboutUs = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="font-poppins bg-gray-50 min-h-screen">
      <SEO 
        title="About Us" 
        description="Learn more about Parvi Digital, our mission, and our approach to website development and digital marketing." 
        url="/about-us" 
      />

      {/* Hero Section */}
      <section 
        className="text-white py-20 px-4 relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80)' }}
      >
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Parvi Digital</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Empowering businesses through cutting-edge website development and strategic digital marketing.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <img src={image} alt="Parvi Digital Team" className="rounded-xl shadow-md w-full h-auto object-cover" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At Parvi Digital, our mission is to help businesses build a strong, credible online presence. We specialize in custom website development, targeted digital marketing, SEO, and lead generation designed to drive real growth for your business.
            </p>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Approach</h2>
            <p className="text-gray-600 mb-6">
              We don't believe in generic templates or empty marketing promises. Our approach is deeply rooted in understanding your unique business requirements. From planning and design to development and launch, we prioritize mobile-friendliness, fast load times, and conversion-focused strategies.
            </p>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Work With Us?</h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-6">
              <li>Comprehensive solutions tailored to your business goals.</li>
              <li>Focus on performance, SEO, and mobile usability.</li>
              <li>Transparent communication and clear project workflows.</li>
              <li>Website development and digital marketing support under one roof.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Project Workflow</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {["1. Understand Requirements", "2. Plan Solution", "3. Design & Develop", "4. Review & Test", "5. Launch & Support"].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-center font-semibold text-gray-700 h-32">
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-lg mb-8 opacity-90">Let's discuss how our website development and digital marketing services can help you reach your goals.</p>
          <Link to="/contact-us" className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-block">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
