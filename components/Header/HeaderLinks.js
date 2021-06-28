/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="&nbsp;About"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link href="/comingsoon">
              <a className={classes.dropdownLink}>Coming Soon</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Components</a>
            </Link>,
            <a
              href="https://demos.creative-tim.com/nextjs-material-kit/documentation/tutorial"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/login"
          color="transparent"
          className={classes.navLink}
        >
          <LockOutlinedIcon className={classes.icons} />&nbsp;&nbsp;Login
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/register"
          className={classes.navLink}
          color="transparent"
        >
          <PersonAddIcon className={classes.icons} />&nbsp;&nbsp;Register
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          buttonIcon={Apps}
          href="/dashboard"
          className={classes.registerNavLink}
          color="primary"
          round
        >
          <Apps className={classes.icons} /> Dashboard
        </Button>
      </ListItem>

    </List>
  );
}
