import React, { Component, useEffect, useState } from 'react';
import Picture from './Picture'

export default function Pictures() {

    
    const [images, setImages] = useState([
        "nord1.jpg",
        "nord2.jpg",
        "nord3.jpg",
        'mon-profile.jpg'
    ])



    function ImagesComponent () {
        return (images.map((name, index)=> <Picture imageName={name} index={index} handleRemove={handleRemoveImage} />))
    }


    function handleRemoveImage(index) {
        setImages(images.filter((image, i) => i !== index))
    }



    return (
        <div>

                <ImagesComponent />

        </div>
    )
}


