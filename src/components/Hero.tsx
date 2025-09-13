"use client";

import { useState, useEffect, useRef } from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTelegram,
} from "react-icons/fa";
import Image from "next/image";

import ProfileImage from "@/assets/profileImage.png";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText =
    "Helping e-commerce and personal brands grow through strategic marketing and impactful campaigns.";

  const indexRef = useRef(0);
  const hasRunRef = useRef(false);

  useEffect(() => {
    if (hasRunRef.current) return;
    hasRunRef.current = true;

    const typingInterval = setInterval(() => {
      if (indexRef.current < fullText.length) {
        // Fix: Use functional update to avoid stale closure issues
        setTypedText(fullText.slice(0, indexRef.current + 1));
        indexRef.current += 1;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  return (
    <div className="text-white h-full md:min-h-[80vh] flex items-center py-5 md:py-12 px-4 md:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-teal-400 font-medium">Welcome! I am</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">
              Fardous Akter Shatu
            </h1>
            <div className="flex items-center space-x-2 mt-2">
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
              href="https://www.linkedin.com/in/fardous-akter-shatu"
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
              href="https://www.facebook.com/FardousAkterShatu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-teal-700 transition-colors"
              aria-label="Facebook Profile"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
            <a
              href="https://t.me/F_Shatu"
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
              href="#works"
              className="bg-transparent border-2 border-teal-500 text-teal-400 py-3 px-6 rounded-full font-medium hover:bg-teal-900/30 transition-all"
            >
              View Work
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="relative">
            {/* Image with border */}
            <div className="relative z-10 border-2 border-teal-500 rounded-2xl overflow-hidden w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 to-purple-900/30 mix-blend-overlay z-10"></div>

              <div className="w-full h-full relative">
                <div className="relative z-10 border-4 border-teal-500 rounded-2xl overflow-hidden w-full max-w-md aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 to-purple-900/30 mix-blend-overlay z-10"></div>
                  <Image
                    src={ProfileImage}
                    alt="profile image"
                    className="object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
