import React from 'react'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link';
import { Link as GatsbyLink } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
  root: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '18px',
      lineHeight: '22px',
      "&.MuiTypography-colorPrimary": {
        color: '#2399CC',
      },
  },

  list: {
    display: 'inline-flex',
    '& li': {
      borderBottom: '1px solid #D8D8D8',
    },

  '& .Mui-selected, .Mui-selected:hover': {
    borderBottom: '5px solid #40D3FD',
    background: theme.palette.background.paper,
  },
  }

}));

export interface ContentProps {
    currentPage: String,
};

const SubNav = ({ currentPage }: ContentProps ) => {
  const classes = useStyles();

    return (
      <Grid item container direction='row' alignItems='center' justify='flex-start' >
        <Grid item xs={6}>
          <List
            aria-label="tablist"
            role="tablist"
            className={classes.list}
          >
            <ListItem
              role="tab"
              selected={currentPage === 'support'}
              key={'support'}
            >
              <Link underline="none" component={GatsbyLink} to="/support" className={classes.root}>
                  SUPPORT
              </Link>
            </ListItem>

            <ListItem
              role="tab"
              selected={currentPage === 'contributors'}
              key={'contributors'}
            >
              <Link underline="none" component={GatsbyLink} to="/contributors" className={classes.root}>
                  CONTRIBUTORS
              </Link>
            </ListItem>

            <ListItem
              role="tab"
              selected={currentPage === 'license'}
              key={'license'}
            >
              <Link underline="none" component={GatsbyLink} to="/license" className={classes.root}>
                  LICENSE
              </Link>
            </ListItem>

            <ListItem
              role="tab"
              selected={currentPage === 'releases'}
              key={'releases'}
            >
              <Link underline="none" component={GatsbyLink} to="/releases" className={classes.root} >
                  RELEASES
              </Link>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    )
}

export default SubNav
