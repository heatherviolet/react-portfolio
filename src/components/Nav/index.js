import React, { useEffect } from 'react';
import { Nav } from "react-bootstrap";

function NavBar(props) {
    const {
        linkSelected,
        setLinkSelected,
      } = props;

  return (
     <Nav>

<h2>Heather Albjerg</h2>
  <Nav.Item>
  <Nav.Link id="about" href="#about" onClick={() => setLinkSelected(false)}>
      About Me
</Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link id="projects" onClick={() => setLinkSelected(false)}>
      Projects
</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className={`mx-2 ${linkSelected && 'navActive'}`}>
            <span onClick={() => setLinkSelected(true)}>Contact</span>
            </Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link id="resume" onClick={() => setLinkSelected(false)}>
            <span onClick={() => setLinkSelected(true)}>Resume</span>
            </Nav.Link>
  </Nav.Item>
  {/* <span
                onClick={() => {
                  setCurrentProject(projects);
                  setContactSelected(false);
                }}
            //   ></span> */}
</Nav>
  );
}

export default NavBar;