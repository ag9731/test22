import React from "react";

const AnnouncementBar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Text */}
        <p className="text-center md:text-left font-medium text-base md:text-lg lg:text-xl">
          🚀 Get your 5-page website at just
          <span className="font-bold"> ₹4,999</span> – Limited Time Offer!
        </p>

        {/* CTA Button */}
        <a
          href="#contact-us"
          className="bg-white text-orange-600 font-semibold px-5 py-2 rounded-full text-sm md:text-base hover:bg-gray-100 transition"
        >
          Get-Started
        </a>
      </div>
    </div>
  );
};

export default AnnouncementBar;
