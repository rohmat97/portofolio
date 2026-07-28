import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaPrint, FaDownload, FaAward, FaGamepad, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';
import {
  RESUME_URL,
  CERTIFICATIONS_DRIVE_URL,
  LINKEDIN_URL,
  GITHUB_URL,
  MAILTO,
  EMAIL,
} from '../../constants/links';
import { toggleCVProfileBGM, isCVProfileBGMPlaying } from '../../utils/audioEffects';

const NavBar = ({ onReopenGate }) => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bgmActive, setBgmActive] = useState(true);

  const handleClick = () => setNav(!nav);

  const handleToggleBgm = () => {
    const active = toggleCVProfileBGM();
    setBgmActive(active);
  };

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
      <div className="max-w-[1400px] mx-auto h-full flex justify-between items-center px-4 sm:px-6">
        {/* Brand Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer group flex items-center gap-3 flex-shrink-0"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-[2px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold text-white text-lg font-mono">
              RD
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-100 text-base lg:text-lg tracking-tight group-hover:text-cyan-400 transition-colors whitespace-nowrap">
              Rohmat Dasuki
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Web CV & Portfolio
            </span>
          </div>
        </Link>

        {/* Desktop Menu Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="!text-cyan-400 font-semibold bg-cyan-950/40 border-cyan-500/30"
              className="px-3 py-1.5 text-xs xl:text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg border border-transparent transition-all cursor-pointer whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}

          {/* Quick Actions: Digimon Gate, BGM Toggle, Print, Certifications & Download */}
          <div className="flex items-center gap-1.5 lg:gap-2 ml-2 pl-2 xl:ml-3 xl:pl-3 border-l border-slate-800 flex-shrink-0">
            <button
              onClick={handleToggleBgm}
              title="Toggle CV Profile Background Music"
              aria-label="Toggle CV Profile Background Music"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-500/40 rounded-lg hover:bg-cyan-900/60 hover:border-cyan-400 transition-all shadow-sm cursor-pointer whitespace-nowrap flex-shrink-0"
            >
              {bgmActive ? (
                <>
                  <FaVolumeUp className="text-cyan-400 text-xs animate-pulse flex-shrink-0" />
                  <span className="whitespace-nowrap">BGM ON</span>
                </>
              ) : (
                <>
                  <FaVolumeMute className="text-slate-400 text-xs flex-shrink-0" />
                  <span className="whitespace-nowrap">BGM OFF</span>
                </>
              )}
            </button>

            {onReopenGate && (
              <button
                onClick={onReopenGate}
                title="Reopen Digimon World 3 Cyber Matrix Gate"
                aria-label="Reopen Digimon World 3 Cyber Matrix Gate"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-cyan-300 bg-cyan-950/80 border border-cyan-500/50 rounded-lg hover:bg-cyan-900/80 hover:border-cyan-400 transition-all shadow-sm cursor-pointer whitespace-nowrap flex-shrink-0"
              >
                <FaGamepad className="text-cyan-400 text-xs animate-pulse flex-shrink-0" />
                <span className="whitespace-nowrap">Matrix Gate</span>
              </button>
            )}
            <button
              onClick={handlePrint}
              title="Print CV / Save as PDF"
              aria-label="Print CV or Save as PDF"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-500/40 rounded-lg hover:bg-cyan-900/60 hover:border-cyan-400 transition-all shadow-sm cursor-pointer whitespace-nowrap flex-shrink-0"
            >
              <FaPrint className="text-xs flex-shrink-0" />
              <span className="whitespace-nowrap">Print CV</span>
            </button>
            <a
              href={CERTIFICATIONS_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="Open Certifications Google Drive"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-purple-300 bg-purple-950/60 border border-purple-500/40 rounded-lg hover:bg-purple-900/60 hover:border-purple-400 transition-all shadow-sm whitespace-nowrap flex-shrink-0"
            >
              <FaAward className="text-xs flex-shrink-0" />
              <span className="whitespace-nowrap">Certificates</span>
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="Open Google Drive PDF Resume"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-all shadow-sm whitespace-nowrap flex-shrink-0"
            >
              <FaDownload className="text-xs flex-shrink-0" />
              <span className="whitespace-nowrap">PDF</span>
            </a>
          </div>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center gap-3">
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
          className={`fixed inset-0 top-[72px] bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between p-6 transition-all duration-300 lg:hidden ${
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
      <div className="hidden lg:flex fixed z-40 flex-col left-0 space-y-3 no-print">
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group social-dock-item flex items-center gap-3 w-[155px] bg-gradient-to-r from-blue-700/90 to-blue-600/90 hover:from-blue-600 hover:to-blue-500 text-white px-4 py-3 rounded-r-xl shadow-lg hover:shadow-blue-500/40 backdrop-blur-md border border-l-0 border-white/10 hover:border-white/30 active:scale-95 cursor-pointer"
          aria-label="LinkedIn Profile"
        >
          <span className="text-xs font-semibold tracking-wider group-hover:translate-x-1 transition-transform duration-500 ease-out">
            LinkedIn
          </span>
          <FaLinkedin size={22} className="ml-auto group-hover:scale-115 group-hover:rotate-6 transition-all duration-500 ease-out text-blue-200 group-hover:text-white" />
        </a>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group social-dock-item flex items-center gap-3 w-[155px] bg-gradient-to-r from-slate-900/95 to-slate-800/90 hover:from-slate-800 hover:to-slate-700 text-white px-4 py-3 rounded-r-xl shadow-lg hover:shadow-slate-500/30 backdrop-blur-md border border-l-0 border-slate-700/60 hover:border-white/30 active:scale-95 cursor-pointer"
          aria-label="GitHub Profile"
        >
          <span className="text-xs font-semibold tracking-wider group-hover:translate-x-1 transition-transform duration-500 ease-out">
            GitHub
          </span>
          <FaGithub size={22} className="ml-auto group-hover:scale-115 group-hover:-rotate-6 transition-all duration-500 ease-out text-slate-300 group-hover:text-white" />
        </a>
        <a
          href={MAILTO}
          className="group social-dock-item flex items-center gap-3 w-[155px] bg-gradient-to-r from-teal-700/90 to-teal-600/90 hover:from-teal-600 hover:to-teal-500 text-white px-4 py-3 rounded-r-xl shadow-lg hover:shadow-teal-500/40 backdrop-blur-md border border-l-0 border-white/10 hover:border-white/30 active:scale-95 cursor-pointer"
          aria-label={`Send Email to ${EMAIL}`}
        >
          <span className="text-xs font-semibold tracking-wider group-hover:translate-x-1 transition-transform duration-500 ease-out">
            Email
          </span>
          <HiOutlineMail size={22} className="ml-auto group-hover:scale-115 group-hover:rotate-6 transition-all duration-500 ease-out text-teal-200 group-hover:text-white" />
        </a>
      </div>
    </header>
  );
};

export default NavBar;
