import React from "react";
import Layout from "../components/layout";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { graphql } from 'gatsby';
import WorkflowCard from '../components/workflowcard';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: ' 0 375px'
  },
  header: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '50px',
    lineHeight: '66px',
    color: '#333333',
  }
}));

export default function WorkflowPage() {
  const classes = useStyles();

  const data = graphql`
    {
      githubData {
        data {
          search {
            edges {
              node {
                description
                name
                updatedAt
                languages {
                  nodes {
                    name
                  }
                }
                url
              }
            }
          }
        }
        id
      }
    }
  `;


  const workflowCards = data.githubData.data.search.edges.map((wf) => {
    return (
      <Grid item zeroMinWidth>
        <WorkflowCard
          workflow={wf.node.name}
          description={wf.node.description}
          link={`/workflow/${wf.node.name}`}
        />
      </Grid>
    )
  });

  return (
    <Layout>
      <Grid container className={classes.container} spacing={2} justifyContent="center" alignContent="center">
        <Grid item zeroMinWidth xs={12}>
          <Typography variant="h3" className={classes.header}>Community Workflows</Typography>
        </Grid>
        {workflowCards}
      </Grid>
    </Layout>
  )
};
