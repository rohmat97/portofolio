import React, { useState } from 'react'
import Logo from '../assets/logo.png';
import { FaBars, FaTimes, FaGithub, FaLinkedin  } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
const NavBar = () => {
  const [nav, setnav] = useState(false)
  const handleClick= () =>setnav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div className='text-pink-600 text-4xl bg-slate-300 rounded-full p-4 mt-4 font-bold'>
        RD
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='journey' smooth={true} duration={500}>
            Journey
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {
          !nav? <FaBars /> : <FaTimes />
        }
       
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='journey' smooth={true} duration={500}>
          Journey
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-blue-600'>
            <a 
              className='flex justify-between items-center w-full text-gray-300'
              onClick={()=>window.open("https://www.linkedin.com/in/rohmat-dasuki-7ab950128/", "_blank")}>
              LinkedIn <FaLinkedin  size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#333333]'>
            <a 
              className='flex justify-between items-center w-full text-gray-300'
              onClick={()=>window.open("https://github.com/rohmat97", "_blank")}>
              Github <FaGithub  size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#6FC2B0]'>
            <a 
              className='flex justify-between items-center w-full text-gray-300'
              onClick={()=>window.open("mailto:rohmat661@gmail.com")}>
              Email <HiOutlineMail  size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#565F69]'>
            <a 
              className='flex justify-between items-center w-full text-gray-300'
              onClick={()=>window.open("https://docs.google.com/document/d/1pq3ax6UcJU0n7ucPM8n7AhQzyJ8RKaMn8J2QyiOfIvM/edit?usp=sharing", "_blank")}>
              Resume <BsFillPersonLinesFill  size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar