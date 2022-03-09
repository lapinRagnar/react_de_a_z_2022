import logo from './logo.svg';
import './App.css';
import React from 'react';
import Client from './components/Client';
import ClientForm from './components/ClientForm';

class App extends React.Component {


  state = {
    clients: [
      {id: 1, nom: 'client 1'},
      {id: 2, nom: 'client 2'},
      {id: 3, nom: 'client 3' }
    ]
  }

  // supprimer clients
  handleDelete = (id) => {

    const clients = [...this.state.clients]

    const index = clients.findIndex(client => client.id === id)

    clients.splice(index, 1)

    this.setState({ clients})
  }

  handleAdd = client => {
    const clients = [...this.state.clients]  
    clients.push(client)

    this.setState({clients})
  }


  render() {
    const title = 'liste des clients'

    return <div>
      <h1>{title} </h1>

      <ul>
        {this.state.clients.map((client) => <Client details={client} onDelete={this.handleDelete} />)}
      </ul>

      <ClientForm onClientAdd={this.handleAdd} />

    </div>
  }
}

export default App;
