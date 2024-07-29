import React from 'react'
import './HeroSection.css'
import Countdown from 'react-countdown';
const HeroSection = () => {
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a message if the countdown is complete
          return <span>Time&apos;s up!</span>;
        } else {
          // Render the countdown timer in days:hours:mins:secs format
          return (
            <div className='countdown-timer' style={{ fontSize: '3rem', textAlign: 'center' }}>
                <div className='timer-details'><span className='time-span'>&nbsp;{days.toString().padStart(2, '0')}&nbsp;:</span><span className='timer-text'>Days</span></div>
                <div className='timer-details'><span className='time-span2'>&nbsp;{hours.toString().padStart(2, '0')}&nbsp;:</span><span className='timer-text'>Hours</span></div>
                <div className='timer-details'><span className='time-span3'>&nbsp;{minutes.toString().padStart(2, '0')}&nbsp;:</span><span className='timer-text'>Minutes</span></div>
                <div className='timer-details'><span className='time-span4'>{seconds.toString().padStart(2, '0')}</span> <span className='timer-text t2'>Seconds</span></div>
            </div>
          );
        }
      };
    const targetDate = new Date('2024-09-12T23:59:59');
  return (
    <div className='hero-section'>
      <div className='hero-content'>
        <h4 className='society-name'>&lt;<span>GFG</span> ADGIPS Chapter/&gt;</h4>
        <p className='d-para'>PRESENTS</p>
        <h1 className='eventName'><span>Live</span><br/> The Code 3.0</h1>
        <p className='event-desc-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, expedita!</p>
        <button className='register-btn'>Register Now!</button>
      </div>
      <div className='hero-banner'>
        <Countdown 
          date={targetDate}
          renderer={renderer}
        />
      </div>
    </div>
  )
}

export default HeroSection
