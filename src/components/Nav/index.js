import React, { useState } from 'react';


function Nav() {
const [projects] = useState([
  {
    name: 'allergy',
    description: 'An app that allows you to check which allergies/food restrictions to find recipes',
  },
  { name: 'portraits', description: 'Portraits of people in my life' },
  { name: 'food', description: 'Delicious delicacies' },
  { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
]);
const [currentProject, setCurrentProject] = useState(projects[0]);

  return (
    <header>
         <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About me
        </a>
      </li>
      <li>
      <a href="#Portfolio">
          Portfolio
        </a>
      </li>
      <li>
        <span>Resume</span>
      </li>
      <li>
        <span>Contact</span>
      </li>
      {projects.map((project) => (
            <li className={`mx-1 ${
                currentProject.name === project.name && 'navActive'
                }`} key={project.name}>
              <span
                onClick={() => {
                  setCurrentProject(project)
                }}
              >
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;