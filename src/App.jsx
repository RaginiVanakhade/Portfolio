import { useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { WiMoonAltNew } from "react-icons/wi";
import "../src/style/style.css";
import MainSeaction from "./components/MainSeaction";
import { AiFillLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const App = () => {
  const headerName = ["Home", "Skills", "Experience", "Projects", "Achievements"];
  const [isDarkMode, setIsDarkMode] = useState(false);

  const footerIcons = [
    { icon: <AiFillLinkedin />, link: "https://www.linkedin.com/in/ragini-vankhade-079b552b7" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/ragini_vankhade" },
    { icon: <BsGithub />, link: "https://github.com/RaginiVanakhade" },
  ];

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
      <div></div>
      <MainSeaction footerIcons={footerIcons}  />

      {/* FOOTER */}
      {/* <footer className="w-full py-10 px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-lgdark:bg-gray-800 mt-20">
        <a href="mailto:raginivankhade1203@gmail.com" className="text-lg font-medium dark:text-gray-300">
          raginivankhade1203@gmail.com
        </a>
      </footer> */}

    </div>
  );
};

export default App;
