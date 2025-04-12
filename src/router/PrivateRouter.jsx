import React, { useContext } from "react";
import { AuthPage } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const { currentUser } = useContext(AuthPage);

  return currentUser ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;

