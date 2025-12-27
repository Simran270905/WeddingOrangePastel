// src/components/PhotoGallery.jsx
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Gallery1 from "../assets/image/love1.jpg";
import Gallery2 from "../assets/image/love2.jpg";
import Gallery3 from "../assets/image/love1.jpg";
import Gallery4 from "../assets/image/love2.jpg";
import Gallery5 from "../assets/image/love1.jpg";
import Gallery6 from "../assets/image/love2.jpg";
import Gallery7 from "../assets/image/love1.jpg";
import Gallery8 from "../assets/image/love2.jpg";

const photoGalleryConfig = {
  id: "gallery-omkar-harini-1",
  title: "Photo Gallery",
  subtitle:
    "Cherished moments from our journey together, captured in time",
  images: [
    { src: Gallery1, alt: "Gallery 1" },
    { src: Gallery2, alt: "Gallery 2" },
    { src: Gallery3, alt: "Gallery 3" },
    { src: Gallery4, alt: "Gallery 4" },
    { src: Gallery5, alt: "Gallery 5" },
    { src: Gallery6, alt: "Gallery 6" },
    { src: Gallery7, alt: "Gallery 7" },
    { src: Gallery8, alt: "Gallery 8" },
  ],
  viewMoreLabel: "View More Moments",
  maxDesktopImages: 6,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const PhotoGallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Detect mobile (below Tailwind sm = 640px)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const allImages = photoGalleryConfig.images;
  const displayedImages =
    showAll || isMobile
      ? allImages
      : allImages.slice(0, photoGalleryConfig.maxDesktopImages);

  const handleImageClick = (img, index) => {
    setSelectedImg(img.src);
    setSelectedIndex(index);
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-orange-50 via-rose-50/50 to-orange-100/70 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 bg-gradient-to-r from-orange-400 to-rose-400 rounded-full opacity-40"
            style={{
              left: `${10 + i * 8}%`,
              top: `${15 + i * 7}%`,
            }}
            animate={{
              y: [0, -15, 0],
              x: [-5, 5, -5],
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10"
      >
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-choco bg-gradient-to-r from-orange-700 via-rose-600 to-orange-600 bg-clip-text text-transparent font-light tracking-wide mb-4">
            {photoGalleryConfig.title}
          </h2>
          <motion.div
            className="mx-auto w-24 sm:w-32 md:w-40 h-1 bg-gradient-to-r from-orange-400 to-rose-400 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-para font-semibold text-orange-900 mt-4 sm:mt-6 max-w-2xl mx-auto leading-relaxed font-light">
            {photoGalleryConfig.subtitle}
          </p>
        </motion.div>

        {/* Image grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 lg:mb-16">
          {displayedImages.map((img, idx) => (
            <motion.div
              key={idx}
              variants={imageVariants}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl bg-white/60 backdrop-blur-sm border border-orange-100/50 cursor-pointer transition-all duration-500"
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              onClick={() => handleImageClick(img, idx)}
            >
              <motion.img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                whileHover={{ scale: 1.1 }}
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Image number badge */}
              <motion.div
                className="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500/90 to-rose-500/90 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-sm border-2 border-white/50"
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-white font-bold text-sm sm:text-base font-serif">
                  {idx + 1}
                </span>
              </motion.div>

              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-pink-400/20 to-rose-400/20 opacity-0"
                whileHover={{ opacity: 1, scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>

        {/* View More button (desktop / tablet only) */}
        {!showAll &&
          allImages.length > photoGalleryConfig.maxDesktopImages &&
          !isMobile && (
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAll(true)}
                className="group relative px-8 sm:px-10 py-4 sm:py-4 bg-gradient-to-r from-orange-500 via-rose-500 to-orange-600 text-white font-serif font-medium text-base sm:text-lg rounded-3xl shadow-xl hover:shadow-2xl border-2 border-orange-400/50 backdrop-blur-sm transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">
                  {photoGalleryConfig.viewMoreLabel}
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-rose-400 rounded-3xl -skew-x-12 opacity-0 group-hover:opacity-100 blur-xl"
                  animate={{ skewX: [-12, 0, 12] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                />
              </motion.button>
            </motion.div>
          )}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence mode="wait">
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[1000] p-4 sm:p-8"
            onClick={(e) =>
              e.target === e.currentTarget && setSelectedImg(null)
            }
          >
            {/* Navigation dots */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {allImages.map((img, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => handleImageClick(img, idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === selectedIndex
                      ? "w-8 bg-white shadow-lg"
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.img
              src={selectedImg}
              alt="Full View"
              initial={{ scale: 0.7, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.7, rotate: 10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="max-h-[85vh] max-w-[90vw] rounded-3xl shadow-2xl cursor-zoom-in select-none"
              draggable={false}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Close button */}
            <motion.button
              onClick={() => setSelectedImg(null)}
              className="absolute top-8 right-8 w-14 h-14 bg-white/90 hover:bg-white backdrop-blur-xl rounded-3xl flex items-center justify-center shadow-2xl border-2 border-white/50 transition-all duration-300 hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-6 h-6 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery;
