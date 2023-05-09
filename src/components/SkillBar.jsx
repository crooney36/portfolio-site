import React from "react";

export default function SkillBar({ skill, proficiency }) {
  return (
    <div className="mb-4 flex items-center space-x-2">
      <h4 className="font-semibold text-sm lg:text-base w-20">{skill}</h4>
      <progress
        className="progress progress-primary w-full"
        value={proficiency}
        max="100"
      ></progress>
    </div>
  );
}
