import React from 'react';
import Card from "react-bootstrap/Card";
import { Button } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup'
import photoAllergy from "../../assets/projects/allergy-free.jpg";
import photoCommerce from "../../assets/projects/e-commerce.jpg";
import imdb from "../../assets/projects/imdb.jpg";
import readme from "../../assets/projects/readme.jpg";
import portfolio from "../../assets/projects/portfolio.jpg";
import employee from "../../assets/projects/screen.jpg";
import beet from "../../assets/projects/beethub.png";


function projectCard() {
    return (
        <CardGroup>
    <Card>
    <Card.Img img width="200" height="200" variant="top" src={beet} />
    <Card.Body>
      <Card.Title>BeetHub</Card.Title>
      <Card.Text>
      A website created with MERN stack. A user can search for albums which uses the spotify API. They can then add albums to their favorites or collections. Users are also able to review albums and leave ratings.
      </Card.Text>
      <Button variant="primary" href="https://blooming-tundra-89879.herokuapp.com/">Website</Button>
    <Button variant="primary" href="https://github.com/heatherviolet/beat-hub.git">Github</Button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img img width="200" height="200" variant="top" src={photoAllergy} />
    <Card.Body>
      <Card.Title>Allergy Free Kitchen</Card.Title>
      <Card.Text>
      An app where you can select ingredients based on common allergies and recieve recipes based on selections.
      </Card.Text>
      <Button variant="primary" href="https://afk-network.herokuapp.com">Website</Button>
    <Button variant="primary" href="https://github.com/JosephJamesCoop/the-allergy-free-kitchen.git">Github</Button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img img width="200" height="200" variant="top" src={photoCommerce} />
    <Card.Body>
      <Card.Title>E-Commerce</Card.Title>
      <Card.Text>
        A backend was created for an e-commerce website using SQL and express.js
      </Card.Text>
    <Button variant="primary" href="https://github.com/heatherviolet/e-commerce-backend.git">Github</Button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img img width="200" height="200" variant="top" src={imdb} />
    <Card.Body>
      <Card.Title>IMDB</Card.Title>
      <Card.Text>
        An app that was created with CSS, HTML, and Javascript. A user is able to search for their favorite movies and TV shows and the streaming service it is available on is shown.
      </Card.Text>
      <Button variant="primary" href="https://emdok.github.io/bang-imdb/">Website</Button>
    <Button variant="primary" href="https://github.com/emdok/bang-imdb.git">Github</Button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img img width="200" height="200" variant="top" src={readme} />
    <Card.Body>
      <Card.Title>README.me Generator</Card.Title>
      <Card.Text>
      A README.me generator that was created with node.js and the user runs the application from the command line.
      </Card.Text>
    <Button variant="primary" href="https://github.com/heatherviolet/README.me-generator.git">Github</Button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img img width="200" height="200" variant="top" src={portfolio} />
    <Card.Body>
      <Card.Title>First Portfolio</Card.Title>
      <Card.Text>
      My portfolio page that I created with CSS and HTML
      </Card.Text>
      <Button variant="primary" href="https://heatherviolet.github.io/professionalportfolio/">Website</Button>
    <Button variant="primary" href="https://github.com/heatherviolet/professionalportfolio.git">Github</Button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img img width="200" height="200" variant="top" src={employee} />
    <Card.Body>
      <Card.Title>Employee Tracker</Card.Title>
      <Card.Text>
      An employee tracker that uses SQL, node.js, and inquirer.
      </Card.Text>
      <Button variant="primary" href="https://watch.screencastify.com/v/LzxPpvQRqkze02klpN1U">Website</Button>
    <Button variant="primary" href="https://github.com/heatherviolet/employee-tracker.git">Github</Button>
    </Card.Body>
  </Card>
</CardGroup>


    );
}

export default projectCard;