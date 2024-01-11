import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

 
  const firebaseConfig = {
    apiKey: "AIzaSyC_aPPt1d_ldICyYQWvxAC_UUqQrfUbMQM",
    authDomain: "freads-fd46c.firebaseapp.com",
    projectId: "freads-fd46c",
    storageBucket: "freads-fd46c.appspot.com",
    messagingSenderId: "437363989253",
    appId: "1:437363989253:web:2de77e79c863e3a4cab56c",
    measurementId: "G-KF5MTGG47Z"
  };


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);