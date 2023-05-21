import React from "react";
import { SkillBar } from "./";

export default function SkillsContent() {
  const skills = [
    { name: "JavaScript", proficiency: 80 },
    { name: "TypeScript", proficiency: 60 },
    { name: "Java", proficiency: 60 },
    { name: "Python", proficiency: 45 },
    { name: "React.js", proficiency: 80 },
    { name: "Vue.js", proficiency: 60 },
    { name: "Next.js", proficiency: 30 },
    { name: "Node.js", proficiency: 60 },
    { name: "HTML", proficiency: 80 },
    { name: "CSS", proficiency: 80 },
    { name: "TailwindCSS", proficiency: 60 },
    { name: "PostgreSQL", proficiency: 60 },
    { name: "GraphQL", proficiency: 50 },
    { name: "AWS", proficiency: 60 },
    { name: "Figma", proficiency: 50 },
    { name: "Git", proficiency: 75 },
  ];

  const half = Math.ceil(skills.length / 2);
  const firstHalf = skills.slice(0, half);
  const secondHalf = skills.slice(half, skills.length);

  return (
    <div className="hero min-h-screen bg-neutral flex justify-center items-center">
      <div className="hero-content min-h-auto w-full md:w-full lg:w-4/5 xl:w-3/4 bg-base-100 p-4 lg:p-16 rounded-lg mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-14">Technical Skills</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start lg:items-center">
            <div className="col-span-1 mx-4 md:mx-10 mb-4 lg:mb-0 flex justify-center">
              <img
                src="assets/TechSkills.webp"
                className="rounded-lg shadow-2xl max-w-full h-auto object-cover"
              />
            </div>
            <div className="col-span-2 grid grid-cols-2 gap-2 w-full sm:w-auto">
              <div className="space-y-4">
                {firstHalf.map((skill, index) => (
                  <SkillBar
                    key={index}
                    skill={skill.name}
                    proficiency={skill.proficiency}
                  />
                ))}
              </div>
              <div className="space-y-4">
                {secondHalf.map((skill, index) => (
                  <SkillBar
                    key={index}
                    skill={skill.name}
                    proficiency={skill.proficiency}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
