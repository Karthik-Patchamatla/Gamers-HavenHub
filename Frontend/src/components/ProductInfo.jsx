import React from "react";

const ProductInfo = ({ name, price, oldPrice, discount }) => (
  <div className="text-left">
    <h1 className="text-3xl font-bold mb-4">{name}</h1>
    <p className="my-2 text-2xl font-semibold">₹ {price}</p>
    <div className="flex items-center gap-4">
      <p className="text-lg line-through text-gray-400">₹ {oldPrice}</p>
      <p className="font-semibold text-lg text-green-400">Save {discount}</p>
    </div>
    <button className="mt-6 bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg">
      ADD TO CART
    </button>
  </div>
);


export default ProductInfo;
