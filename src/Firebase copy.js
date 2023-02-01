import {initializeApp} from "../node_modules/firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB9VsdIXkeJUbpDqdc6UBtmm8It0TVj45Y",
    authDomain: "hotstar-clone-30f95.firebaseapp.com",
    projectId: "hotstar-clone-30f95",
    storageBucket: "hotstar-clone-30f95.appspot.com",
    messagingSenderId: "298244209371",
    appId: "1:298244209371:web:68c2b79541cae42ef82afe"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = db.auth();
  const provider = new db.auth.GoogleAuthProvider();
  const storage = db.storage();

  //const { auth,provider,storage};
  export {db, auth, provider};

  