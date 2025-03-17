import React from "react";
import {
  Disclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import SwitchButton from "../atoms/SwitchButton";
import { Avatar } from "@mui/material";
import { AuthPage } from "../../context/AuthContext";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { logout, currentUser } = useContext(AuthPage);
  const location = useLocation();
  const isLoginOrRegisterPage =
    location.pathname === "/login" || location.pathname === "/register";
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (isLoginOrRegisterPage) {
      setOpen(false);
    }
  }, [location.pathname]);

  const handleLogout = () => {
    logout();
    setOpen(false);
  };
  const handleLink= () => {
    setOpen(false); 
  };
  return (
    <Disclosure
      as="nav"
      className="bg-color7-light text-color2-lightblue dark:bg-color5-dark dark:text-color1-pink h-20"
    >
      <div className="px-2 sm:px-6 lg:px-8 sm:w-full">
        <div className="flex h-20 items-center justify-between relative">
          <div className="flex items-center justify-center pr-2 gap-4 mt-4">
            <Link className="text-6xl lg:text-7xl" to="/">
              Cine
              <span className="text-color1-pink dark:text-color2-lightblue">
                F
              </span>
              lix
            </Link>
            <SwitchButton className="sm:hidden" />
          </div>

          {!isLoginOrRegisterPage && (
            <div className="sm:hidden mt-10 mr-4">
              <Disclosure.Button className="text-color2-lightblue dark:text-color1-pink focus:outline-none"
               onClick={() => setOpen(!open)}>
             
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
            </div>
          )}
          {!isLoginOrRegisterPage && (
            <div className="hidden sm:flex items-center gap-2">
              {currentUser ? (
                <div className="absolute inset-y-0 left-0 items-center pr-2 sm:static sm:inset-auto flex gap-2 ">
                  <h5 className="text-color8-grey dark:text-color6-lightgrey mt-8 m-1 md:text-[1.1rem]">
                    {currentUser?.displayName}
                  </h5>
                  <Menu>
                    <div className="mt-7">
                      <MenuButton className="relative flex rounded-full  text-sm focus:outline-none">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <Avatar src={currentUser?.photoURL || Avatar} />
                      </MenuButton>
                      <MenuItems
                        transition
                        className="absolute right-0 top-20 z-50 mt-2 origin-top-right rounded-md bg-color7-light py-1 shadow-lg ring-1 ring-color6-lightgrey transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in min-w-20"
                      >
                        <MenuItem>
                          <span
                            className="block px-4 py-2 text-sm text-color5-dark data-[focus]:bg-color6-lightgrey data-[focus]:outline-none"
                            onClick={() => logout()}
                          >
                            Logout
                          </span>
                        </MenuItem>
                      </MenuItems>
                    </div>
                  </Menu>
                </div>
              ) : (
                <div className="flex gap-2 overflow-x-auto sm:w-full md:w-auto custom-scrollbar my-4">
                    {!isLoginOrRegisterPage && (
                    <>
                  <Link
                    to="/register"
                    className="mt-8 px-4 w-10/12 py-2 text-sm bg-color9-rose text-white rounded-md hover:bg-color8-grey"
                    onClick={handleLink}
                  >
                    Register
                  </Link>
                  <Link
                    to="/login"
                    className="mt-8 px-4 py-2 text-sm bg-color2-lightblue text-white rounded-md hover:bg-color8-grey"
                    onClick={handleLink}
                  >
                    Login
                  </Link>
                  </>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {!isLoginOrRegisterPage && 
      <Disclosure.Panel className="sm:hidden">
      {currentUser ? (
        <Menu>
          <MenuItem
            transition
            className="absolute right-0 z-50 origin-top-right rounded-md bg-color7-light py-1 shadow-lg ring-1 ring-color6-lightgrey transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in min-w-20"
          >
            <span
              className="block m-1 px-4 py-2 text-sm text-color5-dark data-[focus]:bg-color6-lightgrey data-[focus]:outline-none"
              onClick={handleLogout}
            >
              Logout
            </span>
          </MenuItem>
        </Menu>
      ) : (
        <div className="flex flex-col gap-2 p-4">
          <Link
            to="/register"
            className="px-1 py-2 text-sm bg-color9-rose text-white rounded-md hover:bg-color8-grey"
            onClick={handleLink}
          >
            Register
          </Link>
          <Link
            to="/login"
            className="px-4 py-2 text-sm bg-color2-lightblue text-white rounded-md hover:bg-color8-grey"
            onClick={handleLink}
          >
            Login
          </Link>
        </div>
      )}
    </Disclosure.Panel>
    }
      
    </Disclosure>
  );
}
