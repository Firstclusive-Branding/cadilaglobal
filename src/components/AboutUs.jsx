import React from "react";
import HomepageAboutUs from "./HomepageAboutUs";
import { motion } from "framer-motion";
import aboutUsImg from "../assets/About Us/about-us1.jpg";
import "../styles/AboutUs.css";
function AboutUs() {
  return (
    <div>
      <img src={aboutUsImg} alt="about us image" className="about-us-cover" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <HomepageAboutUs />
      </motion.div>
    </div>
  );
}

export default AboutUs;
