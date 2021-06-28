import React from "react";
import Layout from "../components/layout";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import background from '../images/backgrounds/blue-scene.svg';
import ContactForm from '../components/contactform';


const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: 950,
    width: '100vw',
    textAlign: 'center',
    paddingTop: '135px',
    alignContent: 'flex-start',

  },
  header: {
    color: '#FFF',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '50px',
    lineHeight: '66px',
  },
  subtitle: {
    color: '#FFF',
    fontWeight: 'normal'
  },

}));

export default function GetStarted() {
  const classes = useStyles();
  return (
      <Grid container className={classes.container} spacing={1}>
        <Grid item zeroMinWidth xs={12}>
          <Typography variant="h3" className={classes.header}>Ready To Dive In?</Typography>
          <Typography variant="h6" className={classes.subtitle}>
            We’re excited to walk you through how Aquarium can meet the needs of your lab.
          </Typography>
        </Grid>
        <Grid item zeroMinWidth xs={12}>
          <ContactForm />
        </Grid>

      </Grid>

  )
}
