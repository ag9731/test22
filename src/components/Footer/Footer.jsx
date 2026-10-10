import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaEnvelopeSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-5 lg:px-0 max-w-7xl">
        
        {/* About Business */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Parvi Digital</h2>
          <p className="text-gray-400 mb-6 text-sm">
            Parvi Digital helps businesses build a strong online presence through custom website development, strategic digital marketing, SEO, and AI automation.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/people/Parvi-Digital/61557411624105/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/parvi_digital/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:contact@parvidigital.com"
              className="text-2xl text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <FaEnvelopeSquare />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-primary transition-colors">About Us</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-primary transition-colors">Our Services</Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-primary transition-colors">Contact Us</Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Core Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Core Services</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/website-development" className="hover:text-primary transition-colors">Website Development</Link>
            </li>
            <li>
              <Link to="/digital-marketing" className="hover:text-primary transition-colors">Digital Marketing</Link>
            </li>
            <li>
              <Link to="/google-ads-management" className="hover:text-primary transition-colors">Google Ads Management</Link>
            </li>
            <li>
              <Link to="/seo-services" className="hover:text-primary transition-colors">SEO Services</Link>
            </li>
            <li>
              <Link to="/google-business-profile-optimization" className="hover:text-primary transition-colors">Google Business Profile</Link>
            </li>
            <li>
              <Link to="/lead-generation" className="hover:text-primary transition-colors">Lead Generation</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <div className="flex items-start gap-3 mb-4 text-sm">
            <FaPhoneAlt className="text-primary mt-1" />
            <a href="tel:+917619103418" className="hover:text-primary transition-colors">
              +91 7619103418
            </a>
          </div>
          <div className="flex items-start gap-3 mb-4 text-sm">
            <FaEnvelope className="text-primary mt-1" />
            <a href="mailto:contact@parvidigital.com" className="hover:text-primary transition-colors">
              contact@parvidigital.com
            </a>
          </div>
          <div className="flex items-start gap-3 mb-4 text-sm">
            <FaMapMarkerAlt className="text-primary mt-1" />
            <span>Bengaluru, Karnataka, India</span>
          </div>
        </div>
        
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto mt-12 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Parvi Digital. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
