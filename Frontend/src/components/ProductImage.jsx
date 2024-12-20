import React from "react";

const ProductImage = ({ src, alt }) => (
  <div className="h-96 w-full flex items-center justify-center overflow-hidden rounded-lg">
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-full object-contain"
    />
  </div>
);


export default ProductImage;
