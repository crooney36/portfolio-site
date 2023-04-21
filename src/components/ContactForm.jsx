import React from "react";
import emailjs from "emailjs-com";
const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const userID = import.meta.env.VITE_EMAILJS_USER_ID;

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send the message. Please try again.");
      }
    );
    e.target.reset();
  };

  return (
    <div className="hero min-h-screen bg-neutral">
      <div className="hero-content bg-base-100 p-12 rounded-lg w-full mx-auto mt-10">
        <div className="flex flex-row items-start w-full space-x-6">
          <div className="mt-10">
            <h2 className="text-3xl font-semibold mb-6">
              Interested in working with me? Reach out!
            </h2>
            <img
              src="assets/ContactImage.png"
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
              placeholder="Your name"
              className="input input-bordered"
            />

            <label className="label mt-4">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your email"
              className="input input-bordered"
            />

            <label className="label mt-4">
              <span className="label-text">Subject</span>
            </label>
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered"
            />

            <label className="label mt-4">
              <span className="label-text">Message</span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full h-24"
              placeholder="Your message"
            ></textarea>

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
