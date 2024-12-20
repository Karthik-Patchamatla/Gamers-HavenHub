import React from "react";

const FeaturesCard = ({ imageSrc, title, description }) => (
  <div className="flex md:flex-col gap-4 items-start bg-[#151515] p-6 rounded-lg border-[1px] border-[#25802e] text-left">
    <div>
      <img src={imageSrc} alt={title} className="w-12 h-12" />
    </div>
    <div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  </div>
);

export default FeaturesCard;
