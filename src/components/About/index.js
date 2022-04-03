import React from 'react';
import selfImage from "../../assets/self/self.jpg";
import Card from "react-bootstrap/Card";


function About() {
    return (
      <Card class="card" style={{ width: '30rem' }}>
        <Card.Header>About Me</Card.Header>
        
      <Card.Img variant="top" class="card-img" src={selfImage} style={{ width: "50%" }} />
      <Card.Body>
        <Card.Text>
        I am originally from Phoenix, Arizona and I moved to Portland two years ago with my daughter. I enjoy exploring all of the nature around Oregon. I currently work for Instacart as a personal shopper and have been throughout the pandemic.
        </Card.Text>
      </Card.Body>
    </Card>
    );
  }
  
  export default About;