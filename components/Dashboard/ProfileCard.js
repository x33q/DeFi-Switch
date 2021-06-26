import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    margin: 'auto',
  },
  media: {
    height: 140,
  },
  avatarBlue: {
    backgroundColor: '#1e03f2',
    height: '80px',
    width: '80px',
    margin: 'auto',
    marginTop: '10px',
    marginBottom: '10px',
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore.
          </Typography>
        </CardContent>
    </Card>
  );
}
