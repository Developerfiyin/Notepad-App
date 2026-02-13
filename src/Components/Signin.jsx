import React from "react";
import { IoKeyOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IoLogoApple } from "react-icons/io5";

import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useState } from "react";

const Signin = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!user.trim()) {
      newErrors.user = "Please fill in your username";
    }

    if (!password.trim()) {
      newErrors.password = "Please fill in your password";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigate("/dashboard");
    }
  };

  return (
    <div className='w-full  bg-black text-white py-10 px-6 grid  gap-8 items-center"'>
      <h1 className="text-4xl text-green-500 font-medium m-8 mt-5 text-center ">
        Log in to start taking notes!
      </h1>

      <form className="grid gap-8 w-80 mx-auto  mt-10" onSubmit={handleSubmit}>
        {/* Name */}
        <label className="relative block ">
          <FaUser
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/65 pointer-events-none"
          />
          <input
            placeholder="Your Name"
            className="w-full h-11 pl-10 focus:outline-green-400 border-green-400 pr-3 border rounded-md text-sm leading-none"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          {errors.user && <p>{errors.user}</p>}
        </label>

        {/* Password */}
        <label className="relative block">
          <IoKeyOutline
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/65 pointer-events-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full h-11 pl-10 pr-3 focus:outline-green-400 border border-green-500 rounded-md text-sm leading-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p>{errors.password}</p>}
        </label>

        <button
          type="submit"
          className="mt-4 text-white/65 font-semibold  w-full hover:bg-green-500 hover:text-black ease-in-out duration-300 border py-2 px-3 rounded-xl"
        >
          Get Started
        </button>
      </form>
      <h1 className="font-semibold text-2xl text-center text-white/50">OR</h1>
      <h2 className="text-green-500 mx-auto">
        Sign up with your
        <div className="flex justify-between gap-5 mt-5">
          <a
            href=" https://appleid.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border rounded-md ease-in duration-200 hover:bg-green-100"
          >
            <IoLogoApple size={30} />
          </a>

          <a
            href="https://accounts.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border ease-in duration-200 rounded-sm hover:bg-purple-100"
          >
            <FaGoogle size={30} />
          </a>
        </div>
      </h2>
    </div>
  );
};

export default Signin;
