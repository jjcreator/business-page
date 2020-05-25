import React from 'react'

function Shape(props) {
    const shapeStyle = {
        backgroundColor: props.color || "var(--primary-color)",
        transform: "skew(-20deg)",
        padding: "1.2rem 3.5rem"
    }

    const textStyle = {
        textAlign: "center",
        fontSize: "3.8rem",
        color: props.textColor || "var(--showcase-color)",
        transform: "skew(20deg)",
        margin: 0,
        padding: 0,
        fontWeight: "500"
    }
    
    return (
        <div style={shapeStyle}>
            <h2 style={textStyle}>{props.text}</h2>
        </div>
    )
}

export default Shape
