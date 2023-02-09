import React from "react";
import NavCart from "./navcomponents/NavCart";
import NavProfile from "./navcomponents/NavProfile";
import ToggleTheme from "./navcomponents/ToggleTheme";

const Navbar = () => {
  return (
    <div className="navbar fixed bg-base-100 px-5">
      <div className="flex-1">
        <a className="normal-case text-xl font-bold" href="/">
          daisyUI
        </a>
      </div>
      <ToggleTheme />
      <div className="flex-none">
        <NavCart />
        <NavProfile/>
      </div>
    </div>
  );
};

export default Navbar;
