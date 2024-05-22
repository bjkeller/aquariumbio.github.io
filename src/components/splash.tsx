import React from "react"
import { StaticImage } from 'gatsby-plugin-image'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from "@material-ui/core/styles"
import Typography from '@material-ui/core/Typography'
import splashImage from '../images/backgrounds/homepage.svg'

const useStyles = makeStyles((theme) => ({
    splashPage: {
        backgroundImage: `url(${splashImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: 750,
        width: '100%',

    },
    headlineText: {
        fontFamily: 'Lato',
        fontSize: 50,
        fontStyle: 'normal',
        fontWeight: 400,
        textAlign: 'center',
        color: '#FFFFFF',
        width: 1055
    },
    descriptionText: {
        fontFamily: 'Roboto',
        fontSize: 21,
        fontStyle: 'normal',
        fontWeight: 400,
        textAlign: 'center',
        color: '#FFFFFF',
        width: 780
    },
    topSpacer: {
        height: '159px'
    },
    midSpacer: {
        height: '17px'
    },
    iconSpacer: {
        height: '38px'
    },
    iconText: {
        fontFamily: 'Lato',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 700,
        textAlign: 'center',
        color: '#FFFFFF'
    }
}));

interface IconProps {
    children: JSX.Element[] | JSX.Element,
    title: string
}

const FeatureIcon = ({ children, title }: IconProps) => {
    const classes = useStyles();

    return (
        <Grid item container xs={1} direction='column' alignItems='center'>
            <Grid item>
                {children}
            </Grid>
            <Grid item>
                <Typography variant='body2' className={classes.iconText}>
                    {title}
                </Typography>
            </Grid>
        </Grid>
    )
}

const ComposeIcon = () => (
    <FeatureIcon title='COMPOSE'>
        <StaticImage
            src="../images/compose-icon.png"
            alt="Icon for compose feature"
            width={77}
            height={77}
        />
    </FeatureIcon>
)

const ManageIcon = () => (
    <FeatureIcon title='MANAGE'>
        <StaticImage
            src="../images/manage-icon.png"
            alt="Icon for manage feature"
            width={77}
            height={77}
        />
    </FeatureIcon>
)

const ExperimentIcon = () => (
    <FeatureIcon title='EXPERIMENT'>
        <StaticImage
            src="../images/experiment-icon.png"
            alt="Icon for experiment feature"
            width={77}
            height={77}
        />
    </FeatureIcon>
)

const DataIcon = () => (
    <FeatureIcon title='DATA'>
        <StaticImage
            src="../images/data-icon.png"
            alt="Icon for data feature"
            width={77}
            height={77}
        />
    </FeatureIcon>
)

const Splash = () => {
    const classes = useStyles();

    return (
        <Grid item container direction='column' alignItems='center' className={classes.splashPage}>
            <Grid item className={classes.topSpacer} />
            <Grid item >
                <Typography variant='h2' className={classes.headlineText}>
                    Executable Protocols, Reproducible Results, Breakthrough Discoveries
                </Typography>
            </Grid>
            <Grid item className={classes.midSpacer} />
            <Grid item>
                <Typography variant='body2' className={classes.descriptionText}>
                    Aquarium is software that helps you scale your lab work, reduce costly mistakes, and communicate results precisely and efficiently.
                </Typography>
            </Grid>
            <Grid item className={classes.iconSpacer} />

            <Grid item container direction='row' alignItems='center'>
                <Grid item xs={4}/>
                <ComposeIcon />
                <ManageIcon />
                <ExperimentIcon />
                <DataIcon />
                <Grid item xs={4}/>
            </Grid>
        </Grid>
    )
}

export default Splash
