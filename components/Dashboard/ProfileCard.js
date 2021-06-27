import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import ProfileProgress from "components/Dashboard/ProfileProgress.js";

import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    margin: 'auto',
    padding: '10px 30px',
    borderRadius: '8px',
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
  },
  media: {
    height: 140,
  },
  avatarBlue: {
    backgroundColor: '#1e03f2',
    height: '80px',
    width: '80px',
    margin: 'auto',
    marginBottom: '10px',
  },
  completeBtn: {
    textTransform: 'capitalize',
    borderRadius: '40px',
  },
  completeTxt: {
    marginTop: '0px',
    textAlign: 'rigt',
  },
  floatRight: {
    textAlign: 'right',
  },
  floatLeft: {
    textAlign: 'left',
  },
  divider: {
    marginBottom: '20px',
  },
  progressTitle: {
    marginBottom: '15px',
    textAlign: 'left',
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardContent>
            <Avatar className={classes.avatarBlue}>MV</Avatar>
          <Typography gutterBottom variant="h5" component="h2">
            Username
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Last login: 26 06 2021
          </Typography>
          <br />
          <Divider variant="fullWidth" className={classes.divider} />

          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography variant="subtitle2" color="textPrimary" className={classes.progressTitle}>
              Profile Progress<br />
              </Typography>
            </Grid>
            <Grid item xs={6} className={classes.floatRight}>
              <Typography variant="body2" color="textSecondary" component="p" className={classes.completeTxt}>
              2/6 Steps
              </Typography>
            </Grid>
          </Grid>

          <ProfileProgress />
          <br />

          <Button variant="outlined" disableElevation className={classes.completeBtn}>
            Complete Now
          </Button>
        </CardContent>
    </Card>
  );
}
