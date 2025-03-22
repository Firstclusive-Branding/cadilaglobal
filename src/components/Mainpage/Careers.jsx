import React from "react";
import { motion } from "framer-motion";
import JobCarousel from "./JobCarousel";

function Careers() {
  return (
    <div style={{ backgroundColor: "#F9F9F9" }}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <JobCarousel />
      </motion.div>
    </div>
  );
}

export default Careers;
