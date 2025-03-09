import { createContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth/firebase";
import { toastError, toastSuccess } from "../helpers/Toastify";
import { useNavigate } from "react-router-dom";



export const AuthPage = createContext();

const AuthContext = ({ children }) => {
const navigate= useNavigate()

  const createUser=async(email, password,displayName)=>{
    try{
     await createUserWithEmailAndPassword(auth, email, password);
    toastSuccess("Register is successfully done")  
    navigate("/")
    }
   catch(error){
    toastError("Registration failed!")

   }
  }
  const loginUser=async(email, password)=>{
    try{
      await signInWithEmailAndPassword(auth, email, password);
      toastSuccess("Login is successfully done.")
      navigate("/")
    }
    catch(error){
      toastError("Login failed!")
    }

  }
  return <AuthPage.Provider value={{createUser, loginUser}}>{children}</AuthPage.Provider>;
};

export default AuthContext;
