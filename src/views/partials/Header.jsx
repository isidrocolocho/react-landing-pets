import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // Estado para manejar el modo oscuro
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <header className="text-gray-600 body-font bg-greens dark:bg-dark-greens font-raleway  top-0 left-0 right-0 w-full">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-10 p-4 items-center gap-4">
        <Link className="flex justify-center md:justify-start items-center lg:col-span-1 space-x-4" href="#">
          <img src="./images/catlogo.png" className="w-20" alt="Logo" />
          <span className="hidden sm:hidden md:block border-l-2 border-white h-6"></span>
        </Link>
        <nav className="text-white font-bold flex flex-wrap items-center lg:items-start justify-center lg:justify-self-start md:justify-self-start space-x-4 md:col-span-4 lg:col-span-8 text-sm">
          <Link className="hover:text-[#594eff]" to={"/"}>Home</Link>
          <Link className="hover:text-[#594eff]" to={"/#adopt"}>Adopt Now</Link>
          <Link className="hover:text-[#594eff]" to={"/#services"}>Our Services</Link>
          <Link className="hover:text-[#594eff]" to={"/#reviews"}>Reviews</Link>
          <Link className="hover:text-[#594eff]" to={"/contador"}> Contador</Link>
        </nav>
        <div className="flex justify-center sm:justify-center md:justify-end lg:justify-end">
          <button
            id="btn-darkmode"
            onClick={toggleDarkMode}
            className="py-2 px-4 hover:bg-[#594eff] rounded-lg text-white font-bold text-2xl">
            <i className={`fa-regular ${isDarkMode ? "fa-sun" : "fa-moon"}`}></i>
          </button>
          <button className="inline-flex items-center bg-indigos dark:bg-dark-indigos text-white font-bold border-0 py-2 px-4 focus:outline-none hover:bg-[#594eff] text-sm">
            Register now
          </button>
        </div>
      </div>
    </header>

  );
};

export default Header;
