import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) { // Adjust the scroll threshold as needed
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`Navbar ${scrolled ? 'scrolled' : ''}`}>
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
