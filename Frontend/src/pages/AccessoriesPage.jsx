import React from "react";
import AccessoriesTempate from "../components/AccessoriesTemplate";
import underlineImage from '../assets/underline.png';

function AccessoriesPage() {
    return (
        <div className="w-full mt-10 px-5 md:px-12 lg:px-44 text-white h-auto bg-[#121212]">
      <div className="mb-6">
          <h2 className="text-2xl font-semibold">Accessories</h2>
          <img
            src={underlineImage}
            alt="Underline"
            className="w-16 md:w-30 h-auto mt-2"
          />
        </div>
      <AccessoriesTempate platform="Accessories" />
    </div>
    );
}

export default AccessoriesPage;