import React from "react";
import { SkillBar } from "./";

export default function SkillsContent() {
  const skills = [
    { name: "JavaScript", proficiency: 80 },
    { name: "TypeScript", proficiency: 60 },
    { name: "Java", proficiency: 70 },
    { name: "Python", proficiency: 45 },
    { name: "React.js", proficiency: 85 },
    { name: "Vue.js", proficiency: 70 },
    { name: "Next.js", proficiency: 30 },
    { name: "Node.js", proficiency: 70 },
    { name: "HTML", proficiency: 90 },
    { name: "CSS", proficiency: 80 },
    { name: "TailwindCSS", proficiency: 80 },
    { name: "PostgreSQL", proficiency: 70 },
    { name: "GraphQL", proficiency: 50 },
    { name: "AWS", proficiency: 70 },
    { name: "Figma", proficiency: 50 },
    { name: "Git", proficiency: 75 },
  ];

  return (
    <div className="hero min-h-screen bg-neutral flex justify-center items-center">
      <div className="hero-content bg-base-100 p-4 lg:p-16 rounded-lg mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start lg:items-center">
          <div className="mx-auto mb-4 lg:mb-0">
            {/* <h1 className="text-2xl lg:text-4xl font-bold mb-8 text-center">
              Skills & Technologies
            </h1> */}
            <img
              src="assets/TechSkills.webp"
              className="rounded-lg shadow-2xl w-full lg:w-64 object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              {skills.slice(0, skills.length / 2).map((skill, index) => (
                <SkillBar
                  key={index}
                  skill={skill.name}
                  proficiency={skill.proficiency}
                />
              ))}
            </div>
            <div>
              {skills.slice(skills.length / 2).map((skill, index) => (
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
  );
}
