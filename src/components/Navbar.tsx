"use client";

import { navLinks } from "@/constant";
import { AlignRight, CircleX } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav>
      <div className="flex justify-between items-center py-5 mt-2">
        <h5 className="text-[#F9F9F9] text-base leading-6">Shatu</h5>
        {/* desktop */}
        <ul className="hidden md:flex gap-10">
          {navLinks.map((item) => (
            <li
              key={item.path}
              className="text-[#F9F9F9] hover:text-[#CBACF9] text-sm leading-6 transition-colors duration-200 ease-in-out cursor-pointer"
            >
              {item.title}
            </li>
          ))}
        </ul>
        {/* mobile */}
        <div className="block md:hidden">
          <AlignRight
            className="text-white"
            onClick={() => setIsMenuOpen(true)}
          />

          <div
            className={`fixed top-0 right-0 z-50 w-full h-full bg-[#01031a] px-9 py-8 transform transition-transform duration-400 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-between mb-16">
              <p className="text-[#F9F9F9] text-base leading-5 tracking-wide">
                Menu
              </p>
              <CircleX
                className="text-white"
                onClick={() => setIsMenuOpen(false)}
              />
            </div>
            <ul className="flex flex-col gap-7">
              {navLinks.map((item) => (
                <li
                  key={item.path}
                  className="text-[#c5bfd9] hover:text-[#CBACF9] text-2xl leading-6 transition-colors duration-200 ease-in-out cursor-pointer font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
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
