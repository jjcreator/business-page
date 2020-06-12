import React, {useState, useEffect} from 'react'
import styles from "../../modules/servicesStyle.module.css"
import Shape from "../Shape"
import ScrollAnimation from "react-animate-on-scroll"
import ExpandingLine from './ExpandingLine'
const chosenAnimation = "fadeInUp"
const duration = 1.2;
const services = ["Fake Company Law", "Fake Commercial Law", "Fake Property Law", "Fake Construction Law", "Fake Civil Law", "Fake Divorce Law", "Fake Legal Representation", "Fake Employment Law", "Fake Legal Consulting"]


function Services() {

    const [isMobile, setIsMobile] = useState(false);
    const [listItems, setListItems] = useState([]);
    const [screenDimensions, setScreenDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(()=> {
        window.addEventListener("resize", setScreenDimensions({
            width: window.innerWidth,
            height: window.innerHeight
        }));
       
        return () => {
            window.removeEventListener("resize", setScreenDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            }))
        }
    }, [])

    useEffect(()=> {
        const createItems = () => {
            let items = [];
            if (screenDimensions.width <= 850 || screenDimensions.height <= 500) {
                setIsMobile(true);
            }
            else setIsMobile(false);
            for (let i=1; i<services.length + 1; i++) {
                items.push(<ScrollAnimation className={`${styles.listItem} ${styles.isAnimated}`} animateIn={chosenAnimation} animateOnce={true} duration={duration} delay={i * 90} offset={50} key={i}>
                    <i className={`fas fa-landmark ${styles.icon}`}/><p>{services[i-1]}</p>
                </ScrollAnimation>);
            setListItems(items)
            }
        }
        createItems();
    }, [isMobile, screenDimensions.width, screenDimensions.height]);

    return (
            <section className={styles.services} id="services">
                <Shape textColor="var(--showcase-color)" color="var(--attention-color)" text="Services"/>
               <div className={styles.servicesText}>We pride ourselves on always providing the highest standards of service, something which is supported by our ever-growing list of testimonials and returning clients.</div>
                <div id={styles.list}>
                    {listItems}
                </div>
                <ScrollAnimation className={styles.isAnimated} animateIn={chosenAnimation} animateOnce={true} duration={duration} delay={1100} offset={50}>
                    <div id={styles.more} className={"bigText"}>...and more</div>
                </ScrollAnimation>
                <ExpandingLine color="var(--showcase-color)" animationDuration={0.5} animationDelay={1750}/>
            </section>
    )
}

export default Services
