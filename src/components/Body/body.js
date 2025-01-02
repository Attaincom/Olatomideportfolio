import React from "react";
import TomidePassport from "../images/TomidePassport.jpeg"; // Correct relative path'


function Body() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start p-8 md:p-16 bg-gray-50 rounded-xl shadow-md space-x-12">
      {/* Left Section - Image */}
      <div className="flex md:w-[35%] mb-8 md:mb-0">
        <img
          src={TomidePassport} // Use the imported image variable
          className="rounded-xl w-full h-auto"
        />
      </div>

      {/* Right Section - Text Content */}
      <div className="md:w-[70%] flex flex-col items-start text-left space-y-8">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-800 ">
          Hello, I'm Olatomide Fagbohun
        </h1>
        <h2 className="text-1xl md:text-3xl font-bold text-brown-500 mt-2">
          Frontend Developer | WordPress Developer | Digital Marketer
        </h2>
        <p className="text-gray-600 items-start mt-4">
        I am a skilled Frontend Developer and WordPress Developer, proficient in creating responsive and user-friendly websites using technologies like React.js, HTML, CSS, and JavaScript. With a strong background in Digital Marketing, I implement data-driven strategies to enhance brand visibility and drive conversions. 
        Combining my expertise in development and marketing, I deliver innovative, high-quality solutions that meet client needs and business goals.
        </p>

        {/* Social Links */}
        <div className="flex space-x-8 mt-6">
          <a
            href="https://wa.me/2348073393679"
            aria-label="WhatsApp"
            className="text-gray-500 hover:text-green-500 text-2xl"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a
            href="#https://web.facebook.com/fagbohun.olatomide/"
            aria-label="Facebook"
            className="text-gray-500 hover:text-brown-500 text-2xl"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-gray-500 hover:text-pink-500 text-2xl"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://github.com/Attaincom"
            aria-label="GitHub"
            className="text-gray-500 hover:text-black text-2xl"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="mailto:olatomidefagbohun@gmail.com"
            aria-label="Email"
            className="text-gray-500 hover:text-red-500 text-2xl"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="#"
            aria-label="Portfolio Link"
            className="text-gray-500 hover:text-brown-500 text-2xl"
          >
            <i className="fas fa-link"></i>
          </a>
        </div>

        {/* CTA Button */}
        <button className="mt-6 px-6 py-3 bg-brown-500 text-white rounded-lg shadow hover:bg-brown-700">
        <a
          href="https://wa.me/2348073393679"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          Let’s chat
        </a>
      </button>
      </div>
    </div>
  );
}

export default Body;
