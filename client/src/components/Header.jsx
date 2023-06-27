import React, { useContext, useState } from "react";
import { TbWorld } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Logo from "../assets/logo.png";

const Header = () => {
  const { user } = useContext(UserContext);
  const [showMenu, setShowMenu] = useState(false);

  if (showMenu) {
    // Render full screen menu overlay
    return (
      <div className="fixed right-0 top-0 bg-black/60  w-full  min-h-screen min-w-screen m-auto transition-all   z-50  sm:fixed sm:overflow-scroll h-screen">
        <div className="rounded-l-xl bg-white w-2/3 right-0 p-8 grid gap-4 sm:overflow-y-hidden h-screen absolute transition-all sm:w-full sm:rounded-none">
          <div>
            <h2 className="text-3xl mr-48 sm:text-2xl sm:w-1/2">Menu </h2>
            <button
              onClick={() => setShowMenu(false)}
              className="fixed right-12 top-8 flex justify-center gap-1 w-9 h-9 shadow-lg rounded-full items-center  shadow-black/20 bg-white text-black sm:right-2 sm:px-2 sm:py-1 sm:text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 sm:w-4 sm:h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-20 ">
            <div className="flex flex-col gap-5 text-4xl sm:text-2xl">
              <h2 className=" font-bold">Steder</h2>
              <Link
                to="/destinations"
                className="hover:opacity-50"
                onClick={() => setShowMenu(false)}
              >
                Vestland
              </Link>
              <Link
                to="/destinations"
                className="hover:opacity-50"
                onClick={() => setShowMenu(false)}
              >
                Trøndelag
              </Link>
              <Link
                to="/destinations"
                className="hover:opacity-50"
                onClick={() => setShowMenu(false)}
              >
                Sørlandet
              </Link>
              <Link
                to="/destinations"
                className="hover:opacity-50"
                onClick={() => setShowMenu(false)}
              >
                Nord-Noreg
              </Link>
              <Link
                to="/destinations"
                className="hover:opacity-50"
                onClick={() => setShowMenu(false)}
              >
                Østlandet
              </Link>
            </div>
            <div className="flex flex-col gap-5 text-4xl sm:text-2xl">
              <h2 className=" font-bold">Type</h2>
              <Link
                to="/destinations"
                className="hover:opacity-50"
                onClick={() => setShowMenu(false)}
              >
                Landsby
              </Link>
              <Link
                to="/destinations"
                className="hover:opacity-50"
                onClick={() => setShowMenu(false)}
              >
                By
              </Link>
              <Link
                to="/destinations"
                className="hover:opacity-50"
                onClick={() => setShowMenu(false)}
              >
                Strand
              </Link>
              <Link
                to="/destinations"
                className="hover:opacity-50"
                onClick={() => setShowMenu(false)}
              >
                Fjell
              </Link>
              <Link
                to="/destinations"
                className="hover:opacity-50"
                onClick={() => setShowMenu(false)}
              >
                Safari
              </Link>
              <Link
                to="/destinations"
                className="hover:opacity-50"
                onClick={() => setShowMenu(false)}
              >
                Natur
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

   // Render regular header
  return (
    <div>
      <header className="flex justify-between items-center h-24 px-2 bg-gray-50  text-2xl border-y-2 border-black font-semibold fixed inset-0 w-full mx-auto realtive z-40 lg:h-20">
        <div className="gap-4 flex h-full lg:text-xl sm:gap-1 sm:text-lg">
          <Link
            to="/destinations"
            className=" border-r-2  border-black px-5 flex items-center hover:opacity-50 transition-all sm:px-2"
          >
            <span className="hover:opacity-50 transition-all">Steder</span>
          </Link>
          <Link
            to="/destinations"
            className=" border-r-2  border-black px-5 flex items-center hover:opacity-50 transition-all sm:px-2 sm:hidden"
          >
            <span className="hover:opacity-50 transition-all ">
              Bli inspirert
            </span>
          </Link>
        </div>

        <Link to="/">
          <div>
            <img src={Logo} alt="Logo" className="w-12 lg:w-8" />
          </div>
        </Link>

        <div className="flex items-center gap-5 border-l-2 border-black px-2 h-full sm:gap-0 ">
          <div>
            <TbWorld className="text-2xl sm:hidden" />
          </div>
          <div className=" flex gap-4 py-2 px-4 rounded-full items-center sm:gap-1">
            <GiHamburgerMenu
              className="text-2xl cursor-pointer hover:opacity-50"
              onClick={() => setShowMenu(true)}
            />
            <Link
              to={user ? "/account" : "/login"}
              className="flex gap-2 items-center hover:opacity-50"
            >
              <CgProfile className="text-2xl " />
              {!!user && (
                <span className="sm:text-sm"> {user.name.split(" ")[0]}</span>
              )}
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
