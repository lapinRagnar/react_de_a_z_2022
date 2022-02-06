import React from "react"
import "./css/app.css"

// composant a base de fonction

// function App({title}){
//     return <h1 className="heading" >Bonjour les amis - {title} </h1>
// }

// composant a base de classe 

class App extends React.Component{

    render() {
        return <h1 className="heading" >Bonjour les amis </h1>
    }
}

export default App

