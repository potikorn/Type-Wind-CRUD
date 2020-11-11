import firebase from 'firebase/app';
import 'firebase/firestore';

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;
const SENDING_ID = process.env.REACT_APP_FIREBASE_MESSAGE_SENDING_ID;
const APP_ID = process.env.REACT_APP_FIREBASE_APP_ID;

let config = {
  apiKey: API_KEY,
  authDomain: 'web-development-634c0.firebaseapp.com',
  databaseURL: 'https://web-development-634c0.firebaseio.com',
  projectId: 'web-development-634c0',
  storageBucket: 'web-development-634c0.appspot.com',
  messagingSenderId: SENDING_ID,
  appId: APP_ID
};

firebase.initializeApp(config);

export default firebase.firestore();
