import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Fingerprint from "@material-ui/icons/Fingerprint";
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import HomeWorkRoundedIcon from '@material-ui/icons/HomeWorkRounded';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import Lottie from "lottie-react";
import register from "../../public/lottiefiles/register.json";
import fingerprint from "../../public/lottiefiles/fingerprint.json";
import pop from "../../public/lottiefiles/pop.json";
import location from "../../public/lottiefiles/location.json";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/pages/landingPageSections/WhatYouNeed.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div>
        <GridContainer spacing={4}>
          <GridContainer lg={4} md={12} spacing={4}>
            <GridItem className={classes.sectionIntro} xs={12}>
              <h2 className={classes.title}>What you’ll need</h2>
              <h5 className={classes.description}>
              This is the paragraph where you can write more details about your
              product. Keep you user engaged by providing meaningful information.<br /><br />
              This is the paragraph where you can write more details about your
              product. Keep you user engaged by providing meaningful information<br />
              </h5>
              <Button href="/register" size="lg" color="rose" fullWidth round>
                Get started <ArrowForwardIcon className={classes.icons} />
              </Button>
            </GridItem>
          </GridContainer>
          <GridContainer className={classes.borderBox} lg={8} md={12} spacing={1}>
            <GridItem className={classes.whyItem} xs={12} sm={12} md={6}>
              <Lottie className={classes.scrollAnims} animationData={register} />
              <h3 className={classes.replaceTitle}>1. Registration Form</h3>
              <p className={classes.replaceDesc}>Completed registration form</p>
            </GridItem>
            <GridItem className={classes.whyItem} xs={12} sm={12} md={6}>
              <Lottie className={classes.scrollAnims} animationData={fingerprint} />
              <h3 className={classes.replaceTitle}>2. South African ID</h3>
              <p className={classes.replaceDesc}>A copy of your SA barcoded ID (SA Citizens only for now)</p>
            </GridItem>
            <GridItem className={classes.whyItem} xs={12} sm={12} md={6}>
              <Lottie className={classes.scrollAnims} animationData={location} />
              <h3 className={classes.replaceTitle}>3. Proof of Address</h3>
              <p className={classes.replaceDesc}>Proof of residential address less than 3 months old.</p>
              <br /><br />
            </GridItem>
            <GridItem className={classes.whyItem} xs={12} sm={12} md={6}>
              <Lottie className={classes.scrollAnims} animationData={pop} />
              <h3 className={classes.replaceTitle}>4. Proof of Deposit</h3>
              <p className={classes.replaceDesc}>Proof of deposit or transfer into Switxh investment account.</p>
              <br /><br />
            </GridItem>
          </GridContainer>
        </GridContainer>
      </div>
    </div>
  );
}
