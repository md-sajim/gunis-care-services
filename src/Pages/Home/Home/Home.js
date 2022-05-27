import React from "react";
import Catousel from "../Carousel/Catousel";
import Experts from "../Experts/Experts";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Catousel></Catousel>
      <Services></Services>
      <Experts></Experts>
    </div>
  );
};

export default Home;
