
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBqhKxPpcWCmAdqWSBNjsynnt4GXqKtzls",
    authDomain: "redline-fb614.firebaseapp.com",
    projectId: "redline-fb614",
    storageBucket: "redline-fb614.appspot.com",
    messagingSenderId: "996481316498",
    appId: "1:996481316498:web:81422a3ebf197d4ae8584b",
    measurementId: "G-3N39MTPMW4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const appFile = initializeApp(firebaseConfig)

export const storage = getStorage()