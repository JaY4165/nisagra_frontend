import React from "react";
import LoginCard from "../components/LoginCard";
import coffee from "../assets/coffee.jpg";

const LoginPage = () => {
  return (
    <div className="grid grid-cols-2 h-[50vh]">
      <LoginCard />
      <div>
        <img className="h-[100%]" src={coffee} alt="biryani" />
      </div>
    </div>
  );
};

export default LoginPage;
