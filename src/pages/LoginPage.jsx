import React from "react";
<<<<<<< HEAD
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
       
=======
import LoginCard from "../components/LoginCard";
import burger1 from "../assets/burger1.jfif";
import Login from "../components/Login";
import New from "../components/New";
import Loginform from "../components/Logincomponents.jsx/Loginform";
import Loginimage from "../components/Logincomponents.jsx/Loginimage";

const LoginPage = () => {
  return (
   <div>
      <section className="h-[100%] w-[100%]">
      <div className="grid md:grid-cols-2 md:grid-rows-1 sm:grid-cols-1 sm:grid-rows-2">
      
      
      <Loginform/>
      <Loginimage/>
      </div>
      </section>
      

      
    </div>
>>>>>>> 90edf9fcaf4f6f05cc8b00d60d59dac5632ec267
  );
};

export default LoginPage;
