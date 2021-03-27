import firebase from 'firebase'
import  'firebase/firebase-auth'
import 'firebase/firebase-firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDj7IeocxsGfOEezCqpXpqL5fZRyqGlTro",
    authDomain: "clothing-app-8dd12.firebaseapp.com",
    projectId: "clothing-app-8dd12",
    storageBucket: "clothing-app-8dd12.appspot.com",
    messagingSenderId: "221969612733",
    appId: "1:221969612733:web:4987d375e28f4c273a1cd4",
    measurementId: "G-KWXX1PQ56Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const auth=firebase.auth();
  export const firestore=firebase.firestore();
  export default firebase