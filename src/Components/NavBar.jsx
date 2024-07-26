import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className='Navbar'>
      <img src="https://i.postimg.cc/nL6YC87Q/logo.png" alt="Logo" className='logo'/>
      <button className='menu-toggle' onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navigation ${isOpen ? 'open' : ''}`}>
        <li onClick={() => setIsOpen(false)}>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <Link to="collab" smooth={true} duration={500}>
            Collaborators
          </Link>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
