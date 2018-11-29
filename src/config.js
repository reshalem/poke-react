import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA3vUlbaNcG6SAc8kWyFy5sIU53oLizuxk",
    authDomain: "poke-react.firebaseapp.com",
    databaseURL: "https://poke-react.firebaseio.com",
    projectId: "poke-react",
    storageBucket: "poke-react.appspot.com",
    messagingSenderId: "376003568619"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const facebook = new firebase.auth.FacebookAuthProvider();
export const auth = firebase.auth();
export default firebase;