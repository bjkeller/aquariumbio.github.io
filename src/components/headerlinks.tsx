import React from 'react'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link';
import { Link as GatsbyLink } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
 root: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '22px',
    "&.MuiTypography-colorPrimary": {
      color: '#2399CC',
    },
 }
});

const HeaderLinks = () => {
    const classes = useStyles();
    return (
        <Grid item container direction='row' alignItems='center' justifyContent='space-evenly' spacing={2}>
            <Grid item>
                <Link component={GatsbyLink} to="/#features" className={classes.root} underline='none'>
                    FEATURES
                </Link>
            </Grid>
            <Grid item>
                <Link component={GatsbyLink} to="/#community-workflows" className={classes.root} underline='none'>
                    COMMUNITY WORKFLOWS
                </Link>
            </Grid>
            <Grid item>
                <Link component={GatsbyLink} to="/case-studies" className={classes.root} activeStyle={{ color: "black" }} underline='none'>
                    CASE STUDIES
                </Link>
            </Grid>
            <Grid item>
                <Link component={GatsbyLink} to="/#get-started" className={classes.root} underline='none'>
                    GET STARTED
                </Link>
            </Grid>
        </Grid>
    )
}

export default HeaderLinks
