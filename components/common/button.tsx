import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <React.Fragment>
      <button
        onClick={onClick}
        className="px-6 py-2 rounded-lg bg-gray-900 text-white text-sm hover:bg-gray-800 transition-all ease-in-out"
      >
        {children}
      </button>
    </React.Fragment>
  );
}
