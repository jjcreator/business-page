import React from 'react'
import ScrollAnimation from "react-animate-on-scroll"
import TestimonialCard from "./TestimonialCard.js"
import styles from "../../modules/mainStyle.module.css"
const testimonialText = "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur."


function Testimonials() {
    return (
        <ScrollAnimation animateIn={styles.animated} animateOnce={true} offset={250}>
            <section id={styles.testimonialsSection}>
                <h2 className={styles.secondaryHeader} id={styles.testimonialsHeader}>See what others say about us</h2>
                <div id={styles.testimonials}>
                    <TestimonialCard name="Tony Adams" text={testimonialText}/>
                    <TestimonialCard name="John Doe" text={testimonialText}/>
                    <TestimonialCard name="Jane Doe" text={testimonialText}/>
                    <TestimonialCard name="Adam Smith" text={testimonialText}/>
                    <TestimonialCard name="Hans Olo" text={testimonialText}/>
                    <TestimonialCard name="Chuck Norris" text={testimonialText}/>
                </div>
            </section>
        </ScrollAnimation>
    )
}

export default Testimonials
