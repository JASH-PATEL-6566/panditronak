"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { motion } from "framer-motion";

const loader = () => {
  useGSAP(() => {
    const time = gsap.timeline({});
    time.to(
      ".line_one .sholk span",
      {
        y:-100,
        duration: 2,
        ease: "cubic-bezier(0.45, 0, 0.55, 1)",
        delay: 1,
        stagger: 0.5,
      },
      "maintext"
    );
    time.to(
      ".line_two .sholk span",
      {
        y: -100,
        duration: 2,
        ease: "cubic-bezier(0.45, 0, 0.55, 1)",
        delay: 3,
        stagger: 0.5,
      },
      "maintext"
    );
    time.to(
      ".loader",
      {
        y: "-100vh",
        duration: 1,
        ease: "cubic-bezier(0.45, 0, 0.55, 1)",
        delay: 8,
        stagger: 0.2,
      },
      "maintext"
    );
  }, []);

  return (
    <>
      <div className="loader w-full h-screen fixed z-[999] top-0 bg-[#F5EFE7] flex justify-center items-center">
        <div className="loder_text flex gap-1 flex-col px-4 sm:px-6 md:px-8">
          <div className="line_one h-fit sm:h-[4.5vh] md:h-[6vh] lg:h-[7vh] xl:h-[10vh] relative overflow-hidden flex justify-center items-center">
            <h1 className="sholk font-[pandit_text] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-[#D7492B] flex flex-wrap justify-center gap-2 sm:gap-3" style={{transform: "translateY(100px)"}}>
              <span>वक्रतुण्ड</span>
              <span>महाकाय</span>
              <span>सूर्यकोटि</span>
              <span>समप्रभ |</span>
            </h1>
          </div>
          <div className="line_two h-fit sm:h-[4.5vh] md:h-[6vh] lg:h-[7vh] xl:h-[10vh] relative overflow-hidden flex justify-center items-center">
            <h1 className="sholk font-[pandit_text] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-[#D7492B] flex flex-wrap justify-center gap-2 sm:gap-3" style={{transform: "translateY(100px)"}}>
              <span>निर्विघ्नं</span>
              <span>कुरु</span>
              <span>मे</span>
              <span>देव</span>
              <span>सर्वकार्येषु</span>
              <span>सर्वदा ||</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default loader;
