import React from 'react'
import styles from "../../modules/mainStyle.module.css"

function CallToAction() {
    return (
        <div id={styles.callToAction}>
            <p>Still not sure if we can help? Get in touch and get a <span>free consultation online!</span> </p>
            <div id={styles.contact}>Contact us</div>
        </div>
    )
}

export default CallToAction
