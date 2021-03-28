import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { Container } from '@material-ui/core'

export interface FeatureProps {
    children: JSX.Element[] | JSX.Element
}

const Features = ({ children }: FeatureProps) => (
    <Container>
        <Grid container>
            {children}
        </Grid>
        <Button variant="contained">
            Get Started
        </Button>
    </Container>
)

export default Features