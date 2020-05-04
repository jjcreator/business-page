import React, {useReducer} from 'react'
import styles from "../modules/contactStyle.module.css"
import Shape from './Shape';
import Form from '../modules/Form';

function Contact() {
    
    return (
        <div id={styles.contact}>
        <Shape text="Contact us"/>
        <div id={styles.mainContactBox}>
            <Form/>
            
            </div>
        </div>
    )
}

export default Contact
