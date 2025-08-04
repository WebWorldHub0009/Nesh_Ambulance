import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar, FaHeartbeat, FaAmbulance } from "react-icons/fa";

// Local testimonial profile images
import img1 from "../assets/testimonials/img1.jpg";
import img2 from "../assets/testimonials/img2.jpg";
import img3 from "../assets/testimonials/img3.jpg";
import img4 from "../assets/testimonials/img4.jpg";
import img5 from "../assets/testimonials/img5.jpg";
import img6 from "../assets/testimonials/img6.jpg";
import img7 from "../assets/testimonials/img7.jpg";

const testimonials = [
  {
    name: "Ravi Kumar",
    position: "Patient's Family",
    review:
      "Nesh Ambulance arrived in just 8 minutes! The staff was extremely professional and provided life-saving care on the spot.",
    stars: 5,
    image: img1,
  },
  {
    name: "Raghav Singh",
    position: "Event Organizer",
    review:
      "We hired Nesh Ambulance for an outdoor event. Their readiness and medical team ensured safety for all attendees.",
    stars: 5,
    image: img2,
  },
  {
    name: "Aman Verma",
    position: "Recovered Patient",
    review:
      "The ambulance was ICU-equipped, and the paramedics kept monitoring my vitals throughout the journey. Truly lifesavers.",
    stars: 5,
    image: img3,
  },
  {
    name: "Sneha Kapoor",
    position: "Corporate HR",
    review:
      "We trust Nesh Ambulance for our employee emergency needs. Their quick response has saved precious lives.",
    stars: 4,
    image: img4,
  },
  {
    name: "Sanskriti Rai",
    position: "Sports Coach",
    review:
      "During our sports tournament, their standby medical support was top-notch and reassuring.",
    stars: 5,
    image: img5,
  },
  {
    name: "Neha Agarwal",
    position: "NGO Volunteer",
    review:
      "Nesh Ambulance handled a long-distance patient transfer for us with utmost care and professionalism.",
    stars: 5,
    image: img6,
  },
  {
    name: "Sanyukta Mehta",
    position: "Hospital Administrator",
    review:
      "Partnering with Nesh Ambulance has improved our patient transfer times drastically.",
    stars: 5,
    image: img7,
  },
];

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const avatarRowRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Scroll avatars into view on mobile
  useEffect(() => {
    if (isMobile && avatarRowRef.current) {
      const container = avatarRowRef.current;
      const avatar = container.children[activeIndex];
      if (avatar) {
        const offset =
          avatar.offsetLeft -
          container.offsetWidth / 2 +
          avatar.offsetWidth / 2;
        container.scrollTo({ left: offset, behavior: "smooth" });
      }
    }
  }, [activeIndex, isMobile]);

  return (
    <section className="relative py-14 w-full text-center px-4 sm:px-6 overflow-hidden bg-white">
      <div className="relative z-10">
        {/* Heading */}
        <div className="mb-10 text-gray-900">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-wide font-[italiana] max-w-3xl mx-auto leading-snug">
            “Every Second Counts — Hear From Those Whose Lives We’ve Touched”
          </h2>
          <p className="mt-2 max-w-2xl mx-auto text-red-700 text-sm sm:text-base">
            Stories of trust, compassion, and unmatched emergency response.
          </p>
        </div>

        {/* Avatar Row */}
        <div
          ref={avatarRowRef}
          className={`flex items-center gap-4 mb-6 py-4 transition-all duration-500 ease-linear ${
            isMobile ? "overflow-x-auto" : "justify-center"
          }`}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {testimonials.map((item, index) => (
            <motion.div
  key={index}
  className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shadow-lg cursor-pointer"
  onClick={() => setActiveIndex(index)}
  whileHover={{ scale: 1.08 }}
  animate={{
    scale: index === activeIndex ? 1.25 : 1,
    borderColor: index === activeIndex ? "#8B0000" : "#D1D5DB", // red-700 or gray-300
    opacity: index === activeIndex ? 1 : 0.5,
    zIndex: index === activeIndex ? 10 : 1,
  }}
  transition={{
    duration: 0.4,
    ease: "easeInOut",
  }}
  style={{
    borderWidth: 2,
    borderStyle: "solid",
  }}
>
  <img
    src={item.image}
    alt={item.name}
    className="w-full h-full object-cover rounded-full"
  />
</motion.div>

          ))}
        </div>

        {/* Hide scrollbar */}
        <style>
          {`
            .overflow-x-auto::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        {/* Testimonial Box */}
        <div className="relative max-w-3xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-xl px-4 sm:px-8 md:px-14 py-6 sm:py-10 border border-red-700">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.7, type: "spring" }}
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-3xl sm:text-4xl text-red-700 mb-3 mx-auto" />

              {/* Stars */}
              <div className="flex justify-center mb-3 text-yellow-500">
                {[...Array(testimonials[activeIndex].stars)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-700 text-sm sm:text-base md:text-lg italic leading-relaxed px-2">
                “{testimonials[activeIndex].review}”
              </p>

              {/* Name & Position with Icons */}
              <div className="mt-4 sm:mt-6 flex flex-col items-center gap-1">
                <p className="font-semibold text-red-700 text-base sm:text-lg flex items-center gap-2">
                  <FaHeartbeat className="text-red-500" />{" "}
                  {testimonials[activeIndex].name}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 flex items-center gap-2">
                  <FaAmbulance className="text-red-500" />{" "}
                  {testimonials[activeIndex].position}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
