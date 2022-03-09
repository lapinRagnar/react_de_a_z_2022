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
    const element = <li>test de varibles</li>
    const elements = [
      <li>premier element</li>,
      <li>deuxieme element</li>
    ]

    return <div>
      <h1>{title} </h1>
      <ul>
        {element}
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
