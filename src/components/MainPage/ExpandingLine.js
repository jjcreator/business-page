import React from 'react'
import ScrollAnimation from "react-animate-on-scroll"

function ExpandingLine(props) {
    const lineStyle = {
        borderTop: `5px solid ${props.color}`
    }
    return (
        <ScrollAnimation animateIn={"expand"} animateOnce={true} duration={props.animationDuration} delay={props.animationDelay} offset={props.offset}>
            <hr style={lineStyle} className={"roundedLine"}/>
        </ScrollAnimation>
    )
}
export default ExpandingLine
