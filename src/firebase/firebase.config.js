// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// console.log('Envrioment variable: ', import.meta.env.VITE_PASS);
// console.log('Envrioment variable: ', import.meta.env.VITE_apiKey);

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyCNMgsD60e-p9m0phsjsnoDE3qY-712Bew",
  // authDomain: "the-news-dragon-client-7ce83.firebaseapp.com",
  // projectId: "the-news-dragon-client-7ce83",
  // storageBucket: "the-news-dragon-client-7ce83.appspot.com",
  // messagingSenderId: "529160641143",
  // appId: "1:529160641143:web:141babf65f2806ddd54472"
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VIT_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;