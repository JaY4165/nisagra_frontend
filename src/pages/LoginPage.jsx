import React from "react";
import LoginForm from "../components/logincomponents/LoginForm";
import LoginImg from "../components/logincomponents/LoginImg";

const LoginPage = () => {
  return (
    <section className="h-[100%] w-[100%]">
    <div className="grid md:grid-cols-2 md:grid-rows-1 sm:grid-cols-1 sm:grid-rows-2">
      
      
      <LoginForm/>
      <LoginImg/>
      </div>
      </section>
  );
};

export default LoginPage;
