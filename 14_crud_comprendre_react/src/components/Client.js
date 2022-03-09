import React from 'react';

const Client = ({ details, onDelete }) => {

    // const details = this.props.details
    // const onDelete = this.props.onDelete
    // sont l'equivalent de 

    // const { details, onDelete } = props


    return (
        <li key={details.id} >
            {details.nom} <button onClick={() => onDelete(details.id)}>X</button>             
        </li>
    );
    
}

export default Client;