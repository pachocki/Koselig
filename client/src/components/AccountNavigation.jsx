import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BiUser, BiListOl, BiHomeAlt } from "react-icons/bi";

const AccountNavigation = () => {
  const { pathname } = useLocation();
  
  // Extract the subpage from the current pathname
  let subpage = pathname.split("/")?.[2];
  
  // If subpage is undefined, default it to "profile"
  if (subpage === undefined) {
    subpage = "profile";
  }
  
  // Function to determine the CSS classes for the navigation links
  function linkClasses(type = null) {
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
          className={`${linkClasses("profile")} flex items-center gap-2 sm:gap-1 sm:text-sm xs:w-full justify-center hover:bg-black transition-all`}
        >
          <BiUser /> Min profil
        </NavLink>
        <NavLink
          to={"/account/bookings"}
          className={`${linkClasses("bookings")} flex items-center gap-2 sm:gap-1 sm:text-sm xs:w-full justify-center hover:bg-black transition-all`}
        >
          <BiListOl /> Mine bestillinger
        </NavLink>
        <NavLink
          to={"/account/places"}
          className={`${linkClasses("places")} flex items-center gap-2 sm:gap-1 sm:text-sm xs:w-full justify-center hover:bg-black transition-all`}
        >
          <BiHomeAlt /> Min innkvartering
        </NavLink>
      </nav>
    </div>
  );
};

export default AccountNavigation;
