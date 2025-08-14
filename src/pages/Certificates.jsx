import React from "react";
import { FaFilePdf, FaEye, FaDownload, FaCheckCircle } from "react-icons/fa";

import gstPDF from "../assets/certificates/gst.pdf";
import udyamPDF from "../assets/certificates/udyam.pdf";

const certificates = [
  {
    title: "GST Registration Certificate",
    company: "Nesh Ambulance Service",
    description:
      "Registered under the Government of India’s GST framework, ensuring full legal compliance and transparency in our emergency services.",
    pdf: gstPDF,
    color: "text-red-600",
    border: "border-red-600",
  },
  {
    title: "Udyam MSME Certificate",
    company: "Nesh Ambulance Service",
    description:
      "Recognized as a Micro, Small & Medium Enterprise (MSME) under the Udyam scheme, Govt. of India, reflecting our credibility and service excellence.",
    pdf: udyamPDF,
    color: "text-red-800",
    border: "border-red-800",
  },
];

const Certificates = () => {
  return (
    <section className="w-full font-sans">
      {/* Hero Header */}
      <div className="w-full bg-red-800 text-white text-center px-6 py-20 relative overflow-hidden">
        <h1 className="text-5xl md:text-6xl font-[italiana] mb-4">
          Our Legal Certifications
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90 font-sans">
          Nesh Ambulance Service is officially registered and certified.  
          Browse and download our legal documents for complete transparency.
        </p>
        <div className="absolute w-64 h-64 bg-white opacity-10 rounded-full bottom-[-80px] right-[-80px] z-0"></div>
      </div>

      {/* Certificates Section */}
      <div className="bg-[#FFF5F5] min-h-screen px-6 py-20 text-[#1A1A1A]">
        {/* Certificate Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden bg-white rounded-2xl border ${cert.border} shadow-md hover:shadow-xl transition-all duration-300 group p-6 flex flex-col justify-between`}
            >
              {/* Ribbon */}
              <span className="absolute top-4 right-4 bg-red-700 text-white px-3 py-1 text-xs rounded-md shadow-md tracking-wide">
                Official
              </span>

              {/* Icon */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-[#FFF0F0] rounded-full shadow-inner">
                  <FaFilePdf className={`text-4xl ${cert.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{cert.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{cert.company}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                {cert.description}
              </p>

              {/* Buttons */}
              <div className="flex justify-between items-center mt-6 gap-4">
                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition-all duration-300 text-sm font-medium"
                >
                  <FaEye />
                  View Certificate
                </a>
                <a
                  href={cert.pdf}
                  download
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-[#1A1A1A] text-white rounded-lg hover:bg-gray-800 transition-all duration-300 text-sm font-medium"
                >
                  <FaDownload />
                  Download PDF
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <FaCheckCircle className="text-3xl mx-auto mb-3 text-red-700" />
          <p className="text-sm text-gray-500">
            These documents certify Nesh Ambulance Service as a trusted, licensed, and officially registered emergency medical provider.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
