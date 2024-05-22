import React from 'react'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link';
import { Link as GatsbyLink } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    background: '#40D3FD',
    color: '#FFF',
    height: 60,
    width: 260,
  }
}));

export interface LinkBtnProps {
  linkTo: string,
  text: string,
  type?: string,
};


const LinkBtn = ({linkTo, text, type}: LinkBtnProps) => {
  const classes = useStyles();
  return (
    <Button
      component={GatsbyLink}
      to={linkTo}
      className={classes.root}
      type={type}
    >
      {text}
    </Button>
  );
};

LinkBtn.defaultProps = {
  type: 'button'
}
export default LinkBtn;
