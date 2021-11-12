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

import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Card from "components/Card/Card.js";

import styles from "styles/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import AnimatedBG from "components/AnimatedBG/animatedBG.js";


const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("xxxHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Switxh"
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
          <Card style={{ background: 'none', color: 'white', boxShadow: 'none', transition: 'all 1000ms ease-out', padding: '0' }} className={classes.xxx, classes[cardAnimaton]}>
            <GridContainer spacing={0} className={classes.mainIntro}>
              <GridItem sm={12}>

                <h1 className={classes.title}>Simple <span className={classes.goldTxt}>Rand Investing</span> into Complex <span className={classes.greenTxt}>Decentralised Finance</span></h1>
                <h4 className={classes.desc}>
                  <span className={classes.biggerTxt}>Put your ZAR to work in the world of DeFi easily, no complicated wallets or risky transactions &amp; up to 10% APR with zero deposit fees.</span>
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
                  <PersonAddIcon className={classes.icons} />
                  Register
                </Button>
              </GridItem>
            </GridContainer>
          </Card>
        </div>
      </Parallax>
    </div>
  );
}
