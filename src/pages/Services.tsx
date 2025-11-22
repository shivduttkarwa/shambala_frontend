import React from "react";
import ServicesHero from "../components/Services/ServicesHero";
import ServicesGrid from "../components/Services/ServicesGrid";
import ServicesProcess from "../components/Services/ServicesProcess";
import ServicesCTA from "../components/Services/ServicesCTA";

const Services: React.FC = () => {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesProcess />
      <ServicesCTA />
    </>
  );
};

export default Services;