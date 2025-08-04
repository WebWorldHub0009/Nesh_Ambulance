import React from "react";
import { FiUserCheck, FiShield, FiPhoneCall } from "react-icons/fi";
import bgImage from "../assets/showcase/s2.jpg";
import { Link } from "react-router-dom";

export default function WhyChooseUs() {
  return (
    <section className="relative w-full py-20 px-4 md:px-12 font-[Poppins] text-[#1B2A41]">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <h3 className="text-sm uppercase tracking-widest text-[#B22222] font-medium mb-2">
            WHY PATIENTS TRUST US
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold font-[italiana] leading-tight text-[#1B2A41]">
            Why <span className="text-[#B22222]">Nesh Ambulance Service</span> is the Right Choice
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            “Every second matters. That’s why we deliver more than speed — we deliver care.”
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {/* Staff */}
          <div className="bg-white border border-[#E0E0E0] rounded-xl p-6 shadow-sm">
            <div className="text-2xl text-[#B22222] mb-4">
              <FiUserCheck />
            </div>
            <h4 className="text-lg font-semibold mb-2">Trained Paramedic Staff</h4>
            <p className="text-sm text-gray-600">
              Our staff is medically trained and ready to assist in emergency situations with professionalism.
            </p>
          </div>

          {/* Equipment */}
          <div className="bg-white border border-[#E0E0E0] rounded-xl p-6 shadow-sm">
            <div className="text-2xl text-[#B22222] mb-4">
              <FiShield />
            </div>
            <h4 className="text-lg font-semibold mb-2">Advanced Life Support</h4>
            <p className="text-sm text-gray-600">
              Our ambulances are equipped with ICU setups, oxygen, ventilators, and life-saving equipment.
            </p>
          </div>

          {/* Response */}
          <div className="bg-white border border-[#E0E0E0] rounded-xl p-6 shadow-sm">
            <div className="text-2xl text-[#B22222] mb-4">
              <FiPhoneCall />
            </div>
            <h4 className="text-lg font-semibold mb-2">Rapid Response 24/7</h4>
            <p className="text-sm text-gray-600">
              We are available round the clock to ensure patients are transported safely and swiftly — day or night.
            </p>
          </div>

          {/* Call to Action Box */}
          <div className="md:col-span-2 lg:col-span-3 bg-[#222f44] text-white px-8 py-3  rounded-xl shadow-md flex flex-col md:flex-row justify-between items-start md:items-center mt-4">
            <div>
              <h4 className="text-xl font-semibold mb-2">Need Immediate Medical Transport?</h4>
              <p className="text-sm text-gray-200 max-w-2xl">
                Nesh Ambulance is just a call away. Whether it's emergency support or scheduled transfers, we’re ready to serve with care and precision.
              </p>
            </div>
            <Link to="/contact">
              <button className="mt-4 md:mt-0 cursor-pointer bg-[#B22222] hover:bg-[#911c1c] text-white px-6 py-2 rounded-full text-sm font-semibold transition-all">
                Contact Now →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
