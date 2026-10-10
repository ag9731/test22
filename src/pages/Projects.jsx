import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import { Code, TrendingUp, Search, PenTool, CheckCircle, BarChart3, Users, Zap } from 'lucide-react';

const capabilities = [
  {
    icon: <Code className="w-10 h-10 text-primary mb-4" />,
    title: "Custom Web Solutions",
    description: "We don't use cookie-cutter templates. Every website is custom-designed and developed to meet your specific business requirements, ensuring a unique and scalable digital presence."
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-primary mb-4" />,
    title: "Data-Driven Marketing",
    description: "Our marketing campaigns are built on analytics and data. We track every click, lead, and conversion to optimize your ROI and scale what actually works."
  },
  {
    icon: <Search className="w-10 h-10 text-primary mb-4" />,
    title: "Search Dominance",
    description: "From technical audits to localized Google Maps optimization, we ensure your business is exactly where your customers are looking when they need you most."
  },
  {
    icon: <PenTool className="w-10 h-10 text-primary mb-4" />,
    title: "UI/UX Excellence",
    description: "We believe good design is good business. Our interfaces are crafted to be intuitive, fast, and accessible, driving higher engagement and lower bounce rates."
  }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "We start by deeply understanding your business, target audience, and competitors. We then map out a tailored strategy designed to achieve your specific growth goals."
  },
  {
    step: "02",
    title: "Design & Development",
    description: "Our team creates wireframes, finalizes the UI/UX, and develops the technical architecture using the latest, fastest, and most secure web technologies."
  },
  {
    step: "03",
    title: "Testing & Optimization",
    description: "Before going live, we rigorously test across all devices and browsers. We optimize loading speeds, technical SEO, and ensure full accessibility compliance."
  },
  {
    step: "04",
    title: "Launch & Growth",
    description: "After a successful launch, we implement targeted digital marketing campaigns—scaling your traffic, generating leads, and continuously refining our approach."
  }
];

const Projects = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="font-poppins bg-gray-50 min-h-screen">
      <SEO 
        title="Our Work & Capabilities | Parvi Digital" 
        description="Learn about Parvi Digital's process, our core capabilities, and how we deliver consistent digital growth for our clients." 
        url="/projects" 
      />

      {/* Hero Section */}
      <section 
        className="text-white py-20 px-4 relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80)' }}
      >
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Our Work & Capabilities</h1>
          <p className="text-sm md:text-base max-w-2xl mx-auto opacity-90 leading-relaxed">
            At Parvi Digital, we measure our success by the growth we generate for our clients. Discover our core capabilities and the proven process we use to deliver exceptional digital experiences.
          </p>
        </div>
      </section>

      {/* Metrics / Value Proposition */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="p-4">
              <div className="flex justify-center mb-3">
                <BarChart3 className="text-green-500 w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-1">Results Focused</h3>
              <p className="text-sm text-gray-500">Every campaign targets measurable ROI.</p>
            </div>
            <div className="p-4">
              <div className="flex justify-center mb-3">
                <Users className="text-blue-500 w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-1">Client Centric</h3>
              <p className="text-sm text-gray-500">Transparent reporting & direct communication.</p>
            </div>
            <div className="p-4">
              <div className="flex justify-center mb-3">
                <Zap className="text-yellow-500 w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-1">High Performance</h3>
              <p className="text-sm text-gray-500">Fast, scalable, and secure web solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Core Capabilities</h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              We bring together design, engineering, and marketing to build comprehensive digital ecosystems.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                {cap.icon}
                <h3 className="text-xl font-bold text-gray-800 mb-3">{cap.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Our Proven Process</h2>
              <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                Consistency is key to digital success. We follow a strict, battle-tested methodology to ensure every project is delivered on time, within scope, and optimized for maximum impact.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                  <CheckCircle className="text-green-500 w-5 h-5 shrink-0" /> No hidden fees or surprises.
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                  <CheckCircle className="text-green-500 w-5 h-5 shrink-0" /> Regular milestone updates.
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                  <CheckCircle className="text-green-500 w-5 h-5 shrink-0" /> Dedicated project management.
                </li>
              </ul>
            </div>
            
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {processSteps.map((step, idx) => (
                  <div key={idx} className="relative bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <div className="text-4xl font-black text-gray-200 absolute top-4 right-4">{step.step}</div>
                    <h4 className="text-lg font-bold text-gray-800 mb-3 relative z-10">{step.title}</h4>
                    <p className="text-xs text-gray-600 relative z-10 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-sm md:text-base mb-8 opacity-90">Let's collaborate to build something great for your business.</p>
          <Link to="/contact-us" className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-block shadow-lg">
            Request a Proposal
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;
