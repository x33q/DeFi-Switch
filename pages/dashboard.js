import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
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

import Avatar from '@material-ui/core/Avatar';

const drawerWidth = 200;

import theme from "styles/jss/nextjs-material-kit/pages/dashboard.js";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '20px',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#1d03f2',
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
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
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
    width: '24px',
    marginLeft: '13px',
    position: 'absolute',
    right: '75px',
    top: '20px',
  },
  avatarLogo: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#FFF',
    border: '1px solid rgba(255,255,255,0.3)',
    height: '30px',
    width: '30px',
    marginRight: '13px',
    fontSize: '10px',
    fontWeight: '700',
  },
  avatarUser: {
    backgroundColor: 'rgba(255,255,255,1)',
    color: '#000',
    border: '1px solid rgba(255,255,255,1)',
    height: '36px',
    width: '36px',
    fontSize: '12px',
    fontWeight: '700',
    position: 'absolute',
    top: '13px',
    right: '20px',
  },
  navList: {
    fontSize: '12px',
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
          <Typography variant="h5" noWrap className={classes.apptitle}>
          <Link href="/landing" component="a">
            <a className={classes.appLink}>DeFi Switch</a>
          </Link>
          </Typography>
          <div className={classes.ZALogo}>
            <img alt="ZA" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/ZA.svg"/>
          </div>
          <Avatar className={classes.avatarUser}>MV</Avatar>
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
            {['Dashboard', 'Profile'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <DashboardIcon /> : <AccountCircleIcon />}</ListItemIcon>
                <ListItemText primary={text} className={classes.navList} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Settings'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <FingerprintIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />

        <Grid container spacing={4}>

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

        <div className={classes.chartThree}><MixBarChart /></div>

        <Typography variant="h5" className={classes.bodyTitles} noWrap>Transaction History<br /><br /></Typography>
        <DashboardDataTable />

        </Grid>

        <Grid item sm={12} md={4} lg={3}>

        <ProfileCard /><br /><br />

        <Typography variant="subtitle2" noWrap>Your Dashboard<br /><br /></Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.<br /><br />
        </Typography>

        <Typography variant="subtitle2" noWrap>Market Activity<br /><br /></Typography>
        <RecentActivity />

        </Grid>

      </Grid>
      </main>
    </div>
  );
}
