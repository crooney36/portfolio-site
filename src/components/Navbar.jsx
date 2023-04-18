import React, { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 w-full justify-between">
      <div className="flex items-center justify-between px-4 py-1">
        <a className="btn btn-ghost normal-case text-xl">Charles Rooney</a>
        <button
          className="block md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path d="M18 13H6a1 1 0 010-2h12a1 1 0 110 2zM18 18H6a1 1 0 010-2h12a1 1 0 110 2zM18 8H6a1 1 0 110-2h12a1 1 0 110 2z" />
            ) : (
              <path d="M19 13H5a1 1 0 110-2h14a1 1 0 110 2zM19 18H5a1 1 0 110-2h14a1 1 0 110 2zM19 8H5a1 1 0 110-2h14a1 1 0 110 2z" />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:flex md:items-center md:justify-end`}
      >
        <ul className="menu menu-horizontal px-1 navbar-end ml-auto">
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li tabIndex={0}>
            <a>
              Resume
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-base-100 right-0">
              <li>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download PDF
                </a>
              </li>
              <li>
                <a
                  href="/resume.docx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Word
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
