import React, {useState} from 'react'
import styles from "../modules/mobileNavbarStyle.module.css"
import { NavLink } from "react-router-dom"

function MobileNavbar() {

    const [isVisible, setIsVisible] = useState({
        hamburger: {
            display: "block",
        },
        menu : {
            display: "none",
            animation: "none"
        }
    });

    const toggleMobileMenu = () => {
        if (isVisible.hamburger.display === "block") {
            setIsVisible({
                hamburger: {
                    display: "none"
                },
                menu : {
                    display: "flex",
                    animation: `${styles.animated} 1s ease-in`,
                    animation: "slideInLeft 0.5s"
                }
            });
        }
        else setIsVisible({
            hamburger: {
                display: "block"
            },
            menu: {
                animation: "none"
            }
        })
    }

    return (
        <div className={styles.mobileNavigation}>
            <i id={styles.mobileIcon} className="fas fa-bars" style={isVisible.hamburger} onClick={toggleMobileMenu}/>
            <div 
                id={styles.mobileNavbarBody}
                style={isVisible.menu}
                onAnimationEnd={()=> {
                    if (isVisible.menu.display === "block") { 
                        setIsVisible({
                            ...isVisible, 
                            menu: {
                                display: "none"
                            }
                        }
                        );}
                    }
                }>
                    
                <i id={styles.mobileExitIcon} onClick={()=>setIsVisible({...isVisible, hamburger: {
                    display: "block"}, menu: {animation: "slideOutLeft forwards 0.5s ease-in"}})} className="fas fa-times"/>
                <NavLink exact to="/" onClick={toggleMobileMenu}>Home</NavLink>
                <NavLink to="/about" onClick={toggleMobileMenu}>About</NavLink>
                <NavLink to="/contact" onClick={toggleMobileMenu}>Contact</NavLink>
            </div>
        </div>
    )
}

export default MobileNavbar
