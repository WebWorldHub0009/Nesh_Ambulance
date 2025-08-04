import React from "react";
import { FaHeartbeat, FaEye } from "react-icons/fa";
import bgImage from "../assets/abstractbg.jpg"; // Main background image
// import overlayTexture from "../assets/fabg.jpg"; // Transparent PNG texture

const VisionMissionModern = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center text-black overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Parallax slide effect
      }}
    >
      {/* Moving Gradient Overlay */}
      <div className="absolute bg-[#00000000] inset-0 z-0"></div>


      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10 md:py-16 space-y-20 text-center">
        {/* Mission */}
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-4">
            <span className="w-3 h-3 bg-red-700 rounded-full animate-pulse"></span>
            <div className="w-20 h-[2px] bg-red-700 animate-pulse"></div>
          </div>
          <div className="flex justify-center mb-4">
            <FaHeartbeat className="text-red-700 text-4xl animate-pulse" />
          </div>
          <h2 className="shine-text text-4xl md:text-5xl font-extrabold uppercase tracking-wide relative inline-block font-[italiana]">
            Our Mission
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            To provide swift, reliable, and life-saving ambulance services equipped with
            advanced medical technology and a skilled team of professionals — ensuring every
            patient receives the care they need, exactly when they need it.
          </p>
        </div>

        {/* Vision */}
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-4">
            <span className="w-3 h-3 bg-red-700 rounded-full animate-pulse"></span>
            <div className="w-20 h-[2px] bg-red-700 animate-pulse"></div>
          </div>
          <div className="flex justify-center mb-4">
            <FaEye className="text-red-700 text-4xl" />
          </div>
          <h2 className="shine-text text-4xl md:text-5xl font-extrabold uppercase tracking-wide relative inline-block font-[italiana]">
            Our Vision
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            To become India’s most trusted emergency medical service provider, recognized for
            unmatched speed, compassion, and quality of care — setting a gold standard for
            ambulance services across the nation and beyond.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionModern;
