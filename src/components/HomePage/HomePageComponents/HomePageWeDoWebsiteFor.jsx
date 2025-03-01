import React, { useState } from "react";
import { AiFillPlusCircle, AiFillCloseSquare } from "react-icons/ai";

const HomePageWeDoWebsiteFor = () => {
  const serviceArray = [
    {
      id: 1,
      buisinesstitile: "Startups & Small Businesses",
      buisinessDesc:
        "Launch your brand with a powerful website & strategic marketing. We provide cost-effective solutions to help you grow online.",
    },
    {
      id: 2,
      buisinesstitile: "E-commerce & Retail",
      otherService: [
        {
          id: 1,
          title: "Website Development for Online Stores",
        },
        {
          id: 2,
          title: " E-commerce SEO & Marketing",
        },
      ],
      buisinessDesc:
        "Boost your sales with a user-friendly eCommerce website, secure payment gateways, and performance-driven digital marketing strategies.",
    },
    {
      id: 3,
      buisinesstitile: "Corporate & Enterprises",
      otherService: [
        {
          id: 1,
          title: "Custom Website Solutions",
        },
        {
          id: 2,
          title: "B2B Lead Generation",
        },
      ],
      buisinessDesc:
        "We develop scalable websites and result-oriented marketing campaigns tailored for enterprises.",
    },
    {
      id: 4,
      buisinesstitile: "Healthcare & Medical Professionals",
      otherService: [
        {
          id: 1,
          title: "Clinic & Hospital Websites",
        },
        {
          id: 2,
          title: "SEO for Healthcare",
        },
      ],
      buisinessDesc:
        "A strong online presence helps patients find your services easily. Our team builds HIPAA-compliant medical websites with appointment booking features.",
    },
    {
      id: 5,
      buisinesstitile: "Real Estate & Construction",
      otherService: [
        {
          id: 1,
          title: "Real Estate Website Development",
        },
        {
          id: 2,
          title: "Google Ads for Property Sales",
        },
      ],
      buisinessDesc:
        "Get high-converting websites with property listing features and digital marketing strategies to attract potential buyers.",
    },
    {
      id: 6,
      buisinesstitile: "Education & E-learning",
      otherService: [
        {
          id: 1,
          title: "Educational Websites & LMS Development",
        },
        {
          id: 2,
          title: "SEO for Online Courses",
        },
      ],
      buisinessDesc:
        "We help institutions and e-learning platforms with user-friendly websites and online marketing to boost enrollments.",
    },
    {
      id: 7,
      buisinesstitile: "Restaurants & Hospitality",
      otherService: [
        {
          id: 1,
          title: "Restaurant Website Development",
        },
        {
          id: 2,
          title: "Google My Business & Local SEO",
        },
      ],
      buisinessDesc:
        "Get more reservations with attractive restaurant websites and local SEO that ranks your business higher.",
    },
    {
      id: 8,
      buisinesstitile: "Law Firms & Consultants",
      otherService: [
        {
          id: 1,
          title: "Law Firm Website Development",
        },
        {
          id: 2,
          title: "Lead Generation for Lawyers",
        },
      ],
      buisinessDesc:
        "We build professional websites for law firms and provide strategic digital marketing to attract potential clients.",
    },
  ];

  const [popUp, setPopup] = useState(null);

  const handleOpen = (id) => {
    setPopup(popUp === id ? null : id);
  };

  return (
    <section className="bg-primary py-6 sm:py-10 mt-10 sm:mt-20">
      <section className="container mx-auto flex flex-col gap-8 sm:gap-16 px-4 sm:px-6">
        {/* Title Section */}
        <article className="flex flex-col items-center gap-3 sm:gap-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium font-poppins text-white text-center">
            Industries We Serve – Website Development & Digital Marketing
          </h1>
          <div className="bg-white w-20 sm:w-40 h-[2px]"></div>
        </article>

        {/* Description Section */}
        <section className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {serviceArray.map((service) => (
              <div key={service.id} className="relative">
                <div className="flex flex-col py-4 sm:py-5 items-center gap-4 sm:gap-5 shadow-lg hover:shadow-xl transition-shadow rounded-lg bg-primary-dark px-3 sm:px-5">
                  <div className="min-h-[3.5rem] sm:min-h-[4rem] flex items-center">
                    <h2 className="text-lg sm:text-xl text-center font-medium text-white">
                      {service.buisinesstitile}
                    </h2>
                  </div>
                  <button
                    onClick={() => handleOpen(service.id)}
                    className="transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full"
                  >
                    <AiFillPlusCircle className="text-3xl sm:text-4xl text-secondary" />
                  </button>
                </div>

                {/* Popup Modal */}
                {popUp === service.id && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50">
                    <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-xl p-4 sm:p-6">
                      <button
                        onClick={() => handleOpen(null)}
                        className="absolute right-2 top-2 text-primary hover:text-primary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
                      >
                        <AiFillCloseSquare className="text-2xl sm:text-3xl" />
                      </button>

                      <div className="mt-6 space-y-4">
                        <p className="text-base sm:text-lg text-gray-700">
                          {service.buisinessDesc}
                        </p>

                        {service.otherService &&
                        service.otherService.length > 0 ? (
                          <div className="mt-4">
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">
                              Our Services
                            </h3>
                            <ul className="space-y-2">
                              {service.otherService.map((other) => (
                                <li
                                  key={other.id}
                                  className="flex items-center gap-2 text-base sm:text-lg text-gray-700"
                                >
                                  <div className="h-2 w-2 rounded-full bg-primary" />
                                  {other.title}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <p className="text-gray-500 italic">
                            No additional services
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </section>
    </section>
  );
};

export default HomePageWeDoWebsiteFor;
