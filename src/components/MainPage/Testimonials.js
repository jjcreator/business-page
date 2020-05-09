import React from 'react'
import TestimonialCard from "./TestimonialCard.js"
import styles from "../../modules/mainStyle.module.css"

function Testimonials() {
    return (
        <section id={styles.testimonialsSection}>
            <h2>See what others say about us</h2>
            <div id={styles.testimonials}>
                <TestimonialCard/>
                <TestimonialCard/>
                <TestimonialCard/>
            </div>
        </section>
    )
}

export default Testimonials
