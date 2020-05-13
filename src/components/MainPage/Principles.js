import React from 'react'
import styles from "../../modules/mainStyle.module.css"
import Shape from "../Shape"
import ScrollAnimation from "react-animate-on-scroll"

function Principles() {

    return (
        <ScrollAnimation animateIn={styles.animated} animateOnce={true}>
            <section id="principles" className={styles.principles}>
                    <Shape text="Our core principles"/>
                    <ul id={styles.list}>
                        <li><i className={`fas fa-landmark ${styles.icon}`}></i>Lorem ipsum dolor sit amet</li>
                        <li><i className={`fas fa-landmark ${styles.icon}`}></i>Consectetur adipiscing elit</li>
                        <li><i className={`fas fa-landmark ${styles.icon}`}></i>Sed do eiusmod tempor incididunt</li>
                        <li><i className={`fas fa-landmark ${styles.icon}`}></i>Sed do eiusmod tempor incididunt</li>
                        <li><i className={`fas fa-landmark ${styles.icon}`}></i>Sed do eiusmod tempor incididunt</li>
                        <li><i className={`fas fa-landmark ${styles.icon}`}></i>Sed do eiusmod tempor incididunt</li>
                    </ul>
            </section>
        </ScrollAnimation>
    )
}

export default Principles
