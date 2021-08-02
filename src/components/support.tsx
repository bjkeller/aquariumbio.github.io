import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'
import ContactForm from '../components/contactform';
import backgroundImg from '../images/backgrounds/blue-scene.svg'

const useStyles = makeStyles((theme) => ({
    supportCard: {
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPostion: 'center',
        backgroundRepeat: 'no-repeat',
        height: 982,
        width: '100%',
    },
    headlineText: {
        fontFamily: 'Lato',
        fontSize: 50,
        fontStyle: 'normal',
        fontWeight: 400,
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
        <Grid id="get-started" item container direction='column' alignItems='center' justifyContent='center' className={classes.supportCard}>
            <Grid item className={classes.topSpacer} />
            <Grid item >
                <Typography variant='h2' className={classes.headlineText}>
                    {headline}
                </Typography>
            </Grid>
            <Grid item className={classes.midSpacer} />
            <Grid item >
                <Typography variant='body2' className={classes.descriptionText}>
                    {text}
                </Typography>
            </Grid>
            <Grid item className={classes.formSpacer} />
            <Grid item >
                <ContactForm />
            </Grid>
        </Grid>
    )
}

export default Support
