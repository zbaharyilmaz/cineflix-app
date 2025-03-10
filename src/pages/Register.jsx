import React from "react";
import GoogleIcon from '@mui/icons-material/Google';
import { useState } from "react";
import { useContext } from "react";
import { AuthPage } from "../context/AuthContext";

const Register = () => {
  const [email, setEmail] = useState("")
  const [lastName, setLastName] = useState("")
  const [firstName, setFirstName] = useState("")
  const [password, setPassword] = useState("")

  const {createUser,googleWith }= useContext(AuthPage)

  const handleSubmit=(e)=>{
    e.preventDefault()
    const displayName=`${firstName} ${lastName}`
    createUser(email, password, displayName)

  }


  return (
    <div className="overflow-hidden flex-1 h-screen justify-center items-center bg-[#23242a]">
      <div className={`form-container mt-[5vh] w-[380px] h-[580px]`}>
        <form onSubmit={handleSubmit}>
          <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
           REGISTER
          </h2>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_text"
              id="floating_text"
              className=" peer"
              placeholder=" "
              required
              onChange={(e)=>setFirstName(e.target.value)}
            />
            <label htmlFor="floating_text" className="">
              First Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              className="peer"
              placeholder=" "
              name="floating_text"
              type="text"
              id="floating_lastname"
              required
              onChange={(e)=>setLastName(e.target.value)}

             
            />
            <label htmlFor="floating_text">Last Name</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              className="peer"
              placeholder=" "
              name="floating_email"
              type="email"
              required
              onChange={(e)=>setEmail(e.target.value)}

            
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
              onChange={(e)=>setPassword(e.target.value)}

          
            />
            <label htmlFor="floating_password">Password</label>
          </div>
          <button type="submit" className="btn-danger">
            Register
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

export default Register;
