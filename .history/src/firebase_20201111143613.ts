import firebase from 'firebase/app';
import 'firebase/firestore';

let config = {
  apiKey: 'AIzaSyCESt1Dibxdfte_NnFJP4kw4O9yV6pbSOg',
  authDomain: 'web-development-634c0.firebaseapp.com',
  databaseURL: 'https://web-development-634c0.firebaseio.com',
  projectId: 'web-development-634c0',
  storageBucket: 'web-development-634c0.appspot.com',
  messagingSenderId: '1028829351000',
  appId: '1:1028829351000:web:fce7249c8a9bde81880e2d'
};

firebase.initializeApp(config);

export default firebase.firestore();
