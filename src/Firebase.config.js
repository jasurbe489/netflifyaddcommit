import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAm3ucZ5yH-5gnEW0L2XznPMNkdnr0LBKk",
    authDomain: "my-cards-site-login-project.firebaseapp.com",
    projectId: "my-cards-site-login-project",
    storageBucket: "my-cards-site-login-project.firebasestorage.app",
    messagingSenderId: "180267638475",
    appId: "1:180267638475:web:c1a1b914a0001376b8454e",
    measurementId: "G-9KXVLMDYRF"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

