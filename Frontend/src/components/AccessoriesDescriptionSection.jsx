import React from "react";
import underlineImage from "../assets/underline.png";

const AccessoriesDescriptionSection = ({
  title,
  description1,
  description2,
  description3,
  description4,
  title1,
  warranty,
}) => (
  <div className="mt-10">
    {/* Title and Description */}
    <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-white">
      {title}
    </h2>
    <img
      src={underlineImage}
      alt="Underline"
      className="w-16 md:w-20 h-auto mb-4"
    />
    <ul className="space-y-4">
      <li className="flex items-start">
        <span className="text-lg text-white mr-2">-</span>
        <span className="text-gray-300">{description1}</span>
      </li>
      <li className="flex items-start">
        <span className="text-lg text-white mr-2">-</span>
        <span className="text-gray-300">{description2}</span>
      </li>
      <li className="flex items-start">
        <span className="text-lg text-white mr-2">-</span>
        <span className="text-gray-300">{description3}</span>
      </li>
      <li className="flex items-start">
        <span className="text-lg text-white mr-2">-</span>
        <span className="text-gray-300">{description4}</span>
      </li>
    </ul>

    {/* Title and Description */}
    <h2 className="text-2xl mt-6 md:text-3xl font-semibold mb-2 text-white">
      {title1}
    </h2>
    <img
      src={underlineImage}
      alt="Underline"
      className="w-16 md:w-20 h-auto mb-4"
    />
    <p className="text-gray-300 mb-6 leading-relaxed">{warranty}</p>
  </div>
);

export default AccessoriesDescriptionSection;
