import React from 'react'
import './Collaborators.css'
import Carousel from './Carousel';
const Collaborators = () => {
    const collaborators = [
        { src: '/src/assets/anvesh.png', alt: 'Anvesh' },
        { src: '/src/assets/cc_abes.png', alt: 'CC ABES' },
        { src: '/src/assets/cc_bv.png', alt: 'CC BV' },
        { src: '/src/assets/cc_mit.png', alt: 'CC MIT' },
        { src: '/src/assets/cdao.png', alt: 'CDAO' },
        { src: '/src/assets/csi.png', alt: 'CSI' },
        { src: '/src/assets/eve.png', alt: 'EVE' },
        { src: '/src/assets/gdsc.png', alt: 'GDSC' },
        { src: '/src/assets/gfg_abes.png', alt: 'GFG ABES' },
        { src: '/src/assets/gfg.png', alt: 'GFG' },
        { src: '/src/assets/iee.png', alt: 'IEE' },
    ];
  return (
    <div className='collaborators'>
      <h1 className='collab-heading'>COLLABORATORS</h1>
      {/* <div className='collaborator-div'>
        <img src="src\assets\anvesh.png" alt=""  className='collab-list'/>
        <img src="src\assets\cc_abes.png" alt=""  className='collab-list'/>
        <img src="src\assets\cc_bv.png" alt=""  className='collab-list'/>
        <img src="src\assets\cc_mit.png" alt=""  className='collab-list'/>
        <img src="src\assets\cdao.png" alt=""  className='collab-list'/>
        <img src="src\assets\csi.png" alt=""  className='collab-list'/>
        <img src="src\assets\eve.png" alt=""  className='collab-list'/>
        <img src="src\assets\gdsc.png" alt=""  className='collab-list'/>
        <img src="src\assets\gfg_abes.png" alt=""  className='collab-list'/>
        <img src="src\assets\gfg.png" alt=""  className='collab-list'/>
        <img src="src\assets\iee.png" alt=""  className='collab-list'/>
      </div> */}
      <div className="carousel-container">
      <div className="carousel-inner">
        {collaborators.map((collab, index) => (
          <img
            key={index}
            src={collab.src}
            alt={collab.alt}
            className="collab-list"
          />
        ))}
        {/* Duplicate items for continuous scrolling */}
        {collaborators.map((collab, index) => (
          <img
            key={`dup-${index}`}
            src={collab.src}
            alt={collab.alt}
            className="collab-list"
          />
        ))}
      </div>
    </div>
    </div>
  )
}

export default Collaborators
