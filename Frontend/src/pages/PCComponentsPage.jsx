import React from "react";
import ComponentsTemplate from "../components/ComponentsTemplate";
import underlineImage from '../assets/underline.png';

function PCComponentsPage() {
    return(
        <div className="w-full mt-10 px-5 md:px-12 lg:px-44 text-white h-auto bg-[#121212]">
        <div className="mb-6">
            <h2 className="text-2xl text-white font-semibold">PC Components</h2>
            <img
              src={underlineImage}
              alt="Underline"
              className="w-16 md:w-30 h-auto mt-2"
            />
          </div>
        <ComponentsTemplate platform="PCComponents" />
      </div>
    )
}

export default PCComponentsPage;