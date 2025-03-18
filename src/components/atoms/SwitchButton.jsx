import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import clickSound from "../../assets/clickSound.mp3";

const SwitchButton = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") || false
  );
  const audio = new Audio(clickSound);
  const playSound = () => {
    audio.play();
  };
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    playSound(); 
  };
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("darkMode", true);
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.removeItem("darkMode");
  }

  return (
    <div className="flex col-span-1 justify-end">
      <button
        type="button"
        title="Toggle dark/light mode"
        onClick={() => toggleDarkMode()}
        className="flex items-center text-xs m-1 font-medium bg-white text-gray-400 hover:text-yellow-400 hover:border-grey-700  dark:bg-color3-blue rounded-lg border border-gray-200 toggle-dark-state-example dark:hover:bg-gray-100 dark:hover:text-color2-lightblue dark:text-gray-100 dark:border-gray-600 mt-7"
      >
        {darkMode ? (
          <MoonIcon className="fill-current  md:h-7 md:w-7" />
        ) : (
          <SunIcon className="fill-current  md:h-7 md:w-7" />
        )}
      </button>
    </div>
  );
};

export default SwitchButton;
