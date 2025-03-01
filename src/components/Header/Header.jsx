import React, { useState, useEffect, useRef } from "react";
import { AiOutlineSearch, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../../assets/parvi digital company bangalore logo.png";
import GetQuote from "./GetQuote";
import HeaderTopBar from "./HeaderTopBar";

const Header = () => {
  const services = [
    { id: 1, name: "Website Design And Development", link: "#what-we-do" },
    {
      id: 2,
      name: "Mobile Application Design And Development",
      link: "#what-we-do",
    },
    { id: 3, name: "Digital Marketing", link: "#what-we-do" },
    { id: 4, name: "Search Engine Optimization", link: "#what-we-do" },
    { id: 5, name: "Graphic Design", link: "#what-we-do" },
    { id: 6, name: "Social Media Marketing", link: "#what-we-do" },
    { id: 7, name: "Email Marketing", link: "#what-we-do" },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredServices, setFilteredServices] = useState(services);
  const [showResults, setShowResults] = useState(false);
  const [menu, setMenu] = useState(false);
  const searchRef = useRef(null);

  const handleOpen = () => setMenu((prev) => !prev);

  const closeMenu = () => {
    setMenu(false);
  };

  // Handle Search Input Change
  const handleSearchBar = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredServices(
      services.filter((service) => service.name.toLowerCase().includes(query))
    );
    setShowResults(true);
  };

  // Hide dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <React.Fragment>
      <HeaderTopBar />
      <main className="bg-white shadow-sm bg-opacity-5">
        {/* Desktop Menu */}
        <header className="container mx-auto lg:flex md:flex items-center justify-between hidden">
          {/* Logo */}
          <section>
            <figure>
              <img
                src={logo}
                className="w-[100%] max-w-32"
                alt="Parvi Digital Marketing and Web Design Company in Bangalore"
              />
            </figure>
          </section>

          {/* Navigation Menu */}
          <section className="flex items-center gap-16">
            <nav>
              <ul className="flex items-center gap-14">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#about-us">About</a>
                </li>
                <li>
                  <a href="#our-services">Services</a>
                </li>
                <li>
                  <a href="#what-we-do">Projects</a>
                </li>
                <li>
                  <a href="#contact-us">Contact</a>
                </li>
              </ul>
            </nav>

            {/* Search Bar */}
            <section className="relative" ref={searchRef}>
              <div className="flex items-center relative">
                <input
                  type="search"
                  className="px-2 py-1 border-[1px] rounded-md border-primary"
                  placeholder="Search Services"
                  value={searchQuery}
                  onChange={handleSearchBar}
                  onFocus={() => setShowResults(true)}
                />
              </div>

              {/* Display Filtered Results */}
              {showResults && (
                <ul className="absolute w-72 bg-white border border-gray-300 rounded-md mt-2 p-2 shadow-md z-50">
                  {filteredServices.length > 0 ? (
                    filteredServices.map((service) => (
                      <li
                        key={service.id}
                        className="py-2 px-3 hover:bg-gray-100 cursor-pointer"
                        onClick={() => setShowResults(false)}
                      >
                        <a href={service.link}>{service.name}</a>
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-500 px-3 py-2">
                      No results found
                    </li>
                  )}
                </ul>
              )}
            </section>

            {/* Get In Touch Button */}
            <a href="#contact-us">
              <button className="bg-primary px-10 py-2 rounded-lg text-white font-medium">
                Get Quote
              </button>
            </a>
          </section>
        </header>

        {/* Mobile Menu */}
        <header className="container mx-auto flex lg:hidden md:hidden items-center justify-between relative py-4 px-4 lg:px-0 md:px-0">
          {/* Logo */}
          <section>
            <figure>
              <img
                src={logo}
                className="w-[100%] max-w-32"
                alt="Parvi Digital Marketing and Web Design Company in Bangalore"
              />
            </figure>
          </section>

          {/* Mobile Menu Icon */}
          <button onClick={handleOpen} className="text-3xl">
            {menu ? <AiOutlineClose className="z-50" /> : <AiOutlineMenu />}
          </button>

          {/* Mobile Navigation Menu */}
          {menu && (
            <section className="absolute top-32  left-0 w-full bg-slate-200 shadow-md p-5 flex flex-col items-center">
              <nav>
                <ul className="flex flex-col gap-4 text-center">
                  <li onClick={closeMenu}>
                    <a href="#banner">Home</a>
                  </li>
                  <li onClick={closeMenu}>
                    <a href="#about-us">About</a>
                  </li>
                  <li onClick={closeMenu}>
                    <a href="#our-services">Services</a>
                  </li>
                  <li onClick={closeMenu}>
                    <a href="#what-we-do">Projects</a>
                  </li>
                  <li onClick={closeMenu}>
                    <a href="#contact-us">Contact</a>
                  </li>
                </ul>
              </nav>

              {/* Search Bar */}
              <section className="relative w-full mt-4" ref={searchRef}>
                <div className="flex items-center relative w-full">
                  <input
                    type="search"
                    className="px-2 py-1 border-[1px] rounded-md border-primary w-full"
                    placeholder="Search Services"
                    value={searchQuery}
                    onChange={handleSearchBar}
                    onFocus={() => setShowResults(true)}
                  />
                </div>

                {/* Display Filtered Results */}
                {showResults && (
                  <ul className="absolute w-full bg-white border border-gray-300 rounded-md mt-2 p-2 shadow-md z-50">
                    {filteredServices.length > 0 ? (
                      filteredServices.map((service) => (
                        <li
                          key={service.id}
                          className="py-2 px-3 hover:bg-gray-100 cursor-pointer"
                          onClick={() => setShowResults(false)}
                        >
                          <a href={service.link}>{service.name}</a>
                        </li>
                      ))
                    ) : (
                      <li className="text-gray-500 px-3 py-2">
                        No results found
                      </li>
                    )}
                  </ul>
                )}
              </section>

              {/* Get In Touch Button */}
              <button className="bg-primary px-10 py-2 rounded-lg text-white font-medium mt-4">
                Get Quote
              </button>
            </section>
          )}
        </header>
      </main>
    </React.Fragment>
  );
};

export default Header;
