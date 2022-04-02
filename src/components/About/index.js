import React from 'react';
import selfImage from "../../assets/self/self.jpg";


function About() {
    return (
      <section className="my-5">
        <h1 id="about">About</h1>
        <img src={selfImage} className="my-2" style={{ width: "25%", float: "left" }} alt="self" />
        <div className="my-2">
          <p>
          I am originally from Phoenix, Arizona and I moved to Portland two years ago with my daughter. I enjoy exploring all of the nature around Oregon. I currently work for Instacart as a personal shopper and have been throughout the pandemic.
          </p>
        </div>
      </section>
    );
  }
  
  export default About;