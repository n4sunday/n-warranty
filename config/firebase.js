import * as firebase from 'firebase'
var config = {
    apiKey: "AIzaSyDIFe059aIvieUNbvOqKy7CkQbVLCXUOgw",
    authDomain: "stock-n4x.firebaseapp.com",
    databaseURL: "https://stock-n4x.firebaseio.com",
    projectId: "stock-n4x",
    storageBucket: "stock-n4x.appspot.com",
    messagingSenderId: "104503208962",
    appId: "1:104503208962:web:dcd61a268cd287fafc0b1b"
}
// Initialize Firebase
export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
// firebase.initializeApp(config);

export const database = firebase.database().ref('/stock/test')
export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()