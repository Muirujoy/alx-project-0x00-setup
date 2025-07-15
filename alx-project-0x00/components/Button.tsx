import React from "react";

interface ButtonProps {
  title: string;
  style?: string; // This will accept Tailwind classes like "rounded-sm"
}

const Button: React.FC<ButtonProps> = ({ title, style }) => {
  return (
    <button className={`bg-blue-500 text-white px-4 py-2 ${style}`}>
      {title}
    </button>
  );
};

export default Button;
