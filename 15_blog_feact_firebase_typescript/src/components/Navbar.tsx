import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { auth } from '../components/Firebase'
import { signOut } from 'firebase/auth'

const useStyles = makeStyles({
  root: {
    '& a' : {
      color: 'white'
    }
  }
})

export default function Navbar() {
  
  const classes = useStyles()

  return (
    <Box  sx={{ flexGrow: 1 }} >
      <AppBar  position="static">
        <Toolbar className={classes.root}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" > Mon super Blog </Link> 
          </Typography>

          { !auth.currentUser && 

            <div>
              <Button color="inherit">          
                <Link  to="/login">Login</Link>      
              </Button>
              <Button color="inherit">
                <Link to="/register">Register</Link>
              </Button>
            </div>
          }

          { auth.currentUser &&
            <div>
              <Typography>  </Typography>

              <Button
                color="inherit"

              >
                ( Bonjour { auth.currentUser.email } ) Editer
              </Button>
              <Button 
                color="inherit"
                onClick={() => signOut(auth)}  
                >
                   Se déconnecter
              </Button>
            </div>
          
          }

        </Toolbar>
      </AppBar>
    </Box>
  );
}


