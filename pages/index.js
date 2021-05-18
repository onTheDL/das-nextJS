import React from "react";
import Head from "next/head";
import Lottie from "react-lottie";
import Link from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Grid,
  Button,
  Typography,
  useMediaQuery,
  Card,
  CardContent,
} from "@material-ui/core";
import ButtonArrow from "../src/ui/ButtonArrow";
import CallToAction from "../src/ui/CallToAction";
import animationData from "../src/animations/landinganimation/data";

import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";

const customSoftwareIcon = "/assets/customSoftware.svg";
const mobileAppsIcon = "/assets/mobileIcon.svg";
const websiteIcon = "/assets/websiteIcon.svg";
const revolutionBackground = "/assets/repeatingBackground.svg";
const infoBackground = "/assets/infoBackground.svg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  estimateBtn: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  btnContainer: {
    marginTop: "1em",
  },
  learnBtnHero: {
    ...theme.typography.learnBtn,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  learnBtn: {
    ...theme.typography.learnBtn,
    fontSize: "0.7rem",
    height: 35,
    borderColor: theme.palette.common.orange,
    padding: 8,
    marginTop: "1.5em",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
      marginTop: "1.0em",
    },
  },
  subtitle: {
    marginBottom: "0.8em",
    marginTop: "0.5em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "8em",
    maxWidth: 780,
    maxHeight: 280,
    [theme.breakpoints.down("sm")]: {
      paddingTop: "8em",
      paddingBottom: "8em",
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: "100%",
    },
  },
  infoBackground: {
    position: "absolute",
    zIndex: -1,
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "136.5%",
    width: "136.5%",
    marginTop: "2.5em",
  },
  specialLetter: {
    color: theme.palette.common.orange,
  },
}));

export default function LandingPage({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Head>
        <title key="title">
          Custom Software, iOS / Android Apps, and Websites | DAS Development
        </title>
        <meta
          name="description"
          key="description"
          content="Professional software custom-designed from the ground up with cutting-edge optimizations. Use our free estimate calculator to receive an approximate cost!"
        />
        <meta
          property="og:title"
          content="DAS Development | Homepage"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="https://das-next-js.vercel.app/"
        />
        <link rel="canonical" key="canonical" href="https://das-next-js.vercel.app/" />
        
      </Head>
      <Grid item>
        {" "}
        {/*-----Hero Block -----*/}
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Grid sm item className={classes.heroTextContainer}>
            <Typography variant="h2" align="center">
              {/* <span className={classes.specialLetter}>D</span>*/}Developing{" "}
              {/* <span className={classes.specialLetter}>A</span> */}Awesome{" "}
              {/* <span className={classes.specialLetter}>S</span>  */}Software{" "}
              <br />
              D.A.S. is good!
            </Typography>

            <Grid container justify="center" className={classes.btnContainer}>
              <Grid item>
                <Button
                  component={Link}
                  href="/estimate"
                  className={classes.estimateBtn}
                  variant="contained"
                  onClick={() => setValue(5)}
                >
                  Free Estimate
                </Button>
              </Grid>

              <Grid item>
                <Button
                  component={Link}
                  href="/revolution"
                  className={classes.learnBtnHero}
                  variant="outlined"
                  onClick={() => setValue(2)}
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {" "}
        {/*-----Custom Software Block-----*/}
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
            <Typography variant="h4">Custom Software Development</Typography>
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
            <LazyLoadImage
              className={classes.icon}
              src={customSoftwareIcon}
              alt="custom software icon"
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {" "}
        {/*-----iOS/Android Block-----*/}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : "flex-end"}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement. <br />
              <span style={{ color: "#868686" }}>
                Integrate your web experience or create a standalone app
                {matchesSM ? null : <br />} with either mobile platform.
              </span>
            </Typography>

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
            <LazyLoadImage
              className={classes.icon}
              src={mobileAppsIcon}
              alt="mobile icon"
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
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More. Discover More. Sell More. <br />
              <span style={{ color: "#868686" }}>
                Optimized for Search Engines. Built for speed.
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

          <Grid item>
            <LazyLoadImage
              className={classes.icon}
              src={websiteIcon}
              alt="website icon"
            />
          </Grid>
        </Grid>
      </Grid>

      {/*----- Revolution Block -----*/}
      <Grid item>
        <Grid
          container
          style={{ height: "80em", marginTop: "12em" }}
          alignItems="center"
          justify="center"
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    style={{ marginBottom: "1.5rem" }}
                  >
                    Beta non-disclosure agreement value proposition stealth
                    launch party. Non-disclosure agreement value proposition
                    bootstrapping startup creative direct mailing strategy
                    technology funding marketing pitch holy grail influencer.
                  </Typography>
                  <Button
                    component={Link}
                    href="/revolution"
                    className={classes.learnBtnHero}
                    style={{ borderColor: "#FFBA60" }}
                    variant="outlined"
                    onClick={() => setValue(2)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <LazyLoadComponent threshold={850}>
            <div className={classes.revolutionBackground} />
          </LazyLoadComponent>
        </Grid>
      </Grid>
      {/*----- About and Contact Block -----*/}
      <Grid item>
        <Grid
          container
          style={{ height: "78em" }}
          direction="row"
          alignItems="center"
        >
          <Grid
            item
            container
            style={{
              textAlign: matchesXS ? "center" : "inherit",
            }}
            direction={matchesXS ? "column" : "row"}
          >
            {/*---About Subsection---*/}
            <Grid
              item
              sm
              style={{
                marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em",
              }}
            >
              <Grid
                container
                style={{ marginBottom: matchesXS ? "10em" : 0 }}
                direction="column"
              >
                <Typography variant="h2" style={{ color: "white" }}>
                  About Us
                </Typography>
                <Typography variant="subtitle2">Let's get personal.</Typography>
                <Grid item>
                  <Button
                    component={Link}
                    href="/about"
                    variant="outlined"
                    style={{ color: "white", borderColor: "white" }}
                    className={classes.learnBtn}
                    onClick={() => setValue(3)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            {/*---Contact Subsection---*/}
            <Grid
              item
              sm
              style={{
                marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                textAlign: matchesXS ? "center" : "right",
              }}
            >
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: "white" }}>
                  Contact Us
                </Typography>
                <Typography variant="subtitle2">Say Hi!</Typography>
                <Grid item>
                  <Button
                    component={Link}
                    href="/contact"
                    variant="outlined"
                    style={{ color: "white", borderColor: "white" }}
                    className={classes.learnBtn}
                    onClick={() => setValue(4)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <LazyLoadComponent threshold={700}>
            <div className={classes.infoBackground} />
          </LazyLoadComponent>
        </Grid>
      </Grid>

      {/*-----Call to Action Block-----*/}

      <Grid item>
        <LazyLoadComponent threshold={700}>
          <CallToAction
            setValue={setValue}
            setSelectedIndex={setSelectedIndex}
          />
        </LazyLoadComponent>
      </Grid>
    </Grid>
  );
}
