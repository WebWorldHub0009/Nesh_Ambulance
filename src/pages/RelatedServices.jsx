// RelatedServices.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHeartbeat, FaAmbulance } from "react-icons/fa";
import { ambulanceServices } from "../data/ambulanceServices";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const RelatedServices = ({ currentServiceId }) => {
  const navigate = useNavigate();

  // Remove current service
  const relatedServices = ambulanceServices.filter(
    (service) => service.id !== currentServiceId
  );

  return (
    <div className="mt-8 py-8 max-w-[1400px] mx-auto px-4">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-bold text-[#8B0000] relative inline-block font-[italiana]">
          Related Ambulance Services
          <span className="block w-20 h-1 bg-[#8B0000] mx-auto mt-2 rounded-full"></span>
        </h3>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        // pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="pb-10"
      >
        {relatedServices.map((service, index) => (
          <SwiperSlide key={service.id}>
            <motion.div
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RelatedServices;
