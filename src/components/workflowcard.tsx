import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import IconLinkBtn from './iconlinkbtn';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles({
    workflow: {
        borderRadius: 0,
        height: '260px',
        width: '268px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    title: {
        fontFamily: 'Lato',
        fontSize: '21px',
        fontStyle: 'normal',
        fontWeight: 700,
        textAlign: 'left'
    },
    description: {
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 400,
        textAlign: 'left'
    },
    cardActions: {
        justifyContent: 'flex-end',
    }
});

export interface WorkflowProps {
    workflow: string,
    description: string,
    link: string,
}

const WorkflowCard = ({workflow, description, link}: WorkflowProps) => {
    const classes = useStyles();

    return (
        <Card className={classes.workflow}>
            <CardContent>
                <Typography variant='h5' className={classes.title} gutterBottom>
                    {workflow}
                </Typography>
                <Typography variant='body2' component='p' className={classes.description}>
                    {description}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <IconLinkBtn linkTo={link} icon={<ChevronRightIcon />} />
            </CardActions>
        </Card>
    );
}

export default WorkflowCard
