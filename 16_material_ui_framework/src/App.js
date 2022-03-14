import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material'

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
    </div>
  );
}

export default App;
