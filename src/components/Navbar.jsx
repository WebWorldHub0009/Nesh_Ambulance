import React, { useState } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaPhone,
  FaBars,
  FaTimes,
  FaPhotoVideo,
  FaToiletPaper,
  FaAmbulance,
  FaUserInjured,
  FaCalendarCheck,
  FaProcedures,
  FaPlane,
  FaLungs,
  FaSnowflake,
  FaHospital,
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io"; // Modern dropdown arrow
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // ✅ Add your logo file here
import { FaBuildingColumns, FaFireBurner, FaFireFlameCurved, FaFireFlameSimple } from "react-icons/fa6";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaInfoCircle /> },
    {
      name: "Services",
      icon: <FaServicestack />,
      dropdown: [
        { name: "Emergency Ambulance", path: "/services/emergency", icon: <FaAmbulance className="text-[#8B0000]" /> },
        { name: "Patient Transport", path: "/services/transport", icon: <FaUserInjured className="text-[#8B0000]" /> },
        { name: "Event Medical Support", path: "/services/event-support", icon: <FaCalendarCheck className="text-[#8B0000]" /> },
        { name: "ICU Ambulance", path: "/services/icu", icon: <FaProcedures className="text-[#8B0000]" /> },
        { name: "Air Ambulance", path: "/services/air", icon: <FaPlane className="text-[#8B0000]" /> },
        { name: "Normal Ambulance", path: "/services/normal", icon: <FaAmbulance className="text-[#8B0000]" /> },
  { name: "Oxygen Ambulance", path: "/services/oxygen", icon: <FaLungs className="text-[#8B0000]" /> }, // FaLungs from react-icons/fa
  { name: "Dead Body Transport", path: "/services/dead-body-transport", icon: <FaUserInjured className="text-[#8B0000]" /> },
  { name: "Dead Body Freezer Box", path: "/services/freezer-box", icon: <FaSnowflake className="text-[#8B0000]" /> },
  { name: "End to End Cremation Support", path: "/services/cremation-support", icon: <FaFireFlameCurved className="text-[#8B0000]" /> },
      ],
    },
    { name: "Gallery", path: "/gallery", icon: <FaPhotoVideo /> },
    { name: "Contact", path: "/contact", icon: <FaPhone /> },
    { name: "Events", path: "/events", icon: <FaBuildingColumns /> },
  ];

  return (
    <header className="w-full">
      {/* Main Navbar */}
      <nav className="bg-white shadow-md relative px-4">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center px-4 py-2 md:py-2">
          {/* ✅ Logo + Brand Name */}
          <div className="flex items-center gap-3">
            <Link to="/">
              <img
                src={logo}
                alt="Nesh Ambulance Logo"
                className="h-14 w-auto md:h-18 object-contain"
              />
            </Link>
            {/* <div className="text-[#8B0000] text-2xl font-bold">NESH</div> */}
          </div>

          {/* Center Nav Links (Desktop) */}
          <ul className="hidden md:flex gap-8 text-red-900 font-semibold  relative">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="group relative text-lg"
                onMouseEnter={() => link.dropdown && setServicesOpen(true)}
                onMouseLeave={() => link.dropdown && setServicesOpen(false)}
              >
                <Link
                  to={link.path || "#"}
                  className="flex items-center gap-1 hover:text-[#8B0000] transition"
                >
                  {link.icon}
                  {link.name}
                  {link.dropdown && (
                    <IoIosArrowDown
                      className={`ml-1 text-sm transition-transform duration-300 ${
                        servicesOpen ? "rotate-180 text-[#8B0000]" : ""
                      }`}
                    />
                  )}
                </Link>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#8B0000] group-hover:w-full transition-all duration-300"></span>

                {/* Dropdown Menu */}
                {link.dropdown && servicesOpen && (
  <ul
    className="absolute left-0 mt-0 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 w-64 z-50 animate-fadeSlide"
  >
    {link.dropdown.map((sub, idx) => (
      <li key={idx}>
        <Link
          to={sub.path}
          className="group flex items-center gap-2 px-4 py-2 text-red-800 transition-all duration-300 ease-in-out hover:bg-white hover:text-red-800 hover:shadow-lg hover:shadow-black/40 hover:scale-[1.02] hover:translate-x-1"
        >
          <span className="transition-colors duration-300 group-hover:text-white">
            {sub.icon}
          </span>
          {sub.name}
        </Link>
      </li>
    ))}
  </ul>
)}

              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="hidden md:flex gap-4">
            <Link to="/contact">
              <button className="cursor-pointer bg-[#8B0000] hover:bg-[#a50f0f] text-white px-5 py-2 rounded-xl transition">
                BOOK NOW
              </button>
            </Link>
            <Link to="/about">
              <button className="cursor-pointer border border-[#8B0000] hover:bg-[#8B0000] hover:text-white text-[#8B0000] px-5 py-2 rounded-xl transition">
                Our Story
              </button>
            </Link>
          </div>

          {/* Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(true)}>
              <FaBars className="text-[#8B0000]" size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 rounded-l-xl transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 pr-2`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200">
          <h2 className="text-[#8B0000] text-xl font-semibold">Menu</h2>
          <button onClick={() => setMenuOpen(false)}>
            <FaTimes className="text-[#8B0000]" size={22} />
          </button>
        </div>
        <div className="px-4 mt-4">
          {navLinks.map((link, index) => (
            <div key={index}>
              {link.dropdown ? (
                <>
                  <button
                    onClick={() =>
                      setMobileServicesOpen((prev) => !prev)
                    }
                    className="flex justify-between items-center w-full py-3 border-b text-gray-700 hover:text-[#8B0000] transition"
                  >
                    <span className="flex items-center gap-2">
                      {link.icon}
                      {link.name}
                    </span>
                    <IoIosArrowDown
                      className={`transition-transform duration-300 ${
                        mobileServicesOpen ? "rotate-180 text-[#8B0000]" : ""
                      }`}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-6 border-l border-gray-200 animate-fadeSlide">
                      {link.dropdown.map((sub, idx) => (
                        <Link
                          key={idx}
                          to={sub.path}
                          className="flex items-center gap-2 py-2 text-sm text-gray-600 hover:text-[#8B0000]"
                          onClick={() => setMenuOpen(false)}
                        >
                          {sub.icon}
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.path}
                  className="flex items-center gap-2 py-3 border-b text-gray-700 hover:text-[#8B0000] transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.icon}
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="px-4 mt-6">
          <Link to="/contact">
            <button className="cursor-pointer w-full bg-[#8B0000] text-white py-2 rounded-lg mb-3 hover:bg-[#a50f0f] transition">
              Get a Quote
            </button>
          </Link>
          <Link to="/about">
            <button className="cursor-pointer w-full border border-[#8B0000] text-[#8B0000] py-2 rounded-lg hover:bg-[#8B0000] hover:text-white transition">
              Our Story
            </button>
          </Link>
        </div>
      </div>

      {/* Animation styles */}
      <style>
        {`
          @keyframes fadeSlide {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeSlide {
            animation: fadeSlide 0.3s ease-in-out;
          }
        `}
      </style>
    </header>
  );
}
