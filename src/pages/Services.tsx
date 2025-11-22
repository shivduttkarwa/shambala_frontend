import React from "react";
import ServicesHero from "../components/Services/ServicesHero";

import ServicesGrid from "../components/Services/ServicesGrid";
import ServicesProcess from "../components/Services/ServicesProcess";
import ServicesCTA from "../components/Services/ServicesCTA";
import ServicesSlider from "../components/Services/ServicesSlider";

const Services: React.FC = () => {
  return (
    <>
      <ServicesHero />
      <ServicesSlider />
      <ServicesGrid />
      <ServicesProcess />
      <ServicesCTA />
    </>
  );
};

export default Services;
