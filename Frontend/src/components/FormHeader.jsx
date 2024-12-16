import React from 'react';
import logo from "../assets/logo.png";

function FormHeader({ title, subtitle }) {
  return (
    <div className="text-center mb-6">
      <img src={logo} alt="Gamer's Haven Logo" />
      <h1 className="text-white text-xl font-semibold">{title}</h1>
      <p className="text-gray-400">{subtitle}</p>
    </div>
  );
}

export default FormHeader;
