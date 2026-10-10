import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactUs = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="font-poppins bg-gray-50 min-h-screen">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Parvi Digital for your website development and digital marketing needs. Request a free quote today." 
        url="/contact-us" 
      />

      {/* Hero Section */}
      <section 
        className="text-white py-20 px-4 relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1920&q=80)' }}
      >
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Have a project in mind? Let's discuss how we can help your business grow.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row gap-12">
          
          {/* Contact Details */}
          <div className="lg:w-1/3 flex flex-col gap-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form to request a free quote or consultation. Our team will get back to you as soon as possible to discuss your requirements in detail.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Phone & WhatsApp</h4>
                  <p className="text-gray-600 mt-1">+91 7619103418</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Email</h4>
                  <p className="text-gray-600 mt-1">contact@parvidigital.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Location</h4>
                  <p className="text-gray-600 mt-1">Bengaluru, Karnataka, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <h4 className="text-lg font-bold text-gray-800 mb-2">What Happens Next?</h4>
              <ul className="text-gray-600 space-y-2 text-sm list-disc pl-4">
                <li>We review your project requirements.</li>
                <li>We schedule a brief discovery call.</li>
                <li>We provide a customized proposal and timeline.</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-2/3 bg-white p-6 md:p-10 rounded-xl shadow-md border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
            <ContactForm isShortForm={false} />
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactUs;
