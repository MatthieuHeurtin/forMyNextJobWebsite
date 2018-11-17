import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Presentation from './Presentation';
import CV from './CV';
import Project from './Project';
import Header from './Header/Header'

class App extends Component {
  render() {
    return (

      <Router>      
    <div className='App'>
      <Header/>
      <nav>
            <Link className='link' to="/">Presentation</Link>
            <Link className='link' to="/CV">CV</Link>
            <Link className='link' to="/Project">Project</Link>
          
      </nav>

      <Route  path="/" exact component={Presentation} />
      <Route  path="/CV/" component={CV} />
      <Route  path="/Project/" component={Project} />

    </div>
  </Router>
    );
  }
}

export default App;
