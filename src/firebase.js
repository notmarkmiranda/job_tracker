import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyA85Fz_dPxymJLfBS2VBe4ICvf-LyvTd3I',
  authDomain: 'job-tracker-13381.firebaseapp.com',
  databaseURL: 'https://job-tracker-13381.firebaseio.com',
  storageBucket: 'job-tracker-13381.appspot.com',
  messagingSenderId: '81725134456'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
