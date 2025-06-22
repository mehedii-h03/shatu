"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/constant";
import { AlignRight, CircleX } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // adjust threshold if needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#000219]/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center py-5 px-4 md:px-8">
        <h5 className="text-[#F9F9F9] text-lg font-semibold leading-6">
          Shatu
        </h5>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex gap-10">
          {navLinks.map((item) => (
            <li key={item.path}>
              <a
                href={item.path}
                className="text-[#F9F9F9] hover:text-[#CBACF9] text-base leading-6 transition-colors duration-200 ease-in-out cursor-pointer"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="block md:hidden">
          <AlignRight
            className="text-white w-6 h-6"
            onClick={() => setIsMenuOpen(true)}
          />

          {/* Mobile Menu Overlay */}
          <div
            className={`fixed top-0 right-0 z-50 w-full h-full bg-[#01031a] px-9 py-8 transform transition-transform duration-400 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-between mb-16">
              <p className="text-[#F9F9F9] text-lg font-medium tracking-wide">
                Menu
              </p>
              <CircleX
                className="text-white w-6 h-6"
                onClick={() => setIsMenuOpen(false)}
              />
            </div>

            <ul className="flex flex-col gap-7">
              {navLinks.map((item) => (
                <li key={item.path} onClick={() => setIsMenuOpen(false)}>
                  <a
                    href={item.path}
                    className="text-[#c5bfd9] hover:text-[#CBACF9] text-2xl leading-6 transition-colors duration-200 ease-in-out cursor-pointer font-semibold"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
