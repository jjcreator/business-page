import React from 'react'
import Shape from "../Shape"
import styles from "../../modules/aboutStyle.module.css"
import AboutColumns from './AboutColumns'

function About() {
    
    return (
        <div className={`${styles.flex} ${styles.animated}`} id={styles.aboutMainPage}>
            <Shape text="About us"/>
            <AboutColumns/>
            <svg id={styles.waveBottom} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(35, 87, 137)" fillOpacity="1" d="M0,192L80,165.3C160,139,320,85,480,85.3C640,85,800,139,960,138.7C1120,139,1280,85,1360,58.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </div>
    )
}

export default About
