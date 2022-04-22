import React from 'react';
import selfImage from "../../assets/self/self.jpg";
import Card from "react-bootstrap/Card";
import cover from "../../assets/cover/space.jpg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about" class="border border-primary text-center text-primary">About Me</h1>
      
      <img src={cover} class="border border-primary" className="my-2" style={{ width: "100%" }} alt="cover" />
      
        
<div class="card">
<div class="row no-gutters">
    <div class="col-auto">
        <img src={selfImage} style={{ width: "25%" }} class="img-fluid" alt="cover" />
    </div>
    <div class="col">
        <div class="card-block px-2">
            <p className="card-text text-light text-right"> I am originally from Phoenix, Arizona and I moved to Portland two years ago with my daughter. I enjoy exploring all of the nature around Oregon. I currently work for Instacart as a personal shopper and have been throughout the pandemic.</p>
        </div>
    </div>
</div>
      </div>
    </section>
  );
}

export default About;
