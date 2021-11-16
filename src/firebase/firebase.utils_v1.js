import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCRbZn2PRe8E3aKuYkuqrcSlhZaQ7FoEwc',
  authDomain: 'crwn-db-b3187.firebaseapp.com',
  projectId: 'crwn-db-b3187',
  storageBucket: 'crwn-db-b3187.appspot.com',
  messagingSenderId: '1083932306626',
  appId: '1:1083932306626:web:6baf9efcc48e73ab1b5f5b',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () =>
  auth
    .signInWithPopup(provider)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

export default firebase;
