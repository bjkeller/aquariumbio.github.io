import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'
import AquariumLogo from './aquariumlogo'

const useStyles = makeStyles((theme) => ({
    footerCard: {
        height: 334,
        backgroundColor: '#8164A6'
    },
    textStyle: {
        color: "#FFFFFF"
    },
    topSpacer: {
        height: '57px'
    },
    midSpacer: {
        height: '34px'
    },
    copyrightSpacer: {
        height: '9px'
    }
}))


const Footer = () => {
    const classes = useStyles();

    return (
        <Grid item container  className={classes.footerCard}>
            <Grid item xs={12} className={classes.topSpacer} />
            <Grid item xs={12}>
                <Typography variant='body2' align='center'>
                    <AquariumLogo />
                </Typography>
            </Grid>
            <Grid item xs={12}className={classes.midSpacer} />
            <Grid item xs={12}>Links</Grid>
            <Grid item xs={12} className={classes.copyrightSpacer} />
            <Grid item xs={12}>
                <Typography variant='body2' className={classes.textStyle} align='center'>
                    {'© 2021 University of Washington  |  info@aquarium.bio'}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Footer