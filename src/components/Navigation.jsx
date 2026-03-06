import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FiHome, FiPlusCircle} from 'react-icons/fi';
// import logo from '../assets/logo.png';

function Navigation() {
  const [menuOpen, isActiveMenuOpen] = useState(false);

  const toggleMenu = () => {
    isActiveMenuOpen(!menuOpen);
  };

  return (
    // Hero Section
    <section id="hero">
      {/* Hero Container */}
      <div className="container max-w-6xl mx-auto px-6 py-6  md:px-0">
        {/* Menu/Logo Container */}
        <nav className="flex w-full fixed left-0 justify-end items-end md:items-center md:justify-center font-bold z-50">
          {/* Logo */}
          {/* <img src={logo} alt="" x="w-16 h-16" /> */}
          {/* Menu */}
          <div className="hidden md:flex rounded-4xl bg-gray-500/70 py-4 px-8 shadow-xl md:space-x-16">
            <div className="group text-white">
              <a href="#about">About</a>
              <div className="mx-2 border-b border-white"></div>
            </div>
            <div className="group hover:text-white">
              <a href="#education">Education</a>
              <div className="mx-2 group-hover:border-b "></div>
            </div>
            <div className="group hover:text-white">
              <a href="#experience">Experience</a>
              <div className="mx-2 group-hover:border-b "></div>
            </div>
            <div className="group hover:text-white">
              <a href="#project">Project</a>
              <div className="mx-2 group-hover:border-b "></div>
            </div>
          </div>
          {/* <ul>
            <li>
              <a href="#about">
                <FiHome />
                About
              </a>
            </li>
            <li>
              <a href="#education">
                <FiPlusCircle />
                Education
              </a>
            </li>
            <li>
              <a href="#experience">
                <FiPlusCircle />
                Experiences
              </a>
            </li>
            <li>
              <Link to="/">
                <FiPlusCircle />
                Projects
              </Link>
            </li>
          </ul> */}
          {/* @todo Hamburger Button */}
          <div className="px-2 md:hidden">
            <button
              id="menu-btn"
              className={`z-40 block hamburger md:hidden focus:outline-none ${
                menuOpen ? 'open' : ''
              }`}
              onClick={toggleMenu}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          id="menu"
          className={`absolute top-0 bottom-0 left-0 flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black z-40 ${
            menuOpen ? 'flex' : 'hidden'
          }`}
        >
          <a href="#about" className="hover:text-pink-500" onClick={toggleMenu}>
            About
          </a>
          <a
            href="#education"
            className="hover:text-pink-500"
            onClick={toggleMenu}
          >
            Education
          </a>
          <a
            href="#experience"
            className="hover:text-pink-500"
            onClick={toggleMenu}
          >
            Experience
          </a>
          <a
            href="#project"
            className="hover:text-pink-500"
            onClick={toggleMenu}
          >
            Project
          </a>
        </div>

        {/* <div className="max-w-lg mt-32 mb-32 p-4 text-4xl uppercase border-2 md:p-10 md-32 md:mx-0 md:text-6xl">Impressive that make it better</div> */}
      </div>
    </section>
  );
}

export default Navigation;
