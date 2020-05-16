import React, {useState, useEffect} from 'react'
import styles from "../../modules/mainStyle.module.css"
import Shape from "../Shape"
import ScrollAnimation from "react-animate-on-scroll"
import ExpandingLine from './ExpandingLine'
const chosenAnimation = "fadeInUp"
const duration = 1.2;


function Principles() {

    const [listItems, setListItems] = useState([]);

    useEffect(()=> {
        createItems();
    }, [])

    const createItems = () => {
        let items = [];
        for (let i=1; i<7; i++) {
            items.push(<ScrollAnimation className={styles.listItem} animateIn={chosenAnimation} animateOnce={false} duration={duration} delay={i * 250} offset={50}>
                <i className={`fas fa-landmark ${styles.icon}`}></i>Lorem ipsum dolor sit amet
            </ScrollAnimation>);
        setListItems(items)
        }
    }

    return (
        <ScrollAnimation animateIn={styles.animated} animateOnce={false} duration={0.5}>
            <section className={styles.principles}>
                    <Shape text="Our core principles"/>
                    <div id={styles.list}>
                        {listItems}
                    </div>
                    <ExpandingLine animationDuration={0.5} animationDelay={1750}/>
            </section>
        </ScrollAnimation>
    )
}

export default Principles
