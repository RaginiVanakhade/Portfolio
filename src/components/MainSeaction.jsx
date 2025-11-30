import PropTypes from "prop-types";
import myprofile from "../assets/myprofile.jpeg";

const MainSeaction = ({ footerIcons }) => {
  return (
    <div>
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
            {footerIcons.map((item, index) => (
              <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden shadow-lg relative">
          <img src={myprofile} alt="profile" className="w-full h-full object-cover" />
        </div>
      </section>
    </div>
  );
};

MainSeaction.propTypes = {
  footerIcons: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MainSeaction;
