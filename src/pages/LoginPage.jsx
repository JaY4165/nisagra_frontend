import React from "react";
import LoginCard from "../components/LoginCard";
import burger1 from "../assets/burger1.jfif";
import Login from "../components/Login";

const LoginPage = () => {
  return (
    <div className="grid grid-cols-2 h-[50vh]">
      
      <Login />
      

      <div>
        <img className="h-[100%]" src={burger1} alt="burger" />
      </div>
    </div>
  );
};

export default LoginPage;
