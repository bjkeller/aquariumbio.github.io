import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {

  },
}));

export default function RelaseDetails() {
  const classes = useStyles();

  return (
    <Grid item zeroMinWidth xs={12}>
      <Typography variant="body1" paragraph>
        <b>version number</b>
      </Typography>

      <Typography variant="body1" paragraph>
        This release includes the following changes:
      </Typography>

      <Typography variant="body1" paragraph>
        TODO: Query github API
      </Typography>

      <Typography variant="body1" paragraph>

      </Typography>
    </Grid>
  )
}
