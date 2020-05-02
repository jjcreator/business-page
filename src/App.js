import React from 'react';
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import Main from './components/Main';
import About from './components/About';
import Contact from './components/Contact';

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
