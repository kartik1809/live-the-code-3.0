import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import CodeIcon from '@mui/icons-material/Code';
import LaptopIcon from '@mui/icons-material/Laptop';
import StarIcon from '@mui/icons-material/Star';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import './TimeLine.css';

const TimelineComponent = () => {
  return (
    <div  className='timeline'>
      <h1 className='timeline-heading'>Timeline</h1>
      <VerticalTimeline>
        {/* Timeline Element for Work Experience */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<HowToRegIcon/>}
        >
          <div className="timeline-div">
            <h3 className="vertical-timeline-element-title">Registration Begins</h3>
            <h4 className="vertical-timeline-element-subtitle">10 August 2024</h4>
            <p></p>
          </div>
        </VerticalTimelineElement>

        {/* Timeline Element for Work Experience */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<CodeIcon/>}
        >
          <div className="timeline-div">
            <h3 className="vertical-timeline-element-title">Speaker Session</h3>
            <h4 className="vertical-timeline-element-subtitle">04 September 2024</h4>
            {/* <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit quas dolore id nesciunt accusantium soluta!
            </p> */}
          </div>
        </VerticalTimelineElement>

        {/* Timeline Element for Work Experience */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<LaptopIcon/>}
        >
          <div className="timeline-div">
            <h3 className="vertical-timeline-element-title">Orientation</h3>
            <h4 className="vertical-timeline-element-subtitle">11 September 2024</h4>
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, cumque.
            </p> */}
          </div>
        </VerticalTimelineElement>

        {/* Timeline Element for Work Experience */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<StarIcon/>}
        >
          <div className="timeline-div">
            <h3 className="vertical-timeline-element-title">24 Hour Coding Period</h3>
            <h4 className="vertical-timeline-element-subtitle">13 September 2024</h4>
            {/* <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, quasi?
            </p> */}
          </div>
        </VerticalTimelineElement>

        {/* Timeline Element for Education */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<EmojiEventsIcon/>}
        >
          <div className="timeline-div">
            <h3 className="vertical-timeline-element-title">Pitch</h3>
            <h4 className="vertical-timeline-element-subtitle">17 September 2024</h4>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, nobis!
            </p> */}
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<EmojiEventsIcon/>}
        >
          <div className="timeline-div">
            <h3 className="vertical-timeline-element-title">Result Declaration</h3>
            <h4 className="vertical-timeline-element-subtitle">19 September 2024</h4>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, nobis!
            </p> */}
          </div>
        </VerticalTimelineElement>
        {/* End Element */}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<CheckCircleOutlineIcon/>}
        ></VerticalTimelineElement>
      </VerticalTimeline>
      <div className='ellipse3'></div>
    </div>
  );
};

export default TimelineComponent;
