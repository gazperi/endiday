import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyCDg9eJJ7CJ3ZZVBAda4ge6q0oeLrv65pg',
  authDomain: 'gasperi-endiday.firebaseapp.com',
  projectId: 'gasperi-endiday',
  storageBucket: 'gasperi-endiday.appspot.com',
  messagingSenderId: '1014725867733',
  appId: '1:1014725867733:web:f357a6b019ed9092a18a5c',
  measurementId: 'G-RQJWTFV8K3',
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
