"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
// Import from @heroicons/react instead of lucide-react
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTelegram,
} from "react-icons/fa";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText =
    "Heelping e-commerce and personal brands grow through strategic marketing and impactful campaigns.";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((current) => current + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="text-white min-h-[80vh] flex items-center py-12 px-4 md:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-teal-400 font-medium">Welcome! I am</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">
              Fardous Akter Shatu
            </h1>
            <div className="flex items-center space-x-2 mt-2">
              <div className="h-1 w-16 bg-teal-500"></div>
              <p className="text-xl text-teal-300 font-semibold">
                Social Media Marketing Manager
              </p>
            </div>
          </div>

          <p className="text-gray-300 text-lg md:pr-8 min-h-16">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>

          <p className="text-xl font-medium text-teal-200">
            Let&apos;s grow your brand together.
          </p>

          <div className="flex space-x-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-teal-700 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-teal-700 transition-colors"
              aria-label="Instagram Profile"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-teal-700 transition-colors"
              aria-label="Facebook Profile"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-teal-700 transition-colors"
              aria-label="Telegram Profile"
            >
              <FaTelegram className="w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#contact"
              className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-full font-medium transition-all transform hover:scale-105"
            >
              Hire Me
            </a>
            <a
              href="#portfolio"
              className="bg-transparent border-2 border-teal-500 text-teal-400 py-3 px-6 rounded-full font-medium hover:bg-teal-900/30 transition-all"
            >
              View Work
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -z-10 w-64 h-64 bg-teal-600/20 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute -z-10 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl -top-10 -right-10"></div>

            {/* Image with border */}
            <div className="relative z-10 border-4 border-teal-500 rounded-2xl overflow-hidden w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 to-purple-900/30 mix-blend-overlay z-10"></div>

              <div className="w-full h-full relative">
                {/* <Image
                  src="https://images.pexels.com/photos/31984626/pexels-photo-31984626/free-photo-of-artistic-black-and-white-portrait-with-light-play.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Fardous Akter Shatu - Social Media Marketing Manager"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-cover"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                /> */}
                <div className="relative z-10 border-4 border-teal-500 rounded-2xl overflow-hidden w-full max-w-md aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 to-purple-900/30 mix-blend-overlay"></div>
                  <img
                    src="https://images.pexels.com/photos/31984626/pexels-photo-31984626/free-photo-of-artistic-black-and-white-portrait-with-light-play.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Fardous Akter Shatu - Social Media Marketing Manager"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -bottom-4 -left-4 bg-gray-800 p-4 rounded-lg shadow-lg border-l-4 border-teal-500 z-20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
                <p className="text-sm font-medium">Available for projects</p>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-gray-800 p-3 rounded-lg shadow-lg border-r-4 border-purple-500 rotate-3 z-20">
              <p className="text-sm font-medium">5+ Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
