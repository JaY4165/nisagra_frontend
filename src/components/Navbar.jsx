import React from "react";
import NavCart from "./navcomponents/NavCart";
import NavProfile from "./navcomponents/NavProfile";
import ToggleTheme from "./navcomponents/ToggleTheme";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar fixed bg-base-100 px-5 z-50">
        <div className="flex-1">
          <Link className="capitalize text-4xl font-extrabold" to={`/`}>
            <span className="text-purple-300">J</span>
            <span className="text-purple-400">I</span>
            <span className="text-purple-500">L</span>
          </Link>
        </div>
        <ToggleTheme />
        <div className="flex-none">
          <NavCart />
          <NavProfile />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
