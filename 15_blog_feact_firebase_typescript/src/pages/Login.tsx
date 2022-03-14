import React, { useState } from 'react'
import { Button, Grid, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { auth } from '../components/Firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Navigate } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    marginBottom: '0',
    
  },
  box: {
    marginTop: '100px'
  }
});

export default function Login() {

  const classes = useStyles()

  const [email, setEmail] = useState('')
  const [password, setPassword ] = useState('')

  const signIn = () => {
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user);
        
      })
      .catch((error => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log('erreur lesy baby e: ' + errorCode)
        console.log('erreur lesy baby e: ' + errorMessage)
      }))
  }

  if (auth.currentUser) {
    return (<Navigate to="/" />)
  }

  return (
    
    <Grid container spacing={2} className={classes.root} >

      <Box
        className={classes.box} 
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h2">
          se connecter
        </Typography>

        <Typography>
            <TextField 
              id="email" 
              label="email" 
              variant="standard" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />
        </Typography>

        <Typography>
            <TextField 
              id="password" 
              label="password" 
              variant="standard" 
              value={password} 
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              />
              
        </Typography>

        <Button 
          color="primary" 
          fullWidth={true} 
          variant="contained"
          onClick={() => signIn()}
          >
            se connecter
        </Button>

      </Box>

    </Grid>
  )
}
