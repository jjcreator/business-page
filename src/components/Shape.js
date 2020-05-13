import React from 'react'

function Shape(props) {
    const shapeStyle = {
        backgroundColor: "var(--primary-color)",
        transform: "skew(-20deg)",
        width: "26vw",
        minWidth: "fit-content",
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
