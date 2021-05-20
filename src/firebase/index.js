import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB_byTqdLswwuoZaw5R4x5T44bbQYMUggA",
  authDomain: "zenly-bfb10.firebaseapp.com",
  projectId: "zenly-bfb10",
  storageBucket: "zenly-bfb10.appspot.com",
  messagingSenderId: "1020750337090",
  appId: "1:1020750337090:web:94ab96742d7313eb0689db"
}

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export default firebase;