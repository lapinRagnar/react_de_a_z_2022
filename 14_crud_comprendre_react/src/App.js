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
    nouveauClient: ''
  }

  // supprimer clients
  handleDelete = (id) => {

    const clients = [...this.state.clients]

    const index = clients.findIndex(client => client.id === id)

    clients.splice(index, 1)

    this.setState({ clients})
  }

  // ajouter clients
  handleSubmit = (event) => {
    event.preventDefault()

    const id = new Date().getTime()
    const nom = this.state.nouveauClient

    const clients = [...this.state.clients]  
    clients.push({id, nom})

    this.setState({clients, nouveauClient: ''})
  }


  handleChange = (event) => {
    const value = 
    this.setState({ nouveauClient: event.currentTarget.value})
  }


  render() {
    const title = 'liste des clients'

    return <div>
      <h1>{title} </h1>

      <ul>
        {this.state.clients.map((client) => <li key={client.id} >{client.nom} <button onClick={() => this.handleDelete(client.id)}>X</button> </li>)}
      </ul>
      <form action="" onSubmit={this.handleSubmit} >
        <input value={this.state.nouveauClient} onChange={this.handleChange} type="text" placeholder='ajouter un client' />
        <button >Confirmer</button>

      </form>
    </div>
  }
}

export default App;
