import React, {useEffect} from 'react';
import Navbar from "./components/Navbar"
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import Main from './components/MainPage/Main';
import About from './components/AboutPage/About';
import Contact from './components/ContactPage/Contact';
import MobileNavbar from './components/MobileNavbar';

const imageSources = ["/phone.jpg","/city.jpg", "/email.jpg", "/man-in-black-holding-phone-618613.jpg", "/people.jpg", "/phone.jpg", "/team.jpg"];
const images = []

function App() {

  useEffect(()=> {
    imageSources.forEach((srcText, index) => {
      images[index] = new Image();
      images[index].src = srcText;
    });
  }, []);

  return (
      <Router>
        <MobileNavbar/>
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
        </Router>
  );
}

export default App;
