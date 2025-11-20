import React from "react";
import {
  AiOutlineWhatsApp,
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillPhone,
  AiFillMail,
} from "react-icons/ai";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelopeSquare,
} from "react-icons/fa";
const HeaderTopBar = () => {
  return (
    <section className="bg-[#292929] py-3 hidden lg:flex md:flex">
      <section className="container mx-auto flex  justify-between text-white">
        {/* Left Section */}
        <section className="flex items-center gap-5">
          <a href="tel:9731761287" className="text-1xl hover:text-secondary">
            <div className="flex gap-2 items-center">
              <AiFillPhone />
              <p>91 97317 61287</p> |<p>91 63601 88397</p>
            </div>
          </a>
          <a
            href="mailto:contact@parvidigital.com"
            className="text-1xl hover:text-secondary"
          >
            <div className="flex gap-5 items-center">
              <AiFillMail />
              <p>contact@parvidigital.com</p>
            </div>
          </a>
        </section>

        {/* Right Section */}
        <section className="flex items-center">
          <div className="flex gap-5">
            <a
              href="mailto:contact@parvidigital.com"
              className="text-2xl hover:text-secondary"
            >
              <FaEnvelopeSquare />
            </a>
            <a
              href="https://www.facebook.com/people/Parvi-Digital/61557411624105/"
              className="text-2xl hover:text-secondary"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/parvi_digital/"
              className="text-2xl hover:text-secondary"
            >
              <FaInstagram />
            </a>

            {/* <AiFillFacebook />
            <AiOutlineInstagram />
            <AiFillLinkedin />
            <AiOutlineWhatsApp /> */}
          </div>
        </section>
      </section>
    </section>
  );
};

export default HeaderTopBar;
