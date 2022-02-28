import { useEffect, useState } from "react"
import { upload, useAuth } from "./firebase"

export default function Profile() {

    const currentUser = useAuth()
    const [photo, setPhoto] = useState(null)
    const [loading, setLoading] = useState(false)
    const [photoURL, setPhotoURL] = useState("https://images.assetsdelivery.com/compings_v2/triken/triken1608/triken160800029.jpg")

    function handleChange(e) {
        if (e.target.files[0]) {
            setPhoto(e.target.files[0])
        }
    }

    function handleClick() {
        upload(photo, currentUser, setLoading)
    }

    useEffect(() => {
        if (currentUser?.photoURL) {  // currentUser && currentUser.photoURL
            setPhotoURL(currentUser.photoURL)
        }
    }, [currentUser])

    return (
        <div className="profile-container">
            <img className="avatar" src={photoURL} alt="" />
            <div>
                <input type="file" onChange={handleChange} />
            </div>

            <div>
                <button disabled={loading || !photo} onClick={handleClick}>Upload</button>                
            </div>
        </div>
    )
}