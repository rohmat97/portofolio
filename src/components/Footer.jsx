import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {
  RESUME_URL,
  LINKEDIN_URL,
  GITHUB_URL,
  MAILTO,
  TEL_ID,
  TEL_MY,
  EMAIL,
} from "../constants/links";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a192f] text-gray-300 border-t border-white/10">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8 py-10">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">Get in touch</h3>
            <ul className="mt-3 space-y-2 text-[#8892b0]">
              <li>
                <a
                  className="hover:text-pink-400 underline"
                  href={MAILTO}
                  aria-label={`Send an email to ${EMAIL}`}
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <a className="hover:text-pink-400 underline" href={TEL_ID}>
                  +62 812-2148-3613
                </a>
              </li>
              <li>
                <a className="hover:text-pink-400 underline" href={TEL_MY}>
                  +60 17-949-0797
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick links</h3>
            <ul className="mt-3 space-y-2 text-[#8892b0]">
              <li>
                <Link
                  to="home"
                  smooth
                  duration={500}
                  offset={-80}
                  className="hover:text-pink-400 cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth
                  duration={500}
                  offset={-80}
                  className="hover:text-pink-400 cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  smooth
                  duration={500}
                  offset={-80}
                  className="hover:text-pink-400 cursor-pointer"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  smooth
                  duration={500}
                  offset={-80}
                  className="hover:text-pink-400 cursor-pointer"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="experience"
                  smooth
                  duration={500}
                  offset={-80}
                  className="hover:text-pink-400 cursor-pointer"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth
                  duration={500}
                  offset={-80}
                  className="hover:text-pink-400 cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Social</h3>
            <ul className="mt-3 space-y-2 text-[#8892b0]">
              <li>
                <a
                  className="inline-flex items-center gap-2 hover:text-pink-400"
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open LinkedIn profile in a new tab"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-2 hover:text-pink-400"
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open GitHub profile in a new tab"
                >
                  <FaGithub /> GitHub
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-2 hover:text-pink-400"
                  href={MAILTO}
                  aria-label={`Send an email to ${EMAIL}`}
                >
                  <HiOutlineMail /> Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-[#8892b0] flex flex-col sm:flex-row items-center justify-between">
          <p>
            © {new Date().getFullYear()} Rohmat Dasuki. All rights reserved.
          </p>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 sm:mt-0 underline hover:text-pink-400"
          >
            View Resume
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
