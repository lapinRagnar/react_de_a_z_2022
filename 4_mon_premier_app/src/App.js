import React from "react"
import "./css/app.css"

// composant a base de fonction

// function App({title}){
//     return <h1 className="heading" >Bonjour les amis - {title} </h1>
// }

// composant a base de classe 

class App extends React.Component{

    constructor(props) {
        super(props)
        this.state = {titre: 'ceci est ma variable o!'}
    }

    render() {
        return <h1 className="heading" >Bonjour les amis - {this.state.titre} </h1>
    }
}

export default App

