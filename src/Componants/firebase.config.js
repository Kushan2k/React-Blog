import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD2-zocKiP1Ti0MRQFE7cIczYSt4F8FnTQ",
  authDomain: "react-blog-29e73.firebaseapp.com",
  projectId: "react-blog-29e73",
  storageBucket: "react-blog-29e73.appspot.com",
  messagingSenderId: "529340175974",
  appId: "1:529340175974:web:300fb180b92982ce803fa7",
  measurementId: "G-BTHEYTDDKM"
};

const app = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth(app)
const db = firebase.firestore(app)


export {auth,db}
