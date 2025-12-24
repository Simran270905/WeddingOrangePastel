// src/components/LoveStory.jsx
import { motion } from "framer-motion";

const LoveStory = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" }
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-orange-50 via-orange-100 to-rose-50 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(252,165,56,0.3)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(252,165,56,0.2)_0%,transparent_50%)]" />
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-10 left-10 w-24 h-24 bg-orange-200/50 rounded-full blur-xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-20 h-20 bg-rose-200/40 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 z-10"
      >
        {/* Title with decorative underline */}
        <motion.div variants={titleVariants} className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-choco text-orange-800 mb-4 sm:mb-6 bg-clip-text bg-gradient-to-r from-orange-700 via-orange-600 to-rose-600 font-light tracking-wide leading-tight">
            Our Love Story
          </h2>
          <motion.div
            className="mx-auto w-24 sm:w-32 h-1 bg-gradient-to-r from-orange-400 to-rose-400 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>

        {/* Story Text with enhanced typography */}
        <motion.div 
          variants={textVariants}
          className="max-w-2xl mx-auto"
        >
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-orange-900 leading-relaxed mb-6 sm:mb-8 px-2 sm:px-0 font-para font-semibold tracking-wide">
            Omkar and Harini first met at college in Pune, their eyes locking across a crowded lecture hall. 
            What began as casual conversations quickly blossomed into late-night talks that lasted until dawn.
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-orange-900 leading-relaxed mb-8 sm:mb-10 px-2 sm:px-0 font-para font-semibold tracking-wide">
            From spontaneous road trips through the Sahyadris to celebrating festivals with family, every adventure 
            wove their hearts closer together. Now, they invite you to witness the beautiful bond they've nurtured.
          </p>
        </motion.div>

        {/* Timeline highlights */}
        <motion.div 
          className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex flex-col items-center p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100/50">
            <div className="w-12 h-12 mb-3 bg-gradient-to-r from-orange-400 to-rose-400 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-sm font-semibold text-white">2019</span>
            </div>
            <p className="text-xs sm:text-sm text-orange-800 font-medium text-center">First Meeting</p>
          </div>
          <div className="flex flex-col items-center p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100/50">
            <div className="w-12 h-12 mb-3 bg-gradient-to-r from-orange-400 to-rose-400 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-sm font-semibold text-white">❤️</span>
            </div>
            <p className="text-xs sm:text-sm text-orange-800 font-medium text-center">Fell in Love</p>
          </div>
          <div className="flex flex-col items-center p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100/50">
            <div className="w-12 h-12 mb-3 bg-gradient-to-r from-orange-400 to-rose-400 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-sm font-semibold text-white">2026</span>
            </div>
            <p className="text-xs sm:text-sm text-orange-800 font-medium text-center">Forever Together</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LoveStory;
