import React from 'react'
import ScrollAnimation from "react-animate-on-scroll"
import TestimonialCard from "./TestimonialCard.js"
import styles from "../../modules/mainStyle.module.css"
import Shape from '../Shape.js'
const testimonialText = "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur."


function Testimonials() {
    return (
        <ScrollAnimation animateIn={styles.animated} animateOnce={true} offset={250} duration={0.4}>
            <section id={styles.testimonialsSection}>
                <Shape text="Testimonials"/>
                <div id={styles.testimonials}>
                    <TestimonialCard name="Adam Smith" city="Smithsville" text={testimonialText} animationDelay={200} imgSrc="./guy3.jpg"/>
                    <TestimonialCard name="Hans Olo" city="Millenium Falcon" text={testimonialText} animationDelay={400} imgSrc="./guy3.jpg"/>
                    <TestimonialCard name="Chuck Norris" city="Texas" text={testimonialText} animationDelay={600} imgSrc="./guy3.jpg"/>
                </div>
            </section>
        </ScrollAnimation>
    )
}

export default Testimonials
