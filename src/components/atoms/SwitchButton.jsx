import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const SwitchButton = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") || false
  );

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
        onClick={() => setDarkMode(!darkMode)}
        className="flex items-center mr-2 text-xs font-medium text-gray-700 bg-white rounded-lg border border-gray-200 toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-color3-blue mt-7"
      >
        {darkMode ? (
          <MoonIcon className="fill-current sm:h-4 sm:w-4 md:h-8 md:w-8" />

        ) : (
          <SunIcon className="fill-current sm:h-6 sm:w-6 md:h-8 md:w-8" />
        )}
      </button>
    </div>
  );
};

export default SwitchButton;
