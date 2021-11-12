import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeWorkOutlinedIcon from '@material-ui/icons/HomeWorkOutlined';
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

import UploadFile from "components/RegisterForms/UploadFile.js";
import Stepper2 from "components/RegisterForms/Stepper2.js";

import styles from "styles/jss/nextjs-material-kit/pages/registerPage2.js";

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
        brand="Switxh"
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

            <GridItem sm={12} lg={12}>

              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <GridContainer spacing={0} justify="center">
                    <GridItem sm={12} md={5} lg={5}>
                      <CardHeader color="primary" className={classes.cardHeader}>
                        <p className={classes.stepNo}>Step 2</p>
                        <h4 className={classes.formTitle}>Customer Financial Informaton</h4>
                        <p className={classes.formSubtitle}>Please complete the required financial compliance steps.</p>
                      </CardHeader>
                    </GridItem>
                    <GridItem sm={12} md={7} lg={7}>
                      <CardBody className={classes.cardBody}>

                        <GridContainer spacing={2} >
                          <GridItem sm={6}>
                            <div className={classes.uploadMaster}>
                              <FingerprintIcon className={classes.iconHolder} />
                              <h6 className={classes.uploadTitle}>Proof of Identity</h6>
                              <p className={classes.uploadDesc}>Take a photo of your SA ID book, if you have a card, take a photo of the front first.</p>
                              <UploadFile />
                            </div>
                          </GridItem>
                          <GridItem sm={6}>
                            <div className={classes.uploadMaster}>
                              <HomeWorkOutlinedIcon className={classes.iconHolder} />
                              <h6 className={classes.uploadTitle}>Proof of Address</h6>
                              <p className={classes.uploadDesc}>Please take a photo or upload a proof of address document less than 3 months old.</p>
                              <UploadFile />
                            </div>
                          </GridItem>
                        </GridContainer>
                      </CardBody>

                      <CardFooter className={classes.cardFooter}>
                        <Button href="/register" fullWidth color="rose" size="lg">
                          Confirm Details
                        </Button>
                      </CardFooter><br />
                  </GridItem>
                </GridContainer>
                </form>
              </Card>
            </GridItem>
            <GridItem sm={8}>
              <Stepper2 />
            </GridItem>
          </GridContainer>
        </div>

        <Footer whiteFont />
      </div>
    </div>
  );
}
