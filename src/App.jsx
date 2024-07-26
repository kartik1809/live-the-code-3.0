import { useState } from 'react'
import React, { Component } from "react";
import Plx from "react-plx";
import NavBar from './Components/NavBar';
import HeroSection from './Components/HeroSection';
import TimeLine from './Components/TimeLine';
import About from './Components/About';
import Themes from './Components/Themes';
import Sponsor from './Components/Sponsor';
function App() {
  const parallaxData = [
    {
      start: 0,
      end: 300,
      properties: [
        {
          startValue: 1,
          endValue: 1.3,
          property: "scale",
        },
      ],
    },
  ];

  return (
    <>
      <NavBar/>
      
      <div className='plx-effect'>
        <Plx className="MyAwesomeParallax" parallaxData={parallaxData}>
          <div className='ellipse1'></div>
          <div className='ellipse2'></div>
          <HeroSection/>
        </Plx>
      </div>
      <TimeLine/>
      <div className='brochure'><img src="https://i.postimg.cc/HxYW0nQG/dummy-brochure.png" alt="brochure" /></div>
      <About/>
      <div className='ellipse4'></div>
      <Themes/>
      <div className='ellipse5'></div>
      <Sponsor/>
      <div className='dummy'></div>
    </>
  )
}

export default App
