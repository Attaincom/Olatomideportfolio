import React from "react";
import { FiExternalLink } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-white p-6 border-t border-gray-200">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-semibold text-gray-900 flex">
            <span className="mr-2">Olatomide</span>
            <span className="ml-1 text-brown-700"> <FiExternalLink /> </span>
          </h1>
          <p className="text-gray-700 text-sm">Tech Enthusiast</p>
        </div>

        <div className="flex items-center border rounded-full px-4 py-2 w-80">
          <span className="text-gray-500 text-lg mr-2">👤</span>
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 outline-none text-sm text-gray-700"
          />
          <button className="bg-brown-500 text-white rounded-full px-4 py-1 text-sm">
            Subscribe
          </button>
        </div>
      </div>

      <hr className="my-4 border-gray-300" />

      <div className="flex flex-col md:flex-row justify-between text-gray-500 text-sm">
        <p className="mb-4 md:mb-0">© Olatomide 2025</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-700">
            Terms of Services
          </a>
          <a href="#" className="hover:text-gray-700">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
