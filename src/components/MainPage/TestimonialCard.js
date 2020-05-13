import React from 'react'
import styles from "../../modules/mainStyle.module.css"

function TestimonialCard(props) {
    return (
        <div className={styles.testimonialCard}> 
            <div className={styles.testimonialTextBox}>
                <i className={`fas fa-quote-left ${styles.quote} ${styles.quoteLeft}`}/>
                <p>{props.text}</p>
                <i className={`fas fa-quote-right ${styles.quote} ${styles.quoteRight}`}/>        
            </div>
            <div className={styles.testimonialFooter}>
                <p>{props.name}</p>
            </div>
            
        </div>
    )
}

export default TestimonialCard
