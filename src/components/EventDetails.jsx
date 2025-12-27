import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import sangeet from "../assets/image/sangeet.png";
import wedding from "../assets/image/wedding.png";
import reception from "../assets/image/reception.jpg";

const eventDetailsConfig = {
  id: "event-details-1",
  sectionBg:
    "bg-gradient-to-br from-orange-50 via-rose-50/40 to-amber-50/50",
  title: "Event Schedule",
  subtitle:
    "Join us for these unforgettable celebrations of love and togetherness",
  events: [
    {
      id: "sangeet",
      title: "Sangeet & Mehendi",
      date: "9th Feb 2026 | 6:00 PM",
      location: "Harini's Residence, Jaipur",
      icon: sangeet,
      color: "from-rose-500 to-orange-500",
    },
    {
      id: "wedding",
      title: "Wedding Ceremony",
      date: "10th Feb 2026 | 10:00 AM",
      location: "Rambagh Palace, Jaipur",
      icon: wedding,
      color: "from-orange-500 to-amber-500",
    },
    {
      id: "reception",
      title: "Grand Reception",
      date: "10th Feb 2026 | 7:00 PM",
      location: "Rambagh Palace, Jaipur",
      icon: reception,
      color: "from-amber-500 to-yellow-500",
    },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const EventDetails = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className={`relative py-20 ${eventDetailsConfig.sectionBg} overflow-hidden`}
    >
      {/* Floating Decoration */}
      <motion.div
        className="absolute top-10 left-5 w-24 h-24 sm:w-32 sm:h-32 
        bg-gradient-to-r from-orange-300/40 to-rose-300/40 
        rounded-full blur-2xl"
        animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl 
            font-choco font-light tracking-wide 
            bg-gradient-to-r from-orange-700 via-rose-600 to-amber-600 
            bg-clip-text text-transparent mb-4"
          >
            {eventDetailsConfig.title}
          </h2>

          <div
            className="mx-auto w-24 h-1.5 bg-gradient-to-r 
            from-orange-400 via-rose-400 to-amber-400 
            rounded-full mb-6"
          />

          <p
            className="text-sm sm:text-base md:text-lg 
            font-para font-semibold text-orange-900 
            max-w-2xl mx-auto leading-relaxed"
          >
            {eventDetailsConfig.subtitle}
          </p>
        </motion.div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {eventDetailsConfig.events.map((event) => (
            <motion.div
              key={event.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg
                hover:shadow-2xl border border-white/40 hover:border-orange-200/60
                transition-all duration-500 overflow-hidden
                flex flex-col items-center pt-16 pb-10 px-6 sm:px-8"
            >
              {/* Soft gradient glow */}
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${event.color}
                  opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}
              />

              {/* Icon */}
              <div
                className="w-20 h-20 sm:w-24 sm:h-24 bg-white/80 
                  rounded-3xl flex items-center justify-center 
                  shadow-lg border-2 border-white/60"
              >
                <img
                  src={event.icon}
                  alt={event.title}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </div>

              {/* Text content */}
              <div className="mt-4 flex flex-col items-center text-center flex-1 justify-center">
                <h3
                  className="text-xl sm:text-2xl font-choco font-light
                    bg-gradient-to-r from-orange-700 via-rose-600 to-amber-600
                    bg-clip-text text-transparent mb-3 leading-tight"
                >
                  {event.title}
                </h3>

                <p className="text-orange-700 text-sm sm:text-base font-para font-bold leading-tight mb-1">
                  {event.date}
                </p>

                <p className="text-orange-600 text-sm sm:text-base font-para font-bold leading-tight">
                  {event.location}
                </p>

                <div
                  className={`mt-4 w-16 h-1 bg-gradient-to-r ${event.color}
                    rounded-full shadow-md`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Decoration */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-32 sm:h-40 
        bg-gradient-to-t from-orange-200/30 to-transparent 
        rounded-t-3xl blur-xl"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </section>
  );
};

export default EventDetails;
