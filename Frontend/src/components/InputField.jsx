import React from 'react';

function InputField({ id, label, type, placeholder, value, onChange }) {
  return (
    <div>
      <label className="block text-[#727573] text-sm mb-1 font-bold tracking-wide" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="w-full px-4 py-2 placeholder:text-[#757575] placeholder:text-sm rounded-lg bg-[#171717] text-white focus:outline-none focus:ring-2 focus:ring-[#28702f] mb-3"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default InputField;
