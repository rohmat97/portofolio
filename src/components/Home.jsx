import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Profile from "../assets/Profile.jpg";
const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[#0a192f]" name="home" aria-label="Home section">
      {/* Container */}
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8 py-20 sm:py-32 flex flex-col-reverse md:flex-row items-center gap-8 sm:gap-10">
        <div className="flex-1 w-full">
          <p className="text-pink-600">Hi, my name is</p>
          <h1 className="text-4xl sm:text-6xl font-bold text-[#ccd6f6] leading-tight">
            Rohmat Dasuki
          </h1>
          <h2 className="text-2xl sm:text-4xl font-semibold text-[#8892b0] mt-2">
            Senior Software Engineer
          </h2>
          <p className="text-[#8892b0] py-6 max-w-[700px] text-base sm:text-lg">
            I build cross‑platform mobile and web applications with a focus on performance,
            accessibility, and great user experience. My recent work spans React Native for
            Android & iOS, and modern web apps with React and Tailwind CSS. I’m comfortable
            working across the stack with Node.js and Spring Boot when needed.
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            <Link to="about" smooth={true} duration={500} aria-label="Navigate to About section">
              <button className="w-full sm:w-auto justify-center text-white group border-2 border-pink-600/60 px-6 py-3 my-2 inline-flex items-center gap-2 rounded-xl hover:bg-pink-600 hover:border-pink-600 transition-colors">
                View more
                <span className="group-hover:translate-x-1 transition-transform">
                  <HiArrowNarrowRight />
                </span>
              </button>
            </Link>
            <a
              href="https://drive.google.com/file/d/15iAqjDgYe59dtvlmyyMjWjVtFWGD2rMP/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open resume in a new tab"
            >
              <button className="w-full sm:w-auto justify-center text-white border-2 border-white/40 px-6 py-3 my-2 inline-flex items-center gap-2 rounded-xl hover:bg-white hover:text-[#0a192f] transition-colors">
                Download resume
              </button>
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover ring-2 ring-pink-600/40 shadow-lg shadow-pink-600/10"
            src={Profile}
            alt="Portrait of Rohmat Dasuki"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
