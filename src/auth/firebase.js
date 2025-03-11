// import { initializeApp } from "firebase/app"
// import { getAuth } from "firebase/auth"

// const firebaseConfig={
//     apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId,
// }

// const app= initializeApp(firebaseConfig)

// export const auth= getAuth(app)

//! Using process.env in Vite: Vite uses import.meta.env, not process.env.


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

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

