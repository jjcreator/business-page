import React from 'react'
import styles from "../modules/contactStyle.module.css"
import Shape from './Shape';
import Form from './Form';
import TraditionalContact from './TraditionalContact';
import MapContainer from "./MapContainer"

function Contact() {
    
    return (
        <div id={styles.contact}>
            <Shape text="Contact us"/>
            <div id={styles.mainContactBox}>
                <Form/>
                <TraditionalContact/>
            </div>
            <MapContainer/>
        </div>
    )
}

export default Contact
