import React from "react";
import { Disclosure } from "@headlessui/react";
import { AuthPage } from "../../context/AuthContext";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MobileMenu = () => {
  const { logout, currentUser } = useContext(AuthPage);

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setOpen(false);
  };
  return (
    <div className="sm:hidden mt-10 mr-4">
      <Disclosure.Button className="text-color2-lightblue dark:text-color1-pink focus:outline-none">
        <span className="sr-only">Open menu</span>
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </Disclosure.Button>

      <Disclosure.Panel className="sm:hidden">
        {currentUser ? (
          <div className="absolute right-0 z-50 origin-top-right rounded-md bg-color7-light py-1 shadow-lg ring-1 ring-color6-lightgrey focus:outline-none">
            <span
              className="block px-4 py-2 text-sm text-color5-dark hover:bg-color6-lightgrey cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </span>
          </div>
        ) : (
          <div className="absolute right-0 z-50 origin-top-right rounded-md bg-color7-light py-1 shadow-lg ring-1 ring-color6-lightgrey focus:outline-none">
            <span
              className="block px-4 py-2 text-sm text-color5-dark hover:bg-color6-lightgrey"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
            <span
              className="block px-4 py-2 text-sm text-color5-dark hover:bg-color6-lightgrey"
              onClick={() => navigate("/register")}
            >
              Register
            </span>
          </div>
        )}
      </Disclosure.Panel>
    </div>
  );
};

export default MobileMenu;
