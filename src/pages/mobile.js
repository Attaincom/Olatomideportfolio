import React, { useState } from "react";
import { IncidentReport } from "../images";

const projects = [
  {
    title: "Incident Reporting App",
    description:
      "A cross-platform mobile app built using Cordova for hybrid deployment, styled with HTML and CSS, and powered by JavaScript. It leverages JsonBin as a lightweight backend to store and manage incident reports effectively.",
    techStack: ["Cordova", "HTML", "CSS", "Javascript", "Backend-JsonBin"],
    githubLink: "https://github.com/Attaincom/BincomFinal-Project-Feb-2025",
    DownloadApp:
      "https://drive.google.com/file/d/1osS-lDSAFZ-2ZMFpxICWxtqG8nbF6VV0/view?usp=drive_link",
    PreviewApp: "https://www.youtube.com/embed/_4s1dyZllYQ?autoplay=1",
    image: IncidentReport,
  },
];

const MobileappProjects = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeVideo, setActiveVideo] = useState("");

  const openModal = (videoUrl) => {
    setActiveVideo(videoUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setActiveVideo("");
  };

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
            <div className="flex justify-between flex-wrap gap-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm"
              >
                GitHub
              </a>
              {project.PreviewApp && (
                <button
                  onClick={() => openModal(project.PreviewApp)}
                  className="text-blue-500 hover:underline text-sm"
                >
                  Preview App
                </button>
              )}
              {project.DownloadApp && (
                <a
                  href={project.DownloadApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline text-sm"
                >
                  Download App
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg w-[90%] md:w-[60%] lg:w-[50%] relative">
            <div className="relative pb-[56.25%] h-0">
              <iframe
                src={activeVideo}
                title="YouTube video player"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-full text-xs"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileappProjects;
