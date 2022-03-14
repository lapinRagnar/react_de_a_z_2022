import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

function App() {
  return (
    <div>
      <Button disabled>bouton disable</Button>
      
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
  );
}

export default App;
