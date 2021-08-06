import React from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export interface ThankYouProps {

}

const ThankYou: React.SFC<ThankYouProps> = () => {
  return (
    <Container>
      <Typography variant="h1" paragraph>
        Thank you for contacting us
      </Typography>
      <Typography variant="body1" >
        Someone on the team will follow up with you shortly.
      </Typography>
    </Container>
   );
}

export default ThankYou;
