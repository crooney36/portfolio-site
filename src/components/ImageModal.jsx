import React from "react";

const ImageModal = ({ id, imageUrl, title, closeModal }) => {
  return (
    <>
      <input
        type="checkbox"
        id={`image-modal-${id}`}
        className="modal-toggle"
      />
      <div className="modal fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center">
        <div className="modal-box w-4/5 h-4/5 p-4 flex items-center justify-center relative">
          <label
            htmlFor={`image-modal-${id}`}
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={closeModal}
          >
            ✕
          </label>
          <img
            src={imageUrl}
            alt={title}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default ImageModal;
