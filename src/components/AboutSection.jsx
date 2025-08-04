import React from "react";
import { motion } from "framer-motion";
import { FaRegClock, FaCarCrash, FaUserFriends } from "react-icons/fa";
import ambulanceImg from '../assets/home/ambulance.png'
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="relative w-full bg-white py-28 px-6 md:px-16 overflow-hidden">
      {/* Background circle */}
      <svg
        className="absolute -top-20 left-0 w-[700px] opacity-5 z-0 hidden lg:block"
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="400" cy="400" r="400" fill="#8B0000" />
      </svg>

      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-24 max-w-[1440px] mx-auto">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold font-[italiana] text-gray-900 leading-tight mb-5 font-italiana">
            <span className="text-red-800 inline-block relative">
              <span className="block w-10 h-[4px] bg-red-800 absolute -top-3 left-0 rounded-full"></span>
              Nesh Ambulance
            </span>{" "}
            <span className="text-[#8B0000]">Service You Can Rely On</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
            At <strong>Nesh Ambulance Service</strong>, we provide 24/7 emergency medical
            transportation with speed, care, and professionalism. Serving the community for over 15
            years, our fleet is always ready to respond.
          </p>

          <p className="text-base text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
            Our well-equipped ambulances and trained personnel ensure safety and efficiency in
            every trip. Whether it’s ICU support, patient transfer, or event standby — we’re just a
            call away. Dial <strong>📞 9971759200</strong> anytime.
          </p>

          <Link to="/services/emergency">
            <button className="cursor-pointer px-8 py-3 bg-[#8B0000] text-white font-semibold text-sm uppercase tracking-wide hover:bg-green-600 transition-all duration-300 rounded-full shadow-lg hover:shadow-2xl">
              View Services
            </button>
          </Link>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-[90vw] lg:w-1/2 max-w-xl"
        >
          <div className="absolute -top-6 -left-2 w-full h-full border-[10px] border-red-800 rounded-xl z-0" />
          <img
            src={ambulanceImg}
            alt="Nesh Ambulance"
            className="relative z-10 w-full right-8 md:right-14 rounded-xl shadow-2xl object-cover"
          />
        </motion.div>
      </div>

      {/* Bottom Centered Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-16 text-center z-10 relative"
      >
        <p className="text-sm md:text-base text-gray-500 tracking-wide uppercase">
          Trusted by thousands. Ready <span className="text-red-800 font-semibold">24/7</span> to serve you with care.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
