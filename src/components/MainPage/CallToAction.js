import React from 'react'
import styles from "../../modules/mainStyle.module.css"
import { Link } from "react-router-dom"

function CallToAction() {
    return (
        <div id={styles.callToAction}>
            <p>Still not sure if we can help? Get in touch and get a <span>free consultation online!</span> </p>
            <Link to="/contact" id={styles.contact}>Contact us</Link>
        </div>
    )
}

export default CallToAction
