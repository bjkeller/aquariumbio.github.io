import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'
import WorkflowCard from './workflowcard'
import backgroundImg from '../images/backgrounds/circle-fish.svg';
import LinkBtn from './linkbtn';
import { useStaticQuery, graphql } from "gatsby"

const useStyles = makeStyles((theme) => ({
    openContentCard: {
        background: `url(${backgroundImg})`,
        height: 961,
        width: '100%'
    },
    headlineText: {
        fontFamily: 'Lato',
        fontSize: 50,
        fontStyle: 'normal',
        fontWeight: 400,
        textAlign: 'center',
        width: 1296
    },
    descriptionTest: {
        fontFamily: 'Roboto',
        fontSize: 21,
        fontStyle: 'normal',
        fontWeight: 400,
        textAlign: 'center',
        width: 1174
    },
    topSpacer: {
        height: '105px'
    },
    midSpacer: {
        height: '38px'
    },
    cardSpacer: {
        height: '52px'
    },
    buttonSpacer: {
        height: '37px'
    }
}))

export interface ContentProps {
    headline: String,
    text: String
}

const Content = ({ headline, text }: ContentProps) => {
    const classes = useStyles();

    const workflowSearchQuery = useStaticQuery(graphql`
    {
      githubData {
        data {
          search {
            repos {
              repo {
                description
                url
                readme {
                  text
                }
                name
                updatedAt
                languages {
                  nodes {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

    const workflows = workflowSearchQuery.githubData.data.search.repos.map((wf) => {
        const workflow = {
            description: wf.repo.description,
            name: wf.repo.name,
            updatedAt: wf.repo.updatedAt,
            languages: wf.repo.languages.nodes.map((repo) => repo.name),
            url: wf.repo.url
        };
        return workflow;
    });

    return (
        <Grid id="community-workflows" container direction='column' alignItems='center' justifyContent='center' className={classes.openContentCard}>
            <Grid item className={classes.topSpacer} />
            <Grid item>
                <Typography variant='h2' className={classes.headlineText}>
                    {headline}
                </Typography>
            </Grid>
            <Grid item className={classes.midSpacer} />
            <Grid item>
                <Typography variant='body2' className={classes.descriptionTest}>
                    {text}
                </Typography>
            </Grid>
            <Grid item className={classes.cardSpacer} />
            <Grid item container direction='row' alignItems='center' justifyContent='center' spacing={1}>
                <Grid item>
                    <WorkflowCard
                        workflow={workflows[0].name}
                        description={workflows[0].description}
                        link={`/workflow/${workflows[0].name}`}
                    />
                </Grid>
                <Grid item>
                    <WorkflowCard
                        workflow={workflows[1].name}
                        description={workflows[1].description}
                        link={`/workflow/${workflows[1].name}`}
                    />
                </Grid>
                <Grid item>
                    <WorkflowCard
                        workflow={workflows[2].name}
                        description={workflows[2].description}
                        link={`/workflow/${workflows[2].name}`}
                    />
                </Grid>
                <Grid item>
                    <WorkflowCard
                        workflow={workflows[3].name}
                        description={workflows[3].description}
                        link={`/workflow/${workflows[3].name}`}
                    />
                </Grid>
            </Grid>
            <Grid item className={classes.buttonSpacer} />
            <Grid item>
                <LinkBtn linkTo="/#get-started" text="get started"/>
            </Grid>
        </Grid>
    )
};

export default Content;
