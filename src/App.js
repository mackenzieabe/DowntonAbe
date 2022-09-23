import React from 'react';
import Navigation from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Home from './components/Home';
import Footer  from '../src/socialfollow'
import './App.css'






function App() {
  return (
    <section>
    <div className='App'>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/portfolio' component={Portfolio}/>
          <Route exact path='/resume' component={Resume}/>
        </Switch>
      </Router>

    </div>
  <Footer/>
   
    
    </section>
  );
}


export default App;
