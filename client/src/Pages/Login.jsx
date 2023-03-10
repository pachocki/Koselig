import React, { useState, useRef, useEffect, useContext } from "react";
import Image from "../assets/login.webp";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const {setUser } = useContext(UserContext);
  const errRef = useRef();
  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const { data } = await axios.post(
        "/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
  
      if (data && data._id) {
        const token = Cookies.get("token");
        localStorage.setItem("token", token); // save token to localStorage
        setIsAuthenticated(true);
        const { data: user } = await axios.get("/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(user);
        navigate("/");
  
      } else {
        setErrMsg("Login Failed");
        errRef.current.focus();
      }
    } catch (error) {
      if (!error?.response) {
        console.log(error);
        setErrMsg("No server response");
      } else if (error.response?.status === 400) {
        setErrMsg("Missing username or password");
      } else if (error.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center pt-20 lg:px-2">
      <div className="flex justify-center shadow-lg overflow-hidden xs:w-full">
        <div className="w-1/2 lg:w-1/3 xs:hidden">
          <img src={Image} alt="mountains" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-center w-1/2 border-2 lg:w-2/3 xs:w-full">
          <h2 className="text-center pb-5 text-4xl  lg:text-2xl lg:pt-5 sm:text-[1.1rem] sm:font-bold">
            Hello , Nice to see you !
          </h2>
          <div className="flex justify-center items-center xs:w-full">
            <form
              className="flex flex-col gap-2 w-2/3 overflow-hidden lg:w-[95%] "
              onSubmit={handleLogin}
            >
              <label className="text-xl text-gray-500  lg:text-lg sm:text-sm">E-mail</label>
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
              <button className="text-white font-medium bg-black transition-all hover:opacity-50 p-2 mt-5">
                Login
              </button>
              <span className="mt-3 text-center font-medium lg:pb-5 sm:text-sm">
                Dont't have a account ?{" "}
                <Link to="/register" className="underline">
                  Register
                </Link>
              </span>
              <p
                ref={errRef}
                className={errMsg ? "block text-red-600 text-center" : "hidden"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
