import React from "react";
import Image1 from "../../../assets/hero5.webp";
import Image2 from "../../../assets/place1.webp";
import Image3 from "../../../assets/hero7.webp";
import Image4 from "../../../assets/bania.webp";
import Image5 from "../../../assets/hero4.webp";
import Image6 from "../../../assets/hero1.webp";

import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Destinations = () => {
  return (
    <div className="py-20 lg:mt-10 sm:mt-0 sm:pt-5">
      <div className="grid grid-cols-2  pt-5 relative lg:grid-cols-[2fr_1fr] sm:px-2">
        <div className="w-full flex  px-5 gap-10 lg:gap-2 sm:px-0 ">
          <div className="w-1/2 ">
            <div className="overflow-hidden w-[300px]">
              <Link to="/destinations">
                {" "}
                <img
                  src={Image1}
                  alt="image"
                  className="w-full h-[400px] xl:w-full  xl:h-auto xl:object-cover transition duration-500 hover:scale-110"
                />
              </Link>
            </div>
            <p className="font-bold flex gap-1 items-center text-sm sm:text-[0.8rem]">
              Forder, Vestland fylke
              <FiArrowUpRight className="xs:hidden" />
            </p>
          </div>
          <div className="w-1/2">
            <div className="overflow-hidden w-[300px]">
              <Link to="/destinations">
                {" "}
                <img
                  src={Image2}
                  className=" h-[400px]  xl:w-full  xl:h-auto xl:object-cover transition duration-500 hover:scale-110 "
                  alt="image "
                />
              </Link>
            </div>
            <p className="font-bold flex gap-1 items-center text-sm sm:text-[0.8rem]">
              Gaular , Sogn og Fjordane <FiArrowUpRight className="xs:hidden" />
            </p>
          </div>
        </div>
        <div className="flex w-1/2  justify-self-center  xl:justify-self-end lg:w-4/5  ">
          <div>
            <div className="overflow-hidden">
              <Link to="/destinations">
                {" "}
                <img
                  src={Image3}
                  alt="image"
                  className="w-full h-auto transition duration-500 hover:scale-110"
                />
              </Link>
            </div>
            <p className="font-bold flex gap-1 items-center text-sm sm:text-[0.8rem]">
              Engeløya, Nordland
              <FiArrowUpRight className="xs:hidden" />
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2   pt-20 lg:grid-cols-[2fr_1fr] lg:gap-2 ">
        <div className="w-full flex gap-10 lg:gap-2">
          <div className="w-1/2 lg:w-full">
            <div className="overflow-hidden">
              <Link to="/destinations">
                {" "}
                <img
                  src={Image6}
                  alt="image"
                  className="w-full transition duration-500 hover:scale-110"
                />
              </Link>
            </div>
            <p className="font-bold flex gap-1 items-center text-sm sm:text-[0.8rem]">
              Rælingen,Akerhus <FiArrowUpRight className="xs:hidden" />
            </p>
          </div>
          <div>
            <div className="overflow-hidden">
              <Link to="/destinations">
                {" "}
                <img
                  src={Image4}
                  alt="image"
                  className="w-[300px] h-[400px] object-fit lg:w-full lg:h-4/5 transition duration-500 hover:scale-110 "
                />
              </Link>
            </div>
            <p className="font-bold flex gap-1 items-center text-sm sm:text-[0.8rem]">
              Rollag,Viken
              <FiArrowUpRight className="xs:hidden" />
            </p>
          </div>
        </div>
        <div className="flex w-1/2  justify-self-end relative lg:w-full ">
          <div>
            <div className="overflow-hidden">
              <Link to="/destinations">
                {" "}
                <img
                  src={Image5}
                  className="w-2/3 lg:w-full lg:h-3/4 transition duration-500 hover:scale-110"
                  alt="image"
                />
              </Link>
            </div>
            <p className="font-bold flex gap-1 items-center text-sm sm:text-[0.8rem]">
              Gildeskål, Nordland
              <FiArrowUpRight className="xs:hidden" />
            </p>
          </div>
          <div className="absolute bottom-[-50px]  w-full left-0 lg:bottom-[-70px] ">
            <Link to="/destinations">
              {" "}
              <span className="font-bold flex gap-1 items-center text-3xl underline cursor-pointer lg:text-xl hover:opacity-50 sm:text-sm">
                Utforsk mer
                <FiArrowUpRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
