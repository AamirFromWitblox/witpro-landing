import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBt6nb1ka7SSJH_8-5sr1eCxCOpzxjP6DU",
  authDomain: "witpro-e38b9.firebaseapp.com",
  projectId: "witpro-e38b9",
  storageBucket: "witpro-e38b9.appspot.com",
  messagingSenderId: "399741018106",
  appId: "1:399741018106:web:846fbb2ecebe32a3f80e43",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
