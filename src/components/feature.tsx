import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles, rgbToHex } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    featureCard: {
        height: 961,
    },
    headlineText: {
        fontFamily: 'Lato',
        fontSize: 36,
        fontStyle: 'normal',
        fontWeight: 400,
        textAlign: 'center',
        width: 682
    },
    decriptionText: {
        fontFamily: 'Roboto',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: 400,
        textAlign: 'left',
        width: 576
    },
    topSpacer: {
        height: '61px'
    },
    midSpacer: {
        height: '19px'
    },
    imageSpacer: {
        height: '30px'
    },
    background1: {
        backgroundImage: props => props.background,
        height: 700,
    },
}));

export interface FeatureProps {
    children: JSX.Element[] | JSX.Element,
    headline: String,
    text: String,
    background: string
}

const Feature = ({ children, headline, text, background }: FeatureProps) => {
    const classes = useStyles({ background: `url(${background})`});
    return (
        <Grid item container xs={6} direction='column' alignItems='center' className={`${classes.featureCard} ${classes.background1}`} zeroMinWidth>
            <Grid item zeroMinWidth className={classes.topSpacer} />
            <Grid item zeroMinWidth>
                <Typography variant='h2' className={classes.headlineText}>{headline}</Typography>
            </Grid>
            <Grid item zeroMinWidth className={classes.midSpacer} />
            <Grid item zeroMinWidth>
                {children}
            </Grid>
            <Grid item zeroMinWidth className={classes.imageSpacer} />
            <Grid item zeroMinWidth>
                <Typography variant='body2' className={classes.decriptionText}>{text}</Typography>
            </Grid>
        </Grid>
    )
}

export default Feature
