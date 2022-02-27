import { addDoc, collection, deleteDoc, doc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore';
import db from './firebase'

// create - CRUD avec addDoc (permet d'ajouter automatiquement l'id)
export const handleNew =  async () => {
const name = prompt("entrez le nom de la couleur")
const value = prompt("entrez la valeur hexa de la couleur")

const collectionRef = collection(db, 'colors')
const payload = { name: name, value: value, timestamp: serverTimestamp()}
const docRef = await addDoc(collectionRef, payload)
console.log('le nouveau id est: ' + docRef.id);
}

// Editer
export const handleEdit = async (id) => {
    const name = prompt("entrez le nom de la couleur")
    const value = prompt("entrez la valeur hexa de la couleur")

    const docRef = doc(db, 'colors', id)
    const payload = { name: name, value: value, timestamp: serverTimestamp()}

    // setDoc(docRef, payload)
    // setDoc override le doc et updateDoc ne le fais pas
    updateDoc(docRef, payload)
}

// suppression
export const handleDelete = async (id) => {
    const docRef = doc(db, 'colors', id)
    await deleteDoc(docRef)
}


export const handleQueryDelete = async (id) => {
    const userInputName = prompt("entrez le nom de la couleur")
    const collectionRef = collection(db, 'colors')

    const q = query(collectionRef, where("name", "==", userInputName))
    const snapshot = await getDocs(q)

    const results = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))
    results.forEach(async result => {
        const docRef = doc(db, 'colors', result.id) 
        await deleteDoc(docRef)
    } )
    
}