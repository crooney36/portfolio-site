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
    <div className="hero min-h-screen bg-neutral">
      <div className="hero-content grid grid-cols-1 bg-base-100 p-12 rounded-lg">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold mb-2">Skills & Technologies</h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center mt-6">
          <img
            src="assets/TechSkills.webp"
            className="max-w-sm rounded-lg shadow-2xl lg:mr-12"
          />
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
