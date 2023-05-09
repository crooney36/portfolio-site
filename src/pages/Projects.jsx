import React, { useEffect, useState } from "react";
import { ProjectCard, Carousel, Photography } from "../components";

export default function Projects() {
  const combinedImages = [
    "assets/Portfolio/DJI_0019.JPG",
    "assets/Portfolio/DJI_0021.JPG",
    "assets/Portfolio/DJI_0024.JPG",
    "assets/Portfolio/Portfolio18.jpg",
    "assets/Portfolio/Portfolio16.webp",
    "assets/Portfolio/Portfolio17.webp",
    "assets/Portfolio/Portfolio6.jpg",
    "assets/Portfolio/Portfolio19.jpg",
    "assets/Portfolio/DJI_0051.JPG",
    "assets/Portfolio/Portfolio15.webp",
    "assets/Portfolio/Portfolio3.jpg",
    "assets/Portfolio/Portfolio4.jpg",
  ];

  const combinedLQIPImages = [
    "assets/LQIP/DJI_0019.webp",
    "assets/LQIP/DJI_0021.webp",
    "assets/LQIP/DJI_0024.webp",
    "assets/LQIP/Portfolio18.webp",
    "assets/LQIP/Portfolio16.webp",
    "assets/LQIP/Portfolio17.webp",
    "assets/LQIP/Portfolio6.webp",
    "assets/LQIP/Portfolio19.webp",
    "assets/LQIP/DJI_0051.webp",
    "assets/LQIP/Portfolio15.webp",
    "assets/LQIP/Portfolio3.webp",
    "assets/LQIP/Portfolio4.webp",
  ];

  return (
    <div id="projects-container" className="min-h-screen bg-neutral">
      <div>
        <h1 className="text-4xl text-center font-bold">Web Development</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        <ProjectCard
          id="project1"
          className="w-full sm:w-auto"
          title="Teoti.io - Landing Page"
          imageUrl="assets/TeotiLandingImage.webp"
          deployedUrl="https://teoti.io/"
          githubUrl="https://github.com/teoti-io"
          tags={["Typescript", "Vue", "AWS", "Front-end"]}
        />
        <ProjectCard
          id="project2"
          className="w-full sm:w-auto"
          title="Terra Pay - Blockchain Payments"
          imageUrl="assets/terrapay.webp"
          deployedUrl="https://www.google.com"
          githubUrl="https://github.com/teoti-io"
          tags={["Typescript", "Vue", "AWS", "Front-end"]}
        />
        <ProjectCard
          id="project3"
          className="w-full sm:w-auto"
          title="eBazon - eCommerce Platform"
          imageUrl="assets/Ebazon.webp"
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
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        <ProjectCard
          id="project4"
          className="w-full sm:w-auto"
          title="Portfolio Website"
          imageUrl="assets/PortfolioSite.webp"
          deployedUrl="https://www.google.com"
          githubUrl="https://github.com/crooney36/portfolio-site"
          tags={["Javascript", "React", "TailwindCSS", "AWS", "Full-stack"]}
        />
        {/* <ProjectCard
          id="project5"
          title="Teoti Vendors - Inventory Management"
          imageUrl="assets/PortfolioSite.webp"
          deployedUrl="https://www.google.com"
          githubUrl="https://github.com/crooney36/portfolio-site"
          tags={["Typescript", "Node.js", "GraphQL", "AWS", "Back-end"]}
        /> */}
      </div>

      <div className="min-h-screen flex flex-col justify-center items-center mt-24 bg-base-100">
        <div className="w-full sm:w-3/4 lg:w-1/2 text-center">
          <h1 className="text-4xl font-bold my-10">Photography</h1>
          <p className="mb-10">
            A curated selection of my aerial and ground-based photography
            showcases a glimpse of my artistic capabilities. Feel free to
            contact me or explore my Instagram gallery for an extensive view of
            my work.
          </p>
        </div>
        {
          <Photography
            photos={combinedImages}
            lqipPhotos={combinedLQIPImages}
          />
        }
      </div>
    </div>
  );
}
