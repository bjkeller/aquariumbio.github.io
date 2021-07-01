import React from "react";
import Layout from "../components/layout";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SubNav from '../components/subnav';
import Divider from "@material-ui/core/Divider";
import FooterPageBottomNav from '../components/footerpagebottomnav';
import { string, bool, oneOf, node } from 'prop-types';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '50px 375px'
  },
  header: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '50px',
    lineHeight: '66px',
    color: '#333333',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    textTransform: 'capitalize'
  },
  subtitle: {
    color: '#666666',
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
}));

export type FooterPage = 'support' | 'contributors' | 'license' | 'releases'

export interface FooterPageProps {
  currentPage: FooterPage,
  subtitle?: string,
  divider?: boolean,
  children: JSX.Element[] | JSX.Element,
  pageLeft: FooterPage,
  pageRight: FooterPage
};

export default function FooterPage({ currentPage, subtitle, divider, children, pageLeft, pageRight }: FooterPageProps) {
  const classes = useStyles();

  return (
    <Layout>
      <Grid container className={classes.container}>

        <Grid item zeroMinWidth xs={12}>
          <SubNav currentPage={currentPage} />
        </Grid>

        <Grid item zeroMinWidth xs={12}>
          <Typography variant="h4" className={classes.header}>{currentPage}</Typography>

          { !!subtitle && (
            <Typography variant="subtitle1" className={classes.subtitle}>
              {subtitle}
            </Typography>
          )}

          {divider && <Divider className={classes.divider} />}
        </Grid>

        <Grid item zeroMinWidth xs={12}>
          {children}
        </Grid>

        <FooterPageBottomNav pageLeft={pageLeft} pageRight={pageRight} />

      </Grid>
    </Layout>
  )
}

FooterPage.propTypes = {
  page: oneOf(['support', 'contributors', 'license', 'releases',]).isRequired,
  subtitle: string,
  divider: bool,
  children: node,
  pageLeft: oneOf(['support', 'contributors', 'license', 'releases',]).isRequired,
  pageRight: oneOf(['support', 'contributors', 'license', 'releases',]).isRequired,
};

FooterPage.defaultProps = {
  divider: true,
};
