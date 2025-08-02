import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaPhone,
  FaBars,
  FaTimes,
  FaHandPaper,
  FaPhotoVideo,
  FaBook,
  FaToiletPaper,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaInfoCircle /> },
    { name: "Services", path: "/services", icon: <FaServicestack /> },
     { name: "Booking", path: "/booking", icon: <FaBook /> },
       { name: "Gallery", path: "/gallery", icon: <FaPhotoVideo /> },
    { name: "Contact", path: "/contact", icon: <FaPhone /> },
      { name: "Docs", path: "/doc", icon: <FaToiletPaper /> },
    
  ];

  return (
    <header className="w-full">
      {/* Top Header */}
      <div className="bg-[#8B0000] text-white text-xs md:text-sm flex justify-between items-center px-4 py-1 md:py-2">
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-white" />
          <a href="mailto:Info@neshambulanceservice.in" className="hover:underline">
            Info@neshambulanceservice.in
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:9971759200" className="flex items-center gap-1 hover:underline">
            <FaPhoneAlt className="text-white" />
            9971759200
          </a>
          <a href="tel:8178042359" className="flex items-center gap-1 hover:underline">
            <FaPhoneAlt className="text-white" />
            8178042359
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center px-4 py-3 md:py-4">
          {/* Logo */}
          <div className="text-[#8B0000] text-2xl font-bold">NESH</div>

          {/* Center Nav Links (Desktop) */}
          <ul className="hidden md:flex gap-6 text-red-900  font-semibold font-[italiana]">
            {navLinks.map((link, index) => (
              <li key={index} className="group relative">
                <Link
                  to={link.path}
                  className="flex items-center gap-1 hover:text-[#8B0000] transition"
                >
                  {link.icon}
                  {link.name}
                </Link>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#8B0000] group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="hidden md:flex gap-4">
            <button className="bg-[#8B0000] hover:bg-[#a50f0f] text-white px-5 py-2 rounded-xl transition">
              Book Now
            </button>
            <button className="border border-[#8B0000] hover:bg-[#8B0000] hover:text-white text-[#8B0000] px-5 py-2 rounded-xl transition">
              Emergency
            </button>
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
            <Link
              key={index}
              to={link.path}
              className="flex items-center gap-2 py-3 border-b text-gray-700 hover:text-[#8B0000] transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>
        <div className="px-4 mt-6">
          <button className="w-full bg-[#8B0000] text-white py-2 rounded-lg mb-3 hover:bg-[#a50f0f] transition">
            Book Now
          </button>
          <button className="w-full border border-[#8B0000] text-[#8B0000] py-2 rounded-lg hover:bg-[#8B0000] hover:text-white transition">
            Emergency
          </button>
        </div>
      </div>
    </header>
  );
}
