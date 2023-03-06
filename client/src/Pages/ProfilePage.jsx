import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { NavLink, useParams, Navigate } from "react-router-dom";
import axios from "axios";
import Places from "./Places";
import AccountNavigation from "../components/AccountNavigation";

const ProfilePage = () => {
  const { user, ready } = useContext(UserContext);
  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }

  const logout = async () => {
    await axios.post("/logout");
    window.location.href = "/";
  };

  if (!user && ready) {
    return <Navigate to="/login" />;
  }
  if (!ready) {
    return "Loading...";
  }

  return (
    <div className="h-screen flex pt-32 justify-center">
      <div>
        <AccountNavigation />
        {subpage === "profile" && (
          <div className=" flex justify-center mt-20 flex-col max-w-lg mx-auto items-center">
            <h1 className="text-2xl text-center">
              Account Page for <span className="font-bold">{user?.name}</span>
              <br />
            </h1>
            <button
              className="bg-black text-white mt-5 w-1/3 py-2  font-bold hover:opacity-50 transition-all"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
      {subpage === "accomodation" && (
        <div>
          <Places />
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
