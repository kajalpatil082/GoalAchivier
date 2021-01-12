// database/firebaseDb.js

// import * as firebase from 'firebase';

// const firebaseConfig = {
//     apiKey: "AIzaSyBHRPipTicAL3BWGPOUG5GL3aJa0tVO8vE",
//     authDomain: "goalachiverapp.firebaseapp.com",
//     databaseURL: "https://goalachiverapp-default-rtdb.firebaseio.com/",
//     projectId: "goalachiverapp",
//     storageBucket: "goalachiverapp.appspot.com",
//     messagingSenderId: "937618481076",
//     appId: "1:937618481076:android:a56449c6016bad0fc09ce1"
// };

// firebase.initializeApp(firebaseConfig);

//export default firebase;
import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyBHRPipTicAL3BWGPOUG5GL3aJa0tVO8vE",
    authDomain: "goalachiverapp.firebaseapp.com",
    databaseURL: "https://goalachiverapp-default-rtdb.firebaseio.com/",
    projectId: "goalachiverapp",
    storageBucket: "goalachiverapp.appspot.com",
    messagingSenderId: "937618481076",
    appId: "1:937618481076:android:a56449c6016bad0fc09ce1"
};
let app = Firebase.initializeApp(config);
export const db = app.database();