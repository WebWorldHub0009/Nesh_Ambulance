import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaArrowRight,
  FaHeartbeat,
  FaUserMd,
  FaAmbulance,
  FaEnvelope,
  FaWhatsapp,
  FaClock
} from "react-icons/fa"; // ✅ FA5 icons, compatible everywhere
import aboutImg1 from "../assets/slider/amb1.png";
import aboutImg2 from "../assets/showcase/s2.jpg";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-12 space-y-6 overflow-x-hidden bg-[#ffffff]">
      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Heading / Intro */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-lg overflow-hidden"
        >
          {/* Gradient + Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-red-50 z-0"></div>
          <svg
            className="absolute inset-0 w-full h-full opacity-5 z-0"
            xmlns="http://www.w3.org/2000/svg"
          >
            <pattern
              id="circles"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="2" fill="#8B0000" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#circles)" />
          </svg>

          <div className="space-y-5 relative z-10">
            <div className="flex items-center gap-3">
              <span className="p-3 bg-gradient-to-r from-red-600 to-[#8B0000] rounded-xl text-white text-xl shadow-md">
                <FaAmbulance />
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#8B0000] leading-tight font-[italiana]">
                Saving Lives Every Second
              </h2>
            </div>
            <p className="text-gray-700 text-base md:text-lg">
              Nesh Ambulance — Your trusted partner in emergency medical
              services, available 24/7 with rapid response and expert care.
            </p>
            <ul className="space-y-2 text-gray-800 text-sm md:text-base">
              <li className="flex items-center gap-2">
                <FaHeartbeat className="text-red-600" /> Equipped with ICU-grade
                equipment.
              </li>
              <li className="flex items-center gap-2">
                <FaUserMd className="text-red-600" /> Staffed with certified
                paramedics & doctors.
              </li>
              <li className="flex items-center gap-2">
                <FaAmbulance className="text-red-600" /> Fastest response time
                in the region.
              </li>
            </ul>
          </div>
          <Link to='/services/emergency'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer mt-4 w-fit bg-gradient-to-r from-red-600 to-[#8B0000] text-white px-5 py-2.5 rounded-full flex items-center gap-2 shadow-lg hover:shadow-red-500/50 transition text-sm md:text-base relative z-10"
          >
            Explore <FaArrowRight />
          </motion.button>
          </Link>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl overflow-hidden shadow-lg"
        >
          <motion.img
            src={aboutImg1}
            alt="Ambulance Crew"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-[40%_40%_20%] gap-6 md:px-4 md:pr-12">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl overflow-hidden shadow-lg"
        >
          <motion.img
            src={aboutImg2}
            alt="Ambulance in Action"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        {/* Middle: About Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-3xl p-6 md:p-8 shadow-lg flex flex-col justify-between overflow-hidden"
        >
          {/* Gradient + Lines */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/85 to-red-50 z-0"></div>
          <svg
            className="absolute inset-0 w-full h-full opacity-5 z-0"
            xmlns="http://www.w3.org/2000/svg"
          >
            <pattern
              id="lines"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 40 L40 0"
                stroke="#8B0000"
                strokeWidth="2"
                fill="none"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#lines)" />
          </svg>

          <div className="space-y-4 relative z-10">
            <div className="flex items-center gap-3">
              <span className="p-3 bg-green-100 text-green-700 font-bold text-sm rounded-xl shadow-md">
                15+ Years
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-[#8B0000] font-[italiana]">
                About Us
              </h3>
            </div>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              For over a decade, Nesh Ambulance Service has delivered
              unparalleled emergency response and patient transfer services.
              Our dedicated team ensures rapid arrival and expert care
              throughout the journey.
            </p>
            <ul className="space-y-2 text-gray-800 text-sm md:text-base">
              <li className="flex items-center gap-2">
                <FaAmbulance className="text-red-600" /> Fully equipped fleet.
              </li>
              <li className="flex items-center gap-2">
                <FaHeartbeat className="text-red-600" /> 24/7 advanced life
                support.
              </li>
              <li className="flex items-center gap-2">
                <FaUserMd className="text-red-600" /> Skilled medical team.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Right: Contact */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-b from-[#8B0000] to-red-900 text-white rounded-3xl p-5 md:p-6 flex flex-col justify-between shadow-lg relative overflow-hidden"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-red-400/20 to-transparent pointer-events-none"></div>

          <div className="space-y-4 relative z-10">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-300" />
              <h4 className="text-lg md:text-xl font-bold">Contact Us</h4>
            </div>
            <p className="text-sm opacity-90">
              Need an ambulance right now? Call us 24/7 for immediate
              assistance.
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-yellow-300" /> info@neshambulance.com
              </p>
              <p className="flex items-center gap-2">
                <FaWhatsapp className="text-green-400" /> +91 9971759200
              </p>
              <p className="flex items-center gap-2">
                <FaClock className="text-yellow-300" /> Available 24/7
              </p>
            </div>
          </div>

          <a
            href="tel:9971759200"
            className="mt-4 bg-white text-[#8B0000] px-4 py-2 rounded-full flex items-center justify-center gap-2 font-semibold hover:bg-gray-200 transition z-10 text-sm md:text-base "
          >
            <FaPhoneAlt /> Call Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
