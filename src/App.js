import React, { useEffect } from 'react';
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import Main from './components/MainPage/Main';
import About from './components/AboutPage/About';
import Contact from './components/ContactPage/Contact';
import MobileNavbar from './components/MobileNavbar';

const imageSources = ["./images/phone.jpg","./images/city.jpg", "./images/email.jpg", "./images/man-in-black-holding-phone-618613.jpg", "./images/people.jpg", "./images/phone.jpg", "./images/team.jpg"];

function App() {

  // useEffect(() => {
  //   imageSources.map(srcText => {
  //     let image = new Image();
  //     image.src = srcText;
  //     return image
  //   });
  // }, []);

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
