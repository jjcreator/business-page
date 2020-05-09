import React from 'react'

const cardStyle = {
    backgroundColor: "var(--showcase-color)",
    width: "300px",
    height: "450px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "var(--primary-color)",
    boxShadow: "2px 2px 5px black"
}

const textBox = {
    flex: "1",
    width: "100%",
    padding: "20px",
    position: "relative"
}

const iconContainer = {
    backgroundColor: "var(--secondary-color)",
    height: "45%",
    width: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px"

}

const bigUserIcon = {
    fontSize: "150px",
    color: "var(--showcase-color)"
}

const testimonialText = {

}

const testimonialName = {
    position: "absolute",
    bottom: "1%",
    right: "6%"

}

function TestimonialCard() {
    return (
        <div style={cardStyle}>
            <div style={iconContainer}>
                <i className="fas fa-user-tie" style={bigUserIcon}></i>
            </div>
            <div style={textBox}>
                <p style={testimonialText}>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                <p style={testimonialName}>John Doe</p>
            </div>
        </div>
    )
}

export default TestimonialCard
