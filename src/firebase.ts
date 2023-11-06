import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD05MLpjV1nnGpnB5P3zg1yNgPyvwVQWgY",
  authDomain: "fir-practice-5023f.firebaseapp.com",
  projectId: "fir-practice-5023f",
  storageBucket: "fir-practice-5023f.appspot.com",
  messagingSenderId: "53308825017",
  appId: "1:53308825017:web:66d35a4b34c9b0abc22a68",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
