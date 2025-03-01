import React from "react";
import {
  AiOutlineWhatsApp,
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillPhone,
  AiFillMail,
} from "react-icons/ai";

const HeaderTopBar = () => {
  return (
    <section className="bg-[#292929] py-3 hidden lg:flex md:flex">
      <section className="container mx-auto flex  justify-between text-white">
        {/* Left Section */}
        <section className="flex items-center gap-5">
          <div className="flex gap-2 items-center">
            <AiFillPhone />
            <p>9380128840</p>
          </div>
          <div className="flex gap-5 items-center">
            <AiFillMail />
            <p>info@parvidigital.com</p>
          </div>
        </section>

        {/* Right Section */}
        <section className="flex items-center">
          <div className="flex gap-5">
            <AiFillFacebook />
            <AiOutlineInstagram />
            <AiFillLinkedin />
            <AiOutlineWhatsApp />
          </div>
        </section>
      </section>
    </section>
  );
};

export default HeaderTopBar;
