import {
  Disclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Link } from "react-router-dom";
import SwitchButton from "../atoms/SwitchButton";
import { Avatar } from "@mui/material";
import { AuthPage } from "../../context/AuthContext";
import { useContext } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { logout, user} = useContext(AuthPage);

  return (
    <Disclosure
      as="nav"
      className="bg-color7-light text-color2-lightblue dark:bg-color5-dark dark:text-color1-pink h-20"
    >
      <div className="px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center justify-center pr-2 gap-4 sm:ml-6 sm:pr-0">
            <Link className="pr-3 text-6xl mt-4" to="/">
              Cine<span className="text-color1-pink dark:text-color2-lightblue">F</span>lix
            </Link>
            <SwitchButton className="pr-3 items-center" />
          </div>
          <div className="absolute inset-y-0 left-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pl-0">
            <h5 className="text-xl text-color2-lightblue dark:text-color1-pink">{user?.displayName}</h5>
            <Menu as="div" className="relative ml-3">
              <div className="mt-7">
                <MenuButton className="relative flex rounded-full bg-color7-light text-sm focus:outline-none">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <Avatar src={user?.photoURL || Avatar } />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-color7-light py-1 shadow-lg ring-1 ring-color6-lightgrey transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <Link
                    to="/Register"
                    className="block px-4 py-2 text-sm text-color5-dark data-[focus]:bg-color6-lightgrey data-[focus]:outline-none"
                  >
                    Register
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="/Login"
                    className="block px-4 py-2 text-sm  text-color5-dark data-[focus]:bg-color6-lightgrey data-[focus]:outline-none"
                  >
                    Login
                  </Link>
                </MenuItem>
                <MenuItem>
                  <span
                    className="block px-4 py-2 text-sm text-color5-dark data-[focus]:bg-color6-lightgrey data-[focus]:outline-none" onClick={()=>logout()} >
                    Logout
                  </span>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}



