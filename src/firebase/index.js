import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; // for the db
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyDUqnz_js1Fn04XMAQDEYWm1iJ7ae2FaZo",
  authDomain: "dragonwristbands.firebaseapp.com",
  databaseURL: "https://dragonwristbands-default-rtdb.firebaseio.com",
  projectId: "dragonwristbands",
  storageBucket: "dragonwristbands.appspot.com",
  messagingSenderId: "863690853771",
  appId: "1:863690853771:web:41f87710029ca6780ff38e",
  measurementId: "G-WZ51DRWLVN"
};

firebase.initializeApp(config);

const firestore = firebase.firestore();

const auth = firebase.auth();

const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) { return };

  const userRef = firestore.doc(`users/${userAuth.multiFactor.user.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};



export {
  firestore,
  createUserProfileDocument,
  auth,
};