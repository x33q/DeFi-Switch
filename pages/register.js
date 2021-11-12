import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

import Iframe from 'react-iframe'

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// Import Register Form 1
import RegisterStep1 from "components/RegisterForms/RegisterStep1.js";
import Stepper1 from "components/RegisterForms/Stepper1.js";

import styles from "styles/jss/nextjs-material-kit/pages/registerPage.js";

const useStyles = makeStyles(styles);

export default function RegisterPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="DeFi Switch"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url('/img/bg7.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer spacing={0} justify="center">

          <GridItem sm={12} lg={4} className={classes.regInfo}>
              <h4 className={classes.formTitle}>Register</h4>
              <p className={classes.formSubtitle}>Get Started and invest in DeFi in under 7 minutes.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
          </GridItem>

          <GridItem sm={12} lg={8}>

          <Iframe url="http://makebetter.co.za/truliooTest/"
          width="100%"
          height="100%"
          id="myId"
          className={classes.iFrameClass}
          display="initial"
          position="relative"
          frameBorder="0"/>
          </GridItem>

          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
