"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin before using it
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Work = () => {
  useGSAP(() => {
    gsap.from(".work_title", {
      opacity: 0,
      ease: "cubic-bezier(0.45, 0, 0.55, 1)",
      duration: 1.5,
      scrollTrigger: {
        trigger: ".work .work_title",
        start: "top 100%",
      },
    });
    gsap.from(".work_info_first_left", {
      scale: 0,
      ease: "cubic-bezier(0.45, 0, 0.55, 1)",
      duration: 1.5,
      scrollTrigger: {
        trigger: ".work_info_first",
        start: "top 125%",
      },
    });
    gsap.from(".work_info_first_right", {
      scale: 0,
      ease: "cubic-bezier(0.45, 0, 0.55, 1)",
      duration: 1.5,
      scrollTrigger: {
        trigger: ".work_info_first",
        start: "top 125%",
      },
    });
    gsap.from(".work_info_second_left", {
      scale: 0,
      ease: "cubic-bezier(0.45, 0, 0.55, 1)",
      duration: 1.5,
      scrollTrigger: {
        trigger: ".work_info_second_left",
        start: "top 160%",
      },
    });
    gsap.from(".work_info_second_right", {
      scale: 0,
      ease: "cubic-bezier(0.45, 0, 0.55, 1)",
      duration: 1.5,
      scrollTrigger: {
        trigger: ".work_info_second_right",
        start: "top 160%",
      },
    });
  }, []);
  return (
    <div className="work w-full px-12 text-[#D7492B]  h-auto">
      <div className="work_title text-[#D7492B]  h-[20vh] flex gap-2 justify-between items-center">
        <h1 className="text-8xl font-extrabold">Work</h1>
        <h1 className="text-8xl font-extrabold">
          <div className="line translate-x- -translate-y-[40%]">
            ___________________
          </div>
        </h1>
      </div>
      <div className="wrok_info mt-10 h-[100vh]  flex flex-col gap-2">
        <div className="work_info_first h-1/2  flex gap-3">
          <div className="work_info_first_left w-1/2  ">
            <div className="work_heading">Puja</div>
            <div className="work_image"></div>
            <div className="work_desc text-base font-semibold">
              A worship ritual performed to honor deities or to spiritually
              celebrate an event.
            </div>
          </div>
          <div className="work_info_first_right w-1/2">
            <div className="work_heading">Havan</div>
            <div className="work_image"></div>
            <div className="work_desc text-base font-semibold">
              A fire ritual where offerings are made to Agni, the fire god.
            </div>
          </div>
        </div>
        <div className="work_info_second h-1/2  flex gap-3">
          <div className="work_info_second_left w-1/2 ">
            <div className="work_heading">Aarti</div>
            <div className="work_image"></div>
            <div className="work_desc text-base font-semibold">
              A light ceremony performed in adoration of God or a deity.
            </div>
          </div>
          <div className="work_info_second_right w-1/2">
            <div className="work_heading">Abhisheka</div>
            <div className="work_image"></div>
            <div className="work_desc text-base font-semibold">
              A bathing ritual of a deity with milk, yogurt, honey, and other
              substances.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
