import React, { useState } from "react";
import { Laptop } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { AiOutlineArrowDown } from "react-icons/ai";

// Utility function for class names
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const HomePageWhatWeDo = () => {
  const services = [
    {
      id: 1,
      service: "UI/UX Design",
      serviceIcon: <Laptop className="w-8 h-8" />,
      serviceDesc:
        "Make your Brand better with easy-to-use designs. Pick our skilled UX/UI design services for a remarkable experience!",
      serviceList: [
        "Website UI/UX Design",
        "UI/UX Design for Web Applications",
        "Mobile App UI/UX Design",
        "Software UI/UX Design",
        "Web Application UI/UX Design",
        "Responsive Website Design",
        "Website Redesigning",
      ],
    },
    {
      id: 2,
      service: "Web Development",
      serviceIcon: <Laptop className="w-8 h-8" />,
      serviceDesc:
        "Looking for a professional website development experts to build your own website? We create unique custom designs & ensure functionality for a better online presence.",
      serviceList: [
        "Frontend Development",
        "Backend Development",
        "Full-Stack Development",
        "E-Commerce Solution",
        "Website Optimization Services",
        "Website Migration Services",
        "Custom Web Development",
        "Website Maintenance",
        "PHP Web Development",
        "Payment Gateway Integration",
      ],
    },
    {
      id: 3,
      service: "Mobile app development",
      serviceIcon: <Laptop className="w-8 h-8" />,
      serviceDesc:
        "Create, impress & lead. Our mobile app services excel, helping you stand out and succeed.",
      serviceList: [
        "Mobile Application Development",
        "Native App Development",
        "Android App Development",
        "Cross Platform App Development",
        "PWA Development",
        "Hybrid App Development",
      ],
    },
    {
      id: 4,
      service: "Web application development",
      serviceIcon: <Laptop className="w-8 h-8" />,
      serviceDesc:
        "Make your business bigger with our custom-made web app development services, designed just for you to help you grow.",
      serviceList: [
        "Custom Web Application Development",
        "E-Commerce Web Application Development",
        "Real-Time Web Applications",
        "Enterprise Web Application Development",
        "Web Application Modernization",
        "Cloud-Based Web Application Development",
        "CMS-Based Web Application Development",
      ],
    },
    {
      id: 5,
      service: "CMS Website Development",
      serviceIcon: <Laptop className="w-8 h-8" />,
      serviceDesc:
        "At Nexevo, our CMS Development Services provide you with a wide range of CMS options to meet your specific business requirements.",
      serviceList: [
        "WordPress Development",
        "Wordpress E-Commerce Website Development",
        "Shopify E-Commerce Website Development",
      ],
    },
    {
      id: 6,
      service: "Digital Marketing",
      // serviceIcon: <Laptop className="w-8 h-8" />,
      serviceDesc:
        "We provide comprehensive digital marketing services to grow your brand online, engage your audience, and drive conversions through data-driven strategies.",
      serviceList: [
        "Social Media Marketing (Facebook, Instagram, LinkedIn, etc.)",
        "Google Ads & PPC Campaigns",
        "Email Marketing Campaigns",
        "Content Marketing & Strategy",
        "Influencer & Affiliate Marketing",
        "Online Reputation Management",
      ],
    },

    {
      id: 7,
      service: "SEO Service",
      // serviceIcon: <Laptop className="w-8 h-8" />,
      serviceDesc:
        "Our SEO services are designed to improve your website’s visibility on search engines, drive organic traffic, and help your business rank higher on Google.",
      serviceList: [
        "On-Page SEO Optimization",
        "Off-Page SEO & Link Building",
        "Technical SEO Audits",
        "Keyword Research & Strategy",
        "Google Analytics & Search Console Setup",
      ],
    },
  ];

  const [selectedTab, setSelectedTab] = useState(services[0].id);

  return (
    <section className="container mx-auto py-8 md:py-14 px-4 md:px-6">
      {/* Title section */}
      <article className="mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl text-center font-bold text-[#252525] font-poppins">
          Explore Our Expertise
        </h1>
      </article>

      {/* Content section */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Services tabs */}
        <div className="lg:w-1/3">
          <ul className="flex flex-col gap-4">
            {services.map((service) => (
              <li key={service.id}>
                <button
                  id={service.service}
                  onClick={() => setSelectedTab(service.id)}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-lg transition-colors",
                    "hover:bg-muted",
                    selectedTab === service.id
                      ? "bg-primary text-white font-bold"
                      : "bg-background"
                  )}
                >
                  {service.service}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Vertical divider - visible only on larger screens */}
        <div className="hidden lg:block w-px bg-border" />
        <div className="flex flex-col justify-center items-start gap-5 lg:hidden md:hidden">
          <AiOutlineArrowDown />
          <div className="bg-primary flex w-full h-[3px]"></div>
        </div>
        {/* Service details */}
        <div className="lg:w-2/3 bg-slate-100 p-2">
          {services.map((service) =>
            selectedTab === service.id ? (
              <div
                key={service.id}
                className="space-y-6 animate-in fade-in slide-in-from-right-5 duration-300"
              >
                <div className="flex items-center gap-3">
                  {service.serviceIcon}
                  <h2 className="text-xl md:text-2xl font-semibold">
                    {service.service}
                  </h2>
                </div>

                <p className="text-muted-foreground">{service.serviceDesc}</p>

                <div className="grid gap-2 sm:grid-cols-2">
                  {service.serviceList.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-2  rounded-lg hover:bg-muted"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
};

export default HomePageWhatWeDo;
