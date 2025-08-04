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
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import bgImg from "../assets/abbg.avif";
// import logo from "../assets/logo1.png";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";

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
  

 

      {/* 🔴 Medical Plus Watermark in a circle */}
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
          {/* <img src={''} alt="Nesh Ambulance Logo" className="w-[100px] md:w-[150px]" /> */}
          <h4 className="font-bold mb-2 text-3xl text-[#8B0000] font-[italiana]">About Nesh Ambulance</h4>
          <p className="leading-relaxed text-gray-800">
            Nesh Ambulance Service is committed to providing fast, reliable and professional 24/7 emergency transport. When every second counts, trust Nesh.
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
          <h4 className="font-bold text-2xl mb-4 text-[#8B0000]  font-[italiana]">Quick Links</h4>
          <ul className="space-y-2 text-gray-800">
            {[
              ["Home", "/", <FaHome />],
              ["Services", "/services", <FaAmbulance />],
              ["Gallery", "/gallery", <FaImage />],
              ["About Us", "/about", <FaInfoCircle />],
              ["Contact", "/contact", <FaPhoneAlt />],
            ].map(([text, link, icon], i) => (
              <li key={i}>
                <Link
                  to={link}
                  className="flex items-center gap-2 hover:text-[#8B0000] transition duration-300"
                >
                  {icon} {text}
                </Link>
              </li>
            ))}
          </ul>

          <h4 className="mt-6 font-bold text-2xl text-[#8B0000]  font-[italiana]">Emails</h4>
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
          <h4 className="font-bold text-2xl mb-4 text-[#8B0000]  font-[italiana]">Our Services</h4>
          <ul className="space-y-2 text-gray-800">
            {[
              "Emergency Ambulance",
              "24/7 Patient Transport",
              "ICU & Non-ICU Ambulance",
              "Medical Staff Support",
              "Interstate Transfers"
            ].map((svc, i) => (
              <li key={i}>
                <Link
                  to="/services"
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
          <h4 className="font-bold text-2xl mb-4 text-[#8B0000]  font-[italiana]">Contact Info</h4>
          <address className="not-italic leading-relaxed mb-4 text-gray-800">
            Plot No. 3467, Ground Floor, Shop No. 3,<br />
            Nearby Ankush Home, Huda Market,<br />
            Sector 23, Huda, Gurugram, Haryana 122017
          </address>
          <p className="text-xs text-gray-600 mb-2">
            UDYAM-HR-05-0059315 | GST: 06BMLPL0470K1ZW
          </p>
          <div className="mb-4 flex justify-center items-center relative right-8">
            <Translator />
          </div>
          <div className="mt-6 flex space-x-4">
            {[FaInstagram, FaFacebookF, FaYoutube, FaSearchLocation].map((Icon, i) => (
              <a key={i} href="#" className="text-[#8B0000] hover:text-[#228B22] transition">
                <Icon size={20} />
              </a>
            ))}
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
