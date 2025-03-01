"use client";

import { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";

const HomePageFaqs = () => {
  const faqs = [
    {
      id: 1,
      title: "What services does your website development agency offer?",
      desc: "We specialize in website development in Bangalore, offering custom website design, eCommerce solutions, WordPress development, and more. Our expert website developers in Bangalore create high-performance websites tailored to your business needs.",
    },
    {
      id: 2,
      title: "Why should I choose your digital marketing agency in Bangalore?",
      desc: "As a leading digital marketing agency in Bangalore, we provide SEO, social media marketing, PPC, content marketing, and other online growth strategies to help businesses achieve their digital goals.",
    },
    {
      id: 3,
      title: "How much does website development cost in Bangalore?",
      desc: "The cost of website development in Bangalore depends on factors like design complexity, features, and customization. Contact us for a free quote tailored to your requirements.",
    },
    {
      id: 4,
      title: "How can a digital marketing agency help grow my business?",
      desc: "Our digital marketing agency helps businesses increase online visibility, generate leads, and boost sales through data-driven marketing strategies, including SEO, paid ads, and content marketing.",
    },
    {
      id: 5,
      title: "How long does it take to develop a website?",
      desc: "The timeline for website development varies based on the project scope. A simple website may take 2–4 weeks, while a complex eCommerce platform can take 6–12 weeks. Our website developers in Bangalore ensure timely delivery with high-quality results.",
    },
  ];

  const [activeTab, setActiveTab] = useState(null);

  const handleToggle = (id) => {
    setActiveTab(activeTab === id ? null : id);
  };

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title section */}
        <article className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold text-gray-900 font-poppins mb-4">
            FAQ's
          </h1>
          <p className="font-poppins text-center text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            Here are answers to some common queries related to website
            development in Bangalore, website design services, digital
            marketing, and SEO to help you grow your online presence
            effectively.
          </p>
        </article>

        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
          {faqs.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="flex justify-between items-center w-full text-left bg-white hover:bg-gray-50 transition-colors duration-150 ease-in-out py-4 px-4 sm:px-6"
                onClick={() => handleToggle(item.id)}
                aria-expanded={activeTab === item.id}
              >
                <span className="flex items-center space-x-3 sm:space-x-4">
                  <span className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm sm:text-base font-semibold">
                    {item.id}
                  </span>
                  <span className="font-poppins text-sm sm:text-base md:text-lg text-gray-900 font-medium pr-8">
                    {item.title}
                  </span>
                </span>
                <AiOutlineCaretDown
                  className={`flex-shrink-0 w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    activeTab === item.id ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {activeTab === item.id && (
                <div className="bg-gray-50 py-4 px-4 sm:px-6">
                  <p className="font-poppins text-sm sm:text-base text-gray-600">
                    {item.desc}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePageFaqs;
