"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { motion } from "framer-motion";

const hero = () => {
  useGSAP(() => {
    const time2 = gsap.timeline({});
    time2.from(
      ".pandit_text .text",
      {
        y: 145,
        duration: 2,
        ease: "cubic-bezier(0.45, 0, 0.55, 1)",
        delay: 9,
        stagger: 0.5,
      },
      "herotext"
    );
    time2.from(
      ".pandit_info .info",
      {
        y: 80,
        duration: 2,
        ease: "cubic-bezier(0.45, 0, 0.55, 1)",
        delay: 9,
        stagger: 0.5,
      },
      "herotext"
    );
    time2.from(
      ".pandit_subinfo .subinfo span",
      {
        y: "80",
        duration: 2,
        ease: "cubic-bezier(0.45, 0, 0.55, 1)",
        delay: 9,
        stagger: 0.2,
      },
      "herotext"
    );
    time2.from(
      ".button .buttontext",
      {
        y: "80",
        duration: 2,
        ease: "cubic-bezier(0.45, 0, 0.55, 1)",
        delay: 9,
        stagger: 0.2,
      },
      "herotext"
    );
    time2.from(
      ".f_left",
      {
        y: "80",
        duration: 2,
        ease: "cubic-bezier(0.45, 0, 0.55, 1)",
        delay: 9,
        stagger: 0.2,
      },
      "herotext"
    );
    time2.from(
      ".f_right",
      {
        y: "80",
        duration: 2,
        ease: "cubic-bezier(0.45, 0, 0.55, 1)",
        delay: 9,
        stagger: 0.2,
      },
      "herotext"
    );
  }, []);
  return (
    <>
      <div className="w-full px-10 h-screen relative bg-transparent">
        <div className="pandit_text absolute h-40  top-[15%] font-[Suisse init] text-[150px] leading-none font-extrabold text-[#D7492B] overflow-hidden ">
          <h1 className="text">Pandit Ronk Vyas</h1>
        </div>
        <div className="pandit_info absolute h-14 left-12  top-[35%] font-[Suisse init] text-5xl font-medium text-[#D7492B] overflow-hidden ">
          <h1 className="info">Vedic Scholar & Ritual Specialist</h1>
        </div>
        <div className="pandit_subinfo absolute w-7/12 left-12  top-[45%] font-[Suisse init] text-xl font-normal text-[#D7492B] overflow-hidden ">
          <h1 className="subinfo flex flex-col">
            <span>
              With over 20 years of experience in Vedic traditions, I am
              dedicated to preserving
            </span>
            <span>
              and sharing the rich cultural heritage of Indian rituals. My
              journey in this sacred field
            </span>
            <span>
              has been one of continuous learning and deep spiritual connection.
            </span>
          </h1>
        </div>
        <div className="button absolute top-[70%] left-12 overflow-hidden">
          <div className="buttontext px-5 py-3 rounded-full bg-[#d7482b15] hover:bg-[#D7492B] hover:text-white hover:cursor-pointer transition-colors">
            hello@vyas.com
          </div>
        </div>
        <div className="hero-footer text-sm font-semibold text-[#D7492B] w-full px-12 flex justify-between items-center absolute bottom-5 left-0 overflow-hidden">
          <div className="f_left">( SCROLL FOR MORE )</div>
          <div className="f_right">THE USA</div>
        </div>
      </div>
    </>
  );
};

export default hero;
