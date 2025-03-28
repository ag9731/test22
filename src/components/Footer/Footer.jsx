import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <div className="flex items-center gap-2 mb-2">
            <FaMapMarkerAlt className="text-secondary" />
            <p>RT Nagar, Dinnur, Bengaluru, Karnataka 560032</p>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <FaPhoneAlt className="text-secondary" />
            <p>9380128840</p>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-secondary" />
            <p>akashgoravanakoll@gmail.com</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-secondary">
                Home
              </Link>
            </li>
            <li>
              <a href="/#about-us" className="hover:text-secondary">
                About Us
              </a>
            </li>
            <li>
              <a href="#our-services" className="hover:text-secondary">
                Services
              </a>
            </li>
            <li>
              <a href="#contact-us" className="hover:text-secondary">
                Contact
              </a>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-secondary">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Follow Us</h2>
          <div className="flex gap-4">
            <a href="#" className="text-2xl hover:text-secondary">
              <FaFacebook />
            </a>
            <a href="#" className="text-2xl hover:text-secondary">
              <FaTwitter />
            </a>
            <a href="#" className="text-2xl hover:text-secondary">
              <FaInstagram />
            </a>
            <a href="#" className="text-2xl hover:text-secondary">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-600 pt-5 text-center text-sm">
        <p>© {new Date().getFullYear()} Parvi Digital. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
