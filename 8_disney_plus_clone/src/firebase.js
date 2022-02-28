// import * as firebase from "firebase";
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, onSnapshot } from 'firebase/firestore';


// mon clé a moi
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};


// const firebaseConfig = {
//   apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
//   authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
//   projectId: "disneyplus-clone-a33d5",
//   storageBucket: "disneyplus-clone-a33d5.appspot.com",
//   messagingSenderId: "37918794208",
//   appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
//   measurementId: "G-DRVLJKWRWG",
// };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const collectionMovies = collection(db, "users")

console.log(collectionMovies);

// en utilisant getDocs
// getDocs(collectionMovies)
//   .then((snapshot) =>{
//     let movies = []
//     snapshot.docs.forEach((doc) => {
//       movies.push({...doc.data(), id: doc.id})
//     })
//     console.log(movies);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   })


// const movies = onSnapshot(collectionMovies, (doc) => {
//   console.log("Current data: ", doc.data());
// });




export default db;


// import { initializeApp} from "firebase/app";
// import { getFirestore } from 'firebase/firestore'
// import { getAuth } from 'firebase/auth'
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
//   authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
//   projectId: "disneyplus-clone-a33d5",
//   storageBucket: "disneyplus-clone-a33d5.appspot.com",
//   messagingSenderId: "37918794208",
//   appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
//   measurementId: "G-DRVLJKWRWG",
// };
// const  firebaseApp= initializeApp(firebaseConfig)
// const db = getFirestore(firebaseApp)
// const auth = getAuth(firebaseApp)

// const storage = getStorage(firebaseApp);


// export { auth, storage };
// export default db;