import React from "react";
import StudyWithFM from "../images/Graphics.jpg"; // Correctly importing StudyWithFM image

const projects = [
  {
    title: "My Designs",
    description:
      "Explore my collection of graphic designs and marketing materials created for various companies. This portfolio showcases my work with brands like StudyWithFM, SpaceStylist, and MBeduConsult. Check out the link to see how I've crafted visuals that align with each company's unique identity and goals.",
    techStack: ["CorelDraw", "Canva"],
    githubLink: "#", // Replace with the actual link
    websiteLink:
      "https://dribbble.com/Attaincom", // Replace with the actual link
    image: StudyWithFM, // Use the imported StudyWithFM image
  },
];

const GraphicProjects = () => {
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

export default GraphicProjects;
