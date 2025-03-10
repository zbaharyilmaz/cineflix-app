import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../auth/firebase";
import { toastError, toastSuccess } from "../helpers/Toastify";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";

export const AuthPage = createContext();

const AuthContext = ({ children }) => {
  const navigate = useNavigate();

  const createUser = async (email, password, displayName) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toastSuccess("Register is successfully done");
      navigate("/");
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
  const googleWith = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      toastSuccess(`Welcome! You have signed in with Google.`);
      navigate("/");
    } catch (error) {
      toastError("Register with Google failed!");
      console.error("Google Login Error:", error);
    }
  };
  

  const logout = async () => {
    signOut(auth);
    toastSuccess("Logout is successfully done.");
  };

  return (
    <AuthPage.Provider value={{ createUser, loginUser, googleWith, logout }}>
      {children}
    </AuthPage.Provider>
  );
};

export default AuthContext;
