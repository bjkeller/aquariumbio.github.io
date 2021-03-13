import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Grid, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles({
    textStyle: {
        fontFamily: 'Lato',
        fontSize: '32px',
        fontStyle: 'normal',
        fontWeight: 400,
        textAlign: 'center',
    }
});



const AquariumLogo = () => {
    const classes = useStyles();

    return (
    <Grid container direction='row' alignItems='center' wrap='nowrap' spacing={2}>
        <Grid item>
            <StaticImage
                src="../images/aq-logo.png"
                alt="Aquarium logo"
                width={62}
                height={62}
            />
        </Grid>
        <Grid item>
            <Typography variant='h2' className={classes.textStyle}>
                Aquarium
            </Typography>
        </Grid>
    </Grid>
)}

export default AquariumLogo