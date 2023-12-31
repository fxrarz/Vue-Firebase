import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDVQrY8I5B_JU4occK_zONntJMT1zb7LG4",
    authDomain: "vue-firebase-f5444.firebaseapp.com",
    projectId: "vue-firebase-f5444",
    storageBucket: "vue-firebase-f5444.appspot.com",
    messagingSenderId: "1011792661356",
    appId: "1:1011792661356:web:80d847c7201da68b4a4149",
    measurementId: "G-W4T610J9VW"
  };

  
// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { getAuth } from 'firebase/auth'
// Initialize Firebase
const app1 = firebase.initializeApp(firebaseConfig);
getAuth(app1);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Initialize Firebase
const app2 = initializeApp(firebaseConfig);
const analytics = getAnalytics(app2);


const app = createApp(App)

app.use(router)

app.mount('#app')
