import React from "react";
import Image1 from "../../../assets/couple-mountains.webp";
import Image2 from "../../../assets/bania.webp";
import Image3 from "../../../assets/friend-mountains.webp";
import Image4 from "../../../assets/couple-in-forest.webp";
import Image5 from "../../../assets/hero7.webp";
import Image6 from "../../../assets/hero6.webp";
import Image7 from "../../../assets/hero1.webp";
import Image8 from "../../../assets/hero-check.webp";
import Image9 from "../../../assets/couple.webp";
import Image10 from "../../../assets/hero2.webp";
import Image11 from "../../../assets/hero-check3.webp";
import Image12 from "../../../assets/hero-check2.webp";
const AboutDestinations = () => {
  return (
    <div className="grid grid-cols-[1fr_2fr_1fr] gap-5 py-10 px-5 xl:grid-cols-[1fr_3fr_1fr] md:grid-cols-1 sm:px-2">
      <div className="flex flex-col justify-between py-2 items-center gap-5">
        <img
          src={Image1}
          alt="destination"
          className="w-[200px] h-[200px] object-cover self-end lg:w-[150px] lg:h-[150px]  md:hidden"
        />
        <img
          src={Image2}
          alt="destination"
          className="w-[200px] h-[200px] object-cover self-end lg:w-[150px] lg:h-[150px] md:hidden "
        />
        <img
          src={Image3}
          alt="destination"
          className="w-[200px] h-[200px] object-cover self-end lg:w-[150px] lg:h-[150px] md:hidden"
        />
      </div>
      <div className="flex flex-col justify-between  gap-10 sm:gap-5">
        <div className="flex justify-around items-center md:justify-between ">
          <img
            src={Image4}
            alt="destination"
            className="w-[200px] h-[200px] object-cover  lg:w-[150px] lg:h-[150px] sm:w-[100px] sm:h-[100px] "
          />
          <img
            src={Image5}
            alt="destination"
            className="w-[200px] h-[200px] object-cover  lg:w-[150px] lg:h-[150px] xs:w-[100px] sm:h-[100px]"
          />
          <img
            src={Image6}
            alt="destination"
            className="w-[200px] h-[200px] object-cover xl:hidden md:block md:w-[150px] md:h-[150px] sm:w-[100px] sm:h-[100px]"
          />
        </div>
        <div className="py-10 md:py-0">
          <h2 className="text-4xl font-bold  xl:text-3xl sm:text-2xl xs:text-lg pb-10 sm:pb-5">
            Opplev fantastiske naturskjønnhet <br />
            for både actionfylte eventyr og rolige ferier!
          </h2>
          <p className="font-semibold text-xl xl:text-lg sm:font-normal">
            Bli med på en reise gjennom Norges mest idylliske destinasjoner.
            Uansett om du er en livsglad person som elsker å sykle og utforske
            fjellvegger, eller en som søker ro og avslapning, har vi noe for
            deg. Omgitt av den vakreste natur, vil du kunne slappe av og nyte
            livet i sin helhet. Du vil også oppdage spennende steder hvor du kan
            nyte fantastisk mat, noe som vil gi både kropp og sjel en
            velfortjent pause.
          </p>
        </div>
        <div className="flex justify-around items-center md:justify-between">
          <img
            src={Image7}
            alt="destination"
            className="w-[200px] h-[200px] object-cover  lg:w-[150px] lg:h-[150px] sm:w-[100px] sm:h-[100px]"
          />
          <img
            src={Image8}
            alt="destination"
            className="w-[200px] h-[200px] object-cover  lg:w-[150px] lg:h-[150px] xs:w-[100px] sm:h-[100px]"
          />
          <img
            src={Image9}
            alt="destination"
            className="w-[200px] h-[200px] object-cover xl:hidden md:block md:w-[150px] md:h-[150px] sm:w-[100px] sm:h-[100px]"
          />
        </div>
      </div>
      <div className="flex flex-col justify-between py-2">
        <img
          src={Image10}
          alt="destination"
          className="w-[200px] h-[200px] object-cover self-start lg:w-[150px] lg:h-[150px]  md:hidden"
        />
        <img
          src={Image11}
          alt="destination"
          className="w-[200px] h-[200px] object-cover self-start lg:w-[150px] lg:h-[150px] md:hidden "
        />
        <img
          src={Image12}
          alt="destination"
          className="w-[200px] h-[200px] object-cover self-start md:hidden"
        />
      </div>
    </div>
  );
};

export default AboutDestinations;
