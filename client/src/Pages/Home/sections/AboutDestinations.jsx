import React from "react";
import Image1 from "../../../assets/couple-mountains.webp";
import Image2 from "../../../assets/bania.webp";
import Image3 from "../../../assets/friend-mountains.webp";
import Image4 from "../../../assets/couple-in-forest.webp";
import Image5 from "../../../assets/hero7.webp";
import Image6 from "../../../assets/hero6.webp";
import Image7 from "../../../assets/hero1.webp";
import Image8 from "../../../assets/hero-check.webp"
import Image9 from "../../../assets/couple.webp"
import Image10 from "../../../assets/hero2.webp"
const AboutDestinations = () => {
  return (
    <div className="flex justify-center items-center h-screen relative  ">
      <img
        src={Image1}
        className="w-[200px] absolute top-1/3 right-5 2xl:right-1 lg:w-1/6 sm:hidden"
        alt="mountains-couple"
      />
      <img
        src={Image2}
        className="w-[200px] absolute top-1/3 left-5 2xl:left-1 lg:w-1/6 sm:hidden "
        alt="bania"
      />
      <img
        src={Image3}
        className="w-[180px] absolute bottom-8 right-60 2xl:right-36 2xl:w-[150px]  lg:w-[130px] lg:h-[130px] lg:object-cover lg:right-12 sm:right-2"
        alt="mountains-friends"
      />
      <img
        src={Image4}
        className="w-[180px] absolute top-8 right-60 2xl:right-36 2xl:w-[150px] lg:w-[130px] lg:h-[130px] object-cover lg:right-12 sm:right-2 "
        alt="forest"
      />
      <img
        src={Image5}
        className="w-[180px] absolute bottom-8 left-60 2xl:left-40 lg:w-[150px] lg:h-[150px] lg:object-cover  lg:left-12 sm:left-2"
        alt="hytte"
      />
      <img
        src={Image6}
        className="w-[180px] absolute top-8 left-60 2xl:left-40 lg:w-[150px] lg:h-[150px]  lg:left-12 sm:left-2"
        alt="mountains"
      />
      <img
        src={Image7}
        className="w-[180px] absolute top-2 left-1/3 lg:left-[40%] xl:h-1/5    sm:hidden"
        alt="outdoor-bath"
      />
       <img
        src={Image8}
        className="w-[180px] absolute top-2 right-1/3 xl:h-1/4  lg:hidden  "
        alt="outdoor-bath"
      />
       <img
        src={Image9}
        className="w-[180px] absolute bottom-8 right-1/3 lg:right-[40%] xl:h-1/6 xl:object-cover sm:hidden "
        alt="outdoor-bath"
      />
        <img
        src={Image10}
        className="w-[180px] absolute bottom-8 left-1/3 lg:hidden"
        alt="outdoor-bath"
      />
      <div className="flex flex-col w-3/6 gap-2  lg:w-2/3 lg:px-5 sm:w-[98%] sm:px-0">
        <h2 className="text-4xl font-bold  xl:text-3xl sm:text-2xl xs:text-lg ">
          Opplev fantastiske naturskj??nnhet <br />
          for b??de actionfylte eventyr og rolige ferier!
        </h2>
        <p className="font-semibold text-xl xl:text-lg sm:font-normal">
          Bli med p?? en reise gjennom Norges mest idylliske destinasjoner.
          Uansett om du er en livsglad person som elsker ?? sykle og utforske
          fjellvegger, eller en som s??ker ro og avslapning, har vi noe for deg.
          Omgitt av den vakreste natur, vil du kunne slappe av og nyte livet i
          sin helhet. Du vil ogs?? oppdage spennende steder hvor du kan nyte
          fantastisk mat, noe som vil gi b??de kropp og sjel en velfortjent
          pause.
        </p>
      </div>
    </div>
  );
};

export default AboutDestinations;
