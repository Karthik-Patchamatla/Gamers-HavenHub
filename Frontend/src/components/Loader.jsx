import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loader.json";

const Loader = () => (
  <div className="flex items-center justify-center h-screen bg-[#121212]">
    <Lottie className="w-20 h-20" animationData={loadingAnimation} loop={true} />
  </div>
);

export default Loader;
