import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import GalleryHero from "../components/GalleryHero";

// Ambulance-related showcase images
import img1 from "../assets/showcase/s1.jpg";
import img2 from "../assets/showcase/s2.jpg";
import img3 from "../assets/showcase/s3.jpg";
import img4 from "../assets/showcase/s4.jpg";
import img5 from "../assets/showcase/s5.jpg";
import img6 from "../assets/showcase/s6.jpg";
import img7 from "../assets/showcase/s7.jpg";
import img8 from "../assets/showcase/s8.jpg";
import img9 from "../assets/showcase/s9.jpg";
import img10 from "../assets/showcase/s10.jpg";
import img11 from "../assets/showcase/s11.jpg";
import img12 from "../assets/showcase/s12.jpg";
import img13 from "../assets/newGallery/g1.jpg";
import img14 from "../assets/newGallery/g3.jpg";
import img15 from "../assets/newGallery/g2.jpg";
import img16 from "../assets/showcase/s19.jpg";
import img17 from "../assets/showcase/s20.jpg";
import img18 from "../assets/showcase/s21.jpg";

const images = [
  img1, img2, img3, img4, img5, img6, img7,
  img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18
];

// Desktop/tablet custom spans
const gridStyles = [
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-4 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-3 sm:row-span-1",
  "sm:col-span-3 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-4 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1"
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openImage = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => {
      const newIndex = (prev - 1 + images.length) % images.length;
      setSelectedImage(images[newIndex]);
      return newIndex;
    });
  };

  const nextImage = () => {
    setCurrentIndex((prev) => {
      const newIndex = (prev + 1) % images.length;
      setSelectedImage(images[newIndex]);
      return newIndex;
    });
  };

  return (
    <>
      <GalleryHero
        title="Our Ambulance Fleet & Services"
        subtitle="A visual showcase of Nesh Ambulance Service's rapid response vehicles, facilities, and dedicated team."
      />

      <section id="gallery-section" className="bg-white px-4 md:px-10 py-16">
        
        {/* Quotic Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-red-600 font-semibold tracking-wide uppercase">
            Moments That Matter
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-snug mt-2">
            “Every Second Counts, Every Life Matters”  
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            Explore our journey through visuals that capture our dedication to saving lives, from emergency response to patient care.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-6 auto-rows-[220px] sm:auto-rows-[150px] md:auto-rows-[180px] lg:auto-rows-[360px] gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className={`relative overflow-hidden cursor-pointer border border-gray-300 hover:border-red-600 shadow-lg hover:shadow-red-500/30 transition-all duration-300 group 
                col-span-1 ${gridStyles[i]}`}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => openImage(i)}
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                key={selectedImage}
                className="relative w-full max-w-5xl mx-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Enlarged"
                  className="w-full max-h-[85vh] object-contain rounded-xl"
                />

                {/* Close */}
                <button
                  className="absolute top-3 right-3 text-white text-xl bg-black/50 p-2 rounded-full hover:bg-red-600 transition"
                  onClick={closeModal}
                >
                  <FaTimes />
                </button>

                {/* Prev */}
                <button
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-xl bg-black/40 p-2 rounded-full hover:bg-red-600 transition"
                  onClick={prevImage}
                >
                  <FaArrowLeft />
                </button>

                {/* Next */}
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-xl bg-black/40 p-2 rounded-full hover:bg-red-600 transition"
                  onClick={nextImage}
                >
                  <FaArrowRight />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default Gallery;
