import React from "react";
import photoAllergy from "../../assets/projects/allergy-free.jpg";
import photoCommerce from "../../assets/projects/e-commerce.jpg";
import photoImdb from "../../assets/projects/imdb.jpg";
import ProjectCard from "../../components/Projects/ProjectCard.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Projects() {
  return (
    <Container>
        <Row>
      <h1>Projects</h1>
      <ProjectCard />
      <div>
      <img
            src={photoAllergy} alt="Projects"
            className="img-thumbnail mx-1"
          />
      </div>
      <p></p>
      </Row>
    </Container>
  );
}
export default Projects;