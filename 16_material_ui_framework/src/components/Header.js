import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import { makeStyles } from '@mui/styles';
import { red } from '@mui/material/colors';

export default function Header() {

  const classes = useStyles()

  return (
    
    <AppBar position='static' color='success'>
        <Toolbar>
            <Typography className={classes.typographieStyle}>Ceci est notre header</Typography>
            <HomeIcon></HomeIcon>
        </Toolbar>
    </AppBar>
    
  )
}

const useStyles = makeStyles({
    typographieStyle: {
        flex: 1,
    }
})
