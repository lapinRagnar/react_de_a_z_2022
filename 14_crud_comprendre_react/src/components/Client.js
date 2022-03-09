import React, { Component } from 'react';

const Client = (props) => {

    // const details = this.props.details
    // const onDelete = this.props.onDelete
    // sont l'equivalent de 

    const { details, onDelete } = props


    return (
        <li key={details.id} >
            {details.nom} <button onClick={() => onDelete(props.details.id)}>X</button>             
        </li>
    );
    
}

export default Client;