import React from 'react'

export interface FeatureProps {
    children: JSX.Element[] | JSX.Element
}

const Features = ({ children }: FeatureProps) => (
    <div>
        {children}
    </div>
)

export default Features