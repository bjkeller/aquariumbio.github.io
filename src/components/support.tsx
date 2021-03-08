import React from 'react'
import * as styles from "./support.module.css"

export interface SupportProps {
    headline: String,
    text: String
}

const Support = ({headline, text}: SupportProps) => (
    <div className={styles.support}>
        <h1 className={styles.headlineText}>{headline}</h1>
        <p className={styles.generalText}>{text}</p>
    </div>
)

export default Support
