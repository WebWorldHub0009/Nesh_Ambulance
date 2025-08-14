import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaSearchLocation,
  FaHome,
  FaPhoneAlt,
  FaImage,
  FaInfoCircle,
  FaAmbulance,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaCertificate,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import bgImg from "../assets/abbg.avif";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";
import { FaBuildingColumns } from "react-icons/fa6";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="relative bg-cover bg-center bg-no-repeat text-[#F3F3F3] pt-20 pb-10 px-6 md:px-16 overflow-hidden font-sans font-semibold"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* 🔴 Medical Plus Watermark */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
        <svg viewBox="0 0 100 100" className="w-[340px] h-[340px] opacity-5">
          <circle cx="50" cy="50" r="48" stroke="#8B0000" strokeWidth="5" fill="none" />
          <g transform="translate(50,50)">
            <rect x="-6" y="-30" width="12" height="60" fill="#8B0000" />
            <rect x="-30" y="-6" width="60" height="12" fill="#8B0000" />
          </g>
        </svg>
      </div>

      {/* Grid Content */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm">
        {/* About */}
        <div className="flex flex-col space-y-3">
          <h4 className="font-bold mb-2 text-3xl text-[#8B0000] font-[italiana]">About Nesh Ambulance</h4>
          <p className="leading-relaxed text-gray-800">
            Nesh Ambulance Service is committed to providing fast, reliable, and professional 24/7 emergency transport. 
            We ensure patient safety and comfort with trained staff, advanced equipment, and a dedication to timely service. 
            When every second counts, trust Nesh for your medical transportation needs.
          </p>
          <div className="mt-4">
            <a
              href="https://share.google.com/yourbusinesslink"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 border border-[#8B0000] text-[#8B0000] rounded hover:bg-[#228B22] hover:text-white transition duration-300 text-sm font-medium"
            >
              Find us on Google
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-2xl mb-4 text-[#8B0000] font-[italiana]">Quick Links</h4>
          <ul className="space-y-2 text-gray-800">
            {[
              ["Home", "/", <FaHome />],
              ["About", "/about", <FaInfoCircle />],
              ["Services", "/services/emergency", <FaAmbulance />],
              ["Gallery", "/gallery", <FaImage />],
              ["Contact", "/contact", <FaPhoneAlt />],
              ["Events", "/events", <FaBuildingColumns />],
            ].map(([text, link, icon], i) => (
              <li key={i}>
                <Link
                  to={link}
                  className="flex items-center gap-2 hover:text-[#000000] transition duration-300"
                >
                  {icon} {text}
                </Link>
              </li>
            ))}
          </ul>

          <h4 className="mt-6 font-bold text-2xl text-[#8B0000] font-[italiana]">Emails</h4>
          <ul className="mt-2 space-y-2 text-gray-800">
            <li>
              <a
                href="mailto:info@neshambulanceservice.in"
                className="flex items-center space-x-2 hover:text-[#8B0000] transition duration-300"
              >
                <FaEnvelope className="text-[#8B0000]" />
                <span>info@neshambulanceservice.in</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold text-2xl mb-4 text-[#8B0000] font-[italiana]">Our Services</h4>
          <ul className="space-y-2 text-gray-800">
            {[
              ["Emergency Ambulance", "/services/emergency"],
              ["Patient Transport", "/services/transport"],
              ["Event Medical Support", "/services/event-support"],
              ["ICU Ambulance", "/services/icu"],
              ["Air Ambulance", "/services/air"],
              ["Normal Ambulance", "/services/normal"],
              ["Oxygen Ambulance", "/services/oxygen"],
              ["Dead Body Transport", "/services/dead-body-transport"],
              ["Dead Body Freeezer Box", "/services/freezer-box"],
              ["End to End Cremation Support", "/services/cremation-support"],
            ].map(([svc, path], i) => (
              <li key={i}>
                <Link
                  to={path}
                  className="hover:text-[#8B0000] transition duration-300"
                >
                  {svc}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Address & Contact */}
        <div>
          <h4 className="font-bold text-2xl mb-4 text-[#8B0000] font-[italiana]">Contact Info</h4>
          <address className="not-italic leading-relaxed mb-4 text-gray-800">
            Plot No. 3467, Ground Floor, Shop No. 3,<br />
            Nearby Ankush Home, Huda Market,<br />
            Sector 23, Huda, Gurugram, Haryana 122017
          </address>
          <p className="text-xs text-gray-600 mb-2">
            UDYAM-HR-05-0059315 <br /> GST: 06BMLPL0470K1ZW
          </p>
          <div className="mb-4 flex">
            <Translator />
            <div className="w-38 md:w-16"></div>
          </div>
          <div className="mt-6 flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#8B0000] hover:text-[#228B22] transition"><FaInstagram size={20} /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#8B0000] hover:text-[#228B22] transition"><FaFacebookF size={20} /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-[#8B0000] hover:text-[#228B22] transition"><FaYoutube size={20} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#8B0000] hover:text-[#228B22] transition"><FaTwitter size={20} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#8B0000] hover:text-[#228B22] transition"><FaLinkedinIn size={20} /></a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-[#8B0000] hover:text-[#228B22] transition"><FaPinterestP size={20} /></a>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-[#8B0000] hover:text-[#228B22] transition"><FaSearchLocation size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-xs text-gray-700 border-t border-[#444] pt-6 space-y-2 relative z-10">
        <VisitorCounter />
        <p>© {new Date().getFullYear()} Nesh Ambulance Service. All rights reserved.</p>
        <p>
          Designed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-[#228B22] transition"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </motion.footer>
  );
}
