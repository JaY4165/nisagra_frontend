import { React } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Enter valid email")
      .required("Email field is required"),
    password: yup.string().required("Password field is required"),
  });

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
      const loginResponse = await axios.post(
        import.meta.env.VITE_BACKEND_API+"/login/signin",
        data
      );
      console.log(loginResponse.data);
      if ((await loginResponse.data.status) === 200) {
        const emailAuth = await data.email.split("@");
        alert(emailAuth[0]);
        window.localStorage.setItem("Auth", true);
        window.localStorage.setItem("User", emailAuth[0]);
        window.localStorage.setItem("UserId", loginResponse.data.userId);
        navigate("/");
      }
    } catch (err) {
      alert("please enter valid credentials");
    }
  };

  return (
    <div className="h-screen w-[100%] sm:overflow-y-hidden overflow-x-auto bg-neutral-800 pb-5 xl:pt-10">
      <h2 className="text-4xl pt-20 text-white font-sans selection:text-success text-center">
        SignIn
      </h2>
      <form
        method="post"
        className="h-auto"
        id="loginform"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-1 grid-rows-1 gap-10 py-10 px-20 relative">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="w-full py-2 px-4 rounded-lg outline-none bg-stone-700 placeholder:text-stone-400"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 absolute mt-[80px] ml-[84px] font-normal text-sm">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 grid-rows-1 px-20  gap-10 sm:grid-cols-1 sm:grid-rows-1 md:grid-cols-1 relative">
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full py-2 px-4 rounded-lg outline-none bg-stone-700 placeholder:text-stone-400"
            autoComplete="off"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 absolute mt-10 ml-[84px] font-normal text-sm">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 grid-rows-1 gap-10 pt-10 px-20">
          <button
            type="submit"
            className="btn text-stone-800 font-semibold  bg-emerald-400  border-green-500  hover:bg-white hover:text-emerald-700 duration-300"
          >
            SignIn
          </button>
        </div>
        <div>
          <p className="text-gray-200 text-xs sm:text-lg text-center pt-5">
            Don't have an account ?{" "}
            <Link
              to={`/register`}
              className="link link-accent no-underline text-emerald-400  "
            >
              SignUp
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
