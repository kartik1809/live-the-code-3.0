import React, { useEffect, useRef } from 'react';
import './themes.css';

const Themes = () => {
  const themes = [
    { id: 1, img: "https://i.postimg.cc/pX692fKm/1.png", title: "SUSTAINABLITY", desc: "This event challenges participants to develop creative solutions that promote sustainability and address pressing environmental issues" },
    { id: 2, img: "https://i.postimg.cc/tg0Y69Sy/2.png", title: "FINTECH", desc: "Disrupt finance with digital solutions like mobile banking, blockchain applications, and automated advisors." },
    { id: 3, img: "https://i.postimg.cc/52QXjXmn/3.png", title: "GAMES", desc: "From fantasy realms and futuristic worlds to historical settings and abstract concepts, the possibilities are endless." },
    { id: 4, img: "https://i.postimg.cc/pTRr0qM6/4.png", title: "WEB 3.0", desc: "Shape the decentralized internet with blockchain-powered applications that prioritize privacy and security." },
    { id: 5, img: "https://i.postimg.cc/R0cqQ2yt/5.png", title: "ED TECH", desc: "Transform learning through tech innovations, from personalized education platforms to interactive resources." },
    { id: 6, img: "https://i.postimg.cc/mZdkwYXm/7.png", title: "AR/VR", desc: "Immerse users in virtual realms, creating new experiences that blur the line between real and digital worlds." },
    { id: 7, img: "https://i.postimg.cc/MHrGpwMC/8.png", title: "HEALTH", desc: "Revolutionize healthcare through data-driven diagnostics, telemedicine, and advancements in patient care." },
    { id: 8, img: "https://i.postimg.cc/X7pJDrt4/9.png", title: "OPEN INNOVATION", desc: "Collaborate across boundaries to devise innovative solutions that challenge norms and drive progress." },
    { id: 9, img: "https://i.postimg.cc/X7pJDrt4/9.png", title: "OPEN INNOVATION", desc: "Collaborate across boundaries to devise innovative solutions that challenge norms and drive progress." },
  ];

  const observeRef = useRef([]);

  useEffect(() => {
    const options = {
      root: null, // Use viewport
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% of the item is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing after the item is visible
        }
      });
    }, options);

    observeRef.current.forEach(item => observer.observe(item));
    
    // Cleanup observer on component unmount
    return () => {
      observeRef.current.forEach(item => observer.unobserve(item));
    };
  }, []);

  return (
    <div className='themes-div'>
      <h1 className='themes-heading'>Themes</h1>
      <p className='head-line'>Mark the Dates to set yourself on fire</p>
      <div className="theme-comp">
        <div className="themes">
          {themes.map((theme, index) => (
            <div
              className="theme-item"
              key={theme.id}
              ref={el => observeRef.current[index] = el} // Attach the ref
            >
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={theme.img} alt={`Icon ${theme.id}`} />
                    <h1>{theme.title}</h1>
                  </div>
                  <div className="flip-card-back">
                    <p>{theme.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Themes;
