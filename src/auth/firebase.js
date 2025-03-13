import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const tmdbApiKey = import.meta.env.VITE_TMDB_KEY;

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};
console.log(firebaseConfig);  // Firebase yapılandırmasını kontrol et

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
