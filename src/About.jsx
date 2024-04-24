import React from "react";
import "./About.css";

import photo from './assets/mycircle.png';
import buton from './assets/wp.png';


export default function About() {
  return (
    <div>
      <section id="about"  style={{alignContent: "center"}}>



      <div className="border-2 border-black  m-10" style={{alignContent: "center"}}>
          <div className="lg:flex gap-x-10" style={{alignContent: "center"}}>
            <div className="w-full lg:w-1/2 h-full font-bebas" style={{ alignItems: "center" }}>

              <a href="https://wa.link/mycircle247"> 
              <img src={photo} alt="Description of the image" style={{ width: "100%", maxWidth: "800px", display: "block"}} />
              </a>
              <h1 className="text-5xl md:text-7xl mt-5" style={{ alignContent: "center", color: 'white' }}>AB  JEET PAKKI !</h1>

              
              <button className="border-2 border-white px-5 py-2 text-xl mt-10 hover:bg-yellow hover:text-black hover:border-yellow transition-all font-bebas" style={{ color: "white" }} onClick={() => {
    window.open("https://wa.link/mycircle247", "_blank"); // Replace "your-phone-number" with your actual WhatsApp phone number
  }} >
                <h1 style={{ color: "white" }}>GET ACCOUNT NOW</h1>
              </button>
            </div>
          </div>
        </div>























        <div className="border-2 border-white  m-10" style={{alignContent: "center"}}>
          <div className="lg:flex gap-x-10" style={{alignContent: "center"}}>
            <div className="w-full lg:w-2/4 h-full font-bebas" style={{ alignItems: "center" }}>

            <h1 className="text-5xl md:text-7xl mt-5" style={{ backgroundColor: "white" }}>
  <span className="text-black">JOIN WITH </span>
  <span className="text-red-500">MYCIRCLE</span>
  <span className="text-green-500"> 247</span>

</h1>
  
             
              {/* <p style={{ color: "#ADD8E6", textAlign: "center", fontWeight: 30 ,paddingTop:20,fontSize:"2em"}}>Ab Jeet Pakki</p> */}
              <p style={{ color: "white", textAlign: "center", fontWeight: 50 ,paddingTop:20,fontSize:"6em"}}>MOST</p>
              <p style={{ color: "yellow", textAlign: "center" ,fontSize:"2em" }}>SAFE TRUSTED SECURE</p>
              <button className="border-2 border-white px-5 py-2 text-xl mt-10 hover:bg-yellow hover:text-black hover:border-yellow transition-all font-bebas" style={{ color: "white" }} onClick={() => {
    window.open("https://wa.link/d247onlinegaming", "_blank"); // Replace "your-phone-number" with your actual WhatsApp phone number
  }} >
                <h1 style={{ color: "white" }}>GET ACCOUNT NOW</h1>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
