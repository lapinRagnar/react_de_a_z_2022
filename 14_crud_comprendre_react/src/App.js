import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  render() {
    return <div>
      <h1>Liste de client!</h1>
      <ul>
        <li>client 1 <button>X</button> </li> 
        <li>client 2 <button>X</button> </li> 
        <li>client 3 <button>X</button> </li> 
      </ul>
      <form action="">
        <input type="text" placeholder='ajouter un client' />
        <button>Confirmer</button>
        
      </form>
    </div>
  }
}

export default App;
