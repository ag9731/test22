import React, { useState, useEffect, useRef } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineDown } from "react-icons/ai";
import logo from "../../assets/parvi digital company bangalore logo.png";
import HeaderTopBar from "./HeaderTopBar";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const [menu, setMenu] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const handleOpen = () => setMenu((prev) => !prev);
  const closeMenu = () => {
    setMenu(false);
    setMobileDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const serviceCategories = [
    {
      title: "WEBSITE DEVELOPMENT",
      links: [
        { name: "Website Design & Development", path: "/website-development" },
        { name: "Business Website Development", path: "/business-website-development" },
        { name: "E-commerce Website Development", path: "/ecommerce-website-development" },
        { name: "Website Redesign", path: "/website-redesign" },
        { name: "Web Application Development", path: "/web-application-development" },
        { name: "Mobile App Development", path: "/mobile-app-development" },
      ]
    },
    {
      title: "DIGITAL MARKETING",
      links: [
        { name: "Digital Marketing Services", path: "/digital-marketing" },
        { name: "Google Ads Management", path: "/google-ads-management" },
        { name: "Meta Ads Management", path: "/meta-ads-management" },
        { name: "Social Media Marketing", path: "/social-media-marketing" },
        { name: "Lead Generation", path: "/lead-generation" },
      ]
    },
    {
      title: "SEARCH ENGINE OPTIMIZATION",
      links: [
        { name: "SEO Services", path: "/seo-services" },
        { name: "Local SEO", path: "/local-seo" },
        { name: "Technical SEO", path: "/technical-seo" },
        { name: "On-Page SEO", path: "/on-page-seo" },
      ]
    },
    {
      title: "GOOGLE BUSINESS PROFILE",
      links: [
        { name: "GBP Optimization", path: "/google-business-profile-optimization" },
        { name: "Google Maps Ranking", path: "/google-maps-ranking" },
        { name: "GBP Management", path: "/google-business-profile-management" },
      ]
    },
    {
      title: "AI AUTOMATION",
      links: [
        { name: "AI Automation Services", path: "/ai-automation" },
        { name: "AI Chatbot Development", path: "/ai-chatbot-development" },
        { name: "Business Process Automation", path: "/business-process-automation" },
      ]
    }
  ];

  return (
    <React.Fragment>

      <HeaderTopBar />
      <main className="bg-white shadow-sm sticky top-0 z-50">
        {/* Desktop Menu */}
        <header className="container mx-auto lg:flex md:flex items-center justify-between hidden py-2">
          <section>
            <Link to="/">
              <img
                src={logo}
                className="w-[100%] max-w-[120px]"
                alt="Parvi Digital Marketing and Web Design Company"
              />
            </Link>
          </section>

          <section className="flex items-center gap-10">
            <nav>
              <ul className="flex items-center gap-8 font-medium text-gray-700">
                <li>
                  <Link to="/" className={`uppercase hover:text-primary transition-colors ${location.pathname === '/' ? 'text-primary' : ''}`}>Home</Link>
                </li>
                <li>
                  <Link to="/about-us" className={`uppercase hover:text-primary transition-colors ${location.pathname === '/about-us' ? 'text-primary' : ''}`}>About Us</Link>
                </li>
                
                {/* Services Dropdown */}
                <li className="relative" ref={dropdownRef} onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                  <Link to="/services" className={`uppercase hover:text-primary transition-colors flex items-center gap-1 ${location.pathname.includes('/services') || location.pathname.includes('-') ? 'text-primary' : ''}`}>
                    Services <AiOutlineDown size={14} />
                  </Link>
                  
                  {/* Mega Menu Dropdown */}
                  {dropdownOpen && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-0 w-[800px] bg-white border border-gray-100 shadow-xl rounded-b-xl p-6 grid grid-cols-3 gap-6 z-50">
                      {serviceCategories.map((category, index) => (
                        <div key={index}>
                          <h4 className="text-sm font-bold text-gray-900 mb-3 border-b pb-2 uppercase tracking-wide">{category.title}</h4>
                          <ul className="flex flex-col gap-2">
                            {category.links.map((link, idx) => (
                              <li key={idx}>
                                <Link 
                                  to={link.path} 
                                  className="text-sm text-gray-600 hover:text-primary transition-colors block"
                                  onClick={() => setDropdownOpen(false)}
                                >
                                  {link.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <div className="col-span-3 mt-4 pt-4 border-t text-center">
                        <Link to="/services" onClick={() => setDropdownOpen(false)} className="text-primary font-semibold hover:underline">View All Services &rarr;</Link>
                      </div>
                    </div>
                  )}
                </li>

                <li>
                  <Link to="/projects" className={`uppercase hover:text-primary transition-colors ${location.pathname === '/projects' ? 'text-primary' : ''}`}>Projects</Link>
                </li>
                <li>
                  <Link to="/contact-us" className={`uppercase hover:text-primary transition-colors ${location.pathname === '/contact-us' ? 'text-primary' : ''}`}>Contact Us</Link>
                </li>
              </ul>
            </nav>

            <Link to="/contact-us">
              <button className="bg-primary hover:bg-blue-700 transition-colors px-6 py-2.5 rounded-lg text-white font-semibold shadow-sm">
                Let's Talk
              </button>
            </Link>
          </section>
        </header>

        {/* Mobile Menu */}
        <header className="container mx-auto flex lg:hidden md:hidden items-center justify-between relative py-2 px-4">
          <section>
            <Link to="/" onClick={closeMenu}>
              <img
                src={logo}
                className="max-w-[90px]"
                alt="Parvi Digital"
              />
            </Link>
          </section>

          <button onClick={handleOpen} className="text-3xl text-gray-800 focus:outline-none">
            {menu ? <AiOutlineClose className="z-50" /> : <AiOutlineMenu />}
          </button>

          {menu && (
            <section className="absolute top-full left-0 w-full bg-white shadow-lg border-t z-50 max-h-[80vh] overflow-y-auto">
              <nav className="p-4">
                <ul className="flex flex-col gap-4 font-medium text-gray-800">
                  <li>
                    <Link to="/" onClick={closeMenu} className="block w-full py-2 border-b">Home</Link>
                  </li>
                  <li>
                    <Link to="/about-us" onClick={closeMenu} className="block w-full py-2 border-b">About Us</Link>
                  </li>
                  
                  {/* Mobile Accordion for Services */}
                  <li>
                    <div className="flex justify-between items-center w-full py-2 border-b cursor-pointer" onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}>
                      <span>Services</span>
                      <AiOutlineDown className={`transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                    </div>
                    
                    {mobileDropdownOpen && (
                      <div className="pl-4 mt-2 flex flex-col gap-4 bg-gray-50 p-4 rounded-lg">
                        {serviceCategories.map((category, index) => (
                          <div key={index}>
                            <h4 className="text-xs font-bold text-gray-900 mb-2 uppercase">{category.title}</h4>
                            <ul className="flex flex-col gap-2 border-l-2 border-gray-200 pl-2">
                              {category.links.map((link, idx) => (
                                <li key={idx}>
                                  <Link to={link.path} onClick={closeMenu} className="text-sm text-gray-600 block py-1">{link.name}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <Link to="/services" onClick={closeMenu} className="text-sm text-primary font-bold mt-2">View All Services</Link>
                      </div>
                    )}
                  </li>

                  <li>
                    <Link to="/projects" onClick={closeMenu} className="block w-full py-2 border-b">Projects</Link>
                  </li>
                  <li>
                    <Link to="/contact-us" onClick={closeMenu} className="block w-full py-2 border-b">Contact Us</Link>
                  </li>
                  <li className="pt-4">
                    <Link to="/contact-us" onClick={closeMenu} className="block w-full text-center bg-primary text-white py-3 rounded-lg font-bold">
                      Let's Talk
                    </Link>
                  </li>
                </ul>
              </nav>
            </section>
          )}
        </header>
      </main>
    </React.Fragment>
  );
};

export default Header;
