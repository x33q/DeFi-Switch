import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import ReactCountryFlag from "react-country-flag"

// @material-ui/icons
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Why use DeFi Switch?</h2>
          <h5 className={classes.description}>
          This is the paragraph where you can write more details about your
          product. Keep you user engaged by providing meaningful information.<br />
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
          <ReactCountryFlag className={classes.flag}
              countryCode="ZA"
              svg
              style={{
                  width: '4em',
                  height: '2.6em',
              }}
          />
            <h3 className={classes.replaceTitle}>ZAR Only</h3>
            <p className={classes.replaceDesc}>We only accept ZAR. You can only withdraw ZAR. It’s as simple as it gets with money you understand.</p>

          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="Zero Hassles"
              description="We take care of all the swapping, bridging, staking & harvesting so you can just do the investing."
              icon={VerifiedUser}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="Zero Limits"
              description="No set term or investment premium, start with whatever is safe for you."
              icon={Fingerprint}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="Zero Lockups"
              description="No lock up periods or complicated penalties, access your funds whenever you want."
              icon={Fingerprint}
              iconColor="primary"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
