// src/ProductCard.jsx
import React from "react";

const ProjectCard = ({ title, imageUrl, deployedUrl, githubUrl }) => {
  return (
    <div className="card bordered w-64">
      <figure>
        <img src={imageUrl} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-around mt-4">
          <a href={deployedUrl} target="_blank" rel="noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/93/White_circle-icons-deploy.svg"
              alt="Deployed"
              className="w-8 h-8"
            />
          </a>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              alt="GitHub"
              className="w-8 h-8"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
