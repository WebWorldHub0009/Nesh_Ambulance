import React, { useState } from "react";
import {
  FaStar,
  FaRupeeSign,
  FaInfoCircle,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import RelatedServices from "./RelatedServices"; 

const SingleService = ({ service }) => {
  const [selectedTenure, setSelectedTenure] = useState(service.tenureOptions[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      {/* Service Details Section */}
      <div className="flex flex-col md:flex-row gap-8 p-6 md:p-12 items-stretch shadow-sm">
        {/* Left - Image */}
        <div className="flex-1 flex justify-center items-stretch bg-red-600">
          <img
            src={service.image}
            alt={service.name}
            className="h-full w-auto object-cover drop-shadow-lg"
          />
        </div>

        {/* Right - Details */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-2 font-[italiana]">{service.name}</h1>

          {/* Rating */}
          <div className="flex items-center mb-4 text-yellow-500">
            {[...Array(Math.floor(service.rating))].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="ml-2 text-gray-600">{service.rating}</span>
          </div>

          {/* Pricing */}
          <p className="flex items-center text-lg mb-2">
            Rent Per Hour: <FaRupeeSign className="mx-1" /> {service.rentPerHour}
          </p>
          <p className="flex items-center text-lg mb-6">
            Refundable Deposit: <FaRupeeSign className="mx-1" />{" "}
            {service.refundableDeposit}
          </p>

          {/* Tenure Selection */}
          <div className="mb-6">
            <h3 className="mb-2">Tenure (in hours):</h3>
            <div className="flex gap-3 flex-wrap">
              {service.tenureOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setSelectedTenure(option)}
                  className={`cursor-pointer px-4 py-2 rounded-full border ${
                    selectedTenure === option
                      ? "bg-[#8B0000] text-white"
                      : "bg-white text-gray-800 border-gray-300"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="mb-4">{service.description}</p>
          <p className="flex items-start text-gray-600">
            <FaInfoCircle className="mt-1 mr-2 text-[#8B0000]" />
            {service.moreInfo}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => navigate("/contact")}
              className="cursor-pointer border border-[#8B0000] text-[#8B0000] px-6 py-2 rounded-lg hover:bg-[#8B0000] hover:text-white transition"
            >
              Get Enquiry
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer bg-[#8B0000] text-white px-6 py-2 rounded-lg hover:bg-[#a50f0f] transition"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Related Services Component */}
      <div className="px-6 md:px-12">
        <RelatedServices currentServiceId={service.id} />
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-md modal-overlay"
            onClick={handleOutsideClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-lg p-8 rounded-2xl shadow-2xl bg-white/80 backdrop-blur-md border border-white/40"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="cursor-pointer absolute top-4 right-4 text-gray-500 hover:text-[#8B0000] transition"
              >
                <FaTimes size={22} />
              </button>

              {/* Modal Title */}
              <h2 className="text-2xl font-bold mb-6 text-center text-[#8B0000] tracking-wide">
                Book Your Ambulance
              </h2>

              {/* Booking Form */}
              <form
                action="https://formsubmit.co/Info@neshambulanceservice.in"
                method="POST"
                className="space-y-5"
              >
                {/* Name */}
                <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 bg-white/50 focus-within:border-[#8B0000] transition">
                  <FaUser className="text-gray-500 mr-3" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="w-full bg-transparent outline-none placeholder-gray-400"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 bg-white/50 focus-within:border-[#8B0000] transition">
                  <FaPhone className="text-gray-500 mr-3" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full bg-transparent outline-none placeholder-gray-400"
                    required
                  />
                </div>

                {/* Email */}
                <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 bg-white/50 focus-within:border-[#8B0000] transition">
                  <FaEnvelope className="text-gray-500 mr-3" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent outline-none placeholder-gray-400"
                    required
                  />
                </div>

                {/* Additional Details */}
                <textarea
                  name="message"
                  placeholder="Additional Details"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white/50 outline-none placeholder-gray-400 resize-none focus:border-[#8B0000] transition"
                  rows="3"
                ></textarea>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="cursor-pointer w-full bg-[#8B0000] hover:bg-[#a50f0f] text-white font-semibold py-3 rounded-lg transition transform hover:scale-[1.02] shadow-lg"
                >
                  Confirm Booking
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SingleService;
