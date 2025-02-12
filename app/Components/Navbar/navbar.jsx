"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";

const navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(() => {
    gsap.from(".nav", {
      opacity: 0,
      duration: 1,
      ease: "cubic-bezier(0.45, 0, 0.55, 1)",
      delay: 6,
    });
  });

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Adjust this value based on your navbar height
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY; // Get element's absolute position
      const finalPosition = elementPosition - offset; // Move up slightly

      window.scrollTo({
        top: finalPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="fixed z-[99] top-6 w-11/12 left-1/2 -translate-x-1/2">
        <div className="nav rounded-full px-4 sm:px-6 py-2 sm:py-3 w-full flex justify-between items-center backdrop-blur-md bg-white/30">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#D7492B]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>

          <div className="nav_left hidden md:flex gap-3 sm:gap-5 items-center">
            <h4 className="text-[#D7492B] font-bold text-xl sm:text-2xl">V.</h4>
            <h4
              className="relative group hover:cursor-pointer text-sm sm:text-base overflow-hidden"
              onClick={() => handleScroll("about")}
            >
              <div className="flex flex-col">
                <span className="group-hover:-translate-y-full transition-transform duration-300">
                  About
                </span>
                <span className="absolute top-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  About
                </span>
              </div>
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#D7492B] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </h4>

            <h4
              className="relative group hover:cursor-pointer text-sm sm:text-base overflow-hidden"
              onClick={() => handleScroll("work")}
            >
              <div className="flex flex-col">
                <span className="group-hover:-translate-y-full transition-transform duration-300">
                  Work
                </span>
                <span className="absolute top-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  Work
                </span>
              </div>
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#D7492B] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </h4>

            {/* <h4 className="relative group hover:cursor-pointer text-sm sm:text-base">
              Work
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#D7492B] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </h4> */}
          </div>

          {/* Mobile Logo */}
          <h4 className="md:hidden text-[#d7492b] font-bold text-xl">V.</h4>

          <div className="nav_right hidden md:block">
            <h4
              className="relative group hover:cursor-pointer text-sm sm:text-base overflow-hidden"
              onClick={() => handleScroll("connect")}
            >
              <div className="flex flex-col">
                <span className="group-hover:-translate-y-full transition-transform duration-300">
                  Contact us
                </span>
                <span className="absolute top-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  Contact us
                </span>
              </div>
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#D7492B] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </h4>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full mt-2 py-2 bg-white/90 backdrop-blur-md rounded-lg">
            <div className="flex flex-col items-center gap-4 p-4">
              <h4 className="hover:text-[#D7492B] transition-colors">About</h4>
              <h4 className="hover:text-[#D7492B] transition-colors">Work</h4>
              <h4 className="hover:text-[#D7492B] transition-colors">
                Contact us
              </h4>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default navbar;
