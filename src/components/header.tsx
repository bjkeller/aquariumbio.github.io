import React from "react"
import { AppBar, Toolbar } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import AquariumLogo from "./aquariumlogo"
import HeaderLinks from './headerlinks'

const useStyles = makeStyles({
  header: {
    height: 91,
    flexGrow: 1
  }
})

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position='static' className={classes.header} color='default'>
            <Toolbar>
                <AquariumLogo />
                <HeaderLinks />
            </Toolbar>
        </AppBar>
    )
}

export default Header
