import React from "react";
import { Link } from "react-router-dom";
import { FaUserMd, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const AmbulanceInfo = () => {
  return (
    <section className="relative w-full py-16 px-4 md:px-10 font-[Poppins] overflow-hidden bg-[#f9f9f9]">
      {/* Hollow Glowing SVG Circles */}
      <div className="absolute -top-40 -left-40 z-0">
        <svg width="400" height="400" viewBox="0 0 400 400">
          <defs>
            <radialGradient id="glowRed" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="100%" stopColor="#ff4d4d" stopOpacity="0.5" />
            </radialGradient>
          </defs>
          <circle
            cx="200"
            cy="200"
            r="180"
            fill="none"
            stroke="url(#glowRed)"
            strokeWidth="4"
          >
            <animate
              attributeName="r"
              values="160;180;160"
              dur="8s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      <div className="absolute -bottom-40 -right-40 z-0">
        <svg width="400" height="400" viewBox="0 0 400 400">
          <defs>
            <radialGradient id="glowDarkRed" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="100%" stopColor="#b30000" stopOpacity="0.4" />
            </radialGradient>
          </defs>
          <circle
            cx="200"
            cy="200"
            r="160"
            fill="none"
            stroke="url(#glowDarkRed)"
            strokeWidth="5"
          >
            <animate
              attributeName="r"
              values="140;160;140"
              dur="6s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      {/* Main Card */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-10 border border-red-800/30"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left - Founder Info */}
        <motion.div
          className="flex-1 w-full rounded-2xl p-8 text-center border border-red-800/40 bg-white shadow-lg hover:shadow-2xl transition duration-500 relative"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex justify-center mb-4 text-red-800 text-4xl">
            <FaUserMd />
          </div>
          <h2 className="text-xl md:text-2xl font-[italiana] font-semibold text-red-800 mb-3">
            Message from Our Founder
          </h2>
          <p className="text-gray-700 text-base md:text-lg italic mb-5 leading-relaxed">
            "Every second counts in an emergency — our mission is to bring swift,
            reliable, and compassionate ambulance care right to your doorstep."
          </p>
          <p className="text-red-800 font-bold uppercase text-sm tracking-wide mb-2">
            — Sneh Lata (Founder)
          </p>
          <div className="text-gray-700 text-sm md:text-base space-y-1 mt-3">
            <p className="flex items-center justify-center gap-2">
              <FaPhoneAlt className="text-red-800" /> 9971759200, 8178042359
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaEnvelope className="text-red-800" /> info@neshambulanceservice.in
            </p>
          </div>
        </motion.div>

        {/* Right - CTA */}
        <motion.div
          className="flex-1 w-full text-center md:text-left"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-[italiana] text-red-800 mb-4">
            Rapid Response When It Matters Most
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-6">
            Nesh Ambulance Service is your trusted 24/7 partner in medical
            emergencies. Our trained professionals and equipped fleet ensure
            you get the help you need—fast.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to="/contact"
              className="relative inline-block px-8 py-3 text-white bg-red-800 rounded-full text-base md:text-lg font-semibold group hover:bg-red-700 hover:scale-105 transition-all duration-500 shadow-lg"
            >
              Let's Connect
              <span className="absolute -inset-1 rounded-full border border-red-800/30 opacity-0 group-hover:opacity-100 transition"></span>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AmbulanceInfo;
