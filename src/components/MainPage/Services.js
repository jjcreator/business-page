import React, {useState, useEffect} from 'react'
import styles from "../../modules/mainStyle.module.css"
import Shape from "../Shape"
import ScrollAnimation from "react-animate-on-scroll"
import ExpandingLine from './ExpandingLine'
const chosenAnimation = "fadeInUp"
const duration = 1.2;
const services = ["Fake Company Law", "Fake Commercial Law", "Fake Property Law", "Fake Construction Law", "Fake Civil Law", "Fake Divorce Law", "Fake Legal Representation", "Fake Employment Law", "Fake Legal Consulting"]


function Services() {

    const [listItems, setListItems] = useState([]);

    useEffect(()=> {
        createItems();
    }, [])

    const createItems = () => {
        let items = [];
        for (let i=1; i<10; i++) {
            items.push(<ScrollAnimation className={styles.listItem} animateIn={chosenAnimation} animateOnce={false} duration={duration} delay={i * 250} offset={50} key={i}>
                <i className={`fas fa-landmark ${styles.icon}`}></i>{services[i-1]}
            </ScrollAnimation>);
        setListItems(items)
        }
    }

    return (
        <ScrollAnimation animateIn={styles.animated} animateOnce={false} duration={0.5}>
            <section className={styles.services}>
                <Shape textColor="var(--showcase-color)" color="var(--attention-color)" text="Services"/>
                <div className={styles.servicesText}>We pride ourselves on always providing the highest standards of service, something which is supported by our ever-growing list of testimonials and returning clients.</div>
                <div id={styles.list}>
                    {listItems}
                </div>
                <ScrollAnimation animateIn={chosenAnimation} animateOnce={false} duration={duration} delay={2000} offset={50}>
                    <div id={styles.more} className="bigText">...and more</div>
                </ScrollAnimation>
                <ExpandingLine color="var(--showcase-color)" animationDuration={0.5} animationDelay={3000}/>
            </section>
        </ScrollAnimation>
    )
}

export default Services
