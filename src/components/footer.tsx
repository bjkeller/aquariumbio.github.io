import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'
import AquariumLogo from './aquariumlogo'
import Link from '@material-ui/core/Link';
import { Link as GatsbyLink } from 'gatsby';
import Divider from '@material-ui/core/Divider'

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
    },
    bottomSpacer: {
        height: '91px'
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
    },
    brandmark: {
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none',
        justifySelf: 'center'
    },
    aquarium: {
        FontFamily: 'Lato',
        FontStyle: 'Regular',
        FontSize: '32px',
        LineHeight: '66px',
        Align: 'Center',
        VerticalAlign: 'Top',
        color: '#FFF',
        flexGrow: 1,
    },
    root: {
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '22px',
        "&.MuiTypography-colorPrimary": {
        color: '#FFF',
        },
    }
}))

const Footer = () => {
    const classes = useStyles();

    return (
        <Grid item container justifyContent="center" alignItems="center" className={classes.footerCard}>
            <Grid item xs={12} className={classes.topSpacer} />

            <Grid item xs={12} className={classes.center}>
              <GatsbyLink to='/' className={classes.brandmark}>
                <AquariumLogo />
                <Typography variant='h4' classes={{ h4: classes.aquarium}}>Aquarium</Typography>
              </GatsbyLink>
            </Grid>

            <Grid item xs={12}className={classes.midSpacer} />

            <Grid container item xs={12} spacing={1} className={classes.center}>
                <Grid item>
                    <Link underline="none" component={GatsbyLink} to="/support" className={classes.root}>
                        SUPPORT
                    </Link>
                </Grid>
                <Grid item>
                    <Divider orientation="vertical" />
                </Grid>
                <Grid item>
                    <Link underline="none" component={GatsbyLink} to="/contributors" className={classes.root}>
                        CONTRIBUTORS
                    </Link>
                </Grid>
                <Grid item>
                    <Divider orientation="vertical" />
                </Grid>
                <Grid item>
                    <Link underline="none" component={GatsbyLink} to="/license" className={classes.root}>
                        LICENSE
                    </Link>
                </Grid>
                <Grid item>
                    <Divider orientation="vertical" />
                </Grid>
                <Grid item>
                    <Link underline="none" component={GatsbyLink} to="/releases" className={classes.root} >
                        RELEASES
                    </Link>
                </Grid>
                <Grid item>
                    {/* TODO UPDATE LINK */}
                    <Link underline="none" component={GatsbyLink} to="https://aquariumbio.github.io/" className={classes.root} >
                        DOCUMENTATION
                    </Link>
                </Grid>
            </Grid>

            <Grid item xs={12} className={classes.copyrightSpacer} />

            <Grid item xs={12}>
                <Typography variant='body2' className={classes.textStyle} align='center'>
                    {'© 2021 University of Washington  |  info@aquarium.bio'}
                </Typography>
            </Grid>

            <Grid item xs={12} className={classes.bottomSpacer} />

        </Grid>
    )
}

export default Footer
