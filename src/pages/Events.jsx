import React from "react";
import { motion } from "framer-motion";
import {
  FaAmbulance,
  FaHeartbeat,
  FaUserMd,
  FaRegClock,
  FaShieldAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const EventsPage = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Header Section */}
      <div className="relative bg-red-800 text-white py-16 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold font-[italiana]"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Event Medical Support & Ambulance Services
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Professional, prompt, and fully equipped ambulance services for events
          of all sizes — ensuring safety for everyone.
        </motion.p>
      </div>

      {/* About Events Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.h2
          className="text-3xl font-bold text-center mb-6 text-red-800 font-[italiana]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Event Ambulance Services
        </motion.h2>
        <motion.p
          className="text-center text-gray-700 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Whether it's a sports meet, corporate function, cultural festival, or
          political rally, our trained paramedics and modern ambulances are
          ready to respond instantly to any medical emergency.
        </motion.p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaAmbulance size={40} className="text-red-800" />,
              title: "On-Site Ambulance",
              desc: "Our ambulances are stationed at your event for immediate response.",
            },
            {
              icon: <FaHeartbeat size={40} className="text-red-800" />,
              title: "Emergency Medical Team",
              desc: "Skilled paramedics and doctors on-site for any emergency.",
            },
            {
              icon: <FaRegClock size={40} className="text-red-800" />,
              title: "24/7 Availability",
              desc: "No matter the time or location, we’re just a call away.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-8 text-red-800 font-[italiana]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Nesh Ambulance for Your Events?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaShieldAlt size={35} className="text-red-800" />,
                title: "Trusted Professionals",
                desc: "Experienced staff with a track record of reliable service.",
              },
              {
                icon: <FaUserMd size={35} className="text-red-800" />,
                title: "Qualified Medical Team",
                desc: "Certified doctors, nurses, and paramedics for immediate care.",
              },
              {
                icon: <FaPhoneAlt size={35} className="text-red-800" />,
                title: "Quick Response",
                desc: "Fast and efficient deployment for any size event.",
              },
            ].map((reason, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl text-center transition duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                <div className="flex justify-center mb-4">{reason.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-red-800 text-white py-12 text-center">
        <motion.h2
          className="text-3xl font-bold mb-4 font-[italiana]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Book Our Ambulance for Your Next Event
        </motion.h2>
        <motion.p
          className="mb-6 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Ensure the safety and well-being of all attendees with our
          professional ambulance and medical services.
        </motion.p>
        <a
          href="/contact"
          className="bg-white text-red-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Contact Us Now
        </a>
      </div>
    </div>
  );
};

export default EventsPage;
