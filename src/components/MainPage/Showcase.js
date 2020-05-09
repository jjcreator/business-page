import React, {useState, useEffect} from 'react'
import styles from "../../modules/mainStyle.module.css"

function Showcase() {
    const [display, setDisplay] = useState({display: "none"});
    const [animated, setAnimated] = useState(null)
        useEffect(()=> {
        setDisplay({display: "flex"})
        setAnimated(styles.animated)
    },[]);

    return (
        <section id={styles.showcase} style={display}>
            <h1 className={animated} id={styles.showcaseTitle}>United Law Counselors</h1>
            <div className={animated} id={styles.showcaseBody}>
                <div id={styles.teamImg}/>
                <div id={styles.showcaseDescription}>
                    <h2>Have the law on your side</h2>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                    <div id={styles.showcaseButton}>Get help now</div>
                </div>
                <a id={styles.doubleArrow} href="#principles">
                    <i className="fas fa-angle-double-down"></i>
                </a>
                
            </div>
        </section>
    )
}

export default Showcase
