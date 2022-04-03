import React from 'react';
import Card from "react-bootstrap/Card";
import { Button } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';

function projectCard() {
  
    return (
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      {props.description}
    </Card.Text>
    <Button variant="primary" href={props.website}>Website</Button>
    <Button variant="primary" href={props.github}>Github</Button>
  </Card.Body>
</Card>
    );
}

export default projectCard;