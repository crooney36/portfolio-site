import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const userID = import.meta.env.VITE_EMAILJS_USER_ID;

const ContactForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        setShowModal(true);
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send the message. Please try again.");
      }
    );
    e.target.reset();
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleEmailChange = (e) => {
    setEmailValid(emailRegex.test(e.target.value));
  };

  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

  return (
    <div className="hero min-h-screen bg-neutral">
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              onClick={closeModal}
            ></div>
            <div className="bg-neutral rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full z-20">
              <div className="bg-neutral px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 className="text-lg leading-6 font-medium text-white">
                  Message sent successfully!
                </h3>
              </div>
              <div className="bg-neutral px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="hero-content bg-base-100 p-12 rounded-lg w-full mx-auto mt-10">
        <div className="flex flex-row items-start w-full space-x-6">
          <div className="mt-10">
            <h2 className="text-3xl font-semibold mb-6">
              Interested in working with me? Reach out!
            </h2>
            <img
              src="assets/ContactImage.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <form
            className="form-control bg-base-100 p-10 w-full"
            onSubmit={handleSubmit}
          >
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="from_name"
              placeholder="Your name"
              className="input input-bordered"
            />

            <label className="label mt-4">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="reply_to"
              placeholder="Your email"
              className={`input input-bordered ${
                !emailValid ? "input-error" : ""
              }`}
              onChange={handleEmailChange}
            />

            <label className="label mt-4">
              <span className="label-text">Subject</span>
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input input-bordered"
            />

            <label className="label mt-4">
              <span className="label-text">Message</span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full h-24"
              name="message"
              placeholder="Your message"
            ></textarea>
            <input type="hidden" name="to_name" value="Charles" />
            <button type="submit" className="btn btn-primary mt-6">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
