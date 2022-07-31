import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBaGcBXMcADyt_0fY_lU9Ac_W2kPcFFN2c",
    authDomain: "netflix-clone-f22da.firebaseapp.com",
    projectId: "netflix-clone-f22da",
    storageBucket: "netflix-clone-f22da.appspot.com",
    messagingSenderId: "627558168433",
    appId: "1:627558168433:web:bed0e8abe6c9a5d63868d0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;