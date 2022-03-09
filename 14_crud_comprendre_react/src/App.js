import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {

  state = {
    clients: [
      {id: 1, nom: 'client 1'},
      {id: 2, nom: 'client 2'},
      {id: 3, nom: 'client 3' }
    ]
  }

  render() {
    const title = 'liste des clients'

    return <div>
      <h1>{title} </h1>
      <ul>
        {this.state.clients.map((client) => <li>{client.nom} <button>X</button> </li>)}
      </ul>
      <form action="">
        <input type="text" placeholder='ajouter un client' />
        <button>Confirmer</button>

      </form>
    </div>
  }
}

export default App;
