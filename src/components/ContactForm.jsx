import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import clsx from "clsx";

const ContactForm = ({ defaultService = "", isShortForm = false }) => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);

    emailjs
      .sendForm(
        "service_x88g09g",
        "template_vq1ugun",
        form.current,
        "6JItTTPHiIbzojkKP"
      )
      .then(
        () => {
          setIsLoading(false);
          setShowPopup(true);
          form.current.reset();
          setTimeout(() => setShowPopup(false), 4000);
        },
        () => {
          setIsLoading(false);
          setIsError(true);
        }
      );
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50 px-4">
          <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-md text-center animate-popup">
            <h2 className="text-xl font-semibold text-green-600">
              Form Submitted Successfully!
            </h2>
            <p className="text-gray-600 mt-2">
              Thank you for contacting us. We will get back to you shortly.
            </p>
          </div>
        </div>
      )}

      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 w-full">
        {isError && (
          <p className="text-red-500 font-medium">Failed to send message. Please try again.</p>
        )}
        <input 
          placeholder="Your Name" 
          required 
          className="p-2 border border-[#2563eb] rounded" 
          type="text" 
          name="user_name" 
        />
        <input 
          placeholder="Mobile Number" 
          required 
          className="p-2 border border-[#2563eb] rounded" 
          type="text" 
          name="user_mobile" 
        />
        <input 
          placeholder="Your Email" 
          required 
          className="p-2 border border-[#2563eb] rounded" 
          type="email" 
          name="user_email" 
        />
        <select 
          name="user_service" 
          required 
          defaultValue={defaultService}
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
          className="p-2 border border-[#2563eb] rounded min-h-[80px]"
        ></textarea>
        <button 
          type="submit" 
          disabled={isLoading}
          className={clsx(
            "bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors",
            isLoading && "opacity-70 cursor-not-allowed"
          )}
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
