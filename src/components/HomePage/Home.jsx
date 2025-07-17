import React from "react";
import HomePageBanner from "./HomePageComponents/HomePageBanner";
import HomePageAboutUs from "./HomePageComponents/HomePageAboutUs";
import HomePageWhatWeDo from "./HomePageComponents/HomePageWhatWeDo";
import HomePageContactUs from "./HomePageComponents/HomePageContactUs";
import HomePageFaqs from "./HomePageComponents/HomePageFaqs";
import HomePageWeDoWebsiteFor from "./HomePageComponents/HomePageWeDoWebsiteFor";
import HomePageWhyChooseUs from "./HomePageComponents/HomePageWhyChooseUs";

const Home = () => {
  return (
    <section className="flex flex-col">
      <div id="banner">
        <HomePageBanner />
      </div>
      <div id="about-us">
        <HomePageAboutUs />
      </div>
      <div id="our-services">
        <HomePageWhatWeDo />
      </div>
      <div id="what-we-do">
        <HomePageWeDoWebsiteFor />
      </div>
      <div id="why-choose-us">
        <HomePageWhyChooseUs />
      </div>
      <div id="faqs">
        <HomePageFaqs />
      </div>
      <div id="contact-us">
        <HomePageContactUs />
      </div>
    </section>
  );
};

export default Home;
