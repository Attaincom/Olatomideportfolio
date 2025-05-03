import React from "react";
import { IncidentReport } from "../images"; // Adjust the import path as necessary

const projects = [
  {
    title: "Incident Reporting App",
    description:
      "A cross-platform mobile app built using Cordova for hybrid deployment, styled with HTML and CSS, and powered by JavaScript. It leverages JsonBin as a lightweight backend to store and manage incident reports effectively.",
    techStack: ["Cordova", "HTML", "CSS", "Javascript", "Backend-JsonBin"],
    githubLink: "https://github.com/Attaincom/BincomFinal-Project-Feb-2025", // Replace with the actual link
    websiteLink: "https://olatomideportfolio.vercel.app/", // Replace with the actual link
    image: IncidentReport, // Use the imported Portfolio image
  },
];

const MobileappProjects = () => {
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

export default MobileappProjects;
