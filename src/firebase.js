import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBtGKD1AEhE-_LmXC6y_q-RpMnfm9_is3k",
    authDomain: "crud-94a4a.firebaseapp.com",
    projectId: "crud-94a4a",
    storageBucket: "crud-94a4a.appspot.com",
    messagingSenderId: "89312839180",
    appId: "1:89312839180:web:88fd999a55b547f4911029"
};
  
export const firebaseApp = firebase.initializeApp(firebaseConfig)