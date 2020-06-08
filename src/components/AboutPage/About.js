import React from 'react'
import Shape from "../Shape"
import styles from "../../modules/aboutStyle.module.css"
import AboutColumns from './AboutColumns'
// import waveImg from "./wave1.png"

function About() {
    
    return (
        <div className={`${styles.flex} ${styles.animated}`} id={styles.aboutMainPage}>
            <Shape text="About us"/>
            <AboutColumns/>
            <img id={styles.waveBottom} src="./wave1.png" alt="wave img"/>
        </div>
    )
}

export default About
