import React from 'react'
import styles from "../../modules/mainStyle.module.css"
import Shape from "../Shape"

function Principles() {
    return (
        <section id={styles.principles}>
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
    )
}

export default Principles
