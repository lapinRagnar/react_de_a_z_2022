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
        this.state = {
            titre: '1ere evenement avec React js pour interagir avec le dom',
            show: false
        }
    }

    render() {
        return <div>
            <h1>{this.state.titre} </h1>
            <p> cliquer pour afficher l'image</p>
            {
                this.state.show ?
                <img className="mon-profile" src="mon-profile.jpg" alt="" />
                : null
            }
            <button className="element-btn" onClick={()=>{this.setState({show: !this.state.show})}}>Cliquez</button>
        </div>
    }
}

export default App

