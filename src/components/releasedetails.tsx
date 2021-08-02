import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  btn: {
    "&.MuiButton-root": {
      backgroundColor: '#2399CC',
      '&:hover': {
        backgroundColor: '#40D3FD',
      }
    },
  }
}));

export interface releaseDetails {
  id: string,
  name: string,
  version: string,
  description: string,
  isLatest: boolean,
  publishedAt: string,
  author: string,
  downloadUrl: string
}

export interface releaseDetailProps {
  releaseDetails: releaseDetails,
}

export default function RelaseDetails({ releaseDetails }: releaseDetailProps) {
  const classes = useStyles();
  const { id, name, version, description, isLatest, publishedAt, author, downloadUrl } = releaseDetails

  return (
    <Grid item zeroMinWidth xs={12} id={id}>
      { isLatest &&
        <Typography variant="body1" paragraph>
          <b>{version}</b>: {name}, {publishedAt}
        </Typography>
      }

      <Typography variant="body1" paragraph>
        This release includes the following changes:
      </Typography>

      <Typography variant="body1" paragraph>
        {description}
      </Typography>

      <Typography variant="body1" paragraph>
        Contributions by: @{author}
      </Typography>

      <Button variant="contained" color="primary" href={downloadUrl} className={classes.btn}>
        { isLatest ? 'download latest version' : `download ${version}`}
      </Button>

    </Grid>
  )
}
