import React from 'react'
import styles from "../modules/mainStyle.module.css"

function Principles() {
    return (
        <section id={styles.principles}>
                <div id={styles.principlesShape}>
                    <h2>Our core principles</h2>
                </div>
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
