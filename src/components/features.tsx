import React from 'react'
import Grid from '@material-ui/core/Grid'

export interface FeatureProps {
    children: JSX.Element[] | JSX.Element
}

const Features = ({ children }: FeatureProps) => (
    <Grid container>
        {children}
    </Grid>
)

export default Features