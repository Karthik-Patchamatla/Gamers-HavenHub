import React from "react";
import underlineImage from "../assets/underline.png";

const GameDescriptionSection = ({
  title,
  about,
  gametype,
  genre,
  internet,
  playable,
  platform,
  release,
  country,
  approxgameplay,
  rating,
  publisher,
  developer,
}) => (
  <div className="mt-10">
    <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-white">
      {title}
    </h2>
    {/* Underline Image */}
    <img
      src={underlineImage}
      alt="Underline"
      className="w-16 md:w-20 h-auto mb-4 ml-0"
    />
    <p className="text-gray-300 mb-6 leading-relaxed">{about}</p>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
      <li className="flex items-start">
        <span className="font-bold text-white w-32">Game Type:</span>
        <span>{gametype}</span>
      </li>
      <li className="flex items-start">
        <span className="font-bold text-white w-32">Genre:</span>
        <span>{genre}</span>
      </li>
      <li className="flex items-start">
        <span className="font-bold text-white w-32">Internet:</span>
        <span>{internet}</span>
      </li>
      <li className="flex items-start">
        <span className="font-bold text-white w-32">Playable:</span>
        <span>{playable}</span>
      </li>
      <li className="flex items-start">
        <span className="font-bold text-white w-32">Platform:</span>
        <span>{platform}</span>
      </li>
      <li className="flex items-start">
        <span className="font-bold text-white w-32">Release Date:</span>
        <span>{release}</span>
      </li>
      <li className="flex items-start">
        <span className="font-bold text-white w-32">Country:</span>
        <span>{country}</span>
      </li>
      <li className="flex items-start">
        <span className="font-bold text-white w-32">Gameplay:</span>
        <span>{approxgameplay}</span>
      </li>
      <li className="flex items-start">
        <span className="font-bold text-white w-32">Rating:</span>
        <span>{rating}</span>
      </li>
      <li className="flex items-start">
        <span className="font-bold text-white w-32">Publisher:</span>
        <span>{publisher}</span>
      </li>
      <li className="flex items-start">
        <span className="font-bold text-white w-32">Developer:</span>
        <span>{developer}</span>
      </li>
    </ul>
  </div>
);

export default GameDescriptionSection;
