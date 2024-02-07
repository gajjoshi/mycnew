import React from 'react';
import golden from './assets/golden.jpg';
import { Balcony } from '@mui/icons-material';
import './Tape.css';
import photo from './assets/D247.png';


export default function Tape() {
  const backgroundImageStyle = {
    backgroundImage: `url(${golden})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
  };




  const textformat = {
    width: '100%',
    color:"black",
    textAlign: 'center',
    fontWeight: 'bold', // Adjust the font weight here (e.g., 'bold', '600', etc.)
  };
  const textformat2 = {
    color: "white",
    textAlign: 'center',
    
  };

  return (
    <div style={backgroundImageStyle}>
      <footer className="font-bebas flex flex-col justify-center items-center text-white h-60">
      <a href="https://wa.link/d247onlinegaming"> 
  <h1 className="text-3xl lg:text-5xl mb-2 text-animation">CLICK NOW FOR WHATSAPP</h1>
</a>
        <div style={textformat}>

        <h1 className="text-3xl lg:text-5xl mb-2">JOIN WITH</h1>
        </div>
        <div style={textformat2}>
        <a href="https://wa.link/d247onlinegaming"> 


        <img style={{height:"10vh"}} src={photo} alt="Description of the image" />
        </a>
        </div>
      </footer>
    </div>
  );
}
