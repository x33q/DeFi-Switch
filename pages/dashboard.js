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

const drawerWidth = 200;

import theme from "styles/jss/nextjs-material-kit/pages/dashboard.js";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
  subtitle: {
    backgroundColor: '#FFGG00',
    color: 'rgba(0,0,0,0.4)',
    fontSize: '12px',
  },
  bignumber: {
    color: '#000',
    fontSize: '26px',
    fontWeight: '700',
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h5" noWrap>
            DeFi Switch
          </Typography>
          <Link href="/landing">
            <a className={classes.homelink}>Home</a>
          </Link>
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
                <ListItemText primary={text} />
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

        <Grid container spacing={6}>

          <Grid item sm={9}>

        <div className={classes.specsgrid}>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
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
                      R23468,90
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
            <Grid item xs={6} sm={3}>
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
                      R3468,90
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
            <Grid item xs={6} sm={3}>
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
                      R2568,90
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
            <Grid item xs={6} sm={3}>
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
                      R8468,25
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


        <Typography variant="subtitle2" noWrap>Portfolio Performance<br /><br /></Typography>

        <div className={classes.chartThree}><MixBarChart /></div>

        <Typography variant="subtitle2" noWrap>Transaction History<br /><br /></Typography>
        <DashboardDataTable />

        </Grid>

        <Grid item sm={3}>

        <ProfileCard /><br /><br />

        <Typography variant="subtitle2" noWrap>Your Dashboard<br /><br /></Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.<br /><br />
        </Typography>

        <Typography variant="subtitle2" noWrap>Recent Activity<br /><br /></Typography>
        <RecentActivity />

        </Grid>

      </Grid>
      </main>
    </div>
  );
}
