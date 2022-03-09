import React, { Component } from 'react';

class Client extends Component {

    render() {

        // const details = this.props.details
        // const onDelete = this.props.onDelete
        // sont l'equivalent de 

        const { details, onDelete } = this.props


        return (
            <li key={details.id} >
                {details.nom} <button onClick={() => onDelete(this.props.details.id)}>X</button>             
            </li>
        );
    }
}

export default Client;