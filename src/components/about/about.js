import React from "react";

const skills = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML & CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "ReactJs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Tailwindcss", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  { name: "CorelDRAW", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968528.png" },
  { name: "CapCut", icon: "https://cdn-icons-png.flaticon.com/512/8142/8142805.png" },
  { name: "Social Media Management", icon: "https://cdn-icons-png.flaticon.com/512/124/124034.png" }, // Updated icon for Social Media Management
  { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "UI/UX", icon: "https://cdn-icons-png.flaticon.com/512/5948/5948554.png" }, // Replace with your preferred UI/UX icon
  { name: "Data Analysis", icon: "https://cdn-icons-png.flaticon.com/512/2742/2742383.png" }, // Replace with Data Analysis icon
  { name: "Adobe Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg" },
  { name: "Adobe Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-line.svg" },
  { name: "Adobe Premiere", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968551.png" }, // Updated icon for Adobe Premiere
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
];

const SkillsSection = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-brown mb-4">My Skills</h2>
        <p className="text-gray-600 mb-8">
        My education has equipped me with a solid foundation in web development, graphic design, and digital marketing. In addition, I have dedicated significant time to
        applying these skills across various real-world projects, focusing on creating engaging websites, designing visually appealing graphics, optimizing online presence, and developing WordPress solutions. </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="h-12 w-12 mb-2"
              />
              <p className="text-gray-800 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
