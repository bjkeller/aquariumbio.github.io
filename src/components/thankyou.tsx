import React from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
      // marginTop: theme.spacing(1),
      // background: '#40D3FD',
      color: '#FFF'
    },

}));

export interface ThankYouProps {

}

const ThankYou: React.SFC<ThankYouProps> = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h4" paragraph>
        Thank you for contacting us
      </Typography>
      <Typography variant="body1" >
        Someone on the team will follow up with you shortly.
      </Typography>
    </Container>
   );
}

export default ThankYou;
