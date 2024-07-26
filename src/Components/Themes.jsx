import React, { useEffect, useRef } from 'react';
import './themes.css';

const Themes = () => {
  const themes = [
    { id: 1, img: "./public/1.png", title: "Open Innovation", desc: "Collaborate across boundaries to devise innovative solutions that challenge norms and drive progress." },
    { id: 2, img: "./public/2.png", title: "Open Innovation", desc: "Collaborate across boundaries to devise innovative solutions that challenge norms and drive progress." },
    { id: 3, img: "./public/3.png", title: "Open Innovation", desc: "Collaborate across boundaries to devise innovative solutions that challenge norms and drive progress." },
    { id: 4, img: "./public/4.png", title: "Open Innovation", desc: "Collaborate across boundaries to devise innovative solutions that challenge norms and drive progress." },
    { id: 5, img: "./public/5.png", title: "Open Innovation", desc: "Collaborate across boundaries to devise innovative solutions that challenge norms and drive progress." },
    { id: 6, img: "./public/6.png", title: "Open Innovation", desc: "Collaborate across boundaries to devise innovative solutions that challenge norms and drive progress." },
    { id: 7, img: "./public/7.png", title: "Open Innovation", desc: "Collaborate across boundaries to devise innovative solutions that challenge norms and drive progress." },
    { id: 8, img: "./public/8.png", title: "Open Innovation", desc: "Collaborate across boundaries to devise innovative solutions that challenge norms and drive progress." },
    { id: 9, img: "./public/9.png", title: "Open Innovation", desc: "Collaborate across boundaries to devise innovative solutions that challenge norms and drive progress." },
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
    <>
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
    </>
  );
}

export default Themes;
