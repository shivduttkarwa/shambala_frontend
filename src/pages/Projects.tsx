import React from "react";
import ProjectsHero from "../components/Projects/ProjectsHero";

import ProjectsGrid from "../components/Projects/ProjectsGrid";
import ProjectsProcess from "../components/Projects/ProjectsProcess";
import ProjectsCTA from "../components/Projects/ProjectsCTA";
import ProjectsSlider from "../components/Projects/ProjectsSlider";
import ProjectStack from "@/components/Projects/ProjectStack";

const Projects: React.FC = () => {
  return (
    <>
      <ProjectsHero />
      <ProjectsSlider />
      <ProjectStack />
      <ProjectsGrid />
      <ProjectsProcess />
      <ProjectsCTA />
    </>
  );
};

export default Projects;
