import { useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { WiMoonAltNew } from "react-icons/wi";
import { AiFillLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import "../src/style/style.css";
import myprofile from "./assets/myprofile.jpeg";

const App = () => {
  const headerName = ["Home", "Skills", "Experience", "Projects", "Achievements"];
  const footerIcons = [
    {
      icon: <AiFillLinkedin />,
      link: "https://www.linkedin.com/in/ragini-vankhade-079b552b7",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/ragini_vankhade",
    },
    {
      icon: <BsGithub />,
      link: "https://github.com/RaginiVanakhade",
    },
  ];

  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={isDarkMode ? "dark bg-black text-white" : "bg-white text-black"} id="main">
      {/* HEADER */}
      <header className="w-full py-6 px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left */}
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-semibold whitespace-nowrap">Ragini Vanakhade</h1>

          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="flex items-center gap-1 text-xl cursor-pointer border border-gray-300 p-1 rounded-3xl hover:bg-gray-200 dark:hover:bg-orange-400"
          >
            {isDarkMode ? <WiMoonAltNew /> : <FaRegMoon />}
          </button>
        </div>

        {/* Right */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <ul className="flex flex-wrap items-center justify-center gap-4 text-lg">
            {headerName.map((name, index) => (
              <li key={index} className="cursor-pointer hover:text-gray-500 dark:hover:text-gray-300">
                {name}
              </li>
            ))}
          </ul>

          <button className="px-5 py-2 bg-yellow-400 text-black rounded-full shadow-md hover:bg-yellow-300">
            Contact
          </button>
        </div>
      </header>

      {/* MAIN SECTION */}
      <section className="w-full flex flex-col-reverse md:flex-row justify-around items-center px-6 md:px-10 py-10 md:py-20 gap-10">
        {/* LEFT CONTENT */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I Am <br />
            <span className="text-yellow-500">Ragini Vanakhade</span>
          </h1>

          <p className="mt-4 text-gray-600 dark:text-gray-300 text-base md:text-lg">
            I am a front-end developer with a passion for creating beautiful and functional user interfaces.
          </p>

          <button className="mt-6 px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-lg rounded-full shadow-lg hover:opacity-90">
            Hire Me
          </button>

          {/* Icons */}
          <div className="flex gap-6 mt-10 text-3xl text-yellow-500 justify-center md:justify-start">
            {footerIcons.map((icon, index) => (
              <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer">
                {icon.icon}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden shadow-lg relative">
          <img src={myprofile} alt="profile" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full py-10 px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6 bg-gray-100 dark:bg-gray-800 mt-20">
        <a href="mailto:raginivankhade1203@gmail.com" className="text-lg font-medium dark:text-gray-300">
          raginivankhade1203@gmail.com
        </a>

        <div className="flex gap-6 text-2xl text-gray-700 dark:text-gray-300">
          {footerIcons.map((icon, index) => (
            <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer">
              {icon.icon}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default App;