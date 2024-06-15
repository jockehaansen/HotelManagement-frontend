import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col mt-16 w-96">
        <label htmlFor="username" className="text-lg text-gray-700 font-bold">
          Username / Email
        </label>
        <input
          className="min-h-10 px-2 mt-2 rounded-md w-96 self-center"
          name="username"
          type="text"
        ></input>
        <label
          htmlFor="password"
          className="text-lg text-gray-700 font-bold mt-6"
        >
          Password
        </label>
        <input
          className="min-h-10 px-2 mt-2 rounded-md"
          name="password"
          type="password"
        ></input>
        <button
          className=" bg-cyan-300 text-white font-bold  w-24 mt-4 min-h-8 rounded-md self-center"
          type="submit"
        >
          Login
        </button>
        <a href="/" className="self-center mt-4 text-gray-700 font-bold ">
          Forgot password
        </a>
      </div>
    </div>
  );
};

export default Login;
