
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyBLrHg88uap2vV95DjDxGHfWW-a2IEGIPc",
  authDomain: "mini-blog-ebcc9.firebaseapp.com",
  projectId: "mini-blog-ebcc9",
  storageBucket: "mini-blog-ebcc9.appspot.com",
  messagingSenderId: "425342685712",
  appId: "1:425342685712:web:b27f25a4f71db085b67095"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export {db}