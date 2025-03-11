import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../auth/firebase";
import { toastError, toastSuccess } from "../helpers/Toastify";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

export const AuthPage = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(true);

  useEffect(() => {
    userTrack();
  }, []);

  const navigate = useNavigate();

  const createUser = async (email, password, displayName) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toastSuccess("Register is successfully done");
      navigate("/");
      await updateProfile(auth.user, {
        displayName: displayName,
      });
    } catch (error) {
      toastError("Registration failed!");
    }
  };
  const loginUser = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toastSuccess("Login is successfully done.");
      navigate("/");
    } catch (error) {
      toastError("Login failed!");
    }
  };
  const googleWith = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        toastSuccess("Login with Google is successfully done.");

        navigate("/");
      })
      .catch((error) => {
        toastError("Login with Google is failed!");
      });
  };

  const logout = () => {
    signOut(auth);
    toastSuccess("Logout is successfully done.");
    navigate("/login");
  };

  const userTrack = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, photoURL } = user;

        setUser({
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        });
      } else {
        setUser(false);
      }
    });
  };

  return (
    <AuthPage.Provider
      value={{ createUser, loginUser, googleWith, logout, userTrack }}
    >
      {children}
    </AuthPage.Provider>
  );
};

export default AuthContext;
