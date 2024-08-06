// lib/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDOOxq8MvrJGZTGm5TzhkDIJW_8DjRrYII',
  authDomain: 'groceryweb-b98a5.firebaseapp.com',
  projectId: 'groceryweb-b98a5',
  storageBucket: 'groceryweb-b98a5.appspot.com',
  messagingSenderId: '983992414802',
  appId: '1:983992414802:web:f376120fe25a701ceda58b',
  measurementId: 'G-PMCPN73LV9',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
