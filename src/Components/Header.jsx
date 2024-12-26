import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='md:w-full bg-gray-900 h-16'>
      <ul className='flex md:justify-end sm:justify-center space-x-6 p-4 text-xl'>
        <li className=''>
          <NavLink 
            to="/home" 
            className={({ isActive }) => 
              `${isActive ? 'text-red-600' : 'text-white hover:text-white'}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `${isActive ? 'text-red-600' : 'text-white hover:text-white'}`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `${isActive ? 'text-red-600' : 'text-white hover:text-white'}`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
