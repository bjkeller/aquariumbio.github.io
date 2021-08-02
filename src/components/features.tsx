import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
import backgroundImg from '../images/backgrounds/thin-sand-bar.svg';
import LinkBtn from './linkbtn';

const useStyles = makeStyles((theme) => ({
    featuresPage: {
        flexGrow: 1,
        width: '100%',
        textAlign: 'center',
        maxHeight: 1517
    },
    gridContainer: {
        height: '100%'
    },
    buttonContainer: {
        background: `url(${backgroundImg})`,
        width: '100%',
        height: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

export interface FeatureProps {
    children: JSX.Element[] | JSX.Element,
    id: string,
}

const Features = ({ children }: FeatureProps) => {
    const classes = useStyles();

    return (
        <div id="features" className={classes.featuresPage}>
            <Grid container alignItems='center' justifyContent='center' className={classes.gridContainer}>
                {children}
                <Grid item className={classes.buttonContainer}>
                    <LinkBtn linkTo="/#get-started" text="get started"/>
                </Grid>
            </Grid>
        </div>
)}

export default Features
