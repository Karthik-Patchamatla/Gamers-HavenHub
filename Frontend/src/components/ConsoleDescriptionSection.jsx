import React from "react";
import underlineImage from "../assets/underline.png";

const ConsoleDescriptionSection = ({
  title,
  description,
  title1,
  featured1,
  featured2,
  featured3,
  title2,
  included1,
  included2,
  included3,
  included4,
  included5,
  included6,
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
    <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>

    {/* Features Section */}
    <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-white">
      {title1}
    </h2>
    <img
      src={underlineImage}
      alt="Underline"
      className="w-16 md:w-20 h-auto mb-4"
    />
    <ul className="space-y-4">
      <li className="flex items-start">
        <span className="text-lg text-white mr-2">-</span>
        <span className="text-gray-300">{featured1}</span>
      </li>
      <li className="flex items-start">
        <span className="text-lg text-white mr-2">-</span>
        <span className="text-gray-300">{featured2}</span>
      </li>
      <li className="flex items-start">
        <span className="text-lg text-white mr-2">-</span>
        <span className="text-gray-300">{featured3}</span>
      </li>
    </ul>

    {/* Included Section */}
    <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-2 text-white">
      {title2}
    </h2>
    <img
      src={underlineImage}
      alt="Underline"
      className="w-16 md:w-20 h-auto mb-4"
    />
    <ul className="space-y-4">
      <li className="flex items-start">
        <span className="text-lg text-white mr-2">-</span>
        <span className="text-gray-300">{included1}</span>
      </li>
      <li className="flex items-start">
        <span className="text-lg text-white mr-2">-</span>
        <span className="text-gray-300">{included2}</span>
      </li>
      <li className="flex items-start">
        <span className="text-lg text-white mr-2">-</span>
        <span className="text-gray-300">{included3}</span>
      </li>
      <li className="flex items-start">
        <span className="text-lg text-white mr-2">-</span>
        <span className="text-gray-300">{included4}</span>
      </li>
      <li className="flex items-start">
        <span className="text-lg text-white mr-2">-</span>
        <span className="text-gray-300">{included5}</span>
      </li>
      <li className="flex items-start">
        <span className="text-lg text-white mr-2">-</span>
        <span className="text-gray-300">{included6}</span>
      </li>
    </ul>
  </div>
);

export default ConsoleDescriptionSection;
