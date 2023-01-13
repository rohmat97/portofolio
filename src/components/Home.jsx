import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Link from "react-scroll/modules/components/Link";
import Profile from "../assets/Profile.jpg";
const Home = () => {
  return (
    <div className=" w-full h-screen bg-[#0a192f]" name="home">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-row justify-center h-full">
        <img className="w-64 h-64 m-auto" src={Profile} alt="Profile" />
        <div className="mx-auto px-8 flex flex-col justify-center h-full pt-20">
          <p className="text-pink-600">Hi, my name is</p>
          <h1 className=" text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Rohmat Dasuki
          </h1>
          <h2 className=" text-4xl sm:text-7xl font-bold text-[#8892b0] ">
            I'm a Front-End Engineer.
          </h2>
          <p className=" text-[#8892b0] py-4 max-w-[700px]">
            I'm a Front-End Engineer who specializes in building (and sometimes
            designing) a great digital experience. Right now, I'm focusing on
            build mobile apps using React-Native and Web apps using React JS,
            but if needed back-end (nodejs), i'm ready on it.
          </p>
          <div>
            <Link to="about" smooth={true} duration={500}>
              <button className=" text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 rounded-2xl">
                View More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
