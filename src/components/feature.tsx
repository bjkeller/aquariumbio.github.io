import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles, rgbToHex } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    // TODO: features have different backgrounds with layered images
    // may need to pass in theme with props -- covered by material-ui docs?
    // see note in features.tsx
    featureCard: {
        height: 702,
        background: 'linear-gradient(0deg, rgba(64, 211, 253, 0.15) 0%, rgba(203, 241, 255, 0.0257813) 82.81%, rgba(232, 248, 255, 0) 100%)',
    },
    headlineText: {
        fontFamily: 'Lato',
        fontSize: 36,
        fontStyle: 'normal',
        fontWeight: 400,
        // line-height: 44px;
        // letter-spacing: 0px;
        textAlign: 'center',
        width: 682
    },
    decriptionText: {
        fontFamily: 'Roboto',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: 400,
        // line-height: 26px;
        // letter-spacing: 0px;
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
    }
}));

export interface FeatureProps {
    children: JSX.Element[] | JSX.Element, 
    headline: String,
    text: String
}

const Feature = ({ children, headline, text }: FeatureProps) => {
    const classes = useStyles();

    return (
        <Grid item container xs={6} direction='column' alignItems='center' className={classes.featureCard}>
            <Grid item className={classes.topSpacer} />
            <Grid item>
                <Typography variant='h2' className={classes.headlineText}>{headline}</Typography>
            </Grid>
            <Grid item className={classes.midSpacer} />
            <Grid item>
                {children}
            </Grid>
            <Grid item className={classes.imageSpacer} />
            <Grid item>
                <Typography variant='body2' className={classes.decriptionText}>{text}</Typography>
            </Grid>
        </Grid>
    )
}

export default Feature