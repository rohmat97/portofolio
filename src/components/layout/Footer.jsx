import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaPrint, FaAward } from 'react-icons/fa';
import {
  RESUME_URL,
  CERTIFICATIONS_DRIVE_URL,
  LINKEDIN_URL,
  GITHUB_URL,
  MAILTO,
  TEL_ID,
  TEL_MY,
  EMAIL,
} from "../../constants/links";

const Footer = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <footer className="w-full bg-[#080c14] text-slate-400 border-t border-slate-900 no-print">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-white font-mono text-sm">
                RD
              </div>
              <span className="font-bold text-slate-100 text-base">Rohmat Dasuki</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Senior Software Engineer specializing in cross-platform mobile apps, modern web portals, and microservices architecture.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-200 mb-3 font-mono">Navigation</h4>
            <ul className="space-y-2 text-xs">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="hover:text-cyan-400 cursor-pointer capitalize transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contacts */}
          <div>
            <h4 className="text-sm font-bold text-slate-200 mb-3 font-mono">Contacts</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href={MAILTO} className="hover:text-cyan-400 transition-colors font-mono">
                  {EMAIL}
                </a>
              </li>
              <li>
                <a href={TEL_MY} className="hover:text-cyan-400 transition-colors font-mono">
                  MY: +60 17-949-0797
                </a>
              </li>
              <li>
                <a href={TEL_ID} className="hover:text-cyan-400 transition-colors font-mono">
                  ID: +62 812-2148-3613
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links & Certifications */}
          <div>
            <h4 className="text-sm font-bold text-slate-200 mb-3 font-mono">Connect & Export</h4>
            <ul className="space-y-2 text-xs mb-4">
              <li>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 inline-flex items-center gap-1.5 transition-colors">
                  <FaLinkedin /> LinkedIn Profile
                </a>
              </li>
              <li>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 inline-flex items-center gap-1.5 transition-colors">
                  <FaGithub /> GitHub Repositories
                </a>
              </li>
              <li>
                <a href={CERTIFICATIONS_DRIVE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 text-purple-300 inline-flex items-center gap-1.5 transition-colors">
                  <FaAward /> Google Drive Certifications
                </a>
              </li>
            </ul>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-cyan-300 bg-cyan-950/80 border border-cyan-500/30 rounded-lg hover:bg-cyan-900/80 transition-all cursor-pointer"
            >
              <FaPrint /> Print / Export PDF CV
            </button>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-slate-900 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Rohmat Dasuki. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 underline">PDF Resume</a>
            <a href={CERTIFICATIONS_DRIVE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 underline">Certifications Folder</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
