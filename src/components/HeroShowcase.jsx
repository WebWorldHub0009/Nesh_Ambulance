import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronRight,
  FaHeartbeat,
  FaAmbulance,
  FaClock,
  FaInfoCircle
} from "react-icons/fa";

import img1 from "../assets/slider/amb1.png";
import img2 from "../assets/slider/amb2.png";
import img3 from "../assets/slider/amb3.png";

import heroSm1 from "../assets/hero-sm1.jpg";
import heroSm2 from "../assets/hero-sm2.jpg";
import heroSm3 from "../assets/hero-sm3.jpg";

import { Link } from "react-router-dom";

const slides = [
  {
    image: img1,
    specs: [
      { icon: <FaAmbulance />, text: "24/7 Emergency Response" },
      { icon: <FaHeartbeat />, text: "Onboard ICU Equipment" },
      { icon: <FaClock />, text: "Rapid Arrival in Under 15 Min" }
    ],
    title: "Nesh Ambulance",
    subtitle: "Advanced Life Support Unit",
    description:
      "Equipped with state-of-the-art life-saving equipment and experienced paramedics, we ensure every second counts in emergencies."
  },
  {
    image: img2,
    specs: [
      { icon: <FaAmbulance />, text: "Patient Transfer Services" },
      { icon: <FaHeartbeat />, text: "Cardiac & Trauma Support" },
      { icon: <FaClock />, text: "Timely Hospital Transfers" }
    ],
    title: "Intercity Ambulance",
    subtitle: "Long Distance Patient Transport",
    description:
      "Safe and comfortable patient transfers between cities with continuous medical monitoring on board."
  },
  {
    image: img3,
    specs: [
      { icon: <FaAmbulance />, text: "Event Standby Medical Support" },
      { icon: <FaHeartbeat />, text: "Emergency Response Teams" },
      { icon: <FaClock />, text: "Instant Deployment Anytime" }
    ],
    title: "Event Medical Services",
    subtitle: "On-site Emergency Preparedness",
    description:
      "Dedicated medical teams and ambulances stationed at events for quick response to any emergency."
  }
];

// ✅ Mobile-specific images
const mobileSlides = [
  { image: heroSm1 },
  { image: heroSm2 },
  { image: heroSm3 }
];

export default function HeroShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const arrLength = isMobile ? mobileSlides.length : slides.length;
        return (prev + 1) % arrLength;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [isMobile]);

  const displaySlides = isMobile ? mobileSlides : slides;

  return (
    <div className="relative w-full h-[85vh] overflow-hidden bg-white">
      {/* Background Images with overlay */}
      <AnimatePresence>
        <motion.div
          key={displaySlides[activeIndex].image}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${displaySlides[activeIndex].image})` }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </motion.div>
      </AnimatePresence>

      {/* Top-left Specs (hidden on mobile) */}
      {!isMobile && (
        <motion.div
          key={`specs-${activeIndex}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0, y: [0, -4, 0] }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.6,
            y: { repeat: Infinity, duration: 3, ease: "easeInOut" }
          }}
          className="hidden sm:block absolute top-6 left-6 bg-[#8B0000]/70 backdrop-blur-md text-white p-3 rounded-xl max-w-xs shadow-lg border border-white/20 text-sm"
        >
          {slides[activeIndex].specs.map((spec, i) => (
            <div key={i} className="flex items-center gap-2 py-1">
              <span
                className={`text-white ${
                  spec.icon.type === FaHeartbeat
                    ? "animate-pulse text-red-300"
                    : ""
                }`}
              >
                {spec.icon}
              </span>
              <span>{spec.text}</span>
            </div>
          ))}
        </motion.div>
      )}

      {/* Info Box - top on mobile, bottom on desktop */}
<motion.div
  key={`info-${activeIndex}`}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.6 }}
  className="absolute top-4 left-4 sm:bottom-6 sm:left-6 sm:top-auto bg-gradient-to-r from-[#8B0000]/80 to-[#8B0000]/60 backdrop-blur-md text-white p-3 sm:p-4 rounded-xl max-w-[85%] sm:max-w-sm shadow-lg border border-white/20 space-y-1 sm:space-y-2 text-xs sm:text-sm"
>
  <h2 className="text-base sm:text-xl font-bold flex items-center gap-2">
    <FaInfoCircle className="text-white" />
    {isMobile ? "Nesh Ambulance" : slides[activeIndex].title}
  </h2>
  <h3 className="text-xs sm:text-md font-medium opacity-90">
    {isMobile ? "Emergency Medical Services" : slides[activeIndex].subtitle}
  </h3>
  <p className="text-[10px] sm:text-xs opacity-90">
    {isMobile
      ? "Reliable ambulance service with trained staff and quick response."
      : slides[activeIndex].description}
  </p>
  <Link to="/about">
    <button className="mt-3 cursor-pointer bg-white text-[#8B0000] hover:bg-gray-200 hover:shadow-lg px-2 sm:px-3 py-1.5 rounded-lg text-[10px] sm:text-sm font-semibold flex items-center gap-1 sm:gap-2 transition-all duration-300">
      Learn More <FaChevronRight />
    </button>
  </Link>
</motion.div>


      {/* Thumbnails */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex gap-2 sm:gap-4">
        {displaySlides.map((slide, i) => (
          <motion.div
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-20 h-14 sm:w-28 sm:h-20 bg-cover bg-center rounded-xl sm:rounded-2xl cursor-pointer border-2 transition-all duration-300 ${
              activeIndex === i
                ? "border-white shadow-lg shadow-white/50"
                : "border-transparent opacity-80"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
            whileHover={{ scale: 1.05 }}
            animate={{
              y: [0, -4, 0],
              transition: { repeat: Infinity, duration: 4, ease: "easeInOut" }
            }}
          />
        ))}
      </div>
    </div>
  );
}
