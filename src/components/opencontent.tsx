import React from 'react'
import * as styles from "./content.module.css"

export interface ContentProps {
    headline: String,
    text: String
}

const Content = ({headline, text}:ContentProps) => (
    <div className={styles.content}>
        <h1 className={styles.headlineText}>{headline}</h1>
        <p className={styles.generalText}>{text}</p>
    </div>
)

export default Content