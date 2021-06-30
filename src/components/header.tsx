import React from "react"
import { AppBar, Toolbar } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import AquariumLogo from "./aquariumlogo"
import HeaderLinks from './headerlinks'
import Typography from '@material-ui/core/Typography';
import { Link as GatsbyLink } from 'gatsby';

const useStyles = makeStyles({
  header: {
    height: 91,
    flexGrow: 1,
    justifyContent: 'space-between'
  },
  aquarium: {
    FontFamily: 'Lato',
    FontStyle: 'Regular',
    FontSize: '32px',
    LineHeight: '66px',
    Align: 'Center',
    VerticalAlign: 'Top',
    color: '#333333',
    flexGrow: 1,
  },
  brandmark: {
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
  }

})

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position='static' className={classes.header} color='default' color="transparent">
            <Toolbar  className={classes.header}>
              <GatsbyLink to='/' className={classes.brandmark}>
                <AquariumLogo />
                <Typography variant='h4' classes={{ h4: classes.aquarium}}>Aquarium</Typography>
              </GatsbyLink>
              <HeaderLinks />
            </Toolbar>
        </AppBar>
    )
}

export default Header
