import React from "react";
import ImageModal from "./ImageModal";

const ProjectCard = ({ id, title, imageUrl, deployedUrl, githubUrl, tags }) => {
  const openModal = () => {
    document.getElementById(`image-modal-${id}`).checked = true;
  };

  const closeModal = (e) => {
    e.currentTarget.checked = false;
  };

  return (
    <div className="w-96 bg-base-100 drop-shadow-xl m-5 mt-20 rounded-xl border-success border-2">
      <ImageModal
        id={id}
        imageUrl={imageUrl}
        title={title}
        closeModal={closeModal}
      />
      <div className="card bordered bg-base-100 rounded-xl">
        <figure className="px-7 pt-7">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-56 object-cover rounded-t-xl"
            onClick={openModal}
          />
        </figure>
        <div
          className="card-body flex flex-col justify-between"
          style={{ height: "200px" }}
        >
          <div className="flex justify-between items-center">
            <h2 className="card-title">{title}</h2>
            <div className="flex">
              <div className="flex items-center justify-center bg-violet-200 rounded-full px-1 py-1 border border-violet-500">
                <a href={deployedUrl} target="_blank" rel="noreferrer">
                  <img
                    src="assets/Link.svg"
                    alt="Deployed"
                    className="w-6 h-6 mx-1"
                  />
                </a>
                <a href={githubUrl} target="_blank" rel="noreferrer">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                    alt="GitHub"
                    className="w-6 h-6 mx-1"
                  />
                </a>
              </div>
            </div>
          </div>
          <div
            className="card-actions flex flex-wrap mt-4"
            style={{ minHeight: "40px" }}
          >
            {tags.map((tag, index) => (
              <div key={index} className="badge badge-outline mr-2 mb-2">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
