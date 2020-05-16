import React from 'react'
import styles from "../../modules/mobileNavbarStyle.module.css"
import {Link} from "react-router-dom"

function MobileNavbar() {
    return (
        <div id={styles.mobileNavbar}>
            <i id={styles.mobileIcon}className="fas fa-bars"></i>
            <Link to="/" exact>Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default MobileNavbar
