import React , {useEffect, useRef} from "react";
import Image2 from "../../../assets/hero-img.webp";
import Image1 from "../../../assets/hero-main.webp";
import { FiArrowDownLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import {gsap} from "gsap"

const Hero = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const imageRef2 = useRef(null);
  
  useEffect(() => {
    gsap.fromTo(
      [imageRef.current, textRef.current, imageRef2.current],
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);
  
  return (
    <div>
      <div className="flex justify-center items-center  ">
        <h1 className="font-serif tracking-[5rem] relative text-[22rem] m-[-50px] header 2xl:pt-10 xl:pt-14 lg:pt-20 lg:pb-7 z-20 " ref={textRef} >
          Koselig
        </h1>
      </div>
      <div className="grid grid-cols-[1fr_2fr] gap-5 mb-10 lg:gap-2 lg:mb-0 md:flex md:flex-col px-5 sm:px-2">
   
        <img src={Image1} alt="family" className="h-full object-cover md:h-[75vh]   " ref={imageRef} />
        <div>
          <img src={Image2} alt="hytte" className="h-2/3 w-full md:hidden" ref={imageRef2}/>

          <div className="w-2/3  px-5 2xl:w-5/6 lg:w-full sm:px-2">
            <div>
              <p className="text-2xl  pt-5 2xl:text-xl 2xl:pt-1 sm:text-lg">
                Livet består av bare de fineste øyeblikkene, så velg steder som
                vil vare i minnet ditt for alltid og som vil bringe frem et smil
                på ansiktet ditt, når du tenker tilbake på en hyggelig dag.
              </p>
              <p className="text-2xl 2xl:text-xl pt-5 2xl:pt-1 sm:text-lg">
                Koselig ønsker å tilfredsstille dine behov og tilbyr fantastiske
                steder med spektakulær utsikt og vakre omgivelser over hele
                Norge.
              </p>
            </div>
            <div className="mt-6">
            <Link to="/destinations">  <button className="border px-3 py-2 text-xl hover:bg-green-500 transition-all  border-black rounded-full bg-green-300 flex items-center gap-3 font-semibold lg:text-lg sm:text-sm">
                Finn din koselige plass nå <FiArrowDownLeft />
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
