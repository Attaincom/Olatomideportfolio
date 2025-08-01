import React from "react";
import PortfolioImage from "../images/Portfolio.png"; // Correctly importing Portfolio image
import Todo from "../images/Todo.png"
import Telemedicine from "../images/Telemedicine.png"
import Nft from "../images/nft.png"
import MovieStream from "../images/Movie-Stream.jpg"; // Correctly importing Movie-Stream image

const projects = [
    {
        title: "Portfolio",
        description:
          "A showcase of innovative and responsive web solutions built with modern technologies like React and Tailwind, reflecting my passion for crafting exceptional digital experiences",
        techStack: ["React", "Tailwind", "Frontend"],
        githubLink: "https://github.com/Attaincom/Olatomideportfolio", // Replace with the actual link
        websiteLink: "https://olatomideportfolio.vercel.app/", // Replace with the actual link
        image: PortfolioImage, // Use the imported Portfolio image
      },
      {
        title: "TodoList App",
        description:
          "The TodoList app is a task management tool that enables users to add, edit, and delete tasks. It provides a user-friendly interface for organizing and tracking daily tasks, enhancing productivity.",
        techStack: ["React", "Tailwind", "Javascript", "Frontend"],
        githubLink: "https://github.com/Attaincom/Olatomideportfolio", // Replace with the actual link
        websiteLink: "https://my-todo-list-app-ow4v.vercel.app/", // Replace with the actual link
        image: Todo, // Use the imported Portfolio image
      },
      {
        title: "Telemedicine website",
        description:
          "Telemedicine app enables patients to access remote healthcare services, including virtual consultations, e-prescriptions, and health record management, all through a secure digital platform.",
        techStack: ["React", "Tailwind", "Javascript", "Frontend"],
        githubLink: "https://github.com/Attaincom/Telemedicine-Website", // Replace with the actual link
        websiteLink: "https://telemedicine-website-rosy.vercel.app/", // Replace with the actual link
        image: Telemedicine, // Use the imported Portfolio image
      },
      {
        title: "NFT Website",
        description:
          "NFT website is an online platform that allows users to buy, sell, and showcase digital assets in the form of non-fungible tokens (NFTs), typically leveraging blockchain technology for ownership verification.",
        techStack: ["React", "Tailwind", "Javascript", "Frontend"],
        githubLink: "https://github.com/Attaincom/nft-website", // Replace with the actual link
        websiteLink: "https://nft-website-six-mocha.vercel.app/", // Replace with the actual link
        image: Nft, // Use the imported Portfolio image
      },
      {
        title: "Movie Stream",
        description:
          "Movie Stream is a responsive web application that allows users to explore, search, and watch movie trailers. It features trending movies, genre-based recommendations, and user authentication. Powered by The Movie Database (TMDb) API and a custom backend, it provides a seamless movie discovery experience.",
        techStack: ["React", "Tailwind", "Javascript", "Fullstack", "Api Integration", ],
        githubLink: "https://github.com/Attaincom/Movie-stream", // Replace with the actual link
        websiteLink: "https://movie-stream-ashy.vercel.app/", // Replace with the actual link
        image: MovieStream, // Use the imported Portfolio image
      },
  
];

const ReactProjects = () => {
  return (
    <div className="py-12 px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">./Websites.</h1>
      <p className="text-xl mb-12">Projects I’m Proud Of</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 text-left"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm"
              >
                GitHub
              </a>
              <a
                href={project.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm"
              >
                Visit Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReactProjects;
