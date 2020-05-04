import React from 'react'
import styles from "../modules/contactStyle.module.css"

function TraditionalContact() {
    return (
        <div className={styles.contactCard} id={styles.traditionalContact}>
            <h2>Call us</h2>
            <div id={styles.twoColumn}>
                <div className={styles.column}>
                    <ul>
                        <li><span className={styles.bold}>Our office:</span> 123 Fake Street, 77-777 Neverland</li>
                        <li><span className={styles.bold}>Phone:</span> 0-700-123-Fake</li>
                        <li><span className={styles.bold}>Fax:</span> 0-700-123-FakeFax</li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h3>Business Hours</h3>
                    <ul>
                        <li>Monday - Saturday <span className={styles.bold}>9am - 5.30pm</span></li>
                        <li>Sunday: <span className={styles.bold}>Closed</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TraditionalContact
