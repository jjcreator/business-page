import React from 'react'
import { Link } from "react-router-dom";
import styles from "../../modules/mainStyle.module.css"
import team from "../../images/team.jpg"

function Showcase() {

    const scrollDown = () => {
        window.scrollTo(0, window.innerHeight)
    }
    
    return (
        <section id={styles.showcase} className="flexColumn">
            <h1 className={styles.animated} id={styles.showcaseTitle}>Fake law on your side</h1>
            <div className={styles.animated} id={styles.showcaseBody}>
                <img id={styles.teamImg} src={team} alt="the team"/>
                <div id={styles.showcaseDescription}>
                    <h2 className={styles.paragraphHeader}>Best fake specialists</h2>
                    <p className={styles.paragraph}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                    <Link to="/contact"><div id={styles.showcaseButton}>Get help now</div></Link>
                </div>
            </div>
            <div id={styles.doubleArrow} onClick={scrollDown}>
                <i className="fas fa-angle-double-down"></i>
            </div>
        </section>
    )
}

export default Showcase
