import React from 'react'
import styles from "../modules/contactStyle.module.css"

function TraditionalContact() {
    return (
        <div>
            <div className={styles.contactCard} id={styles.traditionalContact}>
                <h2>Call us</h2>
                <ul>
                    <li>Our office: 123 Fake Street, 77-777 Neverland</li>
                    <li>Phone: 0-700-123-Fake</li>
                    <li>Fax: 0-700-123-FakeFax</li>
                </ul>
                <h3>Business Hours</h3>
                <ul>
                    <li>Monday - Saturday <span className={styles.bold}>9am - 5.30pm</span></li>
                    <li>Sunday: <span className={styles.bold}>Closed</span></li>
                </ul>
            </div>
        </div>
    )
}

export default TraditionalContact
