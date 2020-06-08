import React from 'react'
import styles from "../../modules/aboutStyle.module.css"
import team from "../../images/team2.jpg"

function AboutColumns() {
    return (
        <div className={`${styles.flex} ${styles.animated}`} id={styles.aboutColumns}>
            <img src={team} alt="a team of people" id={styles.teamImg}/>
            <div id={styles.aboutText}><span>At vero</span> eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</div>
         </div>
    )
}

export default AboutColumns
