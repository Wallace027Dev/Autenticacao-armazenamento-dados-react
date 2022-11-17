import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADhqTFeosn7ROorCmB-F7ePoFVcsSZPEg",
  authDomain: "auth-770f5.firebaseapp.com",
  projectId: "auth-770f5",
  storageBucket: "auth-770f5.appspot.com",
  messagingSenderId: "290963703201",
  appId: "1:290963703201:web:9ed65ca8fac21dfd3337e0",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
