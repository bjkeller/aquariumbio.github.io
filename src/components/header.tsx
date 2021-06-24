import React from "react"
import { AppBar, Toolbar } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import AquariumLogo from "./aquariumlogo"
import HeaderLinks from './headerlinks'
import Typography from '@material-ui/core/Typography';

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
  }

})

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position='static' className={classes.header} color='default'>
            <Toolbar  className={classes.header}>
              <div className={classes.brandmark}>
                <AquariumLogo />
                <Typography variant='h4' classes={{ h4: classes.aquarium}}>Aquarium</Typography>
              </div>
              <HeaderLinks />
            </Toolbar>
        </AppBar>
    )
}

export default Header
