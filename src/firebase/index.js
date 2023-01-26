import firebase from 'firebase/app';
import 'firebase/firestore'; // for the db

const config = {
  apiKey: "AIzaSyCu-zYYDmnq4WldwYABV-5aJn1P8qNV8Ss",
  authDomain: "dragon-wristbands.firebaseapp.com",
  projectId: "dragon-wristbands",
  storageBucket: "dragon-wristbands.appspot.com",
  messagingSenderId: "387839412522",
  appId: "1:387839412522:web:e74588a8c6162f4bc7f653"
};

firebase.initializeApp(config);

const firebase = firebase.firestore();

export {
  firestore,
}