import React from 'react'
import styles from "./mainStyle.module.css"

function Main() {
    return (
        <div>
            <section id={styles.showcase}>
                <h1 id={styles.showcaseTitle}>Premium legal consulting service</h1>
                <div id={styles.showcaseBody}>
                    <div id={styles.teamImg}/>
                    <div id={styles.showcaseDescription}>
                        <h2>Have the law on your side</h2>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                        <div id={styles.showcaseButton}>Get help now</div>
                    </div> 
                </div>
            </section>
            <section id={styles.principles}>
                <div id={styles.principlesShape}>
                    <h2>Our core principles</h2>
                </div>
                <ul id={styles.list}>
                    <li><i className={`fas fa-landmark ${styles.icon}`}></i>Lorem ipsum dolor sit amet</li>
                    <li><i className={`fas fa-landmark ${styles.icon}`}></i>Consectetur adipiscing elit</li>
                    <li><i className={`fas fa-landmark ${styles.icon}`}></i>Sed do eiusmod tempor incididunt</li>
                </ul>
            </section>
            <h2 className={styles.secondaryHeader}>We believe you deserve the best</h2>
            <div id={styles.missionStatement}>
                <p><span>Sed ut perspiciatis</span> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                <div id={styles.missionImg}/>
            </div>
            <section id={styles.testimonials}>
            </section>
            
        </div>
    )
}

export default Main
