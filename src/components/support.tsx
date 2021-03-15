import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    supportCard: {
        height: 982,
        backgroundColor: '#2399CC'
    },
    headlineText: {
        fontFamily: 'Lato',
        fontSize: 50,
        fontStyle: 'normal',
        fontWeight: 400,
        // line-height: 60px;
        // letter-spacing: 0px;
        textAlign: 'center',
        color: '#FFFFFF',
        width: 383
    },
    descriptionText: {
        fontFamily: 'Roboto',
        fontSize: 21,
        fontStyle: 'normal',
        fontWeight: 400,
        // line-height: 30px;
        // letter-spacing: 0px;
        textAlign: 'center',
        color: '#FFFFFF',
        width: 968
    },
    topSpacer: {
        height: '135px'
    },
    midSpacer: {
        height: '24px'
    },
    formSpacer: {
        height: '42px'
    }
}))

export interface SupportProps {
    headline: String,
    text: String
}

const Support = ({ headline, text }: SupportProps) => {
    const classes = useStyles();

    return (
        <Grid container direction='column' alignItems='center' className={classes.supportCard}>
            <Grid item xs={12} className={classes.topSpacer} />
            <Grid item xs={12}>
                <Typography variant='h2' className={classes.headlineText}>
                    {headline}
                </Typography>
            </Grid>
            <Grid item xs={12} className={classes.midSpacer} />
            <Grid item xs={12}>
                <Typography variant='body2' className={classes.descriptionText}>
                    {text}
                </Typography>
            </Grid>
            <Grid item xs={12} className={classes.formSpacer} />
            <Grid item xs={12}>
                form
            </Grid>
        </Grid>
    )
}

export default Support
