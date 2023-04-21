import React from "react";

export default function SkillBar({ skill, proficiency }) {
  return (
    <div className="mb-4">
      <h4 className="font-semibold">{skill}</h4>
      <progress
        className="progress progress-primary w-56"
        value={proficiency}
        max="100"
      ></progress>
    </div>
  );
}
