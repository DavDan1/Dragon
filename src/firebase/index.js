import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; // for the db
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCu-zYYDmnq4WldwYABV-5aJn1P8qNV8Ss",
  authDomain: "dragon-wristbands.firebaseapp.com",
  projectId: "dragon-wristbands",
  storageBucket: "dragon-wristbands.appspot.com",
  messagingSenderId: "387839412522",
  appId: "1:387839412522:web:e74588a8c6162f4bc7f653"
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