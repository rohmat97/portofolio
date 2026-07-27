import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaPrint, FaDownload, FaAward } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';
import {
  RESUME_URL,
  CERTIFICATIONS_DRIVE_URL,
  LINKEDIN_URL,
  GITHUB_URL,
  MAILTO,
  EMAIL,
} from '../constants/links';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header
      className={`fixed z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'h-[72px] glass-nav shadow-lg shadow-black/30'
          : 'h-[80px] bg-transparent'
      } no-print`}
    >
      <div className="max-w-[1200px] mx-auto h-full flex justify-between items-center px-4 sm:px-6">
        {/* Brand Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer group flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-[2px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold text-white text-lg font-mono">
              RD
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-100 text-lg tracking-tight group-hover:text-cyan-400 transition-colors">
              Rohmat Dasuki
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Web CV & Portfolio
            </span>
          </div>
        </Link>

        {/* Desktop Menu Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="!text-cyan-400 font-semibold bg-cyan-950/40 border-cyan-500/30"
              className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg border border-transparent transition-all cursor-pointer"
            >
              {item.name}
            </Link>
          ))}

          {/* Quick Actions: Print, Certifications & Download */}
          <div className="flex items-center gap-2 ml-3 pl-3 border-l border-slate-800">
            <button
              onClick={handlePrint}
              title="Print CV / Save as PDF"
              aria-label="Print CV or Save as PDF"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-500/40 rounded-lg hover:bg-cyan-900/60 hover:border-cyan-400 transition-all shadow-sm cursor-pointer"
            >
              <FaPrint className="text-xs" />
              <span>Print CV</span>
            </button>
            <a
              href={CERTIFICATIONS_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="Open Certifications Google Drive"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-purple-300 bg-purple-950/60 border border-purple-500/40 rounded-lg hover:bg-purple-900/60 hover:border-purple-400 transition-all shadow-sm"
            >
              <FaAward className="text-xs" />
              <span>Certificates</span>
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="Open Google Drive PDF Resume"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-all shadow-sm"
            >
              <FaDownload className="text-xs" />
              <span>PDF</span>
            </a>
          </div>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={handlePrint}
            aria-label="Print CV"
            className="p-2 text-cyan-400 bg-slate-900/80 border border-cyan-500/30 rounded-lg text-sm"
          >
            <FaPrint />
          </button>
          <button
            onClick={handleClick}
            className="p-2.5 text-slate-200 hover:text-cyan-400 focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={nav}
          >
            {nav ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Mobile Overlay Menu */}
        <div
          className={`fixed inset-0 top-[72px] bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between p-6 transition-all duration-300 md:hidden ${
            nav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <ul className="flex flex-col gap-3 mt-4">
            {navLinks.map((item) => (
              <li key={item.to}>
                <Link
                  onClick={handleClick}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  className="block px-4 py-3 text-lg font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900/80 rounded-xl transition-all"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 mb-8 pt-6 border-t border-slate-800">
            <button
              onClick={() => {
                handleClick();
                handlePrint();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 font-medium text-cyan-300 bg-cyan-950/80 border border-cyan-500/40 rounded-xl"
            >
              <FaPrint /> Print / Save Web CV as PDF
            </button>
            <a
              onClick={handleClick}
              href={CERTIFICATIONS_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 font-medium text-purple-300 bg-purple-950/80 border border-purple-500/40 rounded-xl"
            >
              <FaAward /> Explore Certifications Folder
            </a>
            <a
              onClick={handleClick}
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 font-medium text-white bg-indigo-600 rounded-xl"
            >
              <FaDownload /> Download Original PDF Resume
            </a>
          </div>
        </div>
      </div>

      {/* Floating Side Social Bar (Desktop) */}
      <div className="hidden lg:flex fixed z-40 flex-col top-[38%] left-0 space-y-2 no-print">
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 w-[150px] ml-[-105px] hover:ml-0 duration-300 bg-blue-600/90 hover:bg-blue-600 text-white px-4 py-3 rounded-r-xl shadow-lg backdrop-blur-sm"
          aria-label="LinkedIn Profile"
        >
          <span className="text-xs font-semibold tracking-wider">LinkedIn</span>
          <FaLinkedin size={22} className="ml-auto group-hover:scale-110 transition-transform" />
        </a>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 w-[150px] ml-[-105px] hover:ml-0 duration-300 bg-slate-800/90 hover:bg-slate-800 text-white px-4 py-3 rounded-r-xl shadow-lg backdrop-blur-sm"
          aria-label="GitHub Profile"
        >
          <span className="text-xs font-semibold tracking-wider">GitHub</span>
          <FaGithub size={22} className="ml-auto group-hover:scale-110 transition-transform" />
        </a>
        <a
          href={MAILTO}
          className="group flex items-center gap-3 w-[150px] ml-[-105px] hover:ml-0 duration-300 bg-teal-600/90 hover:bg-teal-600 text-white px-4 py-3 rounded-r-xl shadow-lg backdrop-blur-sm"
          aria-label={`Send Email to ${EMAIL}`}
        >
          <span className="text-xs font-semibold tracking-wider">Email</span>
          <HiOutlineMail size={22} className="ml-auto group-hover:scale-110 transition-transform" />
        </a>
      </div>
    </header>
  );
};

export default NavBar;