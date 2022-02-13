import React, { Component, useEffect, useState, useRef } from 'react';
import Picture from './Picture'

export default function Pictures() {

    
    const [images, setImages] = useState([
        "nord1.jpg",
        "nord2.jpg",
        "nord3.jpg",
        'mon-profile.jpg'
    ])

    const [image, setImage] = useState(null)

    function ImagesComponent () {
        return (images.map((name, index)=> <Picture
         imageName={name} 
         index={index}
         key={index} 
         handleRemove={handleRemoveImage} 
         />))
    }


    function handleRemoveImage(index) {
        setImages(images.filter((image, i) => i !== index))
    }

    function handleImageName(event) {
        setImage(event.target.value)
    }

    function addImageName() {
        let newImages = [image, ...images]
    }

    const inputToFocus = useRef(null)

    useEffect(() => {
        inputToFocus.current.focus()
    })

    return (

        <div className='container'>
            <div className="flex">
                <ImagesComponent />
            </div>
            <div className="container-input">
                <input ref={inputToFocus} type="text" name="" id=""  onChange={handleImageName}/>
                <button type="submit" onClick={addImageName}>Ajouter nom images</button>
            </div>

        </div>
    )
}


