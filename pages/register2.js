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

            <GridItem sm={12} lg={9}>

              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>

                  <GridContainer spacing={0} justify="center">
                    <GridItem sm={12} md={5} lg={5}>
                      <CardHeader color="primary" className={classes.cardHeader}>
                        <h4 className={classes.formTitle}>Step 2</h4>
                        <p className={classes.formSubtitle}>Customer Financial Informaton</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  consectetur adipiscing elit,  consectetur adipiscing elit, incididunt.</p>
                      </CardHeader>
                    </GridItem>
                    <GridItem sm={12} md={7} lg={7}>
                      <CardBody className={classes.cardBody}>
                        <GridContainer spacing={0} justify="center">
                          <GridItem xs={12} sm={6} md={6}>
                            <CustomInput
                              labelText="First Name..."
                              id="first"
                              formControlProps={{
                                fullWidth: true,
                              }}
                              inputProps={{
                                type: "text",
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <AccountCircleIcon className={classes.inputIconsColor} />
                                  </InputAdornment>
                                ),
                              }}
                            />
                            <CustomInput
                              labelText="Surname..."
                              id="surname"
                              formControlProps={{
                                fullWidth: true,
                              }}
                              inputProps={{
                                type: "text",
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <AccountCircleIcon className={classes.inputIconsColor} />
                                  </InputAdornment>
                                ),
                              }}
                            />
                            <CustomInput
                              labelText="SA ID Number..."
                              id="idnumber"
                              formControlProps={{
                                fullWidth: true,
                              }}
                              inputProps={{
                                type: "number",
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <FingerprintIcon className={classes.inputIconsColor} />
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={6} md={6}>
                            <CustomInput
                              labelText="Email..."
                              id="email"
                              formControlProps={{
                                fullWidth: true,
                              }}
                              inputProps={{
                                type: "email",
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <Email className={classes.inputIconsColor} />
                                  </InputAdornment>
                                ),
                              }}
                            />
                            <CustomInput
                              labelText="Password"
                              id="pass"
                              formControlProps={{
                                fullWidth: true,
                              }}
                              inputProps={{
                                type: "password",
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <Icon className={classes.inputIconsColor}>
                                      lock_outline
                                    </Icon>
                                  </InputAdornment>
                                ),
                                autoComplete: "off",
                              }}
                            />
                            <CustomInput
                              labelText="Confirm Password"
                              id="pass"
                              formControlProps={{
                                fullWidth: true,
                              }}
                              inputProps={{
                                type: "password",
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <Icon className={classes.inputIconsColor}>
                                      lock_outline
                                    </Icon>
                                  </InputAdornment>
                                ),
                                autoComplete: "off",
                              }}
                            />
                          </GridItem>
                        </GridContainer>


                      </CardBody>

                      <CardFooter className={classes.cardFooter}>
                        <Button fullWidth color="gray" size="lg">
                          Get started
                        </Button>
                      </CardFooter><br />
                  </GridItem>
                </GridContainer>
                </form>
              </Card>
            </GridItem>
            <GridItem sm={9}>
              <Stepper2 />
            </GridItem>
          </GridContainer>
        </div>

        <Footer whiteFont />
      </div>
    </div>
  );
}
