import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAnDllzdp2J-JALUV9pttfj_xta0NrsXDE",
	authDomain: "clone-36aa9.firebaseapp.com",
	projectId: "clone-36aa9",
	storageBucket: "clone-36aa9.appspot.com",
	messagingSenderId: "972954391671",
	appId: "1:972954391671:web:86c2262c10682616ba6272",
	measurementId: "G-SE9XK9V3PT"
  };
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// export { auth, provider };
export {auth};
