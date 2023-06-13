import React from "react";
import projects from "@/data/data";
import { Project } from "@/types/global";

import ProjectCard from "../Projectcard";
import SectionTitle from "../Sectiontitle";

type ProjectProps = {
  overwriteProjects?: Project[];
};

function Projects({ overwriteProjects }: ProjectProps) {
  const projectsList = overwriteProjects ? overwriteProjects : projects;
  return (
    <div id="projects"
     className="flex flex-col text-left justify-between max-w-6xl py-16 relative">
    <div>
      <SectionTitle title="Here are a few of my favorite projects." />
    </div>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
      {projectsList.map((item) => {
        return <ProjectCard key={item.id} project={item} />;
      })}
    </div>
    </div>
  );
}

export default Projects;
