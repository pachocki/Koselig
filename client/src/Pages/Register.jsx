import React, { useState } from "react";
import Image from "../assets/login.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/register", {
        name,
        password,
        email,
      });
      navigate("/login")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center pt-20 px-2">
      <div className="flex justify-center shadow-lg overflow-hidden xs:w-full">
        <div className="w-1/2 xs:hidden">
          <img src={Image} alt="mountains" className="w-full h-full object-cover"/>
        </div>
        <div className="flex flex-col justify-center w-1/2 border-2 lg:w-2/3  xs:w-full">
          <h2 className="text-center pb-5 text-4xl object-fit pt-5 lg:text-2xl lg:pt-5 sm:text-[1.1rem] sm:font-bold">
            Hello , Nice to see you !
          </h2>
          <div className="flex justify-center items-center ">
            <form
              className="flex flex-col gap-2 w-2/3 overflow-hidden lg:w-[95%]"
              onSubmit={registerUser}
            >
              <label className="text-xl text-gray-500 lg:text-lg sm:text-sm">Username</label>
              <input
                type="text"
                placeholder="username"
                className="border-2 border-gray-200 p-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label className="text-xl text-gray-500 lg:text-lg sm:text-sm">E-mail</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="border-2 border-gray-200 p-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="text-xl text-gray-500 lg:text-lg sm:text-sm">Password</label>
              <input
                type="password"
                placeholder="password"
                className="border-2 border-gray-200 p-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="text-white font-medium bg-black transition-all hover:opacity-50 p-2 my-5">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
