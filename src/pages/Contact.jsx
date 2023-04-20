import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full max-w-xl mx-auto mt-10 min-h-screen">
      <form className="form-control">
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
  );
};

export default ContactForm;
