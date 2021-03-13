import React from 'react'
import Grid from '@material-ui/core/Grid'

const HeaderLinks = () => {
    return (
        <Grid item container direction='row' alignItems='center' spacing={2}>
            <Grid item>
                features link
            </Grid>
            <Grid item>
                community workflows link
            </Grid>
            <Grid item>
                case studies link
            </Grid>
            <Grid item>
                get started link
            </Grid>
        </Grid>
    )
}

export default HeaderLinks
