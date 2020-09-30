import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAtjD_jPM0CezusgYHEQm3RfO3t7_KZAsM",
    authDomain: "javi-ecommerce.firebaseapp.com",
    databaseURL: "https://javi-ecommerce.firebaseio.com",
    projectId: "javi-ecommerce",
    storageBucket: "javi-ecommerce.appspot.com",
    messagingSenderId: "353247639969",
    appId: "1:353247639969:web:402ce11ff2eed7ed7e73e0",
    measurementId: "G-86MH2JGW1N"
});

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}