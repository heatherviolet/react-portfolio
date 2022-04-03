import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
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
  <Nav.Item>
  <Nav.Link data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
      About
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
    <Nav.Link eventKey="disabled" disabled>
      Disabled
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