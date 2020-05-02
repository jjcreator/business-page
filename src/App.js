import React from 'react';
import Navbar from "./Navbar"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import Main from './Main';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="mainContainer">
        <Navbar/>
        <div className="pageContainer">
          <Switch>
              <Route path="/" exact>
                <Main/>
              </Route>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="/contact">
                <Contact/>
              </Route>
            </Switch>
        </div>
          
      </div>
    </Router>
  );
}

export default App;
