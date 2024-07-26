import React, { useState } from 'react';
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
        <li>Home</li>
        <li>About</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default NavBar;
