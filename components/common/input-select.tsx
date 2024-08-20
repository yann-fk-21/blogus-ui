import React from 'react';

interface InputProps {
  label: string;
}

export default function inputSelect({ label }: InputProps) {
  return (
    <React.Fragment>
      <div>
        <label htmlFor="input-select">{label}</label>
        <select
          id="input-select"
          className="w-full text-gray-600 rounded-lg border border-gray-300 px-3 py-2 h-12 focus:outline-2 focus:outline-gray-300 focus:transition-all focus:ease-in-out focus:duration-500"
        >
          <option value="1">Politics</option>
          <option value="2">Culture</option>
          <option value="3">Sport</option>
        </select>
      </div>
    </React.Fragment>
  );
}
