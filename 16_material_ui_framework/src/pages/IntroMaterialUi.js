import React from 'react'
import { makeStyles } from '@mui/styles';
import { Button, Typography } from '@mui/material'

const useStyles = makeStyles({
  root: {
    // backgroundColor: 'red',
    color: (props) => props.color,
  },

  masuperclasses: {
    color: 'purple',
    fontStyle: 'oblique',

  }
});

export default function IntroMaterialUi(props) {

  const classes = useStyles(props);

  return (

    <div className={classes.root}>
        
        <Typography
          variant='h1'
          align='center'
          className={classes.masuperclasses}
        >
          Bonjour tout le monde
        </Typography>
        
        <Button 
          size="large" 
          disabled
          variant="contained"  
        >
            bouton disable
        </Button>
        
        <Button fullWidth>fullWidth</Button>
        
        <Button 
          fullWidth
          variant='outlined'
        >fullWidth
        </Button>
        
        <Button 
          fullWidth
          color='primary'
        >
          Bouton avec couleur
        </Button>

        <Button 
          fullWidth
          color='secondary'
        >
          Bouton avec couleur secondary
        </Button>
              
    </div>
  )
}
