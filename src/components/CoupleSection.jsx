import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CoupleImage from "../assets/image/love1.jpg";

const coupleConfig = {
  id: "couple-section-1",
  names: "Omkar & Harini",
  image: CoupleImage,
  imageAlt: "Omkar & Harini",
  initialsBadge: "#🤍",
  primaryText:
    "Two souls, one beautiful journey. From stolen glances to shared dreams, our love has grown through every laugh, tear, and adventure.",
  secondaryText:
    "Join us as we begin this sacred new chapter together, surrounded by the love and blessings of family and friends.",
  bgGradient:
    "bg-gradient-to-br from-orange-50 via-rose-50 to-orange-100",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const imageVariants = {
  hidden: {
    scale: 0.8,
    rotate: -10,
    opacity: 0,
  },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 50, skewX: 5 },
  visible: {
    opacity: 1,
    y: 0,
    skewX: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const nameVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.68, -0.55, 0.265, 1.55],
      delay: 0.4,
    },
  },
};

const CoupleSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className={`relative py-16 sm:py-20 md:py-24 lg:py-32 ${coupleConfig.bgGradient} overflow-hidden`}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ scale: 1.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(252,165,56,0.4)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(239,68,68,0.3)_0%,transparent_70%)]" />
      </motion.div>

      {/* Floating hearts */}
      <div className="absolute top-20 left-10 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-30 blur-xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
            y: [-10, 10, -10],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-12 px-4 sm:px-6 lg:px-8 z-10"
      >
        {/* Couple Image */}
        <motion.div
          variants={imageVariants}
          className="relative mx-auto lg:mx-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem]"
        >
          <motion.img
            src={coupleConfig.image}
            alt={coupleConfig.imageAlt}
            className="w-full h-full rounded-3xl lg:rounded-[4rem] object-cover shadow-2xl border-8 border-white/80 backdrop-blur-sm"
            whileHover={{
              scale: 1.05,
              rotate: 1,
              boxShadow: "0 40px 80px rgba(0,0,0,0.3)",
            }}
            transition={{ duration: 0.4 }}
          />

          {/* Animated frame glow */}
          <motion.div
            className="absolute inset-0 rounded-3xl lg:rounded-[4rem] bg-gradient-to-r from-orange-400/20 via-pink-400/20 to-rose-400/20"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Couple initials overlay */}
          <motion.div
            className="absolute bottom-6 right-6 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500/90 to-rose-500/90 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-sm border-2 border-white/50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <span className="text-lg sm:text-xl font-serif font-bold text-white tracking-wider">
              {coupleConfig.initialsBadge}
            </span>
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          variants={textVariants}
          className="text-center lg:text-left max-w-lg lg:max-w-xl xl:max-w-2xl"
        >
          <motion.h2
            variants={nameVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-choco bg-gradient-to-r from-orange-700 via-rose-600 to-orange-600 bg-clip-text text-transparent font-semibold tracking-wide mb-6 sm:mb-8 leading-tight"
          >
            {coupleConfig.names}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-orange-900 leading-relaxed font-para font-semibold tracking-wide mb-0"
          >
            {coupleConfig.primaryText}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-orange-900 leading-relaxed font-para mt-4 sm:mt-6"
          >
            {coupleConfig.secondaryText}
          </motion.p>

          {/* Decorative flourish */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-8 sm:mt-10 lg:mt-12 mx-auto lg:ml-0 w-20 sm:w-24 h-1 bg-gradient-to-r from-orange-400 via-rose-400 to-orange-500 rounded-full shadow-lg"
          />
        </motion.div>
      </motion.div>

      {/* Subtle bottom decoration */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 h-16 sm:h-20 bg-orange-200/30 rounded-t-3xl blur-xl"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </section>
  );
};

export default CoupleSection;
