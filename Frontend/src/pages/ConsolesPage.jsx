import React from "react";
import ConsolesTemplate from "../components/ConsolesTemplate";
import underlineImage from '../assets/underline.png';

function ConsolesPage() {
  return (
    <div className="w-full mt-10 px-5 md:px-12 lg:px-44 text-white h-auto bg-[#121212]">
      <div className="mb-6">
          <h2 className="text-2xl font-semibold">Consoles</h2>
          <img
            src={underlineImage}
            alt="Underline"
            className="w-16 md:w-30 h-auto mt-2"
          />
        </div>
      <ConsolesTemplate platform="Consoles" />
    </div>
  );
}

export default ConsolesPage;
