import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects';

function App() {
  const [projects] = useState([
    {
        name: 'allergy',
        description: 'An app that allows you to check which allergies/food restrictions to find recipes',
      },
  ]);

  const [currentProject, setCurrentProject] = useState(projects[0]);

  return (
    <div>
      <Nav
        projects={projects}
        setCurrentProject={setCurrentProject}
        currentCategory={currentProject}
      ></Nav>
      <main>
        <div>
          <Projects></Projects>
          <About></About>
        </div>
      </main>
    </div>
  );
}

export default App;