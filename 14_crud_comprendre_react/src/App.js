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

    const elements = this.state.clients.map(function(client) {
      return <li>{client.nom} <button>X</button> </li>
    })

    return <div>
      <h1>{title} </h1>
      <ul>
        {elements}
      </ul>
      <form action="">
        <input type="text" placeholder='ajouter un client' />
        <button>Confirmer</button>

      </form>
    </div>
  }
}

export default App;
