import React from 'react';
import Navigation from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import './App.css'






function App() {
  return (
    <div className='App'>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/' component={About}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/portfolio' component={Portfolio}/>
          <Route exact path='/resume' component={Resume}/>
        </Switch>
      </Router>

    </div>
  );
}


export default App;
