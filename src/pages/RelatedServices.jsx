import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaAmbulance, FaHeartbeat } from "react-icons/fa";
import { ambulanceServices } from "../data/ambulanceServices";

const RelatedServices = ({ currentServiceId }) => {
  const navigate = useNavigate();

  // Filter out current service
  const relatedServices = ambulanceServices.filter(
    (service) => service.id !== currentServiceId
  );

  return (
    <div className="mt-16 max-w-[1400px] mx-auto px-4">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-bold text-[#8B0000] relative inline-block">
          Related Ambulance Services
          <span className="block w-20 h-1 bg-[#8B0000] mx-auto mt-2 rounded-full"></span>
        </h3>
      </div>

      {/* Desktop: Grid | Mobile: Horizontal Scroll */}
      <div
        className="
          hidden md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4
          gap-6 py-4 px-4
        "
      >
        {relatedServices.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col justify-between bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all cursor-pointer"
            onClick={() => navigate(service.path)}
          >
            {/* Image */}
            <div className="relative h-44 w-full">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover"
              />
              {/* <span className="absolute top-3 left-3 bg-[#8B0000] text-white px-3 py-1 text-xs font-medium rounded-full flex items-center gap-1 shadow-lg">
                <FaAmbulance /> Ambulance
              </span> */}
            </div>

            {/* Info */}
            <div className="p-5 flex flex-col flex-1 justify-between">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 truncate">
                  {service.name}
                </h4>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  {service.description}
                </p>
              </div>

              <hr className="my-3 border-gray-200" />

              {/* Price */}
              <div className="flex items-center justify-between mt-auto">
                <span className="flex items-center text-[#8B0000] text-sm font-medium gap-1">
                  <FaHeartbeat /> ₹{service.rentPerHour}/hr
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(service.path);
                  }}
                  className="px-3 py-1 bg-[#8B0000] text-white text-xs rounded-lg hover:bg-[#a50f0f] transition"
                >
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile: Horizontal Scroll */}
      <div className="flex md:hidden gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory scroll-smooth">
        {relatedServices.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="min-w-[90%] flex flex-col justify-between bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all cursor-pointer snap-center"
            onClick={() => navigate(service.path)}
          >
            {/* Image */}
            <div className="relative h-44 w-full">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 bg-[#8B0000] text-white px-3 py-1 text-xs font-medium rounded-full flex items-center gap-1 shadow-lg">
                <FaAmbulance /> Ambulance
              </span>
            </div>

            {/* Info */}
            <div className="p-5 flex flex-col flex-1 justify-between">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 truncate">
                  {service.name}
                </h4>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  {service.description}
                </p>
              </div>

              <hr className="my-3 border-gray-200" />

              {/* Price */}
              <div className="flex items-center justify-between mt-auto">
                <span className="flex items-center text-[#8B0000] text-sm font-medium gap-1">
                  <FaHeartbeat /> ₹{service.rentPerHour}/hr
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(service.path);
                  }}
                  className="px-3 py-1 bg-[#8B0000] text-white text-xs rounded-lg hover:bg-[#a50f0f] transition"
                >
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RelatedServices;
