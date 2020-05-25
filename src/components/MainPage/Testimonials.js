import React, {useState, useEffect} from 'react'
import ScrollAnimation from "react-animate-on-scroll"
import TestimonialCard from "./TestimonialCard.js"
import styles from "../../modules/mainStyle.module.css"
import Shape from '../Shape.js'
import ExpandingLine from "../MainPage/ExpandingLine"

const userTesimonials = [
    {
        id: 1,
        name: "Adam Smith",
        city: "Smithsville",
        img: "./guy3.jpg",
        testimonial: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur."
    },
    {
        id: 2,
        name: "Hans Olo",
        city: "Spaceville",
        img: "./guy3.jpg",
        testimonial: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur."
    },
    {
        id: 3,
        name: "Chuck N.",
        city: "Texas",
        img: "./guy3.jpg",
        testimonial: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur."
    },
    {
        id: 4,
        name: "John Doe",
        city: "Forestville",
        img: "./guy3.jpg",
        testimonial: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur."
    },
    {
        id: 5,
        name: "Jane Doe",
        city: "Forestville",
        img: "./guy3.jpg",
        testimonial: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur."
    },
    {
        id: 6,
        name: "Boris Y.",
        city: "Moscow",
        img: "./guy3.jpg",
        testimonial: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur."
    }
]

function Testimonials() {

    const [shownTestimonials, setShownTestimonials] = useState([]);
    useEffect(()=> {
        let currentTestimonials = [];
        for (let i=0; i<userTesimonials.length; i++) {
            currentTestimonials.push(<TestimonialCard name={userTesimonials[i].name} city={userTesimonials[i].city} imgSrc={userTesimonials[i].img} text={userTesimonials[i].testimonial} key={userTesimonials[i].id} animationDelay={(i+1)*200}/>)
        }
        setShownTestimonials(currentTestimonials);   
    }, []);

    return (
        <ScrollAnimation animateIn={styles.animated} animateOnce={true} offset={250} duration={0.4}>
            <section id={styles.testimonialsSection} className="flexColumn">
                <Shape text="Testimonials"/>
                <div id={styles.testimonials}>
                    {shownTestimonials}
                </div>
                <ExpandingLine animationDuration={0.5} animationDelay={400}/> 
            </section>
        </ScrollAnimation>
    )
}

export default Testimonials
