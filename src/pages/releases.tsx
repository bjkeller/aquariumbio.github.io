import React from "react";
import FooterPage from '../components/footerpage';
import { useStaticQuery, graphql } from "gatsby"
import RelaseDetails from "../components/releasedetails";
import SimpleAccordion from '../components/simpleaccordion';
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  divider: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
}));

export default function releases() {
  const classes = useStyles();

  const releaseQuery = useStaticQuery(graphql`
  {
    githubData {
      data {
        repository {
          description
          releases {
            edges {
              node {
                description
                id
                isLatest
                name
                publishedAt(formatString: "YYYY MM DD")
                tag {
                  name
                }
                author {
                  login
                }
              }
            }
          }
        }
      }
      id
    }
  }
`);

  let latest: JSX.Element = <span />;

  const releases = releaseQuery.githubData.data.repository.releases.edges.map((release, i: number) => {
    const releasedetails = {
      author: release.node.author.login,
      description: release.node.description,
      id: release.node.id,
      isLatest: release.node.isLatest,
      name: release.node.name,
      publishedAt: release.node.publishedAt,
      version: release.node.tag.name,
      downloadUrl: release.node.tag.zipballUrl
    };

    if (release.node.isLatest || i === 0) {
      releasedetails.isLatest = true
      latest = <RelaseDetails releaseDetails={releasedetails} />
      return;
    } else {
      return(
        <SimpleAccordion
          key={releasedetails.id}
          id={releasedetails.id}
          summary={
            <Typography variant="body1" paragraph>
              <b>{releasedetails.version}</b>: {releasedetails.name}, {releasedetails.publishedAt}
            </Typography>
          }
        >
          <RelaseDetails releaseDetails={releasedetails} />
        </SimpleAccordion>
      );
    }
  });

  return (
    <FooterPage
        currentPage="releases"
        pageLeft="license"
        pageRight="support"
      >
        {latest}
        <Divider className={classes.divider} />
        <Typography variant="h4" paragraph>
          Releases
        </Typography>
        {releases}
    </FooterPage>
  )
}
