// import React from "react";

const Skills = () => {
  const skills = [
    { name: "React", color: "#4DB6E6" },
    { name: "Redux", color: "#9B59B6" },
    { name: "JavaScript", color: "#F1C40F" },
    { name: "TypeScript", color: "#3498DB" },
    { name: "HTML", color: "#E67E22" },
    { name: "CSS", color: "#2980B9" },
    { name: "Responsive Web Design", color: "#2980B9" },
    { name: "Node", color: "#27AE60" },
    { name: "MySQL", color: "#1ABC9C" },
    { name: "Git", color: "#E74C3C" },
  ];

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-16 gap-10 px-4 md:px-16">

        {/* Skills Section */}
        <div className="flex flex-wrap gap-3 p-4 w-full md:w-1/2 justify-center md:justify-start">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-[#1a1a1a] text-white px-4 py-2 rounded-full text-sm shadow-md"
            >
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: skill.color }}
              ></span>
              {skill.name}
            </div>
          ))}
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left w-full md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
           Skills <br />
            <span className="text-yellow-500">Front End Developer</span>
          </h1>

          <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg">
            I am a front-end developer with a passion for creating beautiful
            and functional user interfaces.
          </p>
        </div>
        <div className="absolute w-60 h-60 bg-blue-300 rounded-full opacity-40 blur-3xl top-44 left-1/4 hidden md:block"></div>

      </div>
    </>
  );
};

export default Skills;
