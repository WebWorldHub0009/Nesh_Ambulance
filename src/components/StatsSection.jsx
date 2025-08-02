import React from "react";
import { motion } from "framer-motion";
import { FaAmbulance, FaUserMd, FaHospital, FaStar } from "react-icons/fa";

const stats = [
  {
    value: "24/7",
    label: "Emergency Availability",
    sub: "Anytime, Anywhere Assistance",
    icon: <FaAmbulance className="text-3xl text-red-800" />,
  },
  {
    value: "5000+",
    label: "Patients Transported",
    sub: "Safely Reached Hospitals",
    icon: <FaHospital className="text-3xl text-red-800" />,
  },
  {
    value: "300+",
    label: "Medical Experts",
    sub: "Trained & Certified Staff",
    icon: <FaUserMd className="text-3xl text-red-800" />,
  },
  {
    value: "4.9★",
    label: "Customer Satisfaction",
    sub: "Based on 5,000+ Reviews",
    icon: <FaStar className="text-3xl text-red-800" />,
  },
];

export default function StatsSection() {
  return (
    <>
      <section className="relative py-10 overflow-hidden z-10">
        {/* Background Arc */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[1000px]  rounded-b-[50%] z-0" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <motion.h2
            className="text-xl md:text-xl font-serif text-red-800 font-semibold mb-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Our Stats In Numbers
          </motion.h2>

          <motion.h1
            className="text-3xl md:text-4xl font-[italiana] font-bold text-gray-900 mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Trusted by Thousands in Emergency Medical Transport
          </motion.h1>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105 hover:bg-[#f9fefb] border-t-4 border-red-800 flex flex-col items-center text-center"
              >
                <div className="mb-4">{stat.icon}</div>
                <h3 className="text-3xl font-bold text-[#1C1C1C]">{stat.value}</h3>
                <p className="mt-2 text-gray-700 font-semibold">{stat.label}</p>
                <p className="text-sm text-gray-500">{stat.sub}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <button className="bg-[#C62828] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#a71d1d] transition font-semibold">
              Book Emergency Ambulance Now
            </button>
          </motion.div>
        </div>
      </section>
      <div className="w-full h-[2px] bg-red-800"></div>
    </>
  );
}
