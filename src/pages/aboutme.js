import React from 'react';
import Digital from '../images/Digital.jpg';

const skills = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML & CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "ReactJs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Tailwindcss", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  { name: "CorelDRAW", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968528.png" },
  { name: "Social Media Management", icon: "https://cdn-icons-png.flaticon.com/512/124/124034.png" },
  { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "UI/UX", icon: "https://cdn-icons-png.flaticon.com/512/5948/5948554.png" },
  { name: "Data Analysis", icon: "https://cdn-icons-png.flaticon.com/512/2742/2742383.png" },
  { name: "Adobe Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg" },
  { name: "Adobe Premiere", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968551.png" },
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
];

const AboutMe = () => {
  return (
    <div className="p-8 text-gray-800">
      {/* Header Section */}
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold">About Me</h1>
      </section>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Profile Image */}
        <div className="w-full">
          <img
            src={Digital}
            alt="Fagbohun Olatomide Samuel"
            loading="lazy" // Enable lazy loading
          />
        </div>

        {/* Text Content */}
        <div className="space-y-12">
          <h2 className="text-4xl font-bold mb-4">Hello, I'm Fagbohun Olatomide Samuel.</h2>
          <p className="text-2xl mb-4">
            Well, if you're here, you already know me. You know I don't settle for less; if I do it, I do it right.
          </p>

          <p className="text-2xl mb-4 leading-relaxed">
            My name is Fagbohun Olatomide Samuel. I'm a Software Developer, WordPress Developer, and Digital Marketer based in Lagos, Nigeria. I specialize in creating functional and visually appealing websites and implementing effective digital marketing strategies. Currently,{' '}
            <span className="font-semibold text-2xl text-blue-600">
              I’m looking for a role where I can put my skills to good use and work on meaningful projects.
            </span>
          </p>

          <h3 className="text-4xl font-semibold mb-2">Lifelong Learner</h3>
          <p className="text-2xl leading-relaxed">
            Alongside my career in tech, I continue to learn and grow, seizing opportunities to improve my skills and create value in my field.
          </p>

          {/* My Tech Stack Section */}
          <div className="p-8">
            {/* Top Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-8 shadow-2xl rounded-lg text-center hover:shadow-3xl transform hover:scale-105 transition duration-300">
                <div className="mb-4">
                  <i className="text-3xl">💻</i> {/* Replace with a proper icon */}
                </div>
                <h3 className="text-2xl font-bold">Stack</h3>
                <p>HTML, CSS, Javascript, React</p>
              </div>

              <div className="bg-white p-8 shadow-2xl rounded-lg text-center hover:shadow-3xl transform hover:scale-105 transition duration-300">
                <div className="mb-4">
                  <i className="text-3xl">🎓</i> {/* Replace with a proper icon */}
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
                <p>Microbiology</p>
                <p>University of Ibadan</p>
              </div>

              <div className="bg-white p-8 shadow-2xl rounded-lg text-center hover:shadow-3xl transform hover:scale-105 transition duration-300">
                <div className="mb-4">
                  <i className="text-3xl">📁</i> {/* Replace with a proper icon */}
                </div>
                <h3 className="text-2xl font-bold">Projects</h3>
                <a 
                href="/myprojects" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Click to View All My Projects
              </a>
              </div>
            </div>

            {/* Tech Stack Section */}
            <div>
              <h2 className="text-2xl font-bold mb-8">My Tech Stack</h2>
              <div className="grid grid-cols-3 md:grid-cols-7 gap-6">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
