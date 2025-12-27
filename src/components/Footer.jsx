import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const footerConfig = {
  id: "wedding-footer-1",
  coupleNames: "Omkar & Harini",
  year: "2026",
  companyName: "StarX Innovation and IT Solution",
  dateLabel: "10th February 2026",
  email: "contact@omkarharini.com",
};

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const heartVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
      delay: 0.3,
    },
  },
};

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-t from-orange-200 via-rose-100 to-orange-100/50 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(252,165,56,0.4)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(239,68,68,0.3)_0%,transparent_70%)]" />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-8 left-8 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
        animate={{
          y: [0, -8, 0],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full bg-gradient-to-r from-orange-300/60 to-rose-300/60 rounded-full blur-xl shadow-lg" />
      </motion.div>

      <motion.div
        className="absolute bottom-8 right-8 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
        animate={{
          y: [0, 8, 0],
          rotate: [360, 180, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <div className="w-full h-full bg-gradient-to-r from-rose-300/50 to-amber-300/50 rounded-full blur-xl shadow-lg" />
      </motion.div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center"
      >
        {/* Main Footer Content */}
        <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 lg:space-x-8"
          >
            {/* Couple Names */}
            <motion.h3
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-choco font-semibold bg-gradient-to-r from-orange-700 via-rose-600 to-amber-600 bg-clip-text text-transparent tracking-wide leading-tight"
              whileHover={{ scale: 1.02 }}
            >
              {footerConfig.coupleNames}
            </motion.h3>

            {/* Heart Divider */}
            <motion.div variants={heartVariants} className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-1.5 h-8 sm:h-10 bg-gradient-to-b from-orange-400 to-rose-400 rounded-full shadow-lg" />
              <motion.div
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ❤️
              </motion.div>
              <div className="w-1.5 h-8 sm:h-10 bg-gradient-to-b from-rose-400 to-amber-400 rounded-full shadow-lg" />
            </motion.div>
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm sm:text-base md:text-lg text-orange-900 font-light leading-relaxed px-4 sm:px-8 max-w-2xl mx-auto"
          >
            © {footerConfig.year} {footerConfig.companyName}
          </motion.p>
        </div>

        {/* Date & Contact */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 lg:space-x-12 gap-4 sm:gap-0"
        >
          {/* Wedding Date */}
          <div className="flex items-center space-x-2 text-orange-800 font-medium text-sm sm:text-base">
            <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-rose-500 rounded-full shadow-md" />
            <span>{footerConfig.dateLabel}</span>
          </div>

          {/* Contact Info */}
          <div className="flex items-center space-x-2 text-orange-800 font-medium text-sm sm:text-base">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.27 7.27c.883.883 2.317.883 3.2 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>{footerConfig.email}</span>
          </div>
        </motion.div>

        {/* Final decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-10 sm:mt-12 mx-auto w-32 sm:w-48 h-0.5 bg-gradient-to-r from-orange-400 via-rose-400 to-amber-400 rounded-full shadow-lg"
        />
      </motion.div>
    </footer>
  );
};

export default Footer;
