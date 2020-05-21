import React, {useState, useEffect} from 'react'
import styles from "../modules/mobileNavbarStyle.module.css"
import { NavLink } from "react-router-dom"

function MobileNavbar() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(()=> {
        window.addEventListener("resize", ()=> {
            setWindowWidth(window.innerWidth)
        });
        return () => {
            window.removeEventListener("resize", ()=> {
                setWindowWidth(window.innerWidth)
            });
        }
    }, []);

    useEffect(()=> {
        if (windowWidth > 900) {
            setIsVisible({
                hamburger: {
                    display: "block",
                },
                menu : {
                    display: "none",
                    animation: "none"
                }
            })
        }

    },[windowWidth])

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
                    animation: "slideInLeft 0.5s"
                }
            });
        }
        else setIsVisible({
            hamburger: {
                display: "block"
            },
            menu: {
                display: "none",
                animation: "none"
            }
        })
    }

    return (
        <div className={styles.mobileNavigation}>
            <i id={styles.mobileIcon} className="fas fa-bars" style={isVisible.hamburger} onClick={toggleMobileMenu}/>
            <div 
                id={styles.mobileNavbarBody}
                style={isVisible.menu}>
                <i id={styles.mobileExitIcon} onClick={toggleMobileMenu} className="fas fa-times"/>
                <NavLink exact to="/" onClick={toggleMobileMenu}>Home</NavLink>
                <NavLink to="/about" onClick={toggleMobileMenu}>About</NavLink>
                <NavLink to="/contact" onClick={toggleMobileMenu}>Contact</NavLink>
            </div>
        </div>
    )
}

export default MobileNavbar
