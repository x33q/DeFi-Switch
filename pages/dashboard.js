import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from "@material-ui/core/Tooltip";
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// Icons
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import DashboardIcon from '@material-ui/icons/Dashboard';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from "next/link";

import DashboardDataTable from "components/Dashboard/DashboardDataTable.js";
import ChartOneBars from "components/Dashboard/ChartOneBars.js";
import TinyAreaChart from "components/Dashboard/TinyAreaChart.js";
import MixBarChart from "components/Dashboard/MixBarChart.js";
import TinyLineChart from "components/Dashboard/TinyLineChart.js";
import TinyLineChart2 from "components/Dashboard/TinyLineChart2.js";
import TinyLineChart3 from "components/Dashboard/TinyLineChart3.js";
import TinyLineChart4 from "components/Dashboard/TinyLineChart4.js";

import RecentActivity from "components/Dashboard/RecentActivity.js";
import ProfileCard from "components/Dashboard/ProfileCard.js";
import UserMenu from "components/Dashboard/UserMenu.js";

import Avatar from '@material-ui/core/Avatar';

const drawerWidth = 155;

import theme from "styles/jss/nextjs-material-kit/pages/dashboard.js";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '20px',
  },
  palette: {
    primary: {
      main: '#FFAA00',
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#12162d',
  },
  homelink: {
    backgroundColor: '#1601bd',
    position: 'absolute',
    right: '20px',
    textDecoration: 'none',
    padding: '8px 16px',
    borderRadius: '20px',
    color: '#ffffff',
  },
  paper: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    transition: 'all 800ms ease-out',
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
    "&:hover": {
      transform: 'scale(1)',
    },
  },
  papercard: {
    backgroundColor: '#FF0000',
    minHeight: '300px',
  },
  specsgrid: {
    marginBottom: '30px',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  icon1: {
    backgroundColor: '#FFAA00',
    width: '100%',
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chartOne: {
    backgroundColor: '',
    height: '60px',
  },
  chartTwo: {
    backgroundColor: '',
    height: '340px',
    marginBottom: '30px',
  },
  chartThree: {
    backgroundColor: '',
    height: '340px',
    marginBottom: '30px',
  },
  apptitle: {
    fontSize: '17px',
    fontWeight: '700',
    color: '#FFF',
    "&:link, &:hover, &:focus": {
      color: '#FFF',
    },
  },
  appLink: {
    fontSize: '17px',
    fontWeight: '700',
    color: '#FFF',
    "&:link, &:hover, &:focus": {
      color: '#ffffff !important',
    },
  },
  subtitle: {
    backgroundColor: '#FFGG00',
    color: 'rgba(0,0,0,0.4)',
    fontSize: '12px',
  },
  bignumber: {
    color: '#000',
    fontSize: '26px',
    fontWeight: '700',
    margin: '4px 0',
  },
  ZALogo: {
    width: '22px',
    position: 'absolute',
    right: '75px',
    top: '20px',
    overflow: 'hidden',
    borderRadius: '7px',
  },
  avatarLogo: {
    backgroundImage: 'linear-gradient(to bottom, #232847 0%, #161a2f 100%)',
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#FFF',
    height: '32px',
    width: '32px',
    marginRight: '13px',
    marginLeft: '-5px',
    fontSize: '11px',
    fontWeight: '700',
  },
  avatarUser: {
    backgroundColor: 'rgba(255,255,255,0)',
    color: '#000',
    height: '36px',
    width: '36px',
    fontSize: '12px',
    fontWeight: '700',
    position: 'absolute',
    top: '12px',
    right: '25px',
    transform: 'scale(0.8)',
    cursor: 'pointer',
  },
  listItemText: {
    fontSize: '14px',
    marginLeft: '-16px',
  },
  menuIcon: {
    marginRight: '0px',
  },
  bodyTitles: {
    fontWeight: '700',
    fontSize: '18px',
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar elevation={0} position="fixed" className={classes.appBar}>
        <Toolbar>
          <Avatar className={classes.avatarLogo}>DS</Avatar>
          <Tooltip title="Back to Home" placement="right">
          <Typography variant="h5" noWrap className={classes.apptitle}>
          <Link href="/landing" component="a">
            <a className={classes.appLink}>DeFi Switch</a>
          </Link>
          </Typography>
          </Tooltip>
          <div className={classes.ZALogo}>
            <Tooltip title="South Africa Only" placement="left">
            <img alt="ZA" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/ZA.svg"/>
            </Tooltip>
          </div>

          <div className={classes.avatarUser}><UserMenu /></div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {['Dashboard'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <DashboardIcon className={classes.menuIcon} color="info" /> : <AccountCircleIcon className={classes.menuIcon} color="info" />}</ListItemIcon>
                <ListItemText classes={{primary:classes.listItemText}} primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Settings'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <FingerprintIcon className={classes.menuIcon} color="error" /> : <MailIcon />}</ListItemIcon>
                <ListItemText classes={{primary:classes.listItemText}} primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />

        <Grid container spacing={5}>

          <Grid item sm={12} md={8} lg={9}>

        <div className={classes.specsgrid}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <Paper className={classes.paper}>
                <Grid container spacing={0}>
                  <Grid item sm={12}>
                    <Typography variant="subtitle2" noWrap className={classes.subtitle}>
                      Total Investments
                    </Typography>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item sm={9}>
                    <Typography variant="h4" noWrap className={classes.bignumber}>
                      R23 468,90
                    </Typography>
                    <Typography variant="subtitle2" noWrap>
                      +66%
                    </Typography>
                    </Grid>
                    <Grid item sm={3}>
                      <div className={classes.chartOne}><TinyLineChart4 /></div>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <Paper className={classes.paper}>
                <Grid container spacing={0}>
                  <Grid item sm={12}>
                    <Typography variant="subtitle2" noWrap className={classes.subtitle}>
                      Portfolio Performance
                    </Typography>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item sm={9}>
                    <Typography variant="h4" noWrap className={classes.bignumber}>
                      R3 468,90
                    </Typography>
                    <Typography variant="subtitle2" noWrap>
                      +26%
                    </Typography>
                    </Grid>
                    <Grid item sm={3}>
                      <div className={classes.chartOne}><TinyLineChart2 /></div>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <Paper className={classes.paper}>
                <Grid container spacing={0}>
                  <Grid item sm={12}>
                    <Typography variant="subtitle2" noWrap className={classes.subtitle}>
                      Weekly Profits
                    </Typography>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item sm={9}>
                    <Typography variant="h4" noWrap className={classes.bignumber}>
                      R2 568,90
                    </Typography>
                    <Typography variant="subtitle2" noWrap>
                      +26%
                    </Typography>
                    </Grid>
                    <Grid item sm={3}>
                      <div className={classes.chartOne}><TinyLineChart3 /></div>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <Paper className={classes.paper}>
                <Grid container spacing={0}>
                  <Grid item sm={12}>
                    <Typography variant="subtitle2" noWrap className={classes.subtitle}>
                      Total Profits
                    </Typography>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item sm={9}>
                    <Typography variant="h4" noWrap className={classes.bignumber}>
                      R8 468,25
                    </Typography>
                    <Typography variant="subtitle2" noWrap>
                      +18%
                    </Typography>
                    </Grid>
                    <Grid item sm={3}>
                      <div className={classes.chartOne}><TinyLineChart /></div>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </div>


        <Typography variant="h5" noWrap className={classes.bodyTitles}>Portfolio Performance<br /><br /></Typography>

        <Paper className={classes.paper}>
          <div className={classes.chartThree}><MixBarChart /></div>
        </Paper>
        <br /><br />
        <Typography variant="h5" className={classes.bodyTitles} noWrap>Transaction History<br /><br /></Typography>
        <DashboardDataTable />

        </Grid>

        <Grid item sm={12} md={4} lg={3}>

        <ProfileCard /><br /><br />

        <Typography variant="subtitle2" noWrap>Market Activity<br /><br /></Typography>
        <RecentActivity />

        </Grid>

      </Grid>
      </main>
    </div>
  );
}
