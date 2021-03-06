import React from "react";
import Head from "next/head";
import Link from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Button, useMediaQuery, Typography } from "@material-ui/core";
import ButtonArrow from "../src/ui/ButtonArrow";

// Images
const customSoftwareIcon = "/assets/customSoftware.svg";
const mobileAppsIcon = "/assets/mobileIcon.svg";
const websiteIcon = "/assets/websiteIcon.svg";

const useStyles = makeStyles((theme) => ({
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  learnBtn: {
    ...theme.typography.learnBtn,
    fontSize: "0.7rem",
    height: 35,
    padding: 8,
    borderColor: theme.palette.common.orange,
    marginTop: "1.5em",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
      marginTop: "1.0em",
    },
  },
  subtitle: {
    marginBottom: "0.8em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
    [theme.breakpoints.down("xs")]: {
      padding: 5,
    },
  },
}));

export default function Services({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column">
      {/* SEO */}
      <Head>
        <title key="title">
          Reliable Custom Software Development Services | DAS Development
        </title>
        <meta
          name="description"
          key="description"
          content="Cutting-edge software, mobile app, and website development services with sleek custom designs - get a free online estimate instantly!"
        />
        <meta
          property="og:title"
          content="DAS Development | Services"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="https://das-next-js.vercel.app/services"
        />
        <link rel="canonical" key="canonical" href="https://das-next-js.vercel.app/services" />
      </Head>

      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          marginTop: matchesSM ? "1em" : "2em",
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          align={matchesSM ? "center" : undefined}
        >
          Services
        </Typography>
      </Grid>
      <Grid item>
        {" "}
        {/*-----iOS/Android Block-----*/}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : "flex-end"}
          className={classes.serviceContainer}
          style={{ marginTop: matchesSM ? "1em" : "5em" }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
              width: matchesSM ? undefined : "35em",
            }}
          >
            <Typography variant="h4" gutterBottom>
              iOS/Android App Development
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement. <br />
              <span style={{ color: "#868686" }}>
                Integrate your web experience or create a standalone app
                {matchesSM ? null : <br />} with either mobile platform.
              </span>
            </Typography>
            {/* <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app
              {matchesSM ? null : <br />} with either mobile platform.
            </Typography> */}
            <Button
              component={Link}
              href="/mobileapps"
              variant="outlined"
              className={classes.learnBtn}
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>

          <Grid
            item
            style={{
              marginRight: matchesSM ? 0 : "5em",
            }}
          >
            <img
              className={classes.icon}
              src={mobileAppsIcon}
              alt="mobile icon"
              width="250em"
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {" "}
        {/*-----Custom Development Block-----*/}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : undefined}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4" gutterBottom>
              Custom Software Development
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Time. Save Energy. Save Money. <br />
              <span style={{ color: "#868686" }}>
                Complete digital solutions, from concept to completion.
              </span>
            </Typography>
            <Button
              component={Link}
              href="/customsoftware"
              variant="outlined"
              className={classes.learnBtn}
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>

          <Grid item>
            <img
              className={classes.icon}
              src={customSoftwareIcon}
              alt="custom software icon"
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {" "}
        {/*-----Website Development Block-----*/}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : "flex-end"}
          className={classes.serviceContainer}
          style={{ marginBottom: "10em" }}
          alignItems="flex-end"
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
              width: matchesSM ? undefined : "35em",
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More. Discover More. Sell More. <br />
              <span style={{ color: "#868686" }}>
                Optimized for Search Engines. {matchesXS && <br />} Built for speed.
              </span>
            </Typography>

            <Button
              component={Link}
              href="/websites"
              variant="outlined"
              className={classes.learnBtn}
              onClick={() => {
                setValue(1);
                setSelectedIndex(3);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>

          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              className={classes.icon}
              src={websiteIcon}
              alt="website icon"
              width="250em"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
