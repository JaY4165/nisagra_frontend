import React from "react";
import profile from "../../assets/profile.jpeg";

const NavProfile = () => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={profile} />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-transparent dark:bg-neutral rounded-box w-52"
      >
        <li>
          <a className="justify-between font-medium">Log out</a>
        </li>
      </ul>
    </div>
  );
};

export default NavProfile;
