import firebase from 'firebase/compat/app';
import './firebase/compat/firestore';

const firestore = firebase.firestore();

// two ways to get the collections
firestore
  .collection('users')
  .doc('zHLc8Q2ZYy9bT4R0lX')
  .collection('cartItems')
  .doc('VVW1EgEDx3VB6zIovMmI');

firestore.doc('/users/zHLc8Q2ZYy9bT4R0lXpd/cartItems/VVW1EgEDx3VB6zIovMs');
