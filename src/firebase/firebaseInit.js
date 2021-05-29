import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyD79gKwwv96eV0BBVaiKZNHG1PaK0uzfrU",
  authDomain: "invoice-app-76e22.firebaseapp.com",
  projectId: "invoice-app-76e22",
  storageBucket: "invoice-app-76e22.appspot.com",
  messagingSenderId: "169885506274",
  appId: "1:169885506274:web:b1152581d7963d66f49cbb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
