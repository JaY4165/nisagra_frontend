import React from "react";
import RegistrationForm from "../components/regcomponents/RegistrationForm";
import RegistrationImg from "../components/regcomponents/RegistrationImg";

const RegistrationPage = () => {
  return (
    <section className="h-[100%] w-[100%]">
      <div className="grid md:grid-cols-2 md:grid-rows-1 sm:grid-cols-1 sm:grid-rows-2">
        <RegistrationImg />
        <RegistrationForm />
      </div>
    </section>
  );
};

export default RegistrationPage;
