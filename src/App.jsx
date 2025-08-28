import { FaRegMoon } from "react-icons/fa";
import { WiMoonAltNew } from "react-icons/wi";
import { AiFillLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { BsGithub } from "react-icons/bs"; 


const App = () => {
  const headerName = ["Home", "Skills", "Experience", "Projects", "Achievements"]
  const footerIcons = [
    {
      icon: <AiFillLinkedin />,
      link: "www.linkedin.com/in/ragini-vankhade-079b552b7"
    },
    {
      icon: <FaInstagram />,
      link: "www.instagram.com/ragini_vankhade"
    },
    {
      icon: <BsGithub />,
      link: "https://github.com/RaginiVanakhade"
    }
  ]

  // const Skills = [
  //   {
  //     icon: "",
  //     name: "Design",
  //     learn: ""
  //   },
  //   {
  //     icon: "",
  //     name: "Development",
  //     learn: ""
  //   },
  //   {
  //     icon: "",
  //     name: "Prompt Engineering",
  //     learn: ""
  //   },
  // ]
  return (
    <>
    <div className="m-2">
      <header>
      <h1>Ragini Vanakhade</h1>
      <div className="flex">
        <FaRegMoon />
      <WiMoonAltNew />
      </div>
      <div>
         <ul>
          <li>{headerName.map((name, index) => <span key={index}>{name}</span>)}</li>
        </ul>
       </div>
        <div><button>Contact</button></div>
</header>
      <div>
        <div>
          <h1>Hi, I Am  <br />Ragini Vanakhade</h1>
          <p>I am a front-end developer with a passion for creating beautiful and functional user interfaces.</p>
          <button  className="rounded-[35px]">Hire Me</button>
        </div>
        <div>
          {footerIcons.map((icon, index) => (
            <a key={index} href={icon.link}>
              {icon.icon}
            </a>
          ))}
        </div>
      </div>
      <footer>
        <a href="mailto:raginivankhade1203@gmail.com">raginivankhade1203@gmail.com</a>
        <div>
          {footerIcons.map((icon, index) => (
            <a key={index} href={icon.link}>
              {icon.icon}
            </a>
          ))}
        </div>
      </footer>
    </div>
    </>
  )
}

export default App