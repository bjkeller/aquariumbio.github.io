import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Divider from "@material-ui/core/Divider";
import Link from '@material-ui/core/Link';
import { Link as GatsbyLink } from 'gatsby';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import type { FooterPage } from './footerpage'

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  bottomLink: {
    display: 'flex',
    alignItems: 'center',
    '& .MuiTypography-root': {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '18px',
      lineHeight: '26px',
      textTransform: 'uppercase',
    },
    "&.MuiTypography-colorPrimary": {
      color: '#2399CC',
    },
  }
}));

export interface FooterPageBottomNavProps {
    pageLeft: FooterPage,
    pageRight: FooterPage
};

export default function FooterPageBottomNav({ pageLeft, pageRight }: FooterPageBottomNavProps) {
  const classes = useStyles();

  return (
      <Grid container item className={classes.container}>
        <Grid item zeroMinWidth xs={12} className={classes.divider}>
          <Divider  />
        </Grid>

        <Grid item zeroMinWidth xs={12} className={classes.footer}>
          <Link underline="none" component={GatsbyLink} to={`/${pageLeft}`} className={classes.bottomLink} >
            <ChevronLeft />
            <Typography>{pageLeft}</Typography>
          </Link>

          <Link underline="none" component={GatsbyLink} to={`/${pageRight}`} className={classes.bottomLink} >
            <Typography>{pageRight}</Typography>
            <ChevronRight />
          </Link>
        </Grid>
      </Grid>
  )
}
