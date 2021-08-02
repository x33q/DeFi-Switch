import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Fingerprint from "@material-ui/icons/Fingerprint";
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import HomeWorkRoundedIcon from '@material-ui/icons/HomeWorkRounded';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
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
              <InfoArea
                title="Registration Form"
                description="Completed registration form"
                icon={ListAltRoundedIcon}
                iconColor="primary"
                vertical
              />
            </GridItem>
            <GridItem className={classes.whyItem} xs={12} sm={12} md={6}>
              <InfoArea
                title="South African ID"
                description="A copy of your SA barcoded ID (SA Citizens only for now)"
                icon={Fingerprint}
                iconColor="primary"
                vertical
              />
            </GridItem>
            <GridItem className={classes.whyItem} xs={12} sm={12} md={6}>
              <InfoArea
                title="Proof of Address"
                description="Proof of residential address less than 3 months old."
                icon={HomeWorkRoundedIcon}
                iconColor="primary"
                vertical
              />
            </GridItem>
            <GridItem className={classes.whyItem} xs={12} sm={12} md={6}>
              <InfoArea
                title="Proof of Deposit"
                description="Proof of deposit or transfer into DeFi Switch investment account."
                icon={AccountBalanceIcon}
                iconColor="primary"
                vertical
              />
            </GridItem>
          </GridContainer>
        </GridContainer>
      </div>
    </div>
  );
}
