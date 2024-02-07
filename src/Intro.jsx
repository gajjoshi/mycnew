// Intro.js
import React from 'react';
import bgImage from './assets/D247a.png'; // Replace 'your_image.jpg' with your actual image file path
import bgVideo from './assets/casino3.mp4';
import './intro.css';


export default function Intro() {
  return (
    <div className='video-cont'>
      <div className="overlay"></div>
      <video autoPlay loop muted className="video">
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="bg-image" style={{alignContent:"center"}}>
      <a href="https://wa.link/d247onlinegaming"> 
      <img src={bgImage} alt="" />
      </a>
      </div>
      <div className='content'>
      </div>
    </div>
  );
}
