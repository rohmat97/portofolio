import React, { useState } from 'react'
import Logo from '../assets/logo.png';
import { FaBars, FaTimes, FaGithub, FaLinkedin  } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import {
  RESUME_URL,
  LINKEDIN_URL,
  GITHUB_URL,
  MAILTO,
  EMAIL,
} from "../constants/links";
const NavBar = () => {
  const [nav, setnav] = useState(false)
  const handleClick= () =>setnav(!nav)
  return (
    <div className="fixed z-50 w-full h-[80px] flex justify-between items-center px-4 text-gray-300 backdrop-blur supports-[backdrop-filter]:bg-[#0a192f]/70 bg-[#0a192f]">
      <div className="flex items-center h-full"></div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            activeClass="text-pink-400"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            activeClass="text-pink-400"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            activeClass="text-pink-400"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            activeClass="text-pink-400"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            activeClass="text-pink-400"
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            activeClass="text-pink-400"
          >
            Contact
          </Link>
        </li>
        <li>
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </li>
      </ul>
      {/* Hamburger */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 cursor-pointer"
        aria-label="Toggle menu"
        role="button"
        aria-controls="mobile-menu"
        aria-expanded={nav}
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        id="mobile-menu"
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f]/95 flex flex-col justify-center items-center"
        }
        aria-hidden={!nav}
      >
        <li className="py-6 text-3xl sm:text-4xl">
          <Link
            onClick={handleClick}
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            activeClass="text-pink-400"
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-3xl sm:text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            activeClass="text-pink-400"
          >
            About
          </Link>
        </li>
        <li className="py-6 text-3xl sm:text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            activeClass="text-pink-400"
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-3xl sm:text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            activeClass="text-pink-400"
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-3xl sm:text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            to="experience"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            activeClass="text-pink-400"
          >
            Experience
          </Link>
        </li>
        <li className="py-6 text-3xl sm:text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            activeClass="text-pink-400"
          >
            Contact
          </Link>
        </li>
        <li className="py-6 text-3xl sm:text-4xl">
          {" "}
          <a
            onClick={handleClick}
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed z-30 flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-blue-600">
            <a
              className="pointer-events-auto flex justify-between items-center w-full text-gray-300"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open LinkedIn profile in a new tab"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#333333]">
            <a
              className="pointer-events-auto flex justify-between items-center w-full text-gray-300"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open GitHub profile in a new tab"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#6FC2B0]">
            <a
              className="pointer-events-auto flex justify-between items-center w-full text-gray-300"
              href={MAILTO}
              aria-label={`Send an email to ${EMAIL}`}
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#565F69]">
            <a
              className="pointer-events-auto flex justify-between items-center w-full text-gray-300"
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open resume in a new tab"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar