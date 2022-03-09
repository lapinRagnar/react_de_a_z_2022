import React, { Component } from 'react'

export default class ClientForm extends Component {

    state = {
        nouveauClient: ''
    }

    handleChange = (event) => {
        const value = 
        this.setState({ nouveauClient: event.currentTarget.value})
    }

    // ajouter clients
    handleSubmit = (event) => {
        event.preventDefault()

        const id = new Date().getTime()
        const nom = this.state.nouveauClient

        this.props.onClientAdd({id, nom})

        this.setState({nouveauClient: ''})
    }

    render() {
        return (
        
        <form action="" onSubmit={this.handleSubmit} >
            <input value={this.state.nouveauClient} onChange={this.handleChange} type="text" placeholder='ajouter un client' />
            <button >Confirmer</button>

        </form>
        )
    }

}
