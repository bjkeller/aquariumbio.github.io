import React from 'react'
import { Link as GatsbyLink } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
          "&.MuiIconButton-colorPrimary": {
        color: '#40D3FD',
      },
  }
}));

export interface IconLinkBtnProps {
  linkTo: string,
  icon: JSX.Element
};

const IconLinkBtn = ({linkTo, icon,}: IconLinkBtnProps) => {
  const classes = useStyles();
  return (
    <IconButton
      component={GatsbyLink}
      to={linkTo}
      className={classes.root}
      color='primary'
    >
      {icon}
    </IconButton>
  );
};

export default IconLinkBtn;
