
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBpdGfOfkhfYbKJaWesLzNDc4yZBG99N5Q",
  authDomain: "mentoras-2.firebaseapp.com",
  projectId: "mentoras-2",
  storageBucket: "mentoras-2.appspot.com",
  messagingSenderId: "902328635902",
  appId: "1:902328635902:web:57eb1e2dbc367eb54eb0af",
  measurementId: "G-C0X71DKRMS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
