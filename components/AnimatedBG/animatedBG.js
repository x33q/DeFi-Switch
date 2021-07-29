import React from "react";
import classNames from "classnames";
import AnimatedBg from "react-animated-bg";
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/jss/nextjs-material-kit/pages/landingPage.js";

const useStyles = makeStyles(styles);

export default function AnimatedBG() {
  const classes = useStyles();
  return (
    <div>
      <AnimatedBg
        colors={["#221d49", "#1a0b8b", "#785564", "#784918"]}
        duration={5}
        delay={0}
        timingFunction="ease-out"
        className={classes.animatedSection}
      >

      </AnimatedBg>
    </div>
  );
}
