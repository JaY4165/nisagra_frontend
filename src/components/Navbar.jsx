import React from "react";
import NavCart from "./navcomponents/NavCart";
import NavProfile from "./navcomponents/NavProfile";
import { Outlet, Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow dark:bg-neutral rounded-lg w-52"
            >
              <li>
                <Link to={`/register`}>SignUp</Link>
              </li>
              <li>
                <Link to={`/login`}>SignIn</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to={`/`} className="normal-case font-thin text-xl" id="NavHead">
            NISAGRA
          </Link>
        </div>
        <div className="navbar-end">
          <NavCart />
          <NavProfile />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
