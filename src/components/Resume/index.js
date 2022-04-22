import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


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
      <h3 class="text-primary">Languages</h3>
      <FontAwesomeIcon icon="fa-brands fa-html5" />
    <p class="text-primary">CSS</p>
    <p class="text-primary">Javascript</p>
    <p class="text-primary">Node.js</p>
    <p class="text-primary">Express.js</p>
    <p class="text-primary">Mongoose</p>
  </div>
</div>
      </div>
      
    </section>
  );
}



export default Resume;