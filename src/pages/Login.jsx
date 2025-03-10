import GoogleIcon from "@mui/icons-material/Google";
import React, { useState } from "react";
import { useContext } from "react";
import { AuthPage } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser, googleWith } = useContext(AuthPage);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(email, password);
  };
  return (
    <div className="overflow-hidden flex flex-1 h-screen justify-center items-center bg-[#23242a]">
      <div className={`form-container mt-[5vh] w-[380px] h-[580px]`}>
        <form onSubmit={handleSubmit}>
          <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
            LOGIN
          </h2>

          <div className="relative z-0 w-full mb-5 group">
            <input
              className="peer"
              placeholder=" "
              name="floating_email"
              id="floating_email"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floating_email">Email</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              className="peer"
              placeholder=" "
              name="floating_password"
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floating_password">Password</label>
          </div>
          <button type="submit" className="btn-danger">
            Login
          </button>
          <button
            type="button"
            className="btn-danger flex justify-between"
            onClick={googleWith}
          >
            Continue with Google
            <GoogleIcon color="currentColor" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
