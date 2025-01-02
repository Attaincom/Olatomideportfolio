import React from "react";
import PraisenPam from "../images/praisenpam.png"; // Correctly importing PraisenPam image
import Tryphenastore from "../images/tryp.png"; // Correctly importing Tryphenastore image

const projects = [
  {
    title: "PraisenPam",
    description:
      "PraisennPam is a visa processing and study abroad company that offers expert guidance and seamless support for international education and travel opportunities.",
    techStack: ["WordPress"],
    githubLink: "#", // Replace with the actual link
    websiteLink: "https://www.praisenpam.com/", // Replace with the actual link
    image: PraisenPam, // Use the imported PraisenPam image
  },
  {
    title: "Tryphenastore",
    description:
      "Tryphenastore is an online general merchandise store offering a wide range of products for various customer needs.",
    techStack: ["WordPress"],
    githubLink: "#", // Replace with the actual link
    websiteLink: "https://www.tryphenastore.com/", // Replace with the actual link
    image: Tryphenastore, // Use the imported Tryphenastore image
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
