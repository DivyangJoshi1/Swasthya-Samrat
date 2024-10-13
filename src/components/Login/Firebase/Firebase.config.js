// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAvXtt6l4lbEEimahZQ1vVvvyzGO-Gi8I",
  authDomain: "swasthya-samrat.firebaseapp.com",
  databaseURL: "https://swasthya-samrat-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "swasthya-samrat",
  storageBucket: "swasthya-samrat.appspot.com",
  messagingSenderId: "416042949598",
  appId: "1:416042949598:web:fa4e39e87cbd382b969b4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;