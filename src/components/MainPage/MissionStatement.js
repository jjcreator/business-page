import React from 'react'
import styles from "../../modules/missionStyle.module.css"
import Shape from "../Shape"
import ScrollAnimation from "react-animate-on-scroll"
import ExpandingLine from './ExpandingLine'
import manWithPhone from "../../images/man-calling.jpg"

function MissionStatement() {
    return (
        <ScrollAnimation className={"isAnimated"} animateIn={"pop"} animateOnce={true} duration={1}>
            <section className={`flexColumn ${styles.mission}`} id="mission">
                <Shape text="Our mission"/>
                <div id={styles.missionRow}>
                    <p className={styles.missionParagraph}><span className={styles.bigText}>We alwayas strive</span> to provide outstanding legal services that deliver the best possible client outcomes. We are more than just fake lawyers – our clients come to us because we are people they can talk to about what matters to them. We recruit high calibre people. Clients and other professionals recommend and champion us. Legal directories and other market influencers praise us. </p>
                    <img id={styles.missionImg} src={manWithPhone} alt="man in black holding phone"/>
                </div>
                <ExpandingLine animationDuration={0.4} animationDelay={600} offset={0}/>
            </section>
        </ScrollAnimation>
    )
}

export default MissionStatement
