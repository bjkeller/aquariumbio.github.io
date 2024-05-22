import React from "react";
import Layout from "../components/layout";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import img1 from '../images/case-study-img-1.jpg';
import img2 from '../images/case-study-img-2.jpg';

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
  },
  img: {
    width: "100%",
    paddingBottom: theme.spacing(1),
  },
}));

// TO DO: add navigation and iterate as component when there are more case studies

export default function CaseStudies() {
  const classes = useStyles();
  return (
    <Layout>
      <Grid container className={classes.container} spacing={2}>
        <Grid item zeroMinWidth xs={12}>
          <Typography variant="h3" className={classes.header}>Case Studies</Typography>
          <Divider />
        </Grid>

        <Grid item zeroMinWidth xs={12}>
          <Typography variant="h4" paragraph>
            An approach to managing novel experimental workflows
          </Typography>
          <Typography variant="subtitle1">
            Orlando de Lange, Ph.D, uses Aquarium to bring rigor and transparency to his design and experiment processes—impacting his team, peer researchers, and future readers of his published literature.
          </Typography>
        </Grid>

        <Grid item zeroMinWidth xs={12}>
          <Divider />
        </Grid>

        <Grid item zeroMinWidth xs={12}>
          <Typography variant="body1" paragraph >
            When Orlando de Lange, Ph.D, joined the Biofab at the University of Washington as a postdoctoral researcher, he realized he was about to face a difficult time establishing and managing his wet lab research—he’s a molecular plant scientist and the Biofab is a microbiology focused lab. The problem wasn’t particular to plants, but in the mechanics of the lab.
          </Typography>
          <Typography variant="body1" paragraph >
            <i>
              “If I wanted to work with plants, I needed to get a plethora of novel workflows locally optimized. Secondly, I needed to keep track of a large amount of work that might normally be shared amongst a team of peer researchers, and instead manage everything myself with a small rotating support team of undergraduate assistants. Finally, I would need to figure out how to share my research with others, along with all the necessary protocol details and analysis scripts necessary to reproduce it. It felt like a potentially overwhelming pursuit.”
            </i>
          </Typography>
          <Typography variant="body1" paragraph >
            As it turned out, Orlando had joined the Biofab at the right time, as they were testing out a novel protocol and lab management platform named Aquarium
          </Typography>
        </Grid>

        <Grid container item zeroMinWidth xs={12}>
          <Grid item zeroMinWidth xs={2}>

            <Typography variant="h6" paragraph >
              Organization & Iterative Testing
            </Typography>
          </Grid>

          <Grid item zeroMinWidth xs={1} />

          <Grid item zeroMinWidth xs={9}>
            <Typography variant="body1" paragraph >
              In order to bring proper focus to the details of his experiments, Orlando had become used to maintaining a folder of printed protocols in the lab and a folder of protocol files on his computer; both of which were rarely synched. Working remotely and within the lab with physical documents makes the situation ripe for missed details and duplicative work, but with Aquarium, Orlando began to organize his workflows within the platform itself, making accessibility a non-issue while supporting his need to make quick, yet precise edits across iterations.
            </Typography>
            <Typography variant="body1" paragraph >
              When Orlando would test variants of a particular wet lab protocols in his graduate work, he would write in longform every variation that he was testing and scrupulously check that all resulting data were labelled to correlate them after the fact to a specific protocol variant tested on a specific day. With Aquarium’s parameters feature, Orlando has found it easy to define and then select specific variants of his protocol of interest; these selections are then tracked as metadata by Aquarium, and effortlessly recalled during data analysis.
            </Typography>
            <img src={img1} alt="Orlando following an Aquarium protocol at the lab bench." className={classes.img}/>
          </Grid>
        </Grid>

        <Grid item zeroMinWidth xs={12}>
          <Divider />
        </Grid>

        <Grid container item zeroMinWidth xs={12}>
          <Grid item zeroMinWidth xs={2}>
            <Typography variant="h6" paragraph >
              Efficiencies & Experimental Integrity
            </Typography>
          </Grid>

          <Grid item zeroMinWidth xs={1} />

          <Grid item zeroMinWidth xs={9}>
            <Typography variant="body1" paragraph >
              In the past, Orlando would save time by optimizing a protocol on the spot. Many decisions would be made at the bench, and assessed in real time as he ran his protocol. There’s a place for acting on intuition, but the ease in which Orlando could now compose workflows in Aquarium encouraged him to explore detailed planning of whole suites of experiments ahead of time—even when simply testing a range of protocol variants for local optimization.
            </Typography>
            <Typography variant="body1" paragraph >
              <i>
                “In the time it takes me to drink my morning coffee, I can carefully plan several weeks worth of experiments. This way I don’t have to worry about such details when I or a student is in the lab; I just have to follow the plan and associated protocol instructions.”
              </i>
            </Typography>
            <Typography variant="body1" paragraph >
              As many of us still do, Orlando once relied on meetings, emails and sticky notes left at benches to make sure that when he wasn’t running an experiment, his research assistants knew exactly what they were supposed to be working on each day. Using Aquarium, Orlando avoided such micromanagement by simply designing and launching a plan, as the communicating necessary details were conveyed once assistants were assigned jobs through Aquarium.
            </Typography>
            <Typography variant="body1" paragraph >
              <i>
                “All necessary details are captured within the plan’s workflows, making it difficult for one of my assistants to stumble into simple mistakes, such as using the wrong samples. Since all protocols are rendered as dynamically presented, step-by-step on-screen instructions, it’s much harder to miss important or more technically challenging steps. Even I find that degree of specificity useful while at the bench.”
              </i>
            </Typography>

            <img src={img2} alt="Orlando retrieving growing duckweed from their defined location in the grow tent. " className={classes.img}/>

            <Typography variant="body1" paragraph >
              While Aquarium has helped Orlando stay organized and keep track of his protocol optimization tasks and associated data, he also wanted to share his workflows with others in the broader scientific community, so he makes use of Aquarium’s workflow import/export feature, allowing other Aquarium users to use his work, edit it as a new instance, and share out their own protocols. While this is a key feature for enabling the scientific community to advance similar experiments, making experimental plans readily available changes the game for Orlando when it comes time for him to make his work available more broadly.
            </Typography>
            <Typography variant="body1" paragraph >
              <i>
                “When I publish my research I won’t just summarize the key details, instead I can now share the exact protocols, with associated details and analysis scripts.”
              </i>
            </Typography>
            <Typography variant="body1" paragraph >
              From the beginning to the end of his work, Aquarium has continued to assist Orlando in doing smarter science.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}
