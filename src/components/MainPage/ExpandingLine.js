import React from 'react'
import ScrollAnimation from "react-animate-on-scroll"
import styles from "../../modules/mainStyle.module.css"

function ExpandingLine(props) {
    const lineStyle = {
        borderTop: `5px solid ${props.color}`
    }
    return (
        <ScrollAnimation animateIn={styles.expand} animateOnce={false} duration={props.animationDuration} delay={props.animationDelay} offset={100}>
            <hr style={lineStyle} className={styles.roundedLine}/>
        </ScrollAnimation>
    )
}

export default ExpandingLine
