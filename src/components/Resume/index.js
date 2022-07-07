import React from 'react';
import html from "../../assets/resume/html.png";
import css from "../../assets/resume/css.png";
import js from "../../assets/resume/javascript.png";
import api from "../../assets/resume/API.png";
import express from "../../assets/resume/express.jpg";
import mongo from "../../assets/resume/mongodb.jpg";
import node from "../../assets/resume/node.jpg";
import sql from "../../assets/resume/sql.jpg";
import { Container, Row, Col } from 'react-grid-system';

function Resume() {
  return (
    
      <div className="my-2">
      <button data-testid="button" class="button" type="submit"
          style={{
            display: 'block',
            margin: 'auto', 
            color: '#32434d',
            width: '20%',
            backgroundColor: 'lightblue',
            padding: '10px',
            borderRadius: '5px',
      
          }}  
          >
        <a href="https://docs.google.com/document/d/1Xpe9hrLXaVTfMss4P0QF7_HHLkAtcgKM2zkETvbgLek/edit?usp=sharing"
          style={{
            textDecoration: 'none',
          }}>
            Resume
            </a>
        </button>
        <Container>
        
    <h2 style={{
      color: '#f3a847',
      margin: '20px'
    }}>Languages</h2>
  <Row>
  <Col>
    <img src={html} class="border border-primary" className="my-2" style={{ 
      width: "40%",
      borderRadius: '35%'}} alt="htmlicon" />
    </Col>
    <Col>
    <img src={css} class="border border-primary" className="my-2" style={{ 
      width: "40%",
      borderRadius: '35%'}} alt="cssicon" />
      </Col>
      <Col>
    <img src={js} class="border border-primary" className="my-2" style={{ 
      width: "40%", 
      borderRadius: '35%'}} alt="jsicon" />
      </Col>
      <Col>
    <img src={api} class="border border-primary" className="my-2" style={{ 
      width: "40%", 
      borderRadius: '35%'}} alt="apiicon" />
      </Col>
    </Row>
    <Row>
      <Col>
    <img src={express} class="border border-primary" className="my-2" style={{ 
      width: "40%",
      borderRadius: '35%' }} alt="expressicon" />
      </Col>
      <Col>
    <img src={mongo} class="border border-primary" className="my-2" style={{ 
      width: "40%",
      borderRadius: '35%' }} alt="mongoicon" />
      </Col>
      <Col>
    <img src={node} class="border border-primary" className="my-2" style={{ 
      width: "40%",
      borderRadius: '35%' }} alt="nodeicon" />
      </Col>
      <Col>
    <img src={sql} class="border border-primary" className="my-2" style={{ 
      width: "40%",
      borderRadius: '35%' }} alt="sqlicon" />
      </Col>
  </Row>

</Container>
 </div>     
  );
}



export default Resume;