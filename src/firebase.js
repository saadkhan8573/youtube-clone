import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHLZyjXsgcZOylTw-SzFtkUXQuiFKQQ8I",
  authDomain: "new--3-daa64.firebaseapp.com",
  projectId: "new--3-daa64",
  storageBucket: "new--3-daa64.appspot.com",
  messagingSenderId: "458234275172",
  appId: "1:458234275172:web:32aebc672728b894878671",
  measurementId: "G-45KXCTL521"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const db = firebaseApp.firestore();

export { auth, provider };
// export default db;
// export { firebase }