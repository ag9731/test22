import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import image from "../../../assets/digital marketing agency bangalore.png";

const HomePageContactUs = () => {
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
    <section className="mt-5 py-5 px-4">
      <section className="container mx-auto flex flex-col md:flex-row gap-10 md:gap-20">
        {/* Right Section */}
        <div className="flex-1">
          <img
            src={image}
            className="bg-slate-200 w-full h-auto md:max-w-[600px]"
            alt="digital marketing agency in Bengaluru"
          />
        </div>

        {/* Left Section */}
        <div className="flex-1">
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl md:text-4xl font-bold font-poppins">
              Get In Touch
            </h1>
            <p className="text-justify text-sm md:text-base font-poppins">
              Looking for a website designing company in Bangalore that creates
              stunning and user-friendly websites? Parvi Digital is a leading
              website development company in Bangalore, specializing in mobile
              application development, SEO, and digital marketing to help
              businesses succeed online.
            </p>
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-4 mt-5"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="p-2 border border-gray-300 rounded text-sm md:text-base"
            />
            <input
              type="text"
              name="user_mobile"
              placeholder="Mobile Number"
              required
              className="p-2 border border-gray-300 rounded text-sm md:text-base"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="p-2 border border-gray-300 rounded text-sm md:text-base"
            />
            <select
              name="user_service"
              required
              className="p-2 border border-gray-300 rounded text-sm md:text-base"
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
              className="p-2 border border-gray-300 rounded text-sm md:text-base"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 text-sm md:text-base"
            >
              Send Message
            </button>
            {status && <p className="text-sm text-green-600">{status}</p>}
          </form>
        </div>
      </section>
    </section>
  );
};

export default HomePageContactUs;
