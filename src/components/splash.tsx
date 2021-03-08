import React from "react"
import * as styles from "./splash.module.css"

const Splash = () => (
    <div className={styles.splash}>
        <h1 className={styles.headlineText}>
            Executable Protocols, Reproducible Results, Breakthrough Discoveries
        </h1>
        <p className={styles.generalText}>
        Aquarium is software that helps you scale your lab work, reduce costly mistakes, and communicate results precisely and efficiently.
        </p>
    </div>
)

export default Splash