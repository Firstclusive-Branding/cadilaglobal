import React from "react";
import "../styles/Homepage.css";
import { motion } from "framer-motion";
import Carousel from "./Carousel";
import CounterStats from "./CounterStats";
import HomepageAboutUs from "./HomepageAboutUs";
// import HomepageJobCards from "./HomepageJobCards";
// import HomepageHowItWorks from "./HomepageHowItWorks";
import HomepageSuccessStories from "./HomepageSuccessStories";
import HomepageWhatWeDo from "./HomepageWhatWeDo";
import HomepageWhyPartnerWithUs from "./HomepageWhyPartnerWithUs";
import JobCarousel from "./JobCarousel";
import HiringMadeEasy from "./HiringMadeEasy";
import EmployerBenefits from "./EmployerBenefits";
import HomepageJobApplyBanner from "./HomepageJobApplyBanner";

function Homepage() {
  return (
    <div className="homepage-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Carousel />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <CounterStats />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <HomepageAboutUs />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <HomepageWhatWeDo />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <HomepageWhyPartnerWithUs />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <JobCarousel />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <HomepageSuccessStories />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <HiringMadeEasy />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <EmployerBenefits />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <HomepageJobApplyBanner />
      </motion.div>
      {/* <HomepageJobCards /> */}
      {/* <HomepageHowItWorks /> */}
    </div>
  );
}

export default Homepage;
