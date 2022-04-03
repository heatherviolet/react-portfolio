import React, { useEffect } from 'react';
import { Nav } from "react-bootstrap";

function NavBar(props) {
    const {
        projects = [],
        setCurrentProject,
        contactSelected,
        currentProject,
        setContactSelected,
      } = props;

  return (
    <Nav
activeKey={currentProject} onSelect={(setCurrentProject)}
>
<h2>Heather Albjerg</h2>
  <Nav.Item>
  <Nav.Link id="about" href="#about" onClick={() => setContactSelected(false)}>
      About Me
</Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link onClick={() => setContactSelected(false)}>
      Projects
</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
            </Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link className={`mx-2 ${contactSelected && 'Resume'}`}>
            <span onClick={() => setContactSelected(true)}>Resume</span>
            </Nav.Link>
  </Nav.Item>
  <span
                onClick={() => {
                  setCurrentProject(projects);
                  setContactSelected(false);
                }}
              ></span>
</Nav>
  );
}

export default NavBar;