import './App.css';
import React, { useState } from 'react';
import Client from './components/Client';
import ClientForm from './components/ClientForm';


const App = () => {

  const [clients, setClients] = useState([
    {id: 1, nom: 'client 1'},
    {id: 2, nom: 'client 2'},
    {id: 3, nom: 'client 3' }
  ])


  // supprimer clients
  const handleDelete = (id) => {

    const updatedClients = [...clients]

    const index = updatedClients.findIndex(client => client.id === id)

    updatedClients.splice(index, 1)

    setClients(updatedClients)
  }

  const handleAdd = client => {
    const updatedClients = [...clients]  
    updatedClients.push(client)

    setClients(updatedClients)
  }


  
  const title = 'liste des clients'

  return <div>
    <h1>{title} </h1>


    <ul>
      {clients.map((client) => <Client key={client.id} details={client} onDelete={handleDelete} />)}
    </ul>

    <ClientForm onClientAdd={handleAdd} />

  </div>
  
}

export default App;
