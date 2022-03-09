import React, { useState } from 'react'

const ClientForm = ({ onClientAdd }) => {

    const [nouveauClient, setNouveauClient] = useState("")

    const handleChange = (event) => {
        const value = setNouveauClient(event.currentTarget.value)
    }

    // ajouter clients
    const handleSubmit = (event) => {
        event.preventDefault()

        const id = new Date().getTime()
        const nom = nouveauClient

        onClientAdd({id, nom})

        setNouveauClient("")
    }


    return (
    
        <form action="" onSubmit={handleSubmit} >
            <input value={nouveauClient} onChange={handleChange} type="text" placeholder='ajouter un client' />
            <button >Confirmer</button>

        </form>
    )


}

export default ClientForm
