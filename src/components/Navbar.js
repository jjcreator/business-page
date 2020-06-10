import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import { HashLink as Link } from "react-router-hash-link"
import styles from "../modules/navbarStyle.module.css"
import logo from "../images/logo.png"

function Navbar() {
    const [displayHomeMenu, setDisplayHomeMenu] = useState("none");
    const toggleDisplayHomeMenu = () => {
        displayHomeMenu === "block" ? setDisplayHomeMenu("none") : setDisplayHomeMenu("block")
    }
  
    return (
        <nav className={`${styles.myNavbar} ${styles.flexColumn}`}>
            <div className={styles.flexColumn} id={styles.logoContainer}>
                <img className={styles.logoImg} src={logo} alt="company logo"/>
            </div>
            <div id={styles.wave}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(1,25,54)" fillOpacity="1" d="M0,192L80,165.3C160,139,320,85,480,85.3C640,85,800,139,960,138.7C1120,139,1280,85,1360,58.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </div>
            <div className={styles.flexColumn} id={styles.links} >
                <div className={`flexColumn ${styles.homeLinks}`}>
                    <NavLink onClick={()=>{
                            window.scrollTo(0,0);
                            toggleDisplayHomeMenu()}} 
                        className={styles.link}
                        activeClassName={styles.underline}
                        exact to="/">Home <i className="fa fa-caret-down"></i>
                    </NavLink>
                    <ul style={{display: displayHomeMenu}}>
                        <Link to="/#mission"><li>mission</li></Link>
                        <Link to="/#services"><li>services</li></Link>
                        <Link to="/#testimonials"><li>testimonials</li></Link>
                    </ul>
                </div>    
                <NavLink className={styles.link} activeClassName={styles.underline} to="/about" onClick={()=>setDisplayHomeMenu("none")}>About</NavLink >
                <NavLink className={styles.link} activeClassName={styles.underline} to="/contact" onClick={()=>setDisplayHomeMenu("none")}>Contact</NavLink>
            </div>
        </nav>  
    )
}

export default Navbar
