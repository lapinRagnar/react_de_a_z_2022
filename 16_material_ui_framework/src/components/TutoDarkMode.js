import { Button, Grid, Paper, Switch, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'



export default function TutoDarkMode() {

  const [darkMode, setDarkMode] = useState(false)
  
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light'
    },
  });

  return (

    <ThemeProvider theme={theme}>

        <Paper style={{ height: '100vh', color: 'red'}}>
            <Grid container direction='column' xl={8} style={{ display: 'flex', justifyContent: 'center', alignItems:'center'}} >
                <Typography 
                    variant='h1'
                    style={{  marginTop: "70px"}}
                    align='center'
                >
                    Tuto dark mode
                </Typography>

                <Button
                    variant='contained'
                    color='primary'
                    style={{  marginTop: "70px", width: '200px'}}
                    >
                    Mon super bouton 1
                </Button>

                <Button
                    variant='contained'
                    color='secondary'
                    >
                    Mon super bouton 2
                </Button>

                <Switch 
                    color='primary'
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                />

            </Grid>
        </Paper>
    </ThemeProvider>
  )
}
