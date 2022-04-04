import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
// import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [linkSelected, setLinkSelected] = useState(false);

  return (
    <div>
      <Nav
        linkSelected={linkSelected}
        setLinkSelected={setLinkSelected}
      ></Nav>
      <main>
        {!linkSelected ? (
          <>
            <div></div>
            <About></About>
            <Resume></Resume>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
        </main>
        <Footer></Footer>
    </div>
  );
}

export default App;