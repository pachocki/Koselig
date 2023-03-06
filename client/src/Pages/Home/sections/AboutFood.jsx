import React from "react";
import Image from "../../../assets/food.png"

const AboutFood = () => {
  return (
    <div className="bg-gray-50 relative py-10">
        <div className="grid grid-cols-2  items-center justify-center  gap-20 xl:gap-6 max-w-[1400px] mx-auto lg:gap-1 xs:grid-cols-[2fr_1fr]">
      <div className="w-full px-5 md:px-2">
        <h2 className="text-4xl font-serif pb-5 lg:text-3xl md:text-2xl sm:font-semibold sm:text-xl font-bold ">
          "Nyt smaken: En velsmakende behandling for hver smakssans"
        </h2>
        <p className="text-2xl lg:text-xl md:text-lg sm:text-base ">
          Nyt smaken av lokale skatter og oppdag nye smaker med hver bit. Vår
          mat lages kun med de aller fresheste og mest autentiske ingrediensene,
          noe som sikrer en virkelig unik spiseopplevelse. Fra den første smaken
          vil du bli transportert til en verden av uventede og velsmakende
          smaker. Så kom og bli med oss på en kulinarisk reise, hvor hvert
          måltid er en ny oppdagelse i smak. Alle våre steder vil tilby denne
          unike opplevelsen.
        </p>
      </div>
      <div className="flex justify-start ">
        <img src={Image} alt="food" className="w-full h-screen object-cover shadow-xl"/>
      </div>
    </div>
    </div>
  );
};

export default AboutFood;
