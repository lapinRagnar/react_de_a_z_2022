import React from 'react'
import { Button, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'


const useStyles = makeStyles({
    root: {
        height: '100vh',
        background: 'linear-gradient(45deg, #FE6B43 30%, #356B43 90%  )'
    }
})



export default function TutoTheming() {

  const classes = useStyles()

  return (
    <div className={classes.root}>
        Bonjour tout le monde
  
          <Typography 
            variant='h1' 
            color="primary"
            >
              Ceci est mon typographie
          </Typography>
        

        <Button> Ceci est mon bouton</Button>
    </div>


  )
}


