import React from "react";
import NavCart from "./navcomponents/NavCart";
import NavProfile from "./navcomponents/NavProfile";
import ToggleTheme from "./navcomponents/ToggleTheme";

const Navbar = () => {
  return (
    <div className="navbar fixed bg-base-100 px-5">
      <div className="flex-1">
        <a className="capitalize text-2xl font-extrabold" href="/">
          <span className="text-purple-300">J</span>
          <span className="text-purple-400">I</span>
          <span className="text-purple-500">L</span>
          <span className="text-purple-600">L</span>
        </a>
      </div>
      <ToggleTheme />
      <div className="flex-none">
        <NavCart />
        <NavProfile />
      </div>
    </div>
  );
};

export default Navbar;
