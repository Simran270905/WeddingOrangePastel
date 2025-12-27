// src/components/HeroSection.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import HeroImage from "../assets/image/love1.jpg";

const heroConfig = {
  id: "hero-omkar-harini-1",
  heroImage: HeroImage,
  heroAlt: "Omkar & Harini",
  titleTop: "With Great Joy",
  introLine: "We invite you to celebrate the union of",
  coupleNames: "Omkar & Harini",
  dateLine: "Saturday, 10th February 2026",
  venueLine: "Rambagh Palace, Jaipur, India",
  scrollText: "Scroll to explore",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const coupleNameVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.8,
    },
  },
};

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll();
  const yBackground = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden min-h-[100vh]">
      {/* Background Hero Image */}
      <motion.img
        src={heroConfig.heroImage}
        alt={heroConfig.heroAlt}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ y: yBackground }}
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-300/50 rounded-full"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content Card */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 bg-white/70 sm:bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-4 w-full"
      >
        <motion.h1
          variants={itemVariants}
          className="font-choco font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-orange-600 mb-2 tracking-wide"
        >
          {heroConfig.titleTop}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="font-para text-sm sm:text-base md:text-lg lg:text-xl text-orange-700 mb-4 px-2 leading-relaxed"
        >
          {heroConfig.introLine}
        </motion.p>

        <motion.p
          variants={coupleNameVariants}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-head font-bold italic bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-400 to-yellow-400 mb-6 px-2"
        >
          {heroConfig.coupleNames}
        </motion.p>

        <motion.div variants={itemVariants} className="space-y-2 mb-8">
          <p className="text-sm sm:text-base md:text-lg text-orange-700 font-medium">
            {heroConfig.dateLine}
          </p>
          <p className="text-sm sm:text-base md:text-lg text-orange-700 font-medium">
            {heroConfig.venueLine}
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex flex-col items-center space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="text-xs sm:text-sm text-orange-600 font-medium">
            {heroConfig.scrollText}
          </span>
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-3 h-3 rounded-full bg-gradient-to-b from-orange-400 to-orange-500 shadow-lg"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
