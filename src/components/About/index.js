import React from 'react';
import selfImage from "../../assets/self/self.jpg";


function About() {
  return (
    <section className="main-page">      
<div class="about-me">
    <div class="self-img">
      
        <img src={selfImage} style={{ width: "25%", border: "1px solid white", float: "left",  }} class="img-fluid img-center" alt="cover" />
    </div>
    </div>
    <div class="about-section">  
        <div class="card-block px-2">
        <h3 id="about" class="text-dark"
        style={{ fontSize: "30px"}}>Full Stack Web Developer</h3>
            <p className="card-text text-light text-right" 
            style={{ fontSize: "15px"}}> I am originally from Phoenix, Arizona and I moved to Portland two years ago with my daughter. I enjoy exploring all of the nature around Oregon. I currently work for Instacart as a personal shopper and have been throughout the pandemic.</p>
        </div>
    </div>

    
    </section>
  );
}

export default About;
