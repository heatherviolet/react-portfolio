import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [projects] = useState([
    {
      name: 'allergy',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    }
  ]);

  const [currentProject, setCurrentProject] = useState(projects[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        projects={projects}
        setCurrentProject={setCurrentProject}
        currentProject={currentProject}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <div></div>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;