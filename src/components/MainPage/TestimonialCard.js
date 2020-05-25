import React from 'react'
import styles from "../../modules/mainStyle.module.css"
import ScrollAnimation from "react-animate-on-scroll"

function TestimonialCard(props) {
    return (
        <ScrollAnimation animateIn="zoomIn" animateOnce={false} duration={1.2} delay={props.animationDelay} offset={200}>
            <div className={`${styles.testimonialCard} animate__zoomIn animate__delay-${props.animationDelay}s`}>
                <div className={styles.testimonialTop}>
                    <img className={styles.testimonialImg} src={props.imgSrc} alt="user"/>
                    <p className={styles.testimonialTopText}>
                        <span className={styles.authorName}>{props.name},&nbsp;</span>
                        <span className={styles.authorCity}>{props.city}</span>
                    </p> 
                    
                </div>
                <div className={styles.testimonialTextBox}>
                    <i className={`fas fa-quote-left ${styles.quote} ${styles.quoteLeft}`}/>
                    <p>{props.text}</p>
                    <i className={`fas fa-quote-right ${styles.quote} ${styles.quoteRight}`}/>        
                </div>    
            </div>
        </ScrollAnimation>
    )
}

export default TestimonialCard
