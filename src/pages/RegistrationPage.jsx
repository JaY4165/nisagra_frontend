import React from "react";
import pancake from "../assets/pancake.jpg";

const RegistrationPage = () => {
  return (
    <div className="max-h-[90vh] max-w-[100%]">
      <section className="grid grid-cols-2">
        <div className="">
          <img
            src={pancake}
            alt="pancake"
            className="object-cover w-[100%] max-h-[100%]"
          />
        </div>
        <div className=""></div>
      </section>
    </div>
  );
};

export default RegistrationPage;
