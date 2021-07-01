import React from "react";
import Layout from "../components/layout";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SubNav from '../components/subnav';
import ContactForm from '../components/contactform';
import Divider from "@material-ui/core/Divider";
import Link from '@material-ui/core/Link';
import FooterPageBottomNav from '../components/footerpagebottomnav';
import { ContributorInfo } from "../pagedata/contributors-data";

const useStyles = makeStyles((theme) => ({
  root: {

  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
}));

interface ContributorProps {
  contributor: ContributorInfo,
  divider: Boolean
}

export default function Contributor({ contributor, divider }: ContributorProps) {
  const classes = useStyles();
  const { name, details } = contributor;

  return (
    <Grid container item zeroMinWidth xs={12} className={classes.root}>
      <Grid item zeroMinWidth xs={3}>
        <Typography variant="h6">
          {name}
        </Typography>
      </Grid>

      <Grid item zeroMinWidth xs={9}>
        <Typography variant="body1">
          {details}
        </Typography>
      </Grid>

      {divider && <Grid item zeroMinWidth xs={12}>
        <Divider className={classes.divider} />
      </Grid>}
    </Grid>
  )
}
