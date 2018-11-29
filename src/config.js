import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAYgk9MBp7iXMk6YjKBxSrYfdHVi83A3oI",
    authDomain: "hacktiv-x-overflow.firebaseapp.com",
    databaseURL: "https://hacktiv-x-overflow.firebaseio.com",
    projectId: "hacktiv-x-overflow",
    storageBucket: "hacktiv-x-overflow.appspot.com",
    messagingSenderId: "833013862564"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const facebook = new firebase.auth.FacebookAuthProvider();
export const auth = firebase.auth();
export default firebase;