import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDWuMJqk2PZADwSjXXTBkg2ijJ1l42PlEA",
    authDomain: "netflix-clone-bea81.firebaseapp.com",
    projectId: "netflix-clone-bea81",
    storageBucket: "netflix-clone-bea81.appspot.com",
    messagingSenderId: "649193128180",
    appId: "1:649193128180:web:fabac1d2904ac739719ea1"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export {auth};
export default db;