"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import parviDigitalBannerImage from "../../../assets/Parvi_Digital_Marketing_Web_Design_Company_Bangalore/website-design-company-in-bangalore.png";
import { AiFillQuestionCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import HomePageContactUs from "../HomePageComponents/HomePageContactUs"


const text = "WEB DESIGNING AND DIGITAL MARKETING AGENCY IN BANGALORE, INDIA.";

const HomePageBanner = () => {

  const form = useRef();
    const [status, setStatus] = useState("");
  
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
            setStatus("Message sent successfully!");
            form.current.reset();
          },
          (error) => {
            setStatus("Failed to send message. Please try again.");
            console.error(error.text);
          }
        );
    };

  return (
    <section className="bg-primary bg-opacity-5 min-h-[80vh] py-12 md:py-16 lg:py-0 lg:h-[80vh] flex flex items-center">
      {/* Main Article */}
      <article className="flex  flex-col-reverse lg:flex-row gap-10 container mx-auto px-4 md:px-6">
        {/* Left Section (Top on mobile) */}
        <div className="flex-1 flex flex-col justify-center gap-5 items-start">
          <header className="flex flex-col gap-5">
            {/* Animated Heading */}
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
            applications. We also optimize your website with top-notch SEO
            techniques to increase visibility.
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

        {/* Right Section (Bottom on mobile) */}
        <aside className="flex-1 flex justify-center items-center lg:mt-0">
          {/* <figure className="w-full max-w-md lg:max-w-full">
            <img
              src={parviDigitalBannerImage || "/placeholder.svg"}
              alt="Website designing and development"
              className="max-w-60 lg:max-w-full md:max-w-full h-auto object-contain"
            />
          </figure> */}
          {/* <HomePageContactUs/> */}
          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-4  w-[70%]"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="p-2 border border-[#2563eb] rounded text-sm md:text-base"
            />
            <input
              type="text"
              name="user_mobile"
              placeholder="Mobile Number"
              required
              className="p-2 border border-[#2563eb] rounded text-sm md:text-base"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="p-2 border border-[#2563eb] rounded text-sm md:text-base"
            />
            <select
              name="user_service"
              required
              className="p-2 border border-[#2563eb] rounded text-sm md:text-base"
            >
              <option value="">Select a Service</option>
              <option value="web_design">Web Design</option>
              <option value="seo">SEO</option>
              <option value="digital_marketing">Digital Marketing</option>
              <option value="app_development">App Development</option>
            </select>
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="p-2 border border-[#2563eb] rounded text-sm md:text-base"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 text-sm md:text-base"
            >
              Send Message
            </button>
            {status && <p className="text-sm text-green-600">{status}</p>}
          </form>
        </aside>
      </article>
    </section>
  );
};

export default HomePageBanner;
