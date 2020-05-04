import React from 'react'
import styles from "../modules/contactStyle.module.css"

function TraditionalContact() {
    return (
        <div className={styles.contactCard} id={styles.traditionalContact}>
            <h2>Call us</h2>
            <div id={styles.twoColumn}>
                <div className={styles.column}>
                    <h3>Headquarters</h3>
                    <ul>
                        <li><i class="fas fa-map-pin"></i><span className={styles.bold}>Our office:</span> 123 Fake Street, 77-777 Neverland</li>
                        <li><i class="fas fa-phone"></i><span className={styles.bold}>Phone:</span> 0-700-123-Fake</li>
                        <li><i class="fas fa-fax"></i><span className={styles.bold}>Fax:</span> 0-700-123-FakeFax</li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h3>Business Hours</h3>
                    <ul>
                        <li><i class="fas fa-clock"></i>Monday - Saturday: <span className={styles.bold}>9am - 5.30pm</span></li>
                        <li><i class="fas fa-clock"></i>Sunday: <span className={styles.bold}>Closed</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TraditionalContact
