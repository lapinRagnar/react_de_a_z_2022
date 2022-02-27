import { addDoc, collection, deleteDoc, doc, setDoc } from 'firebase/firestore';
import db from './firebase'

// create - CRUD avec addDoc (permet d'ajouter automatiquement l'id)
export const handleNew =  async () => {
const name = prompt("entrez le nom de la couleur")
const value = prompt("entrez la valeur hexa de la couleur")

const collectionRef = collection(db, 'colors')
const payload = { name: name, value: value}
const docRef = await addDoc(collectionRef, payload)
console.log('le nouveau id est: ' + docRef.id);
}

// Editer
export const handleEdit = async (id) => {
    const name = prompt("entrez le nom de la couleur")
    const value = prompt("entrez la valeur hexa de la couleur")

    const docRef = doc(db, 'colors', id)
    const payload = { name: name, value: value}

    setDoc(docRef, payload)
}

// suppression
export const handleDelete = async (id) => {
    const docRef = doc(db, 'colors', id)
    await deleteDoc(docRef)
}