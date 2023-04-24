import React from "react";
import { SkillBar } from "./";

export default function SkillsContent() {
  const skills = [
    { name: "JavaScript", proficiency: 90 },
    { name: "TypeScript", proficiency: 60 },
    { name: "Java", proficiency: 75 },
    { name: "Python", proficiency: 50 },
    { name: "React.js", proficiency: 90 },
    { name: "Vue.js", proficiency: 75 },
    { name: "Next.js", proficiency: 50 },
    { name: "Node.js", proficiency: 70 },
    { name: "HTML", proficiency: 90 },
    { name: "CSS", proficiency: 85 },
    { name: "TailwindCSS", proficiency: 80 },
    { name: "PostgreSQL", proficiency: 70 },
    { name: "GraphQL", proficiency: 60 },
    { name: "AWS", proficiency: 70 },
    { name: "Figma", proficiency: 50 },
    { name: "Git", proficiency: 80 },
  ];

  return (
    <div className="hero min-h-screen bg-neutral">
      <div className="hero-content flex-col lg:flex-row bg-base-100 p-12 rounded-lg">
        <img
          src="assets/TechSkills.png"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-4xl text-center font-bold mb-10">
            Skills & Technologies
            <p>
              <span className="text-sm">
                I'm proficient in a diverse suite of technologies ranging from
                front-end, back-end, cloud and design.
              </span>
            </p>
          </h1>
        </div>
        <div className="ml-5">
          <div className="flex space-x-8">
            <div className="flex flex-col">
              {skills.slice(0, skills.length / 2).map((skill, index) => (
                <SkillBar
                  key={index}
                  skill={skill.name}
                  proficiency={skill.proficiency}
                />
              ))}
            </div>
            <div className="flex flex-col">
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
