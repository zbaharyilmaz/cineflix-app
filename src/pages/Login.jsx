import GoogleIcon from "@mui/icons-material/Google";
import React, { useState, useContext } from "react";
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
    <div className="overflow-hidden flex flex-col flex-1 h-screen justify-center items-center bg-color7-light dark:bg-color5-dark">
      <div className="form-container mt-[5vh] w-[400px] h-[550px]">
        <form onSubmit={handleSubmit}>
          <h2 className="text-color4-dark text-2xl font-medium text-center tracking-[0.1em] mb-3">
            LOGIN
          </h2>

          <div className="relative z-0 w-full mb-5 group">
            <input
              className="peer"
              placeholder=" "
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
              id="floating_password"
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floating_password">Password</label>
          </div>

          <div className="flex flex-col gap-3">
            <button type="submit" className="btn">
              Login
            </button>
            <button
              type="button"
              className="btn flex items-center gap-2"
              onClick={googleWith}
            >
              <GoogleIcon /> Continue with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
