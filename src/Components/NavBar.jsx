import React from 'react'
import './Navbar.css'
const NavBar = () => {
  return (
    <div className='Navbar'>
      <img src="public\logo.png" alt="" className='logo'/>
      <ul className='navigation'>
        <li>Home</li>
        <li>About</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default NavBar
