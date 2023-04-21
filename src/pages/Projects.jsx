import React from "react";
import { ProjectCard } from "../components";

export default function Projects() {
  return (
    <div id="projects-container" className="min-h-screen bg-neutral">
      <div className="flex flex-wrap justify-center">
        <ProjectCard
          id="project1"
          title="Teoti.io - Landing Page"
          imageUrl="assets/TeotiLandingImage.png"
          deployedUrl="https://teoti.io/"
          githubUrl="https://github.com/teoti-io"
          tags={["Typescript", "Vue", "AWS", "Front-end"]}
        />
        <ProjectCard
          id="project2"
          title="Terra Pay - Blockchain Payments"
          imageUrl="assets/terrapay.png"
          deployedUrl="https://www.google.com"
          githubUrl="https://github.com/teoti-io"
          tags={["Typescript", "Vue", "AWS", "Front-end"]}
        />
        <ProjectCard
          id="project3"
          title="eBazon - eCommerce Platform"
          imageUrl="assets/Ebazon.png"
          deployedUrl="https://ebazon.netlify.app/"
          githubUrl="https://github.com/The-Syntax-Savants/eBazon"
          tags={[
            "Javascript",
            "React",
            "Node",
            "Express",
            "PostgreSQL",
            "TailwindCSS",
            "AWS",
            "Full-stack",
          ]}
        />
        <ProjectCard
          id="project4"
          title="Portfolio Website"
          imageUrl="assets/PortfolioSite.png"
          deployedUrl="https://www.google.com"
          githubUrl="https://github.com/crooney36/portfolio-site"
          tags={["Javascript", "React", "TailwindCSS", "AWS", "Full-stack"]}
        />
      </div>
    </div>
  );
}
