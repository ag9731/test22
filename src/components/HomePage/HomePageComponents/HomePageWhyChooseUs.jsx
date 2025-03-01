import image from "../../../assets/Parvi_Digital_Marketing_Web_Design_Company_Bangalore/parvi-digital-bangalore-why-choose-us.png";
import {
  FaBuildingUser,
  FaRocket,
  FaMoneyBill,
  FaArrowTrendUp,
} from "react-icons/fa6";
import { AiOutlineLaptop } from "react-icons/ai";

const HomePageWhyChooseUs = () => {
  const data = [
    {
      id: 1,
      icon: <AiOutlineLaptop className="text-xl md:text-2xl text-primary" />,
      name: "Expert Website Developers in Bangalore",
      desc: "Our skilled team of developers crafts custom websites that align with your brand and business goals. Whether you need an e-commerce site, corporate website, or a portfolio, we deliver top-notch solutions.",
    },
    {
      id: 2,
      icon: <FaRocket className="text-xl md:text-2xl text-primary" />,
      name: "Comprehensive Digital Marketing Agency in Bangalore",
      desc: "From SEO and social media marketing to PPC campaigns and content strategy, we offer end-to-end digital marketing services to enhance your online visibility and drive conversions.",
    },
    {
      id: 3,
      icon: <FaMoneyBill className="text-xl md:text-2xl text-primary" />,
      name: "Tailored Solutions for Every Business",
      desc: "We understand that every business is unique. Our team works closely with you to develop a customized strategy that meets your specific needs and objectives.",
    },
    {
      id: 4,
      icon: <FaArrowTrendUp className="text-xl md:text-2xl text-primary" />,
      name: "Cutting-Edge Technology & Trends",
      desc: "We stay ahead of the curve, implementing the latest technologies and marketing trends to ensure your brand remains competitive in the digital space.",
    },
    {
      id: 5,
      icon: <FaBuildingUser className="text-xl md:text-2xl text-primary" />,
      name: "Customer-Centric Approach",
      desc: "Your success is our priority. We focus on delivering seamless user experiences, high engagement, and measurable results.",
    },
  ];

  return (
    <section className="py-8 md:py-12 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
          {/* Left Column - Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/3] bg-slate-200 rounded-lg overflow-hidden">
              <img
                src={image || "/placeholder.svg"}
                className="w-full h-full object-cover"
                alt="website-development-company-near-me"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-5">
            <h1 className="text-3xl md:text-4xl font-bold font-poppins">
              Why Choose Parvi Digital?
            </h1>
            <p className="text-justify text-sm md:text-base">
              At Parvi Digital, we are your trusted partner for website
              development and digital marketing solutions. As a leading website
              development company in Bangalore, we specialize in creating
              high-performing, user-friendly websites that drive results.
            </p>

            <div className="flex flex-col gap-5 mt-4">
              <h2 className="text-xl md:text-2xl font-semibold">
                Why Work With Us?
              </h2>

              <div className="flex flex-col gap-6 md:gap-8">
                {data.map((item) => (
                  <div key={item.id} className="flex flex-col gap-3 md:gap-4">
                    <div className="flex items-center gap-4 md:gap-6">
                      <div className="flex-shrink-0">{item.icon}</div>
                      <h3 className="text-base md:text-lg font-medium">
                        {item.name}
                      </h3>
                    </div>
                    <div className="bg-primary w-full md:w-60 h-[2px] md:h-[3px]"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageWhyChooseUs;
