import React, { useEffect } from 'react';
import { Nav } from "react-bootstrap";

function NavBar(props) {
    const {
        linkSelected,
        setLinkSelected,
      } = props;

  return (
     <Nav>

<h2 class="text-primary">Heather Albjerg</h2>
  <Nav.Item>
  <Nav.Link id="about" href="#about" onClick={() => setLinkSelected("about")}>
      About Me
</Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link id="projects" onClick={() => setLinkSelected("projects")}>
      Projects
</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className={`mx-2 ${linkSelected && 'navActive'}`}>
            <span onClick={() => setLinkSelected("contact")}>Contact</span>
            </Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link>
            <span onClick={() => setLinkSelected("resume")}>Resume</span>
            </Nav.Link>
  </Nav.Item>
</Nav>
  );
}

export default NavBar;