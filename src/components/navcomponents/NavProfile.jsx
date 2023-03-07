import React from "react";
import profile from "../../assets/profile.jpeg";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const NavProfile = ({ userName }) => {
  const { setAuth, setUser } = useContext(AuthContext);

  const logOut = async () => {
    alert("logged out ");
    setAuth(false);
    setUser("");
  };

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={profile} />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white/80 rounded-lg w-52"
      >
        <li className="text-black font-semibold">
          <p className="justify-between font-medium">
            Logged in as {userName.loggedInAs}
          </p>
        </li>
        <li className="text-black font-semibold">
          <p className="justify-between font-medium" onClick={logOut}>
            Log out
          </p>
        </li>
      </ul>
    </div>
  );
};

export default NavProfile;
