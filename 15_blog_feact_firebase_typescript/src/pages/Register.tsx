import React, { useState } from 'react'
import { Button, Grid, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { auth } from '../components/Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Navigate } from 'react-router-dom';






export default function Register() {

  const classes = useStyles()

  const [email, setEmail] = useState('')
  const [password, setPassword ] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const handleSignUp = () => {
 

    if ( email.length < 4 ) {
      alert('la longueur du mail doit être > 4!')
      return
    }
    if (password.length < 4) {
      alert('la longeur du mot de passe doit être > 4! ')
      return
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        alert('enregistrement reussi!')
        console.log(user);
        
      } )
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode);
        console.log(errorMessage);
        
      })
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
          créer un compte
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

        <Typography>
            <TextField 
              id="passwordConfirm" 
              label="password confirmation" 
              variant="standard" 
              value={password} 
              type="password"
              onChange={(e) => setPasswordConfirm(e.target.value)}
              />              
        </Typography>

        <Button 
          color="primary" 
          fullWidth={true} 
          variant="contained"
          onClick={() => handleSignUp()}
          >
            Enregistrer
        </Button>

      </Box>

    </Grid>
  )
}

const useStyles = makeStyles({
  root: {
    marginBottom: '0',
    
  },
  box: {
    marginTop: '100px'
  }
});
