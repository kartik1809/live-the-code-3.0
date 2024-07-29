import { useState } from 'react'
import React, { Component } from "react";
import Plx from "react-plx";
import NavBar from './Components/NavBar';
import HeroSection from './Components/HeroSection';
import TimeLine from './Components/TimeLine';
import About from './Components/About';
import Themes from './Components/Themes';
import Sponsor from './Components/Sponsor';
import Collaborators from './Components/Collaborators';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import FooterSection from './Components/Footer/FooterSection';
import { Twitter } from '@mui/icons-material';
function App() {
  const parallaxData = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: 1,
          endValue: 1.1,
          property: "scale",
        },
      ],
    },
  ];

  return (
    <>
      <NavBar/>
      <div className='plx-effect' id='home'>
        {/* <Plx className="MyAwesomeParallax" parallaxData={parallaxData}> */}
          <div className='ellipse1'></div>
          <div className='ellipse2'></div>
          <HeroSection/>
        {/* </Plx> */}
      </div>
      <TimeLine/>
      <div className='brochure'><img src="/LTC_GFG_Brochure.png" alt="brochure" /></div>
      <About/>
      <div className='ellipse4'></div>
      <Themes/>
      <div className='ellipse5'></div>
      <Sponsor/>
      <Collaborators/>
      <div className='cta '>
        <h2>Join The Journey</h2>
        <p>Be a part of an exciting Community and embrace the experience.</p>
        <div>
          <button className='btn-1'>Apply-With-Devfolio</button>
          <button className='btn-2'>Join Discord</button>
        </div>
      </div>
      <div className='contact-us' id='contact'>
        <h2>Contact Us</h2>
        <div className="contact-details">
          <div className='email'>
            <h3 className='contact-head'>Email us at:</h3>
            <p>abc@gmail.com</p>
            <p>def@gmail.com</p>
          </div>
          <div className='phone-number'>
            <h3 className='contact-head call-contact'>Call us at:</h3>
            <p className='p-no'>Name: 90238XXXXX</p>
            <p className='p-no'>Name: 35802XXXXX</p>
          </div>
        </div>
      </div>
      <FooterSection/>
    </>
  )
}

export default App
