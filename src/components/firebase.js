
import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCDa9jJA1HwKsMGb_s_vNLCuGMJXfPn9Io",
  authDomain: "proyectofinal-reactjs.firebaseapp.com",
  projectId: "proyectofinal-reactjs",
  storageBucket: "proyectofinal-reactjs.appspot.com",
  messagingSenderId: "708271361286",
  appId: "1:708271361286:web:ac24ccb0f73892f7236287"
};

const app = firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore(app)