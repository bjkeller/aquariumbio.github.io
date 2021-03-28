import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    workflow: {
        borderRadius: 0,
        height: '260px',
        width: '268px'
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
    }
});

export interface WorkflowProps {
    workflow: string,
    description: string
}

const WorkflowCard = ({workflow, description}: WorkflowProps) => {
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
            <CardActions>
                <Button size="small">da button ></Button>
            </CardActions>
        </Card>
    );
}

export default WorkflowCard