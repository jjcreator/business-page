import React from 'react'
import styles from "../../modules/missionStyle.module.css"
import Shape from "../Shape"
import ScrollAnimation from "react-animate-on-scroll"
import ExpandingLine from './ExpandingLine'
import manWithPhone from "../../images/man-calling.jpg"

function MissionStatement() {
    return (
        <ScrollAnimation className={"isAnimated"} animateIn={"pop"} animateOnce={false} duration={1}>
            <section className={`flexColumn ${styles.mission}`} id="mission">
                <Shape text="Our mission"/>
                <div id={styles.missionRow}>
                    <p className={"paragraph"}><span className="bigText">Sed ut perspiciatis</span> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    <img id={styles.missionImg} src={manWithPhone} alt="man in black holding phone"/>
                </div>
                <ExpandingLine animationDuration={0.5} animationDelay={400} offset={100}/>
            </section>
        </ScrollAnimation>
    )
}

export default MissionStatement
