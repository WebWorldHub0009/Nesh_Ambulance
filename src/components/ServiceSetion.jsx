import React from "react";
import { motion } from "framer-motion";
import { FaAmbulance, FaHeartbeat, FaPlane, FaUserMd, FaClinicMedical, FaProcedures } from "react-icons/fa";
import { Link } from "react-router-dom";

import img1 from "../assets/showcase/s8.jpg";
import img2 from "../assets/advanced.jpg";
import img3 from "../assets/air.jpg";
import img4 from "../assets/freezer-van.jpg";
import img5 from "../assets/emergency.jpg";
import img6 from "../assets/showcase/s2.jpg";
import bg from "../assets/home/bg.jpg"; 

const ambulanceServices = [
  {
    icon: <FaHeartbeat className="text-2xl text-[#8B0000]" />,
    title: "Basic Life Support (BLS)",
    description: "Non-emergency ambulance for stable patients with basic medical needs.",
    imgSrc: img1,
  },
  {
    icon: <FaAmbulance className="text-2xl text-[#8B0000]" />,
    title: "Advanced Life Support (ALS)",
    description: "Equipped with ICU setup for critical patients needing ventilators and monitors.",
    imgSrc: img2,
  },
  {
    icon: <FaPlane className="text-2xl text-[#8B0000]" />,
    title: "Air Ambulance",
    description: "High-speed long-distance transfer with full medical team onboard.",
    imgSrc: img3,
  },
  {
    icon: <FaProcedures className="text-2xl text-[#8B0000]" />,
    title: "Freezer Van",
    description: "Dead body freezer vans for dignified and temperature-controlled transport.",
    imgSrc: img4,
  },
  {
    icon: <FaClinicMedical className="text-2xl text-[#8B0000]" />,
    title: "Patient Transport",
    description: "Scheduled transfers for check-ups, dialysis, or post-surgery transport.",
    imgSrc: img5,
  },
  {
    icon: <FaUserMd className="text-2xl text-[#8B0000]" />,
    title: "Event Standby",
    description: "Medical teams & ambulance stationed at events or gatherings for emergencies.",
    imgSrc: img6,
  },
];

export default function AmbulanceServices() {
  return (
    <section
      className="relative py-10 text-center bg-fixed bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0  z-0" />

      <div className="relative z-10 px-2 max-w-6xl mx-auto">
        <h2 className="uppercase tracking-wider text-sm font-semibold text-red-800">
          24/7 Medical Emergency Support
        </h2>
        <h3 className="text-3xl sm:text-4xl font-[italiana] font-bold text-gray-800 mt-3">
          Our <span className="text-[#8B0000]">Ambulance Services</span>
        </h3>
        <p className="text-gray-700 max-w-3xl mx-auto mt-4 mb-10 text-sm sm:text-base">
          Nesh Ambulance Service delivers fast, professional, and round-the-clock emergency response. We offer a range of medical transport options to meet every patient’s unique needs.
        </p>

        {/* Service Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {ambulanceServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-white text-black shadow-md rounded-xl p-5 w-80 flex flex-col items-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={service.imgSrc}
                alt={service.title}
                className="w-full h-44 object-cover rounded-lg mb-4"
              />
              <div className="bg-white p-3  border-1 border-red-700 relative -top-10 rounded-full shadow-md ">
                {service.icon}
              </div>
              <h4 className="text-lg font-bold text-[#1B2A41]  uppercase -mt-5">
                {service.title}
              </h4>
              <p className="text-sm text-gray-600 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <p className="mt-10 text-gray-700 text-sm sm:text-base">
          Need emergency or scheduled service?{" "}
          <Link
            to="/contact"
            className="text-green-600 underline hover:text-green-700 transition"
          >
            Book Ambulance Now
          </Link>
        </p>
      </div>
    </section>
  );
}
