import React from 'react'
import styles from "../modules/mainStyle.module.css"

function MissionStatement() {
    return (
        <section>
            <h2 className={styles.secondaryHeader}>Working hard for you</h2>
            <div id={styles.missionStatement}>
                <p><span>Sed ut perspiciatis</span> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                <div id={styles.missionImg}/>
            </div>
        </section>
    )
}

export default MissionStatement
