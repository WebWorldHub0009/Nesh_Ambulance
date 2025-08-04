import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/slider/amb1.png"; // Replace with actual background

const GalleryHero = () => {
  return (
    <section
      className="relative w-full h-[60vh] sm:h-[70vh] md:h-[85vh] flex items-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16"
      >
        <div className="max-w-xl">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight tracking-wide font-[italiana]"
          >
            Capturing Moments of Life-Saving Service
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 font-light leading-relaxed"
          >
            A glimpse into our fleet, our team, and the dedication that drives us forward every day.
          </motion.p>

          {/* Button */}
          <motion.a
            href="#gallery-section"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="inline-block mt-6 bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition-all duration-300"
          >
            View Gallery
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default GalleryHero;
