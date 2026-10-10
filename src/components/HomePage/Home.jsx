import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import SEO from "../SEO";
import ContactForm from "../ContactForm";
import image from "../../assets/digital marketing agency bangalore.png";
import workspaceImage from "../../assets/workspace.jpg";
import abstractImage from "../../assets/marketing_abstract.jpg";
import heroBg from "../../assets/hero_bg.jpg";
import { Globe, TrendingUp, Search, MapPin, Target, Monitor, CheckCircle, ChevronDown } from 'lucide-react';

const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const services = [
    { title: "Website Development", description: "Custom, fast, and mobile-friendly websites.", path: "/website-development", icon: <Globe className="w-8 h-8 text-primary" /> },
    { title: "Digital Marketing", description: "Data-driven marketing to increase visibility.", path: "/digital-marketing", icon: <TrendingUp className="w-8 h-8 text-primary" /> },
    { title: "Google Ads Management", description: "Targeted search ads to drive quality leads.", path: "/google-ads-management", icon: <Target className="w-8 h-8 text-primary" /> },
    { title: "SEO Services", description: "Improve your organic search engine rankings.", path: "/seo-services", icon: <Search className="w-8 h-8 text-primary" /> },
    { title: "Google Business Profile", description: "Optimize your local presence on Google Maps.", path: "/google-business-profile-optimization", icon: <MapPin className="w-8 h-8 text-primary" /> },
    { title: "AI Automation", description: "Streamline tasks with AI-driven workflows.", path: "/ai-automation", icon: <Monitor className="w-8 h-8 text-primary" /> },
  ];

  const faqs = [
    { q: "How long does it take to build a website?", a: "A standard business website typically takes 2-4 weeks from planning to launch, depending on the complexity and your requirements." },
    { q: "Do you guarantee first-page rankings on Google?", a: "No agency can guarantee first-page rankings as Google's algorithm is independent. However, we apply proven SEO best practices to consistently improve your visibility and organic traffic." },
    { q: "What budget is required for Google Ads?", a: "The required budget depends on your industry, competition, and goals. We recommend a starting budget that allows for sufficient data collection and optimization, usually discussed during our initial consultation." },
    { q: "Will my website be mobile-friendly?", a: "Yes, every website we develop is fully responsive and optimized for mobile devices, ensuring a seamless user experience across smartphones and tablets." }
  ];

  return (
    <div className="font-poppins flex flex-col min-h-screen">
      <SEO 
        title="Website Development and Digital Marketing Agency" 
        description="Parvi Digital helps businesses build a strong online presence through website development, SEO, Google Ads, and digital marketing services." 
        url="/" 
      />

      {/* Section 1: Hero */}
      <section 
        className="text-white py-24 px-4 relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-12 relative z-10">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Website Development and Digital Marketing for Growing Businesses
            </h1>
            <p className="text-sm md:text-base mb-8 opacity-90 leading-relaxed">
              Parvi Digital helps businesses build a strong online presence through custom website development, strategic digital marketing, SEO, Google Ads, and lead generation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact-us" className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg">
                Let's Talk
              </Link>
              <Link to="/services" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">
                Explore Our Services
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end text-black">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-2xl w-[90%] md:w-[70%] flex flex-col items-center">
              <h3 className="text-xl font-bold mb-4 text-center">Let's Discuss Your Project</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Introduction */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img src={workspaceImage} alt="Web Development Workspace" className="rounded-2xl shadow-xl w-full h-auto object-cover border-4 border-white" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 relative inline-block">
              Who We Are
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-blue-500 rounded-full"></span>
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Parvi Digital is a dedicated team of developers and digital marketers. We partner with startups, local businesses, and established enterprises to solve their digital challenges. Whether you need a high-performing website that accurately represents your brand or a targeted marketing campaign that generates qualified leads, we provide transparent, results-focused solutions tailored to your unique requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Services */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Our Core Services</h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">Comprehensive solutions to scale your business online.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all flex flex-col h-full group">
                <div className="bg-white w-12 h-12 rounded-lg shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-xs text-gray-600 mb-4 flex-grow">{service.description}</p>
                <Link to={service.path} className="text-primary font-bold flex items-center gap-2 hover:text-blue-800 text-sm">
                  Learn More &rarr;
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-lg font-bold hover:bg-primary hover:text-white transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose Us */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Why Choose Parvi Digital?</h2>
              <p className="text-sm text-gray-600 mb-6">
                We believe in delivering actual value rather than empty promises. Our strategies are built around your specific business goals.
              </p>
              <ul className="space-y-4">
                {[
                  "Solutions based entirely on your business requirements.",
                  "Mobile-friendly and search-optimized website architectures.",
                  "Transparent reporting and clear communication.",
                  "Comprehensive support from design to marketing under one roof."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 w-5 h-5 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2">
              <img src={abstractImage} alt="Digital Marketing abstract" className="rounded-2xl shadow-xl w-full h-auto object-cover border-4 border-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Industries We Serve */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Industries We Serve</h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">We provide tailored digital strategies and cutting-edge web solutions across a diverse range of sectors.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Real Estate", desc: "Property listings & lead generation." },
              { name: "Healthcare", desc: "Clinic websites & local patient SEO." },
              { name: "E-commerce", desc: "Scalable online stores & sales funnels." },
              { name: "Education", desc: "E-learning platforms & institution sites." },
              { name: "Startups", desc: "SaaS landing pages & growth hacking." },
              { name: "Local Business", desc: "Google Maps ranking & local visibility." }
            ].map((industry, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 bg-blue-100 text-primary rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <CheckCircle size={20} />
                </div>
                <h3 className="text-base font-bold text-gray-800 mb-2">{industry.name}</h3>
                <p className="text-xs text-gray-600">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Our Process */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Our Simple Workflow</h2>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto">How we take your project from concept to successful launch.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {[
              { step: "1", title: "Understand", desc: "We analyze your business requirements." },
              { step: "2", title: "Plan", desc: "We map out the optimal solution." },
              { step: "3", title: "Design & Build", desc: "We develop the assets and architecture." },
              { step: "4", title: "Review", desc: "Rigorous testing and quality assurance." },
              { step: "5", title: "Launch", desc: "Deployment and ongoing support." },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-lg font-bold mb-4 border-4 border-blue-800">
                  {item.step}
                </div>
                <h4 className="text-base font-bold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 cursor-pointer text-sm">
                <summary className="flex justify-between items-center font-bold text-gray-800 list-none">
                  {faq.q}
                  <ChevronDown className="transition-transform group-open:rotate-180 text-gray-400" />
                </summary>
                <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Contact CTA */}
      <section className="py-20 px-4 bg-white border-t">
        <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Ready to Discuss Your Project?</h2>
            <p className="text-sm text-gray-600 mb-8 leading-relaxed">
              Contact us today for a free consultation. Tell us about your business goals, and our team will provide a tailored strategy to help you achieve them.
            </p>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h4 className="text-sm font-bold text-gray-800 mb-2">Direct Contact</h4>
              <p className="text-xs text-gray-600 mb-1"><strong>Phone:</strong> +91 7619103418</p>
              <p className="text-xs text-gray-600"><strong>Email:</strong> contact@parvidigital.com</p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-6">Request a Free Quote</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
