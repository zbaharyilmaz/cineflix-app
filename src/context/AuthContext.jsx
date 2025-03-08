import { createContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth/firebase";
import { toastSuccess } from "../helpers/Toastify";



export const AuthPage = createContext();

const AuthContext = ({ children }) => {


  const createUser=async(email, password)=>{
    await createUserWithEmailAndPassword(auth, email, password);
    toastSuccess(("Register is successfully done"))
  }
  return <AuthPage.Provider value={{createUser}}>{children}</AuthPage.Provider>;
};

export default AuthContext;
