import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../auth/firebase";
import { toastError, toastSuccess } from "../helpers/Toastify";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import { useState, useEffect, createContext } from "react";

export const AuthPage = createContext();

const AuthContext = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    userTrack();
  }, []);

  const navigate = useNavigate();

  const createUser = async (email, password, displayName) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toastSuccess("Register is successfully done");
      navigate("/");
      await updateProfile(auth.currentUser, {
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
    navigate("/");
  };

  const userTrack = () => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const { email, displayName, photoURL } = currentUser;

        setCurrentUser({
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        });
      } else {
        setCurrentUser(false);
      }
    });
  };

  return (
    <AuthPage.Provider
      value={{
        currentUser,
        createUser,
        loginUser,
        googleWith,
        logout,
        userTrack,
      }}
    >
      {children}
    </AuthPage.Provider>
  );
};

export default AuthContext;
