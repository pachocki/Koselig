import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RecomendedPlaces from "../../components/RecomendedPlaces";
import AboutDestinations from "./sections/AboutDestinations";
import AboutFood from "./sections/AboutFood";
import AboutText from "./sections/AboutText";
import Destinations from "./sections/Destinations";
import Hero from "./sections/Hero";
import Regions from "./sections/Regions";

const Home = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get("/places").then((response) => {
      setPlaces([
        ...response.data,
        ...response.data,
        ...response.data,
        ...response.data,
      ]);
    });
  }, []);
  return (
    <div className="pt-10">
      <Hero />
      <Destinations />
      <Regions />
      <AboutDestinations />
      <AboutFood />
      <RecomendedPlaces/>
      <AboutText />
     
    </div>
  );
};

export default Home;
