import React, { useState } from 'react';
import OlatomideResume from "../../images/OlatomideResume.pdf";
import { FiArrowUpRight } from "react-icons/fi";
import { FiExternalLink } from 'react-icons/fi';


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="navbar-container w-[1440px]">
        <nav className="bg-white w-full shadow-sm flex justify-between items-center px-6 py-4 border border-grey rounded-2xl">
          {/* Left Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-black hover:text-gray-600">Home</a>
            <a href="#" className="text-black hover:text-gray-600">About</a>
          </div>

          {/* Logo */}
          <div className="text-lg font-semibold text-black flex items-center">
            Olatomide <span className="bg-brown border-2 border-brown-500 ml-1 text-black">
            <FiArrowUpRight /> </span>



          </div>

          {/* Hamburger Icon */}
          <button
            className="lg:hidden block text-black"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <span className="text-2xl">&times;</span> // Close icon
            ) : (
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-black"></span>
                <span className="block w-6 h-0.5 bg-black"></span>
                <span className="block w-6 h-0.5 bg-black"></span>
              </div>
            )}
          </button>

          {/* Right Links (Hidden on mobile) */}
          <div className="hidden lg:flex space-x-6 justify-center items-center">
            <a href="#" className="text-black hover:text-gray-600">Projects</a>
            <a href="#" className="text-black hover:text-gray-600">Blog</a>
            <a
              href={OlatomideResume}
              download="OlatomideResume.pdf"
              className="bg-brown-500 text-white px-4 py-2 rounded hover:bg-brown-700"
            >
              View Resume
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-md mt-4 px-6 py-4 flex flex-col space-y-4">
            <a href="#" className="text-black hover:text-gray-600">Home</a>
            <a href="#" className="text-black hover:text-gray-600">About</a>
            <a href="#" className="text-black hover:text-gray-600">Projects</a>
            <a href="#" className="text-black hover:text-gray-600">Blog</a>
            <a
              href={OlatomideResume}
              download="Olatomide_Resume.pdf"
              className="bg-brown-700 text-white px-4 py-2 rounded hover:bg-brown-700"
            >
              View Resume
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
