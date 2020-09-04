import React from 'react'
import styles from "../../modules/aboutStyle.module.css"
import team from "../../images/team2.jpg"

function AboutColumns() {
    return (
        <div className={`${styles.flex} ${styles.animated}`} id={styles.aboutColumns}>
            <img src={team} alt="a team of people" id={styles.teamImg}/>
            <div id={styles.aboutText}><span>Established in 2125</span>, Fake Lawyers is a dynamic and innovative law firm with offices in Neverland, Mars, Atlantis and Hogwart. At the heart of it, we are people who are passionate about fake legal practice and helping others prosper. We look deeper, try to understand better and we ask more questions. Our fake lawyers are approachable, down-to-earth and caring and our team is committed to understanding your business and your issues. We work with industry leaders and regulators to adapt, reinvent and drive success into the future.</div>
         </div>
    )
}

export default AboutColumns
