import React from "react";
import Region from "../../../components/Region";
import Image from "../../../assets/prekistolen.png";
import Image1 from "../../../assets/trondelag.png";
import Image2 from "../../../assets/kristiansand.png";
import Image3 from "../../../assets/nord-norge.png";
import Image4 from "../../../assets/oslo.png";

const Regions = () => {
  return (
    <div className="bg-zinc-600 h-screen pt-10 flex flex-col justify-center sm:h-full sm:pb-10  overflow-hidden max-w-100%">
      <Region
        title="Vestland"
        region="Møre og Romsdal,Vestland,Rogaland"
        number="(30)"
        border="border-y"
        image={Image}
      />
      <Region
        title="Trøndelag"
        region="Trondheim,Steinkjer,Namsos"
        number="(20)"
        border="border-b"
        image={Image1}
      />
      <Region
        title="Sørlandet"
        region="Kristiansand, 
        Arendal, 
        Grimstad, 
        Flekkefjord, 
        Farsund "
        number="(35)"
        border="border-b"
        image={Image2}
      />
      <Region
        title="Nord-Noreg"
        region="Tromsø, Mo i Rana, Bodø, Narwik"
        number="(45)"
        border="border-b"
        image={Image3}
      />
      <Region
        title="Østlandet"
        region="Innlandet
        Oslo 
        Vestfold og Telemark
        Viken"
        number="(55)"
        border="border-b"
        image={Image4}
      />
    </div>
  );
};

export default Regions;
