import React, {useRef, useLayoutEffect} from 'react'
import styles from "../../modules/mainStyle.module.css"
import Shape from "../Shape"

function Principles() {
    const principlesRef = useRef()
    useLayoutEffect(()=> {
        console.log(principlesRef)
    }, []);

    return (
        <section ref={principlesRef} id="principles" className={styles.principles}>
                <Shape text="Our core principles"/>
                <ul id={styles.list}>
                    <li><i className={`fas fa-landmark ${styles.icon}`}></i>Lorem ipsum dolor sit amet</li>
                    <li><i className={`fas fa-landmark ${styles.icon}`}></i>Consectetur adipiscing elit</li>
                    <li><i className={`fas fa-landmark ${styles.icon}`}></i>Sed do eiusmod tempor incididunt</li>
                    <li><i className={`fas fa-landmark ${styles.icon}`}></i>Sed do eiusmod tempor incididunt</li>
                    <li><i className={`fas fa-landmark ${styles.icon}`}></i>Sed do eiusmod tempor incididunt</li>
                    <li><i className={`fas fa-landmark ${styles.icon}`}></i>Sed do eiusmod tempor incididunt</li>
                </ul>
        </section>
    )
}

export default Principles
