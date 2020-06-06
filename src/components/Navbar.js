import React, {useState} from 'react'
import { NavLink } from "react-router-dom"
import styles from "../modules/navbarStyle.module.css"

function Navbar() {
    const [displayHomeMenu, setDisplayHomeMenu] = useState("none");
    const toggleDisplayHomeMenu = () => {
        displayHomeMenu === "block" ? setDisplayHomeMenu("none") : setDisplayHomeMenu("block")
    }
  
    return (
        <nav className={`${styles.myNavbar} ${styles.flexColumn}`}>
        {console.log("navbar render")}
            <div className={styles.flexColumn} id={styles.logo}>
                <img className={styles.logoImg} src="/logo7.png" alt="company logo"/>
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
                        activeStyle={{fontWeight: "bold"}}
                        exact to="/">Home <i class="fa fa-caret-down"></i>
                    </NavLink>
                    <ul style={{display: displayHomeMenu}}>
                        <li><a href="#mission">Mission</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                    </ul>
                </div>    
                <NavLink className={styles.link} activeStyle={{fontWeight: "bold"}} to="/about" onClick={()=>setDisplayHomeMenu("none")}>About</NavLink >
                <NavLink className={styles.link} activeStyle={{fontWeight: "bold"}} to="/contact" onClick={()=>setDisplayHomeMenu("none")}>Contact</NavLink>
            </div>
        </nav>  
    )
}

export default Navbar
