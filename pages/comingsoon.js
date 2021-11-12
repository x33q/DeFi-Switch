import React from "react";

import ReactPlayer from 'react-player'

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
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
import Avatar from '@material-ui/core/Avatar';

import styles from "styles/jss/nextjs-material-kit/pages/holdingPage.js";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>

      <a
        href="/landing" className={classes.backhome}
      >
        Back Home
      </a>

      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url('/img/bg7.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <ReactPlayer width="120%" height="120%" className={classes.bgVideo} url='/img/bg4.mp4' playing="true" loop="true" muted="true" playbackRate="1" />
        <div className={classes.container}>
          <GridContainer spacing={2} justify="center">
            <GridItem xs={12} sm={12} md={6} className={classes.contentbodyleft}>
              <Avatar className={classes.avatarLogo}>DS</Avatar>
              <h1 className={classes.logo}>DeFi Switch</h1>
              <h1 className={classes.title}>Simple Rand Investing into Complex Decentralised Finance.</h1>
              <h4 className={classes.desc}>
                Put your ZAR to work in the world of DeFi easily, no complicated wallets or risky transactions &amp; up to 10% with zero deposit fees.
                <br /><br />
                It’s as simple as a normal deposit with money you understand.
                <br /><br />
                We take care of all the token swapping, network bridging &amp; DeFi investing so that you can focus on the returns.
              </h4>
            </GridItem>
            <GridItem xs={12} sm={6} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Be the first to know.</h4>
                    <p>Receive updates & get notified when we launch!</p>
                  </CardHeader>
                  <CardBody>
                    <CustomInput
                      labelText="Name..."
                      id="name"
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
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button fullWidth color="rose" size="lg">
                      Submit
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
