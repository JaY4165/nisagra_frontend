import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const RegistrationForm = () => {
  const schema = yup.object().shape({
    firstname: yup
      .string()
      .required("First name field is required")
      .matches(/[A-Za-z]/i, "Enter valid name")
      .min(2, "Atleast 2 characters are required")
      .max(150, "Only 150 characters are allowed"),
    lastname: yup
      .string()
      .required("Last name field is required")
      .matches(/[A-Za-z]/i, "Enter valid name")
      .min(2, "Atleast 2 characters are required")
      .max(150, "Only 150 characters are allowed"),
    email: yup
      .string()
      .email("Enter valid email")
      .required("Email field is required"),
    password: yup
      .string()
      .required("Password field is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i,
        "Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
      ),
    confirmPassword: yup
      .string()
      .required("Confirm password field is required")
      .oneOf([yup.ref("password"), null], "Passwords not matching"),
    mobile: yup
      .string()
      .required("Mobile number field is required")
      .matches(/[0-9]{10}/i, "Enter valid mobile number")
      .max(10, "Enter valid mobile number"),
    address: yup
      .string()
      .required("Address field is required")
      .max(250, "Only 250 characters are allowed"),
  });

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data, event) => {
    event.preventDefault();
    try {
      console.log(data);
      await axios.post("http://localhost:8090/register/signup", data);
      navigate("/login");
      alert("Please Login using your credentials");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="h-screen w-[100%] sm:overflow-y-scroll overflow-x-auto bg-neutral-800 pb-5 xl:pt-2">
      <h2 className="text-4xl text-center sm:text-left px-20 pt-5 pb-10  text-white font-sans selection:text-success">
        Register
      </h2>
      <form method="post" className="h-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 grid-rows-2 px-20 gap-10 sm:grid-cols-2 sm:grid-rows-1 md:grid-cols-1 relative">
          <input
            type="text"
            placeholder="Enter First Name"
            className="w-full py-2 px-4 rounded-lg outline-none bg-stone-700 placeholder:text-stone-400"
            {...register("firstname")}
          />
          {errors.firstName && (
            <p className="text-red-500 absolute mt-10 ml-20 font-normal text-sm">
              {errors.firstname.message}
            </p>
          )}
          <input
            type="text"
            placeholder="Enter Last Name"
            className="w-full py-2 px-4 rounded-lg outline-none bg-stone-700 placeholder:text-stone-400"
            {...register("lastname")}
          />
          {errors.lastname && (
            <p className="text-red-500 absolute mt-[7.5rem] ml-20 font-normal text-sm">
              {errors.lastname.message}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 grid-rows-1 gap-10 py-10 px-20 relative">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="w-full py-2 px-4 rounded-lg outline-none bg-stone-700 placeholder:text-stone-400"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 absolute mt-20 ml-20 font-normal text-sm">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 grid-rows-2 px-20  gap-10 sm:grid-cols-2 sm:grid-rows-1 md:grid-cols-2 relative">
          <input
            type="password"
            placeholder="Create Password"
            className="w-full py-2 px-4 rounded-lg outline-none bg-stone-700 placeholder:text-stone-400"
            autoComplete="off"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 absolute mt-10 ml-20 font-normal text-sm">
              {errors.password.message}
            </p>
          )}
          <input
            type="text"
            placeholder="Confirm Password"
            autoComplete="off"
            className="w-full py-2 px-4 rounded-lg outline-none bg-stone-700 placeholder:text-stone-400"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 absolute mt-[7.5rem] ml-20 font-normal text-sm sm:mt-10 sm:ml-60 md:ml-72 lg:ml-[17.5rem] xl:ml-[20.8rem] 2xl:ml-[41.5rem]">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 grid-rows-1 gap-10 pt-10 px-20 relative">
          <input
            type="tel"
            placeholder="Enter Mobile Number"
            className="w-full py-2 px-4 rounded-lg outline-none bg-stone-700 placeholder:text-stone-400"
            {...register("mobile")}
          />
          {errors.mobile && (
            <p className="text-red-500 absolute mt-20 ml-20 font-normal text-sm">
              {errors.mobile.message}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 grid-rows-1 gap-10 pt-10 px-20 relative">
          <input
            type="text"
            placeholder="Enter Your Address"
            className="w-full py-2 px-4 rounded-lg outline-none bg-stone-700 placeholder:text-stone-400"
            {...register("address")}
          />
          {errors.address && (
            <p className="text-red-500 absolute mt-20 ml-20 font-normal text-sm">
              {errors.address.message}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 grid-rows-1 gap-10 pt-10 px-20">
          <button
            type="submit"
            className="btn text-stone-800 font-semibold  bg-emerald-400  border-green-500  hover:bg-white hover:text-emerald-700 duration-300"
          >
            SignUp
          </button>
        </div>
        <div>
          <p className="text-gray-200 text-xs sm:text-lg text-center pt-5">
            Already have an account ?{" "}
            <Link
              to={`/login`}
              className="link link-accent no-underline text-emerald-400"
            >
              SignIn
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
