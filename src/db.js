import firebase from "firebase/app"
import "firebase/database"

const config = {
    apiKey: "AIzaSyAy4frBZ-I8MFVqxPPYWQWD-ji-7Piry2k",
  authDomain: "firevuechat-2ebb8.firebaseapp.com",
  databaseURL: "https://firevuechat-2ebb8-default-rtdb.firebaseio.com",
  projectId: "firevuechat-2ebb8",
  storageBucket: "firevuechat-2ebb8.appspot.com",
  messagingSenderId: "782814797043",
  appId: "1:782814797043:web:eaee4629ce3a1e62d82b86"
}

const db = firebase.initializeApp(config);

export default db;