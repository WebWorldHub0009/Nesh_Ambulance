import React from "react";
import {
  FaUserCheck,
  FaListAlt,
  FaCalendarCheck,
  FaCheckCircle,
  FaBug,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const steps = [
  {
    id: 1,
    title: "Tell Us Your Problem",
    description:
      "Quickly let us know the pest issue and location. Our team will analyze and get ready to help.",
    icon: <FaUserCheck className="text-4xl text-green-800" />,
    extra:
      "You can reach us via call, form, or WhatsApp — whichever is easier.",
  },
  {
    id: 2,
    title: "Get an Instant Plan",
    description:
      "We provide a custom pest control plan — tailored to your area, type of pest, and urgency.",
    icon: <FaListAlt className="text-4xl text-green-800" />,
    extra: "No hidden charges. Transparent service packages only.",
  },
  {
    id: 3,
    title: "Book a Convenient Slot",
    description:
      "Choose a time that works for you. We respect your space and time.",
    icon: <FaCalendarCheck className="text-4xl text-green-800" />,
    extra: "Online scheduling, confirmation via WhatsApp/SMS/email.",
  },
  {
    id: 4,
    title: "We Eliminate the Pests",
    description:
      "Our certified experts use eco-safe treatments and leave your space pest-free.",
    icon: <FaBug className="text-4xl text-green-800" />,
    extra: "Includes post-care tips and guaranteed results.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-[#f5fbf5]">
       
      <div className="text-center mb-14">
        <p className="text-sm text-green-700 font-medium uppercase tracking-widest">
          Simple 4-Step Process
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-green-900">
          How Excel Pest Control Works
        </h2>
        <p className="mt-3 text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
          We’ve made it easy, efficient, and fast to get rid of pests — without any stress.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto">
        {steps.map((step, idx) => (
          <div
            key={step.id}
            className="relative group border border-green-200 bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            {/* Animated Badge */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white border-2 border-green-700 text-green-800 font-bold text-sm group-hover:bg-green-700 group-hover:text-white transition-all duration-300">
                <span className="group-hover:hidden">{idx + 1}</span>
                <FaCheckCircle className="hidden group-hover:block text-white text-sm" />
              </div>
            </div>

            {/* Icon */}
            <div className="flex justify-center mb-5 mt-6">{step.icon}</div>

            {/* Title */}
            <h3 className="text-center text-xl font-semibold mb-2 text-green-900">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-center text-gray-600 text-sm mb-3">
              {step.description}
            </p>

            {/* Extra Info */}
            <p className="text-center text-gray-500 text-xs mb-6">{step.extra}</p>

            {/* Learn More Button */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full px-4">
              <div className="opacity-0 translate-y-1 group-hover:translate-y-8 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <Link to="/contact">
                  <button className="w-full rounded-full bg-green-700 text-white text-sm py-2 hover:bg-green-800 transition">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-lg text-gray-700 font-medium mb-6">
          Excel Pest Control is trusted by hundreds of homes & businesses. Let us help you too.
        </p>
        <Link to="/contact">
          <button className="bg-green-800 text-white px-6 py-3 rounded-full text-sm hover:bg-green-900 transition">
            Contact Us Today
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HowItWorks;
