import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    footerCard: {
        height: 334,
        backgroundColor: '#8164A6'
    },
    textStyle : {
        color: "#FFFFFF"
    }
}))


const Footer = () => {
    const classes = useStyles();

    return (
        <Grid item xs={12} className={classes.footerCard}>
            <Typography variant='body2' align='center'>
                Aquarium Logo
            </Typography>
            <Typography variant='body2' className={classes.textStyle} align='center'>
                {'© 2021 University of Washington  |  info@aquarium.bio'}
            </Typography>
        </Grid>
    )
}

export default Footer