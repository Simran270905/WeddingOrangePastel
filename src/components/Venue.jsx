// src/components/Venue.jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import venueImage from "../assets/image/venue.jpg";

const venueConfig = {
  id: "venue-rambagh-1",
  sectionBg: "bg-gradient-to-br from-orange-50 to-amber-50",
  name: "Rambagh Palace",
  fullTitle: "Rambagh Palace, Jaipur",
  address:
    "Rambagh Palace Circle, Bhawani Singh Rd, Jaipur, Rajasthan 302005",
  googleMapsSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=Rambagh+Palace+Jaipur",
  iframeSrc:
    "https://www.google.com/maps?q=Rambagh+Palace+Jaipur&output=embed",
  image: venueImage,
  imageAlt: "Rambagh Palace",
  buttonLabel: "Search on Google Maps",
};

const Venue = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      className={`py-20 sm:py-24 ${venueConfig.sectionBg}`}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-choco bg-gradient-to-r from-orange-700 to-amber-600 bg-clip-text text-transparent mb-4">
            {venueConfig.name}
          </h2>
          <div className="mx-auto w-24 h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full" />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
          {/* Info */}
          <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold font-font text-orange-800 mb-3">
              {venueConfig.fullTitle}
            </h3>
            <p className="text-orange-700 mb-6 font-para font-bold">
              {venueConfig.address}
            </p>

            {/* Google Maps Search Button */}
            <a
              href={venueConfig.googleMapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {venueConfig.buttonLabel}
            </a>
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-72 sm:h-80 md:h-96">
            <img
              src={venueConfig.image}
              alt={venueConfig.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Embedded Map */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <iframe
            src={venueConfig.iframeSrc}
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full rounded-2xl"
            title="Venue Location Map"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Venue;
