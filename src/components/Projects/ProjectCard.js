import React from 'react';
import Card from "react-bootstrap/Card";
import { Button } from 'react-bootstrap';
import photoAllergy from "../../assets/projects/allergy-free.jpg";

function projectCard() {
    return (
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={photoAllergy} />
  <Card.Body>
    <Card.Title>Allergy Free Kitchen</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Website</Button>
    <Button variant="primary">Github</Button>
  </Card.Body>
</Card>
    );
}

export default projectCard;