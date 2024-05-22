import React from "react";
import Layout from "../components/layout";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Divider from "@material-ui/core/Divider";
import FooterPageBottomNav from '../components/footerpagebottomnav';
import { string, bool, oneOf, node } from 'prop-types';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '50px 20%'
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

const DisplayWorklow = ({ pageContext }) => {
  const classes = useStyles();
  const { workflow } = pageContext;
console.log(workflow);
  return (
    <Layout>
      <Grid container className={classes.container}>
        <Grid item zeroMinWidth xs={12}>
          <Typography variant="h4" className={classes.header}>{workflow.name}</Typography>

          <Typography variant="subtitle1" className={classes.subtitle}>
            {workflow.description}
          </Typography>

          <Divider className={classes.divider} />
        </Grid>

        <Grid item zeroMinWidth xs={12}>
          {workflow.readme}
        </Grid>

        <FooterPageBottomNav pageLeft={`workflow/${workflow.previous}`} pageRight={`workflow/${workflow.next}`} />

      </Grid>
    </Layout>
  )
}

DisplayWorklow.propTypes = {
  // currentPage: oneOf(['support', 'contributors', 'license', 'releases',]).isRequired,
  // subtitle: string,
  // divider: bool,
  // children: node,
  // pageLeft: oneOf(['support', 'contributors', 'license', 'releases',]).isRequired,
  // pageRight: oneOf(['support', 'contributors', 'license', 'releases',]).isRequired,
};

export default DisplayWorklow;
