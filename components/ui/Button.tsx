import React from 'react';

// Define the interface for button props
interface ButtonProps {
  text: string;
  className?: string; // Optional className prop for additional styling
}

const Button: React.FC<ButtonProps> = ({ text, className }) => {
  return (
    <button
      className={`px-4 py-2 border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
