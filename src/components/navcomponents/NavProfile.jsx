import React from "react";
import profile from "../../assets/profile.jpeg";
import { useNavigate } from "react-router-dom";

const NavProfile = () => {
  const navigate = useNavigate();

  const logOut = async () => {
    alert("logged out");
    window.localStorage.removeItem("Auth");
    window.localStorage.removeItem("User");
    window.localStorage.removeItem("UserId");
    navigate("/");
    window.location.reload();
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
            Logged in as {window.localStorage.getItem("User")}
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
