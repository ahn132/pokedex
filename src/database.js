import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCZleBMCPAwGVajQVorFriyZWSesDM2bL0",
    authDomain: "pokedex-c6ee0.firebaseapp.com",
    databaseURL: "https://pokedex-c6ee0-default-rtdb.firebaseio.com",
    projectId: "pokedex-c6ee0",
    storageBucket: "pokedex-c6ee0.appspot.com",
    messagingSenderId: "984044119072",
    appId: "1:984044119072:web:39eede72a547362fe88845",
    measurementId: "G-9CRJGGRVC8"
}

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database };