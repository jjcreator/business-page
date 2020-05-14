import React from 'react'
import styles from "../../modules/mainStyle.module.css"
import Shape from "../Shape"
import ScrollAnimation from "react-animate-on-scroll"
import ExpandingLine from './ExpandingLine'
const chosenAnimation = "fadeInUp"
const duration = 1.2;


function Principles() {

    return (
        <ScrollAnimation animateIn={styles.animated} animateOnce={false} duration={0.5}>
            <section className={styles.principles}>
                    <Shape text="Our core principles"/>
                    <div id={styles.list}>
                        <ScrollAnimation className={styles.listItem} animateIn={chosenAnimation} animateOnce={false} duration={duration} delay={250} offset={50}>
                            <i className={`fas fa-landmark ${styles.icon}`}></i>Lorem ipsum dolor sit amet
                        </ScrollAnimation>
                        <ScrollAnimation className={styles.listItem} animateIn={chosenAnimation} animateOnce={false} duration={duration} delay={500} offset={50}>
                            <i className={`fas fa-landmark ${styles.icon}`}></i>Lorem ipsum dolor sit amet
                        </ScrollAnimation>
                        <ScrollAnimation className={styles.listItem} animateIn={chosenAnimation} animateOnce={false} duration={duration} delay={750} offset={50}>
                            <i className={`fas fa-landmark ${styles.icon}`}></i>Lorem ipsum dolor sit amet
                        </ScrollAnimation>
                        <ScrollAnimation className={styles.listItem} animateIn={chosenAnimation} animateOnce={false} duration={duration} delay={1000} offset={50}>
                            <i className={`fas fa-landmark ${styles.icon}`}></i>Lorem ipsum dolor sit amet
                        </ScrollAnimation>
                        <ScrollAnimation className={styles.listItem} animateIn={chosenAnimation} animateOnce={false} duration={duration} delay={1250} offset={50}>
                            <i className={`fas fa-landmark ${styles.icon}`}></i>Lorem ipsum dolor sit amet
                        </ScrollAnimation>
                        <ScrollAnimation className={styles.listItem} animateIn={chosenAnimation} animateOnce={false} duration={duration} delay={1500} offset={50}>
                            <i className={`fas fa-landmark ${styles.icon}`}></i>Lorem ipsum dolor sit amet
                        </ScrollAnimation>
                    </div>
                    <ExpandingLine animationDuration={0.5} animationDelay={1750}/>
            </section>
        </ScrollAnimation>
    )
}

export default Principles
