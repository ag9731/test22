"use client";

import { useEffect, useRef, useState } from "react";
import ParviTechAboutUsBG from "../../../assets/Parvi_Digital_Marketing_Web_Design_Company_Bangalore/parvi-digital-marketing-company-bangalore.png";
import { AiFillQuestionCircle } from "react-icons/ai";

const HomePageAboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // This ensures the animation resets when scrolled away
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      className="bg-primary relative py-8 overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse lg:flex-row items-start justify-between relative">
          {/* Text Content */}
          <article className="flex flex-col gap-4 md:gap-5 text-white py-6 md:py-10 w-full lg:w-3/5 z-10">
            <h1 className="text-3xl md:text-4xl font-medium font-poppins">
              About Parvi Digital
            </h1>
            <div
              className={`bg-secondary h-[5px] rounded-full transition-all duration-[2s] ${
                isVisible ? "w-32 md:w-52" : "w-0"
              }`}
            ></div>
            <h2 className="text-lg md:text-xl font-poppins">
              Your Trusted Partner for Website Design and Development and
              Digital Marketing Agency
            </h2>
            <p className="w-full lg:w-[90%]">
              Empowering startups and businesses with cutting-edge website
              design, website development, mobile application development, seo,
              and digital marketing agency in Bangalore. Partner with us to
              elevate your brand and drive growth in the digital world.
            </p>
            <div className="inline-flex items-center gap-3 md:gap-5 px-4 md:px-6 py-2 md:py-3 rounded-full bg-white mt-3 self-start">
              <button className="font-semibold text-black font-poppins text-sm md:text-base">
                Want To Know More
              </button>
              <AiFillQuestionCircle className="fill-primary text-lg md:text-xl" />
            </div>
          </article>

          {/* Image */}
          <aside className="w-full lg:absolute lg:right-0 lg:top-1.5 mt-6 lg:mt-0">
            <figure className="flex justify-center lg:justify-end">
              <img
                src={ParviTechAboutUsBG || "/placeholder.svg"}
                alt="digital marketing agency bangalore"
                className="w-[80%] sm:w-[60%] md:w-[50%] lg:w-[100%] lg:max-w-[400px]"
              />
            </figure>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default HomePageAboutUs;
