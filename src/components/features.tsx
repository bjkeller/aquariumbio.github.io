import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { Container, makeStyles } from '@material-ui/core'

// TODO: format button
// TODO: bottom two cards have background images

const useStyles = makeStyles((theme) => ({
    featuresPage: {
        flexGrow: 1,
        width: '100%'
    }
}));

export interface FeatureProps {
    children: JSX.Element[] | JSX.Element
}

const Features = ({ children }: FeatureProps) => {
    const classes = useStyles();

    return (
    <div className={classes.featuresPage}>
        <Grid container>
            {children}
        </Grid>
        // TODO: link to support pane
        <Button variant="contained">
            Get Started
        </Button>
    </div>
)}

export default Features
