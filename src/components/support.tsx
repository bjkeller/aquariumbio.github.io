import React from 'react'
import Box from '@material-ui/core/Box'
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
            <Grid item xs={12}>
                <Typography variant='h2' className={classes.headlineText}>
                    {headline}
                </Typography>
                <Typography variant='body2' className={classes.descriptionText}>
                    {text}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Support
