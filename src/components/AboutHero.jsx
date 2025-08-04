import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import bgImage from "../assets/abbg.avif";
import ambulanceImg from "../assets/home/ambulance.png";

const AboutHero = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    const section = document.querySelector("#about-hero");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about-hero"
      className="relative w-full h-[50vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0 " />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
        
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left text-gray-900 w-full lg:w-1/2"
        >
          <h1 className="font-[italiana] text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-900 to-red-500">
            About <span>Nesh Ambulance</span>
          </h1>

          <h3
            className="text-base sm:text-lg lg:text-xl font-medium text-red-600 mb-4 animate-floatText"
          >
            Saving Lives, One Ride at a Time
          </h3>

          <p className="text-sm sm:text-base text-gray-700 mb-6 max-w-md mx-auto lg:mx-0 leading-relaxed">
            Swift, reliable, and life-saving ambulance services with advanced
            medical technology and skilled professionals — ensuring every second counts.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a
              href="/contact"
              className="px-5 py-2.5 sm:px-6 sm:py-3 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:bg-red-700 transition flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              Contact Us <FaArrowRight />
            </a>
            <a
              href="tel:+919971759200"
              className="px-5 py-2.5 sm:px-6 sm:py-3 border-2 border-red-700 text-red-700 font-semibold rounded-full hover:bg-red-600 hover:text-white transition flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <FaPhoneAlt /> Call Now
            </a>
          </div>
        </motion.div>

        {/* Right Side - PNG Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full lg:w-1/2 hidden md:flex justify-center relative"
        >
          <img
            src={ambulanceImg}
            alt="3D Ambulance"
            loading="lazy"
            className="w-56 sm:w-72 md:w-96 lg:w-[500px] drop-shadow-2xl animate-floatImage"
          />
          <div className="absolute -bottom-4 w-32 sm:w-40 lg:w-48 h-5 sm:h-6 bg-red-500/30 blur-3xl rounded-full"></div>
        </motion.div>
      </div>

      {/* Smooth CSS Animations */}
      <style jsx>{`
        @keyframes floatImage {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-floatImage {
          animation: floatImage 5s ease-in-out infinite;
        }

        @keyframes floatText {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-floatText {
          animation: floatText 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutHero;
