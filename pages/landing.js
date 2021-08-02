import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

import ReactPlayer from 'react-player'

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "styles/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import ProductSection from "pages-sections/LandingPage-Sections/ProductSection.js";
import WhatYouNeed from "pages-sections/LandingPage-Sections/WhatYouNeed.js";
import AnimatedBG from "components/AnimatedBG/animatedBG.js";

import Lottie from "lottie-react";
import scrollAnim from "../public/lottiefiles/scrolldown.json";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="DeFi Switch"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 100,
          color: "white",
        }}
        {...rest}
      />
      <Parallax responsive image="/img/bg7.jpg" className={classes.heroBG}>

        <div className={classes.animWrapper}>
          <AnimatedBG />
        </div>

        <div className={classes.playerWrapper}>
          <ReactPlayer width="100%" height="100%" className={classes.bgVideo} url='/img/bg4.mp4' playing="true" loop="true" muted="true" />
        </div>

        <div className={classes.container}>
          <GridContainer spacing={0} className={classes.mainIntro}>
            <GridItem sm={12}>
              <h1 className={classes.title}>Simple <span className={classes.goldTxt}>Rand Investing</span> into Complex Decentralised Finance.</h1>
              <h4 className={classes.desc}>
                Put your ZAR to work in the world of DeFi easily, no complicated wallets or risky transactions &amp; up to 10% APR with zero deposit fees.
                <br /><br />
                It’s as simple as a normal deposit with money you understand.
                <br /><br />
                We take care of all the token swapping, network bridging &amp; DeFi investing so that you can focus on the returns.
              </h4>
              <br />
              <Button
                className={classes.gutterBtn}
                color="gray"
                size="lg"
                href="/register"
                round
              >
                Documentation
              </Button>
              <Button
                color="rose"
                size="lg"
                href="/register"
                round
              >
                Register
              </Button>
            </GridItem>
          </GridContainer>
          <Lottie className={classes.scrollAnim} animationData={scrollAnim} />
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <WhatYouNeed />
        </div>
      </div>
      <Footer />
    </div>
  );
}
