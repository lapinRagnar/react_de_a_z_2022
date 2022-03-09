import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {

  state = {
    clients: [
      {id: 1, nom: 'client 1'},
      {id: 2, nom: 'client 2'},
      {id: 3, nom: 'client 3' }
    ],
    compteur: 0
  }

  handleClick = () => {
    const clients = this.state.clients.slice()
    clients.push({id: 4, nom: 'client 4'})

    this.setState({ clients: clients })
  }

  render() {
    const title = 'liste des clients'

    return <div>
      <h1>{title} </h1>

      <div>
        compteur: { this.state.compteur }
      </div>

      <button onClick={this.handleClick} >Cliquer moi!</button>

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
