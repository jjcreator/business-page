import React from 'react'
import styles from "../../modules/mainStyle.module.css"
import { Link } from "react-router-dom"
import ScrollAnimation from 'react-animate-on-scroll'
import womanImg from "../../images/woman1.jpg"

function CallToAction() {
    return (
        <ScrollAnimation className={styles.isAnimated} animateIn="slideInLeft" duration={3} animateOnce={false} offset={100} delay={300}>
        <section id={styles.callToAction}>
            <img id={styles.ctaImg} src={womanImg} alt="woman calling"/>
            <p>Still not sure if we can help? Get in touch and get a <span>free consultation online!</span></p>
            
            <Link to="/contact" id={styles.contact}>Contact us</Link>
        </section>
        </ScrollAnimation>
    )
}

export default CallToAction
