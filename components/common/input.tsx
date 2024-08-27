import React from 'react';

interface InputProps {
  label: string;
  inputType: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function input({
  label,
  inputType,
  placeholder,
  onChange,
}: InputProps) {
  return (
    <React.Fragment>
      <div>
        <label htmlFor={label}>{label}</label>
        <input
          onChange={onChange}
          className="w-full text-gray-600 rounded-lg border border-gray-300 px-3 py-2 h-12 focus:outline-2 focus:outline-gray-300 focus:transition-all focus:ease-in-out focus:duration-500"
          type={inputType}
          placeholder={placeholder}
        />
      </div>
    </React.Fragment>
  );
}
