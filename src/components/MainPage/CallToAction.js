import React from 'react'
import styles from "../../modules/callToActionStyle.module.css"
import { Link } from "react-router-dom"
import ScrollAnimation from 'react-animate-on-scroll'
import womanImg from "../../images/woman1.jpg"

function CallToAction() {
    return (
        <ScrollAnimation className={styles.isAnimated} animateIn="slideInLeft" duration={3} animateOnce={true} offset={100} delay={100}>
        <section id={styles.callToAction}>
            <img id={styles.ctaImg} src={womanImg} alt="woman calling"/>
            <p>Still not sure if we can help? Get in touch and get a <span>free consultation online!</span></p>
            <Link to="/contact"><button className={"actionButton"}>Contact us</button></Link>
        </section>
        </ScrollAnimation>
    )
}

export default CallToAction
