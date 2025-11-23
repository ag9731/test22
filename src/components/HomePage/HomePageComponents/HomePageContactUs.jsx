import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import image from "../../../assets/digital marketing agency bangalore.png";

const HomePageContactUs = () => {
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

          // auto hide after 3 seconds
          setTimeout(() => setShowPopup(false), 3000);
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
            <h1 className="text-3xl md:text-4xl font-bold font-poppins">
              Get In Touch
            </h1>
            <p className="text-justify text-sm md:text-base mt-2 font-poppins">
              Looking for a website designing company in Bangalore? Parvi
              Digital builds stunning websites, apps, SEO, and digital
              marketing.
            </p>

            {/* Form */}
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
                className="p-2 border border-gray-300 rounded"
              />

              <input
                type="text"
                name="user_mobile"
                placeholder="Mobile Number"
                required
                className="p-2 border border-gray-300 rounded"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="p-2 border border-gray-300 rounded"
              />

              <select
                name="user_service"
                required
                className="p-2 border border-gray-300 rounded"
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
                className="p-2 border border-gray-300 rounded"
              ></textarea>

              <button
                type="submit"
                className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </section>
    </>
  );
};

export default HomePageContactUs;
