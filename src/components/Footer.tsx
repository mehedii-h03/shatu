"use client";

import { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTelegram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-teal-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
        {/* Main Footer Content */}
        <div className="px-4 md:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                  Fardous Akter Shatu
                </h2>
                <p className="text-xl text-teal-300 font-semibold">
                  Social Media Marketing Manager
                </p>
                <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                  Helping e-commerce and personal brands grow through strategic
                  marketing and impactful campaigns.
                </p>
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                <p className="text-teal-400 font-medium">Connect with me:</p>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-3 rounded-full hover:bg-teal-700 transition-all transform hover:scale-110"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-3 rounded-full hover:bg-teal-700 transition-all transform hover:scale-110"
                    aria-label="Instagram Profile"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-3 rounded-full hover:bg-teal-700 transition-all transform hover:scale-110"
                    aria-label="Facebook Profile"
                  >
                    <FaFacebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://telegram.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-3 rounded-full hover:bg-teal-700 transition-all transform hover:scale-110"
                    aria-label="Telegram Profile"
                  >
                    <FaTelegram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-teal-400">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-teal-400 transition-colors"
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-teal-400 transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="text-gray-300 hover:text-teal-400 transition-colors"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-gray-300 hover:text-teal-400 transition-colors"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-teal-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-teal-400">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-800 p-2 rounded-full">
                    <FaEnvelope className="w-4 h-4 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <a
                      href="mailto:hello@fardous.com"
                      className="text-white hover:text-teal-400 transition-colors"
                    >
                      hello@fardous.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-gray-800 p-2 rounded-full">
                    <FaPhone className="w-4 h-4 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <a
                      href="tel:+1234567890"
                      className="text-white hover:text-teal-400 transition-colors"
                    >
                      +123 456 7890
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-gray-800 p-2 rounded-full">
                    <FaMapMarkerAlt className="w-4 h-4 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Location</p>
                    <p className="text-white">Dhaka, Bangladesh</p>
                  </div>
                </div>

                {/* Status indicator */}
                {/* <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-teal-500 mt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
                    <p className="text-sm font-medium">
                      Available for new projects
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 md:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-400">
                  © {new Date().getFullYear()} Fardous Akter Shatu. All rights
                  reserved.
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Crafted for amazing brands
                </p>
              </div>

              <div className="flex items-center space-x-6">
                <a
                  href="#privacy"
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  Privacy Policy
                </a>
                <a
                  href="#terms"
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110 z-50 cursor-pointer"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
