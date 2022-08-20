import firebase from  'firebase/compat/app'
import 'firebase/compat/auth';

const app = firebase.initializeApp({
  /*apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,*/
  apiKey: "AIzaSyDGKmmxU5wktflAi653EUAiNIzDsLvojPQ",
  authDomain: "tailwindcss-6fccb.firebaseapp.com",
  projectId: "tailwindcss-6fccb",
  storageBucket: "tailwindcss-6fccb.appspot.com",
  messagingSenderId: "718561039416",
  appId: "1:718561039416:web:ed86dc45ac4d8a24bdc2cd",
  measurementId: "G-BMV0NGFSRB"
});

export const auth = app.auth();

export default app;