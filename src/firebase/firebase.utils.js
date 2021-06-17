import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyABs1sAjX7lTMV7T6rLPV5IecL_TN1TMaM',
  authDomain: 'crown-db-7cc00.firebaseapp.com',
  databaseURL: 'https://crown-db-7cc00.firebaseio.com',
  projectId: 'crown-db-7cc00',
  storageBucket: 'crown-db-7cc00.appspot.com',
  messagingSenderId: '485243439976',
  appId: '1:485243439976:web:8cff346f920d89134d24dd',
  measurementId: 'G-7M4FYR5PQL',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
