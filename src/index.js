import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


const firebaseConfig = {
  apiKey: "AIzaSyBUmhsdf7j-mLsMsd8KF5eouOoIUW4QAW8",
  authDomain: "ratemymental.firebaseapp.com",
  projectId: "ratemymental",
  storageBucket: "ratemymental.appspot.com",
  messagingSenderId: "954679756010",
  appId: "1:954679756010:web:e0e0b115d39f7913538393",
  measurementId: "G-38146G8GS5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);