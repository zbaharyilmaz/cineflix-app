import React from "react";
import {
  Disclosure
} from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import SwitchButton from "../atoms/SwitchButton";
import { AuthPage } from "../../context/AuthContext";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import MobileMenu from "../molecules/MobileMenu";
import DesktopMenu from "../molecules/DesktopMenu";

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
  const handleLink = () => {
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

          {!isLoginOrRegisterPage && <MobileMenu />}

          {!isLoginOrRegisterPage && <DesktopMenu />}
        </div>
      </div>
    </Disclosure>
  );
}
