import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    marginTop: '20px',
    
  },
});

type BigCardProps = {
  title: string;
  content: string;
  img: string;
  slug: string;
}

export default function BigCard(props: BigCardProps) {

  const classes = useStyles()

  return (
    <Card sx={{ maxWidth: 945 }} className={classes.root} >
      <CardMedia
        component="img"
        height="140"
        image={"/images/cards/" + props.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { props.content }
        </Typography>
      </CardContent>

    </Card>
  );
}
