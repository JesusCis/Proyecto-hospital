import firebase from 'firebase'
import 'firebase/firestore'
const config = {
    apiKey: "AIzaSyCtcd_VjDAIwAFgFjsAPQfEcKnpj0ZkngQ",
    authDomain: "hospital-f5c6b.firebaseapp.com",
    databaseURL: "https://hospital-f5c6b.firebaseio.com",
    projectId: "hospital-f5c6b",
    storageBucket: "hospital-f5c6b.appspot.com",
    messagingSenderId: "942058937045"
}
const firebaseapp = firebase.initializeApp(config)
export default firebaseapp.firestore()