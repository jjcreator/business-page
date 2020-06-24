import React from 'react'
import styles from "../../modules/testimonialsStyle.module.css"
import ScrollAnimation from "react-animate-on-scroll"

function TestimonialCard(props) {
    return (
        <ScrollAnimation className={"isAnimated"} animateIn="zoomIn" animateOnce={true} duration={1} delay={props.animationDelay} offset={200}>
            <div className={`${styles.testimonialCard} flexColumn`}>
                <div className={styles.testimonialTop}>
                    <img className={styles.testimonialImg} src={props.imgSrc} alt="user"/>
                    <p className={`${styles.testimonialTopText} flexColumn`}>
                        <span className={styles.authorName}>{props.name}</span>
                        <span className={styles.authorCity}>{props.city}</span>
                    </p> 
                </div>
                <div className={`${styles.testimonialTextBox} flexColumn`}>
                    <i className={`fas fa-quote-left ${styles.quote} ${styles.quoteLeft}`}/>
                    <p>{props.text}</p>
                    <i className={`fas fa-quote-right ${styles.quote} ${styles.quoteRight}`}/>        
                </div>    
            </div>
        </ScrollAnimation>
    )
}

export default TestimonialCard