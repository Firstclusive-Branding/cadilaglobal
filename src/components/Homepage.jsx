import React from "react";
import Carousel from "./Carousel";
import CounterStats from "./CounterStats";
import HomepageAboutUs from "./HomepageAboutUs";
import HomepageJobCards from "./HomepageJobCards";
import HomepageHowItWorks from "./HomepageHowItWorks";
import HomepageSuccessStories from "./HomepageSuccessStories";
import HomepageWhatWeDo from "./HomepageWhatWeDo";
import HomepageWhyPartnerWithUs from "./HomepageWhyPartnerWithUs";
import JobCarousel from "./JobCarousel";
import HiringMadeEasy from "./HiringMadeEasy";
import EmployerBenefits from "./EmployerBenefits";
import HomepageJobApplyBanner from "./HomepageJobApplyBanner";

function Homepage() {
  return (
    <div>
      <Carousel />
      <CounterStats />
      <HomepageAboutUs />
      <HomepageWhatWeDo />
      <HomepageWhyPartnerWithUs />
      <JobCarousel />
      <HomepageSuccessStories />
      <HiringMadeEasy />
      <EmployerBenefits />
      <HomepageJobApplyBanner />
      {/* <HomepageJobCards /> */}
      {/* <HomepageHowItWorks /> */}
    </div>
  );
}

export default Homepage;
