import React from "react";
import { Link } from 'react-router-dom';

const Card = ({ buttonText, title, emoji, linkTo }) => {
  return (
    <div className="bg-black text-white rounded-2xl p-6 w-[90%] sm:w-[47%] h-[200px] sm:h-[500px] text-center shadow-lg transform transition-transform duration-300 hover:bg-brown-700 hover:rotate-6">
      {/* Button */}
      <Link to={linkTo}>
        <button className="bg-white text-black rounded-full px-4 py-2 font-medium text-2xl inline-block mb-4">
          {buttonText} <span className="text-brown-700">✨</span>
        </button>
      </Link>
      {/* Title */}
      <h1 className="text-2xl sm:text-8xl text-left mt-12 font-bold mb-2">
        {title} <span className="ml-2 text-4xl">{emoji}</span>
      </h1>
    </div>
  );
};

const Home = () => {
  return (
    <div className="bg-gray-200 min-h-screen p-6">
      {/* Section 1 */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-8 text-4xl">
        <Card buttonText="Let's Begin!" title="Know Olatomide" emoji="👋" linkTo="/aboutme" />
        <Card buttonText="See My Best" title="Projects HQ" emoji="📂" linkTo="/myprojects" />
      </div>

      {/* Section 2 */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
        <Card
          buttonText="What's New?"
          title="His Journal"
          emoji="✍️"
        />
        <Card
          buttonText="More Highlights"
          title="Quick Links"
          emoji="⭐"
        />
      </div>
    </div>
  );
};

export default Home;
