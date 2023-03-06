import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BiUser, BiListOl, BiHomeAlt } from "react-icons/bi";
const AccountNavigation = () => {
  const { pathname } = useLocation();
  let subpage = pathname.split("/")?.[2];
  if (subpage === undefined) {
    subpage = "profile";
  }
  function linkCLasses(type = null) {
    let classes = "";
    if (type === subpage) {
      classes += "bg-black text-white p-2 ";
    } else {
      classes += "bg-gray-400 text-white p-2 ";
    }
    return classes;
  }

  return (
    <div>
      <nav className="flex gap-6 mt-10 font-medium items-center justify-center lg:gap-2 xs:flex-col xs:gap-3 ">
        <NavLink
          to={"/account"}
          className={`${linkCLasses("profile")} flex items-center gap-2 sm:gap-1 sm:text-sm xs:w-full justify-center hover:bg-black transition-all`}
        >
          <BiUser /> Min profil
        </NavLink>
        <NavLink
          to={"/account/bookings"}
          className={`${linkCLasses("bookings")} flex items-center gap-2 sm:gap-1 sm:text-sm xs:w-full justify-center hover:bg-black transition-all`}
        >
          <BiListOl /> Mine bestillinger
        </NavLink>
        <NavLink
          to={"/account/places"}
          className={`${linkCLasses("places")} flex items-center gap-2 sm:gap-1 sm:text-sm xs:w-full justify-center hover:bg-black transition-all`}
        >
          <BiHomeAlt /> Min innkvartering
        </NavLink>
      </nav>
    </div>
  );
};

export default AccountNavigation;
