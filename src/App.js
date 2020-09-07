import React from 'react';
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import Main from './components/MainPage/Main';
import About from './components/AboutPage/About';
import Contact from './components/ContactPage/Contact';
import MobileNavbar from './components/MobileNavbar';

function App() {

   return (
      <Router basename={process.env.PUBLIC_URL}>
        <MobileNavbar/>
        <Navbar/>
        <div className="pageContainer">
          <Switch>
              <Route path={"/"} exact>
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
        </Router>
  );
}

export default App;
