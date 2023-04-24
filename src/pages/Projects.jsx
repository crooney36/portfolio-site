import React from "react";
import { ProjectCard, Carousel, Photography } from "../components";

export default function Projects() {
  const combinedImages = [
    "assets/AerialImages/DJI_0019.JPG",
    "assets/AerialImages/DJI_0021.JPG",
    "assets/AerialImages/DJI_0024.JPG",
    "assets/Portfolio/Portfolio18.jpg",
    "assets/AerialImages/DJI_0051.JPG",
    "assets/Portfolio/Portfolio2.jpg",
    "assets/Portfolio/Portfolio3.jpg",
    "assets/Portfolio/Portfolio4.jpg",
    "assets/Portfolio/Portfolio6.jpg",
    "assets/Portfolio/Portfolio7.jpg",
    "assets/Portfolio/Portfolio9.jpg",
    "assets/Portfolio/Portfolio10.jpg",
  ];
  return (
    <div id="projects-container" className="min-h-screen bg-neutral">
      <div>
        <h1 className="text-4xl text-center font-bold mb-10">
          Web Development
        </h1>
      </div>
      <div className="flex justify-center gap-4 mb-4">
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
            "PostgreSQL",
            "Node.js",
            "AWS",
            "Full-stack",
          ]}
        />
      </div>
      <div className="flex justify-center gap-4">
        <ProjectCard
          id="project4"
          title="Portfolio Website"
          imageUrl="assets/PortfolioSite.png"
          deployedUrl="https://www.google.com"
          githubUrl="https://github.com/crooney36/portfolio-site"
          tags={["Javascript", "React", "TailwindCSS", "AWS", "Full-stack"]}
        />
        <ProjectCard
          id="project4"
          title="Teoti Vendors - Inventory Management"
          imageUrl="assets/PortfolioSite.png"
          deployedUrl="https://www.google.com"
          githubUrl="https://github.com/crooney36/portfolio-site"
          tags={["Typescript", "Node.js", "GraphQL", "AWS", "Back-end"]}
        />
      </div>

      <div className="min-h-screen flex flex-col justify-center items-center mt-24 bg-base-100">
        <div>
          <h1 className="text-4xl text-center font-bold mb-10">Photography</h1>
          <p className="mb-10">
            A curated selection of my aerial and ground-based photography
            showcases a glimpse of my artistic capabilities. Feel free to
            contact me or explore my Instagram gallery for an extensive view of
            my work.
          </p>
        </div>
        <Photography photos={combinedImages} />
      </div>
    </div>
  );
}
