import React from 'react'
import styles from "../../modules/mainStyle.module.css"
import { Link } from "react-router-dom"
import ScrollAnimation from 'react-animate-on-scroll'

function CallToAction() {
    return (
        <ScrollAnimation animateIn="slideInLeft" duration={3} animateOnce={false} offset={100} delay={1000}>
        <section id={styles.callToAction}>
            <img id={styles.ctaImg} src="/woman1.jpg" alt="woman calling"/>
            <p>Still not sure if we can help? Get in touch and get a <span>free consultation online!</span></p>
            
            <Link to="/contact" id={styles.contact}>Contact us</Link>
        </section>
        </ScrollAnimation>
    )
}

export default CallToAction
