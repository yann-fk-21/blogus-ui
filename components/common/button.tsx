import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ onClick, children, type }: ButtonProps) {
  return (
    <React.Fragment>
      <button
        type={type}
        onClick={onClick}
        className="px-6 py-2 rounded-lg bg-gray-900 text-white text-sm hover:bg-gray-800 transition-all ease-in-out"
      >
        {children}
      </button>
    </React.Fragment>
  );
}
