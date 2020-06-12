import React from 'react'
import { Link } from "react-router-dom";
import styles from "../../modules/showcaseStyle.module.css"
import team from "../../images/team.jpg"

function Showcase() {

    const scrollDown = () => {
        window.scrollTo(0, window.innerHeight)
    }
    
    return (
        <section id={styles.showcase} className="flexColumn">
            <h1 className={"pop"} id={styles.showcaseTitle}>FAKE LAW ON YOUR SIDE</h1>
            <div className={"pop"} id={styles.showcaseBody}>
                <img id={styles.teamImg} src={team} alt="the team"/>
                <div className="flexColumn" id={styles.showcaseDescription}>
                    <h2 id={styles.showcaseHeader}>Best fake specialists</h2>
                    <p id={styles.showcaseParagraph}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                    <Link to="/contact"><button className={"actionButton"}>Get help now</button></Link>
                </div>
            </div>
            <div id={styles.doubleArrow} onClick={scrollDown}>
                <i className="fas fa-angle-double-down"></i>
            </div>
        </section>
    )
}

export default Showcase
