import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBisXI4nDpKH41h03BeU_6QKPffCYfsa-4",
  authDomain: "attireflow.firebaseapp.com",
  projectId: "attireflow",
  storageBucket: "attireflow.appspot.com",
  messagingSenderId: "520840453340",
  appId: "1:520840453340:web:2820c7068e077ea54d6819",
  measurementId: "G-81XQ176ZLC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
