"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import parviDigitalBannerImage from "../../../assets/Parvi_Digital_Marketing_Web_Design_Company_Bangalore/website-design-company-in-bangalore.png";
import { AiFillQuestionCircle } from "react-icons/ai";
import { motion } from "framer-motion";

const text = "WEB DESIGNING AND DIGITAL MARKETING AGENCY IN BANGALORE, INDIA.";

const HomePageBanner = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x88g09g",
        "template_vq1ugun",
        form.current,
        "ml4dB1qI77ZyKN9LM"
      )
      .then(
        () => {
          setShowPopup(true); // show popup
          form.current.reset(); // clear fields
          setTimeout(() => setShowPopup(false), 3000); // auto hide
        },
        () => {
          setShowPopup(true);
          setTimeout(() => setShowPopup(false), 3000);
        }
      );
  };

  return (
    <>
      {/* 🔥 Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50">
          <div className="bg-white shadow-xl rounded-xl p-6 w-[90%] max-w-md text-center animate-popup">
            <h2 className="text-xl font-semibold text-green-600">
              Form Submitted Successfully!
            </h2>
            <p className="text-gray-600 mt-2">
              Thank you for contacting us. We will get back to you shortly.
            </p>
          </div>
        </div>
      )}

      <section className="bg-primary bg-opacity-5 min-h-[80vh] py-12 md:py-16 lg:py-0 lg:h-[80vh] flex items-center">
        <article className="flex flex-col-reverse lg:flex-row gap-10 container mx-auto px-4 md:px-6">
          {/* Left Section */}
          <div className="flex-1 flex flex-col justify-center gap-5 items-start">
            <header className="flex flex-col gap-5">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium font-poppins leading-tight">
                {text.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 10 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>

              <div className="bg-secondary w-32 sm:w-40 md:w-52 h-[5px] rounded-full animate-slide-in"></div>

              <h2 className="text-lg sm:text-xl font-poppins">
                We also specialize in SEO and Mobile App Development Services
              </h2>
            </header>

            <p className="font-poppins text-sm sm:text-base">
              Our team helps businesses grow through innovative website design,
              effective digital marketing strategies, and cutting-edge mobile
              applications.
            </p>

            <a href="#contact-us">
              <div className="flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-primary mt-3">
                <button className="font-semibold text-white font-poppins text-sm sm:text-base">
                  Enquiry Now
                </button>
                <AiFillQuestionCircle className="fill-white text-lg sm:text-xl" />
              </div>
            </a>
          </div>

          {/* Right Section – FORM */}
          <aside className="flex-1 flex justify-center items-center lg:mt-0">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-4 w-[70%]"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="p-2 border border-[#2563eb] rounded"
              />

              <input
                type="text"
                name="user_mobile"
                placeholder="Mobile Number"
                required
                className="p-2 border border-[#2563eb] rounded"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="p-2 border border-[#2563eb] rounded"
              />

              <select
                name="user_service"
                required
                className="p-2 border border-[#2563eb] rounded"
              >
                <option value="">Select a Service</option>
                <option value="web_design">Web Design</option>
                <option value="seo">SEO</option>
                <option value="digital_marketing">Digital Marketing</option>
                <option value="app_development">App Development</option>
              </select>

              <textarea
                name="message"
                placeholder="Buisiness Location Type Of Buisiness"
                required
                className="p-2 border border-[#2563eb] rounded"
              ></textarea>

              <button
                type="submit"
                className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </aside>
        </article>
      </section>
    </>
  );
};

export default HomePageBanner;
