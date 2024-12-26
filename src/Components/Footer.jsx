import React, { useState } from 'react';
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Footer = () => {

  const footerContent = [
    {
      icon: <FaWhatsapp />,
      name: "whatsup",
      link: "https://wa.me/8433780075", // Replace with your WhatsApp link
    },
    {
      icon: <FaGithub />,
      name: "Github",
      link: "https://github.com/RaginiVanakhade", // Replace with your GitHub profile
    },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/ragini-vankhade-079b552b7/", // Replace with your LinkedIn profile
    },
    {
      icon: <FaInstagram />,
      name: "Instagram",
      link: "https://www.instagram.com/anglicragini1203/", // Replace with your Instagram profile
    },
    {
      icon: <FaEnvelope />,
      name: "Email",
      link: "mailto:raginivanakhade1203@gmail.com", // Replace with your email address
    },
  ];

  return (
    <div className="h-64 rounded-tl-[140px] m-3 bg-gradient-to-r text-center bg-gray-900 text-white">
      <ul className="flex justify-center space-x-4 mt-4 p-6">
        {footerContent.map((item, index) => (
          <li key={index} className="text-white text-2xl">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-red-600 "
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
       <div>
       <h1 className="text-2xl font-serif">Ragini's Portfolio</h1>
       <p>“Self-confidence is a superpower. Once you start believing in yourself, magic starts happening.”</p>
      </div>
    </div>
  );
};

export default Footer;

