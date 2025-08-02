import React from "react";
import { FaPhoneAlt, FaAmbulance } from "react-icons/fa";

const Marquee24x7 = () => {
  return (
    <div className="w-full bg-red-800 text-white overflow-hidden relative z-50">
      {/* Inline keyframe style for marquee animation */}
      <style>
        {`
          @keyframes marqueeScroll {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>

      <div
        className="whitespace-nowrap flex items-center  text-sm sm:text-base font-semibold"
        style={{
          animation: "marqueeScroll 15s linear infinite",
        }}
      >
        <div className="flex items-center gap-4 px-8">
          <FaAmbulance className="text-white text-sm animate-pulse" />
          <span>24/7 Ambulance Available - Call Now:</span>
          <FaPhoneAlt className="text-white" />
          <span className="text-white font-bold">9971759200, 8178042359</span>
        </div>
      </div>
    </div>
  );
};

export default Marquee24x7;
