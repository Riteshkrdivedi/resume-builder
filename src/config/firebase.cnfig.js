// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { firestore, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCBRYNSdb5uTrLaaLITvQMZ2u5MlIdAuc",
  authDomain: "resume-builder-2k24.firebaseapp.com",
  projectId: "resume-builder-2k24",
  storageBucket: "resume-builder-2k24.appspot.com",
  messagingSenderId: "642177877300",
  appId: "1:642177877300:web:a8c05d232bd0ba8fa51161",
  measurementId: "G-B6G5DMCS9Y",
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
