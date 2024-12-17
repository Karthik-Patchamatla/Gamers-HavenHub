import React from "react";
import Hero from "../components/Hero";
import BestSellers from "../components/BestSellers";
import Brands from "../components/Brands";
import Consoles from "../components/Consoles";
import PCHardwares from "../components/PCHardwares";

function HomePage() {
  return (
    <div>
      <Hero />
      <BestSellers />
      <Brands />
      <Consoles />
      <PCHardwares />
    </div>
  );
}

export default HomePage;
