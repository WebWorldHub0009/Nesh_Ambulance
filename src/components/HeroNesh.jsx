import React from "react";
import { motion } from "framer-motion";
import {
  FaCogs,
  FaUserTie,
  FaShieldAlt,
  FaRocket,
  FaTools,
  FaHandshake,
} from "react-icons/fa";
import img from "../assets/home/ambulance.png";
import bg from "../assets/home/bg1.avif"; // Optional background image

const features = [
  {
    icon: <FaCogs className="text-xl text-[#C62828]" />,
    title: "Modern Equipment",
    desc: "Equipped with state-of-the-art life-saving tools and communication systems.",
  },
  {
    icon: <FaUserTie className="text-xl text-[#C62828]" />,
    title: "Trained Professionals",
    desc: "Operated by certified paramedics trained in emergency response.",
  },
  {
    icon: <FaShieldAlt className="text-xl text-[#C62828]" />,
    title: "Reliable & Safe",
    desc: "Engineered for stability, hygiene, and fast patient transport.",
  },
  {
    icon: <FaRocket className="text-xl text-[#C62828]" />,
    title: "Rapid Response",
    desc: "Swift dispatch system ensuring critical help when needed most.",
  },
  {
    icon: <FaTools className="text-xl text-[#C62828]" />,
    title: "Fully Customizable",
    desc: "Modular ambulance design tailored to unique healthcare needs.",
  },
  {
    icon: <FaHandshake className="text-xl text-[#C62828]" />,
    title: "24/7 Service",
    desc: "Ready around-the-clock with instant availability and support.",
  },
];

export default function NeshHero() {
  return (
    <div
      className="relative bg-[#1C1C1C] text-white py-24 px-6 overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* SVG Red Hollow Circles */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-4 border-[#C62828] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full border-4 border-[#C62828] opacity-20 animate-pulse"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center text-red-800 font-[Italiana] mb-6"
      >
        About Nesh Ambulance
      </motion.h2>

      {/* Description */}
      <p className="max-w-4xl mx-auto text-center text-black text-lg leading-relaxed mb-12">
        <span className="text-[#fff] font-semibold">Nesh Ambulance</span> delivers advanced emergency
        transportation with cutting-edge medical support, ensuring every second counts during
        critical moments. With 10+ years of trusted service, we’re setting the gold standard in
        ambulance care across the nation.
      </p>

      {/* Experience Badge */}
      <div className="flex justify-center mb-16">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="bg-[#C62828] text-white px-6 py-3 rounded-full shadow-lg text-lg font-semibold"
        >
          10+ Years of Emergency Excellence
        </motion.div>
      </div>

      {/* 3-Column Layout */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10 items-center z-10 relative">
        {/* Left Features */}
        <div className="flex flex-col gap-6">
          {features.slice(0, 3).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="flex items-start gap-4"
            >
              {item.icon}
              <div>
                <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Center Image with 3D/Glow */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-[280px] h-[380px] rounded-xl overflow-hidden shadow-[0_0_40px_#C62828] border-4 border-[#C62828] bg-black">
            <img
              src={img}
              alt="Ambulance"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-[#C62828] text-white px-3 py-1 text-sm rounded-full shadow">
              Fast. Safe. Trusted.
            </div>
          </div>
        </motion.div>

        {/* Right Features */}
        <div className="flex flex-col gap-6">
          {features.slice(3).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="flex items-start gap-4"
            >
              {item.icon}
              <div>
                <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
