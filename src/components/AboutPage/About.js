import React from 'react'
import Shape from "../Shape"
import styles from "../../modules/aboutStyle.module.css"
import AboutColumns from './AboutColumns'
import waveImg from "../../images/wave1.png"

function About() {
    
    return (
        <div className={`${styles.flex} ${styles.animated}`} id={styles.aboutMainPage}>
            <Shape text="About us"/>
            <AboutColumns/>
            <img onLoad={loadHandler} id={styles.waveBottom} src={waveImg} alt="wave img"/>
        </div>
    )
}

export default About
