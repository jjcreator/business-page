import React from 'react'
import styles from "../../modules/aboutStyle.module.css"

function AboutColumns() {
    return (
        <div className={styles.flex} id={styles.aboutColumns}>
            <div id={styles.aboutText}><span>At vero</span> eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</div>
            <div id={styles.teamImg}/>
         </div>
    )
}

export default AboutColumns
