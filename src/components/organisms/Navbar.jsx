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
  const { logout, currentUser } = useContext(AuthPage);

  return (
    <Disclosure
      as="nav"
      className="bg-color7-light text-color2-lightblue dark:bg-color5-dark dark:text-color1-pink h-20"
    >
      <div className="px-2 sm:px-6 lg:px-8 overflow-x-auto sm:w-full md:w-auto custom-scrollbar">
        <div className="flex h-16 items-center justify-between ">
          <div className="flex items-center justify-center pr-2 gap-4 sm:ml-6 sm:pr-0">
          <Link className="pr-3 mt-4 text-3xl sm:text-3xl md:text-5xl lg:text-6xl" to="/">
              Cine
              <span className="text-color1-pink dark:text-color2-lightblue">
                F
              </span>
              lix
            </Link>
          </div>
          {currentUser ? (
            
            <div className="absolute inset-y-0 left-0 items-center pr-2 sm:static sm:inset-auto flex gap-2 ">
               <SwitchButton/>
              <h5 className=" text-color8-grey dark:text-color9-rose  mt-8 m-1 text-sm sm:text-sm md:text-xl">
                {currentUser?.displayName}
              </h5>
              <Menu as="div" className="relative ml-3">
                <div className="mt-7">
                  <MenuButton className="relative flex rounded-full bg-color7-light text-sm focus:outline-none">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <Avatar src={currentUser?.photoURL || Avatar} />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-color7-light py-1 shadow-lg ring-1 ring-color6-lightgrey transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
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
              </Menu>
            </div>
          ) : (
            <div className="flex gap-2 overflow-x-auto sm:w-full md:w-auto custom-scrollbar">
              <SwitchButton/>
              <Link
                to="/Register"
                className="mt-8 px-4 py-2 text-sm bg-color9-rose text-white rounded-md hover:bg-color8-grey"
              >
                Register
              </Link>
              <Link
                to="/Login"
                className="mt-8 px-4 py-2 text-sm bg-color2-lightblue text-white rounded-md hover:bg-color8-grey"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </Disclosure>
  );
}
