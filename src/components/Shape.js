import React from 'react'
import styles from "../modules/mainStyle.module.css"

function Shape(props) {
    const shapeStyle = {
            backgroundColor: "#011936",
            transform: "skew(-20deg)",
            minWidth: "35%",
            padding: "15px"
    }

    const textStyle = {
        textAlign: "center",
        fontSize: "40px",
        color: "white",
        transform: "skew(20deg)"
    }
    
    return (
        <div style={shapeStyle}>
            <h2 style={textStyle}>{props.text}</h2>
        </div>
    )
}

export default Shape
