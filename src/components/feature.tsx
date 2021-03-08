import React from 'react'
import * as styles from "./feature.module.css"

export interface FeatureProps {
    headline: String,
    text: String
}

const Feature = ({ headline, text }:FeatureProps) => (
    <div className={styles.feature}>
        <h1 className={styles.headlineText}>{headline}</h1>
        <p>image goes here</p>
        <p className={styles.generalText}>{text}</p>
    </div>
)

export default Feature