// src/pages/Home.jsx
import { motion, useScroll, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import HeroSection from "../components/HeroSection";
import CoupleSection from "../components/CoupleSection";
import LoveStory from "../components/LoveStory";
import EventDetails from "../components/EventDetails";
import Venue from "../components/Venue";
import Footer from "../components/Footer";
import PhotoGallery from "../components/PhotoGallery";

const homeConfig = {
  documentTitle: "Omkar & Harini | Wedding Invitation",
  pageBgInitial: "#fff7ed",
  pageBgAnimate: "#fed7aa",
};

const Home = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.title = homeConfig.documentTitle;
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const pageVariants = {
    initial: {
      opacity: 0,
      backgroundColor: homeConfig.pageBgInitial,
    },
    animate: {
      opacity: 1,
      backgroundColor: homeConfig.pageBgAnimate,
      transition: {
        duration: shouldReduceMotion ? 0 : 1.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  const gradientVariants = {
    initial: {
      background:
        "radial-gradient(circle at 20% 80%, rgba(252,165,56,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(239,68,68,0.2) 0%, transparent 50%)",
    },
    animate: {
      background:
        "radial-gradient(circle at 20% 80%, rgba(252,165,56,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(239,68,68,0.3) 0%, transparent 50%)",
      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <motion.div
      ref={scrollRef}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen w-full overflow-x-hidden font-serif text-orange-900"
    >
      {/* Global animated background overlay */}
      <motion.div
        className="fixed inset-0 z-0 opacity-20 pointer-events-none"
        variants={gradientVariants}
        initial="initial"
        animate="animate"
      />

      {/* Floating particles */}
      <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 lg:w-2 lg:h-2 bg-gradient-to-r from-orange-400/60 to-rose-400/60 rounded-full shadow-lg"
            style={{
              left: `${5 + i * 6.5}%`,
              top: `${10 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -25, 0],
              x: [-10, 10, -10],
              scale: [1, 1.4, 1],
              opacity: [0.4, 0.8, 0.4],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 w-full h-1 z-50 bg-gradient-to-r from-orange-400 via-rose-400 to-amber-400 origin-left shadow-lg"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Main content sections */}
      <main className="relative z-20 pt-0">
        <HeroSection />
        <CoupleSection />
        <LoveStory />
        <PhotoGallery />
        <EventDetails />
        <Venue />
        <Footer />
      </main>

      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-8 right-8 w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-orange-500 via-rose-500 to-orange-600 text-white rounded-3xl shadow-2xl border-4 border-white/30 backdrop-blur-xl z-40 flex items-center justify-center hover:shadow-3xl transition-all duration-300 hover:scale-110 active:scale-95 lg:hidden"
        onClick={() =>
          scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" })
        }
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: scrollYProgress > 0.1 ? 1 : 0,
          scale: scrollYProgress > 0.1 ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
      >
        <svg
          className="w-5 h-5 lg:w-6 lg:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>

      {/* Custom cursor */}
      <motion.div
        className="fixed w-4 h-4 lg:w-6 lg:h-6 bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 rounded-full z-30 pointer-events-none mix-blend-difference lg:visible invisible"
        animate={{
          x: "-50%",
          y: "-50%",
          scale: 1.2,
          rotate: 360,
        }}
        transition={{
          scale: { duration: 2, repeat: Infinity, repeatType: "reverse" },
          rotate: { duration: 20, repeat: Infinity },
        }}
      />
    </motion.div>
  );
};

export default Home;
