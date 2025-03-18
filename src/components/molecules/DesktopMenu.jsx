import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import { Avatar } from "@mui/material";
import { AuthPage } from "../../context/AuthContext";
import { useContext } from "react";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DesktopMenu = () => {
  const { logout, currentUser } = useContext(AuthPage);

  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setOpen(false);
  };
  return (
    <div className="hidden sm:flex items-center gap-2">
      {currentUser ? (
        <div className="absolute inset-y-0 left-0 items-center mr-2 sm:static sm:inset-auto flex gap-1 ">
          <h5 className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-sm">
            {currentUser?.displayName}
          </h5>
          <Menu>
            <div className="mt-2">
              <MenuButton className="relative flex rounded-full  text-sm focus:outline-none">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <Avatar src={currentUser?.photoURL || Avatar} />
              </MenuButton>
              <MenuItems
                transition
                className="absolute right-0 top-20 z-50 mt-2 origin-top-right rounded-md bg-color7-light py-1 shadow-lg ring-1 ring-color6-lightgrey transition focus:outline-none"
              >
                <MenuItem>
                  <span
                    className="block px-4 py-2 text-sm text-color5-dark cursor-alias"
                    onClick={handleLogout}
                  >
                    Logout
                  </span>
                </MenuItem>
              </MenuItems>
            </div>
          </Menu>
        </div>
      ) : (
        <div className="flex gap-2 overflow-x-auto md:w-auto custom-scrollbar my-4">
          <Link
            to="/register"
            className="mt-8 px-4 py-2 text-sm bg-color9-rose text-white rounded-md hover:bg-color8-grey"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="mt-8 px-4 py-2 text-sm bg-color2-lightblue text-white rounded-md hover:bg-color8-grey"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default DesktopMenu;
