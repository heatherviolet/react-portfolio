import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';


function App() {
  const [linkSelected, setLinkSelected] = useState("about");
  //  render section and conditionals
  return (
    
    <div>
      <Nav
        linkSelected={linkSelected}
        setLinkSelected={setLinkSelected}
      ></Nav>
      <main>
            <div></div>
            {linkSelected === "about" && <About></About>}
            {linkSelected === "resume" && <Resume></Resume>}
            {linkSelected === "contact" &&<ContactForm></ContactForm>}
            {linkSelected === "projects" && <Projects></Projects>}
        </main>
        <Footer></Footer>
    </div>
  );
}

export default App;