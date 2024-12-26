"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const navbar = () => {
  useGSAP(()=>{
    gsap.from('.nav',{
      opacity:0,
      duration:1,
      delay:9
    })
  })
  return (
   

    <>
    <div className="fixed z-[99] top-6 w-11/12 left-1/2 -translate-x-1/2">
        <div className="nav rounded-full px-6 py-3 w-full flex justify-between items-center backdrop-blur-md bg-white/30">
        <div className="nav_left flex gap-5 items-center">
            <h4 className='text-[#D7492B] font-bold text-2xl'>V.</h4>
            <h4>About</h4>
            <h4>Work</h4>
        </div>
        <div className="nav_right">
            <h4>Conntact us</h4>
        </div>
        </div>
    </div>
    </>
  )
}

export default navbar