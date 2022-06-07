import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import html from "../../assets/resume/html.png";
import css from "../../assets/resume/css.png";
import js from "../../assets/resume/javascript.png";
import api from "../../assets/resume/API.png";
import express from "../../assets/resume/express.jpg";
import mongo from "../../assets/resume/mongodb.jpg";
import node from "../../assets/resume/node.jpg";
import sql from "../../assets/resume/sql.jpg";

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
        <p class="text-light">
        <a href="https://docs.google.com/document/d/1Xpe9hrLXaVTfMss4P0QF7_HHLkAtcgKM2zkETvbgLek/edit?usp=sharing">
            Resume
            </a>
        </p>
        <div class="row">
  <div class="column">
    <h2 class="text-primary">Languages</h2>
    <img src={html} class="border border-primary" className="my-2" style={{ width: "10%" }} alt="htmlicon" />
    <img src={css} class="border border-primary" className="my-2" style={{ width: "10%" }} alt="cssicon" />
    <img src={js} class="border border-primary" className="my-2" style={{ width: "10%" }} alt="jsicon" />
    <img src={api} class="border border-primary" className="my-2" style={{ width: "10%" }} alt="apiicon" />
    <img src={express} class="border border-primary" className="my-2" style={{ width: "10%" }} alt="expressicon" />
    <img src={mongo} class="border border-primary" className="my-2" style={{ width: "10%" }} alt="mongoicon" />
    <img src={node} class="border border-primary" className="my-2" style={{ width: "10%" }} alt="nodeicon" />
    <img src={sql} class="border border-primary" className="my-2" style={{ width: "10%" }} alt="sqlicon" />
  </div>
</div>
      </div>
      
    </section>
  );
}



export default Resume;