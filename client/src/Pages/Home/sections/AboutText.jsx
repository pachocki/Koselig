import React from "react";

const AboutText = () => {
  return (
    <div className="py-20  bg-gray-50  px-5 h-screen flex justify-center xl:h-full sm:px-2 sm:hidden">
      <div className="w-[98%] flex flex-col mx-auto items-center justify-center text-[4rem] font-serif font-semibold 2xl:w-full 2xl:text-[3.3rem] xl:text-4xl xl:justify-start lg:text-3xl  sm:text-[1rem]  ">
        <span className="font-bold font-serif  text-zinc-700 ">
          Vi samler de mest fascinerende
        </span>
        <span className=" text-zinc-700 ">
          stedene for deg som elsker å oppleve verden,
        </span>{" "}
        <span className=" text-zinc-700">
          verdsetter det , og ønsker å tilbringe
        </span>{" "}
        <span className=" text-zinc-700">Koselige stunder med de nærmeste</span>
        <span className="font-bold font-serif  text-zinc-700">
          personene.
        </span>
      </div>
    </div>
  );
};

export default AboutText;
