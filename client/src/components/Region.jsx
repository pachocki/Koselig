import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Region = ({ region, title, number, border, image }) => {
  return (
    <Link to="/destinations"><div
      className={`flex justify-between items-center relative w-2/3 mx-auto py-5 my-2 lg:w-[90%] overflow:hidden sm:w-[95%] ${border}`}
    >
     
        <div className="img-cont flex  hover:opacity-100 z-10 overflow-hidden">
          <img src={image} />
        </div>
        <div className="cursor-pointer w-full">
          <h3 className="text-5xl text-white xl:text-4xl lg:text-3xl sm:text-2xl">
            {title}
          </h3>
          <p className="text-gray-400 pt-2 sm:text-sm">{region}</p>
        </div>
        <div>
          <span className="text-5xl text-white flex gap-1 xl:text-4xl lg:text-3xl sm:text-2xl">
            {number}
            <FiArrowUpRight />
          </span>
        </div>
      
    </div></Link>
  );
};

export default Region;
