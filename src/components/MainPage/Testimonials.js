import React, {useState, useEffect} from 'react'
import ScrollAnimation from "react-animate-on-scroll"
import TestimonialCard from "./TestimonialCard.js"
import styles from "../../modules/testimonialsStyle.module.css"
import Shape from '../Shape.js'
import ExpandingLine from "../MainPage/ExpandingLine"
import userImg from "../../images/guy.jpg"

const userTesimonials = [
    {
        id: 1,
        name: "Adam Smith",
        city: "Smithsville",
        img: userImg,
        testimonial: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur."
    },
    {
        id: 2,
        name: "Hans Olo",
        city: "Spaceville",
        img: userImg,
        testimonial: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur."
    },
    {
        id: 3,
        name: "Chuck N.",
        city: "Texas",
        img: userImg,
        testimonial: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur."
    },
    {
        id: 4,
        name: "John Doe",
        city: "Forestville",
        img: userImg,
        testimonial: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur."
    },
    {
        id: 5,
        name: "Jane Doe",
        city: "Forestville",
        img: userImg,
        testimonial: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur."
    },
    {
        id: 6,
        name: "Boris Y.",
        city: "Moscow",
        img: userImg,
        testimonial: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur."
    }
]

function Testimonials() {

    const [shownTestimonials, setShownTestimonials] = useState([]);
    useEffect(()=> {
        let currentTestimonials = [];
        for (let i=0; i<userTesimonials.length; i++) {
            currentTestimonials.push(<TestimonialCard name={userTesimonials[i].name} city={userTesimonials[i].city} imgSrc={userTesimonials[i].img} text={userTesimonials[i].testimonial} key={userTesimonials[i].id} animationDelay={(i+1)*150}/>)
        }
        setShownTestimonials(currentTestimonials);   
    }, []);

    return (
        <section id="testimonials" className={`${styles.testimonialsSection} flexColumn`}>
            <Shape color="var(--primary-color)" text="Testimonials"/>
            <h3 className={styles.testimonialsIntro}>We've helped hundreds of people from all around the world. Here's what some of our clients say about us:</h3>
            <div id={styles.testimonials}>
                {shownTestimonials}
            </div>
            <ExpandingLine animationDuration={0.5} animationDelay={400}/> 
        </section>
    )
}

export default Testimonials