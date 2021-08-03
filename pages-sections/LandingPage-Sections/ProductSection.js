import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import ReactCountryFlag from "react-country-flag"

// @material-ui/icons
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import NoEncryptionIcon from '@material-ui/icons/NoEncryption';
import SpeedIcon from '@material-ui/icons/Speed';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import Lottie from "lottie-react";
import noHassles from "../../public/lottiefiles/noHassles.json";
import noLimits from "../../public/lottiefiles/noLimits.json";
import unlock from "../../public/lottiefiles/unlock.json";

import styles from "styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div>
        <GridContainer spacing={4}>
          <GridContainer lg={4} md={12} spacing={4}>
            <GridItem xs={12}>
              <h2 className={classes.title}>Why use DeFi Switch?</h2>
              <h5 className={classes.description}>
              This is the paragraph where you can write more details about your
              product. Keep you user engaged by providing meaningful information.<br /><br />
              This is the paragraph where you can write more details about your
              product. Keep you user engaged by providing meaningful information<br />
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer lg={8} md={12} spacing={1}>
            <GridItem className={classes.whyItem1} xs={12} sm={12} md={6}>
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
            <GridItem className={classes.whyItem2} xs={12} sm={12} md={6}>
              <Lottie className={classes.scrollAnims} animationData={noHassles} />
              <h3 className={classes.whiteTitle}>Zero Hassles</h3>
              <p className={classes.whiteDesc}>We take care of all the swapping, bridging, staking & harvesting so you can just do the investing.</p>
            </GridItem>
            <GridItem className={classes.whyItem3} xs={12} sm={12} md={6}>
              <Lottie className={classes.scrollAnims} animationData={noLimits} />
              <h3 className={classes.whiteTitle}>Zero Limits</h3>
              <p className={classes.whiteDesc}>No set term or investment premium, start with whatever is safe for you.</p>
            </GridItem>
            <GridItem className={classes.whyItem4} xs={12} sm={12} md={6}>
              <Lottie className={classes.scrollAnims} animationData={unlock} />
              <h3 className={classes.whiteTitle}>Zero Lockups</h3>
              <p className={classes.whiteDesc}>No lock up periods or complicated penalties, access your funds whenever you want.</p>
            </GridItem>
          </GridContainer>
        </GridContainer>
      </div>
    </div>
  );
}
