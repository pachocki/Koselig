import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white ">
      <div className="flex items-center justify-center pl-5 tracking-[5rem]    ">
        <span className="text-[20rem] font-serif header">Koselig</span>
      </div>
      <div className="flex justify-center items-center text-3xl pb-2 gap-20 md:text-xl sm:text-sm sm:gap-5 ">
        <span className="hover:opacity-80 cursor-pointer flex gap-1 items-center">
          Instagram{" "}
        </span>
        <span className="hover:opacity-80 cursor-pointer flex gap-1 items-center">
          Facebook{" "}
        </span>
        <span className="hover:opacity-80 cursor-pointer flex gap-1 items-center">
          Twitter{" "}
        </span>
      </div>
    </div>
  );
};

export default Footer;
