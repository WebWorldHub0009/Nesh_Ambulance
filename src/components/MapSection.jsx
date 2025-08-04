import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";

const MapSection = () => {
  return (
    <section className="px-4 py-20 bg-[#fff5f5] text-[#2c2c2c]">
      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <FaMapMarkedAlt className="text-4xl text-red-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide leading-tight text-red-800">
            Locate Nesh Ambulance
          </h2>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-red-600/80 font-light italic">
            Always ready to reach you — Visit our Gurugram base
          </p>
        </div>

        {/* Embedded Google Map */}
        <div className="overflow-hidden shadow-2xl border-2 border-red-300 rounded-xl">
          <iframe
            title="Nesh Ambulance Location"
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d112193.929926071!2d76.9783315881366!3d28.507833148337358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390d190490932971%3A0x9556dc5767ab450!2sGali%20Numbar%202%2C%20Huda%20Market%2C%20Plot%20Number%203467%20Ground%20floor%2C%20near%20by%20Ankush%20home%2C%20Sector%2023%2C%20Gurugram%2C%20Haryana%20122017!3m2!1d28.507858!2d77.060733!5e0!3m2!1sen!2sin!4v1754282346318!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[280px] sm:h-[300px] md:h-[400px] lg:h-[480px]"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
