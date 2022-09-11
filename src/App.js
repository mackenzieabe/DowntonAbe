
import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
 
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        contactSelected = {contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
            <Portfolio></Portfolio>
            <Resume></Resume>
          </>
        ) : (
          <ContactForm></ContactForm>
        )
        }
      </main>
    </div>
  );
}

export default App;
