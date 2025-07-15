import React from "react";

interface PillProps {
  title: string;
}

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
      {title}
    </span>
  );
};

export default Pill;
