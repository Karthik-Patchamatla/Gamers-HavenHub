import React from "react";
import underlineImage from "../assets/underline.png";

const DescriptionSection = ({ title, content }) => (
  <div className="mt-10">
    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-300">{content}</p>
  </div>
);

export default DescriptionSection;
