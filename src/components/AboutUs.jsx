import React from "react";
import HomepageAboutUs from "./HomepageAboutUs";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <HomepageAboutUs />
    </motion.div>
  );
}

export default AboutUs;
