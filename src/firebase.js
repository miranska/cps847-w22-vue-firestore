// To load development SDK uncomment line 2 and comment lines 3--4
// import firebase from 'firebase'
import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  // Insert your config here
}

const firebaseApp = firebase.initializeApp(config)

export{ firebaseApp }
