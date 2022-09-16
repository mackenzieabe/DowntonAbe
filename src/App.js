import React from 'react';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route exact path='/' element={<About />} />
          <Route exact path='/portfolio' element={<Portfolio />} />
          <Route exact path='/contact' element= {<ContactForm />}/>
          <Route exact path='/resume' element={<Resume />} />
        </Routes>
        {/* footer comp */}
      </Router>
    </div>
  );
}

export default App;
