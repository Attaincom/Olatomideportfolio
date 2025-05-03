import React from "react";

const ProjectCard = ({
  title,
  description,
  buttonText,
  bgColor = "bg-white",
  textColor = "text-gray-600",
  btnBorderColor = "border-black",
  btnHoverBgColor = "hover:bg-black",
  btnHoverTextColor = "hover:text-white",
  link, // New property for the URL
}) => {
  return (
    <div className={`${bgColor} text-center p-8 shadow-md rounded-lg`}>
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className={`${textColor} text-2xl mb-6`}>{description}</p>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button
            className={`border-2 ${btnBorderColor} px-6 py-2 rounded-lg text-xl ${btnHoverBgColor} ${btnHoverTextColor} transition`}
          >
            {buttonText}
          </button>
        </a>
      ) : (
        <button
          className={`border-2 ${btnBorderColor} px-6 py-2 rounded-lg text-xl ${btnHoverBgColor} ${btnHoverTextColor} transition`}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

const MyProjects = () => {
  const projects = [
    {
      title: "Website Development",
      description:
        "I create dynamic web applications, with a focus on using React.js as my primary framework for building efficient and scalable solutions.",
      buttonText: "See My Web Projects →",
      link: "/reactprojects", // Add the link here
    },
    {
      title: "Graphic Design & Digital Content",
      description:
        "I create visually appealing designs and digital content, including short videos and graphics to elevate brands.",
      buttonText: "Explore My Designs →",
      bgColor: "bg-brown-500",
      textColor: "text-white",
      btnBorderColor: "border-white",
      btnHoverBgColor: "hover:bg-white",
      btnHoverTextColor: "hover:text-blue-500",
      link: "/graphics",
    },
    {
      title: "WordPress Development",
      description:
        "I specialize in building and customizing WordPress websites to create dynamic, user-friendly experiences tailored to your needs.",
      buttonText: "View My WordPress Projects →",
      link: "/wordpress",
    },
    {
      title: "UI/UX Design",
      description:
        "I focus on designing intuitive and engaging user interfaces that enhance the user experience.",
      buttonText: "Check My UI/UX Work →",
      bgColor: "bg-brown-500",
      textColor: "text-white",
      btnBorderColor: "border-white",
      btnHoverBgColor: "hover:bg-white",
      btnHoverTextColor: "hover:text-blue-500",
    },
    {
      title: "PHP Development",
      description:
        "I develop and customize PHP-based websites, offering robust and flexible solutions for your business needs.",
      buttonText: "Explore My PHP Projects →",
    },
    {
      title: "Mobile App Design",
      description:
        "I design and develop mobile applications that deliver seamless user experiences on both Android and iOS platforms.",
      buttonText: "See My Mobile App Designs →",
      bgColor: "bg-brown-500",
      textColor: "text-white",
      btnBorderColor: "border-white",
      btnHoverBgColor: "hover:bg-white",
      btnHoverTextColor: "hover:text-blue-500",
      link: "/mobile",
    },
    {
      title: "Motion Graphics & Animation",
      description:
        "I create engaging motion graphics and animations to make your content stand out and captivate your audience.",
      buttonText: "Discover My Motion Graphics →",
    },
    {
      title: "Data Analysis",
      description:
        "I analyze and interpret data to extract valuable insights that can guide decision-making and optimize processes.",
      buttonText: "Check Out My Data Projects →",
      bgColor: "bg-brown-500",
      textColor: "text-white",
      btnBorderColor: "border-white",
      btnHoverBgColor: "hover:bg-white",
      btnHoverTextColor: "hover:text-blue-500",
    },
    {
      title: "Backend Development",
      description:
        "I create robust backend systems, ensuring scalability, security, and performance for your applications.",
      buttonText: "See My Backend Projects →",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-12">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default MyProjects;
