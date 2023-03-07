import { useState, useEffect, useContext } from "react";
import NavCart from "./navcomponents/NavCart";
import NavProfile from "./navcomponents/NavProfile";
import { Outlet, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const { auth, user, setAuth } = useContext(AuthContext);

  const [navScroll, setnavScroll] = useState(false);
  const changeNavBg = () => {
    if (window.scrollY >= 5) {
      setnavScroll(true);
    } else {
      setnavScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
  }, []);

  return (
    <>
      <div
        className={
          navScroll
            ? "navbar bg-[#2a303c] fixed z-50"
            : "navbar bg-transparent fixed z-50"
        }
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle text-white">
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
                  strokeWidth="4"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white/80 rounded-lg w-52"
            >
              {auth && user ? (
                <li className="text-black font-semibold">
                  <Link to={`/`}>Home</Link>
                </li>
              ) : (
                <>
                  <li className="text-black font-semibold">
                    <Link to={`/register`}>SignUp</Link>
                  </li>
                  <li className="text-black font-semibold">
                    <Link to={`/login`}>SignIn</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link
            to={`/`}
            className="normal-case font-thin text-2xl text-white"
            id="NavHead"
          >
            NISAGRA
          </Link>
        </div>
        <div className="navbar-end">
          {auth && user ? (
            <>
              <NavCart />
              <NavProfile userName={{ loggedInAs: user }} />
            </>
          ) : (
            <button className="btn btn-md btn-ghost text-white text-xl font-thin normal-case duration-300">
              <Link to={`/login`}>SignIn</Link>
            </button>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
