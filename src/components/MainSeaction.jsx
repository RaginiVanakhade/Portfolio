import PropTypes from "prop-types";
import myprofile from "../assets/myprofile.jpeg";
import Skills from "./skills";
import Experience from "./Experience";
import Resume from '../assets/Ragini-Vankhade-updated.pdf'

const MainSection = ({ footerIcons }) => {
  return (
   <>
  <div className="relative overflow-hidden">
    {/* MAIN SECTION */}
    <section className="w-full flex flex-col-reverse md:flex-row justify-around items-center px-6 md:px-12 py-12 md:py-20 gap-12 relative z-10">

      {/* LEFT CONTENT */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Hi, I Am <br />
          <span className="text-yellow-500">Ragini Vanakhade</span>
        </h1>

        <p className="mt-4 text-gray-600 dark:text-gray-300 text-base md:text-lg">
          I am a front-end developer with a passion for creating beautiful and functional user interfaces.
        </p>

       <a
  href={Resume}
  download
  className="mt-6 px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-lg rounded-full shadow-lg hover:opacity-90 duration-200 inline-block"
>
  Download CV
</a>
        {/* SOCIAL ICONS */}
        <div className="flex gap-6 mt-10 text-3xl text-yellow-500 justify-center md:justify-start">
          {footerIcons.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {/* PROFILE IMAGE */}
      <div className="relative">
        <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl">
          <img
            src={myprofile}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>

    {/* FLOATING BLURS */}
    <div className="absolute w-60 h-60 bg-blue-300 rounded-full opacity-40 blur-3xl top-44 left-1/4 hidden md:block"></div>
    <div className="absolute w-60 h-60 bg-pink-300 rounded-full opacity-40 blur-3xl top-16 right-1/4 hidden md:block"></div>

    {/* FLOATING EMOJIS */}
    <div className="absolute top-12 left-5 text-4xl xs:text-5xl md:text-6xl shadow-xl rounded-full shadow-yellow-200">
      😘
    </div>
    <div className="absolute bottom-12 right-6 text-4xl xs:text-5xl md:text-6xl shadow-xl rounded-full shadow-yellow-200">
      🤩
    </div>

    <div className="hidden sm:block absolute top-10 right-10 text-5xl md:text-6xl shadow-yellow-200 shadow-xl rounded-full">
      🥰
    </div>

    <div className="hidden sm:block absolute bottom-5 left-16 text-5xl md:text-6xl shadow-yellow-200 shadow-xl rounded-full">
      🦋
    </div>

    <div className="hidden sm:block absolute bottom-20 right-96 text-5xl md:text-6xl shadow-yellow-200 shadow-xl rounded-full">
      🫣
    </div>

    <div className="hidden sm:block absolute bottom-10 right-1/2 text-5xl md:text-6xl shadow-yellow-200 shadow-xl rounded-full">
      😎
    </div>
  </div>

  {/* SKILLS SECTION - PERFECTLY CENTERED */}
  <div id="skills" className="w-full flex justify-center mt-16 mb-10 px-6">
    <Skills />
  </div>

<div id="experience" className="w-full flex justify-center mt-16 mb-10 px-6">
  <Experience />
  </div>
</>

        
  );
};

MainSection.propTypes = {
  footerIcons: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MainSection;
