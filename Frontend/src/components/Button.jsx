import React from 'react';

function Button({ type, text, onClick }) {
  return (
    <button
      type={type}
      className="w-full py-2 bg-[#28702f] text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
